import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Enter} from '../../kit';
import {
	AMBER_INK, CELL_FILL, CELL_LINE, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, Overlay, PLUM, prog, S, TEALC, Num, Cen, Scribble,
} from './shared';
import {AN, CD, HCell, HChrom, PL, Recombs, Stage, toS} from '../bio-m5-b05a/cd';
import type {Base, HCol, Segs} from '../bio-m5-b05a/cd';

// ---------- 9. Four cells (revision 7: the painted four-cell plate; letters beside each cell) ----------
// The cells follow line-up 2 (plum long with teal short). Top-left A B d, bottom-left A b d (its long chromosome carries
// the teal segment), top-right a B D (pink segment), bottom-right a b D. Crossing over off: the segments fade out.
const FB: Base = {cx: 860, cy: 560, size: 760};
const FCAM = {zoom: 1, fx: 1000, fy: 1000};
const ON = ['A B d', 'A b d', 'a B D', 'a b D'];
const OFF = ['A B d', 'A B d', 'a b D', 'a b D'];
/** TL, BL, TR, BR in the plate's cell order (TL, TR, BL, BR). */
const ORDER = [0, 2, 1, 3];

const Toggle: React.FC<{x: number; y: number; on: number; at: number}> = ({x, y, on, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<g opacity={p} transform={`translate(${x},${y})`}>
			<rect x={0} y={0} width={110} height={54} rx={27} fill={on > 0.5 ? '#e7c577' : '#d4d0c6'} stroke={AMBER_INK} strokeWidth={4} />
			<circle cx={lerp(27, 83, on)} cy={27} r={21} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
			<text x={125} y={40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>crossing over: {on > 0.5 ? 'on' : 'off'}</text>
		</g>
	);
};

export const SceneFourCells: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('four-cells'), {
		one: 'So one cell', four: 'four haploid', letters: 'the letters', differ: 'all four differ', now: 'Now switch', off: 'over off', without: 'Without it', kinds: 'only two kinds', twice: 'each twice',
	});
	const offP = prog(f, c.off + 18, 14) * (1 - prog(f, 392, 14));
	const onK = 1 - offP;
	const fem = prog(f, 404, 14);
	const P = (x: number, y: number) => toS(FCAM, x, y, FB);
	const cellC = AN.fourCells.nuc.map(([x, y]) => P(x, y));
	// label beside each cell: left cells to the left, right cells to the right
	const lab = (k: number) => {
		const ci = ORDER[k];
		const [x, y] = cellC[ci];
		const left = ci % 2 === 0;
		return {x: left ? x - 210 - 230 : x + 210, y: y - 36};
	};
	return (
		<>
			<Heading items={[[0, 'One cell, four haploid cells']]} size={60} />
			<Overlay>
				<Stage cam={FCAM} base={FB} o={prog(f, 0, 14)} win={null} srcs={[CD('four-cells')]}>
					<PL src={CD('four-cells')} />
					<Recombs plate="four-cells" o={onK} />
				</Stage>
				<g opacity={prog(f, c.kinds, 12) * (1 - prog(f, 392, 12))}>
					<Scribble cx={(cellC[0][0] + cellC[2][0]) / 2} cy={(cellC[0][1] + cellC[2][1]) / 2} rx={200} ry={380} at={c.kinds} color={AMBER_INK} seed={3} />
					<Scribble cx={(cellC[1][0] + cellC[3][0]) / 2} cy={(cellC[1][1] + cellC[3][1]) / 2} rx={200} ry={380} at={c.kinds + 6} color={AMBER_INK} seed={8} />
				</g>
				<Toggle x={96} y={190} on={onK} at={c.now} />
			</Overlay>
			{[0, 1, 2, 3].map(k => {
				const l = lab(k);
				return (
					<React.Fragment key={k}>
						<Hand at={c.letters + k * 8} x={l.x} y={l.y} size={58} w={230} color={INK}><span style={{display: 'block', textAlign: ORDER[k] % 2 === 0 ? 'right' : 'left', opacity: onK}}>{ON[k]}</span></Hand>
						<Hand at={c.off + 24} x={l.x} y={l.y} size={58} w={230} color={INK}><span style={{display: 'block', textAlign: ORDER[k] % 2 === 0 ? 'right' : 'left', opacity: offP}}>{OFF[k]}</span></Hand>
					</React.Fragment>
				);
			})}
			<Hand at={c.differ + 20} out={c.off + 14} x={96} y={940} size={44} w={1200}>4 different haploid cells (in this cell)</Hand>
			<Hand at={c.twice} out={392} x={96} y={940} size={44} w={1200} color={AMBER_INK}>two kinds, each twice</Hand>
			<Hand at={396} x={96} y={940} size={44} w={1200}>back on: 4 different haploid cells</Hand>
			<GreyTag at={c.four} x={1290} y={196} text="each cell: haploid, 2 chromosomes" size={28} />
			{/* screen-only: not every meiosis makes four gametes */}
			<Overlay>
				<g opacity={fem}>
					{[0, 1, 2, 3].map(i => <circle key={i} cx={1560 + i * 46} cy={712} r={17} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={3.5} />)}
					<circle cx={1570} cy={810} r={30} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{[1, 2, 3].map(i => <circle key={i} cx={1610 + i * 40} cy={816} r={8} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={3} strokeDasharray="3 3" />)}
				</g>
			</Overlay>
			<GreyTag at={404} x={1560} y={630} text="male: four sperm" size={26} />
			<Enter at={410} style={{position: 'absolute', left: 1560, top: 850, width: 300}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24, color: '#5d646b', background: '#e8eaec', border: '3px solid #8d949b', borderRadius: 14, padding: '4px 16px', lineHeight: 1.2}}>female: one egg, plus polar bodies</div>
			</Enter>
		</>
	);
};

// ---------- 10. Tracking the numbers (revision 7: mini cells are the clean coded model) ----------
const BX = [800, 1090, 1380, 1670];
const ICY = 305;
const MLEN = {L: 64, S: 42};
const MW = 9;
const RECP: Segs = [['P', 0], ['T', 0.66]];
const RECT: Segs = [['T', 0], ['P', 0.66]];
/** A mini chromosome: kind, colour, copied or not; seg pieces for the crossed-over chromatid. */
const Mini: React.FC<{x: number; y: number; kind: 'L' | 'S'; col: HCol; dup?: number; s?: number; segB?: Segs; segA?: Segs}> = ({x, y, kind, col, dup = 0, s = 1, segA, segB}) => (
	<HChrom x={x} y={y} len={MLEN[kind] * s} w={MW * s} col={col} dup={dup} segA={segA} segB={segB} />
);
export const SceneTracking: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('tracking'), {
		track: "Let's track", model: 'our model cell', four: 'starts with four', still: 'still has four', centro: 'count centromeres', eight: 'eight chromatids', copying: 'After copying', first: 'the first division', two1: 'holds two chromosomes', four2: 'four chromatids', second: 'After the second', two2: ['holds two chromosomes', 2], none: 'none has a sister', apart: 'pulled apart', human: 'A human cell', h46: '46 chromosomes', h23: ['23', 1], fourCells: ['four cells', 2],
	});
	const op = (a: number, d = 12) => prog(f, a, d);
	const hu2 = c.h46 + 14, hu3 = c.h23 - 6, hu4 = c.fourCells - 4;
	const dupAt = prog(f, c.copying + 6, 24);
	const four = (x0: number, dup: number) => (
		<>
			<Mini x={x0 - 42} y={ICY} kind="L" col="P" dup={dup} />
			<Mini x={x0 - 14} y={ICY} kind="L" col="T" dup={dup} />
			<Mini x={x0 + 14} y={ICY} kind="S" col="P" dup={dup} />
			<Mini x={x0 + 42} y={ICY} kind="S" col="T" dup={dup} />
		</>
	);
	return (
		<>
			<Heading items={[[0, 'Tracking the numbers']]} size={60} />
			{/* headers */}
			<Cen at={c.track + 24} x={BX[0]} y={150} size={44} color={INK_SOFT}>start</Cen>
			<Cen at={c.copying} x={BX[1]} y={150} size={44} color={INK_SOFT}>after copying</Cen>
			<Cen at={c.first - 18} x={BX[2]} y={140} size={44} color={INK_SOFT} w={290}>after division 1<br /><span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>(each cell)</span></Cen>
			<Cen at={c.second} x={BX[3]} y={140} size={44} color={INK_SOFT} w={290}>after division 2<br /><span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>(each cell)</span></Cen>
			{/* row labels */}
			<Cen at={c.four - 20} x={330} y={428} size={44} w={460} color={INK_SOFT}><span style={{display: 'block', textAlign: 'right'}}>chromosomes in the cell</span></Cen>
			<Cen at={c.four - 10} x={330} y={528} size={40} w={460} color={INK_SOFT}><span style={{display: 'block', textAlign: 'right'}}>chromatids (joined copies only)</span></Cen>
			<Cen at={c.human} x={330} y={748} size={44} w={460} color={AMBER_INK}><span style={{display: 'block', textAlign: 'right'}}>human cell: chromosomes</span></Cen>
			<Cen at={c.human + 6} x={330} y={848} size={40} w={460} color={AMBER_INK}><span style={{display: 'block', textAlign: 'right'}}>chromatids</span></Cen>
			<Overlay>
				{/* mini cells: start, after copying, two cells after division 1, four cells after division 2 */}
				<g opacity={op(c.model)}><HCell cx={BX[0]} cy={ICY} rx={96} ry={66} sw={3} />{four(BX[0], 0)}</g>
				<g opacity={op(c.copying + 4)}><HCell cx={BX[1]} cy={ICY} rx={96} ry={66} sw={3} />{four(BX[1], dupAt)}</g>
				<g opacity={op(c.first)}>
					<HCell cx={BX[2] - 70} cy={ICY} rx={62} ry={56} sw={3} />
					<Mini x={BX[2] - 84} y={ICY} kind="L" col="P" dup={1} s={0.85} segB={RECP} />
					<Mini x={BX[2] - 52} y={ICY + 6} kind="S" col="T" dup={1} s={0.85} />
					<HCell cx={BX[2] + 70} cy={ICY} rx={62} ry={56} sw={3} />
					<Mini x={BX[2] + 56} y={ICY} kind="L" col="T" dup={1} s={0.85} segA={RECT} />
					<Mini x={BX[2] + 88} y={ICY + 6} kind="S" col="P" dup={1} s={0.85} />
				</g>
				<g opacity={op(c.second)}>
					{[{l: 'P', s: 'T', seg: undefined}, {l: 'P', s: 'T', seg: RECP}, {l: 'T', s: 'P', seg: RECT}, {l: 'T', s: 'P', seg: undefined}].map((m, i) => {
						const x = BX[3] + (i - 1.5) * 74;
						return (
							<g key={i}>
								<HCell cx={x} cy={ICY} rx={34} ry={42} sw={2.5} />
								<Mini x={x - 9} y={ICY} kind="L" col={m.l as HCol} s={0.62} segA={m.seg as Segs | undefined} />
								<Mini x={x + 10} y={ICY + 5} kind="S" col={m.s as HCol} s={0.62} />
							</g>
						);
					})}
				</g>
				{/* divider between the model and the human rows */}
				<line x1={96} x2={1830} y1={715} y2={715} stroke="#d8cdb6" strokeWidth={4} strokeDasharray="3 14" strokeLinecap="round" opacity={op(c.human, 16)} />
				{/* eight chromatid chips in column 2 */}
				{Array.from({length: 8}, (_, k) => {
					const p = prog(f, c.eight + k * 3, 10);
					const x = BX[1] - 98 + k * 28 + Math.floor(k / 2) * 4;
					return <g key={k} opacity={p} transform={`translate(0,${(1 - p) * -24})`}><rect x={x - 6} y={602} width={12} height={46} rx={6} fill={Math.floor(k / 2) % 2 === 0 ? PLUM : TEALC} stroke={INK} strokeWidth={2.5} /></g>;
				})}
			</Overlay>
			{/* model numbers */}
			<Num at={c.four + 12} x={BX[0]} y={420} text="4" size={92} />
			<Num at={c.four + 40} x={BX[0]} y={522} text="0" size={72} color={INK_SOFT} />
			<Num at={c.still + 8} x={BX[1]} y={420} text="4" size={92} />
			<Cen at={c.centro} x={BX[1]} y={364} size={38} w={280} color={AMBER_INK}>count centromeres</Cen>
			<Num at={c.eight + 10} x={BX[1]} y={522} text="8" size={72} color={INK} />
			<Num at={c.two1 + 8} x={BX[2]} y={420} text="2" size={92} />
			<Num at={c.four2 + 10} x={BX[2]} y={522} text="4" size={72} />
			<Num at={c.two2 + 6} x={BX[3]} y={420} text="2" size={92} />
			<Num at={c.none + 6} x={BX[3]} y={522} text="0" size={72} color={INK_SOFT} />
			<Cen at={c.four + 52} x={BX[0]} y={606} size={30} w={290} color={INK_SOFT} hand={false} weight={600}>none to count: one DNA molecule each</Cen>
			<Cen at={c.apart} x={BX[3]} y={606} size={30} w={290} color={INK_SOFT} hand={false} weight={600}>none: one DNA molecule each</Cen>
			{/* human row */}
			<Num at={c.h46} x={BX[0]} y={740} text="46" size={88} color={AMBER_INK} />
			<Num at={c.h46 + 6} x={BX[0]} y={844} text="0" size={68} color={INK_SOFT} />
			<Num at={hu2} x={BX[1]} y={740} text="46" size={88} color={AMBER_INK} />
			<Num at={hu2 + 6} x={BX[1]} y={844} text="92" size={68} color={AMBER_INK} />
			<Cen at={hu2 + 14} x={BX[1]} y={920} size={34} w={290} color={INK_SOFT}>46 x 2 = 92</Cen>
			<Num at={hu3} x={BX[2]} y={740} text="23" size={88} color={AMBER_INK} />
			<Num at={hu3 + 6} x={BX[2]} y={844} text="46" size={68} color={AMBER_INK} />
			<Cen at={hu3 + 14} x={BX[2]} y={920} size={34} w={290} color={INK_SOFT}>23 in each cell</Cen>
			<Num at={hu4} x={BX[3]} y={740} text="23" size={88} color={AMBER_INK} />
			<Num at={hu4 + 6} x={BX[3]} y={844} text="0" size={68} color={INK_SOFT} />
			<Cen at={hu4 + 14} x={BX[3]} y={920} size={34} w={290} color={INK_SOFT}>23 in each of 4 cells</Cen>
		</>
	);
};
