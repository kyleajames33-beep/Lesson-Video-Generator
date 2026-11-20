// Y11 Chem M1 V10 scenes 12 to 17: two HSC-style attempts (whole card with neutral pictures: the glowing tube and
// the hand spectroscope; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, level diagram,
// green framed answers, one red crossed slip), the handoff (nuclear, Bohr and Schrödinger models joined by their
// evidence, and V06's accounting bar as our investigation: the final frame) and the key notes with the stairs card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {SAND_F, SAND_INK, SALT_F} from '../chem-y11-m1-v06/parts';
import {H_LINES, SCOPE, hold, sc} from './common';
import {
	AccBar, BohrAtom, Bracket, Card, Chip, Cloud, Electron, Fade, Framed, GREEN_T, Heading, INK, MIX, MiniNucleus, NAVY_T, PURE, PauseHoldR, PenArrow, Photon, Plate, RED_T, Rich, SLATE_T,
	STEP_Y, SVG, Stairs, Strip, StripStrike, Sx, TickMark, VArrow, Write, kf, nmInk, prog, richW,
} from './parts';
import type {Seg} from './parts';
import {Tube} from './s1';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;

// ---------- 12. attempt 1 ----------
const K12 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Two energy levels in an atom are 1.6 × 10^{−19} J and', '4.1 × 10^{−19} J above the ground state. An electron moves', 'from the higher level to the lower level.']} />
		<Q y0={480} lines={['(a)  State whether a photon is absorbed or emitted.', '(b)  Calculate the energy of the photon.']} />
		<Sx x={140} y={640} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<Tube x={1120} y={640} w={660} />
		<PauseHoldR h={hold('attempt-1')} at={K12.pause} x={140} y={936} cx={760} cy={740} />
	</SVG>
);

// ---------- 13. feedback 1 ----------
const K13 = cues(sc('feedback-1'), {drops: 'electron drops', emitted: 'emitted.', gap: 'the gap:', four: ['four point one', 1], two: 'which is two', joules: 'nineteen joules.', adding: 'Adding the two', slip: 'the slip', difference: 'the difference', sum: 'the sum'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const yG = 860, yL = 700, yH = 450;
	const ey = kf(f, [[K13.drops, yH], [K13.drops + 20, yL]]);
	const r1: Seg[] = [{t: '(b)  E = 4.1 × 10^{−19} − 1.6 × 10^{−19}'}], r2: Seg[] = [{t: '= '}];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'levels 1.6 × 10^{−19} J and 4.1 × 10^{−19} J above the ground state     |     higher → lower'}]} />
			{[yG, yL, yH].map(y => <line key={y} x1={160} x2={480} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />)}
			<Rich x={500} y={yH + 13} segs={[{t: '4.1 × 10^{−19} J'}]} size={34} />
			<Rich x={500} y={yL + 13} segs={[{t: '1.6 × 10^{−19} J'}]} size={34} />
			<Sx x={500} y={yG + 13} text="ground state" size={34} color={INK} weight={800} at={-1000} />
			<Electron x={260} y={ey - 15} r={15} />
			<VArrow x={320} y0={yH + 6} y1={yL - 6} at={K13.drops} color={nmInk(600)} width={7} dur={20} />
			<Photon a={[340, 575]} b={[640, 560]} at={K13.drops + 30} dur={30} color={nmInk(600)} stay fadeAt={K13.gap} />
			<Bracket a={[140, yH + 4]} b={[140, yL - 4]} at={K13.gap} color={NAVY_T} depth={18} />
			<Sx x={160} y={410} text="photon energy = gap" size={34} color={NAVY_T} weight={800} at={K13.gap + 6} />
			<Framed x={880} y={400} segs={[{t: '(a)  emitted', c: GREEN_T}]} at={K13.emitted} size={52} />
			<Sx x={880} y={460} text="the electron drops, so the atom loses energy" size={30} color={INK} weight={700} at={K13.emitted + 10} />
			<Rich x={880} y={560} segs={r1} size={52} at={K13.four} />
			<Rich x={880} y={650} segs={r2} size={52} at={K13.two - 6} />
			<Framed x={880 + richW(r2, 52)} y={650} segs={[{t: '2.5 × 10^{−19} J', c: GREEN_T}]} at={K13.two} size={52} />
			<Chip x={880} y={710} segs={[{t: '4.1 + 1.6 = 5.7 × 10^{−19} J'}]} at={K13.adding} size={40} color={RED_T} strike={K13.slip} />
			<Write x={880} y={860} text="the gap, not the sum" at={K13.sum - 10} size={42} color={RED_T} />
			{void K13.joules}{void K13.difference}
		</SVG>
	);
};

// ---------- 14. attempt 2 ----------
const K14 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const sw = 400, sh = (sw / SCOPE.box[2]) * SCOPE.box[3];
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Q lines={['A model atom has three energy levels, with energies of 0, 2 and 5 units.']} />
			<Q y0={370} lines={['(a)  List the photon energies the atom can emit when an electron drops', '       from one level to a lower level.', "(b)  Explain why the atom's emission spectrum contains no line for a", '       photon energy of 4 units.']} />
			<Sx x={140} y={640} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SCOPE} x={1380} y={700} h={sh} />
			<PauseHoldR h={hold('attempt-2')} at={K14.pause} x={140} y={936} cx={1040} cy={740} />
		</SVG>
	);
};

// ---------- 15. feedback 2 ----------
const K15 = cues(sc('feedback-2'), {possible: 'possible drops', d52: 'five to two', d20: 'two to zero', d50: 'and five to zero', units: ['units.', 1], four: "Four isn't", pair: 'any pair', noline: 'no line at', listing: 'Listing only', slip: 'classic slip', levels: 'upper levels'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const Y = (u: number) => 860 - u * 70;
	const tryY = kf(f, [[K15.pair, 0], [K15.pair + 30, 2], [K15.noline - 30, 2]]);
	const tryO = prog(f, K15.four, 10);
	const arrows = [
		{x: 260, a: 5, b: 2, at: K15.d52, gap: '3', nm: 620},
		{x: 350, a: 2, b: 0, at: K15.d20, gap: '2', nm: 650},
		{x: 440, a: 5, b: 0, at: K15.d50, gap: '5', nm: 430},
	];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'levels at 0, 2 and 5 units     |     drops only'}]} />
			{[0, 2, 5].map(u => (
				<g key={u}>
					<line x1={170} x2={500} y1={Y(u)} y2={Y(u)} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<Sx x={150} y={Y(u) + 13} text={`${u}`} size={38} color={INK} anchor="end" weight={800} at={-1000} />
				</g>
			))}
			{arrows.map(a => (
				<g key={a.x}>
					<VArrow x={a.x} y0={Y(a.a) + 6} y1={Y(a.b) - 6} at={a.at} color={nmInk(a.nm)} width={7} dur={16} />
					<Sx x={a.x + 18} y={(Y(a.a) + Y(a.b)) / 2 + 13} text={a.gap} size={38} color={nmInk(a.nm)} weight={800} at={K15.units - 20} />
				</g>
			))}
			{/* a 4-unit gap tried against each pair: no level at its top */}
			{tryO > 0.01 ? <g opacity={tryO}>
				<rect x={540} y={Y(tryY + 4)} width={56} height={Y(tryY) - Y(tryY + 4)} fill="none" stroke={SLATE_T} strokeWidth={5} rx={6} />
				<Sx x={568} y={Y(tryY + 4) - 14} text="4?" size={38} color={SLATE_T} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Framed x={700} y={400} segs={[{t: '(a)  3, 2 and 5 units', c: GREEN_T}]} at={K15.units} size={52} />
			<Framed x={700} y={540} segs={[{t: '(b)  no pair of levels is 4 apart', c: GREEN_T}]} at={K15.noline} size={52} />
			<Sx x={700} y={600} text="so no single drop gives a 4-unit photon" size={30} color={INK} weight={700} at={K15.noline + 10} />
			<Chip x={700} y={650} segs={[{t: 'only 2 and 5'}]} at={K15.listing} size={40} color={RED_T} strike={K15.slip} />
			<Write x={700} y={800} text="5 → 2 gives 3" at={K15.levels - 10} size={42} color={RED_T} />
			{void K15.possible}
		</SVG>
	);
};

// ---------- 16. handoff: evidence changes models (final frame; chem-y11-ws-v01 opens on it) ----------
const K16 = cues(sc('handoff'), {nuclear: 'The nuclear model', spectra: 'line spectra', bohr: 'so Bohr', schro: 'and Schrödinger', bigger: 'bigger atoms', model: 'better model', next: 'Next time', question: 'chemistry question'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const glow = prog(f, K16.model, 12);
	const arr = (x0: number, x1: number, at: number) => <PenArrow a={[x0, 470]} b={[x1, 470]} at={at} color={glow > 0.5 ? NAVY_T : INK} width={5 + 2 * glow} bend={0} />;
	return (
		<SVG>
			<Heading text="Evidence changes models" at={0} />
			{/* nuclear model */}
			<circle cx={300} cy={470} r={175} fill="#f3efe6" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
			<MiniNucleus cx={300} cy={470} r={8} />
			<Electron x={300 + 115 * Math.cos(f * 0.05)} y={470 + 140 * Math.sin(f * 0.05)} r={13} />
			<Sx x={300} y={700} text="nuclear model" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={300} y={742} text="any electron energy" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<BohrAtom cx={960} cy={470} R={175} />
			<Sx x={960} y={700} text="Bohr model" size={38} color={NAVY_T} anchor="middle" weight={800} at={-1000} />
			<Sx x={960} y={742} text="fixed energy levels" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Cloud cx={1620} cy={470} R={185} />
			<Sx x={1620} y={700} text="Schrödinger model" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1620} y={742} text="levels, with orbitals" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			{/* recap of each model's evidence; clears before the final frame */}
			<Fade at={-1000} out={K16.model - 20}>
				<Strip id="v10s16a" g={{x: 150, y: 776, w: 300, h: 60}} rainbow={1} />
				<StripStrike g={{x: 150, y: 776, w: 300, h: 60}} at={-1000} />
				<Strip id="v10s16b" g={{x: 810, y: 776, w: 300, h: 60}} lines={H_LINES.map(l => ({nm: l.nm, width: 6}))} />
				<TickMark x={1140} y={804} at={-1000} s={1.2} />
				{(['s', 'p', 'd', 'f'] as const).map((t, i) => <Chip key={t} x={1462 + i * 84} y={776} segs={[{t}]} at={-1000} size={38} color={INK} w={68} />)}
			</Fade>
			{arr(488, 772, K16.spectra - 10)}
			{arr(1148, 1420, K16.bigger - 10)}
			<Sx x={630} y={545} text="line spectra" size={34} color={INK} anchor="middle" weight={800} at={K16.spectra} />
			<Sx x={1285} y={545} text="atoms with" size={34} color={INK} anchor="middle" weight={800} at={K16.bigger} />
			<Sx x={1285} y={587} text="more electrons" size={34} color={INK} anchor="middle" weight={800} at={K16.bigger} />
			<Write x={735} y={812} text="new evidence → better model" at={K16.model} size={42} color={NAVY_T} />
			<PenArrow a={[800, 776]} b={[640, 600]} at={K16.model + 10} color={NAVY_T} bend={-0.15} />
			<PenArrow a={[1160, 776]} b={[1280, 610]} at={K16.model + 14} color={NAVY_T} bend={0.15} />
			<Chip x={96} y={856} segs={[{t: 'Next: how can new evidence improve a testable chemistry question?'}]} at={K16.question - 6} size={38} color={PURE} />
			<Sx x={1680} y={852} text="our investigation" size={30} color={INK} anchor="middle" weight={800} at={K16.question} />
			<AccBar id="v10hb" x={1560} y={868} w={236} h={48} labelSize={26} whole={20} at={K16.question} extraAt={K16.question} segs={[{m: 6.2, fill: SAND_F, ink: SAND_INK, at: -1000}, {m: 14.3, fill: SALT_F, ink: INK, at: -1000}]} />
			{void K16.nuclear}{void K16.bohr}{void K16.schro}{void K16.next}
		</SVG>
	);
};

// ---------- 17. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Light comes as photons. A photon’s energy'}], [{t: 'sets its colour (violet > red).'}]],
	[[{t: 'Electrons can only have fixed energies:', c: NAVY_T}], [{t: 'energy levels (Bohr).', c: NAVY_T}]],
	[[{t: 'An excited electron drops and emits one'}], [{t: 'photon: its energy = the gap.'}]],
	[[{t: 'Fixed gaps give fixed lines. Each element'}], [{t: 'has its own pattern of lines.'}]],
	[[{t: 'Schrödinger: orbitals, regions where an', c: '#1f4f9e'}], [{t: 'electron is likely to be found.', c: '#1f4f9e'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 48} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	const ys = STEP_Y.map(v => 560 + (v - 316) * 0.5);
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={MIX} />
			{rows}
			<Fade at={6}>
				<rect x={1170} y={290} width={654} height={600} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1210} y={420} text="Stairs, not a ramp:" size={52} color={NAVY_T} hand at={-1000} />
				<Sx x={1210} y={490} text="fixed steps, fixed colours." size={46} color={INK} hand at={-1000} />
				<Stairs sx0={1300} step={66} ys={ys} />
			</Fade>
		</SVG>
	);
};
