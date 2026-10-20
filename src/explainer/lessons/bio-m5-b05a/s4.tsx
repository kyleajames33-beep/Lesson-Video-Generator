import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, anaOffsets, Arrow, CH, CX, CY, DrawPath, FONT_DISPLAY, FONT_HAND, Hand, Heading,
	INK, INK_SOFT, lerp, META_Y, Overlay, PenTap, Pill, prog, RX, RY, S, vis, clamp01, CREAM, ANA_X,
} from './shared';
import {AN, CD, camAt, Dissolve, HCell, HChrom, Morph, Panel, PL, Ring, Stage, toS} from './cd';
import type {Cam, HCol} from './cd';
import {hcol} from './s1';
import {REACH, SPLIT} from './s3';

const GREY = '#7a8088';

const Cen: React.FC<{at: number; out?: number; x: number; y: number; w?: number; size?: number; color?: string; hand?: boolean; weight?: number; children: React.ReactNode}> = ({at, out, x, y, w = 300, size = 46, color = INK, hand = true, weight = 700, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x - w / 2, top: y, width: w, textAlign: 'center'}}>
		<div style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, color, lineHeight: 1.05}}>{children}</div>
	</Enter>
);
/** A big number that pops when it lands. */
const Num: React.FC<{at: number; x: number; y: number; text: string; color?: string; size?: number; out?: number}> = ({at, x, y, text, color = INK, size = 104, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10));
	return <div style={{position: 'absolute', left: x - 150, top: y, width: 300, textAlign: 'center', opacity: o, transform: `scale(${1 + 0.35 * (1 - p)})`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, lineHeight: 1}}>{text}</div>;
};

// ---------- 5. Tracking the numbers ----------
// Revision 7: the mini cells above the columns are the clean coded model (outline cells, large chromosomes).
const BX = [610, 920, 1230, 1540];
const ICY = 310;
const ML = {L: 70, S: 48};
const MW = 10;
/** Mini model: long pair on the upper row, short pair on the lower row, plum left. */
const MINI: {i: number; dx: number; dy: number}[] = [{i: 0, dx: -16, dy: -26}, {i: 1, dx: 16, dy: -26}, {i: 2, dx: -16, dy: 30}, {i: 3, dx: 16, dy: 30}];
export const SceneTracking: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('tracking'), {
		track: "Let's track", four: 'four chromosomes', still: 'still has four', centro: 'we count centromeres', eight: 'eight chromatids', becomes: 'each chromatid becomes', chromo: 'a chromosome', holds: 'holds eight',
		fourEnd: 'four at each end', divides: 'the cell divides', newFour: 'new cell holds four', human: 'A human cell', h46: '46 chromosomes', after: ['after copying', 2], h92: '92 chromatids', twice: 'twice 46', h92c: 'are 92 chromosomes',
		h4646: '46 at each', hnew: 'then 46 in each', halved: 'never halved', doubled: 'doubled the DNA', shared: 'shared it back',
	} as Record<string, string | [string, number]>);
	const col = (i: number) => BX[i];
	const iconO = (at: number) => prog(f, at - 4, 16);
	const eAna = prog(f, c.becomes - 40, 40);
	const chips8 = Array.from({length: 8}, (_, k) => ({k, ch: CH[Math.floor(k / 2)]}));
	const grouped = prog(f, c.fourEnd, 24);
	const regroup = (k: number) => {
		// chips 0..7 are pairs (A,B) of chromosomes 0..3; grouping puts all A chromatids left, all B right
		const idx = Math.floor(k / 2), isB = k % 2;
		const from = -104 + k * 30 + idx * 12;
		const to = (isB ? 70 : -70) + (idx - 1.5) * 28;
		return lerp(from, to, grouped);
	};
	const pulse = (a: number) => 0.55 * Math.sin(Math.PI * prog(f, a, 36));
	const loop = prog(f, c.halved, 30);
	const arrowsBack = prog(f, c.shared, 24);
	const mini = (cx: number, dup: number, sep = 0, s = 1) => MINI.map(m => <HChrom key={m.i} x={cx + m.dx * s} y={ICY + m.dy * s} len={ML[CH[m.i].kind as 'L' | 'S'] * s} w={MW * s} col={hcol(CH[m.i].color)} dup={dup} sep={sep} />);
	return (
		<>
			<Heading items={[[0, 'Tracking the numbers']]} size={64} />
			{/* headers */}
			<Cen at={c.track + 20} x={col(0)} y={168} size={46} color={INK_SOFT}>start</Cen>
			<Cen at={c.still - 16} x={col(1)} y={168} size={46} color={INK_SOFT}>after copying</Cen>
			<Cen at={c.becomes - 40} x={col(2)} y={168} size={46} color={INK_SOFT}>anaphase</Cen>
			<Cen at={c.divides - 6} x={col(3)} y={168} size={46} color={INK_SOFT}>each new cell</Cen>
			<Overlay>
				{/* mini cells */}
				<g opacity={iconO(c.four)}><HCell cx={col(0)} cy={ICY} rx={108} ry={82} sw={3} />{mini(col(0), 0)}</g>
				<g opacity={iconO(c.still)}><HCell cx={col(1)} cy={ICY} rx={108} ry={82} sw={3} />{mini(col(1), prog(f, c.still + 4, 24))}</g>
				<g opacity={iconO(c.becomes - 40)}><HCell cx={col(2)} cy={ICY} rx={lerp(108, 150, eAna)} ry={82} sw={3} />{mini(col(2), 1, 84 * eAna)}</g>
				<g opacity={iconO(c.divides)}>
					{[-1, 1].map(side => (
						<g key={side}>
							<HCell cx={col(3) + side * 80} cy={ICY} rx={70} ry={66} sw={3} />
							{mini(col(3) + side * 80, 0, 0, 0.8)}
						</g>
					))}
				</g>
				{/* model row: chromatid chips */}
				<g opacity={pulse(c.doubled)}><ellipse cx={col(1)} cy={574} rx={150} ry={58} fill={AMBER} opacity={0.6} /></g>
				{chips8.map(({k, ch}) => {
					const p = prog(f, c.eight + k * 3, 10);
					const x = col(1) + (-104 + k * 30 + Math.floor(k / 2) * 12) + 15;
					return <g key={'a' + k} opacity={p} transform={`translate(0,${(1 - p) * -24})`}><rect x={x - 6} y={548} width={12} height={54} rx={6} fill={ch.color} stroke={INK} strokeWidth={2.5} /></g>;
				})}
				{chips8.map(({k, ch}) => {
					const p = prog(f, c.becomes + k * 3, 10);
					const x = col(2) + regroup(k) + 0;
					return (
						<g key={'b' + k} opacity={p} transform={`translate(0,${(1 - p) * -24})`}>
							<rect x={x - 6} y={548} width={12} height={54} rx={6} fill={ch.color} stroke={INK} strokeWidth={2.5} />
							<circle cx={x} cy={575} r={6.5 * prog(f, c.becomes + 10 + k * 3, 8)} fill={CREAM} stroke={INK} strokeWidth={2.2} />
						</g>
					);
				})}
				{[-1, 1].map(side => (
					<g key={side} opacity={prog(f, c.newFour + 10, 14)}>
						{CH.map((ch, i) => <HChrom key={i} x={col(3) + side * 70 + (i - 1.5) * 26} y={574} len={ML[ch.kind as 'L' | 'S'] * 0.8} w={8} col={hcol(ch.color)} />)}
					</g>
				))}
				{/* the human row */}
				<line x1={96} x2={1830} y1={672} y2={672} stroke="#d8cdb6" strokeWidth={4} strokeDasharray="3 14" strokeLinecap="round" opacity={prog(f, c.human, 16)} />
				<g opacity={pulse(c.doubled + 4)}><rect x={col(1) - 150} y={784} width={300} height={56} rx={28} fill={AMBER} opacity={0.5} /></g>
				{/* arrows back out */}
				<g opacity={arrowsBack}>
					<Arrow x1={col(2) + 90} y1={440} x2={col(3) - 90} y2={440} at={c.shared} color={AMBER_INK} />
					<Arrow x1={col(2) + 90} y1={736} x2={col(3) - 90} y2={736} at={c.shared + 8} color={AMBER_INK} />
				</g>
				{/* never halved: loop from the last column back to the first */}
				<g opacity={loop}>
					<path d={`M${col(3)},${886} C${col(3)},${960} ${col(0)},${960} ${col(0)},${886}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeDasharray="14 12" />
					<path d={`M${col(0) - 16},${912} L${col(0)},${886} L${col(0) + 18},${910}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</g>
				<GreyCrossL x={1790} y={726} at={c.halved + 14} s={0.9} />
			</Overlay>
			{/* row labels */}
			<Hand at={c.track + 24} x={96} y={398} size={52} color={AMBER_INK}>model cell</Hand>
			<Hand at={c.track + 24} x={96} y={456} size={28} color={INK_SOFT} w={280}>chromosomes in the cell</Hand>
			<Hand at={c.human} x={96} y={696} size={52} color={AMBER_INK}>human cell</Hand>
			<Hand at={c.human} x={96} y={754} size={28} color={INK_SOFT} w={280}>chromosomes in the cell</Hand>
			{/* model numbers */}
			<Num at={c.four} x={col(0)} y={388} text="4" />
			<Num at={c.still} x={col(1)} y={388} text="4" />
			<Num at={c.holds} x={col(2)} y={388} text="8" />
			<Num at={c.newFour} x={col(3)} y={388} text="4" />
			<Cen at={c.centro} out={c.eight} x={col(1)} y={496} w={300} size={42} color={AMBER_INK}>count centromeres</Cen>
			<Cen at={c.eight + 24} x={col(1)} y={610} w={300} size={42} color={AMBER_INK}>8 chromatids</Cen>
			<Cen at={c.chromo} x={col(2)} y={610} w={300} size={42} color={AMBER_INK}>8 chromosomes</Cen>
			<Cen at={c.fourEnd} x={col(2)} y={488} w={300} size={46} color={AMBER_INK}>4 + 4</Cen>
			<Cen at={c.newFour + 10} x={col(3)} y={610} w={300} size={42} color={AMBER_INK}>4 in each</Cen>
			{/* human numbers */}
			<Num at={c.h46} x={col(0)} y={686} text="46" />
			<Num at={c.after} x={col(1)} y={686} text="46" />
			<Num at={c.h92c} x={col(2)} y={686} text="92" />
			<Num at={c.hnew} x={col(3)} y={686} text="46" />
			<Cen at={c.h92} x={col(1)} y={790} w={300} size={46} color={AMBER_INK}>92 chromatids</Cen>
			<Cen at={c.twice} x={col(1)} y={836} w={300} size={38} color={INK}>46 x 2 = 92</Cen>
			<Cen at={c.h4646} x={col(2)} y={790} w={300} size={46} color={AMBER_INK}>46 + 46</Cen>
			<Cen at={c.halved} x={(col(0) + col(3)) / 2} y={886} w={420} size={44} color={AMBER_INK}>46 to 46: never halved</Cen>
			<Cen at={c.halved + 6} x={1790} y={770} w={160} size={40} color={INK_SOFT}>half</Cen>
		</>
	);
};
const GreyCrossL: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => (
	<g>
		<DrawPath d={`M${x - 22 * s},${y - 22 * s} L${x + 22 * s},${y + 22 * s}`} at={at} dur={8} color={GREY} width={7} />
		<DrawPath d={`M${x + 22 * s},${y - 22 * s} L${x - 22 * s},${y + 22 * s}`} at={at + 6} dur={8} color={GREY} width={7} />
	</g>
);

// ---------- 6a. Why the two new cells are identical ----------
// Revision 7: the painted metaphase cell; its chromatids part (painted pieces), the two new nuclei each hold one copy
// of every chromosome, then back to metaphase for the checkpoint: ticks on both attachments of every centromere.
const C6: Cam = {zoom: 1.45, fx: 1000, fy: 990};
export const SceneIdentical: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('identical'), {
		why: 'Why are the two', copies: 'copies of the same', pull: 'pull the two', opp: 'opposite ends', every: 'a copy of every', both: 'both sets', checks: 'also checks', attached: 'attached from both', before: 'before anaphase', starts: 'starts',
	});
	const cam = camAt(f, [[0, C6.zoom, C6.fx, C6.fy]]);
	const P = (x: number, y: number) => toS(cam, x, y);
	const tSplit = prog(f, c.pull, 60);
	const tReach = prog(f, c.every - 10, 40);
	const tBack = prog(f, c.checks - 14, 26);
	const hi = vis(f, c.copies, c.pull - 6, 10);
	const gate = prog(f, c.checks + 6, 22) * (1 - prog(f, c.before + 10, 22));
	const k = 0.41 * C6.zoom;
	const lp = P(...AN.metaphase.cen[0]);
	const top = P(1000, 560);
	const nucL = P(...AN.telophase.nuc[0]), nucR = P(...AN.telophase.nuc[1]);
	const tickAt = (i: number) => c.attached + i * 7;
	return (
		<>
			<Heading items={[[0, 'Why are the two new cells identical?'], [c.checks - 6, 'A check before anaphase']]} size={64} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('metaphase'), CD('anaphase'), CD('telophase'), CD('metaphase', true), CD('anaphase', true), CD('telophase', true)]}>
					{tBack > 0.5 ? (
						<>
							<PL src={CD('metaphase')} />
						</>
					) : tReach > 0 ? (
						<Morph A={CD('anaphase')} B={CD('telophase')} t={tReach} pieces={REACH} />
					) : <Morph A={CD('metaphase')} B={CD('anaphase')} t={tSplit} pieces={SPLIT} />}
					{/* back to metaphase for the checkpoint */}
					{tBack > 0.004 && tBack < 1 ? <Dissolve a={CD('telophase')} b={CD('metaphase')} t={tBack} /> : null}
				</Stage>
				{/* the two chromatids of one chromosome: identical copies */}
				<g opacity={hi}>
					<ellipse cx={lp[0] - 12 * k * 2} cy={lp[1]} rx={30 * k * 2} ry={100 * k} fill="none" stroke={AMBER} strokeWidth={5} />
					<ellipse cx={lp[0] + 12 * k * 2} cy={lp[1]} rx={30 * k * 2} ry={100 * k} fill="none" stroke={AMBER} strokeWidth={5} />
				</g>
				<g opacity={vis(f, c.copies + 10, c.pull, 8)}><DrawPath d={`M${lp[0] + 60},${lp[1] - 10} Q${lp[0] + 300},${lp[1] - 80} ${1560},${290}`} at={c.copies + 10} dur={14} color={AMBER_INK} width={4} /></g>
				{/* arrows to opposite ends */}
				<g opacity={vis(f, c.opp, c.every + 20, 10)}>
					<Arrow x1={P(940, 1340)[0]} y1={P(940, 1340)[1]} x2={P(560, 1340)[0]} y2={P(560, 1340)[1]} at={c.opp} color={AMBER_INK} />
					<Arrow x1={P(1060, 1340)[0]} y1={P(1060, 1340)[1]} x2={P(1440, 1340)[0]} y2={P(1440, 1340)[1]} at={c.opp + 6} color={AMBER_INK} />
				</g>
				{/* both sets in each new nucleus */}
				<g opacity={vis(f, c.every + 20, c.checks - 14, 10)}>
					<Ring x={nucL[0]} y={nucL[1]} r={AN.telophase.r * k + 10} w={5} />
					<Ring x={nucR[0]} y={nucR[1]} r={AN.telophase.r * k + 10} w={5} />
				</g>
				{/* checkpoint: a gate on the line, a tick on each attachment */}
				<g opacity={gate} transform={`translate(0,${-(1 - gate) * 30})`}>
					<g transform={`translate(${top[0]},${top[1] - 40})`}>
						<circle r={32} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={6} />
						<line x1={22} y1={22} x2={52} y2={52} stroke={AMBER_INK} strokeWidth={9} strokeLinecap="round" />
					</g>
					<line x1={top[0]} y1={top[1] + 4} x2={top[0]} y2={P(1000, 1360)[1]} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" opacity={0.8} />
				</g>
				{AN.metaphase.cen.map(([x, y], i) => {
					const [sx, sy] = P(x, y);
					const o = vis(f, tickAt(i), c.starts + 10, 8);
					return (
						<g key={i} opacity={o}>
							<path d={`M${sx - 92},${sy} l9,10 l18,-20`} fill="none" stroke="#2f8a5b" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
							<path d={`M${sx + 64},${sy} l9,10 l18,-20`} fill="none" stroke="#2f8a5b" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
						</g>
					);
				})}
				<g opacity={vis(f, c.checks + 20, c.before, 8)} transform={`translate(${top[0] + 110},${top[1] - 40})`}>
					<circle r={30} fill="#fffdf8" stroke={GREY} strokeWidth={6} />
					<line x1={0} y1={0} x2={0} y2={-20} stroke={GREY} strokeWidth={6} strokeLinecap="round" transform={`rotate(${(f - c.checks) * 9})`} />
					<line x1={0} y1={0} x2={13} y2={0} stroke={GREY} strokeWidth={6} strokeLinecap="round" />
				</g>
			</Overlay>
			<Hand at={c.copies} out={c.pull} x={1570} y={240} size={48} color={AMBER_INK} w={300}>two copies of the same chromosome</Hand>
			<Hand at={c.every} out={c.checks - 14} x={96} y={290} size={44} color={AMBER_INK} w={250}>new cell: a copy of every chromosome</Hand>
			<Hand at={c.every + 8} out={c.checks - 14} x={1580} y={290} size={44} color={AMBER_INK} w={260}>new cell: a copy of every chromosome</Hand>
			<Hand at={c.both} out={c.checks - 14} x={96} y={470} size={40} color={INK} w={250}>both sets: long and short</Hand>
			<Hand at={c.both + 8} out={c.checks - 14} x={1580} y={470} size={40} color={INK} w={260}>both sets here too</Hand>
			<Hand at={c.checks + 4} out={c.before} x={96} y={290} size={50} color={AMBER_INK} w={280}>checkpoint: waits</Hand>
			<Hand at={c.attached} x={96} y={400} size={42} color="#2f8a5b" w={280}>every chromosome attached from both ends</Hand>
			<Hand at={c.before} x={96} y={600} size={50} color="#2f8a5b" w={280}>then go</Hand>
			<Pill at={c.checks + 40} x={1290} y={958} size={34} color={INK_SOFT}>tracker: 4, 4, 8, 4 chromosomes</Pill>
		</>
	);
};

// ---------- 6b. Accurate, not perfect ----------
const Mark: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (
	<g opacity={o}><circle cx={x} cy={y} r={11} fill={AMBER} stroke={AMBER_INK} strokeWidth={3.5} /></g>
);
/** A small coded cell with one long plum chromosome (copied or not); the mark sits beside the changed chromatid. */
const SmallCell: React.FC<{x: number; y: number; r?: number; o?: number; marked?: boolean; dup?: number}> = ({x, y, r = 90, o = 1, marked, dup = 0}) => (
	<g opacity={o}>
		<HCell cx={x} cy={y} rx={r} ry={r * 0.86} sw={3.5} nuc={1} nucR={r * 0.6} />
		<HChrom x={x} y={y} len={r * 0.95} w={r * 0.15} col="P" dup={dup} />
		{marked ? <Mark x={x + (dup > 0 ? r * 0.16 : 0) + r * 0.2} y={y - r * 0.24} /> : null}
	</g>
);
const Letters: React.FC<{x: number; y: number; letters: string[]; flip?: number; at: number}> = ({x, y, letters, flip, at}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{letters.map((l, i) => {
				const flipped = flip !== undefined && f >= flip && i === 2;
				return (
					<g key={i} opacity={prog(f, at + i * 4, 10)}>
						<rect x={x + i * 74 - 30} y={y - 40} width={62} height={68} rx={12} fill={flipped ? '#ffe6a8' : '#fffdf8'} stroke={flipped ? AMBER_INK : INK_SOFT} strokeWidth={4} />
						<text x={x + i * 74 + 1} y={y + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46}} fill={flipped ? AMBER_INK : INK}>{flipped ? 'T' : l}</text>
					</g>
				);
			})}
		</g>
	);
};
const CL = {L: 130, S: 88};
const CW = 24;
export const SceneNotPerfect: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('not-perfect'), {
		acc: 'accurate not perfect', mistake: 'A mistake made', copying: 'copying the DNA', mut: 'a mutation', ends: 'ends up in one', then: 'and then in every', divides: 'divides from that one', rarely: 'Rarely', two: 'the two chromatids',
		both: 'both move to', same: 'the same end', extra: 'an extra chromosome', short: 'one short', checks: 'Checks catch', notall: 'but not all',
	});
	const sA = vis(f, c.mistake - 20, c.ends - 6, 12);
	const sB = vis(f, c.ends - 4, c.rarely - 8, 12);
	const sC = prog(f, c.rarely - 4, 20);
	// stage C: metaphase and the mistake, on the clean coded model
	const travel = prog(f, c.both, 90);
	const e = 0.05 * prog(f, c.two, 16) + 0.95 * travel;
	const my = (i: number) => CY + META_Y[i];
	const offs = (i: number) => {
		if (i !== 0) return anaOffsets(i, e);
		const y0 = META_Y[0];
		return {xa: lerp(0, ANA_X - 40, e), ya: lerp(0, 95 - y0, e), xb: lerp(0, ANA_X, e), yb: lerp(0, -y0, e), sep: Math.min(1, e * 25)};
	};
	const glow = vis(f, c.two, c.both, 10);
	const R = ANA_X;
	const rightPts: [number, number][] = [[CX + R - 40, CY - 95], [CX + R + 40, CY - 95], [CX + R, CY], [CX + R - 40, CY + 95], [CX + R + 40, CY + 95]];
	const leftPts: [number, number][] = [[CX - R - 40, CY - 95], [CX - R + 40, CY - 95], [CX - R + 40, CY + 95]];
	const mag = prog(f, c.checks, 70);
	const flagO = prog(f, c.checks + 54, 10) * (1 - 0.5 * prog(f, c.notall, 14));
	const PLp = CX - (RX + 40) * 0.62, PRp = CX + (RX + 40) * 0.62;
	return (
		<>
			<Heading items={[[0, 'Mitosis is accurate, not perfect']]} size={64} />
			{/* A: a copying mistake */}
			<div style={{opacity: sA, position: 'absolute', inset: 0}}>
				<Overlay>
					<HChrom x={400} y={540} len={300} w={40} col="P" dup={1} />
					<Mark x={400 + 52} y={540 - 90} o={prog(f, c.copying + 30, 10)} />
					<DrawPath d="M480,500 Q620,500 790,500" at={c.mistake} dur={20} color={INK_SOFT} width={4} />
					<circle cx={1010} cy={500} r={225} fill="rgba(255,253,248,0.9)" stroke={AMBER_INK} strokeWidth={8} opacity={prog(f, c.mistake, 14)} />
					<Letters x={905} y={462} letters={['A', 'C', 'C', 'G']} at={c.mistake + 8} />
					<Letters x={905} y={562} letters={['A', 'C', 'C', 'G']} at={c.mistake + 18} flip={c.copying + 30} />
					<text x={880} y={410} textAnchor="start" opacity={prog(f, c.mistake + 8, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>original</text>
					<text x={880} y={510} textAnchor="start" opacity={prog(f, c.mistake + 18, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>copy</text>
				</Overlay>
				<Hand at={c.mut} x={620} y={790} size={56} color={AMBER_INK}>mutation: a change in the base order</Hand>
				<Hand at={c.mistake + 4} x={96} y={215} size={44} color={INK_SOFT} w={640}>one chromosome, copied: two sister chromatids</Hand>
			</div>
			{/* B: where the mistake ends up */}
			<div style={{opacity: sB, position: 'absolute', inset: 0}}>
				<Overlay>
					<SmallCell x={330} y={540} dup={1} marked o={prog(f, c.ends - 6, 12)} />
					<Arrow x1={440} y1={500} x2={660} y2={380} at={c.ends} color={INK_SOFT} />
					<Arrow x1={440} y1={580} x2={660} y2={700} at={c.ends + 4} color={INK_SOFT} />
					<SmallCell x={780} y={360} marked o={prog(f, c.ends + 14, 14)} />
					<SmallCell x={780} y={700} o={prog(f, c.ends + 18, 14)} />
					<Arrow x1={880} y1={330} x2={1060} y2={260} at={c.then} color={AMBER_INK} />
					<Arrow x1={880} y1={390} x2={1060} y2={470} at={c.then + 4} color={AMBER_INK} />
					<SmallCell x={1160} y={250} r={72} marked o={prog(f, c.then + 12, 14)} />
					<SmallCell x={1160} y={480} r={72} marked o={prog(f, c.then + 16, 14)} />
					<Arrow x1={1250} y1={225} x2={1380} y2={190} at={c.divides - 20} color={AMBER_INK} dash="3 12" />
					<Arrow x1={1250} y1={505} x2={1380} y2={540} at={c.divides - 16} color={AMBER_INK} dash="3 12" />
					<SmallCell x={1500} y={170} r={52} marked o={prog(f, c.divides - 8, 14)} />
					<SmallCell x={1500} y={560} r={52} marked o={prog(f, c.divides - 4, 14)} />
				</Overlay>
				<Cen at={c.ends + 20} x={780} y={800} w={400} size={44} color={INK_SOFT}>a clean copy</Cen>
				<Cen at={c.ends + 20} x={780} y={470} w={300} size={44} color={AMBER_INK}>the mistake</Cen>
				<Hand at={c.divides + 6} x={560} y={850} size={54} color={AMBER_INK}>one new cell, then its descendants</Hand>
			</div>
			{/* C: both chromatids to the same end (the clean coded model in its own panel) */}
			<div style={{opacity: sC, position: 'absolute', inset: 0}}>
				<Overlay>
					<Panel x={440} y={196} w={1040} h={700} />
					<HCell cx={CX} cy={CY} rx={RX + 40} ry={RY} sw={4} />
					<circle cx={PLp} cy={CY} r={8} fill="#9a8a6a" />
					<circle cx={PRp} cy={CY} r={8} fill="#9a8a6a" />
					{CH.map((ch, i) => {
						const o = offs(i);
						const ax = CX + o.xa, ay = my(i) + o.ya, bx = CX + o.xb, by = my(i) + o.yb;
						const toB = i === 0 ? clamp01(e * 5) : 0;
						return (
							<g key={'f' + i}>
								<line x1={PLp} y1={CY} x2={ax - 4} y2={ay} stroke="#9a8a6a" strokeWidth={2.6} opacity={0.85 * (1 - toB)} />
								{i === 0 ? <line x1={PRp} y1={CY} x2={ax + 4} y2={ay} stroke="#9a8a6a" strokeWidth={2.6} opacity={0.85 * toB} /> : null}
								<line x1={PRp} y1={CY} x2={bx + 4} y2={by} stroke="#9a8a6a" strokeWidth={2.6} opacity={0.85} />
							</g>
						);
					})}
					{CH.map((ch, i) => {
						const o = offs(i);
						const col: HCol = hcol(ch.color);
						const len = CL[ch.kind as 'L' | 'S'];
						if (o.sep < 0.05) return <HChrom key={i} x={CX} y={my(i)} len={len} w={CW} col={col} dup={1} hi={i === 0 ? glow : 0} />;
						return (
							<g key={i}>
								<HChrom x={CX + o.xa} y={my(i) + o.ya} len={len} w={CW} col={col} hi={i === 0 ? glow : 0} />
								<HChrom x={CX + o.xb} y={my(i) + o.yb} len={len} w={CW} col={col} hi={i === 0 ? glow : 0} />
							</g>
						);
					})}
					<PenTap pts={rightPts} at={[0, 1, 2, 3, 4].map(k => c.extra + 16 + k * 14)} badge={[46, -30]} out={c.short} showPen={false} />
					<PenTap pts={leftPts} at={[0, 1, 2].map(k => c.short + 16 + k * 14)} badge={[-46, -30]} showPen={false} />
					{/* the caution mark: a flat grey triangle */}
					<g opacity={prog(f, c.extra, 14)} transform={`translate(${CX},${CY - 268})`}>
						<path d="M0,-34 L36,28 L-36,28 Z" fill="#e8eaec" stroke={GREY} strokeWidth={6} strokeLinejoin="round" />
						<line x1={0} y1={-12} x2={0} y2={8} stroke={GREY} strokeWidth={7} strokeLinecap="round" />
						<circle cx={0} cy={19} r={3.6} fill={GREY} />
					</g>
					{/* the check: a magnifier sweeps across and flags the problem */}
					<g opacity={vis(f, c.checks, c.notall + 30, 8)} transform={`translate(${lerp(CX - 360, CX + 330, mag)},${CY + 300})`}>
						<circle r={34} fill="rgba(255,253,248,0.8)" stroke={AMBER_INK} strokeWidth={7} />
						<line x1={24} y1={24} x2={58} y2={58} stroke={AMBER_INK} strokeWidth={10} strokeLinecap="round" />
					</g>
					<g opacity={flagO} transform={`translate(${CX + 440},${CY + 140})`}>
						<line x1={0} y1={0} x2={0} y2={-80} stroke={INK} strokeWidth={6} strokeLinecap="round" />
						<path d="M0,-80 L56,-62 L0,-44 Z" fill={AMBER} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
					</g>
				</Overlay>
				<Hand at={c.two + 4} out={c.both + 10} x={96} y={290} size={46} w={330}>one chromosome, two chromatids</Hand>
				<Hand at={c.extra + 24} x={1510} y={290} size={64} color={AMBER_INK}>5 chromosomes</Hand>
				<Hand at={c.short + 8} x={96} y={290} size={64} color={AMBER_INK}>3 chromosomes</Hand>
				<Hand at={c.extra + 70} out={c.checks} x={1510} y={420} size={44} w={320} color={INK_SOFT}>one centromere, one chromosome</Hand>
				<Hand at={c.extra + 6} x={1510} y={190} size={44} w={320} color={INK_SOFT}>an extra chromosome</Hand>
				<Hand at={c.short + 4} x={96} y={200} size={44} w={330} color={INK_SOFT}>one short</Hand>
				<Hand at={c.checks + 50} x={CX + 410} y={CY + 250} size={44} color={GREY}>flagged</Hand>
			</div>
		</>
	);
};

