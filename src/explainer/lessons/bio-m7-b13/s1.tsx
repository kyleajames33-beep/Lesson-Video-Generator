// M7 B13 scenes 1 to 4: the hook (Yogyakarta on the coded map, the Wolbachia mosquito and the 77% chip, then the
// world outline and the 2023 and 2024 bars to scale); the named disease (virus, Aedes, container; the grey malaria
// panel and its crossed chip; four serotype rings; the four-conditions bar draws with its virus slot); incidence and
// prevalence (two glosses, then the tank: tap in, drain out, the level is prevalence); past infection and rates (fast
// tap and wide drain, a second tank with no drain, the 69-dot grid; then the rate bars swap counts for rates).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {World} from '../bio-m5-b13/world';
import {S} from './common';
import {
	AMBER, AMBER_INK, CTag, DrawPath, FB, FourBar, GMAP, GREYT, GREY_INK, GTag, Grid100, HEAD, INK, INK_SOFT, MistakeChip, PLATES, Pl, Place, PlateB, PopRow, SERO, SeaMap, Sx, TEAL, Tank,
	VirusRing, clamp01, lerp, prog, pulse, smooth, vis,
} from './parts';
import type {Geo} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {yog: 'Yogyakarta', wolb: 'Wolbachia mosquitoes', fewer: 'fewer dengue cases', released: 'had been released', yet: 'Yet in', fourteen: 'over fourteen million', so: 'So if one'});
const M_PER = 29; // px per million cases
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const zoom = prog(f, K1.yet, 24);
	const bars = [{x: 1230, v: 6.5, label: '2023', at: K1.yet + 20}, {x: 1500, v: 14.4, label: '2024', at: K1.yet + 34}];
	const base = 900;
	return (
		<>
			<Heading text={HEAD} at={K1.so + 4} size={52} />
			<Overlay>
				<g opacity={1 - zoom}>
					<SeaMap g={GMAP} id="b13-hook" at={0} />
					<Place g={GMAP} name="Yogyakarta" at={K1.yog} pulseAt={K1.yog} dy={-16} size={28} />
					<Pl p={PLATES.aedes} cx={470} cy={820} w={170} o={prog(f, K1.wolb, 14)} />
					<circle cx={478} cy={826} r={9} fill={TEAL} stroke="#1f5a60" strokeWidth={2} opacity={prog(f, K1.wolb + 8, 10)} />
					<PopRow x={380} y={900} n={5} dx={44} w={36} teal={() => 1} o={vis(f, K1.released, K1.released + 70, 12)} />
				</g>
				<World M={{x: 60, y: 360, w: 960}} id="b13-world" o={zoom * 0.9} outline={zoom} />
				<g opacity={1 - zoom}>
					<GTag x={1040} y={320} text="b12: Wolbachia greatly reduces dengue spread by Aedes" at={K1.wolb + 6} size={22} />
					<Pl p={PLATES.wolb} cx={1120} cy={450} w={130} o={prog(f, K1.wolb + 12, 14)} />
					<Sx x={1200} y={460} text="Wolbachia bacteria in a mosquito cell" size={20} color={GREY_INK} weight={600} at={K1.wolb + 16} />
					<GTag x={1040} y={660} text="Utarini et al., NEJM 2021" at={K1.fewer + 14} size={20} />
				</g>
				<CTag x={1040} y={550} text="77% fewer dengue cases" at={K1.fewer} color={AMBER_INK} size={44} dim={prog(f, K1.yet, 10)} out={K1.yet + 24} />
				{bars.map((b, i) => {
					const h = b.v * M_PER * smooth(prog(f, b.at, 30));
					const o = prog(f, b.at, 10);
					return o > 0.01 ? (
						<g key={b.label} opacity={o}>
							<rect x={b.x} y={base - h} width={170} height={h} rx={8} fill={i === 1 ? AMBER : '#c9c2b4'} />
							<Sx x={b.x + 85} y={base + 40} text={b.label} size={30} color={INK} weight={700} anchor="middle" at={-100} />
						</g>
					) : null;
				})}
				{f >= K1.yet + 20 ? <DrawPath d={`M1180,${base} L1740,${base}`} at={K1.yet + 20} dur={12} color={INK_SOFT} width={3} /> : null}
				<GTag x={1230} y={base - 6.5 * M_PER - 54} text="previous record: 2023" at={K1.yet + 40} size={20} />
				<CTag x={1080} y={300} text="2024: over 14 million reported cases, the highest on record" at={K1.fourteen} color={AMBER_INK} size={32} maxW={720} />
				<GTag x={1180} y={960} text="dengue cases reported to WHO" at={K1.yet + 30} size={20} />
				<GTag x={1180} y={1006} text="WHO, 2024 update; most 2024 cases were in the Americas" at={K1.fourteen + 16} size={18} />
			</Overlay>
		</>
	);
};

// ---------- 2. The named disease ----------
const K2 = cues(S('named-disease'), {named: 'Our named disease', virus: 'caused by a virus', aedes: 'Aedes aegypti', containers: 'water containers', malaria: 'Malaria is the other', four: 'four serotypes', treats: 'treats as different'});
export const GSMALL: Geo = {x: 80, y: 300, w: 480, h: 380, lon0: 94, lat0: 20, k: 480 / 62};
export const SceneNamed: React.FC = () => {
	const f = useCurrentFrame();
	const row = 1 - prog(f, K2.four, 14);
	const pan = prog(f, K2.malaria, 12) * (1 - 0.6 * prog(f, K2.four, 12));
	const RX = [760, 1010, 1260, 1510];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar at={K2.treats} fill={[1, 0, 0, 0]} />
				<SeaMap g={GSMALL} id="b13-named" at={0} draw={1} />
				<Place g={GSMALL} name="Yogyakarta" at={4} size={22} />
				<GTag x={80} y={700} text="named disease: dengue in South East Asia" at={K2.named} size={22} />
				<g opacity={row}>
					<VirusRing cx={780} cy={470} w={210} o={prog(f, K2.virus, 14)} />
					<GTag x={640} y={600} text="dengue virus, drawn far larger than real (about 50 nanometres)" at={K2.virus + 10} size={18} />
					<Pl p={PLATES.aedes} cx={1160} cy={460} w={300} o={prog(f, K2.aedes, 14)} />
					<Sx x={1160} y={580} text="Aedes aegypti" size={24} color={GREY_INK} weight={700} anchor="middle" at={K2.aedes + 8} />
					<Pl p={PLATES.flooded} cx={1530} cy={460} w={190} o={prog(f, K2.containers, 14)} />
					<GTag x={1440} y={580} text="b12: breeds in containers" at={K2.containers + 8} size={20} />
				</g>
				<CTag x={640} y={660} text="dengue: a virus, spread mainly by Aedes aegypti" at={K2.aedes + 14} color={AMBER_INK} size={32} dim={prog(f, K2.malaria, 10)} out={K2.four} />
				{RX.map((x, i) => (
					<g key={i} opacity={prog(f, K2.four + 6 + i * 8, 12)}>
						<VirusRing cx={x} cy={450} w={150} ring={SERO[i]} id={`b13-sero-${i}`} />
						<Sx x={x} y={580} text={`DENV-${i + 1}`} size={24} color={GREY_INK} weight={700} anchor="middle" at={-100} />
					</g>
				))}
				<CTag x={640} y={630} text="serotype: a type of the virus the immune system treats as different" at={K2.four + 20} color={TEAL} size={30} maxW={1100} />
				<g opacity={pan}>
					<rect x={640} y={790} width={1180} height={210} rx={20} fill="#f3f2ee" stroke={GREYT} strokeWidth={2} />
					<Pl p={PLATES.plasmo} cx={740} cy={895} w={140} dim={0.2} />
					<Pl p={PLATES.anoph} cx={920} cy={895} w={170} dim={0.2} />
					<Sx x={1030} y={850} text="malaria: Plasmodium (a protozoan), spread by Anopheles" size={24} color={GREY_INK} weight={700} at={-100} />
				</g>
				<g opacity={1 - 0.6 * prog(f, K2.four, 12)}>
					<MistakeChip x={1030} y={880} text="malaria and dengue are the same disease" at={K2.malaria + 30} cross={K2.malaria + 60} size={24} />
					<GTag x={1030} y={950} text="different pathogen, different mosquito" at={K2.malaria + 70} size={20} />
				</g>
				{void AMBER}{void INK}{void FB}
			</Overlay>
		</>
	);
};

// ---------- 3. Incidence and prevalence ----------
const K3 = cues(S('incidence-prevalence'), {inc: 'Incidence is the', prev: 'Prevalence is the share', tank: 'Picture a tank', tap: 'flow in from', drains: 'Recovery or death', full: 'how full the'});
const T3 = {x: 1180, y: 430, w: 360, h: 420};
export const SceneIncPrev: React.FC = () => {
	const f = useCurrentFrame();
	const lvl = 0.12 + 0.38 * smooth(prog(f, K3.tap, 60)) - 0.06 * smooth(prog(f, K3.drains + 10, 40));
	const wy = T3.y + T3.h - clamp01(lvl) * (T3.h - 16);
	const pu = pulse(f, K3.full + 4, 40);
	const dimG = prog(f, K3.tap, 12);
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, 0, 0, 0]} />
				<CTag x={110} y={330} text="incidence: new cases in a set time, per set number of people" at={K3.inc} color={AMBER_INK} size={32} maxW={820} dim={dimG} />
				<GTag x={110} y={450} text="e.g. 600 new cases per 100,000 people per year" at={K3.inc + 40} size={22} />
				<CTag x={110} y={540} text="prevalence: share of a population with the disease at one time" at={K3.prev} color={TEAL} size={32} maxW={820} dim={dimG} />
				<GTag x={110} y={660} text="e.g. 2 in 1,000 people ill today (teaching figure)" at={K3.prev + 30} size={22} />
				<Tank {...T3} at={K3.tank} level={lvl} inO={prog(f, K3.tap, 12)} outO={prog(f, K3.drains, 12)} />
				<CTag x={1060} y={318} text="incidence (new cases)" at={K3.tap + 6} color={AMBER_INK} size={30} />
				<GTag x={1620} y={880} text="recovery or death" at={K3.drains + 6} size={22} />
				{f >= K3.full ? <line x1={T3.x - 20} x2={T3.x + T3.w + 20} y1={wy} y2={wy} stroke={TEAL} strokeWidth={4 + 4 * pu} opacity={prog(f, K3.full, 10)} /> : null}
				<CTag x={T3.x + T3.w + 40} y={wy - 70} text="prevalence" at={K3.full + 4} color={TEAL} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 4. Past infection, and rates per 100,000 ----------
const K4 = cues(S('past-infection-rates'), {week: 'lasts about a week', sep: 'Past infection is', seven: 'seven in ten', rates: 'use rates, not', divide: 'divide the cases', city: 'A city of', two: 'two hundred per', town: 'A town of', six: 'has six hundred'});
export const ScenePastRates: React.FC = () => {
	const f = useCurrentFrame();
	const outA = prog(f, K4.rates - 8, 16);
	const lvl2 = 0.1 + 0.75 * smooth(prog(f, K4.sep + 10, 50));
	const swapC = smooth(prog(f, K4.two, 24)), swapT = smooth(prog(f, K4.six, 24));
	const KC = 0.2, KR = 0.7, base = 880;
	const bars = [
		{x: 420, name: 'city', pop: '1,000,000 people', count: 2000, rate: 200, sw: swapC, at: K4.rates},
		{x: 780, name: 'town', pop: '50,000 people', count: 300, rate: 600, sw: swapT, at: K4.rates + 10},
	];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<FourBar fill={[1, 0, 0, 0]} />
				<g opacity={1 - outA}>
					<Tank x={200} y={430} w={280} h={360} at={0} level={0.14 + 0.02 * Math.sin(f / 9)} inO={1} outO={1} outW={1 + prog(f, K4.week, 20)} fast={prog(f, K4.week, 20)} />
					<CTag x={110} y={830} text="short illness: low prevalence of current infection" at={K4.week + 10} color={TEAL} size={28} maxW={540} dim={prog(f, K4.sep, 10)} />
					<Tank x={760} y={430} w={280} h={360} at={K4.sep} level={lvl2} inO={prog(f, K4.sep, 12)} noDrain fill="#c8b6e2" />
					<GTag x={700} y={830} text="prevalence of past infection (from antibodies)" at={K4.sep + 10} size={20} />
					<Grid100 x={1280} y={400} sp={34} r={11} at={K4.seven - 10} step={0.3} fill={i => prog(f, K4.seven + i * 0.6, 8) * (i < 69 ? 1 : 0)} fillC={() => '#8f73c4'} />
					<CTag x={1220} y={760} text="about 7 in 10 urban children, ages 1 to 18, had antibodies" at={K4.seven + 20} color={AMBER_INK} size={28} maxW={600} />
					<GTag x={1220} y={880} text="Prayitno et al., 2017; Indonesia, 2014" at={K4.seven + 34} size={18} />
					<GTag x={1220} y={922} text="seroprevalence: share with antibodies from past infection" at={K4.seven + 44} size={18} />
					<GTag x={1220} y={964} text="antibody levels fall, but stay detectable for years" at={K4.seven + 54} size={18} />
				</g>
				{bars.map((b, i) => {
					const o = prog(f, b.at, 14);
					if (o <= 0.01) return null;
					const h = lerp(b.count * KC, b.rate * KR, b.sw) * smooth(prog(f, b.at, 24));
					return (
						<g key={b.name} opacity={o}>
							<rect x={b.x} y={base - h} width={200} height={h} rx={8} fill={b.sw > 0.5 ? (i === 1 ? AMBER : '#e8c886') : '#c9c2b4'} />
							<Sx x={b.x + 100} y={base - h - 16} text={`${b.count.toLocaleString('en-AU')} cases`} size={30} color={INK} weight={700} anchor="middle" at={-100} opacity={1 - b.sw} />
							<Sx x={b.x + 100} y={base - h - 16} text={`${b.rate} per 100,000`} size={30} color={i === 1 ? AMBER_INK : INK} weight={800} anchor="middle" at={-100} opacity={b.sw} />
							<Sx x={b.x + 100} y={base + 38} text={b.name} size={30} color={INK} weight={700} anchor="middle" at={-100} />
							<Sx x={b.x + 100} y={base + 70} text={b.pop} size={22} color={GREY_INK} weight={600} anchor="middle" at={-100} />
						</g>
					);
				})}
				{f >= K4.rates ? <DrawPath d={`M360,${base} L1040,${base}`} at={K4.rates} dur={12} color={INK_SOFT} width={3} /> : null}
				<GTag x={360} y={990} text="each bar: one year" at={K4.rates + 20} size={20} />
				<GTag x={1100} y={330} text="cases ÷ population × 100,000" at={K4.divide} size={28} />
				<CTag x={1100} y={420} text="city: 2,000 ÷ 1,000,000 × 100,000 = 200 per 100,000 per year" at={K4.city + 10} color={AMBER_INK} size={28} maxW={720} dim={prog(f, K4.town, 10)} />
				<CTag x={1100} y={560} text="town: 300 ÷ 50,000 × 100,000 = 600 per 100,000 per year" at={K4.town + 10} color={AMBER_INK} size={28} maxW={720} />
				<CTag x={1100} y={720} text="the town has the higher risk" at={K4.six + 20} color={TEAL} size={36} />
				<GTag x={1100} y={820} text="denominator: the population" at={K4.six + 34} size={22} />
				{void PlateB}{void GREYT}{void FB}
			</Overlay>
		</>
	);
};
