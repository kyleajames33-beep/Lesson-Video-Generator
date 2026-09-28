// AlleleJobsDiagram — "which process does which job" on stone plinths.
//
// One plinth per process, side by side. Alleles are glossy balls (blue and
// rose for two existing alleles, amber for a brand-new one). On its beat each
// plinth acts out its job:
//   mutate    a spark hits one allele and it becomes a new (amber) allele
//   select    a new allele that helps survival becomes more common
//   shuffle   meiosis deals a parent's alleles into every gamete combination
//             (2ⁿ gametes for n genes, computed from the parent's genotype)
//   combine   two gametes fuse into one new genotype
//   flow      a migrant carries an existing allele in from another population
//   drift     chance removes some individuals; the frequency counter changes
//   insert    a new DNA sequence enters one cell, which grows into every cell
// Only `mutate` and `insert` ever make an amber ball, so the picture itself
// says which process adds genuinely new DNA. Verdict chips and captions come
// from the scene's own text.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, BLUE, Cell, GlossDefs, ROSE, clamp, ease, fadeAt, popAt, textWidth} from './shared';

export type JobAction = 'mutate' | 'select' | 'shuffle' | 'combine' | 'flow' | 'drift' | 'insert';
export type JobPanel = {
	title: string;
	action: JobAction;
	/** When the panel appears. */
	at: number;
	/** When the action plays (default at + 40). */
	actAt?: number;
	caption?: string[];
	verdict?: {text: string; amber?: boolean; at?: number};
	/** Parent genotype for shuffle/combine, e.g. "AaBb". */
	genotype?: string;
};
export type AlleleJobsProps = {panels: JobPanel[]; arrows?: boolean; footer?: {text: string; at: number; amber?: boolean}; delay?: number};

const ID = 'b12m6job';
const W = 760;
const H = 530;
const R = 17;
const NEW = 'A′';

const colorOf = (allele: string) => (allele === NEW ? 'new' : allele === allele.toUpperCase() ? 'dom' : 'rec');

const Allele = ({x, y, a, r = R, scale = 1, opacity = 1}: {x: number; y: number; a: string; r?: number; scale?: number; opacity?: number}) =>
	scale <= 0.01 || opacity <= 0.01 ? null : (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
			<ellipse cx={2} cy={r * 0.95} rx={r * 1.05} ry={r * 0.28} fill="rgba(40,36,30,0.22)" />
			<circle r={r} fill={`url(#${ID}-g-${colorOf(a)})`} stroke="rgba(0,0,0,0.28)" />
			<text y={r * 0.36} textAnchor="middle" fill={a === NEW ? '#5a3a06' : '#fff'} fontSize={r * 1.02} fontWeight={800}>{a}</text>
		</g>
	);

/** Two neat rows of ball positions on a plinth top (back row first), no overlaps. */
const slotsOn = (cx: number, cy: number, rx: number, n: number) => {
	const back = Math.ceil(n / 2);
	const front = n - back;
	const ry = rx * 0.34;
	const row = (count: number, y: number, span: number) =>
		Array.from({length: count}, (_, k) => ({x: cx + (count === 1 ? 0 : -span / 2 + (span * k) / (count - 1)), y}));
	return [...row(back, cy - ry * 0.32, Math.min(rx * 1.25, (back - 1) * 46)), ...row(front, cy + ry * 0.42, Math.min(rx * 1.1, (front - 1) * 48))];
};

/** Split "AaBb" into genes [["A","a"],["B","b"]]. */
const genesOf = (g: string) => {
	const out: string[][] = [];
	for (let i = 0; i + 1 < g.length; i += 2) out.push([g[i], g[i + 1]]);
	return out;
};
/** Every gamete combination: one allele from each gene (2ⁿ). */
const gametesOf = (g: string) => genesOf(g).reduce<string[]>((acc, pair) => acc.flatMap((p) => pair.map((a) => p + a)), ['']);

export const AlleleJobsDiagram = ({panels, arrows = false, footer, delay = 62}: AlleleJobsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = panels.length;
	const colW = W / n;
	const rx = Math.min(112, colW / 2 - 18);
	const PY = 262;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="What each process does to alleles" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{dom: BLUE, rec: ROSE, new: AMBER, cell: '#cfe5f5'}} />
			{panels.map((p, i) => {
				const cx = colW * (i + 0.5);
				const appear = fadeAt(frame, p.at, 14);
				if (appear <= 0) return null;
				const act = p.actAt ?? p.at + 40;
				const t = ease(frame, act, act + 40);
				const bob = (k: number) => idleBob(frame, k + i * 17, 1.4);
				const ry = rx * 0.34;
				let body: ReactNode = null;
				let note: {text: string; x: number; y: number; o: number} | null = null;

				if (p.action === 'mutate') {
					const alleles = ['A', 'a', 'A', 'a', 'A', 'a'];
					const slots = slotsOn(cx, PY, rx, alleles.length);
					const hit = 1;
					const zap = interpolate(frame, [act - 16, act], [0, 1], clamp);
					const pop = popAt(frame, fps, act);
					body = (
						<g>
							{slots.map((s, k) => {
								const isHit = k === hit && frame >= act;
								return <Allele key={k} x={s.x} y={s.y - R + bob(k)} a={isHit ? NEW : alleles[k]} scale={isHit ? 0.6 + 0.4 * Math.min(1.15, pop) : 1} />;
							})}
							{/* the spark: a painted bolt that strikes, then fades */}
							<g opacity={zap * (1 - fadeAt(frame, act + 6, 16))}>
								<path d={`M ${slots[hit].x + 26} ${slots[hit].y - 96} L ${slots[hit].x + 6} ${slots[hit].y - 58} L ${slots[hit].x + 18} ${slots[hit].y - 56} L ${slots[hit].x - 2} ${slots[hit].y - 24}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
							</g>
							{frame >= act && <circle cx={slots[hit].x} cy={slots[hit].y - R} r={R + 7 + idlePulse(frame) * 3} fill="none" stroke={AMBER} strokeWidth={2.5} opacity={fadeAt(frame, act + 4)} />}
						</g>
					);
					note = {text: 'new allele', x: slots[hit].x, y: slots[hit].y - R * 2 - 16, o: fadeAt(frame, act + 10)};
				} else if (p.action === 'select') {
					const start = ['A', NEW, 'a', 'A', 'a', 'A', 'a', 'A'];
					const order = [2, 5, 0, 6]; // slots that become the new allele, one by one
					const slots = slotsOn(cx, PY, rx, start.length);
					body = (
						<g>
							{slots.map((s, k) => {
								const turn = order.indexOf(k);
								const tt = turn < 0 ? 0 : fadeAt(frame, act + turn * 22, 10);
								const a = tt > 0.5 ? NEW : start[k];
								return <Allele key={k} x={s.x} y={s.y - R + bob(k)} a={a} scale={turn >= 0 ? 1 - Math.sin(tt * Math.PI) * 0.35 : 1} />;
							})}
						</g>
					);
					const count = start.filter((a) => a === NEW).length + order.filter((_, j) => frame >= act + j * 22 + 5).length;
					note = {text: `${count} of ${start.length} carry it`, x: cx, y: PY - 96, o: fadeAt(frame, act)};
				} else if (p.action === 'shuffle') {
					const g = p.genotype ?? 'AaBb';
					const parent = genesOf(g).flat();
					const gams = gametesOf(g);
					const pw = parent.length * (R * 2 + 4);
					body = (
						<g>
							{parent.map((a, k) => (
								<Allele key={k} x={cx - pw / 2 + R + 2 + k * (R * 2 + 4)} y={PY - R + bob(k)} a={a} />
							))}
							{gams.map((gm, k) => {
								const ang = Math.PI * (1.08 + (0.84 * k) / Math.max(1, gams.length - 1));
								const gx = cx + Math.cos(ang) * (rx - 8);
								const gy = PY - 88 + Math.sin(ang) * 22 + (k === 0 || k === gams.length - 1 ? 0 : -30);
								const pk = popAt(frame, fps, act + k * 10);
								const gr = 12 + gm.length * 9;
								return (
									<g key={k} opacity={Math.min(1, pk)} transform={`translate(${gx},${gy + bob(k + 5)}) scale(${Math.min(1.05, pk)})`}>
										<circle r={gr} fill={`url(#${ID}-g-cell)`} stroke="rgba(60,90,120,0.45)" strokeWidth={1.5} />
										{gm.split('').map((a, j) => (
											<Allele key={j} x={(j - (gm.length - 1) / 2) * 21} y={0} a={a} r={10} />
										))}
									</g>
								);
							})}
						</g>
					);
					note = {text: `${gams.length} different gametes`, x: cx, y: PY - 170, o: fadeAt(frame, act + gams.length * 10 + 10)};
				} else if (p.action === 'combine') {
					const g = p.genotype ?? 'AaBb';
					const genes = genesOf(g);
					const egg = genes.map((pr) => pr[0]).join('');
					const sperm = genes.map((pr) => pr[1]).join('');
					const gr = 16 + egg.length * 9;
					const sep = interpolate(t, [0, 1], [rx * 0.62, 0], clamp);
					const merged = t > 0.85;
					body = (
						<g>
							{!merged &&
								[egg, sperm].map((gm, k) => (
									<g key={k} transform={`translate(${cx + (k === 0 ? -sep : sep)},${PY - 44 + bob(k)})`}>
										<circle r={gr} fill={`url(#${ID}-g-cell)`} stroke="rgba(60,90,120,0.45)" strokeWidth={1.5} />
										{gm.split('').map((a, j) => (
											<Allele key={j} x={(j - (gm.length - 1) / 2) * 23} y={0} a={a} r={11} />
										))}
									</g>
								))}
							{merged && (
								<g transform={`translate(${cx},${PY - 50 + bob(3)}) scale(${Math.min(1.06, popAt(frame, fps, act + 34))})`}>
									<circle r={gr + 20} fill={`url(#${ID}-g-cell)`} stroke="rgba(60,90,120,0.5)" strokeWidth={2} />
									{genes.map((pr, j) =>
										pr.map((a, m) => <Allele key={`${j}${m}`} x={(j - (genes.length - 1) / 2) * 30} y={(m - 0.5) * 24} a={a} r={11} />),
									)}
								</g>
							)}
						</g>
					);
					note = {text: 'one new genotype', x: cx, y: PY - 50 - gr - 30, o: fadeAt(frame, act + 40)};
				} else if (p.action === 'flow') {
					const pop = ['A', 'A', 'A', 'A', 'A', 'a'];
					const slots = slotsOn(cx, PY, rx, pop.length + 1);
					const dest = slots[slots.length - 1];
					const sx = cx + colW / 2 - 6;
					const sy = PY - 120;
					const mx = sx + (dest.x - sx) * t;
					const my = sy + (dest.y - R - sy) * t - Math.sin(t * Math.PI) * 30;
					body = (
						<g>
							{slots.slice(0, pop.length).map((s, k) => (
								<Allele key={k} x={s.x} y={s.y - R + bob(k)} a={pop[k]} />
							))}
							<path d={`M ${sx} ${sy} Q ${(sx + dest.x) / 2 + 10} ${sy - 30} ${dest.x + 14} ${dest.y - R * 2 - 6}`} fill="none" stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="5 6" opacity={fadeAt(frame, p.at + 10) * (1 - t * 0.6)} />
							<Allele x={mx} y={my + (t >= 1 ? bob(9) : 0)} a="a" />
						</g>
					);
					note = {text: 'migrant arrives', x: sx - 34, y: sy - 24, o: fadeAt(frame, p.at + 12) * (1 - fadeAt(frame, act + 40))};
				} else if (p.action === 'drift') {
					const pop = ['A', 'a', 'A', 'a', 'A', 'a', 'A', 'a'];
					const lost = [1, 5, 7]; // chance deaths (fixed pattern, deterministic)
					const slots = slotsOn(cx, PY, rx, pop.length);
					const gone = (k: number) => (lost.includes(k) ? fadeAt(frame, act + lost.indexOf(k) * 12, 14) : 0);
					const alive = pop.filter((_, k) => gone(k) < 0.5);
					const freqA = Math.round((alive.filter((a) => a === 'A').length / alive.length) * 100);
					body = (
						<g>
							{slots.map((s, k) => (
								<Allele key={k} x={s.x} y={s.y - R + bob(k) - gone(k) * 18} a={pop[k]} opacity={1 - gone(k)} />
							))}
						</g>
					);
					note = {text: `A: ${freqA}%`, x: cx, y: PY - 84, o: 1};
				} else if (p.action === 'insert') {
					const k = popAt(frame, fps, act + 44);
					const cells = [-1, 0, 1].map((d) => ({x: cx + d * 50, y: PY - 34 - (d === 0 ? 30 : 0)}));
					const gx = cx + 70 - 70 * t;
					const gy = PY - 150 + 110 * t;
					body = (
						<g>
							{t < 1 && <Allele x={gx} y={gy} a={NEW} r={12} />}
							{k <= 0.02 ? (
								<Cell id={`${ID}c${i}`} x={cx} y={PY - 42 + bob(1)} r={34} color="#cfe5f5" nucleusColor="#9cc6e6">
									{t >= 1 && <circle cx={3} cy={2} r={8} fill={`url(#${ID}-g-new)`} stroke="rgba(0,0,0,0.3)" />}
								</Cell>
							) : (
								cells.map((c, j) => (
									<Cell key={j} id={`${ID}c${i}${j}`} x={c.x} y={c.y + bob(j + 2)} r={26} scale={Math.min(1, k)} color="#cfe5f5" nucleusColor="#9cc6e6">
										<circle cx={2} cy={2} r={6.5} fill={`url(#${ID}-g-new)`} stroke="rgba(0,0,0,0.3)" />
									</Cell>
								))
							)}
						</g>
					);
					note = {text: 'new DNA added', x: cx + 64, y: PY - 166, o: fadeAt(frame, p.at + 10) * (1 - fadeAt(frame, act + 30))};
				}

				const capY = PY + ry + 58;
				const vAt = p.verdict?.at ?? act + 50;
				return (
					<g key={i} opacity={appear}>
						<text x={cx} y={40} textAnchor="middle" fill={theme.accent} fontSize={23} fontWeight={800}>{p.title}</text>
						<DioramaPlinth id={`${ID}${i}`} cx={cx} cy={PY} rx={rx} />
						{body}
						{note && note.o > 0 && (
							<text x={note.x} y={note.y} textAnchor="middle" fill={note.text === 'new allele' || note.text === 'new DNA added' ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800} opacity={note.o}>{note.text}</text>
						)}
						{(p.caption ?? []).map((c, j) => (
							<text key={j} x={cx} y={capY + j * 22} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={700} opacity={fadeAt(frame, act + 24)}>{c}</text>
						))}
						{p.verdict && (() => {
							const vw = textWidth(p.verdict.text, 17) + 28;
							const vy = capY + (p.caption?.length ?? 0) * 22 + 22;
							const pk = popAt(frame, fps, vAt);
							const am = p.verdict.amber;
							return (
								<g transform={`translate(${cx},${vy}) scale(${Math.min(1, pk)})`} opacity={Math.min(1, pk * 1.4)}>
									<rect x={-vw / 2} y={-16} width={vw} height={32} rx={16} fill={am ? '#fff6e6' : '#ffffff'} stroke={am ? AMBER : TOK.inkMute} strokeWidth={am ? 2.5 + idlePulse(frame) : 2} />
									<text y={6} textAnchor="middle" fill={am ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800}>{p.verdict.text}</text>
								</g>
							);
						})()}
						{arrows && i < n - 1 && (
							<text x={colW * (i + 1)} y={PY + 6} textAnchor="middle" fill={TOK.inkMute} fontSize={34} fontWeight={800} opacity={fadeAt(frame, panels[i + 1].at)}>→</text>
						)}
					</g>
				);
			})}
			{footer && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
