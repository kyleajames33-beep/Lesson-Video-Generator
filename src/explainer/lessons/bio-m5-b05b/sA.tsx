import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText} from '../../kit';
import {cues} from '../../cues';
import {EggDot, SpermDot} from '../bio-m5-b02a/shared';
import {
	AMBER, AMBER_INK, Arrow, Cell, CELL_FILL, CELL_LINE, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, MC, MiniBar, Overlay, PArt, PL, pH, Pill, PP, prog,
	S, Scribble, TT, Tick, clamp01, Col, Num, GreyCross, Line,
} from './shared';
import {rng} from '../../kit';

const Person: React.FC<{x: number; y: number; s?: number; color: string; o?: number}> = ({x, y, s = 1, color, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<circle cx={0} cy={-62} r={26} fill={color} stroke={INK} strokeWidth={3.5} />
		<path d="M-34,-24 Q0,-44 34,-24 L40,56 L-40,56 Z" fill={color} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
	</g>
);

// ---------- 1. Hook ----------
const NC = 23, X0 = 210, DX = 50, ROW_P = 500, ROW_T = 620;
const pick = (seed: number): Col[] => { const r = rng(seed); return Array.from({length: NC}, () => (r() < 0.5 ? 'P' : 'T')); };
const PICK1 = pick(11);
const PICK2 = PICK1.map((c, j) => (j % 3 === 0 ? c : c === 'P' ? 'T' : 'P'));
const gx = (j: number, g: number) => (g === 0 ? 1670 : 1670) + ((j % 12) - 5.5) * 22 + (j >= 12 ? 11 : 0) * 0;
const gy = (j: number, g: number) => (g === 0 ? 400 : 735) + (j < 12 ? -22 : 22);

export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		bro: 'Two brothers', parents: 'same parents', diff: 'quite different', each: 'Each began', sperm: ['sperm', 1], egg: ['egg', 1], carried: 'carried just one set', not2: 'not two', so: 'So how', halve: 'halve its', num: 'chromosome number', make: 'make gametes', differ: 'differ from',
	});
	const pa = prog(f, c.so - 4, 56);
	const aOp = (1 - pa) * prog(f, 0, 14);
	const bOp = prog(f, c.so + 8, 36);
	const bz = 1.45 - 0.45 * prog(f, c.so + 4, 62);
	const trav = (a: number, from: [number, number], to: [number, number]) => { const t = prog(f, a, 56); return [lerp(from[0], to[0], t), lerp(from[1], to[1], t)] as [number, number]; };
	const sp = trav(c.sperm, [1540, 360], [1440, 620]);
	const eg = trav(c.egg, [1100, 360], [1230, 620]);
	const cut = prog(f, c.halve, 26);
	const mv = (g: number, at: number) => (j: number) => prog(f, at + (j % 12) * 1.5, 34);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: aOp, transformOrigin: '1330px 560px', transform: `scale(${1 - 0.35 * pa})`}}>
				<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.bro, 20)}}>
					<PArt a={PL.brothers} x={140} y={190} w={380} />
					<GreyTag at={c.diff} x={150} y={915} text="simplified" size={26} />
				</div>
				<Overlay>
					<Person x={1100} y={250} color="#d9b8c8" o={prog(f, c.parents, 16)} />
					<Person x={1540} y={250} color="#b8cbd9" o={prog(f, c.parents + 6, 16)} />
					<g opacity={prog(f, c.each, 16)}>
						<DrawPath d="M1100,330 C1100,420 1230,480 1230,570" at={c.each} dur={40} color="#b9a98f" width={4} dash="3 12" />
						<DrawPath d="M1540,330 C1540,420 1440,480 1440,570" at={c.each} dur={40} color="#b9a98f" width={4} dash="3 12" />
					</g>
					{f >= c.egg - 6 ? <EggDot x={eg[0]} y={eg[1]} r={40} o={prog(f, c.egg - 6, 8)} /> : null}
					{f >= c.sperm - 6 ? <SpermDot x={sp[0]} y={sp[1]} s={2.4} rot={20} o={prog(f, c.sperm - 6, 8)} /> : null}
					<g opacity={prog(f, c.carried - 10, 14)}>
						<text x={1230} y={700} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>egg</text>
						<text x={1440} y={700} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>sperm</text>
					</g>
					<Scribble cx={1440} cy={620} rx={78} ry={56} at={c.carried} color={AMBER_INK} seed={5} />
					<Scribble cx={1230} cy={620} rx={62} ry={62} at={c.carried + 12} color={AMBER_INK} seed={8} />
				</Overlay>
				<Hand at={c.carried + 24} x={1110} y={760} size={52}>one set: 23 chromosomes</Hand>
				<GreyTag at={c.not2} x={1230} y={850} text="not two sets" size={32} />
				<Hand at={c.parents + 10} x={1030} y={332} size={40} color={INK_SOFT}>mother</Hand>
				<Hand at={c.parents + 14} x={1480} y={332} size={40} color={INK_SOFT}>father</Hand>
			</div>
			{/* precursor cell, then the reduction */}
			<div style={{position: 'absolute', inset: 0, opacity: bOp, transformOrigin: '1250px 600px', transform: `scale(${bz})`}}>
				<Overlay>
					<Cell cx={760} cy={560} rx={640} ry={270} sw={6} nuc={0} />
					{PICK1.map((cc, j) => {
						const keepP = cc === 'P';
						const dimP = keepP ? 1 : 1 - 0.8 * cut;
						const dimT = keepP ? 1 - 0.8 * cut : 1;
						return (
							<g key={j}>
								<MiniBar x={X0 + j * DX} y={ROW_P} col="P" h={50} w={12} o={dimP} />
								<MiniBar x={X0 + j * DX} y={ROW_T} col="T" h={50} w={12} o={dimT} />
							</g>
						);
					})}
					{/* flat arrow towards the gametes */}
					<Arrow x1={1412} y1={560} x2={1512} y2={560} at={c.halve} color={AMBER_INK} width={7} />
					{/* gametes */}
					<Cell cx={1670} cy={400} rx={150} ry={122} o={prog(f, c.make - 10, 16)} />
					<Cell cx={1670} cy={735} rx={150} ry={122} o={prog(f, c.differ - 6, 16)} />
					{PICK1.map((cc, j) => {
						const t = mv(0, c.make)(j);
						const fx = X0 + j * DX, fy = cc === 'P' ? ROW_P : ROW_T;
						return t > 0 ? <MiniBar key={j} x={lerp(fx, gx(j, 0), t)} y={lerp(fy, gy(j, 0), t)} col={cc} h={lerp(50, 32, t)} w={lerp(12, 8, t)} /> : null;
					})}
					{PICK2.map((cc, j) => {
						const t = mv(1, c.differ)(j);
						const fx = X0 + j * DX, fy = cc === 'P' ? ROW_P : ROW_T;
						return t > 0 ? <MiniBar key={j} x={lerp(fx, gx(j, 1), t)} y={lerp(fy, gy(j, 1), t)} col={cc} h={lerp(50, 32, t)} w={lerp(12, 8, t)} /> : null;
					})}
				</Overlay>
				<Pill at={c.num} x={330} y={180} size={46}>before: 46 chromosomes, two sets</Pill>
				<Hand at={c.num + 20} x={230} y={860} size={44} color={INK_SOFT}>23 from each parent, one pair of each kind</Hand>
				<Hand at={c.halve + 14} x={1396} y={500} size={42}>half</Hand>
				<Pill at={c.make + 26} x={1530} y={216} size={42}>gamete: 23</Pill>
				<Hand at={c.differ + 24} x={1480} y={875} size={42} color={INK_SOFT}>a different mix</Hand>
			</div>
			<div style={{position: 'absolute', left: 96, top: 92, opacity: f >= c.make + 20 ? 1 : 0}}>
				<HandText text="How does meiosis halve the number and make gametes different?" at={c.make + 20} size={54} cps={52} />
			</div>
		</>
	);
};

// ---------- 2. Why halve ----------
const Gam: React.FC<{x: number; y: number; at: number; kind: 'sperm' | 'egg'; n: string; nAt: number; color?: string}> = ({x, y, at, kind, n, nAt, color = INK}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<g opacity={p}>
			{kind === 'egg' ? <EggDot x={x} y={y} r={38} /> : <SpermDot x={x} y={y} s={2.2} rot={0} />}
			<text x={x + (kind === 'egg' ? 70 : 74)} y={y + 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, opacity: prog(f, nAt, 10)}} fill={color}>{n}</text>
		</g>
	);
};
const Chain: React.FC<{y: number; at: number; n1: string; n2: string; nAt: number; zero: number; zInit: string; zFinal?: string; zAt?: number; nextText?: string; nextAt?: number; label: string; labelAt: number; labelColor?: string; o?: number}> = ({y, at, n1, n2, nAt, zero, zInit, zFinal, zAt = 0, nextText, nextAt = 0, label, labelAt, labelColor = INK_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	const zs = zFinal && f >= zAt ? zFinal : zInit;
	return (
		<g opacity={o}>
			<g opacity={prog(f, at, 14)}>
				<ellipse cx={260} cy={y} rx={104} ry={80} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
				<circle cx={260} cy={y} r={44} fill="rgba(226,214,238,0.62)" stroke="#5b4d70" strokeWidth={4} strokeDasharray="12 6" />
				<text x={260} y={y + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}} fill={INK}>{n1}</text>
			</g>
			<Arrow x1={380} y1={y - 28} x2={600} y2={y - 76} at={at + 40} color={labelColor} width={5} />
			<Arrow x1={380} y1={y + 28} x2={600} y2={y + 76} at={at + 46} color={labelColor} width={5} />
			<text x={500} y={y + 16} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, opacity: prog(f, labelAt, 12)}} fill={labelColor}>{label}</text>
			<Gam x={650} y={y - 80} at={at + 30} nAt={nAt} kind="sperm" n={n2} />
			<Gam x={650} y={y + 80} at={at + 40} nAt={nAt + 4} kind="egg" n={n2} />
			<Arrow x1={870} y1={y - 66} x2={1010} y2={y - 14} at={zero - 26} color={INK_SOFT} width={5} />
			<Arrow x1={870} y1={y + 66} x2={1010} y2={y + 14} at={zero - 22} color={INK_SOFT} width={5} />
			<g opacity={prog(f, zero, 14)}>
				<circle cx={1100} cy={y} r={78} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
				<circle cx={1100} cy={y} r={40} fill="rgba(226,214,238,0.62)" stroke="#5b4d70" strokeWidth={4} strokeDasharray="12 6" />
				<text x={1100} y={y + 15} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44}} fill={INK}>{zs}</text>
			</g>
			<text x={1100} y={y + 126} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, opacity: prog(f, zero, 14)}} fill={INK_SOFT}>fertilised egg</text>
			{nextText ? (
				<g opacity={prog(f, nextAt, 14)}>
					<Arrow x1={1190} y1={y} x2={1380} y2={y} at={nextAt} color={INK_SOFT} width={5} />
					<ellipse cx={1500} cy={y} rx={96} ry={74} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
					<text x={1500} y={y + 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46}} fill={INK}>{nextText}</text>
					<text x={1500} y={y + 124} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>next generation</text>
				</g>
			) : null}
		</g>
	);
};

export const SceneWhyHalve: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('why-halve'), {
		sup: 'Suppose', sperm: ['sperm', 1], eggs: 'and eggs', mitosis: 'by mitosis', skin: 'like skin', each: 'Each would carry', f46: '46', fert: 'fertilised egg', n92: '92', next: 'next generation', n184: '184', need: 'Gametes need', set: 'one set', n23: '23', cells: 'A cell makes', meiosis: 'called meiosis', copies: 'copies its DNA', once: 'once', divides: 'divides twice',
	});
	const wipe = prog(f, c.need, 24);
	const crossP = prog(f, c.n184 + 30, 20);
	const t1 = prog(f, c.copies, 16), t2 = prog(f, c.divides - 8, 16);
	return (
		<>
			<Heading items={[[0, 'Why gametes need one set']]} size={64} />
			<Overlay>
				<Chain y={290} at={c.sup} n1="46" n2="46" nAt={c.each + 22} zero={c.fert} zInit="46+46" zFinal="92" zAt={c.n92 - 4} nextText="184" nextAt={c.next} label="mitosis" labelAt={c.mitosis} o={1 - 0.7 * wipe} />
				{/* the 92 ticker fixed to the cue */}
				<g opacity={crossP * (1 - 0.7 * wipe)}>
					<GreyCross x={880} y={290} at={c.n184 + 30} s={2.6} />
					<GreyCross x={1500} y={290} at={c.n184 + 38} s={2.4} />
				</g>
				<Chain y={590} at={c.need} n1="46" n2="23" nAt={c.n23 - 4} zero={c.n23 + 24} zInit="23+23" zFinal="46" zAt={c.n23 + 40} label="meiosis" labelAt={c.meiosis} labelColor={AMBER_INK} />
				<Tick x={1230} y={590} at={c.n23 + 40} s={1.6} />
				{/* one copy, two divisions strip */}
				<g opacity={prog(f, c.copies - 6, 14)}>
					<Cell cx={520} cy={850} rx={70} ry={54} />
					<MC x={520} y={850} kind="S" a={PP} b={PP} dup={t1} s={0.22} beads={0} />
					<Arrow x1={610} y1={850} x2={730} y2={850} at={c.once} color={AMBER_INK} width={5} />
				</g>
				<g opacity={prog(f, c.divides - 10, 14)}>
					<Cell cx={830} cy={850} rx={70} ry={54} />
					<MC x={830} y={850} kind="S" a={PP} b={PP} dup={1} s={0.22} beads={0} />
					<Arrow x1={920} y1={835} x2={1040} y2={800} at={c.divides} color={AMBER_INK} width={5} />
					<Arrow x1={920} y1={865} x2={1040} y2={900} at={c.divides + 6} color={AMBER_INK} width={5} />
					{[800, 900].map((yy, i) => <Cell key={i} cx={1110} cy={yy} rx={56} ry={42} o={t2} />)}
					<Arrow x1={1180} y1={800} x2={1236} y2={790} at={c.divides + 20} color={AMBER_INK} width={4} />
					<Arrow x1={1180} y1={900} x2={1236} y2={910} at={c.divides + 26} color={AMBER_INK} width={4} />
					{[[1290, 770], [1290, 830], [1290, 880], [1290, 940]].map(([xx, yy], i) => <Cell key={i} cx={xx} cy={yy} rx={40} ry={26} o={prog(f, c.divides + 30 + i * 4, 10)} />)}
				</g>
			</Overlay>
			<Hand at={c.skin} x={110} y={410} size={40} color={INK_SOFT}>body cell, like skin</Hand>
			<Hand at={c.n184 + 44} x={460} y={424} size={46} color={WRONG_C} w={1000}>the number would double every generation</Hand>
			<Hand at={c.set} x={110} y={690} size={42} color={AMBER_INK}>a gamete needs one set</Hand>
			<Hand at={c.copies + 14} x={380} y={920} size={42} color={AMBER_INK}>1 copy, 2 divisions</Hand>
			<Hand at={c.divides + 40} x={1380} y={830} size={42} color={AMBER_INK}>1 cell, 4 cells</Hand>
		</>
	);
};
const WRONG_C = '#5d646b';
