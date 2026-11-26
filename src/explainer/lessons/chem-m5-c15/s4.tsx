import React from 'react';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, CORAL_INK, Heading, hold, kf, sc} from './common';
import {KIDNEY, NOPPT, SAT} from './assets';
import {ALine, AMBER, AMBER_INK, Chip, ExpLabels, Fade, GivensCard, Glow, INK, INK_SOFT, KMarker, KeyNotesBoard, LogLine, MistakeChip, Overlay, PauseHold, PicH, PiecesM, QMarker, Ring, Sx, SwarmLens, TEAL, TaskLine, cardH, lgx, mw, picW, platePt, segXs} from './parts';
import type {Ln, MPiece} from './parts';

// ---------- 12. Attempt 1 (countdown) ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', v20: '20.0 millilitres', lead: 'lead nitrate', v30: '30.0 millilitres', ki: 'potassium iodide', ksp: 'The Ksp of lead iodide', v98: '9.8', will: 'Will a precipitate form', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const h = hold(A1);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K13.turn} />
				<GivensCard x={96} y={220} w={1060} h={cardH(4)} at={K13.v20 - 6} lh={54} lines={[
					{text: 'Pb(NO_3)_2(aq): 20.0 mL of 1.0 × 10^{−3} mol/L', at: K13.v20, size: 34, color: CAT_INK},
					{text: 'mixed with', at: K13.v30 - 20, size: 30, color: INK_SOFT},
					{text: 'KI(aq): 30.0 mL of 2.0 × 10^{−3} mol/L', at: K13.v30, size: 34, color: AN_INK},
					{text: 'Ksp(PbI_2) = 9.8 × 10^{−9} (25 °C)', at: K13.v98, size: 34, color: TEAL},
				]} />
				<Sx x={96} y={640} text="Will a precipitate form? Show Qsp." size={52} color={INK} hand at={K13.will} />
				<PauseHold h={h} at={K13.pause} x={96} y={800} cx={1560} cy={820} />
				{void K13.lead}{void K13.ki}{void K13.ksp}
			</Overlay>
		</>
	);
};

// ---------- 13. Feedback 1 (brief) ----------
const F1 = 'feedback-1';
const K14 = cues(sc(F1), {lead: 'Lead is 2.0', total: 'over the total', v40: '4.0 times', iod: 'Iodide is 1.2', qsp: 'Qsp is lead', sq: 'iodide squared', v58: '5.8 times', less: 'less than Ksp', noppt: 'no precipitate', forgot: 'If you forgot', v48: '4.8 times', wrong: 'wrongly predicted'});
export const SceneFeedback1: React.FC = () => {
	const ln: Ln = {y: 800, x0: 1000, x1: 1720, lo: -11, hi: -7};
	const X = 126, s = 32;
	const q2: MPiece[] = [{t: '= (4.0 × 10^{−4})', at: K14.sq - 20}, {t: '(1.2 × 10^{−3})^{2}', at: K14.sq - 10, gap: 34}, {t: '= 5.8 × 10^{−10}', at: K14.v58, color: CORAL_INK}];
	const q2x = segXs(q2, 96, 40);
	return (
		<>
			<Overlay>
				<TaskLine text="Will a precipitate form? Show Qsp." at={-100} size={46} color={INK_SOFT} />
				<Fade at={0}><rect x={96} y={196} width={1100} height={256} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} /></Fade>
				<Sx x={X} y={246} text="after mixing" size={34} color={INK_SOFT} hand at={0} />
				<ALine x={X} y={306} items={[{t: 'V total = 20.0 + 30.0 = 50.0 mL = 0.0500 L', at: K14.total}]} size={s} />
				<ALine x={X} y={366} items={[{t: '[Pb^{2+}] = 2.0 × 10^{−5} mol ÷ 0.0500 L', at: K14.lead}, {t: '= 4.0 × 10^{−4} mol/L', at: K14.v40, color: CAT_INK}]} size={s} />
				<ALine x={X} y={426} items={[{t: '[I^{−}] = 6.0 × 10^{−5} mol ÷ 0.0500 L', at: K14.iod - 10}, {t: '= 1.2 × 10^{−3} mol/L', at: K14.iod + 20, color: AN_INK}]} size={s} />
				<ALine x={96} y={540} items={[{t: 'Qsp = [Pb^{2+}][I^{−}]^{2}', at: K14.qsp}]} size={40} />
				<ALine x={96} y={612} items={q2} size={40} />
				<Ring cx={q2x[1].x + q2x[1].w / 2} cy={612 - 14} rx={q2x[1].w / 2 + 6} ry={34} at={K14.sq + 6} color={AMBER} seed={5} />
				<LogLine ln={ln} at={K14.qsp} labels={false} />
				<ExpLabels ln={ln} at={K14.qsp + 10} />
				<KMarker k={9.8e-9} ln={ln} at={K14.qsp + 14} label="Ksp" size={40} />
				<QMarker ln={ln} at={K14.less} value={5.8e-10} label="Qsp < Ksp" side="left" color={CORAL_INK} size={38} />
				<Chip x={96} y={690} w={560} text="Qsp < Ksp: no precipitate" size={38} color={TEAL} at={K14.noppt} />
				<Fade at={K14.noppt + 6}><PicH p={NOPPT} x={690} y={650} h={200} /></Fade>
				<MistakeChip x={96} y={880} text="(4.0 × 10^{−4})(1.2 × 10^{−3}) = 4.8 × 10^{−7}: precipitate" size={30} at={K14.v48} note="I^{−} is squared" />
				{void K14.forgot}{void K14.wrong}{void lgx}
			</Overlay>
		</>
	);
};

// ---------- 14. Attempt 2 (countdown) ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', beaker: 'A beaker holds', solid: 'solid on the bottom', naso: 'Solid sodium sulfate', dissolves: 'and dissolves', temp: "temperature doesn't change", what: 'What happens', ksp: 'and to its Ksp', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const h = hold(A2);
	const P = {x: 96, y: 230, h: 380};
	return (
		<>
			<Overlay>
				<TaskLine text="Last one" at={K15.last} />
				<Fade at={K15.beaker}><PicH p={SAT} x={P.x} y={P.y} h={P.h} /></Fade>
				<Sx x={P.x + picW(SAT, P.h) / 2} y={P.y + P.h + 40} text="saturated CaSO_4(aq)," size={30} color={INK_SOFT} anchor="middle" hand at={K15.beaker} />
				<Sx x={P.x + picW(SAT, P.h) / 2} y={P.y + P.h + 78} text="solid present" size={30} color={INK_SOFT} anchor="middle" hand at={K15.solid} />
				<GivensCard x={520} y={230} w={820} h={cardH(2)} at={K15.naso - 6} lh={56} lines={[
					{text: 'add Na_2SO_4(s): it dissolves', at: K15.dissolves, size: 34},
					{text: 'same temperature', at: K15.temp, size: 34},
				]} />
				<Sx x={520} y={520} text="1. Amount of CaSO_4 dissolved?" size={48} color={INK} hand at={K15.what} />
				<Sx x={520} y={600} text="2. Ksp of CaSO_4?" size={48} color={INK} hand at={K15.ksp} />
				<PauseHold h={h} at={K15.pause} x={520} y={760} cx={1560} cy={820} />
			</Overlay>
		</>
	);
};

// ---------- 15. Feedback 2 (brief) ----------
const F2 = 'feedback-2';
const K16 = cues(sc(F2), {common: 'common ion', pushes: 'pushes Qsp', ppt: 'calcium sulfate precipitates', less: 'less stays dissolved', same: ['Ksp stays the same', 1], temp: "temperature hasn't changed", said: 'If you said', mixed: 'mixed up'});
export const SceneFeedback2: React.FC = () => {
	const P = {x: 96, y: 260, h: 300};
	const fl = platePt(SAT, P.x, P.y, P.h, 0.62, 0.86);
	const L = {cx: 640, cy: 560, r: 220};
	const ln: Ln = {y: 330, x0: 1100, x1: 1700, lo: -7, hi: -3};
	const qe = (f: number) => kf(f, [[K16.pushes - 10, Math.log10(4.93e-5)], [K16.pushes + 16, -3.5], [K16.ppt, -3.5], [K16.less, Math.log10(4.93e-5)]]);
	const nFree = (f: number) => kf(f, [[K16.ppt, 2], [K16.less, 1]]);
	return (
		<>
			<Overlay>
				<TaskLine text="1. Amount of CaSO_4 dissolved?  2. Ksp of CaSO_4?" at={-100} size={44} color={INK_SOFT} />
				<PicH p={SAT} x={P.x} y={P.y} h={P.h} />
				<Sx x={P.x + picW(SAT, P.h) / 2} y={P.y + P.h + 40} text="saturated CaSO_4(aq)" size={28} color={INK_SOFT} anchor="middle" hand at={-100} />
				<path d={`M${fl[0]},${fl[1]} L${L.cx - L.r},${L.cy + 30}`} stroke={INK_SOFT} strokeWidth={3} />
				<SwarmLens cx={L.cx} cy={L.cy} r={L.r} at={-100} cat="Ca^{2+}" an="SO_4^{2-}" nFree={nFree} scale={0.72}
					rain={{at: 4, ion: 'SO_4^{2-}', n: 5, every: 8, partner: 'Na^{+}', partnerCount: 2}}
					units={[{at: K16.ppt - 10, kind: 'join', slot: 3, ring: K16.ppt + 20}, {at: K16.ppt + 14, kind: 'join', slot: 6, ring: K16.ppt + 44}]}
					title="sulfate added" titleAt={4} />
				<Sx x={1100} y={240} text="SO_4^{2−}: a common ion" size={34} color={AN_INK} hand at={K16.common} />
				<LogLine ln={ln} at={K16.pushes - 20} labels={false} />
				<KMarker k={4.93e-5} ln={ln} at={K16.pushes - 16} label="Ksp" size={36} />
				<QMarker ln={ln} at={K16.pushes - 10} value={f => 10 ** qe(f)} label="Qsp" side="mid" color={CORAL_INK} size={34} />
				<Chip x={980} y={560} w={840} text="1. less CaSO_4 dissolved (more solid forms)" size={34} color={TEAL} at={K16.less} />
				<Chip x={980} y={650} w={840} text="2. Ksp unchanged (same temperature)" size={34} color={TEAL} at={K16.same} />
				<MistakeChip x={980} y={780} text="Ksp decreases" size={34} at={K16.said + 16} note="the solubility falls; Ksp is fixed" />
				{void K16.temp}{void K16.mixed}
			</Overlay>
		</>
	);
};

// ---------- 16. Decision rule, payoff and handoff ----------
const DR = 'decision-rule';
const K17 = cues(sc(DR), {predict: 'to predict a precipitate', find: "find each ion's", moles: 'moles over the total', write: 'Write Qsp', cmp: 'compare it with Ksp', ifq: 'If Qsp is bigger', common: 'A common ion lowers', never: 'never changes Ksp', stone: 'kidney stone', start: 'can start to form', past: 'past Ksp', next: 'Next', mod6: 'Module 6', acids: 'acids and bases', ka: ['K a', 1]});
export const SceneDecision: React.FC = () => {
	const ys = [300, 400, 500, 600];
	const lines: MPiece[][] = [
		[{t: '1  After mixing: n = c × V, then ÷ total V.', at: K17.find, hand: true}],
		[{t: '2  Qsp with the same powers as Ksp.', at: K17.write, hand: true}],
		[{t: '3  Qsp > Ksp: precipitate.  Qsp ≤ Ksp: none.', at: K17.ifq, hand: true}],
		[{t: '4  Common ion: solubility down, Ksp unchanged.', at: K17.common, hand: true}],
	];
	const outs = [K17.write, K17.ifq, K17.common, K17.stone];
	const ln: Ln = {y: 620, x0: 1400, x1: 1780, lo: -2, hi: 2};
	const qv = (f: number) => 10 ** kf(f, [[K17.start, -1], [K17.past + 10, 1.2]]);
	return (
		<>
			<Heading text="To predict a precipitate" at={4} size={60} />
			<Overlay>
				<Fade at={K17.predict}><rect x={96} y={210} width={1220} height={450} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				{ys.map((y, i) => <Glow key={i} y={y} w={1190} at={lines[i][0].at} out={outs[i]} />)}
				{ys.map((y, i) => <PiecesM key={i} x={130} y={y} items={lines[i]} size={44} />)}
				<Fade at={K17.stone}><PicH p={KIDNEY} x={1360} y={250} h={170} /></Fade>
				<LogLine ln={ln} at={K17.start - 10} labels={false} />
				<KMarker k={1} ln={ln} at={K17.start - 6} label="Ksp" size={34} />
				<QMarker ln={ln} at={K17.start} value={qv} label="Qsp" side="mid" color={CORAL_INK} size={32} />
				<Sx x={1360} y={800} text="Qsp > Ksp:" size={34} color={CORAL_INK} hand at={K17.past} />
				<Sx x={1360} y={842} text="a solid can start to form" size={34} color={CORAL_INK} hand at={K17.past + 6} />
				<Chip x={96} y={800} w={980} text="Next: Module 6, acids and bases (Ka)" size={40} color={TEAL} at={K17.next + 6} />
				<Ring cx={586 + mw('Next: Module 6, acids and bases (Ka)', 40, true) / 2 - mw('(Ka)', 40, true) / 2 + 16} cy={831} rx={60} ry={34} at={K17.ka} color={AMBER} seed={4} />
				{void K17.moles}{void K17.cmp}{void K17.never}{void K17.mod6}{void K17.acids}{void AMBER_INK}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Qsp (the ion product) uses the Ksp expression with the current ion concentrations, including the powers. Example: Qsp(PbI_2) = [Pb^{2+}][I^{−}]^{2}.',
	'Qsp > Ksp: a precipitate forms until Qsp = Ksp. Qsp = Ksp: saturated. Qsp < Ksp: no precipitate.',
	'Mixing: find concentrations after mixing first. n = c × V for each ion, then divide by the total volume (equal volumes halve each concentration; skipping this makes a 1 : 1 Qsp four times too big).',
	'Common ion: adding an ion already in the equilibrium raises Qsp above Ksp, so solid forms and solubility falls. Ksp is unchanged (only temperature changes it).',
	'Solubility with a common ion: the initial row is not zero. AgCl in 0.10 mol/L Cl^{−}: s × 0.10 ≈ Ksp, s = 1.77 × 10^{−9} mol/L (check s is under 5% of 0.10).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={31} aidTop={800} aids={['Dilute first. Then Qsp. Over Ksp, it falls out.']} tag="same powers as Ksp; Ksp at the same temperature" />
);
