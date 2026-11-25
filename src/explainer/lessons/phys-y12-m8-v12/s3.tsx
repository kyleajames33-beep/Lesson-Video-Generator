// Scenes 13 to 18: attempt 1 (an electron gun aimed at crystal rows, 100 V from rest) and its feedback, attempt 2 (the
// painted tube with a face-on screen view of two rings) and its feedback, the handoff (the ring screen built from single
// spots, "next?" hovering over the likely bands, the orbit fading into a haze; its last frame is exported as
// `M8V12FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow} from '../../physics/light/em';
import {CrystalRows, RingScreen, ringSpots} from '../../physics/atom/matterwave';
import {OrbitWave} from '../../physics/atom/bohr';
import {A1_EK, A1_LAM, A1_SLIP, A1_V3, ACCENT, DG_LAM, DG_MEAS, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {GREY, INK, Lbl, NAVY, Nucleus, Shrunk, TEAL, Tube, fx, sci, tubeAt, tubeH} from './parts';
import {RS_RINGS, SPOT_RUN} from './s2';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>An electron is accelerated {U('from rest')} through a potential difference of {U('100 V')}. (a) Calculate the de Broglie wavelength of the electron. (b) A crystal has atoms spaced {U('2.0 × 10⁻¹⁰ m')} apart. Explain whether this crystal could produce a diffraction pattern with these electrons. Data: mₑ = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C, h = 6.626 × 10⁻³⁴ J s.</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 520) / 678} viewBox="0 0 678 520" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={512} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<rect x={40} y={170} width={150} height={90} rx={10} fill="#cfcac2" stroke={INK} strokeWidth={3} />
		<line x1={190} y1={215} x2={380} y2={215} stroke={NAVY.stroke} strokeWidth={6} strokeDasharray="12 8" />
		<CrystalRows x={420} y={120} cols={4} rows={4} s={60} r={20} />
		<text x={115} y={310} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>100 V,</text>
		<text x={115} y={360} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>from rest</text>
		<text x={510} y={420} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK}}>atoms 2.0 × 10⁻¹⁰ m</text>
		<text x={510} y={466} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK}}>apart</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={32} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const jo = cue(id, 'one point six zero times ten to the minus seventeen joules'), se = cue(id, 'five point nine three'), me = cue(id, 'one point two three times ten to the minus ten metres'), cd = cue(id, 'it can diffract'), sl = cue(id, 'The slip is using'), fl = cap(id, cue(id, 'faster than light'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>V = 100 V; d = 2.0 × 10⁻¹⁰ m; mₑ, e, h (data sheet)</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 14, width: 1150}}>
				<Row at={jo - 20} ageAt={se} size={34}>{`(a) E_k = qV = (1.602 × 10⁻¹⁹)(100) = ${sci(A1_EK, 2)} J`}</Row>
				<Row at={se - 10} ageAt={me} size={32}>{`v = √(2E_k/m) = √(2 × ${sci(A1_EK, 2)} / (9.109 × 10⁻³¹)) = ${sci(A1_V3, 2)} m s⁻¹`}</Row>
				<Row at={me - 10} size={34}><AnswerBox at={me}>{`λ = h/mv = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × ${sci(A1_V3, 2)}) = ${sci(A1_LAM, 2)} m`}</AnswerBox></Row>
				<Row at={cd} size={32}><AnswerBox at={cd + 4}>(b) λ ≈ spacing (same order, 10⁻¹⁰ m): strong diffraction expected</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 430}}><Pic1 w={520} /></div>
			<CrossedChip x={96} y={830} at={sl} crossAt={fl} size={28} caption="eV is not J">{`E_k = 100 J → v = ${sci(A1_SLIP, 2)} m s⁻¹ > c`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain how the {U('diffraction')} of electrons by crystals provides {U('evidence')} for {U("de Broglie's hypothesis")}.</>;
};
const P2 = {x: 20, y: 250, w: 640};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 540) / 678} viewBox="0 0 678 540" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={532} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<Tube p={P2} />
		<RingScreen cx={180} cy={130} R={110} lit={1} rings={[44, 78]} ringW={9} ringColor={TEAL.stroke} />
		<path d={`M300,140 Q${tubeAt(P2, 'screen')[0]},120 ${tubeAt(P2, 'screen')[0]},${tubeAt(P2, 'screen')[1] - 60}`} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 7" />
		<text x={330} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>screen view</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const dp = cue(id, 'De Broglie proposed'), ip = cue(id, 'an interference pattern that only waves can make'), hc = cue(id, 'so the hypothesis is confirmed'), sl = cue(id, 'The slip is saying'), sp = cap(id, cue(id, 'arrives as a single spot'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>{"explain: electrons diffracted by crystals | evidence for de Broglie's hypothesis"}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 370, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={dp} size={40}><AnswerBox at={dp + 4}>hypothesis: λ = h/mv</AnswerBox></Row>
				<Row at={ip} size={36}><AnswerBox at={ip + 4}>pattern of peaks or rings = interference → wave behaviour</AnswerBox></Row>
				<Row at={hc} size={32}><AnswerBox at={hc + 4}>{`λ from pattern (d sin θ) = h/mv (Davisson and Germer: ${fx(DG_MEAS * 1e10, 2)} vs ${fx(DG_LAM * 1e10, 2)} × 10⁻¹⁰ m)`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 370}}><Pic2 w={520} /></div>
			<CrossedChip x={96} y={800} at={sl} crossAt={sp} size={30} caption="both: lands as a particle, spreads as a wave">electrons are waves, not particles</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, ed: cue(id, 'So electrons diffract'), br: cue(id, "explains Bohr's rule"), ot: cue(id, 'one tiny spot'), lk: cue(id, "only where it's likely to"), or: cue(id, 'what does its orbit really look like'), nx: cap(id, cue(id, 'Why do orbital probabilities')), end: dur(id) - 1};
})();
export const SCR12 = {cx: 500, cy: 560, R: 240};
export const ORB12 = {cx: 1360, cy: 560, r: 190};
const hh = (n: number) => { const s = Math.sin(n * 91.7 + 17.3) * 43758.5453; return s - Math.floor(s); };
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard12: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const run = SPOT_RUN();
	const base = 2000 - 40;
	const fresh = final ? 40 : f < HD.ot ? 40 : Math.min(40, Math.floor((f - HD.ot) / 8));
	const spots = ringSpots(run, base + (f >= HD.ot || final ? fresh : 40), RS_RINGS, SCR12.R);
	const k = Math.floor(f / 18), mk = [RS_RINGS[k % 2] * Math.cos(6.283 * hh(k)), RS_RINGS[k % 2] * Math.sin(6.283 * hh(k))];
	const fade = final ? 1 : prog(f, HD.or + 20, 40);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g opacity={o(HD.ed)}><RingScreen cx={SCR12.cx} cy={SCR12.cy} R={SCR12.R} lit={1} rings={RS_RINGS} ringColor={TEAL.stroke} ringOpacity={0} spots={spots} spotR={3.4} shade={o(HD.lk)} /></g>
				{final || f >= HD.lk ? <g opacity={o(HD.lk)}><circle cx={SCR12.cx + mk[0]} cy={SCR12.cy + mk[1]} r={22} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" /></g> : null}
				<g>
					<circle cx={ORB12.cx} cy={ORB12.cy} r={ORB12.r * 1.15} fill="url(#m8v12-haze)" opacity={fade} />
					<defs><radialGradient id="m8v12-haze"><stop offset="0" stopColor="#9a958c" stopOpacity={0.55} /><stop offset="1" stopColor="#9a958c" stopOpacity={0} /></radialGradient></defs>
					<OrbitWave cx={ORB12.cx} cy={ORB12.cy} r={ORB12.r} waves={1} amp={28} color={NAVY.stroke} width={6 - 4 * fade} />
					<Nucleus x={ORB12.cx} y={ORB12.cy} r={16} />
				</g>
			</FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 186}}><span style={{display: 'inline-block', border: `4px solid ${INK}`, borderRadius: 12, padding: '2px 14px', background: '#fffdf8', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK}}>mvr = nh / 2π ✓</span></div>
			<Lbl x={SCR12.cx} y={SCR12.cy + SCR12.R + 44} at={at(HD.ed)} color={INK} size={28} anchor="middle">screen: rings built from single spots</Lbl>
			<Lbl x={SCR12.cx + SCR12.R + 20} y={SCR12.cy - 120} at={at(HD.lk)} color={TEAL.ink} size={30}>likely</Lbl>
			<Lbl x={SCR12.cx + SCR12.R + 20} y={SCR12.cy - 70} at={at(HD.lk + 10)} color={NAVY.ink} size={30}>next?</Lbl>
			<HandTag x={ORB12.cx - 60} y={ORB12.cy + ORB12.r + 70} text="a path?" at={at(HD.or + 30)} size={44} color={GREY.ink} />
			<Lbl x={ORB12.cx} y={ORB12.cy - ORB12.r - 40} at={-60} color={INK} size={28} anchor="middle">{final || f >= HD.or ? 'n = 1 orbit: a real path?' : 'n = 1: one wavelength fits'}</Lbl>
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: why do orbital probabilities replace literal electron paths?</Chip> : null}
		</>
	);
};
/** v12's final frame for the next video. */
export const M8V12FinalFrame: React.FC = () => <HandoffBoard12 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard12 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <><span style={{color: NAVY.ink}}>λ = h/p = h/mv</span> (for v below about 0.1c).</>, at: 2},
		{content: <>Big masses: λ far too small to diffract.</>, at: 6},
		{content: <>Electron λ ≈ atom spacing: crystals act as gratings.</>, at: 10},
		{content: <>Davisson and Germer: d sin θ = 1.65, h/mv = 1.67 (× 10⁻¹⁰ m).</>, at: 14},
		{content: <>2πr = nλ gives <span style={{color: TEAL.ink}}>mvr = nh/2π</span>.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Pattern + number = evidence. Travels as a wave, lands as a spot.</>} picture={<svg width={580} height={220}><RingScreen cx={110} cy={110} R={100} lit={1} rings={[40, 72]} ringW={10} ringColor={TEAL.stroke} /><Arrow from={[240, 110]} to={[330, 110]} color={INK} width={4} head={14} /><text x={350} y={120} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>= h/mv ✓</text></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
// keep the tube helpers referenced for the attempt picture
export const P2_H = tubeH(P2.w);
