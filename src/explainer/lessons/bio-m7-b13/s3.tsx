// M7 B13 scenes 9 to 11: the Wolbachia evidence (24 squares in a city outline shuffle and settle into 12 teal areas,
// the clinic outline, two 100-dot arrays with 2 and 9 lit, a raincloud and the four serotype rings drifting over both
// halves alike; then the grid shrinks and the Cairns map thumbnail gets a before-and-after bar pair beside an empty
// dashed "untreated areas, same years" bar); why control is still limited (social and biological columns, one item
// per cue, each dimming as the next writes; a slot breaks and a "kept up" loop circles it; the crossed vaccine chip);
// memory (the two lines with the tank and the bar thumbnails).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, CTag, Cloud, Clinic, DrawPath, FourBar, GREYT, GREY_INK, GTag, Grid100, HEAD, INK, INK_SOFT, MistakeChip, PLATES, Pl, Place, PlateB, SERO, SeaMap, Sx, TEAL, TERRA,
	Tank, Thermo, VirusRing, WText, clamp01, fitW, lerp, prog, proj, rng, slotC, smooth, vis, PLACE, FB,
} from './parts';
import type {Geo} from './parts';

// ---------- 9. How strong is the Wolbachia evidence? ----------
const K9 = cues(S('wolbachia-evidence'), {now: 'Now the Wolbachia', random: 'randomly chose', clinics: 'came to clinics', two: 'two in a', nine: 'nine in a', because: 'Because the areas', weather: 'weather and serotypes', cairns: 'In Cairns', fell: 'fell about', but: 'But with no', untreated: 'no untreated areas', weaker: 'weaker evidence'});
const TEALSET = [0, 3, 5, 6, 8, 11, 13, 14, 16, 19, 21, 22];
const CG = {x: 170, y: 380, cell: 80, gap: 14};
const sq = (i: number): [number, number] => [CG.x + (i % 6) * (CG.cell + CG.gap), CG.y + Math.floor(i / 6) * (CG.cell + CG.gap)];
const GQ: Geo = {x: 560, y: 330, w: 380, h: 420, lon0: 138, lat0: -9, k: 380 / 14};
const rs = rng(91);
const SHUF = Array.from({length: 8}, () => Array.from({length: 24}, () => rs() < 0.5));
export const SceneEvidence: React.FC = () => {
	const f = useCurrentFrame();
	const shr = smooth(prog(f, K9.cairns, 26));
	const outB = prog(f, K9.cairns, 14);
	const shufK = f >= K9.random && f < K9.random + 48 ? Math.floor((f - K9.random) / 6) : -1;
	const drift = clamp01((f - K9.weather) / 90);
	const PQ = proj(GQ);
	const [qx, qy] = PQ(PLACE.Cairns);
	const base = 820;
	const bh = [300 * smooth(prog(f, K9.fell - 10, 20)), 12 * smooth(prog(f, K9.fell, 20))];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, 1, 1, 1]} />
				<g transform={`translate(${140 + lerp(0, 20, shr)},${330 + lerp(0, 20, shr)}) scale(${lerp(1, 0.6, shr)}) translate(-140,-330)`} opacity={1 - 0.55 * shr}>
					<path d={`M${CG.x - 50},${CG.y - 40} C${CG.x + 100},${CG.y - 80} ${CG.x + 450},${CG.y - 70} ${CG.x + 600},${CG.y - 30} C${CG.x + 640},${CG.y + 120} ${CG.x + 630},${CG.y + 300} ${CG.x + 590},${CG.y + 410} C${CG.x + 400},${CG.y + 440} ${CG.x + 120},${CG.y + 430} ${CG.x - 40},${CG.y + 400} C${CG.x - 70},${CG.y + 260} ${CG.x - 70},${CG.y + 100} ${CG.x - 50},${CG.y - 40} Z`} fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, 0, 14)} />
					{Array.from({length: 24}, (_, i) => {
						const [x, y] = sq(i);
						const teal = shufK >= 0 ? SHUF[shufK][i] : f >= K9.random + 48 && TEALSET.includes(i);
						return <rect key={i} x={x} y={y} width={CG.cell} height={CG.cell} rx={10} fill={teal ? '#7cc0c6' : '#e7e3da'} stroke={teal ? TEAL : GREYT} strokeWidth={2.5} opacity={prog(f, 4 + i, 10)} />;
					})}
					{f >= K9.weather ? (
						<g opacity={1 - prog(f, K9.weather + 90, 14)}>
							<Cloud x={lerp(CG.x - 20, CG.x + 560, drift)} y={CG.y + 40} s={1.2} />
							{SERO.map((c, i) => <circle key={i} cx={lerp(CG.x - 20, CG.x + 560, drift) - 40 + i * 28} cy={CG.y + 250} r={14} fill="#fffdf8" stroke={c} strokeWidth={5} />)}
						</g>
					) : null}
				</g>
				<GTag x={140} y={830} text="Yogyakarta: releases 2017; cases tracked 2018 to 2020" at={8} out={K9.cairns} size={20} />
				<CTag x={820} y={320} text="24 areas, 12 randomly assigned" at={K9.random + 20} color={TEAL} size={30} dim={prog(f, K9.clinics, 10)} out={K9.cairns} />
				<g opacity={1 - outB}>
					<Clinic x={890} y={560} s={0.9} o={prog(f, K9.clinics, 12)} />
					<Sx x={890} y={600} text="clinic" size={22} color={GREY_INK} weight={600} anchor="middle" at={K9.clinics + 6} />
					<Grid100 x={1080} y={430} sp={20} r={7} at={K9.two - 20} step={0.15} fill={i => (i < 2 ? prog(f, K9.two + 10, 10) : 0)} fillC={() => AMBER} />
					<Grid100 x={1420} y={430} sp={20} r={7} at={K9.nine - 20} step={0.15} fill={i => (i < 9 ? prog(f, K9.nine + 10 + i * 2, 10) : 0)} fillC={() => AMBER} />
					<Sx x={1080} y={410} text="fever patients, Wolbachia areas" size={18} color={TEAL} weight={700} at={K9.two - 10} />
					<Sx x={1420} y={410} text="fever patients, untreated areas" size={18} color={GREY_INK} weight={700} at={K9.nine - 10} />
				</g>
				<CTag x={1060} y={640} text="2.3%: Wolbachia areas" at={K9.two + 14} color={TEAL} size={30} out={K9.cairns} dim={prog(f, K9.because, 10)} />
				<CTag x={1400} y={640} text="9.4%: untreated areas" at={K9.nine + 14} color={AMBER_INK} size={30} out={K9.cairns} dim={prog(f, K9.because, 10)} />
				<GTag x={1060} y={730} text="67 of 2,905 against 318 of 3,401 people with fever; Utarini et al., 2021" at={K9.nine + 30} out={K9.cairns} size={17} />
				<GTag x={1060} y={770} text="share of fever patients with dengue: falls when infections fall" at={K9.nine + 40} out={K9.cairns} size={17} />
				<CTag x={820} y={860} text="random assignment: a fair comparison" at={K9.weather + 20} color={AMBER_INK} size={32} out={K9.cairns} />
				<GTag x={820} y={950} text="randomised controlled trial" at={K9.weather + 34} out={K9.cairns} size={20} />
				<g opacity={prog(f, K9.cairns, 14)}>
					<SeaMap g={GQ} id="b13-cq" at={K9.cairns} draw={1} />
					<Place g={GQ} name="Cairns" at={K9.cairns + 6} dx={-14} dy={-14} anchor="end" size={24} color={TEAL} pulseAt={K9.cairns + 6} />
					<GTag x={GQ.x} y={GQ.y + GQ.h + 14} text="north Queensland" at={K9.cairns + 6} size={18} />
				</g>
				{[{x: 1020, l: 'before releases', h: bh[0], at: K9.fell - 10, c: '#c9c2b4'}, {x: 1220, l: 'after releases', h: bh[1], at: K9.fell, c: TEAL}].map(b => (
					<g key={b.l} opacity={prog(f, b.at, 10)}>
						<rect x={b.x} y={base - b.h} width={150} height={b.h} rx={6} fill={b.c} />
						<Sx x={b.x + 75} y={base + 34} text={b.l} size={22} color={INK} weight={700} anchor="middle" at={-100} />
					</g>
				))}
				<g opacity={prog(f, K9.untreated, 12)}>
					<rect x={1420} y={base - 300} width={150} height={300} rx={6} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="10 8" />
					<Sx x={1495} y={base - 150} text="?" size={60} color={GREYT} weight={800} anchor="middle" at={-100} />
					<Sx x={1495} y={base + 34} text="untreated areas," size={22} color={GREY_INK} weight={700} anchor="middle" at={-100} />
					<Sx x={1495} y={base + 62} text="same years" size={22} color={GREY_INK} weight={700} anchor="middle" at={-100} />
				</g>
				{f >= K9.fell ? <DrawPath d={`M990,${base} L1600,${base}`} at={K9.fell - 10} dur={12} color={INK_SOFT} width={3} /> : null}
				<CTag x={1020} y={340} text="Cairns: about 96% lower incidence" at={K9.fell + 10} color={AMBER_INK} size={32} dim={prog(f, K9.weaker, 10)} />
				<GTag x={1020} y={430} text="Ryan et al., 2019 to 2020" at={K9.fell + 20} size={18} />
				<CTag x={560} y={900} text="compared over time, not with a control group at the same time: weaker evidence" at={K9.but + 10} color={TERRA} size={28} maxW={1200} />
				<GTag x={560} y={1000} text="Townsville: 16 local cases in 2024 to 2025 (b12)" at={K9.weaker + 10} size={18} />
				{void K9.now}{void qx}{void qy}{void Pl}{void PlateB}{void PLATES}{void INK}{void AMBER}{void VirusRing}{void fitW}{void WText}{void MistakeChip}{void Thermo}{void Tank}{void slotC}{void vis}{void FB}
			</Overlay>
		</>
	);
};

// ---------- 10. Why control is still limited ----------
const K10 = cues(S('still-limited'), {why: 'So why', years: 'years and money', agree: 'residents must agree', started: 'started yet', vacc: 'four serotypes make', resist: 'resist common insecticides', climate: 'a warmer climate', travel: 'travel keeps bringing', control: 'Control succeeds where', keep: 'people can keep'});
const GT: Geo = {x: 110, y: 690, w: 400, h: 280, lon0: 94, lat0: 20, k: 400 / 62};
const rc = rng(17);
const CITIES = Array.from({length: 22}, () => [96 + rc() * 30, 18 - rc() * 30] as [number, number]);
export const SceneLimited: React.FC = () => {
	const f = useCurrentFrame();
	const items = [K10.years, K10.agree, K10.started, K10.vacc, K10.resist, K10.climate, K10.travel, K10.control];
	const dimOf = (k: number) => prog(f, items[k + 1] ?? 1e9, 10);
	const fin = prog(f, K10.control, 12);
	const colO = 1 - 0.5 * fin;
	const s1 = slotC(FB, 1);
	const cover = 0.3 * smooth(prog(f, K10.years + 10, 120));
	const PT = proj(GT);
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, 1, 1, 1]} faint={[0, prog(f, K10.control + 6, 12), 0, 0]} broken={prog(f, K10.control + 6, 12)} />
				{f >= K10.keep ? <DrawPath d={`M${s1[0] + 210},${s1[1] - 40} C${s1[0] + 250},${s1[1] + 40} ${s1[0] - 250},${s1[1] + 40} ${s1[0] - 230},${s1[1] - 46} C${s1[0] - 210},${s1[1] - 130} ${s1[0] + 200},${s1[1] - 140} ${s1[0] + 216},${s1[1] - 60}`} at={K10.keep} dur={24} color={TEAL} width={5} /> : null}
				<Sx x={s1[0] + 230} y={s1[1] - 112} text="kept up" size={30} color={TEAL} hand weight={700} at={K10.keep + 16} />
				<g opacity={colO}>
					<Sx x={110} y={330} text="social causes" size={34} color={INK} weight={800} at={K10.years} />
					<Sx x={1000} y={330} text="biological causes" size={34} color={INK} weight={800} at={K10.vacc} />
					<line x1={960} x2={960} y1={300} y2={1000} stroke={GREYT} strokeWidth={2} opacity={prog(f, K10.vacc, 12)} />
					<g opacity={prog(f, K10.years, 12) * (1 - 0.5 * dimOf(1))}>
						<Pl p={PLATES.cage} cx={190} cy={440} w={140} />
						<rect x={300} y={380} width={600} height={110} rx={40} fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={3} />
						<rect x={300} y={380} width={600 * cover} height={110} rx={40} fill={TEAL} opacity={0.35} />
						{Array.from({length: 8}, (_, i) => {
							const x = 330 + i * 70, y = 445;
							const on = i < 3 ? prog(f, K10.agree + 10 + i * 8, 10) : 0;
							return (
								<g key={i}>
									<path d={`M${x},${y} l0,-24 l18,-14 l18,14 l0,24 Z`} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2} opacity={prog(f, K10.years + 10 + i * 3, 10)} />
									{on > 0.01 ? <DrawPath d={`M${x + 8},${y - 12} l6,7 l12,-14`} at={K10.agree + 10 + i * 8} dur={8} color={TEAL} width={3.5} /> : null}
								</g>
							);
						})}
					</g>
					<CTag x={300} y={500} text="releases: years and funding" at={K10.years + 10} color={AMBER_INK} size={28} dim={dimOf(0)} />
					<CTag x={300} y={580} text="community support needed" at={K10.agree + 6} color={AMBER_INK} size={28} dim={dimOf(1)} />
					<g opacity={prog(f, K10.started, 12) * (1 - 0.5 * dimOf(2))}>
						<SeaMap g={GT} id="b13-lim" at={K10.started} draw={1} />
						{CITIES.map((c, i) => {
							const [x, y] = PT(c);
							return <circle key={i} cx={x} cy={y} r={6} fill={i < 3 ? TEAL : '#b9b2a4'} stroke="#fffdf8" strokeWidth={1.5} />;
						})}
					</g>
					<CTag x={540} y={700} text="Wolbachia: a small share of cities with dengue so far" at={K10.started + 8} color={TEAL} size={26} maxW={380} dim={dimOf(2)} />
					<GTag x={540} y={860} text="checked October 2026" at={K10.started + 20} size={18} />
					<g opacity={prog(f, K10.vacc, 12) * (1 - 0.5 * dimOf(3))}>
						<Pl p={PLATES.vaccine} cx={1090} cy={430} w={160} />
						{SERO.map((c, i) => <circle key={i} cx={1060 + i * 26} cy={500} r={9} fill="none" stroke={c} strokeWidth={4} />)}
					</g>
					<CTag x={1200} y={390} text="four serotypes: vaccines are hard" at={K10.vacc + 6} color={AMBER_INK} size={28} dim={dimOf(3)} />
					<MistakeChip x={1200} y={460} text="a vaccine will solve it on its own" at={K10.vacc + 30} cross={K10.vacc + 60} size={22} />
					<Pl p={PLATES.sprayer} cx={1090} cy={620} w={fitW(PLATES.sprayer, 120, 110)} o={prog(f, K10.resist, 12)} dim={dimOf(4)} />
					<CTag x={1200} y={570} text="insecticide resistance" at={K10.resist + 6} color={AMBER_INK} size={28} dim={dimOf(4)} />
					<GTag x={1200} y={640} text="resistance varies by place and product (b12)" at={K10.resist + 16} size={18} />
					<g opacity={1 - 0.5 * dimOf(5)}><Thermo x={1090} y={790} o={prog(f, K10.climate, 12)} up={prog(f, K10.climate + 10, 30)} /></g>
					<CTag x={1200} y={730} text="warmer climate: Aedes range may widen" at={K10.climate + 6} color={AMBER_INK} size={28} maxW={600} dim={dimOf(5)} />
					{f >= K10.travel ? <g opacity={1 - 0.5 * dimOf(6)}><DrawPath d="M1020,940 Q1090,860 1160,930" at={K10.travel} dur={20} color={AMBER} width={4} dash="9 7" /><circle cx={1160} cy={930} r={10} fill="#fffdf8" stroke={SERO[2]} strokeWidth={5} opacity={prog(f, K10.travel + 16, 8)} /></g> : null}
					<CTag x={1200} y={880} text="travel brings the virus back" at={K10.travel + 6} color={AMBER_INK} size={28} dim={dimOf(6)} />
				</g>
				<CTag x={560} y={960} text="break a link, and sustain it" at={K10.keep + 10} color={TEAL} size={38} />
				{void K10.why}{void TERRA}{void GREY_INK}{void PlateB}{void Cloud}{void Clinic}{void Grid100}{void Tank}{void VirusRing}{void WText}{void vis}{void Place}{void lerp}{void clamp01}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {two: 'Two lines to', tap: 'Incidence is the tap', and: 'dengue needs virus'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two lines to keep" at={K11.two} size={56} />
			<Overlay>
				<Sx x={140} y={380} text="Incidence is the tap, prevalence is the tank." size={64} color={AMBER_INK} hand weight={700} at={K11.tap} />
				<Tank x={1560} y={250} w={180} h={200} at={K11.tap + 10} level={0.45} inO={1} outO={1} />
				<WText x={140} y={640} text="Dengue needs virus, vector, warmth and water, and people, all at once." size={60} maxW={1680} color={TEAL} hand weight={700} at={K11.and} />
				<FourBar g={{x: 210, y: 820, w: 1700, s: 0.88}} at={K11.and + 20} fill={[1, 1, 1, 1]} />
				{void f}
			</Overlay>
		</>
	);
};
