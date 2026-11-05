// G03 (Biology) scenes 1 to 4: the hook (a pooled cohort, 72 of 100 dots filling), a group proportion and not one
// person's future (counts, a mosaic of groups, a second group, every dot grey and one ringed), why the gene doesn't
// decide on its own (repair, the faulty and working copies, a row of cells where one loses its working copy) and
// probability isn't certainty (women with breast cancer, about 2 in 100 carriers).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Bead, PAIR_LOCUS, PLB, platePt} from './big';
import {
	AMBER, AMBER_INK, CARD, Chromo, DotArray, DrawPath, EDGE, Fade, GreyTag, HandText, Heading, INK, INK_SOFT, MistakeChip, Overlay, PLG, PLUMC, Panel, PlateB,
	QMark, Ring, S, SiteBadge, Stream, Sx, TEAL, TEALCH, Tick, Ticker, dotXY, filledCount, lerp, prog, rng, vis,
} from './shared';

// ---------- the cohort figure ----------
/** Kuchenbaecker et al. 2017 (JAMA 317:2402): BRCA1 carriers, cumulative breast cancer risk to age 80 about 72%. */
export const BRCA1 = {risk80: 0.72, cohort: 9856};
export const F72 = filledCount(BRCA1.risk80);
if (F72 !== 72) throw new Error('G03 check: 72 of 100');

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {
	collab: 'A collaborative study from several countries', followed: 'followed nearly 10,000 women', brca: 'a gene called BRCA1', among: 'Among the BRCA1 carriers',
	about72: 'about 72 in every 100', est: 'were estimated to get', kind: "It's exactly the kind", does: 'So does carrying that variant', will: 'will get breast cancer',
	predict: 'can population genetics predict',
});
const SITES = ['UK', 'Netherlands', 'France', 'Australia', 'North America'];
export const DA = {x: 1260, y: 290, pitch: 52, r: 19};
export const SceneHookG03: React.FC = () => {
	const f = useCurrentFrame();
	const open = dotXY(DA.x, DA.y, 3, DA.pitch), full = dotXY(DA.x, DA.y, 66, DA.pitch);
	return (
		<>
			<Heading text="Risk is not destiny" at={K1.predict} size={60} />
			<Overlay>
				<PlateB p={PLG.rack} cx={220} cy={300} w={230} o={prog(f, 0, 14)} />
				{SITES.map((s, i) => (
					<g key={s}>
						<SiteBadge x={450 + i * 140} y={270} r={30} o={prog(f, K1.collab + i * 5, 12)} label={s} size={20} />
						<Stream a={[450 + i * 140, 302]} b={[730, 470]} at={K1.collab + 10 + i * 5} n={3} tubes />
					</g>
				))}
				<GreyTag x={420} y={360} text="and other countries; BRCA cohort consortium" at={K1.collab + 30} size={22} />
				<rect x={420} y={470} width={620} height={40} rx={12} fill={CARD} stroke={TEAL} strokeWidth={3} opacity={prog(f, K1.followed, 12)} />
				<rect x={422} y={472} width={616 * prog(f, K1.followed, 60)} height={36} rx={11} fill={TEAL} opacity={0.35} />
				<Sx x={420} y={566} text="nearly" size={34} color={INK} hand at={K1.followed} />
				<Ticker x={530} y={566} to={10000} a={K1.followed} b={K1.followed + 50} size={42} />
				<Sx x={720} y={566} text="women who carry the variant" size={34} color={INK} hand at={K1.followed + 10} />
				{/* the gene */}
				<g opacity={prog(f, K1.brca, 12)}>
					<Chromo x={430} y={680} len={600} w={40} color={PLUMC} vertical={false} locus={0.72} locusState="working" />
					<DrawPath d={`M${430 + 600 * 0.72},${650} L${430 + 600 * 0.72},${620}`} at={K1.brca + 6} dur={8} color={AMBER_INK} width={3} />
					<Sx x={430 + 600 * 0.72} y={610} text="BRCA1: a gene" size={30} color={AMBER_INK} hand anchor="middle" at={K1.brca + 8} />
					<Sx x={430} y={760} text="carriers inherit a harmful version (BRCA1 or BRCA2)" size={28} color={INK_SOFT} weight={600} at={K1.brca + 20} />
				</g>
				{/* 72 in 100 */}
				<Sx x={DA.x - 20} y={DA.y - 50} text="100 BRCA1 carriers" size={34} color={INK} weight={800} at={K1.among} />
				<DotArray x={DA.x} y={DA.y} pitch={DA.pitch} r={DA.r} filled={F72} seed={7} fillP={prog(f, K1.about72, 70)} draw={prog(f, K1.among, 30)} />
				<Sx x={DA.x - 20} y={DA.y + 9 * DA.pitch + 70} text={`about ${F72} in 100: breast cancer by age 80`} size={32} color={AMBER_INK} hand at={K1.est} />
				<Sx x={DA.x - 20} y={DA.y + 9 * DA.pitch + 110} text="estimated" size={28} color={INK_SOFT} weight={600} at={K1.est + 10} />
				<GreyTag x={DA.x + 150} y={DA.y + 9 * DA.pitch + 86} text="Kuchenbaecker et al. 2017" at={K1.est + 20} size={22} />
				<QMark x={open[0]} y={open[1] - 26} size={44} o={prog(f, K1.will, 10)} />
				<QMark x={full[0]} y={full[1] - 26} size={44} o={prog(f, K1.will + 6, 10)} />
				<Ring cx={open[0]} cy={open[1]} rx={30} ry={30} at={K1.will} />
				<Ring cx={full[0]} cy={full[1]} rx={30} ry={30} at={K1.will + 6} seed={5} />
			</Overlay>
		</>
	);
};

// ---------- 2. A group proportion, not one person's future ----------
const K2 = cues(S('group-not-person'), {
	says: 'what that number really says', picture: 'Picture 100 carriers', dots: '100 dots', about72: 'About 72 would develop', about28: 'about 28', predicts: 'The study predicts that proportion',
	thousands: 'measured across thousands', another: 'Follow another large group', close: 'close to the same proportion', rp: "That's a risk pattern", trend: 'a trend in how likely',
	which: 'which dots are which', one: 'For one woman', prob: 'a probability, not a forecast',
});
// Quality fix: the array is 1.3 times larger and the counts sit beside it at 96 px; the right half carries the
// counts, then the mosaic, then the second group, then the one-person question.
const G2 = {x: 170, y: 250, pitch: 64, r: 24};
const MOS = {x: 860, y: 230, tw: 178, th: 134, cols: 5, rows: 4};
/** A second large group: binomial draw of 100 at p = 0.72 (seeded); kept close to 72. */
export const F71 = (() => {
	const r = rng(23);
	let k = 0;
	for (let i = 0; i < 100; i++) if (r() < BRCA1.risk80) k++;
	return k;
})();
if (Math.abs(F71 - 72) > 4) throw new Error('G03 check: second group should be close to 72, got ' + F71);
export const SceneGroupG03: React.FC = () => {
	const f = useCurrentFrame();
	const grey = prog(f, K2.which, 10);
	const pick = 44;
	const [px, py] = dotXY(G2.x, G2.y, pick, G2.pitch);
	const countsO = vis(f, K2.about72, K2.thousands);
	const mosO = vis(f, K2.thousands, K2.another);
	const ghost = prog(f, K2.thousands, 26) * (1 - prog(f, K2.another - 10, 10));
	const secondO = vis(f, K2.another, K2.which);
	return (
		<>
			<Heading text="A group proportion, not one person's future" at={K2.says} size={52} />
			<Overlay>
				<Sx x={G2.x - 24} y={G2.y - 50} text="100 BRCA1 carriers" size={40} color={INK} weight={800} at={K2.picture} />
				<DotArray x={G2.x} y={G2.y} pitch={G2.pitch} r={G2.r} filled={F72} seed={7} fillP={prog(f, K2.about72, 40)} draw={prog(f, K2.picture, 30)} grey={grey} />
				{/* the counts, large, beside the array */}
				<g opacity={countsO}>
					<circle cx={900} cy={370} r={30} fill={INK} />
					<Ticker x={950} y={398} to={F72} a={K2.about72} b={K2.about72 + 40} size={96} />
					<Sx x={1090} y={392} text="develop breast cancer by 80" size={50} color={INK} hand />
					<g opacity={prog(f, K2.about28, 12)}>
						<circle cx={900} cy={560} r={30} fill={CARD} stroke={INK} strokeWidth={3} />
						<Ticker x={950} y={588} to={100 - F72} a={K2.about28} b={K2.about28 + 30} size={96} />
						<Sx x={1090} y={582} text="don't" size={50} color={INK} hand />
					</g>
					<Sx x={880} y={760} text="the study predicts this proportion well" size={44} color={AMBER_INK} hand at={K2.predicts} />
				</g>
				{/* thousands: one tile of a mosaic */}
				<g opacity={mosO}>
					{Array.from({length: MOS.cols * MOS.rows}, (_, t) => {
						const c = t % MOS.cols, r = Math.floor(t / MOS.cols);
						const o = prog(f, K2.thousands + 6 + t * 1.5, 8);
						const k = filledCount(BRCA1.risk80 + ((t * 37) % 7 - 3) / 100);
						return (
							<g key={t} opacity={o}>
								<rect x={MOS.x + c * (MOS.tw + 10)} y={MOS.y + r * (MOS.th + 10)} width={MOS.tw} height={MOS.th} rx={10} fill={CARD} stroke={t === 0 ? AMBER : EDGE} strokeWidth={t === 0 ? 4 : 2} />
								{t ? <DotArray x={MOS.x + c * (MOS.tw + 10) + 22} y={MOS.y + r * (MOS.th + 10) + 20} pitch={10.6} r={4.2} filled={k} seed={30 + t} /> : null}
							</g>
						);
					})}
					<Sx x={MOS.x} y={MOS.y + 4 * (MOS.th + 10) + 50} text="thousands of carriers: the proportion is measured well" size={40} color={AMBER_INK} hand />
				</g>
				{ghost > 0.01 ? (
					<g opacity={ghost} transform={`translate(${lerp(G2.x, MOS.x + 22, ghost)},${lerp(G2.y, MOS.y + 20, ghost)}) scale(${lerp(1, 10.6 / G2.pitch, ghost)})`}>
						<DotArray x={0} y={0} pitch={G2.pitch} r={G2.r} filled={F72} seed={7} />
					</g>
				) : null}
				{/* another large group */}
				<g opacity={secondO}>
					<Sx x={1020} y={240} text="a new group of 100 carriers" size={40} color={INK} weight={800} />
					<DotArray x={1050} y={300} pitch={54} r={20} filled={F71} seed={19} fillP={prog(f, K2.another + 10, 40)} draw={prog(f, K2.another, 24)} />
					<Sx x={1020} y={850} text={`${F71} of 100: close to the same proportion`} size={42} color={AMBER_INK} hand at={K2.close} />
				</g>
				{/* risk pattern */}
				<Fade at={K2.rp} out={K2.which}>
					<Panel x={860} y={900} w={960} h={130} stroke={AMBER} sw={4} />
					<Sx x={890} y={962} text="risk pattern" size={56} color={INK} hand />
					<Sx x={1230} y={962} text="how likely, across a group" size={40} color={INK_SOFT} hand at={K2.trend} />
				</Fade>
				{/* one person */}
				<Ring cx={px} cy={py} rx={38} ry={38} at={K2.which + 8} />
				<QMark x={px} y={py - 40} size={60} o={prog(f, K2.which + 10, 10)} />
				<Sx x={900} y={420} text="this person: filled or open?" size={52} color={INK} hand at={K2.which + 14} />
				<Sx x={900} y={480} text="nobody can say in advance" size={40} color={INK_SOFT} hand at={K2.which + 20} />
				<g opacity={prog(f, K2.which + 14, 12)}><DrawPath d={`M${890},${410} C${840},${400} ${800},${py} ${px + 44},${py}`} at={K2.which + 14} dur={14} color={AMBER_INK} width={4} /></g>
				<Sx x={900} y={620} text="about 72% chance by 80" size={72} color={AMBER_INK} hand at={K2.prob} />
				<Panel x={880} y={680} w={720} h={100} stroke={AMBER} sw={4} o={prog(f, K2.prob + 10, 12)} />
				<Sx x={910} y={746} text="a probability, not a forecast" size={50} color={INK} hand at={K2.prob + 10} />
			</Overlay>
		</>
	);
};

// ---------- 3. Why the gene doesn't decide on its own ----------
const K3 = cues(S('why-not-decided'), {
	why: "why can't the gene decide", makes: 'BRCA1 makes a protein', repair: 'repair damaged DNA', damaged: 'damaged DNA', inherits: 'A carrier inherits one faulty copy', other: 'her other copy still works',
	starts: 'Cancer usually starts only', loses: 'a cell also loses that working copy', chance: 'chance damage', genes: 'other genes', factors: 'other factors, like hormones and age',
	raises: 'the variant raises the risk', fix: "It doesn't fix the outcome",
});
// Quality fix: the painted helix is repaired by a painted protein (the break closes), brief 88's painted homologous
// pair carries the faulty and working beads beside its lower band, and a row of painted body cells shows one cell
// losing its working copy. Beads sit beside or below the paint, never on it.
const HX = {cx: 470, cy: 360, len: 780};
const PR = {cx: 1180, cy: 384, w: 450};
const CELLS = 7, CW = 172, CY = 790, LOST = 4;
const cellX = (i: number) => 190 + i * 255;
export const SceneWhyG03: React.FC = () => {
	const f = useCurrentFrame();
	const hk = HX.len / (PLB.helix.box[3] - PLB.helix.box[1]);
	const helixW = (PLB.helix.box[2] - PLB.helix.box[0]) * hk;
	const dmg = prog(f, K3.damaged, 10);
	const dock = prog(f, K3.repair + 4, 22);
	const mend = prog(f, K3.repair + 34, 16);
	const lose = prog(f, K3.loses + 10, 20);
	const [fx, fy] = platePt(PLB.pair, PR.cx, PR.cy, PR.w, PAIR_LOCUS.pinkOut, PAIR_LOCUS.y);
	const [wx, wy] = platePt(PLB.pair, PR.cx, PR.cy, PR.w, PAIR_LOCUS.tealOut, PAIR_LOCUS.y);
	const factors: [number, string][] = [[K3.chance, 'chance damage'], [K3.genes, 'other genes'], [K3.factors, 'hormones and age']];
	return (
		<>
			<Heading text="Why the gene doesn't decide on its own" at={K3.why} size={52} />
			<Overlay>
				{/* repair: the painted helix, a break, the painted protein closing it */}
				<g opacity={prog(f, 0, 14)}>
					<Panel x={70} y={170} w={820} h={400} />
					<PlateB p={PLB.helix} cx={HX.cx} cy={HX.cy} w={helixW} rot={-90} />
				</g>
				{dmg * (1 - mend) > 0.01 ? (
					<g opacity={dmg * (1 - mend)}>
						<circle cx={HX.cx} cy={HX.cy} r={80} fill="#c0392b" opacity={0.12} />
						<path d={`M${HX.cx - 14},${HX.cy - 100} l26,25 l-26,25 l26,25 l-26,25 l26,25 l-26,25 l26,25 l-26,25`} fill="none" stroke="#b03a2e" strokeWidth={8} strokeLinejoin="round" />
						<Sx x={HX.cx + 60} y={HX.cy + 150} text="damage" size={40} color="#b03a2e" hand at={K3.damaged} />
					</g>
				) : null}
				<PlateB p={PLB.enz} cx={lerp(780, HX.cx + 10, dock)} cy={lerp(250, HX.cy - 60, dock)} w={170} o={prog(f, K3.makes, 12)} />
				<Sx x={100} y={545} text="BRCA1 protein: repairs damaged DNA" size={40} color={AMBER_INK} hand at={K3.makes + 10} />
				{mend > 0.5 ? <Tick x={HX.cx + 220} y={HX.cy + 110} at={K3.repair + 40} s={44} color={TEAL} /> : null}
				{/* the painted homologous pair with the faulty and working copies */}
				<g opacity={0.35 + 0.65 * prog(f, K3.inherits - 20, 14)}>
					<Panel x={940} y={170} w={900} h={430} />
					<PlateB p={PLB.pair} cx={PR.cx} cy={PR.cy} w={PR.w} />
				</g>
				<Bead x={fx} y={fy} r={30} kind="faulty" o={prog(f, K3.inherits + 10, 10)} />
				<Bead x={wx} y={wy} r={30} kind="working" o={prog(f, K3.other, 10)} glow={prog(f, K3.other + 10, 12) * (1 - prog(f, K3.starts, 12))} />
				<Sx x={1450} y={300} text="faulty copy," size={44} color={INK} hand at={K3.inherits + 10} />
				<Sx x={1450} y={350} text="inherited" size={44} color={INK} hand at={K3.inherits + 14} />
				<Sx x={1450} y={460} text="working copy" size={48} color={AMBER_INK} hand at={K3.other} />
				<Sx x={1450} y={510} text="still repairs DNA" size={36} color={INK_SOFT} hand at={K3.other + 10} />
				{/* the factors */}
				{factors.map(([at, t], i) => (
					<g key={t} opacity={prog(f, at, 12)}>
						<rect x={240 + i * 480} y={616} width={420} height={66} rx={33} fill="#fff3d9" stroke={AMBER} strokeWidth={3} />
						<Sx x={450 + i * 480} y={662} text={t} size={42} color={AMBER_INK} hand anchor="middle" />
					</g>
				))}
				{/* body cells: each carries one faulty and one working copy; one loses its working copy */}
				{Array.from({length: CELLS}, (_, i) => {
					const o = 0.3 + 0.7 * prog(f, K3.starts + i * 3, 10);
					const bo = prog(f, K3.inherits + 24 + i * 2, 10);
					const lost = i === LOST;
					const x = cellX(i);
					return (
						<g key={i} opacity={o}>
							<PlateB p={PLB.cell} cx={x} cy={CY} w={CW} filter={lost && lose > 0.5 ? 'sepia(0.6) saturate(1.6) hue-rotate(-20deg)' : undefined} />
							<Bead x={x - 22} y={CY + CW * 0.5 + 30} r={17} kind="faulty" o={bo} />
							<Bead x={x + 22} y={CY + CW * 0.5 + 30} r={17} kind={lost && lose > 0.5 ? 'lost' : 'working'} o={bo} />
						</g>
					);
				})}
				<Ring cx={cellX(LOST)} cy={CY} rx={108} ry={106} at={K3.loses + 20} />
				<Fade at={K3.loses + 22} out={K3.chance - 6}>
					<Panel x={cellX(LOST) - 330} y={600} w={660} h={84} stroke={AMBER} sw={3} />
					<Sx x={cellX(LOST)} y={656} text="working copy lost: this cell can become a cancer" size={36} color={AMBER_INK} hand anchor="middle" />
				</Fade>
				<Fade at={K3.raises}>
					<Panel x={330} y={958} w={1260} h={100} stroke={AMBER} sw={5} />
					<Sx x={960} y={1026} text="The variant raises the risk. It doesn't fix the outcome." size={46} color={INK} hand anchor="middle" />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 4. Probability isn't certainty ----------
const K4 = cues(S('not-certain'), {
	higher: 'a higher probability', certain: "isn't a certain outcome", other: 'works the other way too', most: 'Most women who get breast cancer', rare: 'these variants are rare',
	many: 'many other causes', neg: 'testing negative for a BRCA variant', guarantee: "isn't a guarantee either", destiny: 'Genetic risk is not genetic destiny',
});
/** About 2 in 100 women with breast cancer carry a BRCA1 or BRCA2 variant (population studies; illustrative round figure). */
const EDGE2 = [23, 67];
// Quality fix: two large dot arrays side by side (carriers from the start, then women with breast cancer), each with
// its crossed overclaim above it.
const LA = {x: 170, y: 330, pitch: 50, r: 19};
const RA = {x: 1050, y: 330, pitch: 50, r: 19};
export const SceneNotCertainG03: React.FC = () => {
	const f = useCurrentFrame();
	const leftDim = 1 - 0.45 * prog(f, K4.most - 10, 14);
	const slide = prog(f, K4.other, 22);
	const sx = lerp(400, 0, slide * slide * (3 - 2 * slide));
	return (
		<>
			<Heading text="Probability isn't certainty" at={K4.higher} size={56} />
			<Overlay>
				<g transform={`translate(${sx},0)`}>
				<MistakeChip x={120} y={176} text="carrier, so she will get cancer" at={K4.higher + 4} cross={K4.certain + 6} size={36} />
				<g opacity={leftDim}>
					<Sx x={LA.x - 20} y={LA.y - 40} text="100 BRCA1 carriers" size={36} color={INK} weight={800} at={0} />
					<DotArray x={LA.x} y={LA.y} pitch={LA.pitch} r={LA.r} filled={F72} seed={7} draw={prog(f, 0, 24)} />
					<Sx x={LA.x - 20} y={LA.y + 9 * LA.pitch + 80} text="28 in 100 don't develop it" size={46} color={AMBER_INK} hand at={K4.certain + 10} />
				</g>
				</g>
				<MistakeChip x={1000} y={176} text="no variant, so no cancer" at={K4.neg} cross={K4.guarantee + 4} size={36} />
				<Sx x={RA.x - 20} y={RA.y - 40} text="100 women with breast cancer" size={36} color={INK} weight={800} at={K4.most} />
				<DotArray x={RA.x} y={RA.y} pitch={RA.pitch} r={RA.r} filled={100} seed={2} fillColor="#d9a7a0" fillP={prog(f, K4.most, 30)} draw={prog(f, K4.other + 10, 30)} edge={f >= K4.rare ? EDGE2 : []} />
				{EDGE2.map((i, k) => { const [x, y] = dotXY(RA.x, RA.y, i, RA.pitch); return <Ring key={i} cx={x} cy={y} rx={30} ry={30} at={K4.rare + k * 5} />; })}
				<Sx x={RA.x - 20} y={RA.y + 9 * RA.pitch + 80} text="BRCA carriers: about 2 in 100" size={46} color={AMBER_INK} hand at={K4.rare + 10} />
				<Sx x={RA.x - 20} y={RA.y + 9 * RA.pitch + 130} text="the rest: many other causes" size={40} color={INK} hand at={K4.many} />
			</Overlay>
			<div style={{position: 'absolute', left: 120, top: 952}}><HandText text="Genetic risk is not genetic destiny." at={K4.destiny} size={72} cps={28} color={AMBER_INK} /></div>
		</>
	);
};
void PLUMC; void TEALCH; void QMark; void INK_SOFT; void Chromo; void GreyTag; void Stream; void SiteBadge; void AMBER; void Panel; void Tick; void TEAL;
