// Y11 Chem M1 V01 scenes 11 to 16: two HSC-style attempts (the whole card and its neutral pictures arrive at once and
// stay through the 10 s countdown), brief feedback (navy givens strip, answers framed in green, one slip struck in
// red), the handoff bench (the final frame that V02 opens on) and the key notes with the "Just one?" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import type {BoxConfig} from '../../sims/particle-box';
import {BEAKER, GLASS, SAND, SULFUR, THERMO, hold, sc} from './common';
import {
	AMB, Card, Chip, Fade, Framed, GREEN, Glyph, Heading, INK, MIX, ModelTag, Particles, PauseHold, PenArrow, PenRing, Plate, PURE, RED, Readout, Rich, SVG, Sx, ViewFrame,
	Write, countOf, plateMap, spec, useRun,
} from './parts';
import type {GKind, Seg} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
export const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={30} color={INK} anchor="end" hand at={-1000} />;
export const Lines: React.FC<{x: number; y: number; lines: Seg[][]; size: number; lh: number; at?: number}> = ({x, y, lines, size, lh, at = -1000}) => <>{lines.map((l, i) => <Rich key={i} x={x} y={y + i * lh} segs={l} size={size} weight={700} at={at} />)}</>;
/** Navy givens strip under the shrunken card. */
export const Givens: React.FC<{segs: Seg[]; y?: number}> = ({segs, y = 186}) => (
	<g>
		<rect x={96} y={y} width={1728} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
		<Rich x={124} y={y + 50} segs={segs.map(s => ({...s, c: s.c ?? PURE}))} size={36} weight={700} />
	</g>
);

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const gm = plateMap(GLASS, 0, 0, 230);
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={262} size={38} lh={56} lines={[
				[{t: 'Classify each of the following as an element, a compound, a'}],
				[{t: 'homogeneous mixture or a heterogeneous mixture. Justify each'}],
				[{t: 'classification by referring to the particles present.'}],
			]} />
			<Lines x={140} y={490} size={38} lh={72} lines={[
				[{t: '(a)  solid sulfur, made of S_8 molecules', w: 800}],
				[{t: '(b)  glucose, C_6H_12O_6', w: 800}],
				[{t: '(c)  sand stirred into water', w: 800}],
			]} />
			<Sx x={140} y={760} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SULFUR} x={1340} y={240} h={100} />
			<Plate p={SAND} x={1330} y={400} h={84} />
			<Plate p={GLASS} x={1400 - gm.w / 2 + 40} y={540} h={230} />
			<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1690} cy={600} />
			{void K11.turn}
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {el: 'Sulfur is an element', atom: 'kind of atom', comp: 'Glucose is a compound', mol: ['molecule', 2], het: 'Sand in water', region: 'region.', slip: 'classic slip', kinds: "It's the kinds", count: 'count.'});
export const SceneFeedback1: React.FC = () => {
	const rows: {y: number; item: Seg[]; ans: string; at: number; why: string; whyAt: number}[] = [
		{y: 350, item: [{t: '(a) S_8'}], ans: 'element', at: K12.el, why: 'eight atoms per molecule, all sulfur: one kind of atom', whyAt: K12.atom - 30},
		{y: 520, item: [{t: '(b) C_6H_12O_6'}], ans: 'compound', at: K12.comp, why: 'C, H and O bonded in a fixed ratio, 6 : 12 : 6', whyAt: K12.mol - 30},
		{y: 690, item: [{t: '(c) sand + water'}], ans: 'heterogeneous mixture', at: K12.het, why: 'two substances; the sand sits in its own region', whyAt: K12.region - 30},
	];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: '(a) S_8     |     (b) C_6H_12O_6     |     (c) sand stirred into water     |     classify and justify'}]} />
			{rows.map((r, i) => (
				<g key={i}>
					<Rich x={110} y={r.y} segs={r.item} size={44} weight={800} />
					<Framed x={470} y={r.y} segs={[{t: r.ans, c: GREEN}]} at={r.at} size={50} />
					<Rich x={470} y={r.y + 56} segs={[{t: r.why}]} size={36} weight={700} at={r.whyAt} />
				</g>
			))}
			<Plate p={SULFUR} x={1520} y={290} h={90} />
			<Glyph k="S8" x={1440} y={330} u={14} />
			<Glyph k="sugar" x={1530} y={500} u={17} />
			<Plate p={GLASS} x={1490} y={600} h={150} />
			<Plate p={SAND} x={1590} y={680} h={64} />
			<Chip x={110} y={790} segs={[{t: 'S_8 is a compound: 8 atoms bonded'}]} at={K12.slip} size={38} color={RED} strike={K12.kinds} />
			<Write x={900} y={836} text="count the kinds, not the atoms" at={K12.kinds + 10} size={44} color={RED} />
			{void K12.count}
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {last: 'Last one', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const gm = plateMap(GLASS, 0, 0, 260);
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={262} size={38} lh={58} lines={[
				[{t: 'A student prepares two solutions of sugar in water.'}],
				[{t: 'Solution 1 contains 5 g of sugar in every 100 g of solution.'}],
				[{t: 'Solution 2 contains 15 g of sugar in every 100 g of solution.'}],
				[{t: 'Both solutions are clear and appear the same throughout.'}],
				[{t: 'The student claims that sugar solution is a pure substance'}],
				[{t: 'because it is uniform.'}],
				[{t: "Evaluate the student's claim.", w: 800}],
			]} />
			<Sx x={140} y={720} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			{[1380, 1560].map((x, i) => (
				<g key={i}>
					<Plate p={GLASS} x={x - gm.w / 2} y={240} h={260} />
					<Sx x={x} y={550} text={`${i + 1}`} size={44} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1690} cy={700} />
			{void K13.last}
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {wrong: 'The claim is wrong', two: 'There are two kinds', mol: ['molecules', 2], comp: 'the composition changes', other: 'other.', cant: "A pure substance can't", so: "So it's a homogeneous", clear: 'Clear and uniform', pure: ['pure', 3]});
const SG: Record<string, GKind> = {sugar: 'sugar', H2O: 'H2O'};
const SG1: BoxConfig = {seed: 81, frames: 720, w: 150, h: 150, species: spec(6, SG), initial: [{species: 'sugar', count: 3}, {species: 'H2O', count: 10}], speed: 0.7};
const SG2: BoxConfig = {seed: 83, frames: 720, w: 150, h: 150, species: spec(6, SG), initial: [{species: 'sugar', count: 9}, {species: 'H2O', count: 5}], speed: 0.7};
export const SceneFeedback2: React.FC = () => {
	const r1 = useRun(SG1), r2 = useRun(SG2);
	const gm = plateMap(GLASS, 0, 0, 220);
	const GX = [200, 530];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: '5 g per 100 g     |     15 g per 100 g     |     both clear and uniform'}]} />
			{[r1, r2].map((r, i) => (
				<g key={i}>
					<Plate p={GLASS} x={GX[i] - gm.w / 2} y={680} h={220} />
					<Sx x={GX[i]} y={830} text={`${i + 1}`} size={40} color={INK} anchor="middle" weight={800} at={-1000} />
					<ViewFrame id={'v1sg' + i} cx={GX[i]} cy={390} r={110} src={[GX[i], 760]}>
						<Particles run={r} cx={GX[i]} cy={390} kinds={SG} u={6} />
					</ViewFrame>
					<Readout x={GX[i] - 155} y={512} w={310} text={`sugar particles ${countOf(r, 'sugar', 0)}`} size={34} color={MIX} frame={AMB} anchor="middle" />
				</g>
			))}
			<ModelTag x={365} y={598} anchor="middle" />
			<PenArrow a={[250, 640]} b={[480, 640]} at={K14.cant} color={AMB} bend={-0.25} />
			<Write x={365} y={676} text="composition changed" at={K14.cant + 6} size={36} color={MIX} anchor="middle" />
			<Rich x={720} y={340} segs={[{t: 'two kinds of particle: sugar, water'}]} size={42} weight={800} at={K14.mol - 20} />
			<Rich x={720} y={420} segs={[{t: '5 g per 100 g = 5%;  15 g per 100 g = 15%'}]} size={40} weight={700} at={K14.other - 30} />
			<Rich x={720} y={472} segs={[{t: 'composition varies', c: MIX}]} size={40} weight={800} at={K14.other} />
			<Framed x={720} y={600} segs={[{t: 'homogeneous mixture', c: GREEN}]} at={K14.so} size={52} />
			<Chip x={720} y={680} segs={[{t: "pure: it's clear and uniform"}]} at={K14.clear} size={40} color={RED} strike={K14.pure} />
			<Write x={730} y={850} text="uniform ≠ pure" at={K14.pure + 8} size={46} color={RED} />
			{void K14.wrong}{void K14.two}{void K14.comp}
		</SVG>
	);
};

// ---------- 15. handoff (final frame; V02 opens on it) ----------
const K15 = cues(sc('handoff'), {lab: 'In the lab', measure: 'evidence we can', pure: 'Pure water and salt', heat: 'heat them', next: 'Next time', sample: 'sample.'});
export const HB = {w: 440, y: 400, xs: [300, 1180]};
export const HandoffBench: React.FC<{readAt?: number; chipAt?: number}> = ({readAt = -1000, chipAt = -1000}) => {
	const bm = plateMap(BEAKER, 0, 0, 1);
	const bh = HB.w / BEAKER.box[2] * BEAKER.box[3];
	const k = bh / BEAKER.box[3];
	const th = 360;
	return (
		<>
			{HB.xs.map((x, i) => {
				const tx = x + (950 - BEAKER.box[0]) * k, bulb = HB.y + (1060 - BEAKER.box[1]) * k;
				const tw0 = plateMap(THERMO, 0, 0, th).w;
				return (
					<g key={i}>
						<Plate p={BEAKER} x={x} y={HB.y} h={bh} />
						<Plate p={THERMO} x={tx - tw0 / 2} y={bulb - th} h={th} />
						<Sx x={x + HB.w / 2} y={936} text={i ? 'salt water' : 'pure water'} size={46} color={INK} anchor="middle" hand at={-1000} />
						<Readout x={x + HB.w / 2 - 110} y={212} w={220} text="? °C" size={52} color={INK} frame={INK} at={readAt} anchor="middle" />
					</g>
				);
			})}
			<Chip x={960} y={96} segs={[{t: 'Next: what can melting and boiling tell us?'}]} at={chipAt} size={38} color={PURE} anchor="middle" />
			{void bm}
		</>
	);
};
export const SceneHandoff: React.FC = () => (
	<SVG>
		<HandoffBench readAt={K15.heat} chipAt={K15.next + 20} />
		<Write x={960} y={480} text="measure it" at={K15.measure} out={K15.next} size={44} color={PURE} anchor="middle" />
		<PenRing cx={HB.xs[0] + HB.w / 2} cy={251} rx={150} ry={56} at={K15.heat + 10} out={K15.next} color={PURE} seed={3} />
		{void K15.lab}{void K15.pure}{void K15.sample}
	</SVG>
);

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Pure substance: one substance only.', c: PURE}], [{t: 'Mixture: two or more, in any proportion.', c: MIX}]],
	[[{t: 'Element: one kind of atom (O_2, Fe, S_8).', c: PURE}]],
	[[{t: 'Compound: elements bonded in a fixed ratio', c: PURE}], [{t: '(CO_2 1 : 2, H_2O 2 : 1, NaCl 1 : 1).', c: PURE}]],
	[[{t: 'Homogeneous: same composition throughout.', c: MIX}], [{t: 'Heterogeneous: differs by region.', c: MIX}]],
	[[{t: 'Uniform does not mean pure. Alloys are'}], [{t: 'homogeneous mixtures, not compounds.'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 310;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 54 + 30;
		return (
			<Fade key={i} at={30 + i * 12}>
				<circle cx={112} cy={y0 - 12} r={8} fill={AMB} />
				{lines.map((l, k) => <Rich key={k} x={140} y={y0 + k * 54} segs={l} size={40} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={60} size={38} color={MIX} />
			{rows}
			<Fade at={96}>
				<rect x={1300} y={290} width={524} height={330} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1330} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1562} y={418} text="Just one?" size={64} color={INK} anchor="middle" hand at={-1000} />
				<Sx x={1340} y={490} text="Just one substance?" size={38} color={PURE} hand at={-1000} />
				<Sx x={1340} y={540} text="Just one element?" size={38} color={PURE} hand at={-1000} />
				<Sx x={1340} y={590} text="Just one region?" size={38} color={MIX} hand at={-1000} />
			</Fade>
		</SVG>
	);
};
