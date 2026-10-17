// B7 scenes 11a to 13: two harder unseen questions with brief feedback (the Himalayan rabbit; two base changes in a
// snapdragon pigment enzyme read from a chart), the decision rule with the handoff, and the key notes. Each question
// card stays complete through its 10 s countdown and after it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, Countdown, DrawPath, Enter, ExcerptCard, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, HandText, Heading, INK,
	INK_SOFT, IcePack, MRNA_INK, MistakeChip, ModelLine, Overlay, PLT, PlainArrow, PlateB, PocketBlob, S, Sx, Tick, TraitStrip, codonToAA, notesCheck, pbH, pbPt,
	prog, pulse, stX, wrap, lerp, Soil,
} from './shared';
import {StripSummaries} from './s2';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
/** Rabbit landmarks in the plate's natural pixels (a guess for a side view facing right; recheck when brief 59 lands). */
const RB = {ears: [1350, 500] as [number, number], nose: [1660, 880] as [number, number], foot: [1380, 1600] as [number, number], tail: [330, 1180] as [number, number], body: [900, 1060] as [number, number], patch: [560, 960] as [number, number], foot2: [760, 1620] as [number, number]};

// ---------- 11a. Attempt one (the Himalayan rabbit) ----------
const K12 = cues(S('attempt'), {two: 'Two harder questions now', first: 'Himalayan rabbits have', white: 'white fur on the body', dark: 'dark fur on the ears', enzyme: 'made by an enzyme', shaved: 'Scientists shaved a patch', ice: 'kept an ice pack', grew: 'The new fur grew dark', explain: 'Explain why the new fur', predict: 'Then predict the back fur', pause: 'Pause here to answer'});
const DEM1A = '(a) Explain why the new fur on the patch is dark.';
const DEM1B = "(b) Predict the back fur of this rabbit's young (raised normally). Justify your prediction.";
export const SceneAttemptB7: React.FC = () => {
	const h = S('attempt').responseHold as {startFrame: number; endFrame: number};
	const f = useCurrentFrame();
	const R1 = {x: 360, y: 400, w: 400}, R2 = {x: 880, y: 400, w: 400};
	const b = wrap(DEM1B, 30, 1420);
	return (
		<>
			<Heading text="The Himalayan rabbit" at={4} size={56} />
			<Overlay>
				<PlateB p={PLT.rabbit} cx={R1.x} cy={R1.y} w={R1.w} o={prog(f, K12.first, 14)} />
				<Sx x={150} y={630} text="dark: ears, nose, feet, tail" size={32} color={INK} hand at={K12.dark} />
				<Sx x={150} y={672} text="white: body" size={32} color={INK} hand at={K12.white} />
				<PlateB p={PLT.rabbitPatch} cx={R2.x} cy={R2.y} w={R2.w} o={prog(f, K12.shaved, 14)} />
				<IcePack x={1170} y={330} s={0.9} o={prog(f, K12.ice, 12)} />
				<Sx x={1250} y={300} text="patch shaved; ice pack on" size={32} color={INK} hand at={K12.ice} />
				<Sx x={1250} y={344} text="while the fur grew back:" size={32} color={INK} hand at={K12.ice + 6} />
				<Sx x={1250} y={392} text="new fur dark" size={36} color={AMBER_INK} hand at={K12.grew} />
				<Sx x={96} y={738} text="The dark pigment is made by an enzyme." size={32} color={INK} weight={700} at={K12.enzyme} />
				<Sx x={96} y={800} text={DEM1A} size={30} color={INK} weight={700} at={K12.explain} />
				<AnswerBox x={96} y={816} w={1440} h={62} at={K12.explain + 8} lines={1} />
				{b.map((l, i) => <Sx key={i} x={96} y={922 + i * 38} text={l} size={30} color={INK} weight={700} at={K12.predict + i * 4} />)}
				<AnswerBox x={96} y={922 + (b.length - 1) * 38 + 14} w={1440} h={56} at={K12.predict + 10} lines={1} />
				<Sx x={1830} y={1060} text="Pause here to answer." size={44} color={AMBER_INK} hand anchor="end" at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={830} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const K13 = cues(S('feedback-one'), {coolest: 'the coolest parts', cool: 'where the skin is cool', warm: 'On the warm back', none: 'no pigment forms', ice: 'The ice pack cooled', worked: 'the enzyme worked', young: 'The young will have white backs', cold: 'the cold changed where', inherit: 'not the gene they inherit', said: 'If you said the ice', again: 'look again'});
const COOL = '#b8b2d8', WARM = '#f0c27e';
/** A small coded enzyme with (on) or without (off) pigment dots. */
const EnzIcon: React.FC<{x: number; y: number; on: number; o?: number}> = ({x, y, on, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - 20},${y} C${x - 22},${y - 22} ${x + 6},${y - 26} ${x + 18},${y - 12} C${x + 6},${y - 4} ${x + 6},${y + 6} ${x + 18},${y + 12} C${x + 6},${y + 26} ${x - 22},${y + 22} ${x - 20},${y} Z`} fill={on > 0.5 ? '#d7e3e0' : '#e1e3e6'} stroke={on > 0.5 ? '#3d6b66' : GREYT} strokeWidth={3} />
		{[0, 1, 2].map(k => <circle key={k} cx={x + 30 + k * 12} cy={y - 8 + (k % 2) * 14} r={5} fill="#3b2a20" opacity={on} />)}
	</g>
));
export const SceneFeedbackOneB7: React.FC = () => {
	const f = useCurrentFrame();
	const R1 = {x: 250, y: 330, w: 260}, R2 = {x: 600, y: 330, w: 260};
	const p1 = pbPt(PLT.rabbit, R1.x, R1.y, R1.w), p2 = pbPt(PLT.rabbit, R2.x, R2.y, R2.w);
	const wash = prog(f, K13.coolest, 20);
	const cools = [RB.ears, RB.nose, RB.foot, RB.foot2, RB.tail].map(q => p1(...q));
	const patch2 = p2(...RB.patch);
	const young = prog(f, K13.young, 16);
	const pass = prog(f, K13.cold, 40);
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="(a) Why is the new fur dark?   (b) Predict the young's back fur, and justify." size={26} color={INK_SOFT} weight={600} at={0} />
				<PlateB p={PLT.rabbit} cx={R1.x} cy={R1.y} w={R1.w} />
				<PlateB p={PLT.rabbitPatch} cx={R2.x} cy={R2.y} w={R2.w} />
				<IcePack x={790} y={300} s={0.6} />
				{/* cool to warm wash: the extremities are coolest */}
				<g opacity={0.55 * wash * (PLT.rabbit.have === false ? 0 : 1)}>
					<ellipse cx={p1(...RB.body)[0]} cy={p1(...RB.body)[1]} rx={70} ry={50} fill={WARM} />
					{cools.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={24} fill={COOL} />)}
					<circle cx={patch2[0]} cy={patch2[1]} r={30} fill={COOL} opacity={prog(f, K13.ice, 16)} />
				</g>
				<Fade at={K13.coolest + 6}>
					<rect x={880} y={210} width={30} height={30} rx={8} fill={COOL} /><Sx x={922} y={235} text="cooler" size={28} color={INK} hand at={K13.coolest + 6} />
					<rect x={880} y={252} width={30} height={30} rx={8} fill={WARM} /><Sx x={922} y={277} text="warmer" size={28} color={INK} hand at={K13.coolest + 6} />
				</Fade>
				{PLT.rabbit.have !== false ? (
					<>
					<EnzIcon x={cools[0][0] + 40} y={cools[0][1] - 10} on={prog(f, K13.cool + 10, 10)} o={prog(f, K13.cool, 10)} />
					<Tick x={cools[0][0] + 110} y={cools[0][1] - 20} at={K13.cool + 14} s={28} />
					<EnzIcon x={p1(...RB.body)[0] - 20} y={p1(...RB.body)[1] + 10} on={0} o={prog(f, K13.warm, 10)} />
					<EnzIcon x={patch2[0] - 10} y={patch2[1] - 40} on={prog(f, K13.worked, 10)} o={prog(f, K13.ice + 6, 10)} />
					</>
				) : null}
				<Sx x={R1.x} y={490} text="warm back: no pigment" size={28} color={GREY_INK} hand anchor="middle" at={K13.none} />
				{/* the young: white back, dark tips */}
				<PlateB p={PLT.rabbit} cx={1180} cy={360} w={170} o={young} />
				<Sx x={1180} y={490} text="white back, dark tips" size={28} color={INK} hand anchor="middle" at={K13.young + 8} />
				<Fade at={K13.cold}>
					<PlainArrow x1={250} y1={548} x2={1170} y2={548} at={K13.cold} color={INK_SOFT} />
					<rect x={lerp(260, 980, pass)} y={524} width={170} height={44} rx={14} fill="#fffdf8" stroke="#6e2a63" strokeWidth={3} />
					<text x={lerp(260, 980, pass) + 85} y={554} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill="#6e2a63">same allele</text>
				</Fade>
				<ModelLine x={130} y={640} text="(a) The enzyme works only in cool skin; the ice pack cooled the patch, so pigment formed." at={K13.worked + 6} size={30} />
				<ModelLine x={130} y={700} text="(b) White back: the cold changed where the enzyme worked, not the allele passed on." at={K13.inherit} size={30} />
				<MistakeChip x={96} y={800} text="the ice changed the rabbit's genes, so the young have dark backs" at={K13.said} cross={K13.again} size={28} />
				<GreyTag x={96} y={900} text="the environment changes the trait, not the genotype" at={K13.again + 10} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 11c. Attempt two (snapdragons) ----------
const K14 = cues(S('attempt-two'), {second: 'Second', snap: 'In snapdragons', copies: 'two copies of a different change', p: 'In plant P', cau: 'from C A U to C C U', q: 'In plant Q', gaa: 'from G A A to G A G', white: 'Plant P has white flowers', red: 'plant Q has red flowers', chart: 'Use the chart', pause: 'Pause here to answer'});
export const CHART_ROWS = ['CAC', 'CAU', 'CCU', 'GAA', 'GAG', 'GUA'];
if (CHART_ROWS.map(codonToAA).join() !== 'His,His,Pro,Glu,Glu,Val') throw new Error('attempt two chart check failed');
const PlantCol: React.FC<{x: number; name: string; white: boolean; at: number; lines: string[]; lineAt: number; flower: string; flowerAt: number; size?: number}> = ({x, name, white, at, lines, lineAt, flower, flowerAt, size = 30}) => (
	<g>
		<PlateB p={white ? PLT.snapWhite : PLT.snapRed} cx={x + 90} cy={395} w={150} o={1} />
		<Sx x={x + 190} y={282} text={name} size={44} color={INK} hand at={at} />
		<Sx x={x + 190} y={330} text="two copies" size={size} color={INK} weight={600} at={at + 6} />
		{lines.map((l, i) => <Sx key={i} x={x + 190} y={376 + i * 42} text={l} size={size} color={i === lines.length - 1 ? MRNA_INK : INK} weight={i === lines.length - 1 ? 800 : 600} at={lineAt + i * 4} />)}
		<Sx x={x + 190} y={520} text={flower} size={36} color={AMBER_INK} hand at={flowerAt} />
	</g>
);
export const SceneAttemptTwoB7: React.FC = () => {
	const h = S('attempt-two').responseHold as {startFrame: number; endFrame: number};
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two base changes in a pigment enzyme" at={4} size={52} />
			<Overlay>
				<Sx x={96} y={205} text="Red petals need an enzyme that helps make red pigment." size={32} color={INK} weight={700} at={K14.snap} />
				<g opacity={prog(f, K14.p, 12)}><PlantCol x={96} name="Plant P" white at={K14.p} lines={['active-site codon:', 'mRNA CAU to CCU']} lineAt={K14.cau - 10} flower="white flowers" flowerAt={K14.white} /></g>
				<g opacity={prog(f, K14.q, 12)}><PlantCol x={640} name="Plant Q" white={false} at={K14.q} lines={['codon far from the active site:', 'mRNA GAA to GAG']} lineAt={K14.gaa - 10} flower="red flowers" flowerAt={K14.red} size={28} /></g>
				<ExcerptCard x={1380} y={230} w={420} rows={CHART_ROWS} at={K14.chart - 6} rh={44} size={30} />
				<Sx x={96} y={640} text="Use the chart to explain why plant P has white flowers and plant Q has red flowers." size={30} color={INK} weight={700} at={K14.chart} />
				<AnswerBox x={96} y={668} w={1440} h={78} at={K14.chart + 8} lines={1} label="P" />
				<AnswerBox x={96} y={766} w={1440} h={78} at={K14.chart + 12} lines={1} label="Q" />
				<Sx x={96} y={1050} text="Pause here to answer." size={46} color={AMBER_INK} hand at={K14.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const K15 = cues(S('feedback-two'), {his: 'C A U is histidine', pro: 'C C U is proline', site: 'sits in the active site', pocket: "The pocket's shape changes", cant: "can't hold its substrate", white: 'the flowers are white', q: 'In plant Q', both: 'both code for glutamate', unchanged: 'the enzyme is unchanged', red: 'flowers stay red', said: 'If you said every change', check: 'check the chart first'});
export const SceneFeedbackTwoB7: React.FC = () => {
	const f = useCurrentFrame();
	const lit = {CAU: vis(f, K15.his, K15.pocket + 20), CCU: vis(f, K15.pro, K15.pocket + 20), GAA: vis(f, K15.both, K15.red + 30), GAG: vis(f, K15.both, K15.red + 30)};
	const flip = prog(f, K15.site, 1);
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="Use the chart: why is P white and Q red?" size={26} color={INK_SOFT} weight={600} at={0} />
				<PlateB p={PLT.snapWhite} cx={150} cy={330} w={84} />
				<Sx x={210} y={320} text="P: CAU to CCU" size={32} color={MRNA_INK} weight={800} at={0} />
				<Sx x={210} y={360} text="active site, white" size={26} color={INK_SOFT} weight={600} at={0} />
				<PlateB p={PLT.snapRed} cx={640} cy={330} w={84} />
				<Sx x={700} y={320} text="Q: GAA to GAG" size={32} color={MRNA_INK} weight={800} at={0} />
				<Sx x={700} y={360} text="far from the site, red" size={26} color={INK_SOFT} weight={600} at={0} />
				<ExcerptCard x={1380} y={200} w={420} rows={CHART_ROWS} at={-100} lit={lit} rh={44} size={30} />
				{/* P: a different amino acid in the active site */}
				<PocketBlob cx={360} cy={600} R={105} lip={flip > 0.5 ? codonToAA('CCU') : codonToAA('CAU')} lipRing={prog(f, K15.site - 6, 10)} squeeze={prog(f, K15.pocket, 20)} bump={prog(f, K15.cant, 18)} o={prog(f, K15.his - 6, 12)} />
				<Sx x={360} y={740} text="P" size={40} color={INK} hand anchor="middle" at={K15.his} />
				{/* Q: the same amino acid */}
				<PocketBlob cx={1000} cy={600} R={90} far={codonToAA('GAG')} farRing={pulse(f, K15.both + 6, 30)} lip="His" o={prog(f, K15.q, 12)} />
				<Tick x={1150} y={520} at={K15.unchanged} s={40} />
				<Sx x={1000} y={740} text="Q" size={40} color={INK} hand anchor="middle" at={K15.q} />
				<ModelLine x={130} y={812} text={`P: ${codonToAA('CAU')} to ${codonToAA('CCU')} in the active site, shape changes, no pigment: white`} at={K15.white} size={30} />
				<ModelLine x={130} y={866} text={`Q: ${codonToAA('GAA')} to ${codonToAA('GAG')}, same protein: red`} at={K15.red} size={30} />
				<MistakeChip x={96} y={930} text="every gene change changes the protein" at={K15.said} cross={K15.check} size={28} />
				<GreyTag x={760} y={936} text="check the chart" at={K15.check + 8} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const K16 = cues(S('decision-rule'), {links: 'links a gene to a trait', walk: 'walk the chain', base: 'the base', codon: 'the codon', aa: 'the amino acid', shape: 'the shape', cell: 'what the cell does', trait: 'then the trait', same: 'when the same genes', env: 'what the environment is changing', next: 'Next, where the different'});
export const SceneDecisionB7: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 420, Hh = 230;
	const steps: [string, number, number][] = [['base', K16.base, 0], ['codon', K16.codon, 0], ['amino acid', K16.aa, 1], ['shape', K16.shape, 2], ['cell', K16.cell, 3], ['trait', K16.trait, 4]];
	const lit = [0, 1, 2, 3, 4].map(i => {
		const mine = steps.filter(s => s[2] === i);
		const start = mine[0][1];
		const next = steps.find(s => s[2] === i + 1);
		return vis(f, start, next ? next[1] + 4 : K16.same);
	});
	const chipX = [stX(0) - 80, stX(0) + 90, stX(1), stX(2), stX(3), stX(4)];
	return (
		<>
			<Heading text="Gene to trait? Walk the chain" at={4} size={56} />
			<Overlay>
				<TraitStrip y={Y} h={Hh} at={0} lit={lit} />
				<StripSummaries y={Y} upto={4} at={6} />
				{steps.map(([t, at], i) => <Chip key={t} x={chipX[i]} y={300} anchor="middle" text={t} at={at} size={38} color={INK} stroke={AMBER} hot={pulse(f, at, 30)} />)}
				<Chip x={stX(4) - 80} y={Y + Hh + 30} anchor="middle" text="soil" at={K16.env} size={34} color="#6b4a2b" stroke="#a9825a" />
				<Chip x={stX(4) + 60} y={Y + Hh + 30} anchor="middle" text="cold" at={K16.env + 8} size={34} color="#4d5f6f" stroke="#6d7f8f" />
				<IcePack x={stX(4) + 60} y={Y + Hh + 130} s={0.6} o={prog(f, K16.env + 12, 12)} />
				<Sx x={stX(4) - 160} y={Y + Hh + 66} text="same genes? look for" size={34} color={AMBER_INK} hand anchor="end" at={K16.same} />
				<Fade at={K16.next}>
					<rect x={1000} y={880} width={824} height={140} rx={26} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
				</Fade>
				<PlateB p={PLT.peaYR} cx={1080} cy={950} w={90} o={prog(f, K16.next, 12)} />
				<Sx x={1150} y={940} text="Next: sources of" size={42} color={INK} hand at={K16.next} />
				<Sx x={1150} y={990} text="genetic variation" size={42} color={INK} hand at={K16.next + 6} />
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = notesCheck([
	'Proteins do most of a cell\'s jobs: enzymes, transport (haemoglobin), structure (keratin), receptors, antibodies.',
	'The amino acid order sets the fold (water-avoiding amino acids tuck in, charges attract, cysteines form disulfide bonds), and the shape sets the job. Levels: 1 order, 2 local coils, 3 whole fold, 4 more than one chain.',
	'A changed amino acid can change the shape and stop a protein working, especially at an active site; some base changes change nothing.',
	'Sickle cell: GAG to GUG, Glu to Val at 6 in the beta chain; with two copies, haemoglobin forms fibres when oxygen is low, cells sickle, vessels block.',
	'Genotype (alleles) to protein to cell to phenotype (observable traits). Genes set what\'s possible; the environment affects what develops (hydrangea colour and soil aluminium; height and nutrition). The environment does not change the genotype.',
]);
export const SceneNotesB7: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 20}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
	</>
);
void DrawPath; void pbH; void Soil; void TraitStrip;
