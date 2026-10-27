// M7 B12 scenes 5 to 8: pesticides and biting times (larvicide and adult spray land on the wheel; a nerve line whose
// pulses freeze; night-biting Anopheles and the bed net against day-biting Aedes and indoor spraying), resistance and
// harm (three generations of survivors, the 1969 chip, the bee, a food chain whose dose dots concentrate, the aligned
// eggshell pair), sterile males (cage, release, eggs that don't hatch, the population falls and bounces back), and
// engineered males and gene drives (a chromosome with an inserted band; daughters lost before adulthood).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {WL} from './s1';
import {
	AMBER, AMBER_INK, CTag, DrawPath, EggRow, GREYT, GREY_INK, GTag, Homolog, INK, INK_SOFT, MistakeChip, Pl, PlateB, PopRow, Sx, TEAL, TickMark, Wheel, between, clamp01, fitW, lerp, prog,
	pulse, rng, smooth, vis, wPt, BITE,
} from './parts';

// ---------- 5. Pesticides, and who bites when ----------
const K5 = cues(S('pesticides'), {larvae: 'kill the larvae', adults: 'adults can be', nerves: 'attack insect nerves', habits: "the vector's habits", night: 'bite at night', nets: 'bed nets protect', day: 'bites by day', spray: 'spray the dark'});
const NerveLine: React.FC<{x: number; y: number; w: number; at: number; freeze: number; o?: number}> = ({x, y, w, at, freeze, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const t = Math.min(f, freeze);
	return (
		<g opacity={p}>
			<line x1={x} x2={x + w} y1={y} y2={y} stroke="#b9925a" strokeWidth={6} strokeLinecap="round" />
			{[0, 1, 2, 3].map(i => {
				const u = (((t - at) / 40 + i * 0.25) % 1 + 1) % 1;
				return <circle key={i} cx={x + u * w} cy={y} r={9} fill={f >= freeze ? AMBER : '#e8c55a'} stroke={AMBER_INK} strokeWidth={2} />;
			})}
		</g>
	);
};
export const ScenePesticides: React.FC = () => {
	const f = useCurrentFrame();
	const split = prog(f, K5.habits, 14);
	const st = wPt(WL, 0), ad = wPt(WL, 180);
	const r = rng(9);
	return (
		<>
			<Heading text="Pesticides, and who bites when" at={4} size={50} />
			<Overlay>
				<Wheel g={WL} flood={1} bite={{o: 1}} breaks={[{deg: 0, r: WL.R + 4, at: K5.larvae + 20}, {deg: 180, at: K5.adults + 16}, {deg: BITE, at: K5.nets + 16}]} labelSize={22} />
				{f >= K5.larvae ? Array.from({length: 5}, (_, i) => <circle key={i} cx={st[0] - 30 + i * 15} cy={lerp(st[1] - 120, st[1] - 10, clamp01((f - K5.larvae - i * 4) / 20))} r={6} fill="#9a8f80" opacity={1 - prog(f, K5.larvae + 40, 10)} />) : null}
				<CTag x={640} y={200} text="pesticide: a chemical that kills pests" at={K5.larvae - 30} color={AMBER_INK} size={28} dim={prog(f, K5.habits, 10)} out={K5.habits + 20} />
				<GTag x={st[0] + 90} y={st[1] - 30} text="larvicide" at={K5.larvae + 20} out={K5.habits} size={18} />
				<Pl p={PLATES.sprayer} cx={ad[0] + 10} cy={ad[1] - 150} w={fitW(PLATES.sprayer, 90, 110)} o={vis(f, K5.adults, K5.habits + 20, 12)} />
				<GTag x={ad[0] - 120} y={ad[1] - 230} text="adulticide" at={K5.adults + 16} out={K5.habits} size={18} />
				<NerveLine x={640} y={330} w={420} at={K5.nerves} freeze={K5.nerves + 50} o={1 - split} />
				<GTag x={1080} y={318} text="DDT, pyrethroids: insect nerves keep firing" at={K5.nerves + 20} out={K5.habits} size={20} />
				<g opacity={split}>
					<line x1={1240} x2={1240} y1={420} y2={1030} stroke={GREYT} strokeWidth={2} strokeDasharray="8 8" />
					<Pl p={PLATES.anoph} cx={800} cy={490} w={190} />
					<Sx x={680} y={620} text="Anopheles: bites mostly at night" size={30} color={INK} hand weight={700} at={K5.night - 10} />
					<GTag x={680} y={636} text="malaria: Plasmodium" at={K5.night} size={18} />
					<CTag x={1010} y={450} text="night" at={K5.night + 6} color={INK_SOFT} size={26} />
					<Pl p={PLATES.aedes} cx={1420} cy={490} w={220} />
					<Sx x={1290} y={620} text="Aedes: bites by day" size={30} color={INK} hand weight={700} at={K5.day - 10} />
					<GTag x={1290} y={636} text="dengue: a virus" at={K5.day} size={18} />
					<CTag x={1640} y={450} text="day" at={K5.day + 6} color={AMBER_INK} size={26} />
				</g>
				<Pl p={PLATES.bednet} cx={860} cy={850} w={fitW(PLATES.bednet, 260, 260)} o={prog(f, K5.nets, 14)} dim={prog(f, K5.day, 10) * 0.5} />
				<CTag x={680} y={1000} text="treated net: night bites blocked" at={K5.nets + 20} color={AMBER_INK} size={24} dim={prog(f, K5.spray, 10)} />
				{f >= K5.spray - 10 ? (
					<g opacity={prog(f, K5.spray - 10, 14)}>
						<path d="M1300,980 L1300,720 L1560,720 M1300,980 L1780,980" fill="none" stroke={INK_SOFT} strokeWidth={4} />
						<rect x={1360} y={920} width={160} height={60} fill="#cfc8b8" opacity={0.6} />
						<rect x={1600} y={940} width={120} height={40} fill="#cfc8b8" opacity={0.6} />
						{Array.from({length: 26}, (_, i) => <circle key={i} cx={1360 + r() * 360} cy={900 + r() * 80} r={4} fill="#9aa9b0" opacity={prog(f, K5.spray + 10 + i, 6) * 0.8} />)}
					</g>
				) : null}
				<CTag x={1290} y={680} text="indoor spraying where Aedes rests" at={K5.spray + 20} color={AMBER_INK} size={24} />
				<GTag x={1290} y={1000} text="dengue outbreaks; indoor spraying is used against Anopheles too" at={K5.spray + 34} size={16} />
				{void TEAL}{void pulse}{void between}{void PlateB}
			</Overlay>
		</>
	);
};

// ---------- 6. Resistance, and what else sprays hit ----------
const K6 = cues(S('resistance-harm'), {select: 'insecticides select resistance', already: 'already carry resistance', each: 'each generation holds', y1969: 'in 1969', wide: 'now widespread', other: 'kill other insects', builds: 'builds up along', thin: 'thinning the eggshells'});
const GEN = [2, 6, 15];
const SURV = [[3, 14], [1, 3, 7, 11, 14, 17], [0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 19]];
const CHAIN = ['water insects', 'small fish', 'larger fish', 'bird of prey'];
export const SceneResistanceHarm: React.FC = () => {
	const f = useCurrentFrame();
	const chainO = prog(f, K6.builds, 14);
	const thin = prog(f, K6.thin + 10, 24);
	const r = rng(3);
	const dots = CHAIN.map((_, i) => Array.from({length: [3, 7, 14, 26][i]}, () => [r(), r()] as [number, number]));
	return (
		<>
			<Heading text="Resistance, and what else sprays hit" at={4} size={50} />
			<Overlay>
				<g opacity={1 - 0.6 * chainO}>
					{GEN.map((_, g) => {
						const at = K6.already + g * 40;
						return (
							<g key={g} opacity={prog(f, at, 12)}>
								<Sx x={120} y={290 + g * 110} text={`generation ${g + 1}`} size={24} color={GREY_INK} weight={600} at={-100} />
								<PopRow x={330} y={280 + g * 110} n={20} dx={44} w={40} alive={i => (SURV[g].includes(i) ? 1 : 1 - prog(f, at + 20, 14))} ring={i => (SURV[g].includes(i) ? prog(f, at + 20, 10) : 0)} />
							</g>
						);
					})}
					<CTag x={1230} y={240} text="each generation: more survive" at={K6.each + 10} color={AMBER_INK} size={26} dim={prog(f, K6.y1969, 10)} />
					<GTag x={1230} y={310} text="b11: the drug selects resistance" at={K6.each + 20} size={18} />
				</g>
				<CTag x={1230} y={380} text="1969: global malaria eradication goal abandoned; resistance one reason" at={K6.y1969 + 6} color={AMBER_INK} size={22} maxW={540} dim={prog(f, K6.wide, 10)} />
				<GTag x={1230} y={480} text="today: pyrethroid resistance widespread in Anopheles" at={K6.wide + 6} size={18} />
				<Pl p={PLATES.bee} cx={1400} cy={600} w={150} o={prog(f, K6.other, 12)} dim={0.3} />
				<TickMark x={1490} y={570} at={K6.other + 14} ok={false} s={18} />
				<GTag x={1500} y={590} text="other insects killed too" at={K6.other + 20} size={20} />
				{CHAIN.map((c, i) => {
					const x = 140 + i * 260, y = 760;
					const o = prog(f, K6.builds + i * 10, 12);
					return (
						<g key={c} opacity={o}>
							<rect x={x} y={y} width={210} height={90} rx={16} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} />
							{dots[i].map((d, k) => <circle key={k} cx={x + 14 + d[0] * 182} cy={y + 12 + d[1] * 40} r={4} fill={AMBER_INK} />)}
							<Sx x={x + 105} y={y + 80} text={c} size={22} color={INK} hand weight={700} anchor="middle" at={-100} />
							{i < 3 ? <path d={`M${x + 214},${y + 45} l36,0 m-10,-8 l10,8 l-10,8`} fill="none" stroke={INK_SOFT} strokeWidth={3} /> : null}
						</g>
					);
				})}
				<GTag x={140} y={880} text="bioaccumulation: stored in fat, not broken down, so it concentrates up the chain" at={K6.builds + 40} size={18} />
				<PlateB p={PLATES.eggN} cx={1520} cy={840} w={300} o={prog(f, K6.thin - 6, 12) * (1 - thin)} />
				<PlateB p={PLATES.eggT} cx={1520} cy={840} w={300} o={prog(f, K6.thin - 6, 12) * thin} />
				<CTag x={1380} y={980} text="thin, cracked shell" at={K6.thin + 30} color={AMBER_INK} size={24} />
				<GTag x={1380} y={700} text="falcon egg, not to scale" at={K6.thin} size={16} />
				{void K6.select}{void MistakeChip}{void TEAL}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 7. Sterile males ----------
const K7 = cues(S('sterile-males'), {huge: 'huge numbers of', steril: 'sterilised with radiation', released: 'and released', hatch: "eggs that don't", bite: "don't bite", species: 'own species', cont: 'releases must continue'});
/** Tiny mosquitoes streaming from a to b between at and stop. */
const Stream: React.FC<{a: [number, number]; b: [number, number]; at: number; stop: number; n?: number}> = ({a, b, at, stop, n = 8}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const t0 = at + i * 9;
				const u = ((f - t0) / 60) % 1;
				if (f < t0) return null;
				const born = Math.floor((f - t0) / 60) * 60 + t0;
				if (born > stop) return null;
				return <PlateB key={i} p={PLATES.aedes} cx={lerp(a[0], b[0], u)} cy={lerp(a[1], b[1], u) + Math.sin(u * 7 + i) * 18} w={38} o={Math.min(1, u * 6, (1 - u) * 6)} filter="grayscale(0.6)" />;
			})}
		</g>
	);
};
export const PopUnder: React.FC<{alive: (i: number) => number; teal?: (i: number) => number; o?: number}> = ({alive, teal, o = 1}) => <PopRow x={170} y={960} n={10} dx={52} w={46} alive={alive} teal={teal} o={o} />;
export const SceneSterile: React.FC = () => {
	const f = useCurrentFrame();
	const eggs = wPt(WL, -90);
	const steps = (t: number) => Math.floor(clamp01((f - t) / 90) * 3 + 0.0001);
	const fall = f < K7.hatch + 20 ? 0 : steps(K7.hatch + 20);
	const back = f < K7.cont + 10 ? 0 : steps(K7.cont + 10);
	const n = 10 - 3 * fall + 3 * back;
	return (
		<>
			<Heading text="Sterile males" at={4} size={50} />
			<Overlay>
				<Wheel g={WL} flood={1} breaks={[{deg: -90, r: WL.R, at: K7.hatch + 10}]} labelSize={22} />
				<Pl p={PLATES.cage} cx={1500} cy={360} w={fitW(PLATES.cage, 300, 300)} o={prog(f, K7.huge, 14)} />
				<CTag x={1660} y={520} text="reared males" at={K7.huge + 14} color={AMBER_INK} size={24} dim={prog(f, K7.steril, 10)} />
				<CTag x={1300} y={570} text="sterilised with radiation: sterile males" at={K7.steril + 10} color={INK_SOFT} size={24} dim={prog(f, K7.hatch, 10)} />
				<Stream a={[1380, 380]} b={[eggs[0] + 80, eggs[1]]} at={K7.released} stop={K7.cont} />
				<EggRow x={740} y={520} n={10} dx={46} hatch={i => (i === 3 || i === 7 ? prog(f, K7.hatch + 20, 12) : 0)} o={prog(f, K7.hatch, 12)} />
				<CTag x={740} y={600} text="most eggs don't hatch" at={K7.hatch + 30} color={AMBER_INK} size={24} dim={prog(f, K7.bite, 10)} />
				<PopUnder alive={i => (i < n ? 1 : 0)} />
				<GTag x={110} y={1000} text="fewer each generation" at={K7.hatch + 40} out={K7.cont} size={18} />
				<GTag x={740} y={700} text="males don't bite" at={K7.bite + 4} size={20} />
				<GTag x={740} y={760} text="species-specific" at={K7.species + 4} size={20} />
				<CTag x={740} y={840} text="stop releasing: it bounces back" at={K7.cont + 20} color={AMBER_INK} size={26} />
				{void TEAL}{void DrawPath}
			</Overlay>
		</>
	);
};

// ---------- 8. Engineered males, and gene drives ----------
const K8 = cues(S('engineered-males'), {ge: 'Genetic engineering does', kills: 'kills their female', again: 'Again, releases', drives: 'gene drives', hard: 'hard to reverse', none: 'none has been'});
export const SceneEngineered: React.FC = () => {
	const f = useCurrentFrame();
	const dieF = prog(f, K8.kills + 30, 20);
	const sex = ['M', 'F', 'M', 'F', 'F', 'M', 'F', 'M'];
	return (
		<>
			<Heading text="Engineered males, and gene drives" at={4} size={50} />
			<Overlay>
				<Wheel g={WL} flood={1} breaks={[{deg: -90, at: -100, color: GREYT}, {deg: between(2), at: K8.kills + 20}]} labelSize={22} />
				<Homolog x={760} y={360} h={220} w={40} band={prog(f, K8.ge + 20, 12)} o={prog(f, K8.ge, 14)} />
				<Homolog x={830} y={360} h={220} w={40} site={0} o={prog(f, K8.ge, 14)} />
				<Pl p={PLATES.aedes} cx={1080} cy={360} w={240} o={prog(f, K8.ge + 6, 14)} />
				<CTag x={1260} y={260} text="an inserted gene" at={K8.ge + 26} color={AMBER_INK} size={26} dim={prog(f, K8.kills, 10)} />
				<GTag x={1260} y={330} text="Module 6: recombinant DNA" at={K8.ge + 36} size={18} />
				<PopRow x={740} y={640} n={8} dx={70} w={56} alive={i => (sex[i] === 'F' ? 1 - dieF : 1)} o={prog(f, K8.kills, 14)} />
				{sex.map((s, i) => <Sx key={i} x={740 + i * 70} y={700} text={s === 'F' ? 'female' : 'male'} size={16} color={s === 'F' ? AMBER_INK : GREY_INK} weight={700} anchor="middle" at={K8.kills + 10} />)}
				<CTag x={1300} y={600} text="daughters die before adulthood" at={K8.kills + 40} color={AMBER_INK} size={24} maxW={520} dim={prog(f, K8.drives, 10)} />
				<GTag x={1300} y={680} text="self-limiting males" at={K8.kills + 50} size={18} />
				<GTag x={740} y={760} text="repeat releases" at={K8.again + 6} size={22} />
				{f >= K8.drives ? (
					<g opacity={prog(f, K8.drives, 14)}>
						<rect x={700} y={840} width={720} height={130} rx={18} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} />
						<Sx x={720} y={872} text="gene drive: offspring carrying it" size={20} color={GREY_INK} weight={600} at={-100} />
						{Array.from({length: 16}, (_, i) => <rect key={i} x={720 + i * 42} y={900} width={30} height={46} rx={6} fill={i === 9 ? '#fffdf8' : AMBER} stroke={i === 9 ? GREYT : AMBER_INK} strokeWidth={2} opacity={prog(f, K8.drives + 10 + i * 3, 8)} />)}
					</g>
				) : null}
				<GTag x={1440} y={860} text="Module 6: gene drive" at={K8.drives + 10} size={18} />
				<GTag x={1440} y={910} text="spreads by itself; hard to recall" at={K8.hard + 4} size={18} />
				<GTag x={1440} y={960} text="no wild release (checked October 2026)" at={K8.none + 6} size={18} />
				{void INK}{void TEAL}{void pulse}{void vis}{void MistakeChip}{void smooth}
			</Overlay>
		</>
	);
};
