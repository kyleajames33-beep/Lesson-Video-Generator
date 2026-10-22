// M6 G02 scenes 5a to 7: question 4 (two amphiprotic ions: each ion's two reactions with water, Ka against
// Kb = Kw ÷ Ka of the acid one proton up, the prediction; the crossed mistake takes Kb from the ion's own Ka), the
// decision board with the handoff to C11, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {BEAKER} from './assets';
import {Question4, q4Marks} from './questions';
import {G, Head} from './s1';
import {
	AChip, AMBER, AnsPanel, BASE_INK, Checks, DimG, EmptyBox, EqLine, Fade, Fork, GLOW, GTag, HscTag, INK, INK_SOFT, KeyNotesBoard, MistakeX, Note, Overlay, PROTON_INK, PairBracket, PauseHold,
	PlateAt, QGroup, Ring, Sx, TEAL, TaskLine, WLine, P, eSpan, eq, fitSize, mw,
} from './parts';
import type {ARow, ForkSide, QMark} from './parts';

const ALL = -100;

// ---------- 5a. Question 4 ----------
const KQ4 = cues(sc('q4-question'), {q: 'Question four', hco3: 'The hydrogen carbonate', dihyd: 'the dihydrogen phosphate', amphi: 'both amphiprotic', write: 'Write an equation', use: 'Use the K', predict: 'predict whether', pause: 'Pause here to answer'});
export const SceneQ4: React.FC = () => (
	<Overlay>
		<TaskLine text="Question 4" at={KQ4.q} />
		<HscTag at={KQ4.q} />
		<Question4 t={[KQ4.hco3, KQ4.dihyd, KQ4.amphi + 10, KQ4.write, KQ4.use, KQ4.predict]} />
		<EmptyBox x={140} y={790} w={620} h={120} at={KQ4.write + 20} label="(a)" />
		<EmptyBox x={790} y={790} w={420} h={120} at={KQ4.use + 20} label="(b)" />
		<EmptyBox x={1240} y={790} w={300} h={120} at={KQ4.predict + 20} label="(c)" />
		<PauseHold h={hold('q4-question')} at={KQ4.pause} x={140} y={968} cx={1710} cy={850} />
		<Checks hold={hold('q4-question')} />
	</Overlay>
);

// ---------- Q4 walkthrough geometry ----------
const K4 = 0.5;
const Q4Strip: React.FC<{marks: QMark[]; anim?: boolean}> = ({marks, anim = false}) => (
	<QGroup k={K4} anim={anim}><Question4 t={[ALL, ALL, ALL, ALL, ALL, ALL]} marks={marks} /></QGroup>
);
const FK = {cx: 700, cy: 700, arm: 290};
const CHAIN_Y = 545, WL = [850, 912];
/** A proton chain (three species) centred at cx; returns items and size for brackets and rings. */
const chainItems = (a: string, b: string, c: string, at: number) => eq([a, '<=>', b, '<=>', c], at, at);
const Chain: React.FC<{items: ReturnType<typeof chainItems>; cx: number; y: number; size: number; dim?: number; ringAt?: number; ringLabel?: string; bracketAt?: number; bracketLabel?: string; above?: boolean}> = ({items, cx, y, size, dim, ringAt, ringLabel, bracketAt, bracketLabel, above = false}) => {
	const W = eSpan(items, items.length - 1, size, 0).x2;
	const x0 = cx - W / 2;
	const s0 = eSpan(items, 0, size, x0);
	return (
		<DimG at={dim ?? 1e9} to={0.3}>
			<EqLine items={items} x={x0} y={y} size={size} />
			{ringAt !== undefined ? <Ring cx={s0.cx} cy={y - size * 0.32} rx={(s0.x2 - s0.x1) / 2 + 6} ry={size * 0.7} at={ringAt} color={AMBER} seed={4} /> : null}
			{ringAt !== undefined && ringLabel ? <Note x={s0.x1 - 26} y={y - 4} text={ringLabel} size={30} color={INK_SOFT} anchor="end" at={ringAt + 8} /> : null}
			{bracketAt !== undefined ? <PairBracket items={items} i={0} j={2} size={size} x={x0} y={y} at={bracketAt} above={above} color={TEAL} label={bracketLabel} lsize={28} gap={14} /> : null}
		</DimG>
	);
};
/** Full equation on the working line (fitted to the left area). */
const WorkEq: React.FC<{parts: string[]; at: number; out: number}> = ({parts, at, out}) => {
	const items = eq(parts, at, at);
	const s = Math.min(36, fitSize(items, 1080, 36));
	return <Fade at={at} out={out}><EqLine items={items} x={140} y={WL[0]} size={s} /></Fade>;
};
const HCO3_ROWS = (t: [number, number, number, number], dimAll?: number): ARow[] => [
	{label: '(a)', t: 'HCO_3^{-} + H_2O ⇌ CO_3^{2−} + H_3O^{+}', at: t[0], size: 22},
	{label: '    ', t: 'HCO_3^{-} + H_2O ⇌ H_2CO_3 + OH^{-}', at: t[1], size: 22},
	{label: '(b)', t: 'HCO_3^{-}: Kb > Ka, mainly accepts', at: t[2], size: 22},
	{label: '(c)', t: 'NaHCO_3: basic (OH^{-} formed)', at: t[3], size: 22, color: BASE_INK},
].map(r => ({...r, dim: dimAll}));
const H2PO4_ROWS = (t: [number, number, number, number]): ARow[] => [
	{label: '(a)', t: 'H_2PO_4^{-} + H_2O ⇌ HPO_4^{2−} + H_3O^{+}', at: t[0], size: 22},
	{label: '    ', t: 'H_2PO_4^{-} + H_2O ⇌ H_3PO_4 + OH^{-}', at: t[1], size: 22},
	{label: '(b)', t: 'H_2PO_4^{-}: Ka > Kb, mainly donates', at: t[2], size: 22},
	{label: '(c)', t: 'KH_2PO_4: acidic (H_3O^{+} formed)', at: t[3], size: 22, color: PROTON_INK},
];
const PANEL = {x: 1290, y: 490, w: 534, h: 420, lh: 42};
const HCO3_DONE: [ForkSide, ForkSide] = [
	{draw: ALL, chip: 'Ka = 4.7 × 10^{−11}', chipAt: ALL, label: 'donates → CO_3^{2−} + H_3O^{+}', labelAt: ALL},
	{draw: ALL, chip: 'Kb = 2.3 × 10^{−8}', chipAt: ALL, label: 'accepts → H_2CO_3 + OH^{-}', labelAt: ALL, thick: ALL},
];
const H2PO4_DONE: [ForkSide, ForkSide] = [
	{draw: ALL, chip: 'Ka = 6.3 × 10^{−8}', chipAt: ALL, label: 'donates → HPO_4^{2−} + H_3O^{+}', labelAt: ALL, thick: ALL},
	{draw: ALL, chip: 'Kb = 1.4 × 10^{−12}', chipAt: ALL, label: 'accepts → H_3PO_4 + OH^{-}', labelAt: ALL},
];
/** A finished fork shrunk to a grey thumbnail with its result chip. */
const Thumb: React.FC<{cx: number; cy: number; ion: string; sides: [ForkSide, ForkSide]; result: string; k?: number; at?: number; o?: number}> = ({cx, cy, ion, sides, result, k = 0.42, at = ALL, o = 1}) => (
	<g opacity={o}>
		<g transform={`translate(${cx},${cy}) scale(${k}) translate(${-FK.cx},${-FK.cy})`}>
			<Fork cx={FK.cx} cy={FK.cy} ion={ion} at={at} right={sides[0]} left={sides[1]} arm={FK.arm} grey={1} />
		</g>
		<AChip x={cx} y={cy + 50} text={result} size={28} color={INK_SOFT} anchor="middle" at={at} />
	</g>
);

// ---------- 5b. Q4: hydrogen carbonate ----------
const KQ4b = cues(sc('q4-carbonate'), {amphi: 'An amphiprotic ion', compare: 'compare their constants', don: 'carbonate donating', r47: 'four point seven', acc: 'Accepting, it becomes', carb: 'becomes carbonic acid', conj: 'its conjugate acid', kw: 'K w over', r23: 'two point three', five: 'five hundred times', mainly: 'mainly accepts', basic: 'solution is basic'});
export const SceneQ4Carbonate: React.FC = () => {
	const K = KQ4b;
	const ch = chainItems('H_2CO_3', 'HCO_3^{-}', 'CO_3^{2−}', K.carb);
	const right: ForkSide = {draw: K.don, chip: 'Ka = 4.7 × 10^{−11}', chipAt: K.r47 + 10, label: 'donates → CO_3^{2−} + H_3O^{+}', labelAt: K.r47 + 24};
	const left: ForkSide = {draw: K.acc, chip: 'Kb = 2.3 × 10^{−8}', chipAt: K.r23 + 30, label: 'accepts → H_2CO_3 + OH^{-}', labelAt: K.r23 + 40, thick: K.five};
	return (
		<Overlay>
			<Head n={4} badge="Amphiprotic: Ka against Kb" badgeAt={6} />
			<Q4Strip anim marks={[...q4Marks('hco3', K.r47), ...q4Marks('kw', K.kw + 6), ...q4Marks('h2co3', K.kw + 30)]} />
			<Fork cx={FK.cx} cy={FK.cy} ion="HCO_3^{-}" at={K.amphi} right={right} left={left} arm={FK.arm} />
			<GTag x={FK.cx} y={810} text="C06: amphi means both" at={K.amphi + 10} out={K.compare + 20} anchor="middle" />
			<WorkEq parts={['HCO_3^{-}(aq)', '+', 'H_2O(l)', '<=>', 'CO_3^{2−}(aq)', '+', 'H_3O^{+}(aq)']} at={K.don + 4} out={K.r47 + 24} />
			<WorkEq parts={['HCO_3^{-}(aq)', '+', 'H_2O(l)', '<=>', 'H_2CO_3(aq)', '+', 'OH^{-}(aq)']} at={K.acc + 4} out={K.kw - 4} />
			<Chain items={ch} cx={FK.cx + 60} y={CHAIN_Y} size={36} dim={K.r23} ringAt={K.carb + 10} ringLabel="one proton up" bracketAt={K.conj} bracketLabel="conjugate pair" />
			<DimG at={K.r23 + 40} to={0.3}>
				<WLine x={140} y={WL[0]} size={36} items={P('Kb(HCO_3^{-}) = Kw ÷ Ka(H_2CO_3)', K.kw)} />
				<WLine x={140} y={WL[1]} size={36} items={P('= 1.0 × 10^{−14} ÷ 4.3 × 10^{−7}', K.kw + 40, {t: '= 2.3 × 10^{−8}', color: BASE_INK}, K.r23)} />
			</DimG>
			<GTag x={FK.cx - FK.arm / 2 - 110} y={WL[0] - 40} text="Kb ≈ 500 × Ka" at={K.five} out={K.basic + 24} anchor="middle" />
			<AnsPanel x={PANEL.x} y={PANEL.y} w={PANEL.w} h={PANEL.h} lh={PANEL.lh} rows={HCO3_ROWS([K.don + 30, K.acc + 30, K.basic, K.basic + 12])} />
			<Checks ticks={{0: [K.r47 + 20]}} />
			{void K.mainly}
		</Overlay>
	);
};

// ---------- 5c. Q4: dihydrogen phosphate ----------
const KQ4c = cues(sc('q4-phosphate'), {other: 'the other way', don: 'Donating, its K', r63: 'six point three', acc: 'Accepting, it becomes', phos: 'phosphoric acid', kw: 'K w over', r14: 'one point four', wins: 'K a wins', mainly: 'mainly donates', acidic: 'solution is acidic'});
export const SceneQ4Phosphate: React.FC = () => {
	const f = useCurrentFrame();
	const K = KQ4c;
	const ch = chainItems('H_3PO_4', 'H_2PO_4^{-}', 'HPO_4^{2−}', K.phos);
	const right: ForkSide = {draw: K.don, chip: 'Ka = 6.3 × 10^{−8}', chipAt: K.r63 + 10, label: 'donates → HPO_4^{2−} + H_3O^{+}', labelAt: K.r63 + 24, thick: K.wins};
	const left: ForkSide = {draw: K.acc, chip: 'Kb = 1.4 × 10^{−12}', chipAt: K.r14 + 30, label: 'accepts → H_3PO_4 + OH^{-}', labelAt: K.r14 + 40};
	// the hydrogen carbonate fork shrinks from the centre to a grey thumbnail (top right)
	const m = prog(f, 0, 24);
	const tcx = FK.cx + (1420 - FK.cx) * m, tcy = FK.cy + (300 - FK.cy) * m, tk = 1 - 0.58 * m;
	return (
		<Overlay>
			<Head n={4} badge="Amphiprotic: Ka against Kb" />
			<Q4Strip marks={[...q4Marks('hco3', ALL), ...q4Marks('kw', ALL), ...q4Marks('h2co3', ALL), ...q4Marks('h2po4', K.r63), ...q4Marks('h3po4', K.kw + 24)]} />
			<g opacity={1 - 0.2 * m}>
				<g transform={`translate(${tcx},${tcy}) scale(${tk}) translate(${-FK.cx},${-FK.cy})`}>
					<Fork cx={FK.cx} cy={FK.cy} ion="HCO_3^{-}" at={ALL} right={HCO3_DONE[0]} left={HCO3_DONE[1]} arm={FK.arm} grey={m} />
				</g>
				<AChip x={1420} y={350} text="accepts: basic" size={28} color={INK_SOFT} anchor="middle" at={20} />
			</g>
			<Fork cx={FK.cx} cy={FK.cy} ion="H_2PO_4^{-}" at={K.other} right={right} left={left} arm={FK.arm} />
			<WorkEq parts={['H_2PO_4^{-}(aq)', '+', 'H_2O(l)', '<=>', 'HPO_4^{2−}(aq)', '+', 'H_3O^{+}(aq)']} at={K.don + 4} out={K.r63 + 24} />
			<WorkEq parts={['H_2PO_4^{-}(aq)', '+', 'H_2O(l)', '<=>', 'H_3PO_4(aq)', '+', 'OH^{-}(aq)']} at={K.acc + 4} out={K.kw - 4} />
			<Chain items={ch} cx={FK.cx + 60} y={CHAIN_Y} size={36} dim={K.r14} ringAt={K.phos + 6} ringLabel="one proton up" />
			<DimG at={K.r14 + 40} to={0.3}>
				<WLine x={140} y={WL[0]} size={36} items={P('Kb(H_2PO_4^{-}) = Kw ÷ Ka(H_3PO_4)', K.kw)} />
				<WLine x={140} y={WL[1]} size={36} items={P('= 1.0 × 10^{−14} ÷ 7.1 × 10^{−3}', K.kw + 30, {t: '= 1.4 × 10^{−12}', color: BASE_INK}, K.r14)} />
			</DimG>
			<GTag x={FK.cx + FK.arm / 2 + 110} y={WL[0] - 40} text="Ka ≈ 45 000 × Kb" at={K.wins} out={K.acidic + 24} anchor="middle" />
			<AnsPanel x={PANEL.x} y={PANEL.y} w={PANEL.w} h={PANEL.h} lh={PANEL.lh} rows={[...HCO3_ROWS([ALL, ALL, ALL, ALL]), ...H2PO4_ROWS([K.don + 30, K.acc + 30, K.acidic, K.acidic + 12])]} />
			<GTag x={PANEL.x + PANEL.w / 2} y={PANEL.y + PANEL.h + 46} text="C06: baking soda neutralised acid" at={K.acidic + 50} anchor="middle" size={24} />
			<Checks ticks={{0: [ALL], 2: [K.acidic + 40]}} />
			{void K.mainly}
		</Overlay>
	);
};

// ---------- 5d. Q4: the classic mistake ----------
const KQ4d = cues(sc('q4-mistake'), {classic: 'The classic mistake', finding: 'finding K b', r16: 'one point six', hp: 'hydrogen phosphate', wrong: 'the wrong answer', pair: 'conjugate pair', up: 'one proton up'});
export const SceneQ4Mistake: React.FC = () => {
	const K = KQ4d;
	const size = 44, cx = 640, y = 800;
	const ch = chainItems('H_3PO_4', 'H_2PO_4^{-}', 'HPO_4^{2−}', K.pair - 12);
	const W = eSpan(ch, ch.length - 1, size, 0).x2;
	const x0 = cx - W / 2;
	const a = eSpan(ch, 2, size, x0), b = eSpan(ch, 0, size, x0);
	const yb = y + 34;
	const aid = "For an ion's Kb, use the Ka one proton up.";
	return (
		<Overlay>
			<Head n={4} badge="Amphiprotic: Ka against Kb" />
			<Q4Strip marks={[...q4Marks('hco3', ALL), ...q4Marks('kw', ALL), ...q4Marks('h2co3', ALL), ...q4Marks('h2po4', ALL), ...q4Marks('h3po4', ALL)]} />
			<Thumb cx={1240} cy={300} ion="HCO_3^{-}" sides={HCO3_DONE} result="accepts: basic" k={0.36} o={0.6} />
			<Thumb cx={1600} cy={300} ion="H_2PO_4^{-}" sides={H2PO4_DONE} result="donates: acidic" k={0.36} o={0.6} />
			<AnsPanel x={PANEL.x} y={PANEL.y} w={PANEL.w} h={PANEL.h} lh={PANEL.lh} dimAll={ALL} rows={[...HCO3_ROWS([ALL, ALL, ALL, ALL]), ...H2PO4_ROWS([ALL, ALL, ALL, ALL])]} />
			<MistakeX x={140} y={500} text="Kb(H_2PO_4^{-}) = Kw ÷ 6.3 × 10^{−8} = 1.6 × 10^{−7}, so basic" at={K.classic + 2} cross={K.finding + 10} size={34} />
			<Note x={166} y={626} text="that's the Kb of HPO_4^{2−}" size={36} color={TEAL} at={K.hp} />
			<EqLine items={ch} x={x0} y={y} size={size} />
			<PairBracket items={ch} i={0} j={2} size={size} x={x0} y={y} at={K.pair} above color={TEAL} label="conjugate pair" lsize={30} gap={12} />
			<Fade at={K.up}>
				<DrawPath d={`M${a.cx},${yb} Q${(a.cx + b.cx) / 2},${yb + 70} ${b.cx + 8},${yb + 6}`} at={K.up} dur={18} color={AMBER} width={5} />
				<path d={`M${b.cx + 8},${yb + 6} l20,4 l-12,14 Z`} fill={AMBER} />
			</Fade>
			<AChip x={140} y={910} text={aid} size={40} color={TEAL} at={K.up + 14} />
			<Checks ticks={{0: [ALL], 2: [ALL]}} />
			{void K.r16}{void K.wrong}{void GLOW}{void mw}{void INK}
		</Overlay>
	);
};

// ---------- 6. Decision board ----------
const KD = cues(sc('decision-board'), {start: 'how to start', read: 'Read the data', kac: 'Given K a and', five: 'under five percent', isnt: "If it isn't", ph: 'Given a pH', back: 'Work backwards', amph: 'Given an amphiprotic', up: 'one proton up', next: 'Next, how'});
type DRow = {see: string; doo: [string, string]; badge: string; at: number; lit: [number, number]};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const rows: DRow[] = [
		{see: 'Ka and c', doo: ['ICE table, x ≈ √(Ka × c),', 'check x ÷ c < 5%'], badge: 'Q1', at: KD.kac, lit: [KD.kac, KD.isnt]},
		{see: 'the check fails', doo: ['keep the x: x^{2} + Ka·x − Ka·c = 0,', 'take the positive root'], badge: 'Q2', at: KD.isnt, lit: [KD.isnt, KD.ph]},
		{see: 'pH and c', doo: ['[H_3O^{+}] = 10^{−pH}, table backwards,', 'Ka, pKa; no 5% check'], badge: 'Q3', at: KD.ph, lit: [KD.ph, KD.amph]},
		{see: 'an amphiprotic ion', doo: ['Ka against Kb = Kw ÷ Ka(one proton up);', 'the bigger constant wins'], badge: 'Q4', at: KD.amph, lit: [KD.amph, KD.next]},
	];
	const y0 = 250, lh = 150;
	return (
		<>
			<Heading text="Weak acids: which method fits the data?" at={4} size={56} />
			<Overlay>
				<Sx x={126} y={y0 - 22} text="What you're given" size={34} color={INK_SOFT} hand at={KD.read} />
				<Sx x={720} y={y0 - 22} text="What you do first" size={34} color={INK_SOFT} hand at={KD.read + 6} />
				{rows.map((r, i) => {
					const y = y0 + i * lh;
					const g = prog(f, r.lit[0], 10) * (1 - prog(f, r.lit[1], 12));
					const p = prog(f, r.at, 16);
					const bw = mw(r.badge, 28, true) + 34;
					return (
						<Fade key={i} at={r.at}>
							<g transform={`translate(${(1 - p) * -30},0)`}>
								<rect x={96} y={y} width={1728} height={lh - 16} rx={20} fill="#fffdf8" stroke={g > 0.05 ? TEAL : 'rgba(60,45,20,0.18)'} strokeWidth={3 + 2 * g} />
								{g > 0.01 ? <rect x={102} y={y + 6} width={1716} height={lh - 28} rx={16} fill={GLOW} opacity={0.3 * g} /> : null}
								<Sx x={126} y={y + (lh - 16) / 2 + 14} text={r.see} size={42} hand at={r.at} />
								<path d={`M${620},${y + (lh - 16) / 2} L${672},${y + (lh - 16) / 2} M${658},${y + (lh - 16) / 2 - 12} L${672},${y + (lh - 16) / 2} L${658},${y + (lh - 16) / 2 + 12}`} fill="none" stroke={TEAL} strokeWidth={4} strokeLinecap="round" />
								<Sx x={720} y={y + 56} text={r.doo[0]} size={36} color={INK} weight={600} at={r.at + 4} />
								<Sx x={720} y={y + 104} text={r.doo[1]} size={36} color={INK} weight={600} at={r.at + 10} />
								<rect x={1800 - bw} y={y + (lh - 16) / 2 - 22} width={bw} height={44} rx={22} fill={TEAL} />
								<Sx x={1800 - bw / 2} y={y + (lh - 16) / 2 + 10} text={r.badge} size={28} color="#fffdf8" anchor="middle" hand at={-1000} />
							</g>
						</Fade>
					);
				})}
				<Sx x={126} y={y0 + 4 * lh + 20} text="Every answer: pH below 7 for an acid; pH decimal places = significant figures in x." size={30} color={INK_SOFT} weight={600} at={KD.read + 14} />
				<AChip x={126} y={y0 + 4 * lh + 60} text="Next: how a buffer resists a change in pH" size={40} color={TEAL} at={KD.next} />
				<PlateAt p={BEAKER} x={860} y={y0 + 4 * lh + 34} h={150} at={KD.next + 6} />
				{void KD.start}{void KD.five}{void KD.back}{void KD.up}
			</Overlay>
		</>
	);
};

// ---------- 7. Key notes ----------
const NOTES = [
	'Choose the method from the data: Ka and c → ICE table forwards; pH and c → ICE table backwards; an amphiprotic ion → compare Ka and Kb.',
	'Forwards: x ≈ √(Ka × c), then check x ÷ c × 100% < 5%. If the check fails, keep the x: x^{2} + Ka·x − Ka·c = 0, and take the positive root.',
	'Backwards: [H_3O^{+}] = 10^{−pH} = [A^{−}]; [HA] = c − [H_3O^{+}]; Ka = [H_3O^{+}]^{2} ÷ [HA]; pKa = −log Ka. [H_3O^{+}] is measured, so no 5% check is needed. The pKa is not the pH.',
	'Amphiprotic ion: compare Ka (donating) with Kb = Kw ÷ Ka of the acid one proton up (accepting); the larger constant wins. HCO_3^{−} mainly accepts (NaHCO_3 basic); H_2PO_4^{−} mainly donates (KH_2PO_4 acidic).',
	'Precision: forwards, x has the significant figures of Ka, and pH has that many decimal places; backwards, Ka has as many significant figures as the pH has decimal places.',
];
for (const n of NOTES) if (n.includes(String.fromCharCode(0x2014))) throw new Error('em dash in notes');
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={790} aids={["For an ion's Kb, use the Ka one proton up.", 'Weak acid: x ≈ √(Ka × c), then check x < 5% of c.']} tag="25 °C; Ka × Kb = Kw for a conjugate pair only" />
);
void G;
