// Shared scene parts for the scenes every lesson repeats: the practice question with its
// pause, the brief feedback, the worked example and the key notes. They hold the build-gate
// rules (maths-visual-standard.md, build-agent-brief.md) so a lesson gets them right by
// using the part, and they refuse content that breaks a rule (too many notes, a paragraph
// bullet) with a clear error at preview time instead of a failed sheet later.
// Subject-neutral: pass the accent colour, or set it once with <Accent>.
import React, {createContext, useContext} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, prog} from '../kit';
import {ANSWER, CARD, CARD_BORDER, CARD_SHADOW, FRAME, INK, INK_SOFT, MISTAKE, PAPER, TONES, TRACK, TYPE, Tone, ToneName, tone} from './tokens';

const AccentContext = createContext<string>(TONES.teal.ink);
/** Set the subject accent for everything inside (bullets, question edge, headings that ask for it). */
export const Accent: React.FC<{color: string; children: React.ReactNode}> = ({color, children}) => <AccentContext.Provider value={color}>{children}</AccentContext.Provider>;
export const useAccent = () => useContext(AccentContext);

const card: React.CSSProperties = {background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, border: `2.5px solid ${CARD_BORDER}`, boxSizing: 'border-box'};
const plainLength = (node: React.ReactNode): number => (typeof node === 'string' || typeof node === 'number' ? String(node).length : Array.isArray(node) ? node.reduce((n: number, c) => n + plainLength(c), 0) : React.isValidElement(node) ? plainLength((node.props as {children?: React.ReactNode}).children) : 0);

/** Scene heading in the hand font at the house position. */
export const Heading: React.FC<{text: string; at?: number; out?: number; color?: string}> = ({text, at = 4, out, color = INK}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: FRAME.margin, top: FRAME.headingTop, opacity: out === undefined ? 1 : 1 - prog(f, out, 10)}}><HandText text={text} at={at} size={TYPE.heading} cps={32} color={color} /></div>;
};

// ------------------------------------------------------------------ pause ring
/**
 * Countdown ring for an answer pause. It stands full from `showAt` (the "Pause here to
 * answer." cue), counts down between `start` and `end`, then fades. So it is on screen
 * in every frame of the hold, as the build gate asks.
 */
export const PauseRing: React.FC<{showAt: number; start: number; end: number; x: number; y: number; r?: number; label?: string}> = ({showAt, start, end, x, y, r = 68, label = 'think it through'}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const appear = prog(f, showAt, 12), gone = prog(f, end, 10);
	if (appear <= 0.001 || gone >= 0.999) return null;
	const left = Math.min(1, Math.max(0, 1 - (f - start) / (end - start)));
	const secs = Math.ceil(((end - start) * left) / fps), c = 2 * Math.PI * r;
	return (
		<svg data-audit="countdown" width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity: appear * (1 - gone), pointerEvents: 'none'}}>
			<g transform={`translate(${x},${y}) scale(${0.88 + 0.12 * appear})`}>
				<circle r={r + 16} fill={CARD} stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
				<circle r={r} fill="none" stroke={TRACK} strokeWidth={14} />
				<circle r={r} fill="none" stroke={TONES.amber.stroke} strokeWidth={14} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - left)} transform="rotate(-90)" />
				<text y={18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.working}} fill={INK}>{secs}</text>
				<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand}} fill={TONES.amber.ink}>{label}</text>
			</g>
		</svg>
	);
};

// ------------------------------------------------------------- question + hold
/**
 * Practice question in the real exam wording. The full text is on screen from the first
 * frame and stays through the pause. `picture` is the slot for the plate or diagram the
 * question refers to (keep it; a question card with no picture is usually a thin frame).
 * `pauseAt` is the "Pause here to answer." cue; `hold` is the scene's responseHold.
 */
export const QuestionScene: React.FC<{
	heading?: string; marks?: number;
	children: React.ReactNode;
	picture?: React.ReactNode;
	pauseAt: number; hold: {startFrame: number; endFrame: number};
	size?: number;
}> = ({heading = 'Your turn', marks, children, picture, pauseAt, hold, size = TYPE.current}) => {
	const accent = useAccent();
	const textW = picture ? 1010 : 1500;
	return (
		<>
			<Heading text={heading} />
			<div style={{...card, position: 'absolute', left: FRAME.margin, top: 204, width: textW, padding: '30px 40px', borderLeft: `10px solid ${accent}`, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, lineHeight: 1.4, color: INK}}>
				{children}
				{marks ? <div style={{marginTop: 14, textAlign: 'right', fontSize: TYPE.support, fontWeight: 800, color: INK_SOFT}}>{marks} {marks === 1 ? 'mark' : 'marks'}</div> : null}
			</div>
			{picture ? <div style={{position: 'absolute', left: FRAME.margin + textW + 40, top: 204, width: FRAME.w - 2 * FRAME.margin - textW - 40, height: 560}}>{picture}</div> : null}
			<div style={{position: 'absolute', left: FRAME.margin, top: 850}}><HandText text="Pause here to answer." at={pauseAt} size={TYPE.heading} color={TONES.amber.ink} cps={30} /></div>
			<PauseRing showAt={pauseAt} start={hold.startFrame} end={hold.endFrame} x={picture ? 1000 : 1690} y={picture ? 880 : 560} />
		</>
	);
};

// -------------------------------------------------------------------- feedback
/**
 * Brief feedback after a practice question (owner rule, 16 October 2026): the answer, one
 * or two reasons, one crossed classic mistake, then move on. Three or more reasons is a
 * re-teach, so this part refuses them.
 */
export const FeedbackScene: React.FC<{
	heading?: string;
	answer: {content: React.ReactNode; at: number};
	reasons: readonly {content: React.ReactNode; at: number}[];
	mistake?: {content: React.ReactNode; why?: React.ReactNode; at: number};
	picture?: React.ReactNode;
}> = ({heading = 'Check your answer', answer, reasons, mistake, picture}) => {
	if (reasons.length > 2) throw new Error('FeedbackScene: give one or two key reasons only. Feedback is brief; students can rewatch the lesson.');
	const f = useCurrentFrame();
	const w = picture ? 1010 : 1500;
	return (
		<>
			<Heading text={heading} />
			<Enter at={answer.at} style={{position: 'absolute', left: FRAME.margin, top: 204, maxWidth: w}}>
				<div style={{...card, display: 'inline-block', padding: '18px 36px', border: `5px solid ${ANSWER.stroke}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.working + 8, color: ANSWER.ink, lineHeight: 1.2}}>{answer.content}</div>
			</Enter>
			<div style={{position: 'absolute', left: FRAME.margin + 8, top: 400, width: w}}>
				{reasons.map((r, i) => (
					<Enter key={i} at={r.at} style={{display: 'flex', gap: 20, marginBottom: 26}}>
						<div style={{flex: 'none', width: 16, height: 16, marginTop: TYPE.current * 0.48, borderRadius: 999, background: ANSWER.stroke}} />
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: TYPE.current, lineHeight: 1.25, color: INK}}>{r.content}</div>
					</Enter>
				))}
			</div>
			{mistake ? (
				<div style={{position: 'absolute', left: FRAME.margin, top: 800, opacity: prog(f, mistake.at, 12), display: 'flex', alignItems: 'center', gap: 28}}>
					<div style={{position: 'relative', padding: '8px 26px', borderRadius: 16, border: `3px solid ${MISTAKE.stroke}`, background: MISTAKE.soft, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.current, color: MISTAKE.ink, whiteSpace: 'pre'}}>
						{mistake.content}
						<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}>
							<path d="M0,78 L100,22" stroke={MISTAKE.stroke} strokeWidth={7} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(f, mistake.at + 14, 12)} />
						</svg>
					</div>
					{mistake.why ? <div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: MISTAKE.ink, opacity: prog(f, mistake.at + 22, 12)}}>{mistake.why}</div> : null}
				</div>
			) : null}
			{picture ? <div style={{position: 'absolute', left: FRAME.margin + w + 40, top: 204, width: FRAME.w - 2 * FRAME.margin - w - 40, height: 560}}>{picture}</div> : null}
		</>
	);
};

// -------------------------------------------------------------- worked example
export type Given = {label: React.ReactNode; value: React.ReactNode; unit?: React.ReactNode; tone?: ToneName | Tone; at?: number};
/** `uses` lists the givens (by position, from 0) this stage reads; they light up while it is current. */
export type WorkStep = {at: number; content: React.ReactNode; note?: string; uses?: readonly number[]};
const LINE = 62; // height of the line a stage's text is centred on, whatever its size
/**
 * Worked example in the Chemistry g01 layout: a short task, a strip of givens (each value
 * with its unit, in its own tone) with the rule beside them, the working one stage at a
 * time, a framed answer and a crossed classic slip.
 *
 * The working is divided into equal rows, one per stage, so the page fills evenly down to
 * the answer and nothing jumps when a stage is added. The current stage is large and dark
 * with its hand note; earlier stages shrink and soften in place. A rail of dots marks
 * progress, with a ring on the current stage, and the givens a stage reads light up.
 *
 * Keep each stage to one line (about 34 characters beside a picture). `picture` fills the
 * right of the frame (the apparatus, the graph or the simulation the numbers come from).
 * Give one: without it the right of the frame is bare, and early frames are thin.
 */
export const WorkedExample: React.FC<{
	heading: string; task: React.ReactNode;
	givens: readonly Given[];
	equation?: {content: React.ReactNode; title?: string; at?: number};
	steps: readonly WorkStep[];
	answer?: {at: number; content: React.ReactNode};
	slip?: {at: number; content: React.ReactNode; why: string};
	picture?: React.ReactNode;
}> = ({heading, task, givens, equation, steps, answer, slip, picture}) => {
	const f = useCurrentFrame();
	const accent = useAccent();
	if (steps.length > 6) throw new Error('WorkedExample: more than six stages on one screen is too dense. Split the example into two scenes.');
	if (!steps.length) throw new Error('WorkedExample: give at least one stage of working.');
	const n = steps.length;
	const current = steps.reduce((k, s, i) => (f >= s.at ? i : k), -1);
	const done = Boolean(answer && f >= answer.at);
	const leftW = picture ? 1000 : 1728;
	const restSize = n <= 4 ? TYPE.body : TYPE.support + 4;
	// When stage i stops being current: the next stage's cue, or the answer's.
	const leaves = (i: number) => (i + 1 < n ? steps[i + 1].at : answer ? answer.at : Infinity);
	const used = !done && current >= 0 ? steps[current].uses ?? [] : [];
	const chip: React.CSSProperties = {...card, borderRadius: 16, padding: '8px 22px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.current, lineHeight: 1.25, whiteSpace: 'pre'};
	return (
		<>
			<Heading text={heading} />
			<div style={{position: 'absolute', left: FRAME.margin, top: 190, width: leftW, height: 690, display: 'flex', flexDirection: 'column'}}>
				<div style={{flex: 'none', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: TYPE.body, lineHeight: 1.25, color: INK}}>{task}</div>
				<div style={{flex: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 16px', marginTop: 22}}>
					{givens.map((g, i) => {
						const t = g.tone ? tone(g.tone) : TONES.ink;
						const lit = used.includes(i) ? prog(f, steps[current].at, 10) : 0;
						return (
							<div key={i} style={{...chip, opacity: g.at === undefined ? 1 : prog(f, g.at, 12), color: t.ink, background: lit > 0.5 ? t.soft : CARD, border: `2.5px solid ${lit > 0.5 ? t.stroke : CARD_BORDER}`, transform: `scale(${1 + 0.05 * lit})`}}>
								{g.label} = {g.value}{g.unit ? <span style={{fontSize: TYPE.support, fontWeight: 700, color: INK_SOFT}}> {g.unit}</span> : null}
							</div>
						);
					})}
					{equation ? (
						<div style={{...chip, opacity: prog(f, equation.at ?? 0, 12), color: INK, borderLeft: `10px solid ${accent}`, display: 'flex', alignItems: 'baseline', gap: 16}}>
							<span style={{fontSize: TYPE.label, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT}}>{equation.title ?? 'Rule'}</span>
							{equation.content}
						</div>
					) : null}
				</div>
				<div style={{flex: '1 1 0', minHeight: 0, marginTop: 30, display: 'flex', flexDirection: 'column'}}>
					{steps.map((s, i) => {
						const shown = f >= s.at;
						const isCurrent = i === current && !done;
						const t = prog(f, leaves(i), 10);
						return (
							<div key={i} style={{position: 'relative', flex: '1 1 0', minHeight: 0, maxHeight: 132, opacity: shown ? prog(f, s.at, 14) : 0}}>
								{i > 0 ? <div style={{position: 'absolute', left: 10, width: 5, top: `calc(${LINE / 2 + 12}px - 100%)`, height: 'calc(100% - 24px)', borderRadius: 3, background: TRACK}} /> : null}
								<div style={{position: 'absolute', left: 12, top: LINE / 2, width: 0, height: 0}}>
									<div style={{position: 'absolute', left: -12, top: -12, width: 24, height: 24, boxSizing: 'border-box', borderRadius: 999, background: isCurrent ? CARD : INK_SOFT, border: isCurrent ? `6px solid ${accent}` : `4px solid ${PAPER}`}} />
								</div>
								<div style={{marginLeft: 52, height: LINE, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: t > 0.5 ? 600 : 800, fontSize: TYPE.working + (restSize - TYPE.working) * t, color: t > 0.5 ? INK_SOFT : INK, lineHeight: 1.15, whiteSpace: 'pre-wrap'}}>{s.content}</div>
								{s.note && isCurrent ? <div style={{marginLeft: 52, fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, lineHeight: 1.05, color: TONES.amber.ink, opacity: prog(f, s.at + 10, 10)}}>{s.note}</div> : null}
							</div>
						);
					})}
					{answer ? (
						<Enter at={answer.at} style={{flex: 'none', height: 150, marginLeft: 52}}>
							<div style={{...card, display: 'inline-block', padding: '10px 34px', border: `5px solid ${ANSWER.stroke}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.answer, color: ANSWER.ink, whiteSpace: 'pre'}}>{answer.content}</div>
						</Enter>
					) : <div style={{flex: 'none', height: 60}} />}
				</div>
			</div>
			{slip ? (
				<div style={{position: 'absolute', left: FRAME.margin, top: 900, opacity: prog(f, slip.at, 12), display: 'flex', alignItems: 'center', gap: 24}}>
					<div style={{padding: '4px 22px', borderRadius: 14, border: `3px solid ${MISTAKE.stroke}`, background: MISTAKE.soft, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.body, color: MISTAKE.ink, whiteSpace: 'pre'}}>{slip.content}</div>
					<svg width={56} height={56} viewBox="0 0 56 56" style={{overflow: 'visible'}}><DrawPath d="M8,8 L48,48" at={slip.at + 10} dur={8} color={MISTAKE.stroke} width={7} /><DrawPath d="M48,8 L8,48" at={slip.at + 16} dur={8} color={MISTAKE.stroke} width={7} /></svg>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: MISTAKE.ink}}>{slip.why}</div>
				</div>
			) : null}
			{picture ? <div style={{position: 'absolute', left: FRAME.margin + leftW + 40, top: 190, width: FRAME.w - 2 * FRAME.margin - leftW - 40, height: 690}}>{picture}</div> : null}
		</>
	);
};

// ------------------------------------------------------------------- key notes
/**
 * Key notes: about five short bullets and the framed memory aid. Notes are on-screen
 * only, so each one is a core fact in one or two short lines. This part refuses more
 * than six notes, or a plain-text note longer than 95 characters (a paragraph bullet).
 * Remember the scene itself must last at least 40 s: in config.ts use
 * `Math.max(1200, durationInFrames)` for the key-notes scene.
 */
export const KeyNotesScene: React.FC<{
	notes: readonly {content: React.ReactNode; at: number}[];
	/** The framed memory aid (for example MemoryAidCard from the maths studio, or MemoryCard below). */
	aid?: React.ReactNode;
	heading?: string; size?: number;
}> = ({notes, aid, heading = 'Key notes: what to write in your book', size = TYPE.body}) => {
	const accent = useAccent();
	if (notes.length > 6) throw new Error(`KeyNotesScene: ${notes.length} notes. Keep about five; choose the ones a student needs in their book.`);
	notes.forEach((n, i) => { const len = plainLength(n.content); if (len > 95) throw new Error(`KeyNotesScene: note ${i + 1} is ${len} characters. Trim it to its core fact (95 characters at most).`); });
	return (
		<>
			<Heading text={heading} at={2} />
			<div style={{position: 'absolute', left: FRAME.margin + 14, top: 204, width: aid ? 1000 : 1600}}>
				{notes.map((n, i) => (
					<Enter key={i} at={n.at} style={{display: 'flex', gap: 20, marginBottom: 34}}>
						<div style={{flex: 'none', width: 14, height: 14, marginTop: size * 0.42, borderRadius: 999, background: accent}} />
						<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 500, color: INK, lineHeight: 1.25}}>{n.content}</div>
					</Enter>
				))}
			</div>
			{aid ? <div style={{position: 'absolute', left: 1160, top: 204, width: 664}}>{aid}</div> : null}
		</>
	);
};

/** Framed memory aid: double ink rule, hand-font title, one large line and an optional smaller line. */
export const MemoryCard: React.FC<{at: number; title?: string; main: React.ReactNode; sub?: React.ReactNode; picture?: React.ReactNode}> = ({at, title = 'Memory aid', main, sub, picture}) => (
	<Enter at={at}>
		<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`, padding: '26px 40px 30px'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>{title}</div>
			{picture ? <div style={{position: 'relative', height: 220, margin: '8px 0 12px'}}>{picture}</div> : null}
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.heading, lineHeight: 1.08, color: INK}}>{main}</div>
			{sub ? <div style={{marginTop: 12, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.support + 4, color: INK_SOFT, lineHeight: 1.25}}>{sub}</div> : null}
		</div>
	</Enter>
);
