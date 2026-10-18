// G03 (Biology) scenes 7 to 9: risk is shared with relatives (B9's pedigree with "1 in 2" tags, an outline spreading
// across the family, the 2003 Iceland ruling as a document card with a two-symbol pedigree), strong and weak wording
// (two columns, weak phrases struck through, a rewrite) and the three memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, DotArray, DrawPath, EDGE, Fade, GREYT, GreyTag, HandText, Heading, ICELAND_PTS, INK, INK_SOFT, LandChip, MistakeChip, Overlay, PSym,
	Panel, Pedigree, PlainArrow, PopBar, QMark, Ring, S, Sx, TEAL, Tick, CF, pedXY, prog, pulse,
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
const L7: PLay = {x0: 400, y0: 290, gap: 175, row: 220, sz: 66};
export const SceneRelativesG03: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(FAM, L7);
	const appear = (id: string) => prog(f, id.startsWith('III') ? K7.children - 6 : id === 'II-3' || id === 'II-4' ? K7.bros - 6 : 0, 12);
	const tag = (id: string, at: number) => { const [x, y] = xy(id); return <Sx key={id} x={x} y={y + 96} text="1 in 2" size={30} color={AMBER_INK} hand anchor="middle" at={at} />; };
	const [wx, wy] = xy('II-2');
	const [mx, my] = xy('I-2');
	const spread = prog(f, K7.never, 30);
	return (
		<>
			<Heading text="Risk is shared with relatives" at={K7.shared} size={54} />
			<Overlay>
				<Pedigree ped={FAM} L={L7} o={appear} numerals={1} />
				{/* carrier dots and the woman */}
				<circle cx={wx} cy={wy} r={L7.sz * 0.16} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, K7.woman, 10)} />
				<Ring cx={wx} cy={wy} rx={54} ry={50} at={K7.woman + 6} />
				<Sx x={wx} y={wy + 100} text="carries a BRCA1 variant" size={26} color={AMBER_INK} hand anchor="middle" at={K7.woman + 10} />
				<circle cx={mx} cy={my} r={L7.sz * 0.16 * (1 + 0.5 * pulse(f, K7.parents, 30))} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, K7.parents, 10)} />
				<Sx x={mx + 60} y={my + 8} text="a parent almost certainly carries it" size={26} color={AMBER_INK} hand at={K7.parents + 6} />
				<GreyTag x={mx + 60} y={my + 22} text="unless it arose new in her" at={K7.parents + 16} size={20} />
				{['III-1', 'III-2'].map((id, i) => tag(id, K7.children + 10 + i * 6))}
				{['II-3', 'II-4'].map((id, i) => tag(id, K7.bros + 10 + i * 6))}
				<GreyTag x={140} y={880} text="B9: one in two per child" at={K7.children + 20} size={22} />
				{spread > 0.01 ? <rect x={wx - 60 - spread * 260} y={wy - 60 - spread * 190} width={120 + spread * 820} height={120 + spread * 470} rx={40} fill="none" stroke={AMBER} strokeWidth={4} opacity={0.8} /> : null}
				{/* Iceland ruling */}
				<g opacity={prog(f, K7.court, 14)}>
					<Panel x={1200} y={230} w={640} h={560} />
					<LandChip pts={ICELAND_PTS} x={1240} y={270} w={170} />
					<Sx x={1440} y={300} text="2003" size={40} color={INK} weight={800} />
					<Sx x={1440} y={344} text="Supreme Court of Iceland" size={28} color={INK} weight={700} />
					{[0, 1, 2].map(i => <line key={i} x1={1240} y1={420 + i * 22} x2={1800} y2={420 + i * 22} stroke={INK_SOFT} strokeWidth={3} opacity={0.35} />)}
				</g>
				<g opacity={prog(f, K7.father, 12)}>
					<PSym x={1360} y={560} sex="M" aff={false} sz={60} />
					<Sx x={1360} y={630} text="father (deceased)" size={24} color={INK_SOFT} weight={600} anchor="middle" />
					<rect x={1300} y={660} width={120} height={70} rx={8} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
					{[0, 1, 2].map(i => <line key={i} x1={1314} y1={680 + i * 16} x2={1404} y2={680 + i * 16} stroke={INK_SOFT} strokeWidth={2.5} />)}
					<Sx x={1360} y={756} text="his health records" size={22} color={INK_SOFT} weight={600} anchor="middle" />
				</g>
				<PSym x={1700} y={560} sex="F" aff={false} sz={60} o={prog(f, K7.father + 6, 12)} />
				<Sx x={1700} y={630} text="daughter" size={24} color={INK_SOFT} weight={600} anchor="middle" at={K7.father + 6} />
				<PlainArrow x1={1400} y1={560} x2={1660} y2={560} at={K7.reveal} color={AMBER_INK} width={5} />
				<Sx x={1200} y={840} text="data about him reveal information about her" size={32} color={AMBER_INK} hand at={K7.reveal + 10} />
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
