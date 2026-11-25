// Scenes 12 to 17: attempt 1 (the painted Sun as "a star") and its feedback (the star in its system box, mass bar
// dipping), attempt 2 (the painted Bunsen flame inside a dashed "methane + oxygen" box) and its feedback (the painted
// balance), the handoff to Module 8 (three system boxes, annihilation run backwards as pair production in a hot early
// Universe that cools; its last frame is exported as `M7V16FinalFrame`, the last frame of Module 7) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {BUNSEN, FUEL_CAN, Particle, PhotonField, SystemBox, TempBar} from '../../physics/light/massenergy';
import {A1_DM, A1_H, A1_SLIP, A1_W, A2_DM, A2_E, ACCENT, C2, FUSION_F, HEAD, HEAD_NEXT, HEAD_SIZE, PAIR_MEV, cap, cue, dur, hold} from './common';
import {AMBER, BAL, GREY, INK, Lbl, MASS, NAVY, Outflow, ROSE, Shrunk, fx, sci} from './parts';

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A star radiates energy at a rate of {U('1.5 × 10²⁷ W')}. (a) Calculate the mass the star loses each second. (b) Fusion in the star converts {U('0.7%')} of the mass of the hydrogen fused into energy. Calculate the mass of hydrogen fused each second.</>;
};
const StarPic: React.FC<{f: number; w?: number; box?: number; dip?: number}> = ({f, w = 678, box = 0, dip = 0}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Outflow cx={300} cy={290} r0={150} r1={260} t={f / 30} n={10} len={40} />
		<Disc spec={SUN} cx={300} cy={290} d={300} />
		{box > 0.001 ? <SystemBox x={110} y={100} w={530} h={380} bar={260} out={dip} barW={50} mass={MASS} opacity={box} /> : null}
		<text x={30} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>a star</text>
		<text x={30} y={520} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>c = 3.00 × 10⁸ m s⁻¹</text>
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<StarPic f={useCurrentFrame()} />}><Q1 /></QuestionScene></Accent>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const kg = cue(id, 'ten to the ten kilograms'), sec = cue(id, 'kilograms each second'), sq = cap(id, cue(id, 'squared'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`E = ${sci(A1_W, 1)} J each second | ${fx(FUSION_F * 100, 1)}% | c² = ${sci(C2, 1)}`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1080}}>
				<Row at={kg - 30} size={38}>{`(a) Δm = E/c² = (${sci(A1_W, 1)}) / (${sci(C2, 1)})`}</Row>
				<Row at={kg - 6} size={44}><AnswerBox at={kg}>{`= ${sci(A1_DM, 1)} kg each second`}</AnswerBox></Row>
				<Row at={sec - 30} size={38}>{`(b) hydrogen = (${sci(A1_DM, 1)}) / ${FUSION_F}`}</Row>
				<Row at={sec - 6} size={44}><AnswerBox at={sec}>{`= ${sci(A1_H, 1)} kg each second`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><StarPic f={f} w={640} box={prog(f, 0, 12)} dip={20 * prog(f, kg, 20)} /></div>
			<CrossedChip x={96} y={790} at={sq} crossAt={sq + 10} size={30} caption="E = mc²: divide by c², not c">{`Δm = (${sci(A1_W, 1)}) / (3.00 × 10⁸) = ${sci(A1_SLIP, 1)} kg`}</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Burning 1.0 kg of methane in oxygen releases {U('55 MJ')} of energy. A student claims: {"'"}The products of a combustion reaction have {U('exactly the same mass')} as the reactants.{"'"} Evaluate this claim. Support your answer with a calculation.</>;
};
const FlamePic: React.FC<{w?: number; balance?: number}> = ({w = 678, balance = 0}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<rect x={balance > 0.001 ? 40 : 170} y={90} width={340} height={400} rx={14} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="16 10" />
		<LPlate spec={BUNSEN} p={{x: balance > 0.001 ? 130 : 260, y: 120, w: 160}} />
		<text x={balance > 0.001 ? 60 : 190} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>methane + oxygen</text>
		{balance > 0.001 ? <g opacity={balance}><LPlate spec={BAL} p={{x: 400, y: 380, w: 250}} /><text x={525} y={350} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>ordinary balance</text></g> : null}
		<text x={640} y={525} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>c = 3.00 × 10⁸ m s⁻¹</text>
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<FlamePic />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const tr = cue(id, 'true'), pu = cue(id, 'purposes'), al = cap(id, cue(id, 'at all'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`E = 55 MJ = ${sci(A2_E, 1)} J | c² = ${sci(C2, 1)}`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1080}}>
				<Row at={0} size={38}>{'energy leaves the system: Δm = E/c²'}</Row>
				<Row at={tr - 30} size={38}>{`Δm = (${sci(A2_E, 1)}) / (${sci(C2, 1)})`}</Row>
				<Row at={tr - 6} size={42}><AnswerBox at={tr}>{`= ${sci(A2_DM, 1)} kg → products lighter`}</AnswerBox></Row>
				<Row at={pu - 6} size={40}><AnswerBox at={pu}>{`≈ ${fx(A2_DM * 1e9, 1)} μg: too small for an ordinary balance`}</AnswerBox></Row>
				<Row at={pu + 10} size={32}>an excellent approximation, not exact</Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><FlamePic w={640} balance={prog(f, 0, 12)} /></div>
			<CrossedChip x={96} y={830} at={al} crossAt={al + 10} size={30} caption="Δm = E/c² for every process">{"chemical reactions don't change mass"}</CrossedChip>
		</>
	);
};

// ---------- 16. handoff to Module 8 ----------
const HD = (() => {
	const id = 'handoff-m8';
	return {id, one: cue(id, 'One rule explains all three'), eo: cue(id, 'Energy out, mass down'), rb: cue(id, 'Run annihilation backwards'), al: cue(id, 'at least zero point five one MeV'), full: cue(id, 'full of photons that energetic'), cool: cue(id, 'Then it cooled'), next: cap(id, cue(id, 'So how did cooling radiation')), end: dur(id) - 1};
})();
const EVH = {x: 860, y: 600};
const MiniBox: React.FC<{x: number; kind: 'sun' | 'pair' | 'can'; t: number}> = ({x, kind, t}) => (
	<g>
		<rect x={x} y={180} width={540} height={190} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="14 9" />
		{kind === 'sun' ? <g><Outflow cx={x + 110} cy={275} r0={60} r1={120} t={t} n={6} len={30} /><Disc spec={SUN} cx={x + 110} cy={275} d={130} /></g> : kind === 'pair' ? <g><Particle x={x + 70} y={275} r={38} color={NAVY.stroke} text="e⁻" size={30} /><Particle x={x + 160} y={275} r={38} color={ROSE.stroke} text="e⁺" size={30} /></g> : <LPlate spec={FUEL_CAN} p={{x: x + 40, y: 200, w: 130}} />}
	</g>
);
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard16: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const conv = final ? 0.55 : kf(f, [[HD.rb, 0], [HD.rb + 50, 1]]);
	const emerge = final ? 1 : prog(f, HD.rb + 50, 20);
	const cool = final ? 0.7 : prog(f, HD.cool, 60) * 0.7;
	const gx = 360 * (1 - conv);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<PhotonField x={96} y={360} w={1480} h={470} t={final ? 0 : f / 30} n={24} cool={cool} opacity={0.55 * o(HD.full, 20)} />
				<g opacity={o(HD.one)}><MiniBox x={96} kind="sun" t={final ? 0 : f / 30} /><MiniBox x={690} kind="pair" t={0} /><MiniBox x={1284} kind="can" t={0} /></g>
				<g opacity={o(HD.rb)}>
					<Packet x={EVH.x - 60 - gx} y={EVH.y} deg={0} len={90} color={AMBER.stroke} label="γ" size={34} />
					<Packet x={EVH.x + 60 + gx} y={EVH.y} deg={180} len={90} color={AMBER.stroke} label="γ" size={34} />
					<Particle x={EVH.x - 50 - 90 * emerge} y={EVH.y + 110} r={32} color={NAVY.stroke} text="e⁻" opacity={emerge} />
					<Particle x={EVH.x + 50 + 90 * emerge} y={EVH.y + 110} r={32} color={ROSE.stroke} text="e⁺" opacity={emerge} />
				</g>
				<g opacity={o(HD.cool)}><TempBar x={1680} y={440} w={50} h={340} level={1 - cool} color={cool > 0.4 ? '#c4582f' : '#d18f1f'} label="temperature" size={28} /></g>
			</FrameSvg>
			{final ? null : <div style={{position: 'absolute', left: 400, top: 470, opacity: prog(f, HD.eo, 12) * (1 - prog(f, HD.rb - 10, 14))}}><div style={{background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 20, padding: '18px 34px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 56, color: INK}}><span style={{color: AMBER.ink}}>Energy out,</span> <span style={{color: MASS.ink}}>mass down:</span> Δm = E/c²</div></div>}
			{[96, 690, 1284].map((x, i) => <Lbl key={i} x={x + 280} y={285} at={at(HD.one + i * 4)} color={MASS.ink} size={40}>Δm = E/c²</Lbl>)}
			<Lbl x={EVH.x} y={EVH.y + 200} at={at(HD.rb + 50)} color={INK} size={34} anchor="middle">pair production</Lbl>
			<Lbl x={EVH.x} y={EVH.y - 112} at={at(HD.al)} color={AMBER.ink} size={32} anchor="middle">{`≥ ${fx(PAIR_MEV, 2)} MeV each`}</Lbl>
			<Lbl x={EVH.x} y={EVH.y - 74} at={at(HD.al + 8)} color={GREY.ink} size={26} anchor="middle">head-on, equal energies</Lbl>
			<Lbl x={1200} y={400} at={at(HD.full)} color={AMBER.ink} size={32}>hot early Universe</Lbl>
			{chip ? <Chip x={96} y={870} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>Next: how did cooling radiation allow matter to form in the early Universe?</Chip> : null}
		</>
	);
};
/** v16's final frame (the last frame of Module 7) for the next video. */
export const M7V16FinalFrame: React.FC = () => <HandoffBoard16 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard16 f={useCurrentFrame()} />;

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>E = mc²; c² = 9.0 × 10¹⁶ J kg⁻¹.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>Energy leaves</span>: <span style={{color: MASS.ink}}>system mass falls by E/c²</span>.</>, at: 6},
		{content: <>Sun: loses 4.2 × 10⁹ kg each second.</>, at: 10},
		{content: <>e⁻ + e⁺ at rest → two 0.51 MeV photons.</>, at: 14},
		{content: <>Combustion ~10⁻¹⁰, fusion 0.7%, annihilation 100%.</>, at: 18},
	];
	const f = useCurrentFrame();
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: AMBER.ink}}>Energy out,</span> <span style={{color: MASS.ink}}>mass down:</span> Δm = E/c².</>} picture={<svg width={580} height={220}><SystemBox x={160} y={20} w={260} h={190} bar={140} out={30} barW={50} mass={MASS} /><Outflow cx={250} cy={115} r0={30} r1={200} t={f / 30} n={6} len={36} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
