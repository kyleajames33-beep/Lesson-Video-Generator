// Scenes 11 to 16: attempt 1 (the bench thumbnail with a red beam and the screen's band), feedback 1 (a Huygens slit
// picture narrowing to one wavelet), attempt 2 (the two model pictures) and its feedback (the two decisive rows with
// ticks landing under Huygens), the handoff (one slit's wavelets, then two slits whose spreading waves overlap and a
// screen of evenly spaced bands; its last frame is exported as `M7V05FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {OpticsBench, ScreenView} from '../../physics/light/bench';
import {ApertureWaves, Barrier, TwoSlitWaves} from '../../physics/light/wavefronts';
import {doubleSlitBrightness} from '../../sims/waves';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, RED, cap, cue, dur, hold, slitBright} from './common';
import {GREY, Lbl, ParticleIcon, RED_L, Shrunk, TEAL, WaveIcon} from './parts';

// ---------- 11. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>Laser light passes through a single narrow slit onto a screen. When the slit is made {u ? <u>narrower</u> : 'narrower'}, the central bright band on the screen becomes wider. Use {u ? <u>Huygens' principle</u> : "Huygens' principle"} to explain this observation.</>;
const BenchPic: React.FC<{w?: number; h?: number}> = ({w = 678, h = 560}) => (
	<svg width={w} height={h} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<OpticsBench b={{x: 40, y: 300, w: 600, g: 0.74, ap: 150, slit: 350, scr: 560}} color={RED_L} spread={14} slide="single" gap={1.5} />
		<ScreenView x={60} y={420} w={w - 120} h={70} bright={u => slitBright(u * 60, 0.1, RED)} color={RED_L} n={160} />
		{[['laser', 120], ['slit', 350], ['screen', 560]].map(([t, x]) => <text key={t} x={x as number} y={95} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>{t}</text>)}
		<text x={60} y={520} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>the screen, face on</text>
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<BenchPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
const SlitPic: React.FC<{w: number; h: number; half: number; tag?: number}> = ({w, h, half}) => {
	const f = useCurrentFrame();
	const box = {x: 14, y: 24, w: w - 32, h: h - 48};
	const bx = 200, cy = h / 2;
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#f6fbfb" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<ApertureWaves box={box} bx={bx} gap={[cy - half, cy + half]} lambda={40} phase={f / 22} color={TEAL.stroke} id="v05-fb1" width={4} n={16} shadow={1} />
			<Barrier box={box} bx={bx} gaps={[[cy - half, cy + half]]} t={14} />
		</svg>
	);
};
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const them = cue(id, 'line touching them'), nb = cue(id, 'no neighbours beyond'), more = cue(id, 'so it spreads more'), slip = cue(id, 'The slip is saying'), dim = cap(id, cue(id, 'gets dimmer'));
	const half = kf(f, [[more - 10, 70], [more + 20, 14]]);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>observed: narrower slit → wider central band</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 390, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={them - 10} ageAt={more} size={44} oldSize={32} style={{whiteSpace: 'normal'}}><span>every point in the slit → a source of wavelets; new front = line touching them</span></Row>
				<Row at={more - 10} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={more}><span>edges: no neighbours → spread into shadow; narrower slit → more like one wavelet → wider spread</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 380, opacity: prog(f, 4, 12)}}><SlitPic w={580} h={460} half={half} /></div>
			<HandTag x={1560} y={360} text="no neighbours here" at={nb} size={32} color={TEAL.ink} marks={[{kind: 'arrow', from: [1560, 372], to: [1448, 600 - half - 6], bend: 0.2}]} markAt={nb + 6} />
			<CrossedChip x={96} y={820} at={slip} crossAt={dim} size={30} caption="wider, though dimmer">less light gets through, so the band is narrower</CrossedChip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>Newton proposed that light is a stream of particles; Huygens proposed that light is a wave. Explain how (a) measurements of the {u ? <u>speed of light in water</u> : 'speed of light in water'} and (b) observations of the {u ? <u>diffraction</u> : 'diffraction'} of light provided evidence to distinguish between these models.</>;
const ModelsPic: React.FC<{w?: number; h?: number}> = ({w = 678, h = 560}) => {
	const f = useCurrentFrame();
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<ParticleIcon x={40} y={110} w={w - 100} h={160} f={f} />
			<WaveIcon x={40} y={340} w={w - 100} h={160} f={f} id="v05-models" />
			<text x={40} y={90} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: GREY.ink}}>Newton: particles</text>
			<text x={40} y={322} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: TEAL.ink}}>Huygens: waves</text>
		</svg>
	);
};
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<ModelsPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const waves = cue(id, 'supporting the waves'), part = cue(id, 'Particles travelling in straight lines'), too = cue(id, 'supports waves too'), slip = cue(id, 'The slip is using reflection'), decide = cap(id, cue(id, "so it can't decide"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<><span style={{color: GREY.ink}}>Newton: particles</span>{'     '}<span style={{color: TEAL.ink}}>Huygens: waves</span></>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 390, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={8} ageAt={too} size={44} oldSize={32} style={{whiteSpace: 'normal'}}><AnswerBox at={waves}><span>(a) Newton: faster in water; Huygens: slower; Foucault (1850): slower → supports waves</span></AnswerBox></Row>
				<Row at={part} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={too}><span>(b) particles: straight lines, sharp shadows; observed: spreading into shadows → supports waves</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<g opacity={prog(f, 4, 12)}>
					<rect x={1230} y={370} width={594} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<ParticleIcon x={1250} y={440} w={270} h={170} f={f} water />
					<WaveIcon x={1534} y={440} w={270} h={170} f={f} water id="v05-fb2a" />
					<ParticleIcon x={1250} y={680} w={270} h={170} f={f} gap />
					<WaveIcon x={1534} y={680} w={270} h={170} f={f} gap id="v05-fb2b" />
				</g>
			</FrameSvg>
			<Lbl x={1250} y={410} at={4} color={GREY.ink} size={28}>{`Newton: faster${f >= waves ? '  ✗' : ''}`}</Lbl>
			<Lbl x={1534} y={410} at={4} color={TEAL.ink} size={28}>{`Huygens: slower${f >= waves ? '  ✓' : ''}`}</Lbl>
			<Lbl x={1250} y={650} at={4} color={GREY.ink} size={28}>{`sharp shadow${f >= too ? '  ✗' : ''}`}</Lbl>
			<Lbl x={1534} y={650} at={4} color={TEAL.ink} size={28}>{`spreads${f >= too ? '  ✓' : ''}`}</Lbl>
			<CrossedChip x={96} y={820} at={slip} crossAt={decide} size={30} caption="both models explain reflection">reflection supports the wave model</CrossedChip>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, every: cue(id, 'Every point on the wavefront'), cut: cue(id, 'Now cut two narrow slits'), overlap: cue(id, 'overlap'), spaced: cue(id, 'evenly spaced'), next: cap(id, cue(id, 'Why do two slits produce')), end: dur(id) - 1};
})();
/** The two-slit top view (exported for the next video's opening). */
export const TS = {box: {x: 96, y: 180, w: 1300, h: 660}, bx: 520, half: 130, slitW: 18, lambda: 36, screen: {x: 1440, y: 180, w: 80, h: 660}};
export const TS_CY = TS.box.y + TS.box.h / 2;
export const TS_YA = TS_CY - TS.half, TS_YB = TS_CY + TS.half;
/** Band brightness on the screen at height y (model units: px), from the engine's two-slit relation. */
export const tsBright = (y: number) => doubleSlitBrightness(2 * TS.half, TS.lambda, Math.atan((y - TS_CY) / (TS.screen.x - TS.bx)));
export const tsPhase = (f: number) => f / 22;
export const V05_END = H.end;
/** The vertical screen of bands (top view, the screen seen edge on with its pattern drawn beside it). */
export const BandScreen: React.FC<{opacity?: number; color?: string; bright?: (y: number) => number}> = ({opacity = 1, color = RED_L, bright = tsBright}) => {
	if (opacity <= 0.001) return null;
	const S = TS.screen, n = 160;
	return (
		<g opacity={opacity}>
			<rect x={S.x} y={S.y} width={S.w} height={S.h} rx={8} fill="#171412" />
			{Array.from({length: n}, (_, i) => { const y = S.y + ((i + 0.5) * S.h) / n; const v = bright(y); return v < 0.02 ? null : <rect key={i} x={S.x + 4} y={S.y + (i * S.h) / n} width={S.w - 8} height={S.h / n + 0.8} fill={color} opacity={Math.pow(v, 0.7)} />; })}
			<rect x={S.x} y={S.y} width={S.w} height={S.h} rx={8} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const two = final || f >= H.cut;
	const single = final ? 0 : 1 - prog(f, H.cut, 16);
	const twoO = o(H.overlap - 20, 20);
	const B = TS.box, w2 = TS.slitW / 2;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<rect x={B.x} y={B.y} width={B.w} height={B.h} rx={14} fill="#f6fbfb" stroke={INK} strokeWidth={3} />
				{single > 0.001 ? <g opacity={single}><ApertureWaves box={B} bx={TS.bx} gap={[TS_CY - w2, TS_CY + w2]} lambda={TS.lambda} phase={tsPhase(f)} color={TEAL.stroke} id="v05-ho1" width={f >= H.every && f < H.every + 60 ? 6 : 4} n={6} /></g> : null}
				{two ? <g>
					<TwoSlitWaves box={B} bx={TS.bx} ya={TS_YA} yb={TS_YB} lambda={TS.lambda} phase={tsPhase(f)} colors={[TEAL.stroke, TEAL.stroke]} incoming={TEAL.stroke} troughs={false} id="v05-ho2" opacity={twoO} width={4} />
					{twoO < 0.999 ? <g opacity={1 - twoO}>{Array.from({length: 12}, (_, k) => { const x = TS.bx + ((tsPhase(f) % 1) - k - 1) * TS.lambda; return x < B.x ? null : <line key={k} x1={x} y1={B.y} x2={x} y2={B.y + B.h} stroke={TEAL.stroke} strokeWidth={4} />; })}</g> : null}
				</g> : null}
				<Barrier box={B} bx={TS.bx} gaps={two ? [[TS_YA - w2, TS_YA + w2], [TS_YB - w2, TS_YB + w2]] : [[TS_CY - w2, TS_CY + w2]]} t={16} />
				{!final && f >= H.overlap ? <path d={`M${TS.bx + 600},${TS_YA - 40} h14 V${TS_YB + 40} h-14`} stroke={TEAL.stroke} strokeWidth={5} fill="none" opacity={prog(f, H.overlap + 10, 12) * (1 - prog(f, H.next - 30, 12))} /> : null}
				<BandScreen opacity={o(H.spaced)} />
			</FrameSvg>
			<Lbl x={TS.bx} y={B.y + B.h + 32} at={at(-30)} color={INK} size={26} anchor="middle">barrier, top view (not to scale)</Lbl>
			<Lbl x={TS.screen.x + TS.screen.w / 2} y={B.y + B.h + 32} at={at(H.spaced)} color={INK} size={26} anchor="middle">screen</Lbl>
			<Lbl x={TS.screen.x + TS.screen.w + 60} y={TS_CY + 20} at={at(H.spaced + 20)} color={INK} size={72} anchor="middle">?</Lbl>
			{!final ? <HandTag x={TS.bx + 640} y={TS_YA - 70} text="two spreading waves meet" at={H.overlap + 16} out={H.next - 30} size={32} color={TEAL.ink} /> : null}
			{chip ? <Chip x={96} y={890} at={at(H.next + 10)} size={30} w={1728} color={INK} border={INK}>Next: why do two slits produce regularly spaced bright and dark bands?</Chip> : null}
		</>
	);
};
/** v05's final frame for the next video. */
export const M7V05FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S15: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: TEAL.ink}}>Diffraction</span>: waves spread at an edge or through a gap.</>, at: 2},
		{content: <>Huygens: every point on a front sends out <span style={{color: TEAL.ink}}>wavelets</span>.</>, at: 6},
		{content: <>Edge wavelets have no neighbours, so the wave curves in.</>, at: 10},
		{content: <>Narrower gap or longer λ: wider spread.</>, at: 14},
		{content: <>Models: diffraction, slower in water and the Poisson spot favour <span style={{color: TEAL.ink}}>waves</span>.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Narrow gap, wide spread.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
