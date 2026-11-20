// Y11 Chem M1 V15 scenes 13 to 18: two HSC-style attempts (whole card with neutral pictures: the oil jar, then the
// fresh and dull sodium pair tagged A and B; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip,
// green framed answers, one red crossed slip), the handoff (the final frame: the potassium trough with its lilac flame
// ringed, the potassium and sodium flame plates side by side, the "Next" chip) and the key notes with the memory card
// and safety strip, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {CUT_DULL, CUT_FRESH, DATA, FL_K, FL_NA, OILJAR, PT, TR_K, core, dur, hold, ie, ph, sc, tp} from './common';
import type {TL} from './common';
import {
	AMB_T, Card, Chip, E_BLUE, Fade, Framed, GREEN_T, Heading, INK, K_T, NAVY_T, NA_T, OR_S, OR_T, PINK_T, PauseHoldR, PenArrow, PenRing, PlateB, RAtom, RED_T, Rich,
	Ruler, SVG, Sx, TroughStates, Write, lerp, prog, ringsOf, smooth,
} from './parts';
import type {Seg} from './parts';
import {PicF} from '../chem-m8-c01/parts';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const li = DATA.Li, k = DATA.K;

// ---------- 13. attempt 1 ----------
const K13 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['In a teacher demonstration, equal-sized, freshly cut pieces of', 'lithium and potassium are added to separate troughs of water', 'at the same temperature. Potassium reacts much more', 'vigorously than lithium.']} />
		<Q y0={540} lines={['Explain this difference in terms of atomic structure.']} />
		<Sx x={140} y={616} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PlateB p={OILJAR} cx={1600} bottom={720} h={300} />
		<PauseHoldR h={hold('attempt-1')} at={K13.pause} x={140} y={936} cx={1100} cy={760} />
	</SVG>
);

// ---------- 14. feedback 1 ----------
const K14 = cues(sc('feedback-1'), {both: 'Both atoms', two: 'two more', nucleus: 'nucleus', core: 'core charge', tightly: 'less tightly', faster: 'reacts faster', saying: 'Saying', slip: 'slip', each: 'Each atom'});
const LI14: [number, number] = [240, 570], K14C: [number, number] = [620, 570];
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const RL = 0.85 * li.r, RK = 0.85 * k.r;
	const leave = Math.min(1, Math.max(0, (f - K14.faster) / 24));
	const rot = -Math.PI / 4;
	const e0: [number, number] = [K14C[0] + RK * Math.cos(rot), K14C[1] + RK * Math.sin(rot)];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'equal-sized, freshly cut   |   same water temperature   |   K much more vigorous'}]} />
			<RAtom cx={LI14[0]} cy={LI14[1]} rings={ringsOf(2, RL)} counts={li.shells} label={`${li.z}+`} nr={24} dot={8} labelSize={24} outerRot={rot} />
			<RAtom cx={K14C[0]} cy={K14C[1]} rings={ringsOf(4, RK)} counts={k.shells} label={`${k.z}+`} nr={26} dot={7} labelSize={26} outerRot={rot} leave={{to: [e0[0] + 70, e0[1] - 70], p: leave}} />
			<Ruler c={LI14} R={RL} ang={-Math.PI / 2} at={K14.nucleus} />
			<Ruler c={K14C} R={RK} ang={-Math.PI / 2} at={K14.nucleus + 6} />
			<Sx x={LI14[0]} y={800} text={`Li  ${li.shells.join(',')}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={K14C[0]} y={800} text={`K  ${k.shells.join(',')}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={96} y={330} text="each loses one outer electron" at={K14.both} size={42} color={E_BLUE} />
			<Framed x={900} y={360} segs={[{t: `K: ${k.shells.length} shells, Li: ${li.shells.length}`, c: GREEN_T}]} at={K14.two} size={38} stroke={GREEN_T} />
			<Framed x={900} y={440} segs={[{t: "K's outer electron is further out", c: GREEN_T}]} at={K14.nucleus} size={38} stroke={GREEN_T} />
			<Framed x={900} y={520} segs={[{t: 'core charge ', c: GREEN_T}, {t: `+${core(k)}`, c: AMB_T}, {t: ' for both', c: GREEN_T}]} at={K14.core} size={38} stroke={GREEN_T} />
			<Framed x={900} y={600} segs={[{t: 'held less tightly: ', c: GREEN_T}, {t: `${ie(k)}`, c: OR_T}, {t: ' against ', c: GREEN_T}, {t: `${ie(li)} kJ/mol`, c: OR_T}]} at={K14.tightly} size={38} stroke={GREEN_T} />
			<Framed x={900} y={680} segs={[{t: 'lost more readily, so faster', c: GREEN_T}]} at={K14.faster} size={38} stroke={GREEN_T} />
			<Chip x={900} y={730} segs={[{t: 'K has more electrons to give away'}]} at={K14.saying} size={38} color={RED_T} strike={K14.slip} />
			<Write x={900} y={870} text="each atom loses one" at={K14.each} size={42} color={RED_T} />
		</SVG>
	);
};

// ---------- 15. attempt 2 ----------
const K15 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Two pieces of sodium of equal mass are added to separate', 'troughs of water at the same temperature. Piece A was', 'freshly cut. Piece B had been exposed to air and its', 'surface is dull.']} />
		<Q y0={540} lines={['Predict which piece begins to react faster, and explain', 'your prediction.']} />
		<Sx x={140} y={676} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PicF p={CUT_FRESH} x={1440} y={250} h={ph(CUT_FRESH, 340)} />
		<PicF p={CUT_DULL} x={1440} y={480} h={ph(CUT_DULL, 340)} />
		<Sx x={1410} y={350} text="A" size={52} color={INK} anchor="end" weight={800} at={-1000} />
		<Sx x={1410} y={580} text="B" size={52} color={INK} anchor="end" weight={800} at={-1000} />
		<PauseHoldR h={hold('attempt-2')} at={K15.pause} x={140} y={936} cx={1100} cy={790} />
	</SVG>
);

// ---------- 16. feedback 2 ----------
const K16 = cues(sc('feedback-2'), {pieceA: 'Piece A', keeps: 'keeps water', straight: 'straight', saying: 'Saying', trap: 'trap', same: 'Same metal'});
export const SceneFeedback2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={-1000} />
		<Givens segs={[{t: 'A freshly cut   |   B dull after air   |   equal mass, same temperature'}]} />
		<Framed x={96} y={360} segs={[{t: 'A starts faster', c: GREEN_T}]} at={K16.pieceA} size={52} stroke={GREEN_T} />
		<PicF p={CUT_FRESH} x={96} y={440} h={ph(CUT_FRESH, 420)} />
		<PicF p={CUT_DULL} x={536} y={440} h={ph(CUT_DULL, 420)} />
		<Sx x={306} y={740} text="A" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={746} y={740} text="B" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
		<Framed x={980} y={420} segs={[{t: 'A: fresh metal in contact with water', c: GREEN_T}]} at={K16.straight} size={38} stroke={GREEN_T} />
		<Framed x={980} y={510} segs={[{t: 'B: tarnish film delays contact', c: GREEN_T}]} at={K16.keeps} size={38} stroke={GREEN_T} />
		<PenArrow a={[730, 490]} b={[966, 500]} at={K16.keeps + 10} color={INK} bend={-0.2} width={5} head={16} />
		<Chip x={980} y={570} segs={[{t: 'same element, so same rate'}]} at={K16.saying} size={38} color={RED_T} strike={K16.trap} />
		<Write x={980} y={720} text="same metal, different surface" at={K16.same} size={42} color={RED_T} />
	</SVG>
);

// ---------- 17. handoff: whose colour is the flame? (final frame; chem-y11-m1-v16 opens on it) ----------
const K17 = cues(sc('handoff'), {flame: "Potassium's flame", lilac: 'lilac', yellow: 'yellow-orange', hydrogen: 'Hydrogen burning', metal: ['metal', 1], reliably: 'reliably'});
export const TROUGH17: TL = {x: 96, y: 280, w: 820};
export const FLAMES17 = {k: {cx: 1180, bottom: 800, h: 420}, na: {cx: 1560, bottom: 800, h: 420}};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	// the trough opens large and settles to its final size just before the flame plates arrive
	const g = smooth(prog(f, K17.lilac - 6, 28));
	const T: TL = {x: 96, y: lerp(236, TROUGH17.y, g), w: lerp(1300, TROUGH17.w, g)};
	const fl = tp(T, PT.flame);
	return (
		<SVG>
			<Heading text="Whose colour is the flame?" at={0} />
			<TroughStates t={T} states={[{p: TR_K, at: -1000}]} />
			<Rich x={96} y={940} segs={[{t: 'potassium: ', c: K_T}, {t: 'lilac flame', c: K_T}, {t: '   sodium: ', c: NA_T}, {t: 'yellow-orange flame', c: NA_T}]} size={44} at={0} out={K17.lilac - 6} />
			<PenRing cx={fl[0]} cy={fl[1] + 6} rx={54} ry={64} at={K17.flame} color={K_T} seed={5} />
			<Write x={fl[0] + 76} y={fl[1] - 40} text="lilac" at={K17.flame + 10} size={42} color={K_T} />
			<Sx x={96} y={750} text="hydrogen alone: pale, almost invisible flame" size={30} color={INK} weight={800} at={K17.hydrogen} />
			<Write x={96} y={830} text="the colour comes from the metal" at={K17.metal + 6} size={42} color={INK} />
			<PlateB p={FL_K} cx={FLAMES17.k.cx} bottom={FLAMES17.k.bottom} h={FLAMES17.k.h} at={K17.lilac + 20} dy={20} />
			<PlateB p={FL_NA} cx={FLAMES17.na.cx} bottom={FLAMES17.na.bottom} h={FLAMES17.na.h} at={K17.yellow} dy={20} />
			<Sx x={FLAMES17.k.cx} y={846} text="potassium: lilac" size={34} color={K_T} anchor="middle" weight={800} at={K17.lilac + 30} />
			<Sx x={FLAMES17.na.cx} y={846} text="sodium: yellow-orange" size={34} color={NA_T} anchor="middle" weight={800} at={K17.yellow + 10} />
			<PenArrow a={[fl[0] + 70, fl[1] + 10]} b={[FLAMES17.k.cx - 60, 470]} at={K17.metal + 20} color={K_T} bend={-0.15} width={5} head={18} />
			<Chip x={96} y={178} segs={[{t: 'Next: what do flame colours show, and what can they not identify reliably?'}]} at={K17.reliably} size={38} color={NAVY_T} />
		</SVG>
	);
};

// ---------- 18. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Group 1 metal + water →'}], [{t: 'metal hydroxide (alkaline)', c: PINK_T}, {t: ' + hydrogen'}]],
	[[{t: 'Li fizzes steadily; Na melts and darts;'}], [{t: "K's hydrogen burns lilac."}]],
	[[{t: 'Down the group: outer electron '}, {t: 'further', c: E_BLUE}], [{t: 'out', c: E_BLUE}, {t: ', held less tightly, lost faster.'}]],
	[[{t: 'Fair test: same piece size, water,'}], [{t: 'temperature, fresh surface.'}]],
	[[{t: 'Tarnish', c: RED_T}, {t: ' can slow the start; it does'}], [{t: 'not change reactivity.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={i === 2 ? OR_S : K_T} />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 50} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={1170} y={290} width={654} height={400} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
					<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Sx x={1210} y={440} text="Further out," size={60} color={E_BLUE} hand at={-1000} />
					<Sx x={1210} y={530} text="easier off," size={60} color={OR_T} hand at={-1000} />
					<Sx x={1210} y={620} text="faster fizz." size={60} color={K_T} hand at={-1000} />
					<rect x={1170} y={720} width={654} height={130} rx={18} fill="#f2faf5" stroke={GREEN_T} strokeWidth={4} />
					<Sx x={1196} y={770} text="Teacher demo or video only;" size={30} color={INK} weight={800} at={-1000} />
					<Sx x={1196} y={812} text="stored under oil, never handled." size={30} color={INK} weight={800} at={-1000} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
