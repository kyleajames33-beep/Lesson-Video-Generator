// M7 B12 scenes 9 to 11: Wolbachia (the painted cell; not genetic engineering; the mosquito lives and the virus is
// blocked on the wheel; two pairings: infected females' eggs all hatch with the bacterium, uninfected females mated by
// infected males lay eggs that don't hatch; the population turns teal and stays teal), judging the methods (b11's
// criteria table, four breaks on a wheel thumbnail, a crossed chip) and the memory line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {CircleDot, WL} from './s1';
import {PopUnder} from './s2';
import {
	AMBER_INK, CTag, CritTable, EggRow, GREYT, GREY_INK, GTag, INK, MistakeChip, Pl, PlateB, Sx, TEAL, Wheel, between, fitW, lerp, prog, pulse, smooth, vis, BITE,
} from './parts';
import type {WG} from './parts';

// ---------- 9. Wolbachia ----------
const K9 = cues(S('wolbachia'), {wol: 'is Wolbachia', isnt: "isn't genetic engineering", harder: 'much harder for', spreads: 'spreads by itself', nearly: 'nearly all their', whichever: 'whichever male', uninf: 'an uninfected female', out: 'out-breed the rest', stop: 'releases can stop'});
export const SceneWolbachia: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K9.harder, 24));
	const rows = prog(f, K9.spreads, 14);
	const teal = (i: number) => prog(f, K9.out + 6 + i * 8, 10) * (i === 6 ? 0 : 1);
	return (
		<>
			<Heading text="Wolbachia" at={4} size={50} />
			<Overlay>
				<Wheel g={WL} flood={1} bite={{o: 1, grey: prog(f, K9.harder + 20, 10)}} adultDot={prog(f, K9.harder + 10, 10)} breaks={[{deg: BITE, at: K9.harder + 30, color: TEAL}]} labelSize={22} />
				<Pl p={PLATES.wolb} cx={lerp(1000, 1720, sh)} cy={lerp(440, 250, sh)} w={lerp(420, 200, sh)} o={prog(f, K9.wol, 14)} />
				<GTag x={760} y={680} text="Wolbachia inside a mosquito cell, drawn far larger than real" at={K9.wol + 14} out={K9.harder} size={18} />
				<CTag x={1260} y={220} text="Wolbachia: a bacterium living naturally in many insects" at={K9.wol + 20} color={TEAL} size={26} maxW={560} dim={prog(f, K9.spreads, 10)} out={K9.harder} />
				<MistakeChip x={1240} y={430} text="Wolbachia is genetic engineering" at={K9.isnt - 10} cross={K9.isnt + 20} size={24} />
				<GTag x={1240} y={496} text="no gene inserted" at={K9.isnt + 30} out={K9.harder} size={20} />
				<Pl p={PLATES.aedes} cx={1000} cy={340} w={230} o={prog(f, K9.harder, 14)} />
				<CircleDot x={1012} y={352} o={prog(f, K9.harder + 10, 10)} />
				<CTag x={760} y={460} text="mosquito lives; virus blocked" at={K9.harder + 40} color={TEAL} size={26} dim={prog(f, K9.spreads, 10)} />
				<g opacity={rows}>
					<rect x={720} y={560} width={1160} height={150} rx={18} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} />
					<rect x={720} y={730} width={1160} height={150} rx={18} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} />
				</g>
				<Sx x={745} y={620} text="infected female" size={28} color={TEAL} hand weight={700} at={K9.nearly - 6} />
				<Sx x={745} y={668} text="× any male" size={28} color={pulse(f, K9.whichever, 40) > 0.3 ? TEAL : INK} hand weight={700} at={K9.nearly} />
				<EggRow x={1060} y={620} n={14} dx={56} hatch={i => prog(f, K9.nearly + 20 + i * 3, 10)} teal={() => prog(f, K9.nearly + 30, 10)} o={prog(f, K9.nearly + 6, 12)} s={1.1} />
				<GTag x={1500} y={565} text="passed through eggs" at={K9.nearly + 40} size={18} />
				<Sx x={745} y={790} text="uninfected female" size={28} color={INK} hand weight={700} at={K9.uninf} />
				<Sx x={745} y={838} text="× infected male" size={28} color={TEAL} hand weight={700} at={K9.uninf + 8} />
				<EggRow x={1060} y={790} n={14} dx={56} o={prog(f, K9.uninf + 14, 12)} s={1.1} />
				<CTag x={1300} y={890} text="eggs don't hatch" at={K9.uninf + 30} color={AMBER_INK} size={24} />
				<GTag x={1560} y={900} text="cytoplasmic incompatibility" at={K9.uninf + 40} size={16} />
				<PopUnder alive={() => 1} teal={teal} />
				<CTag x={720} y={920} text="Wolbachia spreads" at={K9.out + 20} color={TEAL} size={24} dim={prog(f, K9.stop, 10)} />
				<GTag x={720} y={990} text="keeps going without releases" at={K9.stop + 10} size={18} />
				{void vis}{void between}{void PlateB}{void GREY_INK}
			</Overlay>
		</>
	);
};

// ---------- 10. Judge the methods ----------
const K10 = cues(S('judge'), {judge: 'how do you judge', cut: 'cut transmission', long: 'how long the', cost: 'what they cost', harm: 'what else they', water: 'Removing water', ins: 'Insecticides act fast', ster: 'Sterile or engineered', wol: 'Wolbachia keeps working', combine: 'combine methods'});
const WT: WG = {cx: 1720, cy: 950, R: 70, ps: 50};
export const SceneJudge: React.FC = () => {
	const f = useCurrentFrame();
	const rAt = [K10.water, K10.ins, K10.ster, K10.wol];
	const all = prog(f, K10.combine, 12);
	const rows = [
		{label: 'remove water', p: PLATES.dry, cells: ['fewer mosquitoes', 'only while kept up', 'low', 'very little'], at: K10.water, note: 'needs everyone', noteAt: K10.water + 40},
		{label: 'insecticides', p: PLATES.sprayer, cells: ['fast', 'falls as resistance rises', 'low to moderate', 'other insects, food chains'], at: K10.ins},
		{label: 'sterile or engineered males', p: PLATES.cage, cells: ['fewer mosquitoes', 'only while releases go on', 'high', 'very little'], at: K10.ster},
		{label: 'Wolbachia', p: PLATES.aedes, cells: ['mosquitoes rarely pass on dengue', 'self-sustaining', 'high at first, then low', 'very little'], at: K10.wol},
	];
	return (
		<>
			<Heading text="Judge the methods" at={4} size={50} />
			<Overlay>
				<CritTable g={{x: 80, y: 190, rhw: 360, cw: 360, hh: 66, rh: 140, gap: 8, size: 26}} heads={['cuts transmission?', 'how long?', 'cost?', 'harms what else?']} headAt={[K10.cut, K10.long, K10.cost, K10.harm]}
					rows={rows} lit={i => Math.max(vis(f, rAt[i], rAt[i + 1] ?? K10.combine, 10), all)} cellSize={26} />
				<Wheel g={WT} flood={1} o={prog(f, K10.combine - 20, 14)} breaks={[{deg: between(0), at: K10.combine + 6}, {deg: 0, at: K10.combine + 6}, {deg: between(2), at: K10.combine + 6}, {deg: 180, at: K10.combine + 6}]} labelSize={1} />
				<CTag x={80} y={876} text="combine: each covers another's gap" at={K10.combine + 16} color={AMBER_INK} size={30} />
				<MistakeChip x={80} y={966} text="insecticides are always best: they're fastest" at={K10.combine + 20} cross={K10.combine + 40} size={24} />
				{void K10.judge}{void fitW}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {one: 'One line', three: 'three ways', fm: 'fewer mosquitoes', fb: 'fewer bites', rp: 'or mosquitoes that'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [
		{x: 330, t: 'Fewer mosquitoes,', at: K11.fm},
		{x: 900, t: 'fewer bites,', at: K11.fb},
		{x: 1480, t: 'or mosquitoes that rarely pass it on.', at: K11.rp},
	];
	return (
		<>
			<Heading text="One line to keep" at={4} size={50} />
			<Overlay>
				<Sx x={960} y={300} text="Cut vector-borne disease three ways:" size={48} color={INK} hand weight={700} anchor="middle" at={K11.three - 20} />
				{cols.map((c, i) => <Sx key={i} x={c.x} y={460} text={c.t} size={i === 2 ? 46 : 56} color={i === 2 ? TEAL : AMBER_INK} hand weight={700} anchor="middle" at={c.at} />)}
				<PlateB p={PLATES.dry} cx={250} cy={660} w={160} o={prog(f, K11.fm + 10, 14)} />
				<Pl p={PLATES.cage} cx={430} cy={660} w={150} o={prog(f, K11.fm + 16, 14)} />
				<Pl p={PLATES.bednet} cx={900} cy={660} w={fitW(PLATES.bednet, 200, 200)} o={prog(f, K11.fb + 10, 14)} />
				<Pl p={PLATES.aedes} cx={1480} cy={660} w={240} o={prog(f, K11.rp + 10, 14)} />
				<CircleDot x={1492} y={672} o={prog(f, K11.rp + 20, 10)} />
				{void K11.one}
			</Overlay>
		</>
	);
};
