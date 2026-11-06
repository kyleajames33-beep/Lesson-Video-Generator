// M8 P03 scenes 1 to 6: the hook (the student's plate, the unknown and the plain-water wells both cloud; tap water carries
// chloride; the blank saves the conclusion), the aim and plan (bottles A to D, the plan table, the variables card), blank,
// known, unknown (the control row on the plate, the three role entries, tap water crossed for distilled water), small
// scale (three drops and three of reagent, the dropper-tip inset, black card to white tile, grid labels), unknown C's
// cation (three control rows, the suspect strip, the flame station: blank flame, known calcium, the unknown, the match)
// and its anion (three control rows, zoom strips, the clear silver blank, the result).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BEAKER, FLAME, FLAME_A, Heading, NB, sc} from './common';
import {
	AChip, ANIONS8, Arrow, BLANKC, Bubbles, DBot, DrawPath, Dropper, FallDrop, Fade, FlaskStates, Framed, GOOD, GREYX, Glow, INK, INK_SOFT, KNOWNC, LBottle, LockLens, MistakeX, NAVY, Note,
	Overlay, PicF, R_AC, R_AG, R_CL, R_OH, R_SO, Suspects, Sx, TaskLine, UNKN, WBottle, WFill, WellAt, WellLens, WellPlate, WireLoop, Wr, natPt, picW, plateBox, plateG, smooth, vis, wr, wxy,
} from './parts';
import type {PG, Role, WKind} from './parts';

const ROLE: Role[] = ['blank', 'known', 'unk'];
const AGL = {label: 'Ag^{+}', fill: '#d4d4d0', ink: '#55554f', r: 20, size: 13};
const CLL = {label: 'Cl^{−}', fill: '#5aa469', ink: '#2f6b3c', r: 22, size: 14};

/** Three drops into a well from a dropper tip above it. */
const Drops3: React.FC<{g: PG; r: number; c: number; at: number; color?: string; every?: number}> = ({g, r, c, at, color = '#c9dcef', every = 10}) => {
	const [x, y] = wxy(g, r, c);
	return <>{[0, 1, 2].map(i => <FallDrop key={i} x={x} y0={y - wr(g) - 30} y1={y} at={at + i * every} color={color} s={1.1} />)}</>;
};
/** A reagent pill left of a plate row. */
const RPill: React.FC<{x: number; y: number; text: string; color: string; at?: number; dim?: number; size?: number}> = ({x, y, text, color, at = -1000, dim, size = 28}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 1 : 1 - 0.55 * prog(f, dim, 12);
	return <g opacity={d}><AChip x={x} y={y - 26} text={text} size={size} color={color} hand={false} at={at} /></g>;
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {test: 'testing unknown C', acid: 'acidifies', silver: 'adds silver nitrate', cloud: 'faint white cloud', q: 'Chloride', next: 'next well', plain: 'plain water', too: 'too', prove: 'prove anything', rinsed: "She'd rinsed", tap: 'tap water', little: 'little chloride', saved: 'saved'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g = plateG(530, 640, 800);
	const [ux, uy] = wxy(g, 0, 1), [bx, by] = wxy(g, 0, 0);
	const L1 = {x: 1250, y: 680}, L2 = {x: 1620, y: 680}, LR = 140;
	const bottlesOut = K1.rinsed;
	return (
		<>
			<Heading text="Unknown ions practical: would your answer stand up?" at={4} size={58} />
			<Overlay>
				<WellPlate g={g} />
				<WellAt g={g} r={0} c={1} kind="faint" at={K1.cloud} dur={40} role="unk" roleAt={K1.test} />
				<WellAt g={g} r={0} c={0} kind="faint" at={K1.too - 6} dur={40} role="blank" roleAt={K1.plain} />
				<Dropper x={ux} y={uy - wr(g) - 6} at={K1.test} out={K1.acid - 4} label="C" s={0.8} />
				<Dropper x={ux} y={uy - wr(g) - 6} at={K1.acid} out={K1.silver - 4} label="HNO₃" s={0.8} />
				<Dropper x={ux} y={uy - wr(g) - 6} at={K1.silver} out={K1.cloud + 30} label="AgNO₃" s={0.8} />
				<Drops3 g={g} r={0} c={1} at={K1.test + 14} />
				<Drops3 g={g} r={0} c={1} at={K1.acid + 14} color="#f3d7b0" />
				<Drops3 g={g} r={0} c={1} at={K1.silver + 14} color="#dfe3e8" />
				<Dropper x={bx} y={by - wr(g) - 6} at={K1.plain} out={K1.too + 20} label="water + reagents" s={0.8} />
				<Drops3 g={g} r={0} c={0} at={K1.plain + 14} />
				<Drops3 g={g} r={0} c={0} at={K1.plain + 50} color="#dfe3e8" />
				{/* the student's four bottles, then tap water */}
				<g opacity={1 - prog(f, bottlesOut, 14)}>
					{['A', 'B', 'C', 'D'].map((l, i) => <LBottle key={l} x={1060 + i * 195} y={200} h={230} letter={l} glow={l === 'C' ? [K1.test, K1.silver + 40] : undefined} />)}
				</g>
				<Fade at={bottlesOut + 6}>
					<WBottle x={1060} y={180} h={270} label="tap water" color="#a5531e" size={32} />
					<Sx x={1270} y={300} text="tap water carries" size={40} color={INK} hand weight={700} at={K1.tap} />
					<Sx x={1270} y={352} text="a little Cl^{−}" size={38} color="#2f6b3c" weight={800} at={K1.tap + 10} />
				</Fade>
				<LockLens cx={1720} cy={320} r={120} at={K1.tap} cat={AGL} an={CLL} n={4} arrive={K1.tap + 10} lockAt={K1.little} every={12} />
				{/* close-up lenses */}
				<line x1={ux} y1={uy} x2={L1.x - LR} y2={L1.y} stroke={UNKN} strokeWidth={3} strokeDasharray="8 8" opacity={0.6 * vis(f, K1.test)} />
				<line x1={bx} y1={by} x2={L2.x - LR * 0.7} y2={L2.y - LR * 0.7} stroke={BLANKC} strokeWidth={3} strokeDasharray="8 8" opacity={0.6 * vis(f, K1.next)} />
				<WellLens cx={L1.x} cy={L1.y} r={LR} kind="faint" fillAt={K1.cloud} dur={50} role="unk" at={4} seed={7} />
				<Sx x={L1.x} y={L1.y + LR + 46} text="unknown C" size={36} color={UNKN} anchor="middle" weight={800} at={4} />
				<Sx x={L1.x} y={L1.y + LR + 88} text="+ HNO₃ + AgNO₃" size={30} color={INK} anchor="middle" weight={700} at={K1.silver} />
				<WellLens cx={L2.x} cy={L2.y} r={LR} kind="faint" fillAt={K1.too - 6} dur={50} role="blank" at={K1.next - 10} seed={9} />
				<Sx x={L2.x} y={L2.y + LR + 46} text="plain water" size={36} color={INK} anchor="middle" weight={800} at={K1.plain} />
				<Sx x={L2.x} y={L2.y + LR + 88} text="+ the same reagents" size={30} color={INK} anchor="middle" weight={700} at={K1.plain + 10} />
				<Sx x={L1.x} y={L1.y - LR - 74} text="faint white cloud" size={34} color={INK} anchor="middle" hand weight={700} at={K1.cloud + 8} out={K1.q} />
				<MistakeX x={L1.x} y={L1.y - LR - 76} text="chloride?" at={K1.q} cross={K1.prove} size={36} anchor="middle" />
				<Sx x={L2.x} y={L2.y - LR - 30} text="cloudy too!" size={40} color={INK} anchor="middle" hand weight={700} at={K1.too + 4} />
				<AChip x={L2.x} y={L2.y + LR + 112} text="the blank" size={40} color={KNOWNC} anchor="middle" at={K1.saved} />
				<Glow cx={L2.x} cy={L2.y} rx={LR + 30} ry={LR + 30} at={K1.saved} len={50} />
				{void smooth}{void K1.rinsed}
			</Overlay>
		</>
	);
};

// ---------- 2. The aim and the plan ----------
const K2 = cues(sc('aim-plan'), {four: 'four unknown', one: 'one of each', plan: 'Plan before', list: 'list the tests', mean: 'would mean', row: 'every row', changes: 'changes', see: 'what you see', dep: 'dependent', same: 'stays the same'});
const PLAN: [string, string][] = [
	['dilute HCl', 'white ppt: Ag⁺, Pb²⁺'],
	['dilute H₂SO₄', 'white ppt: Ba²⁺, Ca²⁺'],
	['NaOH, then excess', 'ppt colour: Mg²⁺, Ca²⁺, Cu²⁺, Fe²⁺, Fe³⁺'],
	['flame', 'brick red: Ca²⁺; pale green: Ba²⁺'],
	['dilute HNO₃', 'fizz: CO₃²⁻'],
	['HNO₃, then BaCl₂', 'white ppt: SO₄²⁻'],
	['HNO₃, then AgNO₃', 'white, cream, yellow: Cl⁻, Br⁻, I⁻'],
];
const CTRL = ['3 drops of solution', '3 drops of reagent', 'same reagent bottle', 'same wait: at once, and after 1 min', 'same background', 'rinse with distilled water'];
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const CX = 1040, CY = 196, CW = 800;
	const slot = (t: number) => 0.85 + 0.15 * prog(f, t, 12);
	return (
		<Overlay>
			<TaskLine text="Aim: identify the cation and the anion in A to D" at={2} size={52} />
			{['A', 'B', 'C', 'D'].map((l, i) => <LBottle key={l} x={110 + i * 205} y={200} h={250} letter={l} glow={[K2.four + i * 6, K2.one + 20]} />)}
			<AChip x={110} y={470} text="each bottle: one cation + one anion" size={34} color={NAVY} hand={false} at={K2.one} />
			<Fade at={-1000}>
				<rect x={96} y={548} width={890} height={460} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<Sx x={124} y={600} text="Plan the test order first" size={38} color={NAVY} hand weight={700} at={-1000} />
				<AChip x={600} y={566} text="c03a + c03b flowcharts" size={26} color="#6d6457" hand={false} at={-1000} />
			</Fade>
			{PLAN.map(([t, m], i) => (
				<g key={i}>
					<Sx x={124} y={662 + i * 50} text={`${i + 1}. ${t}`} size={30} color={INK} weight={800} at={4 + i * 6} />
					<Sx x={444} y={662 + i * 50} text={`→ ${m}`} size={28} color={INK} weight={600} at={K2.mean - 20 + i * 6} />
				</g>
			))}
			<rect x={CX} y={CY} width={CW} height={812} rx={22} fill="#fffdf8" stroke={NAVY} strokeWidth={3.5} />
			<Sx x={CX + 30} y={CY + 56} text="Variables" size={46} color={NAVY} hand weight={700} at={-1000} />
			<g opacity={1 - prog(f, K2.same - 10, 12)}>
				<WellPlate g={plateG(CX + 590, 860, 360)} />
				{[0, 1, 2].map(c => <WellAt key={c} g={plateG(CX + 590, 860, 360)} r={0} c={c} kind={c === 1 ? 'white' : 'clear'} at={-1000} role={ROLE[c]} glow={K2.row + c * 8} />)}
			</g>
			{(['clear', 'white', 'q'] as WKind[]).map((k, i) => <WellLens key={i} cx={CX + 100 + i * 140} cy={CY + 150} r={56} kind={k} fillAt={-1000} role={ROLE[i]} label={['blank', 'known', 'C'][i]} size={28} />)}
			<Sx x={CX + 520} y={CY + 136} text="one row of wells:" size={32} color={INK} hand weight={700} at={-1000} />
			<Sx x={CX + 520} y={CY + 176} text="only the solution" size={32} color={INK} hand weight={700} at={-1000} />
			<Sx x={CX + 520} y={CY + 216} text="changes" size={32} color={INK} hand weight={700} at={-1000} />
			<Glow cx={CX + CW / 2} cy={CY + 150} rx={CW / 2} ry={90} at={K2.row} len={60} />
			<Sx x={CX + 30} y={CY + 318} text="Independent" size={38} color={KNOWNC} hand weight={700} at={-1000} opacity={slot(K2.changes)} />
			<Wr x={CX + 30} y={CY + 364} text="the solution in the well" at={K2.changes} size={40} color={INK} weight={800} />
			<Sx x={CX + 30} y={CY + 428} text="Dependent" size={38} color={KNOWNC} hand weight={700} at={-1000} opacity={slot(K2.dep)} />
			<Wr x={CX + 30} y={CY + 474} text="what you observe" at={K2.dep} size={40} color={INK} weight={800} />
			<Sx x={CX + 30} y={CY + 538} text="Controlled" size={38} color={KNOWNC} hand weight={700} at={-1000} opacity={slot(K2.same)} />
			{CTRL.map((c, i) => (
				<g key={i}>
					<Sx x={CX + 40} y={CY + 584 + i * 42} text="✓" size={30} color={GOOD} weight={800} at={K2.same + i * 9} />
					<Sx x={CX + 84} y={CY + 584 + i * 42} text={c} size={30} color={INK} weight={600} at={K2.same + i * 9} />
				</g>
			))}
			{void K2.see}
		</Overlay>
	);
};

// ---------- 3. Blank, known, unknown ----------
const K3 = cues(sc('blank-known-unknown'), {blank: 'A blank', neg: 'negative control', nochange: 'no change', ifit: 'If it does', tap: 'that tap water', known: 'A known', pos: 'positive control', works: 'test works', looks: 'looks like', row: 'one row', unknown: 'unknown', never: 'never tap'});
export const SceneControls: React.FC = () => {
	const f = useCurrentFrame();
	const g = plateG(500, 520, 760);
	const at = [K3.blank, K3.known, K3.unknown];
	const RX = 1000;
	const entries = [
		{t: 'blank (negative control)', a: 'distilled water + reagent', b: 'should show no change', c: BLANKC, at: K3.blank, bAt: K3.nochange, kind: 'clear' as WKind},
		{t: 'known (positive control)', a: 'a solution with the ion + reagent', b: 'e.g. NaCl(aq) for Cl⁻: shows a positive', c: KNOWNC, at: K3.known, bAt: K3.works, kind: 'white' as WKind},
		{t: 'unknown', a: 'same reagent, same drops', b: 'judged against both', c: UNKN, at: K3.unknown, bAt: K3.unknown + 20, kind: 'q' as WKind},
	];
	const [x0, y0] = wxy(g, 0, 0), [x2] = wxy(g, 0, 2);
	return (
		<Overlay>
			<TaskLine text="Controls: blank, known, unknown" at={2} size={52} />
			<WellPlate g={g} />
			{ROLE.map((r, c) => <WellAt key={c} g={g} r={0} c={c} kind={entries[c].kind} at={at[c] + 30} role={r} roleAt={at[c]} glow={at[c]} />)}
			{ROLE.map((_, c) => <Drops3 key={c} g={g} r={0} c={c} at={at[c] + 4} color="#dfe3e8" />)}
			<DrawPath d={`M${x0 - 30},${y0 + 46} Q${(x0 + x2) / 2},${y0 + 80} ${x2 + 30},${y0 + 46}`} at={K3.unknown + 10} dur={20} color={NAVY} width={5} />
			<Sx x={(x0 + x2) / 2} y={y0 + 118} text="compare" size={40} color={NAVY} anchor="middle" hand weight={700} at={K3.unknown + 20} />
			<AChip x={(x0 + x2) / 2} y={y0 + 140} text="one row per reagent" size={30} color={NAVY} anchor="middle" hand={false} at={K3.row} />
			{entries.map((e, i) => {
				const y = 230 + i * 230;
				const lit = 1;
				return (
					<g key={i}>
						<g opacity={lit}>
							<circle cx={RX + 58} cy={y + 30} r={52} fill="#1c1c1f" stroke={e.c} strokeWidth={6} />
							<WFill cx={RX + 58} cy={y + 30} r={38} kind={e.kind} p={prog(f, e.at + 30, 24)} seed={i + 3} />
							<Sx x={RX + 136} y={y + 20} text={e.t} size={42} color={e.c} weight={800} at={-1000} />
						</g>
						<Wr x={RX + 136} y={y + 72} text={e.a} at={e.at + 20} size={34} color={INK} weight={600} />
						<Wr x={RX + 136} y={y + 120} text={e.b} at={e.bAt} size={32} color={i === 0 ? GOOD : INK} weight={700} />
					</g>
				);
			})}
			<WBottle x={150} y={820} h={190} label="" />
			<Sx x={290} y={930} text="tap water" size={38} color="#a5531e" weight={800} at={-1000} />
			<Glow cx={200} cy={910} rx={110} ry={110} at={K3.tap} len={50} />
			<DrawPath d="M150,840 L420,1000" at={K3.never} dur={10} color="#c4432f" width={8} />
			<DrawPath d="M420,840 L150,1000" at={K3.never + 6} dur={10} color="#c4432f" width={8} />
			<WBottle x={560} y={820} h={190} label="" />
			<Sx x={700} y={910} text="distilled water" size={38} color={KNOWNC} weight={800} at={-1000} />
			<Sx x={700} y={956} text="low-ion rinse water" size={32} color={INK} weight={600} at={-1000} />
			<Glow cx={610} cy={910} rx={110} ry={110} at={K3.never + 10} />
			{void K3.neg}{void K3.ifit}{void K3.pos}{void K3.looks}
		</Overlay>
	);
};

// ---------- 4. Small scale ----------
const K4 = cues(sc('small-scale'), {plate: 'well plate', m5: 'Module 5', three: 'three drops', reag: 'three of reagent', less: 'less silver', waste: 'less waste', tip: 'dropper tip', bottle: 'a bottle', black: 'black card', white: 'white tile', colours: 'judge colours'});
/** Side view of a well with liquid and a coded dropper tip above (ok) or dipping into it (not ok). */
const TipPanel: React.FC<{x: number; y: number; ok: boolean; at: number; mark: number}> = ({x, y, ok, at, mark}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 12);
	if (v <= 0.01) return null;
	const tipY = ok ? y + 40 : y + 112;
	return (
		<g opacity={v}>
			<path d={`M${x - 90},${y + 90} L${x - 70},${y + 170} L${x + 70},${y + 170} L${x + 90},${y + 90}`} fill="#eef4f8" stroke={INK_SOFT} strokeWidth={4} />
			<path d={`M${x - 82},${y + 120} L${x - 70},${y + 168} L${x + 70},${y + 168} L${x + 82},${y + 120} Z`} fill="#bcd9ec" opacity={0.85} />
			<Dropper x={x} y={tipY} at={at} s={0.9} />
			{ok ? <DrawPath d={`M${x + 34},${y + 50} L${x + 34},${y + 112}`} at={mark} dur={10} color={GOOD} width={3} dash="5 5" /> : null}
			{ok ? <Sx x={x + 48} y={y + 90} text="gap" size={28} color={GOOD} hand weight={700} at={mark} /> : null}
			<path d={ok ? `M${x + 100},${y + 10} l14,16 l28,-34` : `M${x + 96},${y - 4} l40,40 M${x + 136},${y - 4} l-40,40`} fill="none" stroke={ok ? GOOD : '#c4432f'} strokeWidth={7} strokeLinecap="round" opacity={prog(f, mark, 10)} />
		</g>
	);
};
export const SceneSmall: React.FC = () => {
	const f = useCurrentFrame();
	const g = plateG(560, 600, 880);
	const white = prog(f, K4.white, 24);
	const [x, y] = wxy(g, 1, 1);
	const cnt = Math.min(3, Math.max(0, Math.floor((f - K4.three - 10) / 10) + 1));
	const cnt2 = Math.min(3, Math.max(0, Math.floor((f - K4.reag - 10) / 10) + 1));
	return (
		<Overlay>
			<TaskLine text="Small scale on a well plate" at={2} size={52} />
			<WellPlate g={g} white={white} grid={K4.colours + 14} />
			<WellAt g={g} r={1} c={1} kind="white" at={K4.reag + 30} dur={30} glow={K4.reag + 30} />
			<WellAt g={g} r={3} c={4} kind="blue" at={K4.white - 20} dur={30} />
			<WellAt g={g} r={3} c={5} kind="brown" at={K4.white - 10} dur={30} />
			<WellAt g={g} r={3} c={2} kind="white" at={K4.black - 30} dur={30} />
			<Dropper x={x} y={y - wr(g) - 8} at={K4.three - 10} out={K4.reag - 6} label="solution" s={0.9} />
			<Dropper x={x} y={y - wr(g) - 8} at={K4.reag - 4} out={K4.less} label="reagent" s={0.9} />
			<Drops3 g={g} r={1} c={1} at={K4.three + 6} />
			<Drops3 g={g} r={1} c={1} at={K4.reag + 10} color="#dfe3e8" />
			<Fade at={K4.three}>
				<rect x={1080} y={210} width={300} height={130} rx={18} fill="#fffdf8" stroke={NAVY} strokeWidth={3.5} />
				<Sx x={1230} y={300} text={`${Math.max(cnt, 0)} + ${Math.max(cnt2, 0)}`} size={64} color={NAVY} anchor="middle" weight={800} at={-1000} />
				<Sx x={1230} y={380} text="drops: solution + reagent" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
			</Fade>
			<DBot x={1500} y={190} h={300} tag="reagent: by the drop" size={28} />
			<AChip x={1080} y={530} text="less hazardous material, less waste" size={36} color={GOOD} hand={false} at={K4.less} />
			<Fade at={K4.tip - 10}>
				<rect x={1080} y={620} width={760} height={420} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<Sx x={1110} y={668} text="dropper tip" size={36} color={NAVY} hand weight={700} at={-1000} />
			</Fade>
			<TipPanel x={1260} y={790} ok at={K4.tip} mark={K4.tip + 30} />
			<Sx x={1260} y={1020} text="above the well" size={30} color={GOOD} anchor="middle" weight={800} at={K4.tip + 30} />
			<TipPanel x={1640} y={790} ok={false} at={K4.bottle - 30} mark={K4.bottle} />
			<Sx x={1640} y={1020} text="touches: carries solution back" size={28} color="#c4432f" anchor="middle" weight={800} at={K4.bottle} />
			<AChip x={110} y={970} text="Module 5 solubility practical: the same well plate" size={30} color="#6d6457" hand={false} at={K4.m5} out={K4.black - 6} />
			<AChip x={110} y={970} text="black card: white solids show" size={36} color={INK} hand={false} at={K4.black} out={K4.white} />
			<AChip x={110} y={970} text="white tile: colours show" size={36} color={R_OH} hand={false} at={K4.white} />
			{void K4.plate}{void K4.waste}{void plateBox}
		</Overlay>
	);
};

// ---------- 5. Unknown C: the cation ----------
const K5 = cues(sc('unknown-c-cation'), {fresh: 'fresh drops', hcl: 'hydrochloric', nvc: 'no visible change', silver: 'out silver', lead: 'usually lead', sulf: 'sulfuric', nob: 'not barium', naoh: 'Sodium hydroxide', white: 'white precipitate', more: 'add more', mg: 'to magnesium', samp: 'concentrated sample', flame: 'flame test', clean: 'Clean the loop', heat: 'heat it', blankf: 'blank flame', knownca: 'Known calcium', brick: 'brick red', again: 'Clean again', sample: 'then the sample', still: 'still no colour', notsup: "isn't supported", its: "It's magnesium", same: 'just the same'});
export const PG5 = plateG(700, 570, 800);
/** Ring legend above the plate: grey blank, teal known, navy unknown C. */
const Legend: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		{(['blank', 'known', 'unknown C'] as const).map((t, i) => (
			<g key={t}>
				<circle cx={x + i * 200 + 16} cy={y - 10} r={14} fill="#1c1c1f" stroke={[BLANKC, KNOWNC, UNKN][i]} strokeWidth={4} />
				<Sx x={x + i * 200 + 40} y={y} text={t} size={28} color={[BLANKC, KNOWNC, UNKN][i]} weight={800} at={-1000} />
			</g>
		))}
	</g>
);
export const RPILLS = [{t: 'dilute HCl', c: R_CL}, {t: 'dilute H₂SO₄', c: R_SO}, {t: 'NaOH', c: R_OH}, {t: 'dilute HNO₃', c: R_AC}, {t: 'HNO₃ + BaCl₂', c: R_SO}, {t: 'HNO₃ + AgNO₃', c: R_AG}];
export const CATION_FILLS = (t: {fresh: number; a: number; b: number; c: number}) => [
	{r: 0, c: 0, kind: 'clear' as WKind, at: t.fresh}, {r: 0, c: 1, kind: 'white' as WKind, at: t.fresh + 10}, {r: 0, c: 2, kind: 'clear' as WKind, at: t.a},
	{r: 1, c: 0, kind: 'clear' as WKind, at: t.fresh}, {r: 1, c: 1, kind: 'white' as WKind, at: t.fresh + 14}, {r: 1, c: 2, kind: 'clear' as WKind, at: t.b},
	{r: 2, c: 0, kind: 'clear' as WKind, at: t.fresh}, {r: 2, c: 1, kind: 'white' as WKind, at: t.fresh + 18}, {r: 2, c: 2, kind: 'white' as WKind, at: t.c},
];
export const SceneCation: React.FC = () => {
	const f = useCurrentFrame();
	const g = PG5;
	const FL = {x: 1440, y: 200, h: 720};
	const [fx, fy] = natPt(FLAME.off, FL.x, FL.y, FL.h, FLAME_A.cx, 620);
	const BK = {x: 1160, y: 700, h: 170};
	const bkx = BK.x + picW(BEAKER, BK.h) / 2, bky = BK.y + BK.h * 0.45;
	const KCA = {x: 1800, y: 640}, KC = {x: 1800, y: 800};
	const pts: [number, number, number][] = [
		[K5.flame - 10, bkx + 30, bky - 120], [K5.clean, bkx, bky], [K5.heat, fx, fy], [K5.knownca - 6, fx, fy], [K5.knownca + 14, KCA.x, KCA.y - 10],
		[K5.brick - 16, fx, fy], [K5.again, bkx, bky], [K5.again + 16, fx, fy], [K5.sample, KC.x, KC.y - 10], [K5.sample + 22, fx, fy],
	];
	const fills = CATION_FILLS({fresh: K5.fresh, a: K5.nvc, b: K5.nob - 20, c: K5.white});
	const ca = vis(f, K5.again + 6, undefined, 14);
	return (
		<>
			<Overlay>
				<TaskLine text="Unknown C: the cation" at={2} size={52} />
				<WellPlate g={g} />
				{fills.map((w, i) => <WellAt key={i} g={g} r={w.r} c={w.c} kind={w.kind} at={w.at} role={ROLE[w.c]} roleAt={-1000} glow={w.c === 2 ? w.at : undefined} />)}
				{RPILLS.slice(0, 3).map((p, i) => <RPill key={i} x={96} y={wxy(g, i, 0)[1]} text={p.t} color={p.c} />)}
				<Legend x={330} y={240} />
				<Wr x={96} y={910} text="HCl: no visible change → not Ag⁺ (Pb²⁺ unlikely)" at={K5.nvc} size={32} color={R_CL} />
				<Wr x={96} y={958} text="H₂SO₄: no change → not Ba²⁺" at={K5.nob - 10} size={32} color={R_SO} />
				<Wr x={96} y={1006} text="NaOH: white ppt, stays in excess → Mg²⁺ or conc. Ca²⁺" at={K5.more} size={32} color={R_OH} />
				<Drops3 g={g} r={2} c={2} at={K5.more - 8} color="#dfe3e8" />
				{/* the match */}
				<Fade at={K5.same - 10}>
					<Sx x={(wxy(g, 2, 1)[0] + wxy(g, 2, 2)[0]) / 2} y={wxy(g, 2, 1)[1] + 12} text="=" size={46} color={GOOD} anchor="middle" weight={800} at={-1000} />
				</Fade>
				<Glow cx={wxy(g, 2, 1)[0] + 38} cy={wxy(g, 2, 1)[1]} rx={110} ry={50} at={K5.same} len={60} />
				{/* the flame station */}
				<FlaskStates x={FL.x} y={FL.y} h={FL.h} states={[{p: FLAME.off, at: -100}, {p: FLAME.blue, at: K5.heat, dur: 14}, {p: FLAME.ca, at: K5.brick - 12, dur: 16}, {p: FLAME.blue, at: K5.again + 10, dur: 16}]} />
				<PicF p={BEAKER} x={BK.x} y={BK.y} h={BK.h} />
				<rect x={BK.x + 30} y={BK.y + BK.h * 0.4} width={picW(BEAKER, BK.h) - 60} height={BK.h * 0.5} rx={8} fill="#f3e3c4" opacity={0.5} />
				<Sx x={bkx} y={BK.y + BK.h + 36} text="dilute HCl" size={28} color={INK} anchor="middle" weight={800} at={-1000} />
				<circle cx={KCA.x} cy={KCA.y} r={44} fill="#1c1c1f" stroke={KNOWNC} strokeWidth={5} opacity={vis(f, K5.knownca - 20)} />
				<WFill cx={KCA.x} cy={KCA.y} r={32} kind="clear" p={prog(f, K5.knownca - 20, 20)} />
				<Sx x={KCA.x} y={KCA.y + 84} text="known Ca²⁺" size={28} color={KNOWNC} anchor="middle" weight={800} at={K5.knownca - 20} />
				<circle cx={KC.x} cy={KC.y} r={44} fill="#1c1c1f" stroke={UNKN} strokeWidth={5} opacity={vis(f, K5.again)} />
				<WFill cx={KC.x} cy={KC.y} r={32} kind="clear" p={prog(f, K5.again, 20)} />
				<Sx x={KC.x} y={KC.y + 84} text="C" size={30} color={UNKN} anchor="middle" weight={800} at={K5.again} />
				<WellLens cx={1290} cy={430} r={115} kind="white" fillAt={K5.white} at={K5.naoh - 10} out={K5.flame - 10} role="unk" label="C + NaOH" size={30} />
				<Sx x={1290} y={620} text="stays in excess" size={30} color={INK} anchor="middle" hand weight={700} at={K5.more} out={K5.flame - 10} />
				<WireLoop at={K5.flame - 10} pts={pts} hot={K5.heat} />
				<Sx x={1150} y={250} text="flame test" size={44} color={R_AC} hand weight={700} at={K5.flame} />
				<Wr x={1150} y={960} text="blank flame:" at={K5.blankf} size={36} color={INK} />
				<Wr x={1390} y={960} text="no colour" at={K5.blankf + 8} size={36} color={INK} out={K5.knownca} />
				<Wr x={1150} y={1010} text="known Ca²⁺: brick red (the test works)" at={K5.brick} size={32} color="#b83a1e" out={K5.still} />
				<Wr x={1150} y={1010} text="C: still no colour" at={K5.still} size={34} color={UNKN} />
				<g opacity={ca}>
					<PicF p={FLAME.ca} x={1170} y={300} h={330} />
					<Sx x={1170 + picW(FLAME.ca, 330) / 2} y={668} text="known Ca²⁺" size={28} color="#b83a1e" anchor="middle" weight={800} at={-1000} />
				</g>
				<AChip x={1150} y={1030} text="Ca²⁺ not supported at this concentration" size={28} color={INK} hand={false} at={K5.notsup} />
				<AChip x={1150} y={180} text="known Mg²⁺: the same" size={34} color={GOOD} hand={false} at={K5.same} />
				{void K5.hcl}{void K5.lead}{void K5.sulf}{void K5.naoh}{void K5.mg}{void K5.samp}{void K5.its}{void Arrow}
			</Overlay>
			<Suspects st={{
				'Ag^{+}': {x: K5.silver}, 'Pb^{2+}': {faint: K5.lead}, 'Ba^{2+}': {x: K5.nob}, 'Cu^{2+}': {x: K5.white + 20}, 'Fe^{2+}': {x: K5.white + 26}, 'Fe^{3+}': {x: K5.white + 32},
				'Mg^{2+}': {g: [[K5.mg, K5.flame], [K5.its, 1e9]]}, 'Ca^{2+}': {g: [[K5.mg + 20, K5.flame]], x: K5.notsup},
			}} />
			<Overlay><Sx x={1215} y={110} text="usually: dilute Pb²⁺ may pass" size={26} color={INK} anchor="middle" weight={700} at={K5.lead} out={K5.naoh} /></Overlay>
		</>
	);
};

// ---------- 6. Unknown C: the anion ----------
const K6 = cues(sc('unknown-c-anion'), {fresh: 'fresh drops', nitric: 'Dilute nitric', fizz: 'no fizz', carb: 'no carbonate', ba: 'barium chloride', white: 'white precipitate', stays: 'stays in the acid', sulf: 'so sulfate', silver: 'silver nitrate', rinsed: 'plate rinsed', clear: 'stays clear', doesC: 'does unknown C', after: 'after all', each: 'Each bottle', mgso4: 'magnesium sulfate'});
const Strip: React.FC<{x: number; y: number; title: string; color: string; kinds: WKind[]; at: number[]; res: string[]; resAt: number; tick?: number; fizz?: [number, number]}> = ({x, y, title, color, kinds, at, res, resAt, tick, fizz}) => {
	const f = useCurrentFrame();
	const v = 1;
	const R = 48;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={710} height={200} rx={18} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
			<Sx x={x + 24} y={y + 42} text={title} size={30} color={color} weight={800} at={-1000} />
			{kinds.map((k, i) => {
				const cx = x + 70 + i * 116, cy = y + 112;
				return (
					<g key={i}>
						<circle cx={cx} cy={cy} r={R} fill="#1c1c1f" stroke={[BLANKC, KNOWNC, UNKN][i]} strokeWidth={5} />
						<WFill cx={cx} cy={cy} r={R * 0.72} kind={k} p={prog(f, at[i], 24)} seed={i + 11} />
						<Sx x={cx} y={cy + R + 26} text={['blank', 'known', 'C'][i]} size={24} color={[BLANKC, KNOWNC, UNKN][i]} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			{fizz ? <Bubbles x={x + 190} y={y + 140} at={fizz[0]} n={7} spread={50} rise={80} color="#ffffff" /> : null}
			{tick !== undefined ? <DrawPath d={`M${x + 40},${y + 84} l12,14 l22,-28`} at={tick} dur={10} color={GOOD} width={5} /> : null}
			{tick !== undefined ? <DrawPath d={`M${x + 280},${y + 84} l12,14 l22,-28`} at={tick + 10} dur={10} color={GOOD} width={5} /> : null}
			{res.map((r, i) => <Wr key={i} x={x + 372} y={y + 96 + i * 46} text={r} at={resAt + i * 12} size={30} color={i ? INK : color} weight={800} />)}
		</g>
	);
};
export const SceneAnion: React.FC = () => {
	const f = useCurrentFrame();
	const g = PG5;
	const old = CATION_FILLS({fresh: -1000, a: -1000, b: -1000, c: -1000});
	return (
		<>
			<Overlay>
				<TaskLine text="Unknown C: the anion" at={2} size={52} />
				<WellPlate g={g} />
				<g opacity={0.45}>{old.map((w, i) => <WellAt key={i} g={g} r={w.r} c={w.c} kind={w.kind} at={-1000} role={ROLE[w.c]} />)}</g>
				{[[3, 'clear', 'clear', 'clear', K6.fizz], [4, 'clear', 'white', 'white', K6.white], [5, 'clear', 'white', 'clear', K6.clear]].map(([r, a, b, c, t]) => (
					<g key={r as number}>
						<WellAt g={g} r={r as number} c={0} kind={a as WKind} at={(t as number) - 30} role="blank" roleAt={(t as number) - 40} />
						<WellAt g={g} r={r as number} c={1} kind={b as WKind} at={(t as number) - 20} role="known" roleAt={(t as number) - 40} />
						<WellAt g={g} r={r as number} c={2} kind={c as WKind} at={t as number} role="unk" roleAt={(t as number) - 40} glow={t as number} />
					</g>
				))}
				{RPILLS.map((p, i) => <RPill key={i} x={96} y={wxy(g, i, 0)[1]} text={p.t} color={p.c} dim={i < 3 ? -1000 : undefined} />)}
				<Legend x={330} y={240} />
				<Strip x={1140} y={196} title="dilute HNO₃" color={R_AC} kinds={['clear', 'clear', 'clear']} at={[K6.nitric, K6.nitric + 8, K6.fizz - 10]} res={['no fizz: not CO₃²⁻', '(known CO₃²⁻ fizzes)']} resAt={K6.fizz} fizz={[K6.nitric + 16, 1e9]} />
				<Strip x={1140} y={416} title="HNO₃, then BaCl₂" color={R_SO} kinds={['clear', 'white', 'white']} at={[K6.ba - 10, K6.ba, K6.white]} res={['white, stays in acid', 'SO₄²⁻']} resAt={K6.stays} />
				<Strip x={1140} y={636} title="HNO₃, then AgNO₃" color={R_AG} kinds={['clear', 'white', 'clear']} at={[K6.clear - 6, K6.silver + 20, K6.doesC]} res={['blank and C clear', 'no Cl⁻ after all']} resAt={K6.doesC} tick={K6.clear} />
				<AChip x={1140} y={850} text="rinsed in distilled water" size={30} color={KNOWNC} hand={false} at={K6.rinsed} />
				<Fade at={K6.after - 6} out={K6.each + 30}>
					<g opacity={0.8}>
						<WellLens cx={1700} cy={960} r={44} kind="faint" fillAt={-1000} role="unk" />
						<WellLens cx={1810} cy={960} r={44} kind="faint" fillAt={-1000} role="blank" />
					</g>
					<MistakeX x={1140} y={1010} text="the hook: tap-water rinse" at={K6.after} cross={K6.after + 14} size={28} />
				</Fade>
				<Framed x={96} y={1000} text="Unknown C: Mg²⁺ and SO₄²⁻ (magnesium sulfate)" at={K6.mgso4 - 6} size={42} color={UNKN} />
				<Sx x={96} y={920} text="one anion per bottle: stop once sulfate is found" size={34} color={INK} weight={700} at={K6.each} />
				{void K6.fresh}{void K6.carb}{void K6.sulf}{void K6.rinsed}{void NB}{void GREYX}{void Note}{void INK}
			</Overlay>
			<Suspects ions={ANIONS8} fs={26} st={{'CO_3^{2−}': {x: K6.carb}, 'SO_4^{2−}': {g: [[K6.sulf, 1e9]]}, 'Cl^{−}': {x: K6.after}}} />
		</>
	);
};
