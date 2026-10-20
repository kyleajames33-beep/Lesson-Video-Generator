import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText, rng} from '../../kit';
import {cues} from '../../cues';
import {EggDot, SpermDot} from '../bio-m5-b02a/shared';
import {
	AMBER_INK, Arrow, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, Overlay, PArt, PL, Pill, prog, SvgPlate,
	S, Scribble, Tick, Col, GreyCross,
} from './shared';
import {HAVE} from './assets';
import {HCell, HChrom, PL as Plate88, SPREAD, Stage} from '../bio-m5-b05a/cd';

const Person: React.FC<{x: number; y: number; s?: number; color: string; o?: number}> = ({x, y, s = 1, color, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<circle cx={0} cy={-62} r={26} fill={color} stroke={INK} strokeWidth={3.5} />
		<path d="M-34,-24 Q0,-44 34,-24 L40,56 L-40,56 Z" fill={color} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
	</g>
);

/** Sperm and egg: painted plates (egg 2.5 x r wide, sperm about 4.2 x s wide) with the coded dot or squiggle as the fallback. */
const SpermArt: React.FC<{x: number; y: number; s?: number; rot?: number; o?: number}> = ({x, y, s = 1, rot = 0, o = 1}) => (
	<SvgPlate a={PL.sperm} cx={x - 8 * s} cy={y} w={68 * s} rot={rot} o={o}><SpermDot x={x} y={y} s={s} rot={rot} o={o} /></SvgPlate>
);
const EggArt: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 8, o = 1}) => (
	<SvgPlate a={PL.egg} cx={x} cy={y} w={r * 2.4} o={o}><EggDot x={x} y={y} r={r} o={o} /></SvgPlate>
);

// ---------- 1. Hook ----------
const PAINTED_PARENTS = HAVE.has(PL.parents.src);
const NC = 23;
const pick = (seed: number): Col[] => { const r = rng(seed); return Array.from({length: NC}, () => (r() < 0.5 ? 'P' : 'T')); };
const PICK1 = pick(11);
const PICK2 = PICK1.map((c, j) => (j % 3 === 0 ? c : c === 'P' ? 'T' : 'P'));

export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		bro: 'Two brothers', parents: 'same parents', diff: 'quite different', each: 'Each began', sperm: ['sperm', 1], egg: ['egg', 1], carried: 'carried just one set', not2: 'not two', so: 'So how', halve: 'halve its', num: 'chromosome number', make: 'make gametes', differ: 'differ from',
	});
	const pa = prog(f, c.so - 4, 56);
	const aOp = (1 - pa) * prog(f, 0, 14);
	const bOp = prog(f, c.so + 8, 36);
	const trav = (a: number, from: [number, number], to: [number, number]) => { const t = prog(f, a, 56); return [lerp(from[0], to[0], t), lerp(from[1], to[1], t)] as [number, number]; };
	const sp = trav(c.sperm, [1540, 360], [1440, 620]);
	const eg = trav(c.egg, [1100, 360], [1230, 620]);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: aOp, transformOrigin: '1330px 560px', transform: `scale(${1 - 0.35 * pa})`}}>
				<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.bro, 20)}}>
					<PArt a={PL.brothers} x={140} y={190} w={380} />
					<GreyTag at={c.diff} x={150} y={915} text="simplified" size={26} />
				</div>
				<Overlay>
					{HAVE.has(PL.parents.src) ? (
						<SvgPlate a={PL.parents} cx={1335} cy={300} w={208} o={prog(f, c.parents, 16)} />
					) : (
						<>
							<Person x={1100} y={250} color="#d9b8c8" o={prog(f, c.parents, 16)} />
							<Person x={1540} y={250} color="#b8cbd9" o={prog(f, c.parents + 6, 16)} />
						</>
					)}
					<g opacity={prog(f, c.each, 16)}>
						<DrawPath d={PAINTED_PARENTS ? 'M1290,510 C1290,540 1230,530 1230,568' : 'M1100,330 C1100,420 1230,480 1230,570'} at={c.each} dur={40} color="#b9a98f" width={4} dash="3 12" />
						<DrawPath d={PAINTED_PARENTS ? 'M1385,510 C1385,540 1440,530 1440,568' : 'M1540,330 C1540,420 1440,480 1440,570'} at={c.each} dur={40} color="#b9a98f" width={4} dash="3 12" />
					</g>
					{f >= c.egg - 6 ? <EggArt x={eg[0]} y={eg[1]} r={44} o={prog(f, c.egg - 6, 8)} /> : null}
					{f >= c.sperm - 6 ? <SpermArt x={sp[0]} y={sp[1]} s={2.5} rot={20} o={prog(f, c.sperm - 6, 8)} /> : null}
					<g opacity={prog(f, c.carried - 10, 14)}>
						<text x={1230} y={700} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>egg</text>
						<text x={1440} y={700} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>sperm</text>
					</g>
					<Scribble cx={1440} cy={620} rx={78} ry={56} at={c.carried} color={AMBER_INK} seed={5} />
					<Scribble cx={1230} cy={620} rx={62} ry={62} at={c.carried + 12} color={AMBER_INK} seed={8} />
				</Overlay>
				<Hand at={c.carried + 24} x={1110} y={760} size={52}>one set: 23 chromosomes</Hand>
				<GreyTag at={c.not2} x={1230} y={850} text="not two sets" size={32} />
				<Hand at={c.parents + 10} x={PAINTED_PARENTS ? 1130 : 1030} y={PAINTED_PARENTS ? 300 : 332} size={40} color={INK_SOFT}>mother</Hand>
				<Hand at={c.parents + 14} x={PAINTED_PARENTS ? 1470 : 1480} y={PAINTED_PARENTS ? 300 : 332} size={40} color={INK_SOFT}>father</Hand>
			</div>
			{/* revision 7: a real stained spread shows the 46 (no rows of tiny bars); the gametes are clean coded cells */}
			<div style={{position: 'absolute', inset: 0, opacity: bOp}}>
				<Overlay>
					<g transform={`translate(560,570) scale(${lerp(1.12, 1, prog(f, c.so + 4, 62))}) translate(-560,-570)`}>
						<Stage cam={{zoom: 1, fx: 1000, fy: 1000}} base={{cx: 560, cy: 570, size: 600}} win={null} srcs={[SPREAD]}>
							<Plate88 src={SPREAD} />
						</Stage>
					</g>
					<Arrow x1={930} y1={570} x2={1170} y2={570} at={c.halve} color={AMBER_INK} width={7} />
					{[0, 1].map(g => {
						const at = g === 0 ? c.make - 10 : c.differ - 6;
						const cy = g === 0 ? 400 : 745;
						const mix = g === 0 ? PICK1 : PICK2;
						return (
							<g key={g} opacity={prog(f, at, 16)}>
								<HCell cx={1480} cy={cy} rx={170} ry={118} nuc={1} nucR={88} />
								<text x={1480} y={cy + 24} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64}} fill={INK}>23</text>
								{/* which parent each of its 23 chromosomes came from: a colour key, not chromosomes */}
								{mix.map((cc, j) => <rect key={j} x={1480 - 23 * 7 + j * 14} y={cy + 132} width={11} height={20} rx={3} fill={cc === 'P' ? '#c27aac' : '#55b3a6'} opacity={prog(f, at + 10 + j, 6)} />)}
							</g>
						);
					})}
				</Overlay>
				<GreyTag at={c.num + 8} x={290} y={900} text="one human cell's chromosomes, stained" size={28} />
				<Pill at={c.num} x={290} y={190} size={46}>before: 46 chromosomes, two sets</Pill>
				<Hand at={c.halve + 14} x={1000} y={500} size={46}>half</Hand>
				<Pill at={c.make + 26} x={1680} y={230} size={40}>gamete: 23</Pill>
				<Hand at={c.differ + 24} x={1700} y={830} size={36} w={200} color={INK_SOFT}>a different mix</Hand>
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
			{kind === 'egg' ? <EggArt x={x} y={y} r={40} /> : <SpermArt x={x} y={y} s={2.3} rot={0} />}
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
				<HCell cx={260} cy={y} rx={104} ry={80} nuc={1} nucR={46} sw={3.5} />
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
				<HCell cx={1100} cy={y} rx={78} nuc={1} nucR={44} sw={3.5} />
				<text x={1100} y={y + 15} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44}} fill={INK}>{zs}</text>
			</g>
			<text x={1100} y={y + 126} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, opacity: prog(f, zero, 14)}} fill={INK_SOFT}>fertilised egg</text>
			{nextText ? (
				<g opacity={prog(f, nextAt, 14)}>
					<Arrow x1={1190} y1={y} x2={1380} y2={y} at={nextAt} color={INK_SOFT} width={5} />
					<HCell cx={1500} cy={y} rx={96} ry={74} sw={3.5} />
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
				<g opacity={crossP * (1 - 0.7 * wipe)}>
					<GreyCross x={880} y={290} at={c.n184 + 30} s={2.6} />
					<GreyCross x={1500} y={290} at={c.n184 + 38} s={2.4} />
				</g>
				<Chain y={590} at={c.need} n1="46" n2="23" nAt={c.n23 - 4} zero={c.n23 + 24} zInit="23+23" zFinal="46" zAt={c.n23 + 40} label="meiosis" labelAt={c.meiosis} labelColor={AMBER_INK} />
				<Tick x={1230} y={590} at={c.n23 + 40} s={1.6} />
				{/* one copy, two divisions strip (clean coded model) */}
				<g opacity={prog(f, c.copies - 6, 14)}>
					<HCell cx={520} cy={850} rx={70} ry={54} sw={3} />
					<HChrom x={520} y={852} len={56} w={11} col="P" dup={t1} />
					<Arrow x1={610} y1={850} x2={730} y2={850} at={c.once} color={AMBER_INK} width={5} />
				</g>
				<g opacity={prog(f, c.divides - 10, 14)}>
					<HCell cx={830} cy={850} rx={70} ry={54} sw={3} />
					<HChrom x={830} y={852} len={56} w={11} col="P" dup={1} />
					<Arrow x1={920} y1={835} x2={1040} y2={800} at={c.divides} color={AMBER_INK} width={5} />
					<Arrow x1={920} y1={865} x2={1040} y2={900} at={c.divides + 6} color={AMBER_INK} width={5} />
					{[800, 900].map((yy, i) => <HCell key={i} cx={1110} cy={yy} rx={56} ry={42} o={t2} sw={3} />)}
					<Arrow x1={1180} y1={800} x2={1236} y2={790} at={c.divides + 20} color={AMBER_INK} width={4} />
					<Arrow x1={1180} y1={900} x2={1236} y2={910} at={c.divides + 26} color={AMBER_INK} width={4} />
					{[[1290, 770], [1290, 830], [1290, 880], [1290, 940]].map(([xx, yy], i) => <HCell key={i} cx={xx} cy={yy} rx={40} ry={26} o={prog(f, c.divides + 30 + i * 4, 10)} sw={3} />)}
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
