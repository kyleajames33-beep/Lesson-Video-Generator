// Y11 Chem M1 V17 scenes 13 to 18: two HSC-style attempts (whole card with a neutral picture: the source pot; the
// alarm and the tree; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, green framed answers,
// one red crossed slip), the handoff (the final frame: uranium-238 gives out an alpha particle, "?" is left, the two
// reaction lines and the "Next" chip; chem-y11-m1-v18 opens on it) and the key notes with the memory card, which
// cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {ALARM, ORE, POT, RAD, TREE, dur, hold, pw, sc} from './common';
import type {PDef, RKey} from './common';
import {
	AMB_T, AlphaClu, Card, Chip, Fade, Framed, HUM_T, Heading, INK, NAT_T, NAVY_S, NAVY_T, Nuc, Nuclide, PAPER, PauseHoldR, Plate, RED_T, Rich, Sx, TickMark, Write, flyPt,
	prog, rFor, richW,
} from './parts';
import type {Seg} from './parts';
import {Compact} from './s2';
import type {PenG} from './parts';

const GREEN = '#2f8a5b';
const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number}> = ({p, cx, bottom, h}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} />;
const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
/** A framed green answer row (38 px or more) with a tick. */
const Row: React.FC<{x: number; y: number; segs: Seg[]; at: number; size?: number}> = ({x, y, segs, at, size = 38}) => <Framed x={x} y={y} segs={segs} at={at} size={size} stroke={GREEN} />;

// ---------- 13. attempt 1 ----------
const K13 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Cobalt-60 is a human-made radioisotope that emits', 'beta particles and gamma rays.', 'Compare beta particles and gamma rays in terms of', 'their charge, penetrating ability and ionising ability.', '(3 marks)']} y0={290} lh={64} />
		<PB p={POT} cx={1560} bottom={800} h={300} />
		<PauseHoldR h={hold('attempt-1')} at={K13.pause} x={140} y={936} cx={1000} cy={760} />
	</svg>
);

// ---------- 14. feedback 1 ----------
const K14 = cues(sc('feedback-1'), {beta: 'Beta particles have', charge: 'no charge', stopped: 'Beta is stopped', lead: 'several centimetres', ionising: 'Beta is more ionising', saying: 'Saying gamma', slip: 'the slip', round: 'other way round'});
const b = (t: string): Seg => ({t, c: RAD.beta.ink});
const g = (t: string): Seg => ({t, c: RAD.gamma.ink});
export const SceneFeedback1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Your turn" at={-1000} />
		<Givens segs={[{t: 'cobalt-60   |   emits beta particles and gamma rays   |   compare: charge, penetration, ionisation'}]} />
		<PB p={POT} cx={250} bottom={620} h={250} />
		<Sx x={250} y={670} text="cobalt-60" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={520} y={380} text="charge" size={38} color={INK} weight={800} at={K14.beta} />
		<Row x={860} y={380} segs={[b('β: −1'), {t: ';   '}, g('γ: 0')]} at={K14.charge} size={44} />
		<Sx x={520} y={500} text="penetrating" size={38} color={INK} weight={800} at={K14.stopped} />
		<Row x={860} y={500} segs={[b('β'), {t: ': stopped by a few mm Al'}]} at={K14.stopped} size={38} />
		<Rich x={884} y={568} segs={[g('γ'), {t: ': reduced by several cm Pb'}]} size={38} weight={800} at={K14.lead} />
		<Sx x={520} y={680} text="ionising" size={38} color={INK} weight={800} at={K14.ionising} />
		<Row x={860} y={680} segs={[b('β'), {t: ' more ionising than '}, g('γ')]} at={K14.ionising} size={44} />
		<Chip x={120} y={770} segs={[{t: 'gamma most ionising, because most penetrating'}]} at={K14.saying} size={40} color={RED_T} strike={K14.slip} />
		<Write x={140} y={900} text="more penetrating → less ionising" at={K14.round} size={44} color={RED_T} />
		<Fade at={K14.stopped}><Compact g={{x0: 1240, srcW: 120, ax: [1430, 1560, 1690], aw: [10, 24, 80], top: 700, bot: 860, lanes: {alpha: 735, beta: 780, gamma: 825}, end: 1820, thumb: 0}} labelSize={28} /></Fade>
	</svg>
);

// ---------- 15. attempt 2 ----------
const K15 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={["A student claims: 'Human-made radioisotopes give off", "more dangerous kinds of radiation than natural", "radioisotopes.'", 'Evaluate this claim, using one natural and one', 'human-made radioisotope as examples.   (3 marks)']} y0={290} lh={64} />
		<PB p={ALARM} cx={1290} bottom={860} h={250} />
		<PB p={TREE} cx={1640} bottom={860} h={420} />
		<PauseHoldR h={hold('attempt-2')} at={K15.pause} x={140} y={936} cx={1000} cy={760} />
	</svg>
);

// ---------- 16. feedback 2 ----------
const K16 = cues(sc('feedback-2'), {claim: 'The claim', natural: 'Natural uranium-two-thirty-eight', both: 'both give out', type: 'The type of radiation', origin: 'not its origin', how: 'How dangerous', saying: 'Saying human-made', trap: 'the trap'});
export const SceneFeedback2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Last one" at={-1000} />
		<Givens segs={[{t: 'claim: human-made radiation is a more dangerous kind'}]} />
		<Framed x={140} y={370} segs={[{t: 'not supported', c: GREEN}]} at={K16.claim} size={52} stroke={GREEN} />
		{/* the example pair */}
		<PB p={ORE} cx={240} bottom={600} h={190} />
		<PB p={ALARM} cx={1000} bottom={600} h={190} />
		<Sx x={380} y={540} text="U-238 (natural):" size={40} color={NAT_T} weight={800} at={K16.natural} />
		<Write x={740} y={548} text="α" at={K16.both} size={64} color={RAD.alpha.ink} />
		<Sx x={1130} y={540} text="Am-241 (human-made):" size={40} color={HUM_T} weight={800} at={K16.natural + 30} />
		<Write x={1590} y={548} text="α" at={K16.both + 4} size={64} color={RAD.alpha.ink} />
		<Row x={140} y={720} segs={[{t: 'radiation type set by the nucleus', c: GREEN}]} at={K16.origin} size={40} />
		<Rich x={164} y={790} segs={[{t: 'hazard: type, amount, half-life, exposure'}]} size={38} weight={800} at={K16.how} />
		<Chip x={1060} y={690} segs={[{t: 'human-made = more dangerous'}]} at={K16.saying} size={42} color={RED_T} strike={K16.trap} />
		<Write x={1100} y={830} text="same radiation types" at={K16.trap + 4} size={44} color={RED_T} />
		{void K16.type}
	</svg>
);

// ---------- 17. handoff: which element is left? (final frame; chem-y11-m1-v18 opens on it) ----------
const K17 = cues(sc('handoff'), {one: 'One last thing', change: 'change the number', when: 'When uranium-two-thirty-eight', alpha: 'an alpha particle', left: "what's left", add: 'add up', next: 'Next time', balance: 'balance a nuclear'});
export const U17 = {cx: 470, cy: 640, R: 225, p: 24, n: 30};
export const HE17: [number, number] = [1010, 520];
export const NEXT17 = 'Next: how do we balance a nuclear reaction?';
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const r = rFor(U17.p + U17.n, U17.R);
	const gone = f >= K17.alpha;
	const c = flyPt(f, [U17.cx + U17.R * 0.8, U17.cy - U17.R * 0.3], HE17, K17.alpha, 24);
	const L1 = 836, L2 = 920;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Which element is left?" at={0} />
			<Nuc cx={U17.cx} cy={U17.cy} p={gone ? U17.p - 2 : U17.p} n={gone ? U17.n - 2 : U17.n} r={r} />
			<Nuclide x={U17.cx - 60} y={U17.cy - U17.R - 40} sym="U" A={238} Z={92} size={90} numSize={44} out={K17.left} />
			<Fade at={K17.left}>
				<circle cx={U17.cx} cy={U17.cy - U17.R - 74} r={44} fill={PAPER} stroke={INK} strokeWidth={4} />
				<Sx x={U17.cx} y={U17.cy - U17.R - 50} text="?" size={72} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Sx x={U17.cx} y={U17.cy + U17.R + 56} text="uranium-238 (model)" size={38} color={INK} anchor="middle" weight={800} at={-1000} out={K17.left} />
			<Sx x={U17.cx} y={U17.cy + U17.R + 56} text="what's left?" size={38} color={INK} anchor="middle" weight={800} at={K17.left + 4} />
			{gone ? <AlphaClu x={c[0]} y={c[1]} r={r * 1.3} /> : null}
			<Nuclide x={HE17[0] + 130} y={HE17[1] + 22} sym="He" A={4} Z={2} size={80} numSize={44} at={K17.alpha + 20} />
			<Sx x={860} y={330} text="alpha and beta decay change the proton number," size={38} color={INK} weight={800} at={K17.change} />
			<Sx x={860} y={380} text="so the nucleus becomes a different element" size={38} color={INK} weight={800} at={K17.change + 10} />
			<Write x={HE17[0] - 30} y={HE17[1] + 130} text="alpha particle" at={K17.alpha + 20} size={42} color={RAD.alpha.ink} />
			{/* the two reaction lines (solid ink, 44 px or more) */}
			<Fade at={K17.add}>
				<Nuclide x={1050} y={L1 - 70} sym="U" A={238} Z={92} size={70} numSize={44} hiA={K17.add + 10} hiZ={K17.add + 10} />
				<Sx x={1200} y={L1 - 70} text="→   ?   +" size={60} color={INK} weight={800} at={-1000} />
				<Nuclide x={1520} y={L1 - 70} sym="He" A={4} Z={2} size={70} numSize={44} hiA={K17.add + 10} hiZ={K17.add + 10} />
				<Sx x={970} y={L2} text="^{59}Co + neutron → ^{60}Co" size={48} color={INK} weight={800} at={-1000} />
			</Fade>
			<Fade at={K17.next}>
				<rect x={96} y={196} width={richW([{t: NEXT17}], 44) + 64} height={84} rx={22} fill={PAPER} stroke={NAVY_S} strokeWidth={4} />
				<Sx x={128} y={252} text={NEXT17} size={44} color={NAVY_T} weight={800} at={-1000} />
			</Fade>
			{void K17.one}{void K17.change}{void K17.when}{void K17.balance}
		</svg>
	);
};

// ---------- 18. key notes ----------
const NOTE_SIZE = 34;
type NP = {t: string; c?: string};
const r = (k: RKey, t?: string): NP => ({t: t ?? RAD[k].name, c: RAD[k].ink});
export const NOTES: NP[][][] = [
	[[{t: "A radioisotope's unstable nucleus decays and gives"}], [{t: 'out ionising radiation.'}]],
	[[r('alpha', 'Alpha'), {t: ': 2 protons + 2 neutrons, charge +2.'}], [{t: 'The nucleus loses 2 protons.'}]],
	[[r('beta', 'Beta'), {t: ': an electron from a neutron turning into'}], [{t: 'a proton. '}, r('gamma', 'Gamma'), {t: ': energy only.'}]],
	[[{t: 'Paper stops '}, r('alpha'), {t: ', aluminium stops '}, r('beta'), {t: ','}], [{t: 'lead cuts down '}, r('gamma'), {t: '.'}]],
	[[{t: 'The nucleus sets the radiation type, not whether'}], [{t: 'it is natural or human-made.'}]],
];
const G18: PenG = {x0: 1230, srcW: 124, ax: [1440, 1560, 1680], aw: [10, 22, 70], top: 560, bot: 720, lanes: {alpha: 595, beta: 640, gamma: 685}, end: 1800, thumb: 0};
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={INK} />
				{lines.map((l, k) => <Rich key={k} x={140} y={y0 + k * 48} segs={l} size={NOTE_SIZE} weight={700} />)}
			</Fade>
		);
	});
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={1210} y={262} width={614} height={520} rx={22} fill={PAPER} stroke={NAVY_S} strokeWidth={5} />
					<Sx x={1240} y={306} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Sx x={1250} y={392} text="The more it ionises," size={50} color={RED_T} hand at={-1000} />
					<Sx x={1250} y={458} text="the sooner it stops." size={50} color={INK} hand at={-1000} />
					<Compact g={G18} labelSize={26} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
			{void TickMark}{void Chip}
		</svg>
	);
};
