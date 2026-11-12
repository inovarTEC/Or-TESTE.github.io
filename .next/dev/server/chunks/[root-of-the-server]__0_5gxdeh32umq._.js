module.exports = [
(()=>{"use strict";return[
"[project]/app/api/calcular/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calculator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/server/calculator.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calc$2d$materiais$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/server/calc-materiais.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/pedido.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$mercadopago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/mercadopago.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/rota.ts [app-route] (ecmascript)");
;
;
;
;
;
const runtime = 'nodejs';
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rota"])('calcular', async (req)=>{
    const corpo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lerCorpo"])(req);
    // Estrutura e números são validados; completude não (as pendências aparecem na prévia).
    const dados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exigirDados"])(corpo?.dados, false);
    let resultado;
    try {
        resultado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calc$2d$materiais$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcularMateriais"])(dados);
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ErroApi"](422, 'calculo_falhou', e);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ok"])({
        valor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$mercadopago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preco"])(),
        totais: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calculator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcTotais"])(dados),
        pendencias: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calculator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcPendencias"])(dados),
        resumo: {
            nCircuitos: resultado.circuitos.length,
            nMateriais: resultado.materiais.length
        },
        // Padrão de entrada (DIS-NOR-030): demanda, categoria, disjuntor geral e tensão da localidade.
        entrada: {
            demandaKva: resultado.quadro.demandaKva,
            categoria: resultado.quadro.categoria,
            disjuntorGeralA: resultado.quadro.disjuntorGeralA,
            sistema: resultado.quadro.sistema,
            uf: resultado.quadro.uf ?? null
        }
    });
});
}),
"[project]/lib/aterramento-calc.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Regras da Etapa 8 — aterramento principal (usado pelo wizard e pela prévia no servidor). */ __turbopack_context__.s([
    "aterramentoPadrao",
    ()=>aterramentoPadrao,
    "avisosAterramento",
    ()=>avisosAterramento,
    "materiaisAterramento",
    ()=>materiaisAterramento
]);
function aterramentoPadrao() {
    return {
        nHastes: 3,
        comprimentoHaste: '2.4',
        nCaixasInspecao: 1,
        bitolaCabo: '6',
        distancia: '',
        obs: ''
    };
}
function materiaisAterramento(a) {
    const dist = parseFloat(a.distancia) || 0;
    const comp = a.comprimentoHaste.replace('.', ',');
    const items = [
        {
            descricao: `Haste de aterramento ${comp} m`,
            qtd: a.nHastes,
            unidade: 'un',
            mostrarNaPrevia: true
        },
        {
            descricao: 'Conector de haste de aterramento',
            qtd: a.nHastes,
            unidade: 'un',
            mostrarNaPrevia: true
        },
        {
            descricao: 'Caixa de inspeção de aterramento',
            qtd: a.nCaixasInspecao,
            unidade: 'un',
            mostrarNaPrevia: true
        }
    ];
    // Cabo: reservado ao PDF (a prévia gratuita não mostra bitola).
    if (dist > 0) {
        items.push({
            descricao: `Cabo ${a.bitolaCabo} mm² (aterramento principal)`,
            qtd: Math.ceil(dist * 1.1),
            unidade: 'm',
            mostrarNaPrevia: false
        });
    }
    return items;
}
function avisosAterramento(a) {
    const avisos = [];
    if (!a.distancia) avisos.push({
        tipo: 'aviso',
        msg: 'Informe a distância até o ponto de aterramento para calcular o cabo.'
    });
    if (a.nHastes < 3) avisos.push({
        tipo: 'info',
        msg: 'A proposta padrão usa 3 hastes. Consulte um eletricista para validar o número adequado.'
    });
    if (a.nCaixasInspecao < 1) avisos.push({
        tipo: 'aviso',
        msg: 'É necessária ao menos 1 caixa de inspeção.'
    });
    return avisos;
}
}),
"[project]/lib/circuitos-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== Divisão de circuitos — config e classificação dos cômodos (sem fórmulas; seguro no navegador) ===== */ __turbopack_context__.s([
    "classeCircuito",
    ()=>classeCircuito,
    "configPadrao",
    ()=>configPadrao,
    "podarConfig",
    ()=>podarConfig
]);
const configPadrao = ()=>({
        modo: 'norma',
        unico: [],
        grupos: []
    });
const sem = (t)=>(t ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function classeCircuito(r) {
    const t = sem(`${r?.base ?? ''} ${r?.nome ?? ''}`);
    if (/cozinha|copa|servico|lavanderia/.test(t)) return 'servico';
    if (/banheiro|lavabo|garagem|varanda|externa|quintal|piscina|terraco/.test(t)) return 'isolado';
    return 'comum';
}
function podarConfig(cfg, rooms) {
    const base = cfg && typeof cfg === 'object' ? cfg : configPadrao();
    const ids = new Set((rooms ?? []).map((r)=>r?.id));
    const grupos = [];
    for (const g of base.grupos ?? []){
        const rs = [], ds = [];
        (g?.rooms ?? []).forEach((id, i)=>{
            if (ids.has(id)) {
                rs.push(id);
                ds.push(rs.length === 1 ? '' : String(g?.dists?.[i] ?? ''));
            }
        });
        if (rs.length >= 2) grupos.push({
            id: String(g.id),
            rooms: rs,
            dists: ds,
            ...g.unico ? {
                unico: true
            } : {}
        });
    }
    return {
        modo: base.modo ?? 'norma',
        unico: (base.unico ?? []).filter((id)=>ids.has(id)),
        grupos
    };
}
}),
"[project]/lib/entrada-calc.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Regras da Etapa 7 — entrada / alimentador principal (usado pelo wizard e pela prévia no servidor). */ __turbopack_context__.s([
    "LIMIAR_PERCURSO_AVISO",
    ()=>LIMIAR_PERCURSO_AVISO,
    "avisosEntrada",
    ()=>avisosEntrada,
    "entradaPadrao",
    ()=>entradaPadrao,
    "materiaisEntrada",
    ()=>materiaisEntrada,
    "sugerirDiametro",
    ()=>sugerirDiametro,
    "tensaoDoSistema",
    ()=>tensaoDoSistema,
    "tipoEletrodutoPadrao",
    ()=>tipoEletrodutoPadrao
]);
const LIMIAR_PERCURSO_AVISO = 30; // metros
function entradaPadrao() {
    return {
        tipoEntrada: 'aerea',
        poste: 'nao-tem',
        sistema: 'monofasico',
        sistemaManual: false,
        bitola: '6',
        bitolaManual: false,
        diametroEletroduto: '1',
        diametroManual: false,
        tipoEletroduto: 'rigido',
        percurso: '',
        tensao: '220',
        potenciaDemandada: '',
        obs: ''
    };
}
function sugerirDiametro(sistema) {
    return sistema === 'trifasico' ? '1-1/4' : '1';
}
function tipoEletrodutoPadrao(t) {
    return t === 'parede' ? 'flexivel' : 'rigido';
}
function tensaoDoSistema(s, sistemaTensao) {
    if (sistemaTensao === '220/127') return s === 'monofasico' ? '127' : '220';
    return s === 'trifasico' ? '380' : '220';
}
function acessoriosPoste(tubos) {
    return [
        {
            descricao: 'Tubo eletroduto (3 m) para poste',
            qtd: tubos,
            unidade: 'un',
            mostrarNaPrevia: true
        },
        {
            descricao: 'Curva 90° para eletroduto',
            qtd: 1,
            unidade: 'un',
            mostrarNaPrevia: true
        },
        {
            descricao: 'Curva 180° para eletroduto',
            qtd: 1,
            unidade: 'un',
            mostrarNaPrevia: true
        },
        {
            descricao: 'Luva de rosca para eletroduto',
            qtd: 4,
            unidade: 'un',
            mostrarNaPrevia: true
        },
        {
            descricao: 'Abraçadeira de aço para eletroduto no poste',
            qtd: 1,
            unidade: 'un',
            mostrarNaPrevia: true
        }
    ];
}
function materiaisEntrada(e) {
    const items = [];
    const percurso = parseFloat(e.percurso) || 0;
    if (e.poste === '6m') items.push(...acessoriosPoste(2));
    if (e.poste === '7m') items.push(...acessoriosPoste(3));
    // Eletroduto do percurso (só quando não é aérea); a descrição segue o tipo escolhido.
    if (e.tipoEntrada !== 'aerea' && percurso > 0) {
        const descTipo = e.tipoEletroduto === 'rigido' ? 'Eletroduto rígido' : 'Eletroduto flexível corrugado';
        const diam = e.diametroEletroduto;
        if (e.unidadeEletroduto === 'peca3m') {
            const barras = Math.ceil(percurso * 1.1 / 3);
            items.push({
                descricao: `${descTipo} ${diam}" (barra 3 m) para alimentador`,
                qtd: barras,
                unidade: barras === 1 ? 'barra' : 'barras',
                mostrarNaPrevia: true
            });
            items.push({
                descricao: `Luva ${diam}"`,
                qtd: Math.max(0, barras - 1),
                unidade: 'un',
                mostrarNaPrevia: true
            });
            items.push({
                descricao: `Curva 90° ${diam}"`,
                qtd: 2,
                unidade: 'un',
                mostrarNaPrevia: true
            });
        } else {
            items.push({
                descricao: `${descTipo} ${diam}" para alimentador`,
                qtd: Math.ceil(percurso * 1.1),
                unidade: 'm',
                mostrarNaPrevia: true
            });
        }
        items.push({
            descricao: `Kit fita/fixação eletroduto ${diam}"`,
            qtd: 1,
            unidade: 'kit',
            mostrarNaPrevia: true
        });
    }
    // Cabo: reservado ao PDF (a prévia gratuita não mostra bitola nem disjuntor).
    const nCondutores = e.sistema === 'trifasico' ? 5 : 3;
    items.push({
        descricao: `Cabo ${e.bitola} mm² isolação 1 kV (alimentador)`,
        qtd: Math.ceil(percurso * nCondutores * 1.1),
        unidade: 'm',
        mostrarNaPrevia: false
    });
    // Disjuntor geral: lançado uma única vez em calc-materiais, pela categoria de atendimento (DIS-NOR-030).
    const caixaTipo = e.sistema === 'monofasico' ? 'Monofásica' : e.sistema === 'bifasico' ? 'Bifásica' : 'Trifásica';
    items.push({
        descricao: `Caixa padrão concessionária ${caixaTipo}`,
        qtd: 1,
        unidade: 'un',
        mostrarNaPrevia: true
    });
    items.push({
        descricao: 'Haste de aterramento 1,5 m',
        qtd: 1,
        unidade: 'un',
        mostrarNaPrevia: true
    });
    items.push({
        descricao: 'Conector de haste de aterramento',
        qtd: 1,
        unidade: 'un',
        mostrarNaPrevia: true
    });
    items.push({
        descricao: 'Caixa de inspeção de aterramento',
        qtd: 1,
        unidade: 'un',
        mostrarNaPrevia: true
    });
    return items;
}
function avisosEntrada(e) {
    const avisos = [];
    const percurso = parseFloat(e.percurso) || 0;
    if (!e.percurso) avisos.push({
        tipo: 'aviso',
        msg: 'Informe o percurso da entrada para calcular os materiais.'
    });
    if (percurso > LIMIAR_PERCURSO_AVISO && e.bitola === '6' && !e.bitolaManual) avisos.push({
        tipo: 'aviso',
        msg: `Percurso de ${percurso} m: considere aumentar a bitola para 10 mm².`
    });
    if (e.tipoEntrada !== 'aerea' && e.sistema === 'trifasico' && e.diametroEletroduto !== '1-1/4' && !e.diametroManual) avisos.push({
        tipo: 'aviso',
        msg: 'Sistema trifásico: diâmetro recomendado é 1¼".'
    });
    if (e.tipoEntrada === 'subterranea' && e.tipoEletroduto !== 'rigido') avisos.push({
        tipo: 'aviso',
        msg: 'Entrada subterrânea requer eletroduto rígido.'
    });
    if (e.tipoEntrada === 'parede' && e.tipoEletroduto !== 'flexivel') avisos.push({
        tipo: 'aviso',
        msg: 'Entrada pela parede recomenda eletroduto flexível corrugado.'
    });
    return avisos;
}
}),
"[project]/lib/limpeza.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== Limpeza de itens órfãos =====
 * Rede de segurança: descarta o que ficou sem função, para nunca virar material na prévia nem no PDF.
 *  - ponto de tomada sem nenhum módulo (a caixa dele contaria no orçamento)
 *  - interruptor sem luz e sem tomada na placa (caixa e placa contariam)
 *  - referência a luz que não existe mais
 *  - rota "via" apontando para cômodo removido
 *  - equipamento ligado a um cômodo que não existe mais (room vazio é permitido: "só no total geral")
 * Função pura: não altera o objeto recebido. Usada no servidor (exigirDados) e ao carregar do navegador.
 */ __turbopack_context__.s([
    "comandoTemTomada",
    ()=>comandoTemTomada,
    "limparOrfaos",
    ()=>limparOrfaos
]);
const comandoTemTomada = (c)=>!!c?.comTomada || (c?.sws ?? []).some((sw)=>!!sw?.tom);
function limparRoom(r, ids) {
    const luzIds = new Set((r?.luzes ?? []).map((l)=>l?.id));
    const pontos = (r?.pontos ?? []).filter((p)=>(p?.mods ?? []).length > 0);
    const comandos = (r?.comandos ?? []).map((c)=>({
            ...c,
            luzes: (c?.luzes ?? []).filter((id)=>luzIds.has(id))
        })).filter((c)=>c.luzes.length > 0 || comandoTemTomada(c));
    return {
        ...r,
        pontos,
        comandos,
        via: r?.via && !ids.has(r.via) ? '' : r?.via ?? ''
    };
}
function limparOrfaos(d) {
    const rooms = d?.rooms ?? [];
    const ids = new Set(rooms.map((r)=>r?.id));
    const out = {
        ...d,
        rooms: rooms.map((r)=>limparRoom(r, ids))
    };
    if (d?.equips) out.equips = d.equips.filter((e)=>!e?.room || ids.has(e.room));
    return out;
}
}),
"[project]/lib/motor/demanda.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== Entrada de energia — DIS-NOR-030 REV 05 (Neoenergia) como padrão de referência ===== */ __turbopack_context__.s([
    "CATEGORIAS",
    ()=>CATEGORIAS,
    "POTENCIA_MEDIA_W",
    ()=>POTENCIA_MEDIA_W,
    "calcularDemanda",
    ()=>calcularDemanda,
    "cargaIluminacaoW",
    ()=>cargaIluminacaoW,
    "cargaTomadasW",
    ()=>cargaTomadasW,
    "categoriaAtendimento",
    ()=>categoriaAtendimento,
    "fatorTabela10",
    ()=>fatorTabela10,
    "fatorTabela12",
    ()=>fatorTabela12,
    "fatorTabela6",
    ()=>fatorTabela6,
    "fatorTabela7",
    ()=>fatorTabela7,
    "fatorTabela8",
    ()=>fatorTabela8,
    "fatorTabela9",
    ()=>fatorTabela9
]);
/** DIS-NOR-030 6.26 Tabela 5: [área máx (m²), pontos de 100 W, pontos de cozinha de 600 W]. */ const TABELA_5 = [
    [
        8,
        1,
        1
    ],
    [
        15,
        3,
        1
    ],
    [
        20,
        4,
        2
    ],
    [
        30,
        5,
        2
    ],
    [
        50,
        6,
        3
    ],
    [
        70,
        7,
        3
    ],
    [
        90,
        8,
        3
    ],
    [
        110,
        9,
        3
    ],
    [
        140,
        10,
        3
    ],
    [
        170,
        11,
        3
    ],
    [
        200,
        12,
        3
    ],
    [
        220,
        13,
        3
    ],
    [
        250,
        14,
        3
    ]
];
function cargaTomadasW(areaConstruidaM2, pontosDeclarados) {
    if (areaConstruidaM2 > 250) return pontosDeclarados * 100 + 3 * 600;
    const linha = TABELA_5.find(([max], i)=>i === 0 ? areaConstruidaM2 < max : areaConstruidaM2 <= max) ?? TABELA_5[TABELA_5.length - 1];
    return Math.max(pontosDeclarados, linha[1]) * 100 + linha[2] * 600;
}
function cargaIluminacaoW(pontosLuz, nComodos) {
    return Math.max(pontosLuz, nComodos) * 100;
}
const POTENCIA_MEDIA_W = {
    'Torneira elétrica': 3000,
    'Chuveiro elétrico': 4000,
    'Máquina de lavar': 1500,
    'Secadora': 2500,
    'Forno elétrico': 1500,
    'Carregador de veículo elétrico': 3300
};
function fatorTabela6(kw) {
    const f = [
        [
            1,
            0.86
        ],
        [
            2,
            0.75
        ],
        [
            3,
            0.66
        ],
        [
            4,
            0.59
        ],
        [
            5,
            0.52
        ],
        [
            6,
            0.45
        ],
        [
            7,
            0.4
        ],
        [
            8,
            0.35
        ],
        [
            9,
            0.31
        ],
        [
            10,
            0.27
        ]
    ];
    return f.find(([max])=>kw <= max)?.[1] ?? 0.24;
}
function fatorTabela7(n) {
    const f = [
        1,
        1,
        1,
        0.84,
        0.76,
        0.7,
        0.65,
        0.6,
        0.57,
        0.54,
        0.52,
        0.49,
        0.48,
        0.46,
        0.45,
        0.44,
        0.43,
        0.42,
        0.41,
        0.4,
        0.4
    ];
    if (n <= 20) return f[Math.max(0, n)];
    return n <= 23 ? 0.39 : 0.38;
}
function fatorTabela8(n) {
    return n <= 1 ? 1 : n === 2 ? 0.72 : 0.62;
}
function fatorTabela9(n) {
    return n <= 1 ? 1 : n <= 4 ? 0.7 : n <= 6 ? 0.6 : 0.5;
}
function fatorTabela10(n) {
    const f = [
        1,
        1,
        0.6,
        0.48,
        0.4,
        0.37,
        0.35,
        0.33,
        0.32,
        0.31,
        0.3,
        0.3
    ];
    if (n <= 11) return f[Math.max(0, n)];
    return n <= 15 ? 0.28 : 0.26;
}
function fatorTabela12(n) {
    return n <= 10 ? 1 : n <= 20 ? 0.86 : 0.8;
}
function calcularDemanda(cargaIlumTomadasKw, aparelhos) {
    const soma = (g)=>aparelhos.filter((x)=>x.grupo === g).reduce((s, x)=>s + x.kw, 0);
    const qtd = (g)=>aparelhos.filter((x)=>x.grupo === g).length;
    const a = cargaIlumTomadasKw * fatorTabela6(cargaIlumTomadasKw);
    const b = soma('b') * fatorTabela7(qtd('b'));
    const c = soma('c') * fatorTabela8(qtd('c'));
    const d = soma('d') / 0.92 * fatorTabela9(qtd('d'));
    const e = soma('e') * fatorTabela10(qtd('e'));
    const f = aparelhos.filter((x)=>x.grupo === 'f').reduce((s, x)=>s + (x.kva ?? x.kw), 0) * fatorTabela12(qtd('f'));
    const ghi = soma('ghi');
    const cargaInstaladaKw = cargaIlumTomadasKw + aparelhos.reduce((s, x)=>s + x.kw, 0);
    const r2 = (v)=>Math.round(v * 1000) / 1000;
    return {
        cargaInstaladaKw: r2(cargaInstaladaKw),
        demandaKva: r2(a + b + c + d + e + f + ghi),
        parcelas: {
            a: r2(a),
            b: r2(b),
            c: r2(c),
            d: r2(d),
            e: r2(e),
            f: r2(f),
            ghi: r2(ghi)
        }
    };
}
const CATEGORIAS = {
    '220/127': [
        {
            codigo: 'M0',
            ligacao: 'M',
            max: 5,
            disjuntor: 40,
            por: 'kW'
        },
        {
            codigo: 'M1',
            ligacao: 'M',
            max: 10,
            disjuntor: 63,
            por: 'kW'
        },
        {
            codigo: 'B0',
            ligacao: 'B',
            max: 11,
            disjuntor: 50,
            por: 'kW'
        },
        {
            codigo: 'B1',
            ligacao: 'B',
            max: 18,
            disjuntor: 70,
            por: 'kW'
        },
        {
            codigo: 'T0',
            ligacao: 'T',
            max: 19,
            disjuntor: 50,
            por: 'kVA'
        },
        {
            codigo: 'T1',
            ligacao: 'T',
            max: 24,
            disjuntor: 63,
            por: 'kVA'
        },
        {
            codigo: 'T2',
            ligacao: 'T',
            max: 38,
            disjuntor: 100,
            por: 'kVA'
        },
        {
            codigo: 'T3',
            ligacao: 'T',
            max: 47,
            disjuntor: 125,
            por: 'kVA'
        },
        {
            codigo: 'T4',
            ligacao: 'T',
            max: 57,
            disjuntor: 150,
            por: 'kVA'
        },
        {
            codigo: 'T5',
            ligacao: 'T',
            max: 75,
            disjuntor: 200,
            por: 'kVA'
        }
    ],
    '380/220': [
        {
            codigo: 'M2',
            ligacao: 'M',
            max: 10,
            disjuntor: 40,
            por: 'kW'
        },
        {
            codigo: 'M3',
            ligacao: 'M',
            max: 15,
            disjuntor: 63,
            por: 'kW'
        },
        {
            codigo: 'T6',
            ligacao: 'T',
            max: 21,
            disjuntor: 32,
            por: 'kVA'
        },
        {
            codigo: 'T7',
            ligacao: 'T',
            max: 26,
            disjuntor: 40,
            por: 'kVA'
        },
        {
            codigo: 'T8',
            ligacao: 'T',
            max: 33,
            disjuntor: 50,
            por: 'kVA'
        },
        {
            codigo: 'T9',
            ligacao: 'T',
            max: 40,
            disjuntor: 63,
            por: 'kVA'
        },
        {
            codigo: 'T10',
            ligacao: 'T',
            max: 52,
            disjuntor: 80,
            por: 'kVA'
        },
        {
            codigo: 'T11',
            ligacao: 'T',
            max: 66,
            disjuntor: 100,
            por: 'kVA'
        },
        {
            codigo: 'T12',
            ligacao: 'T',
            max: 75,
            disjuntor: 125,
            por: 'kVA'
        }
    ]
};
const ORDEM = [
    'M',
    'B',
    'T'
];
function categoriaAtendimento(sistema, ligacao, cargaKw, demandaKva) {
    const valor = (c)=>c.por === 'kW' ? cargaKw : demandaKva;
    const lista = CATEGORIAS[sistema];
    const doTipo = (l)=>lista.find((c)=>c.ligacao === l && valor(c) <= c.max);
    if (ligacao) {
        const c = doTipo(ligacao);
        if (c) return {
            categoria: c
        };
    }
    const inicio = ligacao ? ORDEM.indexOf(ligacao) : 0;
    for (const l of ORDEM.slice(inicio)){
        const c = doTipo(l);
        if (c) {
            return {
                categoria: c,
                aviso: ligacao ? `A carga pede ligação maior que a escolhida: sugerida categoria ${c.codigo}.` : `Ligação não informada: sugerida a menor categoria compatível (${c.codigo}).`
            };
        }
    }
    return {
        categoria: null,
        aviso: 'Carga acima de 75 kW/kVA: fora do escopo, procure a concessionária.'
    };
}
}),
"[project]/lib/motor/eletrica.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== Funções puras de dimensionamento (NBR 5410:2004) — reaproveitáveis na futura área do profissional ===== */ __turbopack_context__.s([
    "CAPACIDADE_B1",
    ()=>CAPACIDADE_B1,
    "DISJUNTORES",
    ()=>DISJUNTORES,
    "DISJUNTOR_MIN_TUG_ILUM",
    ()=>DISJUNTOR_MIN_TUG_ILUM,
    "DR_NOMINAIS",
    ()=>DR_NOMINAIS,
    "META_QUEDA",
    ()=>META_QUEDA,
    "RHO_COBRE_70",
    ()=>RHO_COBRE_70,
    "TAMANHOS_QUADRO",
    ()=>TAMANHOS_QUADRO,
    "VERSAO_MOTOR",
    ()=>VERSAO_MOTOR,
    "areaCabo",
    ()=>areaCabo,
    "caixaPorModulos",
    ()=>caixaPorModulos,
    "cargaMinimaIluminacao",
    ()=>cargaMinimaIluminacao,
    "correnteProjeto",
    ()=>correnteProjeto,
    "dimensionarCircuito",
    ()=>dimensionarCircuito,
    "ehAreaMolhada600",
    ()=>ehAreaMolhada600,
    "ehCozinhaServico",
    ()=>ehCozinhaServico,
    "eletrodutoPorOcupacao",
    ()=>eletrodutoPorOcupacao,
    "exigeDR",
    ()=>exigeDR,
    "fatorAgrupamento",
    ()=>fatorAgrupamento,
    "normalizarSistema",
    ()=>normalizarSistema,
    "potenciaIluminacao",
    ()=>potenciaIluminacao,
    "potenciaTUG",
    ()=>potenciaTUG,
    "quedaTensao",
    ()=>quedaTensao,
    "reservaQuadro",
    ()=>reservaQuadro,
    "secaoMinima",
    ()=>secaoMinima,
    "tamanhoQuadro",
    ()=>tamanhoQuadro,
    "taxaOcupacao",
    ()=>taxaOcupacao,
    "tensoesSistema",
    ()=>tensoesSistema,
    "trechoMaximoSemCaixa",
    ()=>trechoMaximoSemCaixa
]);
const VERSAO_MOTOR = '2.0.0';
function normalizarSistema(v) {
    return v === '380/220' ? '380/220' : '220/127';
}
function tensoesSistema(s) {
    return s === '380/220' ? {
        fn: 220,
        ff: 380
    } : {
        fn: 127,
        ff: 220
    };
}
function cargaMinimaIluminacao(areaM2) {
    if (!(areaM2 > 6)) return 100;
    return 100 + 60 * Math.floor((areaM2 - 6) / 4);
}
function potenciaIluminacao(areaM2, nPontos) {
    return Math.max(cargaMinimaIluminacao(areaM2), 100 * Math.max(0, nPontos));
}
/* ---------- 4.3 Tomadas ---------- */ const norm = (t)=>(t ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function ehAreaMolhada600(tipo) {
    const t = norm(tipo);
    return [
        'banheiro',
        'lavabo',
        'cozinha',
        'copa',
        'servico',
        'lavanderia'
    ].some((k)=>t.includes(k));
}
function potenciaTUG(nPontos, tipo) {
    const n = Math.max(0, nPontos);
    if (!ehAreaMolhada600(tipo)) return n * 100;
    return Math.min(n, 3) * 600 + Math.max(0, n - 3) * 100;
}
function ehCozinhaServico(tipo) {
    const t = norm(tipo);
    return [
        'cozinha',
        'copa',
        'servico',
        'lavanderia'
    ].some((k)=>t.includes(k));
}
function exigeDR(tipo) {
    const t = norm(tipo);
    return [
        'banheiro',
        'lavabo',
        'cozinha',
        'copa',
        'servico',
        'lavanderia',
        'garagem',
        'varanda',
        'externa',
        'quintal',
        'piscina',
        'terraco'
    ].some((k)=>t.includes(k));
}
function correnteProjeto(potencia, tensao, fp = 1, trifasico = false) {
    if (!(potencia > 0) || !(tensao > 0)) return 0;
    return potencia / ((trifasico ? Math.sqrt(3) : 1) * tensao * (fp > 0 ? fp : 1));
}
function secaoMinima(tipo) {
    return tipo === 'iluminacao' ? 1.5 : 2.5;
}
const CAPACIDADE_B1 = [
    {
        secao: 1.5,
        c2: 17.5,
        c3: 15.5
    },
    {
        secao: 2.5,
        c2: 24,
        c3: 21
    },
    {
        secao: 4,
        c2: 32,
        c3: 28
    },
    {
        secao: 6,
        c2: 41,
        c3: 36
    },
    {
        secao: 10,
        c2: 57,
        c3: 50
    },
    {
        secao: 16,
        c2: 76,
        c3: 68
    },
    {
        secao: 25,
        c2: 101,
        c3: 89
    },
    {
        secao: 35,
        c2: 125,
        c3: 110
    }
];
function fatorAgrupamento(nCircuitos) {
    const n = Math.max(1, Math.floor(nCircuitos));
    const tab = [
        1,
        1,
        0.8,
        0.7,
        0.65,
        0.6,
        0.57,
        0.54,
        0.52
    ];
    if (n <= 8) return tab[n];
    if (n <= 11) return 0.5;
    if (n <= 15) return 0.45;
    if (n <= 19) return 0.41;
    return 0.38;
}
const DISJUNTORES = [
    6,
    10,
    16,
    20,
    25,
    32,
    40,
    50,
    63
];
const DISJUNTOR_MIN_TUG_ILUM = 10;
const META_QUEDA = 3;
const RHO_COBRE_70 = 0.0225;
function quedaTensao(ib, comprimentoM, secao, tensao, trifasico = false) {
    if (!(secao > 0) || !(tensao > 0)) return 0;
    return 100 * (trifasico ? Math.sqrt(3) : 2) * RHO_COBRE_70 * Math.max(0, comprimentoM) * ib / (secao * tensao);
}
function dimensionarCircuito(p) {
    const tri = !!p.trifasico;
    const ib = correnteProjeto(p.potencia, p.tensao, p.fp ?? 1, tri);
    const fa = fatorAgrupamento(p.nAgrupados ?? 1);
    const minIn = DISJUNTOR_MIN_TUG_ILUM; // decisão 10.1: mínimo de 10 A em todos os circuitos terminais
    const meta = p.metaQueda ?? META_QUEDA;
    const sMin = secaoMinima(p.tipo);
    for (const row of CAPACIDADE_B1){
        if (row.secao < sMin) continue;
        const iz = (tri ? row.c3 : row.c2) * fa;
        const In = DISJUNTORES.find((d)=>d >= ib && d >= minIn && d <= iz);
        if (In === undefined) continue;
        const queda = quedaTensao(ib, p.comprimentoM, row.secao, p.tensao, tri);
        if (queda > meta) continue;
        return {
            ib,
            secao: row.secao,
            iz,
            disjuntor: In,
            queda,
            foraDaTabela: false
        };
    }
    const ult = CAPACIDADE_B1[CAPACIDADE_B1.length - 1];
    const iz = (tri ? ult.c3 : ult.c2) * fa;
    return {
        ib,
        secao: ult.secao,
        iz,
        disjuntor: DISJUNTORES.find((d)=>d >= ib) ?? DISJUNTORES[DISJUNTORES.length - 1],
        queda: quedaTensao(ib, p.comprimentoM, ult.secao, p.tensao, tri),
        foraDaTabela: true
    };
}
function areaCabo(secao) {
    const m = {
        1.5: 9.8,
        2.5: 13.9,
        4: 18.1,
        6: 23.4,
        10: 37.4,
        16: 55.7,
        25: 84.3,
        35: 111
    };
    return m[secao] ?? 14;
}
/** Área útil (mm²) a 40% por diâmetro nominal — tabela atual do app, A VALIDAR. */ const AREA_UTIL_40 = [
    {
        dn: 20,
        area: 42
    },
    {
        dn: 25,
        area: 78
    },
    {
        dn: 32,
        area: 126
    },
    {
        dn: 40,
        area: 201
    },
    {
        dn: 50,
        area: 330
    }
];
function taxaOcupacao(nCabos) {
    return nCabos <= 1 ? 0.53 : nCabos === 2 ? 0.31 : 0.4;
}
function eletrodutoPorOcupacao(cabos) {
    const n = cabos.reduce((s, c)=>s + c.n, 0);
    const area = cabos.reduce((s, c)=>s + areaCabo(c.secao) * c.n, 0);
    const k = taxaOcupacao(n) / 0.4;
    return AREA_UTIL_40.find((r)=>area <= r.area * k)?.dn ?? 50;
}
function trechoMaximoSemCaixa(curvas90) {
    return Math.max(0, 15 - 3 * Math.max(0, curvas90));
}
function caixaPorModulos(modulos) {
    if (modulos <= 3) return '4x2';
    if (modulos <= 6) return '4x4';
    return 'dividir';
}
function reservaQuadro(nCircuitos) {
    if (nCircuitos <= 6) return 2;
    if (nCircuitos <= 12) return 3;
    if (nCircuitos <= 30) return 4;
    return Math.ceil(0.15 * nCircuitos);
}
const TAMANHOS_QUADRO = [
    12,
    18,
    24,
    34,
    44
];
function tamanhoQuadro(modulos) {
    return TAMANHOS_QUADRO.find((t)=>t >= modulos) ?? null;
}
const DR_NOMINAIS = [
    25,
    40,
    63
];
}),
"[project]/lib/navegacao.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Navegação da prévia para a etapa/item de origem de uma pendência ou botão "Editar". */ __turbopack_context__.s([
    "STEP_ATERRAMENTO",
    ()=>STEP_ATERRAMENTO,
    "STEP_COMODOS",
    ()=>STEP_COMODOS,
    "STEP_ENTRADA",
    ()=>STEP_ENTRADA,
    "STEP_EQUIPAMENTOS",
    ()=>STEP_EQUIPAMENTOS,
    "STEP_PONTOS",
    ()=>STEP_PONTOS,
    "STEP_PREVIA",
    ()=>STEP_PREVIA,
    "abrirPendencia",
    ()=>abrirPendencia
]);
const STEP_COMODOS = 1;
const STEP_PONTOS = 2;
const STEP_EQUIPAMENTOS = 3;
const STEP_ENTRADA = 4;
const STEP_ATERRAMENTO = 5;
const STEP_PREVIA = 6;
function abrirPendencia(p, store) {
    if (p.roomId) store.setActiveRoomId(p.roomId);
    if (p.equipId) store.setActiveEquipId(p.equipId);
    store.setVeioDaPrevia(true);
    store.setStep(p.step);
}
}),
"[project]/lib/nbr5410-regras.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== NBR 5410 — regras simples usadas no navegador E no servidor (sem cálculo pago) ===== */ /**
 * Pontos de tomada que uma peça representa (NBR 5410 conta pontos/caixas): simples, dupla ou tripla = 1.
 * Fonte única da contagem de pontos (countMods, tomadasNbr, resumo do cômodo) — base dos 600/100 VA por ponto.
 */ __turbopack_context__.s([
    "AC_BTU_OPTIONS",
    ()=>AC_BTU_OPTIONS,
    "BOMBA_CV_OPTIONS",
    ()=>BOMBA_CV_OPTIONS,
    "POTENCIAS_TIPICAS",
    ()=>POTENCIAS_TIPICAS,
    "btuParaWatts",
    ()=>btuParaWatts,
    "cvParaWatts",
    ()=>cvParaWatts,
    "gruposTeclas",
    ()=>gruposTeclas,
    "minTomadas",
    ()=>minTomadas,
    "perimetro",
    ()=>perimetro,
    "pontosTomada",
    ()=>pontosTomada,
    "tomadasFisicas",
    ()=>tomadasFisicas
]);
function pontosTomada(t) {
    return String(t ?? '') ? 1 : 0;
}
function tomadasFisicas(t) {
    const s = String(t ?? '');
    if (/^T\d+T$/.test(s)) return 3;
    if (/^T\d+D$/.test(s)) return 2;
    return s ? 1 : 0;
}
function gruposTeclas(nLuzes) {
    const n = Math.max(1, Math.floor(nLuzes || 0));
    const g = [];
    for(let r = n; r > 0; r -= 3)g.push(Math.min(3, r));
    return g;
}
const perimetro = (c, l)=>2 * (c + l);
function minTomadas(areaM2, perimetroM, tipoComodo) {
    const t = (tipoComodo ?? '').toLowerCase();
    const p = Math.max(0, perimetroM || 0);
    if (t.includes('banheiro') || t.includes('lavabo')) return 1;
    if (t.includes('cozinha') || t.includes('copa') || t.includes('servi') || t.includes('lavanderia')) {
        return Math.max(1, Math.ceil(p / 3.5));
    }
    if (t.includes('varanda')) return 1;
    if (t.includes('sala') || t.includes('quarto') || t.includes('dormit')) return Math.max(1, Math.ceil(p / 5));
    if (areaM2 <= 6) return 1;
    return Math.max(1, Math.ceil(p / 5));
}
const POTENCIAS_TIPICAS = {
    'Chuveiro elétrico': {
        pot: 5500,
        tens: 220
    },
    'Torneira elétrica': {
        pot: 3200,
        tens: 220
    },
    'Ar-condicionado': {
        pot: 1400,
        tens: 220
    },
    'Forno elétrico': {
        pot: 1500,
        tens: 127
    },
    'Cooktop elétrico': {
        pot: 2000,
        tens: 220
    },
    'Máquina de lavar': {
        pot: 1200,
        tens: 127
    },
    'Secadora': {
        pot: 3200,
        tens: 220
    },
    'Aquecedor': {
        pot: 4500,
        tens: 220
    },
    'Bomba': {
        pot: 750,
        tens: 220
    },
    'Carregador de veículo elétrico': {
        pot: 7400,
        tens: 220
    }
};
const AC_BTU_OPTIONS = [
    7000,
    9000,
    12000,
    18000,
    24000,
    30000
];
const BOMBA_CV_OPTIONS = [
    0.5,
    1,
    1.5,
    2
];
function btuParaWatts(btu) {
    return Math.round(btu / 3.517 / 3.2);
}
function cvParaWatts(cv) {
    return Math.round(cv * 736);
}
}),
"[project]/lib/ponto-equip.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Ponto do equipamento (caixa + o que vai nela) — cálculo local da prévia gratuita, sem bitola/disjuntor/cabo. */ __turbopack_context__.s([
    "PONTO_LABEL",
    ()=>PONTO_LABEL,
    "avisoCorrente",
    ()=>avisoCorrente,
    "correnteEquip",
    ()=>correnteEquip,
    "distanciaEquip",
    ()=>distanciaEquip,
    "fpEquip",
    ()=>fpEquip,
    "pontoSugerido",
    ()=>pontoSugerido,
    "resumoPonto",
    ()=>resumoPonto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/util.ts [app-route] (ecmascript)");
;
const PONTO_LABEL = {
    T20: 'Tomada 20A simples',
    T20D: 'Tomada 20A dupla',
    borne: 'Borne/terminal',
    tampa: 'Tampa cega',
    emenda: 'Emenda / Conector Wago (ligação direta)'
};
/** Cargas resistivas (fp = 1,0): chuveiro, torneira elétrica, ferro, aquecedor de passagem, boiler. */ const RESISTIVA = /chuveiro|torneira|ferro|aquecedor|boiler/i;
function fpEquip(tipo) {
    return RESISTIVA.test(String(tipo ?? '')) ? 1 : 0.92;
}
function correnteEquip(pot, tens, tipo) {
    const p = parseFloat(String(pot ?? ''));
    const t = String(tens ?? '').toLowerCase() === 'bivolt' ? 127 : parseFloat(String(tens ?? ''));
    if (!(p > 0) || !(t > 0)) return null;
    return p / (t * fpEquip(tipo));
}
function avisoCorrente(I) {
    if (I <= 10) return 'ok';
    if (I <= 16) return 'prefira20A';
    return 'ligacaoDireta';
}
function pontoSugerido(tipo, pot, tens) {
    const I = correnteEquip(pot, tens, tipo);
    if (I !== null && avisoCorrente(I) === 'ligacaoDireta') {
        return tipo === 'Chuveiro elétrico' || tipo === 'Torneira elétrica' ? 'borne' : 'emenda';
    }
    if (tipo === 'Chuveiro elétrico' || tipo === 'Torneira elétrica') return 'borne';
    if ([
        'Ar-condicionado',
        'Forno elétrico',
        'Cooktop elétrico',
        'Máquina de lavar',
        'Secadora',
        'Carregador de veículo elétrico'
    ].includes(tipo)) return 'T20';
    return null;
}
function distanciaEquip(e, rooms) {
    const direta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(e?.dist);
    if (direta > 0) return {
        metros: direta,
        origem: 'direta'
    };
    const room = (rooms ?? []).find((r)=>r?.id === e?.room);
    if (room) return {
        metros: Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeLen"])(room) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(e?.dint)) * 10) / 10,
        origem: 'comodo'
    };
    return {
        metros: 0,
        origem: 'nenhuma'
    };
}
function resumoPonto(e) {
    return {
        caixa: e?.cx ?? '4x2',
        ponto: e?.ponto ? PONTO_LABEL[e.ponto] : 'não definido',
        caixas: 1
    };
}
}),
"[project]/lib/server/calc-materiais.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* ===== Lista de materiais — circuitos dimensionados pelo motor lib/motor (NBR 5410:2004) ===== */ __turbopack_context__.s([
    "calcularMateriais",
    ()=>calcularMateriais,
    "sistemaDoEstado",
    ()=>sistemaDoEstado,
    "tensaoEquipamento",
    ()=>tensaoEquipamento
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calculator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/server/calculator.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/circuitos.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/entrada-calc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aterramento-calc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$nbr5410$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/nbr5410.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motor/eletrica.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motor/demanda.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/tensao-por-uf.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/util.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ponto-equip.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function sistemaDoEstado(state) {
    const e = state.entrada;
    if (e?.sistemaTensao === '220/127' || e?.sistemaTensao === '380/220') return e.sistemaTensao;
    const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["infoUf"])(e?.uf);
    if (u) return u.tensao;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizarSistema"])(String(e?.tensao ?? '').includes('380') ? '380/220' : '220/127');
}
function tensaoEquipamento(tens, sistema, rede) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tensoesSistema"])(sistema);
    if (tens === '380V') return sistema === '380/220' ? {
        v: 380,
        ligacao: 'F-F'
    } : {
        v: 220,
        ligacao: 'F-F'
    };
    if (tens === '127V') return {
        v: t.fn,
        ligacao: 'F-N'
    };
    if (tens === '220V') return sistema === '380/220' ? {
        v: 220,
        ligacao: 'F-N'
    } : {
        v: 220,
        ligacao: 'F-F'
    };
    if (sistema === '380/220') return {
        v: 220,
        ligacao: 'F-N'
    };
    return rede === 'Monofásico' ? {
        v: 127,
        ligacao: 'F-N'
    } : {
        v: 220,
        ligacao: 'F-F'
    };
}
/** Distribui os equipamentos nas parcelas da demanda (DIS-NOR-030 6.27). */ function cargasDosEquipamentos(equips, iluminacaoTomadasKw) {
    const c = {
        resistivos: [],
        boilers: [],
        maquinas: [],
        fogoes: [],
        arKva: [],
        motoresKva: [],
        bombas: [],
        veiculoKva: [],
        outrosKw: []
    };
    for (const e of equips){
        const kw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(e.pot) / 1000;
        const t = String(e.tipo).toLowerCase();
        if (/boiler/.test(t)) c.boilers.push(kw);
        else if (/chuveiro|torneira|aquecedor|ferro/.test(t)) c.resistivos.push(kw);
        else if (/lavar|secadora|lava-lou|micro/.test(t)) c.maquinas.push(kw);
        else if (/forno|fogão|fogao|cooktop/.test(t)) c.fogoes.push(kw);
        else if (/ar-cond|ar cond/.test(t)) c.arKva.push(kw);
        else if (/bomba|hidromassagem/.test(t)) c.bombas.push(kw);
        else if (/motor/.test(t)) c.motoresKva.push(kw / 0.92);
        else if (/veículo|veiculo/.test(t)) c.veiculoKva.push(kw);
        else c.outrosKw.push(kw);
    }
    return {
        iluminacaoTomadasKw,
        ...c
    };
}
function calcularMateriais(state) {
    const circuitos = [];
    const rede = state.rede || 'Monofásico';
    const sistema = sistemaDoEstado(state);
    const { fn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tensoesSistema"])(sistema);
    const rooms = state.rooms ?? [];
    const equips = (state.equips ?? []).filter((e)=>e.tipo && e.pot);
    // Divisão dos circuitos (config do usuário): cada unidade é um cômodo ou um grupo de cômodos vizinhos.
    const { unidades } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolverUnidades"])(rooms, state.circuitos);
    const unidadeDoComodo = new Map();
    unidades.forEach((u, k)=>u.rooms.forEach((r)=>unidadeDoComodo.set(r.id, k)));
    const nCircPorUnidade = unidades.map(()=>0);
    const brutos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["circuitosBrutos"])(unidades);
    for (const b of brutos){
        const u = unidades[b.unidade];
        // NBR 5410 6.2.5.5 / Tabela 42: circuitos no mesmo trecho (decisão 10.3: ilum + TUG por cômodo + TUEs dele)
        const nAgrupados = brutos.filter((x)=>x.unidade === b.unidade).length + equips.filter((e)=>u.rooms.some((r)=>r.id === e.room)).length;
        const dr = u.rooms.some((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areaMolhada"])(`${r.base} ${r.nome}`)); // NBR 5410 5.1.3.2.2
        const primeiro = u.rooms[0];
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dimensionarCircuito"])({
            potencia: b.potenciaW,
            tensao: fn,
            tipo: b.tipo === 'iluminacao' ? 'iluminacao' : 'tug',
            comprimentoM: b.comprimentoM,
            nAgrupados
        });
        circuitos.push({
            nome: b.nome,
            tipo: b.tipo,
            potenciaW: b.potenciaW,
            tensaoV: fn,
            ligacao: 'F-N',
            correnteA: Math.round(d.ib * 100) / 100,
            bitolaMM2: d.secao,
            izA: d.iz,
            disjuntorA: d.disjuntor,
            quedaPct: d.queda,
            comprimentoM: b.comprimentoM,
            eletrodutoDN: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$nbr5410$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eletrodutoDN"])(d.secao, 3),
            nCondutores: 3,
            dr,
            comodo: b.comodo,
            instalacao: primeiro.inst || '',
            materialAparente: primeiro.materialAparente
        });
        nCircPorUnidade[b.unidade] += 1;
    }
    /* NBR 5410 9.5.3.1: equipamento acima de 10 A em circuito próprio (TUE) */ for (const eq of equips){
        const room = rooms.find((r)=>r.id === eq.room);
        const potW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(eq.pot);
        const tri = !!eq.trifasico && sistema === '380/220';
        const t = tensaoEquipamento(eq.tens, sistema, rede);
        let dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(eq.dist);
        if (dist <= 0 && room) dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeLen"])(room) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(eq.dint);
        if (dist <= 0) dist = 10;
        const uIdx = room ? unidadeDoComodo.get(room.id) : undefined;
        const nAgrupados = uIdx !== undefined ? nCircPorUnidade[uIdx] + 1 : 1;
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dimensionarCircuito"])({
            potencia: potW,
            tensao: tri ? 380 : t.v,
            fp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fpEquip"])(eq.tipo),
            tipo: 'tue',
            comprimentoM: dist,
            nAgrupados,
            trifasico: tri
        });
        // F-N: fase + neutro + PE; F-F: 2 fases + PE; 3F: 3 fases + PE
        const nCond = tri ? 4 : 3;
        circuitos.push({
            nome: `${eq.tipo}${room ? ` — ${room.nome || room.base}` : ''}`,
            tipo: 'tue',
            potenciaW: potW,
            tensaoV: tri ? 380 : t.v,
            ligacao: tri ? '3F' : t.ligacao,
            correnteA: Math.round(d.ib * 100) / 100,
            bitolaMM2: d.secao,
            izA: d.iz,
            disjuntorA: d.disjuntor,
            quedaPct: d.queda,
            comprimentoM: dist,
            eletrodutoDN: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$nbr5410$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eletrodutoDN"])(d.secao, nCond),
            nCondutores: nCond,
            dr: /chuveiro|torneira|aquecedor|máquina|maquina/i.test(eq.tipo) || (room ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areaMolhada"])(`${room.base} ${room.nome}`) : false),
            comodo: room ? room.nome || room.base : undefined,
            instalacao: room?.inst || '',
            materialAparente: room?.materialAparente
        });
        if (uIdx !== undefined) nCircPorUnidade[uIdx] += 1;
    }
    /* ----- Quadro geral: demanda e categoria pela DIS-NOR-030 6.26–6.27 ----- */ const cargaTotal = circuitos.reduce((s, c)=>s + c.potenciaW, 0);
    const correnteTotal = circuitos.reduce((s, c)=>s + c.correnteA, 0);
    const areaTotal = rooms.reduce((s, r)=>s + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.c) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.l), 0);
    const pontosTom = rooms.reduce((s, r)=>s + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$calculator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["countMods"])(r, 'T'), 0);
    const pontosLuz = rooms.reduce((s, r)=>s + (r.luzes?.length ?? 0), 0);
    const cargaIT = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cargaTomadasW"])(areaTotal, pontosTom) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cargaIluminacaoW"])(pontosLuz, rooms.length)) / 1000;
    const dem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcularDemandaDIS"])(cargasDosEquipamentos(equips, cargaIT));
    const ent = state.entrada;
    const sistLig = ent?.ligacao === 'M' ? 'monofasico' : ent?.ligacao === 'B' ? 'bifasico' : ent?.ligacao === 'T' ? 'trifasico' : ent?.tipoEntrada && ent?.sistema ? ent.sistema : rede === 'Trifásico' ? 'trifasico' : rede === 'Bifásico' ? 'bifasico' : rede === 'Monofásico' ? 'monofasico' : null;
    const cat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["categoriaDisNor"])(dem.cargaInstaladaKw, dem.demandaKva, sistema, sistLig);
    const uf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["infoUf"])(ent?.uf);
    const reserva = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reservaQuadro"])(circuitos.length); // NBR 5410 6.5.4.7 Tabela 59
    const quadro = {
        disjuntorGeralA: cat?.disjuntor ?? 0,
        nCircuitos: circuitos.length,
        reserva,
        posicoes: circuitos.length + reserva,
        cargaTotalW: Math.round(cargaTotal),
        correnteTotalA: Math.round(correnteTotal * 100) / 100,
        sistema,
        categoria: cat?.categoria ?? 'fora do escopo',
        demandaKva: Math.round(dem.demandaKva * 100) / 100,
        cargaInstaladaKw: Math.round(dem.cargaInstaladaKw * 100) / 100,
        avisoCategoria: cat ? cat.aviso : 'Carga acima de 75 kW/kVA: fora do escopo, procure a concessionária.',
        versaoMotor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VERSAO_MOTOR"],
        uf: uf?.uf,
        distribuidora: uf?.distribuidora,
        verificarDistribuidora: !uf || uf.verificar,
        ligacaoSistema: cat?.sistema,
        caboRamal: cat?.caboRamal,
        caboEntrada: cat?.caboEntrada,
        eletrodutoEntrada: cat?.eletroduto
    };
    /* ----- Lista de materiais consolidada ----- */ const materiais = [];
    // Cabos separados por bitola + cor (NBR 5410): fases, neutro e terra (PE)
    const CORES_FASE = [
        'Preto',
        'Vermelho',
        'Marrom'
    ];
    const ORDEM_COR = [
        'Preto',
        'Vermelho',
        'Marrom',
        'Azul claro',
        'Verde-amarelo'
    ];
    const FUNCAO_COR = {
        Preto: 'fase',
        Vermelho: 'fase',
        Marrom: 'fase',
        'Azul claro': 'neutro',
        'Verde-amarelo': 'terra'
    };
    const fiosPorBitolaCor = {};
    const bitolasSemTerra = new Set();
    const somarFio = (bitola, cor, metros)=>{
        const chave = `${bitola}mm²_${cor}`;
        const atual = fiosPorBitolaCor[chave] ?? {
            bitola,
            cor,
            metros: 0
        };
        atual.metros += metros;
        fiosPorBitolaCor[chave] = atual;
    };
    for (const c of circuitos){
        // 2 = F+N (sem PE separado); 3 = F+N+PE; 4 = 2F+N+PE; 5 = 3F+N+PE
        const n = Math.max(2, Math.min(5, c.nCondutores));
        const temTerra = n >= 3;
        if (!temTerra) bitolasSemTerra.add(c.bitolaMM2);
        // 220 V em rede bifásica/trifásica é ligado entre duas fases: F + F + PE, sem neutro.
        const entreFases = c.tensaoV >= 200 && (rede === 'Bifásico' || rede === 'Trifásico');
        if (entreFases) {
            somarFio(c.bitolaMM2, 'Preto', c.comprimentoM);
            somarFio(c.bitolaMM2, 'Vermelho', c.comprimentoM);
        } else {
            const fases = temTerra ? n - 2 : 1;
            for(let f = 0; f < fases; f++)somarFio(c.bitolaMM2, CORES_FASE[f], c.comprimentoM);
            somarFio(c.bitolaMM2, 'Azul claro', c.comprimentoM);
        }
        if (temTerra) somarFio(c.bitolaMM2, 'Verde-amarelo', c.comprimentoM);
    }
    const fmtBitola = (b)=>String(b).replace('.', ',');
    const linhasFio = Object.values(fiosPorBitolaCor).sort((a, b)=>a.bitola - b.bitola || ORDEM_COR.indexOf(a.cor) - ORDEM_COR.indexOf(b.cor));
    for (const { bitola, cor, metros } of linhasFio){
        const obsSemTerra = cor === 'Azul claro' && bitolasSemTerra.has(bitola) ? ' — há circuito(s) sem condutor de terra separado' : '';
        materiais.push({
            item: `Cabo flexível ${fmtBitola(bitola)} mm² — ${cor} (${FUNCAO_COR[cor]})`,
            qtd: Math.ceil(metros * 1.15),
            unidade: 'm',
            detalhe: `Cobre, isolação PVC 750V${obsSemTerra}`
        });
    }
    // Eletroduto conforme o tipo de instalação escolhido em cada cômodo:
    // - Embutida na parede / Pela laje ou forro / não informado → eletroduto flexível corrugado (sem luvas de rosca)
    // - Aparente (sobrepor) → conforme o material escolhido: canaleta (barras de 2 m, padrão),
    //   eletroduto rígido em metros ou eletroduto rígido em barras de 3 m (com luvas e curvas)
    const grupoInst = (inst)=>inst === 'Aparente' ? 'aparente' : inst === 'Pela laje' ? 'laje' : inst === 'Embutida na parede' ? 'embutida' : 'nao-informado';
    const somarAparente = (mapa, c)=>{
        const a = mapa[c.eletrodutoDN] ?? {
            metros: 0,
            circuitos: 0
        };
        a.metros += c.comprimentoM;
        a.circuitos += 1;
        mapa[c.eletrodutoDN] = a;
    };
    const corrugPorDN = {};
    const canaletaPorDN = {};
    const rigidoMetroPorDN = {};
    const rigidoBarraPorDN = {};
    for (const c of circuitos){
        const g = grupoInst(c.instalacao);
        if (g === 'aparente') {
            if (c.materialAparente === 'eletroduto_metro') somarAparente(rigidoMetroPorDN, c);
            else if (c.materialAparente === 'eletroduto_peca3m') somarAparente(rigidoBarraPorDN, c);
            else somarAparente(canaletaPorDN, c);
        } else {
            const a = corrugPorDN[c.eletrodutoDN] ?? {
                metros: 0,
                origens: new Set()
            };
            a.metros += c.comprimentoM;
            a.origens.add(g);
            corrugPorDN[c.eletrodutoDN] = a;
        }
    }
    const dnsOrdenados = (m)=>Object.keys(m).map(Number).sort((a, b)=>a - b);
    const ROTULO_ORIGEM = {
        embutida: 'embutido na parede',
        laje: 'pela laje/forro',
        'nao-informado': 'instalação não informada (considerado embutido)'
    };
    for (const dn of dnsOrdenados(corrugPorDN)){
        const { metros, origens } = corrugPorDN[dn];
        const onde = [
            ...origens
        ].map((o)=>ROTULO_ORIGEM[o]).join(' · ');
        materiais.push({
            item: `Eletroduto flexível corrugado ${dn}mm`,
            qtd: Math.ceil(metros * 1.1),
            unidade: 'm',
            detalhe: `10% de folga — ${onde}`
        });
    }
    let metrosCanaleta = 0;
    for (const dn of dnsOrdenados(canaletaPorDN)){
        const { metros, circuitos: nCirc } = canaletaPorDN[dn];
        const metrosFolga = metros * 1.1; // 10% de folga
        metrosCanaleta += metros;
        const barras = Math.ceil(metrosFolga / 2);
        const curvas = nCirc * 2; // saída do quadro + chegada no cômodo (estimativa)
        materiais.push({
            item: `Canaleta PVC com tampa (equiv. eletroduto ${dn}mm)`,
            qtd: barras,
            unidade: barras === 1 ? 'barra' : 'barras',
            detalhe: `Barras de 2 m — ${Math.ceil(metrosFolga)} m com 10% de folga · instalação aparente`
        });
        materiais.push({
            item: `Emenda para canaleta (equiv. ${dn}mm)`,
            qtd: Math.max(0, barras - 1),
            unidade: 'un',
            detalhe: 'Uma entre cada par de barras'
        });
        materiais.push({
            item: `Curva 90° para canaleta (equiv. ${dn}mm)`,
            qtd: curvas,
            unidade: 'un',
            detalhe: 'Estimativa: 2 por circuito'
        });
    }
    // Eletroduto rígido aparente: abraçadeira a cada ~1 m (cada uma com bucha e parafuso)
    let abracadeiras = 0;
    for (const dn of dnsOrdenados(rigidoMetroPorDN)){
        const { metros, circuitos: nCirc } = rigidoMetroPorDN[dn];
        const metrosFolga = Math.ceil(metros * 1.1);
        abracadeiras += metrosFolga;
        materiais.push({
            item: `Eletroduto rígido PVC aparente ${dn}mm`,
            qtd: metrosFolga,
            unidade: 'm',
            detalhe: '10% de folga · instalação aparente (sobrepor)'
        });
        materiais.push({
            item: `Curva 90° ${dn}mm`,
            qtd: nCirc * 2,
            unidade: 'un',
            detalhe: 'Eletroduto aparente — estimativa: 2 por circuito'
        });
        materiais.push({
            item: `Abraçadeira tipo D para eletroduto ${dn}mm`,
            qtd: metrosFolga,
            unidade: 'un',
            detalhe: 'Uma a cada 1 m'
        });
    }
    for (const dn of dnsOrdenados(rigidoBarraPorDN)){
        const { metros, circuitos: nCirc } = rigidoBarraPorDN[dn];
        const metrosFolga = metros * 1.1;
        const barras = Math.ceil(metrosFolga / 3);
        const nAbr = Math.ceil(metrosFolga);
        abracadeiras += nAbr;
        materiais.push({
            item: `Eletroduto rígido PVC aparente ${dn}mm (barra 3 m)`,
            qtd: barras,
            unidade: barras === 1 ? 'barra' : 'barras',
            detalhe: `Barras de 3 m — ${Math.ceil(metrosFolga)} m com 10% de folga · instalação aparente (sobrepor)`
        });
        materiais.push({
            item: `Luva de emenda ${dn}mm`,
            qtd: Math.max(0, barras - 1),
            unidade: 'un',
            detalhe: 'Eletroduto aparente — uma entre cada par de barras'
        });
        materiais.push({
            item: `Curva 90° ${dn}mm`,
            qtd: nCirc * 2,
            unidade: 'un',
            detalhe: 'Eletroduto aparente — estimativa: 2 por circuito'
        });
        materiais.push({
            item: `Abraçadeira tipo D para eletroduto ${dn}mm`,
            qtd: nAbr,
            unidade: 'un',
            detalhe: 'Uma a cada 1 m'
        });
    }
    // Disjuntores
    const djPorAmper = {};
    for (const c of circuitos){
        djPorAmper[c.disjuntorA] = (djPorAmper[c.disjuntorA] ?? 0) + 1;
    }
    for (const [amper, qtd] of Object.entries(djPorAmper)){
        materiais.push({
            item: `Disjuntor ${amper}A`,
            qtd: Number(qtd),
            unidade: 'un',
            detalhe: 'Curva C, monopolar'
        });
    }
    // Disjuntor geral: uma única linha, pela categoria de atendimento (DIS-NOR-030).
    const polosGeral = quadro.ligacaoSistema === 'trifasico' ? 'tripolar' : quadro.ligacaoSistema === 'bifasico' ? 'bipolar' : 'monopolar';
    const temEntrada = !!state.entrada?.tipoEntrada && state.entrada?.incluirNoPdf !== false;
    if (quadro.disjuntorGeralA > 0) {
        materiais.push({
            item: `Disjuntor geral ${quadro.disjuntorGeralA}A`,
            qtd: 1,
            unidade: 'un',
            detalhe: `Curva C, ${polosGeral} — categoria ${quadro.categoria} (pré-dimensionamento, verificar com a distribuidora)`
        });
    }
    // Quadro de distribuição
    const nDJ = circuitos.length + 1; // +1 para o geral
    const tamQuadro = nDJ <= 8 ? 8 : nDJ <= 12 ? 12 : nDJ <= 18 ? 18 : nDJ <= 24 ? 24 : 36;
    materiais.push({
        item: `Quadro de distribuição ${tamQuadro} disjuntores`,
        qtd: 1,
        unidade: 'un',
        detalhe: `Embutir ou sobrepor, com barramento e tampa`
    });
    // Caixas, placas e acessórios — embutido/laje: caixa de embutir + placa;
    // aparente (sobrepor): condulete + tampa, com tomadas e interruptores de sobrepor.
    let cx4x2 = 0, cx4x4 = 0, cxRedonda = 0;
    let sob4x2 = 0, sob4x4 = 0, sobLuz = 0, sobCega = 0, tampa4x2 = 0, tampa4x4 = 0;
    let tomSob10 = 0, tomSob20 = 0, tomSobUsb = 0;
    // Interruptores: placas por nº de teclas (= luzes do comando, em grupos de até 3).
    const placasTeclas = {};
    const intSobTeclas = {};
    const tomJunto = {};
    let swCx4x2 = 0, swCx4x4 = 0, cxExtraTeclas = 0;
    const somar = (m, k, n = 1)=>{
        m[k] = (m[k] ?? 0) + n;
    };
    /** Tomada que vai na placa do interruptor: a escolhida no Sw ou, pelo checkbox, uma simples 10A. */ const tomadaDoSw = (cmd, si)=>cmd.sws?.[si]?.tom || (si === 0 && cmd.comTomada ? 'T10' : '');
    const somarTomadasSobrepor = (t)=>{
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tomadasFisicas"])(t);
        if (!n) return;
        if (t === 'USB') tomSobUsb += n;
        else if (String(t).startsWith('T20')) tomSob20 += n;
        else tomSob10 += n;
    };
    for (const r of state.rooms ?? []){
        if (r.inst === 'Aparente') {
            for (const p of r.pontos ?? []){
                if (p.cx === '4x4') {
                    sob4x4++;
                    tampa4x4++;
                } else {
                    sob4x2++;
                    tampa4x2++;
                }
                for (const m of p.mods ?? [])somarTomadasSobrepor(m.t);
            }
            sobLuz += (r.luzes ?? []).length;
            for (const cmd of r.comandos ?? []){
                const grupos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gruposTeclas"])((cmd.luzes ?? []).length);
                (cmd.sws ?? []).forEach((sw, si)=>{
                    if (sw.cx === '4x4') {
                        sob4x4++;
                        tampa4x4++;
                    } else {
                        sob4x2++;
                        tampa4x2++;
                    }
                    grupos.forEach((teclas, gi)=>{
                        somar(intSobTeclas, teclas);
                        if (gi > 0) {
                            sob4x2++;
                            tampa4x2++;
                        } // placa extra = condulete extra
                    });
                    somarTomadasSobrepor(tomadaDoSw(cmd, si) || undefined);
                });
            }
            for (const cx of r.caixas ?? []){
                if (cx.tipo === '4x4') sob4x4++;
                else if (cx.tipo === 'Redonda') sobLuz++;
                else sob4x2++;
                sobCega++;
            }
            continue;
        }
        for (const p of r.pontos ?? []){
            if (p.cx === '4x4') cx4x4++;
            else cx4x2++;
        }
        for (const l of r.luzes ?? []){
            if (l.cx === '4x4') cx4x4++;
            else if (l.cx === 'Redonda') cxRedonda++;
            else cx4x2++;
        }
        for (const cmd of r.comandos ?? []){
            const grupos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gruposTeclas"])((cmd.luzes ?? []).length);
            (cmd.sws ?? []).forEach((sw, si)=>{
                if (sw.cx === '4x4') {
                    cx4x4++;
                    swCx4x4++;
                } else {
                    cx4x2++;
                    swCx4x2++;
                }
                const tom = tomadaDoSw(cmd, si);
                grupos.forEach((teclas, gi)=>{
                    const tam = gi === 0 ? sw.cx === '4x4' ? '4x4' : '4x2' : '4x2';
                    const comTom = gi === 0 && !!tom;
                    somar(placasTeclas, `${tam}|${teclas}|${comTom ? 1 : 0}`);
                    if (gi > 0) cxExtraTeclas++; // mais de 3 luzes: segunda placa em outra caixa 4x2
                });
                if (tom) somar(tomJunto, tom, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tomadasFisicas"])(tom));
            });
        }
        for (const cx of r.caixas ?? []){
            if (cx.tipo === '4x4') cx4x4++;
            else if (cx.tipo === 'Redonda') cxRedonda++;
            else cx4x2++;
        }
    }
    cx4x2 += cxExtraTeclas;
    if (cx4x2 > 0) materiais.push({
        item: 'Caixa de embutir 4x2',
        qtd: cx4x2,
        unidade: 'un'
    });
    if (cx4x4 > 0) materiais.push({
        item: 'Caixa de embutir 4x4',
        qtd: cx4x4,
        unidade: 'un'
    });
    if (cxRedonda > 0) materiais.push({
        item: 'Caixa redonda (fundo)',
        qtd: cxRedonda,
        unidade: 'un',
        detalhe: 'Embutir na laje/forro'
    });
    // Placas (embutido): tomadas, luzes e passagens levam placa comum; interruptores, placa por nº de teclas.
    const placa4x2 = cx4x2 - swCx4x2 - cxExtraTeclas;
    const placa4x4 = cx4x4 - swCx4x4;
    if (placa4x2 > 0) materiais.push({
        item: 'Placa 4x2',
        qtd: placa4x2,
        unidade: 'un',
        detalhe: 'Com espelho'
    });
    if (placa4x4 > 0) materiais.push({
        item: 'Placa 4x4',
        qtd: placa4x4,
        unidade: 'un',
        detalhe: 'Com espelho'
    });
    const NOME_TECLAS = {
        1: 'simples',
        2: 'duplo',
        3: 'triplo'
    };
    for (const chave of Object.keys(placasTeclas).sort()){
        const [tam, teclas, comTom] = chave.split('|');
        const n = Number(teclas);
        materiais.push({
            item: `Placa ${tam} ${n} ${n === 1 ? 'tecla' : 'teclas'}${comTom === '1' ? ' + tomada' : ''}`,
            qtd: placasTeclas[chave],
            unidade: 'un',
            detalhe: `Interruptor ${NOME_TECLAS[n]} — ${n} ${n === 1 ? 'luz' : 'luzes'} no conjunto`
        });
    }
    const ROTULO_TOM = {
        T10: '10A',
        T20: '20A',
        USB: 'USB'
    };
    for (const [t, q] of Object.entries(tomJunto)){
        const base = t === 'USB' ? 'USB' : t.startsWith('T20') ? 'T20' : 'T10';
        materiais.push({
            item: `Tomada ${ROTULO_TOM[base]} na placa do interruptor`,
            qtd: q,
            unidade: 'un',
            detalhe: 'Mesma placa do interruptor'
        });
    }
    // Aparente (sobrepor)
    const DET_SOB = 'Instalação aparente (sobrepor)';
    if (sob4x2 > 0) materiais.push({
        item: 'Caixa de sobrepor 4x2 (condulete)',
        qtd: sob4x2,
        unidade: 'un',
        detalhe: DET_SOB
    });
    if (sob4x4 > 0) materiais.push({
        item: 'Caixa de sobrepor 4x4 (condulete)',
        qtd: sob4x4,
        unidade: 'un',
        detalhe: DET_SOB
    });
    if (sobLuz > 0) materiais.push({
        item: 'Caixa octogonal de sobrepor (condulete) para luz',
        qtd: sobLuz,
        unidade: 'un',
        detalhe: DET_SOB
    });
    if (tampa4x2 > 0) materiais.push({
        item: 'Tampa para condulete 4x2',
        qtd: tampa4x2,
        unidade: 'un',
        detalhe: 'Para tomada/interruptor de sobrepor'
    });
    if (tampa4x4 > 0) materiais.push({
        item: 'Tampa para condulete 4x4',
        qtd: tampa4x4,
        unidade: 'un',
        detalhe: 'Para tomada/interruptor de sobrepor'
    });
    if (sobCega > 0) materiais.push({
        item: 'Tampa cega para condulete',
        qtd: sobCega,
        unidade: 'un',
        detalhe: 'Caixas de passagem aparentes'
    });
    if (tomSob10 > 0) materiais.push({
        item: 'Tomada de sobrepor 2P+T 10A',
        qtd: tomSob10,
        unidade: 'un',
        detalhe: DET_SOB
    });
    if (tomSob20 > 0) materiais.push({
        item: 'Tomada de sobrepor 2P+T 20A',
        qtd: tomSob20,
        unidade: 'un',
        detalhe: DET_SOB
    });
    if (tomSobUsb > 0) materiais.push({
        item: 'Tomada USB de sobrepor',
        qtd: tomSobUsb,
        unidade: 'un',
        detalhe: DET_SOB
    });
    for (const teclas of Object.keys(intSobTeclas).map(Number).sort((a, b)=>a - b)){
        materiais.push({
            item: `Interruptor de sobrepor ${teclas} ${teclas === 1 ? 'tecla' : 'teclas'}`,
            qtd: intSobTeclas[teclas],
            unidade: 'un',
            detalhe: DET_SOB
        });
    }
    // Conectores / emendas
    const totalConexoes = circuitos.length * 4; // estimativa
    materiais.push({
        item: 'Conector de emenda (tipo Wago ou similar)',
        qtd: totalConexoes,
        unidade: 'un'
    });
    // Fita isolante
    materiais.push({
        item: 'Fita isolante',
        qtd: Math.max(2, Math.ceil(circuitos.length / 3)),
        unidade: 'rolo'
    });
    // Fixação da instalação aparente (embutido não leva abraçadeira)
    if (metrosCanaleta > 0) {
        materiais.push({
            item: 'Bucha e parafuso para fixação de canaleta',
            qtd: Math.ceil(metrosCanaleta * 1.1 / 0.6),
            unidade: 'un',
            detalhe: 'A cada 60 cm'
        });
    }
    if (abracadeiras > 0) {
        materiais.push({
            item: 'Bucha e parafuso para abraçadeira de eletroduto',
            qtd: abracadeiras,
            unidade: 'un',
            detalhe: 'Uma por abraçadeira (eletroduto aparente)'
        });
    }
    // Materiais da entrada / alimentador principal + padrão de entrada pela categoria
    if (temEntrada && state.entrada) {
        if (quadro.caboRamal) {
            materiais.push({
                item: `Padrão de entrada categoria ${quadro.categoria}`,
                qtd: 1,
                unidade: 'conjunto',
                detalhe: `Ramal de conexão ${quadro.caboRamal}; ramal de entrada ${quadro.caboEntrada}; eletroduto ${quadro.eletrodutoEntrada} — verificar com a distribuidora`
            });
        }
        for (const m of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["materiaisEntrada"])(state.entrada)){
            materiais.push({
                item: m.descricao,
                qtd: m.qtd,
                unidade: m.unidade,
                detalhe: 'Entrada / alimentador principal'
            });
        }
    }
    // Materiais do aterramento principal
    if (state.aterramento && state.aterramento.nHastes > 0 && state.aterramento.incluirNoPdf !== false) {
        for (const m of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["materiaisAterramento"])(state.aterramento)){
            materiais.push({
                item: m.descricao,
                qtd: m.qtd,
                unidade: m.unidade,
                detalhe: 'Sistema de aterramento'
            });
        }
    }
    return {
        circuitos,
        quadro,
        materiais
    };
}
}),
"[project]/lib/server/calculator.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcPendencias",
    ()=>calcPendencias,
    "calcTotais",
    ()=>calcTotais,
    "countMods",
    ()=>countMods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ponto-equip.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/entrada-calc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aterramento-calc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navegacao.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/circuitos.ts [app-route] (ecmascript)");
/* ---------- helpers ---------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/util.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
function countMods(r, prefix) {
    let c = 0;
    for (const p of r?.pontos ?? []){
        for (const m of p?.mods ?? []){
            if ((m?.t ?? '').startsWith(prefix)) c += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pontosTomada"])(m?.t);
        }
    }
    // tomadas na caixa do interruptor (não geram caixa extra)
    for (const cmd of r?.comandos ?? []){
        for (const sw of cmd?.sws ?? []){
            if (sw?.tom && (sw?.tom ?? '').startsWith(prefix)) c += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pontosTomada"])(sw.tom);
        }
    }
    return c;
}
function entre(r) {
    const dpad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r?.dpad) || 1.5;
    let total = 0;
    for(let i = 0; i < (r?.pontos?.length ?? 0); i++){
        const p = r?.pontos?.[i];
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(p?.d);
        total += d > 0 ? d : dpad;
    }
    for(let i = 0; i < (r?.luzes?.length ?? 0); i++){
        const l = r?.luzes?.[i];
        total += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(l?.d) || dpad;
    }
    for (const cmd of r?.comandos ?? []){
        for(let i = 1; i < (cmd?.sws?.length ?? 0); i++){
            total += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(cmd?.sws?.[i]?.d) || dpad;
        }
    }
    return total;
}
function calcTotais(state) {
    const porComodo = [];
    let totalCaixas = 0, totalTomadas = 0, totalInterruptores = 0, totalUsb = 0, totalLuzes = 0, distEletroduto = 0;
    // Trajetos até o quadro sem repetir trecho compartilhado: o dd de um cômodo "pelo caminho de outro" já está
    // dentro da rota do cômodo de referência; soma-se só o desvio dr (+ o que exceder essa rota, que vira pendência).
    const rooms = state?.rooms ?? [];
    let distTrunk = 0;
    for (const r of rooms){
        if (r?.via) {
            const pai = rooms.find((x)=>x?.id === r.via);
            const excesso = pai ? Math.max(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.dd) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeLen"])(pai)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.dd);
            distTrunk += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.dr) + excesso;
        } else {
            distTrunk += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r?.dq);
        }
    }
    // Ponto dos equipamentos: 1 caixa por equipamento com caixa definida; tomada 20A conta as tomadas físicas.
    // Equipamento sem cômodo entra só no total geral.
    const equipPorRoom = new Map();
    let eqCaixasSemRoom = 0, eqTomadasSemRoom = 0;
    for (const e of state?.equips ?? []){
        const cx = e?.cx ? 1 : 0;
        const tom = e?.ponto === 'T20' || e?.ponto === 'T20D' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tomadasFisicas"])(e.ponto) : 0;
        if (!cx && !tom) continue;
        if (e?.room && rooms.some((r)=>r?.id === e.room)) {
            const acc = equipPorRoom.get(e.room) ?? {
                caixas: 0,
                tomadas: 0
            };
            acc.caixas += cx;
            acc.tomadas += tom;
            equipPorRoom.set(e.room, acc);
        } else {
            eqCaixasSemRoom += cx;
            eqTomadasSemRoom += tom;
        }
    }
    totalCaixas += eqCaixasSemRoom;
    totalTomadas += eqTomadasSemRoom;
    for (const r of rooms){
        const eq = equipPorRoom.get(r?.id ?? '') ?? {
            caixas: 0,
            tomadas: 0
        };
        const nPontos = r?.pontos?.length ?? 0;
        const nLuzes = r?.luzes?.length ?? 0;
        const nSws = (r?.comandos ?? []).reduce((a, c)=>a + (c?.sws?.length ?? 0), 0);
        const nCaixas = r?.caixas?.length ?? 0;
        const caixas = nPontos + nSws + nLuzes + nCaixas + eq.caixas;
        const tomadas = countMods(r, 'T') + eq.tomadas;
        const usbCount = countMods(r, 'USB');
        const interruptores = nSws;
        const dInterna = entre(r);
        porComodo.push({
            roomId: r?.id ?? '',
            nome: r?.nome ?? r?.base ?? '',
            caixas,
            tomadas,
            interruptores,
            luzes: nLuzes,
            distInterna: Math.round(dInterna * 10) / 10,
            distTrajeto: Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeLen"])(r) * 10) / 10
        });
        totalCaixas += caixas;
        totalTomadas += tomadas;
        totalInterruptores += interruptores;
        totalUsb += usbCount;
        totalLuzes += nLuzes;
        distEletroduto += dInterna;
    }
    // Eletroduto da prévia = trechos internos + trajetos até o quadro (sem duplicar trecho compartilhado).
    // Equipamentos não entram: o circuito deles é dimensionado só no PDF pago.
    distEletroduto += distTrunk;
    return {
        totalCaixas,
        totalTomadas,
        totalInterruptores,
        totalUsb,
        totalLuzes,
        distEletroduto: Math.round(distEletroduto * 10) / 10,
        distTrunk: Math.round(distTrunk * 10) / 10,
        porComodo
    };
}
function calcPendencias(state) {
    const p = [];
    if (!state?.imovel) p.push({
        tipo: 'erro',
        msg: 'Tipo de imóvel não informado',
        step: 0
    });
    if (!state?.obra) p.push({
        tipo: 'erro',
        msg: 'Tipo de obra não informado',
        step: 0
    });
    if (!state?.cobertura) p.push({
        tipo: 'aviso',
        msg: 'Tipo de cobertura não informado',
        step: 0
    });
    if (!state?.rede) p.push({
        tipo: 'aviso',
        msg: 'Tipo de ligação elétrica não informado',
        step: 0
    });
    if ((state?.rooms?.length ?? 0) === 0) {
        p.push({
            tipo: 'erro',
            msg: 'Nenhum cômodo adicionado',
            step: 1
        });
    }
    for (const r of state?.rooms ?? []){
        const rn = r?.nome || r?.base || 'Cômodo';
        if (!r?.nome) p.push({
            tipo: 'aviso',
            msg: `${rn}: sem nome definido`,
            step: 1,
            roomId: r?.id
        });
        if (!r?.c || !r?.l) p.push({
            tipo: 'aviso',
            msg: `${rn}: medidas não informadas`,
            step: 1,
            roomId: r?.id
        });
        if (!r?.dq && !r?.via) p.push({
            tipo: 'aviso',
            msg: `${rn}: distância ao quadro não informada`,
            step: 1,
            roomId: r?.id
        });
        if (r?.via) {
            if (!r?.dd) p.push({
                tipo: 'aviso',
                msg: `${rn}: distância do trecho compartilhado não informada`,
                step: 1,
                roomId: r?.id
            });
            if (!r?.dr) p.push({
                tipo: 'aviso',
                msg: `${rn}: distância do desvio ao cômodo não informada`,
                step: 1,
                roomId: r?.id
            });
            const pai = (state?.rooms ?? []).find((x)=>x?.id === r.via);
            if (pai && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.dd) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeLen"])(pai)) {
                p.push({
                    tipo: 'erro',
                    msg: `${rn}: trecho compartilhado maior que a rota de "${pai?.nome || pai?.base}"`,
                    step: 1,
                    roomId: r?.id
                });
            }
        }
        if ((r?.pontos?.length ?? 0) === 0 && (r?.luzes?.length ?? 0) === 0) {
            p.push({
                tipo: 'aviso',
                msg: `${rn}: nenhum ponto elétrico adicionado`,
                step: 2,
                roomId: r?.id
            });
        }
        // NBR 5410 (9.5.2.2.1): quantidade mínima de pontos de tomada pelo perímetro/tipo do cômodo
        const nbr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tomadasNbr"])(r);
        if (nbr && nbr.atual < nbr.minimo) {
            p.push({
                tipo: 'aviso',
                msg: `${rn}: ${nbr.atual} ${nbr.atual === 1 ? 'tomada' : 'tomadas'} — a NBR 5410 pede no mínimo ${nbr.minimo} para este cômodo`,
                step: 2,
                roomId: r?.id
            });
        }
        if (!r?.inst) p.push({
            tipo: 'aviso',
            msg: `${rn}: tipo de instalação não definido`,
            step: 2,
            roomId: r?.id
        });
        // Luzes sem interruptor
        const luzIds = new Set((r?.luzes ?? []).map((l)=>l?.id));
        const luzComCmd = new Set();
        for (const cmd of r?.comandos ?? []){
            for (const lid of cmd?.luzes ?? [])luzComCmd.add(lid);
            if ((cmd?.luzes?.length ?? 0) === 0) {
                p.push({
                    tipo: 'aviso',
                    msg: `${rn}: interruptor sem luz associada`,
                    step: 2,
                    roomId: r?.id
                });
            }
        }
        for (const lid of luzIds){
            if (!luzComCmd.has(lid)) {
                p.push({
                    tipo: 'aviso',
                    msg: `${rn}: ponto de luz sem interruptor`,
                    step: 2,
                    roomId: r?.id
                });
            }
        }
    }
    for (const e of state?.equips ?? []){
        const en = e?.tipo || 'Equipamento';
        if (!e?.tipo) p.push({
            tipo: 'erro',
            msg: `Equipamento sem tipo definido`,
            step: 3,
            equipId: e?.id
        });
        if (!e?.room) p.push({
            tipo: 'aviso',
            msg: `${en}: cômodo não definido`,
            step: 3,
            equipId: e?.id
        });
        if (!e?.pot) p.push({
            tipo: 'aviso',
            msg: `${en}: potência não informada`,
            step: 3,
            equipId: e?.id
        });
        if (!e?.tens) p.push({
            tipo: 'aviso',
            msg: `${en}: tensão não informada`,
            step: 3,
            equipId: e?.id
        });
        const I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["correnteEquip"])(e?.pot, e?.tens, e?.tipo);
        if (I !== null && I > 16 && e?.ponto !== 'emenda' && e?.ponto !== 'borne') {
            p.push({
                tipo: 'aviso',
                msg: `${en}: corrente estimada ${I.toFixed(1).replace('.', ',')} A — considere ligação direta`,
                step: 3,
                equipId: e?.id
            });
        }
    }
    // Divisão dos circuitos (passo 3): distância entre cômodos que dividem circuito, limites de potência etc.
    if (state?.circuitos && state.circuitos.modo !== 'norma') {
        for (const msg of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolverUnidades"])(state.rooms ?? [], state.circuitos).avisos)p.push({
            tipo: 'aviso',
            msg: `Circuitos: ${msg}`,
            step: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STEP_EQUIPAMENTOS"]
        });
    }
    // Entrada / alimentador (passo 4). Orçamentos sem `entrada` (antigos ou do fluxo do PDF) não geram pendência.
    const ent = state?.entrada;
    if (ent) {
        if (!ent.percurso) p.push({
            tipo: 'aviso',
            msg: 'Entrada: percurso não informado',
            step: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STEP_ENTRADA"]
        });
        for (const a of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["avisosEntrada"])(ent)){
            if (!ent.percurso && a.msg.startsWith('Informe o percurso')) continue; // já coberto acima
            p.push({
                tipo: 'aviso',
                msg: `Entrada: ${a.msg}`,
                step: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STEP_ENTRADA"]
            });
        }
    }
    // Aterramento principal (passo 5). Sem `aterramento` (orçamentos antigos / fluxo do PDF) não gera pendência.
    if (state?.aterramento) {
        for (const a of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["avisosAterramento"])(state.aterramento))p.push({
            tipo: a.tipo,
            msg: `Aterramento: ${a.msg}`,
            step: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STEP_ATERRAMENTO"]
        });
    }
    return p;
}
}),
"[project]/lib/server/circuitos.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== Divisão de circuitos (NBR 5410) — servidor =====
 * Cada "unidade" é um cômodo sozinho ou um grupo de cômodos vizinhos. Cada unidade gera:
 *   - circuito de iluminação + circuito de tomadas (separados, padrão da norma), ou
 *   - um circuito só (iluminação + tomadas), quando `unico` e o cômodo for comum.
 * No grupo, o cabo é medido UMA vez: trajeto até o quadro do 1º cômodo + metros extras até cada vizinho
 * (nunca o trajeto inteiro de cada cômodo) — assim cabo e eletroduto não se duplicam.
 */ __turbopack_context__.s([
    "LIMITE_VA_AGRUPADO",
    ()=>LIMITE_VA_AGRUPADO,
    "circuitosBrutos",
    ()=>circuitosBrutos,
    "compararCircuitos",
    ()=>compararCircuitos,
    "resolverUnidades",
    ()=>resolverUnidades
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/util.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motor/eletrica.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/circuitos-config.ts [app-route] (ecmascript)");
;
;
;
;
const LIMITE_VA_AGRUPADO = 2500;
const nomeDe = (r)=>r?.nome || r?.base || 'Cômodo';
/** Pontos de tomada do cômodo (mesma regra de countMods, sem importar o calculator). */ function nTomadas(r) {
    let n = 0;
    for (const p of r?.pontos ?? [])for (const m of p?.mods ?? [])if (String(m?.t ?? '').startsWith('T')) n += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pontosTomada"])(m.t);
    for (const c of r?.comandos ?? [])for (const sw of c?.sws ?? [])if (String(sw?.tom ?? '').startsWith('T')) n += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pontosTomada"])(sw.tom);
    return n;
}
const potIlum = (r)=>(r?.luzes?.length ?? 0) > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["potenciaIluminacao"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.c) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(r.l), r.luzes.length) : 0;
const potTug = (r)=>nTomadas(r) > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$eletrica$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["potenciaTUG"])(nTomadas(r), r.base || nomeDe(r)) : 0;
const mesmaInstalacao = (a, b)=>(a?.inst ?? '') === (b?.inst ?? '') && (a?.materialAparente ?? '') === (b?.materialAparente ?? '');
/** Modo "mais econômico": junta o cômodo com aquele cujo caminho ele segue ("pelo caminho de outro"); metros extras = desvio (dr). */ function gruposPorVia(rooms) {
    const porId = new Map(rooms.map((r)=>[
            r.id,
            r
        ]));
    const pai = new Map();
    for (const r of rooms){
        const p = r.via ? porId.get(r.via) : undefined;
        if (!p || p.id === r.id) continue;
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(r);
        if (c === 'isolado' || c !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(p) || !mesmaInstalacao(r, p)) continue;
        pai.set(r.id, p.id);
    }
    const raiz = (id)=>{
        const seen = new Set();
        let x = id;
        while(pai.has(x) && !seen.has(x)){
            seen.add(x);
            x = pai.get(x);
        }
        return x;
    };
    const comp = new Map();
    for (const r of rooms){
        if (!pai.has(r.id) && ![
            ...pai.values()
        ].includes(r.id)) continue;
        const k = raiz(r.id);
        comp.set(k, [
            ...comp.get(k) ?? [],
            r
        ]);
    }
    const out = [];
    for (const [k, membros] of comp){
        if (membros.length < 2) continue;
        const ordem = [
            porId.get(k),
            ...membros.filter((m)=>m.id !== k)
        ];
        out.push({
            id: `auto_${k}`,
            rooms: ordem.map((m)=>m.id),
            dists: ordem.map((m, i)=>i === 0 || !((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(m.dr) > 0) ? '' : String((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(m.dr))),
            unico: true
        });
    }
    return out;
}
function resolverUnidades(rooms, cfgIn, modoForcado) {
    rooms = rooms ?? [];
    const cfg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["podarConfig"])(cfgIn, rooms);
    const modo = modoForcado ?? cfg.modo ?? 'norma';
    const avisos = [];
    const porId = new Map(rooms.map((r)=>[
            r.id,
            r
        ]));
    const unicoSolto = (r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(r) === 'comum' && (modo === 'economico' || modo === 'maximo' || modo === 'manual' && cfg.unico.includes(r.id));
    // 1) Grupos válidos: mesma classe (comum com comum, serviço com serviço), nunca isolado, mesma instalação, cada cômodo em 1 grupo.
    const brutos = modo === 'maximo' ? gruposPorVia(rooms) : modo === 'manual' ? cfg.grupos : [];
    const usados = new Set();
    const grupos = [];
    for (const g of brutos){
        const membros = [], dists = [];
        g.rooms.forEach((id, i)=>{
            const r = porId.get(id);
            if (!r || usados.has(id) || membros.includes(r)) return; // cômodo inexistente, já em outro grupo ou repetido neste
            const primeiro = membros[0];
            const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(r) !== 'isolado' && (!primeiro || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(r) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(primeiro) && mesmaInstalacao(r, primeiro));
            if (!ok) {
                if (modo === 'manual') avisos.push(`${nomeDe(r)} não pode dividir circuito com ${nomeDe(primeiro ?? r)} (tipo de cômodo ou instalação diferente): fica separado.`);
                return;
            }
            membros.push(r);
            dists.push(membros.length === 1 ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["num"])(g.dists?.[i]));
        });
        if (membros.length < 2) continue;
        membros.forEach((m)=>usados.add(m.id));
        grupos.push({
            id: g.id,
            rooms: membros,
            dists,
            unico: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classeCircuito"])(membros[0]) === 'comum' && (modo === 'maximo' || !!g.unico)
        });
    }
    // 2) Unidades na ordem dos cômodos (o grupo entra onde está o primeiro membro).
    const unidades = [];
    const emitidos = new Set();
    for (const r of rooms){
        const g = grupos.find((x)=>x.rooms.includes(r));
        if (g) {
            if (emitidos.has(g.id)) continue;
            emitidos.add(g.id);
            unidades.push({
                rooms: g.rooms,
                dists: g.dists,
                unico: g.unico,
                grupoId: g.id
            });
        } else {
            unidades.push({
                rooms: [
                    r
                ],
                dists: [
                    0
                ],
                unico: unicoSolto(r)
            });
        }
    }
    // 3) Teto de potência: se o circuito juntado passa do limite, volta a separar (primeiro iluminação/tomadas, depois os cômodos).
    const final = [];
    for (const u of unidades){
        const ilum = u.rooms.reduce((s, r)=>s + potIlum(r), 0);
        const tug = u.rooms.reduce((s, r)=>s + potTug(r), 0);
        const nomes = u.rooms.map(nomeDe).join(' + ');
        let unico = u.unico;
        if (unico && ilum + tug > LIMITE_VA_AGRUPADO) {
            unico = false;
            if (ilum > 0 && tug > 0) avisos.push(`${nomes}: iluminação e tomadas somam mais de ${LIMITE_VA_AGRUPADO} VA — ficam em disjuntores separados.`);
        }
        if (u.rooms.length > 1 && !unico && (ilum > LIMITE_VA_AGRUPADO || tug > LIMITE_VA_AGRUPADO)) {
            avisos.push(`${nomes}: juntos passam de ${LIMITE_VA_AGRUPADO} VA num circuito — cada cômodo fica com o seu.`);
            for (const r of u.rooms)final.push({
                rooms: [
                    r
                ],
                dists: [
                    0
                ],
                unico: false
            });
            continue;
        }
        u.dists.forEach((d, i)=>{
            if (i > 0 && !(d > 0)) avisos.push(`Informe a distância entre ${nomeDe(u.rooms[i - 1])} e ${nomeDe(u.rooms[i])} (cabo a mais para chegar lá).`);
        });
        final.push({
            ...u,
            unico
        });
    }
    const resolvido = {
        modo: 'manual',
        unico: final.filter((u)=>u.rooms.length === 1 && u.unico).map((u)=>u.rooms[0].id),
        grupos: final.filter((u)=>u.rooms.length > 1).map((u)=>({
                id: u.grupoId ?? `g_${u.rooms[0].id}`,
                rooms: u.rooms.map((r)=>r.id),
                dists: u.dists.map((d, i)=>i === 0 || !(d > 0) ? '' : String(d)),
                ...u.unico ? {
                    unico: true
                } : {}
            }))
    };
    return {
        unidades: final,
        avisos,
        resolvido
    };
}
function circuitosBrutos(unidades) {
    const out = [];
    unidades.forEach((u, k)=>{
        const nomes = u.rooms.map(nomeDe).join(' + ');
        const ilum = u.rooms.reduce((s, r)=>s + potIlum(r), 0);
        const tug = u.rooms.reduce((s, r)=>s + potTug(r), 0);
        const temLuz = (r)=>(r?.luzes?.length ?? 0) > 0;
        const temTom = (r)=>nTomadas(r) > 0;
        /** Cabo do circuito: trajeto do 1º cômodo + metros extras só até o último cômodo que usa este circuito (cômodo vazio no fim não gasta cabo). */ const comprimento = (usa)=>{
            let ultimo = 0;
            u.rooms.forEach((r, i)=>{
                if (usa(r)) ultimo = i;
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeLen"])(u.rooms[0]) + u.dists.slice(1, ultimo + 1).reduce((s, d)=>s + (d > 0 ? d : 0), 0);
        };
        const temI = u.rooms.some(temLuz), temT = u.rooms.some(temTom);
        const base = {
            comodo: nomes,
            unidade: k,
            rooms: u.rooms
        };
        if (u.unico && temI && temT) {
            out.push({
                ...base,
                nome: `Iluminação e tomadas — ${nomes}`,
                tipo: 'misto',
                potenciaW: ilum + tug,
                comprimentoM: comprimento((r)=>temLuz(r) || temTom(r))
            });
            return;
        }
        if (temI) out.push({
            ...base,
            nome: `Iluminação — ${nomes}`,
            tipo: 'iluminacao',
            potenciaW: ilum,
            comprimentoM: comprimento(temLuz)
        });
        if (temT) out.push({
            ...base,
            nome: `Tomadas (TUG) — ${nomes}`,
            tipo: 'tug',
            potenciaW: tug,
            comprimentoM: comprimento(temTom)
        });
    });
    return out;
}
function resumir(rooms, nTUE, cfg, modo) {
    const res = resolverUnidades(rooms, cfg, modo);
    const br = circuitosBrutos(res.unidades);
    const metros = br.reduce((s, c)=>s + c.comprimentoM, 0);
    return {
        res,
        r: {
            circuitos: br.length,
            disjuntores: br.length + nTUE,
            metrosCabo: Math.round(metros * 10) / 10,
            avisos: res.avisos
        }
    };
}
function compararCircuitos(rooms, equips, cfg) {
    const nTUE = (equips ?? []).filter((e)=>e?.tipo && e?.pot).length;
    const modos = {
        norma: resumir(rooms, nTUE, cfg, 'norma').r,
        economico: resumir(rooms, nTUE, cfg, 'economico').r,
        maximo: resumir(rooms, nTUE, cfg, 'maximo').r
    };
    const modo = cfg?.modo ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configPadrao"])().modo;
    const atual = resumir(rooms, nTUE, cfg);
    return {
        nTUE,
        modos,
        atual: {
            ...atual.r,
            modo
        },
        resolvido: atual.res.resolvido
    };
}
}),
"[project]/lib/server/log.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logErro",
    ()=>logErro
]);
/* Logger do servidor: uma linha JSON por evento (fácil de filtrar no painel do Netlify), sem e-mails. */ const EMAIL = /[^\s@"'<>]+@[^\s@"'<>]+\.[^\s@"'<>]+/g;
function serializar(v) {
    if (v instanceof Error) return {
        nome: v.name,
        msg: v.message,
        stack: v.stack?.split('\n').slice(0, 6).join('\n')
    };
    return v;
}
function logErro(contexto, mensagem, ...detalhes) {
    let linha;
    try {
        linha = JSON.stringify({
            nivel: 'erro',
            contexto,
            mensagem,
            detalhes: detalhes.map(serializar),
            em: new Date().toISOString()
        });
    } catch  {
        linha = JSON.stringify({
            nivel: 'erro',
            contexto,
            mensagem
        });
    }
    // Único ponto do app que escreve no console: é por ele que o Netlify Functions coleta os logs.
    console.error(linha.replace(EMAIL, '[email]'));
}
}),
"[project]/lib/server/mercadopago.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buscarPagamento",
    ()=>buscarPagamento,
    "criarPix",
    ()=>criarPix,
    "preco",
    ()=>preco
]);
/* Mercado Pago — somente Pix. Roda apenas no servidor. */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/log.ts [app-route] (ecmascript)");
;
const API = 'https://api.mercadopago.com';
function preco() {
    const n = Number(process.env.PRECO ?? '5.90');
    return Number.isFinite(n) && n >= 0.01 ? Math.round(n * 100) / 100 : 5.9;
}
function accessToken() {
    const t = process.env.MP_ACCESS_TOKEN;
    if (!t) throw new Error('MP_ACCESS_TOKEN não configurada');
    return t;
}
/** Data no formato que o Mercado Pago exige: ISO com fuso (-03:00). */ function isoBrasilia(d) {
    return new Date(d.getTime() - 3 * 3600_000).toISOString().replace('Z', '-03:00');
}
async function criarPix(opts) {
    const minutos = Math.max(30, Number(process.env.PIX_EXPIRA_MIN ?? '30') || 30);
    const res = await fetch(`${API}/v1/payments`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken()}`,
            'Content-Type': 'application/json',
            'X-Idempotency-Key': opts.idempotencia
        },
        body: JSON.stringify({
            transaction_amount: preco(),
            description: 'OrçaElétrica — PDF do orçamento',
            payment_method_id: 'pix',
            external_reference: opts.orcamentoId,
            date_of_expiration: isoBrasilia(new Date(Date.now() + minutos * 60_000)),
            payer: {
                email: opts.email
            }
        }),
        cache: 'no-store'
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logErro"])('mp', 'erro ao criar Pix', res.status, JSON.stringify(data).slice(0, 500));
        throw new Error('mp_criar_falhou');
    }
    const td = data?.point_of_interaction?.transaction_data;
    if (!data?.id || !td?.qr_code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logErro"])('mp', 'resposta sem QR', JSON.stringify(data).slice(0, 500));
        throw new Error('mp_sem_qr');
    }
    return {
        id: String(data.id),
        status: String(data.status),
        qrCode: String(td.qr_code),
        qrBase64: String(td.qr_code_base64 ?? ''),
        expira: String(data.date_of_expiration ?? '')
    };
}
async function buscarPagamento(id) {
    const res = await fetch(`${API}/v1/payments/${encodeURIComponent(id)}`, {
        headers: {
            Authorization: `Bearer ${accessToken()}`
        },
        cache: 'no-store'
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logErro"])('mp', 'erro ao consultar', res.status, JSON.stringify(data).slice(0, 300));
        throw new Error('mp_consulta_falhou');
    }
    return {
        id: String(data.id),
        status: String(data.status),
        statusDetail: String(data.status_detail ?? ''),
        valor: Number(data.transaction_amount),
        referencia: String(data.external_reference ?? ''),
        expira: String(data.date_of_expiration ?? '')
    };
}
}),
"[project]/lib/server/nbr5410.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eletrodutoDN",
    ()=>eletrodutoDN
]);
/* ===== Eletroduto (ocupação, A VALIDAR — decisão 10.7) e tipo de item de material ===== */ /**
 * Diâmetro nominal do eletroduto (mm) conforme número de condutores e seção.
 * Tabela 7 ABNT NBR 15465 / regra dos 40% (máximo 40% de ocupação).
 * Simplificação: até 3 condutores de 2.5 mm² → 20 mm; até 6 de 4 mm² → 25 mm; etc.
 */ const ELETRODUTO_NOMINAL = [
    {
        maxArea: 42,
        dn: 20
    },
    {
        maxArea: 78,
        dn: 25
    },
    {
        maxArea: 126,
        dn: 32
    },
    {
        maxArea: 201,
        dn: 40
    },
    {
        maxArea: 330,
        dn: 50
    }
];
/** Área de seção transversal do condutor com isolação (mm² — aprox) */ function areaCondutor(secao) {
    const map = {
        0.5: 5,
        0.75: 6,
        1.0: 7.6,
        1.5: 9.8,
        2.5: 13.9,
        4: 18.1,
        6: 23.4,
        10: 37.4,
        16: 55.7,
        25: 84.3,
        35: 111,
        50: 152,
        70: 211
    };
    return map[secao] ?? 14;
}
function eletrodutoDN(secaoCondutor, nCondutores) {
    const areaTotal = areaCondutor(secaoCondutor) * nCondutores;
    for (const row of ELETRODUTO_NOMINAL){
        if (areaTotal <= row.maxArea) return row.dn;
    }
    return 50;
}
}),
"[project]/lib/server/pedido.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMAIL",
    ()=>EMAIL,
    "UUID",
    ()=>UUID,
    "chaveConfere",
    ()=>chaveConfere,
    "conferir",
    ()=>conferir,
    "erro",
    ()=>erro,
    "hashChave",
    ()=>hashChave,
    "novaChave",
    ()=>novaChave,
    "ok",
    ()=>ok,
    "situacao",
    ()=>situacao
]);
/* Regras compartilhadas pelas rotas: valida dono do orçamento e confere o pagamento no Mercado Pago. */ var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$mercadopago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/mercadopago.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/log.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$store$2d$blobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/store-blobs.ts [app-route] (ecmascript)");
;
;
;
;
;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const ID_MP = /^\d{3,20}$/;
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const hashChave = (c)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(c).digest('hex');
const novaChave = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(24).toString('hex');
function erro(status, codigo) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        erro: codigo
    }, {
        status,
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
function ok(corpo) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(corpo, {
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
function chaveConfere(chave, hashGuardado) {
    const a = Buffer.from(hashChave(chave), 'hex');
    const b = Buffer.from(hashGuardado, 'hex');
    return a.length === b.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(a, b);
}
function situacao(mp, orcamentoId) {
    if (mp.status === 'approved') {
        // Só vale se for este orçamento e o valor cobrado.
        if (mp.referencia !== orcamentoId || Math.abs(mp.valor - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$mercadopago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preco"])()) > 0.001) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logErro"])('pedido', 'pagamento aprovado não confere', mp.id);
            return 'recusado';
        }
        return 'aprovado';
    }
    if (mp.status === 'pending' || mp.status === 'in_process' || mp.status === 'authorized') {
        const exp = Date.parse(mp.expira);
        return Number.isFinite(exp) && Date.now() > exp + 5000 ? 'vencido' : 'pendente';
    }
    if (mp.status === 'cancelled' && /expired/i.test(mp.statusDetail)) return 'vencido';
    return 'recusado';
}
async function conferir(orcamentoId, pagamentoId, chave) {
    if (!UUID.test(orcamentoId) || !ID_MP.test(pagamentoId) || !chave) return {
        falha: erro(400, 'dados_invalidos')
    };
    const orc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$store$2d$blobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lerJSON"])(`orc/${orcamentoId}`);
    if (!orc || !chaveConfere(chave, orc.chaveHash)) return {
        falha: erro(404, 'nao_encontrado')
    };
    const pag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$store$2d$blobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lerJSON"])(`pag/${pagamentoId}`);
    if (!pag || pag.orcamentoId !== orcamentoId) return {
        falha: erro(404, 'nao_encontrado')
    };
    try {
        const mp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$mercadopago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buscarPagamento"])(pagamentoId);
        return {
            orc,
            pag,
            mp,
            estado: situacao(mp, orcamentoId)
        };
    } catch  {
        return {
            falha: erro(502, 'mp_indisponivel')
        };
    }
}
}),
"[project]/lib/server/rota.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErroApi",
    ()=>ErroApi,
    "exigirDados",
    ()=>exigirDados,
    "lerCorpo",
    ()=>lerCorpo,
    "rota",
    ()=>rota
]);
/* Middleware compartilhado das rotas de API: leitura do corpo + tratamento de erros num só lugar. */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/pedido.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/log.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$limpeza$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/limpeza.ts [app-route] (ecmascript)");
;
;
;
;
class ErroApi extends Error {
    status;
    codigo;
    causa;
    constructor(status, codigo, causa){
        super(codigo), this.status = status, this.codigo = codigo, this.causa = causa;
    }
}
function rota(nome, fn) {
    return async (req)=>{
        try {
            return await fn(req);
        } catch (e) {
            if (e instanceof ErroApi) {
                if (e.causa !== undefined || e.status >= 500) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logErro"])(nome, e.codigo, e.causa);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["erro"])(e.status, e.codigo);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$log$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logErro"])(nome, 'erro_inesperado', e);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["erro"])(500, 'erro_interno');
        }
    };
}
function exigirDados(d, completo) {
    const problema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["problemaEstrutura"])(d);
    if (problema) throw new ErroApi(400, 'dados_invalidos');
    // Rede de segurança: sem ponto vazio, interruptor sem função nem referência a cômodo removido no cálculo.
    const dados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$limpeza$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["limparOrfaos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["somenteDados"])(d));
    if (completo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["faltasObrigatorias"])(dados).length > 0) throw new ErroApi(422, 'dados_incompletos');
    return dados;
}
async function lerCorpo(req, limite = 300_000) {
    const texto = await req.text();
    if (texto.length > limite) throw new ErroApi(413, 'muito_grande');
    try {
        return JSON.parse(texto);
    } catch  {
        throw new ErroApi(400, 'json_invalido');
    }
}
}),
"[project]/lib/server/store-blobs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entregaFeita",
    ()=>entregaFeita,
    "gravarJSON",
    ()=>gravarJSON,
    "lerJSON",
    ()=>lerJSON,
    "travarEntrega",
    ()=>travarEntrega
]);
/*
 * Netlify Blobs — só o mínimo para o Pix (roda apenas no servidor):
 *   orc/{orcamentoId}   dono do pedido (hash da chave secreta + e-mail). NENHUM dado do orçamento.
 *   pag/{pagamentoId}   vínculo Pix → pedido.
 *   entrega/{pagId}     trava: o PDF original é entregue uma única vez por pagamento.
 * Os dados do orçamento, o PDF e a contagem de edições ficam no navegador (lib/storage-local.ts).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$netlify$2f$blobs$2f$dist$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@netlify/blobs/dist/main.js [app-route] (ecmascript) <locals>");
;
const loja = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$netlify$2f$blobs$2f$dist$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStore"])({
        name: 'orca-eletrica',
        consistency: 'strong'
    });
async function lerJSON(chave) {
    return await loja().get(chave, {
        type: 'json'
    });
}
async function gravarJSON(chave, valor) {
    await loja().setJSON(chave, valor);
}
async function travarEntrega(pagamentoId) {
    const r = await loja().set(`entrega/${pagamentoId}`, new Date().toISOString(), {
        onlyIfNew: true
    });
    return r.modified === true;
}
async function entregaFeita(pagamentoId) {
    return await loja().get(`entrega/${pagamentoId}`) !== null;
}
}),
"[project]/lib/tensao-por-uf.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TABELA_11_VA",
    ()=>TABELA_11_VA,
    "TABELA_5_W",
    ()=>TABELA_5_W,
    "UFS",
    ()=>UFS,
    "bitolaEntrada",
    ()=>bitolaEntrada,
    "calcularDemandaDIS",
    ()=>calcularDemandaDIS,
    "categoriaDisNor",
    ()=>categoriaDisNor,
    "infoUf",
    ()=>infoUf,
    "sistemaSugeridoUf",
    ()=>sistemaSugeridoUf,
    "tabela11",
    ()=>tabela11,
    "tabela14",
    ()=>tabela14,
    "tabela16",
    ()=>tabela16,
    "tabela5",
    ()=>tabela5
]);
/* ===== UF → distribuidora → tensão, e pré-dimensionamento da entrada pela DIS-NOR-030 Rev.05 ===== */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motor/demanda.ts [app-route] (ecmascript)");
;
const uf = (sigla, nome, tensao, distribuidora, tabelaCategoria, verificar = true)=>({
        uf: sigla,
        nome,
        tensao,
        distribuidora,
        tabelaCategoria,
        verificar
    });
const UFS = [
    uf('AC', 'Acre', '220/127', 'Energisa Acre', 'generica_220'),
    uf('AL', 'Alagoas', '380/220', 'Equatorial Alagoas', 'generica_380'),
    uf('AP', 'Amapá', '220/127', 'Equatorial Amapá (CEA)', 'generica_220'),
    uf('AM', 'Amazonas', '380/220', 'Amazonas Energia', 'generica_380'),
    uf('BA', 'Bahia', '220/127', 'Neoenergia Coelba', 'tab1_coelba', false),
    uf('CE', 'Ceará', '380/220', 'Enel Ceará', 'generica_380'),
    uf('DF', 'Distrito Federal', '380/220', 'Neoenergia Brasília', 'tab2_pe', false),
    uf('ES', 'Espírito Santo', '220/127', 'EDP Espírito Santo', 'generica_220'),
    uf('GO', 'Goiás', '380/220', 'Equatorial Goiás', 'generica_380'),
    uf('MA', 'Maranhão', '380/220', 'Equatorial Maranhão', 'generica_380'),
    uf('MT', 'Mato Grosso', '380/220', 'Energisa Mato Grosso', 'generica_380'),
    uf('MS', 'Mato Grosso do Sul', '220/127', 'Energisa Mato Grosso do Sul', 'tab3_elektro'),
    uf('MG', 'Minas Gerais', '220/127', 'Cemig', 'generica_220'),
    uf('PA', 'Pará', '380/220', 'Equatorial Pará', 'generica_380'),
    uf('PB', 'Paraíba', '380/220', 'Energisa Paraíba', 'generica_380'),
    uf('PR', 'Paraná', '220/127', 'Copel', 'generica_220'),
    uf('PE', 'Pernambuco', '380/220', 'Neoenergia Pernambuco', 'tab2_pe', false),
    uf('PI', 'Piauí', '380/220', 'Equatorial Piauí', 'generica_380'),
    uf('RJ', 'Rio de Janeiro', '220/127', 'Light / Enel Rio', 'generica_220'),
    uf('RN', 'Rio Grande do Norte', '380/220', 'Neoenergia Cosern', 'tab2_pe', false),
    uf('RS', 'Rio Grande do Sul', '220/127', 'CEEE Equatorial / RGE', 'generica_220'),
    uf('RO', 'Rondônia', '380/220', 'Energisa Rondônia', 'generica_380'),
    uf('RR', 'Roraima', '220/127', 'Roraima Energia', 'generica_220'),
    uf('SC', 'Santa Catarina', '220/127', 'Celesc', 'generica_220'),
    uf('SP', 'São Paulo', '220/127', 'Enel SP / CPFL / Elektro / EDP', 'tab3_elektro'),
    uf('SE', 'Sergipe', '380/220', 'Energisa Sergipe', 'generica_380'),
    uf('TO', 'Tocantins', '380/220', 'Energisa Tocantins', 'generica_380')
];
function infoUf(sigla) {
    return UFS.find((u)=>u.uf === String(sigla ?? '').toUpperCase());
}
function sistemaSugeridoUf(tensao, cargaKw) {
    if (tensao === '380/220') return cargaKw > 15 ? 'trifasico' : 'monofasico';
    if (cargaKw > 18) return 'trifasico';
    return cargaKw > 10 ? 'bifasico' : 'monofasico';
}
const TABELA_5_W = [
    [
        8,
        700
    ],
    [
        15,
        900
    ],
    [
        20,
        1600
    ],
    [
        30,
        1700
    ],
    [
        50,
        2400
    ],
    [
        70,
        2500
    ],
    [
        90,
        2600
    ],
    [
        110,
        2700
    ],
    [
        140,
        2800
    ],
    [
        170,
        2900
    ],
    [
        200,
        3000
    ],
    [
        220,
        3100
    ],
    [
        250,
        3200
    ]
];
const tabela5 = (areaM2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cargaTomadasW"])(areaM2, 0);
;
const TABELA_11_VA = [
    [
        7500,
        1100
    ],
    [
        9000,
        1550
    ],
    [
        10000,
        1650
    ],
    [
        12000,
        1900
    ],
    [
        15000,
        2100
    ],
    [
        18000,
        2860
    ],
    [
        21000,
        3080
    ],
    [
        30000,
        4000
    ]
];
function tabela11(btu) {
    return (TABELA_11_VA.find(([b])=>btu <= b) ?? TABELA_11_VA[TABELA_11_VA.length - 1])[1];
}
function tabela14(motoresKva) {
    if (!motoresKva.length) return 0;
    const ord = [
        ...motoresKva
    ].sort((a, b)=>b - a);
    return ord[0] + ord.slice(1).reduce((s, x)=>s + x * 0.5, 0);
}
function tabela16(n) {
    return n <= 1 ? 1 : n === 2 ? 0.56 : n === 3 ? 0.47 : 0.39;
}
const soma = (v)=>(v ?? []).reduce((s, x)=>s + (x > 0 ? x : 0), 0);
const qtd = (v)=>(v ?? []).filter((x)=>x > 0).length;
const r3 = (v)=>Math.round(v * 1000) / 1000;
function calcularDemandaDIS(c) {
    const it = c.iluminacaoTomadasKw ?? (tabela5(c.areaM2 ?? 0) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cargaIluminacaoW"])(0, c.nComodos ?? 0)) / 1000;
    const p = {
        a: it * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fatorTabela6"])(it),
        b: soma(c.resistivos) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fatorTabela7"])(qtd(c.resistivos)),
        c: soma(c.boilers) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fatorTabela8"])(qtd(c.boilers)),
        d: soma(c.maquinas) / 0.92 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fatorTabela9"])(qtd(c.maquinas)),
        e: soma(c.fogoes) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fatorTabela10"])(qtd(c.fogoes)),
        f: soma(c.arKva) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fatorTabela12"])(qtd(c.arKva)),
        g: tabela14((c.motoresKva ?? []).filter((x)=>x > 0)),
        i: soma(c.bombas) * tabela16(qtd(c.bombas)),
        j: soma(c.veiculoKva),
        outros: soma(c.outrosKw)
    };
    const carga = it + soma(c.resistivos) + soma(c.boilers) + soma(c.maquinas) + soma(c.fogoes) + soma(c.arKva) + soma(c.motoresKva) + soma(c.bombas) + soma(c.veiculoKva) + soma(c.outrosKw);
    const parcelas = Object.fromEntries(Object.entries(p).map(([k, v])=>[
            k,
            r3(v)
        ]));
    return {
        cargaInstaladaKw: r3(carga),
        demandaKva: r3(Object.values(p).reduce((s, x)=>s + x, 0)),
        parcelas
    };
}
/* ---------- Categoria de atendimento ---------- */ /** Tabela 2 (380/220 V): ramal de conexão e cabo de cobre do ramal de entrada. */ const CABOS_TAB2 = {
    M2: {
        ramal: '6+6 mm² Cu concêntrico',
        entrada: '6 mm² Cu',
        secaoCu: 6
    },
    M3: {
        ramal: '10+10 mm² Cu concêntrico',
        entrada: '10 mm² Cu',
        secaoCu: 10
    },
    T6: {
        ramal: '3x10+10 mm² Al multiplexado',
        entrada: '3x6/6/6 mm² Cu',
        secaoCu: 6
    },
    T7: {
        ramal: '3x10+10 mm² Al multiplexado',
        entrada: '3x6/6/6 mm² Cu',
        secaoCu: 6
    },
    T8: {
        ramal: '3x16+16 mm² Al multiplexado',
        entrada: '3x10/10/10 mm² Cu',
        secaoCu: 10
    },
    T9: {
        ramal: '3x16+16 mm² Al multiplexado',
        entrada: '3x16/16/16 mm² Cu',
        secaoCu: 16
    },
    T10: {
        ramal: '3x25+25 mm² Al multiplexado',
        entrada: '3x25/25/16 mm² Cu',
        secaoCu: 25
    },
    T11: {
        ramal: '3x35+35 mm² Al multiplexado',
        entrada: '3x35/35/16 mm² Cu',
        secaoCu: 35
    },
    T12: {
        ramal: '3x50+50 mm² Al multiplexado',
        entrada: '3x50/50/25 mm² Cu',
        secaoCu: 50
    }
};
/** Tabela 1 (220/127 V) sem cabo na especificação: seção de cobre estimada pelo disjuntor (referência). */ function secaoPorDisjuntor(a) {
    return a <= 40 ? 10 : a <= 50 ? 10 : a <= 63 ? 16 : a <= 70 ? 25 : a <= 100 ? 35 : a <= 125 ? 50 : a <= 150 ? 70 : 95;
}
/** Eletroduto do ramal de entrada pela seção de cobre (referência). */ function eletrodutoPorSecao(s) {
    return s <= 10 ? '32 mm (1")' : s <= 25 ? '40 mm (1¼")' : s <= 50 ? '50 mm (1½")' : '60 mm (2")';
}
function bitolaEntrada(secaoCu, percursoM) {
    const porPercurso = percursoM > 50 ? 16 : percursoM > 30 ? 10 : 6;
    const s = Math.max(secaoCu || 6, porPercurso);
    return s <= 6 ? '6' : s <= 10 ? '10' : '16';
}
const LIG_SISTEMA = {
    M: 'monofasico',
    B: 'bifasico',
    T: 'trifasico'
};
const SISTEMA_LIG = {
    monofasico: 'M',
    bifasico: 'B',
    trifasico: 'T'
};
function categoriaDisNor(cargaKw, demandaKva, tensao, sistema) {
    const lig = sistema ? SISTEMA_LIG[sistema] : null;
    const { categoria: c, aviso } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["categoriaAtendimento"])(tensao, lig, cargaKw, demandaKva);
    if (!c) return null;
    const t2 = tensao === '380/220' ? CABOS_TAB2[c.codigo] : undefined;
    const secao = t2?.secaoCu ?? secaoPorDisjuntor(c.disjuntor);
    const fases = c.ligacao === 'T' ? 3 : c.ligacao === 'B' ? 2 : 1;
    const caboEstimado = `${fases > 1 ? `${fases}x` : ''}${secao} mm² Cu + neutro (estimado)`;
    return {
        categoria: c.codigo,
        disjuntor: c.disjuntor,
        sistema: LIG_SISTEMA[c.ligacao],
        caboRamal: t2?.ramal ?? 'conforme distribuidora',
        caboEntrada: t2?.entrada ?? caboEstimado,
        eletroduto: eletrodutoPorSecao(secao),
        secaoCu: secao,
        aviso
    };
}
}),
"[project]/lib/util.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Helpers numéricos e de trajeto compartilhados pelo cálculo (servidor e cliente), sem dependências. */ __turbopack_context__.s([
    "AREA_MOLHADA",
    ()=>AREA_MOLHADA,
    "areaMolhada",
    ()=>areaMolhada,
    "num",
    ()=>num,
    "routeLen",
    ()=>routeLen
]);
function num(v) {
    if (typeof v === 'number') return Number.isFinite(v) ? v : 0;
    const n = parseFloat(String(v ?? ''));
    return Number.isFinite(n) ? n : 0;
}
function routeLen(r) {
    return r?.via ? num(r?.dd) + num(r?.dr) : num(r?.dq);
}
const AREA_MOLHADA = /banheiro|lavabo|cozinha|copa|servi|lavanderia|piscina|externa|varanda|garagem/i;
function areaMolhada(texto) {
    return AREA_MOLHADA.test(texto);
}
}),
"[project]/lib/validacao.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errosEtapa",
    ()=>errosEtapa,
    "faltasObrigatorias",
    ()=>faltasObrigatorias,
    "primeiraEtapaInvalida",
    ()=>primeiraEtapaInvalida,
    "problemaEstrutura",
    ()=>problemaEstrutura,
    "semNegativo",
    ()=>semNegativo,
    "somenteDados",
    ()=>somenteDados,
    "tomadasNbr",
    ()=>tomadasNbr
]);
/* ===== Validação compartilhada: wizard (navegador) e rotas de API (servidor) ===== */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/tensao-por-uf.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-route] (ecmascript)");
;
;
const num = (v)=>{
    const n = typeof v === 'number' ? v : parseFloat(String(v ?? ''));
    return Number.isFinite(n) ? n : 0;
};
function semNegativo(v) {
    const s = String(v ?? '');
    return s.trim().startsWith('-') ? '' : s;
}
/* ---------------- Regras do wizard (o que impede avançar) ---------------- */ const nomeDe = (r)=>r?.nome || r?.base || 'Cômodo';
function errosEtapa(s, step) {
    const e = [];
    const rooms = s?.rooms ?? [];
    if (step === 0) {
        if (!s?.imovel) e.push('Escolha o tipo de imóvel');
        if (!s?.obra) e.push('Escolha o tipo de obra');
    }
    if (step === 1) {
        if (rooms.length === 0) e.push('Adicione pelo menos um cômodo');
        for (const r of rooms){
            if (!(num(r?.c) > 0) || !(num(r?.l) > 0)) e.push(`${nomeDe(r)}: informe comprimento e largura maiores que zero`);
            for (const k of [
                'c',
                'l',
                'dq',
                'dd',
                'dr',
                'dpad',
                'pe'
            ]){
                if (num(r?.[k]) < 0) {
                    e.push(`${nomeDe(r)}: medidas não podem ser negativas`);
                    break;
                }
            }
        }
    }
    if (step === 2) {
        const total = rooms.reduce((a, r)=>a + (r?.pontos?.length ?? 0) + (r?.luzes?.length ?? 0), 0);
        if (total === 0) e.push('Adicione pelo menos uma tomada ou ponto de luz');
    }
    if (step === 3) {
        (s?.equips ?? []).forEach((q, i)=>{
            const n = q?.tipo || `Equipamento ${i + 1}`;
            if (!q?.tipo) e.push(`Equipamento ${i + 1}: escolha o tipo`);
            if (!(num(q?.pot) > 0)) e.push(`${n}: informe a potência (W) maior que zero`);
            if (num(q?.dist) < 0 || num(q?.dint) < 0) e.push(`${n}: distâncias não podem ser negativas`);
        });
    }
    return e;
}
function primeiraEtapaInvalida(s) {
    for(let i = 0; i < 6; i++)if (errosEtapa(s, i).length > 0) return i;
    return 6;
}
function faltasObrigatorias(s) {
    return [
        0,
        1,
        2,
        3
    ].flatMap((i)=>errosEtapa(s, i));
}
function tomadasNbr(r) {
    const c = num(r?.c), l = num(r?.l);
    if (c <= 0 || l <= 0) return null;
    const minimo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["minTomadas"])(c * l, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["perimetro"])(c, l), `${r?.base ?? ''} ${r?.nome ?? ''}`);
    // Pontos de tomada (simples/dupla/tripla = 1), mesma regra de countMods — inclui as montadas no interruptor.
    let atual = 0;
    for (const p of r?.pontos ?? [])for (const m of p?.mods ?? [])if (String(m?.t ?? '').startsWith('T')) atual += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pontosTomada"])(m.t);
    for (const c of r?.comandos ?? [])for (const sw of c?.sws ?? [])if (String(sw?.tom ?? '').startsWith('T')) atual += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pontosTomada"])(sw.tom);
    return {
        minimo,
        atual
    };
}
/* ---------------- Validação estrutural (servidor) ---------------- */ const IMOVEL = [
    '',
    'Casa',
    'Apartamento',
    'Comércio pequeno'
];
const OBRA = [
    '',
    'Construção nova',
    'Reforma',
    'Ampliação'
];
const COBERTURA = [
    '',
    'Laje',
    'Forro de gesso',
    'Telhado aparente',
    'Não sei'
];
const REDE = [
    '',
    'Monofásico',
    'Bifásico',
    'Trifásico',
    'Não sei'
];
const MODULO = [
    'T10',
    'T10D',
    'T10T',
    'T20',
    'T20D',
    'T20T',
    'USB'
];
const EQUIP_CX = [
    '4x2',
    '4x4'
];
const EQUIP_PONTO = [
    'T20',
    'T20D',
    'borne',
    'tampa',
    'emenda'
];
const EQUIP = [
    '',
    'Chuveiro elétrico',
    'Torneira elétrica',
    'Ar-condicionado',
    'Forno elétrico',
    'Cooktop elétrico',
    'Máquina de lavar',
    'Secadora',
    'Aquecedor',
    'Bomba',
    'Carregador de veículo elétrico',
    'Outro'
];
const TENSAO = [
    '',
    '127V',
    '220V',
    '380V'
];
const ENT_TIPO = [
    'aerea',
    'subterranea',
    'parede'
];
const ENT_POSTE = [
    '6m',
    '7m',
    'nao-tem'
];
const ENT_SISTEMA = [
    'monofasico',
    'bifasico',
    'trifasico'
];
const ENT_BITOLA = [
    '6',
    '10',
    '16'
];
const ENT_DIAM = [
    '3/4',
    '1',
    '1-1/4'
];
const ENT_ELETRODUTO = [
    'rigido',
    'flexivel'
];
const ENT_UNIDADE = [
    'metro',
    'peca3m'
];
const MATERIAL_APARENTE = [
    'canaleta',
    'eletroduto_metro',
    'eletroduto_peca3m'
];
const ENT_TENSAO = [
    '',
    '127',
    '220',
    '380'
];
const bool = (v)=>v === undefined || typeof v === 'boolean';
const LIM = {
    comodos: 60,
    itens: 200,
    equips: 60,
    texto: 120,
    obs: 500,
    metros: 1000,
    watts: 100_000
};
const opcional = (v, lista)=>v === undefined || typeof v === 'string' && lista.includes(v);
const texto = (v, max)=>v === undefined || typeof v === 'string' && v.length <= max;
const lista = (v, max)=>v === undefined || Array.isArray(v) && v.length <= max;
/** Vazio é aceito (fica como pendência); preenchido precisa ser número finito entre 0 e max. */ function medida(v, max) {
    if (v === undefined || v === null || v === '') return true;
    if (typeof v !== 'string' && typeof v !== 'number') return false;
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 && n <= max;
}
function problemaEstrutura(d) {
    if (!d || typeof d !== 'object' || Array.isArray(d)) return 'dados ausentes';
    if (!Array.isArray(d.rooms) || d.rooms.length > LIM.comodos) return 'rooms inválido';
    if (!lista(d.equips, LIM.equips)) return 'equips inválido';
    if (!opcional(d.imovel, IMOVEL) || !opcional(d.obra, OBRA) || !opcional(d.cobertura, COBERTURA) || !opcional(d.rede, REDE)) {
        return 'campo do imóvel inválido';
    }
    for (const r of d.rooms){
        if (!r || typeof r !== 'object' || typeof r.id !== 'string' || r.id.length > 64) return 'cômodo inválido';
        if (!texto(r.nome, LIM.texto) || !texto(r.base, LIM.texto) || !texto(r.via, 64) || !texto(r.obs, LIM.obs)) return 'texto do cômodo inválido';
        if (!opcional(r.materialAparente, MATERIAL_APARENTE)) return 'material aparente inválido';
        for (const k of [
            'c',
            'l',
            'dq',
            'dd',
            'dr',
            'dpad',
            'pe'
        ])if (!medida(r[k], LIM.metros)) return `medida "${k}" inválida`;
        for (const k of [
            'pontos',
            'luzes',
            'comandos',
            'caixas'
        ])if (!lista(r[k], LIM.itens)) return `${k} inválido`;
        for (const p of r.pontos ?? []){
            if (!p || !lista(p.mods, 10) || !medida(p.d, LIM.metros) || !bool(p.auto)) return 'tomada inválida';
            for (const m of p.mods ?? [])if (!m || !MODULO.includes(m.t)) return 'módulo inválido';
        }
        for (const l of r.luzes ?? [])if (!l || !medida(l.d, LIM.metros)) return 'luz inválida';
        for (const c of r.comandos ?? []){
            if (!c || !lista(c.luzes, LIM.itens) || !lista(c.sws, 20) || !bool(c.comTomada)) return 'interruptor inválido';
            for (const sw of c.sws ?? [])if (!sw || !medida(sw.d, LIM.metros) || !(sw.tom === '' || sw.tom === undefined || MODULO.includes(sw.tom))) return 'interruptor inválido';
        }
    }
    for (const q of d.equips ?? []){
        if (!q || typeof q !== 'object' || !opcional(q.tipo, EQUIP) || !opcional(q.tens, TENSAO) || !texto(q.room, 64) || !opcional(q.cx, EQUIP_CX) || !opcional(q.ponto, EQUIP_PONTO)) return 'equipamento inválido';
        if (!medida(q.pot, LIM.watts) || !medida(q.dist, LIM.metros) || !medida(q.dint, LIM.metros)) return 'medida do equipamento inválida';
    }
    const en = d.entrada;
    if (en !== undefined) {
        if (!en || typeof en !== 'object' || Array.isArray(en)) return 'entrada inválida';
        if (!opcional(en.tipoEntrada, ENT_TIPO) || !opcional(en.poste, ENT_POSTE) || !opcional(en.sistema, ENT_SISTEMA) || !opcional(en.bitola, ENT_BITOLA) || !opcional(en.diametroEletroduto, ENT_DIAM) || !opcional(en.tipoEletroduto, ENT_ELETRODUTO) || !opcional(en.unidadeEletroduto, ENT_UNIDADE) || !opcional(en.tensao, ENT_TENSAO) || !bool(en.sistemaManual) || !bool(en.bitolaManual) || !bool(en.diametroManual) || !texto(en.obs, LIM.obs) || !bool(en.incluirNoPdf) || !opcional(en.sistemaTensao, [
            '220/127',
            '380/220',
            'nao-sei'
        ]) || !opcional(en.ligacao, [
            'M',
            'B',
            'T',
            'nao-sei'
        ]) || !opcional(en.uf, [
            '',
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UFS"].map((u)=>u.uf)
        ])) return 'entrada inválida';
        if (!medida(en.percurso, LIM.metros) || !medida(en.potenciaDemandada, 1000)) return 'medida da entrada inválida';
    }
    const ci = d.circuitos;
    if (ci !== undefined) {
        if (!ci || typeof ci !== 'object' || Array.isArray(ci)) return 'circuitos inválido';
        if (!opcional(ci.modo, [
            'norma',
            'economico',
            'maximo',
            'manual'
        ]) || !lista(ci.unico, LIM.comodos) || !lista(ci.grupos, LIM.comodos)) return 'circuitos inválido';
        for (const id of ci.unico ?? [])if (typeof id !== 'string' || id.length > 64) return 'circuitos inválido';
        for (const g of ci.grupos ?? []){
            if (!g || typeof g !== 'object' || typeof g.id !== 'string' || g.id.length > 80 || !Array.isArray(g.rooms) || g.rooms.length > LIM.comodos || !Array.isArray(g.dists) || g.dists.length > LIM.comodos || !bool(g.unico)) return 'grupo de circuito inválido';
            for (const id of g.rooms)if (typeof id !== 'string' || id.length > 64) return 'grupo de circuito inválido';
            for (const x of g.dists)if (!medida(x, LIM.metros)) return 'distância do grupo inválida';
        }
    }
    const at = d.aterramento;
    if (at !== undefined) {
        if (!at || typeof at !== 'object' || Array.isArray(at)) return 'aterramento inválido';
        const inteiro = (v, max)=>v === undefined || Number.isInteger(v) && v >= 0 && v <= max;
        if (!inteiro(at.nHastes, 50) || !inteiro(at.nCaixasInspecao, 50) || !opcional(at.comprimentoHaste, [
            '2.4'
        ]) || !opcional(at.bitolaCabo, [
            '6',
            '10'
        ]) || !texto(at.obs, LIM.obs) || !bool(at.incluirNoPdf)) return 'aterramento inválido';
        if (!medida(at.distancia, LIM.metros)) return 'medida do aterramento inválida';
    }
    return null;
}
function somenteDados(d) {
    return {
        imovel: d.imovel ?? '',
        obra: d.obra ?? '',
        cobertura: d.cobertura ?? '',
        rede: d.rede ?? '',
        rooms: d.rooms ?? [],
        equips: d.equips ?? [],
        ...d.entrada ? {
            entrada: d.entrada
        } : {},
        ...d.aterramento ? {
            aterramento: d.aterramento
        } : {},
        ...d.circuitos ? {
            circuitos: d.circuitos
        } : {}
    };
}
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_5gxdeh32umq._.js.map