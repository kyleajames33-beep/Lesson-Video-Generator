// M7 B10 scenes 1 to 4: the hook (Semmelweis's two clinics as a coded bar chart beside the chlorinated lime basin;
// no rooms, beds or people), the link each measure breaks (b03's chain board with a fourth station, three stations
// lighting with their plates), hands (bacteria travel the lane on hands, the basin breaks the lane, then soap and water
// with a coded skin close-up; alcohol rub and its limits), and environmental management (the travel lane split into
// surfaces, food and water, with sewage carried away).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, Board, BreakMark, CH, CTag, DrawPath, Drift, GREYT, GREY_INK, GTag, HEAD, INK, INK_SOFT, MistakeChip, Pl, ST_PLATE, SX, Sx, TEAL, TERRA, TickMark,
	clamp01, fitW, lerp, prog, pulse, rng, smooth, vis,
} from './parts';
import type {BoardPlate} from './parts';

// ---------- the clinic bars ----------
const CB = {x0: 300, y0: 300, w: 700, h: 500, max: 12};
const cby = (v: number) => CB.y0 + CB.h - (v / CB.max) * CB.h;
const FIRST = '#c4632e';
type Bar = {x: number; v: number; col: string; at: number; label: string};
const BARS = (t: {a: number; b: number; c: number}): Bar[] => [
	{x: 400, v: 11.4, col: FIRST, at: t.a, label: '11.4%'},
	{x: 500, v: 2.8, col: TEAL, at: t.b, label: '2.8%'},
	{x: 760, v: 1.27, col: FIRST, at: t.c, label: '1.27%'},
	{x: 860, v: 1.33, col: TEAL, at: t.c + 8, label: '1.33%'},
];
export const ClinicBars: React.FC<{t: {a: number; b: number; c: number}; axisAt: number; o?: number; s?: number; ox?: number; oy?: number}> = ({t, axisAt, o = 1, s = 1, ox = 0, oy = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, axisAt, 16) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p} transform={`translate(${ox},${oy}) scale(${s})`}>
			<path d={`M${CB.x0},${CB.y0 - 10} L${CB.x0},${CB.y0 + CB.h} L${CB.x0 + CB.w},${CB.y0 + CB.h}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} />
			{[0, 4, 8, 12].map(v => <g key={v}><line x1={CB.x0 - 9} x2={CB.x0} y1={cby(v)} y2={cby(v)} stroke={INK_SOFT} strokeWidth={3} /><Sx x={CB.x0 - 16} y={cby(v) + 8} text={`${v}`} size={22} color={GREY_INK} weight={600} anchor="end" at={-100} /></g>)}
			<g transform={`translate(${CB.x0 - 62},${CB.y0 + CB.h / 2}) rotate(-90)`}><Sx x={0} y={0} text="mothers who died (%)" size={24} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>
			{BARS(t).map((b, i) => {
				const g = smooth(prog(f, b.at, 24));
				if (g <= 0.001) return null;
				const top = lerp(cby(0), cby(b.v), g);
				return (
					<g key={i}>
						<rect x={b.x - 38} y={top} width={76} height={cby(0) - top} rx={6} fill={b.col} opacity={0.85} />
						<Sx x={b.x} y={top - 12} text={b.label} size={24} color={INK} weight={700} anchor="middle" at={b.at + 18} />
					</g>
				);
			})}
			<Sx x={450} y={CB.y0 + CB.h + 36} text="1846" size={26} color={GREY_INK} weight={700} anchor="middle" at={t.a + 10} />
			<Sx x={810} y={CB.y0 + CB.h + 36} text="1848" size={26} color={GREY_INK} weight={700} anchor="middle" at={t.c + 10} />
		</g>
	);
};
const Legend: React.FC<{at: [number, number]; small: number}> = ({at, small}) => {
	const f = useCurrentFrame();
	const sz = lerp(30, 24, clamp01(small));
	const col = small > 0.5 ? GREY_INK : INK;
	return (
		<g>
			{[['First Clinic (doctors and medical students)', FIRST], ['Second Clinic (midwives)', TEAL]].map(([t, c], i) => (
				<g key={i} opacity={prog(f, at[i], 12)}>
					<rect x={300} y={196 + i * 46} width={26} height={26} rx={5} fill={c} opacity={0.85} />
					<Sx x={340} y={218 + i * 46} text={t} size={sz} color={col} hand weight={700} at={-100} />
				</g>
			))}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {start: 'In 1847', two: 'two maternity clinics', ten: 'one mother in', fewer: 'far fewer died', autopsies: 'straight from autopsies', wash: 'wash their hands', fell: 'deaths fell to', so: 'So how can', see: 'nobody could see'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const t = {a: K1.ten, b: K1.fewer, c: K1.fell};
	const bx = 760, bxe = 860;
	return (
		<>
			<Heading text={HEAD} at={K1.so + 4} size={52} />
			<Overlay>
				<Legend at={[K1.two, K1.two + 14]} small={prog(f, K1.fell + 30, 20)} />
				<ClinicBars t={t} axisAt={K1.two + 6} />
				<CTag x={1080} y={300} text="doctors came from autopsies" at={K1.autopsies + 6} color={FIRST} size={30} dim={prog(f, K1.wash + 10, 10)} />
				<Pl p={PLATES.basin} cx={lerp(1700, 1420, smooth(prog(f, K1.wash, 26)))} cy={590} w={fitW(PLATES.basin, 360, 330)} o={prog(f, K1.wash, 14)} />
				<GTag x={1420} y={784} text="chlorinated lime solution, from May 1847" at={K1.wash + 24} size={22} anchor="middle" />
				{f >= K1.fell + 40 ? <DrawPath d={`M${bx - 40},${cby(1.33) - 60} L${bx - 40},${cby(1.33) - 74} L${bxe + 40},${cby(1.33) - 74} L${bxe + 40},${cby(1.33) - 60}`} at={K1.fell + 40} dur={14} color={AMBER_INK} width={4} /> : null}
				<CTag x={810} y={cby(1.33) - 144} text="about level" at={K1.fell + 48} color={AMBER_INK} size={28} anchor="middle" dim={prog(f, K1.see, 10)} />
				<GTag x={1080} y={880} text="germ theory not yet accepted" at={K1.see + 4} size={24} />
				{void K1.start}{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. The link each measure breaks ----------
const K2 = cues(S('which-link'), {leave: 'leave one host', travel: 'travel,', next: 'a next host', every: 'Every control measure', here: "Here's the link", hygiene: 'Hygiene cuts the', iso: 'Isolation and quarantine', vacc: 'And vaccination removes'});
export const SceneWhichLink: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, 0, 30));
	const lit = (a: number, b?: number) => vis(f, a, b, 10);
	const plates: BoardPlate[] = [
		{p: PLATES.sink, at: ST_PLATE[1], w: 130, h: 110, o: prog(f, K2.hygiene + 4, 12), dim: prog(f, K2.iso, 10) * 0.6},
		{p: PLATES.bed, at: ST_PLATE[0], w: 160, h: 100, o: prog(f, K2.iso + 4, 12), dim: prog(f, K2.vacc, 10) * 0.6},
		{p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, o: prog(f, K2.vacc + 4, 12)},
	];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<ClinicBars t={{a: -100, b: -100, c: -100}} axisAt={-100} s={lerp(1, 0.26, shrink)} ox={lerp(0, 40, shrink)} oy={lerp(0, 120, shrink)} o={1 - prog(f, 40, 30)} />
				<Board leftO={prog(f, K2.leave, 14)} laneP={prog(f, K2.travel - 4, 24)} rightO={prog(f, K2.next, 14)} st={[prog(f, K2.leave + 8, 12), prog(f, K2.travel + 4, 12), prog(f, K2.next + 4, 12)]}
					stLit={[lit(K2.iso, K2.vacc), lit(K2.hygiene, K2.iso), 0]} st4={prog(f, K2.next + 18, 12)} st4Lit={lit(K2.vacc)} plates={plates} />
				<Sx x={960} y={840} text="Every control measure breaks a link." size={44} color={AMBER_INK} hand weight={700} anchor="middle" at={K2.every} />
				<GTag x={1340} y={868} text="b03" at={K2.every + 14} size={20} />
				<GTag x={SX[2]} y={CH.y + CH.r + 106} text="b03: masks" at={K2.here + 10} out={K2.hygiene} size={18} anchor="middle" />
			</Overlay>
		</>
	);
};

// ---------- 3. Hands ----------
const K3 = cues(S('hands'), {vienna: 'In Vienna', hands: "doctors' hands", material: 'Material from the', carried: 'hands carried them', killed: 'The chlorine solution', today: 'Today, soap', soap: 'Soap lifts oil', rinses: 'water rinses them', alcohol: 'Alcohol hand rub', noro: "doesn't reliably kill", better: 'work better against'});
/** Coded skin close-up: a skin line, an oil film with specks that lift off with soap marks and rinse away. */
const SoapCloseup: React.FC<{x: number; y: number; w: number; at: number; soapAt: number; rinseAt: number}> = ({x, y, w, at, soapAt, rinseAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const lift = smooth(prog(f, soapAt + 10, 30));
	const rinse = smooth(prog(f, rinseAt, 50));
	const r = rng(7);
	const specks = Array.from({length: 9}, () => [x + 30 + r() * (w - 60), r()] as [number, number]);
	const filmY = y - 14 - lift * 34;
	const dx = rinse * (w * 0.9);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={60} fill="#f2d8cc" />
			<path d={`M${x},${y} ${Array.from({length: 13}, (_, i) => `L${x + (w * i) / 12},${y + (i % 2 ? 5 : -3)}`).join(' ')}`} fill="none" stroke="#b9786a" strokeWidth={4} />
			<Sx x={x + 10} y={y + 44} text="skin" size={22} color={GREY_INK} weight={600} at={-100} />
			<g opacity={1 - rinse} transform={`translate(${dx},0)`}>
				<rect x={x + 20} y={filmY} width={w - 40} height={16} rx={8} fill="#e8c55a" opacity={0.6} />
				{specks.map(([sx, k], i) => <circle key={i} cx={sx} cy={filmY + 8 - k * 6} r={5} fill="#5f7f86" stroke="#3d4247" strokeWidth={1} />)}
				{lift > 0.01 ? specks.slice(0, 6).map(([sx], i) => (
					<g key={'s' + i} opacity={lift}>
						<circle cx={sx + 10} cy={filmY - 6} r={6} fill="#cfe3ef" stroke="#4f86b8" strokeWidth={2} />
						<line x1={sx + 10} x2={sx + 10} y1={filmY} y2={filmY + 10} stroke="#4f86b8" strokeWidth={2} />
					</g>
				)) : null}
			</g>
			{f >= rinseAt ? [0, 1, 2].map(i => <DrawPath key={i} d={`M${x},${y - 60 + i * 12} C${x + w * 0.35},${y - 70 + i * 12} ${x + w * 0.65},${y - 50 + i * 12} ${x + w},${y - 60 + i * 12}`} at={rinseAt + i * 6} dur={30} color="#4f86b8" width={3} />) : null}
		</g>
	);
};
export const SceneHands: React.FC = () => {
	const f = useCurrentFrame();
	const drop = smooth(prog(f, K3.killed, 18));
	const swap = prog(f, K3.today, 20);
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 160, h: 100, dim: 0.6}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, dim: 0.6}];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board stLit={[0, 1, 0]} plates={plates}>
					<Drift sx={CH.lx + 70} sy={CH.y} x1={CH.rx - 70} band={18} at={K3.material + 10} o={1 - prog(f, K3.killed + 14, 16)} n={16} period={110} />
					<Pl p={PLATES.rodCoccus} cx={640} cy={CH.y} w={100} o={vis(f, K3.material, K3.killed + 20, 12)} />
					<Pl p={PLATES.basin} cx={SX[1]} cy={lerp(300, 345, drop)} w={fitW(PLATES.basin, 130, 120)} o={prog(f, K3.killed, 10) * (1 - swap)} />
					<Pl p={PLATES.sink} cx={SX[1]} cy={345} w={fitW(PLATES.sink, 140, 115)} o={swap} />
					<BreakMark x={SX[1] + 110} y={CH.y} h={110} at={K3.killed + 16} />
				</Board>
				<GTag x={520} y={385} text="on hands" at={K3.carried} out={K3.killed + 20} size={22} />
				<GTag x={520} y={250} text="bacteria, drawn far larger than real" at={K3.material + 8} out={K3.killed + 20} size={20} />
				<CTag x={SX[1] + 100} y={230} text="today: soap and water" at={K3.today + 10} color={TEAL} size={28} dim={prog(f, K3.soap, 10)} />
				<SoapCloseup x={220} y={900} w={700} at={K3.soap - 6} soapAt={K3.soap} rinseAt={K3.rinses} />
				<CTag x={220} y={730} text="soap lifts; water rinses away" at={K3.soap + 20} color={TEAL} size={28} dim={prog(f, K3.alcohol, 10)} />
				<CTag x={1100} y={720} text="alcohol rub" at={K3.alcohol} color={INK_SOFT} size={30} />
				<TickMark x={1130} y={815} at={K3.alcohol + 20} />
				<Sx x={1160} y={824} text="many bacteria and viruses" size={28} color={GREY_INK} hand weight={700} at={K3.alcohol + 20} />
				<TickMark x={1130} y={880} at={K3.noro + 10} ok={false} />
				<Sx x={1160} y={889} text="norovirus" size={28} color={GREY_INK} hand weight={700} at={K3.noro + 10} />
				<TickMark x={1420} y={880} at={K3.noro + 30} ok={false} />
				<Sx x={1450} y={889} text="bacterial spores" size={28} color={GREY_INK} hand weight={700} at={K3.noro + 30} />
				<CTag x={1100} y={920} text="soap and water better here" at={K3.better} color={TEAL} size={26} />
				<MistakeChip x={1100} y={1000} text="sanitiser always beats soap" at={K3.better + 20} cross={K3.better + 40} size={24} />
				{void K3.vienna}{void K3.hands}{void AMBER}{void INK}{void TERRA}{void GREYT}{void pulse}
			</Overlay>
		</>
	);
};

// ---------- 4. Places: environmental management ----------
const K4 = cues(S('environmental'), {places: 'works on places', clean: 'Cleaning surfaces', cook: 'cooking food properly', water: 'treating drinking water', sewage: 'carrying sewage away', env: 'environmental management', treated: 'Treated water and', remember: 'having to remember'});
const LANES = [{y: 740, label: 'surfaces', key: 'clean'}, {y: 840, label: 'food', key: 'cook'}, {y: 940, label: 'water', key: 'water'}] as const;
export const SceneEnvironmental: React.FC = () => {
	const f = useCurrentFrame();
	const at = {clean: K4.clean, cook: K4.cook, water: K4.water};
	const plates: BoardPlate[] = [{p: PLATES.sink, at: ST_PLATE[1], w: 140, h: 115}, {p: PLATES.bed, at: ST_PLATE[0], w: 160, h: 100, dim: 0.6}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, dim: 0.6}];
	const lp = [PLATES.handle, PLATES.chicken, PLATES.pumpNo];
	const hold = pulse(f, K4.treated + 6, 60);
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board stLit={[0, 1, 0]} plates={plates} />
				{f >= K4.places ? [0, 1, 2].map(i => <DrawPath key={i} d={`M${SX[1]},${CH.y + CH.r + 102} C${SX[1]},${680} ${700},${LANES[i].y - 60} ${560},${LANES[i].y}`} at={K4.places + 4 + i * 4} dur={20} color={GREYT} width={2.5} dash="6 7" />) : null}
				{LANES.map((l, i) => {
					const a = at[l.key];
					const o = prog(f, a, 14);
					const dim = prog(f, i < 2 ? at[LANES[i + 1].key] : K4.env, 10);
					return (
						<g key={l.label} opacity={o * (1 - 0.35 * dim)}>
							<rect x={560} y={l.y - 22} width={560} height={44} rx={10} fill="#efe6d4" stroke={INK_SOFT} strokeWidth={2.5} />
							<Pl p={lp[i]} cx={460} cy={l.y} w={fitW(lp[i], 110, 84)} />
							<Sx x={300} y={l.y + 10} text={l.label} size={30} color={dim > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={-100} />
						</g>
					);
				})}
				{LANES.map((l, i) => <BreakMark key={'b' + i} x={900} y={l.y} h={70} at={at[l.key] + 14} pulseAt={i === 2 ? K4.treated + 6 : undefined} />)}
				<GTag x={300} y={LANES[2].y + 40} text="b03: Snow" at={K4.water + 16} size={18} />
				{f >= K4.sewage ? (
					<g opacity={1}>
						<DrawPath d={`M560,${LANES[2].y + 50} L1120,${LANES[2].y + 50}`} at={K4.sewage} dur={20} color={hold > 0.3 ? AMBER : '#8b7d64'} width={10} />
						<DrawPath d={`M560,${LANES[2].y + 50} L1120,${LANES[2].y + 50}`} at={K4.sewage} dur={20} color="#d9cdb5" width={4} />
					</g>
				) : null}
				<GTag x={1140} y={LANES[2].y + 34} text="sewage carried away" at={K4.sewage + 14} size={20} />
				<CTag x={1250} y={680} text="environmental management: changing places so pathogens can't reach new hosts" at={K4.env + 6} color={AMBER_INK} size={30} maxW={560} />
				<CTag x={1250} y={860} text="works all the time" at={K4.treated + 14} color={TEAL} size={30} />
				{void K4.remember}{void TERRA}{void rng}
			</Overlay>
		</>
	);
};
