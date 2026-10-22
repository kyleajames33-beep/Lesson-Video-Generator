// M7 C04b scenes 1 to 4: the hook (hex-1-ene takes bromine at once in the dark; hexane stays orange until UV light, then
// fades and gives off HBr), why an alkane has nothing to add to (strong single bonds, no spare bond; a bond must break,
// which takes energy), UV light starts a swap (the swap docker: one H out, one Br in, the H leaves with the other Br as
// HBr; two products) and UV light is energy, not a catalyst (on the arrow; the conditions card gains its fifth row).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, Overlay, Sx, TEAL, smooth} from '../chem-m6-c01/parts';
import {CHAIN_INK, NameLbl, Place, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {BROM, Box, Halo, Mol2D, Opener, PlateC, Plus, RxArrow, apt, cmol, diat, dimAt, loc, lerp, pulseAt, vis} from '../chem-m7-c04a/parts';
import type {SMol} from '../chem-m7-c04a/parts';
import {ETHENE, SmallCard} from '../chem-m7-c04a/s2';
import {BRW, HEX, Heading, LAMP, sc} from './common';
import {CARD5, FreeAtom, UV, UVGlow, UVWaves, UV_SOFT, withSwap} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {shake: 'Shake', dis: 'disappears', dark: 'even in the', thats: "That's the double", last: 'last video', now: 'Now add', hexane: 'hexane,', stays: 'stays', uv: 'UV light', fades: 'slowly fades', fumes: 'fumes', so: 'So alkanes', why: 'Why do they', where: 'where does'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sw = prog(f, K1.dis, 26), sw2 = prog(f, K1.fades, 50);
	const dimL = dimAt(f, K1.now, 0.4) * dimAt(f, K1.why, 0.6);
	const dimR = dimAt(f, K1.why, 0.5);
	const dark = (1 - prog(f, K1.uv, 30)) * vis(f, 0);
	const lampX = lerp(1900, 1560, smooth(prog(f, K1.uv, 24)));
	return (
		<>
			<Heading text="Alkanes, alkenes, alkynes: how do they react?" at={4} size={60} />
			<Overlay>
				<defs><radialGradient id="c4bvig" cx="50%" cy="55%" r="70%"><stop offset="55%" stopColor="#1d1a16" stopOpacity={0} /><stop offset="100%" stopColor="#1d1a16" stopOpacity={0.45} /></radialGradient></defs>
				<g opacity={dimL}>
					<PlateC p={BRW.orange} cx={420} top={290} h={400} o={1 - sw} />
					<PlateC p={BRW.clear} cx={420} top={290} h={400} o={sw} />
					<Sx x={420} y={740} text="hex-1-ene + bromine water" size={32} color={INK} anchor="middle" weight={700} at={K1.shake} />
					<Tag x={420} y={770} text="C=C adds Br_2" at={K1.dis + 20} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
					<Tag x={420} y={830} text="last video" at={K1.last} size={24} anchor="middle" />
				</g>
				<g opacity={vis(f, K1.now) * dimR}>
					<PlateC p={HEX.orange} cx={1250} top={290} h={400} o={1 - sw2} />
					<PlateC p={HEX.faded} cx={1250} top={290} h={400} o={sw2} />
					<Sx x={1250} y={740} text="hexane + bromine" size={32} color={INK} anchor="middle" weight={700} at={K1.hexane} />
					<Tag x={1250} y={770} text="in the dark: no change" at={K1.stays} out={K1.fumes} size={28} anchor="middle" />
					<Tag x={1250} y={770} text="fumes: hydrogen bromide, HBr" at={K1.fumes} size={28} color={BROM} fill="#fbeee2" anchor="middle" />
					<Tag x={1250} y={830} text="teacher demonstration in a fume cupboard" at={K1.hexane + 10} size={22} anchor="middle" />
					<g opacity={vis(f, K1.uv)}><PlateC p={LAMP} cx={lampX} top={420} h={150} /></g>
					<UVWaves a={[1430, 480]} b={[1300, 470]} at={K1.uv + 20} out={K1.why} />
				</g>
				<rect x={0} y={0} width={1920} height={1080} fill="url(#c4bvig)" opacity={dark} />
				<Tag x={960} y={210} text="in the dark" at={K1.dark} out={K1.uv} size={28} color="#fffdf8" fill="#3a352e" anchor="middle" />
				<Tag x={700} y={930} text="Why the light?" at={K1.why} size={40} color={UV} fill={UV_SOFT} anchor="middle" />
				<Tag x={1260} y={930} text="Where does HBr come from?" at={K1.where} size={40} color={BROM} fill="#fbeee2" anchor="middle" />
				{void K1.thats}{void K1.so}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 2. Why an alkane has nothing to add to ----------
const K2 = cues(sc('why-alkanes-dont-add'), {here: "Here's the", alkene: 'an alkene has', open: 'it can open', alkane: 'An alkane has', single: 'single bonds', every: 'every carbon', spare: "There's no spare", bromine: 'for bromine', strong: 'strong', dark: 'So in the dark', nothing: 'nothing you', react: 'For an alkane', brk: 'break first', energy: 'energy'});
const ETHANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const BR2 = diat('Br', 'Br', 96);
export const SceneWhy: React.FC = () => {
	const f = useCurrentFrame();
	const A = {x: 900, y: 560, s: 1.5};
	const L = {x: 260, y: 420, s: 0.9};
	const bx = f < K2.strong ? lerp(1720, 1330, smooth(prog(f, K2.bromine, 40))) : lerp(1330, 1460, smooth(prog(f, K2.strong, 30)));
	const flick = vis(f, K2.brk, undefined, 6);
	const thick = vis(f, K2.strong, K2.dark, 8);
	return (
		<Overlay>
			<Sx x={96} y={150} text="Why can't an alkane add?" size={52} color={INK} hand at={K2.here} />
			<g opacity={dimAt(f, K2.alkane, 0.3)}>
				<Mol2D m={ETHENE} x={L.x} y={L.y} s={L.s} at={K2.alkene} />
				<Opener c1={apt(ETHENE, 0, L.x, L.y, L.s)} c2={apt(ETHENE, 1, L.x, L.y, L.s)} at={K2.alkene + 10} split={K2.open} stub={40} />
				<Tag x={L.x} y={L.y + 120} text="second bond opens: addition" at={K2.open} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			</g>
			{thick > 0.01 ? <g opacity={thick * 0.35}>{ETHANE.bonds.map((b, k) => { const p = apt(ETHANE, b.a, A.x, A.y, A.s), q = apt(ETHANE, b.b, A.x, A.y, A.s); return <line key={k} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={INK} strokeWidth={22} strokeLinecap="round" />; })}</g> : null}
			{[0, 1].map(i => { const p = apt(ETHANE, i, A.x, A.y, A.s); return <Halo key={i} x={p[0]} y={p[1]} r={64} at={K2.every + i * 8} out={K2.strong} />; })}
			<Mol2D m={ETHANE} x={A.x} y={A.y} s={A.s} at={K2.alkane} />
			<Sx x={A.x} y={A.y - 190} text="ethane (alkane)" size={34} color={INK_SOFT} anchor="middle" hand at={K2.alkane} />
			<Tag x={A.x} y={A.y + 180} text="4 single bonds each: no spare bond" at={K2.spare} size={32} anchor="middle" />
			<Tag x={A.x} y={A.y - 290} text="strong single bonds" at={K2.strong} out={K2.brk} size={30} anchor="middle" />
			<Mol2D m={BR2} x={bx} y={A.y - 30} s={1.2} at={K2.bromine - 6} />
			{flick > 0.01 ? (() => { const p = apt(BR2, 0, bx, A.y - 30, 1.2), q = apt(BR2, 1, bx, A.y - 30, 1.2); return <line x1={p[0] + 26} y1={p[1]} x2={q[0] - 26} y2={q[1]} stroke={UV} strokeWidth={9} strokeDasharray="8 7" strokeDashoffset={-f * 2} opacity={flick * (0.55 + 0.45 * Math.sin(f * 0.6))} />; })() : null}
			<Tag x={A.x} y={A.y + 280} text="a bond must break: needs energy" at={K2.energy} size={36} color={UV} fill={UV_SOFT} anchor="middle" />
			{void K2.single}{void K2.nothing}{void K2.react}
		</Overlay>
	);
};

// ---------- 3. UV light starts a swap ----------
export const B = {y: 500, s: 1.2, ex: 205, px: 445, rx: 600, a1: 730, a2: 990, prx: 1210, p2: 1440, hb: 1590};
const PROD = withSwap(ETHANE, '1u', 'Br');
const BRE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'Br', d: 'H', r: 'H'}]);
const HBR = diat('H', 'Br', 92);
const K3 = cues(sc('uv-swap'), {uv: 'UV light supplies', gives: 'It gives', split: 'split', overall: 'The overall', swap: 'swap', one: 'one hydrogen', ethane: 'Ethane plus', bromo: 'bromoethane', pushed: 'pushed out', joins: 'joins the', hbr: 'as hydrogen', fumes: 'the fumes', two: 'Two products', keeps: 'keeps four', subst: 'substitution'});
export const SceneSwap: React.FC = () => {
	const f = useCurrentFrame();
	const slot = apt(PROD.m, PROD.h, B.prx, B.y, B.s);
	const hover: V2 = [slot[0] + 50, slot[1] - 90];
	const split0 = apt(BR2, 0, B.rx, B.y, B.s), split1 = apt(BR2, 1, B.rx, B.y, B.s);
	const s0: V2 = [split0[0] - 14 * B.s, split0[1]], s1: V2 = [split1[0] + 22 * B.s, split1[1]];
	const boxH = apt(HBR, 0, B.hb, B.y, B.s), boxBr = apt(HBR, 1, B.hb, B.y, B.s);
	const rej = K3.two - 20;
	return (
		<Overlay>
			<Sx x={96} y={150} text="Alkane + Br_2" size={52} color={UV} hand at={0} />
			<Mol2D m={ETHANE} x={B.ex} y={B.y} s={B.s} at={0} />
			<Plus x={B.px} y={B.y} at={6} />
			<Mol2D m={BR2} x={B.rx} y={B.y} s={B.s} at={6} out={rej} lift={{0: {to: loc(s0, B.rx, B.y, B.s), at: K3.split, dur: 18}, 1: {to: loc(s1, B.rx, B.y, B.s), at: K3.split, dur: 18}}} />
			<Mol2D m={BR2} x={B.rx} y={B.y} s={B.s} at={rej} />
			<UVGlow x={(B.a1 + B.a2) / 2} y={B.y - 40} at={K3.uv} pulse={K3.uv} />
			<RxArrow x1={B.a1} x2={B.a2} y={B.y} at={K3.uv - 10} above={[{t: 'UV light', at: K3.uv, color: UV, fill: UV_SOFT}]} />
			<Mol2D m={PROD.m} x={B.prx} y={B.y} s={B.s} at={K3.overall} hideAt={{[PROD.h]: K3.one}} fly={{[PROD.i]: {from: loc(s0, B.prx, B.y, B.s), at: K3.one + 26, dur: 26}}} glow={{[PROD.i]: [K3.one + 50, K3.bromo + 30]}} />
			<FreeAtom el="H" keys={[{at: -1, p: slot}, {at: K3.one, p: hover}, {at: K3.joins, p: boxH, dur: 30}]} at={K3.one} out={K3.hbr + 18} glow />
			<FreeAtom el="Br" keys={[{at: -1, p: s1}, {at: K3.joins, p: boxBr, dur: 30}]} at={K3.joins} out={K3.hbr + 18} />
			<Tag x={B.prx} y={B.y + 140} text="overall result" at={K3.one + 40} out={K3.bromo} size={24} anchor="middle" />
			<NameLbl x={B.prx} y={B.y + 230} parts={[['bromo', BROM], ['ethane', CHAIN_INK]]} at={K3.bromo} size={38} />
			<Plus x={B.p2} y={B.y} at={K3.hbr} />
			<Mol2D m={HBR} x={B.hb} y={B.y} s={B.s} at={K3.hbr + 14} />
			<Box x={B.hb - 105} y={B.y - 60} w={210} h={120} at={K3.hbr + 14} color={UV} />
			<PlateC p={HEX.faded} cx={1810} top={170} h={230} o={vis(f, K3.fumes, K3.two + 10)} />
			<Tag x={1440} y={B.y + 130} text="2 products" at={K3.two} size={32} color={UV} fill={UV_SOFT} anchor="middle" />
			<Tag x={960} y={880} text="substitution: one atom swapped for another" at={K3.subst} size={38} color={UV} fill={UV_SOFT} anchor="middle" />
			{void K3.gives}{void K3.swap}{void K3.ethane}{void K3.pushed}{void K3.keeps}
		</Overlay>
	);
};

/** The finished substitution equation (scene 4 shrinks it). */
export const SubstEq: React.FC<{at: number; pulse?: number}> = ({at, pulse}) => (
	<g>
		<Mol2D m={ETHANE} x={B.ex} y={B.y} s={B.s} at={at} />
		<Plus x={B.px} y={B.y} at={at} />
		<Mol2D m={BR2} x={B.rx} y={B.y} s={B.s} at={at} />
		<UVGlow x={(B.a1 + B.a2) / 2} y={B.y - 40} at={at} pulse={pulse} />
		<RxArrow x1={B.a1} x2={B.a2} y={B.y} at={at - 20} above={[{t: 'UV light', at, color: UV, fill: UV_SOFT}]} />
		<Mol2D m={BRE} x={B.prx} y={B.y} s={B.s} at={at} />
		<Plus x={B.p2} y={B.y} at={at} />
		<Mol2D m={HBR} x={B.hb} y={B.y} s={B.s} at={at} />
		<Box x={B.hb - 105} y={B.y - 60} w={210} h={120} at={at} color={UV} />
	</g>
);

// ---------- 4. UV light is energy, not a catalyst ----------
const K4 = cues(sc('uv-not-catalyst'), {arrow: 'arrow?', write: 'Write UV', dont: "don't call", module: 'From Module', isnt: "UV light isn't", energy: "It's energy", absorbed: 'absorbed', source: 'energy source', compare: 'Compare', no: 'no light'});
export const SceneNotCatalyst: React.FC = () => {
	const f = useCurrentFrame();
	const s = 0.85, ax = 960 * (1 - s), ay = 320 - s * B.y;
	const chip: V2 = [ax + s * (B.a1 + B.a2) / 2, ay + s * (B.y - 44)];
	return (
		<Overlay>
			<Place keys={[{at: -100, x: 0, y: 0, s: 1}, {at: 0, x: ax, y: ay, s}]}><SubstEq at={-60} pulse={K4.write} /></Place>
			<Tag x={chip[0]} y={chip[1] + 150} text="UV catalyst" at={K4.dont} out={K4.dont + 40} size={28} anchor="middle" o={0.6} />
			<Tag x={chip[0]} y={chip[1] + 150} text="from Module 5: a catalyst is a substance, not used up" at={K4.module} size={26} anchor="middle" o={dimAt(f, K4.isnt, 0.4)} />
			<PlateC p={LAMP} cx={260} top={560} h={140} o={vis(f, K4.isnt)} />
			<UVWaves a={[420, 600]} b={[chip[0] - 40, chip[1] + 20]} at={K4.energy} out={K4.compare} absorb n={4} />
			<Tag x={560} y={760} text="UV light: energy, absorbed, not a substance" at={K4.absorbed} size={30} color={UV} fill={UV_SOFT} anchor="middle" />
			<SmallCard upto={4} rows={CARD5} at={K4.compare} fill={K4.no} y={560} lit={[-1000, K4.compare + 30]} />
			{void K4.arrow}{void K4.source}{void pulseAt}{void ({} as SMol)}
		</Overlay>
	);
};
