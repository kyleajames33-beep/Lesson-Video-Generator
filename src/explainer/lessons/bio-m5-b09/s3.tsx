// B9 scenes 8 to 10: a recessive pedigree (P1, built generation by generation, a hidden allele travelling down), a
// dominant pedigree (P2's clues, then the decisive inset trio), and the two giveaways with a model answer that names
// the people. Every pedigree is checked by fitsMode in shared.tsx.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AaAa_R, Aaaa_D, AlleleChip, DrawPath, Fade, GREY_INK, GreyTag, HandText, Heading, INK, INK_SOFT, INSET, MistakeChip, ModelLine, Overlay,
	P1, P2, Pedigree, Punnett, S, SpanBracket, Sx, Tick, Trio, clamp01, fadeV, lerp, pedXY, prog,
} from './shared';
import type {PLay} from './shared';

export const ASSUME = 'assume: one gene; the trait always shows with its allele pattern; no new mutation';

// ---------- 8. A recessive pedigree ----------
const K8 = cues(S('recessive-pedigree'), {here: "Here's a family", cf: 'cystic fibrosis', gen1: 'In generation one', two: 'two unaffected children', every: 'Every child of his', got: 'got one recessive allele', daughter: 'his daughter carries it', gen3: 'In generation three', reapp: 'it reappears', twoun: 'two unaffected parents have', give: "That's the giveaway", ifp: "If the parents don't show it", each: 'each parent must carry', carriers: 'are called carriers', skip: 'can skip a generation'});
const L8: PLay = {x0: 330, y0: 300, gap: 230, row: 250, sz: 84};
export const SceneRecessiveB9: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(P1, L8);
	const appear: Record<string, number> = {
		'I-1': K8.gen1, 'I-2': K8.gen1 + 6, 'II-2': K8.two, 'II-3': K8.two + 6, 'II-1': K8.gen3, 'II-4': K8.gen3 + 4, 'III-1': K8.reapp + 4, 'III-2': K8.reapp + 10,
	};
	const travel = (to: string, at: number) => {
		const t = prog(f, at, 26);
		const [ax, ay] = xy('I-1'), [bx, by] = xy(to);
		return <AlleleChip x={lerp(ax, bx, t)} y={lerp(ay, by, t) - Math.sin(Math.PI * t) * 40} t="a" r={20} o={fadeV(f, at - 4, at + 34)} />;
	};
	const [i1x, i1y] = xy('I-1'), [c3x, c3y] = xy('III-1');
	return (
		<>
			<Heading text="A recessive condition" at={K8.here} size={56} />
			<Overlay>
				<Sx x={1180} y={300} text="cystic fibrosis: recessive" size={38} color={INK} hand at={K8.cf} />
				<Pedigree ped={P1} L={L8} o={id => prog(f, appear[id], 12)}
					chips={{'I-1': ['aa', K8.every], 'II-2': ['Aa', K8.got + 30], 'II-3': ['Aa', K8.got + 36], 'II-4': ['Aa', K8.each + 6], 'III-1': ['aa', K8.each + 14]}}
					rings={{'II-3': K8.give, 'II-4': K8.give + 6, 'III-1': K8.give + 12}} />
				{travel('II-2', K8.got)}
				{travel('II-3', K8.got + 6)}
				<Sx x={1180} y={370} text="his daughter II-3 carries it, hidden" size={32} color={AMBER_INK} hand at={K8.daughter} />
				{/* the giveaway */}
				<Fade at={K8.give}>
					<rect x={1170} y={430} width={650} height={150} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Sx x={1200} y={490} text="unaffected parents," size={40} color={AMBER_INK} hand at={K8.give} />
					<Sx x={1200} y={548} text="affected child: recessive" size={40} color={AMBER_INK} hand at={K8.give + 6} />
				</Fade>
				<Sx x={1180} y={650} text="each parent: one hidden recessive allele" size={32} color={INK} hand at={K8.each} />
				<Fade at={K8.carriers}>
					<rect x={1170} y={690} width={650} height={74} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Sx x={1196} y={738} text="carrier: has one hidden recessive allele" size={32} color={INK} hand at={K8.carriers} />
				</Fade>
				{/* skips a generation */}
				<Fade at={K8.skip}>
					<DrawPath d={`M${i1x - 60},${i1y + 20} C${i1x - 260},${i1y + 220} ${c3x - 360},${c3y - 60} ${c3x - 62},${c3y}`} at={K8.skip} dur={26} color={AMBER} width={6} />
					<path d={`M${c3x - 62},${c3y} l-18,-14 M${c3x - 62},${c3y} l-20,8`} stroke={AMBER} strokeWidth={6} strokeLinecap="round" />
				</Fade>
				<Sx x={1180} y={840} text="recessive traits can skip a generation" size={34} color={AMBER_INK} hand at={K8.skip + 10} />
				<GreyTag x={96} y={1000} text={ASSUME} at={K8.gen1} size={24} />
			</Overlay>
		</>
	);
};

// ---------- 9. A dominant pedigree ----------
const K9 = cues(S('dominant-pedigree'), {now: 'Now a dominant condition', hd: "Huntington's disease", clues: 'Look for clues', every: 'every generation', affch: 'every affected child has an affected parent', het: 'An affected, heterozygous parent', half: 'a half chance', same: 'the same square as the test cross', give: 'The giveaway here', twoaff: 'two affected parents with an unaffected child', each: 'Each parent must carry', must: 'the condition must be dominant', common: "dominant doesn't mean common", rare: "Huntington's is dominant"});
const L9: PLay = {x0: 280, y0: 310, gap: 200, row: 250, sz: 80};
const LI: PLay = {x0: 1400, y0: 430, gap: 240, row: 210, sz: 74};
export const SceneDominantB9: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(P2, L9);
	const up = (kid: string, par: string, at: number, k: number) => {
		const [kx, ky] = xy(kid), [px, py] = xy(par);
		return <DrawPath key={kid} d={`M${kx},${ky - 46} L${px + (kx < px ? -30 : 30)},${py + 44}`} at={at + k * 6} dur={16} color={AMBER} width={5} />;
	};
	const gridO = fadeV(f, K9.half - 6, K9.give);
	const inset = prog(f, K9.twoaff - 4, 14);
	return (
		<>
			<Heading text="A dominant condition" at={K9.now} size={56} />
			<Overlay>
				<Sx x={1080} y={250} text="Huntington's disease: dominant" size={36} color={INK} hand at={K9.hd} />
				<Pedigree ped={P2} L={L9} o={id => prog(f, 6 + ['I-1', 'I-2', 'II-1', 'II-2', 'II-3', 'II-4', 'III-1', 'III-2'].indexOf(id) * 4, 12)}
					chips={{'I-1': ['Aa', K9.het], 'I-2': ['aa', K9.het + 8]}} />
				{/* clues */}
				{[0, 1, 2].map(g => <Tick key={g} x={1000} y={L9.y0 + g * L9.row} at={K9.every + g * 6} s={34} color={AMBER_INK} />)}
				<Sx x={940} y={L9.y0 + 2 * L9.row + 70} text="affected in every generation" size={30} color={AMBER_INK} hand at={K9.every + 12} />
				<GreyTag x={940} y={L9.y0 + 2 * L9.row + 96} text="clues, not proof" at={K9.clues + 4} size={24} />
				<Fade at={K9.affch}>{[up('II-2', 'I-1', K9.affch, 0), up('II-4', 'I-1', K9.affch, 1), up('III-1', 'II-2', K9.affch, 2)]}</Fade>
				{/* an affected heterozygous parent and an unaffected parent */}
				<g opacity={gridO}>
					<Punnett x={1400} y={400} cell={100} res={Aaaa_D} top={['A', 'a']} side={['a', 'a']} gridAt={K9.half - 6} topAt={K9.half - 4} sideAt={K9.half - 2} fillAt={i => K9.half + 4 + i * 6} discR={24} plain hi={i => (Aaaa_D.cells[i].ph === 'affected' ? prog(f, K9.half + 30, 10) : 0)} />
					<Sx x={1500} y={300} text="Aa × aa" size={36} color={INK} weight={800} anchor="middle" at={K9.half - 6} />
					<Sx x={1500} y={660} text={`${Aaaa_D.frac(c => c.ph === 'affected')} affected, for each child`} size={34} color={AMBER_INK} hand anchor="middle" at={K9.half + 26} />
					<Sx x={1500} y={710} text="the same square as the test cross" size={30} color={INK_SOFT} hand anchor="middle" at={K9.same} />
				</g>
				{/* the decisive inset trio */}
				<g opacity={inset}>
					<rect x={1250} y={330} width={600} height={500} rx={22} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Sx x={1276} y={378} text="inset" size={30} color={INK_SOFT} hand />
					<Pedigree ped={INSET} L={LI} nums={0} numerals={0} o={() => 1}
						chips={{'I-1': ['Aa', K9.each + 4], 'I-2': ['Aa', K9.each + 10], 'II-1': ['aa', K9.each + 18]}} />
					<Sx x={1550} y={812} text="affected parents, unaffected child" size={32} color={AMBER_INK} hand anchor="middle" at={K9.twoaff + 6} />
				</g>
				<Sx x={1560} y={900} text="so the condition is dominant" size={38} color={INK} hand anchor="middle" at={K9.must} out={K9.common} />
				{/* dominant does not mean common */}
				<MistakeChip x={1310} y={866} text="dominant = common" at={K9.common} cross={K9.common + 14} size={32} />
				<GreyTag x={1310} y={950} text="Huntington's: dominant and rare" at={K9.rare} size={28} />
				<GreyTag x={96} y={1000} text={ASSUME} at={0} size={24} />
			</Overlay>
		</>
	);
};

// ---------- 10. The giveaways, and how to use them ----------
const K10 = cues(S('giveaways'), {rem: 'how to remember them', hp: 'Hidden in the parents', hc: 'Hidden in the child', name: 'name the people', ex: 'For example', i34: 'individuals 3 and 4', unaff: 'are unaffected', dau: 'their daughter', i1: 'individual 1 in generation three', isaff: 'is affected', so: 'so the condition is recessive', geno: 'write their genotypes', ps: 'use a Punnett square'});
const L10: PLay = {x0: 230, y0: 560, gap: 140, row: 170, sz: 56};
export const SceneGiveawaysB9: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(P1, L10);
	const lab = (id: string, at: number, left = false) => (left
		? <Sx x={xy(id)[0] - 50} y={xy(id)[1] + 10} text={id} size={30} color={AMBER_INK} weight={800} anchor="end" at={at} />
		: <Sx x={xy(id)[0] + 40} y={xy(id)[1] - 36} text={id} size={30} color={AMBER_INK} weight={800} at={at} />);
	return (
		<>
			<Heading text="The two giveaways" at={K10.rem} size={56} />
			<Overlay>
				<Trio x={180} y={226} sz={30} parentsAff={false} childAff o={prog(f, K10.hp - 4, 12)} />
				<Trio x={180} y={346} sz={30} parentsAff childAff={false} o={prog(f, K10.hc - 4, 12)} />
				{/* name the people */}
				<g opacity={prog(f, K10.name - 6, 12)}>
					<Pedigree ped={P1} L={L10} rings={{'II-3': K10.i34 + 2, 'II-4': K10.i34 + 10, 'III-1': K10.i1 + 2}}
						chips={{'II-3': ['Aa', K10.geno + 4], 'II-4': ['Aa', K10.geno + 10], 'III-1': ['aa', K10.geno + 16]}} chipSize={22} />
				</g>
				{lab('II-3', K10.i34 + 6)}
				{lab('II-4', K10.i34 + 14)}
				{lab('III-1', K10.i1 + 6, true)}
				<Sx x={780} y={530} text="In an answer, name the people:" size={36} color={INK_SOFT} hand at={K10.name} />
				<ModelLine x={810} y={600} text="II-3 and II-4: unaffected" at={K10.unaff} size={36} />
				<ModelLine x={810} y={660} text="their daughter III-1: affected" at={K10.isaff} size={36} />
				<ModelLine x={810} y={720} text="so the condition is recessive" at={K10.so} size={36} color={AMBER_INK} />
				<ModelLine x={810} y={800} text="II-3 Aa, II-4 Aa, III-1 aa" at={K10.geno + 4} size={36} />
				<Punnett x={930} y={870} cell={80} res={AaAa_R} top={['A', 'a']} side={['A', 'a']} gridAt={K10.ps - 4} topAt={K10.ps - 2} sideAt={K10.ps} fillAt={i => K10.ps + 4 + i * 4} discR={20} plain ring={i => (AaAa_R.cells[i].ph === 'affected' ? prog(f, K10.ps + 26, 10) : 0)} />
				<Sx x={1140} y={960} text={`Aa × Aa: next child ${AaAa_R.frac(c => c.ph === 'affected')} affected`} size={36} color={AMBER_INK} hand at={K10.ps + 20} />
			</Overlay>
			<div style={{position: 'absolute', left: 300, top: 192}}><HandText text="Hidden in the parents: recessive." at={K10.hp} size={64} cps={30} /></div>
			<div style={{position: 'absolute', left: 300, top: 312}}><HandText text="Hidden in the child: dominant." at={K10.hc} size={64} cps={30} color={AMBER_INK} /></div>
		</>
	);
};
void AMBER; void GREY_INK; void INK; void SpanBracket; void clamp01;
