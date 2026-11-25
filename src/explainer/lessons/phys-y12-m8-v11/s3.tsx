// Scenes 13 to 18: attempt 1 (the ladder with a 5 → 2 drop beside the painted tube; no wavelength shown) and its
// feedback, attempt 2 (the ladder with a 3 → 1 drop and an empty visible strip) and its feedback, the handoff (Bohr's
// unexplained rule; de Broglie's standing wave fitting an orbit three whole times, a wave that does not join, an empty
// evidence panel; its last frame is exported as `M8V11FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {wlColor} from '../../physics/light/spectrum';
import {DropArrow, HLevels, OrbitWave} from '../../physics/atom/bohr';
import type {LevelsGeom} from '../../physics/atom/bohr';
import {A1_EV, A1_INV, A1_J, A1_NM, A2_EV, A2_INV, A2_NM, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {GREY, GlowTube, INK, Lbl, NAVY, Nucleus, Shrunk, fx, sci} from './parts';

const LQ: LevelsGeom = {x: 60, w: 300, top: 60, bot: 480};
const LvlLabels: React.FC = () => <>{[1, 2, 3].map(n => <text key={n} x={LQ.x + LQ.w + 12} y={(n === 1 ? LQ.bot : LQ.top + (LQ.bot - LQ.top) / (n * n)) + 16} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 46, fill: NAVY.ink}}>{`n = ${n}`}</text>)}</>;

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>An electron in a hydrogen atom makes a transition from the {U('n = 5')} level to the {U('n = 2')} level. (a) Use the Rydberg equation to calculate the wavelength of the emitted photon. (b) Calculate the energy of this photon in {U('electron volts')}. (c) Name the spectral {U('series')} to which this line belongs. Data: R = 1.097 × 10⁷ m⁻¹, h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, 1 eV = 1.602 × 10⁻¹⁹ J.</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 540) / 678} viewBox="0 0 678 540" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={532} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<HLevels g={LQ} levels={[1, 2, 3, 4, 5, 6]} color={NAVY.stroke} infLabel="" />
		<DropArrow g={LQ} x={LQ.x + 200} from={5} to={2} color={INK} width={6} />
		<LvlLabels />
		<GlowTube x={500} y={60} h={440} />
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={30} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const nm = cue(id, 'four hundred and thirty four nanometres'), ev = cue(id, 'two point eight six electron volts'), ba = cue(id, "so it's Balmer"), sl = cue(id, 'The slip is swapping'), ng = cap(id, cue(id, 'which makes one over lambda negative'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={380} givens={<>nᵢ = 5, n<sub>f</sub> = 2; R = 1.097 × 10⁷ m⁻¹; h, c, 1 eV (data sheet)</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 460, display: 'flex', flexDirection: 'column', gap: 10, width: 1300}}>
				<Row at={nm - 40} size={28}>{`(a) 1/λ = 1.097 × 10⁷ (1/2² − 1/5²) = 1.097 × 10⁷ × 0.21 = ${sci(A1_INV, 3)} m⁻¹`}</Row>
				<Row at={nm - 10} size={30}><AnswerBox at={nm}>{`λ = 1 / (${sci(A1_INV, 3)}) = ${sci(A1_NM * 1e-9, 2)} m = ${fx(A1_NM)} nm`}</AnswerBox></Row>
				<Row at={ev - 40} size={28}>{`(b) E = hc/λ = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (4.34 × 10⁻⁷) = ${sci(A1_J, 2)} J`}</Row>
				<Row at={ev - 10} size={30}><AnswerBox at={ev}>{`(${sci(A1_J, 2)}) / (1.602 × 10⁻¹⁹) = ${fx(A1_EV, 2)} eV`}</AnswerBox></Row>
				<Row at={ba} size={30}><AnswerBox at={ba + 6}>(c) nf = 2: Balmer series (blue-violet line)</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1400, top: 470}}><Pic1 w={420} /></div>
			<CrossedChip x={96} y={820} at={sl} crossAt={ng} size={28} caption="ni and nf swapped">{`1/λ = R(1/5² − 1/2²) = ${sci(-A1_INV, 2)} m⁻¹`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Calculate the wavelength of the photon emitted when an electron in a hydrogen atom falls from the {U('n = 3')} level to the {U('n = 1')} level, and explain why this spectral line {U('cannot be seen')}. Data: R = 1.097 × 10⁷ m⁻¹.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 540) / 678} viewBox="0 0 678 540" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={532} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<HLevels g={LQ} levels={[1, 2, 3, 4, 5, 6]} color={NAVY.stroke} infLabel="" />
		<DropArrow g={LQ} x={LQ.x + 200} from={3} to={1} color={INK} width={6} />
		<LvlLabels />
		<rect x={480} y={130} width={170} height={300} fill="#ffffff" stroke={INK} strokeWidth={3} />
		<text x={565} y={100} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 46, fill: INK}}>visible</text>
		<text x={565} y={480} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>380 to 750 nm</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const nm = cue(id, 'one hundred and three nanometres'), bg = cue(id, 'a very big gap'), ly = cue(id, "It's a Lyman line"), sl = cue(id, 'The slip is thinking'), la = cap(id, cue(id, 'where the electron lands'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>nᵢ = 3, n<sub>f</sub> = 1; R = 1.097 × 10⁷ m⁻¹; visible 380 to 750 nm</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16, width: 1300}}>
				<Row at={nm - 40} size={32}>{`1/λ = 1.097 × 10⁷ (1/1² − 1/3²) = 1.097 × 10⁷ × 8/9 = ${sci(A2_INV, 3)} m⁻¹`}</Row>
				<Row at={nm - 10} size={34}><AnswerBox at={nm}>{`λ = 1 / (${sci(A2_INV, 3)}) = ${sci(A2_NM * 1e-9, 2)} m = ${fx(A2_NM)} nm`}</AnswerBox></Row>
				<Row at={bg} size={34}><AnswerBox at={bg + 6}>{`${fx(A2_NM)} nm < 380 nm: ultraviolet, not visible (ΔE = ${fx(A2_EV, 1)} eV)`}</AnswerBox></Row>
				<Row at={ly} size={34}><AnswerBox at={ly + 6}>nf = 1: Lyman series</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1400, top: 400}}><Pic2 w={420} /></div>
			<FrameSvg>
				<rect x={96} y={700} width={600} height={50} fill="#e6e0f0" stroke={INK} strokeWidth={3} />
				<rect x={696} y={700} width={500} height={50} fill="url(#m8v11-vis)" stroke={INK} strokeWidth={3} />
				<defs><linearGradient id="m8v11-vis"><stop offset="0" stopColor="#7a3cc8" /><stop offset="0.3" stopColor="#2f6fe0" /><stop offset="0.5" stopColor="#2fb0a0" /><stop offset="0.7" stopColor="#e0d030" /><stop offset="1" stopColor="#d23a2a" /></linearGradient></defs>
				<line x1={96 + 600 * ((103 - 80) / 300)} y1={690} x2={96 + 600 * ((103 - 80) / 300)} y2={760} stroke={INK} strokeWidth={6} opacity={prog(useCurrentFrame(), nm, 12)} />
			</FrameSvg>
			<Lbl x={100} y={790} at={0} color={GREY.ink} size={26}>UV (80 to 380 nm)</Lbl>
			<Lbl x={700} y={790} at={0} color={INK} size={26}>visible (380 to 750 nm)</Lbl>
			<Lbl x={96 + 600 * ((103 - 80) / 300) + 12} y={672} at={nm} color={INK} size={28}>103 nm</Lbl>
			<CrossedChip x={1240} y={840} at={sl} crossAt={la} size={26} caption="series = final level: nf = 1, Lyman">{"starts at 3, so it's Balmer"}</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, eb: cue(id, 'every Balmer wavelength'), ur: cue(id, 'one unexplained rule'), lb: cue(id, 'Louis de Broglie'), ow: cue(id, 'only orbits that fit a whole number'), bc: cue(id, 'a bold claim about a particle'), nx: cap(id, cue(id, 'So what evidence shows')), end: dur(id) - 1};
})();
export const ORB11 = {cx: 700, cy: 570, r: 230};
export const BAD11 = {cx: 1180, cy: 400, r: 110};
export const PANEL11 = {x: 1440, y: 200, w: 380, h: 620};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard11: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; panel?: boolean}> = ({f, final = false, heading = true, chip = true, panel = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const lines = [656.3, 486.2, 434.1, 410.2];
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{!final ? <g opacity={1 - prog(f, HD.lb - 20, 14)}>
					<rect x={980} y={260} width={840} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<HLevels g={{x: 1020, w: 300, top: 300, bot: 740}} levels={[1, 2, 3, 4, 5, 6]} color={NAVY.stroke} infLabel="" hi={2} />
					{[3, 4, 5, 6].map((n, k) => <DropArrow key={n} g={{x: 1020, w: 300, top: 300, bot: 740}} x={1120 + 40 * k} from={n} to={2} color={wlColor(lines[k])} width={6} />)}
					<rect x={1380} y={380} width={400} height={80} fill="#14110f" stroke={INK} strokeWidth={3} />
					{lines.map((nm, i) => <rect key={i} x={1380 + ((nm - 380) / 370) * 400 - 5} y={383} width={10} height={74} fill={wlColor(nm)} />)}
					{lines.map((nm, i) => (f >= HD.eb + 6 * i ? <path key={`t${i}`} d={`M${1380 + ((nm - 380) / 370) * 400 - 10},${490} l8,10 l14,-18`} fill="none" stroke={INK} strokeWidth={4} /> : null))}
				</g> : null}
				<g opacity={o(HD.ur)}><circle cx={ORB11.cx} cy={ORB11.cy} r={ORB11.r} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="14 6" /><Nucleus x={ORB11.cx} y={ORB11.cy} r={20} />{!final && f < HD.ow ? <circle cx={ORB11.cx + ORB11.r * Math.cos(f * 0.04)} cy={ORB11.cy + ORB11.r * Math.sin(f * 0.04)} r={14} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} /> : null}</g>
				<g opacity={o(HD.ow)}>
					<OrbitWave cx={ORB11.cx} cy={ORB11.cy} r={ORB11.r} waves={3} amp={26} color={NAVY.stroke} draw={final ? 1 : prog(f, HD.ow, 40)} width={5} />
					<OrbitWave cx={BAD11.cx} cy={BAD11.cy} r={BAD11.r} waves={2.5} amp={16} color={NAVY.stroke} laps={1} draw={final ? 1 : prog(f, HD.ow + 30, 30)} width={4} />
					<g stroke={GREY.stroke} strokeWidth={7}><line x1={BAD11.cx - 60} y1={BAD11.cy - 60} x2={BAD11.cx + 60} y2={BAD11.cy + 60} /><line x1={BAD11.cx + 60} y1={BAD11.cy - 60} x2={BAD11.cx - 60} y2={BAD11.cy + 60} /></g>
				</g>
				{panel ? <rect x={PANEL11.x} y={PANEL11.y} width={PANEL11.w} height={PANEL11.h} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="14 10" opacity={o(HD.nx - 20)} /> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 190, opacity: o(HD.ur)}}><span style={{display: 'inline-block', border: `4px solid ${INK}`, borderRadius: 12, padding: '4px 16px', background: '#fffdf8', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: INK}}>mvr = nh / 2π</span></div>
			<Chip x={420} y={196} at={at(HD.ur + 10)} size={30} color={GREY.ink}>why?</Chip>
			{!final ? <Lbl x={96} y={420} at={HD.ur + 10} out={HD.ow} color={INK} size={28}>the rule picks the orbits</Lbl> : null}
			{!final ? <Lbl x={96} y={470} at={HD.ur + 16} out={HD.ow} color={GREY.ink} size={28}>but gives no reason</Lbl> : null}
			{final ? null : <Lbl x={ORB11.cx} y={ORB11.cy - ORB11.r - 30} at={HD.ur} out={HD.ow} color={INK} size={28} anchor="middle">{"Bohr's allowed orbit (rule assumed)"}</Lbl>}
			<Lbl x={ORB11.cx} y={ORB11.cy + ORB11.r + 70} at={at(HD.ow + 20)} color={NAVY.ink} size={28} anchor="middle">n = 3: three whole wavelengths fit</Lbl>
			<Lbl x={BAD11.cx} y={BAD11.cy + BAD11.r + 56} at={at(HD.ow + 40)} color={GREY.ink} size={28} anchor="middle">{"doesn't fit: not allowed"}</Lbl>
			<Lbl x={980} y={660} at={at(HD.lb)} color={INK} size={32}>de Broglie, 1924</Lbl>
			<HandTag x={980} y={730} text="electron = wave?" at={at(HD.bc)} size={40} color={NAVY.ink} />
			{panel ? <Lbl x={PANEL11.x + PANEL11.w / 2} y={PANEL11.y + 60} at={at(HD.nx - 20)} color={INK} size={40} anchor="middle">evidence?</Lbl> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: what evidence shows that particles have wave behaviour?</Chip> : null}
		</>
	);
};
/** v11's final frame for the next video. */
export const M8V11FinalFrame: React.FC = () => <HandoffBoard11 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard11 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Photon energy = gap: E<sub>i</sub> − E<sub>f</sub> = hf = hc/λ.</>, at: 2},
		{content: <>Eₙ = −13.6/n² eV; 3 → 2: 1.89 eV, 656 nm.</>, at: 6},
		{content: <>1/λ = R(1/n<sub>f</sub>² − 1/n<sub>i</sub>²); n<sub>f</sub> is the lower level.</>, at: 10},
		{content: <>Balmer (n<sub>f</sub> = 2): bright lines 656, 486, 434, 410 nm.</>, at: 14},
		{content: <>Limit (n<sub>i</sub> = ∞): 365 nm, an edge, in the UV.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Lyman, Balmer, Paschen land on 1, 2, 3: ultraviolet, visible, infrared.</>} picture={<svg width={580} height={220}><HLevels g={{x: 40, w: 300, top: 20, bot: 200}} levels={[1, 2, 3, 4]} color={NAVY.stroke} inf={false} />{[1, 2, 3].map((n, i) => <DropArrow key={n} g={{x: 40, w: 300, top: 20, bot: 200}} x={90 + 90 * i} from={n + 2} to={n} color={i === 1 ? wlColor(486) : GREY.stroke} width={5} />)}<text x={360} y={190} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>UV, visible, IR</text></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
