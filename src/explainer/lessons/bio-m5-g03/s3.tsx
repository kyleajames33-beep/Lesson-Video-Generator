// G03 (Biology) scenes 7 to 9: risk is shared with relatives (B9's pedigree with "1 in 2" tags, an outline spreading
// across the family, the 2003 Iceland ruling as a document card with a two-symbol pedigree), strong and weak wording
// (two columns, weak phrases struck through, a rewrite) and the three memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {PLB} from './big';
import {
	AMBER, AMBER_INK, CARD, DotArray, DrawPath, EDGE, Fade, GREYT, GreyTag, HandText, Heading, ICELAND_PTS, INK, INK_SOFT, LandChip, MistakeChip, Overlay, PSym,
	Panel, Pedigree, PlainArrow, PlateB, PopBar, QMark, Ring, S, Sx, TEAL, Tick, CF, lerp, pedXY, prog, pulse,
} from './shared';
import type {PLay, Ped} from './shared';

// ---------- 7. Risk is shared with relatives ----------
const K7 = cues(S('shared-with-relatives'), {
	shared: 'Genetic risk is also shared', woman: 'If a woman carries', children: 'each of her children', bros: 'her brothers and sisters', parents: 'one of her parents',
	never: 'never only about one person', court: "Iceland's Supreme Court", father: "her late father's health records", reveal: 'could reveal information about her',
});
/** II-2 is the woman; II-1 her partner (married in); I-2 the carrier parent. */
export const FAM: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: false, col: 0.5}, {id: 'I-2', sex: 'F', aff: false, col: 1.5},
		{id: 'II-1', sex: 'M', aff: false, col: -1}, {id: 'II-2', sex: 'F', aff: false, col: 0}, {id: 'II-3', sex: 'M', aff: false, col: 1}, {id: 'II-4', sex: 'F', aff: false, col: 2},
		{id: 'III-1', sex: 'M', aff: false, col: -0.9}, {id: 'III-2', sex: 'F', aff: false, col: -0.1},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-2', 'II-3', 'II-4']}, {a: 'II-1', b: 'II-2', kids: ['III-1', 'III-2']}],
};
const L7: PLay = {x0: 430, y0: 270, gap: 250, row: 265, sz: 92};
// Quality fix: the whole family is drawn from the first word (the set-up), 1.3 times larger, with 40 px tags; the
// 2003 ruling uses the painted bundle of health records and large pedigree symbols.
export const SceneRelativesG03: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(FAM, L7);
	const appear = () => prog(f, 0, 14);
	const tag = (id: string, at: number) => { const [x, y] = xy(id); return <Sx key={id} x={x} y={y + 112} text="1 in 2" size={42} color={AMBER_INK} hand anchor="middle" at={at} />; };
	const [wx, wy] = xy('II-2');
	const [mx, my] = xy('I-2');
	const spread = prog(f, K7.never, 30);
	const [bx0, by0] = xy('II-1'), [bx1] = xy('II-4'), [, by1] = xy('III-2');
	const R = {x0: bx0 - 90, y0: my - 90, x1: bx1 + 90, y1: by1 + 140};
	const rx = lerp(wx - 70, R.x0, spread), ry = lerp(wy - 70, R.y0, spread);
	const rw = lerp(140, R.x1 - R.x0, spread), rh = lerp(140, R.y1 - R.y0, spread);
	void by0;
	const mv = prog(f, K7.court - 24, 24);
	const shift = lerp(380, 0, mv * mv * (3 - 2 * mv));
	return (
		<>
			<Heading text="Risk is shared with relatives" at={K7.shared} size={54} />
			<Overlay>
				<g transform={`translate(${shift},0)`}>
				<Pedigree ped={FAM} L={L7} o={appear} numerals={1} />
				<circle cx={wx} cy={wy} r={L7.sz * 0.18} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, K7.woman, 10)} />
				<Ring cx={wx} cy={wy} rx={66} ry={62} at={K7.woman + 6} />
				<Sx x={wx - 40} y={wy - 70} text="carries a BRCA1 variant" size={36} color={AMBER_INK} hand anchor="middle" at={K7.woman + 10} out={K7.children - 4} />
				<circle cx={mx} cy={my} r={L7.sz * 0.18 * (1 + 0.5 * pulse(f, K7.parents, 30))} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, K7.parents, 10)} />
				<Sx x={mx + 70} y={my - 10} text="a parent almost" size={38} color={AMBER_INK} hand at={K7.parents + 6} />
				<Sx x={mx + 70} y={my + 32} text="certainly carries it" size={38} color={AMBER_INK} hand at={K7.parents + 10} />
				{['III-1', 'III-2'].map((id, i) => tag(id, K7.children + 10 + i * 6))}
				{['II-3', 'II-4'].map((id, i) => tag(id, K7.bros + 10 + i * 6))}
				<Sx x={110} y={1046} text="each child: 1 in 2 (B9)" size={32} color={INK_SOFT} hand at={K7.children + 20} />
				{spread > 0.01 ? <rect x={rx} y={ry} width={rw} height={rh} rx={40} fill="none" stroke={AMBER} strokeWidth={5} opacity={0.85} /> : null}
				<Sx x={R.x0 + 20} y={R.y1 + 50} text="data about one person inform the family" size={38} color={AMBER_INK} hand at={K7.never + 20} />
				</g>
				{/* Iceland ruling */}
				<g opacity={prog(f, K7.court, 14)}>
					<Panel x={1200} y={180} w={660} h={840} />
					<LandChip pts={ICELAND_PTS} x={1240} y={210} w={190} />
					<Sx x={1460} y={260} text="2003" size={56} color={INK} weight={800} />
					<Sx x={1460} y={310} text="Supreme Court of Iceland" size={34} color={INK} weight={700} />
					<Sx x={1240} y={400} text="a planned national database" size={34} color={INK_SOFT} hand />
				</g>
				<g opacity={prog(f, K7.father, 12)}>
					<PSym x={1340} y={560} sex="M" aff={false} sz={90} />
					<line x1={1290} y1={610} x2={1390} y2={510} stroke={INK} strokeWidth={4} />
					<Sx x={1340} y={650} text="father (died)" size={32} color={INK} weight={600} anchor="middle" />
					<PlateB p={PLB.files} cx={1360} cy={810} w={260} />
					<Sx x={1360} y={950} text="his health records" size={34} color={INK} hand anchor="middle" />
				</g>
				<PSym x={1720} y={560} sex="F" aff={false} sz={90} o={prog(f, K7.father + 6, 12)} />
				<Sx x={1720} y={650} text="daughter" size={32} color={INK} weight={600} anchor="middle" at={K7.father + 6} />
				<PlainArrow x1={1400} y1={560} x2={1660} y2={560} at={K7.reveal} color={AMBER_INK} width={6} />
				<Sx x={1530} y={780} text="data about him" size={36} color={AMBER_INK} hand at={K7.reveal + 10} />
				<Sx x={1530} y={824} text="reveal information" size={36} color={AMBER_INK} hand at={K7.reveal + 14} />
				<Sx x={1530} y={868} text="about her" size={36} color={AMBER_INK} hand at={K7.reveal + 18} />
			</Overlay>
		</>
	);
};

// ---------- 8. Strong and weak wording ----------
const K8 = cues(S('strong-wording'), {
	match: 'match your claim to your evidence', strong: 'Strong answers say', suggest: 'suggest a trend', indicate: 'indicate increased risk', more: 'more likely in this population',
	weak: 'Weak answers say', prove: 'prove every person', guarantee: 'guarantee an outcome', remove: 'remove all uncertainty', dont: "So don't write that carriers",
	write: 'Write that carriers are more likely', precise: 'Be precise and cautious',
});
const STRONG = ['suggests a trend', 'indicates increased risk', 'more likely in this population'];
const WEAK = ['proves every individual will', 'guarantees', 'removes all uncertainty'];
export const SceneWordingG03: React.FC = () => {
	const f = useCurrentFrame();
	const sa = [K8.suggest, K8.indicate, K8.more];
	const wa = [K8.prove, K8.guarantee, K8.remove];
	const hp = pulse(f, K8.precise, 40);
	return (
		<>
			<Heading text="Match your claim to your evidence" at={K8.match} size={54} />
			<Overlay>
				<Panel x={120} y={210} w={800} h={360} stroke={hp > 0.05 ? AMBER : TEAL} sw={3 + hp * 3} o={prog(f, K8.strong, 12)} />
				<Panel x={1000} y={210} w={800} h={360} stroke={hp > 0.05 ? AMBER : EDGE} sw={3 + hp * 3} o={prog(f, K8.weak, 12)} />
				<Sx x={150} y={276} text="strong" size={50} color={TEAL} hand at={K8.strong} />
				<Sx x={1030} y={276} text="weak" size={50} color={INK_SOFT} hand at={K8.weak} />
				{STRONG.map((t, i) => (
					<g key={t}>
						<Tick x={170} y={350 + i * 76} at={sa[i] + 6} s={30} color={TEAL} />
						<Sx x={210} y={362 + i * 76} text={t} size={40} color={INK} weight={600} at={sa[i]} />
					</g>
				))}
				{WEAK.map((t, i) => {
					const w = t.length * 40 * 0.55;
					return (
						<g key={t}>
							<Sx x={1050} y={362 + i * 76} text={t} size={40} color={INK_SOFT} weight={600} at={wa[i]} />
							<DrawPath d={`M${1044},${350 + i * 76} L${1056 + w},${348 + i * 76}`} at={wa[i] + 10} dur={12} color={GREYT} width={5} />
						</g>
					);
				})}
				<MistakeChip x={300} y={660} text="Carriers will get the disease." at={K8.dont} cross={K8.dont + 30} size={40} />
				<Fade at={K8.write}>
					<Panel x={300} y={790} w={900} h={96} stroke={TEAL} sw={4} />
					<Sx x={340} y={854} text="Carriers are more likely to get it." size={44} color={INK} hand />
				</Fade>
				<Tick x={1250} y={834} at={K8.write + 14} s={48} color={TEAL} />
				<Sx x={1340} y={854} text="precise and cautious" size={40} color={AMBER_INK} hand at={K8.precise} />
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {three: 'Three lines to remember', pop: 'Population evidence gives population conclusions', risk: 'Genetic risk is not genetic destiny', rare: 'for a rare recessive condition', expect: 'expect far more carriers'});
export const SceneMemoryG03: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Three lines to remember" at={K9.three} size={56} />
			<Overlay>
				<g opacity={prog(f, K9.pop, 12)}><Panel x={140} y={250} w={240} h={170} /><DotArray x={197} y={272} pitch={14} r={5} filled={72} seed={7} /></g>
				<g opacity={prog(f, K9.risk, 12)}>
					<Panel x={140} y={470} w={240} h={170} />
					<circle cx={260} cy={555} r={24} fill="#9aa0a6" stroke="#9aa0a6" strokeWidth={2.5} />
					<circle cx={260} cy={555} r={38} fill="none" stroke={AMBER} strokeWidth={5} />
					<QMark x={310} y={530} size={40} />
				</g>
				<g opacity={prog(f, K9.rare, 12)}><Panel x={140} y={690} w={240} h={170} /><PopBar x={160} y={760} w={200} h={36} affected={CF.q2} carriers={CF.carriers} labels={false} /></g>
			</Overlay>
			<div style={{position: 'absolute', left: 430, top: 290}}><HandText text="Population evidence, population conclusions." at={K9.pop} size={58} cps={30} /></div>
			<div style={{position: 'absolute', left: 430, top: 510}}><HandText text="Genetic risk is not genetic destiny." at={K9.risk} size={58} cps={30} color={AMBER_INK} /></div>
			<div style={{position: 'absolute', left: 430, top: 730}}><HandText text="Rare disease, common carriers." at={K9.rare} size={58} cps={30} /></div>
		</>
	);
};
void AMBER; void Fade; void INK;
