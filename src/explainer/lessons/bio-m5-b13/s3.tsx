// B13 scenes 9 and 10: what big data improve and what they don't (a two-column table written row by row, the tube
// grid tinting for healthy volunteer bias) and the two memory lines with their icons.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, Boat, EDGE, Fade, GreyTag, HandText, Heading, INK, INK_SOFT, Overlay, Panel, S, Sx, TEAL, TubeGrid, prog, pulse} from './shared';

// ---------- 9. What big data improve, and what they don't ----------
const K9 = cues(S('improves-not-removes'), {
	improve: 'large data improve pattern detection', conf: 'confidence in broad trends', comp: 'comparisons across many populations', remove: "What they don't remove",
	biased: 'a biased sample', limits: 'the limits of the methods', unc: 'uncertainty about any one', uk: 'UK Biobank volunteers', healthier: 'healthier on average', strong: 'A strong answer states',
});
const LEFT = ['pattern detection', 'confidence in broad trends', 'comparison across populations'];
const RIGHT = ['a biased sample', 'method limits', 'uncertainty for one person'];
export const SceneImprovesB13: React.FC = () => {
	const f = useCurrentFrame();
	const la = [K9.improve + 10, K9.conf, K9.comp];
	const ra = [K9.biased, K9.limits, K9.unc];
	const hp = pulse(f, K9.strong, 40);
	return (
		<>
			<Heading text="What big data improve, and what they don't" at={4} size={54} />
			<Overlay>
				<Panel x={120} y={210} w={800} h={420} stroke={hp > 0.05 ? AMBER : EDGE} sw={3 + hp * 3} o={prog(f, K9.improve, 12)} />
				<Panel x={1000} y={210} w={800} h={420} stroke={hp > 0.05 ? AMBER : EDGE} sw={3 + hp * 3} o={prog(f, K9.remove, 12)} />
				<Sx x={150} y={276} text="improves" size={46} color={TEAL} hand at={K9.improve} />
				<Sx x={1030} y={276} text="does not remove" size={46} color={AMBER_INK} hand at={K9.remove} />
				{LEFT.map((t, i) => (
					<g key={i}>
						<Fade at={la[i]}><circle cx={168} cy={356 + i * 90} r={9} fill={TEAL} /></Fade>
						<Sx x={196} y={368 + i * 90} text={t} size={38} color={INK} weight={600} at={la[i]} />
					</g>
				))}
				{RIGHT.map((t, i) => (
					<g key={i}>
						<Fade at={ra[i]}><circle cx={1048} cy={356 + i * 90} r={9} fill={AMBER} /></Fade>
						<Sx x={1076} y={368 + i * 90} text={t} size={38} color={INK} weight={600} at={ra[i]} />
					</g>
				))}
				{/* healthy volunteer bias */}
				<TubeGrid x={160} y={720} cols={30} rows={5} dx={22} dy={40} p={prog(f, K9.uk, 30)} s={0.72} tint={prog(f, K9.healthier, 20)} />
				<Sx x={150} y={690} text="UK Biobank volunteers" size={30} color={INK} hand at={K9.uk} />
				<Fade at={K9.healthier + 10}>
					<Panel x={900} y={720} w={900} h={170} stroke={AMBER} />
					<Sx x={930} y={780} text="volunteers vs whole population:" size={34} color={INK} weight={700} />
					<Sx x={930} y={836} text="volunteers healthier on average" size={38} color={AMBER_INK} hand />
				</Fade>
				<GreyTag x={900} y={906} text="Fry et al. 2017" at={K9.healthier + 20} size={22} />
				<Sx x={1350} y={990} text="state both sides" size={40} color={AMBER_INK} hand anchor="middle" at={K9.strong + 10} />
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {two: 'Two lines to remember', big: 'Big data sharpen the trend', person: "they don't predict a person", harm: 'if a harmful allele is common', reason: 'look for a reason', adv: 'an advantage for carriers', chance: 'chance in a small group'});
export const SceneMemoryB13: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two lines to remember" at={K10.two} size={56} />
			<Overlay>
				{/* settled dots icon */}
				<g opacity={prog(f, K10.big, 12)}>
					<Panel x={140} y={300} w={260} h={170} />
					<line x1={170} y1={430} x2={370} y2={430} stroke={INK} strokeWidth={3} />
					{[0, 1, 2, 3, 4, 5, 6].map(i => <circle key={i} cx={290 + (i % 3) * 14 - 14} cy={414 - Math.floor(i / 3) * 18} r={8} fill="#7fb0b5" stroke={TEAL} strokeWidth={2} />)}
					<line x1={250} y1={340} x2={250} y2={430} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="5 5" />
				</g>
				<g opacity={prog(f, K10.adv, 12)}>
					<Panel x={140} y={580} w={260} h={170} />
					<circle cx={210} cy={665} r={30} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
					<text x={210} y={674} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 22}} fill={INK}>AS</text>
					<Boat x={320} y={680} s={0.55} beads={[2, 7, 2]} />
				</g>
			</Overlay>
			<div style={{position: 'absolute', left: 450, top: 330}}><HandText text="Big data sharpen the trend;" at={K10.big} size={60} cps={26} /></div>
			<div style={{position: 'absolute', left: 450, top: 405}}><HandText text="they don't predict a person." at={K10.person} size={60} cps={26} color={AMBER_INK} /></div>
			<div style={{position: 'absolute', left: 450, top: 610}}><HandText text="Common but harmful?" at={K10.harm} size={60} cps={26} /></div>
			<div style={{position: 'absolute', left: 450, top: 685}}><HandText text="Carrier advantage, or chance in a small group." at={K10.adv} size={60} cps={30} color={AMBER_INK} /></div>
		</>
	);
};
