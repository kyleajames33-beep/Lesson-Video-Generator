// Scenes 11 to 14: attempt 2 (the painted Earth and Moon) and its brief feedback, the handoff (a row of the four
// methods, a beam fanning through a slit, then the painted filament lamp, discharge tube and Sun each feeding a coded
// slit and a blank spectrum strip; its last frame is exported as `M7V02FinalFrame` for the next video) and the notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Scope} from '../../physics/electromagnetism/motor';
import {LightPath, SpectrumStrip, wlColor} from '../../physics/light/spectrum';
import {Disc, EARTH, LAMP, LPlate, MOON, SUN, TUBE, ANCHOR, anchorAt} from '../../physics/light/plates';
import {ACCENT, A2_D, A2_T, A2_WRONG, C_EXACT, C_TEXT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, OrbitIcon, ROSE, Shrunk, WheelAt, sci} from './parts';

type Pt = [number, number];

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>A laser pulse is sent from an observatory to a reflector on the Moon and is detected back at the observatory {u ? <u>2.51 s</u> : '2.51 s'} after it was sent. (a) Calculate the distance from the observatory to the reflector. (b) Explain why this is a measurement of {u ? <u>distance rather than</u> : 'distance rather than'} a measurement of the speed of light.</>;
const MoonPic: React.FC<{f?: number; live?: boolean; w?: number; h?: number}> = ({f = 0, live = false, w = 678, h = 560}) => {
	const e: Pt = [150, h / 2], m: Pt = [w - 130, h / 2];
	const u = live ? (f % 110) / 110 : -1;
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Disc spec={EARTH} cx={e[0]} cy={e[1]} d={180} />
			<Disc spec={MOON} cx={m[0]} cy={m[1]} d={110} />
			<LightPath pts={[[e[0] + 92, e[1]], [m[0] - 56, m[1]]]} color={LIGHT} width={3} opacity={0.6} dash="10 8" />
			{u >= 0 ? <LightPath pts={[[e[0] + 92, e[1]], [m[0] - 56, m[1]], [e[0] + 92, e[1] + 0.001]]} color={LIGHT} draw={0} pulses={[u]} pulseLen={0.05} width={6} /> : null}
			<text x={w / 2} y={h - 44} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>not to scale</text>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={34} marks={3} picture={<MoonPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const res = cue(id, 'three point seven six times ten to the eight metres'), only = cue(id, 'can only tell you the distance'), dbl = cap(id, cue(id, 'doubles the distance'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<><span>{`t = ${A2_T} s (round trip)`}</span>{'    '}<span>{`c = ${C_TEXT} m s⁻¹ (exact)`}</span></>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 18, width: 1150}}>
				<Row at={8} size={34}>there and back: d = ct / 2</Row>
				<Row at={res - 6} size={44}><AnswerBox at={res}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`(a) d = (${sci(C_EXACT, 3)} × ${A2_T}) / 2 = ${sci(A2_D, 2)} m`}</span></AnswerBox></Row>
				<Row at={only - 6} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={only}><span>(b) c is exact by definition (the metre is defined from c) → the measured time gives d</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1290, top: 430}}><MoonPic f={f} live w={560} h={420} /></div>
			<CrossedChip x={96} y={820} at={dbl - 30} crossAt={dbl} size={28} caption="round trip: halve it">{`d = ct = ${sci(A2_WRONG, 2)} m`}</CrossedChip>
		</>
	);
};

// ---------- 13. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, first: cue(id, 'first with planets'), wheels: cue(id, 'spinning wheels'), sig: cue(id, 'only a signal with a speed'), elec: cue(id, 'now with electronics'), exact: cue(id, 'c became exact'), spread: cue(id, 'Spread it out into its colours'), src: cue(id, 'A hot filament, a glowing gas and sunlight'), next: cap(id, cue(id, 'How do different sources')), end: dur(id) - 1};
})();
const SC = (big: number) => 1 + 1.3 * big;
const TX = (big: number) => 1360 - 400 * big - SC(big) * 1360;
const TY = (big: number) => 235 + 235 * big - SC(big) * 235;
/** Layout of the handoff board (exported for the next video's opening): three source rows, slits and blank strips. */
export const HB2 = {rows: [430, 625, 815], slitX: 370, strip: {x: 430, w: 1080, h: 72}, q: 1570, icons: {y: 180}};
/** One source row: the painted source at the left, an amber beam to a coded slit. */
export const SourceRow: React.FC<{i: number; opacity?: number; beam?: number}> = ({i, opacity = 1, beam = 1}) => {
	const y = HB2.rows[i];
	if (opacity <= 0.001) return null;
	let src: Pt;
	let plate: React.ReactNode;
	if (i === 0) { const h = 160, w = (h * (LAMP.box[2] - LAMP.box[0])) / (LAMP.box[3] - LAMP.box[1]); const p = {x: 170 - w / 2, y: y - h / 2, w}; plate = <LPlate spec={LAMP} p={p} />; src = anchorAt(LAMP, p, ANCHOR.lampCoil[0], ANCHOR.lampCoil[1]); }
	else if (i === 1) { const h = 172, w = (h * (TUBE.box[2] - TUBE.box[0])) / (TUBE.box[3] - TUBE.box[1]); const p = {x: 170 - w / 2, y: y - h / 2, w}; plate = <LPlate spec={TUBE} p={p} />; src = [170, y]; }
	else { plate = <Disc spec={SUN} cx={170} cy={y} d={140} />; src = [170, y]; }
	return (
		<g opacity={opacity}>
			{plate}
			<LightPath pts={[[src[0] + 30, src[1]], [HB2.slitX, y]]} color={LIGHT} width={6} draw={beam} />
			<rect x={HB2.slitX - 8} y={y - 46} width={16} height={36} fill={INK} /><rect x={HB2.slitX - 8} y={y + 10} width={16} height={36} fill={INK} />
		</g>
	);
};
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const S = HB2.strip;
	const big = final ? 0 : 1 - prog(f, H.spread, 24);
	const fan = !final && f >= H.spread && f < H.src + 20 ? prog(f, H.spread, 24) * (1 - prog(f, H.src, 16)) : 0;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g transform={`translate(${TX(big)} ${TY(big)}) scale(${SC(big)})`}>
					<g opacity={o(4)}><OrbitIcon x={1000} y={HB2.icons.y} w={180} h={110} /></g>
					<g opacity={o(10)}><WheelAt cx={1270} cy={HB2.icons.y + 55} d={105} deg={final ? 0 : f * 1.5} /></g>
					<g opacity={o(16)}><Scope p={{x: 1350, y: HB2.icons.y + 8, w: 170}} grid={false} /></g>
					<g opacity={o(22)}><rect x={1560} y={HB2.icons.y + 26} width={150} height={56} rx={12} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={4} /><text x={1635} y={HB2.icons.y + 64} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>c exact</text></g>
				</g>
				{!final && big > 0.001 ? <g opacity={big}><LightPath pts={[[160, 790], [1760, 790]]} color={LIGHT} width={8} pulses={[((f % 60) / 60)]} pulseLen={0.05} opacity={prog(f, H.sig, 14)} /></g> : null}
				{fan > 0.001 ? <g opacity={fan}>
					<LightPath pts={[[200, HB2.rows[0]], [HB2.slitX, HB2.rows[0]]]} color={LIGHT} width={6} />
					{Array.from({length: 24}, (_, k) => { const nm = 400 + (300 * k) / 23; const x = S.x + 40 + ((S.w - 80) * k) / 23; return <line key={k} x1={HB2.slitX} y1={HB2.rows[0]} x2={x} y2={HB2.rows[0]} stroke={wlColor(nm)} strokeWidth={4} opacity={0.8} />; })}
				</g> : null}
				{[0, 1, 2].map(i => <SourceRow key={i} i={i} opacity={o(H.src + 12 * i)} />)}
				{[0, 1, 2].map(i => <g key={i} opacity={o(H.src + 12 * i)}><SpectrumStrip s={{x: S.x, y: HB2.rows[i] - S.h / 2, w: S.w, h: S.h}} kind="blank" /></g>)}
			</FrameSvg>
			{final ? null : ['planets', 'spinning wheels and mirrors', 'electronics', 'c became exact'].map((t, i) => <Lbl key={t} x={[1090, 1270, 1435, 1635][i] * SC(big) + TX(big)} y={(HB2.icons.y + 140 + (i % 2) * 40) * SC(big) + TY(big)} at={[H.first, H.wheels, H.elec, H.exact][i]} out={H.spread} color={INK} size={30} anchor="middle">{t}</Lbl>)}
			{[0, 1, 2].map(i => <Lbl key={i} x={HB2.q} y={HB2.rows[i] + 22} at={at(H.src + 12 * i + 10)} color={INK} size={60}>?</Lbl>)}
			{['filament lamp', 'hydrogen discharge tube', 'the Sun'].map((t, i) => <Lbl key={t} x={HB2.strip.x} y={HB2.rows[i] - 52} at={at(H.src + 12 * i)} color={INK} size={28}>{t}</Lbl>)}
			{final ? null : <Lbl x={960} y={860} at={H.sig} out={H.spread} color={LIGHT_INK} size={32} anchor="middle">light: a signal with a speed</Lbl>}
			{final ? null : <HandTag x={700} y={HB2.rows[0] - 100} text="a message in the colours" at={H.spread + 20} out={H.src} size={34} color={LIGHT_INK} />}
			{chip ? <Chip x={96} y={890} at={at(H.next + 10)} size={30} w={1728} color={INK} border={INK}>Next: how do different sources produce different spectral patterns?</Chip> : null}
		</>
	);
};
/** v02's final frame for the next video. */
export const M7V02FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S13: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const notes = [
		{content: <>Rømer: Io's eclipses ran late, so light's speed is finite.</>, at: 2},
		{content: <>Fizeau: gap to tooth <span style={{color: ROSE.ink}}>t = 1/(2Nf)</span>; c = 2d/t.</>, at: 6},
		{content: <>Time of flight: speed = extra path ÷ delay.</>, at: 10},
		{content: <>Since 1983: <span style={{color: NAVY.ink}}>{`c = ${C_TEXT} m s⁻¹ exactly`}</span>.</>, at: 14},
		{content: <>Now time gives distance: <span style={{color: ORANGE.ink}}>d = ct/2</span> for a round trip.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Then: measure d and t, find c. <span style={{color: NAVY.ink}}>Now: fix c, time it, find d.</span></>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
