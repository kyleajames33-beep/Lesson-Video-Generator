import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Enter} from '../../kit';
import {
	AMBER, AMBER_INK, Arrow, Bracket, CELL_FILL, CELL_LINE, CREAM, CX, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, LP_Ab, LT_aB, MC, Overlay, PLUM, Pill, PP, prog, S, Strand, TEALC, TT, vis, clamp01,
	Cell, letterFor, Num, Cen,
} from './shared';

const labelOf = (long: Strand, short: Strand) => `${letterFor('L', 'top', long[0])} ${letterFor('L', 'bot', long[1])} ${letterFor('S', 'top', short[0])}`;

export const DCell: React.FC<{cx: number; cy: number; k: number; long: Strand; short: Strand; side: 1 | -1; o?: number}> = ({cx, cy, k, long, short, side, o = 1}) => (
	<g transform={`translate(${cx},${cy}) scale(${k})`} opacity={o}>
		<ellipse cx={0} cy={0} rx={210} ry={162} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={6} />
		<MC x={side < 0 ? 35 : -35} y={-35} kind="L" a={long} dup={0} />
		<MC x={side < 0 ? -35 : 35} y={70} kind="S" a={short} dup={0} />
	</g>
);

// ---------- 9. Four cells ----------
const ROW_X = [465, 795, 1125, 1455];
const ROW_Y = 640;
const ON: [Strand, Strand][] = [[PP, PP], [LP_Ab, PP], [LT_aB, TT], [TT, TT]];
const OFF: [Strand, Strand][] = [[PP, PP], [PP, PP], [TT, TT], [TT, TT]];
const SIDE: (1 | -1)[] = [-1, 1, -1, 1];

const Toggle: React.FC<{x: number; y: number; on: number; at: number}> = ({x, y, on, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<g opacity={p} transform={`translate(${x},${y})`}>
			<rect x={0} y={0} width={110} height={54} rx={27} fill={on > 0.5 ? '#e7c577' : '#d4d0c6'} stroke={AMBER_INK} strokeWidth={4} />
			<circle cx={lerp(54 + 0, 27, 1 - on) + (on > 0.5 ? 0 : 0)} cy={27} r={21} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
			<text x={125} y={40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={AMBER_INK}>crossing over: {on > 0.5 ? 'on' : 'off'}</text>
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
	const knob = 1 - offP;
	const fem = prog(f, 404, 14);
	const tgt = (i: number) => labelOf(ON[i][0], ON[i][1]);
	const tgo = (i: number) => labelOf(OFF[i][0], OFF[i][1]);
	return (
		<>
			<Heading items={[[0, 'One cell, four haploid cells']]} size={60} />
			<Overlay>
				<g opacity={prog(f, c.one, 14)}>
					<Cell cx={CX} cy={265} rx={96} ry={66} />
					<DrawPath d={`M${CX - 30},275 L${CX - 30},240 M${CX - 10},275 L${CX - 10},240 M${CX + 10},275 L${CX + 10},240 M${CX + 30},275 L${CX + 30},240`} at={c.one} dur={10} color={INK_SOFT} width={5} />
					<text x={CX + 126} y={278} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>the cell we followed</text>
					{ROW_X.map((x, i) => <Arrow key={i} x1={CX + (x - CX) * 0.22} y1={320} x2={x} y2={ROW_Y - 135} at={c.one + 8 + i * 4} color="#b9a98f" width={4} />)}
				</g>
				{ROW_X.map((x, i) => (
					<g key={i}>
						<DCell cx={x} cy={ROW_Y} k={0.75} long={ON[i][0]} short={ON[i][1]} side={SIDE[i]} o={onK} />
						<DCell cx={x} cy={ROW_Y} k={0.75} long={OFF[i][0]} short={OFF[i][1]} side={SIDE[i]} o={offP} />
					</g>
				))}
				<Bracket x1={ROW_X[0] - 140} x2={ROW_X[3] + 140} y={858} at={c.differ} color={AMBER_INK} />
				<g opacity={prog(f, c.kinds, 12) * (1 - prog(f, 392, 12))}>
					<Bracket x1={ROW_X[0] - 140} x2={ROW_X[1] + 140} y={858} at={c.kinds} color={AMBER_INK} />
					<Bracket x1={ROW_X[2] - 140} x2={ROW_X[3] + 140} y={858} at={c.kinds + 6} color={AMBER_INK} />
				</g>
				<Toggle x={96} y={230} on={knob} at={c.now} />
			</Overlay>
			{ROW_X.map((x, i) => (
				<React.Fragment key={i}>
					<Hand at={c.letters + i * 8} x={x - 140} y={772} size={58} w={280} color={INK}><span style={{display: 'block', textAlign: 'center', opacity: onK}}>{tgt(i)}</span></Hand>
					<Hand at={c.off + 24} x={x - 140} y={772} size={58} w={280} color={INK}><span style={{display: 'block', textAlign: 'center', opacity: offP}}>{tgo(i)}</span></Hand>
				</React.Fragment>
			))}
			<Hand at={c.differ + 20} out={c.off + 14} x={ROW_X[0] - 130} y={872} size={46} w={1050}>4 different haploid cells (in this cell)</Hand>
			<Hand at={c.twice} out={392} x={ROW_X[0] - 130} y={872} size={46} w={1100} color={AMBER_INK}>two kinds, each twice</Hand>
			<Hand at={396} x={ROW_X[0] - 130} y={872} size={46} w={1050}>back on: 4 different haploid cells</Hand>
			<GreyTag at={c.four} x={96} y={340} text="each cell: haploid, 2 chromosomes" size={28} />
			{/* screen-only: not every meiosis makes four gametes */}
			<Overlay>
				<g opacity={fem}>
					{[0, 1, 2, 3].map(i => <circle key={i} cx={1400 + i * 46} cy={212} r={17} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={3.5} />)}
					<circle cx={1410} cy={310} r={30} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{[1, 2, 3].map(i => <circle key={i} cx={1450 + i * 40} cy={316} r={8} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={3} strokeDasharray="3 3" />)}
				</g>
			</Overlay>
			<GreyTag at={404} x={1600} y={190} text="male: four sperm" size={26} />
			<Enter at={410} style={{position: 'absolute', left: 1600, top: 262, width: 280}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24, color: '#5d646b', background: '#e8eaec', border: '3px solid #8d949b', borderRadius: 14, padding: '4px 16px', lineHeight: 1.2}}>female: one egg and polar bodies that break down</div>
			</Enter>
		</>
	);
};

// ---------- 10. Tracking the numbers ----------
const BX = [800, 1090, 1380, 1670];
const MS = 0.2;
const ICY = 305;
export const SceneTracking: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('tracking'), {
		track: "Let's track", model: 'our model cell', four: 'starts with four', still: 'still has four', centro: 'count centromeres', eight: 'eight chromatids', copying: 'After copying', first: 'the first division', two1: 'holds two chromosomes', four2: 'four chromatids', second: 'After the second', two2: ['holds two chromosomes', 2], none: 'none has a sister', apart: 'pulled apart', human: 'A human cell', h46: '46 chromosomes', h23: ['23', 1], fourCells: ['four cells', 2],
	});
	const op = (a: number, d = 12) => prog(f, a, d);
	const hu2 = c.h46 + 14, hu3 = c.h23 - 6, hu4 = c.fourCells - 4;
	const mini = (col: number, kind: number) => {
		const x0 = BX[col];
		if (kind === 0) {
			return (
				<g opacity={op(c.model + (col === 0 ? 0 : 0))}>
					<ellipse cx={x0} cy={ICY} rx={96} ry={66} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{[-60, -20, 20, 60].map((xx, i) => <MC key={i} x={x0 + xx} y={ICY} kind={i < 2 ? 'L' : 'S'} a={i % 2 ? TT : PP} dup={0} s={MS} beads={0} />)}
				</g>
			);
		}
		return null;
	};
	const dupAt = prog(f, c.copying + 6, 24);
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
				{/* mini cells */}
				{mini(0, 0)}
				<g opacity={op(c.copying + 4)}>
					<ellipse cx={BX[1]} cy={ICY} rx={96} ry={66} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{[-60, -20, 20, 60].map((xx, i) => <MC key={i} x={BX[1] + xx} y={ICY} kind={i < 2 ? 'L' : 'S'} a={i % 2 ? TT : PP} dup={dupAt} s={MS} beads={0} />)}
				</g>
				<g opacity={op(c.first)}>
					{[-1, 1].map(sd => (
						<g key={sd}>
							<ellipse cx={BX[2] + sd * 70} cy={ICY} rx={62} ry={56} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
							<MC x={BX[2] + sd * 70 - 14 * sd} y={ICY - 4} kind="L" a={sd < 0 ? PP : LT_aB} b={sd < 0 ? LP_Ab : TT} s={0.19} beads={0} />
							<MC x={BX[2] + sd * 70 + 18 * sd} y={ICY + 8} kind="S" a={sd < 0 ? PP : TT} b={sd < 0 ? PP : TT} s={0.19} beads={0} />
						</g>
					))}
				</g>
				<g opacity={op(c.second)}>
					{[-3, -1, 1, 3].map((m, i) => (
						<g key={i}>
							<ellipse cx={BX[3] + m * 37} cy={ICY} rx={34} ry={40} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={3.5} />
							<MC x={BX[3] + m * 37 - 8} y={ICY - 2} kind="L" a={ON[i][0]} dup={0} s={0.13} beads={0} />
							<MC x={BX[3] + m * 37 + 10} y={ICY + 6} kind="S" a={ON[i][1]} dup={0} s={0.13} beads={0} />
						</g>
					))}
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
			<Cen at={c.apart} x={BX[3]} y={606} size={30} w={290} color={INK_SOFT} hand={false} weight={600}>none: undoubled again, one DNA molecule each</Cen>
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
