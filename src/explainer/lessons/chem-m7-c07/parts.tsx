// M7 C07 board pieces on the C06 strip parts (EqRow, Tally, Plate, ptOn, Leader, Arrow2 imported) and the M6 C03
// calculation kit (GCard, WLine, TempChip, HeatOut). README for Claude:
// - Ladder: the series ladder (methanol to butan-1-ol, optional octane). Formulas with the newest CH2 tinted teal,
//   bars per mole that re-scale to per gram on `gram`, optional molar masses, increment segments ("+641"), rings on
//   ethanol's O or its C–O carbon.
// - Loops: the two carbon loops (recent carbon: air → sugarcane → fermented → ethanol → burned back to the air; fossil
//   carbon: rock → crude oil → burned, one way, "+ CO2"). Production arrows (scene 9) enter the green loop.
// - MiniLadder / MiniBars / MiniLoops: small thumbnails for the memory aid and the handoff.
// - Coef: an equation coefficient that changes on cue ("?" then the number).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {Sx, TEAL, smooth} from '../chem-m6-c01/parts';
import {CARDC, Skel, Tag, zig} from '../chem-m7-c01/molecules';
import {CT, ctW, vis} from '../chem-m7-c04a/parts';
import {Arrow2, INK, INK_SOFT, KeyText, NAVY, Plate, RED, RingAt, subSpan} from '../chem-m7-c06/parts';
import type {TKey} from '../chem-m7-c06/parts';
import {BARREL, BOTTLE, CANE} from './common';

export const HEAT = '#e07b2e', HEAT_INK = '#b5561a', GREENC = '#2f8a5b', FOSSIL = '#6b4a2b', ALC = '#e2b04a', OCT = '#7f9fbf';

// ---------- coefficient ----------
export const Coef: React.FC<{x: number; y: number; size: number; keys: TKey[]}> = ({x, y, size, keys}) => <KeyText keys={keys} x={x} y={y + size * 0.35} size={size} color={NAVY} />;

// ---------- series ladder ----------
export const FORM = ['CH_3OH', 'CH_3CH_2OH', 'CH_3CH_2CH_2OH', 'CH_3CH_2CH_2CH_2OH'];
export const NAMES = ['methanol', 'ethanol', 'propan-1-ol', 'butan-1-ol'];
export const DHC = [726, 1367, 2021, 2676];
export const PERG = [22.7, 29.7, 33.6, 36.1];
export const MASS = ['32.04', '46.07', '60.09', '74.12'];
export const INC = ['+641', '+654', '+655'];
export const LD = {x: 110, bx: 640, y0: 300, dy: 105, size: 36, kMol: 820 / 2676, kG: 18};
export const rowY = (i: number) => LD.y0 + i * LD.dy;
type Win = {at: number; out?: number};
export const Ladder: React.FC<{at: number[]; gram?: number; massAt?: number; incAt?: number; incOut?: number; rowO?: (i: number) => number; valO?: number; octAt?: number; ringO?: Win; ringC?: Win; unitsAt?: number}> = ({at, gram = 1e9, massAt, incAt, incOut, rowO, valO = 1, octAt, ringO, ringC, unitsAt}) => {
	const f = useCurrentFrame();
	const g = smooth(prog(f, gram, 30));
	const w = (i: number) => (DHC[i] * LD.kMol) * (1 - g) + PERG[i] * LD.kG * g;
	const inc = incAt === undefined ? 0 : vis(f, incAt, incOut) * (1 - g);
	return (
		<g>
			<Sx x={LD.bx} y={LD.y0 - 64} text="ΔH of combustion (kJ mol⁻¹, released)" size={24} color={INK_SOFT} weight={700} at={unitsAt ?? at[0]} out={gram} />
			<Sx x={LD.bx} y={LD.y0 - 64} text="energy released (kJ g⁻¹)" size={24} color={INK_SOFT} weight={700} at={gram + 10} />
			{FORM.map((t, i) => {
				const y = rowY(i);
				const v = vis(f, at[i]) * (rowO ? rowO(i) : 1);
				if (v <= 0.01) return null;
				const grow = smooth(prog(f, at[i] + 6, 20));
				const [c1, c2] = i > 0 ? subSpan(t, 'CH_2', LD.x, LD.size) : [0, 0];
				const prev = i > 0 ? w(i - 1) : 0;
				return (
					<g key={i} opacity={v}>
						{i > 0 ? <rect x={c1 - 6} y={y - 30} width={c2 - c1 + 12} height={44} rx={10} fill="#bfe6df" opacity={0.85} /> : null}
						<CT x={LD.x} y={y + LD.size * 0.35 - 8} text={t} size={LD.size} />
						<Sx x={LD.x} y={y + 34} text={NAMES[i]} size={22} color={INK_SOFT} weight={600} at={-1000} />
						{massAt !== undefined ? <Sx x={LD.bx - 18} y={y} text={MASS[i] + ' g mol⁻¹'} size={22} color={NAVY} anchor="end" weight={700} at={massAt} out={gram} /> : null}
						<rect x={LD.bx} y={y - 28} width={w(i) * grow} height={40} rx={8} fill={ALC} />
						{i > 0 && inc > 0.01 ? <g opacity={inc}><rect x={LD.bx + prev} y={y - 28} width={w(i) - prev} height={40} rx={6} fill={TEAL} opacity={0.75} /><Sx x={LD.bx + prev + (w(i) - prev) / 2} y={y - 38} text={INC[i - 1]} size={22} color={INK_SOFT} anchor="middle" weight={700} at={-1000} /></g> : null}
						<g opacity={valO * grow}>
							<Sx x={LD.bx + w(i) + 14} y={y + 2} text={'−' + DHC[i]} size={28} color={INK} weight={800} at={-1000} opacity={1 - g} />
							<Sx x={LD.bx + w(i) + 14} y={y + 2} text={PERG[i].toFixed(1)} size={28} color={INK} weight={800} at={-1000} opacity={g} />
						</g>
						{i === 1 && ringO ? (() => { const [o1, o2] = subSpan(t, 'O', LD.x, LD.size); return <RingAt c={[(o1 + o2) / 2, y - 8]} rx={(o2 - o1) / 2 + 12} ry={28} at={ringO.at} out={ringO.out} />; })() : null}
						{i === 1 && ringC ? <RingAt c={[(c1 + c2) / 2, y - 8]} rx={(c2 - c1) / 2 + 12} ry={28} at={ringC.at} out={ringC.out} /> : null}
					</g>
				);
			})}
			{octAt !== undefined ? (() => {
				const y = rowY(4), v = vis(f, octAt);
				if (v <= 0.01) return null;
				const grow = smooth(prog(f, octAt + 6, 24));
				return (
					<g opacity={v}>
						<Skel pts={zig(8, LD.x + 6, y - 6, 38, 24)} bonds={Array.from({length: 7}, (_, k) => ({a: k, b: k + 1}))} at={octAt} width={4} stagger={2} />
						<Sx x={LD.x} y={y + 40} text="octane, C_8H_18" size={22} color={INK_SOFT} weight={600} at={-1000} />
						<rect x={LD.bx} y={y - 28} width={47.9 * LD.kG * grow} height={40} rx={8} fill={OCT} />
						<Sx x={LD.bx + 47.9 * LD.kG * grow + 14} y={y + 2} text="47.9" size={28} color={INK} weight={800} at={-1000} opacity={valO} />
					</g>
				);
			})() : null}
		</g>
	);
};

// ---------- carbon loops ----------
export const AIRY = 370;
export const AirLine: React.FC<{at: number; o?: number}> = ({at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><line x1={190} x2={1800} y1={AIRY} y2={AIRY} stroke="#9fc3dd" strokeWidth={4} strokeDasharray="14 10" /><Sx x={110} y={AIRY + 10} text="air" size={34} color="#4f86ad" hand at={-1000} /></g>;
};
export const CL = {cane: {cx: 330, top: 430, h: 400}, bottle: {cx: 860, top: 590, h: 200}, ferm: [600, 900] as [number, number]};
export const CaneLoop: React.FC<{T: {cane: number; took: number; ferm: number; bottle: number; burn: number}; o?: number; tagO?: number}> = ({T, o = 1, tagO = 1}) => {
	const f = useCurrentFrame();
	if (f < T.cane - 2 || o <= 0.01) return null;
	return (
		<g opacity={o}>
			<Plate p={CANE} cx={CL.cane.cx} top={CL.cane.top} h={CL.cane.h} at={T.cane} />
			<Arrow2 a={[250, AIRY + 8]} b={[290, 470]} at={T.took} color={GREENC} width={6} />
			<Arrow2 a={[420, AIRY + 8]} b={[380, 470]} at={T.took + 6} color={GREENC} width={6} />
			<g opacity={tagO}><Tag x={500} y={420} text="photosynthesis: CO_2 in" at={T.took + 10} size={26} color={GREENC} fill="#e3f3e9" /></g>
			<Arrow2 a={[400, 850]} b={[CL.ferm[0] - 20, CL.ferm[1] + 6]} bend={30} at={T.ferm} color={GREENC} width={5} />
			<g opacity={tagO}><Tag x={CL.ferm[0]} y={CL.ferm[1] - 14} text="fermented to ethanol (C06)" at={T.ferm + 6} size={24} color={INK} fill={CARDC} /></g>
			<Plate p={BOTTLE} cx={CL.bottle.cx} top={CL.bottle.top} h={CL.bottle.h} at={T.bottle} />
			<Arrow2 a={[960, 900]} b={[880, 810]} bend={30} at={T.bottle + 6} color={GREENC} width={5} />
			<Arrow2 a={[CL.bottle.cx + 60, 600]} b={[CL.bottle.cx + 60, AIRY + 12]} at={T.burn} color={GREENC} width={7} />
			<Sx x={CL.bottle.cx + 84} y={500} text="burned: CO_2 back to the air" size={24} color={GREENC} weight={700} at={T.burn + 10} />
		</g>
	);
};
export const FossilLoop: React.FC<{T: {barrel: number; burn: number}; o?: number}> = ({T, o = 1}) => {
	const f = useCurrentFrame();
	if (f < T.barrel - 2 || o <= 0.01) return null;
	const ticks = [0, 1, 2].filter(k => f >= T.burn + 20 + k * 22).length;
	return (
		<g opacity={o}>
			<g opacity={vis(f, T.barrel)}>
				<rect x={1250} y={850} width={460} height={70} rx={10} fill="#b89a74" stroke={FOSSIL} strokeWidth={3} />
				{Array.from({length: 10}, (_, k) => <line key={k} x1={1270 + k * 44} y1={912} x2={1300 + k * 44} y2={858} stroke={FOSSIL} strokeWidth={2} opacity={0.5} />)}
				<Sx x={1480} y={960} text="underground for millions of years" size={22} color={FOSSIL} anchor="middle" weight={700} at={-1000} />
			</g>
			<Plate p={BARREL} cx={1400} top={590} h={240} at={T.barrel} />
			<Arrow2 a={[1600, 845]} b={[1600, AIRY + 12]} at={T.burn} color={FOSSIL} width={8} dur={24} />
			<Sx x={1624} y={560} text="burned:" size={24} color={FOSSIL} weight={700} at={T.burn + 10} />
			<Sx x={1624} y={592} text="extra CO_2" size={24} color={FOSSIL} weight={700} at={T.burn + 10} />
			{ticks > 0 ? <Sx x={1600} y={AIRY - 20} text={'+ CO_2' + (ticks > 1 ? ' + CO_2' : '') + (ticks > 2 ? ' + CO_2' : '')} size={26} color={FOSSIL} anchor="middle" weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- thumbnails ----------
export const MiniLadder: React.FC<{x: number; y: number; at: number; o?: number; s?: number}> = ({x, y, at, o = 1, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const k = 300 / 2676;
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			{DHC.map((d, i) => {
				const g = smooth(prog(f, at + i * 6, 16));
				const prev = i > 0 ? DHC[i - 1] * k : 0;
				return <g key={i}><rect x={0} y={i * 34} width={d * k * g} height={24} rx={5} fill={ALC} />{i > 0 ? <rect x={prev * g} y={i * 34} width={(d * k - prev) * g} height={24} rx={4} fill={TEAL} opacity={0.75} /> : null}</g>;
			})}
			<Sx x={320} y={80} text="+CH_2 ≈ 650" size={24} color={TEAL} weight={800} at={-1000} />
		</g>
	);
};
export const MiniBars: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at + 4, 18));
	return (
		<g opacity={v} transform={`translate(${x},${y})`}>
			<rect x={150} y={0} width={29.7 * 7 * g} height={28} rx={6} fill={ALC} />
			<rect x={150} y={44} width={47.9 * 7 * g} height={28} rx={6} fill={OCT} />
			<Sx x={0} y={22} text="ethanol" size={24} color={INK} weight={700} at={-1000} />
			<Sx x={0} y={66} text="octane" size={24} color={INK} weight={700} at={-1000} />
			<Sx x={160 + 29.7 * 7} y={22} text="29.7" size={22} color={INK_SOFT} weight={700} at={-1000} />
			<Sx x={160 + 47.9 * 7} y={66} text="47.9 kJ g⁻¹" size={22} color={INK_SOFT} weight={700} at={-1000} />
		</g>
	);
};
export const MiniLoops: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v} transform={`translate(${x},${y})`}>
			<DrawPath d="M60,10 A70,70 0 1 1 20,40" at={at} dur={20} color={GREENC} width={6} />
			<path d="M8,30 L20,42 L34,30" fill="none" stroke={GREENC} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 16, 6)} />
			<Sx x={80} y={180} text="recent carbon" size={24} color={GREENC} anchor="middle" weight={700} at={-1000} />
			<Arrow2 a={[300, 150]} b={[300, 0]} at={at + 8} color={FOSSIL} width={7} />
			<Sx x={300} y={180} text="fossil carbon" size={24} color={FOSSIL} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
export {INK, INK_SOFT, NAVY, RED, TEAL, ctW};
