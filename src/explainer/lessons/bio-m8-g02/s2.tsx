// M8 G02 (Biology) scenes 6 to 9: question 2 (RPE65 gene therapy) as the full worded card with the countdown; how the
// vector works at the retina (painted eye with a zoom on its retina, the AAV plate, protein made) and what it aims to
// prevent; the data (dot fields), the limits and the judgement; the crossed "stops it being inherited" mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, Arrow, Badge, BLUE, Dots, EvalStrip, Framed, GOOD, GTag, Givens, HscTag, INK, Mistake, Pause, Pic, PicH, PL, PreRing, Prevented, Q2Col, Q2Full, RETINA, Svg, Sx, T, TEAL,
	Tag, Title, Zoom, pbPt, prog, q2Marks, smooth,
} from './parts';
import {K, hold} from './common';

const ON = -1000;
const F0 = {t: 'kit → colonoscopy → polyps removed or cancer found early', at: ON};
void F0;

// ---------- 3a. question 2 ----------
const KQ2 = K('q2-question', {pause: 'Pause here'});
export const SceneQ2: React.FC = () => (
	<Svg>
		<Title text="Question 2: a gene therapy" />
		<HscTag />
		<Q2Full />
		<Pic p={PL.eye} cx={1582} cy={372} w={430} />
		<Givens x={1340} y={636} items={[['treated: 13 of 20', TEAL], ['not treated: 0 of 10', '#7b838c'], ['after one year, dimmest light', INK]]} />
		<Pause h={hold('q2-question')} at={KQ2.pause} tx={1340} ty={898} cx={1745} cy={962} r={44} />
		<PreRing at={KQ2.pause} start={hold('q2-question').startFrame} x={1745} y={962} r={44} />
	</Svg>
);

// ---------- 3b. how it works, and what it prevents ----------
const KM = K('q2-mechanism', {vector: 'vector', delivers: 'delivers', retinal: 'into retinal cells', make: 'make the missing protein', respond: 'respond to light', ask: 'Now ask', aims: 'aims to prevent', pheno: 'phenotype', eggs: "doesn't change", children: 'children can still', only: 'can only rescue', alive: 'still alive'});
const M_M = q2Marks([{phrase: 'injected under the retina', at: KM.delivers}, {phrase: 'working copies of RPE65', at: KM.delivers + 18}]);
const EYE = {cx: 990, cy: 430, w: 390};
const LENS = {cx: 1580, cy: 410, r: 190, k: 0.72};
const PROT: [number, number][] = [[-90, -60], [-40, 30], [20, -80], [60, 40], [-110, 50], [100, -20], [0, 0], [-60, -120], [40, 110], [120, 80], [-20, 120], [90, -110]];
export const SceneQ2Mechanism: React.FC = () => {
	const f = useCurrentFrame();
	const pt = pbPt(PL.eye, EYE.cx, EYE.cy, EYE.w)(RETINA[0], RETINA[1]);
	const travel = smooth(prog(f, KM.delivers, 40));
	const ax = 1300 + (LENS.cx - 60 - 1300) * travel, ay = 236 + (LENS.cy - 40 - 236) * travel;
	const aO = prog(f, KM.vector, 12) * (1 - 0.6 * prog(f, KM.make + 20, 20));
	const pr = prog(f, KM.make, 12);
	const lost = prog(f, KM.alive, 14);
	return (
		<Svg>
			<Title text="How it works, and what it prevents" />
			<HscTag />
			<Badge text="Evaluate a gene therapy" />
			<Q2Col marks={M_M} />
			<Pic p={PL.eye} cx={EYE.cx} cy={EYE.cy} w={EYE.w} />
			<circle cx={pt[0]} cy={pt[1]} r={30} fill="none" stroke={AMBER_INK} strokeWidth={5} />
			<line x1={pt[0] + 20} y1={pt[1] - 22} x2={LENS.cx - LENS.r * 0.7} y2={LENS.cy - LENS.r * 0.72} stroke={AMBER_INK} strokeWidth={3} />
			<line x1={pt[0] + 20} y1={pt[1] + 22} x2={LENS.cx - LENS.r * 0.7} y2={LENS.cy + LENS.r * 0.72} stroke={AMBER_INK} strokeWidth={3} />
			<Zoom p={PL.eye} cx={LENS.cx} cy={LENS.cy} r={LENS.r} u={RETINA[0]} v={RETINA[1]} k={LENS.k} id="g02b-ret" />
			<circle cx={LENS.cx} cy={LENS.cy} r={LENS.r} fill="none" stroke={AMBER_INK} strokeWidth={5} />
			<Sx x={LENS.cx} y={LENS.cy - LENS.r - 16} text="the retina, close up" size={32} color={INK} anchor="middle" hand weight={700} at={ON} />
			{pr > 0.01 ? <g opacity={pr}>{PROT.map(([dx, dy], i) => <circle key={i} cx={LENS.cx + dx} cy={LENS.cy + dy} r={9 * smooth(prog(f, KM.make + i * 3, 10))} fill={TEAL} stroke="#fffdf8" strokeWidth={2} />)}</g> : null}
			{lost > 0.01 ? <g opacity={lost}>
				<defs><clipPath id="g02b-lost"><circle cx={LENS.cx} cy={LENS.cy} r={LENS.r} /></clipPath></defs>
				<g clipPath="url(#g02b-lost)"><ellipse cx={LENS.cx + 110} cy={LENS.cy + 120} rx={110} ry={80} fill="#7b7468" opacity={0.75} /></g>
				<Sx x={LENS.cx + 110} y={LENS.cy + 126} text="lost cells" size={32} color="#fffdf8" anchor="middle" weight={800} at={ON} />
			</g> : null}
			{aO > 0.01 ? <PicH p={PL.aav} cx={ax} cy={ay} h={120 - 40 * travel} o={aO} /> : null}
			<Sx x={1300} y={170} text="viral vector" size={34} color={BLUE} anchor="middle" weight={800} at={KM.vector} />
			<GTag x={1080} y={196} text="b14: vectors carry genes" size={26} at={KM.vector + 12} />
			<Sx x={LENS.cx} y={LENS.cy + LENS.r + 40} text="cells make the missing protein" size={34} color={TEAL} anchor="middle" hand weight={700} at={KM.make} out={KM.alive} />
			<Sx x={LENS.cx} y={LENS.cy + LENS.r + 40} text="lost cells can't be rescued" size={34} color="#5d564c" anchor="middle" hand weight={700} at={KM.alive} />
			<Prevented x={790} y={716} w={1050} h={104} green={KM.aims} amber={KM.children} size={34} />
			<GTag x={1090} y={664} text="b14: ask what's prevented" size={26} at={KM.ask} />
			<EvalStrip fills={[{t: 'vector delivers working gene → retinal cells make the protein → pigment remade', at: KM.respond}, undefined, undefined, undefined]} />
		</Svg>
	);
};

// ---------- 3c. evidence, limits, judgement ----------
const KE = K('q2-evaluate', {data: 'Now the data', thirteen: 'Thirteen of twenty', sixty: 'sixty-five', none: 'none of ten', untreated: 'the untreated group', small: 'small trial', year: 'one year', gene: 'gene fault', expensive: 'very expensive', improved: 'improved functional', doesnt: "doesn't show", pop: 'across a population'});
const M_E = q2Marks([{phrase: '(control group)', at: KE.untreated}, {phrase: 'of 20 participants', at: KE.small}]);
const MECH = {t: 'vector delivers working gene → retinal cells make the protein → pigment remade', at: ON};
export const SceneQ2Evaluate: React.FC = () => (
	<Svg>
		<Title text="Evidence, limits, judgement" />
		<HscTag />
		<Badge text="Evaluate a gene therapy" />
		<Q2Col marks={M_E} cells={{'1,2': KE.thirteen, '1,1': KE.thirteen + 8, '2,2': KE.none, '2,1': KE.none + 8, '0,2': KE.year}} />
		<Dots x={840} y={246} cols={5} rows={4} sp={56} n={13} tint={KE.thirteen} label="treated: 20" />
		<Dots x={1200} y={246} cols={5} rows={2} sp={56} n={0} label="not treated: 10" pulseAt={KE.untreated} />
		<Framed x={810} y={540} text="13 of 20 = 65%" size={44} color={TEAL} at={KE.sixty} />
		<Framed x={1172} y={414} text="0 of 10 = 0%" size={40} color="#5d656e" at={KE.none} />
		<Pic p={PL.eye} cx={1720} cy={330} w={230} />
		<Tag x={1172} y={456} w={420} text="control: strengthens the case that treatment caused it" size={28} color={BLUE} at={KE.untreated} />
		<AnsBox x={790} y={594} w={1050} h={272} label="answer (b)" size={44} sizeOld={30} hint="What does the control group add?" lines={[
			{t: 'Evidence: 65% against 0%, with a control group.', at: KE.untreated},
			{t: 'Limits: small, one year; one gene fault only; very expensive.', at: KE.small},
			{t: 'Helps this gene fault at one year; not population prevention.', at: KE.improved, color: TEAL},
		]} />
		<EvalStrip fills={[MECH, {t: '65% against 0%, with a control group', at: KE.untreated}, {t: 'small, one year; one gene; costly; needs living cells', at: KE.expensive}, {t: 'better dim-light vision at 1 year; decline not shown to stop', at: KE.doesnt}]} />
	</Svg>
);

// ---------- 3d. the classic mistake ----------
const KX = K('q2-mistake', {classic: 'classic mistake', body: 'body cells', eggs: 'eggs or sperm', risk: 'the risk'});
export const SceneQ2Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic mistake" />
		<HscTag />
		<Badge text="Evaluate a gene therapy" />
		<Q2Col />
		<Mistake x={790} y={170} text="it stops the disease being inherited" size={44} at={ON} cross={KX.classic + 8} />
		<Prevented x={790} y={330} w={1050} h={120} green={ON} amber={ON} amberLabel="germ-line cells unchanged" pulseG={KX.body} pulseA={KX.eggs} size={34} />
		<Pic p={PL.eye} cx={960} cy={640} w={300} />
		<Sx x={960} y={812} text="body (somatic) cells changed" size={32} color={GOOD} anchor="middle" hand weight={700} at={ON} />
		<PicH p={PL.aav} cx={1210} cy={620} h={130} />
		<Arrow a={[1260, 610]} b={[1420, 610]} at={ON} color={AMBER_INK} width={5} />
		<Tag x={1440} y={540} w={400} text="eggs and sperm keep the faulty gene: children's risk unchanged" size={32} color={AMBER_INK} at={KX.eggs} />
		<GTag x={1440} y={720} text="b14: somatic, not germline" size={28} at={KX.body} />
		<Framed x={790} y={918} text="It treats one person's retina, not their children." size={44} color={TEAL} at={ON} />
		<T x={790} y={1018} text="Somatic gene therapy doesn't change inheritance." size={44} color={BLUE} at={KX.classic + 20} />
	</Svg>
);
