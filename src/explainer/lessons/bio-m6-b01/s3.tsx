// M6 B01 scenes 9 to 11 on the source board: making, mixing and moving alleles (meiosis and fertilisation reshuffle;
// gene flow can bring in an allele new to this population; mutation is the original source), what happens to a new
// allele next (lost by chance, removed by selection, or spreads), and the memory line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Chip, DrawPath, Heading, Overlay, Sx, prog, rng} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, AlleleRing, BIO_INK, BaseTag, CardBox, GREYT, GTag, INK, INK_SOFT, Lbl, PoolBasin, SlimStrand, basinSlots, lerp, qPt, rungX, smooth, vis,
} from './parts';
import type {Kind} from './parts';

// ---------- 9. Making, mixing and moving alleles ----------
const K9 = cues(S('sources'), {
	sort: "so let's sort the processes", meiosis: 'Meiosis and fertilisation', combos: 'make new combinations', existed: 'already existed', flow: 'Gene flow', move: 'move between populations',
	bring: 'can bring in an allele', didnt: "this population didn't have", somewhere: 'But somewhere', made: 'made by a mutation', source: 'the original source of every allele',
});
const B1 = {x: 470, y: 560, w: 800, h: 210};
const S1 = basinSlots(B1.x, B1.y, B1.w, B1.h, 15, 8);
const K1: Kind[] = ['a', 'b', 'a', 'a', 'b', 'new', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a'];
const B2 = {x: 1420, y: 600, w: 400, h: 160};
const S2 = basinSlots(B2.x, B2.y, B2.w, B2.h, 6, 3);
const K2: Kind[] = ['a', 'flow', 'b', 'a', 'flow', 'a'];
/** Ring swaps for meiosis and fertilisation: [i, j] trade places. */
const SWAPS: [number, number][] = [[2, 9], [4, 11], [7, 1]];
export const SceneSources: React.FC = () => {
	const f = useCurrentFrame();
	const swapT = smooth(prog(f, K9.combos, 40));
	const pos = (i: number): [number, number] => {
		const sw = SWAPS.find(s => s[0] === i || s[1] === i);
		if (!sw) return S1[i];
		const j = sw[0] === i ? sw[1] : sw[0];
		const p = qPt(S1[i], S1[j], sw[0] === i ? -70 : 70, swapT);
		return p;
	};
	const flyT = smooth(prog(f, K9.bring, 44));
	const fp = qPt(S2[1], S1[14], -200, flyT);
	return (
		<>
			<Heading text="Making, mixing and moving alleles" at={K9.sort - 20} size={56} />
			<Overlay>
				<PoolBasin {...B1} o={prog(f, 0, 14)} />
				<Lbl x={B1.x + B1.w / 2} y={B1.y + B1.h + 50} text="this population" size={32} color={BIO_INK} anchor="middle" at={4} />
				{K1.map((k, i) => {
					const [x, y] = pos(i);
					const hot = SWAPS.some(s => s.includes(i)) ? vis(f, K9.combos - 6, K9.flow, 10) : 0;
					return <AlleleRing key={i} x={x} y={y} r={15} kind={k} o={prog(f, 6 + i * 2, 10)} glow={hot * 0.7} />;
				})}
				<Chip x={110} y={330} text="meiosis and fertilisation: mix" at={K9.meiosis} size={34} />
				<GTag x={120} y={410} text="B8" at={K9.meiosis + 10} size={22} />
				<Lbl x={110} y={490} text="new combinations," size={32} color={INK} at={K9.existed} />
				<Lbl x={110} y={530} text="no new alleles" size={32} color={AMBER_INK} at={K9.existed + 6} />
				{/* gene flow */}
				<PoolBasin {...B2} o={prog(f, K9.flow, 14)} stroke="#a7b7c6" />
				<Lbl x={B2.x + B2.w / 2} y={B2.y + B2.h + 50} text="another population" size={30} color={BIO_INK} anchor="middle" at={K9.flow + 6} />
				{K2.map((k, i) => (i === 1 && flyT > 0.01 ? null : <AlleleRing key={i} x={S2[i][0]} y={S2[i][1]} r={15} kind={k} o={prog(f, K9.flow + 8 + i * 3, 10)} />))}
				{flyT > 0.01 ? <AlleleRing x={fp[0]} y={fp[1]} r={15 + 4 * Math.sin(flyT * Math.PI)} kind="flow" glow={vis(f, K9.bring, K9.made + 40, 10)} /> : null}
				<Chip x={1420} y={226} text="gene flow: moves" at={K9.flow} size={34} />
				<Lbl x={B1.x + B1.w / 2} y={B1.y + B1.h + 100} text="gene flow can bring in an allele new to this population" size={32} color={INK} anchor="middle" at={K9.didnt + 10} />
				{/* that allele was made by a mutation somewhere */}
				<g opacity={prog(f, K9.made - 10, 12)}>
					<SlimStrand x={1440} y={470} n={11} pitch={30} gap={36} band={{i0: 2, i1: 9, o: 0.7}} rung={i => (i === 6 ? {color: '#4f86ad', w: 6} : undefined)} />
					<BaseTag x={rungX(1440, 6, 30)} y={466} text="T" len={8} size={22} color="#4f86ad" />
				</g>
				<DrawPath d={`M${S1[14][0] + 16},${S1[14][1] - 14} Q${1300},${440} ${1440},${490}`} at={K9.made} dur={20} color={GREYT} width={3} dash="7 6" />
				<Lbl x={1440} y={395} text="made by mutation there first" size={28} color={INK_SOFT} at={K9.made + 10} />
				<Chip x={700} y={210} text="mutation: makes (the original source)" at={K9.source} size={36} stroke={AMBER} />
				{void K9.move}{void K9.somewhere}{void INK_SOFT}{void AMBER}{void lerp}
			</Overlay>
		</>
	);
};

// ---------- 10. What happens next ----------
const K10 = cues(S('what-next'), {what: 'So what happens to a new allele next', lost: 'lost by chance', removed: 'removed by selection', spread: 'a few helpful ones spread', later: 'Later in this module'});
const PW = 520, PH = 420, PY = 270;
const PX = [110, 700, 1290];
/** Illustrative frequency paths (no numbers): a wandering loss, a steady fall, a rise. */
const pathPts = (k: number): [number, number][] => {
	const n = 40;
	const r = rng(91);
	let v = 0.14;
	return Array.from({length: n + 1}, (_, i) => {
		const t = i / n;
		if (k === 0) { v = i === 0 ? 0.14 : Math.max(0, v + (r() - 0.56) * 0.06); if (t > 0.62) v = Math.max(0, v - 0.03); }
		else if (k === 1) v = Math.max(0, 0.14 * (1 - t * 1.6));
		else v = 0.14 + 0.78 / (1 + Math.exp(-(t - 0.55) * 9)) - 0.78 / (1 + Math.exp(0.55 * 9));
		return [t, v];
	});
};
export const SceneWhatNext: React.FC = () => {
	const f = useCurrentFrame();
	const items = [{t: 'lost by chance', at: K10.lost}, {t: 'harmful: removed by selection', at: K10.removed}, {t: 'helpful here: spreads', at: K10.spread}];
	return (
		<>
			<Heading text="What happens to a new allele next" at={K10.what} size={56} />
			<Overlay>
				{items.map((it, k) => {
					const x0 = PX[k] + 60, y0 = PY + PH - 50, w = PW - 100, h = PH - 110;
					const pts = pathPts(k).map(([t, v]) => [x0 + t * w, y0 - v * h] as [number, number]);
					const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
					return (
						<g key={k} opacity={prog(f, k * 6, 14)}>
							<CardBox x={PX[k]} y={PY} w={PW} h={PH} at={-100} />
							<line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={INK} strokeWidth={3} />
							<line x1={x0} y1={y0} x2={x0} y2={y0 - h - 10} stroke={INK} strokeWidth={3} />
							<Sx x={x0 + w} y={y0 + 34} text="generations" size={22} color={INK_SOFT} weight={600} anchor="end" />
							<Sx x={x0 - 14} y={y0 - h - 20} text="how common" size={22} color={INK_SOFT} weight={600} />
							<circle cx={pts[0][0]} cy={pts[0][1]} r={9} fill={AMBER} />
							<Sx x={x0 + 14} y={pts[0][1] - 16} text="1 copy" size={22} color={AMBER_INK} weight={700} at={k * 6} />
							<DrawPath d={d} at={it.at - 6} dur={46} color={k === 2 ? AMBER : INK_SOFT} width={5} />
							<Lbl x={PX[k] + PW / 2} y={PY + PH + 60} text={it.t} size={38} color={k === 2 ? AMBER_INK : INK} anchor="middle" at={it.at + 10} />
						</g>
					);
				})}
				<Lbl x={110} y={245} text="new allele: 1 copy" size={30} color={AMBER_INK} at={10} />
				<GTag x={110} y={850} text="selection, chance (drift) and gene flow: later video" at={K10.later} size={28} />
				<Sx x={1810} y={1000} text="illustrative, no data" size={22} color={GREYT} weight={600} anchor="end" at={20} />
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {here: "Here's a way to sort it all", m: 'Mutation makes new alleles', mm: 'Meiosis and fertilisation mix them', gf: 'Gene flow moves them', sc: 'selection and chance change how common'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [
		{t: 'Mutation makes', at: K11.m, out: K11.mm},
		{t: 'Meiosis and fertilisation mix', at: K11.mm, out: K11.gf},
		{t: 'Gene flow moves', at: K11.gf, out: K11.sc},
		{t: 'Selection and chance change how common', at: K11.sc, out: K11.sc + 70},
	];
	const Y = [300, 470, 640, 810];
	const swap = smooth(prog(f, K11.mm + 10, 30));
	const cross = smooth(prog(f, K11.gf + 10, 34));
	return (
		<>
			<Heading text="Who does what to alleles" at={K11.here} size={56} />
			<Overlay>
				{rows.map((r, i) => {
					const hot = vis(f, r.at, r.out, 10);
					return (
						<g key={i} opacity={prog(f, r.at - 4, 12)}>
							{hot > 0.01 ? <rect x={110} y={Y[i] - 75} width={1700} height={120} rx={22} fill="#f6d77a" opacity={0.28 * hot} /> : null}
							<Sx x={380} y={Y[i] + 12} text={r.t} size={68} color={i === 0 ? AMBER_INK : INK} hand />
						</g>
					);
				})}
				<g opacity={prog(f, K11.m - 4, 12)}><AlleleRing x={230} y={Y[0] - 10} r={30} kind="new" glow={vis(f, K11.m, K11.mm, 10)} /></g>
				<g opacity={prog(f, K11.mm - 4, 12)}>
					<AlleleRing x={lerp(190, 270, swap)} y={Y[1] - 10 - Math.sin(swap * Math.PI) * 26} r={22} kind="a" />
					<AlleleRing x={lerp(270, 190, swap)} y={Y[1] - 10 + Math.sin(swap * Math.PI) * 26} r={22} kind="b" />
				</g>
				<g opacity={prog(f, K11.gf - 4, 12)}>
					<path d={`M150,${Y[2] - 30} L210,${Y[2] - 30} L204,${Y[2] + 6} L156,${Y[2] + 6} Z`} fill="#eaf2f9" stroke="#8ba9c4" strokeWidth={3} />
					<path d={`M250,${Y[2] - 30} L310,${Y[2] - 30} L304,${Y[2] + 6} L256,${Y[2] + 6} Z`} fill="#eaf2f9" stroke="#8ba9c4" strokeWidth={3} />
					<AlleleRing x={lerp(180, 280, cross)} y={Y[2] - 30 - Math.sin(cross * Math.PI) * 40} r={16} kind="flow" />
				</g>
				<g opacity={prog(f, K11.sc - 4, 12)}>
					{[0, 1, 2].map(k => {
						const h = (24 + k * 26) * prog(f, K11.sc + k * 8, 14);
						return <rect key={k} x={170 + k * 40} y={Y[3] + 20 - h} width={28} height={h} rx={5} fill={k === 2 ? AMBER : '#c9b8a0'} />;
					})}
				</g>
			</Overlay>
		</>
	);
};
