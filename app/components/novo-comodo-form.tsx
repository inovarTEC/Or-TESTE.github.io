'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useStore } from '@/lib/store-cliente';
import { ROOM_TEMPLATES } from '@/lib/templates';
import { criarComodo } from '@/lib/novo-comodo';
import { semNegativo } from '@/lib/validacao';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/** Adicionar um cômodo esquecido sem sair da tela de Pontos. A criação usa a mesma regra da tela Cômodos (lib/novo-comodo). */
export default function NovoComodoForm({ onClose, onCriado }: { onClose: () => void; onCriado: (id: string) => void }) {
  const store = useStore();
  const [modelo, setModelo] = useState(ROOM_TEMPLATES[0].label);
  const [nome, setNome] = useState('');
  const [c, setC] = useState('');
  const [l, setL] = useState('');

  const criar = () => {
    const tpl = ROOM_TEMPLATES.find((t) => t.label === modelo) ?? ROOM_TEMPLATES[0];
    const room = criarComodo(tpl, store?.rooms ?? [], { nome, c, l });
    store.addRoom(room); // com as medidas, as tomadas já são completadas pela NBR 5410
    toast.success(`${room.nome} adicionado`);
    onCriado(room.id);
  };

  return (
    <Card className="shadow-sm border-primary/30">
      <CardContent className="pt-4 pb-4 space-y-3">
        <p className="text-sm font-semibold">Novo cômodo</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 sm:col-span-1">
            <Label className="text-xs">Modelo</Label>
            <select aria-label="Modelo do cômodo" value={modelo} onChange={(ev) => setModelo(ev.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm">
              {ROOM_TEMPLATES.map((t) => <option key={t.label} value={t.label}>{t.label}</option>)}
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Label className="text-xs">Nome (opcional)</Label>
            <Input aria-label="Nome do cômodo" className="mt-1" value={nome} placeholder="Ex: Quarto do bebê" onChange={(ev) => setNome(ev.target.value)} />
          </div>
          <div>
            <Label className="text-xs">Comprimento (m)</Label>
            <Input aria-label="Comprimento do novo cômodo" type="number" step="0.1" min="0" className="mt-1" value={c} placeholder="0.0" onChange={(ev) => setC(semNegativo(ev.target.value))} />
          </div>
          <div>
            <Label className="text-xs">Largura (m)</Label>
            <Input aria-label="Largura do novo cômodo" type="number" step="0.1" min="0" className="mt-1" value={l} placeholder="0.0" onChange={(ev) => setL(semNegativo(ev.target.value))} />
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground">Com as medidas, o app completa as tomadas pela NBR 5410. A distância até o quadro você informa na etapa Cômodos.</p>
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="ghost" size="sm" onClick={onClose}>Cancelar</Button>
          <Button type="button" size="sm" onClick={criar}>Criar cômodo</Button>
        </div>
      </CardContent>
    </Card>
  );
}
