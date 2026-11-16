// B8-14 scenes 6 to 10: counselling and PGT (non-directive options; IVF, a day-5 embryo, a few outer-layer cells
// tested, only an unaffected embryo transferred, no DNA changed: selection, not engineering), gene therapy in body cells
// (a viral vector into nerve cells; CRISPR on blood stem cells outside the body), germline editing (could be inherited;
// prohibited in Australia), why genetics can't prevent most disease (many genes, uncertain variants, cost), and the
// ethical questions (a level balance; where to draw the line).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Lab} from '../bio-m8-b08/s1';
import {
	AMBER, AMBER_INK, Arrow, BLUE, CARD, Chip, DnaMini, DrawPath, EDGE, GREEN, GREYT, GTag, INK, INK_SOFT, JobsBar, Pic, PicH, Prevented, RED, Svg, Sx, T, TEAL, Title, lerp, pbPt, prog, pulse, smooth, vis,
} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;
const P_PKU = {at: ON, color: 'green' as const, note: 'PKU diet'};

// ---------- 6. counselling and PGT ----------
const K6 = K('counselling-pgt', {counsellor: 'genetic counsellor', steering: 'without steering', pgt: 'called PGT', ivf: 'through IVF', five: 'about five', few: 'A few', outer: 'outer layer', placenta: 'become placenta', tested: 'tested for', only: 'Only an', notice: 'Notice that', changed: 'is changed', selection: 'is selection', prevent: 'can prevent', known: 'already known', costly: 'is costly'});
const RES = [false, true, false, true, false];
export const ScenePGT: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K6.tested, 30));
	const B = {cx: lerp(860, 600, sh), cy: lerp(480, 370, sh), w: lerp(440, 220, sh)};
	const bp = pbPt(PL.blast, B.cx, B.cy, B.w);
	const icm = bp(FP.icm[0], FP.icm[1]), outer = bp(FP.outer[0], FP.outer[1]);
	const blast = vis(f, K6.five - 6, undefined, 16);
	const bio = smooth(prog(f, K6.few, 30));
	const row = prog(f, K6.tested + 20, 14);
	const pick = smooth(prog(f, K6.only, 20));
	return (
		<Svg>
			<Title text="Counselling and PGT: selection" />
			<JobsBar lit={[ON, K6.pgt]} notThis={K6.notice} notOut={K6.selection + 40} />
			<Sx x={96} y={252} text="options (non-directive)" size={34} color={BLUE} hand at={K6.counsellor} />
			<Chip x={96} y={276} text="use PGT" size={30} color={BLUE} ink={INK} at={K6.counsellor + 10} />
			<Chip x={96} y={336} text="test during pregnancy" size={30} color={BLUE} ink={INK} at={K6.counsellor + 16} />
			<Chip x={96} y={396} text="no testing" size={30} color={BLUE} ink={INK} at={K6.counsellor + 22} />
			<GTag x={96} y={460} text="information, not instructions" size={28} at={K6.steering} />
			<Sx x={600} y={222} text="PGT: preimplantation genetic testing" size={38} color={TEAL} hand at={K6.pgt} />
			<g opacity={vis(f, K6.ivf - 4, K6.five + 20, 14)}><PicH p={PL.dish} cx={300} cy={660} h={200} /></g>
			<GTag x={300} y={780} text="IVF" size={30} anchor="middle" at={K6.ivf} out={K6.five + 20} />
			{blast > 0.01 ? <g opacity={blast}>
				<Pic p={PL.blast} cx={B.cx} cy={B.cy} w={B.w} />
				<g opacity={bio}><Pic p={PL.biopsy} cx={B.cx} cy={B.cy} w={B.w} /></g>
			</g> : null}
			<GTag x={1120} y={290} text="day 5 embryo" size={28} at={K6.five} out={K6.tested} />
			<g opacity={vis(f, K6.outer, K6.tested, 12)}>
				<DrawPath d={`M${outer[0] + 6},${outer[1] - 4} L1110,372`} at={K6.outer} dur={10} color={INK_SOFT} width={3} />
				<Sx x={1120} y={382} text="outer layer: becomes placenta" size={34} color={INK} hand at={ON} />
				<GTag x={1120} y={400} text="trophectoderm" size={26} />
				<DrawPath d={`M${icm[0]},${icm[1]} L${icm[0] - 30},${720}`} at={K6.outer + 20} dur={10} color={INK_SOFT} width={3} />
				<Sx x={icm[0] - 40} y={754} text="inner cells: become the baby" size={34} color={INK} hand at={K6.outer + 20} />
			</g>
			{row > 0.01 ? <g opacity={row}>
				<DrawPath d={`M${B.cx + 120},${B.cy} L${800},${420}`} at={K6.tested + 20} dur={12} color={INK_SOFT} width={3} dash="8 6" />
				{RES.map((ok, i) => {
					const x = 880 + i * 190, sel = i === 1;
					const dim = 1 - 0.6 * pick * (sel ? 0 : 1);
					const lift = sel ? -22 * pick : 0;
					return <g key={i} opacity={dim} transform={`translate(0,${lift})`}>
						<PicH p={PL.blast} cx={x} cy={430} h={130} />
						<Chip x={x} y={512} text={ok ? 'unaffected' : 'variant'} size={26} color={ok ? GREEN : AMBER_INK} ink={ok ? GREEN : AMBER_INK} anchor="middle" />
						<g opacity={prog(f, K6.notice, 12)}><DnaMini x={x - 55} y={572} w={110} h={30} /></g>
					</g>;
				})}
			</g> : null}
			<Sx x={820} y={680} text="no embryo's DNA is changed" size={36} color={INK} hand at={K6.changed} />
			<Sx x={820} y={740} text="selection, not engineering" size={46} color={BLUE} hand at={K6.selection} />
			<GTag x={820} y={770} text="variant must be known" size={28} at={K6.known} />
			<GTag x={1130} y={770} text="IVF: cost, burden" size={28} at={K6.costly} />
			<GTag x={1380} y={770} text="few embryos; all may be affected" size={26} at={K6.costly + 16} />
			<Prevented slots={[P_PKU, {at: K6.prevent, color: 'green', note: 'PGT'}]} />
			{void AMBER}{void CARD}{void EDGE}{void RED}{void pulse}{void Arrow}{void T}
		</Svg>
	);
};

// ---------- 7. gene therapy ----------
const K7 = K('gene-therapy', {third: 'The third', body: 'body cell', stays: 'stays with', gt: 'Gene therapy', sma: 'spinal muscular', virus: 'modified virus', nerve: 'nerve cells', early: 'given early', lost: 'are lost', sickle: 'sickle cell', crispr: 'CRISPR', outside: 'outside the', both: 'Both treat', children: "children's risk"});
const NE = {cx: 960, cy: 470, w: 640};
export const SceneGeneTherapy: React.FC = () => {
	const f = useCurrentFrame();
	const np = pbPt(PL.neuron, NE.cx, NE.cy, NE.w);
	const [nx, ny] = np(FP.nucleus[0], FP.nucleus[1]);
	const trip = prog(f, K7.nerve - 20, 30);
	return (
		<Svg>
			<Title text="Changing genes in body cells" />
			<JobsBar lit={[ON, ON, K7.third]} />
			<Lab x={96} y={252} t="a body-cell change stays with that person" at={K7.body} size={40} w={1000} />
			<Pic p={PL.aav} cx={300} cy={480} w={185} />
			<Sx x={300} y={640} text="viral vector" size={34} color={INK} anchor="middle" hand at={K7.virus} />
			<GTag x={96} y={680} text="Module 6: vectors carry genes" size={28} at={K7.virus + 20} />
			<Arrow a={[400, 470]} b={[700, 466]} at={K7.virus + 10} color={TEAL} width={5} />
			{trip > 0.01 && trip < 1 ? <circle cx={lerp(410, 690, trip)} cy={468} r={12} fill={BLUE} stroke={CARD} strokeWidth={2} /> : null}
			<Pic p={PL.neuron} cx={NE.cx} cy={NE.cy} w={NE.w} />
			{f >= K7.nerve + 10 ? <path d={`M${nx - 16},${ny} q6,-10 12,0 t12,0 t12,0`} fill="none" stroke={BLUE} strokeWidth={4} opacity={prog(f, K7.nerve + 10, 12)} /> : null}
			<Sx x={nx} y={320} text="working gene added" size={34} color={BLUE} anchor="middle" hand at={K7.nerve + 10} />
			{[0, 1, 2, 3].map(i => <g key={i} opacity={prog(f, K7.early, 12) * (i >= 2 ? 1 - 0.65 * prog(f, K7.lost, 14) : 1)} style={i >= 2 && f >= K7.lost ? {filter: 'grayscale(1)'} : undefined}><PicH p={PL.neuron} cx={700 + i * 170} cy={680} h={56} /></g>)}
			<Sx x={625} y={770} text="lost cells can't be rescued: give it early" size={34} color={INK} hand at={K7.lost} />
			<g opacity={vis(f, K7.sickle - 4, undefined, 14)}>
				<PicH p={PL.sickle} cx={1720} cy={300} h={96} />
				<Sx x={1824} y={392} text="sickle cell disease" size={30} color={INK} anchor="end" hand at={ON} />
			</g>
			<g opacity={vis(f, K7.crispr - 4, undefined, 14)}><PicH p={PL.bag} cx={1480} cy={440} h={300} /></g>
			<Sx x={1300} y={640} text="out of body, edited, back in" size={32} color={TEAL} hand at={K7.outside} />
			<GTag x={1300} y={664} text="CRISPR on blood stem cells" size={28} at={K7.crispr + 10} />
			<Sx x={96} y={840} text="treats one person; their children's risk doesn't change" size={42} color={INK} hand at={K7.both} />
			<Prevented slots={[{at: K7.both, color: 'grey', note: 'in one person'}, {at: ON, color: 'green', note: 'PGT'}]} />
			{void AMBER}{void AMBER_INK}{void GREEN}{void GREYT}{void RED}{void EDGE}{void Chip}{void DnaMini}{void DrawPath}{void T}{void smooth}{void pulse}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 8. germline editing ----------
const K8 = K('germline', {edit: 'Editing an', germ: 'called germline', enter: 'can enter', inherited: 'be inherited', diff: 'real difference', passed: 'passed to', illegal: 'illegal in', consent: "can't consent", wrong: 'wrong edit', back: 'taken back'});
export const SceneGermline: React.FC = () => {
	const f = useCurrentFrame();
	const bp = pbPt(PL.blast, 380, 470, 380);
	const [ix, iy] = bp(FP.icm[0], FP.icm[1]);
	const gens = [1150, 1350, 1550];
	return (
		<Svg>
			<Title text="Germline editing" />
			<JobsBar lit={[ON, ON, ON]} />
			<Pic p={PL.blast} cx={380} cy={470} w={380} />
			<rect x={ix - 22} y={iy - 18} width={44} height={36} rx={6} fill="none" stroke={AMBER_INK} strokeWidth={5} opacity={prog(f, K8.edit + 20, 12)} />
			<Sx x={380} y={700} text="edit in an early embryo" size={34} color={AMBER_INK} anchor="middle" hand at={K8.edit + 20} />
			<Arrow a={[590, 440]} b={[730, 380]} at={K8.germ} color={INK_SOFT} width={5} />
			<g opacity={vis(f, K8.germ - 4, undefined, 14)}>
				<PicH p={PL.egg} cx={820} cy={350} h={140} />
				<Pic p={PL.sperm} cx={830} cy={500} w={200} />
			</g>
			<Sx x={600} y={620} text="germline: eggs, sperm, early embryo" size={34} color={INK} hand at={K8.germ + 10} />
			{gens.map((x, i) => {
				const k = prog(f, K8.inherited + i * 12, 12);
				return <g key={i}>
					<circle cx={x} cy={440} r={42} fill={CARD} stroke={INK} strokeWidth={3} opacity={prog(f, K8.enter, 12)} />
					{k > 0.01 ? <rect x={x - 14} y={426} width={28} height={28} rx={5} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} opacity={k} /> : null}
					{i < 2 ? <DrawPath d={`M${x + 48},440 L${x + 152},440`} at={K8.inherited + i * 12} dur={10} color={AMBER_INK} width={4} dash="8 6" /> : null}
				</g>;
			})}
			<Sx x={1110} y={330} text="child, then their children" size={30} color={GREYT} hand at={K8.enter} />
			<Sx x={1110} y={540} text="can be inherited" size={40} color={AMBER_INK} hand at={K8.inherited} />
			<GTag x={1110} y={562} text="not every cell is always edited" size={26} at={K8.inherited + 20} />
			<Lab x={96} y={252} t="the real difference: a germline edit can be passed on" at={K8.diff} size={40} w={1000} />
			<Chip x={96} y={740} text="prohibited in Australia" size={34} color={RED} fill={RED} ink={CARD} at={K8.illegal} />
			<GTag x={96} y={806} text="Prohibition of Human Cloning for Reproduction Act 2002" size={26} at={K8.illegal + 20} />
			<GTag x={1110} y={640} text="no consent possible" size={30} at={K8.consent} />
			<GTag x={1110} y={700} text="wrong edits inherited" size={30} at={K8.wrong} />
			<GTag x={1110} y={760} text="can't be reversed" size={30} at={K8.back} />
			<Prevented slots={[{at: ON, color: 'grey', note: 'in one person'}, {at: ON, color: 'green', note: 'PGT'}, {at: K8.illegal, color: 'red', note: 'prohibited', outline: K8.passed}]} />
			{void BLUE}{void GREEN}{void TEAL}{void T}{void lerp}{void smooth}{void vis}{void EDGE}{void INK}{void pulse}{void DnaMini}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 9. limits ----------
const K9 = K('limits', {why: 'So why', biology: 'is biology', t2d: 'Type 2', many: 'many genes', each: 'each adding', diet: 'plus diet', nosingle: 'no single', campaigns: 'prevention campaigns', vus: 'variant of', harmless: 'or harmless', cost: 'cost thousands', reach: 'reach only'});
const TINY = [22, 14, 30, 18, 26, 12, 34, 20, 16, 28, 24, 10, 32, 18, 22, 26, 14, 20];
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const fun = prog(f, K9.reach, 20);
	return (
		<Svg>
			<Title text="Why genetics can't prevent most disease" />
			<JobsBar lit={[ON, ON, ON]} dim={K9.biology} />
			<Sx x={96} y={250} text="the biggest limit: biology" size={40} color={INK} hand at={K9.biology} />
			<line x1={160} x2={780} y1={600} y2={600} stroke={INK} strokeWidth={3.5} />
			<rect x={190} y={300} width={110} height={300} rx={6} fill={BLUE} opacity={0.85} />
			{TINY.map((h, i) => <rect key={i} x={380 + i * 21} y={600 - h} width={14} height={h} rx={3} fill={AMBER_INK} opacity={prog(f, K9.many + i, 8)} />)}
			<Sx x={245} y={640} text="single gene" size={30} color={INK} anchor="middle" hand at={ON} />
			<Sx x={245} y={674} text="(PKU, CF, SMA)" size={28} color={INK} anchor="middle" hand at={ON} />
			<Sx x={380} y={640} text="many genes + environment" size={30} color={INK} hand at={K9.many} />
			<Sx x={380} y={540} text="no single target" size={40} color={AMBER_INK} hand at={K9.nosingle} />
			<GTag x={380} y={696} text="type 2 diabetes" size={28} at={K9.t2d} />
			<GTag x={600} y={696} text="heart disease" size={28} at={K9.t2d + 8} />
			<GTag x={800} y={696} text="most cancers" size={28} at={K9.t2d + 16} />
			<Sx x={96} y={820} text="prevention campaigns still do most of the work" size={38} color={INK} hand at={K9.campaigns} />
			<GTag x={96} y={736} text="b13: campaigns" size={28} at={K9.campaigns} />
			<Pic p={PL.helix} cx={1130} cy={450} w={120} />
			{prog(f, K9.vus, 12) > 0.01 ? <g opacity={prog(f, K9.vus, 12)}><circle cx={1130} cy={450} r={44} fill="none" stroke={AMBER_INK} strokeWidth={5} /><Chip x={1190} y={426} text="?" size={34} color={AMBER_INK} ink={AMBER_INK} /></g> : null}
			<T x={1060} y={710} w={760} text="variant of uncertain significance: harmful or not? unknown" size={36} color={TEAL} at={K9.vus + 10} />
			<Chip x={1300} y={250} text="IVF + PGT: thousands" size={30} color={AMBER_INK} ink={INK} at={K9.cost} />
			<Chip x={1300} y={312} text="gene therapy: millions per dose" size={30} color={AMBER_INK} ink={INK} at={K9.cost + 16} />
			{fun > 0.01 ? <g opacity={fun}>
				<path d="M1360,400 L1800,400 L1640,600 L1520,600 Z" fill="#f1eee7" stroke={GREYT} strokeWidth={3} />
				{[0, 1, 2, 3, 4, 5, 6, 7].map(i => <circle key={i} cx={1400 + i * 52} cy={384} r={10} fill={TEAL} />)}
				{[0, 1].map(i => <circle key={'b' + i} cx={1560 + i * 40} cy={622} r={10} fill={TEAL} />)}
				<Sx x={1580} y={670} text="families reached" size={32} color={INK} anchor="middle" hand at={ON} />
			</g> : null}
			<Prevented slots={[{at: ON, color: 'grey', note: 'in one person'}, {at: ON, color: 'green', note: 'PGT'}, {at: ON, color: 'red', note: 'prohibited'}]} />
			{void AMBER}{void CARD}{void EDGE}{void GREEN}{void RED}{void INK_SOFT}{void DrawPath}{void Arrow}{void DnaMini}{void lerp}{void pbPt}{void smooth}{void pulse}{void PicH}{void Lab}
		</Svg>
	);
};

// ---------- 10. ethics ----------
const K10 = K('ethics', {ethical: 'ethical questions', informed: 'informed choices', disability: 'disability advocates', message: 'sends a', line: 'draw the', fatal: 'fatal childhood', adult: 'adult-onset', trait: 'a trait'});
export const SceneEthics: React.FC = () => {
	const f = useCurrentFrame();
	const slide = 400 + 1120 * (0.5 + 0.42 * Math.sin((f - K10.line) / 28));
	const sl = prog(f, K10.line, 14);
	return (
		<Svg>
			<Title text="Ethical questions" />
			<JobsBar lit={[ON, ON, ON]} />
			<PicH p={PL.blast} cx={960} cy={300} h={140} />
			<path d="M960,430 L910,540 L1010,540 Z" fill="#e9e2d3" stroke={INK} strokeWidth={3} />
			<line x1={560} x2={1360} y1={430} y2={430} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			{[560, 1360].map(x => <g key={x}><line x1={x} x2={x} y1={430} y2={480} stroke={INK} strokeWidth={3} /><path d={`M${x - 110},480 Q${x},520 ${x + 110},480`} fill="none" stroke={INK} strokeWidth={4} /></g>)}
			<Chip x={560} y={530} text="reproductive choice" size={34} color={BLUE} ink={INK} anchor="middle" at={K10.informed} />
			<Chip x={1360} y={530} text="message about disabled lives" size={34} color={AMBER_INK} ink={INK} anchor="middle" at={K10.message} />
			<GTag x={1360} y={600} text="raised by people with these conditions" size={28} anchor="middle" at={K10.disability} />
			<Sx x={96} y={250} text="couples' informed choices" size={38} color={BLUE} hand at={K10.informed} />
			<line x1={400} x2={1520} y1={780} y2={780} stroke={INK} strokeWidth={4} opacity={sl} />
			{([[400, 'fatal in childhood', K10.fatal], [960, 'adult onset', K10.adult], [1520, 'trait', K10.trait]] as [number, string, number][]).map(([x, t, at]) => <g key={t} opacity={prog(f, at, 12)}><line x1={x} x2={x} y1={768} y2={792} stroke={INK} strokeWidth={4} /><Sx x={x} y={834} text={t} size={34} color={INK} anchor="middle" hand at={ON} /></g>)}
			{sl > 0.01 ? <line x1={slide} x2={slide} y1={730} y2={800} stroke={RED} strokeWidth={4} strokeDasharray="8 6" opacity={sl} /> : null}
			<Sx x={960} y={712} text="where's the line?" size={40} color={RED} anchor="middle" hand at={K10.line} />
			<Prevented slots={[{at: ON, color: 'grey', note: 'in one person'}, {at: ON, color: 'green', note: 'PGT'}, {at: ON, color: 'red', note: 'prohibited'}]} />
			{void AMBER}{void CARD}{void GREEN}{void GREYT}{void TEAL}{void INK_SOFT}{void EDGE}
		</Svg>
	);
};
