// S08 lesson-local pieces (README for Claude):
// - Para: a handwritten answer paragraph laid on the ruled AnswerBox geometry (answerGeom), made of sentence parts that
//   write on word by word at their own cues, with phrase marks (underline, ring, highlight) found by words (throws when a
//   phrase is missing). Block: a paragraph collapsed to one grey line with a label; Slot: a dashed placeholder line.
// - PeelDot: the margin letter (P, E, E, L) of a paragraph sentence, in the PEEL colours (navy, teal, violet, green).
// - Demands: the demand ticks column (four small boxes, each labelled with one demand; half tick, then full tick).
// - PlanCard: an index card with a bold verdict line and numbered one-line rows, each with a teal number chip under it;
//   optional clock ring (a pen line sweeping once round the card).
// - PeelRail: four stacked labels Point, Evidence, Explain, Link, lighting in turn.
// - BandMeter: a vertical 0 to 7 mark scale shaded in four bands; answers settle into a band as labelled markers.
// - ExamPage: a coded exam page outline (abstract), with a long answer box and its marks badge.
// - LiftChip: a value chip that lifts off a table cell and arcs to a new place.
// - VBrace: the green bracket that joins the opening and closing judgement lines.
// - Notes8: the key notes board with a two-line memory aid and its grey condition tag.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, HandText, scribbleEllipse as scribbleEllipseS} from '../../kit';
import {
	AMBER, AMBER_INK, CARD, DrawPath, EMDASH, GREEN, GREY, GREY_FILL, GREY_INK, HI, INK, INK_SOFT, PEN, T, TEAL, clamp01, findRun, lerp, measure, prog, smooth, vis, wrap,
} from './kit';
import type {AnsGeom} from './kit';

export const VIOLET = '#7a4fa3';
export const TERRA = '#b5502b';
export const PENCIL = '#5f5a52';
export const TEAL_CHIP = '#e3f3f0';

// ---------- paragraphs on the answer box ----------
export type PPart = {text: string; at: number; dur?: number};
export type PMk = {phrase: string; occ?: number; at: number; out?: number; color?: string; kind?: 'under' | 'ring' | 'hi'};
const splitW = (t: string) => t.split(/[ \t\n]+/).filter(Boolean);
export const paraLayout = (g: AnsGeom, parts: string[], size?: number) => {
	const sz = size ?? g.size;
	const L = wrap(parts.join(' '), g.tw, sz, true, 700);
	const partOf: number[] = [];
	const offs: number[] = [];
	parts.forEach((p, i) => {
		const ws = splitW(p);
		let c = 0;
		ws.forEach(w => { partOf.push(i); offs.push(c / Math.max(1, p.length)); c += w.length + 1; });
	});
	return {L, partOf, offs, lines: L.lines};
};
export const paraLines = (g: AnsGeom, parts: string[], size?: number) => paraLayout(g, parts, size).lines;
/** First baseline y of the k-th line of a paragraph starting on ruled line `line`. */
export const lineY = (g: AnsGeom, line: number) => g.base(line);
export const Para: React.FC<{g: AnsGeom; line: number; parts: PPart[]; marks?: PMk[]; o?: number; color?: string; dy?: number; size?: number; dims?: {parts: number[]; at: number; to?: number; out?: number}[]}> = ({g, line, parts, marks = [], o = 1, color = INK, dy = 0, size, dims = []}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const sz = size ?? g.size;
	const {L, partOf, offs} = paraLayout(g, parts.map(p => p.text), sz);
	const words = L.words.map((w, i) => ({...w, ax: g.tx + w.x, ay: g.base(line + w.line) + dy, part: partOf[i]}));
	const dimOf = (p: number) => dims.reduce((a, d) => (d.parts.includes(p) ? a * (1 - (1 - (d.to ?? 0.35)) * vis(f, d.at, d.out, 12)) : a), 1);
	const appear = (i: number) => {
		const p = parts[words[i].part];
		const d = p.dur ?? Math.max(14, p.text.length * 0.55);
		return p.at + d * offs[i];
	};
	const spans = (m: PMk) => {
		const [a, b] = findRun(words, m.phrase, m.occ ?? 1, 'in an answer paragraph');
		const out: {x1: number; x2: number; y: number}[] = [];
		for (let i = a; i <= b; i++) {
			const w = words[i], last = out[out.length - 1];
			if (last && last.y === w.ay) last.x2 = w.ax + w.w; else out.push({x1: w.ax, x2: w.ax + w.w, y: w.ay});
		}
		return out;
	};
	return (
		<g opacity={o}>
			{marks.filter(m => m.kind === 'hi').map((m, i) => {
				const v = vis(f, m.at, m.out, 8);
				return v > 0.01 ? <g key={'h' + i} opacity={v * 0.75}>{spans(m).map((s, k) => <rect key={k} x={s.x1 - 5} y={s.y - sz * 0.82} width={(s.x2 - s.x1 + 10) * clamp01((f - m.at) / 10)} height={sz * 1.08} rx={6} fill={m.color ?? HI} />)}</g> : null;
			})}
			{words.map((w, i) => {
				const op = prog(f, appear(i), 6) * dimOf(w.part);
				return op > 0.01 ? <T key={i} x={w.ax} y={w.ay} text={w.t} size={sz} color={color} hand weight={700} o={op} /> : null;
			})}
			{marks.filter(m => m.kind !== 'hi').map((m, i) => {
				const oo = m.out === undefined ? 1 : 1 - prog(f, m.out, 8);
				if (oo <= 0.01 || f < m.at) return null;
				const sp = spans(m);
				if (m.kind === 'ring') return <g key={'r' + i} opacity={oo}>{sp.map((s, k) => <DrawPath key={k} d={scribbleEllipseS((s.x1 + s.x2) / 2, s.y - sz * 0.3, (s.x2 - s.x1) / 2 + 12, sz * 0.7, 4 + k, 1.12)} at={m.at + k * 6} dur={14} color={m.color ?? TERRA} width={3.5} />)}</g>;
				return <g key={'u' + i} opacity={oo}>{sp.map((s, k) => <DrawPath key={k} d={`M${s.x1 - 2},${s.y + 7} L${s.x2 + 2},${s.y + 5}`} at={m.at + k * 5} dur={Math.min(16, 6 + (s.x2 - s.x1) / 60)} color={m.color ?? TEAL} width={4} />)}</g>;
			})}
		</g>
	);
};
/** A paragraph collapsed to one grey line with a short label. */
export const Block: React.FC<{g: AnsGeom; line: number; label: string; at: number; out?: number; dy?: number; w?: number; o?: number; color?: string}> = ({g, line, label, at, out, dy = 0, w, o = 1, color = GREY}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const y = g.base(line) + dy;
	const bw = w ?? Math.min(g.tw, measure(label, g.size * 0.8, true, 700) + 40);
	return (
		<g opacity={v}>
			<rect x={g.tx - 10} y={y - g.size * 0.86} width={bw} height={g.size * 1.12} rx={10} fill={GREY_FILL} stroke={color} strokeWidth={2} />
			<T x={g.tx + 8} y={y - 2} text={label} size={g.size * 0.8} color={GREY_INK} hand weight={700} />
		</g>
	);
};
/** A dashed placeholder line for a paragraph still to come. */
export const Slot: React.FC<{g: AnsGeom; line: number; label: string; at: number; out?: number; dy?: number}> = ({g, line, label, at, out, dy = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const y = g.base(line) + dy;
	const bw = measure(label, g.size * 0.78, true, 700) + 40;
	return (
		<g opacity={v}>
			<rect x={g.tx - 10} y={y - g.size * 0.86} width={bw} height={g.size * 1.12} rx={10} fill="none" stroke={GREY} strokeWidth={2} strokeDasharray="5 6" />
			<T x={g.tx + 8} y={y - 2} text={label} size={g.size * 0.78} color={GREY} hand weight={700} />
		</g>
	);
};
export const PEEL = [
	{t: 'Point', l: 'P', sub: 'the claim, in one sentence', c: PEN},
	{t: 'Evidence', l: 'E', sub: 'values from the stimulus', c: TEAL},
	{t: 'Explain', l: 'E', sub: 'the science that links them', c: VIOLET},
	{t: 'Link', l: 'L', sub: 'back to the question', c: GREEN},
];
/** Margin letter of a paragraph sentence (k = 0..3 for P, E, E, L). Bright from `at`, dims at `dim`. */
export const PeelDot: React.FC<{g: AnsGeom; line: number; k: number; at: number; dim?: number; dy?: number; out?: number; s?: number}> = ({g, line, k, at, dim, dy = 0, out, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8);
	if (v <= 0.01) return null;
	const d = dim === undefined ? 0 : prog(f, dim, 12);
	const P = PEEL[k];
	const x = g.x + g.margin / 2, y = g.base(line) - g.size * 0.32 + dy;
	const pop = 1 + 0.25 * Math.sin(clamp01((f - at) / 10) * Math.PI);
	return (
		<g opacity={v * (1 - 0.55 * d)} transform={`translate(${x},${y}) scale(${pop * s})`}>
			<circle r={15} fill={CARD} stroke={P.c} strokeWidth={3} />
			<T x={0} y={7} text={P.l} size={19} weight={800} color={P.c} anchor="middle" />
		</g>
	);
};

// ---------- the demand ticks column ----------
const linesOf = (text: string, w: number, size: number, hand = true, weight = 700) => {
	const L = wrap(text, w, size, hand, weight);
	const out: string[] = Array.from({length: L.lines}, () => '');
	L.words.forEach(wd => { out[wd.line] = out[wd.line] ? out[wd.line] + ' ' + wd.t : wd.t; });
	return out;
};
export {linesOf};
export const TickMark: React.FC<{x: number; y: number; s: number; half?: number; full?: number; color?: string}> = ({x, y, s, half, full, color = GREEN}) => {
	const f = useCurrentFrame();
	const a = half ?? full;
	if (a === undefined || f < a) return null;
	return (
		<g>
			<DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.42}`} at={a} dur={6} color={color} width={Math.max(4, s * 0.18)} />
			{full !== undefined ? <DrawPath d={`M${x - s * 0.12},${y + s * 0.42} L${x + s * 0.55},${y - s * 0.5}`} at={Math.max(full, a + 6)} dur={8} color={color} width={Math.max(4, s * 0.18)} /> : null}
		</g>
	);
};
export const Demands: React.FC<{at: number; labels?: (number | undefined)[]; half?: (number | undefined)[]; full?: (number | undefined)[]; x?: number; y?: number; w?: number; rowH?: number; size?: number; texts?: string[]; o?: number; pulse?: number; lit?: {row: number; from: number; to?: number}[]; title?: string}> = ({at, labels = [], half = [], full = [], x = 44, y = 470, w = 262, rowH = 112, size = 25, texts = [], o = 1, pulse, lit = [], title = 'Demands'}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const pz = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 30) * Math.PI));
	return (
		<g opacity={v}>
			<T x={x + 4} y={y - 14} text={title} size={28} hand weight={700} color={INK_SOFT} />
			{[0, 1, 2, 3].map(i => {
				const yy = y + i * rowH;
				const la = labels[i];
				const lo = la === undefined ? 0 : prog(f, la, 12);
				const g = lit.filter(l => l.row === i).reduce((a2, l) => Math.max(a2, vis(f, l.from, l.to, 10)), 0);
				const done = full[i] !== undefined && f >= (full[i] as number);
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={x - 6} y={yy - 6} width={w + 12} height={rowH - 14} rx={12} fill={HI} opacity={0.5 * g} /> : null}
						<rect x={x + 4 - pz * 3} y={yy + 4 - pz * 3} width={40 + pz * 6} height={40 + pz * 6} rx={8} fill={done ? '#e3f3e9' : CARD} stroke={done ? GREEN : INK_SOFT} strokeWidth={2.5 + pz * 2} />
						<TickMark x={x + 24} y={yy + 22} s={34} half={half[i]} full={full[i]} />
						{lo > 0.01 ? linesOf(texts[i] ?? '', w - 62, size).map((t, k) => <T key={k} x={x + 58} y={yy + 20 + k * size * 1.12} text={t} size={size} hand weight={700} color={done ? GREEN : INK} o={lo} />) : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the plan card ----------
export type PlanRow = {t: string; at: number; chip?: {t: string; at: number}; glow?: number};
export const planLayout = (w: number, rows: PlanRow[], verdict: string | undefined, size: number) => {
	const vl = verdict ? linesOf(verdict, w - 44, size * 1.04, true, 700) : [];
	let y = 58 + (verdict ? vl.length * size * 1.12 + 18 : 0);
	const rs = rows.map(r => {
		const tl = linesOf(r.t, w - 84, size, true, 700);
		const cl = r.chip ? linesOf(r.chip.t, w - 110, size * 0.8, false, 700) : [];
		const top = y;
		y += tl.length * size * 1.12 + (r.chip ? cl.length * size * 0.96 + 16 : 0) + 14;
		return {tl, cl, top};
	});
	return {vl, rs, h: y + 10};
};
export const PlanCard: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number; verdict?: {t: string; at: number}; rows: PlanRow[]; title?: string; size?: number; clock?: number; s?: number; label?: string; minH?: number}> = ({x, y, w, at, out, o = 1, verdict, rows, title = 'Plan', size = 24, clock, s = 1, label, minH = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const Lp = planLayout(w, rows, verdict?.t, size);
	const h = Math.max(minH, Lp.h);
	const cp = clock === undefined ? 0 : prog(f, clock, 46);
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			<rect x={x + 4} y={y + 7} width={w} height={h} rx={10} fill="rgba(60,45,20,0.07)" />
			<rect x={x} y={y} width={w} height={h} rx={10} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<line x1={x + 16} x2={x + w - 16} y1={y + 46} y2={y + 46} stroke="#e6a8a0" strokeWidth={2} />
			<T x={x + 20} y={y + 34} text={title} size={28} hand weight={700} color={INK_SOFT} />
			{verdict ? Lp.vl.map((t, k) => <T key={k} x={x + 22} y={y + 58 + size + k * size * 1.12} text={t} size={size * 1.04} hand weight={700} color={INK} o={prog(f, verdict.at + k * 8, 10)} />) : null}
			{verdict && f >= verdict.at ? <DrawPath d={`M${x + 12},${y + 64} L${x + 12},${y + 58 + Lp.vl.length * size * 1.12 + 8}`} at={verdict.at} dur={10} color={GREEN} width={5} /> : null}
			{rows.map((r, i) => {
				const ro = prog(f, r.at, 12);
				if (ro <= 0.01) return null;
				const R = Lp.rs[i];
				const ry = y + R.top + size;
				const gl = r.glow === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - r.glow) / 36) * Math.PI));
				const co = r.chip ? prog(f, r.chip.at, 10) : 0;
				const cw = r.chip ? Math.max(...R.cl.map(t => measure(t, size * 0.8, false, 700))) + 26 : 0;
				const cy = ry + (R.tl.length - 1) * size * 1.12 + 14;
				return (
					<g key={i} opacity={ro}>
						{gl > 0.01 ? <rect x={x + 8} y={ry - size * 1.0} width={w - 16} height={R.tl.length * size * 1.12 + 10} rx={10} fill={HI} opacity={0.5 * gl} /> : null}
						<circle cx={x + 34} cy={ry - size * 0.32} r={15} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
						<T x={x + 34} y={ry - size * 0.32 + 7} text={`${i + 1}`} size={18} weight={800} color={INK} anchor="middle" />
						{R.tl.map((t, k) => <T key={k} x={x + 62} y={ry + k * size * 1.12} text={t} size={size} hand weight={700} color={INK} />)}
						{co > 0.01 ? (
							<g opacity={co} transform={`translate(0,${(1 - co) * 10})`}>
								<rect x={x + 62} y={cy} width={cw} height={R.cl.length * size * 0.96 + 10} rx={12} fill={TEAL_CHIP} stroke={TEAL} strokeWidth={2.5} />
								{R.cl.map((t, k) => <T key={k} x={x + 75} y={cy + size * 0.8 + 2 + k * size * 0.96} text={t} size={size * 0.8} weight={700} color={TEAL} />)}
							</g>
						) : null}
					</g>
				);
			})}
			{cp > 0.001 && cp < 0.999 ? <DrawPath d={`M${x + w / 2},${y - 10} L${x + w + 10},${y - 10} L${x + w + 10},${y + h + 10} L${x - 10},${y + h + 10} L${x - 10},${y - 10} Z`} at={clock as number} dur={46} color={AMBER} width={4} /> : null}
			{label ? <T x={x + w} y={y + h + 26} text={label} size={18} weight={600} color={GREY_INK} anchor="end" /> : null}
		</g>
	);
};

// ---------- the PEEL rail ----------
export const PeelRail: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number; rows?: (number | undefined)[]; lit?: {row: number; from: number; to?: number}[]; rowH?: number; size?: number}> = ({x, y, w, at, out, o = 1, rows = [-100, -100, -100, -100], lit = [], rowH = 88, size = 32}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={52 + PEEL.length * rowH} rx={16} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<T x={x + 20} y={y + 38} text="Each paragraph: PEEL" size={27} hand weight={700} color={INK_SOFT} />
			{PEEL.map((p, i) => {
				const ra = rows[i];
				const ro = ra === undefined ? 0 : prog(f, ra, 12);
				if (ro <= 0.01) return null;
				const g = lit.filter(l => l.row === i).reduce((a2, l) => Math.max(a2, vis(f, l.from, l.to, 8)), 0);
				const yy = y + 52 + i * rowH;
				return (
					<g key={i} opacity={ro * (0.5 + 0.5 * Math.max(g, lit.length ? 0 : 1))}>
						{g > 0.01 ? <rect x={x + 8} y={yy + 2} width={w - 16} height={rowH - 8} rx={12} fill={p.c} opacity={0.12 * g} /> : null}
						<circle cx={x + 40} cy={yy + rowH / 2 - 2} r={22} fill={g > 0.5 ? p.c : CARD} stroke={p.c} strokeWidth={3} />
						<T x={x + 40} y={yy + rowH / 2 + 7} text={p.l} size={24} weight={800} color={g > 0.5 ? '#fffdf8' : p.c} anchor="middle" />
						<T x={x + 76} y={yy + rowH * 0.45} text={p.t} size={size} hand weight={700} color={p.c} />
						<T x={x + 76} y={yy + rowH * 0.8} text={p.sub} size={size * 0.62} weight={600} color={GREY_INK} />
					</g>
				);
			})}
		</g>
	);
};
export const railH = (rowH = 88) => 52 + PEEL.length * rowH;

// ---------- the band meter ----------
export const BANDS = [{lo: 5.5, hi: 7.2, t: '6 to 7', fill: '#e3f3e9'}, {lo: 3.5, hi: 5.5, t: '4 to 5', fill: '#f2f0e6'}, {lo: 1.5, hi: 3.5, t: '2 to 3', fill: '#f7ecdc'}, {lo: 0.5, hi: 1.5, t: '1', fill: '#f5e6e1'}];
export type BPlace = {v: number; at: number; text: string; color: string; side?: 'l' | 'r'; from?: [number, number]};
export const bandY = (y: number, h: number, v: number) => y + h * (1 - v / 7.2);
export const BandMeter: React.FC<{x: number; y: number; h: number; at: number; out?: number; o?: number; w?: number; place?: BPlace[]; lit?: {band: number; from: number; to?: number}[]; label?: string}> = ({x, y, h, at, out, o = 1, w = 74, place = [], lit = [], label = 'band'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 24));
	return (
		<g opacity={v}>
			<T x={x + w / 2} y={y - 18} text={label} size={28} hand weight={700} color={INK_SOFT} anchor="middle" />
			{BANDS.map((b, i) => {
				const y1 = bandY(y, h, b.hi), y2 = bandY(y, h, b.lo);
				const g = lit.filter(l => l.band === i).reduce((a2, l) => Math.max(a2, vis(f, l.from, l.to, 10)), 0);
				return (
					<g key={i} opacity={prog(f, at + i * 5, 10)}>
						<rect x={x} y={y1} width={w} height={(y2 - y1) * d} fill={b.fill} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
						{g > 0.01 ? <rect x={x - 4} y={y1 - 4} width={w + 8} height={y2 - y1 + 8} rx={6} fill="none" stroke={AMBER} strokeWidth={4} opacity={g} /> : null}
						<T x={x - 14} y={(y1 + y2) / 2 + 9} text={b.t} size={26} weight={800} color={INK} anchor="end" />
					</g>
				);
			})}
			{[0, 1, 2, 3, 4, 5, 6, 7].map(k => <line key={k} x1={x + w - 12} x2={x + w} y1={bandY(y, h, k)} y2={bandY(y, h, k)} stroke="rgba(60,45,20,0.45)" strokeWidth={2} opacity={prog(f, at + 20, 10)} />)}
			{place.map((p, i) => {
				const po = prog(f, p.at, 12);
				if (po <= 0.01) return null;
				const s = smooth(prog(f, p.at, 26));
				const ty = bandY(y, h, p.v);
				const side = p.side ?? 'r';
				const ax = side === 'r' ? x + w + 10 : x - 10;
				const tw = measure(p.text, 26, true, 700) + 30;
				const bx = side === 'r' ? ax + 16 : ax - 16 - tw;
				const yy = p.from ? lerp(p.from[1], ty, s) : lerp(ty - 120, ty, s);
				const xx = p.from ? lerp(p.from[0], bx, s) : bx;
				return (
					<g key={i} opacity={po}>
						<rect x={xx} y={yy - 22} width={tw} height={44} rx={22} fill={CARD} stroke={p.color} strokeWidth={3.5} />
						<T x={xx + tw / 2} y={yy + 9} text={p.text} size={26} hand weight={700} color={p.color} anchor="middle" />
						{s > 0.95 ? <path d={side === 'r' ? `M${ax},${ty} L${ax + 16},${ty - 10} L${ax + 16},${ty + 10} Z` : `M${ax},${ty} L${ax - 16},${ty - 10} L${ax - 16},${ty + 10} Z`} fill={p.color} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the exam page (hook) ----------
export const ExamPage: React.FC<{x: number; y: number; w: number; h: number; at: number; o?: number; badgeAt?: number}> = ({x, y, w, h, at, o = 1, badgeAt}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const bx = x + 34, by = y + h * 0.42, bw = w - 68, bh = h * 0.52;
	return (
		<g opacity={v}>
			<rect x={x + 5} y={y + 8} width={w} height={h} rx={8} fill="rgba(60,45,20,0.08)" />
			<rect x={x} y={y} width={w} height={h} rx={8} fill={CARD} stroke="rgba(60,45,20,0.28)" strokeWidth={2.5} />
			{[0, 1, 2, 3, 4].map(k => <rect key={k} x={x + 34} y={y + 40 + k * 34} width={(k === 4 ? 0.55 : 0.9) * (w - 68)} height={9} rx={4} fill="rgba(60,45,20,0.16)" opacity={prog(f, at + 6 + k * 4, 10)} />)}
			<rect x={bx} y={by} width={bw} height={bh} rx={6} fill="#fffefb" stroke="rgba(60,45,20,0.3)" strokeWidth={2} opacity={prog(f, at + 24, 12)} />
			{Array.from({length: 9}, (_, k) => <line key={k} x1={bx + 8} x2={bx + bw - 8} y1={by + 36 + k * (bh - 50) / 9} y2={by + 36 + k * (bh - 50) / 9} stroke="#cfdff0" strokeWidth={1.6} opacity={prog(f, at + 28, 12)} />)}
			{badgeAt !== undefined ? <T x={bx + bw - 6} y={by - 12} text="(7 marks)" size={26} weight={700} color={INK} anchor="end" o={prog(f, badgeAt, 10)} /> : null}
		</g>
	);
};
export const pageBox = (x: number, y: number, w: number, h: number) => ({x: x + 34, y: y + h * 0.42, w: w - 68, h: h * 0.52});

// ---------- a value chip lifting off the card ----------
export const LiftChip: React.FC<{from: [number, number]; to: [number, number]; text: string; at: number; dur?: number; color?: string; size?: number; out?: number}> = ({from, to, text, at, dur = 26, color = TEAL, size = 32, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 8);
	if (o <= 0.01) return null;
	const p = smooth(prog(f, at + 4, dur));
	const x = lerp(from[0], to[0], p), y = lerp(from[1], to[1], p) - Math.sin(p * Math.PI) * 60;
	const w = measure(text, size, false, 800) + size * 0.9, h = size * 1.5;
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={TEAL_CHIP} stroke={color} strokeWidth={3} />
			<T x={x} y={y + size * 0.36} text={text} size={size} weight={800} color={color} anchor="middle" />
		</g>
	);
};

// ---------- the bookend bracket ----------
export const VBrace: React.FC<{x: number; y1: number; y2: number; at: number; color?: string; d?: number}> = ({x, y1, y2, at, color = GREEN, d = 16}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={`M${x + d},${y1} L${x},${y1} L${x},${y2} L${x + d},${y2}`} at={at} dur={20} color={color} width={5} cap="butt" />;
};

// ---------- tiles and flags (hook) ----------
export const MiniFlag: React.FC<{x: number; y: number; at: number; color: string; s?: number}> = ({x, y, at, color, s = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 10));
	if (p <= 0.01) return null;
	return (
		<g transform={`translate(${x},${y}) scale(${s * (0.6 + 0.4 * p)})`} opacity={p}>
			<line x1={0} y1={16} x2={0} y2={-20} stroke={INK} strokeWidth={3} strokeLinecap="round" />
			<path d="M1,-20 L24,-12 L1,-4 Z" fill={color} />
		</g>
	);
};

// ---------- key notes ----------
export const Notes8: React.FC<{notes: string[]; aids: string[]; tag: string; size?: number; aidTop?: number}> = ({notes, aids, tag, size = 28, aidTop = 760}) => {
	for (const n of [...notes, ...aids, tag]) if (n.includes(EMDASH)) throw new Error('em dash in key notes');
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={58} cps={40} /></div>
			<Enter at={110} style={{position: 'absolute', left: 1120, top: 100}}>
				<div style={{fontFamily: FONT_HAND, fontSize: 34, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
			</Enter>
			<div style={{position: 'absolute', left: 120, top: 178, width: 1690}}>
				{notes.map((n, i) => (
					<Enter key={i} at={30 + i * 12} style={{display: 'flex', gap: 20, marginBottom: 12}}>
						<div style={{flex: 'none', width: 14, height: 14, marginTop: size * 0.34, borderRadius: 999, background: AMBER}} />
						<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 500, color: INK, lineHeight: 1.24}}>{n}</div>
					</Enter>
				))}
			</div>
			<Enter at={96} style={{position: 'absolute', left: 96, top: aidTop, width: 1730}}>
				<div style={{background: CARD, border: `4px solid ${TEAL}`, borderRadius: 22, padding: '8px 30px 12px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: TEAL, lineHeight: 1.08}}>{aids[0]}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 23, color: GREY_INK, margin: '4px 0 6px'}}>{tag}</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1.08}}>{aids[1]}</div>
				</div>
			</Enter>
		</>
	);
};
void GREY; void TERRA;
