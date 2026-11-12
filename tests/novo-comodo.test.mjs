/*
 * Novo cômodo (lib/novo-comodo.ts): nome único, medidas válidas e tomadas pela NBR 5410 ao criar.
 * Rodar: node tests/novo-comodo.test.mjs
 */
import { createRequire } from 'node:module';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Module from 'node:module';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const cache = new Map();
function loadTs(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const out = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  const m = new Module(file);
  m.filename = file;
  cache.set(file, m);
  m.require = (spec) => {
    if (!spec.startsWith('.') && !spec.startsWith('@/')) return require(spec);
    const base = spec.startsWith('@/') ? resolve(ROOT, spec.slice(2)) : resolve(dirname(file), spec);
    for (const c of [base + '.ts', base + '.tsx', resolve(base, 'index.ts')]) if (existsSync(c)) return loadTs(c);
    throw new Error(`não achei ${spec} a partir de ${file}`);
  };
  m._compile(out, file);
  return m.exports;
}


const mem = new Map();
globalThis.window = globalThis;
globalThis.localStorage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
let ok = 0;
const t = (nome, fn) => { fn(); ok++; console.log('✓', nome); };
const { useStore } = loadTs(resolve(ROOT, 'lib/store-cliente.ts'));
const { ROOM_TEMPLATES } = loadTs(resolve(ROOT, 'lib/templates.ts'));
const { criarComodo, nomeUnico } = loadTs(resolve(ROOT, 'lib/novo-comodo.ts'));
const S = () => useStore.getState();
const tpl = (l) => ROOM_TEMPLATES.find((x) => x.label === l);

t('nomeUnico: repete com número, sem colidir', () => {
  assert.equal(nomeUnico('Quarto', []), 'Quarto');
  assert.equal(nomeUnico('Quarto', ['Quarto']), 'Quarto 2');
  assert.equal(nomeUnico('Quarto', ['Quarto', 'Quarto 2', 'Quarto 3']), 'Quarto 4');
});
t('criarComodo: usa o nome do modelo e deduplica', () => {
  const r = criarComodo(tpl('Quarto típico'), [{ nome: 'Quarto' }]);
  assert.equal(r.nome, 'Quarto 2');
});
t('criarComodo: nome digitado vale e também é deduplicado; espaços são ignorados', () => {
  assert.equal(criarComodo(tpl('Quarto típico'), [], { nome: '  Quarto do bebê ' }).nome, 'Quarto do bebê');
  assert.equal(criarComodo(tpl('Quarto típico'), [{ nome: 'Escritório' }], { nome: 'Escritório' }).nome, 'Escritório 2');
});
t('criarComodo: só medidas positivas e razoáveis entram', () => {
  const ok1 = criarComodo(tpl('Sala típica'), [], { c: '4,5', l: '3' });
  assert.equal(ok1.c, '4.5'); assert.equal(ok1.l, '3');
  for (const ruim of ['-3', '0', 'abc', '', '99999']) {
    const r = criarComodo(tpl('Sala típica'), [], { c: ruim, l: ruim });
    assert.equal(r.c, ''); assert.equal(r.l, '');
  }
});
t('cada chamada gera ids novos (não reaproveita pontos do modelo)', () => {
  const a = criarComodo(tpl('Quarto típico'), []), b = criarComodo(tpl('Quarto típico'), []);
  assert.notEqual(a.id, b.id);
  assert.notEqual(a.pontos[0].id, b.pontos[0].id);
  assert.notEqual(a.luzes[0].id, b.luzes[0].id);
});
t('criado com medidas grandes, o cômodo já nasce com as tomadas da norma (quarto 8×8 → 7)', () => {
  S().resetState();
  const r = criarComodo(tpl('Quarto típico'), S().rooms, { c: '8', l: '8' });
  S().addRoom(r);
  const salvo = S().rooms.find((x) => x.id === r.id);
  assert.equal(salvo.pontos.length, 7);
  assert.equal(salvo.pontos.filter((p) => p.auto).length, 4);
});
t('criado sem medidas, mantém as tomadas do modelo (não inventa)', () => {
  S().resetState();
  const r = criarComodo(tpl('Quarto típico'), S().rooms);
  S().addRoom(r);
  assert.equal(S().rooms[0].pontos.length, 3);
});
t('dois cômodos do mesmo modelo coexistem sem misturar pontos', () => {
  S().resetState();
  S().addRoom(criarComodo(tpl('Quarto típico'), S().rooms, { c: '8', l: '8' }));
  S().addRoom(criarComodo(tpl('Quarto típico'), S().rooms));
  assert.deepEqual(S().rooms.map((r) => r.nome), ['Quarto', 'Quarto 2']);
  assert.deepEqual(S().rooms.map((r) => r.pontos.length), [7, 3]);
  const ids = S().rooms.flatMap((r) => r.pontos.map((p) => p.id));
  assert.equal(new Set(ids).size, ids.length);
});
console.log(`\n${ok} testes OK`);
