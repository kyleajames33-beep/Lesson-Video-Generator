// M8 C06 scenes 1 to 8: the hook (the Menindee fish deaths, the 48-hour oxygen trace with first light and noon), dissolved
// oxygen (the lake with its O2 glyphs, a zoom on a fish's gills, the saturation bars and the low band), the snapshot (the
// trace, a shutter on one moment, the DO meter logging through the night, the Winkler check), taking the sample (the
// bottle fills, a trapped bubble is crossed, stopper, fix at once), the three Winkler steps (fix: the brown solid and the
// electron hop; acidify: iodine and its electron hop; titrate: thiosulfate from the burette, starch blue, the endpoint)
// and the ratio ladder built from the three equations.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {BOTTLE1, BURETTE, DOM, Heading, LAKE, NB, TILE, WB, WB_A, sc} from './common';
import type {PDef} from './common';
import {
	AChip, Arrow, BottleStates, BuretteFill, CAxes, CCurve, ChainPills, DimG, Dropper, EHop, ELEC_INK, Fade, FallDrop, FlaskTint, GREYX, Glyph, HTag, INK, INK_SOFT, IOD, IOD_INK, Lock, MN2, MN2_INK, MNO,
	MNO_INK, MistakeX, NAVY, O2C, O2Glyph, O2_INK, PicF, PicV, RED8, RatioLadder, Ring, RiverMap, SatBar, Shutter, StepPills, SunGlyph, Sx, TaskLine, WaterCol, burAt, clamp01, doFn, gx, gy, lerp,
	natPt, picWp, rigGeom, smooth, vis, wbPt, wbW, ANS, STARCH, GREYT, Note,
} from './parts';
import type {CG, WBox} from './parts';

const ramp = (f: number, a: number, b: number, v0: number, v1: number) => lerp(v0, v1, smooth(clamp01((f - a) / Math.max(1, b - a))));
export const lakeBox = (g: {x: number; y: number; h: number}): WBox => {
	const [x0, top] = natPt(LAKE.clear, g.x, g.y, g.h, 440, 660);
	const [x1, bot] = natPt(LAKE.clear, g.x, g.y, g.h, 1890, 990);
	return {x0, x1, top: top + 8, bot};
};

// ---------- the 48-hour trace (C05's shape) ----------
const TraceMarker: React.FC<{g: CG; t: number; at: number; label: string; color: string; above?: boolean; size?: number; out?: number}> = ({g, t, at, label, color, above = true, size = 34, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	const x = gx(g, t), y = gy(g, doFn(t));
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={13} fill={color} stroke="#fffdf8" strokeWidth={3} />
			<Sx x={x} y={above ? y - 26 : y + 52} text={label} size={size} color={color} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};
const DayNight: React.FC<{g: CG}> = ({g}) => (
	<>
		{[12, 36].map(t => <SunGlyph key={'s' + t} x={gx(g, t)} y={gy(g, 1.2)} r={11} />)}
		{[0, 24, 48].map(t => <path key={'m' + t} d={`M${gx(g, t) + 4},${gy(g, 1.2) - 12} A12,12 0 1 0 ${gx(g, t) + 4},${gy(g, 1.2) + 12} A9,9 0 1 1 ${gx(g, t) + 4},${gy(g, 1.2) - 12} Z`} fill="#8a92b8" stroke="#4e5680" strokeWidth={2} />)}
	</>
);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {millions: 'millions', darling: 'Darling-Baaka', menindee: 'Menindee', review: 'review', low: 'low dissolved oxygen', cause: 'cause', fisheries: 'fisheries reports', first: 'first light', noon: 'noon', fine: 'looked fine', so: 'So what', bod: 'BOD', them: 'them'});
const G1: CG = {x: 1240, y: 250, w: 580, h: 440, x0: 0, x1: 48, y0: 0, y1: 14};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Oxygen now, oxygen later: dissolved oxygen and BOD" at={4} size={50} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<PicV p={LAKE.crash} x={96} y={215} h={460} />
				<Sx x={96} y={752} text="Darling-Baaka River, Menindee, March 2023" size={42} color={INK} weight={800} at={K1.darling - 30} />
				<Sx x={96} y={806} text="millions of fish died (estimate)" size={40} color={RED8} hand weight={700} at={K1.millions} />
				<AChip x={96} y={828} text="NSW Chief Scientist and Engineer review, 2023" size={28} color={GREYX} hand={false} at={K1.review} />
				<O2Glyph x={124} y={930} s={1.5} o={prog(f, K1.low, 14) * (1 - 0.6 * prog(f, K1.cause, 30))} />
				<Sx x={170} y={942} text="most likely cause: hypoxia, oxygen too low" size={38} color={O2_INK} hand weight={700} at={K1.low} />
				<AChip x={96} y={968} text="first-light observations: NSW DPI Fisheries submission, July 2023, p4" size={26} color={GREYX} hand={false} at={K1.first} />
				<CAxes g={G1} at={6} xLabel="time (hours)" yLabel="dissolved oxygen (mg/L)" xTicks={[0, 12, 24, 36, 48]} yTicks={[0, 4, 8, 12]} size={28} />
				<DayNight g={G1} />
				<CCurve g={G1} fn={doFn} xa={0} xb={48} upto={fr => ramp(fr, 14, 150, 0.01, 48)} color={O2_INK} width={6} />
				<Sx x={G1.x + G1.w} y={G1.y + G1.h + 104} text="shape illustrative" size={28} color={GREYX} anchor="end" hand at={20} />
				<TraceMarker g={G1} t={27} at={K1.first} label="first light: lowest" color={RED8} above={false} />
				<SunGlyph x={gx(G1, 27)} y={gy(G1, doFn(27)) - 40} at={K1.first} r={16} />
				<TraceMarker g={G1} t={12} at={K1.noon} label="noon: looked fine" color="#b8860b" />
				<Fade at={K1.them - 10}>
					<rect x={1180} y={880} width={640} height={150} rx={20} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
					<Sx x={1210} y={940} text="DO: oxygen now" size={44} color={NAVY} weight={800} at={-1000} />
					<Sx x={1210} y={1004} text="BOD: oxygen used later" size={44} color={NAVY} weight={800} at={K1.them} />
				</Fade>
				{void K1.fisheries}{void K1.fine}{void K1.so}{void K1.bod}
			</svg>
		</>
	);
};

// ---------- 2. Dissolved oxygen ----------
const K2 = cues(sc('dissolved-oxygen'), {do: 'or DO', gas: 'oxygen gas', mg: 'milligrams', fish: 'Fish and', gills: 'gills', air: 'Air-saturated', nine: 'nine', warmer: 'warmer water', less: 'less', when: 'When DO', few: 'few milligrams', struggle: 'struggle'});
const LK2 = {x: 96, y: 230, h: 480};
/** A round zoom on the painted lake: the plate drawn k times larger, centred on natural point n. */
const PlateZoom: React.FC<{p: PDef; n: [number, number]; cx: number; cy: number; r: number; hFull: number; at: number}> = ({p, n, cx, cy, r, hFull, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const k = hFull / p.box[3];
	const x = cx - (n[0] - p.box[0]) * k, y = cy - (n[1] - p.box[1]) * k;
	const id = `pz-${Math.round(cx)}`;
	return (
		<g opacity={v}>
			<clipPath id={id}><circle cx={cx} cy={cy} r={r} /></clipPath>
			<g clipPath={`url(#${id})`}><image href={staticFile(p.src)} x={x - p.box[0] * k} y={y - p.box[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} /></g>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={5} />
		</g>
	);
};
export const SceneDO: React.FC = () => {
	const f = useCurrentFrame();
	const b = lakeBox(LK2);
	const fishS = natPt(LAKE.clear, LK2.x, LK2.y, LK2.h, 1360, 778);
	const ZC: [number, number] = [1100, 390];
	const BASE = 760, BH = 420;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Dissolved oxygen (DO)" at={0} />
			<PicV p={LAKE.clear} x={LK2.x} y={LK2.y} h={LK2.h} />
			<WaterCol b={b} n={() => 4} o2={() => 11} rise={() => 0.4} />
			<HTag x={96} y={790} text="dissolved oxygen (DO): O_2 gas dissolved" size={42} color={O2_INK} at={K2.gas - 20} />
			<HTag x={96} y={846} text="in the water, measured in mg/L" size={42} color={O2_INK} at={K2.mg} />
			{/* the gill zoom */}
			<Fade at={K2.fish - 20}>
				<path d={`M${fishS[0] + 20},${fishS[1] - 10} L${ZC[0] - 120},${ZC[1] + 20}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
				<circle cx={fishS[0]} cy={fishS[1]} r={34} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			</Fade>
			<PlateZoom p={LAKE.clear} n={[1385, 782]} cx={ZC[0]} cy={ZC[1]} r={125} hFull={LK2.h * 3.2} at={K2.fish - 20} />
			{[0, 1, 2, 3].map(i => {
				const u = ((f - K2.gills + i * 18) % 72) / 72;
				if (f < K2.gills - 30) return null;
				return <O2Glyph key={i} x={lerp(ZC[0] - 115, ZC[0] - 10, u)} y={ZC[1] - 10 + Math.sin(i * 1.7) * 26} s={0.8} o={Math.sin(u * Math.PI) * prog(f, K2.gills - 30, 12)} />;
			})}
			<Sx x={ZC[0]} y={ZC[1] + 166} text="fish take in O_2" size={32} color={INK} anchor="middle" weight={700} at={K2.gills - 10} />
			<Sx x={ZC[0]} y={ZC[1] + 206} text="at their gills" size={32} color={INK} anchor="middle" weight={700} at={K2.gills - 10} />
			{/* saturation bars */}
			<line x1={1250} x2={1760} y1={BASE} y2={BASE} stroke={INK} strokeWidth={4} />
			<SatBar x={1290} base={BASE} v={9.1} h={BH} at={6} labelAt={K2.nine - 12} w={110} label="about 9.1 mg/L" sub="20 °C" size={32} />
			<SatBar x={1580} base={BASE} v={7.6} h={BH} at={12} labelAt={K2.warmer - 6} w={110} color="#a9cde6" label="about 7.6 mg/L" sub="30 °C" size={32} />
			<Sx x={1505} y={BASE + 92} text="air-saturated fresh water" size={32} color={INK_SOFT} anchor="middle" hand weight={700} at={K2.air} />
			<AChip x={1250} y={196} text="c05: warm water holds less O_2" size={30} color={GREYX} hand={false} at={K2.warmer} />
			<Fade at={K2.few}>
				<rect x={1250} y={BASE - (3 / 10) * BH} width={510} height={(3 / 10) * BH} fill={RED8} opacity={0.16} />
				<line x1={1250} x2={1760} y1={BASE - (3 / 10) * BH} y2={BASE - (3 / 10) * BH} stroke={RED8} strokeWidth={3} strokeDasharray="10 8" />
			</Fade>
			<Sx x={1000} y={930} text="low DO: many fish stressed" size={44} color={RED8} hand weight={700} at={K2.few} />
			<Sx x={1000} y={990} text="hypoxia: oxygen too low for many animals" size={36} color={INK} weight={700} at={K2.struggle} />
			{void K2.do}{void K2.when}
		</svg>
	);
};

// ---------- 3. A snapshot ----------
const K3 = cues(sc('snapshot'), {changes: 'changes', lake: 'In a', high: 'high in', dawn: 'dawn', snapshot: 'snapshot', meter: 'DO meter', probe: 'probe', seconds: 'seconds', log: 'log all', night: 'night', calibrated: 'calibrated', checked: 'checked', winkler: 'Winkler', titration: 'titration'});
const G3: CG = {x: 760, y: 250, w: 1000, h: 460, x0: 0, x1: 48, y0: 0, y1: 14};
export const SceneSnapshot: React.FC = () => {
	const f = useCurrentFrame();
	const MP = {x: 120, y: 240, h: 470};
	const tip = natPt(DOM, MP.x, MP.y, MP.h, 1122, 1765);
	const logs = Array.from({length: 17}, (_, i) => 15 + i * 1.5);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="One reading is a snapshot" at={0} />
			<CAxes g={G3} at={4} xLabel="time (hours)" yLabel="dissolved oxygen (mg/L)" xTicks={[0, 12, 24, 36, 48]} yTicks={[0, 4, 8, 12]} size={30} />
			<DayNight g={G3} />
			<CCurve g={G3} fn={doFn} xa={0} xb={48} upto={fr => ramp(fr, 8, K3.lake + 40, 0.01, 48)} color={O2_INK} width={6} />
			<TraceMarker g={G3} t={15} at={K3.high} label="afternoon: high" color="#b8860b" />
			<TraceMarker g={G3} t={27} at={K3.dawn} label="dawn: lowest" color={RED8} above={false} />
			<Shutter x={gx(G3, 15)} y={gy(G3, doFn(15)) - 110} r={34} at={K3.snapshot - 10} snap={K3.snapshot} />
			<HTag x={gx(G3, 15) + 70} y={gy(G3, doFn(15)) - 110} text="one reading = one moment" size={36} color={INK} at={K3.snapshot} />
			{logs.map((t, i) => {
				const a = K3.log + i * 5;
				const v = prog(f, a, 6);
				return v > 0.01 ? <circle key={i} cx={gx(G3, t)} cy={gy(G3, doFn(t))} r={8} fill={NAVY} stroke="#fffdf8" strokeWidth={2} opacity={v} /> : null;
			})}
			<HTag x={G3.x} y={866} text="logging: a reading every 15 min" size={34} color={NAVY} at={K3.night} />
			<Sx x={G3.x + G3.w} y={G3.y - 40} text="shape illustrative" size={28} color={GREYX} anchor="end" hand at={20} />
			{/* the meter */}
			<rect x={tip[0] - 120} y={tip[1] - 60} width={250} height={90} rx={8} fill="#bcdcef" opacity={0.55} />
			<path d={`M${tip[0] - 120},${tip[1] - 60} q30,-12 62,0 t62,0 t62,0 t62,0`} fill="none" stroke="#4f86ad" strokeWidth={3} />
			<Sx x={tip[0] + 140} y={tip[1] + 10} text="water" size={28} color="#3f7fb0" hand weight={700} at={-1000} />
			<PicV p={DOM} x={MP.x} y={MP.y} h={MP.h} />
			<HTag x={96} y={800} text="DO meter: a probe reads" size={38} color={INK} at={K3.meter} />
			<HTag x={96} y={850} text="O_2 in the water, in seconds" size={38} color={INK} at={K3.seconds} />
			<AChip x={96} y={882} text="meters drift: calibrated before use" size={30} color={GREYX} hand={false} at={K3.calibrated} />
			<PicV p={BURETTE} x={1640} y={830} h={220} at={K3.winkler - 10} />
			<Fade at={K3.winkler}>
				<rect x={900} y={930} width={620} height={84} rx={42} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
				<Sx x={1210} y={986} text="check: Winkler titration" size={42} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{void K3.changes}{void K3.probe}{void K3.checked}{void K3.titration}
		</svg>
	);
};

// ---------- 4. Taking the sample ----------
const K4 = cues(sc('sampling'), {river: 'river', bottle: 'The bottle', overflow: 'overflowing', bubbles: 'air bubbles', stoppered: 'stoppered', matters: 'matters', air: 'air contains', single: 'single bubble', fixed: 'fixed', away: 'straight away', change: 'change'});
export const SceneSampling: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 640, y: 210, h: 780};
	const P = (n: [number, number]) => wbPt(B.x, B.y, B.h, n);
	const [bx0, by1] = P([WB_A.bx0, WB_A.by1]);
	const [bx1] = P([WB_A.bx1, 0]);
	const [nx0, ny0] = P([880, 430]);
	const [nx1] = P([1120, 610]);
	const [, bTop] = P([0, 720]);
	const lvlN = ramp(f, 10, K4.overflow + 24, WB_A.by1, 430);
	const [, lvl] = P([0, lvlN]);
	const [sx, sy] = P(WB_A.shoulder);
	const [tx, ty] = P([1000, WB_A.top]);
	const flash = f >= K4.bubbles - 6 ? 0.6 + 0.4 * Math.sin((f - K4.bubbles) * 0.35) : 0;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Winkler: first, take the sample" at={0} />
			<PicV p={BOTTLE1} x={96} y={300} h={420} />
			<HTag x={96} y={780} text="at the river" size={40} color={INK} at={K4.river - 10} />
			<Arrow x1={470} y1={560} x2={620} y2={600} at={K4.bottle} color={INK_SOFT} width={5} />
			<clipPath id="c06fill">
				<rect x={bx0 + 6} y={bTop} width={bx1 - bx0 - 12} height={by1 - bTop} rx={60} />
				<rect x={nx0} y={ny0} width={nx1 - nx0} height={bTop - ny0 + 40} />
			</clipPath>
			<g clipPath="url(#c06fill)"><rect x={bx0} y={lvl} width={bx1 - bx0} height={by1 - lvl} fill="#9cc9e8" opacity={0.42} /></g>
			<PicF p={WB.clear} x={B.x} y={B.y} h={B.h} />
			{/* overflow trickle */}
			<Fade at={K4.overflow + 10}>
				{[0, 1, 2].map(i => {
					const u = ((f - K4.overflow + i * 20) % 60) / 60;
					return <circle key={i} cx={nx1 + 14} cy={lerp(ny0 - 10, ny0 + 200, u)} r={7} fill="#9cc9e8" stroke="#4f86ad" strokeWidth={1.5} opacity={Math.sin(u * Math.PI)} />;
				})}
			</Fade>
			{/* the trapped bubble */}
			<Fade at={K4.bubbles - 8}>
				<circle cx={sx} cy={sy} r={24} fill="#ffffff" stroke="#6b7a86" strokeWidth={3} opacity={flash} />
			</Fade>
			<DrawPath d={`M${sx - 40},${sy - 40} L${sx + 40},${sy + 40}`} at={K4.bubbles + 14} dur={8} color={RED8} width={8} />
			<DrawPath d={`M${sx + 40},${sy - 40} L${sx - 40},${sy + 40}`} at={K4.bubbles + 20} dur={8} color={RED8} width={8} />
			<HTag x={sx + 60} y={sy + 12} text="a bubble adds O_2" size={36} color={RED8} at={K4.bubbles + 10} />
			<Arrow x1={tx + 150} y1={ty - 10} x2={tx + 50} y2={ty + 30} at={K4.stoppered} color={NAVY} width={5} />
			<HTag x={tx + 160} y={ty} text="stoppered" size={36} color={NAVY} at={K4.stoppered} />
			{/* the checklist */}
			<Sx x={1240} y={380} text="1. fill it to overflowing" size={40} color={INK} weight={700} at={K4.overflow - 6} />
			<Sx x={1240} y={470} text="2. no air bubbles" size={40} color={INK} weight={700} at={K4.bubbles} />
			<Sx x={1240} y={560} text="3. stopper it" size={40} color={INK} weight={700} at={K4.stoppered} />
			<Sx x={1240} y={660} text="air contains oxygen:" size={40} color={RED8} hand weight={700} at={K4.air} />
			<Sx x={1240} y={710} text="one bubble would add some" size={40} color={RED8} hand weight={700} at={K4.single} />
			<Fade at={K4.air}>
				<circle cx={1700} cy={650} r={70} fill="#ffffff" stroke="#6b7a86" strokeWidth={4} />
				<O2Glyph x={1680} y={630} s={1} />
				<O2Glyph x={1720} y={675} s={1} />
				<Sx x={1700} y={750} text="air bubble" size={28} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
			</Fade>
			<Fade at={K4.fixed}>
				<rect x={1220} y={790} width={600} height={170} rx={20} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
				<Sx x={1250} y={856} text="4. fix the O_2 at once" size={46} color={NAVY} weight={800} at={-1000} />
				<Sx x={1250} y={920} text="so it can't escape or change" size={36} color={INK} weight={600} at={K4.change - 20} />
			</Fade>
			{void K4.matters}{void K4.away}
		</svg>
	);
};

// ---------- the Winkler step layout (scenes 5 to 7) ----------
const WBX = {x: 210, y: 330, h: 640};

// ---------- 5. Step 1: fix the oxygen ----------
const K5 = cues(sc('winkler-fix'), {one: 'Step one', add: 'Add manganese', mn: 'manganese two sulfate', alk: 'alkaline iodide', pale: 'pale', forms: 'forms', oxidises: 'oxidises', brown: 'brown solid', every: 'Every oxygen', locked: 'locked', out: 'out'});
export const SceneFix: React.FC = () => {
	const f = useCurrentFrame();
	const [dx, dy] = wbPt(WBX.x, WBX.y, WBX.h, [1000, WB_A.top - 20]);
	const done = prog(f, K5.oxidises + 40, 20);
	const [lx, ly] = wbPt(WBX.x, WBX.y, WBX.h, [1000, 1150]);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Step 1: fix the oxygen" at={0} />
			<StepPills lit={[0]} />
			<BottleStates x={WBX.x} y={WBX.y} h={WBX.h} states={[{p: WB.clear, at: -1000}, {p: WB.brown, at: K5.brown - 24, dur: 40}]} cloud={[K5.pale - 6, K5.brown + 10]} />
			<Dropper x={dx} y={dy} s={0.9} at={K5.add} out={K5.alk - 4} label="MnSO_4" />
			{[0, 1, 2].map(i => <FallDrop key={'a' + i} x={dx} y0={dy} y1={dy + 150} at={K5.mn + 10 + i * 16} color="#f1e7e7" />)}
			<Dropper x={dx} y={dy} s={0.9} at={K5.alk} out={K5.pale + 20} label="alkaline KI" />
			{[0, 1, 2].map(i => <FallDrop key={'b' + i} x={dx} y0={dy} y1={dy + 150} at={K5.alk + 12 + i * 16} color="#eef4f8" />)}
			<HTag x={WBX.x + wbW(WBX.h) + 30} y={WBX.y + WBX.h * 0.55} text="pale Mn(OH)_2 forms" size={34} color={MN2_INK} at={K5.pale} out={K5.brown} />
			<Lock x={lx} y={ly} at={K5.locked} s={1.3} />
			<HTag x={WBX.x - 10} y={WBX.y + WBX.h + 60} text="O_2 fixed: nothing in or out" size={38} color={MNO_INK} at={K5.out - 30} />
			{/* the equation and the electron hop */}
			<rect x={760} y={230} width={1064} height={120} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={1292} y={310} text="2Mn(OH)_2 + O_2 → 2MnO(OH)_2" size={58} color={INK} anchor="middle" weight={800} at={6} />
			<Glyph x={960} y={560} label="Mn(OH)_2" fill={MN2} ink={MN2_INK} r={82} size={30} o={1 - done} />
			<Glyph x={960} y={560} label="MnO(OH)_2" fill="#c49a74" ink={MNO_INK} r={82} size={28} o={done} />
			<O2Glyph x={1400} y={560} s={3} />
			<Sx x={1400} y={660} text="O_2" size={40} color={O2_INK} anchor="middle" weight={800} at={-1000} />
			<EHop a={[1030, 530]} b={[1330, 530]} at={K5.oxidises} until={K5.oxidises + 90} />
			<Sx x={960} y={680} text="Mn(II)" size={36} color={MN2_INK} anchor="middle" weight={800} at={10} />
			<Sx x={1170} y={430} text="electrons" size={32} color={ELEC_INK} anchor="middle" hand weight={700} at={K5.oxidises} />
			<HTag x={790} y={770} text="Mn(II) is oxidised: it loses electrons to O_2" size={40} color={INK} at={K5.oxidises + 10} />
			<Fade at={K5.brown}>
				<rect x={770} y={820} width={1050} height={90} rx={45} fill="#f6ead9" stroke={MNO} strokeWidth={5} />
				<Sx x={1295} y={880} text="MnO(OH)_2: a brown manganese(IV) solid" size={42} color={MNO_INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Sx x={790} y={990} text="every O_2 molecule is now trapped in the solid" size={36} color={NAVY} weight={700} at={K5.every} />
			{void K5.one}{void K5.forms}
		</svg>
	);
};

// ---------- 6. Step 2: turn it into iodine ----------
const K6 = cues(sc('winkler-iodine'), {two: 'Step two', add: 'Add sulfuric', brown: 'The brown', dissolves: 'dissolves', mn: 'its manganese', oxidise: 'oxidise iodide', iodine: 'iodine', turns: 'yellow-brown', more: 'The more oxygen', solid: 'brown solid formed', get: 'get'});
export const SceneIodine: React.FC = () => {
	const f = useCurrentFrame();
	const [dx, dy] = wbPt(WBX.x, WBX.y, WBX.h, [1000, WB_A.top - 20]);
	const merged = prog(f, K6.iodine + 30, 20);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Step 2: turn it into iodine" at={0} />
			<StepPills lit={[-1000, 0]} />
			<BottleStates x={WBX.x} y={WBX.y} h={WBX.h} states={[{p: WB.brown, at: -1000}, {p: WB.iodine, at: K6.dissolves, dur: 50}]} />
			<Dropper x={dx} y={dy} s={0.9} at={4} out={K6.dissolves + 10} label="H_2SO_4" />
			{[0, 1, 2, 3].map(i => <FallDrop key={i} x={dx} y0={dy} y1={dy + 150} at={K6.add + 6 + i * 16} color="#f4f0e4" />)}
			<HTag x={WBX.x + wbW(WBX.h) + 30} y={WBX.y + WBX.h * 0.5} text="the brown solid dissolves" size={34} color={MNO_INK} at={K6.dissolves} out={K6.turns} />
			<HTag x={WBX.x + wbW(WBX.h) + 30} y={WBX.y + WBX.h * 0.5} text="yellow-brown: iodine" size={38} color={IOD_INK} at={K6.turns} />
			<Sx x={760} y={230} text="step 1: the O_2 is trapped in brown MnO(OH)_2" size={32} color={INK_SOFT} weight={600} at={2} />
			<rect x={760} y={260} width={1064} height={110} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={1292} y={334} text="MnO(OH)_2 + 2I^{−} + 4H^{+} → Mn^{2+} + I_2 + 3H_2O" size={46} color={INK} anchor="middle" weight={800} at={6} />
			<Glyph x={960} y={520} label="I^{−}" fill="#f1ead0" ink={IOD_INK} r={44} size={30} o={1 - merged} />
			<Glyph x={960} y={640} label="I^{−}" fill="#f1ead0" ink={IOD_INK} r={44} size={30} o={1 - merged} />
			<Glyph x={960} y={580} label="I_2" fill="#e6c46a" ink={IOD_INK} r={60} size={34} o={merged} />
			<Glyph x={1400} y={580} label="MnO(OH)_2" fill="#c49a74" ink={MNO_INK} r={86} size={28} />
			<EHop a={[1010, 520]} b={[1330, 560]} at={K6.iodine - 30} until={K6.iodine + 50} bow={-70} />
			<EHop a={[1010, 640]} b={[1330, 600]} at={K6.iodine - 19} until={K6.iodine + 50} bow={70} />
			<Sx x={960} y={730} text="iodide ions" size={32} color={IOD_INK} anchor="middle" hand weight={700} at={10} out={K6.iodine + 30} />
			<Sx x={1400} y={700} text="oxidising agent" size={32} color={MNO_INK} anchor="middle" hand weight={700} at={K6.mn} />
			<HTag x={790} y={800} text="iodide is oxidised to iodine" size={42} color={IOD_INK} at={K6.iodine} />
			<ChainPills x={790} y={880} items={['more O_2', 'more MnO(OH)_2', 'more I_2']} lit={[K6.more, K6.solid - 10, K6.get - 20]} size={34} color={IOD} at={K6.more - 10} />
			{void K6.two}{void K6.brown}{void K6.oxidise}{void MNO}{void GREYT}
		</svg>
	);
};

// ---------- 7. Step 3: titrate the iodine ----------
const K7 = cues(sc('winkler-titrate'), {three: 'Step three', portion: 'measured portion', flask: 'flask', thio: 'sodium thiosulfate', burette: 'burette', back: 'back into', yellow: 'yellow fades', straw: 'pale straw', starch: 'starch', bb: 'blue-black', endpoint: 'endpoint', disappears: 'disappears', never: 'never meets', itself: 'itself', measures: 'measures the iodine', stands: 'stands in'});
const R7 = {tx: 720, ty: 540, bh: 430, fh: 300};
export const SceneTitrate: React.FC = () => {
	const f = useCurrentFrame();
	const b = burAt(R7.tx, R7.ty, R7.bh);
	const G = rigGeom(R7.tx, R7.ty, R7.fh);
	const tw = G.w * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const level = (fr: number) => ramp(fr, K7.thio, K7.disappears, 0, 9);
	const drops: number[] = [];
	for (let t = K7.thio + 10; t < K7.disappears; t += 15) drops.push(t);
	const chainY = 790;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Step 3: titrate the iodine" at={0} />
			<StepPills lit={[-1000, -1000, 0]} />
			<PicV p={WB.iodine} x={110} y={420} h={380} />
			<HTag x={110} y={860} text="the iodine sample" size={34} color={IOD_INK} at={4} />
			<Arrow x1={300} y1={520} x2={560} y2={640} at={K7.portion} color={INK_SOFT} width={5} />
			<HTag x={300} y={470} text="a measured portion" size={32} color={INK_SOFT} at={K7.portion} />
			<PicF p={TILE} x={R7.tx - tw / 2} y={G.y + R7.fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={R7.bh} level={level} />
			<FlaskTint x={G.x} y={G.y} h={R7.fh} straw={K7.straw} blue={K7.starch + 16} clear={K7.disappears - 4} />
			{drops.map((t, i) => <FallDrop key={i} x={R7.tx} y0={R7.ty - 4} y1={G.y + R7.fh * 0.6} at={t} color="#cdd8ee" />)}
			<Dropper x={R7.tx + 80} y={G.y + 10} s={0.75} at={K7.starch - 14} out={K7.bb} label="starch" />
			<FallDrop x={R7.tx + 80} y0={G.y + 10} y1={G.y + R7.fh * 0.6} at={K7.starch} color="#eef0f4" />
			<Sx x={b.x + 170} y={b.y + 120} text="Na_2S_2O_3(aq)" size={32} color={NAVY} weight={800} at={K7.thio} />
			{/* right column */}
			<rect x={1000} y={200} width={824} height={110} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={1412} y={274} text="I_2 + 2S_2O_3^{2−} → 2I^{−} + S_4O_6^{2−}" size={48} color={INK} anchor="middle" weight={800} at={6} />
			<Sx x={1020} y={370} text="thiosulfate turns iodine back into iodide" size={36} color={NAVY} weight={700} at={K7.back - 20} />
			<HTag x={1020} y={450} text="yellow → pale straw" size={40} color={IOD_INK} at={K7.straw} />
			<HTag x={1020} y={520} text="starch + iodine: blue-black" size={40} color={STARCH} at={K7.bb} />
			<Fade at={K7.disappears}>
				<rect x={1000} y={560} width={824} height={92} rx={46} fill="#eaf5ee" stroke={ANS} strokeWidth={5} />
				<Sx x={1412} y={621} text="endpoint: the blue just disappears" size={42} color={ANS} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Fade at={K7.itself - 10}>
				<Sx x={1020} y={chainY} text="O_2 → MnO(OH)_2 → I_2 → S_2O_3^{2−}" size={44} color={INK} weight={800} at={-1000} />
				<DrawPath d={`M1050,${chainY + 22} Q1400,${chainY + 130} 1740,${chainY + 22}`} at={K7.itself} dur={20} color={GREYX} width={4} dash="10 9" />
				<Sx x={1400} y={chainY + 120} text="never react directly" size={34} color={GREYT} anchor="middle" hand weight={700} at={K7.itself + 10} />
			</Fade>
			<Sx x={1020} y={1000} text="the iodine stands in for the O_2" size={40} color={NAVY} hand weight={700} at={K7.stands} />
			{void K7.three}{void K7.flask}{void K7.burette}{void K7.yellow}{void K7.endpoint}{void K7.never}{void K7.measures}{void NB}{void IOD}
		</svg>
	);
};

// ---------- 8. The ratio, step by step ----------
const K8 = cues(sc('ratio'), {how: 'how much', follow: 'Follow', one: 'One oxygen molecule', fixes: 'fixes two', each: 'Each manganese', frees: 'frees one', two: "that's two", and: 'And each', takes: 'takes two', four: 'four thiosulfates', last: ['One oxygen', 2], lastFour: ['four thiosulfates', 2]});
const EQS: {t: string; step: string; lit: [number, number]}[] = [
	{t: '2Mn(OH)_2 + O_2 → 2MnO(OH)_2', step: '1 fix', lit: [K8.one, K8.each]},
	{t: 'MnO(OH)_2 + 2I^{−} + 4H^{+} → Mn^{2+} + I_2 + 3H_2O', step: '2 acidify', lit: [K8.each, K8.and]},
	{t: 'I_2 + 2S_2O_3^{2−} → 2I^{−} + S_4O_6^{2−}', step: '3 titrate', lit: [K8.and, K8.last]},
];
const Dots: React.FC<{x: number; y: number; n: number; color: string; ink: string; at: number}> = ({x, y, n, color, ink, at}) => {
	const f = useCurrentFrame();
	return <g>{Array.from({length: n}, (_, i) => { const v = prog(f, at + i * 5, 8); return v > 0.01 ? <circle key={i} cx={x + i * 38} cy={y} r={14} fill={color} stroke={ink} strokeWidth={2.5} opacity={v} /> : null; })}</g>;
};
export const SceneRatio: React.FC = () => {
	const f = useCurrentFrame();
	const fold = prog(f, K8.last - 10, 20);
	const RX = 1180, RY = 220, GAP = 175;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="How much thiosulfate per oxygen?" at={0} />
			{EQS.map((e, i) => {
				const g = vis(f, e.lit[0], e.lit[1], 12);
				const y = 260 + i * 190;
				return (
					<g key={i}>
						<rect x={96} y={y} width={1000} height={150} rx={20} fill={g > 0.5 ? '#fff6dc' : '#fffdf8'} stroke={g > 0.01 ? '#c9781a' : 'rgba(60,45,20,0.22)'} strokeWidth={g > 0.01 ? 5 : 3} />
						<Sx x={124} y={y + 48} text={e.step} size={34} color={MNO_INK} hand weight={700} at={4 + i * 6} />
						<Sx x={124} y={y + 116} text={e.t} size={i === 1 ? 40 : 46} color={INK} weight={800} at={4 + i * 6} opacity={0.55 + 0.45 * Math.max(g, prog(f, K8.last, 12))} />
					</g>
				);
			})}
			<DimG at={K8.last - 10} to={0.35}>
				<RatioLadder x={RX} y={RY} gap={GAP} size={46} rungs={[
					{t: '1 O_2', color: O2_INK, at: K8.one},
					{t: '2 MnO(OH)_2', color: MNO_INK, at: K8.fixes, mult: '× 2'},
					{t: '2 I_2', color: IOD_INK, at: K8.frees, mult: '× 1'},
					{t: '4 S_2O_3^{2−}', color: NAVY, at: K8.takes, mult: '× 2'},
				]} />
				<Dots x={RX + 510} y={RY + 39} n={1} color={O2C} ink={O2_INK} at={K8.one} />
				<Dots x={RX + 510} y={RY + 39 + GAP} n={2} color="#c49a74" ink={MNO_INK} at={K8.fixes} />
				<Dots x={RX + 510} y={RY + 39 + GAP * 2} n={2} color="#e6c46a" ink={IOD_INK} at={K8.frees} />
				<Dots x={RX + 490} y={RY + 39 + GAP * 3} n={4} color="#9fb3d8" ink={NAVY} at={K8.takes} />
			</DimG>
			<Fade at={K8.last - 6}>
				<rect x={96} y={850} width={960} height={140} rx={24} fill="#fffdf8" stroke={NAVY} strokeWidth={6} transform={`translate(0,${(1 - smooth(fold)) * 30})`} />
				<Sx x={576} y={945} text="1 O_2 : 4 S_2O_3^{2−}" size={72} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<MistakeX x={RX} y={930} text="1 O_2 : 1 S_2O_3^{2−}" at={K8.last + 6} cross={K8.lastFour} note="follow all three equations" size={36} />
			{void K8.how}{void K8.follow}{void K8.two}{void K8.four}{void Ring}{void Note}{void MN2}{void picWp}{void IOD}{void GREYT}{void PicV}
		</svg>
	);
};
