// G03 (Biology) scenes 1 to 4: the hook (a pooled cohort, 72 of 100 dots filling), a group proportion and not one
// person's future (counts, a mosaic of groups, a second group, every dot grey and one ringed), why the gene doesn't
// decide on its own (repair, the faulty and working copies, a row of cells where one loses its working copy) and
// probability isn't certainty (women with breast cancer, about 2 in 100 carriers).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, Chromo, DotArray, DrawPath, EDGE, Fade, GreyTag, HandText, Heading, INK, INK_SOFT, MistakeChip, Overlay, PLG, PLUMC, Panel, PlateB,
	QMark, Ring, S, SiteBadge, Stream, Sx, TEAL, TEALCH, Ticker, dotXY, filledCount, lerp, prog, rng, vis,
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
const G2 = {x: 200, y: 260, pitch: 50, r: 18};
const MOS = {x: 920, y: 250, tw: 170, th: 128, cols: 5, rows: 4};
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
	const mosO = vis(f, K2.thousands, K2.another);
	const ghost = prog(f, K2.thousands, 26) * (1 - prog(f, K2.another - 10, 10));
	const secondO = vis(f, K2.another, K2.which);
	return (
		<>
			<Heading text="A group proportion, not one person's future" at={K2.says} size={52} />
			<Overlay>
				<DotArray x={G2.x} y={G2.y} pitch={G2.pitch} r={G2.r} filled={F72} seed={7} fillP={prog(f, K2.about72, 40)} draw={prog(f, K2.picture, 30)} grey={grey} />
				<g opacity={prog(f, K2.about72, 12) * (1 - grey)}>
					<circle cx={G2.x} cy={G2.y + 9 * G2.pitch + 70} r={14} fill={INK} />
					<Ticker x={G2.x + 30} y={G2.y + 9 * G2.pitch + 82} to={F72} a={K2.about72} b={K2.about72 + 40} size={40} />
					<Sx x={G2.x + 90} y={G2.y + 9 * G2.pitch + 82} text="develop breast cancer by 80" size={32} color={INK} hand />
				</g>
				<g opacity={prog(f, K2.about28, 12) * (1 - grey)}>
					<circle cx={G2.x} cy={G2.y + 9 * G2.pitch + 124} r={14} fill={CARD} stroke={INK} strokeWidth={2.5} />
					<Ticker x={G2.x + 30} y={G2.y + 9 * G2.pitch + 136} to={100 - F72} a={K2.about28} b={K2.about28 + 30} size={40} />
					<Sx x={G2.x + 90} y={G2.y + 9 * G2.pitch + 136} text="don't" size={32} color={INK} hand />
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
								{t ? <DotArray x={MOS.x + c * (MOS.tw + 10) + 19} y={MOS.y + r * (MOS.th + 10) + 18} pitch={10.5} r={4} filled={k} seed={30 + t} /> : null}
							</g>
						);
					})}
					<Sx x={MOS.x} y={MOS.y + 4 * (MOS.th + 10) + 40} text="thousands of carriers: the proportion is measured well" size={30} color={AMBER_INK} hand />
					<GreyTag x={MOS.x} y={MOS.y + 4 * (MOS.th + 10) + 58} text="B13: big data sharpen the trend" at={K2.thousands + 20} size={22} />
				</g>
				{ghost > 0.01 ? (
					<g opacity={ghost} transform={`translate(${lerp(G2.x, MOS.x + 19, ghost)},${lerp(G2.y, MOS.y + 18, ghost)}) scale(${lerp(1, 10.5 / G2.pitch, ghost)})`}>
						<DotArray x={0} y={0} pitch={G2.pitch} r={G2.r} filled={F72} seed={7} />
					</g>
				) : null}
				{/* another large group */}
				<g opacity={secondO}>
					<Sx x={1040} y={240} text="a new group of 100 carriers" size={32} color={INK} weight={800} />
					<DotArray x={1060} y={290} pitch={G2.pitch} r={G2.r} filled={F71} seed={19} fillP={prog(f, K2.another + 10, 40)} draw={prog(f, K2.another, 24)} />
					<Sx x={1040} y={800} text={`${F71} of 100: close to the same proportion`} size={32} color={AMBER_INK} hand at={K2.close} />
				</g>
				{/* risk pattern */}
				<Fade at={K2.rp}>
					<Panel x={940} y={860} w={880} h={120} stroke={AMBER} sw={4} />
					<Sx x={970} y={914} text="risk pattern" size={44} color={INK} hand />
					<Sx x={970} y={958} text="how likely, across a group" size={28} color={INK_SOFT} weight={600} at={K2.trend} />
				</Fade>
				{/* one person */}
				<Ring cx={px} cy={py} rx={30} ry={30} at={K2.which + 8} />
				<QMark x={px} y={py - 32} size={48} o={prog(f, K2.which + 10, 10)} />
				<Sx x={1000} y={420} text="this person: filled or open? unknown" size={36} color={INK} hand at={K2.which + 14} />
				<g opacity={prog(f, K2.which + 14, 12)}><DrawPath d={`M${990},${410} C${860},${400} ${780},${py} ${px + 34},${py}`} at={K2.which + 14} dur={14} color={AMBER_INK} width={3} /></g>
				<Sx x={1000} y={490} text="about 72% chance by 80" size={44} color={AMBER_INK} hand at={K2.prob} />
				<Sx x={1000} y={540} text="a probability, not a forecast" size={30} color={INK_SOFT} weight={600} at={K2.prob + 10} />
			</Overlay>
		</>
	);
};

// ---------- 3. Why the gene doesn't decide on its own ----------
const K3 = cues(S('why-not-decided'), {
	why: "why can't the gene decide", makes: 'BRCA1 makes a protein', repair: 'repair damaged DNA', inherits: 'A carrier inherits one faulty copy', other: 'her other copy still works',
	starts: 'Cancer usually starts only', loses: 'a cell also loses that working copy', chance: 'chance damage', genes: 'other genes', factors: 'other factors, like hormones and age',
	raises: 'the variant raises the risk', fix: "It doesn't fix the outcome",
});
const LOST = 13;
export const SceneWhyG03: React.FC = () => {
	const f = useCurrentFrame();
	const mend = prog(f, K3.repair + 10, 30);
	const lose = prog(f, K3.loses, 24);
	return (
		<>
			<Heading text="Why the gene doesn't decide on its own" at={K3.why} size={52} />
			<Overlay>
				{/* repair */}
				<g opacity={prog(f, K3.makes, 12)}>
					<Panel x={100} y={200} w={760} h={250} />
					{[0, 1].map(k => (
						<g key={k}>
							<line x1={150} y1={300 + k * 50} x2={lerp(380, 450, k ? 1 : mend)} y2={300 + k * 50} stroke="#6e2a63" strokeWidth={9} strokeLinecap="round" />
							<line x1={lerp(520, 450, k ? 1 : mend)} y1={300 + k * 50} x2={780} y2={300 + k * 50} stroke="#6e2a63" strokeWidth={9} strokeLinecap="round" />
						</g>
					))}
					{Array.from({length: 13}, (_, i) => <line key={i} x1={170 + i * 48} y1={306} x2={170 + i * 48} y2={344} stroke="#b88aae" strokeWidth={4} opacity={i === 6 || i === 7 ? mend : 1} />)}
					<ellipse cx={lerp(640, 450, prog(f, K3.repair, 20))} cy={262} rx={58} ry={38} fill={AMBER} fillOpacity={0.85} stroke={AMBER_INK} strokeWidth={3} />
					<Sx x={130} y={420} text="BRCA1 protein: DNA repair" size={32} color={AMBER_INK} hand at={K3.repair} />
				</g>
				{/* the pair */}
				<g opacity={prog(f, K3.inherits, 12)}>
					<Panel x={940} y={200} w={880} h={250} />
					<Chromo x={1060} y={220} len={210} w={34} color={PLUMC} locus={0.3} locusState="faulty" />
					<Chromo x={1140} y={220} len={210} w={34} color={TEALCH} locus={0.3} locusState="working" glow={prog(f, K3.other, 12)} />
					<Sx x={1200} y={270} text="faulty copy, inherited" size={30} color={INK} hand at={K3.inherits + 8} />
					<Sx x={1200} y={320} text="working copy" size={30} color={AMBER_INK} hand at={K3.other} />
					<Sx x={1200} y={380} text="inherited like a dominant trait;" size={24} color={INK_SOFT} weight={600} at={K3.other + 20} />
					<Sx x={1200} y={412} text="in a cell, both copies must fail" size={24} color={INK_SOFT} weight={600} at={K3.other + 26} />
				</g>
				{/* the cell row */}
				{Array.from({length: 20}, (_, i) => {
					const x = 140 + (i % 10) * 170, y = 585 + Math.floor(i / 10) * 145;
					const o = prog(f, K3.starts + i * 1.5, 10);
					const lost = i === LOST;
					return (
						<g key={i} opacity={o}>
							<ellipse cx={x} cy={y} rx={66} ry={54} fill={lost ? lerp(0, 1, lose) > 0.5 ? '#6b5f55' : '#f6e7d3' : '#f6e7d3'} stroke={INK_SOFT} strokeWidth={2.5} />
							<Chromo x={x - 14} y={y - 34} len={66} w={14} color={PLUMC} locus={0.3} locusState="faulty" />
							<Chromo x={x + 14} y={y - 34} len={66} w={14} color={TEALCH} locus={0.3} locusState={lost && lose > 0.5 ? 'lost' : 'working'} />
						</g>
					);
				})}
				<Ring cx={140 + (LOST % 10) * 170} cy={585 + Math.floor(LOST / 10) * 145} rx={84} ry={70} at={K3.loses + 18} />
				<Sx x={140 + (LOST % 10) * 170 + 100} y={822} text="both copies lost: this cell can become a cancer" size={30} color={AMBER_INK} hand at={K3.loses + 20} />
				<Sx x={100} y={500} text="chance" size={32} color={INK} hand at={K3.chance} />
				<Sx x={260} y={500} text="other genes" size={32} color={INK} hand at={K3.genes} />
				<Sx x={480} y={500} text="other factors: hormones, age" size={32} color={INK} hand at={K3.factors} />
				<GreyTag x={1000} y={462} text="B7: environment affects phenotype" at={K3.factors + 10} size={22} />
				<Fade at={K3.raises}>
					<Panel x={420} y={890} w={1080} h={100} stroke={AMBER} sw={4} />
					<Sx x={960} y={956} text="variant: raises risk, doesn't fix the outcome" size={42} color={INK} hand anchor="middle" />
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
export const SceneNotCertainG03: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Probability isn't certainty" at={K4.higher} size={56} />
			<Overlay>
				<MistakeChip x={120} y={210} text="carrier, so she will get cancer" at={K4.higher + 10} cross={K4.certain + 6} size={32} />
				<Sx x={200} y={350} text="women with breast cancer" size={32} color={INK} weight={800} at={K4.most} />
				<DotArray x={220} y={400} pitch={46} r={16} filled={100} seed={2} fillColor="#d9a7a0" draw={prog(f, K4.most, 30)} edge={f >= K4.rare ? EDGE2 : []} />
				{EDGE2.map((i, k) => { const [x, y] = dotXY(220, 400, i, 46); return <Ring key={i} cx={x} cy={y} rx={26} ry={26} at={K4.rare + k * 5} />; })}
				<Sx x={720} y={500} text="BRCA carriers: about 2 in 100" size={36} color={AMBER_INK} hand at={K4.rare + 10} />
				<Sx x={720} y={560} text="the rest: many other causes" size={32} color={INK} hand at={K4.many} />
				<GreyTag x={720} y={590} text="population studies" at={K4.rare + 20} size={22} />
				<MistakeChip x={1200} y={210} text="no variant, so no cancer" at={K4.neg} cross={K4.guarantee + 4} size={32} />
				<Sx x={1220} y={320} text="testing negative isn't a guarantee" size={30} color={AMBER_INK} hand at={K4.guarantee + 10} />
			</Overlay>
			<div style={{position: 'absolute', left: 720, top: 760}}><HandText text="Genetic risk is not genetic destiny." at={K4.destiny} size={66} cps={28} color={AMBER_INK} /></div>
		</>
	);
};
void PLUMC; void TEALCH; void QMark; void INK_SOFT;
