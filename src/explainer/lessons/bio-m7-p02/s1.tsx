// M7 P02 (Biology practical) scenes 1 to 5: the hook (three sealed plates: tap 3, creek 214, tank 0, and the two
// claims that take a cross); why test (clean-looking water, culture on agar, E. coli as the indicator, the guideline
// line, an accredited lab against a school count); aim and variables (the variables card, the CFU glyphs); sampling
// and aseptic technique (sampling pole and bottles, the food line, sterile pipette and spreader, the Bunsen's rising
// air, a lid lifted a little before plating while dust drifts past); serial dilution (the lawn, the rack, 1 mL drops
// tube to tube, the 10^-1 to 10^-4 labels and the x10 arrows).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {CurveArrow} from '../bio-m6-b01/parts';
import {S} from './common';
import {
	AMBER_INK, Bench, CTag, CrossChip, Dish, DrawPath, Drift, Drop, FEAT, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, MovingDrop, PLATES, PenLink, Pl, PlateB, RZ, Rail,
	QUESTION, RowBox, SrcCount, Sx, TERRA, VChip, VIOLET, WText, crossChipW, fitW, lerp, prog, ptOf, smooth, vis,
} from './parts';

const PW = 290;
export const HOOKX = [330, 660, 990];
const HOOK_Y = 690;

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {tap: 'tap water plate', three: 'three colonies', creek: 'creek water plate', c214: 'two hundred and fourteen', tank: 'rainwater tank plate', none: 'none', safe: 'tank water safe', disease: 'full of disease', neither: 'Neither follows', find: "Let's find out"});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const BW = 400, bcx = 660, bcy = 390;
	const bx = FEAT.bottleX.map(u => ptOf(PLATES.bottles, bcx, bcy, BW, [u, FEAT.bottleLabelY]));
	const c1 = '0 colonies = safe?', c2 = '214 = disease?';
	return (
		<>
			<Heading text={QUESTION} at={K1.find - 6} size={54} />
			<Overlay>
				<Bench o={prog(f, 0, 16)} />
				<Pl p={PLATES.bottles} cx={bcx} cy={bcy} w={BW} o={prog(f, 4, 16)} />
				{['tap', 'creek', 'tank'].map((s, i) => <VChip key={s} x={bx[i][0]} y={bx[i][1]} text={s} at={[K1.tap, K1.creek, K1.tank][i] - 4} />)}
				<Dish p={PLATES.few} cx={HOOKX[0]} cy={HOOK_Y} w={PW} o={prog(f, K1.tap, 14)} />
				<Dish p={PLATES.creek} cx={HOOKX[1]} cy={HOOK_Y} w={PW} o={prog(f, K1.creek, 14)} />
				<Dish p={PLATES.clear} cx={HOOKX[2]} cy={HOOK_Y} w={PW} o={prog(f, K1.tank, 14)} />
				<SrcCount x={HOOKX[0]} y={HOOK_Y + 210} src="tap" count="3" at={K1.tap + 6} countAt={K1.three} />
				<SrcCount x={HOOKX[1]} y={HOOK_Y + 210} src="creek" count="214" at={K1.creek + 6} countAt={K1.c214} />
				<SrcCount x={HOOKX[2]} y={HOOK_Y + 210} src="tank" count="0" at={K1.tank + 6} countAt={K1.none} />
				<GTag x={1850} y={1018} text="site warm-up data, 48 h on nutrient agar" at={20} size={22} anchor="end" />
				<CrossChip x={RZ.x} y={500} text={c1} at={K1.safe} cross={K1.neither + 4} size={34} />
				<CrossChip x={RZ.x} y={600} text={c2} at={K1.disease} cross={K1.neither + 14} size={34} />
				<PenLink a={[RZ.x - 6, 528]} b={[HOOKX[2] + 120, HOOK_Y - 60]} at={K1.safe + 8} color={TERRA} />
				<PenLink a={[RZ.x - 6, 628]} b={[HOOKX[1] + 90, HOOK_Y - 110]} at={K1.disease + 8} color={TERRA} bow={-150} />
				{void crossChipW}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 2. Why test, and what a school test can show ----------
const K2 = cues(S('why-test'), {look: 'look clean', culture: 'culture them on agar', ecoli: 'for E coli', gut: 'a gut bacterium', gutp: 'gut pathogens', school: 'A school test', different: 'different', counts: 'counts every microbe', compares: 'compares samples', cant: "can't show water is safe"});
export const SceneWhy: React.FC = () => {
	const f = useCurrentFrame();
	const TB = {cx: 300, cy: 540, w: 210};
	const diffDim = prog(f, K2.different, 12);
	const guideAt = K2.gutp + 40;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={4} />
				<Bench />
				<g opacity={1 - 0.45 * diffDim}>
					<PlateB p={PLATES.tapBottle} cx={TB.cx} cy={TB.cy} w={TB.w} id="p02-tap" o={prog(f, 0, 14)} />
					<GTag x={TB.cx} y={800} text="looks clean" at={K2.look} out={K2.culture} size={26} anchor="middle" />
					{f >= guideAt ? (
						<g>
							<DrawPath d={`M${TB.cx + 130},${TB.cy - 150} l14,0 l0,320 l-14,0`} at={guideAt} dur={14} color={GREYT} width={3.5} />
							<Sx x={TB.cx + 156} y={TB.cy + 20} text="100 mL" size={26} color={GREY_INK} weight={700} at={guideAt + 8} />
						</g>
					) : null}
					<Dish p={PLATES.clear} cx={620} cy={560} w={190} o={prog(f, K2.culture, 14)} dim={prog(f, K2.ecoli, 12)} />
					<GTag x={620} y={680} text="culture on agar: counts what grows" at={K2.culture + 8} out={K2.ecoli} size={24} anchor="middle" />
					<PlateB p={PLATES.rod} cx={960} cy={500} w={300} id="p02-rod" o={prog(f, K2.ecoli, 14)} />
				</g>
				<CTag x={110} y={760} text="E. coli: a gut bacterium, an indicator of faecal contamination" at={K2.gut} out={K2.different} color={AMBER_INK} size={32} maxW={1080} />
				<GTag x={110} y={870} text="may travel with it: Salmonella, Cryptosporidium, viruses" at={K2.gutp} out={guideAt + 10} size={26} />
				{/* the guideline line (silent), then the two-way split */}
				<g opacity={prog(f, guideAt, 12)}>
					<WText x={RZ.x} y={290} text="Australian Drinking Water Guidelines: E. coli should not be detected in a minimum 100 mL sample of drinking water" size={28} maxW={RZ.w} color={diffDim > 0.5 ? GREY_INK : INK} weight={600} at={guideAt} />
				</g>
				<RowBox x={RZ.x} y={470} w={RZ.w} h={150} at={K2.different} color={INK_SOFT} />
				<WText x={RZ.x + 24} y={520} text="accredited lab: tests for E. coli, decides safety" size={32} maxW={RZ.w - 48} color={INK} hand weight={700} at={K2.different} />
				<RowBox x={RZ.x} y={640} w={RZ.w} h={150} at={K2.counts} color={AMBER_INK} />
				<WText x={RZ.x + 24} y={690} text="school test: counts all microbes that grow; compares samples" size={32} maxW={RZ.w - 48} color={AMBER_INK} hand weight={700} at={K2.counts} />
				<Sx x={RZ.x + 24} y={850} text="not a safety test" size={40} color={TERRA} hand weight={700} at={K2.cant} />
				{void K2.school}{void K2.compares}{void VIOLET}{void GREEN}
			</Overlay>
		</>
	);
};

// ---------- 3. Aim and variables ----------
const K3 = cues(S('aim-variables'), {aim: 'The aim', source: 'source', cfu: 'colony forming units per', unit: 'A colony forming unit', cell: 'a cell', clump: 'a clump', keep: 'Keep the agar', agar: 'the agar', volume: 'volume', dil: 'dilutions', incub: 'incubation time', same: 'the same'});
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const BW = 460, bcx = 450, bcy = 420;
	const bx = FEAT.bottleX.map(u => ptOf(PLATES.bottles, bcx, bcy, BW, [u, FEAT.bottleLabelY]));
	const Z = {x: 820, y: 760, r: 150};
	const ctrl = [
		{t: 'same agar (nutrient agar, one batch)', at: K3.agar},
		{t: '0.1 mL per plate', at: K3.volume},
		{t: 'same dilution method', at: K3.dil},
		{t: '28 °C for 48 h', at: K3.incub},
	];
	const cell = (x: number, y: number, n: number, at: number) => {
		const o = prog(f, at, 12);
		if (o <= 0.01) return null;
		const pts = n === 1 ? [[0, 0]] : [[-12, -6], [10, -8], [0, 10]];
		return <g opacity={o}>{pts.map(([dx, dy], i) => <ellipse key={i} cx={x + dx} cy={y + dy} rx={14} ry={9} fill="#eceeef" stroke={GREY_INK} strokeWidth={2.5} />)}</g>;
	};
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={4} />
				<Bench />
				<Pl p={PLATES.bottles} cx={bcx} cy={bcy} w={BW} />
				{['tap', 'creek', 'tank'].map((s, i) => <VChip key={s} x={bx[i][0]} y={bx[i][1]} text={s} at={-100} />)}
				<Dish p={PLATES.creek} cx={380} cy={780} w={300} o={prog(f, K3.cfu - 10, 14)} />
				{/* CFU zoom: a single cell and a clump each grow into one colony */}
				<g opacity={prog(f, K3.unit, 14)}>
					<circle cx={Z.x} cy={Z.y} r={Z.r} fill="#f2ecd6" stroke={INK_SOFT} strokeWidth={3} />
					<line x1={380 + 60} y1={760} x2={Z.x - Z.r} y2={Z.y} stroke={GREYT} strokeWidth={2.5} strokeDasharray="6 6" />
				</g>
				{cell(Z.x - 80, Z.y - 50, 1, K3.cell)}
				{cell(Z.x - 80, Z.y + 50, 3, K3.clump)}
				{[[-50, 1], [50, 1]].map(([dy], i) => f >= [K3.cell, K3.clump][i] + 10 ? (
					<g key={i}>
						<CurveArrow a={[Z.x - 50, Z.y + dy]} b={[Z.x + 30, Z.y + dy]} at={[K3.cell, K3.clump][i] + 10} bow={0} color={INK_SOFT} width={3} />
						<circle cx={Z.x + 70} cy={Z.y + dy} r={24} fill="#f7f0d8" stroke="#d6c38f" strokeWidth={3} opacity={prog(f, [K3.cell, K3.clump][i] + 22, 10)} />
					</g>
				) : null)}
				<CTag x={Z.x} y={Z.y + Z.r + 14} text="CFU: one cell or clump → one colony" at={K3.clump + 30} color={AMBER_INK} size={28} anchor="middle" />
				{/* the variables card */}
				<RowBox x={RZ.x} y={250} w={RZ.w} h={720} at={K3.aim} color={EDGE_C} />
				<WText x={RZ.x + 24} y={300} text="Aim: compare culturable microbes in tap, creek and tank water" size={28} maxW={RZ.w - 48} color={INK} weight={700} at={K3.aim} />
				<WText x={RZ.x + 24} y={400} text="independent: water source (tap, creek, tank)" size={30} maxW={RZ.w - 48} color={VIOLET} hand weight={700} at={K3.source} />
				<PenLink a={[RZ.x + 10, 410]} b={[bcx + 220, bcy - 60]} at={K3.source + 10} color={VIOLET} />
				<WText x={RZ.x + 24} y={510} text="dependent: colony-forming units (CFU) per mL" size={30} maxW={RZ.w - 48} color={AMBER_INK} hand weight={700} at={K3.cfu} />
				<Sx x={RZ.x + 24} y={620} text="controlled:" size={30} color={GREEN} hand weight={700} at={K3.keep} />
				{ctrl.map((c, i) => <Sx key={i} x={RZ.x + 44} y={665 + i * 46} text={'• ' + c.t} size={28} color={INK} hand weight={700} at={c.at} />)}
				<WText x={RZ.x + 44} y={665 + 4 * 46} text="same plate size, same spreading, same counting rule" size={24} maxW={RZ.w - 70} color={GREY_INK} weight={600} at={K3.same + 14} />
				{void Drop}{void lerp}
			</Overlay>
		</>
	);
};
const EDGE_C = 'rgba(60,45,20,0.3)';

// ---------- 4. Sampling and aseptic technique ----------
const K4 = cues(S('sampling-aseptic'), {own: 'own sterile', food: 'For food', aseptic: 'aseptic technique', keep: 'keep outside microbes', pipettes: 'sterile pipettes', bunsen: 'Bunsen flame', lid: 'lift each lid', briefly: 'only briefly'});
export const SceneSampling: React.FC = () => {
	const f = useCurrentFrame();
	const BW = 360, bcx = 270, bcy = 790;
	const bx = FEAT.bottleX.map(u => ptOf(PLATES.bottles, bcx, bcy, BW, [u, FEAT.bottleLabelY]));
	const D = {cx: 760, cy: 780, w: 250};
	const lift = Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (f - K4.lid - 6) / 46))));
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={4} />
				<Bench />
				<Pl p={PLATES.sampler} cx={270} cy={440} w={fitW(PLATES.sampler, 360, 300)} o={prog(f, K4.own - 6, 14)} />
				<GTag x={270} y={606} text="sterile bottle for each sample" at={K4.own + 6} out={K4.aseptic} size={24} anchor="middle" />
				<Pl p={PLATES.bottles} cx={bcx} cy={bcy} w={BW} o={prog(f, K4.own + 30, 14)} />
				{['tap', 'creek', 'tank'].map((s, i) => <VChip key={s} x={bx[i][0]} y={bx[i][1]} text={s} at={K4.own + 40 + i * 8} size={22} />)}
				<CTag x={RZ.x} y={260} text="food: 1 g in 9 mL sterile water = 10⁻¹ already" at={K4.food} out={K4.aseptic} color={GREY_INK} size={28} maxW={RZ.w} />
				<CTag x={RZ.x} y={260} text="aseptic technique: keeps outside microbes out of samples and plates" at={K4.aseptic + 4} color={AMBER_INK} size={30} maxW={RZ.w} />
				<CrossChip x={RZ.x} y={430} text="aseptic = just clean" at={K4.keep + 20} cross={K4.keep + 52} size={30} />
				<Pl p={PLATES.pipette} cx={720} cy={420} w={fitW(PLATES.pipette, 380, 280)} o={prog(f, K4.pipettes, 14)} />
				<Pl p={PLATES.bunsen} cx={1110} cy={610} w={fitW(PLATES.bunsen, 160, 330)} o={prog(f, K4.bunsen, 14)} />
				{f >= K4.bunsen + 10 ? [0, 1, 2].map(i => {
					const t = (((f - K4.bunsen - 10) / 50 + i / 3) % 1);
					return <path key={i} d={`M${1080 + i * 30},${420 - t * 90} l0,-34 m-10,12 l10,-12 l10,12`} fill="none" stroke={GREYT} strokeWidth={3} opacity={Math.sin(t * Math.PI) * 0.8} />;
				}) : null}
				<GTag x={1110} y={790} text="rising air carries dust away" at={K4.bunsen + 14} size={24} anchor="middle" />
				{/* a lid lifted a little, briefly, before plating; dust drifts past above */}
				<Dish p={PLATES.agar} cx={D.cx} cy={D.cy} w={D.w} o={prog(f, K4.lid - 10, 12)} />
				{f >= K4.lid - 10 ? <ellipse cx={D.cx + 6 * lift} cy={D.cy - 18 * lift} rx={D.w * 0.48} ry={D.w * 0.48 * (1 - 0.18 * lift)} fill="rgba(230,238,242,0.18)" stroke="#9fb3bd" strokeWidth={3} opacity={prog(f, K4.lid - 10, 12)} /> : null}
				<Drift sx={520} sy={620} x1={1000} band={30} at={K4.lid} n={14} period={110} />
				<GTag x={760} y={930} text="dust carries microbes, as in Pasteur's flasks" at={K4.lid + 16} size={24} anchor="middle" />
				{void INK}{void Drop}
			</Overlay>
		</>
	);
};

// ---------- 5. Why dilute, and how ----------
const K5 = cues(S('serial-dilution'), {millions: 'millions of microbes', plated: 'Plated straight', film: 'into a film', steps: 'dilute in steps', one: 'One millilitre of sample', nine: 'into nine', m1: 'minus one', that: 'One millilitre of that', m2: 'minus two', soon: 'and so on'});
const RK = {cx: 700, cy: 610, w: 760};
export const SceneDilution: React.FC = () => {
	const f = useCurrentFrame();
	const tp = (i: number, v: number) => ptOf(PLATES.rack, RK.cx, RK.cy, RK.w, [FEAT.tubeX[i], v]);
	const bottle = ptOf(PLATES.rack, RK.cx, RK.cy, RK.w, FEAT.rackBottle);
	const tops = [0, 1, 2, 3].map(i => tp(i, FEAT.tubeTop));
	const m = smooth(prog(f, K5.steps, 24));
	const labels = [
		{t: '10⁻¹ (1 in 10)', at: K5.m1},
		{t: '10⁻² (1 in 100)', at: K5.m2},
		{t: '10⁻³', at: K5.soon + 10},
		{t: '10⁻⁴', at: K5.soon + 20},
	];
	const base = tp(0, FEAT.rackBase)[1] + 30;
	const xs = [bottle[0], ...tops.map(t => t[0])];
	const arrowAt = [K5.m1 - 10, K5.m2 - 10, K5.soon + 10, K5.soon + 20];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={-100} />
				<Bench />
				<Dish p={PLATES.lawn} cx={lerp(300, 170, m)} cy={lerp(520, 320, m)} w={lerp(300, 110, m)} o={prog(f, K5.film - 6, 14)} dim={m * 0.7} />
				<CTag x={300} y={690} text="undiluted: a solid film, can't count" at={K5.film + 6} out={K5.steps} color={TERRA} size={30} anchor="middle" />
				<Pl p={PLATES.rack} cx={RK.cx} cy={RK.cy} w={RK.w} o={prog(f, K5.steps, 16)} />
				<CTag x={RZ.x} y={260} text="serial dilution: diluting in repeated tenfold steps" at={K5.steps + 8} color={AMBER_INK} size={32} maxW={RZ.w} />
				<Pl p={PLATES.gradPip} cx={1160} cy={420} w={fitW(PLATES.gradPip, 200, 200)} o={prog(f, K5.one, 14)} />
				<MovingDrop a={[bottle[0], bottle[1] - 20]} b={[tops[0][0], tops[0][1] - 10]} at={K5.one + 6} dur={34} label="1 mL" />
				<GTag x={tops[0][0]} y={tops[0][1] - 72} text="9 mL sterile water" at={K5.nine} out={K5.m1} size={24} anchor="middle" />
				<MovingDrop a={[tops[0][0], tops[0][1] - 20]} b={[tops[1][0], tops[1][1] - 10]} at={K5.that + 6} dur={34} label="1 mL" />
				{labels.map((l, i) => (
					<Sx key={i} x={tops[i][0]} y={tops[i][1] - (i % 2 ? 84 : 34)} text={l.t} size={i < 2 ? 30 : 34} color={vis(f, l.at, labels[i + 1]?.at, 10) > 0.5 ? AMBER_INK : INK} weight={700} anchor="middle" at={l.at} />
				))}
				{[0, 1, 2, 3].map(i => f >= arrowAt[i] ? (
					<g key={i}>
						<CurveArrow a={[xs[i] + 14, base]} b={[xs[i + 1] - 14, base]} at={arrowAt[i]} bow={26} color={INK_SOFT} width={3.5} />
						<Sx x={(xs[i] + xs[i + 1]) / 2} y={base + 58} text="×10" size={26} color={INK_SOFT} weight={700} anchor="middle" at={arrowAt[i] + 6} />
					</g>
				) : null)}
				<GTag x={(xs[0] + xs[4]) / 2} y={base + 76} text="each step: 10 times more dilute" at={K5.soon + 26} size={24} anchor="middle" />
				{void K5.millions}{void K5.plated}{void Drop}{void GREEN}
			</Overlay>
		</>
	);
};
