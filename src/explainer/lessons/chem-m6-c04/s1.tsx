// M6 C04 scenes 1 to 5: four problems with one cause, what neutralising does and how to choose a base, the stomach,
// why soil turns acidic, agricultural lime.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMD, ANTACID, BEAKER, FERT, MARBLE, SCRUB, SOIL} from './assets';
import {
	AChip, AMBER, AMBER_INK, Bubbles, CO2C, CO2_INK, CROSS, Chip, ChoiceCard, EqLine, Fade, Grain, HTok, HEAT_INK, INK, INK_SOFT, LensFrame, MetalTok, Mistake, Mol, Note, OHTok, Overlay, PHBar, PairAt,
	PicH, PlateAt, PlateCrop, Proton, ProtonHop, Rain, Ring, Sx, TEAL, WTok, cropH, eq, fitH, fitSize, keys, lerp, natPt, picW, pulseAt, slotAt, smooth, vis, wob,
} from './parts';
import type {PDef} from './assets';

const LENS_BG = '#eef6fb';
export const DUCT: [number, number, number, number] = [264, 880, 1010, 1400];
export const CELLS = [{x: 96, y: 196, w: 844, h: 380}, {x: 980, y: 196, w: 844, h: 380}, {x: 96, y: 606, w: 844, h: 380}, {x: 980, y: 606, w: 844, h: 380}];
/** The four settings in a 2 × 2 grid. ats: when each plate arrives. Returns the plate centres too. */
export const gridGeom = () => {
	const c = CELLS;
	const sh = fitH(SOIL.acid, 760, 330), ah = fitH(AMD, 760, 330), dw = 500;
	return {
		stomach: {beaker: {x: c[0].x + 170, y: c[0].y + 30, h: 290}, tab: {x: c[0].x + 480, y: c[0].y + 150, h: 170}, centre: [c[0].x + 422, c[0].y + 190] as [number, number]},
		soil: {x: c[1].x + (c[1].w - picW(SOIL.acid, sh)) / 2, y: c[1].y + (c[1].h - sh) / 2, h: sh, centre: [c[1].x + c[1].w / 2, c[1].y + c[1].h / 2] as [number, number]},
		duct: {x: c[2].x + (c[2].w - dw) / 2, y: c[2].y + (c[2].h - cropH(DUCT, dw)) / 2, w: dw, centre: [c[2].x + c[2].w / 2, c[2].y + c[2].h / 2] as [number, number]},
		creek: {x: c[3].x + (c[3].w - picW(AMD, ah)) / 2, y: c[3].y + (c[3].h - ah) / 2, h: ah, centre: [c[3].x + c[3].w / 2, c[3].y + c[3].h / 2] as [number, number]},
	};
};
export const Grid: React.FC<{ats: [number, number, number, number]; out?: number; pulseCreek?: number; o?: [number, number, number, number]; label?: boolean}> = ({ats, out, pulseCreek, o = [1, 1, 1, 1], label = true}) => {
	const f = useCurrentFrame();
	const g = gridGeom();
	const pc = pulseCreek === undefined ? 1 : pulseAt(f, pulseCreek, 0.07, 30);
	const v = (i: number) => vis(f, ats[i], out, 14) * o[i];
	const [ccx, ccy] = g.creek.centre;
	return (
		<g>
			<g opacity={v(0)}>
				<PicH p={BEAKER} x={g.stomach.beaker.x} y={g.stomach.beaker.y} h={g.stomach.beaker.h} />
				<rect x={g.stomach.beaker.x + 30} y={g.stomach.beaker.y + 140} width={picW(BEAKER, g.stomach.beaker.h) - 60} height={120} rx={10} fill="#f3d6cf" opacity={0.45} />
				<PicH p={ANTACID} x={g.stomach.tab.x} y={g.stomach.tab.y} h={g.stomach.tab.h} />
				{label ? <Sx x={g.stomach.beaker.x + picW(BEAKER, g.stomach.beaker.h) / 2} y={CELLS[0].y + CELLS[0].h + 4} text="stomach acid, HCl" size={30} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /> : null}
			</g>
			<g opacity={v(1)}><PicH p={SOIL.acid} x={g.soil.x} y={g.soil.y} h={g.soil.h} /></g>
			<g opacity={v(2)}><PlateCrop p={SCRUB} r={DUCT} x={g.duct.x} y={g.duct.y} w={g.duct.w} fadeRight={0.2} /></g>
			<g opacity={v(3)} transform={`translate(${ccx},${ccy}) scale(${pc}) translate(${-ccx},${-ccy})`}><PicH p={AMD} x={g.creek.x} y={g.creek.y} h={g.creek.h} /></g>
		</g>
	);
};

// ---------- 1. Hook: four problems, one cause ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {heart: 'Heartburn from stomach', paddock: 'A paddock where', coal: 'A coal power', creek: 'a creek running', orange: 'running orange', acid: 'too much acid', fixed: 'each is fixed', naoh: 'pour sodium hydroxide', stomach: 'into a stomach', paddock2: 'a paddock or', river: 'a river', choose: 'choose the base', what: 'what does the reaction'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g = gridGeom();
	const targets: [number, number][] = [g.stomach.centre, g.soil.centre, g.duct.centre, g.creek.centre];
	const chipPos = (): [number, number] => {
		const p0: [number, number] = [960, 590];
		const seq: [number, [number, number]][] = [[K1.naoh, p0], [K1.stomach, targets[0]], [K1.paddock2, targets[1]], [K1.river, targets[3]]];
		let cur = seq[0][1];
		for (let i = 1; i < seq.length; i++) {
			const t = smooth(prog(f, seq[i][0] - 8, 16));
			cur = [lerp(cur[0], seq[i][1][0], t), lerp(cur[1], seq[i][1][1], t)];
		}
		return cur;
	};
	const [chx, chy] = chipPos();
	const cross = K1.river + 18;
	return (
		<>
			<Heading text="Too much acid. Which base, and why?" at={K1.choose} size={56} />
			<Overlay>
				<Grid ats={[K1.heart, K1.paddock, K1.coal, K1.creek]} pulseCreek={K1.orange} />
				{targets.map(([x, y], i) => {
					const d = smooth(prog(f, K1.acid + i * 6, 22));
					return d > 0.01 ? <Proton key={i} x={x + 150} y={y - 150 + d * 90} s={1.1} o={d} /> : null;
				})}
				<AChip x={960} y={566} text="too much H^{+}" size={36} color={TEAL} anchor="middle" hand={false} at={K1.acid + 14} out={K1.naoh} />
				<g transform={`translate(${chx - 90},${chy - 31})`}>
					<Chip x={0} y={0} w={180} text="NaOH?" size={36} color={INK_SOFT} at={K1.naoh} out={K1.choose + 20} hand={false} cross={cross} />
				</g>
				{void K1.fixed}{void K1.what}{void CROSS}
			</Overlay>
		</>
	);
};

// ---------- 2. What neutralising does, and how to choose ----------
const H2 = 'choosing';
const K2 = cues(sc(H2), {hions: 'extra hydrogen ions', ph: 'the pH moves', four: 'four questions', safe: 'safe where', cheap: 'cheap enough', gently: 'work gently', basic: 'too basic', leave: 'leave behind', salt: 'a salt', solid: 'or a solid'});
export const SceneChoosing: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 430, cy: 470, r: 240};
	const hs: [number, number][] = [[-0.6, -0.5], [0.1, -0.7], [0.6, -0.2], [-0.7, 0.2], [0.0, 0.1], [0.4, 0.6]];
	const used = [0, 1, 2, 3, 5];
	const ph = keys([[K2.hions, 2], [K2.ph + 50, 7], [K2.basic, 7], [K2.basic + 26, 12], [K2.basic + 70, 7]]);
	const shrink = prog(f, K2.solid + 30, 30);
	const thumbs: PDef[] = [ANTACID, SOIL.acid, AMD];
	return (
		<>
			<Heading text="What neutralising does" at={4} size={56} />
			<Overlay>
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={0}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					{hs.map(([u, v], i) => {
						const k = used.indexOf(i);
						const at = K2.hions - 30 + k * 18;
						const hx = L.cx + u * L.r * 0.7, hy = L.cy + v * L.r * 0.7;
						const [dx, dy] = wob(f, i * 1.9);
						if (k < 0) return <HTok key={i} x={hx + dx} y={hy + dy} />;
						const m = smooth(prog(f, at, 22));
						const ox = lerp(L.cx + L.r + 40, hx + 30, m), oy = lerp(hy - 40, hy, m);
						return f < at + 22 ? <g key={i}><HTok x={hx + dx * (1 - m)} y={hy + dy * (1 - m)} /><OHTok x={ox} y={oy} /></g> : <WTok key={i} x={hx + 14} y={hy} pop={1 + 0.3 * (1 - smooth(prog(f, at + 22, 12)))} />;
					})}
				</LensFrame>
				<Note x={L.cx} y={L.cy + L.r + 50} text="the base takes the extra H^{+}" size={34} color={INK_SOFT} anchor="middle" at={K2.hions} out={K2.basic} />
				<PHBar x={180} y={820} w={520} at={K2.hions - 10} marks={[{v: ph, at: K2.hions - 10}]} />
				<Note x={180 + (12 / 14) * 520} y={770} text="overshoot" size={34} color={CROSS} anchor="middle" at={K2.basic + 10} out={K2.leave} />
				<ChoiceCard at={K2.four - 6} k={shrink} writes={[K2.safe, K2.cheap, K2.gently, K2.leave]} lit={[[0, K2.safe, K2.cheap], [1, K2.cheap, K2.gently], [2, K2.gently, K2.leave], [3, K2.leave, K2.solid + 30]]} />
				<Fade at={0} out={K2.four - 10}>
					{thumbs.map((p, i) => <PicH key={i} p={p} x={1010 + i * 280} y={840} h={fitH(p, 240, 130)} />)}
				</Fade>
				{void K2.salt}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 3. The stomach (antacids) ----------
const H3 = 'stomach';
const K3 = cues(sc(H3), {makes: 'makes hydrochloric acid', heart: 'causes heartburn', naoh: 'Sodium hydroxide would', caustic: "it's caustic", burns: 'burns living tissue', antacids: 'Antacids use bases', barely: 'barely dissolve', react: 'react mainly with', mg: 'Magnesium hydroxide, from', mgsalt: 'gives a salt and water', ca: 'Calcium carbonate gives', co2: 'carbon dioxide, and', burp: 'make you burp'});
export const SceneStomach: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 110, y: 290, h: 420};
	const L = {cx: 1100, cy: 480, r: 220};
	const tabY = L.cy + 120;
	const drop = smooth(prog(f, K3.barely, 30));
	const hs: [number, number][] = [[-120, -110], [40, -140], [130, -40], [-60, -10], [90, 50]];
	const mg = eq(['Mg(OH)_2(s)', '+', '2HCl(aq)', '->', 'MgCl_2(aq)', '+', '2H_2O(l)'], K3.mg + 10);
	const ca = eq(['CaCO_3(s)', '+', '2HCl(aq)', '->', 'CaCl_2(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], K3.ca + 6);
	const MS = fitSize(mg, 1200, 44), CS = fitSize(ca, 1200, 44);
	const mgDim = prog(f, K3.ca - 6, 14);
	return (
		<>
			<Heading text="The stomach: antacids" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} lit={[[0, 10, K3.antacids], [2, K3.barely, K3.mg], [3, K3.co2, 2000]]} />
				<PlateAt p={BEAKER} x={B.x} y={B.y} h={B.h} at={0} />
				<rect x={B.x + 34} y={B.y + 200} width={picW(BEAKER, B.h) - 68} height={170} rx={12} fill="#f3d6cf" opacity={0.4} />
				<Note x={B.x} y={B.y + B.h + 50} text="hydrochloric acid," size={34} color={INK} at={K3.makes} />
				<Note x={B.x} y={B.y + B.h + 92} text="like stomach acid" size={34} color={INK_SOFT} at={K3.makes + 10} />
				<Chip x={560} y={320} w={200} text="NaOH" size={38} color={INK_SOFT} at={K3.naoh} out={K3.antacids + 10} hand={false} cross={K3.burns} />
				<Note x={560} y={450} text="caustic: burns tissue" size={36} color={CROSS} at={K3.caustic} out={K3.antacids + 10} />
				<PlateAt p={ANTACID} x={540} y={560} h={170} at={K3.antacids} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K3.barely - 12} title="in the acid" titleAt={K3.barely}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#fbeeea" />
					<g transform={`translate(0,${(1 - drop) * -260})`}>
						<rect x={L.cx - 110} y={tabY} width={220} height={56} rx={22} fill="#f7f5f0" stroke={INK} strokeWidth={3} />
					</g>
					{hs.map(([dx, dy], i) => {
						const at = K3.react + i * 14;
						const m = smooth(prog(f, at, 26));
						const tx = L.cx - 80 + i * 40, ty = tabY - 14;
						const [wx, wy] = wob(f, i * 2.3);
						const gone = f > at + 26;
						return (
							<g key={i}>
								{!gone ? <HTok x={lerp(L.cx + dx + wx, tx, m)} y={lerp(L.cy + dy + wy, ty, m)} s={0.8} /> : <WTok x={tx} y={ty - 40 - smooth(prog(f, at + 26, 40)) * 30} s={0.75} o={1 - prog(f, at + 70, 20)} />}
							</g>
						);
					})}
					<Bubbles x={L.cx + 40} y={tabY - 6} at={K3.co2 - 20} n={7} spread={160} rise={240} />
				</LensFrame>
				<Note x={1350} y={560} text="reacts where acid meets it" size={34} color={TEAL} at={K3.react} out={K3.mg} />
				<g opacity={1 - 0.6 * mgDim}><EqLine items={mg} x={560} y={840} size={MS} /></g>
				<EqLine items={ca} x={560} y={930} size={CS} />
				<Note x={1350} y={530} text="CO_2 gas: carbonates only" size={34} color={CO2_INK} at={K3.burp} />
				<Mistake x={1340} y={300} text="Mg(OH)_2 antacid gives CO_2" at={K3.burp + 20} note="no carbonate, no CO_2" size={28} />
				{void K3.heart}{void K3.mgsalt}{void CO2C}{void HEAT_INK}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 4. The paddock: why soil turns acidic ----------
const H4 = 'soil-problem';
const K4 = cues(sc(H4), {soil: 'Soil slowly turns', rain: 'as rain washes', bact: 'soil bacteria', amm: 'ammonium fertilisers', amso4: 'ammonium sulfate', rel: 'releases hydrogen ions', below: 'Below about pH', al: 'aluminium from the', diss: 'dissolved aluminium damages', damages: 'damages plant roots', why: "That's why the wheat"});
export const SOILP = {x: 96, y: 250, h: 520};
export const SOIL_H: [number, number][] = [[380, 1110], [640, 1320], [1100, 1240], [1300, 1100], [1560, 1300], [820, 1420]];
export const SOIL_G: [number, number][] = [[700, 1380], [1240, 1420], [1620, 1160]];
export const sp = (nx: number, ny: number) => natPt(SOIL.acid, SOILP.x, SOILP.y, SOILP.h, nx, ny);
export const SceneSoil: React.FC = () => {
	const f = useCurrentFrame();
	const sw = picW(SOIL.acid, SOILP.h);
	const ph = keys([[K4.below - 10, 6.5], [K4.below + 40, 5.2]]);
	const [rcx, rcy] = sp(960, 1170);
	return (
		<>
			<Heading text="Why the paddock turns acidic" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} />
				<PlateAt p={SOIL.acid} x={SOILP.x} y={SOILP.y} h={SOILP.h} at={0} />
				<Rain x={SOILP.x + 40} y={SOILP.y - 60} w={sw - 80} h={260} at={K4.rain} until={K4.bact + 20} />
				{SOIL_G.map(([nx, ny], i) => { const [x, y] = sp(nx, ny); return <Grain key={i} x={x} y={y} s={0.9} o={prog(f, K4.al - 30, 14)} />; })}
				{SOIL_H.map(([nx, ny], i) => { const [x, y] = sp(nx, ny); const [dx, dy] = wob(f, i * 2.2, 4); return <Proton key={i} x={x + dx} y={y + dy} s={0.85} o={prog(f, (i < 3 ? K4.rain + 30 : K4.rel) + i * 8, 12)} />; })}
				{SOIL_G.map(([nx, ny], i) => { const [x, y] = sp(nx, ny); const m = smooth(prog(f, K4.al + i * 10, 30)); return <MetalTok key={i} x={x + m * 36} y={y - m * 44} label="Al^{3+}" s={1.05} o={m} />; })}
				<Ring cx={rcx} cy={rcy} rx={86} ry={78} at={K4.damages} color={AMBER} seed={6} />
				<Note x={SOILP.x} y={SOILP.y + SOILP.h + 60} text="dissolved Al^{3+} harms roots" size={38} color={AMBER_INK} at={K4.damages + 8} />
				<PlateAt p={FERT} x={1030} y={290} h={150} at={K4.amm} out={K4.below + 20} />
				<Note x={1330} y={380} text="NH_4^{+} → bacteria → H^{+}" size={40} color={TEAL} hand={false} at={K4.amm + 12} out={K4.below + 20} />
				<Note x={1030} y={520} text="soil turns acidic: more H^{+}" size={38} color={INK_SOFT} at={K4.rel} out={K4.below + 20} />
				<PHBar x={1060} y={820} w={720} at={K4.below - 20} marks={[{v: ph, at: K4.below - 20}]} extra={[{v: 5.5, label: 'about 5.5', at: K4.below + 30}]} ticks={[0, 14]} />
				{void K4.soil}{void K4.amso4}{void K4.diss}{void K4.why}
			</Overlay>
		</>
	);
};

// ---------- 5. Agricultural lime ----------
const H5 = 'liming';
const K5 = cues(sc(H5), {ag: 'agricultural lime', crushed: 'crushed limestone', each: 'Each carbonate ion', two: 'two hydrogen ions', breaks: 'breaks into water', usedup: 'used up', rises: 'pH rises', less: 'becomes less acidic', alback: 'aluminium goes back', recover: 'roots recover', limestone: 'Limestone is cheap', barely: 'barely dissolves', extra: 'extra lime', strongly: 'strongly basic'});
export const SceneLiming: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 1230, cy: 470, r: 190};
	const cx = L.cx - 10, cy = L.cy + 30;
	const hop1 = K5.two - 6, hop2 = K5.two + 26;
	const split = smooth(prog(f, K5.breaks, 30));
	const rise = smooth(prog(f, K5.breaks + 20, 90));
	const items = eq(['CaCO_3(s)', '+', '2H^{+}(aq)', '->', 'Ca^{2+}(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], [K5.breaks + 30, K5.breaks + 34, K5.breaks + 38, K5.usedup - 10, K5.usedup - 6, K5.usedup - 2, K5.usedup + 2, K5.usedup + 6, K5.usedup + 10]);
	const ES = fitSize(items, 780, 42);
	const ph = keys([[K5.rises - 10, 5.2], [K5.rises + 40, 6.5]]);
	const termDim = prog(f, K5.each - 24, 14);
	return (
		<>
			<Heading text="The fix: agricultural lime" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} lit={[[0, K5.strongly, 2000], [1, K5.strongly, 2000], [2, K5.strongly, 2000]]} />
				<PairAt a={SOIL.acid} b={SOIL.limed} x={SOILP.x} y={SOILP.y} h={SOILP.h} at={0} swap={K5.recover} dur={30} />
				{SOIL_H.map(([nx, ny], i) => { const [x, y] = sp(nx, ny); const [dx, dy] = wob(f, i * 2.2, 4); return <Proton key={i} x={x + dx} y={y + dy} s={0.85} o={1 - prog(f, K5.usedup - 20 + i * 6, 14)} />; })}
				{SOIL_G.map(([nx, ny], i) => { const [x, y] = sp(nx, ny); return <Grain key={i} x={x} y={y} s={0.9} o={1 - prog(f, K5.recover, 30)} />; })}
				{SOIL_G.map(([nx, ny], i) => { const [x, y] = sp(nx, ny); const m = 1 - smooth(prog(f, K5.alback + i * 8, 30)); return <MetalTok key={i} x={x + m * 36} y={y - m * 44} label="Al^{3+}" s={1.05} o={m > 0.02 ? 1 : 0} />; })}
				<g opacity={1 - 0.65 * termDim}>
					<Sx x={1000} y={300} text="agricultural lime" size={60} color={INK} hand at={K5.ag} out={K5.breaks} />
					<Sx x={1000} y={360} text="= crushed limestone, CaCO_3" size={40} color={INK_SOFT} weight={600} at={K5.crushed} out={K5.breaks} />
				</g>
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K5.each - 10} out={K5.limestone}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f4ece2" />
					<g opacity={1 - split}>
						<Mol x={cx} y={cy} m={f >= hop1 + 26 ? 'HCO3' : 'CO3'} s={1.0} take={f >= hop2 + 26 ? 1 : 0} />
					</g>
					<ProtonHop a={[L.cx - L.r + 30, L.cy - 100]} b={slotAt('CO3', cx, cy, 1.0)} at={hop1} s={0.85} bow={-30} />
					<ProtonHop a={[L.cx - L.r + 30, L.cy + 110]} b={slotAt('HCO3', cx, cy, 1.0)} at={hop2} s={0.85} bow={40} />
					{split > 0.01 ? <>
						<Mol x={cx - 70} y={cy + 60} m="H2O" s={0.95} o={split} />
						<g transform={`translate(0,${-rise * 110})`} opacity={split}>
							<circle cx={cx + 90} cy={cy - 10} r={62} fill={CO2C} opacity={0.35} stroke={CO2_INK} strokeWidth={3} />
							<Mol x={cx + 90} y={cy - 10} m="CO2" s={0.72} />
						</g>
					</> : null}
				</LensFrame>
				<Fade at={K5.two + 30} out={K5.breaks}><circle cx={cx} cy={cy} r={92} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /></Fade>
				<Sx x={L.cx} y={L.cy - L.r - 20} text="H_2CO_3 splits" size={30} color={INK_SOFT} anchor="middle" weight={600} at={K5.two + 30} out={K5.breaks + 20} />
				<PlateAt p={MARBLE} x={1470} y={300} h={220} at={K5.each} out={K5.limestone} />
				<EqLine items={items} x={1000} y={760} size={ES} />
				<PHBar x={1060} y={860} w={720} at={K5.usedup - 20} marks={[{v: ph, at: K5.usedup - 20}]} extra={[{v: 5.5, label: 'about 5.5', at: -100}]} ticks={[0, 14]} />
				<Note x={1000} y={470} text="no acid left: limestone stops reacting" size={40} color={TEAL} at={K5.strongly} />
				{void K5.less}{void K5.barely}{void K5.extra}{void PlateCrop}{void Proton}
			</Overlay>
		</>
	);
};
