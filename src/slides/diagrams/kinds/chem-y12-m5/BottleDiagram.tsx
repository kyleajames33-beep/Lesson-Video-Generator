// BottleDiagram (kind: chem12m5Bottle) — dynamic equilibrium needs a closed
// system: a sealed vs an opened bottle of sparkling water.
//
// Two identical bottles stand on plinths. In each, CO₂ molecules (linear
// O=C=O) swim in the liquid and in the gas above it. While a bottle is sealed,
// one molecule dissolves every time another escapes into the gas, so the
// "dissolved" counter never moves. At the opening beat the right bottle loses
// its cap: gas molecules leave through the neck and are gone, nothing comes
// back down, so the dissolved counter falls: the drink goes flat.
//
// Beat plan (frames after `delay`): condition 1 chip `reversibleAt`, condition
// 2 chip `closedAt`, the right bottle opens at `openAt`, verdict at `flatAt`.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Pill, bounce, clamp, ease, hash01, ramp} from './shared';

export type BottleProps = {
	delay?: number;
	reversibleAt?: number;
	closedAt?: number;
	openAt?: number;
	flatAt?: number;
};

const ID = 'c12m5bt';
const W = 760;
const XS = [214, 546];
const BASE = 404; // bottle base / plinth top
const BW = 136; // body width
const TOP_BODY = 196; // where the shoulder starts
const NECK_W = 46;
const NECK_TOP = 116;
const LIQ = 268; // liquid surface
const N_LIQ = 6, N_GAS = 3;
const SWAP_EVERY = 46; // one dissolves as one escapes, this often
const MOVE = 26; // frames a molecule takes to cross the surface

type Region = 'gas' | 'liq' | 'out';

const CO2 = ({x, y, a, s = 1, opacity = 1}: {x: number; y: number; a: number; s?: number; opacity?: number}) => {
	const dx = Math.cos(a) * 11 * s, dy = Math.sin(a) * 11 * s;
	const atoms = [{el: 'O', x: x - dx, y: y - dy}, {el: 'C', x, y}, {el: 'O', x: x + dx, y: y + dy}].sort((p, q) => p.y - q.y);
	return (
		<g opacity={opacity}>
			{atoms.map((p, i) => (
				<Ball key={i} id={ID} el={p.el} x={p.x} y={p.y} r={(p.el === 'C' ? 8 : 7.5) * s} />
			))}
		</g>
	);
};

const bottlePath = (cx: number) => {
	const x0 = cx - BW / 2, x1 = cx + BW / 2, n0 = cx - NECK_W / 2, n1 = cx + NECK_W / 2;
	return `M ${n0} ${NECK_TOP} L ${n0} ${TOP_BODY - 44} C ${n0} ${TOP_BODY - 14} ${x0} ${TOP_BODY - 22} ${x0} ${TOP_BODY + 10} L ${x0} ${BASE - 16} Q ${x0} ${BASE} ${x0 + 16} ${BASE} L ${x1 - 16} ${BASE} Q ${x1} ${BASE} ${x1} ${BASE - 16} L ${x1} ${TOP_BODY + 10} C ${x1} ${TOP_BODY - 22} ${n1} ${TOP_BODY - 14} ${n1} ${TOP_BODY - 44} L ${n1} ${NECK_TOP}`;
};

export const BottleDiagram = ({delay = 62, reversibleAt = 105, closedAt = 212, openAt = 669, flatAt = 850}: BottleProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	// Swim boxes (bottle-relative x offsets, absolute y).
	const liqBox = {x0: -BW / 2 + 18, x1: BW / 2 - 18, y0: LIQ + 18, y1: BASE - 18};
	const gasBox = {x0: -BW / 2 + 24, x1: BW / 2 - 24, y0: TOP_BODY - 6, y1: LIQ - 16};
	const swim = (i: number, box: typeof liqBox, t: number) => ({
		x: bounce(box.x0 + hash01(i * 3 + 1) * (box.x1 - box.x0), (0.18 + hash01(i * 5 + 2) * 0.25) * (hash01(i + 9) > 0.5 ? 1 : -1), t, box.x0, box.x1),
		y: bounce(box.y0 + hash01(i * 7 + 3) * (box.y1 - box.y0), (0.12 + hash01(i * 11 + 4) * 0.18) * (hash01(i + 19) > 0.5 ? 1 : -1), t, box.y0, box.y1),
	});

	// Per-bottle schedule of region changes. Sealed: paired swaps (gas→liq and
	// liq→gas together). Opened: after `openAt`, gas molecules leave through the
	// neck, liquid molecules keep escaping into the gas, none dissolve.
	const schedule = (opened: boolean) => {
		const M = N_LIQ + N_GAS;
		const region: Region[] = Array.from({length: M}, (_, i) => (i < N_LIQ ? 'liq' : 'gas'));
		const moves: {i: number; from: Region; to: Region; at: number}[] = [];
		const until = Math.max(0, frame);
		for (let t = 30; t <= until; t += SWAP_EVERY) {
			if (opened && t >= openAt) {
				// Everything in the gas leaves (one per beat), and one dissolved molecule escapes into the gas.
				const g = region.findIndex((r) => r === 'gas');
				if (g >= 0) {
					moves.push({i: g, from: 'gas', to: 'out', at: t});
					region[g] = 'out';
				}
				const l = region.findIndex((r) => r === 'liq');
				if (l >= 0) {
					moves.push({i: l, from: 'liq', to: 'gas', at: t + SWAP_EVERY / 2});
					region[l] = 'gas';
				}
				continue;
			}
			const k = Math.round((t - 30) / SWAP_EVERY);
			const gasIdx = region.map((r, i) => (r === 'gas' ? i : -1)).filter((i) => i >= 0);
			const liqIdx = region.map((r, i) => (r === 'liq' ? i : -1)).filter((i) => i >= 0);
			const g = gasIdx[k % gasIdx.length];
			const l = liqIdx[(k * 3) % liqIdx.length];
			moves.push({i: g, from: 'gas', to: 'liq', at: t}, {i: l, from: 'liq', to: 'gas', at: t});
			region[g] = 'liq';
			region[l] = 'gas';
		}
		return {moves, M};
	};

	const drawBottle = (b: 0 | 1) => {
		const cx = XS[b];
		const opened = b === 1;
		const {moves, M} = schedule(opened);
		const mols = Array.from({length: M}, (_, i) => {
			let reg: Region = i < N_LIQ ? 'liq' : 'gas';
			let tr: {from: Region; to: Region; u: number} | null = null;
			for (const m of moves) {
				if (m.i !== i) continue;
				if (frame >= m.at + MOVE) reg = m.to;
				else if (frame >= m.at) tr = {from: m.from, to: m.to, u: ease((frame - m.at) / MOVE)};
			}
			const seed = i + b * 50;
			const pos = (r: Region) => {
				if (r === 'out') return {x: cx + 120, y: 40};
				const p = swim(seed, r === 'liq' ? liqBox : gasBox, frame);
				return {x: cx + p.x, y: p.y};
			};
			let x: number, y: number, o = 1;
			if (tr) {
				const a = pos(tr.from);
				if (tr.to === 'out') {
					// up the neck and away into the room
					const neck = {x: cx, y: NECK_TOP + 10};
					const u = tr.u;
					if (u < 0.5) {
						x = a.x + (neck.x - a.x) * (u / 0.5);
						y = a.y + (neck.y - a.y) * (u / 0.5);
					} else {
						const v = (u - 0.5) / 0.5;
						x = neck.x + v * 70;
						y = neck.y - v * 90;
						o = 1 - v;
					}
				} else {
					const c = pos(tr.to);
					x = a.x + (c.x - a.x) * tr.u;
					y = a.y + (c.y - a.y) * tr.u;
				}
			} else if (reg === 'out') {
				return null;
			} else {
				({x, y} = pos(reg));
			}
			return <CO2 key={i} x={x} y={y} a={frame / 40 + i * 1.3} s={0.9} opacity={o} />;
		});
		const dissolved = (() => {
			let n = N_LIQ;
			for (const m of moves) {
				if (frame < m.at + MOVE / 2) continue;
				if (m.from === 'liq') n--;
				if (m.to === 'liq') n++;
			}
			return n;
		})();
		const capOff = opened ? ease(interpolate(frame, [openAt - 8, openAt + 18], [0, 1], clamp)) : 0;
		return (
			<g key={b}>
				<DioramaPlinth id={ID} cx={cx} cy={BASE + 4} rx={124}>
					{/* liquid */}
					<path d={`M ${cx - BW / 2 + 3} ${LIQ} L ${cx - BW / 2 + 3} ${BASE - 16} Q ${cx - BW / 2 + 3} ${BASE - 3} ${cx - BW / 2 + 16} ${BASE - 3} L ${cx + BW / 2 - 16} ${BASE - 3} Q ${cx + BW / 2 - 3} ${BASE - 3} ${cx + BW / 2 - 3} ${BASE - 16} L ${cx + BW / 2 - 3} ${LIQ} Z`} fill="rgba(150,205,235,0.35)" />
					<ellipse cx={cx} cy={LIQ} rx={BW / 2 - 3} ry={5} fill="rgba(150,205,235,0.55)" />
					{mols}
					<path d={bottlePath(cx)} fill="rgba(215,235,248,0.18)" stroke="rgba(70,90,110,0.55)" strokeWidth={3} strokeLinejoin="round" />
					<rect x={cx - BW / 2 + 10} y={TOP_BODY + 20} width={7} height={BASE - TOP_BODY - 44} rx={3.5} fill="#ffffff" opacity={0.45} />
					{/* cap */}
					<g transform={`translate(${capOff * 92},${-capOff * 34}) rotate(${capOff * 70} ${cx} ${NECK_TOP})`} opacity={1 - ramp(frame, openAt + 30, 20)}>
						<rect x={cx - NECK_W / 2 - 5} y={NECK_TOP - 18} width={NECK_W + 10} height={20} rx={4} fill={theme.accent} />
					</g>
				</DioramaPlinth>
				<text x={cx} y={BASE + 52} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>
					dissolved CO₂ × {dissolved}
				</text>
			</g>
		);
	};

	const sealedTag = ramp(frame, 20, 14);
	const openTag = ramp(frame, openAt, 14);
	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="A sealed bottle keeps its dissolved CO₂ constant because CO₂ dissolves as fast as it escapes; the opened bottle loses CO₂ and goes flat" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['C', 'O']} />

			{/* The two conditions */}
			<g opacity={ramp(frame, reversibleAt, 14)}>
				<Pill x={206} y={26} text="① reversible (⇌)" color={theme.accent} size={18} />
			</g>
			<g opacity={ramp(frame, closedAt, 14)}>
				<Pill x={514} y={26} text="② closed system" color={theme.accent} size={18} />
			</g>
			<text x={W / 2} y={70} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800} opacity={ramp(frame, 0, 14)}>
				CO₂(g) ⇌ CO₂(aq)
			</text>

			{drawBottle(0)}
			{drawBottle(1)}

			{/* Surface labels */}
			<g opacity={sealedTag}>
				<text x={XS[0] + BW / 2 + 12} y={LIQ - 4} fill={theme.accent} fontSize={15} fontWeight={800}>dissolves ↓</text>
				<text x={XS[0] + BW / 2 + 12} y={LIQ + 16} fill={theme.accent} fontSize={15} fontWeight={800}>escapes ↑</text>
				<text x={XS[0] + BW / 2 + 12} y={LIQ + 36} fill={TOK.inkDim} fontSize={15} fontWeight={700}>same rate</text>
			</g>
			<g opacity={openTag}>
				<text x={XS[1] + BW / 2 + 12} y={LIQ + 6} fill={TOK.amberInk} fontSize={15} fontWeight={800}>escapes ↑</text>
				<text x={XS[1] + BW / 2 + 12} y={LIQ + 26} fill={TOK.amberInk} fontSize={15} fontWeight={800}>only</text>
			</g>

			<text x={XS[0]} y={BASE + 78} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>sealed: closed ✓</text>
			<text x={XS[1]} y={BASE + 78} textAnchor="middle" fill={frame >= openAt ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800}>
				{frame >= openAt ? 'opened: open system ✗' : 'sealed: closed ✓'}
			</text>

			<g opacity={ramp(frame, flatAt, 16)}>
				<Pill x={XS[1]} y={BASE + 110} text="no equilibrium: goes flat" color={TOK.amber} ink={TOK.amberInk} size={16} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<Pill x={XS[0]} y={BASE + 110} text="equilibrium: fizz holds" color={theme.accent} size={16} />
			</g>
		</svg>
	);
};
