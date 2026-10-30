// M7 P05 (Biology practical) scenes 11 and 12: validity, reliability and accuracy (three cards in turn beside the
// apparatus: the zones plate with the green blank control; the three rotated plates with their A and B ranges; the
// camera on disc B with the ruler readout, a soft-edge bracket and a "view from directly above" sight line; the NESA
// glossary footer); the risk assessment (the school-procedure header, one Hazard / Harm / Control row at a time with
// earlier rows collapsing to grey chips, thumbnails, the autoclave gloss and the footer chip).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, Bench, CARD, CTag, Clip, DPlate, DiscChips, DrawPath, EDGE, FEAT, GREEN, GREYT, GREY_INK, GTag, INK, PLATES, Pl, PlateB, QUESTION, Rail, RowBox, Ruler, Sx,
	TERRA, WText, discAt, dpt, fitW, kOf, lerp, mmOf, prog, smooth, vis, wrapT,
} from './parts';

// ---------- 11. Validity, reliability and accuracy ----------
const K11 = cues(S('validity-reliability'), {validity: 'Validity', blank: 'blank control', reliability: 'Reliability', three: 'three plates show', accuracy: 'Accuracy', ruler: 'ruler gives', fuzzy: 'fuzzy edge', angle: 'viewing angle', more: 'More readings'});
const CARDS = [
	{h: 'Validity: measures what was intended?', b: "Yes for 'which disc gives the larger clear zone on this agar' (one variable, blank control, same conditions). No for 'which drug is stronger' or 'which is the better medicine'."},
	{h: 'Reliability: repeats agree?', b: 'Three plates: A 24 to 26 mm, B 14 to 16 mm; use the mean.'},
	{h: 'Accuracy: close to the true value?', b: 'A fuzzy edge and the viewing angle limit where you place the boundary. More readings show agreement, not the true edge.'},
];
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.validity, K11.reliability, K11.accuracy];
	const vO = prog(f, 0, 12) * (1 - prog(f, K11.three - 14, 14));
	const rO = prog(f, K11.three, 12) * (1 - prog(f, K11.accuracy + 10, 14));
	const aO = prog(f, K11.accuracy + 16, 14);
	const V = {cx: 520, cy: 580, w: 460};
	const RX = [250, 540, 830], ROT = [0, 90, 180];
	// accuracy: the camera on disc B
	const W = 1250;
	const b0 = dpt(0, 0, W, FEAT.disc.B);
	const BT = {x: 560, y: 610};
	const pcx = BT.x - b0[0], pcy = BT.y - b0[1];
	const eB = FEAT.zoneR.B * kOf(W);
	const mm = mmOf(W);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={-100} />
				<Bench w={1010} />
				<g opacity={vO}>
					<DPlate p={PLATES.zones} cx={V.cx} cy={V.cy} w={V.w} />
					<DiscChips cx={V.cx} cy={V.cy} w={V.w} at={-100} size={24} away={V.w * 0.15} blankGreen={prog(f, K11.blank, 8)} />
					<Sx x={V.cx} y={880} text="blank control: no zone" size={30} color={GREEN} hand weight={700} anchor="middle" at={K11.blank + 6} />
				</g>
				<g opacity={rO}>
					{RX.map((x, i) => (
						<g key={i}>
							<DPlate p={PLATES.zones} cx={x} cy={540} w={260} rot={ROT[i]} />
							<DiscChips cx={x} cy={540} w={260} rot={ROT[i]} at={-100} size={18} away={260 * 0.15} only={['A', 'B']} />
						</g>
					))}
					<Sx x={540} y={760} text="A: 24, 26, 25 mm   B: 15, 14, 16 mm" size={32} color={AMBER_INK} hand weight={700} anchor="middle" at={K11.three + 10} />
				</g>
				<g opacity={aO}>
					<Clip id="p05-vra-cam" x={70} y={252} w={1010} h={700}>
						<DPlate p={PLATES.zones} cx={pcx} cy={pcy} w={W} />
						<Ruler px={BT.x} py={BT.y} mm={mm} start={7.5} ticks={[0, 15]} ticksAt={K11.ruler + 10} read="15 mm" readAt={K11.ruler + 24} readDy={-70} />
						{f >= K11.fuzzy ? (
							<g opacity={prog(f, K11.fuzzy, 10)}>
								<rect x={BT.x + eB - 18} y={BT.y - 150} width={36} height={130} rx={8} fill={AMBER} opacity={0.18} />
								<DrawPath d={`M${BT.x + eB - 18},${BT.y - 150} l-10,0 l0,130 l10,0 M${BT.x + eB + 18},${BT.y - 150} l10,0 l0,130 l-10,0`} at={K11.fuzzy} dur={12} color={AMBER_INK} width={3.5} />
							</g>
						) : null}
					</Clip>
					<Sx x={BT.x + eB} y={BT.y - 168} text="edge: where exactly?" size={28} color={AMBER_INK} hand weight={700} anchor="middle" at={K11.fuzzy + 6} />
					{f >= K11.angle ? (
						<g>
							<DrawPath d={`M${BT.x - eB - 70},${300} L${BT.x - eB - 70},${BT.y - 30}`} at={K11.angle} dur={12} color={GREY_INK} width={3.5} dash="9 7" />
							<path d={`M${BT.x - eB - 82},${BT.y - 48} L${BT.x - eB - 70},${BT.y - 28} L${BT.x - eB - 58},${BT.y - 48}`} fill="none" stroke={GREY_INK} strokeWidth={3.5} opacity={prog(f, K11.angle + 10, 6)} />
							<GTag x={BT.x - eB - 60} y={280} text="view from directly above" at={K11.angle + 4} size={22} anchor="end" />
						</g>
					) : null}
				</g>
				{CARDS.map((c, i) => {
					const o = prog(f, at[i], 12);
					if (o <= 0.01) return null;
					const dim = prog(f, at[i + 1] ?? 1e9, 12);
					const y = 240 + i * 240;
					return (
						<g key={i} opacity={o * (1 - 0.45 * dim)}>
							<RowBox x={1110} y={y} w={750} h={228} at={at[i]} color={dim > 0.5 ? EDGE : AMBER_INK} />
							<Sx x={1134} y={y + 44} text={c.h} size={30} color={dim > 0.5 ? GREY_INK : INK} weight={800} at={-100} />
							<WText x={1134} y={y + 86} text={c.b} size={25} maxW={705} color={dim > 0.5 ? GREY_INK : INK} weight={600} at={-100} />
						</g>
					);
				})}
				<WText x={100} y={1010} text="NESA glossary (2017 syllabus), reliability: 'An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results.'" size={20} maxW={1760} color={GREY_INK} weight={600} at={K11.reliability + 20} />
				{void K11.more}{void CARD}{void TERRA}{void lerp}{void smooth}{void vis}{void discAt}
			</Overlay>
		</>
	);
};

// ---------- 12. Risk assessment ----------
const K12 = cues(S('risk-assessment'), {risk: 'The risk assessment', approved: 'approved school procedure', contam: 'contaminating microbe', mult: 'multiplies it', closed: 'keep cultured plates closed', wash: 'wash your hands', forceps: 'Handle discs with forceps', allergic: 'allergic', pen: 'penicillin', autoclave: 'autoclave', disposal: 'before disposal'});
const RC = [{x: 100, w: 500}, {x: 610, w: 450}, {x: 1070, w: 790}];
const RS = 30, RL = 38;
type RRow = {cells: [string, string, string]; at: [number, number, number]; thumb: 'zones' | 'forceps' | 'bag'; chip: string};
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const rows: RRow[] = [
		{cells: ['contaminating microbes, multiplied by incubation', 'infection if a plate is opened', 'plates closed and inverted, never opened, measured through the base; wash hands'], at: [K12.contam, K12.mult, K12.closed], thumb: 'zones', chip: 'contamination'},
		{cells: ['antibiotic discs', 'allergic reaction', 'forceps, not fingers; tell your teacher about any allergy'], at: [K12.forceps, K12.allergic, K12.forceps + 12], thumb: 'forceps', chip: 'allergy'},
		{cells: ['used plates', 'spreading live microbes', 'teacher autoclaves before disposal'], at: [K12.autoclave, K12.autoclave + 8, K12.disposal], thumb: 'bag', chip: 'disposal'},
	];
	const Y0 = 400, HH = 52, RowY = Y0 + HH;
	const rowH = 4 * RL + 30;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={6} at={4} />
				<WText x={100} y={272} text="Use only the teaching culture approved in the school's risk assessment. Treat grown plates as potentially contaminated." size={26} maxW={1760} color={GREY_INK} weight={600} at={K12.approved} />
				{/* earlier rows collapse to grey chips */}
				{rows.slice(0, 2).map((r, i) => {
					const o = prog(f, rows[i + 1].at[0], 12);
					if (o <= 0.01) return null;
					return (
						<g key={i} opacity={o}>
							<rect x={100 + i * 250} y={322} width={230} height={44} rx={22} fill="#eceeef" stroke={GREYT} strokeWidth={2} />
							<Sx x={100 + i * 250 + 115} y={352} text={r.chip} size={24} color={GREY_INK} weight={700} anchor="middle" at={-100} />
						</g>
					);
				})}
				<g opacity={prog(f, K12.contam - 10, 12)}>
					<rect x={90} y={Y0} width={1770} height={HH + rowH + 8} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={90} y={Y0} width={1770} height={HH} rx={18} fill="#efe6d4" />
					{['Hazard', 'Harm', 'Control'].map((t, i) => <Sx key={t} x={RC[i].x + 18} y={Y0 + 36} text={t} size={30} color={i === 0 ? TERRA : INK} weight={800} at={-100} />)}
					{[1, 2].map(i => <line key={i} x1={RC[i].x - 5} y1={Y0 + 8} x2={RC[i].x - 5} y2={Y0 + HH + rowH} stroke={EDGE} strokeWidth={2} />)}
				</g>
				{rows.map((r, ri) => {
					const o = vis(f, r.at[0], rows[ri + 1]?.at[0], 12);
					if (o <= 0.01) return null;
					const cy = RowY + rowH / 2;
					return (
						<g key={ri} opacity={o}>
							{r.cells.map((c, ci) => wrapT(c, RS, RC[ci].w - (ci === 2 ? 170 : 36), true).map((t, k) => <Sx key={ci + '-' + k} x={RC[ci].x + 18} y={RowY + 44 + k * RL} text={t} size={RS} color={ci === 0 ? TERRA : INK} hand weight={700} at={r.at[ci]} />))}
							{r.thumb === 'zones' ? <DPlate p={PLATES.zones} cx={1790} cy={cy} w={120} o={prog(f, r.at[2], 12)} /> : null}
							{r.thumb === 'forceps' ? <g opacity={prog(f, r.at[2], 12)}><PlateB p={PLATES.forceps} cx={1790} cy={cy} w={30} rot={30} /></g> : null}
							{r.thumb === 'bag' ? <Pl p={PLATES.bag} cx={1790} cy={cy} w={fitW(PLATES.bag, 110, rowH - 20)} o={prog(f, r.at[2], 12)} /> : null}
						</g>
					);
				})}
				<CTag x={100} y={RowY + rowH + 40} text="autoclave: steam under pressure kills microbes" at={K12.autoclave + 14} color={AMBER_INK} size={30} />
				<GTag x={100} y={RowY + rowH + 130} text="follow your school's risk assessment and microbiology procedure" at={K12.closed + 30} size={24} />
				{void K12.risk}{void K12.wash}{void K12.pen}{void GREEN}{void AMBER}
			</Overlay>
		</>
	);
};
