// M6 P04 scenes 8 to 13: why the strong acid moves about one unit (the hydronium spreads through ten times the volume);
// why the weak acid moves only about half (diluted ions meet less often, a bigger fraction stays ionised); the bases and
// the P03 check (the gap narrows on dilution); the variables; validity, reliability and accuracy; the risk table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {AMMONIA, BEAKER, FLASK_G, GLASSES, HOLDER, PIPETTE, WASH} from './assets';
import {
	AChip, AMBER_INK, An, BASE_INK, CROSS, Counter, DimG, DrawPath, Fade, Field, FieldLens, FlaskFill, FullMeter, GLINE, GREEN_BAND, H3O, HA, HAZ, INK, INK_SOFT, IconPlate, LensFrame,
	Note, Overlay, PHChip, PROTON, PROTON_INK, PenLink, PicH, RTable, Ring, Row4, Sx, TEAL, TaskLine, TempChip, VBracket2, VCard, VolBox, clamp01, flaskPt, fullMeterW, lerp, r4Cx, smooth, vaY, vis,
} from './parts';
import type {R4G} from './parts';
import {AX_A, BARS, BarPanels} from './s1';

// ---------- a short pH line with a step from p0 to p1 ----------
const StepLine: React.FC<{x: number; y: number; w: number; lo: number; hi: number; p0: number; p1: number; at: number; label: string; color: string; o?: number; size?: number}> = ({x, y, w, lo, hi, p0, p1, at, label, color, o = 1, size = 34}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 10, undefined, 10) * o;
	if (v <= 0.01) return null;
	const X = (p: number) => x + ((p - lo) / (hi - lo)) * w;
	const q = smooth(prog(f, at, 20));
	const pm = lerp(p0, p1, q);
	const ticks = Array.from({length: Math.round((hi - lo) * 2) + 1}, (_, i) => lo + i * 0.5);
	return (
		<g opacity={v}>
			<line x1={x} y1={y} x2={x + w} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{ticks.map(t => <line key={t} x1={X(t)} y1={y - (t % 1 === 0 ? 12 : 7)} x2={X(t)} y2={y + (t % 1 === 0 ? 12 : 7)} stroke={INK_SOFT} strokeWidth={2.5} />)}
			{ticks.filter(t => t % 1 === 0).map(t => <Sx key={t} x={X(t)} y={y + 42} text={String(t)} size={24} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />)}
			<rect x={X(p0)} y={y - 9} width={X(pm) - X(p0)} height={18} rx={6} fill={color} opacity={0.5} />
			<circle cx={X(p0)} cy={y} r={9} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<circle cx={X(pm)} cy={y} r={11} fill={color} />
			<Sx x={(X(p0) + X(p1)) / 2} y={y - 26} text={label} size={size} color={color} anchor="middle" weight={800} at={at + 10} />
		</g>
	);
};

// ---------- 8. Why the strong acid moves about one unit ----------
const S8 = 'strong-moves-one';
const K8 = cues(sc(S8), {why: 'Why about', ionised: 'ionised', diluting: 'Diluting it', spreads: 'spreads', tenth: 'tenth', one: 'one pH unit'});
const PTS: [number, number][] = [[-0.6, -0.5], [0.1, -0.7], [0.7, -0.4], [-0.25, 0.0], [0.4, 0.15], [-0.75, 0.5], [0.05, 0.7], [0.75, 0.75], [-0.45, -0.05], [0.25, -0.2]];
export const SceneStrong: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 640, cy: 590, r: 320};
	const K = Math.sqrt(10);
	const grow = smooth(clamp01((f - K8.spreads - 6) / (K8.tenth + 6 - K8.spreads)));
	const W0 = 150, H0 = 110;
	return (
		<Overlay>
			<TaskLine text="Why strong moves about one unit" at={4} size={56} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={8}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f3f8fb" />
				<VolBox cx={L.cx} cy={L.cy} w={() => W0 * (1 + (K - 1) * grow)} h={() => H0 * (1 + (K - 1) * grow)} pts={PTS} kind="H" at={-100} s={1.0} />
				<g opacity={vis(f, K8.spreads + 6, undefined, 10) * 0.8}>
					<rect x={L.cx - W0 / 2} y={L.cy - H0 / 2} width={W0} height={H0} rx={18} fill="none" stroke={GLINE} strokeWidth={3} strokeDasharray="6 6" />
				</g>
			</LensFrame>
			<Sx x={L.cx} y={L.cy - L.r - 20} text="HCl: already all ionised" size={32} color={INK} anchor="middle" weight={700} at={K8.ionised} />
			<Note x={L.cx} y={L.cy + L.r + 56} text="nothing left to ionise" size={36} color={TEAL} anchor="middle" at={K8.ionised + 10} />
			<Note x={L.cx + 120} y={L.cy - H0 / 2 - 14} text="before" size={24} color={INK_SOFT} at={K8.spreads + 14} out={K8.tenth} hand={false} />
			<Sx x={L.cx} y={L.cy + 230} text="10 × the volume" size={30} color={INK_SOFT} anchor="middle" weight={700} at={K8.tenth - 10} />
			<Counter x={1460} y={360} text="H_3O^{+} per litre: ÷ 10" at={K8.tenth} color={PROTON_INK} size={36} />
			<StepLine x={1170} y={620} w={580} lo={0.5} hi={3} p0={1} p1={2} at={K8.one} label="+1" color={PROTON_INK} size={44} />
			<Sx x={1170} y={760} text="measured +0.96: real ions affect each other" size={26} color={INK_SOFT} weight={600} at={K8.one + 40} />
			<Sx x={1170} y={796} text="a little, so meters read just under 1" size={26} color={INK_SOFT} weight={600} at={K8.one + 46} />
			{void K8.why}{void K8.diluting}
		</Overlay>
	);
};

// ---------- 9. Why the weak acid moves only about half ----------
const S9 = 'weak-moves-half';
const K9 = cues(sc(S9), {different: 'is different', dilute: 'dilute it', meet: 'meet less often', fewer: 'fewer join', bigger: 'bigger fraction', make: 'make up', less: 'less than ten times', half: 'half a unit'});
/** An ion pair (hydronium and ethanoate) that starts together and drifts apart from `at`. */
const Drift: React.FC<{x: number; y: number; at: number; dx: number; dy: number; ring?: boolean}> = ({x, y, at, dx, dy, ring}) => {
	const f = useCurrentFrame();
	const q = smooth(clamp01((f - at) / 50));
	return (
		<g>
			<circle cx={x} cy={y} r={44 + 60 * q} fill="#eef6fb" opacity={0.75} />
			<H3O x={x - 16 - dx * q} y={y - dy * q} s={1.3} />
			<An x={x + 16 + dx * q} y={y + dy * q} s={1.3} />
			{ring ? <Ring cx={x} cy={y} rx={60 + 50 * q} ry={46 + 30 * q} at={at - 4} out={at + 90} color={TEAL} seed={5} width={4} /> : null}
		</g>
	);
};
/** Narrow-lens inset: an ion pair meets and re-forms a whole molecule from `at`. */
const Reform: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const q = smooth(clamp01((f - at) / 30));
	const done = f > at + 30;
	return (
		<g>
			<circle cx={x} cy={y} r={46} fill="#eef6fb" opacity={0.85} />
			{done ? <HA x={x} y={y} s={1.1} /> : (
				<>
					<H3O x={x - lerp(40, 10, q)} y={y - lerp(16, 2, q)} s={1.0} />
					<An x={x + lerp(40, 10, q)} y={y + lerp(16, 2, q)} s={1.0} />
				</>
			)}
			<Ring cx={x} cy={y} rx={42} ry={38} at={at + 30} out={at + 110} color={AMBER_INK} seed={7} width={4} />
		</g>
	);
};
export const SceneWeak: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 860, cy: 520, r: 290};
	const I = {cx: 1430, cy: 330, r: 110};
	const H = {cx: 250, cy: 470, r: 140};
	const keep = (fr: number) => kf(fr, [[K9.meet - 20, 1], [K9.meet + 30, 0.5]]);
	const PX = 1250, PW = 520;
	return (
		<Overlay>
			<TaskLine text="Why weak moves only about half" at={4} size={56} />
			{/* HCl lens, small, for contrast */}
			<LensFrame cx={H.cx} cy={H.cy} r={H.r} at={-100}>
				<rect x={H.cx - H.r} y={H.cy - H.r} width={2 * H.r} height={2 * H.r} fill="#f3f8fb" />
				<VolBox cx={H.cx} cy={H.cy} w={() => 230} h={() => 170} pts={PTS} kind="H" at={-100} s={0.7} />
			</LensFrame>
			<Sx x={H.cx} y={H.cy - H.r - 20} text="HCl, diluted" size={28} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
			{/* ethanoic acid lens */}
			<FieldLens cx={L.cx} cy={L.cy} r={L.r} at={K9.different - 20}>
				<Field cx={L.cx} cy={L.cy} r={L.r} sp={44} s={0.78} acidFrac={0.7} seed={23} at={-1000} keep={keep}
					examples={[{u: 0.4, v: 0.45, at: -1000}, {u: -0.45, v: 0.35, at: K9.bigger, ring: [K9.bigger - 4, K9.less]}, {u: 0.15, v: -0.62, at: K9.bigger + 10, ring: [K9.bigger + 6, K9.less]}]} />
				<Drift x={L.cx - 120} y={L.cy - 110} at={K9.meet} dx={46} dy={20} ring />
				<Drift x={L.cx + 150} y={L.cy + 20} at={K9.meet + 8} dx={40} dy={-26} />
			</FieldLens>
			<Sx x={L.cx} y={L.cy - L.r - 20} text="ethanoic acid, diluted" size={32} color={INK} anchor="middle" weight={700} at={K9.different - 10} />
			{/* the narrow (undiluted) inset: a pair re-forms there */}
			<FieldLens cx={I.cx} cy={I.cy} r={I.r} at={K9.meet - 6} out={K9.bigger + 30}>
				<Field cx={I.cx} cy={I.cy} r={I.r} sp={30} s={0.55} acidFrac={0.8} seed={31} at={-1000} amp={2} />
				<Reform x={I.cx} y={I.cy} at={K9.meet + 10} />
			</FieldLens>
			<Sx x={I.cx} y={I.cy - I.r - 18} text="before dilution: ions rejoin" size={26} color={INK_SOFT} anchor="middle" weight={700} at={K9.meet - 6} out={K9.bigger + 30} />
			<Note x={L.cx - 330} y={L.cy + L.r + 60} text="ions meet less often" size={36} color={TEAL} at={K9.meet + 14} out={K9.bigger} />
			<Counter x={L.cx} y={L.cy + L.r + 24} text="fraction ionised: small → bigger" at={K9.bigger + 14} color={AMBER_INK} size={30} />
			{/* the + arrow into the hydronium counter */}
			<Fade at={K9.make}>
				<DrawPath d={`M${L.cx + 250},${L.cy + 170} Q${1150},${760} ${PX},${880}`} at={K9.make} dur={16} color={TEAL} width={5} />
				<Sx x={1150} y={800} text="+" size={56} color={TEAL} anchor="middle" weight={800} at={K9.make + 6} />
			</Fade>
			<Sx x={PX} y={900} text="H_3O^{+} per litre: falls," size={32} color={PROTON_INK} weight={700} at={K9.make + 12} />
			<Sx x={PX} y={944} text="but by less than ÷ 10" size={32} color={PROTON_INK} weight={700} at={K9.make + 18} />
			{/* the two steps */}
			<Sx x={PX} y={540} text="HCl" size={28} color={INK} weight={700} at={4} />
			<StepLine x={PX + 150} y={530} w={PW - 150} lo={1} hi={3.5} p0={1.08} p1={2.04} at={-100} label="+1" color={PROTON_INK} />
			<Sx x={PX} y={680} text="ethanoic" size={28} color={INK} weight={700} at={K9.less - 10} />
			<StepLine x={PX + 150} y={670} w={PW - 150} lo={2} hi={4.5} p0={2.9} p1={3.39} at={K9.less} label="+0.5" color={AMBER_INK} />
			{void K9.dilute}{void K9.fewer}{void K9.half}
		</Overlay>
	);
};

// ---------- 10. The bases, and a check ----------
const S10 = 'bases-and-check';
const K10 = cues(sc(S10), {bases: 'The bases mirror', ammonia: 'Ammonia only', falls: 'pH falls', last: 'last practical', gap: 'the gap', two: 'almost two units', four: 'one point four', tt: 'twenty three times', narrows: 'narrows the gap', weak: 'weak acid ionises'});
const P03V = ['2.03', '3.40', '11.96', '10.59'];
const OURS = ['2.04', '3.39', '11.95', '10.60'];
export const SceneBases: React.FC = () => {
	const f = useCurrentFrame();
	const acidO = kf(f, [[K10.gap - 10, 0.4], [K10.gap + 4, 1]]);
	const baseO = kf(f, [[K10.last, 1], [K10.last + 14, 0.4], [K10.gap, 0.4], [K10.gap + 14, 0]]);
	const axBO = kf(f, [[K10.gap, 1], [K10.gap + 14, 0]]);
	const CX = 1210, CX2 = 1560, CY = 420, LH = 70;
	const yv = (i: number) => CY + 60 + i * LH;
	const card = 1 - 0.62 * prog(f, K10.gap, 14);
	return (
		<Overlay>
			<TaskLine text="The bases, and a check" at={4} size={56} />
			<BarPanels at={[-100, -100, -100, -100]} o={[acidO, acidO, baseO, baseO]} pulse={[undefined, K10.narrows, undefined, undefined]} axO={[1, axBO]} />
			<g opacity={baseO}>
				<Sx x={BARS[2].x + 40} y={vaY(BARS[2].a, 12.43) + 10} text="−0.96" size={30} color={BASE_INK} weight={800} at={K10.bases} />
				<Sx x={BARS[3].x + 40} y={vaY(BARS[3].a, 10.85) + 10} text="−0.50" size={30} color={BASE_INK} weight={800} at={K10.ammonia} />
			</g>
			<Note x={BARS[2].x - 60} y={250} text="partly reacts: more react on dilution" size={32} color={BASE_INK} at={K10.ammonia + 20} out={K10.last} />
			{/* P03 card */}
			<g opacity={card}>
				<Fade at={K10.last}>
					<rect x={CX - 40} y={CY - 50} width={700} height={370} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<Sx x={CX} y={CY} text="÷ 10 (this class)" size={28} color={INK} hand weight={700} at={-1000} />
					<Sx x={CX2} y={CY} text="P03 (0.010 mol/L)" size={28} color={INK_SOFT} hand weight={700} at={-1000} />
				</Fade>
				{OURS.map((v, i) => <Sx key={'o' + i} x={CX + 40} y={yv(i)} text={v} size={34} color={INK} weight={700} at={K10.last + 4 + i * 4} />)}
				{P03V.map((v, i) => <Sx key={'p' + i} x={CX2 + 40} y={yv(i)} text={v} size={34} color={INK_SOFT} weight={700} at={K10.last + 10 + i * 4} />)}
				{OURS.map((_, i) => <PenLink key={'l' + i} a={[CX + 140, yv(i) - 11]} b={[CX2 + 28, yv(i) - 11]} at={K10.last + 20 + i * 5} />)}
				<Note x={CX + 230} y={CY + 345} text="within 0.01" size={34} color={TEAL} at={K10.last + 40} />
			</g>
			{/* the gap before and after dilution */}
			<g opacity={1 - 0.55 * prog(f, K10.four, 14)}>
				<VBracket2 x={500} y1={vaY(AX_A, 1.08)} y2={vaY(AX_A, 2.9)} text="1.82 units (before)" at={K10.two} color={GLINE} size={28} dy={60} />
			</g>
			<VBracket2 x={640} y1={vaY(AX_A, 2.04)} y2={vaY(AX_A, 3.39)} text="1.35 units (after)" at={K10.four} color={PROTON_INK} size={32} />
			<Sx x={656} y={vaY(AX_A, 2.715) + 60} text="P03: about 23 ×" size={34} color={PROTON_INK} hand weight={700} at={K10.tt} />
			{void K10.falls}{void K10.weak}{void PROTON}
		</Overlay>
	);
};

// ---------- 11. The variables ----------
const S11 = 'variables';
const K11 = cues(sc(S11), {vars: 'the variables', ind: 'independent variable', two: 'test two', dep: 'dependent variable', change: 'its change', ctrl: 'control', conc: 'the concentration', temp: 'the temperature', vol: 'the volume', meter: 'calibrated meter', rinse: 'rinsing routine'});
export const SceneVariables: React.FC = () => {
	const g: R4G = {x0: 80, dx: 170, y: 700, h: 120};
	const MX = 90, MY = 250, MH = 240;
	const FX = 780, FY = 560, FH = 330;
	const ring = flaskPt(FX, FY, FH, 1086, FLASK_G.ring);
	const CX = 1010;
	const ry = (i: number) => 610 + i * 58;
	const by = g.y - 46;
	return (
		<Overlay>
			<TaskLine text="The variables" at={K11.vars - 10} size={56} />
			<FullMeter x={MX} y={MY} h={MH} at={-100} read={() => '1.08'} />
			<PicH p={WASH} x={430} y={250} h={210} />
			<TempChip x={640} y={300} from={25.0} at={-100} />
			<Row4 g={g} at={[-100, -100, -100, -100]} size={18} subOn={false} />
			<path d={`M${r4Cx(g, 0) - 60},${by + 14} L${r4Cx(g, 0) - 60},${by} L${r4Cx(g, 3) + 60},${by} L${r4Cx(g, 3) + 60},${by + 14}`} fill="none" stroke={TEAL} strokeWidth={4} />
			<Sx x={(r4Cx(g, 0) + r4Cx(g, 3)) / 2} y={by - 14} text="0.100 mol/L" size={26} color={TEAL} anchor="middle" weight={700} at={-1000} />
			<FlaskFill x={FX} y={FY} h={FH} level={() => FLASK_G.ring} />
			<Sx x={FX + 100} y={FY + FH + 40} text="÷ 10" size={28} color={TEAL} anchor="middle" weight={800} at={-1000} />
			<DimG at={K11.dep} to={0.42}>
				<Sx x={CX} y={330} text="Independent: which substance (test 1);" size={32} color={INK} weight={700} at={K11.ind} />
				<Sx x={CX + 190} y={374} text="diluted or not (test 2)" size={32} color={INK} weight={700} at={K11.two} />
			</DimG>
			<DimG at={K11.ctrl} to={0.42}>
				<Sx x={CX} y={450} text="Dependent: pH (test 1);" size={32} color={INK} weight={700} at={K11.dep} />
				<Sx x={CX + 170} y={494} text="change in pH (test 2)" size={32} color={INK} weight={700} at={K11.change} />
			</DimG>
			<Sx x={CX} y={560} text="Controlled:" size={36} color={TEAL} hand at={K11.ctrl} />
			{([['0.100 mol/L (test 1); exactly ÷ 10 (test 2)', K11.conc, [r4Cx(g, 3) + 66, by + 6]], ['25 °C', K11.temp, [800, 330]], ['20 mL in each beaker', K11.vol, [r4Cx(g, 3) + 60, g.y + 60]], ['same calibrated meter', K11.meter, [MX + fullMeterW(MH) - 20, MY + 80]], ['same rinse routine', K11.rinse, [545, 380]]] as [string, number, [number, number]][]).map(([t, at, tgt], i) => (
				<g key={i}>
					<Sx x={CX + 30} y={ry(i)} text={t} size={30} color={INK} weight={600} at={at} />
					<PenLink a={[CX + 10, ry(i) - 11]} b={tgt} at={at + 6} out={i < 4 ? [K11.temp, K11.vol, K11.meter, K11.rinse][i] : undefined} />
				</g>
			))}
			<PenLink a={[CX + 10, ry(0) - 11]} b={[ring[0] + 10, ring[1]]} at={K11.conc + 12} out={K11.temp} />
		</Overlay>
	);
};

// ---------- 12. Validity, reliability and accuracy ----------
const S12 = 'validity-reliability';
const K12 = cues(sc(S12), {validity: 'Validity', matching: 'Matching the', two: 'test two checks', reliability: 'Reliability', repeats: 'repeats agree', across: 'across two', accuracy: 'Accuracy', outside: 'outside the', big: 'big gaps'});
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const X = 96, CW = 1040, RX = 1240;
	const g: R4G = {x0: RX, dx: 150, y: 250, h: 100};
	const SX = RX, SW = 560, SY = 760;
	const XS = (p: number) => SX + (p / 14) * SW;
	return (
		<Overlay>
			<TaskLine text="Validity, reliability, accuracy" at={4} size={52} />
			<VCard x={X} y={200} w={CW} h={180} title="Validity: does it measure strength?" titleAt={K12.validity} at={K12.validity - 4} dim={K12.reliability} lines={[
				{t: 'Matched 0.100 mol/L;', at: K12.matching},
				{t: "the dilution test doesn't rely on labels.", at: K12.two},
			]} />
			<VCard x={X} y={410} w={CW} h={180} title="Reliability: do repeats agree?" titleAt={K12.reliability} at={K12.reliability - 4} dim={K12.accuracy} lines={[
				{t: 'Within 0.03;', at: K12.repeats},
				{t: 'diluted values match P03 within 0.01.', at: K12.across},
			]} />
			<VCard x={X} y={620} w={CW} h={180} title="Accuracy: close to the true pH?" titleAt={K12.accuracy} at={K12.accuracy - 4} color={AMBER_INK} lines={[
				{t: 'Strong readings outside the 4 to 10', at: K12.outside},
				{t: 'calibration: less certain.', at: K12.outside + 10},
			]} />
			<AChip x={X} y={830} text="1.82 units; 0.96 vs 0.49: far bigger than the uncertainty" size={32} color={TEAL} hand={false} at={K12.big} />
			<DimG at={K12.reliability} to={0.38}>
				<Row4 g={g} at={[K12.matching, K12.matching + 4, K12.matching + 8, K12.matching + 12]} size={18} subOn={false} />
				<Sx x={RX} y={g.y - 20} text="all 0.100 mol/L" size={26} color={TEAL} weight={700} at={K12.matching + 10} />
			</DimG>
			<DimG at={K12.accuracy} to={0.38}>
				{['1.07', '1.09', '1.08'].map((t, i) => <PHChip key={i} x={RX + i * 150} y={480} text={t} at={K12.repeats + i * 6} size={30} />)}
				<Sx x={RX} y={600} text="range 0.02" size={30} color={TEAL} hand weight={700} at={K12.repeats + 20} />
			</DimG>
			<Fade at={K12.outside - 4}>
				<rect x={XS(4)} y={SY - 16} width={XS(10) - XS(4)} height={32} rx={8} fill={GREEN_BAND} />
				<line x1={SX} y1={SY} x2={SX + SW} y2={SY} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
				{[0, 2, 4, 6, 8, 10, 12, 14].map(p => <g key={p}><line x1={XS(p)} y1={SY - 10} x2={XS(p)} y2={SY + 10} stroke={INK_SOFT} strokeWidth={2.5} /><Sx x={XS(p)} y={SY + 40} text={String(p)} size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
				{[1.08, 12.91].map(p => <path key={p} d={`M${XS(p) - 11},${SY - 38} L${XS(p) + 11},${SY - 38} L${XS(p)},${SY - 18} Z`} fill={HAZ} />)}
			</Fade>
			<Sx x={X} y={1040} text="NESA glossary: validity, the extent to which tests measure what was intended." size={24} color={INK_SOFT} weight={600} at={K12.validity + 20} />
			{void f}
		</Overlay>
	);
};

// ---------- 13. The risk assessment ----------
const S13 = 'risk-assessment';
const K13 = cues(sc(S13), {risk: 'risk assessment', naoh: 'sodium hydroxide', irritant: 'irritant', glasses: 'safety glasses', acids: 'The acids', stocks: 'concentrated stocks', corrosive: 'corrosive', filler: 'filler', mouth: 'by mouth'});
export const SceneRisk: React.FC = () => {
	const T = {x: 96, y: 200, rowH: 118};
	const cols = [650, 440, 650];
	const iconW = 110, headH = 58;
	const ry = (j: number) => T.y + headH + j * T.rowH;
	const ic = (p: typeof BEAKER, j: number) => <IconPlate p={p} x={T.x + 10} y={ry(j) + 8} w={iconW - 20} h={T.rowH - 16} />;
	const pipTop: [number, number] = [T.x + 10 + (iconW - 20) / 2 + 8, ry(3) + 24];
	return (
		<>
			<Heading text="The risk assessment" at={4} size={60} />
			<Overlay>
				<RTable x={T.x} y={T.y} cols={cols} head={['Hazard', 'Harm', 'Control']} at={K13.risk} rowH={T.rowH} size={24} iconW={iconW} rows={[
					{at: K13.naoh, icon: ic(BEAKER, 0), cells: [['0.100 mol/L NaOH (0.40 %): just below', 'the EU irritant limit (0.5 %);', 'supplier sheets vary, so check yours'], ['a splash can still harm eyes', 'and skin: treat it as harmful'], ['safety glasses;', 'rinse splashes with water']]},
					{at: K13.acids, icon: ic(BEAKER, 1), cells: [['0.100 mol/L HCl, ethanoic acid, NH_3:', 'below classification limits'], 'eye irritation from a splash', ['safety glasses; small volumes;', 'cap the ammonia']]},
					{at: K13.stocks, icon: ic(AMMONIA, 2), cells: [['concentrated stocks (conc. HCl, glacial', 'ethanoic acid, conc. ammonia, solid NaOH):', 'corrosive, H314'], 'severe burns', 'teacher only']},
					{at: K13.filler - 16, icon: ic(PIPETTE, 3), cells: ['pipetting', 'swallowing solution', 'pipette filler, never by mouth']},
					{at: K13.mouth + 30, icon: ic(HOLDER, 4), cells: ['glass bulb, glassware', 'cuts', ['probe in its holder; flask on the', 'bench, not held by the neck']]},
				]} />
				<Ring cx={pipTop[0]} cy={pipTop[1]} rx={24} ry={22} at={K13.filler} out={K13.mouth + 30} color={CROSS} seed={3} />
				<Fade at={K13.glasses}>
					<Sx x={1420} y={150} text="always:" size={34} color={TEAL} hand at={K13.glasses} />
					<PicH p={GLASSES} x={1540} y={110} h={56} />
				</Fade>
				<Fade at={K13.corrosive}><Sx x={T.x + 4} y={ry(2) + T.rowH - 6} text="teacher only" size={16} color={CROSS} weight={700} at={-1000} /></Fade>
				<AChip x={T.x} y={T.y + headH + 5 * T.rowH + 30} text="follow your school's risk assessment and each bottle's safety data sheet" size={28} color={TEAL} hand={false} at={K13.mouth + 50} />
				{void K13.irritant}{void BASE_INK}{void lerp}
			</Overlay>
		</>
	);
};
