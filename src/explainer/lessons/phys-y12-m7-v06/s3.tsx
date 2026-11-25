// Scenes 11 to 16: attempt 1 (the bench thumbnail with green bands and the L bracket) and its feedback (the band
// picture with its Δx bracket closing up when d doubles), attempt 2 (two slits and a screen with P on the second dark
// band) and its feedback (½λ and 1½λ marked), the handoff (broad two-slit bands above sharp grating peaks at the same
// angles, from the waves engine, with the painted slide holder holding a ruled slide; its last frame is exported as
// `M7V06FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {CodedSlide, HOLDER, OpticsBench, PatternGraph, ScreenView} from '../../physics/light/bench';
import {Barrier} from '../../physics/light/wavefronts';
import {doubleSlitBrightness, gratingBrightness} from '../../sims/waves';
import {A1, A1_DX, A1_DX2, A1_WRONG, A2_L, A2_PD, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {GREY, Lbl, NAVY, ORANGE, PLUM, ROSE, Shrunk, TEAL, VBands, col, fx, sci, twoSlit, yForPd} from './parts';

// ---------- 11. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>Light of wavelength {u ? <u>532 nm</u> : '532 nm'} passes through two narrow slits {u ? <u>0.30 mm</u> : '0.30 mm'} apart. Interference fringes are observed on a screen {u ? <u>1.8 m</u> : '1.8 m'} from the slits. (a) Calculate the fringe spacing. (b) State the fringe spacing if the slit separation is doubled, with all else unchanged.</>;
const GreenBench: React.FC<{w?: number; h?: number}> = ({w = 678, h = 560}) => (
	<svg width={w} height={h} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<OpticsBench b={{x: 40, y: 300, w: 600, g: 0.74, ap: 150, slit: 330, scr: 570}} color={col(532)} spread={14} slide="double" gap={1} sep={4} />
		<path d={`M330,345 v14 M330,352 H570 M570,345 v14`} stroke={INK} strokeWidth={4} fill="none" />
		<text x={450} y={392} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>L = 1.8 m (not to scale)</text>
		<ScreenView x={60} y={420} w={w - 120} h={70} bright={u => twoSlit(u * 12e-3, A1.d, A1.lambda, A1.L)} color={col(532)} n={200} />
		<text x={60} y={520} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>the screen, face on</text>
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<GreenBench />}><Q1 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const three = cue(id, 'about three point two millimetres'), one = cue(id, 'one point six millimetres'), slip = cue(id, 'The classic slip'), opp = cap(id, cue(id, "It's the opposite"));
	const d = f < one ? A1.d : kf(f, [[one, A1.d], [one + 24, 2 * A1.d]]);
	const dx = (A1.lambda * A1.L) / d;
	const SV = {x: 1240, y: 420, w: 580, h: 110}, mm = 8;
	const X = (u: number) => SV.x + ((u + 1) / 2) * SV.w;
	const u1 = (dx * 1e3) / mm;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<><span style={{color: '#2e7d4f'}}>λ = 532 nm = 532 × 10⁻⁹ m</span>{'   '}<span style={{color: ROSE.ink}}>d = 0.30 mm = 0.30 × 10⁻³ m</span>{'   '}<span style={{color: ORANGE.ink}}>L = 1.8 m</span></>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={8} ageAt={one} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>{`(a) Δx = (532 × 10⁻⁹ × ${fx(A1.L, 1)}) / (0.30 × 10⁻³)`}</span></Row>
				<Row at={three - 6} ageAt={one} size={52} oldSize={38}><AnswerBox at={three}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${sci(A1_DX, 1)} m = ${fx(A1_DX * 1e3, 1)} mm`}</span></AnswerBox></Row>
				<Row at={one - 6} size={52}><AnswerBox at={one}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`(b) Δx ∝ 1/d → ${fx(A1_DX2 * 1e3, 1)} mm`}</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<ScreenView x={SV.x} y={SV.y} w={SV.w} h={SV.h} bright={u => twoSlit(u * mm * 1e-3, d, A1.lambda, A1.L)} color={col(532)} n={220} opacity={prog(f, 4, 12)} />
				{f >= three ? <path d={`M${X(0)},${SV.y + SV.h + 10} v14 M${X(0)},${SV.y + SV.h + 17} H${X(u1)} M${X(u1)},${SV.y + SV.h + 10} v14`} stroke={INK} strokeWidth={5} fill="none" opacity={prog(f, three, 12)} /> : null}
			</FrameSvg>
			<Lbl x={SV.x} y={SV.y - 20} at={4} color={INK} size={26}>the green bands (schematic)</Lbl>
			<Lbl x={X(u1 / 2)} y={SV.y + SV.h + 64} at={three + 10} color={INK} size={32} anchor="middle">{`${fx(dx * 1e3, 1)} mm`}</Lbl>
			<CrossedChip x={96} y={720} at={slip} crossAt={opp} size={30} caption="Δx = λL/d: bigger d, smaller Δx">{`d doubled → Δx doubled (${fx(A1_WRONG * 1e3, 1)} mm)`}</CrossedChip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>In a double-slit experiment using light of wavelength 600 nm, point P is at the centre of the {u ? <u>second dark fringe</u> : 'second dark fringe'} from the central bright fringe. (a) Determine the path difference from the two slits to P. (b) Explain why P is dark.</>;
const D13 = {bx: 140, cy: 280, half: 60, lam: 40, sx: 520};
const DarkPic: React.FC<{w?: number; h?: number; marks?: number}> = ({w = 678, h = 560, marks = 0}) => {
	const ya = D13.cy - D13.half, yb = D13.cy + D13.half;
	const yd = (k: number) => yForPd(D13.bx, ya, yb, D13.sx, k * D13.lam);
	const yP = yd(1.5);
	const bright = (y: number) => doubleSlitBrightness(2 * D13.half, D13.lam, Math.atan((y - D13.cy) / (D13.sx - D13.bx)));
	const box = {x: 30, y: 40, w: w - 60, h: h - 80};
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Barrier box={box} bx={D13.bx} gaps={[[ya - 7, ya + 7], [yb - 7, yb + 7]]} t={12} />
			<line x1={D13.bx} y1={ya} x2={D13.sx} y2={yP} stroke={ORANGE.stroke} strokeWidth={4} />
			<line x1={D13.bx} y1={yb} x2={D13.sx} y2={yP} stroke={ORANGE.stroke} strokeWidth={4} />
			<VBands x={D13.sx} y={box.y} w={44} h={box.h} bright={bright} color={col(600)} />
			<circle cx={D13.sx + 22} cy={yP} r={10} fill="#fff" stroke={INK} strokeWidth={3} />
			<text x={D13.sx + 60} y={yP + 10} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: INK}}>P</text>
			<text x={D13.sx + 60} y={D13.cy + 10} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>centre</text>
			{marks > 0.001 ? <g opacity={marks}>
				<text x={D13.sx - 14} y={yd(0.5) + 10} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: ROSE.ink}}>½λ</text>
				<text x={D13.sx - 14} y={yP + 10} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: ROSE.ink}}>1½λ</text>
			</g> : null}
			<text x={D13.bx - 20} y={ya + 8} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: TEAL.ink}}>S₁</text>
			<text x={D13.bx - 20} y={yb + 8} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: PLUM.ink}}>S₂</text>
			<text x={30} y={h - 34} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>not to scale</text>
		</svg>
	);
};
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<DarkPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const nine = cue(id, 'nine hundred nanometres'), canc = cue(id, 'so they cancel'), slip = cue(id, 'The slip is saying'), intf = cap(id, cue(id, 'It interferes destructively'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>{`λ = ${fx(A2_L * 1e9, 0)} nm;   P: second dark band`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={8} ageAt={canc} size={44} oldSize={34} style={{whiteSpace: 'normal'}}><span>dark: (m + ½)λ; first dark band ½λ, second 1½λ</span></Row>
				<Row at={nine - 6} ageAt={canc} size={52} oldSize={38}><AnswerBox at={nine}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`(a) 1.5 × ${fx(A2_L * 1e9, 0)} nm = ${fx(A2_PD * 1e9, 0)} nm (${sci(A2_PD, 1)} m)`}</span></AnswerBox></Row>
				<Row at={canc - 6} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={canc}><span>(b) waves arrive half a cycle out of phase → destructive interference</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 380, opacity: prog(f, 4, 12)}}><DarkPic w={600} h={500} marks={prog(f, 12, 12)} /></div>
			<CrossedChip x={96} y={800} at={slip} crossAt={intf} size={30} caption="both waves arrive and cancel">no light reaches P</CrossedChip>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, look: cue(id, 'But look at these bands'), down: cue(id, 'hard to pin down'), thou: cue(id, 'add thousands more slits'), lines: cue(id, 'thin, sharp lines'), grat: cue(id, "That's a diffraction grating"), next: cap(id, cue(id, 'How does a grating')), end: dur(id) - 1};
})();
const GX = 560, GW = 1240, TOPG = {y: 340, h: 190}, BOTG = {y: 640, h: 190};
const two = (u: number) => doubleSlitBrightness(1, 1 / 3, Math.asin(Math.max(-1, Math.min(1, u * 0.98))));
const grat = (u: number) => gratingBrightness(16, 1, 1 / 3, Math.asin(Math.max(-1, Math.min(1, u * 0.98))));
const peakU = [-2, -1, 0, 1, 2].map(k => k / 3 / 0.98);
const HP = {x: 110, y: 380, w: 330};
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const X = (u: number) => GX + ((u + 1) / 2) * GW;
	const s = HP.w / (HOLDER.box[2] - HOLDER.box[0]);
	const win = {x: HP.x + (485 - HOLDER.box[0]) * s, y: HP.y + (354 - HOLDER.box[1]) * s, w: (599 - 485) * s, h: (586 - 354) * s};
	const tag = final ? 0 : prog(f, H.down, 12) * (1 - prog(f, H.next - 30, 12));
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<ScreenView x={GX} y={230} w={GW} h={70} bright={two} color={col(633)} n={260} opacity={o(2)} />
				<PatternGraph x={GX} y={TOPG.y} w={GW} h={TOPG.h} fn={two} color={col(633)} opacity={o(4)} />
				{tag > 0.001 ? <path d={`M${X(peakU[3] - 0.13)},${TOPG.y - 10} v-12 M${X(peakU[3] - 0.13)},${TOPG.y - 16} H${X(peakU[3] + 0.13)} M${X(peakU[3] + 0.13)},${TOPG.y - 10} v-12`} stroke={NAVY.stroke} strokeWidth={5} fill="none" opacity={tag} /> : null}
				<g opacity={o(H.thou)}><LPlate spec={HOLDER} p={HP} /><CodedSlide win={win} kind="grating" gap={0.9} sep={3.2} /></g>
				{final || f >= H.lines ? <g opacity={o(H.lines)}>
					<PatternGraph x={GX} y={BOTG.y} w={GW} h={BOTG.h} fn={grat} color={INK} dashed n={600} draw={final ? 1 : prog(f, H.lines, 30)} />
					{peakU.map(u => <line key={u} x1={X(u)} y1={TOPG.y + TOPG.h + 8} x2={X(u)} y2={BOTG.y - 4} stroke={INK} strokeWidth={2.5} strokeDasharray="7 7" />)}
				</g> : null}
			</FrameSvg>
			<Lbl x={GX} y={215} at={at(2)} color={INK} size={26}>two slits: the screen and its brightness (schematic)</Lbl>
			<Lbl x={GX + GW} y={TOPG.y + TOPG.h + 30} at={at(4)} color={INK} size={26} anchor="end">angle</Lbl>
			<Lbl x={GX - 20} y={TOPG.y + TOPG.h / 2} at={at(4)} color={INK} size={30} anchor="end">two slits</Lbl>
			<Lbl x={GX + GW / 2} y={BOTG.y + BOTG.h + 36} at={at(H.lines)} color={INK} size={28} anchor="middle">many slits, same d (sketch)</Lbl>
			<Lbl x={X(peakU[3])} y={TOPG.y - 40} at={at(H.down)} out={final ? undefined : H.next - 30} color={NAVY.ink} size={30} anchor="middle">centre?</Lbl>
			{!final ? <HandTag x={X(peakU[4]) - 20} y={TOPG.y + 40} text="soft edges" at={H.down + 14} out={H.next - 30} size={32} color={NAVY.ink} marks={[{kind: 'arrow', from: [X(peakU[4]) - 30, TOPG.y + 54], to: [X(peakU[3]) + 70, TOPG.y + 90], bend: 0.2}]} /> : null}
			<Lbl x={HP.x + HP.w / 2} y={HP.y - 30} at={at(H.thou)} color={INK} size={28} anchor="middle">a ruled slide in the holder</Lbl>
			<Lbl x={GX + GW - 40} y={BOTG.y + 30} at={at(H.lines + 20)} color={INK} size={72} anchor="middle">?</Lbl>
			<HandTag x={GX + 20} y={BOTG.y + 30} text="same d: same places" at={at(H.lines + 24)} size={32} color={INK} />
			{chip ? <Chip x={96} y={890} at={at(H.next + 10)} size={30} w={1728} color={INK} border={INK}>Next: how does a grating let us measure wavelength?</Chip> : null}
		</>
	);
};
/** v06's final frame for the next video. */
export const M7V06FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S15: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Coherent light, two slits: the waves overlap and interfere.</>, at: 2},
		{content: <>Bright: path difference mλ. <span style={{color: ROSE.ink}}>Dark: (m + ½)λ.</span></>, at: 6},
		{content: <>Path difference = d sin θ, so bright at <span style={{color: NAVY.ink}}>d sin θ = mλ</span>.</>, at: 10},
		{content: <>Small angles, L ≫ d: <span style={{color: ORANGE.ink}}>Δx = λL/d</span>, evenly spaced.</>, at: 14},
		{content: <>Measure across many spacings, then divide.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Whole waves: bright. Half waves: dark. Long λ, long L, little d: wide bands.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
