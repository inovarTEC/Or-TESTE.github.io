/* ===== Criação de cômodo a partir de um modelo — única regra, usada nas telas Cômodos e Pontos ===== */
import type { Room } from './types';
import { ROOM_TEMPLATES } from './templates';

export type ModeloComodo = (typeof ROOM_TEMPLATES)[number];

/** Nome sem repetir os já existentes: "Quarto", "Quarto 2", "Quarto 3"... */
export function nomeUnico(nome: string, existentes: string[]): string {
  if (!existentes.includes(nome)) return nome;
  let i = 2;
  while (existentes.includes(`${nome} ${i}`)) i++;
  return `${nome} ${i}`;
}

const medidaValida = (v?: string) => { const n = parseFloat(String(v ?? '').replace(',', '.')); return Number.isFinite(n) && n > 0 && n <= 1000 ? String(n) : ''; };

/** Monta o cômodo do modelo com nome único. Medidas opcionais (só valores positivos são aceitos). */
export function criarComodo(
  modelo: ModeloComodo,
  existentes: Pick<Room, 'nome'>[],
  extra?: { nome?: string; c?: string; l?: string },
): Room {
  const room = modelo.create();
  const base = (extra?.nome ?? '').trim() || room.nome;
  room.nome = nomeUnico(base, existentes.map((r) => r?.nome));
  const c = medidaValida(extra?.c), l = medidaValida(extra?.l);
  if (c) room.c = c;
  if (l) room.l = l;
  return room;
}
