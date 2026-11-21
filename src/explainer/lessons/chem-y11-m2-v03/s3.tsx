// Y11 Chem M2 V03 scenes 13 to 18: two HSC-style attempts (whole card with a neutral painted picture: the dish of dry
// ice, a watch glass of white solid; ring full from "Pause here", 10 s countdown; no equation strip on the cards),
// brief feedback (navy givens strip, the equation strip back above the working, green framed answers, one red crossed
// slip each), the handoff (the final frame: "MM = m ÷ n" large at the centre, "m: weigh it" with the balance,
// "n: find it another way?", the ribbon and the conical flask each with "MM = ?", and the "Next" chip) and the key
// notes with the memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AR, D, DRYICE, FLASK, MM, RES, RIBBON, WG_SALT, dur, fix, hold, mm, ph, pw, sc} from './common';
import {
	AMB_S, AMB_T, Card, Chip, Fade, Framed, GREEN_S, Givens, INK, NAVY_T, PAPER, PauseHoldR, PenRing, Plate, QTag, RED_T, Reveal, Rich, SVG, SmallBridge, Sx, TEAL_S,
	TEAL_T, TickMark, Write, balGeo, Balance, lerp, prog, richW, span,
} from './parts';
import type {Seg} from './parts';
import {RuleBox, UnitsLine} from './s2';

const Q: React.FC<{lines: Seg[][]; y0?: number; lh?: number; size?: number}> = ({lines, y0 = 300, lh = 84, size = 50}) => <>{lines.map((l, i) => <Rich key={i} x={150} y={y0 + i * lh} segs={l} size={size} weight={700} />)}</>;
const N_EQ: Seg[] = [{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'MM', c: TEAL_T}];
const M_EQ: Seg[] = [{t: 'm', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'MM', c: TEAL_T}];
const AR_CO2 = `C = ${fix(AR.C, 2)}, O = ${fix(AR.O, 2)}`;
const AR_CA = `Ca = ${fix(AR.Ca, 2)}, O = ${fix(AR.O, 2)}, H = ${fix(AR.H, 3)}`;

// ---------- 13. attempt 1 ----------
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const w = 680;
	return (
		<SVG>
			<Write x={96} y={150} text="Your turn" at={0} size={60} color={INK} />
			<QTag />
			<Card h={700} />
			<Q lines={[[{t: 'Calculate the chemical amount, in moles,'}], [{t: `of carbon dioxide in ${fix(D.a1, 1)} g of CO_2.`}], [{t: `(${AR_CO2})`}]]} y0={320} lh={80} />
			<Plate p={DRYICE} x={1800 - w} y={560} h={ph(DRYICE, w)} />
			<PauseHoldR h={hold('attempt-1')} at={K13.pause} x={150} y={800} cx={1000} cy={740} />
			{void K13.turn}
		</SVG>
	);
};

// ---------- 14. feedback 1 ----------
const K14 = cues(sc('feedback-1'), {mm: 'The molar mass', mole1: ['mole', 1], so: 'So n equals', moles: 'two five zero moles', mult: 'Multiplying', cant: "can't be right", mole2: ['mole', 2]});
export const SceneFeedback1: React.FC = () => {
	const r1: Seg[] = [{t: 'MM(CO_2) = '}, {t: `${fix(AR.C, 2)} + 2 × ${fix(AR.O, 2)} = `}, {t: mm(MM.CO2), c: TEAL_T}];
	const r2: Seg[] = [{t: 'n = '}, {t: fix(D.a1, 1), c: NAVY_T}, {t: ' ÷ '}, {t: fix(MM.CO2, 2), c: TEAL_T}];
	return (
		<SVG>
			<Write x={96} y={150} text="Your turn" at={-1000} size={60} color={INK} />
			<Givens segs={[{t: `m = ${fix(D.a1, 1)} g of CO_2     |     ${AR_CO2}`}]} />
			<RuleBox segs={N_EQ} at={-1000} x={96} y={290} w={560} />
			<Plate p={DRYICE} x={1280} y={300} h={ph(DRYICE, 540)} />
			<Sx x={1550} y={680} text="carbon dioxide (dry ice)" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Reveal at={K14.mm} dur={50}><Rich x={96} y={500} segs={r1} size={50} /></Reveal>
			<Reveal at={K14.so} dur={40}><Rich x={96} y={610} segs={r2} size={56} /></Reveal>
			<Framed x={96} y={740} segs={[{t: `= ${fix(RES.a1, 3)} mol`, c: AMB_T}]} at={K14.moles} size={56} stroke={GREEN_S} />
			<Chip x={96} y={800} segs={[{t: `${fix(D.a1, 1)} × ${fix(MM.CO2, 2)} = ${Math.round(RES.a1wrong)} mol`}]} at={K14.mult} size={42} color={RED_T} strike={K14.cant} />
			<Write x={720} y={845} text="units: g × g mol^{−1} isn't mol" at={K14.cant + 8} size={46} color={RED_T} />
			<Write x={720} y={925} text={`${fix(D.a1, 1)} g is far less than one mole`} at={K14.mole2 - 20} size={42} color={INK} />
			{void K14.mole1}
		</SVG>
	);
};

// ---------- 15. attempt 2 ----------
const K15 = cues(sc('attempt-2'), {last: 'Last one', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const w = 680;
	return (
		<SVG>
			<Write x={96} y={150} text="Last one" at={0} size={60} color={INK} />
			<QTag />
			<Card h={700} />
			<Q lines={[[{t: `Calculate the mass of ${fix(D.a2, 3)} mol of`}], [{t: 'calcium hydroxide, Ca(OH)_2.'}], [{t: `(${AR_CA})`}]]} y0={320} lh={80} />
			<Plate p={WG_SALT} x={1800 - w} y={600} h={ph(WG_SALT, w)} />
			<PauseHoldR h={hold('attempt-2')} at={K15.pause} x={150} y={800} cx={1000} cy={740} />
			{void K15.last}
		</SVG>
	);
};

// ---------- 16. feedback 2 ----------
const K16 = cues(sc('feedback-2'), {bracket: 'The bracket doubles', mole: 'grams per mole', mass: 'Mass equals', grams: 'eleven point one grams', ignoring: 'Ignoring', avoid: 'avoid'});
export const SceneFeedback2: React.FC = () => {
	const r1: Seg[] = [{t: 'MM = '}, {t: `${fix(AR.Ca, 2)} + 2 × (${fix(AR.O, 2)} + ${fix(AR.H, 3)}) = `}, {t: mm(MM.CaOH2), c: TEAL_T}];
	const r2: Seg[] = [{t: 'm = '}, {t: fix(D.a2, 3), c: AMB_T}, {t: ' × '}, {t: fix(MM.CaOH2, 2), c: TEAL_T}];
	const wrong = `MM = ${fix(AR.Ca, 2)} + ${fix(AR.O, 2)} + ${fix(AR.H, 3)} = ${fix(MM.CaOH2wrong, 2)};  m = ${fix(RES.a2wrong, 2)} g`;
	return (
		<SVG>
			<Write x={96} y={150} text="Last one" at={-1000} size={60} color={INK} />
			<Givens segs={[{t: `n = ${fix(D.a2, 3)} mol of Ca(OH)_2     |     ${AR_CA}`}]} />
			<RuleBox segs={M_EQ} at={-1000} x={96} y={290} w={560} />
			<Rich x={760} y={356} segs={[{t: 'Ca'}, {t: '(OH)_2', c: AMB_T}]} size={60} />
			<line x1={760 + 70} x2={760 + 230} y1={378} y2={378} stroke={AMB_S} strokeWidth={6} strokeLinecap="round" />
			<Write x={1010} y={356} text="the 2 doubles O and H" at={K16.bracket + 6} size={44} color={AMB_T} />
			<Plate p={WG_SALT} x={1280} y={600} h={ph(WG_SALT, 540)} />
			<Reveal at={K16.bracket + 20} dur={60}><Rich x={96} y={500} segs={r1} size={48} /></Reveal>
			<Reveal at={K16.mass} dur={40}><Rich x={96} y={620} segs={r2} size={56} /></Reveal>
			<Framed x={96} y={750} segs={[{t: `= ${fix(RES.a2, 1)} g`, c: NAVY_T}]} at={K16.grams} size={56} stroke={GREEN_S} />
			<Chip x={96} y={800} segs={[{t: wrong}]} at={K16.ignoring} size={40} color={RED_T} strike={K16.avoid} />
			<Write x={96} y={930} text="the 2 multiplies everything in the bracket" at={K16.avoid + 4} size={46} color={RED_T} />
			{void K16.mole}
		</SVG>
	);
};

// ---------- 17. handoff: when you don't know the formula (final frame; chem-y11-m2-v04 opens on it) ----------
const K17 = cues(sc('handoff'), {every: 'Every molar mass', but: 'But what if', turn: 'Turn the equation', mm: 'Molar mass equals', weigh: 'Weighing gives', if: 'If we can find', mass: 'measure the molar mass', next: 'Next time', does: 'does'});
export const NEXT17 = 'Next: How can a practical determine molar mass?';
export const EQ17 = {x: 960, y: 440, size: 130};
export const BAL17 = {x: 600, y: 640, h: 280};
export const RIB17 = {x: 100, y: 560, w: 400};
export const FL17 = {cx: 1660, y: 400, w: 280};
/** Tag positions: m tag, its tick, n tag, the big question mark (x, y, size). */
export const TAGS17 = {m: [600, 600] as [number, number], tick: [880, 582] as [number, number], n: [1010, 600] as [number, number], q: [1250, 860, 200] as [number, number, number]};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const turn = span(f, K17.turn, K17.turn + 40);
	const eqN: Seg[] = [{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'MM', c: TEAL_T}];
	const eqMM: Seg[] = [{t: 'MM', c: TEAL_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'n', c: AMB_T}];
	const g = balGeo(BAL17.x, BAL17.y, BAL17.h);
	const rh = ph(RIBBON, RIB17.w), fh = ph(FLASK, FL17.w);
	const nextO = prog(f, K17.next, 14);
	const eqW = richW(eqMM, EQ17.size), nW = richW([{t: 'n'}], EQ17.size);
	const nX = EQ17.x + eqW / 2 - nW / 2;
	return (
		<SVG>
			<Write x={96} y={150} text="When you don't know the formula" at={4} size={60} color={INK} />
			<SmallBridge />
			<g opacity={1 - turn}><Rich x={EQ17.x} y={EQ17.y} segs={eqN} size={EQ17.size} anchor="middle" /></g>
			<g opacity={turn}><Rich x={EQ17.x} y={EQ17.y} segs={eqMM} size={EQ17.size} anchor="middle" /></g>
			<Sx x={EQ17.x} y={250} text="every molar mass so far: from a formula" size={38} color={INK} anchor="middle" weight={800} at={K17.every + 10} out={K17.turn} />
			{/* m: weigh it */}
			<Write x={TAGS17.m[0]} y={TAGS17.m[1]} text="m: weigh it" at={K17.weigh} size={52} color={NAVY_T} />
			<TickMark x={TAGS17.tick[0]} y={TAGS17.tick[1]} at={K17.weigh + 16} s={1.4} />
			<g opacity={prog(f, K17.weigh, 14)}>
				<Balance g={g} text="? g" />
			</g>
			{/* n: find it another way? */}
			<Write x={TAGS17.n[0]} y={TAGS17.n[1]} text="n: find it another way?" at={K17.mass} size={52} color={AMB_T} />
			<Sx x={TAGS17.q[0]} y={TAGS17.q[1]} text="?" size={TAGS17.q[2]} color={AMB_T} anchor="middle" weight={800} at={K17.mass + 10} />
			<PenRing cx={nX} cy={EQ17.y - 42} rx={nW / 2 + 28} ry={84} at={K17.if} color={AMB_S} seed={4} />
			{/* the two samples */}
			<Fade at={K17.mm}>
				<Plate p={RIBBON} x={RIB17.x} y={RIB17.y} h={rh} />
				<Sx x={RIB17.x + RIB17.w / 2} y={RIB17.y + rh + 50} text="an element" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={RIB17.x + RIB17.w / 2} y={RIB17.y + rh + 104} text="MM = ?" size={48} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
				<Plate p={FLASK} x={FL17.cx - FL17.w / 2} y={FL17.y} h={fh} />
				<rect x={FL17.cx - FL17.w * 0.34} y={FL17.y + fh * 0.8} width={FL17.w * 0.68} height={fh * 0.12} rx={10} fill="#c9a2d8" opacity={0.6} />
				<Sx x={FL17.cx} y={FL17.y + fh + 44} text="an unknown liquid" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={FL17.cx} y={FL17.y + fh + 96} text="MM = ?" size={48} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{nextO > 0.005 ? (
				<g opacity={nextO}>
					<rect x={96} y={190} width={1300} height={84} rx={22} fill={PAPER} stroke={NAVY_T} strokeWidth={5} />
					<Sx x={126} y={246} text={NEXT17} size={46} color={NAVY_T} weight={800} at={-1000} />
				</g>
			) : null}
			{void K17.but}{void K17.does}{void lerp}{void pw}
		</SVG>
	);
};

// ---------- 18. key notes ----------
const NOTE_SIZE = 36;
export const NOTES: Seg[][][] = [
	[[{t: 'Molar mass MM', c: TEAL_T}, {t: ': the mass of one mole ('}, {t: 'g mol^{−1}', c: TEAL_T}, {t: ').'}], [{t: '1 mol of Mg atoms = '}, {t: `${fix(AR.Mg, 2)} g`, c: NAVY_T}, {t: '.'}]],
	[[{t: 'Compounds: add every atom. '}, {t: `H_2O ${fix(MM.H2O, 2)}; O_2 ${fix(MM.O2, 2)}`, c: TEAL_T}], [{t: `Ca(OH)_2 ${fix(MM.CaOH2, 2)} g mol^{−1}`, c: TEAL_T}]],
	[[{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'MM', c: TEAL_T}, {t: ';  '}, {t: 'm', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'MM', c: TEAL_T}, {t: '   (g ÷ g mol^{−1} = mol)'}]],
	[[{t: 'Same mass is not same amount: '}], [{t: `${D.pred} g Mg = ${fix(RES.mgN, 2)} mol; ${D.pred} g Cu = ${fix(RES.cuN, 2)} mol`, c: AMB_T}]],
	[[{t: 'mass', c: NAVY_T}, {t: ' → ÷ MM → '}, {t: 'moles', c: AMB_T}, {t: ' → × N_A → '}, {t: 'particles', c: NAVY_T}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const DUR = dur('key-notes');
	const outA = DUR - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 52 + 30;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={INK} />
				{lines.map((l, k) => <Rich key={k} x={140} y={y0 + k * 52} segs={l} size={NOTE_SIZE} weight={700} />)}
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
					<rect x={1240} y={262} width={584} height={470} rx={22} fill={PAPER} stroke={INK} strokeWidth={4} />
					<rect x={1250} y={272} width={564} height={450} rx={16} fill="none" stroke={INK} strokeWidth={2} />
					<Sx x={1276} y={320} text="memory aid" size={34} color={INK} hand weight={700} at={-1000} />
					<Sx x={1276} y={420} text="Let the units decide:" size={52} color={INK} hand weight={700} at={-1000} />
					<UnitsLine x={1290} y={540} size={60} strikeAt={-1000} />
					<Sx x={1276} y={660} text="grams ÷ grams per mole" size={34} color={INK} weight={700} at={-1000} />
					<Sx x={1276} y={700} text="leaves moles" size={34} color={AMB_T} weight={800} at={-1000} />
				</Fade>
			</Fade>
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
void TEAL_S; void Chip;
