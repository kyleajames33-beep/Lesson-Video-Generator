// M6 P04 scenes 1 to 7: two labels, one meter; test 1 (match the concentration, the C05 recall card and the dials with a
// padlock); the P03 routine recalled (probe through three buffers, readings outside the calibrated band); the matched
// results; what the gap means (bracket on the pH scale, the C05 lenses and arrows); test 2, the tenfold dilution (pipette
// into the volumetric flask, made up to the mark); the dilution results with change bars.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {FLASK_G, PIPETTE_G, WASH, WASH_N} from './assets';
import {
	AChip, AMBER_INK, BASE, BASE_INK, Bottle, ChangeBar, Counter, DIL4, Dial2, DimG, DrawPath, EqLine, Fade, Field, FieldLens, FlaskFill, FullMeter, GLINE, GREEN_BAND, Ghost, HAZ,
	INK, INK_SOFT, LabelBeaker, LiquidBeaker, MEANS4, Meter, Note, OpGlow, Overlay, PALE, PHChip, PROTON, PROTON_INK, Padlock, PicH, PipettePlate, ROW4, Ring, Row4, Stream, Sx,
	TEAL, TaskLine, Under, VAxis, VBracket2, beakerW, clamp01, eq, fitSize, flaskPt, flicker, fullMeterW, lerp, meterH, mw, picW, pipPt, probeArc, r4Cx, smooth, vaY, vis,
} from './parts';
import type {R4G, VA} from './parts';

// ---------- 1. Hook: two labels, one meter ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {zero: 'zero point one zero zero', hcl: 'hydrochloric acid', eth: 'ethanoic acid', meter: 'pH meter', strong: 'strong', wrong: 'wrong', today: 'Today', second: 'second one', trust: 'trust the label'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 330, BY = 380, bw = beakerW(BH);
	const XS = [720, 1140];
	const LY = BY + BH + 56;
	const conc = '0.100 mol/L', cs = 38;
	const cw = mw(conc, cs, false, 700);
	const flick = f > K1.wrong && f < K1.wrong + 26 ? (Math.floor((f - K1.wrong) / 4) % 2 === 0 ? 0.25 : 1) : 1;
	return (
		<>
			<Heading text="Two pH tests of strength" at={K1.today} size={62} />
			<Overlay>
				<FullMeter x={90} y={470} h={260} at={K1.meter - 10} read={() => ''} />
				{XS.map((x, i) => {
					const lx = x + bw / 2 - 90;
					return (
						<g key={i}>
							<LiquidBeaker x={x} y={BY} h={BH} tint={PALE} />
							<rect x={lx - 24} y={LY - 30} width={12} height={36} rx={3} fill={TEAL} />
							<Sx x={lx} y={LY} text={i === 0 ? 'acid A' : 'acid B'} size={40} color={INK} weight={700} at={i === 0 ? K1.hcl - 20 : K1.eth - 10} />
							<g opacity={i === 1 ? flick : 1}>
								<Sx x={lx} y={LY + 52} text={conc} size={cs} color={INK} weight={700} at={-1000} opacity={prog(f, 4, 12)} />
							</g>
							<Under x1={lx} x2={lx + cw} y={LY + 64} at={K1.zero + 6 + i * 6} color={TEAL} />
						</g>
					);
				})}
				<AChip x={XS[0] + bw / 2 - 60} y={BY - 110} text="strong = ionises completely (C05)" size={34} color={TEAL} hand={false} at={K1.strong} />
				<Sx x={XS[1] + bw / 2 - 90 + cw + 34} y={LY + 66} text="?" size={92} color={GLINE} anchor="middle" hand at={K1.wrong + 20} />
				<Note x={XS[1] + bw / 2 - 90 + cw + 80} y={LY + 52} text="label you can't trust?" size={36} color={AMBER_INK} at={K1.wrong + 24} />
				<Note x={XS[0] - 10} y={980} text="the second test doesn't trust the label" size={34} color={INK_SOFT} at={K1.trust - 20} />
				{void K1.second}
			</Overlay>
		</>
	);
};

// ---------- 2. Test 1: match the concentration ----------
const S2 = 'matched-concentration';
const K2 = cues(sc(S2), {practical: 'last practical', same: 'same concentration', why: 'Why does', conc: 'concentrated weak', two: 'two things', match: 'Match them', strength: 'strength', thist: 'This time', zero: 'zero point one zero zero'});
export const RG4: R4G = {x0: 560, dx: 330, y: 620, h: 200};
export const SceneMatched: React.FC = () => {
	const f = useCurrentFrame();
	const at = [-100, -100, 14, 26];
	const by = RG4.y - 64;
	const x1 = r4Cx(RG4, 0) - 100, x4 = r4Cx(RG4, 3) + 100;
	const DX = [1360, 1640], DY = 330;
	const wob = (ph: number) => (fr: number) => 0.5 + 0.36 * Math.sin(fr / 11 + ph);
	const locked = (fr: number) => (fr < K2.strength ? wob(1.3)(fr) : lerp(wob(1.3)(K2.strength), 0.62, smooth(clamp01((fr - K2.strength) / 10))));
	return (
		<Overlay>
			<TaskLine text="Test 1: match the concentration" at={4} size={56} />
			<Row4 g={RG4} at={at} lab={[2, 8, 18, 30]} size={30} />
			<DimG at={K2.why} to={0.4}><Note x={96} y={240} text="P03: matched at 0.010 mol/L" size={30} color={INK_SOFT} at={K2.practical} hand={false} /></DimG>
			<Fade at={K2.same}>
				<DrawPath d={`M${x1},${by + 20} L${x1},${by} L${x4},${by} L${x4},${by + 20}`} at={K2.same} dur={18} color={TEAL} width={5} />
			</Fade>
			<Sx x={(x1 + x4) / 2} y={by - 22} text="all 0.100 mol/L" size={44} color={TEAL} anchor="middle" hand weight={700} at={K2.thist} />
			<DimG at={K2.two} to={0.35}>
				<Fade at={K2.conc}>
					<rect x={96} y={300} width={500} height={150} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<Sx x={120} y={340} text="recall (C05)" size={24} color={INK_SOFT} hand at={-1000} />
					<Sx x={120} y={386} text="1.0 mol/L acetic acid: pH 2.4" size={28} color={INK} weight={700} at={-1000} />
					<Sx x={120} y={428} text="0.0010 mol/L HCl: pH 3.0" size={28} color={INK} weight={700} at={-1000} />
				</Fade>
				<Under x1={120} x2={510} y={396} at={K2.conc + 40} color={AMBER_INK} />
				<Note x={120} y={500} text="lower pH, but weak" size={34} color={AMBER_INK} at={K2.conc + 46} />
			</DimG>
			<Dial2 x={DX[0]} y={DY} r={60} label="strength" val={wob(0)} at={K2.two} />
			<DimG at={K2.strength + 10} to={0.45}><Dial2 x={DX[1]} y={DY} r={60} label="concentration" val={locked} at={K2.two + 4} /></DimG>
			<Note x={(DX[0] + DX[1]) / 2} y={DY + 110} text="unmatched: can't separate them" size={32} color={INK_SOFT} anchor="middle" at={K2.two + 10} out={K2.strength} />
			<Padlock x={DX[1] + 70} y={DY - 50} s={1.2} at={K2.strength} />
			<Note x={DX[1] + 110} y={DY - 40} text="matched" size={34} color={TEAL} at={K2.strength + 8} />
			<Note x={DX[0]} y={DY + 110} text="only strength can differ" size={32} color={TEAL} anchor="middle" at={K2.strength + 14} />
			{void K2.match}{void K2.zero}
		</Overlay>
	);
};

// ---------- 3. The routine, from the last practical ----------
const S3 = 'routine-recall';
const K3 = cues(sc(S3), {cal: 'calibrate', rinse: 'rinse and blot', wait: 'wait for', three: 'take three', fresh: 'fresh portions', one: 'One new point', near: 'near one', outside: 'outside'});
const BUFS = [{ph: 'pH 7.00', c: '#e8c547', tint: '#f8efc9'}, {ph: 'pH 4.00', c: '#e06a5a', tint: '#f6d8d2'}, {ph: 'pH 10.00', c: '#5b8fd6', tint: '#d9e6f6'}];
export const SceneRoutine: React.FC = () => {
	const f = useCurrentFrame();
	const MX = 60, MY = 610, MW = 300;
	const BKH = 120, bkw = beakerW(BKH), BKY = 380;
	const bx = (i: number) => 470 + i * 180;
	const cxB = (i: number) => bx(i) + bkw / 2;
	const tipIn = BKY + BKH * 0.8;
	const rest: [number, number] = [420, 560];
	const c = K3.cal;
	const probe = probeArc(rest, [{at: c, to: [cxB(0), tipIn]}, {at: c + 12, to: [cxB(1), tipIn]}, {at: c + 24, to: [cxB(2), tipIn]}], c + 40, 70, 10);
	const read = (fr: number) => (fr < c + 8 || fr > c + 54 ? '' : fr < c + 20 ? flicker(c + 8, c + 14, '7.00', 6.6, 7.4)(fr) : fr < c + 32 ? flicker(c + 20, c + 26, '4.00', 3.6, 4.4)(fr) : flicker(c + 32, c + 38, '10.00', 9.6, 10.4)(fr));
	const g: R4G = {x0: 470, dx: 200, y: 640, h: 150};
	const SX = 440, SW = 760, SY = 920;
	const X = (p: number) => SX + (p / 14) * SW;
	const so = vis(f, K3.outside - 4, undefined, 12);
	const CX = 1220;
	return (
		<Overlay>
			<TaskLine text="Measure: the P03 routine" at={4} size={56} />
			<Meter x={MX} y={MY} w={MW} at={-100} probe={probe} read={read} />
			{BUFS.map((b, i) => (
				<g key={i}>
					<Bottle x={bx(i) + bkw / 2 - 40} y={240} h={110} ph={b.ph} color={b.c} at={4 + i * 4} />
					<LabelBeaker x={bx(i)} y={BKY} h={BKH} at={6 + i * 4} tint={b.tint} />
				</g>
			))}
			<Row4 g={g} at={[-100, -100, -100, -100]} size={22} subOn={false} />
			{so > 0.01 ? (
				<g opacity={so}>
					<rect x={X(4)} y={SY - 18} width={(X(10) - X(4)) * smooth(prog(f, K3.outside, 18))} height={36} rx={8} fill={GREEN_BAND} />
					<line x1={SX} y1={SY} x2={SX + SW} y2={SY} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
					{Array.from({length: 15}, (_, i) => (
						<g key={i}>
							<line x1={X(i)} y1={SY - 12} x2={X(i)} y2={SY + 12} stroke={INK_SOFT} strokeWidth={2.5} />
							<Sx x={X(i)} y={SY + 44} text={String(i)} size={24} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
						</g>
					))}
					<Sx x={SX - 16} y={SY + 9} text="pH" size={28} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
					<Sx x={(X(4) + X(10)) / 2} y={SY - 28} text="calibrated 4 to 10" size={24} color="#2f8a5b" anchor="middle" weight={700} at={K3.outside + 6} />
					{[1.08, 12.91].map((p, i) => (
						<g key={i} opacity={prog(f, K3.outside + 10 + i * 6, 10)}>
							<path d={`M${X(p) - 12},${SY - 40} L${X(p) + 12},${SY - 40} L${X(p)},${SY - 18} Z`} fill={HAZ} />
						</g>
					))}
				</g>
			) : null}
			<DimG at={K3.rinse} to={0.4}>
				<Sx x={CX} y={330} text="1 Calibrate: pH 7.00, 4.00, 10.00" size={38} color={INK} hand at={K3.cal} />
				<Sx x={CX + 34} y={374} text="at 25 °C" size={30} color={INK_SOFT} hand at={K3.cal + 10} />
			</DimG>
			<DimG at={K3.wait} to={0.4}><Sx x={CX} y={450} text="2 Rinse, blot" size={38} color={INK} hand at={K3.rinse} /></DimG>
			<DimG at={K3.three} to={0.4}><Sx x={CX} y={530} text="3 Wait for steady" size={38} color={INK} hand at={K3.wait} /></DimG>
			<DimG at={K3.one} to={0.4}>
				<Sx x={CX} y={610} text="4 Three readings, fresh portions" size={38} color={INK} hand at={K3.three} />
				<Sx x={CX} y={660} text="(P03)" size={26} color={INK_SOFT} weight={600} at={K3.fresh} />
			</DimG>
			<Note x={CX} y={760} text="outside the calibrated band:" size={34} color={HAZ} at={K3.outside + 14} />
			<Note x={CX} y={806} text="less certain" size={34} color={HAZ} at={K3.outside + 22} />
			<Note x={CX} y={880} text="a buffer near each end, if available" size={26} color={INK_SOFT} at={K3.outside + 34} hand={false} />
			{void K3.near}{void meterH}
		</Overlay>
	);
};

// ---------- 4. Results at the same concentration ----------
const S4 = 'results';
const K4 = cues(sc(S4), {means: "one class's means", hcl: 'Hydrochloric acid', h108: 'one point zero eight', eth: 'Ethanoic acid', e290: 'two point nine zero', naoh: 'Sodium hydroxide', n1291: 'twelve point nine one', amm: 'ammonia', a1110: 'eleven point one zero', z003: 'zero point zero three'});
export const RES4 = [
	{name: 'HCl', r: '1.07, 1.09, 1.08', m: '1.08'},
	{name: 'ethanoic acid', r: '2.91, 2.89, 2.90', m: '2.90'},
	{name: 'NaOH', r: '12.92, 12.89, 12.92', m: '12.91'},
	{name: 'ammonia', r: '11.09, 11.10, 11.11', m: '11.10'},
];
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const g: R4G = {x0: 420, dx: 180, y: 480, h: 160};
	const rowAt = [K4.hcl, K4.eth, K4.naoh, K4.amm];
	const meanAt = [K4.h108, K4.e290, K4.n1291, K4.a1110];
	const tip = (i: number): [number, number] => [r4Cx(g, i), g.y + g.h * 0.8];
	const rest: [number, number] = [360, 600];
	const probe = probeArc(rest, rowAt.map((a, i) => ({at: a - 6, to: tip(i)})), K4.z003 - 10);
	const read = (fr: number) => {
		let i = -1;
		rowAt.forEach((a, k) => { if (fr >= a + 18) i = k; });
		if (i < 0 || fr > K4.z003) return '';
		const v = parseFloat(MEANS4[i]);
		return flicker(rowAt[i] + 18, meanAt[i] + 4, MEANS4[i], v - 0.3, v + 0.3)(fr);
	};
	const TX = 1110, TY = 330, C = [0, 250, 580], LH = 80;
	const ry = (i: number) => TY + 80 + i * LH;
	return (
		<Overlay>
			<TaskLine text="Results: all at 0.100 mol/L" at={4} size={56} />
			<Meter x={40} y={660} w={260} at={-100} probe={probe} read={read} />
			<Row4 g={g} at={[-100, -100, -100, -100]} chip={meanAt.map(a => a + 6)} size={24} subOn={false} />
			<Fade at={K4.means}>
				{['solution', 'readings', 'mean'].map((t, i) => <Sx key={i} x={TX + C[i]} y={TY} text={t} size={30} color={INK_SOFT} hand weight={700} at={-1000} />)}
				<line x1={TX - 10} y1={TY + 18} x2={TX + 760} y2={TY + 18} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			</Fade>
			{RES4.map((r, i) => {
				const o = i < 3 ? 1 - 0.55 * prog(f, meanAt[i + 1] + 6, 14) : 1;
				return (
					<g key={i} opacity={o}>
						<Sx x={TX + C[0]} y={ry(i)} text={r.name} size={32} color={INK} weight={700} at={rowAt[i]} />
						<Sx x={TX + C[1]} y={ry(i)} text={r.r} size={32} color={INK} weight={600} at={rowAt[i] + 8} />
						<Sx x={TX + C[2]} y={ry(i)} text={'→ ' + r.m} size={32} color={TEAL} weight={800} at={meanAt[i]} />
					</g>
				);
			})}
			<Fade at={K4.z003}>
				<DrawPath d={`M${TX + C[1]},${ry(3) + 30} L${TX + C[1]},${ry(3) + 44} L${TX + C[2] - 30},${ry(3) + 44} L${TX + C[2] - 30},${ry(3) + 30}`} at={K4.z003} dur={14} color={TEAL} width={4} />
				<Sx x={TX + (C[1] + C[2] - 30) / 2} y={ry(3) + 90} text="range 0.02 to 0.03" size={34} color={TEAL} anchor="middle" hand weight={700} at={K4.z003 + 6} />
			</Fade>
		</Overlay>
	);
};

// ---------- 5. What the gap means ----------
const S5 = 'the-gap';
const K5 = cues(sc(S5), {two: 'two units lower', hundred: 'a hundred times', seventy: 'seventy times', every: 'every hydrochloric', small: 'small fraction', single: 'Single arrow', bases: 'The bases mirror', hydroxide: ['hydroxide', 2]});
export const LS = {h: {cx: 1180, cy: 330, r: 120}, w: {cx: 1620, cy: 330, r: 120}};
export const SceneGap: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 170, SW = 1580, SY = 910;
	const X = (p: number) => SX + (p / 14) * SW;
	const vals = [1.08, 2.9, 12.91, 11.1];
	const BY = 775;
	const e1 = eq(['HCl(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'Cl^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K5.single + i * 3));
	const e2 = eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K5.single + 20 + i * 3));
	const S = Math.min(fitSize(e2, 900, 38), 38);
	const EX = 960;
	const tab = smooth(prog(f, 0, 20));
	return (
		<Overlay>
			<TaskLine text="What the gap means" at={4} size={56} />
			{/* the results table from scene 4 shrinks out */}
			<g opacity={1 - tab}>
				{RES4.map((r, i) => <Sx key={i} x={1110} y={410 + i * 80} text={`${r.name}   → ${r.m}`} size={32} color={INK} weight={700} at={-1000} />)}
			</g>
			{/* the pH scale and chips */}
			<g opacity={tab}>
				<rect x={SX} y={SY - 14} width={X(7) - SX} height={28} rx={8} fill={PROTON} opacity={0.18} />
				<rect x={X(7)} y={SY - 14} width={SX + SW - X(7)} height={28} rx={8} fill={BASE} opacity={0.18} />
				<line x1={SX} y1={SY} x2={SX + SW} y2={SY} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
				{Array.from({length: 15}, (_, i) => (
					<g key={i}>
						<line x1={X(i)} y1={SY - 14} x2={X(i)} y2={SY + 14} stroke={i === 7 ? INK : INK_SOFT} strokeWidth={i === 7 ? 4 : 2.5} />
						<Sx x={X(i)} y={SY + 48} text={String(i)} size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
					</g>
				))}
				<Sx x={SX - 18} y={SY + 10} text="pH" size={30} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			</g>
			<DimG at={K5.every} to={0.38}>
				{vals.slice(0, 2).map((v, i) => <PHChip key={i} x={X(v)} y={SY - 110} text={MEANS4[i]} at={8 + i * 6} size={28} anchor="middle" drop />)}
				<Fade at={K5.two}>
					<DrawPath d={`M${X(1.08)},${BY + 14} L${X(1.08)},${BY} L${X(2.9)},${BY} L${X(2.9)},${BY + 14}`} at={K5.two} dur={14} color={PROTON_INK} width={5} />
				</Fade>
				<Sx x={(X(1.08) + X(2.9)) / 2} y={BY - 24} text="1.82 units" size={32} color={PROTON_INK} anchor="middle" weight={800} at={K5.two + 6} />
				<Fade at={K5.hundred} out={K5.seventy}>
					<line x1={X(3.08)} y1={BY - 10} x2={X(3.08)} y2={SY - 20} stroke={GLINE} strokeWidth={3} strokeDasharray="7 6" />
					<Sx x={X(3.08) + 12} y={BY - 24} text="2 units = 100 ×" size={28} color={INK_SOFT} weight={600} at={-1000} />
				</Fade>
				<Sx x={X(2.9) + 26} y={BY - 24} text="about 70 × more H_3O^{+}" size={34} color={PROTON_INK} weight={800} at={K5.seventy} />
				<Sx x={X(2.9) + 26} y={BY - 70} text="from these readings" size={26} color={INK_SOFT} weight={600} at={K5.seventy + 10} />
			</DimG>
			{vals.slice(2).map((v, i) => <PHChip key={i} x={X(v)} y={SY - 110} text={MEANS4[i + 2]} at={20 + i * 6} size={28} anchor="middle" drop />)}
			{/* lenses */}
			<FieldLens cx={LS.h.cx} cy={LS.h.cy} r={LS.h.r} at={K5.every + 6}>
				<Field cx={LS.h.cx} cy={LS.h.cy} r={LS.h.r} sp={34} s={0.6} acidFrac={0.62} seed={11} at={-1000} splitAll={{at: -1000}} amp={3} />
			</FieldLens>
			<FieldLens cx={LS.w.cx} cy={LS.w.cy} r={LS.w.r} at={K5.small + 16}>
				<Field cx={LS.w.cx} cy={LS.w.cy} r={LS.w.r} sp={34} s={0.6} acidFrac={0.72} seed={23} at={-1000} examples={[{u: 0.05, v: 0.1, at: K5.small + 34, ring: [K5.small + 30, K5.single]}]} amp={3} />
			</FieldLens>
			<Sx x={LS.h.cx} y={LS.h.cy - LS.h.r - 22} text="HCl" size={30} color={INK} anchor="middle" weight={700} at={K5.every + 6} />
			<Sx x={LS.w.cx} y={LS.w.cy - LS.w.r - 22} text="ethanoic acid" size={30} color={INK} anchor="middle" weight={700} at={K5.small + 16} />
			<DimG at={K5.single} to={0.38}><Counter x={LS.w.cx} y={LS.w.cy + LS.w.r + 14} text="a small fraction ionised" at={K5.small + 30} color={AMBER_INK} size={28} /></DimG>
			<Counter x={LS.h.cx} y={LS.h.cy + LS.h.r + 14} text="all ionised" at={K5.every + 24} color={TEAL} size={28} />
			<OpGlow items={e1} i={3} size={S} x={EX} y={600} at={K5.single + 10} len={40} />
			<EqLine items={e1} x={EX} y={600} size={S} />
			<OpGlow items={e2} i={3} size={S} x={EX} y={668} at={K5.single + 34} len={40} color={AMBER_INK} />
			<EqLine items={e2} x={EX} y={668} size={S} />
			<Fade at={K5.hydroxide}>
				<DrawPath d={`M${X(11.1)},${BY + 14} L${X(11.1)},${BY} L${X(12.91)},${BY} L${X(12.91)},${BY + 14}`} at={K5.hydroxide} dur={14} color={BASE_INK} width={5} />
			</Fade>
			<Sx x={(X(11.1) + X(12.91)) / 2} y={BY - 24} text="12.91 vs 11.10: far more OH^{−} from NaOH" size={30} color={BASE_INK} anchor="middle" weight={800} at={K5.hydroxide + 6} />
			{void K5.bases}
		</Overlay>
	);
};

// ---------- 6. Test 2: dilute tenfold ----------
const S6 = 'dilution-method';
const K6 = cues(sc(S6), {trusts: 'trusts the labels', second: 'second test', pip: 'volumetric pipette', ten: 'ten millilitres', flask: 'volumetric flask', mark: 'up to the mark', tenfold: 'tenfold', whatever: 'whatever the', moves: 'pH moves'});
export const ROWT: R4G = {x0: 1130, dx: 190, y: 240, h: 110};
export const ROWD: R4G = {x0: 1130, dx: 190, y: 480, h: 110};
export const FL = {x: 700, y: 470, h: 520};
export const SceneDilMethod: React.FC = () => {
	const f = useCurrentFrame();
	const neck = flaskPt(FL.x, FL.y, FL.h, 1024, FLASK_G.cropTop);
	const ringY = flaskPt(FL.x, FL.y, FL.h, 0, FLASK_G.ring)[1];
	const neckL = flaskPt(FL.x, FL.y, FL.h, 962, 0)[0];
	const PH = 400, tip: [number, number] = [neck[0], neck[1] + 40];
	const pipO = vis(f, K6.pip - 16, K6.mark - 10, 14);
	const bulb = pipPt(tip[0], tip[1], PH, PIPETTE_G.tilt, PIPETTE_G.bulb[0], PIPETTE_G.bulb[1]);
	const bulbFill = kf(f, [[K6.pip, 0], [K6.pip + 24, 1], [K6.ten + 14, 1], [K6.flask, 0]]);
	const level = (fr: number) => kf(fr, [[K6.ten + 14, 1852], [K6.flask, 1800], [K6.mark + 6, 1800], [K6.mark + 66, FLASK_G.ring]]);
	const surfY = flaskPt(FL.x, FL.y, FL.h, 0, level(f))[1];
	const flowO = vis(f, K6.ten + 14, K6.flask, 6);
	// wash bottle (mirrored, nozzle pointing left into the neck)
	const WH = 220, k = WH / WASH.box[3], ww = picW(WASH, WH);
	const nozzle: [number, number] = [neck[0] + 70, neck[1] - 120];
	const wx = nozzle[0] - (ww - (WASH_N.nozzle[0] - WASH.box[0]) * k), wy = nozzle[1] - (WASH_N.nozzle[1] - WASH.box[1]) * k;
	const washO = vis(f, K6.mark - 10, K6.mark + 80, 10);
	const slideT = smooth(prog(f, 0, 24));
	const rowD = smooth(prog(f, K6.moves, 24));
	const strip = '10.00 mL → 100.0 mL: ', sw = mw(strip, 42, false, 700);
	const SX = 1130;
	return (
		<Overlay>
			<TaskLine text="Test 2: dilute tenfold" at={K6.second - 10} size={56} />
			<DimG at={K6.second} to={0.45}>
				<g transform={`translate(0,${(1 - slideT) * 140})`}>
					<Sx x={ROWT.x0} y={ROWT.y - 20} text="0.100 mol/L (labelled)" size={24} color={INK_SOFT} weight={700} at={-1000} />
					<Row4 g={ROWT} at={[-100, -100, -100, -100]} size={20} subOn={false} />
				</g>
			</DimG>
			<Note x={ROWT.x0} y={440} text="a wrong label could fool test 1" size={30} color={AMBER_INK} at={K6.trusts} out={K6.pip} />
			{rowD > 0.01 ? (
				<g opacity={rowD} transform={`translate(${(1 - rowD) * 200},0)`}>
					<Sx x={ROWD.x0} y={ROWD.y - 20} text="÷ 10: 0.0100 mol/L" size={26} color={TEAL} weight={800} at={-1000} />
					<Row4 g={ROWD} at={[-100, -100, -100, -100]} size={20} subOn={false} />
				</g>
			) : null}
			{/* flask and pipette */}
			<Fade at={K6.pip - 20}>
				<FlaskFill x={FL.x} y={FL.y} h={FL.h} level={level} stopper={prog(f, K6.mark + 80, 14)} />
			</Fade>
			{pipO > 0.01 ? (
				<g opacity={pipO}>
					<PipettePlate tipX={tip[0]} tipY={tip[1]} h={PH} rot={PIPETTE_G.tilt} />
					<ellipse cx={bulb[0]} cy={bulb[1]} rx={13} ry={30} fill="#9cc8e6" opacity={0.75 * bulbFill} />
				</g>
			) : null}
			{flowO > 0.01 ? <line x1={tip[0]} y1={tip[1]} x2={tip[0]} y2={surfY} stroke="#9cc8e6" strokeWidth={6} strokeLinecap="round" opacity={0.85 * flowO} /> : null}
			<g opacity={washO}><g transform={`translate(${wx + ww},${wy}) scale(-1,1)`}><PicH p={WASH} x={0} y={0} h={WH} /></g></g>
			<Stream a={nozzle} b={[neck[0] + 6, neck[1] - 10]} at={K6.mark + 4} out={K6.mark + 66} />
			<DimG at={K6.tenfold} to={0.38}>
				<Note x={bulb[0] - 50} y={bulb[1] + 10} text="10.00 mL" size={36} color={INK} anchor="end" at={K6.pip + 14} />
				<Fade at={K6.flask}><line x1={neckL - 4} y1={ringY} x2={FL.x - 40} y2={ringY} stroke={INK_SOFT} strokeWidth={3} /></Fade>
				<Note x={FL.x - 50} y={ringY + 12} text="100.0 mL" size={36} color={INK} anchor="end" at={K6.flask + 4} />
				<Note x={neck[0]} y={1045} text="make up to the mark; stopper; invert to mix" size={30} color={INK_SOFT} anchor="middle" at={K6.mark + 20} />
			</DimG>
			<Sx x={SX} y={760} text={strip + '÷ 10'} size={42} color={INK} weight={700} at={K6.tenfold} />
			<Ring cx={SX + sw + 58} cy={746} rx={56} ry={34} at={K6.tenfold + 16} color={TEAL} seed={4} />
			<Sx x={SX} y={820} text="c_2 = 0.100 × 10.00 ÷ 100.0 = 0.0100 mol/L" size={28} color={INK_SOFT} weight={600} at={K6.tenfold + 10} />
			<Note x={SX} y={890} text="true whatever the label says" size={36} color={TEAL} at={K6.whatever} />
			{void ROW4}
		</Overlay>
	);
};

// ---------- 7. The dilution results ----------
const S7 = 'dilution-results';
const K7 = cues(sc(S7), {hcl: 'Hydrochloric acid', h204: 'two point zero four', one: 'one unit', eth: 'Ethanoic acid', e339: 'three point three nine', half: 'half a unit', bases: 'the bases', naoh: 'Sodium hydroxide', amm: 'ammonia', half2: ['half', 2]});
export const AX_A: VA = {x: 190, top: 300, bottom: 860, lo: 0.5, hi: 4.0};
export const AX_B: VA = {x: 760, top: 300, bottom: 860, lo: 10.0, hi: 13.5};
export const BARS = [
	{a: AX_A, x: 300, p: [1.08, 2.04], solid: true, name: 'HCl', d: '+0.96'},
	{a: AX_A, x: 430, p: [2.9, 3.39], solid: false, name: 'ethanoic', d: '+0.49'},
	{a: AX_B, x: 870, p: [12.91, 11.95], solid: true, name: 'NaOH', d: '−0.96'},
	{a: AX_B, x: 1000, p: [11.1, 10.6], solid: false, name: 'ammonia', d: '−0.50'},
];
/** The two small axes with the four change bars (bars at times `at`, each with an optional pulse and opacity). */
export const BarPanels: React.FC<{at: number[]; axAt?: number; o?: number[]; pulse?: (number | undefined)[]; size?: number; axO?: [number, number]}> = ({at, axAt = -100, o = [1, 1, 1, 1], pulse = [], size = 26, axO = [1, 1]}) => (
	<>
		<VAxis a={AX_A} ticks={[1, 2, 3, 4]} at={axAt} label="acids" o={axO[0]} />
		<VAxis a={AX_B} ticks={[10, 11, 12, 13]} at={axAt} label="bases" o={axO[1]} />
		{BARS.map((b, i) => {
			const acid = b.a === AX_A;
			return (
				<g key={i} opacity={o[i]}>
					<ChangeBar x={b.x} y1={vaY(b.a, b.p[0])} y2={vaY(b.a, b.p[1])} at={at[i]} solid={b.solid} color={acid ? PROTON : BASE} ink={acid ? PROTON_INK : BASE_INK} pulse={pulse[i]} />
					<Sx x={b.x} y={b.a.bottom + 50} text={b.name} size={size} color={INK} anchor="middle" weight={700} at={at[i]} />
				</g>
			);
		})}
	</>
);
export const DRES = [
	{name: 'HCl', a: '1.08', b: '→ 2.04', d: '+0.96'},
	{name: 'ethanoic acid', a: '2.90', b: '→ 3.39', d: '+0.49'},
	{name: 'NaOH', a: '12.91', b: '→ 11.95', d: '−0.96'},
	{name: 'ammonia', a: '11.10', b: '→ 10.60', d: '−0.50'},
];
export const SceneDilResults: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [K7.hcl, K7.eth, K7.naoh, K7.amm];
	const toAt = [K7.h204, K7.e339, K7.naoh + 14, K7.amm + 10];
	const dAt = [K7.one, K7.half, K7.naoh + 36, K7.half2];
	const TX = 1110, TY = 330, C = [0, 250, 400, 590];
	const ry = (i: number) => TY + 90 + i * 84;
	return (
		<Overlay>
			<TaskLine text="How far did the pH move?" at={4} size={56} />
			<BarPanels at={toAt} />
			<VBracket2 x={BARS[0].x + 44} y1={vaY(AX_A, 1.08)} y2={vaY(AX_A, 2.04)} text="0.96" at={K7.one} color={PROTON_INK} />
			<VBracket2 x={BARS[1].x + 44} y1={vaY(AX_A, 2.9)} y2={vaY(AX_A, 3.39)} text="0.49" at={K7.half} color={PROTON_INK} />
			<Fade at={2}>
				{['', '0.100 mol/L', '÷ 10', 'change'].map((t, i) => <Sx key={i} x={TX + C[i]} y={TY} text={t} size={28} color={INK_SOFT} hand weight={700} at={-1000} />)}
				<line x1={TX - 10} y1={TY + 18} x2={TX + 730} y2={TY + 18} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			</Fade>
			{DRES.map((r, i) => {
				const o = i < 3 ? 1 - 0.55 * prog(f, rowAt[i + 1], 14) : 1;
				return (
					<g key={i} opacity={o}>
						<Sx x={TX + C[0]} y={ry(i)} text={r.name} size={34} color={INK} weight={700} at={rowAt[i]} />
						<Sx x={TX + C[1]} y={ry(i)} text={r.a} size={34} color={INK} weight={600} at={rowAt[i] + 8} />
						<Sx x={TX + C[2]} y={ry(i)} text={r.b} size={34} color={INK} weight={600} at={toAt[i]} />
						<Sx x={TX + C[3]} y={ry(i)} text={r.d} size={34} color={i % 2 === 0 ? TEAL : AMBER_INK} weight={800} at={dAt[i]} />
					</g>
				);
			})}
			{void K7.bases}{void DIL4}{void Ghost}{void fullMeterW}{void lerp}
		</Overlay>
	);
};
