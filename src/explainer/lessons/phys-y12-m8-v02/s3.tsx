// Scenes 13 to 18: attempt 1 (the painted galaxy with lab and galaxy strips carrying the calcium K line) and its
// feedback, attempt 2 (two painted galaxies, the Milky Way and Andromeda approaching) and its feedback, the handoff (the
// four tests shrink to tags; the painted Sun's light to a spectrum strip with an intensity curve and dark lines;
// "T = ?"; its last frame is exported as `M8V02FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {SpectrumStrip} from '../../physics/light/spectrum';
import {TempBar} from '../../physics/light/massenergy';
import {GALAXY, HORN, CLOUD} from '../../physics/atom/universe';
import {StarCurve} from '../../physics/atom/stellar';
import {A1_D, A1_OBS, A1_REST, A1_SLIP, A1_V, A1_Z, ACCENT, AND_D, AND_HUB, AND_OBS, C_KMS, H0, HEAD, HEAD_NEXT, HEAD_SIZE, HUBBLE_PTS, cap, cue, dur, hold} from './common';
import {AMBER, INK, Lbl, NAVY, PlotAxes, RED, Shrunk, fx, px, py, sci} from './parts';
import type {PlotBox} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>The calcium K absorption line has a rest wavelength of {U('393.4 nm')}. In the spectrum of a distant galaxy it is observed at {U('425.0 nm')}. Using {U('H₀ = 70 km s⁻¹ Mpc⁻¹')}, estimate the distance to the galaxy in megaparsecs.{u ? null : <><br /><span style={{fontSize: '0.85em'}}>c = 3.00 × 10⁵ km s⁻¹</span></>}</>;
};
const StripsPic: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<LPlate spec={GALAXY} p={{x: 190, y: 50, w: 300}} />
		<text x={40} y={300} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>lab</text>
		<SpectrumStrip s={{x: 40, y: 312, w: 600, h: 56}} kind="absorption" lines={[A1_REST]} lineW={8} />
		<text x={40} y={420} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>galaxy</text>
		<SpectrumStrip s={{x: 40, y: 432, w: 600, h: 56}} kind="absorption" lines={[A1_OBS]} lineW={8} />
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<StripsPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const z = cue(id, 'eight zero'), sec = cue(id, 'second'), mp = cue(id, 'megaparsecs'), big = cap(id, cue(id, 'big'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>{`λrest = ${A1_REST} nm; λobs = ${fx(A1_OBS, 1)} nm; H₀ = ${H0} km s⁻¹ Mpc⁻¹; c = ${sci(C_KMS, 2)} km s⁻¹`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={z - 6} ageAt={sec} size={42}>{`z = (${fx(A1_OBS, 1)} − ${A1_REST}) / ${A1_REST} = 31.6/393.4 = ${fx(A1_Z, 4)}`}</Row>
				<Row at={sec - 6} ageAt={mp} size={42}>{`v = cz = (${sci(C_KMS, 2)})(${fx(A1_Z, 4)}) = ${sci(A1_V, 2)} km s⁻¹`}</Row>
				<Row at={mp - 6} size={48}><AnswerBox at={mp}>{`d = v/H₀ = (${sci(A1_V, 2)}) / ${H0} = ${fx(A1_D)} ≈ ${fx(Math.round(A1_D / 10) * 10)} Mpc`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><StripsPic w={620} /></div>
			<CrossedChip x={96} y={760} at={big} crossAt={big + 12} size={30} caption="H₀ is in km s⁻¹ Mpc⁻¹: use v in km s⁻¹">{`d = (2.41 × 10⁷ m s⁻¹) / ${H0} = ${sci(A1_SLIP, 1)} Mpc`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>The Andromeda galaxy is {U('0.77 Mpc')} from Earth. Its spectral lines are {U('blueshifted')}, showing it is approaching at about {U('300 km s⁻¹')}. A student claims: {"'"}This shows that the Universe is not expanding.{"'"} Evaluate this claim. Use H₀ = 70 km s⁻¹ Mpc⁻¹.</>;
};
const PairPic: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<LPlate spec={GALAXY} p={{x: 30, y: 150, w: 260}} />
		<LPlate spec={GALAXY} p={{x: 390, y: 150, w: 260}} />
		<text x={160} y={380} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>Milky Way</text>
		<text x={520} y={380} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>Andromeda</text>
		<path d="M440,450 H260" stroke={NAVY.stroke} strokeWidth={6} /><path d="M244,450 l22,-13 v26 z" fill={NAVY.stroke} />
		<text x={350} y={500} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: NAVY.ink}}>approaching</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<PairPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
const TH: PlotBox = {x: 1320, y: 360, w: 440, h: 360, x0: 0, x1: 500, y0: 0, y1: 35000};
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const sec = cue(id, 'second'), mb = cue(id, 'much bigger'), di = cue(id, 'distance', 2), con = cap(id, cue(id, 'contracting'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`d = ${AND_D} Mpc; observed approach ${AND_OBS} km s⁻¹; H₀ = ${H0} km s⁻¹ Mpc⁻¹`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 18, width: 1150}}>
				<Row at={sec - 6} size={34}><AnswerBox at={sec}>{`Hubble-law prediction: H₀d = ${H0} × ${AND_D} ≈ ${fx(AND_HUB)} km s⁻¹ away`}</AnswerBox></Row>
				<Row at={mb - 6} size={34}><AnswerBox at={mb}>{`observed: ${AND_OBS} km s⁻¹ towards us ≫ ${fx(AND_HUB)} km s⁻¹ predicted away`}</AnswerBox></Row>
			</div>
			<HandTag x={96} y={650} text="gravity, nearby" at={mb + 16} size={36} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1230, top: 300, opacity: 1 - prog(f, di, 14)}}><PairPic w={620} /></div>
			<FrameSvg>
				<g opacity={prog(f, di, 14)}>
					<PlotAxes b={TH} xt={[0, 250, 500]} yt={[0, 30000]} fy={v => (v ? '30 000' : '0')} xl="d (Mpc)" yl="v (km s⁻¹)" size={24} />
					<line x1={px(TH, 0)} y1={py(TH, 0)} x2={px(TH, 500)} y2={py(TH, 35000)} stroke={AMBER.stroke} strokeWidth={4} />
					{HUBBLE_PTS.map(([d, v], i) => <circle key={i} cx={px(TH, d)} cy={py(TH, v)} r={7} fill={NAVY.stroke} />)}
				</g>
			</FrameSvg>
			<Lbl x={1230} y={830} at={di + 10} color={INK} size={28}>distant galaxies: all redshifted, v ∝ d</Lbl>
			<CrossedChip x={96} y={760} at={con} crossAt={con + 12} size={30} caption="nearby: local motion; far: expansion">blueshift means the Universe is contracting</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff-v03';
	return {id, ev: cue(id, 'Every one of these clues was read from light'), tt: cue(id, 'turn the same tool on the stars themselves'), bb: cue(id, 'a black body curve with dark lines cut into it'), nx: cap(id, cue(id, 'So how can spectra classify')), end: dur(id) - 1};
})();
const TAGS = ['redshift ∝ distance', '2.7 K black body', '25% helium', 'supernovae × (1 + z)'];
export const SUN_LINES = [393.4, 396.8, 410.2, 434.0, 486.1, 656.3] as const;
export const H_STRIP = {x: 720, y: 720, w: 960, h: 70};
export const H_CURVE = {x: 720, y: 400, w: 960, h: 290, nm0: 380, nm1: 750};
export const SUN_DIPS = SUN_LINES.map(nm => ({nm, depth: 0.45, width: 2.6}));
export const H_SUN = {cx: 330, cy: 560, d: 380};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard02: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; tags?: boolean; marks?: boolean}> = ({f, final = false, heading = true, chip = true, tags = true, marks = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g opacity={o(HD.tt)}>
					<Disc spec={SUN} cx={H_SUN.cx} cy={H_SUN.cy} d={H_SUN.d} />
					<line x1={H_SUN.cx + H_SUN.d / 2 + 10} y1={H_SUN.cy + 30} x2={H_STRIP.x - 20} y2={H_STRIP.y + H_STRIP.h / 2} stroke={AMBER.stroke} strokeWidth={6} />
					<path d={`M${H_STRIP.x - 20},${H_STRIP.y + H_STRIP.h / 2} l-22,-6 v12 z`} fill={AMBER.stroke} />
					<SpectrumStrip s={H_STRIP} kind="absorption" lines={SUN_LINES} lineW={6} axis ticks={[400, 500, 600, 700]} />
				</g>
				<g opacity={o(HD.bb)}>
					<line x1={H_CURVE.x} y1={H_CURVE.y + H_CURVE.h} x2={H_CURVE.x + H_CURVE.w} y2={H_CURVE.y + H_CURVE.h} stroke={INK} strokeWidth={3} />
					<StarCurve g={H_CURVE} temp={5800} dips={SUN_DIPS} draw={final ? 1 : prog(f, HD.bb, 40)} />
				</g>
				<g opacity={o(HD.nx - 20)}><TempBar x={1760} y={420} w={40} h={260} level={0.5} color="#d8452f" /></g>
			</FrameSvg>
			{tags ? TAGS.map((t, i) => <Chip key={t} x={96 + i * 430} y={176} at={at(HD.ev + 6 * i)} size={26} color={INK}>{t}</Chip>) : null}
			<Lbl x={H_STRIP.x + H_STRIP.w} y={H_STRIP.y + H_STRIP.h + 80} at={at(HD.tt)} color={INK} size={26} anchor="end">wavelength (nm)</Lbl>
			<Lbl x={H_CURVE.x + 20} y={H_CURVE.y - 20} at={at(HD.bb + 20)} color={INK} size={30}>continuous + absorption</Lbl>
			<Lbl x={1780} y={380} at={at(HD.nx - 20)} color={RED.ink} size={40} anchor="middle">T = ?</Lbl>
			{marks ? <HandTag x={96} y={820} text="same tool, new target" at={at(HD.tt + 20)} size={36} color={RED.ink} /> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: how can spectra classify stars and reveal their temperature?</Chip> : null}
		</>
	);
};
/** v02's final frame for the next video. */
export const M8V02FinalFrame: React.FC = () => <HandoffBoard02 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard02 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>z = Δλ/λrest; small z (below 0.1): v ≈ cz.</>, at: 2},
		{content: <>{"Hubble's law"} v = H₀d, H₀ ≈ 70 km s⁻¹ Mpc⁻¹; no centre.</>, at: 6},
		{content: <>Nearby, own motion wins (Andromeda blueshifted).</>, at: 10},
		{content: <>CMB: 2.725 K black body, peak ≈ 1 mm, every direction.</>, at: 14},
		{content: <>≈ 25% He in the least processed gas; supernovae × (1 + z).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Stretched light, leftover glow, a quarter helium, slow supernovae.</>} picture={<svg width={580} height={220}>
				<LPlate spec={GALAXY} p={{x: 0, y: 50, w: 130}} />
				<LPlate spec={HORN} p={{x: 150, y: 50, w: 130}} />
				<LPlate spec={CLOUD} p={{x: 300, y: 50, w: 120}} />
				<path d="M450,170 H570 M450,170 V60" stroke={INK} strokeWidth={2.5} fill="none" /><path d={Array.from({length: 40}, (_, i) => `${i ? 'L' : 'M'}${452 + i * 3},${168 - 90 * Math.exp(-(((i / 39 - 0.2) / (i / 39 < 0.2 ? 0.1 : 0.35)) ** 2))}`).join(' ')} fill="none" stroke={RED.stroke} strokeWidth={3} />
			</svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
