// S01 scenes 5 to 8: content words and givens, the constraint, then the three-point answer built in collision theory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER_INK, AnswerBox, CARD, Chip, GREY_INK, INK, Overlay, PenArrow, RoutineStrip, T, TEAL, ZONE, answerGeom, clamp01, lerp, prog, smooth, vis, wrap} from './kit';
import {BOX, Keywords, ParkedBadge, RateBars, ROW_TEXT, doneRows, sc} from './common';
import {IronCardDone} from './s1';

const SX = ZONE.side.x, SW = ZONE.side.w;
const ALL4 = [-100, -100, -100, -100];

// ---------- 5. Content words and givens ----------
const K5 = cues(sc('content-words'), {content: 'content words', iron: 'the iron three nitrate', deeper: 'deeper red', tells: 'what it tells you', ions: 'iron three plus ions', stays: 'stays the same', often: 'how often'});
export const SceneContent: React.FC = () => {
	const f = useCurrentFrame();
	const qy = lerp(BOX.y + 8, BOX.y + 214, smooth(prog(f, K5.stays - 10, 18)));
	const g = answerGeom(BOX, []);
	return (
		<Overlay>
			<RoutineStrip rows={[-100, -100, K5.content]} />
			<IronCardDone stage="content" at={{iron: K5.iron + 4, deeper: K5.deeper, fe: K5.ions + 10, temp: K5.stays}} />
			<AnswerBox spec={BOX} at={-100} counter={{total: 3, label: true}} slots={{at: -100, n: 3}} />
			<ParkedBadge />
			<g transform={`translate(0,${qy - (BOX.y + 8)})`}><Chip x={SX} y={BOX.y + 8} text="what does it tell me?" at={K5.tells} size={30} color={INK} /></g>
			<Chip x={SX} y={BOX.y + 96} text="iron(III) nitrate → more Fe^{3+}" at={K5.ions} size={32} color={TEAL} o={1 - 0.6 * prog(f, K5.stays, 12)} />
			<Chip x={SX} y={BOX.y + 302} text="temperature same → same collision energy" at={K5.stays + 24} size={30} color={TEAL} maxW={SW - 40} />
			<PenArrow a={[SX - 8, BOX.y + 128]} b={[g.tx + g.tw - 30, g.ruleY(0) - 10]} at={K5.often} color={TEAL} bow={-24} />
		</Overlay>
	);
};

// ---------- 6. The constraint ----------
const K6 = cues(sc('constraint'), {constraint: 'the constraint', here: 'in terms of collision theory', interms: 'In terms of means', collisions: 'about collisions', withref: 'With reference to', using: 'Using the information'});
const CON_ROWS = ['in terms of X: X carries the explanation', 'with reference to X: name X and use it', 'using the information: take details from the stimulus, say what they show'];
export const ConstraintCard: React.FC<{at: number; rows: number[]; lit: [number, number][]; x?: number; y?: number; w?: number; out?: number}> = ({at, rows, lit, x = SX, y = BOX.y, w = SW, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const size = 28, lh = size * 1.22;
	let cy = y + 62;
	return (
		<g opacity={o} transform={`translate(${(1 - prog(f, at, 16)) * 60},0)`}>
			<rect x={x} y={y} width={w} height={64 + CON_ROWS.reduce((a, r) => a + wrap(r, w - 50, size, true, 700).lines * lh + 20, 0)} rx={18} fill={CARD} stroke={TEAL} strokeWidth={3} />
			<T x={x + 22} y={y + 42} text="constraint phrases" size={30} color={TEAL} hand weight={700} />
			{CON_ROWS.map((r, i) => {
				const L = wrap(r, w - 50, size, true, 700);
				const lines: string[] = Array.from({length: L.lines}, () => '');
				L.words.forEach(wd => { lines[wd.line] = lines[wd.line] ? lines[wd.line] + ' ' + wd.t : wd.t; });
				const top = cy;
				cy += L.lines * lh + 20;
				const ro = prog(f, rows[i], 12);
				const gl = vis(f, lit[i][0], lit[i][1], 10);
				return (
					<g key={i} opacity={ro}>
						{gl > 0.01 ? <rect x={x + 10} y={top - 4} width={w - 20} height={L.lines * lh + 14} rx={10} fill="#f6d77a" opacity={0.5 * gl} /> : null}
						{lines.map((t, k) => <T key={k} x={x + 24} y={top + size + k * lh} text={t} size={size} hand weight={700} color={INK} />)}
					</g>
				);
			})}
		</g>
	);
};
export const SceneConstraint: React.FC = () => (
	<Overlay>
		<RoutineStrip rows={[-100, -100, -100, K6.constraint]} />
		<IronCardDone stage="constraint" at={{constraint: K6.here}} />
		<AnswerBox spec={BOX} at={-100} counter={{total: 3, label: true}} slots={{at: -100, n: 3}} />
		<ParkedBadge />
		<Keywords at={K6.collisions} drop />
		<ConstraintCard at={K6.interms} rows={[K6.interms, K6.withref, K6.using]} lit={[[K6.interms, K6.withref], [K6.withref, K6.using], [K6.using, 1e9]]} />
	</Overlay>
);

// ---------- 7. Build point 1 ----------
const K7 = cues(sc('build-1'), {build: 'build the answer', bio: 'If you take Biology', adding: 'Adding iron three nitrate', increases: 'rate increases', often: 'more often', forward: 'the forward rate', tick: 'can tick'});
/** Collision inset (C3 particle style): before, one meeting; after, three in the same time, each with a spark. */
const FE = '#e3bf45', FE_INK = '#8a6a0c', SCNC = '#9097a0';
const Inset: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const W = 220, H = 130;
	const panel = (px: number, nFe: number, meets: number, label: string) => {
		const t = (f - at) % 90;
		return (
			<g>
				<rect x={px} y={y} width={W} height={H} rx={16} fill="#fbf8f1" stroke="rgba(60,45,20,0.3)" strokeWidth={2.5} />
				<T x={px + W / 2} y={y + H + 30} text={label} size={28} hand weight={700} anchor="middle" color={GREY_INK} />
				{Array.from({length: nFe}, (_, i) => {
					const a = i * 2.1 + f * 0.04;
					return <circle key={'fe' + i} cx={px + 40 + ((i * 53) % (W - 80)) + Math.sin(a) * 10} cy={y + 40 + ((i * 37) % (H - 80)) + Math.cos(a) * 10} r={12} fill={FE} stroke={FE_INK} strokeWidth={2} />;
				})}
				{[0, 1, 2].map(i => {
					const a = i * 1.7 + f * 0.035;
					return <circle key={'s' + i} cx={px + 60 + i * 55 + Math.cos(a) * 12} cy={y + 98 - i * 22 + Math.sin(a) * 8} r={10} fill={SCNC} stroke="#5b626b" strokeWidth={2} />;
				})}
				{Array.from({length: meets}, (_, i) => {
					const s0 = 10 + i * (70 / meets);
					const p = clamp01((t - s0) / 14);
					if (p <= 0 || p >= 1) return null;
					const sx = px + 50 + i * 60, sy = y + 55 + (i % 2) * 30;
					return <g key={'m' + i} opacity={Math.sin(p * Math.PI)}>{[0, 1, 2, 3, 4, 5].map(k => <line key={k} x1={sx} y1={sy} x2={sx + Math.cos(k * 1.05) * 22 * p} y2={sy + Math.sin(k * 1.05) * 22 * p} stroke="#e0962a" strokeWidth={4} strokeLinecap="round" />)}</g>;
				})}
			</g>
		);
	};
	return <g opacity={o}>{panel(x, 1, 1, 'before')}{panel(x + W + 30, 3, 3, 'after')}<T x={x} y={y - 16} text="same time, more meetings" size={26} hand weight={700} color={AMBER_INK} /></g>;
};
export const SceneBuild1: React.FC = () => {
	const f = useCurrentFrame();
	const fwd = 100 + 90 * smooth(prog(f, K7.forward + 8, 20));
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} />
			<IronCardDone stage="constraint" />
			<AnswerBox spec={BOX} at={-100} counter={{total: 3, label: true}} slots={{at: -100, out: K7.adding, n: 3}} rows={[{text: ROW_TEXT[0], at: K7.adding, dur: K7.increases + 20 - K7.adding, tick: K7.tick}]} />
			<ParkedBadge />
			<Keywords at={-100} ticks={[K7.tick + 6, K7.tick + 12]} />
			<Inset x={SX + 10} y={BOX.y + 36} at={K7.often - 4} />
			<RateBars x={SX + 120} base={BOX.y + 462} fwd={fwd} rev={100} at={K7.forward - 10} />
		</Overlay>
	);
};

// ---------- 8. Build points 2 and 3 ----------
const K8 = cues(sc('build-2'), {link: 'the link', reverse: 'The reverse reaction', unchanged: "hasn't changed", fwdNow: 'Forward is now faster', split: 'than they split', two: 'point two', build: 'As red ions build up', equal: 'equal again', why: "That's why", deeper: 'deeper red', linked: 'Three linked points'});
export const SceneBuild2: React.FC = () => {
	const f = useCurrentFrame();
	const meet = smooth(prog(f, K8.build + 20, K8.equal - K8.build));
	const fwd = lerp(190, 150, meet), rev = lerp(100, 150, meet);
	const g = answerGeom(BOX, [{text: ROW_TEXT[0], at: 0}, {text: ROW_TEXT[1], at: 0}]);
	const l1 = g.base(g.rows[0].first), l2 = g.base(g.rows[1].first);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} />
			<IronCardDone stage="constraint" glow={K8.deeper} />
			<AnswerBox spec={BOX} at={-100} counter={{total: 3, label: true}}
				rows={[...doneRows(1), {text: ROW_TEXT[1], at: K8.reverse, dur: K8.split + 20 - K8.reverse, tick: K8.two}, {text: ROW_TEXT[2], at: K8.build, dur: K8.deeper + 10 - K8.build, tick: K8.why}]}
				ann={[0, 1, 2].map(r => ({kind: 'under' as const, row: r, phrase: 'so', occ: 'all' as const, at: K8.linked + r * 8}))} />
			<ParkedBadge />
			<Keywords at={-100} ticks={[-100, -100, K8.why + 8]} />
			<Chip x={SX} y={BOX.y + 8} text="more Fe^{3+}" at={0} size={32} color={TEAL} />
			<PenArrow a={[SX - 6, BOX.y + 40]} b={[g.tx + g.tw - 10, l1 - 14]} at={K8.fwdNow} color={TEAL} bow={10} />
			<PenArrow a={[SX - 6, BOX.y + 48]} b={[g.tx + g.tw - 10, l2 - 14]} at={K8.fwdNow + 10} color={TEAL} bow={-16} />
			<RateBars x={SX + 120} base={BOX.y + 462} fwd={fwd} rev={rev} at={-100} ring={K8.unchanged} />
			<Chip x={SX + 40} y={BOX.y + 110} text="equal again, both higher" at={K8.equal + 10} size={28} color={TEAL} />
		</Overlay>
	);
};
