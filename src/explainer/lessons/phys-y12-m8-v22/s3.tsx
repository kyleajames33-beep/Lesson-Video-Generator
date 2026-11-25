// Scenes 15 to 21: attempt 1 (the LHC bending field; the painted dipole) and its feedback, attempt 2 (the roles of the two
// fields in a synchrotron; a coded ring) and its feedback, the key notes, the course end (one coded view per module,
// joined by "models tested against evidence") and the silent end hold on the course-end frame (exported as
// `M8V22FinalFrame`).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {AccRing, ringPt} from '../../physics/atom/accelerator';
import {CrossGrid} from '../../physics/atom/particles';
import {SpectrumStrip} from '../../physics/light/spectrum';
import {LPlate} from '../../physics/light/plates';
import {ACCENT, A1_B, A1_P, A1_R, A1_SLIP, LHC, LHC_SUM, cap, cue, dur, hold} from './common';
import {AMBER, Arrow, DIPOLE, DOWN, GOLD, GREY, INK, LEP, Lbl, NAVY, PROTON, Shrunk, UP, WZ, fx, sci} from './parts';

// ---------- 15. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>In the Large Hadron Collider, each proton has a momentum of {U(`${sci(A1_P, 2)} kg m s⁻¹`)} and follows a curved path of radius {U(`${fx(A1_R / 1000, 2)} km`)} in the bending magnets. Calculate the magnetic field strength required. (q = 1.602 × 10⁻¹⁹ C)</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 620}) => (
	<svg width={w} height={(w * 470) / 620} viewBox="0 0 620 470" style={{overflow: 'visible'}}>
		<LPlate spec={DIPOLE} p={{x: 10, y: 10, w: 600}} />
		<path d="M40,440 Q310,330 580,440" fill="none" stroke={PROTON} strokeWidth={7} />
		<path d="M580,440 l-26,-24 l-6,22 Z" fill={PROTON} />
		<text x={310} y={460} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK, paintOrder: 'stroke', stroke: '#fffdf8', strokeWidth: 6}}>{`bend radius ${fx(A1_R / 1000, 2)} km`}</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 16. feedback 1 ----------
export const S16: React.FC = () => {
	const id = 'feedback-1';
	const me = cue(id, 'two thousand eight hundred metres'), te = cue(id, 'eight point zero nine tesla'), sl = cue(id, 'The slip is leaving the radius'), ot = cap(id, cue(id, 'over eight thousand tesla'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>{`p = ${sci(A1_P, 2)} kg m s⁻¹; r = ${fx(A1_R / 1000, 2)} km; q = 1.602 × 10⁻¹⁹ C`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 1290, top: 380}}><Pic1 w={520} /></div>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={me} ageAt={te} size={52} oldSize={38}>{`r = ${fx(A1_R / 1000, 2)} km = ${sci(A1_R, 2)} m`}</Row>
				<Row at={te - 30} size={38}>{`B = p/(qr) = ${sci(A1_P, 2)} / (1.602 × 10⁻¹⁹ × ${sci(A1_R, 2)})`}</Row>
				<Row at={te} size={56}><AnswerBox at={te + 4}>{`B ≈ ${fx(A1_B, 2)} T`}</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={760} at={sl} crossAt={ot} size={30} caption="metres, not kilometres">{`B = ${sci(A1_P, 2)} / (1.602 × 10⁻¹⁹ × ${fx(A1_R / 1000, 2)}) ≈ ${fx(Math.round(A1_SLIP / 10) * 10, 0)} T (over 8000)`}</CrossedChip>
		</>
	);
};

// ---------- 17. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain the {U('roles')} of the electric and magnetic fields in a synchrotron, and why the magnetic field strength {U('must increase')} as the particles gain energy.</>;
};
const Pic2: React.FC<{w?: number; arrows?: number; push?: number}> = ({w = 560, arrows = 0, push = 0}) => {
	const [px, py] = ringPt(280, 270, 200, 0.3), tx = Math.cos(2 * Math.PI * 0.3), ty = -Math.sin(2 * Math.PI * 0.3);
	return (
		<svg width={w} height={(w * 540) / 560} viewBox="0 0 560 540" style={{overflow: 'visible'}}>
			<rect x={4} y={4} width={552} height={532} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<AccRing cx={280} cy={270} r={200} glow={1} segments={8} />
			{push > 0.001 ? <Arrow x0={250} y0={470} x1={340} y1={470} color={AMBER.stroke} width={7} opacity={push} /> : null}
			{arrows > 0.001 ? <Arrow x0={px} y0={py} x1={px + (280 - px) * 0.45} y1={py + (270 - py) * 0.45} color={NAVY.stroke} width={7} opacity={arrows} /> : null}
			{arrows > 0.001 ? <Arrow x0={px} y0={py} x1={px + tx * 80} y1={py + ty * 80} color="#13767a" width={5} opacity={arrows} /> : null}
		</svg>
	);
};
export const S17: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 18. feedback 2 ----------
export const S18: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const ke = cue(id, "increases the particles' kinetic energy"), kr = cue(id, 'keeps them on the ring'), br = cue(id, 'B must rise as the momentum rises'), sl = cue(id, 'The slip is saying'), su = cap(id, cue(id, 'speeds them up'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={250} givens={<>explain: the roles of the electric and magnetic fields in a synchrotron | why B must rise as the particles gain energy</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 1330, top: 380}}><Pic2 w={490} push={prog(f, ke, 14)} arrows={prog(f, kr, 14)} /></div>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1200}}>
				<Row at={ke} size={44} style={{whiteSpace: 'normal'}}><span style={{color: AMBER.ink}}>electric field: F along v → does work → KE ↑ (each pass)</span></Row>
				<Row at={kr} size={44} style={{whiteSpace: 'normal'}}><span style={{color: NAVY.ink}}>magnetic field: F ⊥ v → no work → steers (centripetal force)</span></Row>
				<Row at={br} size={44}><AnswerBox at={br + 4}>r = p/(qB), r fixed → B ∝ p</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={sl} crossAt={su} size={32} caption="B steers; E pushes">the magnetic field speeds the particles up</CrossedChip>
		</>
	);
};

// ---------- 19. key notes ----------
export const S19: React.FC = () => {
	const notes = [
		{content: <>Making a particle needs at least its <span style={{color: GOLD.ink}}>mc²</span>.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>E fields push</span> (W = qV); <span style={{color: NAVY.ink}}>B fields steer</span>, no work.</>, at: 6},
		{content: <>Synchrotron: r fixed, so B = p/(qr) rises with p.</>, at: 10},
		{content: <>{`Head-on beams: ${fx(LHC.beam, 1)} + ${fx(LHC.beam, 1)} = ${fx(LHC_SUM, 1)} TeV available.`}</>, at: 14},
		{content: <>Detectors: tracks, calorimeters, missing momentum.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Electric fields push. Magnetic fields steer. Detectors read the debris.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

// ---------- 20 and 21. course end ----------
const TH = {y: 270, w: 380, h: 300, xs: [96, 536, 976, 1416]} as const;
const Box: React.FC<{i: number; lit: number; children: React.ReactNode}> = ({i, lit, children}) => (
	<g>
		<rect x={TH.xs[i]} y={TH.y} width={TH.w} height={TH.h} rx={18} fill="#fffdf8" stroke={lit > 0.5 ? INK : 'rgba(60,45,20,0.3)'} strokeWidth={lit > 0.5 ? 4 : 3} />
		<g opacity={0.35 + 0.65 * lit}>{children}</g>
	</g>
);
const M5View: React.FC<{x: number}> = ({x}) => (
	<g>
		<path d={`M${x + 24},${TH.y + 250} Q${x + 110},${TH.y + 20} ${x + 196},${TH.y + 250}`} fill="none" stroke="#d0761c" strokeWidth={5} />
		{[0, 0.25, 0.5, 0.75, 1].map(t => { const px = x + 24 + 172 * t, py = TH.y + 250 - 4 * 115 * t * (1 - t) * 2; return <circle key={t} cx={px} cy={py} r={7} fill={INK} />; })}
		<line x1={x + 14} y1={TH.y + 256} x2={x + 206} y2={TH.y + 256} stroke={INK} strokeWidth={3} />
		<circle cx={x + 290} cy={TH.y + 150} r={22} fill="#2f7fc4" stroke={INK} strokeWidth={2} />
		<ellipse cx={x + 290} cy={TH.y + 150} rx={72} ry={72} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
		<circle cx={x + 290 + 72} cy={TH.y + 150} r={9} fill={INK} />
	</g>
);
const M6View: React.FC<{x: number}> = ({x}) => (
	<g>
		<CrossGrid x={x + 10} y={TH.y + 10} w={TH.w - 20} h={TH.h - 20} gap={56} />
		<circle cx={x + TH.w / 2} cy={TH.y + TH.h / 2} r={95} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
		<circle cx={x + TH.w / 2 + 95} cy={TH.y + TH.h / 2} r={20} fill="#f7dcd8" stroke="#c8443a" strokeWidth={3} />
		<text x={x + TH.w / 2 + 95} y={TH.y + TH.h / 2 + 10} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: '#b8322a'}}>+</text>
	</g>
);
const M7View: React.FC<{x: number}> = ({x}) => (
	<g>
		<path d={Array.from({length: 81}, (_, i) => { const px = x + 30 + (320 * i) / 80; return `${i ? 'L' : 'M'}${px.toFixed(1)},${(TH.y + 110 - 50 * Math.sin((2 * Math.PI * i) / 27)).toFixed(1)}`; }).join(' ')} fill="none" stroke="#d18f1f" strokeWidth={5} />
		<SpectrumStrip s={{x: x + 30, y: TH.y + 200, w: 320, h: 60}} kind="continuous" id="v22-m7-strip" />
	</g>
);
const M8View: React.FC<{x: number}> = ({x}) => (
	<g>
		{[0, 1, 2, 3].map(r => [0, 1, 2].map(c => <rect key={`${r}${c}`} x={x + 24 + c * 64} y={TH.y + 30 + r * 60 + (r >= 2 ? 12 : 0)} width={56} height={52} rx={8} fill={r === 0 ? UP.soft : r === 1 ? DOWN.soft : r === 2 ? LEP.soft : '#efe9de'} stroke={r === 0 ? UP.stroke : r === 1 ? DOWN.stroke : r === 2 ? LEP.stroke : GREY.stroke} strokeWidth={3} />))}
		{[0, 1].map(r => [0, 1].map(c => <rect key={`c${r}${c}`} x={x + 230 + c * 60} y={TH.y + 30 + r * 60} width={52} height={52} rx={8} fill={WZ.soft} stroke={WZ.stroke} strokeWidth={3} />))}
		<circle cx={x + 286} cy={TH.y + 220} r={34} fill={GOLD.soft} stroke={GOLD.stroke} strokeWidth={6} />
	</g>
);
const LABELS = [['Module 5:', 'Advanced Mechanics'], ['Module 6:', 'Electromagnetism'], ['Module 7:', 'The Nature of Light'], ['Module 8: From the', 'Universe to the Atom']];
const CE = (() => {
	const id = 'course-end';
	return {id, po: cue(id, 'projectiles and orbits'), cf: cue(id, 'charges pushed and bent by fields'), nl: cue(id, 'the nature of light'), ua: cue(id, 'the universe and the atom'), te: cue(id, 'tested against evidence'), gl: cap(id, cue(id, 'Good luck'), 8), end: dur(id) - 1};
})();
export const CourseEnd: React.FC<{f: number; final?: boolean}> = ({f, final = false}) => {
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const lit = [o(CE.po), o(CE.cf), o(CE.nl), o(CE.ua)];
	const line = o(CE.te, 24);
	return (
		<>
			{final ? <SceneHeading text="Year 12 Physics: complete" at={-200} size={60} /> : <><SceneHeading text="Year 12 Physics" at={-200} out={CE.gl} size={60} /><SceneHeading text="Year 12 Physics: complete" at={CE.gl + 8} size={60} /></>}
			<FrameSvg>
				<line x1={TH.xs[0] + TH.w / 2} y1={TH.y + TH.h + 120} x2={TH.xs[0] + TH.w / 2 + (TH.xs[3] - TH.xs[0]) * line} y2={TH.y + TH.h + 120} stroke={INK} strokeWidth={4} />
				{TH.xs.map((x, i) => <line key={i} x1={x + TH.w / 2} y1={TH.y + TH.h + 100} x2={x + TH.w / 2} y2={TH.y + TH.h + 140} stroke={INK} strokeWidth={4} opacity={line} />)}
				<Box i={0} lit={lit[0]}><M5View x={TH.xs[0]} /></Box>
				<Box i={1} lit={lit[1]}><M6View x={TH.xs[1]} /></Box>
				<Box i={2} lit={lit[2]}><M7View x={TH.xs[2]} /></Box>
				<Box i={3} lit={lit[3]}><M8View x={TH.xs[3]} /></Box>
			</FrameSvg>
			{LABELS.map((l, i) => <React.Fragment key={i}><Lbl x={TH.xs[i]} y={TH.y + TH.h + 40} at={-30} color={INK} size={30}>{l[0]}</Lbl><Lbl x={TH.xs[i]} y={TH.y + TH.h + 76} at={-30} color={INK} size={30}>{l[1]}</Lbl></React.Fragment>)}
			<Lbl x={960} y={TH.y + TH.h + 180} at={final ? -60 : CE.te + 20} color={INK} size={36} anchor="middle">models tested against evidence</Lbl>
			<Chip x={660} y={860} at={final ? -60 : CE.gl} size={36} color={INK} border={INK}>Next: practise with past HSC papers</Chip>
		</>
	);
};
/** v22's final frame: the course-end frame (it closes Year 12 Physics; no next video). */
export const M8V22FinalFrame: React.FC = () => <CourseEnd f={CE.end} final />;
export const S20: React.FC = () => <CourseEnd f={useCurrentFrame()} />;
export const S21: React.FC = () => <M8V22FinalFrame />;

