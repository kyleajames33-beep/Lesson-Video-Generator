// Framed memory-aid card, key-notes bullets and the maths question card with its countdown.
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MARGIN, SceneHeading, smooth} from './primitives';
import {MATH_ROLES, RoleKey, roleInk} from './roles';

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
export const QuestionCard: React.FC<{at: number; children: React.ReactNode; hold?: {startFrame: number; endFrame: number;
	/** Opt in: show the countdown ring full from this frame until the timed count starts. */
	ringFrom?: number}; heading?: string; shrinkAt?: number; x?: number; y?: number; w?: number; size?: number; pauseAt?: number;
	/** Picture slot beside the question text (about 300 to 360 px wide), arriving with the card; `swap` cross-fades to a filled-in version. */
	picture?: {node: React.ReactNode; w?: number; swap?: {node: React.ReactNode; at: number}}}> = ({at, children, hold, heading = 'Your turn', shrinkAt, x = MARGIN, y = 214, w = 1380, size = 42, pauseAt, picture}) => {
	const f = useCurrentFrame();
	const sh = shrinkAt === undefined ? 0 : smooth(prog(f, shrinkAt, 20));
	const sc = 1 - sh * (1 - 30 / size);
	return (
		<>
			<SceneHeading text={heading} at={at} out={shrinkAt} />
			<Enter at={at + 6} style={{position: 'absolute', left: x, top: y + (150 - y) * sh, width: w, transform: `scale(${sc})`, transformOrigin: '0 0'}}>
				<div style={{background: CARD, borderRadius: 20, padding: '30px 40px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', borderLeft: `10px solid ${MATH_STRAND_ACCENT}`, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, lineHeight: 1.45, color: INK}}>{picture ? (
					<div style={{display: 'flex', alignItems: 'center', gap: 36}}>
						<div style={{flex: 1, minWidth: 0}}>{children}</div>
						<div style={{position: 'relative', flex: 'none', width: picture.w ?? 340}}>
							<div style={{opacity: picture.swap ? 1 - prog(f, picture.swap.at, 14) : 1}}>{picture.node}</div>
							{picture.swap ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, picture.swap.at, 14)}}>{picture.swap.node}</div> : null}
						</div>
					</div>
				) : children}</div>
			</Enter>
			{hold ? (
				<>
					<div style={{position: 'absolute', left: x, top: 840, opacity: 1 - sh}}><HandText text="Pause here to answer." at={pauseAt ?? hold.startFrame - 20} size={60} color={AMBER_INK} cps={30} /></div>
					<FrameSvg style={{opacity: 1 - sh}}><Countdown start={hold.startFrame} end={hold.endFrame} x={1690} y={560} r={70} ringFrom={hold.ringFrom} /></FrameSvg>
				</>
			) : null}
		</>
	);
};

/** Answer-side strip of supplied values (36 px chips in role colours), arriving one by one. */
export const GivensStrip: React.FC<{x: number; y: number; items: readonly {content: React.ReactNode; role?: RoleKey; at: number}[]; title?: string; size?: number; out?: number; maxW?: number}> = ({x, y, items, title = 'Given', size = 36, out, maxW = 1728}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (!items.length || o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, maxWidth: maxW, opacity: o * prog(f, items[0].at, 12), display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 14}}>
			<span style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT, marginRight: 6}}>{title}</span>
			{items.map((it, i) => (
				<span key={i} style={{opacity: prog(f, it.at, 12), transform: `translateY(${(1 - prog(f, it.at, 14)) * 10}px)`, display: 'inline-block', background: CARD, borderRadius: 14, padding: '4px 18px', border: `3px solid ${it.role ? MATH_ROLES[it.role].stroke : 'rgba(60,45,20,0.14)'}`, boxShadow: '0 6px 14px rgba(60,45,20,0.08)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: roleInk(it.role, INK), whiteSpace: 'pre'}}>{it.content}</span>
			))}
		</div>
	);
};

/**
 * Small axes picture for question cards (inline SVG, no absolute positioning): an optional curve, shaded
 * x-intervals (domain), excluded open circles, a marked point with a violet "gradient here?" style tag,
 * and optional x tick labels (numbers or radian labels). Text stays at 26 px or more.
 */
export const QuestionAxes: React.FC<{w?: number; h?: number; window: {x: readonly [number, number]; y: readonly [number, number]}; fn?: (x: number) => number; domain?: readonly [number, number]; color?: string; point?: {x: number; tag?: string}; shade?: readonly {from: number; to: number; color?: string; label?: string}[]; excluded?: readonly {x: number; y: number}[]; xTicks?: readonly {value: number; label: string}[]; xLabel?: string; yLabel?: string}> = ({w = 340, h = 260, window: win, fn, domain, color = INK, point, shade = [], excluded = [], xTicks = [], xLabel = 'x', yLabel = 'y'}) => {
	const cid = 'qa-' + useId().replace(/:/g, '');
	const pad = {l: 20, r: 24, t: 20, b: xTicks.length ? 46 : 20};
	const bw = w - pad.l - pad.r, bh = h - pad.t - pad.b;
	const X = (v: number) => pad.l + ((v - win.x[0]) / (win.x[1] - win.x[0])) * bw;
	const Y = (v: number) => pad.t + ((win.y[1] - v) / (win.y[1] - win.y[0])) * bh;
	const ox = X(Math.max(win.x[0], Math.min(win.x[1], 0))), oy = Y(Math.max(win.y[0], Math.min(win.y[1], 0)));
	let d = '';
	if (fn) {
		const [a, b] = domain ?? win.x;
		const lo = Math.max(a, win.x[0]), hi = Math.min(b, win.x[1]);
		let pen = false;
		for (let i = 0; i <= 160; i++) {
			const xv = lo + ((hi - lo) * i) / 160 + (i === 0 && domain ? 1e-6 : 0);
			const yv = fn(xv);
			if (!Number.isFinite(yv) || excluded.some(e => Math.abs(e.x - xv) < 1e-9)) {pen = false; continue;}
			const yc = Math.max(win.y[0] - 1, Math.min(win.y[1] + 1, yv));
			d += `${pen ? 'L' : 'M'}${X(xv).toFixed(1)},${Y(yc).toFixed(1)} `;
			pen = true;
		}
	}
	const py = point && fn ? fn(point.x) : 0;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<defs><clipPath id={cid}><rect x={pad.l} y={pad.t} width={bw} height={bh} /></clipPath></defs>
			{shade.map((s, i) => <g key={i}><rect x={X(s.from)} y={pad.t} width={X(s.to) - X(s.from)} height={bh} fill={s.color ?? '#f8e8c8'} opacity={0.9} />{s.label ? <text x={X(s.to) - 10} y={pad.t + bh - 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, fill: AMBER_INK}}>{s.label}</text> : null}</g>)}
			<path d={`M${pad.l},${oy} H${pad.l + bw} M${ox},${pad.t} V${pad.t + bh}`} stroke={INK} strokeWidth={3} fill="none" />
			<text x={pad.l + bw + 4} y={oy - 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK_SOFT}}>{xLabel}</text>
			<text x={ox + 8} y={pad.t + 24} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK_SOFT}}>{yLabel}</text>
			{xTicks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={oy - 7} y2={oy + 7} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={pad.t + bh + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK}}>{t.label}</text></g>)}
			{d ? <path d={d} stroke={color} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" clipPath={`url(#${cid})`} /> : null}
			{excluded.map((e, i) => <circle key={i} cx={X(e.x)} cy={Y(e.y)} r={8} fill={CARD} stroke="#8a8378" strokeWidth={4} />)}
			{point && fn ? <g>
				<circle cx={X(point.x)} cy={Y(py)} r={10} fill="#6b4fa0" stroke={CARD} strokeWidth={4} />
				{point.tag ? <text x={Math.min(X(point.x) + 16, w - 8)} y={Y(py) - 22} textAnchor={X(point.x) > w * 0.55 ? 'end' : 'start'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: '#6b4fa0'}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{point.tag}</text> : null}
			</g> : null}
		</svg>
	);
};
