// M6 P01 (Biology practical) scenes 10 to 13: what the data support and what they do not (the two-column conclusion
// card, the four fates returning small with the "mutants hide here" tag, the crossed "more mutants" chip); how mutation
// would be measured (a drop of about 2 x 10^7 exposed cells spread on a selective dish, 48 h, the painted outcome of
// three colonies, survivors counted on a diluted ordinary plate, the frequency line, the unexposed comparison and the
// regrow check); validity, reliability and accuracy (three cards, a count grid with tallies over the 30 s plate, the
// dose line); the risk table (UVC, the yeast, contaminants, ethanol) with the closed cabinet and autoclave bag.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Ring} from '../bio-m5-b13/shared';
import {Tick} from '../bio-m5-b13/shared';
import {S} from './common';
import {C030, CSEL} from './assets';
import {
	AMBER, AMBER_INK, Arrow, Bench, CARD, CTag, CornerTag, CountGrid, CrossChip, DrawPath, Drop, EDGE, GREEN, GREEN_SOFT, GREYT, GREY_INK, GTag, INK, INK_SOFT, PLATES,
	Pl, QUESTION, Rail, Stipple, Sx, TEAL, TEAL_SOFT, TERRA, TERRA_SOFT, TimeBar, WText, ZoomWin, clamp01, ctagH, lerp, pbPt, plH, prog, smooth, tw, wrapT,
} from './parts';

// ---------- 10. What it supports, and what it doesn't ----------
const K10 = cues(S('supports'), {support: 'what do the data support', that: 'That UVC exposure', dont: "What don't they show", mutated: 'mutated', missing: 'The missing colonies', couldnt: "couldn't divide", lived: 'lived'});
const MINI = ['no damage → colony', 'damaged, repaired → colony', 'many dimers → no colony', 'changed base, lives → colony'];
export const SceneSupports: React.FC = () => {
	const f = useCurrentFrame();
	const miniO = prog(f, K10.missing - 10, 14);
	const my = (i: number) => 650 + i * 70;
	const pulse = Math.max(0, Math.sin(clamp01((f - K10.lived) / 36) * Math.PI));
	const col = (x: number, head: string, color: string, fill: string, body: string, atH: number, atB: number) => (
		<g opacity={prog(f, atH, 12)}>
			<rect x={x} y={270} width={830} height={260} rx={22} fill={fill} stroke={color} strokeWidth={3.5} />
			<Sx x={x + 30} y={330} text={head} size={44} color={color} hand weight={700} at={-100} />
			<WText x={x + 30} y={396} text={body} size={36} maxW={770} color={INK} hand weight={700} at={atB} />
		</g>
	);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={4} />
				{col(110, 'supported', TEAL, TEAL_SOFT, 'longer UVC exposure → lower survival (these yeast, this lamp, 20 cm)', K10.support, K10.that)}
				{col(980, 'not shown', TERRA, TERRA_SOFT, 'whether any survivors mutated', K10.mutated, K10.mutated + 8)}
				{/* the four fates, small */}
				<g opacity={miniO}>
					<rect x={110} y={590} width={1000} height={330} rx={22} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<Pl p={PLATES.yeast} cx={210} cy={755} w={130} />
					{MINI.map((t, i) => (
						<g key={i}>
							<path d={`M280,755 C330,755 330,${my(i) - 8} 380,${my(i) - 8}`} fill="none" stroke={i === 2 ? GREYT : INK_SOFT} strokeWidth={2.5} />
							<Sx x={392} y={my(i)} text={t} size={28} color={i === 2 ? INK : GREY_INK} hand weight={700} at={-100} />
						</g>
					))}
					<path d={`M880,${my(0) - 34} L898,${my(0) - 34} L898,${my(1) + 10} L880,${my(1) + 10} M880,${my(3) - 34} L898,${my(3) - 34} L898,${my(3) + 10} L880,${my(3) + 10}`} fill="none" stroke={TEAL} strokeWidth={4} />
					<Sx x={912} y={my(1) - 18} text="survivors" size={28} color={TEAL} hand weight={700} at={-100} />
				</g>
				<Ring cx={560} cy={my(2) - 10} rx={190} ry={30} at={K10.couldnt} color={GREYT} width={3} />
				{miniO > 0.01 ? (
					<g opacity={miniO} transform={`translate(${912},${my(3) + 4}) scale(${1 + 0.18 * pulse})`}>
						<rect x={0} y={-30} width={230} height={44} rx={12} fill={TERRA_SOFT} stroke={TERRA} strokeWidth={2.5 + 2 * pulse} />
						<Sx x={14} y={1} text="mutants hide here" size={26} color={TERRA} hand weight={700} at={-100} />
					</g>
				) : null}
				<CrossChip x={1220} y={680} text="fewer colonies = more mutants" at={K10.missing} cross={K10.lived + 14} caption="counts measure survival" size={32} />
				<GTag x={1230} y={820} text="as in the mutagens video" at={K10.missing + 10} size={22} />
				{void K10.dont}
			</Overlay>
		</>
	);
};

// ---------- 11. How you'd measure mutation ----------
const K11 = cues(S('measure-mutation'), {measure: 'To measure mutation', survivors: 'test the survivors', inherited: 'inherited', rare: 'Mutants are rare', spread: 'spread millions', medium: 'a medium that normal yeast', antibiotic: 'the antibiotic dish', count: 'Count the colonies', fraction: 'fraction of survivors', compare: 'compare it with unexposed', grow: 'grow those colonies again', passed: 'passed on'});
export const SceneMeasure: React.FC = () => {
	const f = useCurrentFrame();
	const D = {cx: 380, cy: 580, w: 420};
	const off = smooth(prog(f, 4, 24));
	const dropT = smooth(prog(f, K11.spread, 14));
	const stip = prog(f, K11.spread + 12, 30);
	const inc = smooth(prog(f, K11.antibiotic + 10, Math.max(20, K11.count - 16 - K11.antibiotic)));
	const swap = smooth(prog(f, K11.count - 18, 16));
	const ptS = pbPt(PLATES.selective, D.cx, D.cy, D.w);
	const headDim = prog(f, K11.fraction, 12);
	const sv = {cx: 900, cy: 520, w: 290};
	const R = 1290, RW = 540;
	const rareT = 'induced mutants: about 1 in 10⁴ to 10⁶ survivors';
	const fT = 'mutation frequency = mutant colonies ÷ survivors plated';
	const yF = 300 + ctagH('test the survivors for a new inherited trait', 32, RW) + 70;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={-100} />
				<Bench />
				{/* the survival plates slide off */}
				<g opacity={1 - off} transform={`translate(${-off * 500},0)`}>
					<Pl p={PLATES.p030} cx={420} cy={560} w={380} />
				</g>
				{/* the selective dish */}
				<Pl p={PLATES.agar} cx={D.cx} cy={D.cy} w={D.w} o={prog(f, K11.rare + 10, 14) * (1 - swap)} />
				<Pl p={PLATES.selective} cx={D.cx} cy={D.cy} w={D.w} o={swap} />
				<g opacity={1 - 0.55 * headDim}>
					<CTag x={D.cx} y={300} text="selective medium: normal yeast can't grow" at={K11.medium} color={TERRA} size={28} anchor="middle" />
				</g>
				{f >= K11.spread - 2 && dropT < 1 ? <Drop x={D.cx} y={lerp(260, D.cy, dropT)} r={26} o={1 - prog(f, K11.spread + 12, 6)} /> : null}
				<Stipple cx={D.cx} cy={D.cy} R={D.w / 2 - 22} p={stip} o={1 - swap} />
				<GTag x={D.cx} y={800} text="about 2 × 10⁷ exposed cells (20 million)" at={K11.spread + 20} size={24} anchor="middle" />
				<TimeBar x={200} y={872} w={360} p={inc} a="0 h" b="48 h" o={prog(f, K11.antibiotic + 4, 12)} />
				<GTag x={620} y={846} text="like the antibiotic dish in the first video" at={K11.antibiotic} out={K11.fraction} size={22} />
				{CSEL.map(([u, v], i) => {
					const [x, y] = ptS(u, v);
					return <Ring key={i} cx={x} cy={y} rx={16} ry={15} at={K11.count + 6 + i * 6} color={TERRA} width={3.5} seed={i + 2} />;
				})}
				{/* survivors counted on a diluted ordinary plate */}
				<Pl p={PLATES.p030} cx={sv.cx} cy={sv.cy} w={sv.w} o={prog(f, K11.count + 10, 14)} />
				<GTag x={sv.cx} y={sv.cy + sv.w / 2 + 14} text="diluted, ordinary agar: count survivors" at={K11.count + 16} size={22} anchor="middle" />
				{/* right zone */}
				<g opacity={1 - 0.55 * headDim}>
					<CTag x={R} y={300} text="test the survivors for a new inherited trait" at={K11.survivors} color={INK} size={32} maxW={RW} />
				</g>
				<GTag x={R} y={yF - 50} text={rareT} at={K11.rare} size={22} />
				<CTag x={R} y={yF} text={fT} at={K11.fraction} color={AMBER_INK} size={32} maxW={RW} />
				<CTag x={R} y={yF + ctagH(fT, 32, RW) + 22} text="compare with unexposed cells" at={K11.compare} color={GREEN} fill={GREEN_SOFT} size={30} maxW={RW} />
				<g opacity={0.45 * prog(f, K11.compare + 8, 14)}>
					<Pl p={PLATES.agar} cx={R + 70} cy={yF + ctagH(fT, 32, RW) + 140} w={110} />
					<Pl p={PLATES.p000} cx={R + 200} cy={yF + ctagH(fT, 32, RW) + 140} w={110} />
					<Sx x={R + 290} y={yF + ctagH(fT, 32, RW) + 150} text="0 s pair" size={24} color={GREY_INK} weight={700} at={-100} />
				</g>
				{/* regrow: is the trait passed on? */}
				<Pl p={PLATES.selective} cx={740} cy={840} w={100} o={prog(f, K11.grow, 12)} />
				<Arrow a={[800, 840]} b={[1040, 840]} at={K11.grow + 8} color={INK_SOFT} />
				<Sx x={920} y={822} text="regrow on selective medium" size={22} color={INK_SOFT} weight={700} anchor="middle" at={K11.grow + 8} />
				<Pl p={PLATES.selective} cx={1100} cy={840} w={100} o={prog(f, K11.passed - 6, 12)} />
				<Tick x={1180} y={800} at={K11.passed + 4} s={44} color={GREEN} />
				<GTag x={930} y={900} text="regrow: does the trait stay?" at={K11.passed + 10} size={22} anchor="middle" />
				<GTag x={R} y={940} text="or look for a new colour among survivors (mutagens video)" at={K11.passed + 30} size={20} />
				{void K11.measure}{void K11.inherited}{void AMBER}{void TEAL}{void plH}{void ZoomWin}{void wrapT}{void DrawPath}
			</Overlay>
		</>
	);
};

// ---------- 12. Validity, reliability and accuracy ----------
const K12 = cues(S('validity-reliability'), {validity: 'Validity', validly: 'validly compare survival', arent: "aren't a valid measure", reliability: 'Reliability', chance: 'as much as chance predicts', like: 'like fifty five', accuracy: 'Accuracy', grid: 'on a grid', second: 'a second counter', time: "time alone isn't dose", output: 'output'});
type VItem = {t: string; at: number; color?: string};
const VCard: React.FC<{y: number; title: string; q: string; items: VItem[]; at: number; dim?: number}> = ({y, title, q, items, at, dim = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const x = 1000, w = 860, size = 27, L = 34;
	const lines = items.map(it => wrapT(it.t, size, w - 60));
	const h = 74 + lines.reduce((a, l) => a + l.length * L + 6, 0) + 10;
	const d = dim > 0.5;
	let yy = y + 96;
	return (
		<g opacity={o * (1 - 0.45 * clamp01(dim))}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill={CARD} stroke={d ? EDGE : AMBER} strokeWidth={d ? 2.5 : 3.5} />
			<Sx x={x + 26} y={y + 50} text={title} size={38} color={d ? GREY_INK : INK} hand weight={700} at={-100} />
			<Sx x={x + 50 + tw(title, 38, true) * 1.04} y={y + 50} text={q} size={26} color={GREY_INK} weight={600} at={-100} />
			{items.map((it, i) => {
				const y0 = yy;
				yy += lines[i].length * L + 6;
				return <g key={i}>{lines[i].map((t, k) => <Sx key={k} x={x + 30} y={y0 + k * L} text={t} size={size} color={d ? GREY_INK : it.color ?? INK} weight={600} at={it.at} />)}</g>;
			})}
		</g>
	);
};
export const vcardH = (items: string[]) => 74 + items.reduce((a, t) => a + wrapT(t, 27, 800).length * 34 + 6, 0) + 10;
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 500, cy: 590, w: 560};
	const v1 = ['Survival: yes (one variable, same handling, lamp-off control).', 'Mutation: no (survivors not tested).'];
	const v2 = ['30 s plates: 55, 61, 67 (range 12, about what random sampling gives); means smooth chance variation.'];
	const v3 = ['Count through the lid on a grid, tally each colony, a second counter.', 'Plates below about 30 colonies (60 s, 120 s) carry more chance variation.'];
	const y1 = 262, y2 = y1 + vcardH(v1) + 16, y3 = y2 + vcardH(v2) + 16;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={4} />
				<Bench w={880} />
				<Pl p={PLATES.p030} cx={P.cx} cy={P.cy} w={P.w} o={prog(f, 0, 14)} />
				<GTag x={P.cx} y={292} text="30 s plate (61 colonies)" at={10} size={22} anchor="middle" />
				<CountGrid cx={P.cx} cy={P.cy} w={P.w} at={K12.grid} pts={C030} p={PLATES.p030} step={7} />
				<GTag x={P.cx} y={P.cy + P.w / 2 + 12} text="second counter checks the tally" at={K12.second + 6} size={22} anchor="middle" />
				<VCard y={y1} title="Validity" q="measures what was intended?" at={K12.validity} dim={prog(f, K12.reliability, 12)}
					items={[{t: v1[0], at: K12.validly, color: TEAL}, {t: v1[1], at: K12.arent, color: TERRA}]} />
				<VCard y={y2} title="Reliability" q="repeats agree?" at={K12.reliability} dim={prog(f, K12.accuracy, 12)} items={[{t: v2[0], at: K12.like}]} />
				<VCard y={y3} title="Accuracy" q="close to the true value?" at={K12.accuracy} items={[{t: v3[0], at: K12.grid}, {t: v3[1], at: K12.second + 24}]} />
				<WText x={110} y={1000} text="dose = lamp output at the plate × time; with a warmed-up, steady lamp, more time means more dose (lamps warm up and age)" size={24} maxW={1220} color={GREY_INK} weight={600} at={K12.output} lh={30} />
				<WText x={1000} y={y3 + vcardH(v3) + 40} text="NESA glossary: reliability, the extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results." size={19} maxW={850} color={GREY_INK} weight={500} at={K12.reliability + 20} lh={25} />
				<CornerTag at={-100} />
				{void K12.chance}{void K12.time}
			</Overlay>
		</>
	);
};

// ---------- 13. The risk assessment ----------
const K13 = cues(S('risk-assessment'), {risk: 'The risk assessment', uvc: 'UVC: only', never: 'never on with the door open', yeast: 'The yeast is a risk group', other: 'other microbes', sealed: 'sealed', sterilised: 'sterilised', ethanol: 'seventy percent ethanol', flammable: 'flammable', flames: 'away from flames'});
const RC = [{x: 100, w: 560}, {x: 670, w: 450}, {x: 1130, w: 720}];
const RS = 26, RL = 33;
type RRow = {cells: [string, string, string]; at: [number, number, number]; thumb?: 'cabinet' | 'bag'; hot?: number};
const rowH = (r: RRow) => Math.max(...r.cells.map((c, i) => wrapT(c, RS, RC[i].w - (i === 2 && r.thumb ? 150 : 36)).length)) * RL + 26;
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const rows: RRow[] = [
		{cells: ['UVC from the cabinet lamp (non-ionising radiation; not a GHS chemical hazard)', 'skin burns and eye injury (photokeratitis) after a short exposure', 'trained staff only; interlocked cabinet; lamp off before the door opens; students analyse data'], at: [K13.uvc, K13.uvc + 14, K13.never], thumb: 'cabinet'},
		{cells: ['yeast, Saccharomyces cerevisiae (risk group 1: unlikely to cause disease in healthy people)', 'low; possible irritation or allergy in sensitive people', 'aseptic technique; wash hands'], at: [K13.yeast, K13.yeast + 14, K13.yeast + 28]},
		{cells: ['contaminating microbes on grown plates (unknown, treat as potentially harmful)', 'infection or allergy if plates are opened', 'plates taped shut, counted through the lid, never opened; sterilised (autoclaved) before disposal'], at: [K13.other, K13.sealed, K13.sealed + 8], thumb: 'bag'},
		{cells: ['70 % ethanol for wiping benches (H225, flammable; many suppliers add H319, eye irritation)', 'fire; eye irritation', 'no flames nearby; small squeeze bottle; safety glasses if splashing'], at: [K13.ethanol, K13.flammable, K13.flames], hot: K13.flammable},
	];
	const Y0 = 262, HH = 56;
	let y = Y0 + HH;
	const ys = rows.map(r => { const y0 = y; y += rowH(r); return y0; });
	const yEnd = y;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={-100} />
				<g opacity={prog(f, K13.risk, 12)}>
					<rect x={90} y={Y0} width={1770} height={yEnd - Y0 + 60} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={90} y={Y0} width={1770} height={HH} rx={18} fill="#efe6d4" />
					{['Hazard', 'Harm', 'Control'].map((t, i) => <Sx key={t} x={RC[i].x + 18} y={Y0 + 38} text={t} size={28} color={i === 0 ? TERRA : INK} weight={800} at={-100} />)}
					{[1, 2].map(i => <line key={i} x1={RC[i].x - 5} y1={Y0 + 8} x2={RC[i].x - 5} y2={yEnd + 52} stroke={EDGE} strokeWidth={2} />)}
				</g>
				{rows.map((r, ri) => {
					const next = rows[ri + 1]?.at[0] ?? 1e9;
					const dm = prog(f, next, 12);
					const o = prog(f, r.at[0], 12);
					if (o <= 0.01) return null;
					const hot = r.hot !== undefined ? prog(f, r.hot, 10) : 0;
					return (
						<g key={ri} opacity={o * (1 - 0.5 * dm)}>
							<line x1={100} y1={ys[ri]} x2={1850} y2={ys[ri]} stroke={EDGE} strokeWidth={2} />
							{hot > 0.01 ? <rect x={RC[0].x + 6} y={ys[ri] + 6} width={RC[0].w - 16} height={rowH(r) - 12} rx={10} fill="none" stroke={TERRA} strokeWidth={3.5} opacity={hot} /> : null}
							{r.cells.map((c, ci) => wrapT(c, RS, RC[ci].w - (ci === 2 && r.thumb ? 150 : 36)).map((t, k) => <Sx key={ci + '-' + k} x={RC[ci].x + 18} y={ys[ri] + 34 + k * RL} text={t} size={RS} color={dm > 0.5 ? GREY_INK : ci === 0 ? TERRA : INK} weight={600} at={r.at[ci]} />))}
							{r.thumb ? <Pl p={r.thumb === 'cabinet' ? PLATES.cabinet : PLATES.bag} cx={1785} cy={ys[ri] + rowH(r) / 2} w={r.thumb === 'cabinet' ? 120 : 70} o={prog(f, r.at[2], 12)} dim={dm} /> : null}
						</g>
					);
				})}
				<g opacity={prog(f, K13.flames + 20, 12)}>
					<line x1={100} y1={yEnd} x2={1850} y2={yEnd} stroke={EDGE} strokeWidth={2} />
					<Sx x={RC[0].x + 18} y={yEnd + 38} text="incubator at 30 °C: low risk" size={RS} color={GREY_INK} weight={600} at={-100} />
				</g>
				<GTag x={100} y={yEnd + 86} text="follow your school's risk assessment, its microbiology procedure and each bottle's safety data sheet" at={K13.flames + 30} size={22} />
				{void K13.sterilised}{void GREEN}{void AMBER_INK}{void TEAL_SOFT}{void lerp}
			</Overlay>
		</>
	);
};
