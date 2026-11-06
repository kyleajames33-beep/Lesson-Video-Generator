// M6 B11 scenes 1 to 5: an approved CRISPR treatment and three bigger claims; the mechanism stage (a guide RNA pairs
// with its target, Cas9 cuts both strands, repair adds or loses bases, an off-target cut after the camera slides along
// the strand); the sickle cell treatment (the globin switch strip, the switch protein, stem cells edited in a dish,
// foetal haemoglobin back on, the sickle allele still there); its evidence and its catch (the 30-patient grid, the
// three-step strip, the price, sub-Saharan Africa on the map); the evidence ladder and the current directions.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Fade, Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {ScribbleRing, TickG, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {CAS_COL, Cas9Big, CutMark, Dna, GuideRna, RNA_COL, dnaX, ease} from './crispr';
import {
	AMBER, AMBER_INK, Arr, TEAL, Bone, CARD, Calendar, Cas9, EDGE, FoodExercise, GREYT, GREY_INK, GlobinStrip, Grid, Guide, HbDot, INK, INK_SOFT, LAD, Ladder,
	Magnifier, Nick, Particle, Pill, PLATES, Pl, PriceTag, SlimStrand, SsaFill, Strip, SwitchProtein, globinBlockX, GLOBIN, lerp, platePt, prog, rungSlot,
	rungX, smooth, vis,
} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {crispr: 'tool CRISPR', approved: 'approved', claims: 'the claims have grown', malaria: 'wipe out malaria', cure: 'cure every', crop: 'end crop failure', some: 'Some of these could happen', hype: 'some are hype', plaus: 'plausible'});
const CLAIMS = ['will wipe out malaria', 'cure every genetic disease', 'end crop failure'];
/** The three headline strips (also reused by scene 8 for the malaria claim). */
export const HeadStrip: React.FC<{x: number; y: number; text: string; o?: number; slide?: number; tilt?: number; q?: number; mosquito?: boolean; w?: number; lit?: number}> = ({x, y, text, o = 1, slide = 1, tilt = 0, q = 0, mosquito = false, w = 800, lit = 1}) => {
	if (o <= 0.01) return null;
	const dx = (1 - smooth(slide)) * 140;
	return (
		<g opacity={o * smooth(slide)} transform={`translate(${dx},0) rotate(${-1.6 * tilt} ${x + w / 2} ${y + 55})`}>
			<rect x={x} y={y} width={w} height={110} rx={14} fill={CARD} stroke={lit > 0.5 ? INK_SOFT : EDGE} strokeWidth={3} />
			<line x1={x + 30} y1={y + 26} x2={x + 180} y2={y + 26} stroke={GREYT} strokeWidth={5} strokeLinecap="round" />
			<Sx x={x + 30} y={y + 82} text={text} size={44} color={lit > 0.5 ? INK : GREY_INK} hand />
			{mosquito ? <Pl p={PLATES.mosquito} cx={x + w - 70} cy={y + 55} w={104} /> : null}
			{q > 0.01 ? <Sx x={x + w + 34} y={y + 78} text="?" size={64} color={GREY_INK} weight={800} anchor="middle" opacity={q} /> : null}
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dim = 1 - 0.55 * prog(f, K1.plaus, 14);
	return (
		<>
			<Heading text="Plausible, or hype?" at={K1.plaus} size={64} />
			<Overlay>
				<Pl p={PLATES.sickle} cx={480} cy={480} w={660} o={prog(f, 6, 16) * dim} />
				<Tg x={480} y={740} text="CRISPR: a gene-editing tool" at={K1.crispr} out={K1.approved + 30} anchor="middle" size={40} />
				<g opacity={dim}>
					<TickG x={250} y={760} at={K1.approved + 30} s={40} />
					<GTag x={290} y={735} text="approved late 2023" at={K1.approved + 34} size={30} />
				</g>
				{CLAIMS.map((t, i) => (
					<HeadStrip key={i} x={1000} y={300 + i * 165} text={t} mosquito={i === 0} slide={prog(f, [K1.malaria, K1.cure, K1.crop][i] - 8, 18)} tilt={prog(f, K1.some + i * 6, 14)} q={prog(f, K1.some + 14 + i * 6, 10)} o={dim} />
				))}
				{void K1.claims}{void K1.hype}
			</Overlay>
		</>
	);
};

// ---------- 2. How CRISPR finds and cuts ----------
const K2 = cues(S('crispr-cut'), {two: 'two parts', guide: 'guide RNA', pair: 'pair with the target', base: 'base pairing', cas: 'called Cas9', cuts: 'cuts both DNA strands', repairs: 'repairs', adds: 'adds or loses', sw: 'switch that stretch off', but: 'But the guide', similar: 'similar stretch', elsewhere: 'elsewhere', cut2: 'cut there too'});
// Quality fix (6 Nov 2026): the mechanism drawn large with lettered bases (./crispr). Top strand target GTCAGCTA at
// bases 7 to 14; a similar stretch GTGAGCTT at 23 to 30 (two mismatches). The cut falls between bases 11 and 12.
const SEQ = 'ATGCAAT' + 'GTCAGCTA' + 'CGATTGCA' + 'GTGAGCTT' + 'ACGGATCAGTC';
const T0 = 7, O0 = 23, NT = 8, CUT = 12, P2 = 74, X0 = 330, TY = 470, BY = 700, GUIDE = 'GTCAGCTA';
export const SceneCut: React.FC = () => {
	const f = useCurrentFrame();
	const lift1 = ease(f, K2.pair - 4, 20) * (1 - ease(f, K2.repairs + 4, 22));
	const gIn = ease(f, K2.pair + 8, 30);
	const guideO = prog(f, K2.guide - 6, 16) * (1 - prog(f, K2.repairs, 16));
	const zip1 = prog(f, K2.pair + 34, 30, x => x);
	const casO = prog(f, K2.cas - 2, 16) * (1 - prog(f, K2.repairs, 16));
	const split = vis(f, K2.cuts + 14, K2.repairs + 8, 14) * 34;
	const ins = ease(f, K2.repairs + 14, 24);
	const gap = split + ins * P2;
	const cam = -((O0 - T0) * P2 + P2) * ease(f, K2.similar - 4, 50);
	const lift2 = ease(f, K2.similar + 40, 20);
	const g2 = ease(f, K2.similar + 46, 28);
	const g2O = prog(f, K2.similar + 30, 14);
	const zip2 = prog(f, K2.similar + 76, 26, x => x);
	const cas2 = prog(f, K2.cut2 - 16, 14);
	const dna = {x0: X0, ty: TY, by: BY, pitch: P2, seq: SEQ, draw: prog(f, 2, 34, x => x), open: 190,
		sites: [{i0: T0, n: NT, lift: lift1}, {i0: O0, n: NT, lift: lift2}], cut: CUT, gap, ins, insBase: 'A',
		grey: {i0: T0, n: NT + 1, v: prog(f, K2.sw, 14)},
		hi: [{i0: T0, n: NT, v: vis(f, K2.guide, K2.cas, 12)}, {i0: O0, n: NT, v: vis(f, K2.similar + 30, K2.cut2, 12)}]};
	const gx1 = dnaX(dna, T0), gx2 = dnaX(dna, O0);
	const gy1 = lerp(TY - 255, TY, gIn), gdx1 = lerp(-240, 0, gIn);
	const gy2 = lerp(TY - 255, TY, g2), gdx2 = lerp(-240, 0, g2);
	const cutX = (dnaX(dna, CUT - 1) + dnaX({...dna, gap: split}, CUT)) / 2;
	const casCx = gx1 + (NT - 1) * P2 / 2, cas2Cx = gx2 + (NT - 1) * P2 / 2;
	const cut2X = (dnaX(dna, O0 + 4) + dnaX(dna, O0 + 5)) / 2;
	const helixO = prog(f, 4, 16) * (1 - 0.7 * prog(f, K2.guide, 16)) * (1 - prog(f, K2.similar - 10, 20));
	return (
		<>
			<Heading text="How CRISPR finds and cuts" at={4} size={60} />
			<Overlay>
				<Pl p={PLATES.helix} cx={150} cy={590} w={230} o={helixO} />
				<g transform={`translate(${cam},0)`}>
					<Dna {...dna} />
					<GuideRna x={gx1 + gdx1} y={gy1} pitch={P2} seq={GUIDE} len={TY + (BY - TY) / 2 - 5 - TY} o={guideO} zip={zip1} />
					<Sx x={gx1 + gdx1 + (NT + 2.4) * P2} y={gy1 - 60} text="guide RNA" size={46} color={RNA_COL} hand opacity={guideO} />
					<Sx x={gx1 + 3.5 * P2} y={TY + 4} text="target" size={40} color={AMBER_INK} hand anchor="middle" opacity={vis(f, K2.guide + 6, K2.pair, 10)} />
					<Cas9Big cx={casCx} cy={(TY + BY) / 2 - 70} w={NT * P2 + 260} h={600} o={casO} />
					<Sx x={casCx - (NT * P2 + 260) * 0.5 - 20} y={BY + 120} text="Cas9" size={60} color={CAS_COL} weight={800} anchor="end" opacity={casO} />
					<CutMark x={cutX} y={TY - 190 * lift1} o={vis(f, K2.cuts + 2, K2.repairs + 12, 8)} />
					<CutMark x={cutX} y={BY} o={vis(f, K2.cuts + 8, K2.repairs + 12, 8)} />
					<Sx x={dnaX(dna, CUT) - P2} y={BY + 110} text="+1 base" size={42} color={AMBER_INK} hand anchor="middle" opacity={ins * (1 - prog(f, K2.similar, 12))} />
					{/* the similar stretch elsewhere */}
					<GuideRna x={gx2 + gdx2} y={gy2} pitch={P2} seq={GUIDE} len={TY + (BY - TY) / 2 - 5 - TY} o={g2O} zip={zip2} bad={[2, 7]} />
					<Cas9Big cx={cas2Cx} cy={(TY + BY) / 2 - 70} w={NT * P2 + 260} h={600} o={cas2} />
					<Sx x={cas2Cx - (NT * P2 + 260) * 0.5 - 20} y={BY + 120} text="Cas9" size={60} color={CAS_COL} weight={800} anchor="end" opacity={cas2} />
					<CutMark x={cut2X} y={TY - 190 * lift2} o={prog(f, K2.cut2 + 4, 8)} dash />
					<CutMark x={cut2X} y={BY} o={prog(f, K2.cut2 + 10, 8)} dash />
					<Sx x={gx2 + 3.5 * P2} y={BY + 110} text="2 bases don't pair" size={40} color="#c4432f" hand anchor="middle" opacity={prog(f, K2.similar + 100, 12)} />
				</g>
				<Tg x={960} y={990} text="DNA: two strands of paired bases" at={20} out={K2.guide} anchor="middle" size={46} />
				<Tg x={960} y={990} text="guide RNA: its bases pair with the target (A–U, G–C)" at={K2.guide + 6} out={K2.cas} anchor="middle" size={46} />
				<Tg x={960} y={990} text="Cas9 enzyme: led there by the guide" at={K2.cas + 6} out={K2.cuts} anchor="middle" size={46} />
				<Tg x={960} y={990} text="Cas9 cuts both DNA strands" at={K2.cuts + 6} out={K2.repairs} anchor="middle" size={46} />
				<Tg x={960} y={990} text="repair adds or loses a few bases" at={K2.repairs + 6} out={K2.sw} anchor="middle" size={46} />
				<Tg x={960} y={990} text="that stretch is switched off" at={K2.sw + 4} out={K2.similar} anchor="middle" size={46} />
				<Tg x={960} y={990} text="a similar stretch elsewhere" at={K2.similar + 30} out={K2.cut2} anchor="middle" size={46} />
				<Tg x={960} y={990} text="off-target cut" at={K2.cut2 + 8} anchor="middle" size={46} />
				{void K2.two}{void K2.base}{void K2.adds}{void K2.but}{void K2.elsewhere}
			</Overlay>
		</>
	);
};

// ---------- 3. The approved use: sickle cell ----------
const K3 = cues(S('sickle-cell-use'), {sickle: 'cells sickle', foetal: 'foetal haemoglobin', switches: 'switches the foetal', stem: 'blood-forming stem cells', lab: 'in the lab', cut: 'cut the DNA', less: 'With less of it', again: 'foetal haemoglobin again', still: 'still there', keeps: 'keeps most red cells'});
const GX = 230, GY = 440, GS = 1.45;
export const SceneSickleUse: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K3.foetal, 30));
	const pcx = lerp(960, 1620, sh), pcy = lerp(520, 300, sh), pw = lerp(760, 460, sh);
	const plO = 1 - 0.5 * sh + 0.5 * prog(f, K3.keeps, 14);
	const sk = platePt(PLATES.sickle, pcx, pcy, pw, 1400, 1000);
	const nm = platePt(PLATES.sickle, 1620, 300, 460, 600, 1000);
	const [f0, f1] = globinBlockX(GX, GLOBIN.foetal);
	const fcx = (f0 + f1) / 2;
	const pin = smooth(prog(f, K3.switches, 26));
	const pout = smooth(prog(f, K3.less, 24));
	const px = lerp(lerp(900, fcx, pin), 860, pout), py = lerp(lerp(300, GY + 20, pin), 300, pout);
	const pO = prog(f, K3.switches - 4, 10) * (1 - pout);
	const off = prog(f, K3.switches + 22, 12) * (1 - prog(f, K3.less + 10, 12));
	const pulse = vis(f, K3.still, K3.still + 60, 8) * (0.5 + 0.5 * Math.sin((f - K3.still) / 4));
	return (
		<>
			<Heading text="The approved use: sickle cell" at={4} size={60} />
			<Overlay>
				<Pl p={PLATES.sickle} cx={pcx} cy={pcy} w={pw} o={prog(f, 4, 14) * plO} />
				<ScribbleRing cx={sk[0]} cy={sk[1]} rx={190} ry={190} at={K3.sickle} out={K3.foetal} seed={4} />
				<Sx x={sk[0]} y={760} text="sickle cells" size={34} color={GREY_INK} hand anchor="middle" at={K3.sickle + 6} out={K3.foetal} />
				<ScribbleRing cx={nm[0]} cy={nm[1]} rx={100} ry={96} at={K3.keeps + 8} color="#2f8a5b" seed={7} />
				{/* the globin switch strip, drawn 1.45 times larger */}
				<g transform={`translate(${GX},${GY}) scale(${GS}) translate(${-GX},${-GY})`}>
				<GlobinStrip x={GX} y={GY} draw={prog(f, K3.foetal, 30, x => x)} o={f >= K3.foetal ? 1 : 0} foetalOff={off} pulse={pulse} />
				<SwitchProtein x={px} y={py} o={pO} s={1.05} />
				<Sx x={fcx} y={GY + 100} text="BCL11A switch protein" size={30} color="#7a4a8c" weight={800} anchor="middle" opacity={vis(f, K3.switches + 20, K3.less, 10)} />
				{Array.from({length: 6}, (_, k) => {
					const t = smooth(prog(f, K3.again - 10 + k * 5, 28));
					return <HbDot key={k} x={lerp(fcx, 640 + (k % 3) * 46, t)} y={lerp(GY + 20, 300 + Math.floor(k / 3) * 46, t)} o={prog(f, K3.again - 10 + k * 5, 6)} r={11} />;
				})}
				</g>
				<Tg x={GX + GS * (fcx - GX)} y={GY + 170} text="foetal haemoglobin back on" at={K3.again + 10} anchor="middle" size={44} />
				{/* stem cells out, edited in a dish */}
				{[[330, 760], [450, 740], [390, 850]].map(([x, y], k) => <Pl key={k} p={PLATES.cell} cx={x} cy={y} w={128} o={prog(f, K3.stem + k * 5, 12)} />)}
				<Sx x={390} y={960} text="blood-forming stem cells" size={36} color={GREY_INK} hand anchor="middle" at={K3.stem + 14} />
				<Arr a={[540, 790]} b={[660, 790]} at={K3.lab} />
				<Pl p={PLATES.dish} cx={840} cy={790} w={330} o={prog(f, K3.lab, 12)} />
				<Tg x={840} y={960} text="edited outside the body" at={K3.lab + 8} out={K3.less} anchor="middle" size={40} />
				<Arr a={[1020, 790]} b={[1120, 790]} at={K3.cut} />
				<g transform="translate(1330,790) scale(1.6) translate(-1330,-790)">
					<Strip cx={1330} y={775} n={8} pitch={28} gap={30} o={prog(f, K3.cut, 12)} />
					<Nick x={1330} y={775} o={prog(f, K3.cut + 8, 8)} s={14} />
					<Nick x={1332} y={805} o={prog(f, K3.cut + 12, 8)} s={14} />
				</g>
				<Sx x={1330} y={920} text="cut: the switch's control region" size={36} color={GREY_INK} hand anchor="middle" at={K3.cut + 14} out={K3.less} />
				{void INK}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 4. The evidence, and the catch ----------
const K4 = cues(S('evidence-and-catch'), {n29: 'twenty-nine', look: 'look at what it takes', chemo: 'strong chemotherapy', weeks: 'weeks in hospital', usa: 'In the United States', million: 'two million dollars', africa: 'sub-Saharan Africa', almost: 'almost no patients', working: 'Working in a trial', everyone: 'everyone'});
export const SceneEvidence: React.FC = () => {
	const f = useCurrentFrame();
	const gridO = 1 - 0.65 * prog(f, K4.look, 14);
	const stripO = 1 - 0.7 * prog(f, K4.working, 14);
	const lit = [vis(f, K4.chemo, K4.weeks, 10), vis(f, K4.weeks, K4.weeks + 40, 10), vis(f, K4.weeks + 40, K4.million, 10)];
	const steps = [K4.chemo, K4.weeks, K4.weeks + 40];
	const mapO = prog(f, K4.africa - 4, 14) * (1 - 0.7 * prog(f, K4.working, 14));
	return (
		<>
			<Heading text="The evidence, and the catch" at={4} size={60} />
			<Overlay>
				<Grid x={190} y={290} n={30} cols={6} filled={29} at={K4.n29} gap={84} r={30} o={gridO} />
				<Fade at={K4.n29 + 30} out={K4.look + 4}>
					<Sx x={1000} y={520} text="29 of 30" size={150} color={TEAL} hand weight={800} />
					<Sx x={1000} y={600} text="patients: no severe pain crises" size={46} color={INK} hand />
					<Sx x={1000} y={660} text="for at least a year" size={46} color={INK} hand />
				</Fade>
				<g opacity={stripO} transform="translate(1270,420) scale(1.3) translate(-1180,-420)">
					<g opacity={Math.max(0.3 * prog(f, K4.look, 12), prog(f, steps[0], 12)) * (0.45 + 0.55 * lit[0])}>
						<Bone x={820} y={400} empty={prog(f, K4.chemo + 20, 40)} />
						<Sx x={820} y={505} text="chemotherapy" size={34} color={lit[0] > 0.5 ? INK : GREY_INK} hand anchor="middle" />
						<Sx x={820} y={548} text="clears the marrow" size={34} color={lit[0] > 0.5 ? INK : GREY_INK} hand anchor="middle" />
					</g>
					<Arr a={[945, 400]} b={[1070, 400]} at={K4.weeks - 6} o={0.7} />
					<g opacity={Math.max(0.3 * prog(f, K4.look, 12), prog(f, steps[1], 12)) * (0.45 + 0.55 * lit[1])}>
						<Calendar x={1190} y={400} fill={prog(f, K4.weeks + 6, 30)} />
						<Sx x={1190} y={505} text="weeks in hospital" size={34} color={lit[1] > 0.5 ? INK : GREY_INK} hand anchor="middle" />
					</g>
					<Arr a={[1300, 400]} b={[1430, 400]} at={steps[2] - 6} o={0.7} />
					<Pl p={PLATES.bag} cx={1540} cy={400} w={130} o={Math.max(0.3 * prog(f, K4.look, 12), prog(f, steps[2], 12)) * (0.55 + 0.45 * lit[2])} />
					<GTag x={1540} y={530} text="edited cells returned" at={steps[2] + 8} out={K4.million} size={28} anchor="middle" />
				</g>
				<g opacity={1 - 0.65 * prog(f, K4.africa, 12)}>
					<PriceTag x={160} y={790} text="over US$2 million" o={prog(f, K4.million - 4, 12)} />
				</g>
				<Pl p={PLATES.map} cx={1360} cy={760} w={560} o={mapO} />
				<g opacity={1 - 0.6 * prog(f, K4.working, 14)}><SsaFill cx={1360} cy={760} w={560} o={prog(f, K4.africa + 10, 14)} /></g>
				<Tg x={1360} y={975} text="most babies with the disease are born here" at={K4.africa + 16} out={K4.working} anchor="middle" size={34} />
				<Pill x={160} y={930} text="works in a trial" mark="tick" o={prog(f, K4.working, 12)} lit={1} size={36} />
				<Pill x={560} y={930} text="available to everyone" mark="cross" o={prog(f, K4.everyone - 20, 12)} lit={0} size={36} />
				{void K4.usa}{void K4.almost}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 5. How far has the evidence got? ----------
const K5 = cues(S('evidence-ladder'), {sort: 'sort each claim', idea: 'only an idea', lab: 'worked in the lab', animals: 'In animals', trials: 'human trials', approved: 'approved and in use', top: 'top rung', dirs: 'several directions', body: 'editing cells inside', crops: 'editing crops', screen: 'screening DNA', one: 'one gene causes', many: 'many genes'});
/** The red cells thumbnail on the top rung (scenes 5 to 9 and 11d). */
export const TopThumb: React.FC<{o?: number; t?: number; s?: number}> = ({o = 1, t = 1, s = 1}) => {
	const [sx, sy] = rungSlot(4);
	const k = smooth(t);
	return <Pl p={PLATES.sickle} cx={lerp(900, sx, k)} cy={lerp(520, sy, k)} w={lerp(260, 140, k) * s} o={o} />;
};
export const SceneLadder: React.FC = () => {
	const f = useCurrentFrame();
	const rungs = [K5.idea, K5.lab, K5.animals, K5.trials, K5.approved].map(a => prog(f, a, 14));
	const chipLit = 1 - prog(f, K5.one, 12);
	const chipO = 1 - 0.5 * prog(f, K5.one, 12);
	const DIRS = [{t: 'editing inside the body', at: K5.body}, {t: 'edited crops', at: K5.crops}, {t: 'DNA screening', at: K5.screen}];
	const oneO = vis(f, K5.one, K5.many, 12);
	const manyO = prog(f, K5.many, 12);
	return (
		<>
			<Heading text="How far has the evidence got?" at={4} size={60} />
			<Overlay>
				<Ladder rungs={rungs} lit={f >= K5.top ? 4 : -1} />
				<TopThumb t={prog(f, K5.top, 26)} o={prog(f, K5.top - 6, 10)} />
				{CLAIMS.map((t, i) => <Pill key={i} x={760} y={330 + i * 120} text={t + '?'} o={vis(f, 4 + i * 6, K5.dirs - 10, 12)} lit={1 - prog(f, K5.top, 14)} size={44} />)}
				<Sx x={760} y={290} text="claims to sort" size={36} color={GREY_INK} hand at={4} out={K5.dirs - 10} />
				<Sx x={700} y={300} text="current directions" size={36} color={GREY_INK} hand at={K5.dirs} />
				{DIRS.map((d, i) => {
					const y = 330 + i * 125;
					const o = prog(f, d.at, 12) * chipO;
					return (
						<g key={i}>
							{i === 0 ? <Particle x={740} y={y + 30} o={o} /> : null}
							{i === 1 ? <Pl p={PLATES.leaf} cx={740} cy={y + 30} w={86} o={o} /> : null}
							{i === 2 ? <g opacity={o}><Strip cx={738} y={y + 18} n={4} pitch={16} gap={22} /><Magnifier x={746} y={y + 30} r={20} /></g> : null}
							<Pill x={800} y={y} text={d.t} o={o} lit={chipLit} size={36} />
						</g>
					);
				})}
				<Pill x={800} y={705} text="synthetic biology" o={0.55 * prog(f, K5.screen + 20, 14) * chipO} lit={0} size={26} dash />
				{/* one gene against many genes */}
				<g opacity={prog(f, K5.one, 12)}>
					<SlimStrand x={760} y={830} n={26} pitch={30} gap={34} lineW={3.5}
						band={oneO > 0.01 ? {i0: 9, i1: 13, o: oneO, fill: '#fff3d9', color: AMBER} : undefined}
						rung={i => (oneO > 0.5 && i >= 9 && i <= 13 ? {color: AMBER, w: 6} : manyO > 0.01 && [2, 6, 10, 14, 17, 21, 24].includes(i) ? {color: '#6b6f74', w: 3 + 4 * manyO, o: 0.4 + 0.6 * manyO} : undefined)} />
				</g>
				<FoodExercise x={1640} y={846} o={manyO} />
				<Tg x={760} y={950} text="one gene: one stretch to edit" at={K5.one + 8} out={K5.many} size={38} />
				<Tg x={760} y={950} text="many genes + environment" at={K5.many + 8} size={38} />
				{void K5.sort}{void LAD}{void GREYT}
			</Overlay>
		</>
	);
};
