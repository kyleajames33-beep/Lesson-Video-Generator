// Framed memory-aid card, key-notes bullets and the maths question card with its countdown.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MARGIN, SceneHeading, smooth} from './primitives';
import {RoleKey, roleInk} from './roles';

export const MATH_STRAND_ACCENT = '#8a5a12';

export type AidKey = {icon?: React.ReactNode; text: React.ReactNode; role?: RoleKey; at: number};
/**
 * Framed memory-aid card: double ink rule, hand-font "Memory aid" heading, up to three keyed lines
 * with icon slots (painted plate thumbnails), a large main line and an optional formula line.
 * `scale` < 1 gives the small copy used on the key-notes screen (keep scale ≥ 0.62 so text stays ≥ 26 px).
 */
export const MemoryAidCard: React.FC<{x: number; y: number; w: number; at: number; out?: number; title?: string; subtitle?: React.ReactNode; keys?: AidKey[]; main: {content: React.ReactNode; at: number}; formula?: {content: React.ReactNode; at: number}; scale?: number; iconSize?: number}> = ({x, y, w, at, out, title = 'Memory aid', subtitle, keys = [], main, formula, scale = 1, iconSize = 96}) => {
	const f = useCurrentFrame();
	const s = scale;
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: CARD, border: `${4 * s}px solid ${INK}`, borderRadius: 24 * s, boxShadow: `inset 0 0 0 ${8 * s}px ${CARD}, inset 0 0 0 ${10.5 * s}px ${INK}, ${CARD_SHADOW}`, padding: `${26 * s}px ${44 * s}px ${30 * s}px`}}>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 18 * s}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46 * s, color: INK_SOFT}}>{title}</span>
					{subtitle ? <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40 * s, color: MATH_STRAND_ACCENT}}>{subtitle}</span> : null}
				</div>
				{keys.map((k, i) => (
					<div key={i} style={{display: 'flex', alignItems: 'center', gap: 26 * s, marginTop: 10 * s * smooth(prog(f, k.at - 8, 10)), maxHeight: Math.max(iconSize, 64) * s * 1.2 * smooth(prog(f, k.at - 8, 10)), overflow: 'hidden', opacity: prog(f, k.at, 12), transform: `translateX(${(1 - smooth(prog(f, k.at, 14))) * -18}px)`}}>
						<div style={{width: iconSize * s, height: iconSize * s, flex: 'none', position: 'relative'}}>{k.icon}</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50 * s, lineHeight: 1.05, color: roleInk(k.role, INK)}}>{k.text}</div>
					</div>
				))}
				<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: `${18 * s}px 0 ${12 * s}px`, opacity: keys.length ? prog(f, main.at, 12) : 0}} />
				<div style={{maxHeight: 160 * s * smooth(prog(f, main.at - 10, 12)), overflow: 'hidden', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66 * s, lineHeight: 1.05, color: INK, opacity: prog(f, main.at, 12), transform: `scale(${0.94 + 0.06 * smooth(prog(f, main.at, 16))})`, transformOrigin: 'left center'}}>{main.content}</div>
				{formula ? <div style={{marginTop: 12 * s, maxHeight: 90 * s * smooth(prog(f, formula.at - 10, 12)), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46 * s, color: INK, opacity: prog(f, formula.at, 12), whiteSpace: 'pre'}}>{formula.content}</div> : null}
			</div>
		</Enter>
	);
};

/** Short key-note bullets (g01: 14 px accent dots, display text). Keep each to one or two lines; no paragraphs. */
export const KeyNotesBullets: React.FC<{x: number; y: number; w: number; items: {content: React.ReactNode; at: number}[]; size?: number; bulletColor?: string; gap?: number}> = ({x, y, w, items, size = 36, bulletColor = MATH_STRAND_ACCENT, gap = 36}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w}}>
		{items.map((n, i) => (
			<Enter key={i} at={n.at} style={{display: 'flex', gap: 20, marginBottom: gap}}>
				<div style={{flex: 'none', width: 14, height: 14, marginTop: size * 0.42, borderRadius: 999, background: bulletColor}} />
				<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 500, color: INK, lineHeight: 1.25}}>{n.content}</div>
			</Enter>
		))}
	</div>
);

/** Key-notes screen: heading, bullets on the left, the framed memory aid (small) on the right. */
export const KeyNotesScreen: React.FC<{items: {content: React.ReactNode; at: number}[]; aside?: React.ReactNode; bulletsW?: number; size?: number}> = ({items, aside, bulletsW = 1000, size = 36}) => (
	<>
		<SceneHeading text="Key notes: what to write in your book" at={2} size={60} />
		<KeyNotesBullets x={MARGIN + 14} y={200} w={bulletsW} items={items} size={size} />
		{aside}
	</>
);

/**
 * Maths question card: the full worded question stays on screen through the response hold, with the
 * g01 countdown ring and "Pause here to answer." in the hand font. Wrap colour-role spans in
 * <RolesOn on={false}> until feedback so the card gives nothing away. `shrinkAt` moves the card to a
 * 30 px strip at the top for the feedback that follows.
 */
export const QuestionCard: React.FC<{at: number; children: React.ReactNode; hold?: {startFrame: number; endFrame: number}; heading?: string; shrinkAt?: number; x?: number; y?: number; w?: number; size?: number; pauseAt?: number}> = ({at, children, hold, heading = 'Your turn', shrinkAt, x = MARGIN, y = 214, w = 1380, size = 42, pauseAt}) => {
	const f = useCurrentFrame();
	const sh = shrinkAt === undefined ? 0 : smooth(prog(f, shrinkAt, 20));
	const sc = 1 - sh * (1 - 30 / size);
	return (
		<>
			<SceneHeading text={heading} at={at} out={shrinkAt} />
			<Enter at={at + 6} style={{position: 'absolute', left: x, top: y + (150 - y) * sh, width: w, transform: `scale(${sc})`, transformOrigin: '0 0'}}>
				<div style={{background: CARD, borderRadius: 20, padding: '30px 40px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', borderLeft: `10px solid ${MATH_STRAND_ACCENT}`, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, lineHeight: 1.45, color: INK}}>{children}</div>
			</Enter>
			{hold ? (
				<>
					<div style={{position: 'absolute', left: x, top: 840, opacity: 1 - sh}}><HandText text="Pause here to answer." at={pauseAt ?? hold.startFrame - 20} size={60} color={AMBER_INK} cps={30} /></div>
					<FrameSvg style={{opacity: 1 - sh}}><Countdown start={hold.startFrame} end={hold.endFrame} x={1690} y={560} r={70} /></FrameSvg>
				</>
			) : null}
		</>
	);
};
