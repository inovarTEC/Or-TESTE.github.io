module.exports = [
(()=>{"use strict";return[
"[project]/app/api/circuitos/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/circuitos.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/pedido.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/rota.ts [app-route] (ecmascript)");
;
;
;
const runtime = 'nodejs';
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rota"])('circuitos', async (req)=>{
    const corpo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lerCorpo"])(req);
    const dados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$rota$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exigirDados"])(corpo?.dados, false);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$pedido$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ok"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$circuitos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compararCircuitos"])(dados.rooms, dados.equips ?? [], dados.circuitos));
});
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1nqpkxc_h_ba2._.js.map