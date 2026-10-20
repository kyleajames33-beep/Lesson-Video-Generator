// M6 C07 scenes 1 to 4: the meter's two numbers; what pH means (definition, log ruler); worked example 1 (a strong
// acid and decimal places); going backwards from pH to [H3O+].
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {
	AChip, BASE_INK, DimG, EqLine, Fade, GCard, H3O, INK, INK_SOFT, KeptChip, LabelBeaker, LensFrame, LogRuler, Meter, Mol, Note, OHg, Overlay, P, PHChip, PROTON, PROTON_INK, ProtonHop,
	Ring, RuleCard, Sx, TEAL, TaskLine, Tick, Tie, WLine, beakerW, clamp01, countRead, eq, giveAt, hopState, lerp, mw, pieceX, slotAt, smooth, subX, vis,
} from './parts';
import type {Piece} from './parts';

// ---------- board geometry (C03) ----------
export const BW = {task: {x: 96, y: 150, s: 52}, strip: {x: 96, y: 252, s: 38}, card: {x: 96, y: 300, w: 650, lh: 62, s: 34}, wx: 820, wy: [410, 510, 610, 710, 810], ws: 42};

// ---------- 1. Hook: one meter, two numbers ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {hcl: 'hydrochloric acid reads', reads: 'reads one point zero', one: 'one point zero zero', naoh: 'In sodium hydroxide', thirteen: 'thirteen point zero', where: 'Where do those', makes: 'makes hydroxide ions', have: 'have a pH'});
const BH = 400, BY = 300, LX = 150, RX = 600;
const BWD = beakerW(BH);
const lc = LX + BWD / 2, rc = RX + BWD / 2;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const inL: [number, number] = [lc + 30, 640], inR: [number, number] = [rc + 30, 640];
	const probe = (fr: number): [number, number] => {
		const t = smooth(clamp01((fr - K1.naoh) / 30));
		return [lerp(inL[0], inR[0], t), lerp(inL[1], inR[1], t) - Math.sin(t * Math.PI) * 240];
	};
	const r1 = countRead([{t0: K1.one - 14, t1: K1.one + 8, a: 1.42, b: 1}], 2, K1.one - 14), r2 = countRead([{t0: K1.thirteen - 14, t1: K1.thirteen + 8, a: 12.55, b: 13}], 2, K1.thirteen - 14);
	const read = (fr: number) => (fr >= K1.naoh && fr < K1.thirteen - 14 ? '' : fr >= K1.thirteen - 14 ? r2(fr) : r1(fr));
	const labDim = 1 - 0.55 * prog(f, K1.have, 14);
	const L = {cx: rc, cy: 520, r: 135};
	const ohs: [number, number][] = [[-70, -60], [10, -85], [75, -40], [-90, 15], [-30, 60], [55, 70], [95, 20], [-5, -20]];
	return (
		<>
			<Heading text="pH 1.00 and 13.00: where from?" at={K1.where} size={58} />
			<Overlay>
				<g opacity={labDim}>
					<LabelBeaker x={LX} y={BY} h={BH} at={-100} lines={[{t: 'hydrochloric acid', at: 20}, {t: '0.10 mol/L', at: 40}]} o={1 - 0.45 * prog(f, K1.naoh, 14)} />
					<LabelBeaker x={RX} y={BY} h={BH} at={-100} lines={[{t: 'sodium hydroxide', at: K1.naoh}, {t: '0.10 mol/L', at: K1.naoh + 12}]} />
				</g>
				<PHChip x={lc} y={BY - 78} text="pH 1.00" anchor="middle" size={30} at={K1.naoh + 10} o={0.55} drop />
				<Meter x={1230} y={430} w={600} at={-100} probe={probe} read={read} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K1.have - 4}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
					{ohs.map(([dx, dy], i) => <OHg key={i} x={L.cx + dx + Math.sin(f * 0.04 + i) * 4} y={L.cy + dy + Math.cos(f * 0.035 + i * 1.3) * 4} s={1.15} />)}
					<circle cx={L.cx + 30} cy={L.cy + 6} r={20} fill="none" stroke={PROTON} strokeWidth={3} strokeDasharray="6 5" />
				</LensFrame>
				<Note x={L.cx + L.r + 24} y={L.cy + 16} text="H_3O^{+}?" size={44} color={PROTON_INK} at={K1.have + 8} />
				<Sx x={L.cx} y={L.cy + L.r + 40} text="OH^{-} everywhere" size={30} color={BASE_INK} anchor="middle" weight={700} at={K1.have + 4} />
				{void K1.hcl}{void K1.makes}
			</Overlay>
		</>
	);
};

// ---------- 2. What pH means ----------
const S2 = 'ph-meaning';
const K2 = cues(sc(S2), {hcl: 'Hydrochloric acid is strong', every: 'every molecule gives', gives: 'gives its proton', equals: "equals the acid's", z010: 'zero point one zero', ten1: 'or ten to the', log: 'The log of ten', power: 'its power, minus one', minus: 'the minus sign makes', ph1: 'positive pH one', step: 'one pH step'});
const DEF = 'pH = −log_10[H_3O^{+}]';
export const ScenePhMeaning: React.FC = () => {
	const f = useCurrentFrame();
	const DX = 96, DY = 280, DS = 66;
	const L = {cx: 1490, cy: 440, r: 175};
	const m = subX(DEF, '−', DS);
	const glow = Math.max(0, Math.sin(clamp01((f - K2.ph1) / 40) * Math.PI));
	const pairs = [{a: [L.cx - 95, L.cy - 50], b: [L.cx + 75, L.cy - 50], t: K2.gives}, {a: [L.cx - 95, L.cy + 70], b: [L.cx + 75, L.cy + 70], t: K2.gives + 14}] as {a: [number, number]; b: [number, number]; t: number}[];
	const work: Piece[] = P('[H_3O^{+}] = 0.10 mol/L', K2.z010, '= 10^{−1} mol/L', K2.ten1 + 6, {t: '→ pH = 1.00', color: TEAL}, K2.ph1 + 14);
	const logA = 'log 10^{−1} = −1', logB = '−log 10^{−1} = +1';
	const LY = 420, LS = 50;
	const pw = subX(logA, '−1', LS, 700, 2);
	return (
		<>
			<Overlay>
				{glow > 0.01 ? <rect x={DX + m.x1 - 6} y={DY - DS * 0.62} width={m.x2 - m.x1 + 12} height={DS * 0.5} rx={10} fill={TEAL} opacity={0.4 * glow} /> : null}
				<Sx x={DX} y={DY} text={DEF} size={DS} color={INK} weight={800} at={4} />
				<Sx x={DX + 4} y={DY + 54} text="[ ] = concentration, mol/L" size={30} color={INK_SOFT} hand at={70} out={K2.hcl + 30} />
				<DimG at={K2.log} to={0.3}>
					<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.every - 6} out={K2.step}>
						<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
						{pairs.map((p, i) => {
							const st = hopState(f, p.t);
							return (
								<g key={i}>
									<Mol x={p.a[0]} y={p.a[1]} m="HCl" s={0.72} give={st.give} />
									<Mol x={p.b[0]} y={p.b[1]} m="H2O" s={0.72} take={st.take} />
									<ProtonHop a={giveAt('HCl', p.a[0], p.a[1], 0.72)} b={slotAt('H2O', p.b[0], p.b[1], 0.72)} at={p.t} s={0.6} bow={-50} />
								</g>
							);
						})}
					</LensFrame>
					<Note x={L.cx} y={L.cy + L.r + 50} text="complete: [H_3O^{+}] = c" size={38} color={TEAL} anchor="middle" at={K2.equals} out={K2.step} />
				</DimG>
				<WLine x={DX} y={560} size={46} items={work} />
				<DimG at={K2.step} to={0.3}>
					<Sx x={DX} y={LY} text={logA} size={LS} color={INK} weight={700} at={K2.log + 6} out={K2.ph1} />
					<Ring cx={DX + (pw.x1 + pw.x2) / 2} cy={LY - LS * 0.34} rx={(pw.x2 - pw.x1) / 2 + 20} ry={LS * 0.62} at={K2.power} out={K2.ph1} color={TEAL} seed={4} />
					<Sx x={DX} y={LY} text={logB} size={LS} color={INK} weight={700} at={K2.ph1} />
				</DimG>
				<LogRuler x={330} y={850} w={1400} at={K2.step - 4} hi={[{i: 1, at: K2.step + 30}]} />
				{void K2.minus}{void vis}
			</Overlay>
		</>
	);
};

// ---------- 3. Worked example 1: a strong acid, and decimal places ----------
const S3 = 'we1-strong-acid';
const K3 = cues(sc(S3), {nitric: 'Nitric acid at', strong: 'is strong, with', hyd: 'hydronium is zero', neg: 'the negative log', r160: 'one point six zero', why: 'Why two decimal', power: 'power of ten', prec: 'the precision sits', sig: 'significant figures', two: 'two here'});
export const TASK_PH = 'Find the pH';
export const SceneWe1: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW;
	const dimBoard = K3.hyd + 60;
	const l1: Piece[] = P('[H_3O^{+}] =', K3.hyd, '0.025 mol/L', K3.hyd + 28);
	const l2: Piece[] = P('pH = −log(0.025)', K3.neg, '= 1.602', K3.r160, {t: '→ 1.60', color: TEAL}, K3.r160 + 24);
	const x025 = wx + pieceX(l1, 1, ws);
	const x160 = wx + pieceX(l2, 2, ws);
	const one = subX('→ 1.60', '1', ws), dec = subX('→ 1.60', '.60', ws);
	const sci = '2.5 × 10^{−2}';
	const SY = wy[0] + 50, SS = 30;
	const sPow = subX(sci, '10^{−2}', SS), sMan = subX(sci, '2.5', SS);
	const r25 = subX('0.025 mol/L', '25', ws);
	const g1 = Math.max(0, Math.sin(clamp01((f - K3.power) / 70) * Math.PI)), g2 = Math.max(0, Math.sin(clamp01((f - K3.prec) / 70) * Math.PI));
	const items = eq(['HNO_3(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'NO_3^{-}(aq)'], 10);
	return (
		<Overlay>
			<TaskLine text={TASK_PH} at={2} size={BW.task.s} />
			<DimG at={dimBoard} to={0.35}>
				<EqLine items={items} x={BW.strip.x} y={BW.strip.y} size={BW.strip.s} />
				<GCard x={BW.card.x} y={BW.card.y} w={BW.card.w} lh={BW.card.lh} size={BW.card.s} at={K3.nitric + 20} lines={[{t: 'HNO_3: 0.025 mol/L (strong, 1 H^{+} each)', at: K3.nitric + 26, marks: [{sub: '0.025 mol/L', at: K3.hyd, out: dimBoard + 20}]}]} />
			</DimG>
			<WLine x={wx} y={wy[0]} size={ws} dim={K3.r160} items={l1} />
			<Sx x={x025} y={SY} text={sci} size={SS} color={INK} weight={700} at={K3.power} out={K3.sig + 10} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K3.sig} items={l2} />
			{g1 > 0.01 ? <rect x={x160 + one.x1 - 4} y={wy[1] - ws * 0.8} width={one.x2 - one.x1 + 8} height={ws * 0.95} rx={8} fill="#f6d77a" opacity={0.7 * g1} /> : null}
			{g2 > 0.01 ? <rect x={x160 + dec.x1 - 4} y={wy[1] - ws * 0.8} width={dec.x2 - dec.x1 + 8} height={ws * 0.95} rx={8} fill="#f6d77a" opacity={0.7 * g2} /> : null}
			<Tie a={[x160 + (one.x1 + one.x2) / 2, wy[1] - ws * 0.82]} b={[x025 + (sPow.x1 + sPow.x2) / 2, SY + 8]} at={K3.power + 8} out={K3.sig} />
			<Tie a={[x160 + (dec.x1 + dec.x2) / 2, wy[1] - ws * 0.82]} b={[x025 + (sMan.x1 + sMan.x2) / 2, SY + 8]} at={K3.prec} out={K3.sig} />
			<Note x={wx + 620} y={wy[1] + 70} text="1 = the power of ten" size={32} color={INK_SOFT} at={K3.power + 14} out={K3.sig} />
			<Note x={wx + 620} y={wy[1] + 114} text=".60 = the precision" size={32} color={INK_SOFT} at={K3.prec + 10} out={K3.sig} />
			<Ring cx={x025 + (r25.x1 + r25.x2) / 2} cy={wy[0] - ws * 0.34} rx={(r25.x2 - r25.x1) / 2 + 16} ry={ws * 0.6} at={K3.sig} color={TEAL} seed={5} />
			<AChip x={x025 + mw('0.025 mol/L', ws) + 30} y={wy[0] - 46} text="2 s.f." size={30} color={TEAL} hand={false} at={K3.sig + 10} />
			<KeptChip x={BW.card.x} y={480} text="pH = 1.60" at={K3.r160 + 40} color={TEAL} size={40} />
			<RuleCard x={96} y={740} w={1090} at={K3.sig + 16} lh={80} lines={[{t: 'Decimal places in pH = significant figures in [H_3O^{+}]', at: K3.sig + 22, size: 42, hand: false}]} />
			{void K3.strong}{void K3.why}{void K3.two}{void Tick}
		</Overlay>
	);
};

// ---------- 4. Going backwards ----------
const S4 = 'ph-backwards';
const K4 = cues(sc(S4), {back: 'run it backwards', tenpH: 'ten to the minus pH', ph340: 'pH of three', gives: 'gives ten to', four: 'four point zero times', twodp: 'Two decimal places', twosf: 'two significant figures'});
export const ScenePhBack: React.FC = () => {
	const f = useCurrentFrame();
	const X = 96, LY = 620, LS = 50;
	const a = '[H_3O^{+}] = 10^{−3.40}';
	const xb = X + mw(a, LS) + LS * 0.35;
	const res = '= 4.0 × 10^{−4} mol/L';
	const r40 = subX(res, '4.0', LS);
	const CS = 40, cx0 = X + CS * 0.7;
	const c40 = subX('pH = 3.40', '.40', CS);
	const ruleO = 1 - 0.6 * prog(f, K4.twosf + 70, 14);
	return (
		<>
			<Heading text="Going backwards: pH to concentration" at={4} size={58} />
			<Overlay>
				<g opacity={ruleO}><KeptChip x={1240} y={96} text="d.p. in pH = s.f. in [H_3O^{+}]" at={6} pulse={K4.twosf} color={TEAL} size={30} /></g>
				<Sx x={X} y={330} text="[H_3O^{+}] = 10^{−pH}" size={68} color={INK} weight={800} at={K4.tenpH} />
				<AChip x={X} y={420} text="pH = 3.40" size={CS} color={INK} hand={false} at={K4.ph340} />
				<Sx x={X} y={LY} text={a} size={LS} color={INK} weight={700} at={K4.gives} />
				<Sx x={xb} y={LY} text="= 3.98 × 10^{−4}" size={LS} color={INK_SOFT} weight={700} at={K4.gives + 24} out={K4.four} />
				<Sx x={xb} y={LY} text={res} size={LS} color={TEAL} weight={800} at={K4.four} />
				<Ring cx={cx0 + (c40.x1 + c40.x2) / 2} cy={420 + CS * 0.8} rx={(c40.x2 - c40.x1) / 2 + 14} ry={CS * 0.62} at={K4.twosf - 30} color={TEAL} seed={3} />
				<Ring cx={xb + (r40.x1 + r40.x2) / 2} cy={LY - LS * 0.34} rx={(r40.x2 - r40.x1) / 2 + 6} ry={LS * 0.6} at={K4.twosf} color={TEAL} seed={6} />
				<Tie a={[cx0 + (c40.x1 + c40.x2) / 2, 420 + CS * 1.5]} b={[xb + (r40.x1 + r40.x2) / 2, LY - LS * 1.0]} at={K4.twosf + 10} />
				<Note x={xb + mw(res, LS) + 40} y={LY - 70} text="2 d.p. → 2 s.f." size={36} color={TEAL} at={K4.twosf + 16} />
				{void K4.back}{void K4.twodp}{void H3O}{void Fade}
			</Overlay>
		</>
	);
};
