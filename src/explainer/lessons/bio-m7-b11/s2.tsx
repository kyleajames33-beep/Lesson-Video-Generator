// M7 B11 scenes 6 to 11: stopping new viruses, not old ones (released viruses stay untouched; a flu day strip with
// small airway-cell fields; narrow range; chip stacks), resistance (bio-m6-b01's population board, then the conjugation
// plate), three drugs at once (blocks on the step strip; a variant passes one, then is stopped by the third), using
// drugs well (four rule chips), the assess table with the dated burden chip, and the two memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {DayStrip} from '../bio-m6-b01/parts';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {HEAD, Released, SG, ZC} from './s1';
import {
	AMBER, AMBER_INK, Bact, CARD, CTag, ChipStack, CritTable, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, MistakeChip, Pl, PlateB, StepBlock, StepStrip, Sx, TEAL, TickMark, WText,
	clamp01, fitW, lerp, popGrid, pp, prog, pulse, smooth, vis, wOfH,
} from './parts';
import type {Pt, StepG} from './parts';

// ---------- 6. Stopping new viruses, not old ones ----------
const K6 = cues(S('stop-new-viruses'), {dont: "don't destroy virus", stop: 'They stop new', early: 'helps most early', narrow: 'Most antivirals are', several: 'several virus families', fewer: 'far fewer antivirals'});
const FDAY = {x0: 1330, x1: 1830, y: 680};
const fdx = (d: number) => lerp(FDAY.x0, FDAY.x1, d / 7);
/** A small field of airway cells, `inf` of them infected. */
const CellField: React.FC<{x: number; y: number; n: number; cols: number; inf: number; o: number}> = ({x, y, n, cols, inf, o}) => (o <= 0.01 ? null : (
	<g opacity={o}>{Array.from({length: n}, (_, i) => <PlateB key={i} p={i < inf ? PLATES.infected : PLATES.cell} cx={x + (i % cols) * 22} cy={y + Math.floor(i / cols) * 52} w={wOfH(PLATES.cell, 46)} />)}</g>
));
export const SceneStopNew: React.FC = () => {
	const f = useCurrentFrame();
	const aw = wOfH(PLATES.cell, ZC.h);
	const top = pp(PLATES.cell, ZC.cx, ZC.cy, aw, FEAT.airTop);
	return (
		<>
			<Heading text="Stopping new viruses, not old ones" at={4} size={50} />
			<Overlay>
				<PlateB p={PLATES.blocked} cx={ZC.cx} cy={ZC.cy} w={aw} />
				<Released from={top} at={-400} n={4} />
				<StepStrip g={SG} at={-100} lit={[0, 0, 0, 1]} />
				<StepBlock g={SG} i={3} at={-100} label="oseltamivir" />
				<StepBlock g={SG} i={1} at={-100} label="aciclovir" o={0.5} />
				<StepBlock g={SG} i={0} at={-100} label="entry blocker" o={0.5} />
				<CTag x={640} y={200} text="existing viruses untouched" at={K6.dont + 10} color={TEAL} size={26} dim={prog(f, K6.early, 10)} />
				<Pl p={PLATES.macrophage} cx={720} cy={380} w={110} o={prog(f, K6.dont + 24, 12)} dim={0.6} />
				<GTag x={790} y={370} text="your immune system clears these" at={K6.dont + 30} size={18} />
				<MistakeChip x={1120} y={200} text="antivirals kill viruses like antibiotics kill bacteria" at={K6.stop} cross={K6.stop + 40} size={20} />
				{f >= K6.early ? (
					<g opacity={prog(f, K6.early, 12)}>
						<line x1={FDAY.x0} x2={FDAY.x1} y1={FDAY.y} y2={FDAY.y} stroke={GREY_INK} strokeWidth={3} />
						{Array.from({length: 8}, (_, d) => <g key={d}><line x1={fdx(d)} x2={fdx(d)} y1={FDAY.y} y2={FDAY.y + 8} stroke={GREY_INK} strokeWidth={3} /><Sx x={fdx(d)} y={FDAY.y + 28} text={`${d}`} size={18} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>)}
						<Sx x={FDAY.x1} y={FDAY.y + 52} text="days after first symptoms" size={18} color={GREY_INK} weight={600} anchor="end" at={-100} />
						<DrawPath d={`M${fdx(0)},${FDAY.y - 12} L${fdx(0)},${FDAY.y - 22} L${fdx(2)},${FDAY.y - 22} L${fdx(2)},${FDAY.y - 12}`} at={K6.early + 6} dur={12} color={TEAL} width={4} />
						<GTag x={FDAY.x0} y={FDAY.y - 300} text="flu example" at={K6.early} size={18} />
					</g>
				) : null}
				<CellField x={fdx(1) - 10} y={FDAY.y - 90} n={4} cols={2} inf={1} o={prog(f, K6.early + 10, 12)} />
				<CellField x={fdx(4) - 10} y={FDAY.y - 190} n={20} cols={5} inf={16} o={prog(f, K6.early + 30, 12)} />
				<CTag x={1330} y={740} text="later: millions of cells infected" at={K6.early + 40} color={TEAL} size={22} dim={prog(f, K6.narrow, 10)} />
				<CTag x={1330} y={800} text="oseltamivir: flu only" at={K6.narrow + 4} color={TEAL} size={24} dim={prog(f, K6.fewer, 10)} />
				<GTag x={1330} y={860} text="a few act more widely; evidence needed for each disease" at={K6.several} size={16} />
				<ChipStack x={1340} y={1020} n={7} color={AMBER} at={K6.fewer + 6} />
				<ChipStack x={1480} y={1020} n={2} color={TEAL} at={K6.fewer + 14} />
				<GTag x={1600} y={990} text="rough comparison, not to scale" at={K6.fewer + 24} size={16} />
				<Sx x={1385} y={1062} text="antibiotics" size={18} color={AMBER_INK} hand weight={700} anchor="middle" at={K6.fewer + 6} />
				<Sx x={1525} y={1062} text="antivirals" size={18} color={TEAL} hand weight={700} anchor="middle" at={K6.fewer + 14} />
			</Overlay>
		</>
	);
};

// ---------- 7. Resistance: selected, then shared ----------
const K7 = cues(S('resistance'), {both: 'Both kinds of', stops: 'stops the microbes', survive: 'survive and multiply', selects: 'drug selects resistance', pass: 'pass resistance genes', plasmids: 'on plasmids', species: 'different species', never: 'never the person'});
const POP = popGrid(48, 8, 150, 260, 96, 76, 5);
const RINGED = [12, 37];
export const PopBoard: React.FC<{fade: number; fill: number; s?: number; ox?: number; oy?: number; o?: number}> = ({fade, fill, s = 1, ox = 0, oy = 0, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${ox},${oy}) scale(${s})`}>
		{POP.map((p, i) => {
			const ringed = RINGED.includes(i);
			const late = clamp01(fill * 1.4 - (i % 11) * 0.04);
			if (ringed) return <Bact key={i} cx={p[0]} cy={p[1]} w={74} ring="new" />;
			return (
				<g key={i}>
					<Bact cx={p[0]} cy={p[1] + fade * 30} w={74} o={1 - fade} grey={fade} />
					{late > 0.01 ? <Bact cx={p[0]} cy={p[1]} w={74} ring="new" o={late} /> : null}
				</g>
			);
		})}
	</g>
));
export const SceneResistance: React.FC = () => {
	const f = useCurrentFrame();
	const fade = prog(f, K7.stops, 24);
	const fill = prog(f, K7.survive + 10, 50);
	const day = f < K7.stops ? 0 : f < K7.survive ? 1 : lerp(2, 3, prog(f, K7.survive + 20, 30));
	const cw = 560;
	const plas = pp(PLATES.conj, 1440, 470, cw, FEAT.plasmidBridge);
	return (
		<>
			<Heading text="Resistance: selected, then shared" at={4} size={50} />
			<Overlay>
				<PopBoard fade={fade} fill={fill} o={prog(f, 0, 14) * (1 - 0.4 * prog(f, K7.pass, 14))} />
				<DayStrip x={150} y={720} w={680} labels={['day 0', 'day 1', 'day 2', 'day 3']} active={day} o={prog(f, 0, 14)} size={24} />
				<GTag x={150} y={800} text="Module 6: mutation" at={6} size={18} />
				<CTag x={150} y={860} text="resistant ones multiply" at={K7.survive + 20} color={AMBER_INK} size={26} dim={prog(f, K7.selects, 10)} />
				<Sx x={150} y={990} text="selects, doesn't create" size={40} color={AMBER_INK} hand weight={700} at={K7.selects + 4} />
				<GTag x={560} y={970} text="Module 6" at={K7.selects + 14} size={18} />
				<Pl p={PLATES.conj} cx={lerp(1800, 1440, smooth(prog(f, K7.pass, 22)))} cy={470} w={cw} o={prog(f, K7.pass, 14)} />
				{pulse(f, K7.plasmids + 4, 40) > 0.01 ? <circle cx={plas[0]} cy={plas[1]} r={36} fill={TEAL} opacity={0.3 * pulse(f, K7.plasmids + 4, 40)} /> : null}
				<CTag x={1200} y={250} text="plasmid: small loop of DNA" at={K7.plasmids + 6} color={TEAL} size={26} dim={prog(f, K7.never, 10)} />
				<GTag x={1600} y={260} text="horizontal gene transfer" at={K7.plasmids + 16} size={16} />
				<GTag x={1260} y={580} text="species A" at={K7.species + 6} size={20} anchor="middle" />
				<GTag x={1620} y={580} text="species B" at={K7.species + 12} size={20} anchor="middle" />
				<MistakeChip x={1160} y={700} text="my body is resistant" at={K7.never - 10} cross={K7.never + 10} size={28} />
				<GTag x={1160} y={770} text="the bacteria are" at={K7.never + 20} size={22} />
				<WText x={1160} y={900} text="how resistance works: an enzyme breaks the drug, the target changes shape, a pump pushes the drug out" size={20} maxW={700} color={GREY_INK} at={K7.never + 30} />
				{void K7.both}
			</Overlay>
		</>
	);
};

// ---------- 8. Three drugs at once ----------
const K8 = cues(S('combination'), {billions: 'billions of times', errors: 'frequent copying errors', one: 'one drug at', combined: 'combined three drugs', all: 'all three at', unlikely: 'very unlikely'});
const SG8: StepG = {x: 300, y: 620, w: 1320};
const sbx = (i: number) => SG8.x + (i + 0.5) * (SG8.w / 4);
export const SceneCombination: React.FC = () => {
	const f = useCurrentFrame();
	const reset = prog(f, K8.combined - 6, 10);
	const v1 = f < K8.one + 30 ? -1 : clamp01((f - K8.one - 30) / 60);
	const v2 = f < K8.all ? -1 : clamp01((f - K8.all) / 70);
	const vx = (u: number, stopAt?: number) => lerp(SG8.x - 60, stopAt ?? SG8.x + SG8.w + 60, u);
	const vy = SG8.y + 130;
	return (
		<>
			<Heading text="Three drugs at once" at={4} size={50} />
			<Overlay>
				<Pl p={PLATES.virus} cx={960} cy={320} w={190} o={prog(f, 0, 14)} />
				<GTag x={1070} y={260} text="stands for HIV" at={6} size={20} />
				<CTag x={1300} y={380} text="new copies a day: billions" at={K8.billions + 6} color={INK} size={26} dim={prog(f, K8.one, 10)} />
				{[[-150, 40], [150, 60], [-120, -60], [130, -80]].map(([dx, dy], i) => <g key={i} opacity={vis(f, K8.errors + i * 6, K8.one, 10)}><circle cx={960 + dx} cy={320 + dy} r={30} fill={AMBER} opacity={0.3} /><Pl p={PLATES.virus} cx={960 + dx} cy={320 + dy} w={44} /></g>)}
				<GTag x={1300} y={460} text="variants" at={K8.errors + 16} out={K8.one} size={20} />
				<StepStrip g={SG8} at={4} lit={[0, 1, reset, 0]} />
				<StepBlock g={SG8} i={1} at={K8.one + 6} label="drug 1" o={1 - reset} />
				{v1 >= 0 ? (
					<g opacity={1 - reset}>
						<g opacity={clamp01(1.4 - v1 * 1.2) > 0 ? 1 : 1}><circle cx={vx(v1)} cy={vy} r={30} fill={AMBER} opacity={0.3} /><Pl p={PLATES.virus} cx={vx(v1)} cy={vy} w={44} /></g>
						{v1 > 0.5 ? <TickMark x={sbx(1)} y={vy - 50} at={K8.one + 60} ok s={16} /> : null}
						{v1 >= 1 ? [1, 2, 3].map(k => <Pl key={k} p={PLATES.virus} cx={vx(1) - k * 50} cy={vy + 60} w={38} />) : null}
					</g>
				) : null}
				<CTag x={300} y={880} text="one drug: resistance selected" at={K8.one + 80} color={AMBER_INK} size={26} out={K8.combined - 6} />
				<StepBlock g={SG8} i={1} at={K8.combined + 4} label="drug A" />
				<StepBlock g={SG8} i={1} k={1} at={K8.combined + 14} label="drug B" />
				<StepBlock g={SG8} i={2} at={K8.combined + 24} label="drug C" />
				<GTag x={300} y={880} text="from 1996: two copy blockers + one build blocker" at={K8.combined + 30} size={22} />
				{v2 >= 0 ? (
					<g>
						<circle cx={vx(v2, sbx(2) - 30)} cy={vy} r={30} fill={AMBER} opacity={0.3} /><Pl p={PLATES.virus} cx={vx(v2, sbx(2) - 30)} cy={vy} w={44} />
						{v2 > 0.45 ? <TickMark x={sbx(1) - 24} y={vy - 50} at={K8.all + 30} ok s={16} /> : null}
						{v2 > 0.55 ? <TickMark x={sbx(1) + 24} y={vy - 50} at={K8.all + 38} ok s={16} /> : null}
						{v2 >= 1 ? <TickMark x={sbx(2)} y={vy - 50} at={K8.all + 70} ok={false} s={20} /> : null}
					</g>
				) : null}
				<Sx x={300} y={990} text="all three at once: very unlikely" size={36} color={GREY_INK} hand weight={700} at={K8.unlikely} />
				<GTag x={1300} y={970} text="controlled, not cured" at={K8.unlikely + 30} size={22} />
				{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- 9. Using drugs well ----------
const K9 = cues(S('use-well'), {start: 'resistance spreads fastest', viral: 'for viral infections', farm: 'healthy farm animals', exactly: 'exactly as prescribed', reserve: 'in reserve'});
const RULES: {text: string; at: (k: typeof K9) => number; p?: typeof PLATES.virus}[] = [
	{text: 'not for viral infections', at: k => k.viral, p: PLATES.virus},
	{text: 'not routinely for healthy farm animals', at: k => k.farm},
	{text: 'exactly as prescribed; no sharing leftovers', at: k => k.exactly, p: PLATES.blister},
	{text: 'reserve antibiotics for when nothing else works', at: k => k.reserve},
];
export const SceneUseWell: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Using drugs well" at={4} size={50} />
			<Overlay>
				<Sx x={120} y={250} text="Resistance spreads fastest where drugs are used the most." size={40} color={AMBER_INK} hand weight={700} at={K9.start} />
				{RULES.map((r, i) => {
					const at = r.at(K9);
					const o = prog(f, at, 14);
					if (o <= 0.01) return null;
					const next = RULES[i + 1] ? RULES[i + 1].at(K9) : 1e9;
					const on = vis(f, at, next, 10) > 0.5;
					const y = 320 + i * 170;
					return (
						<g key={i} opacity={o * (on ? 1 : 0.6)} transform={`translate(${(1 - o) * 20},0)`}>
							<rect x={120} y={y} width={1300} height={130} rx={28} fill={on ? '#fff3d9' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 4 : 2.5} />
							{r.p ? <Pl p={r.p} cx={220} cy={y + 65} w={fitW(r.p, 140, 100)} dim={on ? 0 : 0.6} /> : null}
							{i === 0 ? <TickMark x={290} y={y + 40} at={at + 10} ok={false} s={16} /> : null}
							<Sx x={330} y={y + 80} text={r.text} size={42} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
						</g>
					);
				})}
				<GTag x={1460} y={850} text="stewardship: using antibiotics only when needed" at={K9.reserve + 16} size={18} />
				{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 10. How effective are they? ----------
const K10 = cues(S('assess'), {judge: 'Judge them on', safely: 'how safely they', many: 'how many infections', long: 'how long they', lack: 'parts our cells', fits: 'fits the flu', cure: 'cure most bacterial', narrower: 'Antivirals are narrower', every: 'every use selects', y2021: 'In 2021', right: 'the right pathogen'});
export const SceneAssess: React.FC = () => {
	const f = useCurrentFrame();
	const rAt = [K10.lack, K10.cure, K10.every];
	const rows = [
		{label: 'how safely?', cells: ['wall: we have none; ribosomes: ours differ', 'oseltamivir: fits flu neuraminidase, not ours'], at: K10.lack, cellAt: [K10.lack + 8, K10.fits + 6]},
		{label: 'how many infections?', cells: ['most bacterial infections', 'mostly narrow; HIV: controlled for decades'], at: K10.cure, cellAt: [K10.cure + 6, K10.narrower + 6]},
		{label: 'how long do they keep working?', cells: ['every use selects resistance: lasts only with careful use', 'combinations slow resistance (HIV)'], at: K10.every, cellAt: [K10.every + 8, K10.every + 30]},
	];
	const verdict = prog(f, K10.right, 12);
	return (
		<>
			<Heading text="How effective are they?" at={4} size={50} />
			<Overlay>
				<CritTable g={{x: 100, y: 200, rhw: 420, cw: 650, hh: 70, rh: 150, gap: 10, size: 32}} heads={['antibiotics', 'antivirals']} headAt={[K10.judge, K10.judge + 10]} headColors={[AMBER_INK, TEAL]}
					rows={rows} lit={i => Math.max(vis(f, rAt[i], rAt[i + 1] ?? K10.right, 10), verdict)} cellSize={30} />
				{[K10.safely, K10.many, K10.long].map((t, i) => <circle key={i} cx={90} cy={200 + 80 + i * 160 + 75} r={8} fill={AMBER} opacity={vis(f, t, t + 30, 8)} />)}
				<CTag x={100} y={800} text="2021: about 1.14 million deaths directly caused by resistant bacteria" at={K10.y2021 + 6} color={AMBER_INK} size={28} maxW={1100} dim={prog(f, K10.right, 10)} />
				<GTag x={100} y={870} text="GRAM study, Lancet 2024" at={K10.y2021 + 16} size={18} />
				<GTag x={420} y={870} text="size of the problem in one year" at={K10.y2021 + 22} size={18} />
				<CTag x={960} y={950} text="effective on the right pathogen, used carefully" at={K10.right + 4} color={AMBER_INK} size={36} anchor="middle" maxW={1400} />
				<Pl p={PLATES.bac} cx={1420} cy={850} w={220} o={prog(f, K10.lack + 10, 12) * (1 - verdict)} dim={0.3} />
				<PlateB p={PLATES.blocked} cx={1700} cy={850} w={wOfH(PLATES.blocked, 160)} o={prog(f, K10.fits + 10, 12) * (1 - verdict)} />
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {two: 'Two ideas', anti: 'Antivirals block a', drug: 'the drug selects'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const g: StepG = {x: 560, y: 470, w: 800, h: 48};
	return (
		<>
			<Heading text="Two ideas to keep" at={4} size={50} />
			<Overlay>
				<Sx x={960} y={300} text="Antivirals block a step the virus needs." size={60} color={TEAL} hand weight={700} anchor="middle" at={K11.anti} />
				<StepStrip g={g} at={K11.anti + 10} size={24} />
				{[0, 1, 3].map((i, k) => <StepBlock key={i} g={g} i={i} at={K11.anti + 20 + k * 8} label="drug" />)}
				<Sx x={960} y={680} text="The drug selects resistance; it doesn't create it." size={56} color={AMBER_INK} hand weight={700} anchor="middle" at={K11.drug} />
				<PopBoard fade={1} fill={prog(f, K11.drug + 10, 40)} s={0.6} ox={640} oy={560} o={prog(f, K11.drug + 4, 14)} />
				{void K11.two}{void GREY_INK}
			</Overlay>
		</>
	);
};
