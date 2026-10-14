import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Bracket, BoardG, CellBody, Cell, CX, CY, DrawPath, Envelope, Fibre, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, LP_Ab, LT_aB, MC, MStrip, Overlay, PAIRED, PenTap, Pill, PP, Pole,
	POLE, prog, plateXY, S, Scribble, SplitCells, STRIP_SCROLL, SZ, Strand, TT, clamp01, discY, geomY, vis, SCATTER, CELL_FILL, CELL_LINE, letterFor, Coin,
} from './shared';
import {ZoomG} from './sB';
import {DCell} from './sD';

const KIND = ['L', 'L', 'S', 'S'] as const;
const SPEC: [Strand, Strand][] = [[PP, LP_Ab], [LT_aB, TT], [PP, PP], [TT, TT]];
const ease3 = Easing.inOut(Easing.cubic);
const kf = (f: number, fr: number[], v: number[]) => interpolate(f, fr, v, {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease3});

/** One metaphase I board in cell-centre coordinates. line 0 = paired spots, 1 = on the plate. */
const MetaBoard: React.FC<{cx: number; cy: number; k?: number; o?: number; o1: number; o2: number; line?: number; env?: number; fib?: number; poles?: number; hide?: number}> = ({cx, cy, k = 1, o = 1, o1, o2, line = 0, env = 1, fib = 0, poles = 0}) => {
	const f = useCurrentFrame();
	const pos = (i: number): [number, number] => {
		const pl = plateXY(i, o1, o2);
		return [lerp(PAIRED[i][0], pl[0], line), lerp(PAIRED[i][1], pl[1], line)];
	};
	return (
		<BoardG cx={cx} cy={cy} k={k} o={o}>
			<CellBody cx={0} cy={0} />
			<Envelope cx={0} cy={0} r={262} p={env} />
			{poles > 0 ? <>
				<g transform={`translate(${-POLE},0) scale(${poles})`}><circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle r={6} fill={AMBER_INK} /></g>
				<g transform={`translate(${POLE},0) scale(${poles})`}><circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle r={6} fill={AMBER_INK} /></g>
			</> : null}
			{[0, 1, 2, 3].map(i => {
				const [x, y] = pos(i);
				const left = x < 0 || (Math.abs(x) < 1 && (i === 0 || i === 2));
				const dy = discY(y, KIND[i]);
				return <Fibre key={i} x1={left ? -POLE : POLE} y1={0} x2={x + (left ? -3 : 3)} y2={dy} p={fib} o={1} />;
			})}
			{[0, 1, 2, 3].map(i => {
				const [x, y] = pos(i);
				return <MC key={i} x={x} y={y} kind={KIND[i]} a={SPEC[i][0]} b={SPEC[i][1]} />;
			})}
		</BoardG>
	);
};

// ---------- 6a. Metaphase I: the pairs line up ----------
export const SceneMetaphaseOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('metaphase-one-line-up'), {
		end: 'At the end', pro: 'prophase one', brk: 'breaks down', meta: 'in metaphase one', line: 'line up', across: 'across the middle', one: 'one partner', each: 'each end',
	});
	// pull back from the crossing-over close-up, then the board
	const zp = 1 - prog(f, 0, 40);
	const line = prog(f, c.line, 58);
	return (
		<>
			<Heading items={[[0, 'Metaphase I: the pairs line up']]} size={60} />
			<Overlay>
				<ZoomG zp={zp}>
					<MetaBoardInner line={line} env={prog(f, c.brk, 52)} fib={0.5 * prog(f, c.brk + 36, 56) + 0.5 * prog(f, c.line + 10, 50)} poles={prog(f, c.brk + 34, 14)} otherO={1 - 0.85 * zp} />
				</ZoomG>
			</Overlay>
			<Pill at={c.across + 40} x={CX + 100} y={CY - 100} size={38}>one homologous pair</Pill>
			<Pill at={c.across + 46} x={CX + 100} y={CY + 138} size={38}>one homologous pair</Pill>
			<MStrip at={[-100, c.meta, null, null, null, null, null, null]} active={f >= c.meta ? 1 : 0} />
		</>
	);
};

/** The 6a board drawn in absolute space (cell centre CX,CY) for the zoomed pull-back. */
const MetaBoardInner: React.FC<{line: number; env: number; fib: number; poles: number; otherO: number}> = ({line, env, fib, poles, otherO}) => {
	const pos = (i: number): [number, number] => {
		const pl = plateXY(i, -1, -1);
		return [CX + lerp(PAIRED[i][0], pl[0], line), CY + lerp(PAIRED[i][1], pl[1], line)];
	};
	return (
		<>
			<CellBody />
			<Envelope r={262} p={env} />
			{poles > 0 ? <>
				<g transform={`translate(${CX - POLE},${CY}) scale(${poles})`}><circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle r={6} fill={AMBER_INK} /></g>
				<g transform={`translate(${CX + POLE},${CY}) scale(${poles})`}><circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle r={6} fill={AMBER_INK} /></g>
			</> : null}
			{[0, 1, 2, 3].map(i => {
				const [x, y] = pos(i);
				const left = i === 0 || i === 2;
				return <Fibre key={i} x1={CX + (left ? -POLE : POLE)} y1={CY} x2={x + (left ? -3 : 3)} y2={discY(y, KIND[i])} p={fib} />;
			})}
			{[0, 1, 2, 3].map(i => {
				const [x, y] = pos(i);
				return <MC key={i} x={x} y={y} kind={KIND[i]} a={SPEC[i][0]} b={SPEC[i][1]} o={i < 2 ? 1 : otherO} />;
			})}
		</>
	);
};

// ---------- 6b. Chance and independent assortment ----------
export const SceneAssortment: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('independent-assortment'), {
		chance: 'is chance', each: 'each pair decides', here: 'Here plum', left: 'face left', another: 'Another cell', teal: 'teal short', ia: 'independent assortment',
	});
	const o1 = kf(f, [c.chance + 6, c.chance + 26, c.chance + 46], [-1, 1, -1]);
	const o2 = kf(f, [c.each + 6, c.each + 26, c.each + 46], [-1, 1, -1]);
	const sh = prog(f, c.another, 44);
	const k = lerp(1, 0.62, sh);
	const cx1 = lerp(CX, 520, sh), cy1 = lerp(CY, 480, sh);
	const ghost = prog(f, c.another + 14, 24);
	const o2g = kf(f, [c.teal - 30, c.teal], [-1, 1]);
	return (
		<>
			<Heading items={[[0, 'Which way does each pair face?']]} size={60} />
			<Overlay>
				<MetaBoard cx={cx1} cy={cy1} k={k} o1={o1} o2={o2} line={1} env={1} fib={1} poles={1} />
				<g opacity={ghost}><MetaBoard cx={1400} cy={480} k={0.62} o1={-1} o2={o2g} line={1} env={1} fib={1} poles={1} /></g>
				{/* coins decide the direction, one pair at a time */}
				<Coin1 f={f} x={cx1} y={cy1 - 276 * k} from={c.chance} to={c.chance + 50} o={1 - sh} />
				<Coin1 f={f} x={cx1} y={cy1 + 240 * k} from={c.each} to={c.each + 50} o={1 - sh} />
			</Overlay>
			<Hand at={c.here} x={cx1 - 200} y={700} size={50} w={400} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>line-up 1</span></Hand>
			<Hand at={c.another + 30} x={1200} y={700} size={50} w={400} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>line-up 2</span></Hand>
			<Hand at={c.ia} x={CX - 480} y={742} size={92} w={960}><span style={{display: 'block', textAlign: 'center'}}>independent assortment</span></Hand>
			<Hand at={c.ia + 24} x={CX - 480} y={838} size={36} w={960} color={INK}><span style={{display: 'block', textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 600}}>each pair lines up independently of the other pairs</span></Hand>
			<MStrip at={[-100, -100, null, null, null, null, null, null]} active={1} />
		</>
	);
};
const Coin1: React.FC<{f: number; x: number; y: number; from: number; to: number; o: number}> = ({x, y, from, to, o}) => <Coin x={x} y={y} from={from} to={to} face="P" o={o} />;

// ---------- 7. Anaphase I and telophase I ----------
const END: [number, number][] = [[-340, -40], [340, -40], [-250, 50], [250, 50]];
const FIN: [number, number][] = [[-280, -40], [280, -40], [-190, 50], [190, 50]];
export const SceneFirstDivision: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('first-division'), {
		ana: 'In anaphase one', pull: 'the fibres pull', apart: 'apart', dont: 'centromeres do not', each: 'Each end', kind: 'one of each kind', set: ['one set', 1], telo: 'Telophase and', fin: 'finish the first', two: 'there are two', half: 'half the chromosome', that: 'That is how',
	});
	const a = prog(f, c.pull, 110);
	const pinch = prog(f, c.fin, 72);
	const drift = prog(f, c.fin + 50, 40);
	const d = lerp(0, 235, pinch);
	const pos = (i: number): [number, number] => {
		const pl = plateXY(i, -1, -1);
		const base: [number, number] = [lerp(pl[0], END[i][0], a), lerp(pl[1], END[i][1], a)];
		return [CX + lerp(base[0], FIN[i][0], drift), CY + lerp(base[1], FIN[i][1], drift)];
	};
	const fibO = 1 - prog(f, c.fin - 30, 20);
	const penL: [number, number][] = [0, 2].map(i => [pos(i)[0], discY(pos(i)[1], KIND[i])]);
	const penR: [number, number][] = [1, 3].map(i => [pos(i)[0], discY(pos(i)[1], KIND[i])]);
	return (
		<>
			<Heading items={[[0, 'Meiosis I: the first division']]} size={60} />
			<Overlay>
				{pinch < 0.02 ? <CellBody /> : <SplitCells d={d} />}
				{/* ghost parent for the halving bracket */}
				<g opacity={prog(f, c.half, 16)}>
					<Cell cx={CX} cy={240} rx={84} ry={58} />
					{[-30, -10, 10, 30].map((xx, i) => <rect key={i} x={CX + xx - 3} y={216} width={6} height={50} rx={3} fill={i % 2 ? '#2b9a8e' : '#a8508f'} opacity={0.6} />)}
					<text x={CX + 112} y={256} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>parent: 4</text>
					<Arrow x1={CX - 70} y1={288} x2={CX - 235} y2={352} at={c.half} color={AMBER_INK} width={5} />
					<Arrow x1={CX + 70} y1={288} x2={CX + 235} y2={352} at={c.half + 6} color={AMBER_INK} width={5} />
				</g>
				{/* poles and fibres */}
				{pinch < 0.5 ? <>
					<g opacity={fibO}>
						<circle cx={CX - POLE} cy={CY} r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle cx={CX - POLE} cy={CY} r={6} fill={AMBER_INK} />
						<circle cx={CX + POLE} cy={CY} r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle cx={CX + POLE} cy={CY} r={6} fill={AMBER_INK} />
						{[0, 1, 2, 3].map(i => <Fibre key={i} x1={CX + (i % 2 === 0 ? -POLE : POLE)} y1={CY} x2={pos(i)[0] + (i % 2 === 0 ? -3 : 3)} y2={discY(pos(i)[1], KIND[i])} p={1} />)}
					</g>
				</> : null}
				{[0, 1, 2, 3].map(i => <MC key={i} x={pos(i)[0]} y={pos(i)[1]} kind={KIND[i]} a={SPEC[i][0]} b={SPEC[i][1]} />)}
				{/* one of each kind: one set at each end */}
				<g opacity={vis(f, c.each, c.telo - 20, 12)}>
					<Bracket x1={CX - 400} x2={CX - 200} y={CY + 168} at={c.kind} color={AMBER_INK} />
					<Bracket x1={CX + 200} x2={CX + 400} y={CY + 168} at={c.kind + 6} color={AMBER_INK} />
				</g>
								<g opacity={vis(f, c.set, c.telo - 12, 10)}>
					<Scribble cx={CX - 296} cy={CY} rx={130} ry={150} at={c.set} color={AMBER_INK} seed={4} />
					<Scribble cx={CX + 296} cy={CY} rx={130} ry={150} at={c.set + 10} color={AMBER_INK} seed={9} />
				</g>
				{/* the centromere stays whole */}
				<g opacity={vis(f, c.dont + 22, c.telo - 6, 10)}><Scribble cx={pos(0)[0]} cy={discY(pos(0)[1], 'L')} rx={30} ry={30} at={c.dont + 22} color={AMBER_INK} seed={6} /></g>
				<PenTap pts={penL} at={[c.two + 20, c.two + 38]} badge={[40, -30]} out={c.half + 30} />
				<PenTap pts={penR} at={[c.two + 60, c.two + 78]} badge={[-40, -30]} showPen={false} />
			</Overlay>
			<Pill at={c.dont + 4} out={c.each + 10} x={CX - 400} y={168} size={42}>centromere stays whole: chromatids not separated</Pill>
			<Hand at={c.kind + 12} out={c.telo - 10} x={CX - 420} y={CY + 186} size={34} w={250} color={AMBER_INK}>long, short: one of each kind</Hand>
			<Hand at={c.kind + 18} out={c.telo - 10} x={CX + 170} y={CY + 186} size={34} w={250} color={AMBER_INK}>long, short: one of each kind</Hand>
			<Pill at={c.set + 8} out={c.telo - 10} x={CX - 440} y={CY - 250} size={40}>one set</Pill>
			<Pill at={c.set + 16} out={c.telo - 10} x={CX + 330} y={CY - 250} size={40}>one set</Pill>
			<Pill at={c.telo + 24} out={c.fin + 20} x={CX - 130} y={168} size={42}>cytokinesis</Pill>
			<Hand at={c.two + 8} x={CX - 235 - 220} y={CY + 192} size={34} w={440} color={INK}><span style={{display: 'block', textAlign: 'center'}}>2 chromosomes (count the centromeres)</span></Hand>
			<Hand at={c.two + 56} x={CX + 235 - 220} y={CY + 192} size={34} w={440} color={INK}><span style={{display: 'block', textAlign: 'center'}}>2 chromosomes (count the centromeres)</span></Hand>
			<GreyTag at={c.two + 30} x={CX - 235 - 80} y={CY + 266} text="4 chromatids" size={26} />
			<GreyTag at={c.two + 66} x={CX + 235 - 80} y={CY + 266} text="4 chromatids" size={26} />
			<Hand at={c.half + 6} x={1300} y={176} size={42} w={560} color={AMBER_INK}>half the number: haploid (each chromosome still doubled)</Hand>
			<MStrip at={[-100, -100, c.ana, c.telo, null, null, null, null]} active={f >= c.telo ? 3 : 2} />
		</>
	);
};

// ---------- 8. Meiosis II ----------
const LROW = {long: -120, short: 112};
const LCOMP = {long: -35, short: 70};
type Strands = {la: Strand; lb: Strand; sa: Strand; sb: Strand};
const LEFT_S: Strands = {la: PP, lb: LP_Ab, sa: PP, sb: PP};
const RIGHT_S: Strands = {la: LT_aB, lb: TT, sa: TT, sb: TT};
const ROW_X = [465, 795, 1125, 1455];
const ROW_Y = 640;
const ROW_K = 0.75;

/** One cell going through meiosis II. Everything is in a cell-centre frame scaled by k. */
const Meio2Cell: React.FC<{cx: number; cy: number; k: number; rx: number; ry: number; str: Strands; pre: [[number, number], [number, number]]; line: number; fib: number; split: number; apart: number; pinch: number; row: number; rowX: [number, number]; poles: number}> = ({cx, cy, k, rx, ry, str, pre, line, fib, split, apart, pinch, row, rowX, poles}) => {
	const sepL = lerp(14 * split, 125, apart), sepS = lerp(14 * split, 181, apart);
	const cl: [number, number] = [lerp(pre[0][0], 0, line), lerp(pre[0][1], LROW.long, line)];
	const cs: [number, number] = [lerp(pre[1][0], 0, line), lerp(pre[1][1], LROW.short, line)];
	const yl = lerp(cl[1], LCOMP.long, apart), ys = lerp(cs[1], LCOMP.short, apart);
	const xl = cl[0] * (1 - apart), xs = cs[0] * (1 - apart);
	const sepLv = split > 0 ? sepL : 0, sepSv = split > 0 ? sepS : 0;
	const fibO = 1;
	if (pinch >= 1) {
				const dcx = (side: number) => lerp(cx + side * 210 * k, rowX[side < 0 ? 0 : 1], row);
		const dcy = lerp(cy, ROW_Y, row);
		const dk = lerp(k, ROW_K, row);
		return (
			<>
				{[-1, 1].map(side => (
					<DCell key={side} cx={dcx(side)} cy={dcy} k={dk} long={side < 0 ? str.la : str.lb} short={side < 0 ? str.sa : str.sb} side={side as 1 | -1} />
				))}
			</>
		);
	}
	return (
		<g transform={`translate(${cx},${cy}) scale(${k})`}>
			{pinch > 0.01 ? <SplitCells cx={0} cy={0} rx={rx} ry={ry} d={lerp(0, 210, pinch)} /> : <ellipse cx={0} cy={0} rx={rx} ry={ry} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={6} />}
			{poles > 0 && pinch < 0.3 ? <>
				<g transform={`translate(${-360},0) scale(${poles})`}><circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle r={6} fill={AMBER_INK} /></g>
				<g transform={`translate(${360},0) scale(${poles})`}><circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} /><circle r={6} fill={AMBER_INK} /></g>
				<Fibre x1={-360} y1={0} x2={-(15 + sepLv) * SZ + xl} y2={discY(yl, 'L')} p={fib} o={fibO} />
				<Fibre x1={360} y1={0} x2={(15 + sepLv) * SZ + xl} y2={discY(yl, 'L')} p={fib} o={fibO} />
				<Fibre x1={-360} y1={0} x2={-(15 + sepSv) * SZ + xs} y2={discY(ys, 'S')} p={fib} o={fibO} />
				<Fibre x1={360} y1={0} x2={(15 + sepSv) * SZ + xs} y2={discY(ys, 'S')} p={fib} o={fibO} />
			</> : null}
			<MC x={xl} y={yl} kind="L" a={str.la} b={str.lb} sep={sepLv} />
			<MC x={xs} y={ys} kind="S" a={str.sa} b={str.sb} sep={sepSv} />
		</g>
	);
};

export const SceneSecondDivision: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('second-division'), {
		straight: 'goes straight', second: 'second division', gam: 'A gamete cannot', again: 'divides again', share: 'share out', m2: 'metaphase two', own: 'each chromosome lines', own2: 'on its own', a2: 'anaphase two', split: 'the centromeres split', pulled: 'pulled apart', because: 'Because of crossing', differ: 'can differ', cells: 'cells get different', chrom: ['chromosomes', 2],
	});
	const grow = prog(f, c.gam, 54);
	const rx = lerp(235, 420, grow), ry = lerp(177, 280, grow);
	const lcx = lerp(CX - 235, CX, grow), lcy = CY;
	const rcx = lerp(CX + 235, 1650, grow), rcy = lerp(CY, 280, grow), rk = lerp(1, 0.3, grow);
	const line = prog(f, c.own, 52);
	const split = prog(f, c.split, 14);
	const apart = prog(f, c.pulled - 10, 70);
	const pinch = prog(f, c.cells, 56);
	const fib = prog(f, c.m2 + 8, 44);
	const poles = prog(f, c.m2, 14);
	// right cell, sped up in the background
	const R0 = c.cells - 120;
	const rline = prog(f, R0, 24), rsplit = prog(f, R0 + 26, 8), rapart = prog(f, R0 + 34, 34), rpinch = prog(f, R0 + 70, 40), rfib = prog(f, R0 + 4, 20);
	const rowT = prog(f, c.cells + 66, 46);
	const preL: [[number, number], [number, number]] = [[-45, -40], [45, 50]];
	const preR: [[number, number], [number, number]] = [[45, -40], [-45, 50]];
	// right cell: long = LT (outer right), short = ST (inner left)
	const strip = prog(f, c.straight, 36) * STRIP_SCROLL;
	return (
		<>
			<Heading items={[[0, 'Meiosis II: the second division']]} size={60} />
			<Overlay>
				<Meio2Cell cx={lcx} cy={lcy} k={1} rx={rx} ry={ry} str={LEFT_S} pre={preL} line={line} fib={fib} split={split} apart={apart} pinch={pinch} row={rowT} rowX={[ROW_X[0], ROW_X[1]]} poles={poles} />
				<Meio2Cell cx={rcx} cy={rcy} k={rk} rx={rx} ry={ry} str={RIGHT_S} pre={preR} line={rline} fib={rfib} split={rsplit} apart={rapart} pinch={rpinch} row={rowT} rowX={[ROW_X[2], ROW_X[3]]} poles={prog(f, R0 - 2, 8)} />
			</Overlay>
			<GreyTag at={c.straight} out={c.gam} x={CX - 340} y={168} text="no copying between the divisions" size={36} />
			<Overlay><g opacity={vis(f, c.straight + 8, c.gam, 10)}><DrawPath d={`M${CX - 372},182 L${CX - 346},214 M${CX - 346},182 L${CX - 372},214`} at={c.straight + 6} dur={10} color="#7a8088" width={6} /></g></Overlay>
			<GreyTag at={c.own2} out={c.a2} x={1380} y={560} text="like mitosis, but only one set" size={30} />
			<Overlay>
				<g opacity={prog(f, c.because + 6, 14) * (1 - prog(f, c.cells + 40, 12))}>
					<Scribble cx={CX - 165} cy={CY - 30} rx={42} ry={130} at={c.because + 6} color={AMBER_INK} seed={3} />
					<Scribble cx={CX + 165} cy={CY - 30} rx={42} ry={130} at={c.because + 20} color={AMBER_INK} seed={8} />
					<text x={CX - 165} y={CY - 176} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={AMBER_INK}>A B</text>
					<text x={CX + 165} y={CY - 176} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={AMBER_INK}>A b</text>
				</g>
			</Overlay>
			<Hand at={c.differ} out={c.cells + 50} x={1380} y={640} size={46} w={470}>different pieces: the cells get different chromosomes</Hand>
			<MStrip at={[-100, -100, -100, -100, c.second + 6, c.m2, c.a2, c.cells + 30]} active={f >= c.cells + 30 ? 7 : f >= c.a2 ? 6 : f >= c.m2 ? 5 : 4} scroll={strip} />
		</>
	);
};
