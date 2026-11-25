// Scenes 11 to 15: feedback 1 (the strip gains the observed line left of the rest mark), attempt 2 (two same-colour
// stars with narrow and broad lines) and its feedback (star B's edges tinted for rotation, then a crowded gas inset for
// density), the handoff (the four ticked properties, the painted pocket spectroscope and a close-up of its entrance slit
// with straight amber fronts arriving and spreading beyond; its last frame is exported as `M7V04FinalFrame` for the next
// video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {SpectrumStrip} from '../../physics/light/spectrum';
import {ANCHOR, Disc, LPlate, SPECTRO, SUN, placeByAnchor} from '../../physics/light/plates';
import {ApertureWaves, Barrier} from '../../physics/light/wavefronts';
import {A1_DL, A1_OBS, A1_REST, A1_V, A1_WRONG, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, H_LINES, cap, cue, dur, hold} from './common';
import {APPROACH, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, PropChips, RECEDE, ROSE, Shrunk, fx, sci} from './parts';
import {Q1, StarStripPic} from './s2';

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const tow = cue(id, 'coming towards'), spd = cue(id, 'The speed is c times'), three = cue(id, 'three point two times ten to the five'), slip = cue(id, 'The classic slip'), sh = cap(id, cue(id, 'instead of the shift'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<><span style={{color: GREY.ink}}>{`λ₀ = ${fx(A1_REST, 1)} nm (rest)`}</span>{'    '}<span style={{color: ROSE.ink}}>{`λ_obs = ${fx(A1_OBS, 1)} nm`}</span>{'    '}<span style={{color: NAVY.ink}}>c = 3.00 × 10⁸ m s⁻¹</span></>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 14, width: 1110}}>
				<Row at={8} ageAt={spd} size={52} oldSize={36}><span style={{whiteSpace: 'nowrap'}}>{`Δλ = ${fx(A1_OBS, 1)} − ${fx(A1_REST, 1)} = ${fx(A1_DL, 1)} nm`}</span></Row>
				<Row at={tow - 6} ageAt={spd} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>shorter: blueshift, approaching</span></Row>
				<Row at={spd} ageAt={three + 20} size={44} oldSize={36}><span style={{whiteSpace: 'nowrap'}}>{`v = c |Δλ| / λ₀ = (3.00 × 10⁸ × ${fx(Math.abs(A1_DL), 1)}) / ${fx(A1_REST, 1)}`}</span></Row>
				<Row at={three - 6} size={52}><AnswerBox at={three}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`v = ${sci(A1_V, 1)} m s⁻¹ towards us`}</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 360, opacity: prog(f, 4, 12)}}><StarStripPic w={620} h={520} obs={prog(f, 8, 12)} arrow={prog(f, 20, 12)} /></div>
			<CrossedChip x={96} y={800} at={slip} crossAt={sh} size={30} caption="use the shift Δλ, not λ_obs">{`v = c × ${fx(A1_OBS, 1)} / ${fx(A1_REST, 1)} ≈ ${sci(A1_WRONG, 1)} m s⁻¹`}</CrossedChip>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>Two stars, A and B, have the {u ? <u>same surface temperature</u> : 'same surface temperature'} and show the same absorption lines at the same wavelengths. The lines in star B's spectrum are {u ? <u>much broader</u> : 'much broader'} than those in star A's. Identify TWO possible causes of the broader lines and state what each reveals about star B.</>;
/** Two same-colour stars with their strips: A narrow lines, B broad lines. `tint` adds B's edge tints; `crowd` a dense-gas inset. */
const TwoStarsPic: React.FC<{w?: number; h?: number; tint?: number; crowd?: number}> = ({w = 678, h = 560, tint = 0, crowd = 0}) => {
	const sw = w - 260, d = 130;
	const rows = [{n: 'A', y: 150, b: 0}, {n: 'B', y: 370, b: 16}];
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<defs><clipPath id="v04-b-disc"><circle cx={110} cy={370} r={d / 2 - 2} /></clipPath></defs>
			{rows.map(r => <g key={r.n}>
				<Disc spec={SUN} cx={110} cy={r.y} d={d} />
				<SpectrumStrip s={{x: 210, y: r.y - 30, w: sw, h: 60}} kind="absorption" lines={H_LINES} broaden={r.b} lineW={6} />
				<text x={110} y={r.y + d / 2 + 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>{`star ${r.n}`}</text>
			</g>)}
			{tint > 0.001 ? <g clipPath="url(#v04-b-disc)" opacity={tint}><rect x={110 - d / 2} y={370 - d / 2} width={d * 0.28} height={d} fill={APPROACH} opacity={0.45} /><rect x={110 + d * 0.22} y={370 - d / 2} width={d * 0.28} height={d} fill={RECEDE} opacity={0.45} /></g> : null}
			{crowd > 0.001 ? <g opacity={crowd}>
				<rect x={w - 230} y={h - 130} width={190} height={84} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				{Array.from({length: 26}, (_, i) => <circle key={i} cx={w - 220 + ((i * 37) % 170)} cy={h - 118 + ((i * 23) % 62)} r={7} fill="#7d62b3" />)}
			</g> : null}
		</svg>
	);
};
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<TwoStarsPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const rot = cue(id, 'One cause is rotation'), sight = cue(id, 'line of sight'), dens = cue(id, 'The other cause is density'), giant = cue(id, 'star A a giant'), slip = cue(id, 'The slip is saying'), lines = cap(id, cue(id, 'and the same lines'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>same T;   same lines;   B: much broader</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 390, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={rot} ageAt={dens} size={44} oldSize={32} style={{whiteSpace: 'normal'}}><AnswerBox at={sight}><span>cause 1: faster rotation → opposite Doppler shifts from its edges → broad lines: star B spins faster (along our line of sight)</span></AnswerBox></Row>
				<Row at={dens} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={giant}><span>cause 2: denser atmosphere → more collisions → pressure broadening: star B likely a dwarf (A a giant)</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 360, opacity: prog(f, 4, 12)}}><TwoStarsPic w={620} h={520} tint={prog(f, rot + 10, 14)} crowd={prog(f, dens + 10, 14)} /></div>
			<CrossedChip x={96} y={830} at={slip} crossAt={lines} size={30} caption="same temperature: given">star B is hotter</CrossedChip>
		</>
	);
};

// ---------- 14. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, temp: cue(id, "a star's temperature"), motion: cue(id, 'its motion'), spin: cue(id, 'its spin'), dens: cue(id, 'and its density'), read: cue(id, 'by reading where the lines are'), spec: cue(id, 'spectroscope spread the light out'), slit: cue(id, 'squeeze through a very narrow slit'), spreads: cue(id, 'It spreads'), next: cap(id, cue(id, 'Why does light spread')), end: dur(id) - 1};
})();
/** The slit close-up (exported for the next video's opening). */
export const SLIT_BOX = {x: 620, y: 380, w: 1200, h: 470};
export const SLIT_BX = 900, SLIT_GAP = [597, 633] as const, SLIT_LAMBDA = 46;
/** Wave phase (cycles) at scene frame f: one crest every 24 frames from the slit cue. */
export const slitPhase = (f: number) => Math.max(0, f - H.slit) / 24;
export const V04_END_PHASE = slitPhase(H.end);
/** Last frame of the handoff (the final frame). */
export const V04_END = H.end;
const SP14 = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], 230, 615, 360);
const HEADS: [string, string, string][] = [['where', ROSE.ink, 'composition, radial velocity'], ['how wide', NAVY.ink, 'rotation, density'], ['how strong', ORANGE.ink, 'temperature']];
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const ph = slitPhase(f);
	const recap = final ? 0 : 1 - prog(f, H.spec, 16);
	const lit = !final && f >= H.read && f < H.read + 66 ? Math.min(2, Math.floor((f - H.read) / 22)) : -1;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			{recap > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: recap}}>
				<PropChips x={300} y={260} at={2} ticks={[H.temp, H.motion, H.spin, H.dens]} cols={4} size={40} />
				{HEADS.map(([t, c, sub], i) => <div key={t} style={{position: 'absolute', left: 160 + i * 560, top: 420, width: 520, minHeight: 230, boxSizing: 'border-box', padding: '20px 26px', borderRadius: 18, background: lit === i ? '#f6ead2' : '#fffdf8', border: `4px solid ${lit === i ? c : 'rgba(60,45,20,0.2)'}`, fontFamily: 'Inter Tight', fontWeight: 800, color: c, opacity: prog(f, 6 + i * 6, 12)}}><div style={{fontSize: 60}}>{t}</div><div style={{fontSize: 40, color: INK, marginTop: 10}}>{sub}</div></div>)}
				<FrameSvg>{[0, 1, 2].map(i => <g key={i} opacity={prog(f, 6 + i * 6, 12)}><SpectrumStrip s={{x: 186 + i * 560, y: 670, w: 468, h: 56}} kind="absorption" lines={H_LINES} shift={i === 0 ? 1.03 : 1} broaden={i === 1 ? 12 : 0} lineW={6} strengths={i === 2 ? [1, 0.9, 0.8, 0.7] : undefined} profile={i === 2 ? (nm => 1 - 0.5 * (nm - 380) / 370) : undefined} /></g>)}</FrameSvg>
				<Lbl x={160} y={800} at={H.read} color={INK} size={36}>every clue read after a spectroscope spreads the light</Lbl>
			</div> : null}
			<PropChips x={96} y={170} at={at(H.spec)} ticks={[-60, -60, -60, -60]} cols={2} size={28} />
			<FrameSvg>
				<g opacity={o(H.spec)}><LPlate spec={SPECTRO} p={SP14} /></g>
				{final || f >= H.slit ? <g opacity={o(H.slit)}>
					<circle cx={230} cy={615} r={34} fill="none" stroke={INK} strokeWidth={4} />
					<line x1={256} y1={593} x2={SLIT_BOX.x} y2={SLIT_BOX.y} stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" />
					<line x1={256} y1={637} x2={SLIT_BOX.x} y2={SLIT_BOX.y + SLIT_BOX.h} stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" />
					<rect x={SLIT_BOX.x} y={SLIT_BOX.y} width={SLIT_BOX.w} height={SLIT_BOX.h} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<ApertureWaves box={SLIT_BOX} bx={SLIT_BX} gap={SLIT_GAP} lambda={SLIT_LAMBDA} phase={ph} color={LIGHT} beyond={o(H.spreads, 20)} id="v04-slit" width={5} />
					<Barrier box={SLIT_BOX} bx={SLIT_BX} gaps={[SLIT_GAP]} t={26} color="#3a3735" />
				</g> : null}
			</FrameSvg>
			<Lbl x={230} y={760} at={at(H.spec)} color={INK} size={26} anchor="middle">pocket spectroscope</Lbl>
			<Lbl x={SLIT_BX} y={SLIT_BOX.y + SLIT_BOX.h + 34} at={at(H.slit)} color={INK} size={28} anchor="middle">entrance slit (close-up)</Lbl>
			<Lbl x={SLIT_BOX.x + 20} y={SLIT_BOX.y + 30} at={at(H.slit + 10)} color={LIGHT_INK} size={26}>light arriving</Lbl>
			<Lbl x={1180} y={470} at={at(H.spreads + 20)} color={INK} size={72} anchor="middle">?</Lbl>
			<Lbl x={1180} y={780} at={at(H.spreads + 20)} color={INK} size={72} anchor="middle">?</Lbl>
			{chip ? <Chip x={96} y={890} at={at(H.next + 10)} size={30} w={1728} color={INK} border={INK}>Next: why does light spread after passing an edge or narrow opening?</Chip> : null}
		</>
	);
};
/** v04's final frame for the next video. */
export const M7V04FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S14: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Line positions: composition; <span style={{color: ROSE.ink}}>a uniform shift: radial velocity</span>.</>, at: 2},
		{content: <>Δλ/λ = v/c (v ≪ c): redshift away, blueshift towards.</>, at: 6},
		{content: <><span style={{color: ORANGE.ink}}>Temperature</span>: continuum colour and which lines are strong.</>, at: 10},
		{content: <><span style={{color: NAVY.ink}}>Width</span>: spin along our line of sight, or a dense atmosphere.</>, at: 14},
		{content: <>Shape: spin a rounded dip; collisions long wings.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Where: what and how fast. Width: spin or squeeze. Strength and colour: how hot.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
