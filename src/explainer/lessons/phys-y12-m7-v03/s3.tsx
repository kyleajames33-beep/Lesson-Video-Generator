// Scenes 11 to 15: feedback 1 (the unknown strip matched against helium, then against neon with the unmatched lines
// marked), attempt 2 (the painted Moon and spectroscope) and its feedback (Sun, Moon and spectroscope with the solar
// strip), the handoff (laboratory hydrogen against two stars, one shifted and one broadened; its last frame is exported
// as `M7V03FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LightPath, SpectrumStrip} from '../../physics/light/spectrum';
import {ANCHOR, Disc, LAMP, LPlate, MOON, SPECTRO, SUN, TUBE, VCELL, placeByAnchor} from '../../physics/light/plates';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, HE_LINES, H_LINES, NE_LINES, SHIFT, SUN_LINES, UNKNOWN, cap, cue, dur, hold} from './common';
import {Connectors, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, NoPartner, ROSE, Shrunk, StripRow} from './parts';
import {Q1} from './s2';

type Pt = [number, number];
const SUN_STR = [0.6, 0.5, 0.6, 0.8, 0.6, 0.5, 0.9, 0.9, 0.9];

// ---------- 11. feedback 1 ----------
const HE11 = {x: 300, y: 480, w: 1000, h: 50}, NE11 = {x: 300, y: 700, w: 1000, h: 50};
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const lines = cue(id, 'a unique set of lines'), trap = cue(id, 'The trap is the line'), fit = cue(id, "neon doesn't fit"), match = cap(id, cue(id, 'Every observed line must match'));
	const uy = kf(f, [[trap, 590], [trap + 30, 600]]);
	const unk = {x: 300, y: uy, w: 1000, h: 50};
	const onNe = f >= trap;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>observed: 447, 502, 588, 668, 707 nm</>}><Q1 u /></Shrunk>
			<FrameSvg>
				<StripRow s={HE11} kind="emission" lines={HE_LINES} name="helium" size={28} />
				<StripRow s={unk} kind="emission" lines={UNKNOWN} name="unknown" size={28} />
				<StripRow s={NE11} kind="emission" lines={NE_LINES} name="neon" size={28} opacity={prog(f, trap - 20, 12)} />
				<Connectors a={unk} b={HE11} lines={UNKNOWN} marks={UNKNOWN.map(() => 'tick')} opacity={prog(f, 12, 14) * (onNe ? 0.35 : 1)} />
				{onNe ? <Connectors a={unk} b={NE11} lines={[588]} marks={['tick']} opacity={prog(f, fit - 20, 12)} /> : null}
				{onNe ? <NoPartner s={unk} lines={[447, 502, 668, 707]} opacity={prog(f, fit, 12)} /> : null}
			</FrameSvg>
			<Lbl x={HE11.x} y={HE11.y - 16} at={lines} color={GREY.ink} size={30}>reference lines not seen (471, 492 nm): allowed, often faint</Lbl>
			<div style={{position: 'absolute', left: 1400, top: 470}}><Row at={lines - 6} size={52}><AnswerBox at={lines}><span style={{whiteSpace: 'nowrap'}}>helium</span></AnswerBox></Row></div>
			<Lbl x={1400} y={620} at={lines + 10} color={INK} size={28}>all five lines match</Lbl>
			<Lbl x={1330} y={668} at={fit + 10} color={GREY.ink} size={28}>4 observed lines: no neon partner</Lbl>
			<CrossedChip x={96} y={800} at={match - 30} crossAt={match} size={28} caption="every observed line must match">neon (588 nm matches)</CrossedChip>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>Light from the full Moon is viewed through a spectroscope. The spectrum is continuous, crossed by many {u ? <u>dark lines</u> : 'dark lines'}. (a) Explain how the dark lines are produced. (b) Explain why this spectrum is {u ? <u>not an emission spectrum</u> : 'not an emission spectrum'} of the Moon.</>;
const MoonPic: React.FC<{w?: number; h?: number; sun?: boolean}> = ({w = 678, h = 560, sun = false}) => {
	const sp = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], w - 330, h - 150, 280);
	const m: Pt = sun ? [w * 0.5, 140] : [w * 0.3, h * 0.38];
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			{sun ? <Disc spec={SUN} cx={110} cy={150} d={140} /> : null}
			<Disc spec={MOON} cx={m[0]} cy={m[1]} d={sun ? 110 : 200} />
			{sun ? <LightPath pts={[[180, 150], [m[0] - 55, m[1]], [w - 330, h - 150]]} color={LIGHT} width={5} /> : <LightPath pts={[[m[0] + 60, m[1] + 80], [w - 330, h - 150]]} color={LIGHT} width={5} />}
			<LPlate spec={SPECTRO} p={sp} />
			{sun ? <SpectrumStrip s={{x: 60, y: h - 110, w: w - 120, h: 40}} kind="absorption" lines={SUN_LINES} strengths={SUN_STR} lineW={4} /> : null}
		</svg>
	);
};
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<MoonPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const lev = cue(id, 'energy levels'), own = cue(id, 'of its own'), slip = cue(id, 'The slip is saying'), sun = cap(id, cue(id, 'The lines come from the Sun'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>continuous + dark lines;  source: the full Moon</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1130}}>
				<Row at={10} size={32} style={{whiteSpace: 'normal'}}><span>(a) the Sun's hot dense layers → continuous; cooler outer gas of the Sun absorbs at its own wavelengths (electrons jump up), re-emitted in all directions → dark lines</span></Row>
				<Row at={own - 10} size={32} style={{whiteSpace: 'normal'}}><AnswerBox at={own}><span>(b) the Moon reflects sunlight; it is not a hot thin gas, so no emission lines: it is the Sun's absorption spectrum</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 360, opacity: prog(f, 6, 14)}}><MoonPic w={620} h={520} sun /></div>
			<HandTag x={1260} y={910} text="absorbed in the Sun's cooler gas" at={lev + 10} size={32} color={LIGHT_INK} />
			<CrossedChip x={96} y={800} at={slip} crossAt={sun} size={28} caption="formed in the Sun; reflection keeps them">the dark lines come from the Moon</CrossedChip>
		</>
	);
};

// ---------- 14. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, k1: cue(id, 'Hot and dense gives every wavelength'), k2: cue(id, 'A hot thin gas gives its own bright lines'), k3: cue(id, 'Cooler gas in front takes those same lines away'), astro: cue(id, 'Astronomers read star spectra'), two: cue(id, 'look at these two stars'), little: cue(id, 'slid along a little'), broad: cue(id, 'the lines are broader'), next: cap(id, cue(id, 'What can stellar spectra tell us')), end: dur(id) - 1};
})();
const SX = 420, SW = 1140, SH = 70;
const HS = [{x: SX, y: 300, w: SW, h: SH}, {x: SX, y: 470, w: SW, h: SH}, {x: SX, y: 640, w: SW, h: SH}];
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const shift = final ? SHIFT : 1 + (SHIFT - 1) * prog(f, H.little, 40);
	const broad = final ? 10 : 10 * prog(f, H.broad, 40);
	const recap = final ? 0 : 1 - prog(f, H.astro - 20, 14);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{recap > 0.001 ? <g opacity={recap}>
					<StripRow s={HS[0]} kind="continuous" opacity={prog(f, 2, 14)} />
					<StripRow s={HS[1]} kind="emission" lines={H_LINES} opacity={prog(f, 8, 14)} />
					<StripRow s={HS[2]} kind="absorption" lines={H_LINES} opacity={prog(f, 14, 14)} />
					{[H.k1, H.k2, H.k3].map((t, i) => f >= t && f < t + 50 ? <rect key={i} x={SX - 8} y={HS[i].y - 8} width={SW + 16} height={SH + 16} fill="none" stroke={INK} strokeWidth={5} /> : null)}
					<LPlate spec={LAMP} p={{x: SX + SW + 50, y: HS[0].y - 25, w: 100}} />
					<LPlate spec={TUBE} p={{x: SX + SW + 75, y: HS[1].y - 30, w: 55}} />
					<LPlate spec={LAMP} p={{x: SX + SW + 30, y: HS[2].y - 25, w: 100}} />
					<LPlate spec={VCELL} p={{x: SX + SW + 120, y: HS[2].y + 5, w: 140}} />
				</g> : null}
				<StripRow s={HS[0]} kind="emission" lines={H_LINES} grey opacity={o(H.astro - 10)} />
				<StripRow s={HS[1]} kind="absorption" lines={H_LINES} shift={shift} lineW={7} opacity={o(H.two)} />
				<StripRow s={HS[2]} kind="absorption" lines={H_LINES} broaden={broad} lineW={7} opacity={o(H.two + 10)} axis ticks={[400, 500, 600, 700]} />
				<Connectors a={HS[0]} b={HS[1]} lines={H_LINES} lean={shift} opacity={o(H.little)} />
			</FrameSvg>
			{final ? null : ['hot and dense', 'hot and thin', 'cool gas in front'].map((t, i) => <Lbl key={t} x={SX - 20} y={HS[i].y + 46} at={[2, 8, 14][i]} out={H.astro - 20} color={INK} size={30} anchor="end">{t}</Lbl>)}
			<Lbl x={SX - 20} y={HS[0].y + 46} at={at(H.astro - 10)} color={GREY.ink} size={30} anchor="end">laboratory hydrogen</Lbl>
			<Lbl x={SX - 20} y={HS[1].y + 46} at={at(H.two)} color={INK} size={30} anchor="end">star A</Lbl>
			<Lbl x={SX - 20} y={HS[2].y + 46} at={at(H.two + 10)} color={INK} size={30} anchor="end">star B</Lbl>
			<Lbl x={SX + SW} y={HS[2].y + SH + 80} at={at(H.two + 10)} color={INK} size={26} anchor="end">wavelength (nm)</Lbl>
			<Chip x={SX} y={190} at={at(H.astro)} size={30} w={460} color={INK}>✓ composition: hydrogen</Chip>
			<Chip x={SX + SW + 30} y={HS[1].y + 6} at={at(H.little + 20)} size={32} w={230} color={INK}>shifted?</Chip>
			<Lbl x={SX + SW + 40} y={HS[1].y + 110} at={at(H.little + 30)} color={GREY.ink} size={26}>exaggerated</Lbl>
			<Chip x={SX + SW + 30} y={HS[2].y + 6} at={at(H.broad + 20)} size={32} w={230} color={INK}>broader?</Chip>
			{chip ? <Chip x={96} y={890} at={at(H.next + 10)} size={30} w={1728} color={INK} border={INK}>Next: what can stellar spectra tell us beyond chemical identity?</Chip> : null}
		</>
	);
};
/** v03's final frame for the next video. */
export const M7V03FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S14: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Hot dense source: continuous, set mainly by temperature.</>, at: 2},
		{content: <>Hot thin gas: bright lines (<span style={{color: ROSE.ink}}>electrons drop levels</span>).</>, at: 6},
		{content: <>Cool gas in front: dark lines, same wavelengths.</>, at: 10},
		{content: <>Lines are a fingerprint: every observed line matches.</>, at: 14},
		{content: <>Reflected sunlight shows the Sun's lines. Never aim at the Sun.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Hot and dense: all colours. Hot and thin: bright lines. <span style={{color: NAVY.ink}}>Cool and thin in front: dark lines, same places.</span></>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
