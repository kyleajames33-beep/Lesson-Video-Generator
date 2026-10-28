// M7 B13 scenes 5 to 8: reading a dengue year (the coded weekly graph over grey rainfall bars, the dry-season bracket,
// the lag bracket, b12's wheel lighting station by station and the day bar; the Aedes and warmth-and-water slots fill);
// serotypes (the 10 by 10 grid fills grey, takes DENV-1 rings, DENV-3 sweeps through it, rose outlines for severe
// second infections, the vaccine and its four rings with one left empty); mobility (the map returns: Bali to Cairns
// with a DENV-2 rider, a local chain, then four coloured arcs between Javanese and Malaysian cities); the four
// conditions (the bar moves down; a slot fades and the links break; the jar, the dense dots and the calendar strip).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Wheel} from '../bio-m7-b12/parts';
import type {WG} from '../bio-m7-b12/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, CTag, DrawPath, FB, FourBar, GMAP, GREYT, GREY_INK, GTag, Grid100, HEAD, INK, INK_SOFT, PLATES, Pl, Place, PlateB, ROSE, SERO, SeaMap, Sx, TEAL, TERRA,
	TravelArc, VIOLET, VirusRing, clamp01, lerp, prog, proj, pulse, rng, slotC, smooth, vis, PLACE,
} from './parts';
import type {BarG} from './parts';

// ---------- 5. Reading a dengue year ----------
const K5 = cues(S('dengue-year'), {read: 'Now read one', across: 'across a year', low: 'stay low through', climb: 'then climb a', why: 'Why the delay', rain: 'Rain fills containers', hatch: 'eggs hatch', adults: 'adults emerge', over: 'over a week', peak: 'the peak trails'});
const GR = {x: 170, y: 330, w: 1100, h: 500};
const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const RAIN = [5, 3, 4, 8, 24, 30, 34, 32, 28, 15, 8, 5];
const inc = (w: number) => 1 + 13 * Math.exp(-(((w - 31) / 5.5) ** 2)) + 0.3 * Math.sin(w * 1.7);
const gx = (w: number) => GR.x + (w / 52) * GR.w;
const gy = (v: number) => GR.y + GR.h - (v / 15) * GR.h;
const WY: WG = {cx: 1590, cy: 520, R: 125, ps: 84};
export const SceneYear: React.FC = () => {
	const f = useCurrentFrame();
	const drawN = Math.floor(52 * smooth(prog(f, K5.across, 50)));
	const pts = Array.from({length: drawN + 1}, (_, w) => `${gx(w)},${gy(inc(w))}`).join(' ');
	const wet = prog(f, K5.climb, 16);
	const lit = [vis(f, K5.rain, K5.hatch, 8), vis(f, K5.hatch, K5.adults, 8), vis(f, K5.adults - 6, K5.over, 8), prog(f, K5.over, 8)];
	const dayFill = smooth(prog(f, K5.over + 6, 40));
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, prog(f, K5.peak, 14), prog(f, K5.peak + 10, 14), 0]} lit={[0, vis(f, K5.peak, K5.peak + 60), vis(f, K5.peak + 10, K5.peak + 70), 0]} />
				<g opacity={prog(f, 0, 14)}>
					{RAIN.map((r, i) => {
						const x0 = gx(i * 52 / 12) + 6, x1 = gx((i + 1) * 52 / 12) - 6;
						const h = (r / 34) * 260;
						const bright = i >= 4 && i <= 8 ? wet : 0;
						return <rect key={i} x={x0} y={GR.y + GR.h - h} width={x1 - x0} height={h} fill={bright > 0.5 ? '#a9c7e0' : '#dfe3e6'} opacity={0.8} />;
					})}
					<line x1={GR.x} y1={GR.y + GR.h} x2={GR.x + GR.w} y2={GR.y + GR.h} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={GR.x} y1={GR.y} x2={GR.x} y2={GR.y + GR.h} stroke={INK_SOFT} strokeWidth={3} />
					{MONTHS.map((m, i) => <Sx key={m} x={gx((i + 0.5) * 52 / 12)} y={GR.y + GR.h + 32} text={m} size={22} color={GREY_INK} weight={600} anchor="middle" at={-100} />)}
					{[0, 5, 10, 15].map(v => <Sx key={v} x={GR.x - 12} y={gy(v) + 8} text={`${v}`} size={20} color={GREY_INK} weight={600} anchor="end" at={-100} />)}
					<Sx x={GR.x} y={GR.y - 18} text="new cases per 100,000 per week" size={24} color={INK} weight={700} at={-100} />
					<Sx x={GR.x + GR.w} y={GR.y + GR.h + 66} text="month" size={22} color={GREY_INK} weight={600} anchor="end" at={-100} />
					<Sx x={GR.x + GR.w} y={GR.y - 18} text="grey bars: rainfall" size={20} color={GREY_INK} weight={600} anchor="end" at={-100} />
				</g>
				{drawN > 0 ? <polyline points={pts} fill="none" stroke={AMBER} strokeWidth={6} strokeLinejoin="round" strokeLinecap="round" /> : null}
				<GTag x={GR.x} y={990} text="teaching data, shaped like a Javanese city" at={K5.across + 20} size={20} />
				{f >= K5.low ? <DrawPath d={`M${gx(0.5)},${gy(4)} L${gx(0.5)},${gy(4.6)} L${gx(17)},${gy(4.6)} L${gx(17)},${gy(4)}`} at={K5.low} dur={14} color={GREY_INK} width={4} /> : null}
				<GTag x={gx(3)} y={gy(4.6) - 50} text="dry season: low" at={K5.low + 10} size={22} />
				{f >= K5.climb + 20 ? <DrawPath d={`M${gx(17.4)},${gy(9) + 10} L${gx(17.4)},${gy(9)} L${gx(24)},${gy(9)} L${gx(24)},${gy(9) + 10}`} at={K5.climb + 20} dur={14} color={AMBER_INK} width={5} /> : null}
				<CTag x={gx(13)} y={gy(9) - 76} text="lag: about 1 to 2 months" at={K5.climb + 30} color={AMBER_INK} size={30} dim={prog(f, K5.peak, 10)} />
				<Sx x={gx(17.4)} y={gy(9) + 40} text="wet season starts" size={20} color={GREY_INK} weight={600} anchor="middle" at={K5.climb + 30} />
				<Wheel g={WY} at={K5.rain} flood={prog(f, K5.rain + 6, 16)} lit={lit} labelSize={17} />
				<GTag x={1420} y={330} text="b12: the life cycle" at={K5.rain + 6} size={18} />
				<g opacity={prog(f, K5.over, 12)}>
					<PlateB p={PLATES.aedes} cx={1450} cy={870} w={110} id="b13-yr-ae" />
					<rect x={1520} y={858} width={290} height={24} rx={12} fill="#f3f2ee" stroke={GREYT} strokeWidth={2} />
					<rect x={1520} y={858} width={290 * dayFill} height={24} rx={12} fill="#b9b2a4" />
					<Sx x={1520} y={918} text="about 8 to 12 days in the mosquito" size={20} color={GREY_INK} weight={600} at={-100} />
				</g>
				<CTag x={GR.x + 560} y={905} text="the peak trails the rain" at={K5.peak + 4} color={AMBER_INK} size={34} />
				{void K5.read}{void K5.why}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 6. Immunity covers one serotype ----------
const K6 = cues(S('serotypes'), {herd: 'herd immunity', covers: 'covers only the', city: 'So a city', diff: 'different serotype arrives', second: 'A second infection', severe: 'likely to be severe', vacc: 'protect against all', misses: 'a type it misses'});
const GX = 200, GYY = 400, SP = 44;
const r6 = rng(61);
const IMM = Array.from({length: 100}, () => r6() > 0.18);
const DEL = Array.from({length: 100}, () => r6() * 30);
const INF = Array.from({length: 100}, () => r6() < 0.62);
const SEV = [12, 27, 33, 46, 58, 64, 71, 85].filter(i => IMM[i]);
export const SceneSerotypes: React.FC = () => {
	const f = useCurrentFrame();
	const infAt = (i: number) => K6.diff + 24 + (i % 10) * 7 + DEL[i];
	const vx = lerp(60, 150, smooth(prog(f, K6.diff, 24)));
	const outA = K6.vacc - 6;
	const missP = prog(f, K6.misses, 14);
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, 1, 1, prog(f, K6.covers, 14)]} lit={[0, 0, 0, vis(f, K6.covers, K6.covers + 80)]} />
				<Grid100 x={GX} y={GYY} sp={SP} r={14} at={K6.herd - 10} step={0.25}
					fill={i => Math.max(IMM[i] ? prog(f, K6.herd + i * 0.3, 10) : 0, INF[i] ? prog(f, infAt(i), 8) : 0)}
					fillC={i => (INF[i] && f >= infAt(i) + 4 ? '#b6a3df' : '#b9b2a4')}
					ring={i => (IMM[i] ? [AMBER, prog(f, K6.covers + 6 + i * 0.2, 10)] : null)}
					rose={i => (SEV.includes(i) ? prog(f, K6.severe + 6, 12) * (1 - 0.5 * prog(f, K6.vacc, 12)) + (i === SEV[0] ? pulse(f, K6.misses + 10, 40) : 0) : 0)} />
				<GTag x={GX} y={GYY - 64} text="b10: herd immunity" at={K6.herd} out={K6.covers} size={22} />
				<GTag x={GX} y={GYY + 10 * SP - 4} text="each dot: a person in the city (filled: had dengue before)" at={K6.herd + 20} size={18} />
				{f >= K6.diff ? <VirusRing cx={vx} cy={GYY + 4.5 * SP} w={86} ring={VIOLET} o={prog(f, K6.diff, 10) * (1 - prog(f, K6.vacc, 12))} id="b13-d3" /> : null}
				<CTag x={720} y={360} text="immune to DENV-1 only" at={K6.covers + 10} color={AMBER_INK} size={34} dim={prog(f, K6.diff, 10)} out={outA} />
				<CTag x={720} y={460} text="DENV-1 immunity doesn't stop DENV-3" at={K6.diff + 10} color={VIOLET} size={34} dim={prog(f, K6.second, 10)} out={outA} />
				<CTag x={720} y={560} text="second infection, new serotype: higher risk of severe dengue" at={K6.severe + 4} color={ROSE} size={32} maxW={1000} out={outA} />
				<GTag x={720} y={680} text="antibody-dependent enhancement" at={K6.severe + 20} out={outA} size={20} />
				<GTag x={720} y={724} text="brief cross-protection at first" at={K6.severe + 30} out={outA} size={20} />
				<g opacity={prog(f, K6.vacc, 14)}>
					<Pl p={PLATES.vaccine} cx={900} cy={480} w={300} />
					{SERO.map((c, i) => {
						const empty = i === 3 ? missP : 0;
						return (
							<g key={i}>
								<circle cx={1110 + i * 64} cy={480} r={22} fill="none" stroke={empty > 0.5 ? GREYT : c} strokeWidth={6} strokeDasharray={empty > 0.5 ? '6 6' : undefined} />
								<Sx x={1110 + i * 64} y={530} text={`${i + 1}`} size={20} color={GREY_INK} weight={700} anchor="middle" at={-100} />
							</g>
						);
					})}
				</g>
				<CTag x={760} y={590} text="a vaccine must cover all four" at={K6.vacc + 8} color={AMBER_INK} size={34} dim={prog(f, K6.misses, 10)} />
				<CTag x={760} y={680} text="a missed type could later cause severe dengue" at={K6.misses + 8} color={ROSE} size={30} maxW={900} />
				<GTag x={760} y={790} text="Qdenga: uneven across serotypes; WHO (2024) advises it for ages 6 to 16 where dengue transmission is high" at={K6.vacc + 30} size={17} />
				<GTag x={760} y={834} text="Dengvaxia, 2017: more severe dengue in vaccinated people never infected before" at={K6.misses + 20} size={17} />
				{void K6.city}{void K6.second}{void TEAL}{void INK}{void INK_SOFT}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 7. Mobility links the scales ----------
const K7 = cues(S('mobility'), {links: 'Mobility links', fly: 'fly to another', blood: 'still in their', bite: 'If local Aedes', chain: 'a new chain', nq: 'north Queensland', bring: 'bringing the virus'});
const ARCS: [string, string, number][] = [['Kuala Lumpur', 'Jakarta', -40], ['Jakarta', 'Yogyakarta', -30], ['Yogyakarta', 'Surabaya', 30], ['Surabaya', 'Kuala Lumpur', -60]];
export const SceneMobility: React.FC = () => {
	const f = useCurrentFrame();
	const P = proj(GMAP);
	const [cx, cy] = P(PLACE.Cairns);
	const spread = prog(f, K7.chain, 30);
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, 1, 1, 1]} />
				<SeaMap g={GMAP} id="b13-mob" at={0} draw={1} />
				<Place g={GMAP} name="Bali" at={K7.fly - 10} dx={14} dy={30} size={22} />
				<Place g={GMAP} name="Cairns" at={K7.fly - 4} dx={-14} dy={-14} anchor="end" size={24} color={TEAL} />
				<TravelArc g={GMAP} a="Bali" b="Cairns" at={K7.fly} dur={60} bow={-140} color={AMBER} rider={SERO[1]} />
				<PlateB p={PLATES.aedes} cx={cx + 70} cy={cy + 70} w={110} o={prog(f, K7.bite, 12)} id="b13-mob-ae" />
				{[[-34, 30], [30, -36], [40, 30]].map(([dx, dy], i) => <circle key={i} cx={cx + dx * spread} cy={cy + dy * spread} r={9} fill={AMBER} opacity={prog(f, K7.chain + i * 8, 10)} />)}
				<CTag x={1020} y={330} text="virus still in the blood: about 5 days" at={K7.blood} color={AMBER_INK} size={32} dim={prog(f, K7.bite, 10)} />
				<CTag x={1020} y={440} text="local Aedes bite: a local chain starts" at={K7.chain} color={TEAL} size={32} dim={prog(f, K7.bring, 10)} />
				<GTag x={1020} y={560} text="Queensland Health: north Queensland outbreaks start" at={K7.nq} size={20} />
				<GTag x={1020} y={602} text="when travellers bring the virus in" at={K7.nq} size={20} />
				<GTag x={1020} y={644} text="dengue doesn't usually spread there on its own" at={K7.nq + 16} size={20} />
				<GTag x={1020} y={980} text="no travellers drawn: the arc and the virus only" at={K7.fly + 30} size={16} />
				{ARCS.map(([a, b, bow], i) => <TravelArc key={i} g={GMAP} a={a} b={b} at={K7.bring + 6 + i * 10} dur={24} bow={bow} color={SERO[i]} rider={SERO[i]} ride={0.5} o={prog(f, K7.bring + 6 + i * 10, 8)} />)}
				<Place g={GMAP} name="Kuala Lumpur" at={K7.bring} size={20} dy={-12} />
				<Place g={GMAP} name="Jakarta" at={K7.bring} size={20} dx={-12} dy={-14} anchor="end" />
				<Place g={GMAP} name="Yogyakarta" at={K7.bring} size={20} dx={-4} dy={34} anchor="end" />
				<Place g={GMAP} name="Surabaya" at={K7.bring} size={20} dx={8} dy={-16} />
				<CTag x={1020} y={740} text="serotypes move with people" at={K7.bring + 20} color={AMBER_INK} size={34} />
				{void K7.links}{void GREY_INK}{void INK}{void ROSE}{void TERRA}{void FB}
			</Overlay>
		</>
	);
};

// ---------- 8. Four conditions, shaped by people ----------
const K8 = cues(S('four-conditions'), {four: 'four things meet', cut: 'Cut one far', how: 'how people live', piped: 'piped water is', dry: 'even in dry', crowded: 'Crowded', money: 'money and support', year: 'year after year'});
export const SceneFour: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, 0, 24));
	const g: BarG = {x: 110, y: lerp(FB.y, 300, mv), w: 1700};
	const cutV = vis(f, K8.cut, K8.how, 12);
	const s2 = slotC(g, 2), s1 = slotC(g, 1), s3 = slotC(g, 3);
	const dens = smooth(prog(f, K8.crowded, 40));
	const n = Math.round(lerp(16, 48, dens));
	const ticks = 3;
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar g={g} fill={[1, 1, 1, 1]} faint={[0, cutV, 0, 0]} broken={cutV} rain={1 - 0.8 * prog(f, K8.dry, 12)} lit={[0, 0, vis(f, K8.piped, K8.crowded, 10), vis(f, K8.crowded, K8.money, 10)]} />
				<CTag x={110} y={420} text="all four at once" at={K8.four + 30} color={AMBER_INK} size={32} dim={prog(f, K8.cut, 10)} out={K8.how + 10} />
				<CTag x={460} y={420} text="cut one far enough: spread stops" at={K8.cut + 8} color={TERRA} size={32} dim={prog(f, K8.how, 10)} out={K8.how + 10} />
				<Sx x={110} y={470} text="social causes" size={30} color={GREY_INK} weight={700} at={K8.how + 6} />
				{f >= K8.how + 6 ? <DrawPath d="M110,484 L1810,484" at={K8.how + 6} dur={20} color={GREYT} width={2.5} dash="8 8" /> : null}
				<Pl p={PLATES.jar} cx={s2[0]} cy={600} w={180} o={prog(f, K8.piped, 14)} />
				{f >= K8.piped + 14 ? <DrawPath d={`M${s2[0] - 100},${590} Q${s1[0] + 40},${560} ${s1[0]},${s1[1] + 6}`} at={K8.piped + 14} dur={16} color={AMBER_INK} width={3} dash="8 6" /> : null}
				<CTag x={s2[0] - 190} y={710} text="stored water: breeding site" at={K8.piped + 20} color={AMBER_INK} size={28} dim={prog(f, K8.dry, 10)} />
				<GTag x={s2[0] - 190} y={782} text="where piped water is unreliable" at={K8.piped + 26} size={18} />
				<CTag x={s2[0] - 190} y={826} text="no rain needed" at={K8.dry + 6} color={AMBER_INK} size={28} dim={prog(f, K8.crowded, 10)} />
				<g opacity={prog(f, K8.crowded, 12)}>
					{Array.from({length: n}, (_, i) => {
						const cols = Math.ceil(Math.sqrt(n * 1.6));
						const sp = 300 / cols;
						return <circle key={i} cx={s3[0] - 150 + (i % cols + 0.5) * sp} cy={540 + Math.floor(i / cols) * sp} r={Math.min(10, sp * 0.32)} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2} />;
					})}
				</g>
				<CTag x={s3[0] - 190} y={720} text="crowded cities: more contact" at={K8.crowded + 20} color={AMBER_INK} size={28} dim={prog(f, K8.money, 10)} />
				<g opacity={prog(f, K8.money, 12)}>
					{Array.from({length: 12}, (_, i) => {
						const x = 110 + i * 62;
						const tk = i < ticks;
						return (
							<g key={i}>
								<rect x={x} y={920} width={54} height={54} rx={8} fill="#fffdf8" stroke={tk ? TEAL : GREYT} strokeWidth={2.5} />
								{tk ? <DrawPath d={`M${x + 12},${948} L${x + 24},${960} L${x + 42},${934}`} at={K8.money + 10 + i * 8} dur={8} color={TEAL} width={4} /> : null}
							</g>
						);
					})}
					<Sx x={110} y={906} text="12 months of control work" size={20} color={GREY_INK} weight={600} at={-100} />
				</g>
				<CTag x={900} y={914} text="programs must be kept up" at={K8.year} color={TEAL} size={32} />
				<GTag x={900} y={990} text="one missed container keeps breeding (b12)" at={K8.year + 14} size={20} />
				{void AMBER}{void INK}{void ROSE}{void VirusRing}{void Place}{void SeaMap}{void Grid100}{void TravelArc}{void clamp01}{void pulse}{void SERO}{void GMAP}{void proj}{void PLACE}{void VIOLET}
			</Overlay>
		</>
	);
};
