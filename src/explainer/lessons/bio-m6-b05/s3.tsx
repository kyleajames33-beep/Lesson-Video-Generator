// M6 B05 scenes 11, 12, 14 and 15: the two questions joined in one two by two grid (one real example per cell), the
// memory lines with their limits, the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, DrawPath, HandText, INK, INK_SOFT} from '../../kit';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {NotesBoard} from '../bio-m5-g01/board';
import {CardBox, CurveArrow, FillBar, GTag, PlateAt, SlimStrand} from '../bio-m6-b01/parts';
import {Bar, lay} from '../bio-m6-b04/parts';
import {MiniChrom} from '../bio-m6-b03/parts';
import {S} from './common';
import {PLATES} from './assets';
import {BIO_INK, Band, CellTree, CodonText, Dot, PLUM, TEALC, prog, vis} from './parts';

/** Small icons used by the grid, the memory lines and the decision rule. */
const PatchTree: React.FC<{x: number; y: number; R?: number}> = ({x, y, R = 70}) => <CellTree x={x} y={y} R={R} G={4} cs={2.6} mut={{g: 2, j: 2, t: 3}} />;
const GermArrow: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<Dot x={x} y={y} r={16} plum mut={1} />
		<path d={`M${x + 20},${y} L${x + 70},${y}`} stroke={PLUM} strokeWidth={4} strokeLinecap="round" />
		<path d={`M${x + 58},${y - 10} L${x + 72},${y} L${x + 58},${y + 10}`} fill="none" stroke={PLUM} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
		<Dot x={x + 94} y={y} r={16} mut={1} />
	</g>
);
const BandIcon: React.FC<{x: number; y: number; kind: 'warm' | 'teal'; bar?: number}> = ({x, y, kind, bar}) => (
	<g>
		<Band x1={x + 40} x2={x + 120} kind={kind} y={y} gap={22} />
		<SlimStrand x={x} y={y} n={8} pitch={20} gap={22} rung={i => (i === 4 ? {color: AMBER, w: 5} : undefined)} />
		{bar !== undefined ? <FillBar x={x + 10} y={y - 46} w={140} h={20} p={bar} color="#7fa173" /> : null}
	</g>
);
const CHR = lay(['', '', '●', '', '', '', ''], 0, 26, 16);
const ChrIcon: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g transform={`translate(${x},0)`}>
		<Bar segs={CHR.segs.map((s, i) => (i === 3 ? {...s, ring: 1} : s))} cen={CHR.cen} y={y} gw={26} h={28} />
		<Bar segs={CHR.segs} cen={CHR.cen} y={y + 40} gw={26} h={28} />
	</g>
);

// ---------- 11. Both questions together ----------
const K11 = cues(S('both-together'), {put: 'Put the two questions', body: 'Where it is in the body', who: 'who it can affect', dna: 'Where it is in the DNA', what: 'what it does', uv: 'A UV change', skin: "a skin cell's gene", lact: 'lactase persistence', germ: 'is a germ-line change', reg: 'in a regulatory sequence'});
export const SceneBoth: React.FC = () => {
	const f = useCurrentFrame();
	const G = {x0: 300, c0: 560, cw: 620, y0: 210, hh: 130, rh: 320};
	const cx = (c: number) => G.c0 + c * G.cw;
	const ry = (r: number) => G.y0 + G.hh + r * G.rh;
	const subOut = K11.what + 70;
	const late = K11.reg + 40;
	const cell = (c: number, r: number, at: number, icon: React.ReactNode, text: string) => (
		<g opacity={prog(f, at, 14)}>
			<g>{icon}</g>
			<Sx x={cx(c) + G.cw / 2} y={ry(r) + 262} text={text} size={38} color={AMBER_INK} hand anchor="middle" />
		</g>
	);
	return (
		<>
			<Heading text="Both questions together" at={K11.put} size={60} />
			<Overlay>
				<CardBox x={G.x0} y={G.y0} w={G.c0 - G.x0 + 2 * G.cw} h={G.hh + 2 * G.rh} at={K11.put + 6} />
				<g opacity={prog(f, K11.who - 10, 12)}>
					<line x1={G.x0 + 10} y1={ry(0)} x2={cx(2) - 10} y2={ry(0)} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
					<line x1={G.x0 + 10} y1={ry(1)} x2={cx(2) - 10} y2={ry(1)} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
					<line x1={cx(0)} y1={G.y0 + 10} x2={cx(0)} y2={ry(2) - 10} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
					<line x1={cx(1)} y1={G.y0 + 10} x2={cx(1)} y2={ry(2) - 10} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
				</g>
				<Sx x={cx(0) + G.cw / 2} y={G.y0 + 70} text="somatic" size={48} color={INK} hand anchor="middle" at={K11.who} />
				<Sx x={cx(1) + G.cw / 2} y={G.y0 + 70} text="germ line" size={48} color={PLUM} hand anchor="middle" at={K11.who + 8} />
				<Sx x={cx(0) + G.cw / 2} y={G.y0 + 112} text="this organism" size={30} color={INK_SOFT} hand anchor="middle" at={K11.who + 14} out={subOut} />
				<Sx x={cx(1) + G.cw / 2} y={G.y0 + 112} text="and descendants" size={30} color={INK_SOFT} hand anchor="middle" at={K11.who + 20} out={subOut} />
				<Sx x={G.x0 + 28} y={ry(0) + 150} text="coding" size={46} color={INK} hand at={K11.what} />
				<Sx x={G.x0 + 28} y={ry(1) + 150} text="non-coding" size={46} color={TEALC} hand at={K11.what + 8} />
				<Sx x={G.x0 + 28} y={ry(0) + 192} text="changes a protein" size={26} color={INK_SOFT} hand at={K11.what + 14} out={subOut} />
				<Sx x={G.x0 + 28} y={ry(1) + 192} text="changes how much" size={26} color={INK_SOFT} hand at={K11.what + 20} out={subOut} />
				<Sx x={G.x0 + 28} y={ry(1) + 222} text="is made" size={26} color={INK_SOFT} hand at={K11.what + 20} out={subOut} />
				{cell(0, 0, K11.skin, <PlateAt p={PLATES.melanoma} cx={cx(0) + G.cw / 2} cy={ry(0) + 120} w={190} at={-100} />, 'skin cancer (UV)')}
				{cell(1, 1, K11.lact, <PlateAt p={PLATES.milk} cx={cx(1) + G.cw / 2} cy={ry(1) + 120} w={150} at={-100} />, 'lactase persistence')}
				{cell(0, 1, late, <BandIcon x={cx(0) + G.cw / 2 - 80} y={ry(1) + 120} kind="teal" bar={1} />, 'melanoma: a gene switched on')}
				{cell(1, 0, late + 14, <ChrIcon x={cx(1) + G.cw / 2 - 100} y={ry(0) + 100} />, 'inherited BRCA1')}
				{void K11.body}{void K11.dna}{void K11.uv}{void K11.germ}{void vis}
			</Overlay>
		</>
	);
};

// ---------- 12. Memory ----------
const K12 = cues(S('memory'), {two: 'Two things', som: 'Somatic stays with you', germ: 'germ line can go', animals: "That's true for animals", plants: 'plants can make flowers', nc: "non-coding doesn't mean", ask: 'Ask what the stretch does'});
/** A tiny shoot outline: one branch amber, ending in an amber flower. */
const Shoot: React.FC<{x: number; y: number; at: number; out: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<DrawPath d={`M${x},${y} L${x},${y - 120}`} at={at} dur={14} color="#5c7353" width={5} />
			<DrawPath d={`M${x},${y - 50} Q${x - 30},${y - 70} ${x - 50},${y - 100}`} at={at + 6} dur={12} color="#5c7353" width={4} />
			<DrawPath d={`M${x},${y - 70} Q${x + 34},${y - 90} ${x + 56},${y - 130}`} at={at + 10} dur={12} color={AMBER} width={5} />
			{[0, 72, 144, 216, 288].map(a => <circle key={a} cx={x + 56 + 13 * Math.cos((a * Math.PI) / 180)} cy={y - 138 + 13 * Math.sin((a * Math.PI) / 180)} r={9} fill="#f9d98f" stroke={AMBER} strokeWidth={2.5} opacity={prog(f, at + 22, 10)} />)}
		</g>
	);
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two things to hold on to" at={K12.two} size={60} />
			<div style={{position: 'absolute', left: 340, top: 250}}><HandText text="Somatic stays with you." at={K12.som} size={64} cps={26} color={INK} /></div>
			<div style={{position: 'absolute', left: 340, top: 336}}><HandText text="Germ line can go to your kids." at={K12.germ} size={64} cps={26} color={PLUM} /></div>
			<div style={{position: 'absolute', left: 340, top: 640}}><HandText text="Non-coding doesn't mean unimportant." at={K12.nc} size={64} cps={26} color={TEALC} /></div>
			<Overlay>
				<g opacity={prog(f, K12.som, 12)}><PatchTree x={200} y={262} /></g>
				<g opacity={prog(f, K12.germ, 12)}><GermArrow x={150} y={392} /></g>
				<GTag x={340} y={470} text="animals; in plants, a mutated shoot can flower" at={K12.plants - 6} out={K12.nc} size={28} />
				<Shoot x={1220} y={560} at={K12.plants} out={K12.nc} />
				<g opacity={prog(f, K12.nc, 12)}><BandIcon x={130} y={690} kind="teal" /></g>
				<Sx x={340} y={810} text="what does it do?" size={48} color={AMBER_INK} hand at={K12.ask} />
				{void K12.animals}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const K14 = cues(S('decision-rule'), {so: 'So when a question', body: 'Where is it in the body', som: 'Somatic affects only', dna: 'Where is it in the DNA', coding: 'In coding DNA', nc: 'In non-coding DNA', next: 'Next, mutation practice'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [110, 990], PY = 230, PW = 820, PH = 500;
	const cards: {at: number; head: string; lines: {t: string; at: number; color: string}[]}[] = [
		{at: K14.body, head: '1. where in the body?', lines: [{t: 'somatic: this organism', at: K14.som, color: INK}, {t: 'germ line: can be inherited', at: K14.som + 40, color: PLUM}]},
		{at: K14.dna, head: '2. where in the DNA?', lines: [{t: 'coding: check the codons', at: K14.coding, color: INK}, {t: 'non-coding: does it', at: K14.nc, color: TEALC}, {t: 'control the gene?', at: K14.nc, color: TEALC}]},
	];
	return (
		<>
			<Heading text="Two questions for any mutation" at={K14.so} size={56} />
			<Overlay>
				{cards.map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 14)}>
						<CardBox x={PX[i]} y={PY} w={PW} h={PH} at={-100} stroke={AMBER} sw={3.5} />
						<Sx x={PX[i] + 36} y={PY + 74} text={c.head} size={50} color={INK} hand />
						{c.lines.map((l, k) => <Sx key={k} x={PX[i] + 36} y={PY + 160 + k * 58} text={l.t} size={42} color={l.color} hand at={l.at} />)}
						{i === 0 ? <CurveArrow a={[PX[0] + PW + 8, PY + PH / 2]} b={[PX[1] - 8, PY + PH / 2]} at={K14.dna - 4} bow={0} color={AMBER_INK} width={6} /> : null}
					</g>
				))}
				<g opacity={prog(f, K14.som + 10, 14)}><PatchTree x={PX[0] + 200} y={PY + 330} R={80} /><GermArrow x={PX[0] + 440} y={PY + 380} /></g>
				<g opacity={prog(f, K14.coding + 10, 14)}><BandIcon x={PX[1] + 70} y={PY + 380} kind="warm" /><BandIcon x={PX[1] + 420} y={PY + 380} kind="teal" /></g>
				<g opacity={prog(f, K14.next, 14)}>
					<CardBox x={980} y={800} w={840} h={150} at={-100} stroke={AMBER} sw={3.5} />
					<CodonText x={1010} y={890} codons={['AUG', 'GCU']} size={30} gap={14} />
					<MiniChrom x={1185} y={878} w={110} h={30} />
					<Sx x={1325} y={890} text="Next: mutation practice" size={40} color={INK} hand />
				</g>
				{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'Somatic mutation: in a body cell. Copied by mitosis into that cell\'s descendants, so it can affect part of one organism (for example, a skin cancer). Not inherited (in animals).',
	'Germ-line mutation: in a cell that makes gametes. An offspring that inherits it has it in every cell, including its germ cells, so it can be passed on and enter the gene pool.',
	'Coding DNA (about 1 to 2% of human DNA) is translated into protein; a mutation there changes a codon (silent, missense, nonsense, frameshift).',
	'Non-coding DNA includes promoters and regulatory sequences, which control when, where and how much a gene is expressed (lactase persistence), and introns, cut out of mRNA. Some has no known job.',
	'Significance depends on what the changed stretch does, and what the change does to it, not on whether it is translated.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Somatic stays with you. Germ line can go to your kids (animals). Non-coding doesn't mean unimportant." tag="where in the body decides who it can affect; where in the DNA decides what it does" size={30} aidTop={690} />
);
