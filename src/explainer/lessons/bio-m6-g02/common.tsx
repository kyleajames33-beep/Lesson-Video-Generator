// M6 G02 "Evaluating biotechnology: HSC-style practice": shared pieces. The skills kit layout (as skills-s04): the
// question card on top (ZONE.card), the ruled answer box under it, the side column (x 1340) for plates and small coded
// diagrams, and s04's verdict strip as a mini strip at the top left (x 40, y 110), so the role tags can sit left of the
// answer box below it. Cards shrink to about 0.6 to 0.72 for each walkthrough; givens are underlined in the card
// text on their cues (no givens card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/m6g02b/measured/lesson.json';
import {AMBER, AMBER_INK, CARD, Chip, ZONE, answerGeom, cardGeom, lessonHelpers, mkPlate, prog, vis} from '../skills-shared';
import type {AnsSpec, ARow, CardSpec} from '../skills-shared';
import {RoleTag, VerdictStrip} from '../skills-s04/pieces';
import type {Role} from '../skills-s04/pieces';

export const {sc, dur, hold} = lessonHelpers(lesson, 'm6g02b');

// ---------- plates (alpha boxes measured 22 Oct, PIL alpha > 20) ----------
const B = 'assets/biology/';
export const PL = {
	maize: mkPlate(B + 'm6-maize-hybrid-rows-v1.png', [2000, 2000], [98, 80, 1908, 1849]),
	wild: mkPlate(B + 'm6-wild-mountain-sheep-v1.png', [2000, 2000], [223, 320, 1776, 1645]),
	white: mkPlate(B + 'm6-white-sheep-v1.png', [2000, 2000], [200, 351, 1800, 1649]),
	store: mkPlate(B + 'm6-insemination-straw-tank-v1.png', [2000, 2000], [331, 200, 1669, 1800]),
	pig: mkPlate(B + 'm6-pig-side-v1.png', [2000, 2000], [296, 599, 1692, 1393]),
	kidney: mkPlate(B + 'm8-kidney-nephron-v1.png', [2000, 2000], [160, 235, 1840, 1765]),
	vault: mkPlate(B + 'm6-seed-bank-vault-v1.png', [2000, 2000], [201, 282, 1800, 1717]),
};
export const ASSETS_G02: string[] = Object.values(PL).map(p => p.src);

// ---------- layout ----------
export const SX = ZONE.side.x;
export const STRIP = {x: 40, y: 110, w: 262};
export const TAG_X = 318;
/** The mini verdict strip; dims to an outline during a countdown hold. */
export const Strip: React.FC<{lit?: {row: number; from: number; to?: number}[]; allLit?: [number, number]; hold?: {startFrame: number; endFrame: number}; rows?: (number | undefined)[]}> = ({lit = [], allLit, hold: h, rows = [-100, -100, -100, -100]}) => {
	const f = useCurrentFrame();
	const dim = h ? vis(f, h.startFrame - 20, h.endFrame + 10, 14) : 0;
	return <VerdictStrip rows={rows} miniBox={STRIP} lit={lit} allLit={allLit} o={1 - 0.72 * dim} />;
};
/** Answer box under a card drawn at scale s. */
export const boxUnder = (spec: CardSpec, s: number, lines: number, lh = 40, size = 26): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h * s + 22, w: ZONE.box.w, lines, lh, size});
export const tagY = (g: ReturnType<typeof answerGeom>, row: number, k = 0) => g.base(g.rows[row].first) - 26 + k * 38;
export type TagK = Role | 'condition';
/** Role tags left of the answer box ("condition" is the amber-outline variant). */
export const Tags: React.FC<{g: ReturnType<typeof answerGeom>; tags: {row: number; role: TagK; at: number; k?: number}[]}> = ({g, tags}) => (
	<g>{tags.map((t, i) => (t.role === 'condition'
		? <Chip key={i} x={TAG_X} y={tagY(g, t.row, t.k ?? 0)} text="condition" at={t.at} size={20} color={AMBER} fill={CARD} hand={false} anchor="end" textColor={AMBER_INK} />
		: <RoleTag key={i} x={TAG_X} y={tagY(g, t.row, t.k ?? 0)} role={t.role} at={t.at} />))}</g>
);
/** Rows already written in an earlier scene: present, ticked, dimmed. */
export const done = (rows: ARow[]): ARow[] => rows.map(r => ({...r, at: -1000, tick: r.tick === undefined ? undefined : -1000}));
export const fadeIn = (f: number, at: number, d = 12) => prog(f, at, d);

// ---------- the three question cards ----------
export const q1Spec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', size: 24, note: 'data are illustrative',
	items: [
		{text: 'A farming district replaced conventional maize, sprayed with insecticide against caterpillar pests, with an insect-resistant maize. The insect-resistant maize produces a protein that kills caterpillars that feed on it. The table shows data for the district before the change and ten years after it.', at: t[0]},
		{table: {head: ['Measure', 'Before (sprayed maize)', 'Ten years after (resistant maize)'], rows: [
			['Insecticide sprays per season', '6', '1'],
			['Insect species recorded in maize fields', '17', '25'],
			['Maize varieties grown in the district', '15', '4'],
			['Farms planting refuge strips of non-resistant maize', 'not applicable', '3 in 10'],
			['Caterpillars surviving on resistant maize (lab tests)', 'not applicable', 'none until year 7, rising since year 8'],
		], colW: [610, 300, 470]}, at: t[1]},
		{text: 'Assess the effect of this change on biodiversity in the district.', marks: '6 marks', at: t[2], marksAt},
	],
});
export const Q1 = q1Spec();
export const q2Spec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', size: 26, slotW: 250, note: 'constructed example',
	items: [
		{text: 'A rare wild sheep species survives as one population of about 300 animals, all descended from 8 founders. A cell bank holds frozen skin cells taken from 10 wild sheep of this species that died 30 years ago. These 10 animals carried alleles that are no longer found in the living population.', at: t[0]},
		{text: 'Scientists plan to use somatic cell nuclear transfer, with eggs and surrogate mothers from domestic sheep. In past cloning of this kind, about 2 of every 100 embryos transferred to surrogates produced a live lamb.', at: t[1]},
		{text: 'Evaluate this plan as a way to protect the species. In your answer, refer to genetic diversity, animal welfare and one alternative.', marks: '7 marks', at: t[2], marksAt},
	],
});
export const Q2 = q2Spec();
export const q3Spec = (t: number[] = [-100, -100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', size: 24, slotW: 230,
	items: [
		{text: 'Many thousands of people with kidney failure wait years for a kidney from a human donor, and some die while waiting.', at: t[0]},
		{text: 'Scientists have gene-edited pigs so that their kidneys are more suitable for transplant into humans: three pig genes whose products trigger rapid rejection by the human immune system were inactivated, seven human genes that help control immune and clotting reactions were added, and copies of a virus built into the pig genome were inactivated. The pigs are raised in sealed, disease-controlled facilities.', at: t[1]},
		{text: "Since 2024, a small number of patients have received these kidneys with special permission. Clinical trials of other gene-edited pig kidneys have also begun. One patient's kidney worked for about nine months before it was removed; others are still being followed.", at: t[2]},
		{text: 'Assess the use of gene-edited pigs as a source of kidneys for transplant. Refer to benefits and ethical issues.', marks: '6 marks', at: t[3], marksAt},
	],
});
export const Q3 = q3Spec();
