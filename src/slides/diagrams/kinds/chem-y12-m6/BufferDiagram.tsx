// BufferDiagram — drops of strong acid/base land in beakers on stone plinths
// and get caught (or don't), while a pH meter on each beaker reads the result.
//
// A buffer beaker holds weak acid HA and conjugate base A⁻ balls (1 ball =
// `mmolPerBall` mmol in `volumeL` litres). Each added H⁺ drop is caught by an
// A⁻ (which becomes HA); each OH⁻ drop is caught by an HA (which becomes A⁻).
// With no catcher left, a drop stays free in solution (capacity exhausted).
// A plain-water beaker can sit alongside with the same drops for comparison;
// there H⁺ and OH⁻ just meet each other. In `openCO2` mode (blood) every new
// H₂CO₃ leaves as a CO₂ bubble (breathed out).
//
// The meter is computed, never typed: exact charge balance on the balls'
// amounts (spectator Na⁺ and Cl⁻ included), via solvePH.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {BLUE, Beaker, GlossDefs, PROTON, clamp, ease, fadeAt, hash01, phColor, solvePH} from './shared';

export type BufferEvent = {add: 'H' | 'OH'; n: number; at: number; water?: boolean; buffer?: boolean};
export type BufferProps = {
	pKa: number;
	acid: string;
	base: string;
	ha: number;
	a: number;
	events?: BufferEvent[];
	water?: boolean;
	mmolPerBall?: number;
	volumeL?: number;
	openCO2?: boolean;
	/** Optional line of working under the buffer (e.g. H–H), and when. */
	working?: {text: string; at: number}[];
	title?: string;
	delay?: number;
};

const ID = 'c12m6buf';
const W = 760;
const H = 530;
const DROP_FALL = 26;
const DROP_GAP = 9;

type Ball = {kind: 'HA' | 'A' | 'H' | 'OH'; born: number; conv: {t: number; to: 'HA' | 'A' | 'gone' | 'co2'}[]; slot: number};
type Drop = {kind: 'H' | 'OH'; start: number; target: number | null; land: number};

/** Deterministic bookkeeping of which drop hits which ball, and when. */
const simulate = (ha: number, a: number, events: BufferEvent[], isBuffer: boolean, openCO2: boolean) => {
	const balls: Ball[] = [];
	if (isBuffer) {
		for (let i = 0; i < ha + a; i++) balls.push({kind: i < ha ? 'HA' : 'A', born: -1e9, conv: [], slot: i});
	}
	const drops: Drop[] = [];
	const kindAt = (b: Ball, t: number) => {
		let k: Ball['kind'] | 'gone' | 'co2' = b.kind;
		for (const c of b.conv) if (c.t <= t) k = c.to;
		return b.born <= t ? k : 'gone';
	};
	let nextSlot = balls.length;
	for (const ev of [...events].sort((p, q) => p.at - q.at)) {
		if (isBuffer ? ev.buffer === false : !ev.water) continue;
		for (let k = 0; k < ev.n; k++) {
			const start = ev.at + k * DROP_GAP;
			const land = start + DROP_FALL;
			const free = (kind: 'H' | 'OH') => balls.findIndex((b) => kindAt(b, land) === kind && !b.conv.some((c) => c.t > land - 1));
			let target = -1;
			if (ev.add === 'H') {
				target = free('OH');
				if (target >= 0) balls[target].conv.push({t: land, to: 'gone'});
				else {
					target = balls.findIndex((b) => kindAt(b, land) === 'A' && !b.conv.some((c) => c.t >= land));
					if (target >= 0) {
						balls[target].conv.push({t: land, to: 'HA'});
						if (openCO2) balls[target].conv.push({t: land + 40, to: 'co2'});
					}
				}
			} else {
				target = free('H');
				if (target >= 0) balls[target].conv.push({t: land, to: 'gone'});
				else {
					target = balls.findIndex((b) => kindAt(b, land) === 'HA' && !b.conv.some((c) => c.t >= land));
					if (target >= 0) balls[target].conv.push({t: land, to: 'A'});
				}
			}
			if (target < 0) {
				balls.push({kind: ev.add, born: land, conv: [], slot: nextSlot++});
				drops.push({kind: ev.add, start, target: balls.length - 1, land});
			} else drops.push({kind: ev.add, start, target, land});
		}
	}
	return {balls, drops, kindAt};
};

export const BufferDiagram = ({
	pKa, acid, base, ha, a, events = [], water = false, mmolPerBall = 1, volumeL = 0.1, openCO2 = false, working = [], title, delay = 62,
}: BufferProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const Ka = 10 ** -pKa;
	const HA_C = theme.accent;
	const A_C = BLUE;

	const beakers = water ? [{isBuffer: false, cx: 190}, {isBuffer: true, cx: 560}] : [{isBuffer: true, cx: 215}];
	const bw = water ? 250 : 290;
	const bh = 210;
	const baseY = water ? 372 : 392;

	const panel = ({isBuffer, cx}: {isBuffer: boolean; cx: number}, bi: number) => {
		const sim = simulate(ha, a, events, isBuffer, openCO2);
		const {balls, drops, kindAt} = sim;
		// Amounts at a time t (drops count once landed).
		const amounts = (t: number) => {
			let nHA = 0, nA = 0;
			for (const b of balls) {
				const k = kindAt(b, t);
				if (k === 'HA') nHA++;
				else if (k === 'A') nA++;
			}
			const landed = drops.filter((d) => d.land <= t);
			const nHadd = landed.filter((d) => d.kind === 'H').length;
			const nOHadd = landed.filter((d) => d.kind === 'OH').length;
			return {nHA, nA, nHadd, nOHadd};
		};
		const phAt = (t: number) => {
			const m = amounts(t);
			const conc = (n: number) => (n * mmolPerBall) / 1000 / volumeL;
			// Spectators: Na⁺ from the salt (a) and from NaOH; Cl⁻ from HCl.
			return solvePH({
				strongAcid: conc(m.nHadd),
				strongBase: conc((isBuffer ? a : 0) + m.nOHadd),
				weakAcids: isBuffer ? [{c: conc(m.nHA + m.nA), Ka}] : [],
			});
		};
		// Smooth the meter over the 10 frames after each landing.
		const lastLand = drops.reduce((L, d) => (d.land <= frame && d.land > L ? d.land : L), -1e9);
		const pHnow = frame - lastLand < 10
			? interpolate(frame - lastLand, [0, 10], [phAt(lastLand - 1), phAt(lastLand)])
			: phAt(frame);
		const pHstart = phAt(-1e8);
		const m = amounts(frame);

		const x0 = cx - bw / 2 + 26, x1 = cx + bw / 2 - 26;
		const yTop = baseY - bh * 0.66 + 18, yBot = baseY - 18;
		const nSlots = Math.max(balls.length, ha + a, 12);
		const cols = Math.min(8, Math.ceil(Math.sqrt(nSlots * 1.9)));
		const rows = Math.ceil(nSlots / cols);
		const pos = (slot: number) => {
			const c = slot % cols, r = Math.floor(slot / cols);
			const jx = (hash01(slot * 7 + bi) - 0.5) * 10, jy = (hash01(slot * 13 + bi) - 0.5) * 8;
			return {
				x: x0 + ((c + 0.5) / cols) * (x1 - x0) + jx,
				y: yBot - ((r + 0.5) / Math.max(rows, 3)) * (yBot - yTop) + jy,
			};
		};
		const r = water ? 12 : 13;

		return (
			<g key={bi}>
				<DioramaPlinth id={`${ID}${bi}`} cx={cx} cy={baseY + 16} rx={bw * 0.62} />
				<Beaker cx={cx} baseY={baseY} w={bw} h={bh} level={0.7} liquid={`${phColor(pHnow)}33`}>
					{balls.map((b, i) => {
						const k = kindAt(b, frame);
						if (k === 'gone') {
							// fade out on the frame it went
							const g = b.conv.find((c) => c.to === 'gone');
							if (!g || frame > g.t + 8) return null;
						}
						const p = pos(b.slot);
						const bob = idleBob(frame, i + bi * 50, 1.6);
						if (k === 'co2') {
							const c = b.conv.find((q) => q.to === 'co2')!;
							const u = interpolate(frame, [c.t, c.t + 46], [0, 1], clamp);
							if (u >= 1) return null;
							return (
								<g key={i} opacity={1 - u * u}>
									<circle cx={p.x + Math.sin(u * 9) * 6} cy={p.y - u * (p.y - (baseY - bh - 30))} r={10 + u * 4} fill="rgba(255,255,255,0.7)" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
									<text x={p.x + Math.sin(u * 9) * 6} y={p.y - u * (p.y - (baseY - bh - 30)) - 16} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>CO₂</text>
								</g>
							);
						}
						const kk = k === 'gone' ? b.conv.reduce<Ball['kind']>((acc, c) => (c.to === 'HA' || c.to === 'A' ? c.to : acc), b.kind) : k;
						const conv = [...b.conv].reverse().find((c) => c.t <= frame && (c.to === 'HA' || c.to === 'A'));
						const flash = conv ? 1 - fadeAt(frame, conv.t, 16) : 0;
						const pop = b.born > -1e8 ? Math.min(1, fadeAt(frame, b.born, 6) * 1.2) : 1;
						const gone = k === 'gone' ? 1 - fadeAt(frame, b.conv.find((c) => c.to === 'gone')!.t, 8) : 1;
						if (kk === 'H' || kk === 'OH') {
							return (
								<g key={i} opacity={pop * gone}>
									<circle cx={p.x} cy={p.y + bob} r={r * 0.85} fill={kk === 'H' ? `url(#${ID}-g-hp)` : `url(#${ID}-g-oh)`} stroke="rgba(0,0,0,0.3)" />
									<text x={p.x} y={p.y + bob + 5} textAnchor="middle" fill={kk === 'H' ? '#333' : '#fff'} fontSize={13} fontWeight={800}>{kk === 'H' ? 'H⁺' : 'OH⁻'}</text>
								</g>
							);
						}
						return (
							<g key={i} opacity={gone}>
								{flash > 0 && <circle cx={p.x} cy={p.y + bob} r={r * 2} fill={TOK.amber} opacity={0.35 * flash} />}
								<circle cx={p.x} cy={p.y + bob} r={r} fill={`url(#${ID}-g-${kk})`} stroke="rgba(0,0,0,0.3)" />
								{kk === 'HA' ? (
									<circle cx={p.x + r * 0.55} cy={p.y + bob - r * 0.75} r={r * 0.45} fill={`url(#${ID}-g-proton)`} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />
								) : (
									<text x={p.x} y={p.y + bob + 5} textAnchor="middle" fill="#fff" fontSize={15} fontWeight={800}>−</text>
								)}
							</g>
						);
					})}
				</Beaker>
				{/* Falling drops */}
				{drops.map((d, i) => {
					const u = ease(frame, d.start, d.land);
					if (u <= 0 || u >= 1) return null;
					const tgt = d.target !== null ? pos(balls[d.target].slot) : {x: cx, y: yBot};
					const sx = cx + (i % 3 - 1) * 26, sy = baseY - bh - 40;
					const x = sx + (tgt.x - sx) * u, y = sy + (tgt.y - sy) * u * u;
					return (
						<g key={`d${i}`}>
							<circle cx={x} cy={y} r={r * 0.85} fill={d.kind === 'H' ? `url(#${ID}-g-hp)` : `url(#${ID}-g-oh)`} stroke="rgba(0,0,0,0.3)" />
							<text x={x} y={y + 5} textAnchor="middle" fill={d.kind === 'H' ? '#333' : '#fff'} fontSize={13} fontWeight={800}>{d.kind === 'H' ? 'H⁺' : 'OH⁻'}</text>
						</g>
					);
				})}
				{/* pH meter */}
				<g>
					<rect x={cx - 78} y={16} width={156} height={62} rx={12} fill="#20262b" stroke="#0d1114" strokeWidth={2} />
					<rect x={cx - 68} y={24} width={136} height={46} rx={7} fill="#cfe6d8" />
					<text x={cx} y={58} textAnchor="middle" fill="#14261c" fontSize={30} fontWeight={800} fontFamily="ui-monospace, monospace">{pHnow.toFixed(2)}</text>
					<line x1={cx + 52} y1={78} x2={cx + 52} y2={baseY - 40} stroke="#3a3f44" strokeWidth={4} />
					<rect x={cx + 46} y={baseY - 64} width={12} height={34} rx={5} fill="#5a6168" />
					<text x={cx - 90} y={52} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>pH</text>
					{Math.abs(pHnow - pHstart) > 0.005 && (
						<text x={cx} y={98} textAnchor="middle" fill={Math.abs(pHnow - pHstart) > 1 ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800}>
							{pHnow > pHstart ? '▲' : '▼'} {Math.abs(pHnow - pHstart).toFixed(2)} from {pHstart.toFixed(2)}
						</text>
					)}
				</g>
				{/* Caption */}
				<text x={cx} y={baseY + 62} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{isBuffer ? 'buffer' : 'pure water'}</text>
				{isBuffer && (
					<text x={cx} y={baseY + 88} textAnchor="middle" fontSize={18} fontWeight={800}>
						<tspan fill={HA_C}>{acid} {m.nHA}</tspan>
						<tspan fill={TOK.inkMute}> : </tspan>
						<tspan fill={A_C}>{base} {m.nA}</tspan>
					</text>
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A buffer resists pH change when acid or base is added" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{HA: HA_C, A: A_C, proton: PROTON, hp: '#f4efe0', oh: '#e0433a'}} />
			{title && <text x={W / 2} y={H - 16} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{title}</text>}
			<g opacity={fadeAt(frame, 0, 14)}>{beakers.map(panel)}</g>
			{working.map((w, i) => (
				<text key={i} x={water ? W / 2 : 400} y={water ? H - 12 - (working.length - 1 - i) * 26 : 190 + i * 40} textAnchor={water ? 'middle' : 'start'} fill={i === working.length - 1 ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, w.at) * (i === working.length - 1 ? 0.8 + 0.2 * idlePulse(frame) : 1)}>
					{w.text}
				</text>
			))}
		</svg>
	);
};
