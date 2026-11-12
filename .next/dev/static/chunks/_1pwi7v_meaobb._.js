(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/app/components/checkout-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$previa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-previa.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage-local.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const brl = (n)=>n.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
/** Dados atuais do wizard (o que vai ao servidor) e a assinatura usada para saber se mudaram. */ function dadosAtuais() {
    const dados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$previa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dadosDoOrcamento"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState());
    return {
        dados,
        assinatura: JSON.stringify(dados)
    };
}
const gravar = (fn)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alterarEstado"])(fn, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState());
function CheckoutModal({ onClose, valor }) {
    _s();
    const [fase, setFase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('email');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [aceite, setAceite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [carregando, setCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pedido, setPedido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [estado, setEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [restante, setRestante] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ocupado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const post = (url, p)=>fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-chave': p.chave
            },
            body: JSON.stringify({
                orcamentoId: p.orcamentoId,
                pagamentoId: p.pagamentoId,
                dados: dadosAtuais().dados
            })
        });
    /** PDF atualizado de um orçamento já pago. `edicao` = false só para recuperar o PDF original. */ const regerar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckoutModal.useCallback[regerar]": async (p, edicao)=>{
            const r = await post('/api/regerar', p);
            if (r.status === 410) {
                setEstado((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carregarEstado"])());
                setFase('limite');
                return;
            }
            if (!r.ok) throw new Error('falha');
            const { html } = await r.json();
            const { assinatura } = dadosAtuais();
            const e = gravar({
                "CheckoutModal.useCallback[regerar].e": (s)=>({
                        ...s,
                        entrega: {
                            html,
                            edicoes: (s.entrega?.edicoes ?? 0) + (edicao ? 1 : 0),
                            entregueEm: Date.now(),
                            assinatura
                        }
                    })
            }["CheckoutModal.useCallback[regerar].e"]);
            setEstado(e);
            setFase('pronto');
        }
    }["CheckoutModal.useCallback[regerar]"], []);
    /** Primeira entrega do pagamento aprovado. */ const liberar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckoutModal.useCallback[liberar]": async (p)=>{
            if (ocupado.current) return;
            ocupado.current = true;
            setFase('liberando');
            try {
                const r = await post('/api/liberar', p);
                // Já entregue (ex.: a resposta anterior se perdeu): recupera o PDF sem gastar edição.
                if (r.status === 409) return await regerar(p, false);
                if (!r.ok) throw new Error('falha');
                const { html } = await r.json();
                const { assinatura } = dadosAtuais();
                const agora = Date.now();
                // Os 15 dias de edição contam a partir do pagamento.
                const e = gravar({
                    "CheckoutModal.useCallback[liberar].e": (s)=>({
                            ...s,
                            criadoEm: agora,
                            expiraEm: agora + (s.expiraEm - s.criadoEm),
                            entrega: {
                                html,
                                edicoes: 0,
                                entregueEm: agora,
                                assinatura
                            }
                        })
                }["CheckoutModal.useCallback[liberar].e"]);
                setEstado(e);
                setFase('pronto');
            } catch  {
                ocupado.current = false;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Não foi possível liberar o PDF agora. Tentando de novo...');
                setFase('pix');
            }
        }
    }["CheckoutModal.useCallback[liberar]"], [
        regerar
    ]);
    /* Ao abrir: decide a fase pelo que está salvo no navegador. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carregarEstado"])();
            setEstado(e);
            const p = e?.pagamento ?? null;
            setPedido(p);
            if (e?.entrega && p) {
                if (e.entrega.assinatura === dadosAtuais().assinatura) return setFase('pronto'); // nada mudou
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["podeEditar"])(e)) return setFase('limite');
                if (ocupado.current) return; // evita gastar duas edições se o efeito rodar duas vezes
                ocupado.current = true;
                setFase('liberando');
                regerar(p, true).catch({
                    "CheckoutModal.useEffect": ()=>setFase('erro')
                }["CheckoutModal.useEffect"]);
                return;
            }
            if (p) setFase('pix');
        }
    }["CheckoutModal.useEffect"], [
        regerar
    ]);
    /* Consulta o status do Pix a cada 3 s enquanto a tela do QR Code está aberta. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            if (fase !== 'pix' || !pedido) return;
            let parar = false;
            const checar = {
                "CheckoutModal.useEffect.checar": async ()=>{
                    try {
                        const q = new URLSearchParams({
                            orcamentoId: pedido.orcamentoId,
                            pagamentoId: pedido.pagamentoId
                        });
                        const r = await fetch(`/api/verificar?${q}`, {
                            headers: {
                                'x-chave': pedido.chave
                            },
                            cache: 'no-store'
                        });
                        if (!r.ok || parar) return;
                        const { status } = await r.json();
                        if (parar) return;
                        if (status === 'aprovado') liberar(pedido);
                        else if (status === 'vencido') setFase('vencido');
                        else if (status === 'recusado') setFase('recusado');
                    } catch  {}
                }
            }["CheckoutModal.useEffect.checar"];
            checar();
            const t = setInterval(checar, 3000);
            return ({
                "CheckoutModal.useEffect": ()=>{
                    parar = true;
                    clearInterval(t);
                }
            })["CheckoutModal.useEffect"];
        }
    }["CheckoutModal.useEffect"], [
        fase,
        pedido,
        liberar
    ]);
    /* Contagem regressiva do QR Code */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            if (fase !== 'pix' || !pedido?.expira) return;
            const tick = {
                "CheckoutModal.useEffect.tick": ()=>setRestante(Math.max(0, Math.floor((Date.parse(pedido.expira) - Date.now()) / 1000)))
            }["CheckoutModal.useEffect.tick"];
            tick();
            const t = setInterval(tick, 1000);
            return ({
                "CheckoutModal.useEffect": ()=>clearInterval(t)
            })["CheckoutModal.useEffect"];
        }
    }["CheckoutModal.useEffect"], [
        fase,
        pedido
    ]);
    const criar = async (corpo)=>{
        setCarregando(true);
        try {
            const r = await fetch('/api/pagar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(corpo)
            });
            const j = await r.json();
            if (!r.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(j?.erro === 'email_invalido' ? 'E-mail inválido' : j?.erro === 'dados_incompletos' || j?.erro === 'dados_invalidos' ? 'Há dados obrigatórios faltando ou inválidos. Confira as etapas do orçamento.' : 'Não foi possível gerar o Pix. Tente novamente.');
                return;
            }
            const novo = {
                orcamentoId: j.orcamentoId,
                chave: j.chave ?? pedido?.chave ?? '',
                pagamentoId: j.pagamentoId,
                qrCode: j.qrCode,
                qrBase64: j.qrBase64,
                expira: j.expira,
                email: 'email' in corpo ? corpo.email : pedido?.email ?? ''
            };
            ocupado.current = false;
            setEstado(gravar((s)=>({
                    ...s,
                    pagamento: novo
                })));
            setPedido(novo);
            setFase('pix');
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Erro de conexão. Tente novamente.');
        } finally{
            setCarregando(false);
        }
    };
    const enviarEmail = ()=>{
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Digite um e-mail válido');
        if (!aceite) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Marque o aceite para continuar');
        criar({
            email: email.trim(),
            dados: dadosAtuais().dados
        });
    };
    const novoQr = ()=>pedido && criar({
            orcamentoId: pedido.orcamentoId,
            chave: pedido.chave
        });
    /** Limite atingido: começa uma nova compra mantendo os dados do wizard. */ const pagarNovamente = ()=>{
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["novoEstado"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salvarEstado"])(e);
        setEstado(e);
        setPedido(null);
        setEmail(pedido?.email ?? '');
        ocupado.current = false;
        setFase('email');
    };
    const copiar = ()=>{
        if (!pedido) return;
        navigator.clipboard?.writeText(pedido.qrCode).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Código Pix copiado!')).catch(()=>{});
    };
    const html = estado?.entrega?.html ?? '';
    const restantes = estado ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edicoesRestantes"])(estado) : 0;
    const mmss = `${String(Math.floor(restante / 60)).padStart(2, '0')}:${String(restante % 60).padStart(2, '0')}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-5 pb-5 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "absolute top-3 right-3 text-muted-foreground hover:text-foreground",
                            "aria-label": "Fechar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/components/checkout-modal.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        fase === 'email' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            children: "Finalizar pedido"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "PDF do orçamento completo — ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-primary",
                                                    children: brl(valor)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 92
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Seu e-mail"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "seu@email.com",
                                                    className: "pl-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-muted-foreground mt-1",
                                            children: "Usado apenas para registrar o pagamento no Pix"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            id: "aceite",
                                            checked: aceite,
                                            onCheckedChange: (v)=>setAceite(!!v),
                                            className: "mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "aceite",
                                            className: "text-xs text-muted-foreground cursor-pointer",
                                            children: "Aceito que meus dados serão usados apenas para gerar o orçamento"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: enviarEmail,
                                    disabled: carregando,
                                    children: [
                                        carregando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 233,
                                            columnNumber: 34
                                        }, this),
                                        "Pagar com Pix — ",
                                        brl(valor)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 232,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this),
                        fase === 'pix' && pedido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            children: "Pague com Pix"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Escaneie o QR Code ou copie o código"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs text-green-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5 text-base leading-none",
                                            children: "🔒"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Pagamento 100% seguro via Mercado Pago"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this),
                                                " — líder em pagamentos na América Latina. Após a confirmação do Pix, seu PDF detalhado é liberado automaticamente."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-52 h-52 bg-white rounded-xl flex items-center justify-center p-2",
                                        children: pedido.qrBase64 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `data:image/png;base64,${pedido.qrBase64}`,
                                            alt: "QR Code Pix",
                                            className: "w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-8 h-8 animate-spin text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 257,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/checkout-modal.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Código Pix (copia e cola)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    readOnly: true,
                                                    value: pedido.qrCode,
                                                    className: "text-xs font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: copiar,
                                                    "aria-label": "Copiar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/checkout-modal.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 96
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 justify-center text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this),
                                        " Aguardando confirmação do pagamento..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this),
                                pedido.expira && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-xs text-muted-foreground flex items-center justify-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this),
                                        " Este QR Code vale por ",
                                        mmss
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 271,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 240,
                            columnNumber: 15
                        }, this),
                        fase === 'vencido' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-14 h-14 text-amber-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: "O QR Code venceu"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Seu orçamento continua salvo neste navegador. Você pode revisá-lo ou gerar um novo QR Code para pagar."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 282,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: novoQr,
                                    disabled: carregando,
                                    children: [
                                        carregando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 284,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 284,
                                            columnNumber: 85
                                        }, this),
                                        "Gerar novo QR"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "w-full",
                                    onClick: onClose,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        " Editar orçamento"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 279,
                            columnNumber: 15
                        }, this),
                        fase === 'liberando' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-12 h-12 animate-spin text-primary mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: estado?.entrega ? 'Atualizando o seu PDF...' : 'Pagamento confirmado!'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Preparando o seu PDF..."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 297,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 294,
                            columnNumber: 15
                        }, this),
                        fase === 'pronto' && html && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-16 h-16 text-green-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: "Seu orçamento está pronto!"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 304,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Clique em salvar e escolha ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "“Salvar como PDF”"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 306,
                                            columnNumber: 46
                                        }, this),
                                        " na janela de impressão."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imprimirHtml"])(html),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 308,
                                            columnNumber: 79
                                        }, this),
                                        " Salvar como PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "w-full",
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baixarHtml"])(html),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 309,
                                            columnNumber: 95
                                        }, this),
                                        " Baixar cópia (.html)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, this),
                                estado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-green-800 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-left",
                                    children: restantes > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Precisa mudar algo? Feche esta janela, edite o orçamento e gere o PDF de novo: ",
                                            restantes === 1 ? 'resta 1 edição gratuita' : `restam ${restantes} edições gratuitas`,
                                            " até ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatarData"])(estado.expiraEm),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/checkout-modal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Você já usou as ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDICOES_MAX"],
                                            " edições gratuitas deste orçamento."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/checkout-modal.tsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 311,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-amber-700 bg-amber-50 rounded px-2 py-1",
                                    children: "O PDF fica guardado só neste navegador. «Novo orçamento» ou limpar os dados do navegador apagam tudo."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 317,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 302,
                            columnNumber: 15
                        }, this),
                        fase === 'limite' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                    className: "w-14 h-14 text-amber-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: "Edições gratuitas encerradas"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 326,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Você usou suas 3 edições gratuitas (ou o prazo de 15 dias venceu). Para gerar um novo orçamento pago, clique abaixo."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 327,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: pagarNovamente,
                                    children: [
                                        "Pagar novamente — ",
                                        brl(valor)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "w-full",
                                    onClick: onClose,
                                    children: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 331,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 324,
                            columnNumber: 15
                        }, this),
                        fase === 'recusado' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-14 h-14 text-amber-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 337,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: "Pagamento não aprovado"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Seu orçamento continua salvo. Você pode tentar com um novo Pix."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 339,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    onClick: novoQr,
                                    disabled: carregando,
                                    children: [
                                        carregando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 341,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/checkout-modal.tsx",
                                            lineNumber: 341,
                                            columnNumber: 85
                                        }, this),
                                        "Tentar novamente"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "w-full",
                                    onClick: onClose,
                                    children: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 336,
                            columnNumber: 15
                        }, this),
                        fase === 'erro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-14 h-14 text-amber-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: "Não foi possível gerar o PDF agora"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Nenhuma edição foi gasta. Verifique a conexão e tente de novo."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "w-full",
                                    onClick: onClose,
                                    children: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/checkout-modal.tsx",
                                    lineNumber: 353,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/checkout-modal.tsx",
                            lineNumber: 349,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/checkout-modal.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/checkout-modal.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/checkout-modal.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/checkout-modal.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(CheckoutModal, "F9TQlT2IPF+t89g56Ewg8n81yzU=");
_c = CheckoutModal;
var _c;
__turbopack_context__.k.register(_c, "CheckoutModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/circuitos-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircuitosCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circuit-board.js [app-client] (ecmascript) <export default as CircuitBoard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/circuitos-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const OPCOES = [
    {
        modo: 'norma',
        titulo: 'Separado (padrão)',
        texto: 'Cada cômodo com um disjuntor para a luz e outro para as tomadas.'
    },
    {
        modo: 'economico',
        titulo: 'Econômico',
        texto: 'Um disjuntor por cômodo: luz e tomadas juntas (onde for permitido).'
    },
    {
        modo: 'maximo',
        titulo: 'Mais econômico',
        texto: 'Também junta cômodos vizinhos (os que seguem o mesmo caminho do quadro).'
    }
];
const nome = (r)=>r?.nome || r?.base || 'Cômodo';
function CircuitosCard() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const rooms = store?.rooms ?? [];
    const cfg = store?.circuitos ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configPadrao"])();
    const [cmp, setCmp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const dados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CircuitosCard.useMemo[dados]": ()=>JSON.stringify({
                imovel: store.imovel,
                obra: store.obra,
                cobertura: store.cobertura,
                rede: store.rede,
                rooms: store.rooms,
                equips: store.equips,
                circuitos: store.circuitos
            })
    }["CircuitosCard.useMemo[dados]"], [
        store.imovel,
        store.obra,
        store.cobertura,
        store.rede,
        store.rooms,
        store.equips,
        store.circuitos
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircuitosCard.useEffect": ()=>{
            if (rooms.length === 0) {
                setCmp(null);
                return;
            }
            const ctrl = new AbortController();
            const t = setTimeout({
                "CircuitosCard.useEffect.t": ()=>{
                    fetch('/api/circuitos', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            dados: JSON.parse(dados)
                        }),
                        signal: ctrl.signal
                    }).then({
                        "CircuitosCard.useEffect.t": (r)=>r.ok ? r.json() : Promise.reject(new Error('falha'))
                    }["CircuitosCard.useEffect.t"]).then({
                        "CircuitosCard.useEffect.t": (j)=>setCmp(j)
                    }["CircuitosCard.useEffect.t"]).catch({
                        "CircuitosCard.useEffect.t": ()=>{}
                    }["CircuitosCard.useEffect.t"]);
                }
            }["CircuitosCard.useEffect.t"], 350);
            return ({
                "CircuitosCard.useEffect": ()=>{
                    clearTimeout(t);
                    ctrl.abort();
                }
            })["CircuitosCard.useEffect"];
        }
    }["CircuitosCard.useEffect"], [
        dados,
        rooms.length
    ]);
    if (rooms.length === 0) return null;
    const manual = cfg.modo === 'manual';
    const emGrupo = new Set(cfg.grupos.flatMap((g)=>g.rooms));
    const porId = new Map(rooms.map((r)=>[
            r.id,
            r
        ]));
    const base = cmp?.modos?.norma;
    const escolher = (modo)=>store.setCircuitos({
            modo,
            unico: [],
            grupos: []
        });
    const ajustarAMao = ()=>store.setCircuitos({
            ...cmp?.resolvido ?? {
                unico: [],
                grupos: []
            },
            modo: 'manual'
        });
    const setGrupos = (grupos)=>store.setCircuitos({
            ...cfg,
            modo: 'manual',
            grupos
        });
    const alternarUnico = (id)=>store.setCircuitos({
            ...cfg,
            modo: 'manual',
            unico: cfg.unico.includes(id) ? cfg.unico.filter((x)=>x !== id) : [
                ...cfg.unico,
                id
            ]
        });
    const livres = rooms.filter((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(r) !== 'isolado' && !emGrupo.has(r.id));
    const selecionados = sel.map((id)=>porId.get(id)).filter(Boolean);
    const mesmaClasse = selecionados.length > 0 && selecionados.every((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(r) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(selecionados[0]));
    const juntar = ()=>{
        if (selecionados.length < 2 || !mesmaClasse) return;
        const dists = selecionados.map((r, i)=>{
            const ant = selecionados[i - 1];
            return i > 0 && ant && r.via === ant.id && parseFloat(r.dr) > 0 ? String(parseFloat(r.dr)) : '';
        });
        setGrupos([
            ...cfg.grupos,
            {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                rooms: selecionados.map((r)=>r.id),
                dists,
                unico: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(selecionados[0]) === 'comum'
            }
        ]);
        setSel([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "pt-5 pb-5 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-2 text-sm font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 88,
                                    columnNumber: 72
                                }, this),
                                " Circuitos do quadro"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/circuitos-card.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: "Cada circuito é um disjuntor no quadro. Menos circuitos = menos disjuntores e menos fio. O padrão (separado) é o mais seguro; as outras opções economizam onde a norma permite. Cozinha, área de serviço, banheiros e áreas externas ficam sempre em circuitos próprios."
                        }, void 0, false, {
                            fileName: "[project]/app/components/circuitos-card.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/circuitos-card.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-3 gap-2",
                    children: OPCOES.map((o)=>{
                        const r = cmp?.modos?.[o.modo];
                        const ativo = cfg.modo === o.modo;
                        const menos = base && r ? base.disjuntores - r.disjuntores : 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>escolher(o.modo),
                            className: `text-left rounded-lg border p-3 transition-all ${ativo ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border hover:border-primary/50'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-sm font-semibold",
                                    children: o.titulo
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[11px] text-muted-foreground leading-tight mt-1",
                                    children: o.texto
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                r && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-xs mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: r.disjuntores
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/circuitos-card.tsx",
                                            lineNumber: 107,
                                            columnNumber: 21
                                        }, this),
                                        " disjuntores · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: r.metrosCabo
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/circuitos-card.tsx",
                                            lineNumber: 107,
                                            columnNumber: 68
                                        }, this),
                                        " m de cabo",
                                        menos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-green-700 font-medium",
                                            children: [
                                                "−",
                                                menos,
                                                " ",
                                                menos === 1 ? 'disjuntor' : 'disjuntores',
                                                " que o padrão"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/circuitos-card.tsx",
                                            lineNumber: 108,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, o.modo, true, {
                            fileName: "[project]/app/components/circuitos-card.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/circuitos-card.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-muted-foreground",
                    children: [
                        "Disjuntores contam os circuitos de luz e tomadas",
                        cmp ? ` e os ${cmp.nTUE} de equipamentos (chuveiro, ar-condicionado...)` : ' e os de equipamentos',
                        ". Metros = trajeto do cabo do quadro até os cômodos (cada fio)."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/circuitos-card.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                cmp?.atual?.avisos?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900 space-y-1",
                    children: cmp.atual.avisos.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-3.5 h-3.5 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 122,
                                    columnNumber: 61
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: a
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 122,
                                    columnNumber: 118
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/components/circuitos-card.tsx",
                            lineNumber: 122,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/circuitos-card.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this) : null,
                !manual ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: ajustarAMao,
                    children: "Ajustar à mão (escolher quais cômodos juntar)"
                }, void 0, false, {
                    fileName: "[project]/app/components/circuitos-card.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 border-t pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold",
                                    children: "Ajuste manual"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>escolher('norma'),
                                    children: "Voltar ao padrão"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/circuitos-card.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        cfg.grupos.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-border p-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                        className: "w-3.5 h-3.5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/circuitos-card.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 80
                                                    }, this),
                                                    g.rooms.map((id)=>nome(porId.get(id))).join(' + ')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/circuitos-card.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Desfazer grupo",
                                                onClick: ()=>setGrupos(cfg.grupos.filter((x)=>x.id !== g.id)),
                                                className: "text-destructive hover:text-destructive/80",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 191
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/circuitos-card.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/circuitos-card.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    g.rooms.slice(1).map((id, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1",
                                                    children: [
                                                        "Cabo a mais de ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: nome(porId.get(g.rooms[k]))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/circuitos-card.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 61
                                                        }, this),
                                                        " até ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: nome(porId.get(id))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/circuitos-card.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 112
                                                        }, this),
                                                        " (m)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    step: "0.1",
                                                    min: "0",
                                                    className: "w-24",
                                                    value: g.dists[k + 1] ?? '',
                                                    placeholder: "0.0",
                                                    onChange: (e)=>setGrupos(cfg.grupos.map((x)=>x.id === g.id ? {
                                                                ...x,
                                                                dists: x.dists.map((d, i)=>i === k + 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value) : d)
                                                            } : x))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, id, true, {
                                            fileName: "[project]/app/components/circuitos-card.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this)),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(porId.get(g.rooms[0])) === 'comum' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!g.unico,
                                                onChange: ()=>setGrupos(cfg.grupos.map((x)=>x.id === g.id ? {
                                                            ...x,
                                                            unico: !x.unico
                                                        } : x))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/circuitos-card.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this),
                                            "Luz e tomadas deste grupo no mesmo disjuntor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/circuitos-card.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, g.id, true, {
                                fileName: "[project]/app/components/circuitos-card.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)),
                        livres.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium",
                                    children: "Cômodos soltos"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this),
                                livres.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                "aria-label": `Juntar ${nome(r)}`,
                                                checked: sel.includes(r.id),
                                                onChange: ()=>setSel((s)=>s.includes(r.id) ? s.filter((x)=>x !== r.id) : [
                                                            ...s,
                                                            r.id
                                                        ])
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/circuitos-card.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1",
                                                children: [
                                                    nome(r),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(r) === 'servico' ? ' (circuito exclusivo de cozinha/serviço)' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/circuitos-card.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classeCircuito"])(r) === 'comum' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-1 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: cfg.unico.includes(r.id),
                                                        onChange: ()=>alternarUnico(r.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/circuitos-card.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 25
                                                    }, this),
                                                    " luz + tomadas juntas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/circuitos-card.tsx",
                                                lineNumber: 167,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/app/components/circuitos-card.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    size: "sm",
                                    disabled: selecionados.length < 2 || !mesmaClasse,
                                    onClick: juntar,
                                    children: "Juntar cômodos marcados"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this),
                                selecionados.length >= 2 && !mesmaClasse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-amber-700",
                                    children: "Cozinha/serviço só se juntam entre si; os outros cômodos também só entre si."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 175,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-muted-foreground",
                                    children: "Marque 2 ou mais cômodos vizinhos e depois informe quantos metros de cabo a mais levam de um ao outro."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/circuitos-card.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/circuitos-card.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/circuitos-card.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/circuitos-card.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/circuitos-card.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(CircuitosCard, "n3SNh7sFristaQC7QqFeD3gzsnw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = CircuitosCard;
var _c;
__turbopack_context__.k.register(_c, "CircuitosCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/orca-app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrcaApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navegacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$progress$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/progress-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$imovel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-imovel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$comodos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-comodos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$pontos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-pontos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$equipamentos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-equipamentos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$entrada$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-entrada.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$aterramento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-aterramento.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$previa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/step-previa.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
;
function OrcaApp() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const step = store?.step ?? 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrcaApp.useEffect": ()=>{
            store.hydrateFromStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["OrcaApp.useEffect"], []);
    /** Avança só se a etapa atual estiver completa; mostra o que falta. */ const avancar = ()=>{
        const erros = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errosEtapa"])(store, step);
        // Passo 4: cômodo do equipamento é recomendado (só aviso — não bloqueia; validacao.ts não muda nesta etapa).
        if (step === 3 && erros.length === 0) {
            const semComodo = (store.equips ?? []).filter((e)=>!e?.room).length;
            if (semComodo > 0) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(`${semComodo} equipamento(s) sem cômodo definido`, {
                description: 'Você pode voltar e informar o cômodo para um orçamento mais preciso.'
            });
        }
        if (erros.length > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(erros[0], {
                description: erros.length > 1 ? `e mais ${erros.length - 1} pendência(s) nesta etapa` : undefined
            });
            return;
        }
        store.setStep(Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PREVIA"], step + 1));
    };
    /** Pela barra de progresso: voltar é livre; pular para frente só até a primeira etapa incompleta. */ const irPara = (s)=>{
        if (s <= step) return store.setStep(s);
        const limite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primeiraEtapaInvalida"])(store);
        if (s > limite) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errosEtapa"])(store, limite)[0] ?? 'Complete as etapas anteriores primeiro');
            return store.setStep(Math.max(step, Math.min(limite, s)));
        }
        store.setStep(s);
    };
    const steps = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$imovel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$comodos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$pontos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$equipamentos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$entrada$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$aterramento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$previa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
    const CurrentStep = steps[step] ?? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$step$2d$imovel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-3 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-4 h-4 text-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/orca-app.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/orca-app.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg tracking-tight",
                                    children: "OrçaElétrica"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/orca-app.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/orca-app.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: store.resetState,
                            className: "rounded-md border border-green-300 bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-800 hover:bg-green-200 transition-colors",
                            children: "Novo orçamento"
                        }, void 0, false, {
                            fileName: "[project]/app/components/orca-app.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/orca-app.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/orca-app.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$progress$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                step: step,
                onStepClick: irPara
            }, void 0, false, {
                fileName: "[project]/app/components/orca-app.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 px-4 pb-4 pt-2",
                children: [
                    store.veioDaPrevia && step >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_COMODOS"] && step <= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_ATERRAMENTO"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                store.setVeioDaPrevia(false);
                                store.setStep(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PREVIA"]);
                            },
                            className: "text-sm text-primary hover:underline",
                            children: "← Voltar à prévia"
                        }, void 0, false, {
                            fileName: "[project]/app/components/orca-app.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/orca-app.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentStep, {}, void 0, false, {
                        fileName: "[project]/app/components/orca-app.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/orca-app.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 pt-4 pb-32 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>store.setStep(Math.max(0, step - 1)),
                            disabled: step === 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/orca-app.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                " Voltar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/orca-app.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        step < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PREVIA"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: avancar,
                            children: [
                                "Avançar ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4 ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/orca-app.tsx",
                                    lineNumber: 98,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/orca-app.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/orca-app.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/orca-app.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/orca-app.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(OrcaApp, "7WX0f3w9+vyXsBWAiuPF4CU1RJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = OrcaApp;
var _c;
__turbopack_context__.k.register(_c, "OrcaApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/progress-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const STEPS = [
    'Imóvel',
    'Cômodos',
    'Pontos',
    'Equipamentos',
    'Entrada',
    'Aterramento',
    'Prévia'
];
function ProgressBar({ step, onStepClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl mx-auto px-4 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: STEPS.map((label, i)=>{
                const done = i < step;
                const active = i === step;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center flex-1 last:flex-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onStepClick(i),
                            className: `flex flex-col items-center gap-1 group cursor-pointer transition-all ${done || active ? '' : 'opacity-50'}`,
                            type: "button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${done ? 'bg-primary border-primary text-primary-foreground' : active ? 'border-primary text-primary bg-primary/10' : 'border-muted-foreground/30 text-muted-foreground bg-card'} group-hover:scale-110`,
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/progress-bar.tsx",
                                        lineNumber: 33,
                                        columnNumber: 27
                                    }, this) : i + 1
                                }, void 0, false, {
                                    fileName: "[project]/app/components/progress-bar.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-medium hidden sm:block ${active ? 'text-primary' : done ? 'text-foreground' : 'text-muted-foreground'}`,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/progress-bar.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/progress-bar.tsx",
                            lineNumber: 16,
                            columnNumber: 15
                        }, this),
                        i < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 h-0.5 mx-2 rounded-full transition-colors ${done ? 'bg-primary' : 'bg-border'}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/progress-bar.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/components/progress-bar.tsx",
                    lineNumber: 15,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/components/progress-bar.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/progress-bar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-aterramento.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepAterramento
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aterramento-calc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const selCls = 'mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm';
/** Campo inteiro ≥ 0 (vazio ou inválido vira 0). */ const inteiro = (v)=>Math.max(0, Math.floor(Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(v)) || 0));
function StepAterramento() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const a = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aterramentoPadrao"])(),
        ...store?.aterramento ?? {}
    };
    const up = (patch)=>store.updateAterramento(patch);
    const materiais = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["materiaisAterramento"])(a).filter((m)=>m.mostrarNaPrevia);
    const avisos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisosAterramento"])(a);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Aterramento principal"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-aterramento.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Hastes, caixas de inspeção e cabo do quadro até o aterramento"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-aterramento.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-aterramento.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold",
                                    children: "Dados do aterramento"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Número de hastes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            min: "0",
                                            step: "1",
                                            value: a.nHastes,
                                            className: "mt-1",
                                            onChange: (ev)=>up({
                                                    nHastes: inteiro(ev.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] text-muted-foreground",
                                            children: "Proposta inicial: 3 hastes de 2,40 m"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Comprimento da haste"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm text-muted-foreground",
                                            children: "2,40 m"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Número de caixas de inspeção"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            min: "0",
                                            step: "1",
                                            value: a.nCaixasInspecao,
                                            className: "mt-1",
                                            onChange: (ev)=>up({
                                                    nCaixasInspecao: inteiro(ev.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Bitola do cabo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: a.bitolaCabo,
                                            className: selCls,
                                            onChange: (ev)=>up({
                                                    bitolaCabo: ev.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "6",
                                                    children: "6 mm²"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "10",
                                                    children: "10 mm²"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs",
                                    children: "Distância até o ponto de aterramento (m)"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    step: "0.1",
                                    min: "0",
                                    value: a.distancia,
                                    placeholder: "Ex: 8",
                                    className: "mt-1",
                                    onChange: (ev)=>up({
                                            distancia: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(ev.target.value)
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-muted-foreground",
                                    children: "Do quadro até as hastes"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs",
                                    children: "Observações"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: a.obs,
                                    maxLength: 500,
                                    rows: 3,
                                    className: selCls,
                                    onChange: (ev)=>up({
                                            obs: ev.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 text-sm cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "accent-primary",
                                    checked: a.incluirNoPdf !== false,
                                    onChange: (ev)=>up({
                                            incluirNoPdf: ev.target.checked
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                "Incluir materiais do aterramento no orçamento (PDF)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-aterramento.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-aterramento.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            avisos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                " Avisos (",
                                avisos.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1",
                            children: avisos.map((av, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2 text-xs",
                                    children: [
                                        av.tipo === 'info' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 96,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "w-3.5 h-3.5 text-yellow-500 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 97,
                                            columnNumber: 23
                                        }, this),
                                        av.msg
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-aterramento.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-aterramento.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                " Prévia dos materiais"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: materiais.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-1 border-b border-border/50 last:border-0 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: m.descricao
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground whitespace-nowrap ml-3",
                                            children: [
                                                m.qtd,
                                                " ",
                                                m.unidade
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-aterramento.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 pt-3 border-t border-dashed flex items-center gap-2 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-aterramento.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                " Bitola do cabo e detalhamento completo inclusos no PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-aterramento.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-aterramento.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-aterramento.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-aterramento.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(StepAterramento, "lacCqcEtsbxX3PAG/fPlTuRiPg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepAterramento;
var _c;
__turbopack_context__.k.register(_c, "StepAterramento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-comodos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepComodos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tomadas$2d$auto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tomadas-auto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/collapsible.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [app-client] (ecmascript) <export default as Bed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sofa.js [app-client] (ecmascript) <export default as Sofa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cooking$2d$pot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CookingPot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cooking-pot.js [app-client] (ecmascript) <export default as CookingPot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [app-client] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$washing$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WashingMachine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/washing-machine.js [app-client] (ecmascript) <export default as WashingMachine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
const plural = (n, um, varios)=>`${n} ${n === 1 ? um : varios}`;
const ICONS = {
    Bed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"],
    Sofa: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__["Sofa"],
    CookingPot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cooking$2d$pot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CookingPot$3e$__["CookingPot"],
    Bath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"],
    WashingMachine: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$washing$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WashingMachine$3e$__["WashingMachine"],
    Plus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"]
};
function StepComodos() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const rooms = store?.rooms ?? [];
    const [showTemplates, setShowTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(rooms.length === 0);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Detalhes avançados começam abertos em todos os cômodos (o usuário pode recolher).
    const [advancedOpen, setAdvancedOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const addFromTemplate = (tpl)=>{
        const room = tpl.create();
        // rename if duplicate
        const names = rooms.map((r)=>r?.nome);
        if (names.includes(room.nome)) {
            let i = 2;
            while(names.includes(`${room.nome} ${i}`))i++;
            room.nome = `${room.nome} ${i}`;
        }
        store.addRoom(room);
        setExpanded(room.id);
        setShowTemplates(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${room.nome} adicionado`);
    };
    const handleRemove = (r)=>{
        const nEquips = (store?.equips ?? []).filter((e)=>e?.room === r?.id).length;
        const hasData = (r?.pontos?.length ?? 0) > 0 || (r?.luzes?.length ?? 0) > 0 || nEquips > 0;
        if (hasData) {
            const extra = nEquips > 0 ? ` e ${nEquips === 1 ? '1 equipamento' : `${nEquips} equipamentos`}` : '';
            if (!confirm(`Remover "${r?.nome || r?.base}"? Os pontos, luzes${extra} deste cômodo serão perdidos.`)) return;
        }
        store.removeRoom(r?.id ?? '');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Cômodo removido');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Cômodos"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-comodos.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Adicione os cômodos e informe as medidas"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-comodos.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "As tomadas dos modelos aumentam sozinhas se o cômodo for maior (NBR 5410, pelo perímetro)."
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-comodos.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-comodos.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            showTemplates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-5 pb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-3",
                            children: "Escolha um modelo pronto ou comece do zero"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-comodos.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_TEMPLATES"].map((tpl)=>{
                                const Ic = ICONS[tpl.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>addFromTemplate(tpl),
                                    className: "flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ic, {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-comodos.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: tpl.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-comodos.tsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-muted-foreground leading-tight",
                                            children: tpl.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-comodos.tsx",
                                            lineNumber: 77,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, tpl.label, true, {
                                    fileName: "[project]/app/components/step-comodos.tsx",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-comodos.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-comodos.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-comodos.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "popLayout",
                children: rooms.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-4 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setExpanded(expanded === r?.id ? null : r?.id ?? ''),
                                        className: "w-full flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-4 h-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-comodos.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold",
                                                                children: r?.nome || r?.base || 'Cômodo'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    r?.c && r?.l ? `${r.c}m × ${r.l}m` : 'Medidas pendentes',
                                                                    ' · ',
                                                                    plural(r?.pontos?.length ?? 0, 'tomada', 'tomadas'),
                                                                    " · ",
                                                                    plural(r?.luzes?.length ?? 0, 'luz', 'luzes')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            expanded === r?.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 106,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 106,
                                                columnNumber: 99
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-comodos.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    expanded === r?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: 'auto',
                                            opacity: 1
                                        },
                                        className: "mt-4 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-xs",
                                                            children: "Nome"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-comodos.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            value: r?.nome ?? '',
                                                            onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                    nome: e?.target?.value ?? ''
                                                                }),
                                                            placeholder: "Ex: Quarto principal",
                                                            className: "mt-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-comodos.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-comodos.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 76
                                                                    }, this),
                                                                    " Comprimento (m)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "number",
                                                                step: "0.1",
                                                                min: "0",
                                                                value: r?.c ?? '',
                                                                onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                        c: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                                    }),
                                                                placeholder: "0.0",
                                                                className: "mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 76
                                                                    }, this),
                                                                    " Largura (m)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "number",
                                                                step: "0.1",
                                                                min: "0",
                                                                value: r?.l ?? '',
                                                                onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                        l: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                                    }),
                                                                placeholder: "0.0",
                                                                className: "mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tomadas$2d$auto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qtdTomadasAuto"])(r) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-blue-900",
                                                children: [
                                                    plural((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tomadas$2d$auto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qtdTomadasAuto"])(r), 'tomada adicionada', 'tomadas adicionadas'),
                                                    " automaticamente pela NBR 5410 (perímetro de ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perimetro"])(parseFloat(r?.c ?? '') || 0, parseFloat(r?.l ?? '') || 0).toFixed(1),
                                                    " m). Se diminuir o cômodo, elas saem sozinhas. Ajuste ou remova no passo Pontos."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 129,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: "De onde vem a fiação deste cômodo?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>store.updateRoom(r?.id ?? '', {
                                                                        via: ''
                                                                    }),
                                                                className: `px-3 py-2 rounded-lg text-xs font-medium border transition-all ${!r?.via ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50'}`,
                                                                children: "Direto do quadro"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    const others = rooms.filter((x)=>x?.id !== r?.id);
                                                                    if (others.length === 0) {
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Adicione outro cômodo primeiro');
                                                                        return;
                                                                    }
                                                                    store.updateRoom(r?.id ?? '', {
                                                                        via: others[0]?.id ?? ''
                                                                    });
                                                                },
                                                                className: `px-3 py-2 rounded-lg text-xs font-medium border transition-all ${r?.via ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50'}`,
                                                                children: "Pelo caminho de outro"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, this),
                                            !r?.via ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: "Distância até o quadro elétrico (m)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        step: "0.1",
                                                        min: "0",
                                                        value: r?.dq ?? '',
                                                        onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                dq: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                            }),
                                                        placeholder: "Estimativa em metros",
                                                        className: "mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 156,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs",
                                                                children: "Segue o caminho de qual cômodo?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: r?.via ?? '',
                                                                onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                        via: e?.target?.value ?? ''
                                                                    }),
                                                                className: "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm",
                                                                children: rooms.filter((x)=>x?.id !== r?.id).map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: x?.id ?? '',
                                                                        children: x?.nome || x?.base || 'Cômodo'
                                                                    }, x?.id, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-xs",
                                                                        children: "Trecho compartilhado (m)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        type: "number",
                                                                        step: "0.1",
                                                                        min: "0",
                                                                        value: r?.dd ?? '',
                                                                        onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                dd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                                            }),
                                                                        placeholder: "0.0",
                                                                        className: "mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-xs",
                                                                        children: "Desvio até aqui (m)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        type: "number",
                                                                        step: "0.1",
                                                                        min: "0",
                                                                        value: r?.dr ?? '',
                                                                        onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                dr: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                                            }),
                                                                        placeholder: "0.0",
                                                                        className: "mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 161,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
                                                open: advancedOpen[r?.id ?? ''] ?? true,
                                                onOpenChange: (o)=>setAdvancedOpen((p)=>({
                                                            ...p,
                                                            [r?.id ?? '']: o
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/step-comodos.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Detalhes avançados",
                                                                advancedOpen[r?.id ?? ''] ?? true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/step-comodos.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 66
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/step-comodos.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 102
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/step-comodos.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                                                        className: "mt-3 space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-xs",
                                                                        children: "Tipo de instalação"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: r?.inst ?? '',
                                                                        onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                inst: e?.target?.value
                                                                            }),
                                                                        className: "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Selecione..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Embutida na parede",
                                                                                children: "Embutida na parede"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Aparente",
                                                                                children: "Aparente (sobrepor)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 199,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Pela laje",
                                                                                children: "Pela laje / forro"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 25
                                                            }, this),
                                                            r?.inst === 'Aparente' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-xs",
                                                                        children: "Material aparente"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: r?.materialAparente ?? 'canaleta',
                                                                        onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                materialAparente: e?.target?.value
                                                                            }),
                                                                        className: "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "canaleta",
                                                                                children: "Canaleta (peças de 2 m)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 208,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "eletroduto_metro",
                                                                                children: "Eletroduto rígido (em metros)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 209,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "eletroduto_peca3m",
                                                                                children: "Eletroduto rígido (peças de 3 m)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 210,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-xs",
                                                                                children: "Pé-direito (m)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 216,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                type: "number",
                                                                                step: "0.1",
                                                                                min: "0",
                                                                                value: r?.pe ?? '',
                                                                                onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                        pe: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                                                    }),
                                                                                className: "mt-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 217,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-xs",
                                                                                children: "Distância padrão entre pontos (m)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 220,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                type: "number",
                                                                                step: "0.1",
                                                                                min: "0",
                                                                                value: r?.dpad ?? '',
                                                                                onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                        dpad: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                                                    }),
                                                                                className: "mt-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                                lineNumber: 221,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "text-xs",
                                                                        children: "Observações"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: r?.obs ?? '',
                                                                        onChange: (e)=>store.updateRoom(r?.id ?? '', {
                                                                                obs: e?.target?.value ?? ''
                                                                            }),
                                                                        placeholder: "Notas adicionais...",
                                                                        className: "mt-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-comodos.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "destructive",
                                                    size: "sm",
                                                    onClick: ()=>handleRemove(r),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3 h-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-comodos.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Remover"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-comodos.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-comodos.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-comodos.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/step-comodos.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-comodos.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, r?.id, false, {
                        fileName: "[project]/app/components/step-comodos.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/step-comodos.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            !showTemplates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "w-full",
                onClick: ()=>setShowTemplates(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-comodos.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    " Adicionar cômodo"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-comodos.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-comodos.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(StepComodos, "OycJCe24hGNmxEJksLm28N95wCA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepComodos;
var _c;
__turbopack_context__.k.register(_c, "StepComodos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-entrada.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepEntrada
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2d$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlugZap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug-zap.js [app-client] (ecmascript) <export default as PlugZap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/entrada-calc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/tensao-por-uf.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const selCls = 'mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm';
const sug = (manual)=>manual ? '' : ' (sugerido)';
function StepEntrada() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const e = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entradaPadrao"])(),
        ...store?.entrada ?? {}
    };
    const up = (patch)=>store.updateEntrada(patch);
    const potKw = parseFloat(e.potenciaDemandada) || 0;
    const percurso = parseFloat(e.percurso) || 0;
    const vs = e.sistemaTensao === '220/127' || e.sistemaTensao === '380/220' ? e.sistemaTensao : undefined;
    const ufInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["infoUf"])(e.uf);
    // Padrão de entrada calculado pelo motor (mesma chamada da prévia), ao montar e quando potência/UF mudam.
    const [padrao, setPadrao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [calculando, setCalculando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepEntrada.useEffect": ()=>{
            const s = store;
            if (!(s?.rooms?.length || s?.equips?.length)) {
                setPadrao(null);
                return;
            }
            const dados = {
                imovel: s.imovel,
                obra: s.obra,
                cobertura: s.cobertura,
                rede: s.rede,
                rooms: s.rooms,
                equips: s.equips,
                ...s.entrada ? {
                    entrada: s.entrada
                } : {},
                ...s.aterramento ? {
                    aterramento: s.aterramento
                } : {},
                ...s.circuitos ? {
                    circuitos: s.circuitos
                } : {}
            };
            const ctrl = new AbortController();
            setCalculando(true);
            fetch('/api/calcular', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dados
                }),
                signal: ctrl.signal
            }).then({
                "StepEntrada.useEffect": (r)=>r.ok ? r.json() : Promise.reject(new Error('falha'))
            }["StepEntrada.useEffect"]).then({
                "StepEntrada.useEffect": (j)=>{
                    setPadrao(j?.entrada?.disjuntorGeralA ? j.entrada : null);
                    setCalculando(false);
                }
            }["StepEntrada.useEffect"]).catch({
                "StepEntrada.useEffect": (err)=>{
                    if (err?.name !== 'AbortError') {
                        setPadrao(null);
                        setCalculando(false);
                    }
                }
            }["StepEntrada.useEffect"]);
            return ({
                "StepEntrada.useEffect": ()=>ctrl.abort()
            })["StepEntrada.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StepEntrada.useEffect"], [
        e.potenciaDemandada,
        e.uf,
        e.sistemaTensao
    ]);
    const [fn, ff] = vs === '220/127' ? [
        '127',
        '220'
    ] : [
        '220',
        '380'
    ];
    /** UF escolhida: grava a tensão da localidade e pré-preenche o sistema (o usuário pode alterar abaixo). */ const escolherUf = (sigla)=>{
        const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["infoUf"])(sigla);
        if (!u) {
            up({
                uf: '',
                sistemaTensao: undefined
            });
            return;
        }
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sistemaSugeridoUf"])(u.tensao, potKw);
        up({
            uf: u.uf,
            sistemaTensao: u.tensao,
            sistema: s,
            sistemaManual: false,
            tensao: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensaoDoSistema"])(s, u.tensao)
        });
    };
    // Sugestões automáticas: só mexem nos campos que o usuário não sobrescreveu.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepEntrada.useEffect": ()=>{
            const patch = {};
            const sugerido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sistemaSugeridoUf"])(vs ?? '220/127', potKw);
            const sistema = e.sistemaManual || potKw <= 0 ? e.sistema : sugerido;
            if (sistema !== e.sistema) {
                patch.sistema = sistema;
                patch.tensao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensaoDoSistema"])(sistema, vs);
            }
            if (!e.bitolaManual) {
                // Potência estimada usada como carga instalada e demanda (o PDF refaz com a demanda completa).
                const cat = potKw > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["categoriaDisNor"])(potKw, potKw, vs ?? '220/127', sistema) : null;
                const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bitolaEntrada"])(cat?.secaoCu ?? 6, percurso);
                if (b !== e.bitola) patch.bitola = b;
            }
            if (!e.diametroManual) {
                const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sugerirDiametro"])(sistema);
                if (d !== e.diametroEletroduto) patch.diametroEletroduto = d;
            }
            if (Object.keys(patch).length) up(patch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StepEntrada.useEffect"], [
        potKw,
        percurso,
        vs,
        e.sistema,
        e.sistemaManual,
        e.bitolaManual,
        e.diametroManual
    ]);
    const materiais = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["materiaisEntrada"])(e).filter((m)=>m.mostrarNaPrevia);
    const avisos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisosEntrada"])(e);
    const aerea = e.tipoEntrada === 'aerea';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Entrada de energia"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-entrada.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Alimentador principal: do padrão da concessionária até o quadro"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-entrada.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-entrada.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2d$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlugZap$3e$__["PlugZap"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold",
                                    children: "Dados da entrada"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Estado (UF) da obra"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.uf ?? '',
                                            className: selCls,
                                            onChange: (ev)=>escolherUf(ev.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Selecione…"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UFS"].map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: u.uf,
                                                        children: [
                                                            u.uf,
                                                            " — ",
                                                            u.nome
                                                        ]
                                                    }, u.uf, true, {
                                                        fileName: "[project]/app/components/step-entrada.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 33
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Tensão da localidade"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.sistemaTensao ?? 'nao-sei',
                                            className: selCls,
                                            onChange: (ev)=>{
                                                const t = ev.target.value;
                                                up({
                                                    sistemaTensao: t,
                                                    tensao: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensaoDoSistema"])(e.sistema, t)
                                                });
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "nao-sei",
                                                    children: "Não sei (adota 220/127 V)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "220/127",
                                                    children: "220/127 V"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "380/220",
                                                    children: "380/220 V"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        ufInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-muted-foreground -mt-2",
                            children: [
                                "Distribuidora: ",
                                ufInfo.distribuidora,
                                " — ",
                                ufInfo.tensao,
                                " V.",
                                ufInfo.verificar ? ' Tabela de categorias usada como referência: verificar com a distribuidora local.' : '',
                                " Confirme ou altere o sistema abaixo."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Tipo de entrada"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.tipoEntrada,
                                            className: selCls,
                                            onChange: (ev)=>{
                                                const t = ev.target.value;
                                                up({
                                                    tipoEntrada: t,
                                                    tipoEletroduto: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tipoEletrodutoPadrao"])(t)
                                                });
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "aerea",
                                                    children: "Aérea"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "subterranea",
                                                    children: "Subterrânea"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "parede",
                                                    children: "Pela parede"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Poste"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.poste,
                                            className: selCls,
                                            onChange: (ev)=>up({
                                                    poste: ev.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "nao-tem",
                                                    children: "Sem poste"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "6m",
                                                    children: "6 m"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "7m",
                                                    children: "7 m"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Percurso total (m)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            step: "0.1",
                                            min: "0",
                                            value: e.percurso,
                                            placeholder: "Ex: 15",
                                            className: "mt-1",
                                            onChange: (ev)=>up({
                                                    percurso: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(ev.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] text-muted-foreground",
                                            children: "Inclua descidas, curvas e percurso horizontal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Potência estimada (kW)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "number",
                                            step: "0.1",
                                            min: "0",
                                            value: e.potenciaDemandada,
                                            placeholder: "Ex: 8",
                                            className: "mt-1",
                                            onChange: (ev)=>up({
                                                    potenciaDemandada: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(ev.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] text-muted-foreground",
                                            children: "Soma das cargas principais; a demanda e a categoria são calculadas no PDF (DIS-NOR-030)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        calculando && !padrao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Calculando…"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 165,
                            columnNumber: 37
                        }, this),
                        padrao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-4 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold mb-3 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-entrada.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            " Padrão de entrada",
                                            calculando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-normal text-muted-foreground",
                                                children: "Calculando…"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-entrada.tsx",
                                                lineNumber: 170,
                                                columnNumber: 91
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-entrada.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-center",
                                        children: [
                                            {
                                                label: 'Demanda total',
                                                value: `${padrao.demandaKva.toLocaleString('pt-BR', {
                                                    maximumFractionDigits: 2
                                                })} kVA`
                                            },
                                            {
                                                label: 'Categoria',
                                                value: padrao.categoria
                                            },
                                            {
                                                label: 'Disjuntor geral',
                                                value: `${padrao.disjuntorGeralA} A`
                                            },
                                            {
                                                label: 'Tensão da localidade',
                                                value: `${padrao.uf ? `${padrao.uf} · ` : ''}${padrao.sistema} V`
                                            }
                                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-bold",
                                                        children: x.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-entrada.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-muted-foreground",
                                                        children: x.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-entrada.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, x.label, true, {
                                                fileName: "[project]/app/components/step-entrada.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/step-entrada.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[11px] text-muted-foreground",
                                        children: "Pré-dimensionamento (DIS-NOR-030) — verificar com a distribuidora."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/step-entrada.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/step-entrada.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: [
                                                "Sistema",
                                                sug(e.sistemaManual)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.sistema,
                                            className: selCls,
                                            onChange: (ev)=>{
                                                const s = ev.target.value;
                                                up({
                                                    sistema: s,
                                                    tensao: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensaoDoSistema"])(s, vs),
                                                    sistemaManual: true
                                                });
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "monofasico",
                                                    children: [
                                                        "Monofásico ",
                                                        fn,
                                                        "V"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                vs !== '380/220' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "bifasico",
                                                    children: [
                                                        "Bifásico ",
                                                        ff,
                                                        "V"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "trifasico",
                                                    children: [
                                                        "Trifásico ",
                                                        ff,
                                                        "V"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: [
                                                "Bitola do cabo",
                                                sug(e.bitolaManual)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.bitola,
                                            className: selCls,
                                            onChange: (ev)=>up({
                                                    bitola: ev.target.value,
                                                    bitolaManual: true
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "6",
                                                    children: "6 mm²"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "10",
                                                    children: "10 mm²"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "16",
                                                    children: "16 mm²"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        !aerea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: [
                                                "Diâmetro do eletroduto",
                                                sug(e.diametroManual)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.diametroEletroduto,
                                            className: selCls,
                                            onChange: (ev)=>up({
                                                    diametroEletroduto: ev.target.value,
                                                    diametroManual: true
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "3/4",
                                                    children: '¾"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "1",
                                                    children: '1"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "1-1/4",
                                                    children: '1¼"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Tipo de eletroduto"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.tipoEletroduto,
                                            className: selCls,
                                            onChange: (ev)=>up({
                                                    tipoEletroduto: ev.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "rigido",
                                                    children: "Rígido"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "flexivel",
                                                    children: "Flexível corrugado"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs",
                                            children: "Eletroduto em:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: e.unidadeEletroduto ?? 'metro',
                                            className: selCls,
                                            onChange: (ev)=>up({
                                                    unidadeEletroduto: ev.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "metro",
                                                    children: "Metros"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "peca3m",
                                                    children: "Peças de 3 m"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-entrada.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs",
                                    children: "Observações"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: e.obs,
                                    maxLength: 500,
                                    rows: 3,
                                    className: selCls,
                                    placeholder: "Ex: padrão já existente, trocar só o cabo",
                                    onChange: (ev)=>up({
                                            obs: ev.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 text-sm cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "accent-primary",
                                    checked: e.incluirNoPdf !== false,
                                    onChange: (ev)=>up({
                                            incluirNoPdf: ev.target.checked
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                "Incluir materiais da entrada no orçamento (PDF)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-entrada.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-entrada.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            avisos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                " Avisos (",
                                avisos.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1",
                            children: avisos.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "w-3.5 h-3.5 text-yellow-500 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        a.msg
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-entrada.tsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-entrada.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                " Prévia dos materiais"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: materiais.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-1 border-b border-border/50 last:border-0 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: m.descricao
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground whitespace-nowrap ml-3",
                                            children: [
                                                m.qtd,
                                                " ",
                                                m.unidade
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-entrada.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 pt-3 border-t border-dashed flex items-center gap-2 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-entrada.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                " Bitola, disjuntor e detalhamento completo inclusos no PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-entrada.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-entrada.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-entrada.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-entrada.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(StepEntrada, "1R49p5c0Nu2s5oioboqo0Cg3tG0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepEntrada;
var _c;
__turbopack_context__.k.register(_c, "StepEntrada");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-equipamentos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepEquipamentos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/tensao-por-uf.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ponto-equip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$circuitos$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/circuitos-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
;
const EQUIP_TIPOS = [
    {
        value: 'Chuveiro elétrico',
        label: 'Chuveiro elétrico'
    },
    {
        value: 'Torneira elétrica',
        label: 'Torneira elétrica'
    },
    {
        value: 'Ar-condicionado',
        label: 'Ar-condicionado'
    },
    {
        value: 'Forno elétrico',
        label: 'Forno elétrico'
    },
    {
        value: 'Cooktop elétrico',
        label: 'Cooktop elétrico'
    },
    {
        value: 'Máquina de lavar',
        label: 'Máquina de lavar'
    },
    {
        value: 'Secadora',
        label: 'Secadora'
    },
    {
        value: 'Aquecedor',
        label: 'Aquecedor'
    },
    {
        value: 'Bomba',
        label: 'Bomba d\'água'
    },
    {
        value: 'Carregador de veículo elétrico',
        label: 'Carregador de veículo elétrico'
    },
    {
        value: 'Outro',
        label: 'Outro equipamento'
    }
];
function StepEquipamentos() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const equips = store?.equips ?? [];
    const rooms = store?.rooms ?? [];
    // Rede 220/127 V (escolhida na entrada ou pela UF; sem informação adota 220/127): 380 V não existe.
    const ent = store?.entrada;
    const rede380 = ent?.sistemaTensao === '380/220' || ent?.sistemaTensao !== '220/127' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["infoUf"])(ent?.uf)?.tensao === '380/220';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepEquipamentos.useEffect": ()=>{
            if (rede380) return;
            for (const q of equips)if (q?.tens === '380V') store.updateEquip(q.id, {
                tens: '220V'
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StepEquipamentos.useEffect"], [
        rede380,
        equips
    ]);
    const addEquip = ()=>{
        store.addEquip({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
            tipo: '',
            room: '',
            pot: '',
            tens: '',
            dint: '',
            dist: '',
            alim: '',
            cx: '4x2'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Equipamento adicionado');
    };
    // Orçamentos antigos: equipamento sem caixa recebe 4x2 (padrão), para a tela e a prévia contarem igual.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepEquipamentos.useEffect": ()=>{
            for (const e of equips)if (!e?.cx) store.updateEquip(e.id, {
                cx: '4x2'
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StepEquipamentos.useEffect"], [
        equips.length
    ]);
    // Vindo de uma pendência da prévia: rola até o equipamento indicado e limpa a marcação.
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepEquipamentos.useEffect": ()=>{
            const id = store.activeEquipId;
            if (!id) return;
            const t = setTimeout({
                "StepEquipamentos.useEffect.t": ()=>{
                    refs.current[id]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    store.setActiveEquipId('');
                }
            }["StepEquipamentos.useEffect.t"], 150);
            return ({
                "StepEquipamentos.useEffect": ()=>clearTimeout(t)
            })["StepEquipamentos.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StepEquipamentos.useEffect"], []);
    const selCls = 'mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Equipamentos especiais"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Aparelhos que precisam de circuito próprio (chuveiro, ar-condicionado, etc.)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-equipamentos.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "popLayout",
                children: equips.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: (el)=>{
                            refs.current[e?.id] = el;
                        },
                        layout: true,
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-4 pb-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                        className: "w-4 h-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        children: [
                                                            "Equipamento ",
                                                            idx + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    store.removeEquip(e?.id ?? '');
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Equipamento removido');
                                                },
                                                className: "text-destructive hover:text-destructive/80",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 76
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: "Tipo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: e?.tipo ?? '',
                                                        onChange: (ev)=>{
                                                            const tipo = ev?.target?.value;
                                                            // Pré-preenche potência/tensão típicas só nos campos que o usuário ainda não preencheu
                                                            const tip = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POTENCIAS_TIPICAS"][tipo];
                                                            store.updateEquip(e?.id ?? '', {
                                                                tipo,
                                                                ...tip && !e?.pot ? {
                                                                    pot: String(tip.pot)
                                                                } : {},
                                                                ...tip && !e?.tens ? {
                                                                    tens: `${tip.tens}V`
                                                                } : {}
                                                            });
                                                        },
                                                        className: "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Selecione..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 23
                                                            }, this),
                                                            EQUIP_TIPOS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: t.value,
                                                                    children: t.label
                                                                }, t.value, false, {
                                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 47
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: [
                                                            "Cômodo ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-destructive",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 55
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: e?.room ?? '',
                                                        onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                room: ev?.target?.value ?? ''
                                                            }),
                                                        className: `${selCls} ${!e?.room ? 'border-destructive' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Selecione o cômodo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 23
                                                            }, this),
                                                            rooms.map((rm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: rm?.id ?? '',
                                                                    children: rm?.nome || rm?.base || 'Cômodo'
                                                                }, rm?.id, false, {
                                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 48
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this),
                                                    !e?.room && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[11px] text-destructive",
                                                        children: "Informe o cômodo do equipamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    (e?.tipo === 'Ar-condicionado' || e?.tipo === 'Bomba') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-xs",
                                                children: e?.tipo === 'Bomba' ? 'Potência da bomba (CV)' : 'Capacidade (BTU/h)'
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                defaultValue: "",
                                                className: "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm",
                                                onChange: (ev)=>{
                                                    const v = parseFloat(ev?.target?.value);
                                                    if (!v) return;
                                                    const w = e?.tipo === 'Bomba' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvParaWatts"])(v) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btuParaWatts"])(v);
                                                    store.updateEquip(e?.id ?? '', {
                                                        pot: String(w)
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Selecione para preencher a potência…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this),
                                                    (e?.tipo === 'Bomba' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOMBA_CV_OPTIONS"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AC_BTU_OPTIONS"]).map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: v,
                                                            children: e?.tipo === 'Bomba' ? `${String(v).replace('.', ',')} CV (≈ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvParaWatts"])(v)} W)` : `${v.toLocaleString('pt-BR')} BTU/h (≈ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btuParaWatts"])(v)} W)`
                                                        }, v, false, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[11px] text-muted-foreground",
                                                children: "Preenche a potência em watts; você pode ajustar o valor abaixo."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: "Potência (W)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        min: "0",
                                                        value: e?.pot ?? '',
                                                        onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                pot: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(ev?.target?.value)
                                                            }),
                                                        placeholder: "Ex: 5500",
                                                        className: "mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: "Tensão"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: e?.tens ?? '',
                                                        onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                tens: ev?.target?.value
                                                            }),
                                                        className: "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Selecione"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "127V",
                                                                children: "127V"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "220V",
                                                                children: "220V"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "380V",
                                                                disabled: !rede380,
                                                                children: "380V (só rede 380/220)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    !rede380 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[11px] text-muted-foreground",
                                                        children: "Rede 220/127 V — 380 V não disponível"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        children: "Distância ao quadro (m)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        step: "0.1",
                                                        min: "0",
                                                        value: e?.dist ?? '',
                                                        onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                dist: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(ev?.target?.value)
                                                            }),
                                                        placeholder: "0.0",
                                                        className: "mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    (()=>{
                                        const I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correnteEquip"])(e?.pot, e?.tens, e?.tipo);
                                        if (I === null) return null;
                                        const av = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avisoCorrente"])(I);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "Corrente estimada: ",
                                                        I.toFixed(1).replace('.', ','),
                                                        " A"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 23
                                                }, this),
                                                av === 'prefira20A' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800",
                                                    children: "Prefira tomada 20A ou ligação direta"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 25
                                                }, this),
                                                av === 'ligacaoDireta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-red-100 px-2 py-0.5 font-medium text-red-700",
                                                            children: "Recomendado: ligação direta (Wago/emenda)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 27
                                                        }, this),
                                                        e?.ponto !== 'emenda' && e?.ponto !== 'borne' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>store.updateEquip(e?.id ?? '', {
                                                                    ponto: 'emenda',
                                                                    cx: '4x2'
                                                                }),
                                                            className: "text-primary hover:underline",
                                                            children: "usar sugestão"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                            lineNumber: 171,
                                            columnNumber: 21
                                        }, this);
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs",
                                                        title: "Percurso do ponto de chegada no cômodo até onde o equipamento está instalado",
                                                        children: "Distância dentro do cômodo (m)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        step: "0.1",
                                                        min: "0",
                                                        value: e?.dint ?? '',
                                                        onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                dint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(ev?.target?.value)
                                                            }),
                                                        placeholder: "0",
                                                        className: "mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "col-span-2 self-end pb-2 text-[11px] text-muted-foreground",
                                                children: "Percurso do ponto de chegada no cômodo até onde o equipamento está instalado."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    (()=>{
                                        const dst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanciaEquip"])(e, rooms);
                                        return dst.origem === 'nenhuma' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center gap-1 text-[11px] text-amber-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 87
                                                }, this),
                                                " Informe o cômodo ou a distância ao quadro"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this) : dst.origem === 'comodo' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-muted-foreground",
                                            children: [
                                                "Distância considerada: ",
                                                dst.metros,
                                                " m (trajeto do cômodo + distância dentro do cômodo)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this) : null;
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold mb-1",
                                                children: "Configuração do ponto"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs",
                                                                children: "Caixa"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: e?.cx ?? '4x2',
                                                                onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                        cx: ev?.target?.value
                                                                    }),
                                                                className: selCls,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "4x2",
                                                                        children: "4x2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "4x4",
                                                                        children: "4x4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs",
                                                                children: "Ponto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: e?.ponto ?? '',
                                                                onChange: (ev)=>store.updateEquip(e?.id ?? '', {
                                                                        ponto: ev?.target?.value || undefined
                                                                    }),
                                                                className: selCls,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Selecione"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PONTO_LABEL"]).map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: k,
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PONTO_LABEL"][k]
                                                                        }, k, false, {
                                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 80
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this),
                                                            (()=>{
                                                                const sug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontoSugerido"])(e?.tipo ?? '', e?.pot, e?.tens);
                                                                return sug && e?.ponto !== sug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>store.updateEquip(e?.id ?? '', {
                                                                            ponto: sug
                                                                        }),
                                                                    className: "mt-1 text-[11px] text-primary hover:underline",
                                                                    children: [
                                                                        "Sugestão: ",
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PONTO_LABEL"][sug],
                                                                        " (usar)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 27
                                                                }, this) : null;
                                                            })()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    e?.tipo === 'Ar-condicionado' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-xs",
                                                children: "Alimentação"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 mt-1",
                                                children: [
                                                    'Unidade externa',
                                                    'Unidade interna'
                                                ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>store.updateEquip(e?.id ?? '', {
                                                                alim: v
                                                            }),
                                                        className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${e?.alim === v ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50'}`,
                                                        children: v
                                                    }, v, false, {
                                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-equipamentos.tsx",
                                        lineNumber: 235,
                                        columnNumber: 19
                                    }, this),
                                    (()=>{
                                        const rp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ponto$2d$equip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumoPonto"])(e);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-md bg-muted/40 px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-center gap-1.5 text-xs font-semibold mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                            className: "w-3.5 h-3.5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 91
                                                        }, this),
                                                        " Resumo do ponto"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-[11px] text-muted-foreground space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Caixa: ",
                                                                rp.caixa
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Ponto: ",
                                                                rp.ponto
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                rp.caixas,
                                                                " caixa"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-equipamentos.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-equipamentos.tsx",
                                            lineNumber: 251,
                                            columnNumber: 21
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/step-equipamentos.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-equipamentos.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, e?.id, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/step-equipamentos.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "w-full",
                onClick: addEquip,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    " Adicionar equipamento"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-equipamentos.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            equips.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Nenhum equipamento especial adicionado"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Se não tiver chuveiro, ar-condicionado etc., pode pular esta etapa"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-equipamentos.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-equipamentos.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$circuitos$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/step-equipamentos.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-equipamentos.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(StepEquipamentos, "allLqps6ZFz5Q1ZuhUM5Ee6yjIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepEquipamentos;
var _c;
__turbopack_context__.k.register(_c, "StepEquipamentos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-imovel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepImovel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const OPTIONS = [
    {
        key: 'imovel',
        label: 'Tipo de imóvel',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        items: [
            'Casa',
            'Apartamento',
            'Comércio pequeno'
        ],
        help: 'Qual é o tipo do seu imóvel?'
    },
    {
        key: 'obra',
        label: 'Tipo de obra',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
        items: [
            'Construção nova',
            'Reforma',
            'Ampliação'
        ],
        help: 'Qual é a situação da obra?'
    },
    {
        key: 'cobertura',
        label: 'Cobertura',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        items: [
            'Laje',
            'Forro de gesso',
            'Telhado aparente',
            'Não sei'
        ],
        help: 'Como é o teto do imóvel?'
    },
    {
        key: 'rede',
        label: 'Ligação elétrica',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        items: [
            'Monofásico',
            'Bifásico',
            'Trifásico',
            'Não sei'
        ],
        help: 'Qual o tipo de ligação da rede? Se não souber, sem problema!'
    }
];
function StepImovel() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Sobre o imóvel"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-imovel.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Informe as características gerais do seu imóvel"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-imovel.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-imovel.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            OPTIONS.map((opt)=>{
                const Icon = opt.icon;
                const current = store?.[opt.key] ?? '';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "pt-5 pb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/step-imovel.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm font-semibold",
                                        children: opt.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/step-imovel.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/step-imovel.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-3",
                                children: opt.help
                            }, void 0, false, {
                                fileName: "[project]/app/components/step-imovel.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                children: opt.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>store.setField(opt.key, item),
                                        className: `px-3 py-2.5 rounded-lg text-sm font-medium transition-all border ${current === item ? 'bg-primary text-primary-foreground border-primary shadow-sm' : 'bg-card border-border hover:border-primary/50 hover:bg-primary/5'}`,
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/app/components/step-imovel.tsx",
                                        lineNumber: 36,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/step-imovel.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/step-imovel.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                }, opt.key, false, {
                    fileName: "[project]/app/components/step-imovel.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-imovel.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(StepImovel, "lacCqcEtsbxX3PAG/fPlTuRiPg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepImovel;
var _c;
__turbopack_context__.k.register(_c, "StepImovel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-pontos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepPontos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$luz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/luz.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/resumo-comodo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/toggle-left.js [app-client] (ecmascript) <export default as ToggleLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const TIPOS_TOMADA = [
    {
        v: 'T10',
        label: 'Simples 10A'
    },
    {
        v: 'T10D',
        label: 'Dupla 10A'
    },
    {
        v: 'T10T',
        label: 'Tripla 10A'
    },
    {
        v: 'T20',
        label: 'Simples 20A'
    },
    {
        v: 'T20D',
        label: 'Dupla 20A'
    },
    {
        v: 'T20T',
        label: 'Tripla 20A'
    },
    {
        v: 'USB',
        label: 'USB'
    }
];
const TOMADA_JUNTO = [
    {
        v: '',
        label: 'Sem tomada junto'
    },
    {
        v: 'T10',
        label: '+ 10A simples'
    },
    {
        v: 'T10D',
        label: '+ 10A dupla'
    },
    {
        v: 'T20',
        label: '+ 20A simples'
    },
    {
        v: 'T20D',
        label: '+ 20A dupla'
    }
];
const NOME_CMD = {
    IS: 'Simples',
    IP: 'Paralelo',
    II: 'Intermediário'
};
const plural = (n, um, varios)=>`${n} ${n === 1 ? um : varios}`;
function StepPontos() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const rooms = store?.rooms ?? [];
    // Cômodo ativo fica no store: a prévia pode abrir este passo já no cômodo certo.
    const activeRoom = rooms.some((x)=>x?.id === store.activeRoomId) ? store.activeRoomId : rooms?.[0]?.id ?? '';
    const setActiveRoom = (id)=>store.setActiveRoomId(id);
    const r = rooms.find((x)=>x?.id === activeRoom) ?? rooms?.[0];
    const nbr = r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tomadasNbr"])(r) : null;
    const novoSw = (d = '')=>({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
            h: 'media',
            d,
            tom: '',
            cx: '4x2'
        });
    const sugestaoParalelo = (rm)=>Math.round((parseFloat(rm?.pe ?? '') || 2.8) * 2 * 10) / 10;
    const addTomada = ()=>{
        if (!r) return;
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tomadaPadrao"])(`${r.base ?? ''} ${r.nome ?? ''}`);
        store.addPonto(r.id, {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
            h: 'baixa',
            d: '',
            cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caixaPorModulos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosDe"])(t)),
            mods: [
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                    t
                }
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Tomada adicionada');
    };
    const novoComandoIS = ()=>({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
            t: 'IS',
            luzes: [],
            sws: [
                novoSw()
            ]
        });
    /** Nova luz já vinculada: sem interruptor cria um simples; com 1 ou mais, liga ao último. */ const addLuz = ()=>{
        if (!r) return;
        store.addLuzVinculada(r.id, {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
            d: '',
            cx: 'Redonda'
        }, novoComandoIS);
    };
    /** Select "Interruptor:" da luz — '__novo__' cria um interruptor simples e liga a luz a ele. */ const trocarInterruptorDaLuz = (luzId, valor)=>{
        if (!r) return;
        if (valor === '__novo__') {
            const cmd = novoComandoIS();
            store.addComando(r.id, cmd);
            store.vincularLuzComando(r.id, luzId, cmd.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Interruptor adicionado');
            return;
        }
        store.vincularLuzComando(r.id, luzId, valor);
    };
    /** Checkbox "Com tomada na mesma placa": grava comTomada e põe/tira a tomada 10A na 1ª caixa. */ const setComTomada = (cmd, marcado)=>{
        if (!r) return;
        store.updateComando(r.id, cmd.id, {
            comTomada: marcado
        });
        const sw = cmd.sws?.[0];
        if (!sw) return;
        if (marcado && !sw.tom) store.updateSw(r.id, cmd.id, sw.id, {
            tom: 'T10',
            cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caixaPorModulos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosSw"])('T10'))
        });
        if (!marcado && sw.tom) store.updateSw(r.id, cmd.id, sw.id, {
            tom: '',
            cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caixaPorModulos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosSw"])(''))
        });
    };
    const addInterruptor = ()=>{
        if (!r) return;
        store.addComando(r.id, {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
            t: 'IS',
            luzes: [],
            sws: [
                novoSw()
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Interruptor adicionado');
    };
    const mudarTipo = (cmd, t)=>{
        if (!r) return;
        const d = t === 'IP' ? String(sugestaoParalelo(r)) : '';
        store.setTipoComando(r.id, cmd.id, t, ()=>novoSw(d));
        // Paralelo: se a 2ª caixa já existia sem distância, grava a sugestão (editável)
        if (t === 'IP') {
            const atual = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState().rooms.find((x)=>x.id === r.id)?.comandos.find((c)=>c.id === cmd.id);
            const sw2 = atual?.sws?.[1];
            if (sw2 && !sw2.d) store.updateSw(r.id, cmd.id, sw2.id, {
                d
            });
        }
    };
    const suggestLuzes = ()=>{
        if (!r) return;
        const c = parseFloat(r?.c ?? '0') || 0;
        const l = parseFloat(r?.l ?? '0') || 0;
        const ideal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$luz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["luzCount"])(c, l);
        const current = r?.luzes?.length ?? 0;
        if (current >= ideal) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Este cômodo já tem ${current} luz(es), o mínimo recomendado é ${ideal}`);
            return;
        }
        const diff = ideal - current;
        for(let i = 0; i < diff; i++)addLuz();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${diff} ponto(s) de luz sugerido(s)`);
    };
    const cmdDaLuz = (luzId)=>(r?.comandos ?? []).find((c)=>(c?.luzes ?? []).includes(luzId));
    const resumo = r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumoComodo"])(r) : null;
    const selCls = 'rounded-md border border-input bg-card px-2 py-1 text-xs';
    if (rooms.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"], {
                    className: "w-10 h-10 text-muted-foreground mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/app/components/step-pontos.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Adicione cômodos na etapa anterior primeiro"
                }, void 0, false, {
                    fileName: "[project]/app/components/step-pontos.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/step-pontos.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Pontos elétricos"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Adicione tomadas, luzes e interruptores em cada cômodo"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-pontos.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-2 scrollbar-none",
                children: rooms.map((rm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveRoom(rm?.id ?? ''),
                        className: `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border transition-all ${activeRoom === rm?.id ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50 bg-card'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/step-pontos.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            " ",
                            rm?.nome || rm?.base || 'Cômodo'
                        ]
                    }, rm?.id, true, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/step-pontos.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            r && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-4 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: [
                                                        "Tomadas (",
                                                        r?.pontos?.length ?? 0,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: addTomada,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3 h-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 73
                                                }, this),
                                                " Tomada"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                (r?.pontos ?? []).map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 py-2 border-t border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground w-6",
                                                children: [
                                                    idx + 1,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: p?.mods?.[0]?.t ?? 'T10',
                                                onChange: (e)=>{
                                                    const t = e?.target?.value ?? 'T10';
                                                    const newMods = [
                                                        {
                                                            id: p?.mods?.[0]?.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                                                            t
                                                        }
                                                    ];
                                                    store.updatePonto(r.id, p?.id ?? '', {
                                                        mods: newMods,
                                                        cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caixaPorModulos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosDe"])(t))
                                                    });
                                                },
                                                className: selCls,
                                                children: TIPOS_TOMADA.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: o.v,
                                                        children: o.label
                                                    }, o.v, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 46
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: p?.h ?? 'baixa',
                                                onChange: (e)=>store.updatePonto(r.id, p?.id ?? '', {
                                                        h: e?.target?.value
                                                    }),
                                                className: "rounded-md border border-input bg-card px-2 py-1 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "baixa",
                                                        children: "Baixa (30cm)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "media",
                                                        children: "Média (110cm)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "alta",
                                                        children: "Alta (210cm)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-muted-foreground whitespace-nowrap",
                                                children: [
                                                    plural((p?.mods ?? []).reduce((a, m)=>a + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosDe"])(m?.t), 0), 'módulo', 'módulos'),
                                                    " · cx ",
                                                    p?.cx ?? '4x2'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    store.removePonto(r.id, p?.id ?? '');
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Tomada removida');
                                                },
                                                className: "text-destructive hover:text-destructive/80 ml-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 84
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p?.id, true, {
                                        fileName: "[project]/app/components/step-pontos.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)),
                                nbr && nbr.atual < nbr.minimo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-start gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "w-3.5 h-3.5 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "A NBR 5410 pede no mínimo ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: nbr.minimo
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 47
                                                }, this),
                                                " ",
                                                nbr.minimo === 1 ? 'tomada' : 'tomadas',
                                                " para este cômodo (pelo tamanho e tipo). Faltam ",
                                                nbr.minimo - nbr.atual,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                !nbr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[11px] text-muted-foreground",
                                    children: "Informe as medidas do cômodo para conferir o mínimo de tomadas da NBR 5410."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-pontos.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-4 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                    className: "w-4 h-4 text-yellow-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: [
                                                        "Pontos de luz (",
                                                        r?.luzes?.length ?? 0,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "ghost",
                                                    onClick: suggestLuzes,
                                                    className: "text-xs",
                                                    children: "Sugerir"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "outline",
                                                    onClick: addLuz,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-3 h-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-pontos.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 72
                                                        }, this),
                                                        " Luz"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                (r?.luzes ?? []).map((luz, idx)=>{
                                    const cmd = cmdDaLuz(luz?.id ?? '');
                                    const cmdIdx = cmd ? (r?.comandos ?? []).indexOf(cmd) : -1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2 border-t border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground w-6",
                                                        children: [
                                                            idx + 1,
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: luz?.cx ?? 'Redonda',
                                                        onChange: (e)=>store.updateLuz(r.id, luz?.id ?? '', {
                                                                cx: e?.target?.value
                                                            }),
                                                        className: selCls,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Redonda",
                                                                children: "Caixa redonda"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "4x4",
                                                                children: "Caixa 4×4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "4x2",
                                                                children: "Caixa 4×2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Interruptor:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cmd?.id ?? '',
                                                        onChange: (e)=>trocarInterruptorDaLuz(luz?.id ?? '', e?.target?.value ?? ''),
                                                        className: selCls,
                                                        children: [
                                                            !cmd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Nenhum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 34
                                                            }, this),
                                                            (r?.comandos ?? []).map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c?.id,
                                                                    children: [
                                                                        "Interruptor ",
                                                                        i + 1,
                                                                        " (",
                                                                        NOME_CMD[c?.t ?? 'IS'],
                                                                        ")"
                                                                    ]
                                                                }, c?.id, true, {
                                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "__novo__",
                                                                children: "Novo interruptor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            if (luz?.id) {
                                                                const cmdDaLuz = (r?.comandos ?? []).find((c)=>(c?.luzes ?? []).includes(luz.id));
                                                                const someInterruptor = !!cmdDaLuz && cmdDaLuz.luzes.length === 1 && !cmdDaLuz.comTomada && !(cmdDaLuz.sws ?? []).some((sw)=>sw?.tom);
                                                                store.removeLuz(r.id, luz.id);
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(someInterruptor ? 'Luz e interruptor sem uso removidos' : 'Luz removida');
                                                            }
                                                        },
                                                        className: "text-destructive hover:text-destructive/80 ml-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-pontos.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 89
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 203,
                                                columnNumber: 21
                                            }, this),
                                            cmdIdx < 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 ml-8 flex items-center gap-1 text-[11px] text-amber-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Esta luz ainda não tem interruptor"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 230,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, luz?.id, true, {
                                        fileName: "[project]/app/components/step-pontos.tsx",
                                        lineNumber: 202,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-pontos.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-4 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__["ToggleLeft"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: [
                                                        "Interruptores (",
                                                        r?.comandos?.length ?? 0,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: addInterruptor,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3 h-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 78
                                                }, this),
                                                " Interruptor"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                (r?.comandos ?? []).map((cmd, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2 border-t border-border/50 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground w-6",
                                                        children: [
                                                            idx + 1,
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cmd?.t ?? 'IS',
                                                        onChange: (e)=>mudarTipo(cmd, e?.target?.value),
                                                        className: selCls,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "IS",
                                                                children: "Simples"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "IP",
                                                                children: "Paralelo (liga de 2 pontos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "II",
                                                                children: "Intermediário (liga de 3+ pontos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: [
                                                            "→ ",
                                                            plural(cmd?.luzes?.length ?? 0, 'luz', 'luzes')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-muted-foreground",
                                                        children: [
                                                            "· placa ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gruposTeclas"])(cmd?.luzes?.length ?? 0).map((n)=>`${n} ${n === 1 ? 'tecla' : 'teclas'}`).join(' + ')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-1.5 text-xs cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "accent-primary",
                                                                checked: !!cmd?.comTomada || !!cmd?.sws?.[0]?.tom,
                                                                onChange: (e)=>setComTomada(cmd, !!e?.target?.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Com tomada na mesma placa"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            store.removeComando(r.id, cmd?.id ?? '');
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Interruptor removido');
                                                        },
                                                        className: "text-destructive hover:text-destructive/80 ml-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/step-pontos.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 86
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-muted-foreground mb-1",
                                                        children: "Luzes que este interruptor comanda:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this),
                                                    (r?.luzes?.length ?? 0) === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-muted-foreground italic",
                                                        children: "Adicione pontos de luz acima para vincular."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-3",
                                                        children: (r?.luzes ?? []).map((luz, li)=>{
                                                            const marcada = (cmd?.luzes ?? []).includes(luz?.id ?? '');
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-1.5 text-xs cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        className: "accent-primary",
                                                                        checked: marcada,
                                                                        onChange: ()=>store.vincularLuzComando(r.id, luz?.id ?? '', marcada ? '' : cmd?.id ?? '')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Luz ",
                                                                    li + 1
                                                                ]
                                                            }, luz?.id, true, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, this),
                                                    (cmd?.luzes?.length ?? 0) === 0 && (r?.luzes?.length ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 flex items-center gap-1 text-[11px] text-amber-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Nenhuma luz vinculada"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this),
                                            cmd?.t === 'IP' && cmd?.sws?.[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-8 flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Distância entre os interruptores (m):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        step: "0.1",
                                                        min: "0",
                                                        value: cmd.sws[1].d ?? '',
                                                        placeholder: String(sugestaoParalelo(r)),
                                                        onChange: (e)=>store.updateSw(r.id, cmd.id, cmd.sws[1].id, {
                                                                d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semNegativo"])(e?.target?.value)
                                                            }),
                                                        className: "h-7 w-24 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-muted-foreground",
                                                        children: [
                                                            "sugestão: ",
                                                            sugestaoParalelo(r),
                                                            " m (pé-direito × 2, subida + descida)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 299,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-8 space-y-1",
                                                children: [
                                                    (cmd?.sws ?? []).map((sw, si)=>{
                                                        const mods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosSw"])(sw?.tom);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs w-12",
                                                                    children: [
                                                                        "Sw ",
                                                                        si + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: sw?.tom ?? '',
                                                                    onChange: (e)=>{
                                                                        const tom = e?.target?.value ?? '';
                                                                        store.updateSw(r.id, cmd.id, sw.id, {
                                                                            tom,
                                                                            cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caixaPorModulos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosSw"])(tom))
                                                                        });
                                                                    },
                                                                    className: selCls,
                                                                    children: TOMADA_JUNTO.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: o.v,
                                                                            children: o.label
                                                                        }, o.v, false, {
                                                                            fileName: "[project]/app/components/step-pontos.tsx",
                                                                            lineNumber: 318,
                                                                            columnNumber: 54
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] text-muted-foreground",
                                                                    children: [
                                                                        plural(mods, 'módulo', 'módulos'),
                                                                        " · cx ",
                                                                        sw?.cx ?? '4x2'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 27
                                                                }, this),
                                                                cmd?.t === 'II' && si >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>store.removeSw(r.id, cmd.id, sw.id),
                                                                    className: "text-destructive hover:text-destructive/80",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 86
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, sw?.id, true, {
                                                            fileName: "[project]/app/components/step-pontos.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 25
                                                        }, this);
                                                    }),
                                                    cmd?.t === 'II' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>store.addSw(r.id, cmd.id, novoSw()),
                                                        className: "text-[11px] text-primary hover:underline",
                                                        children: "+ ponto intermediário"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/step-pontos.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/step-pontos.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cmd?.id, true, {
                                        fileName: "[project]/app/components/step-pontos.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this)),
                                (r?.comandos?.length ?? 0) === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-muted-foreground",
                                    children: "Nenhum interruptor. Clique em “+ Interruptor” e escolha as luzes que ele comanda."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-pontos.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    resumo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-sm bg-muted/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-4 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold",
                                            children: "Resumo do cômodo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-xs space-y-1 text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                plural(r?.pontos?.length ?? 0, 'ponto de tomada', 'pontos de tomada'),
                                                " (",
                                                plural(resumo.nModulos, 'módulo', 'módulos'),
                                                ", ",
                                                plural(resumo.nTomadas, 'tomada', 'tomadas'),
                                                " no total)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 350,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: plural(resumo.nLuzes, 'ponto de luz', 'pontos de luz')
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                plural(resumo.nInterruptores, 'interruptor', 'interruptores'),
                                                ": ",
                                                resumo.nIS,
                                                " simples, ",
                                                resumo.nIP,
                                                " paralelo, ",
                                                resumo.nII,
                                                " intermediário"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                plural(resumo.nCaixas4x2, 'caixa 4x2', 'caixas 4x2'),
                                                ", ",
                                                plural(resumo.nCaixas4x4, 'caixa 4x4', 'caixas 4x4')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 349,
                                    columnNumber: 17
                                }, this),
                                resumo.pendencias.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 space-y-0.5",
                                    children: resumo.pendencias.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-1 text-[11px] text-amber-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-pontos.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 98
                                                }, this),
                                                " ",
                                                p
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/components/step-pontos.tsx",
                                            lineNumber: 358,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-pontos.tsx",
                                    lineNumber: 356,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-pontos.tsx",
                            lineNumber: 344,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-pontos.tsx",
                        lineNumber: 343,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-pontos.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-pontos.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(StepPontos, "lacCqcEtsbxX3PAG/fPlTuRiPg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepPontos;
var _c;
__turbopack_context__.k.register(_c, "StepPontos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/step-previa.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dadosDoOrcamento",
    ()=>dadosDoOrcamento,
    "default",
    ()=>StepPrevia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage-local.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/toggle-left.js [app-client] (ecmascript) <export default as ToggleLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circuit-board.js [app-client] (ecmascript) <export default as CircuitBoard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cable.js [app-client] (ecmascript) <export default as Cable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$checkout$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/checkout-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navegacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$afiliados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/afiliados.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function dadosDoOrcamento(s) {
    return {
        imovel: s.imovel,
        obra: s.obra,
        cobertura: s.cobertura,
        rede: s.rede,
        rooms: s.rooms,
        equips: s.equips,
        ...s.entrada ? {
            entrada: s.entrada
        } : {},
        ...s.aterramento ? {
            aterramento: s.aterramento
        } : {},
        ...s.circuitos ? {
            circuitos: s.circuitos
        } : {}
    };
}
function StepPrevia() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [previa, setPrevia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [falha, setFalha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [local, setLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cep, setCep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const dados = JSON.stringify(dadosDoOrcamento(store));
    // Releitura do estado salvo a cada abertura/fechamento do modal (o modal altera pagamento/entrega).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepPrevia.useEffect": ()=>{
            setLocal((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carregarEstado"])());
        }
    }["StepPrevia.useEffect"], [
        showCheckout
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepPrevia.useEffect": ()=>{
            const ctrl = new AbortController();
            setFalha(false);
            fetch('/api/calcular', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dados: JSON.parse(dados)
                }),
                signal: ctrl.signal
            }).then({
                "StepPrevia.useEffect": (r)=>r.ok ? r.json() : Promise.reject(new Error('falha'))
            }["StepPrevia.useEffect"]).then({
                "StepPrevia.useEffect": (j)=>setPrevia(j)
            }["StepPrevia.useEffect"]).catch({
                "StepPrevia.useEffect": (e)=>{
                    if (e?.name !== 'AbortError') setFalha(true);
                }
            }["StepPrevia.useEffect"]);
            return ({
                "StepPrevia.useEffect": ()=>ctrl.abort()
            })["StepPrevia.useEffect"];
        }
    }["StepPrevia.useEffect"], [
        dados
    ]);
    if (falha) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "max-w-3xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "pt-6 text-center space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-8 h-8 text-amber-500 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-previa.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Não foi possível calcular agora. Confira os dados e tente novamente."
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-previa.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: ()=>setFalha(false),
                        children: "Tentar de novo"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-previa.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 67,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/step-previa.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    if (!previa) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 75,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/step-previa.tsx",
            lineNumber: 75,
            columnNumber: 12
        }, this);
    }
    const { totais, pendencias, resumo } = previa;
    const erros = pendencias.filter((p)=>p?.tipo === 'erro');
    // Mesmas regras que o servidor usa para recusar a cobrança/regeração (dados_incompletos).
    const faltas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faltasObrigatorias"])(dadosDoOrcamento(store));
    const stats = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
            label: 'Caixas',
            value: totais?.totalCaixas ?? 0,
            color: 'text-primary'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"],
            label: 'Tomadas',
            value: totais?.totalTomadas ?? 0,
            color: 'text-orange-500'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
            label: 'Luzes',
            value: totais?.totalLuzes ?? 0,
            color: 'text-yellow-500'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__["ToggleLeft"],
            label: 'Interruptores',
            value: totais?.totalInterruptores ?? 0,
            color: 'text-green-500'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"],
            label: 'Circuitos',
            value: resumo.nCircuitos,
            color: 'text-indigo-500'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"],
            label: 'Eletroduto (m)',
            value: totais?.distEletroduto ?? 0,
            color: 'text-purple-500'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-6 max-w-3xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Prévia do orçamento"
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-previa.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Confira os totais. O detalhamento completo vai no PDF."
                    }, void 0, false, {
                        fileName: "[project]/app/components/step-previa.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 sm:grid-cols-6 gap-3",
                children: stats.map((s)=>{
                    const Icon = s.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-4 pb-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `w-5 h-5 mx-auto mb-1 ${s.color}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold",
                                    children: s.value
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this)
                    }, s.label, false, {
                        fileName: "[project]/app/components/step-previa.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                " Padrão de entrada"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-center",
                            children: [
                                {
                                    label: 'Demanda total',
                                    value: previa.entrada ? `${previa.entrada.demandaKva.toLocaleString('pt-BR', {
                                        maximumFractionDigits: 2
                                    })} kVA` : '-'
                                },
                                {
                                    label: 'Categoria',
                                    value: previa.entrada?.categoria ?? '-'
                                },
                                {
                                    label: 'Disjuntor geral',
                                    value: previa.entrada?.disjuntorGeralA ? `${previa.entrada.disjuntorGeralA} A` : '-'
                                },
                                {
                                    label: 'Tensão da localidade',
                                    value: previa.entrada ? `${previa.entrada.uf ? `${previa.entrada.uf} · ` : ''}${previa.entrada.sistema} V` : '-'
                                }
                            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold",
                                            children: x.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-muted-foreground",
                                            children: x.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, x.label, true, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[11px] text-muted-foreground",
                            children: "Pré-dimensionamento (DIS-NOR-030) — verificar com a distribuidora."
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm border-dashed",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-4 h-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "Incluso no PDF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cable$3e$__["Cable"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                " ",
                                resumo.nCircuitos,
                                " circuitos dimensionados (bitola, disjuntor e eletroduto)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                " Lista com ",
                                resumo.nMateriais,
                                " itens de material"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                " Quadro de distribuição e disjuntor geral"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            (totais?.porComodo ?? []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-3",
                            children: "Detalhamento por cômodo"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: (totais?.porComodo ?? []).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-2 border-b border-border/50 last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium mr-1",
                                                    children: c?.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "h-6 px-2 text-xs",
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abrirPendencia"])({
                                                            step: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_COMODOS"],
                                                            roomId: c?.roomId
                                                        }, store),
                                                    children: "Cômodo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "h-6 px-2 text-xs",
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abrirPendencia"])({
                                                            step: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PONTOS"],
                                                            roomId: c?.roomId
                                                        }, store),
                                                    children: "Pontos"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 text-xs text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        c?.caixas,
                                                        " cx"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        c?.tomadas,
                                                        " tom"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        c?.luzes,
                                                        " luz"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (c?.distTrajeto ?? 0) > 0 ? `${c?.distInterna} m internos + ${c?.distTrajeto} m trajeto` : `${c?.distInterna} m`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c?.roomId, true, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            pendencias.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                "Pendências (",
                                pendencias.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5 max-h-60 overflow-y-auto",
                            children: pendencias.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 py-1",
                                    children: [
                                        p?.tipo === 'erro' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                            className: "w-3.5 h-3.5 text-destructive mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 190,
                                            columnNumber: 41
                                        }, this) : p?.tipo === 'aviso' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "w-3.5 h-3.5 text-yellow-500 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 191,
                                            columnNumber: 42
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 192,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs underline cursor-pointer hover:text-primary",
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abrirPendencia"])(p, store),
                                            children: p?.msg
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/step-previa.tsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm border-green-200 bg-green-50/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-5 h-5 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-green-800 font-medium",
                            children: "Tudo certo! Nenhuma pendência encontrada."
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-center text-muted-foreground",
                children: "Cálculo baseado na NBR 5410 (ABNT), método B1, condutor de cobre com isolação PVC. Valores de referência."
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            faltas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm border-destructive/40 bg-destructive/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-destructive mb-2",
                            children: "Complete os dados obrigatórios antes de gerar o PDF:"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-5 space-y-1 text-xs",
                            children: faltas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: f
                                }, i, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 217,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground mb-1",
                            children: "Encontre os materiais online 🛒"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$afiliados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AFILIADOS"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: [
                                            a.emoji,
                                            " ",
                                            a.categoria
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-previa.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                size: "sm",
                                                variant: "outline",
                                                className: "h-7 px-3 text-xs",
                                                style: {
                                                    background: '#fff3e8',
                                                    color: '#c2410c',
                                                    borderColor: '#fed7aa'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: a.shopee,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Shopee"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-previa.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                size: "sm",
                                                variant: "outline",
                                                className: "h-7 px-3 text-xs",
                                                style: {
                                                    background: '#fffbe6',
                                                    color: '#78600a',
                                                    borderColor: '#fde68a'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: a.ml,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Mercado Livre"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/step-previa.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/step-previa.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/step-previa.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, a.categoria, true, {
                                fileName: "[project]/app/components/step-previa.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border/60 pt-3 mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "sm",
                                variant: "outline",
                                className: "w-full text-xs",
                                style: {
                                    background: '#e8f4f8',
                                    color: '#0c4a6e',
                                    borderColor: '#bae6fd'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$afiliados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_NOSSOS_APPS"],
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Nossos Apps para Eletricista 📱"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/step-previa.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 pb-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: "🔍 Encontrar eletricista na sua região"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Digite seu CEP e encontre eletricistas próximos no Google Maps"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    inputMode: "numeric",
                                    placeholder: "00000-000",
                                    maxLength: 9,
                                    value: cep,
                                    onChange: (ev)=>{
                                        const d = ev.target.value.replace(/\D/g, '').slice(0, 8);
                                        setCep(d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d);
                                    },
                                    className: "w-full sm:w-40 rounded-lg border border-input bg-card px-3 py-2 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "h-9 text-xs",
                                    disabled: cep.replace(/\D/g, '').length !== 8,
                                    onClick: ()=>{
                                        const cepLimpo = cep.replace(/\D/g, '');
                                        window.open(`https://www.google.com/maps/search/eletricista+${cepLimpo}`, '_blank', 'noopener');
                                    },
                                    children: "Buscar no Google Maps 📍"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            local && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["podeEditar"])(local) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-md border-green-300 bg-gradient-to-r from-green-50 to-green-100/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6 pb-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "w-8 h-8 text-green-700 mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold",
                            children: "Atualize o PDF do seu orçamento"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1 mb-4",
                            children: [
                                "Este orçamento já foi pago. ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edicoesRestantes"])(local) === 1 ? 'Resta 1 edição gratuita' : `Restam ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edicoesRestantes"])(local)} edições gratuitas`,
                                " até ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatarData"])(local.expiraEm),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            className: "px-8 bg-green-600 hover:bg-green-700 text-white",
                            onClick: ()=>setShowCheckout(true),
                            disabled: faltas.length > 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this),
                                " Gerar PDF atualizado"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-md border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6 pb-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "w-8 h-8 text-primary mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold",
                            children: "Gere o PDF completo do seu orçamento"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-1 mb-4",
                            children: "Com lista de materiais detalhada, circuitos e observações técnicas"
                        }, void 0, false, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            className: "px-8",
                            onClick: ()=>setShowCheckout(true),
                            disabled: faltas.length > 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/step-previa.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                " ",
                                local?.entrega ? 'Ver meu PDF' : 'Gerar meu PDF'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this),
                        erros.length > 0 && faltas.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-destructive mt-3",
                            children: [
                                "⚠ Há ",
                                erros.length,
                                " pendência(s) importante(s) — revise antes de pagar para o PDF não ficar incompleto"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/step-previa.tsx",
                            lineNumber: 297,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/step-previa.tsx",
                    lineNumber: 289,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this),
            showCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$checkout$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                valor: previa.valor,
                onClose: ()=>setShowCheckout(false)
            }, void 0, false, {
                fileName: "[project]/app/components/step-previa.tsx",
                lineNumber: 303,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/step-previa.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(StepPrevia, "N/3gzpgatl+b5YV3Srt8pIyIAnE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = StepPrevia;
var _c;
__turbopack_context__.k.register(_c, "StepPrevia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-sm",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            "glass-dark": "bg-white/10 backdrop-blur-md border border-white/20 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.1)] text-foreground shadow-sm hover:bg-white/25 hover:border-white/40 hover:shadow-lg focus-visible:ring-white/50 focus-visible:ring-ring/0",
            "glass-light": "bg-black/[0.06] backdrop-blur-md border border-black/10 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.5)] text-gray-900 shadow-sm hover:bg-black/[0.12] hover:border-black/20 hover:shadow-lg focus-visible:ring-black/30 focus-visible:ring-ring/0",
            link: "text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-0 focus-visible:ring-offset-0"
        },
        size: {
            default: "h-10 px-4 py-2",
            xs: "h-7 rounded-md px-2 text-xs",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-lg px-6 text-base",
            icon: "h-10 w-10",
            "icon-sm": "h-8 w-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        disabled: disabled || loading,
        "aria-busy": loading || undefined,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-4 w-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/components/ui/button.tsx",
                lineNumber: 64,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slottable"], {
                children: loading && asChild ? null : children
            }, void 0, false, {
                fileName: "[project]/components/ui/button.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 57,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle,
    "cardVariants",
    ()=>cardVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const cardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("rounded-lg border bg-card text-card-foreground shadow-sm", {
    variants: {
        variant: {
            default: "",
            interactive: "transition-all duration-normal hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20",
            "glass-dark": "bg-white/10 backdrop-blur-xl border border-white/20 shadow-md [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.15)]",
            "glass-dark-interactive": "bg-white/10 backdrop-blur-xl border border-white/20 shadow-md [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-normal hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:-translate-y-0.5",
            "glass-light": "bg-black/[0.04] backdrop-blur-xl border border-black/[0.08] shadow-md [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.5)] text-gray-900",
            "glass-light-interactive": "bg-black/[0.04] backdrop-blur-xl border border-black/[0.08] shadow-md [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.5)] text-gray-900 transition-all duration-normal hover:bg-black/[0.08] hover:border-black/[0.15] hover:shadow-lg hover:-translate-y-0.5",
            ghost: "border-transparent shadow-none bg-transparent"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(cardVariants({
            variant,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center text-current'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/collapsible.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
const Collapsible = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const CollapsibleTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"];
const CollapsibleContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "inputVariants",
    ()=>inputVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const inputVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("flex w-full rounded-lg border bg-background text-sm transition-all duration-fast file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-input hover:border-ring/50 focus-visible:border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            error: "border-destructive hover:border-destructive focus-visible:border-destructive focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            success: "border-emerald-500 hover:border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            ghost: "border-transparent bg-muted/50 hover:bg-muted focus-visible:bg-background focus-visible:border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        },
        size: {
            default: "h-10 px-3 py-2",
            sm: "h-8 px-2.5 py-1 text-xs rounded-md",
            lg: "h-12 px-4 py-3 text-base rounded-lg"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 36,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/afiliados.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Fonte única dos links de afiliados (prévia e PDF). */ __turbopack_context__.s([
    "AFILIADOS",
    ()=>AFILIADOS,
    "LINK_NOSSOS_APPS",
    ()=>LINK_NOSSOS_APPS
]);
const AFILIADOS = [
    {
        categoria: 'Materiais Elétricos',
        emoji: '⚡',
        shopee: 'https://collshp.com/jose_o_souza271/category/4439164?share_channel_code=1&view=storefront',
        ml: 'https://meli.la/2AepJUo'
    },
    {
        categoria: 'Ferramentas para Eletricista',
        emoji: '🔧',
        shopee: 'https://collshp.com/jose_o_souza271/category/3503601?share_channel_code=1&view=storefront',
        ml: 'https://meli.la/2ofRVk2'
    },
    {
        categoria: 'Casa Inteligente e Segurança',
        emoji: '🏠',
        shopee: 'https://collshp.com/jose_o_souza271/category/3649413?share_channel_code=1&view=storefront',
        ml: 'https://meli.la/2QVebrw'
    }
];
const LINK_NOSSOS_APPS = 'https://eletricistapro.com.br/';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/aterramento-calc.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/circuitos-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/entrada-calc.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/limpeza.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/luz.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Sugestão de quantidade de luminárias por área (usada na tela de pontos). */ __turbopack_context__.s([
    "luzCount",
    ()=>luzCount
]);
function luzCount(c, l) {
    const area = c * l;
    if (area <= 6) return 1;
    if (area <= 20) return 2;
    return 3;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/motor/demanda.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/navegacao.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pdf-cliente.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Ajudas do navegador para o PDF liberado pelo servidor. */ /** Abre a janela de impressão (o cliente escolhe «Salvar como PDF»). */ __turbopack_context__.s([
    "baixarHtml",
    ()=>baixarHtml,
    "imprimirHtml",
    ()=>imprimirHtml
]);
function imprimirHtml(html) {
    const f = document.createElement('iframe');
    f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    f.srcdoc = html;
    f.onload = ()=>{
        // Alguns navegadores sugerem o nome do arquivo pelo título da página principal, não do iframe:
        // usa o <title> do relatório durante a impressão e restaura depois.
        const tituloOriginal = document.title;
        const tituloRelatorio = f.contentDocument?.title;
        if (tituloRelatorio) document.title = tituloRelatorio;
        f.contentWindow?.focus();
        f.contentWindow?.print();
        setTimeout(()=>{
            document.title = tituloOriginal;
        }, 1_000);
        setTimeout(()=>f.remove(), 60_000);
    };
    document.body.appendChild(f);
}
function baixarHtml(html) {
    const titulo = /<title>([^<]*)<\/title>/.exec(html)?.[1]?.trim() || 'Orcamento';
    const nomeArquivo = `${titulo.replace(/[^A-Za-z0-9-]+/g, '-')}.html`;
    const url = URL.createObjectURL(new Blob([
        html
    ], {
        type: 'text/html;charset=utf-8'
    }));
    const a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 10_000);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/ponto-equip.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/util.ts [app-client] (ecmascript)");
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
    const direta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["num"])(e?.dist);
    if (direta > 0) return {
        metros: direta,
        origem: 'direta'
    };
    const room = (rooms ?? []).find((r)=>r?.id === e?.room);
    if (room) return {
        metros: Math.round(((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeLen"])(room) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["num"])(e?.dint)) * 10) / 10,
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/resumo-comodo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Resumo gratuito por cômodo (passo 3) — calculado no navegador, sem bitola/disjuntor/metragem. */ __turbopack_context__.s([
    "caixaPorModulos",
    ()=>caixaPorModulos,
    "modulosDe",
    ()=>modulosDe,
    "modulosSw",
    ()=>modulosSw,
    "resumoComodo",
    ()=>resumoComodo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)");
;
const modulosDe = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tomadasFisicas"])(t);
const caixaPorModulos = (n)=>n <= 3 ? '4x2' : '4x4';
const modulosSw = (tom)=>1 + modulosDe(tom);
function resumoComodo(room) {
    let nTomadas = 0, nModulos = 0, nCaixas4x2 = 0, nCaixas4x4 = 0;
    let nIS = 0, nIP = 0, nII = 0;
    const pendencias = [];
    for (const p of room?.pontos ?? []){
        for (const m of p?.mods ?? []){
            const n = modulosDe(m?.t);
            nModulos += n;
            if (String(m?.t ?? '').startsWith('T')) nTomadas += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontosTomada"])(m?.t);
        }
        if (p?.cx === '4x4') nCaixas4x4++;
        else nCaixas4x2++;
    }
    const luzComCmd = new Set();
    (room?.comandos ?? []).forEach((c, i)=>{
        if (c?.t === 'IP') nIP++;
        else if (c?.t === 'II') nII++;
        else nIS++;
        for (const lid of c?.luzes ?? [])luzComCmd.add(lid);
        if ((c?.luzes?.length ?? 0) === 0) pendencias.push(`Interruptor ${i + 1} sem luz vinculada`);
        for (const sw of c?.sws ?? []){
            // tomada junto ao interruptor também é tomada física
            if (sw?.tom && String(sw.tom).startsWith('T')) nTomadas += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontosTomada"])(sw.tom);
            if (sw?.cx === '4x4') nCaixas4x4++;
            else nCaixas4x2++;
        }
    });
    (room?.luzes ?? []).forEach((l, i)=>{
        if (!luzComCmd.has(l?.id)) pendencias.push(`Luz ${i + 1} sem interruptor`);
    });
    return {
        nTomadas,
        nModulos,
        nLuzes: room?.luzes?.length ?? 0,
        nInterruptores: nIS + nIP + nII,
        nIS,
        nIP,
        nII,
        nCaixas4x2,
        nCaixas4x4,
        pendencias
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/storage-local.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EDICOES_MAX",
    ()=>EDICOES_MAX,
    "PRAZO_MS",
    ()=>PRAZO_MS,
    "alterarEstado",
    ()=>alterarEstado,
    "carregarEstado",
    ()=>carregarEstado,
    "edicoesRestantes",
    ()=>edicoesRestantes,
    "estadoExpirado",
    ()=>estadoExpirado,
    "formatarData",
    ()=>formatarData,
    "limparEstado",
    ()=>limparEstado,
    "novoEstado",
    ()=>novoEstado,
    "podeEditar",
    ()=>podeEditar,
    "salvarEstado",
    ()=>salvarEstado
]);
'use client';
const CHAVE = 'orca_v2';
/** Chaves de versões anteriores: apagadas na primeira leitura. */ const CHAVES_ANTIGAS = [
    'orca_v1',
    'orca_eletrica_state',
    'orca_meus'
];
const CHAVE_ANTIGA_SESSAO = 'orca_pedido';
const PRAZO_MS = 15 * 24 * 60 * 60 * 1000;
const EDICOES_MAX = 3;
const noNavegador = ()=>("TURBOPACK compile-time value", "object") !== 'undefined';
function novoEstado(dados, agora = Date.now()) {
    return {
        versao: 2,
        criadoEm: agora,
        expiraEm: agora + PRAZO_MS,
        dados
    };
}
function estadoExpirado(e, agora = Date.now()) {
    return agora > e.expiraEm;
}
function edicoesRestantes(e) {
    return e.entrega ? Math.max(0, EDICOES_MAX - e.entrega.edicoes) : 0;
}
function podeEditar(e) {
    return !!e?.entrega && edicoesRestantes(e) > 0 && !estadoExpirado(e);
}
function valido(e) {
    return !!e && e.versao === 2 && Number.isFinite(e.criadoEm) && Number.isFinite(e.expiraEm) && !!e.dados && typeof e.dados === 'object' && Array.isArray(e.dados.rooms) && Array.isArray(e.dados.equips);
}
/** Apaga as chaves das versões anteriores; devolve os dados do wizard antigo, se houver. */ function migrar() {
    let antigo = null;
    try {
        const bruto = JSON.parse(localStorage.getItem('orca_eletrica_state') ?? 'null');
        if (bruto && Array.isArray(bruto.rooms) && Array.isArray(bruto.equips)) {
            const { edicao: _descartado, ...dados } = bruto;
            antigo = dados;
        }
    } catch  {}
    try {
        CHAVES_ANTIGAS.forEach((k)=>localStorage.removeItem(k));
        sessionStorage.removeItem(CHAVE_ANTIGA_SESSAO);
    } catch  {}
    return antigo;
}
function carregarEstado() {
    if (!noNavegador()) //TURBOPACK unreachable
    ;
    try {
        const bruto = localStorage.getItem(CHAVE);
        if (!bruto) {
            const antigo = migrar();
            if (!antigo) return null;
            const e = novoEstado(antigo);
            salvarEstado(e);
            return e;
        }
        const e = JSON.parse(bruto);
        if (!valido(e) || estadoExpirado(e)) {
            localStorage.removeItem(CHAVE);
            return null;
        }
        return e;
    } catch  {
        return null;
    }
}
function salvarEstado(e) {
    if (!noNavegador()) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(CHAVE, JSON.stringify(e));
    } catch  {}
}
function limparEstado() {
    if (!noNavegador()) //TURBOPACK unreachable
    ;
    try {
        localStorage.removeItem(CHAVE);
    } catch  {}
}
function alterarEstado(fn, dados) {
    const e = fn(carregarEstado() ?? novoEstado(dados));
    salvarEstado(e);
    return e;
}
const formatarData = (ms)=>new Date(ms).toLocaleDateString('pt-BR');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store-cliente.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aterramento-calc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/entrada-calc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navegacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage-local.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tomadas$2d$auto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tomadas-auto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$limpeza$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/limpeza.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/circuitos-config.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function defaultState() {
    return {
        id: '',
        imovel: '',
        obra: '',
        cobertura: '',
        rede: '',
        rooms: [],
        equips: [],
        entrada: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entradaPadrao"])(),
        aterramento: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aterramentoPadrao"])(),
        circuitos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configPadrao"])(),
        step: 0,
        activeRoomId: '',
        activeEquipId: '',
        veioDaPrevia: false
    };
}
/** Grava os dados do wizard no estado local, preservando pagamento e entrega. */ function saveState(dados) {
    const atual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carregarEstado"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salvarEstado"])(atual ? {
        ...atual,
        dados
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["novoEstado"])(dados));
}
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>{
    function update(fn) {
        set((prev)=>{
            const patch = fn(prev);
            const next = {
                ...prev,
                ...patch
            };
            saveState(next);
            return patch;
        });
    }
    function updateRoomInner(rooms, id, fn) {
        return (rooms ?? []).map((r)=>r?.id === id ? fn({
                ...r ?? {}
            }) : r);
    }
    return {
        ...defaultState(),
        setField: (key, value)=>update(()=>({
                    [key]: value
                })),
        setStep: (step)=>update(()=>({
                    step
                })),
        setActiveRoomId: (activeRoomId)=>update(()=>({
                    activeRoomId
                })),
        setActiveEquipId: (activeEquipId)=>update(()=>({
                    activeEquipId
                })),
        setVeioDaPrevia: (veioDaPrevia)=>update(()=>({
                    veioDaPrevia
                })),
        addRoom: (room)=>update((s)=>({
                    rooms: [
                        ...s?.rooms ?? [],
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tomadas$2d$auto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sincronizarTomadas"])(room)
                    ]
                })),
        // Mudou medida ou nome (tipo do cômodo)? Completa/enxuga as tomadas automáticas pela NBR 5410.
        updateRoom: (id, patch)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], id, (r)=>{
                        const n = {
                            ...r,
                            ...patch
                        };
                        return 'c' in patch || 'l' in patch || 'nome' in patch || 'base' in patch ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tomadas$2d$auto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sincronizarTomadas"])(n) : n;
                    })
                })),
        // Remove o cômodo (com seus pontos, luzes, comandos e caixas), os equipamentos dele
        // e qualquer rota de outro cômodo que passava por ele.
        removeRoom: (id)=>update((s)=>{
                const rooms = (s?.rooms ?? []).filter((r)=>r?.id !== id).map((r)=>r?.via === id ? {
                        ...r,
                        via: ''
                    } : r);
                return {
                    rooms,
                    circuitos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["podarConfig"])(s?.circuitos, rooms),
                    equips: (s?.equips ?? []).filter((e)=>e?.room !== id),
                    activeRoomId: s?.activeRoomId === id ? '' : s?.activeRoomId
                };
            }),
        addEquip: (equip)=>update((s)=>({
                    equips: [
                        ...s?.equips ?? [],
                        equip
                    ]
                })),
        updateEquip: (id, patch)=>update((s)=>({
                    equips: (s?.equips ?? []).map((e)=>e?.id === id ? {
                            ...e,
                            ...patch
                        } : e)
                })),
        removeEquip: (id)=>update((s)=>({
                    equips: (s?.equips ?? []).filter((e)=>e?.id !== id)
                })),
        updateEntrada: (patch)=>update((s)=>({
                    entrada: {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entradaPadrao"])(),
                        ...s?.entrada ?? {},
                        ...patch
                    }
                })),
        setCircuitos: (circuitos)=>update((s)=>({
                    circuitos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["podarConfig"])(circuitos, s?.rooms ?? [])
                })),
        updateAterramento: (patch)=>update((s)=>({
                    aterramento: {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aterramentoPadrao"])(),
                        ...s?.aterramento ?? {},
                        ...patch
                    }
                })),
        addPonto: (roomId, ponto)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            pontos: [
                                ...r?.pontos ?? [],
                                ponto
                            ]
                        }))
                })),
        updatePonto: (roomId, pontoId, patch)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            pontos: (r?.pontos ?? []).map((p)=>p?.id === pontoId ? {
                                    ...p,
                                    ...patch,
                                    ...'auto' in patch ? {} : {
                                        auto: false
                                    }
                                } : p)
                        }))
                })),
        removePonto: (roomId, pontoId)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            pontos: (r?.pontos ?? []).filter((p)=>p?.id !== pontoId)
                        }))
                })),
        addLuz: (roomId, luz)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            luzes: [
                                ...r?.luzes ?? [],
                                luz
                            ]
                        }))
                })),
        addLuzVinculada: (roomId, luz, novoComando)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>{
                        const cmds = r?.comandos ?? [];
                        const comandos = cmds.length === 0 ? [
                            {
                                ...novoComando(),
                                luzes: [
                                    luz.id
                                ]
                            }
                        ] : cmds.map((c, i)=>i === cmds.length - 1 ? {
                                ...c,
                                luzes: [
                                    ...c?.luzes ?? [],
                                    luz.id
                                ]
                            } : c);
                        return {
                            ...r,
                            luzes: [
                                ...r?.luzes ?? [],
                                luz
                            ],
                            comandos
                        };
                    })
                })),
        updateLuz: (roomId, luzId, patch)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            luzes: (r?.luzes ?? []).map((l)=>l?.id === luzId ? {
                                    ...l,
                                    ...patch
                                } : l)
                        }))
                })),
        removeLuz: (roomId, luzId)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            luzes: (r?.luzes ?? []).filter((l)=>l?.id !== luzId),
                            // O interruptor que ficou sem nenhuma luz some junto (senão caixa e placa continuariam no orçamento),
                            // exceto se tiver tomada na placa — esse fica, com o aviso na tela.
                            comandos: (r?.comandos ?? []).map((c)=>({
                                    ...c,
                                    luzes: (c?.luzes ?? []).filter((lid)=>lid !== luzId)
                                })).filter((c, i)=>{
                                const tinha = ((r?.comandos ?? [])[i]?.luzes ?? []).includes(luzId);
                                return !(tinha && c.luzes.length === 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$limpeza$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comandoTemTomada"])(c));
                            })
                        }))
                })),
        addComando: (roomId, cmd)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: [
                                ...r?.comandos ?? [],
                                cmd
                            ]
                        }))
                })),
        updateComando: (roomId, cmdId, patch)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).map((c)=>c?.id === cmdId ? {
                                    ...c,
                                    ...patch
                                } : c)
                        }))
                })),
        removeComando: (roomId, cmdId)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).filter((c)=>c?.id !== cmdId)
                        }))
                })),
        addModulo: (roomId, pontoId, mod)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            pontos: (r?.pontos ?? []).map((p)=>p?.id === pontoId ? {
                                    ...p,
                                    mods: [
                                        ...p?.mods ?? [],
                                        mod
                                    ],
                                    auto: false
                                } : p)
                        }))
                })),
        removeModulo: (roomId, pontoId, modId)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            // Ponto que ficou sem módulo some junto (a caixa dele não pode continuar no orçamento).
                            pontos: (r?.pontos ?? []).map((p)=>p?.id === pontoId ? {
                                    ...p,
                                    mods: (p?.mods ?? []).filter((m)=>m?.id !== modId),
                                    auto: false
                                } : p).filter((p)=>(p?.mods ?? []).length > 0)
                        }))
                })),
        addSw: (roomId, cmdId, sw)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).map((c)=>c?.id === cmdId ? {
                                    ...c,
                                    sws: [
                                        ...c?.sws ?? [],
                                        sw
                                    ]
                                } : c)
                        }))
                })),
        removeSw: (roomId, cmdId, swId)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).map((c)=>c?.id === cmdId ? {
                                    ...c,
                                    sws: (c?.sws ?? []).filter((sw)=>sw?.id !== swId)
                                } : c)
                        }))
                })),
        updateSw: (roomId, cmdId, swId, patch)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).map((c)=>c?.id === cmdId ? {
                                    ...c,
                                    sws: (c?.sws ?? []).map((sw)=>sw?.id === swId ? {
                                            ...sw,
                                            ...patch
                                        } : sw)
                                } : c)
                        }))
                })),
        vincularLuzComando: (roomId, luzId, cmdId)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).map((c)=>{
                                const sem = (c?.luzes ?? []).filter((lid)=>lid !== luzId);
                                return {
                                    ...c,
                                    luzes: c?.id === cmdId ? [
                                        ...sem,
                                        luzId
                                    ] : sem
                                };
                            })
                        }))
                })),
        setTipoComando: (roomId, cmdId, t, novoSw)=>update((s)=>({
                    rooms: updateRoomInner(s?.rooms ?? [], roomId, (r)=>({
                            ...r,
                            comandos: (r?.comandos ?? []).map((c)=>{
                                if (c?.id !== cmdId) return c;
                                let sws = [
                                    ...c?.sws ?? []
                                ];
                                const min = t === 'IS' ? 1 : t === 'IP' ? 2 : 3;
                                while(sws.length < min)sws.push(novoSw());
                                if (t !== 'II') sws = sws.slice(0, min);
                                return {
                                    ...c,
                                    t,
                                    sws
                                };
                            })
                        }))
                })),
        resetState: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limparEstado"])();
            set(defaultState());
        },
        hydrateFromStorage: ()=>{
            const dados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2d$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carregarEstado"])()?.dados;
            if (!dados) return;
            // Orçamentos antigos: sem `entrada` a Prévia era o passo 4; sem `aterramento` era o passo 5. Levamos à Prévia atual.
            const d = dados;
            const passo = dados.step ?? 0;
            const step = !d.entrada && passo >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_ENTRADA"] || !d.aterramento && passo >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_ATERRAMENTO"] ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PREVIA"] : passo;
            const limpo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$limpeza$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limparOrfaos"])({
                rooms: dados.rooms ?? [],
                equips: dados.equips ?? []
            });
            set({
                ...defaultState(),
                ...dados,
                ...limpo,
                step,
                entrada: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$entrada$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entradaPadrao"])(),
                    ...d.entrada ?? {}
                },
                aterramento: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aterramento$2d$calc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aterramentoPadrao"])(),
                    ...d.aterramento ?? {}
                },
                circuitos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["podarConfig"])({
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$circuitos$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configPadrao"])(),
                    ...d.circuitos ?? {}
                }, limpo.rooms)
            });
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROOM_TEMPLATES",
    ()=>ROOM_TEMPLATES,
    "dpadPorTipo",
    ()=>dpadPorTipo,
    "tomadaPadrao",
    ()=>tomadaPadrao,
    "uid",
    ()=>uid
]);
let _uid = 0;
function uid() {
    _uid += 1;
    return `_${Date.now().toString(36)}_${_uid}`;
}
function mkPonto(h, mods) {
    return {
        id: uid(),
        h,
        d: '',
        cx: '4x2',
        mods: mods.map((m)=>({
                id: uid(),
                t: m.t
            }))
    };
}
function mkLuz() {
    return {
        id: uid(),
        d: '',
        cx: 'Redonda'
    };
}
function mkComandoSimples(luzIds) {
    return {
        id: uid(),
        t: 'IS',
        luzes: luzIds,
        sws: [
            {
                id: uid(),
                h: 'media',
                d: '',
                tom: '',
                cx: '4x2'
            }
        ]
    };
}
function dpadPorTipo(tipo) {
    const t = (tipo ?? '').toLowerCase();
    if (/cozinha|copa|servi|lavanderia|banheiro|lavabo/.test(t)) return '1.0';
    if (/garagem|varanda|terra[cç]o|subsolo/.test(t)) return '2.0';
    return '1.5';
}
function tomadaPadrao(tipo) {
    const t = (tipo ?? '').toLowerCase();
    return /banheiro|lavabo|servi|lavanderia|garagem/.test(t) ? 'T10' : 'T10D';
}
function emptyRoom(base, nome) {
    return {
        id: uid(),
        base,
        nome,
        c: '',
        l: '',
        medE: false,
        via: '',
        dq: '',
        dd: '',
        dr: '',
        dqE: false,
        ddE: false,
        drE: false,
        dpad: dpadPorTipo(`${base} ${nome}`),
        dpadE: true,
        pontos: [],
        luzes: [],
        comandos: [],
        caixas: [],
        luzAuto: true,
        inst: 'Embutida na parede',
        pe: '2.8',
        obs: ''
    };
}
const ROOM_TEMPLATES = [
    {
        label: 'Quarto típico',
        desc: '3 tomadas duplas, 1 luz, 1 interruptor',
        icon: 'Bed',
        create: ()=>{
            const r = emptyRoom('Quarto', 'Quarto');
            r.pontos = Array.from({
                length: 3
            }, ()=>mkPonto('baixa', [
                    {
                        t: 'T10D'
                    }
                ]));
            const luz = mkLuz();
            r.luzes = [
                luz
            ];
            r.comandos = [
                mkComandoSimples([
                    luz.id
                ])
            ];
            return r;
        }
    },
    // Suítes: só o quarto; o banheiro da suíte é adicionado como cômodo separado.
    {
        label: 'Suíte 1 (básica)',
        desc: '2 tomadas duplas, 1 luz, 1 interruptor',
        icon: 'Bed',
        create: ()=>{
            const r = emptyRoom('Quarto', 'Suíte 1');
            r.pontos = [
                mkPonto('baixa', [
                    {
                        t: 'T10D'
                    }
                ]),
                mkPonto('baixa', [
                    {
                        t: 'T10D'
                    }
                ])
            ];
            const luz = mkLuz();
            r.luzes = [
                luz
            ];
            r.comandos = [
                mkComandoSimples([
                    luz.id
                ])
            ];
            return r;
        }
    },
    {
        label: 'Suíte 2 (padrão)',
        desc: '3 tomadas duplas, 1 luz, 1 interruptor',
        icon: 'Bed',
        create: ()=>{
            const r = emptyRoom('Quarto', 'Suíte 2');
            r.dpad = '1.5';
            r.pontos = Array.from({
                length: 3
            }, ()=>mkPonto('baixa', [
                    {
                        t: 'T10D'
                    }
                ]));
            const luz = mkLuz();
            r.luzes = [
                luz
            ];
            r.comandos = [
                mkComandoSimples([
                    luz.id
                ])
            ];
            return r;
        }
    },
    {
        label: 'Suíte 3 (luxo)',
        desc: '4 tomadas duplas, 2 luzes, 1 interruptor',
        icon: 'Bed',
        create: ()=>{
            const r = emptyRoom('Quarto', 'Suíte 3');
            r.dpad = '1.5';
            r.pontos = Array.from({
                length: 4
            }, ()=>mkPonto('baixa', [
                    {
                        t: 'T10D'
                    }
                ]));
            const l1 = mkLuz();
            const l2 = mkLuz();
            r.luzes = [
                l1,
                l2
            ];
            r.comandos = [
                mkComandoSimples([
                    l1.id,
                    l2.id
                ])
            ]; // as duas luzes no mesmo interruptor
            return r;
        }
    },
    {
        label: 'Sala típica',
        desc: '5 tomadas duplas, 2 luzes, 1 interruptor',
        icon: 'Sofa',
        create: ()=>{
            const r = emptyRoom('Sala', 'Sala');
            r.pontos = Array.from({
                length: 5
            }, ()=>mkPonto('baixa', [
                    {
                        t: 'T10D'
                    }
                ]));
            const l1 = mkLuz();
            const l2 = mkLuz();
            r.luzes = [
                l1,
                l2
            ];
            r.comandos = [
                mkComandoSimples([
                    l1.id,
                    l2.id
                ])
            ];
            return r;
        }
    },
    {
        label: 'Cozinha típica',
        desc: '3 tomadas 10A, 2 tomadas 20A, 1 luz',
        icon: 'CookingPot',
        create: ()=>{
            const r = emptyRoom('Cozinha', 'Cozinha');
            r.pontos = [
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T20'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T20'
                    }
                ])
            ];
            const luz = mkLuz();
            r.luzes = [
                luz
            ];
            r.comandos = [
                mkComandoSimples([
                    luz.id
                ])
            ];
            return r;
        }
    },
    {
        label: 'Banheiro típico',
        desc: '2 tomadas, 1 luz, 1 interruptor',
        icon: 'Bath',
        create: ()=>{
            const r = emptyRoom('Banheiro', 'Banheiro');
            r.pontos = [
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ])
            ];
            const luz = mkLuz();
            r.luzes = [
                luz
            ];
            r.comandos = [
                mkComandoSimples([
                    luz.id
                ])
            ];
            return r;
        }
    },
    {
        label: 'Área de serviço',
        desc: '2 tomadas 10A, 1 tomada 20A, 1 luz',
        icon: 'WashingMachine',
        create: ()=>{
            const r = emptyRoom('Área de serviço', 'Área de serviço');
            r.pontos = [
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T10'
                    }
                ]),
                mkPonto('media', [
                    {
                        t: 'T20'
                    }
                ])
            ];
            const luz = mkLuz();
            r.luzes = [
                luz
            ];
            r.comandos = [
                mkComandoSimples([
                    luz.id
                ])
            ];
            return r;
        }
    },
    {
        label: 'Personalizado',
        desc: 'Cômodo vazio para você configurar',
        icon: 'Plus',
        create: ()=>emptyRoom('Cômodo', 'Cômodo')
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tensao-por-uf.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
/* ===== UF → distribuidora → tensão, e pré-dimensionamento da entrada pela DIS-NOR-030 Rev.05 ===== */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motor/demanda.ts [app-client] (ecmascript)");
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
const tabela5 = (areaM2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cargaTomadasW"])(areaM2, 0);
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
    const it = c.iluminacaoTomadasKw ?? (tabela5(c.areaM2 ?? 0) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cargaIluminacaoW"])(0, c.nComodos ?? 0)) / 1000;
    const p = {
        a: it * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fatorTabela6"])(it),
        b: soma(c.resistivos) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fatorTabela7"])(qtd(c.resistivos)),
        c: soma(c.boilers) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fatorTabela8"])(qtd(c.boilers)),
        d: soma(c.maquinas) / 0.92 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fatorTabela9"])(qtd(c.maquinas)),
        e: soma(c.fogoes) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fatorTabela10"])(qtd(c.fogoes)),
        f: soma(c.arKva) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fatorTabela12"])(qtd(c.arKva)),
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
    const { categoria: c, aviso } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motor$2f$demanda$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoriaAtendimento"])(tensao, lig, cargaKw, demandaKva);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tomadas-auto.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ===== Tomadas automáticas — NBR 5410, 9.5.2.2.1 =====
 * O modelo do cômodo (quarto típico, sala típica...) é só o PONTO DE PARTIDA: vale o maior entre
 * o que o modelo/usuário já tem e o mínimo da norma para as medidas informadas (perímetro e tipo).
 * Tomadas criadas aqui levam `auto: true`; só elas são removidas se o cômodo diminuir.
 * Roda no navegador (a cada mudança de medidas/nome); o servidor recebe os pontos já completos.
 */ __turbopack_context__.s([
    "qtdTomadasAuto",
    ()=>qtdTomadasAuto,
    "sincronizarTomadas",
    ()=>sincronizarTomadas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/resumo-comodo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)");
;
;
;
;
/** Cozinha, serviço e banheiro usam tomadas na altura média (como nos modelos); os demais, baixa. */ const ALTURA_MEDIA = /cozinha|copa|servi|lavanderia|banheiro|lavabo/;
function pontosDoPonto(p) {
    let n = 0;
    for (const m of p?.mods ?? [])if (String(m?.t ?? '').startsWith('T')) n += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontosTomada"])(m.t);
    return n;
}
function sincronizarTomadas(room) {
    const nbr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tomadasNbr"])(room);
    if (!nbr) return room;
    const pontos = [
        ...room?.pontos ?? []
    ];
    let atual = nbr.atual;
    if (atual < nbr.minimo) {
        const tipo = `${room?.base ?? ''} ${room?.nome ?? ''}`;
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tomadaPadrao"])(tipo);
        const h = ALTURA_MEDIA.test(tipo.toLowerCase()) ? 'media' : 'baixa';
        for(; atual < nbr.minimo; atual++){
            pontos.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                h,
                d: '',
                cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caixaPorModulos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resumo$2d$comodo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modulosDe"])(t)),
                mods: [
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                        t
                    }
                ],
                auto: true
            });
        }
    } else if (atual > nbr.minimo) {
        for(let i = pontos.length - 1; i >= 0 && atual > nbr.minimo; i--){
            const p = pontos[i];
            if (!p?.auto) continue;
            const n = pontosDoPonto(p);
            if (atual - n < nbr.minimo) continue;
            pontos.splice(i, 1);
            atual -= n;
        }
    }
    return pontos.length === (room?.pontos?.length ?? 0) ? room : {
        ...room,
        pontos
    };
}
function qtdTomadasAuto(room) {
    return (room?.pontos ?? []).filter((p)=>p?.auto).length;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/util.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validacao.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
/* ===== Validação compartilhada: wizard (navegador) e rotas de API (servidor) ===== */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/tensao-por-uf.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nbr5410-regras.ts [app-client] (ecmascript)");
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
    const minimo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minTomadas"])(c * l, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perimetro"])(c, l), `${r?.base ?? ''} ${r?.nome ?? ''}`);
    // Pontos de tomada (simples/dupla/tripla = 1), mesma regra de countMods — inclui as montadas no interruptor.
    let atual = 0;
    for (const p of r?.pontos ?? [])for (const m of p?.mods ?? [])if (String(m?.t ?? '').startsWith('T')) atual += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontosTomada"])(m.t);
    for (const c of r?.comandos ?? [])for (const sw of c?.sws ?? [])if (String(sw?.tom ?? '').startsWith('T')) atual += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nbr5410$2d$regras$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pontosTomada"])(sw.tom);
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tensao$2d$por$2d$uf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UFS"].map((u)=>u.uf)
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/app/components/orca-app.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/orca-app.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_1pwi7v_meaobb._.js.map