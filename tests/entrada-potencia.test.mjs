/*
 * Potência estimada da entrada: marcador de edição manual (types, padrão e validação do servidor).
 * Rodar: node tests/entrada-potencia.test.mjs
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
const { entradaPadrao } = loadTs(resolve(ROOT, 'lib/entrada-calc.ts'));
const { exigirDados } = loadTs(resolve(ROOT, 'lib/server/rota.ts'));
const { calcularMateriais } = loadTs(resolve(ROOT, 'lib/server/calc-materiais.ts'));
const { calcTotais } = loadTs(resolve(ROOT, 'lib/server/calculator.ts'));
const { ROOM_TEMPLATES } = loadTs(resolve(ROOT, 'lib/templates.ts'));
const room = ROOM_TEMPLATES.find((x) => x.label === 'Quarto típico').create();
const dados = (entrada) => ({ imovel: 'Casa', obra: 'Reforma', cobertura: 'Laje', rede: 'Bifásico', rooms: [room], equips: [], ...(entrada ? { entrada } : {}) });

t('padrão: potência nasce automática (potenciaManual=false) e vazia', () => {
  const e = entradaPadrao();
  assert.equal(e.potenciaManual, false);
  assert.equal(e.potenciaDemandada, '');
});
t('servidor aceita potenciaManual verdadeiro/falso/ausente', () => {
  for (const v of [true, false, undefined]) {
    const { potenciaManual, ...resto } = { ...entradaPadrao(), potenciaManual: v };
    exigirDados(dados(v === undefined ? resto : { ...resto, potenciaManual: v }), false);
  }
});
t('servidor recusa potenciaManual que não seja booleano', () => {
  for (const v of ['sim', 1, {}, []]) assert.throws(() => exigirDados(dados({ ...entradaPadrao(), potenciaManual: v }), false));
});
t('orçamento antigo (entrada sem potenciaManual) continua válido e calcula igual', () => {
  const { potenciaManual, ...antiga } = entradaPadrao();
  const a = calcTotais(exigirDados(dados(antiga), false));
  const b = calcTotais(exigirDados(dados({ ...antiga, potenciaManual: false, potenciaDemandada: '3.7' }), false));
  assert.deepEqual(a, b); // a potência estimada só orienta a tela; o cálculo do servidor usa a carga real
  assert.deepEqual(calcularMateriais(dados(antiga)).materiais.length, calcularMateriais(dados({ ...antiga, potenciaDemandada: '3.7' })).materiais.length);
});
console.log(`\n${ok} testes OK`);
