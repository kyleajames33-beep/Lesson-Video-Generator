// M7 P02 (Biology practical) scenes 11 and 12: validity, reliability and accuracy (three cards in turn beside the
// apparatus: the two controls, three rotated copies of the countable plate with 150, 156 and 162, the calibrated
// micropipette and the tally overlay; the NESA glossary footer); the risk assessment (the AS/NZS 2243.3:2022 header,
// Hazard, Harm and Control rows with the taped creek plate, the autoclave bag and the Bunsen; the school-procedure
// footer).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER_INK, Bench, CARD, CTag, CountGrid, Dish, EDGE, FEAT, GREEN, GREY_INK, GTag, INK, PLATES, Pl, QUESTION, Rail, RowBox, Sx, TERRA, TapeStrips, WText, dishGeo, fitW,
	prog, wrapT,
} from './parts';

// ---------- 11. Validity, reliability and accuracy ----------
const K11 = cues(S('validity-reliability'), {validity: 'Validity', reliability: 'Reliability', three: 'three plates per dilution', agree: 'repeats agree', accuracy: 'Accuracy', calibrated: 'calibrated pipettes', range: 'plates in the thirty', marking: 'marking each colony'});
const CARDS = [
	{h: 'Validity: measures what was intended?', b: 'Yes for culturable microbes (controls, aseptic technique, one variable changed). No for pathogens or safety.'},
	{h: 'Reliability: repeats agree?', b: 'Three plates per dilution, for example 150, 156, 162; an outlier shows up; use the mean.'},
	{h: 'Accuracy: close to the true value?', b: 'Calibrated pipettes; count plates with about 30 to 300 colonies; mark each colony on the base; still an estimate (clumps count as one).'},
];
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.validity, K11.reliability, K11.accuracy];
	const vOut = prog(f, K11.three - 10, 14);
	const N = {cx: 330, cy: 520, w: 260}, P = {cx: 720, cy: 520, w: 260};
	const pg = dishGeo(PLATES.posCtl, P.cx, P.cy, P.w, FEAT.pos.c, FEAT.pos.rim);
	const RX = [300, 620, 940], ROT = [120, 0, 240], CNT = ['150', '156', '162'];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={-100} />
				<Bench w={1050} />
				<g opacity={prog(f, K11.validity, 14) * (1 - vOut)}>
					<Dish p={PLATES.clear} cx={N.cx} cy={N.cy} w={N.w} />
					<Dish p={PLATES.posCtl} cx={P.cx} cy={P.cy} w={P.w} />
					<TapeStrips x={pg.x} y={pg.y} r={pg.r} at={-100} />
					<Sx x={N.cx} y={700} text="negative control" size={32} color={GREEN} hand weight={700} anchor="middle" at={K11.validity + 10} />
					<Sx x={P.cx} y={700} text="positive control" size={32} color={GREEN} hand weight={700} anchor="middle" at={K11.validity + 16} />
				</g>
				{RX.map((x, i) => <Dish key={i} p={PLATES.countable} cx={x} cy={520} w={280} rot={ROT[i]} o={prog(f, K11.three + i * 6, 12)} />)}
				{RX.map((x, i) => <CTag key={'c' + i} x={x} y={690} text={CNT[i]} at={K11.three + 10 + i * 6} color={AMBER_INK} size={34} anchor="middle" />)}
				<Sx x={620} y={800} text="mean 156" size={30} color={GREY_INK} weight={700} anchor="middle" at={K11.agree} />
				<Pl p={PLATES.pipette} cx={240} cy={870} w={fitW(PLATES.pipette, 260, 130)} o={prog(f, K11.calibrated, 12)} />
				<CountGrid cx={620} cy={520} w={280} at={K11.marking} pts={FEAT.tally} step={5} p={PLATES.countable} />
				{CARDS.map((c, i) => {
					const o = prog(f, at[i], 12);
					if (o <= 0.01) return null;
					const dim = prog(f, at[i + 1] ?? 1e9, 12);
					const y = 250 + i * 235;
					return (
						<g key={i} opacity={o * (1 - 0.45 * dim)}>
							<RowBox x={1130} y={y} w={730} h={220} at={at[i]} color={dim > 0.5 ? EDGE : AMBER_INK} />
							<Sx x={1154} y={y + 46} text={c.h} size={30} color={dim > 0.5 ? GREY_INK : INK} weight={800} at={-100} />
							<WText x={1154} y={y + 92} text={c.b} size={27} maxW={680} color={dim > 0.5 ? GREY_INK : INK} weight={600} at={-100} />
						</g>
					);
				})}
				<WText x={100} y={1000} text="NESA glossary (2017 syllabus), reliability: 'An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results.'" size={20} maxW={1760} color={GREY_INK} weight={600} at={K11.reliability + 20} />
				{void K11.range}{void CARD}{void TERRA}
			</Overlay>
		</>
	);
};

// ---------- 12. Risk assessment ----------
const K12 = cues(S('risk-assessment'), {risk: 'The risk assessment', rg1: 'risk group one', lowest: 'lowest risk group', sample: 'a sample could hold', incub: 'incubating multiplies', treat: 'treat every grown', taped: 'taped shut', count: 'count through the lid', wash: 'wash your hands', autoclave: 'autoclave', disposal: 'before disposal'});
const RC = [{x: 100, w: 520}, {x: 630, w: 470}, {x: 1110, w: 750}];
const RS = 24, RL = 30;
type RRow = {cells: [string, string, string]; at: [number, number, number]; thumb?: 'creek' | 'bag' | 'bunsen'; grey?: boolean};
const rowH = (r: RRow) => Math.max(...r.cells.map((c, i) => wrapT(c, RS, RC[i].w - (i === 2 && r.thumb ? 150 : 36)).length)) * RL + 26;
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const s3 = K12.autoclave + 30;
	const rows: RRow[] = [
		{cells: ['unknown microbes multiplied on incubated plates (treat as potentially pathogenic)', 'infection by swallowing, through cuts, or breathing in spores if a plate is opened', 'plates taped, never opened after incubation, counted through the lid; 25 to 30 °C; wash hands; no eating or drinking'], at: [K12.incub, K12.treat, K12.taped], thumb: 'creek'},
		{cells: ['used cultures at disposal', 'spreading live microbes', 'sterilised in an autoclave (steam under pressure, 121 °C) by the teacher before disposal'], at: [K12.autoclave, K12.autoclave + 10, K12.disposal], thumb: 'bag'},
		{cells: ['70 % ethanol for wiping benches (H225, highly flammable)', 'fire near the Bunsen', 'no flame nearby when wiping; small squeeze bottle'], at: [s3, s3 + 8, s3 + 16], thumb: 'bunsen'},
		{cells: ['Bunsen flame', 'burns', 'tie back hair, safety mat, turn off when not in use'], at: [s3 + 30, s3 + 36, s3 + 42], grey: true},
	];
	const Y0 = 330, HH = 50;
	let y = Y0 + HH;
	const ys = rows.map(r => { const y0 = y; y += rowH(r); return y0; });
	const yEnd = y;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={6} at={4} />
				<WText x={100} y={272} text="AS/NZS 2243.3:2022: school cultures are risk group 1 (low risk); unknown samples are handled as possibly higher" size={26} maxW={1760} color={GREY_INK} weight={600} at={K12.rg1} />
				<g opacity={prog(f, K12.incub - 10, 12)}>
					<rect x={90} y={Y0} width={1770} height={yEnd - Y0 + 8} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={90} y={Y0} width={1770} height={HH} rx={18} fill="#efe6d4" />
					{['Hazard', 'Harm', 'Control'].map((t, i) => <Sx key={t} x={RC[i].x + 18} y={Y0 + 35} text={t} size={28} color={i === 0 ? TERRA : INK} weight={800} at={-100} />)}
					{[1, 2].map(i => <line key={i} x1={RC[i].x - 5} y1={Y0 + 8} x2={RC[i].x - 5} y2={yEnd} stroke={EDGE} strokeWidth={2} />)}
				</g>
				{rows.map((r, ri) => {
					const next = ri === 0 ? rows[1].at[0] : 1e9;
					const dm = r.grey ? 1 : prog(f, next, 12);
					const o = prog(f, r.at[0], 12);
					if (o <= 0.01) return null;
					return (
						<g key={ri} opacity={o * (1 - 0.4 * dm)}>
							<line x1={100} y1={ys[ri]} x2={1850} y2={ys[ri]} stroke={EDGE} strokeWidth={2} />
							{r.cells.map((c, ci) => wrapT(c, RS, RC[ci].w - (ci === 2 && r.thumb ? 150 : 36)).map((t, k) => <Sx key={ci + '-' + k} x={RC[ci].x + 18} y={ys[ri] + 34 + k * RL} text={t} size={RS} color={dm > 0.5 ? GREY_INK : ci === 0 ? TERRA : INK} weight={600} at={r.at[ci]} />))}
							{r.thumb === 'creek' ? <Dish p={PLATES.creek} cx={1790} cy={ys[ri] + rowH(r) / 2} w={96} o={prog(f, r.at[2], 12)} dim={dm} /> : null}
							{r.thumb === 'bag' ? <Pl p={PLATES.bag} cx={1790} cy={ys[ri] + rowH(r) / 2} w={fitW(PLATES.bag, 90, rowH(r) - 16)} o={prog(f, r.at[2], 12)} dim={dm} /> : null}
							{r.thumb === 'bunsen' ? <Pl p={PLATES.bunsen} cx={1790} cy={ys[ri] + rowH(r) / 2} w={fitW(PLATES.bunsen, 60, rowH(r) - 16)} o={prog(f, r.at[2], 12)} dim={dm} /> : null}
						</g>
					);
				})}
				<CTag x={100} y={yEnd + 30} text="autoclave: steam under pressure kills microbes" at={K12.autoclave + 14} color={AMBER_INK} size={30} />
				<GTag x={100} y={yEnd + 110} text="follow your school's risk assessment, its microbiology procedure and each safety data sheet" at={K12.autoclave + 20} size={24} />
				{void K12.risk}{void K12.lowest}{void K12.sample}{void K12.count}{void K12.wash}{void GREEN}
			</Overlay>
		</>
	);
};
