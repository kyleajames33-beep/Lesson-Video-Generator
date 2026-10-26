// M7 C05 scenes 8 to 13: same electrons, very different boiling points (propane and ethanol on C03's strip; boiling
// separates molecules, the O–H stays), the series (the chain sets the trend), isomers (shape, not the label: spaghetti
// and ball), solubility (the OH replaces the hydrogen bonds it breaks), a longer chain dissolves less, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, DISP, Dots, Skel, Tag, TickMark, VIOLET, zig} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {DrawPath, PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {Contact, HBond, Mark, STRIP, Strip, WaterMol, ty, waterGrid} from '../chem-m7-c03/parts';
import {ALC_TUBES, sc} from './common';
import {AlcAt, INK, OXY_INK, P, RED, alc} from './parts';

const SX = 1560;
const BlueStrip: React.FC<{at: number; out?: number}> = ({at, out}) => <Strip at={at} out={out} x={SX} />;

// ---------- 8. Same electrons ----------
const K8 = cues(sc('same-electrons'), {fair: 'fair pair', electrons: 'electrons,', similar: 'similar.', propane: 'Propane boils', ethanol: 'Ethanol boils', hundred: 'one hundred', extra: 'The extra', boiling: 'Boiling overcomes', oh: 'O H bond'});
const ETH = alc(2, 1);
const PropSk: React.FC<{x: number; y: number; s: number; at: number; o?: number}> = ({x, y, s, at, o = 1}) => <g opacity={o}><Skel pts={zig(3, x - 100 * s, y, 100 * s, 58 * s)} bonds={[{a: 0, b: 1}, {a: 1, b: 2}]} at={at} width={5} /></g>;
export const SceneSame: React.FC = () => {
	const f = useCurrentFrame();
	const top = dimAt(f, K8.extra, 0.35);
	const apart = smooth(prog(f, K8.oh, 40));
	return (
		<Overlay>
			<TaskLine text="Same electrons, different boiling points" at={K8.fair} size={50} y={130} />
			<g opacity={top}>
				<PropSk x={360} y={300} s={1} at={K8.fair} />
				<AlcAt a={ETH} x={860} y={300} s={1} at={K8.fair + 10} ring={K8.extra} />
				<Sx x={360} y={390} text="propane" size={30} color={INK} anchor="middle" weight={700} at={K8.fair} />
				<Sx x={860} y={390} text="ethanol" size={30} color={INK} anchor="middle" weight={700} at={K8.fair + 10} />
				<Tag x={360} y={420} text="26 electrons" at={K8.electrons} size={26} anchor="middle" />
				<Tag x={860} y={420} text="26 electrons" at={K8.electrons} size={26} anchor="middle" />
				<Tag x={610} y={490} text="similar dispersion forces" at={K8.similar} out={K8.hundred} size={26} color="#2d6f9e" fill="#e3f0fa" anchor="middle" />
			</g>
			<BlueStrip at={K8.fair} />
			<Mark T={-42} label="propane −42 °C" at={K8.propane} x={SX} left />
			<Mark T={78} label="ethanol 78 °C" at={K8.ethanol} x={SX} left />
			<g opacity={vis(f, K8.hundred)}>
				<DrawPath d={`M${SX + 30},${ty(78)} L${SX + 50},${ty(78)} L${SX + 50},${ty(-42)} L${SX + 30},${ty(-42)}`} at={K8.hundred} dur={14} color={VIOLET} width={4} />
				<Sx x={SX + 62} y={(ty(78) + ty(-42)) / 2} text="about 120 °C:" size={26} color={VIOLET} hand at={K8.hundred} />
				<Sx x={SX + 62} y={(ty(78) + ty(-42)) / 2 + 30} text="hydrogen bonding" size={26} color={VIOLET} hand at={K8.hundred} />
			</g>
			<g opacity={vis(f, K8.extra)}>
				<PropSk x={360} y={640} s={0.8} at={K8.extra} />
				<PropSk x={360} y={740} s={0.8} at={K8.extra} />
				{[0, 1, 2].map(k => <Dots key={k} a={[280 + k * 80, 660]} b={[280 + k * 80, 720]} at={K8.extra + 6} color={DISP} width={5} flicker />)}
				<AlcAt a={ETH} x={860} y={640 - 40 * apart} s={0.8} at={K8.extra} />
				<AlcAt a={ETH} x={860} y={740 + 40 * apart} s={0.8} at={K8.extra} />
				{[0, 1].map(k => <Dots key={'b' + k} a={[790 + k * 80, 660]} b={[790 + k * 80, 720]} at={K8.extra + 6} out={K8.oh + 10} color={DISP} width={5} flicker />)}
				<Dots a={[960, 650]} b={[960, 730]} at={K8.extra + 10} out={K8.oh + 10} color={VIOLET} width={6} />
			</g>
			<TickMark x={1080} y={690} at={K8.oh + 30} />
			<Tag x={1110} y={670} text="covalent bonds: all intact" at={K8.oh + 30} size={24} color="#2f8a5b" fill="#e3f3e9" />
			<Crossed x={150} y={880} text="boiling breaks the O–H bond?" at={K8.oh + 20} cross={K8.oh + 50} note="boiling separates molecules" size={32} />
			{void K8.boiling}
		</Overlay>
	);
};

// ---------- 9. Along the series ----------
const K9 = cues(sc('along-the-series'), {along: 'Along the', one: 'one O H', chain: 'the chain.', meth: 'Methanol boils', eth: ['ethanol at', 1], prop: 'propan-one-ol at', but: 'butan-one-ol', each: 'Each extra', climbs: 'climbs'});
const SER = [alc(1, 0), alc(2, 1), alc(3, 2), alc(4, 3)];
const BPS = [65, 78, 97, 118];
const NM = ['methanol', 'ethanol', 'propan-1-ol', 'butan-1-ol'];
export const SceneSeries: React.FC = () => {
	const at = [K9.meth, K9.eth, K9.prop, K9.but];
	return (
		<Overlay>
			<TaskLine text="Along the series: the chain sets the trend" at={K9.along} size={48} y={130} />
			<BlueStrip at={-100} />
			{SER.map((a, i) => (
				<g key={i}>
					<AlcAt a={a} x={480} y={900 - i * 180} s={0.7} at={K9.along + i * 8} />
					<Sx x={60} y={910 - i * 180} text={NM[i]} size={26} color={INK} weight={700} at={K9.along + i * 8} />
					{i > 0 ? <Tag x={760} y={870 - i * 180} text="+CH_2" at={K9.each + i * 6} size={22} color="#2d6f9e" fill="#e3f0fa" /> : null}
					<Mark T={BPS[i]} label={`${BPS[i]} °C`} at={at[i]} x={SX} left={i % 2 === 0} />
				</g>
			))}
			<Tag x={880} y={300} text="1 OH each: similar hydrogen bonding" at={K9.one + 10} size={26} color={VIOLET} fill="#e6ddf5" />
			<g opacity={vis(useCurrentFrame(), K9.climbs)}><DrawPath d={`M${SX + 150},${ty(60)} L${SX + 150},${ty(125)} M${SX + 136},${ty(115)} L${SX + 150},${ty(127)} L${SX + 164},${ty(115)}`} at={K9.climbs} dur={14} color={RED} width={5} /></g>
			<Tag x={1040} y={420} text="longer chain: stronger dispersion" at={K9.climbs} size={28} color="#2d6f9e" fill="#e3f0fa" />
			{void K9.chain}
		</Overlay>
	);
};

// ---------- 10. Isomers: shape, not the label ----------
const K10 = cues(sc('isomers-shape'), {hold: 'Now hold', c4: 'C four', fall: 'fall:', e118: 'one hundred and eighteen', e100: 'about one hundred', e82: 'eighty two', ter: 'The tertiary', ball: 'ball,', shape: 'the shape'});
const ISO = [alc(4, 3), alc(4, 1), alc(3, 1, [1])];
const ISN = ['butan-1-ol (1°)', 'butan-2-ol (2°)', '2-methylpropan-2-ol (3°)'];
export const SceneIsomers: React.FC = () => {
	const f = useCurrentFrame();
	const row = 1 - prog(f, K10.ball, 16);
	const at = [K10.e118, K10.e100, K10.e82];
	return (
		<Overlay>
			<TaskLine text="Isomers: shape, not the label" at={K10.hold} size={50} y={130} />
			<BlueStrip at={-100} />
			<g opacity={row}>
				{ISO.map((a, i) => <g key={i}><AlcAt a={a} x={260 + i * 400} y={420} s={0.95} at={K10.hold + i * 8} /><Sx x={260 + i * 400} y={540} text={ISN[i]} size={26} color={INK} anchor="middle" weight={700} at={K10.hold + i * 8} /></g>)}
			</g>
			<Tag x={660} y={610} text="C_4H_10O: same electrons, 1 OH each" at={K10.c4} size={28} anchor="middle" o={row} />
			{at.map((t, i) => <Mark key={i} T={[118, 100, 82][i]} label={`${[118, 100, 82][i]} °C`} at={t} x={SX} left />)}
			<g opacity={vis(f, K10.ball)}>
				<AlcAt a={ISO[0]} x={500} y={360} s={1} at={K10.ball} />
				<AlcAt a={ISO[0]} x={500} y={460} s={1} at={K10.ball} />
				<Contact x1={360} x2={650} y={410} h={34} at={K10.ball + 10} />
				<Sx x={880} y={420} text="spaghetti" size={36} color="#2d6f9e" hand at={K10.ball + 10} />
				<AlcAt a={ISO[2]} x={440} y={720} s={1} at={K10.ball + 6} />
				<AlcAt a={ISO[2]} x={640} y={760} s={1} at={K10.ball + 6} />
				<Contact x1={520} x2={570} y={740} h={30} at={K10.ball + 16} />
				<Sx x={880} y={760} text="ball" size={36} color="#2d6f9e" hand at={K10.ball + 16} />
			</g>
			<Tag x={200} y={900} text="compact shape → less contact → lower boiling point" at={K10.shape} size={30} color={INK} fill="#fffdf8" />
			{void K10.fall}{void K10.ter}{void STRIP}
		</Overlay>
	);
};

// ---------- 11. Solubility ----------
const K11 = cues(sc('solubility-water'), {sol: 'Solubility comes', water: 'Water molecules', hexane: 'Hexane', can: 'can:', replacing: 'replacing', so: 'So methanol', any: 'any proportion'});
const WG = waterGrid(640, 330, 6, 4, 130);
const GAP = 8;
export const SceneSolubility: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K11.can - 20, 30));
	const ex: V2 = [WG.w[GAP].o[0] + 400 * (1 - slide), WG.w[GAP].o[1]];
	return (
		<Overlay>
			<TaskLine text="Why does ethanol mix with water?" at={K11.sol} size={50} y={130} />
			{WG.w.map((w, i) => (i === GAP ? <WaterMol key={i} p={w} o={1 - prog(f, K11.can - 20, 12)} /> : <WaterMol key={i} p={w} o={vis(f, K11.water - 10)} />))}
			{WG.pairs.map(([a, b], k) => <HBond key={k} a={WG.w[a].o} b={WG.w[b].o} at={K11.water + (k % 6) * 3} o={(a === GAP || b === GAP) ? 1 - prog(f, K11.can - 20, 12) : 1} />)}
			<Tag x={96} y={300} text="hexane: breaks, can't replace" at={K11.hexane} out={K11.can} size={24} />
			<g opacity={vis(f, K11.can - 20)}>
				<AlcAt a={ETH} x={ex[0] - 40} y={ex[1]} s={0.75} at={K11.can - 20} ring={K11.can} />
			</g>
			{WG.pairs.filter(([a, b]) => a === GAP || b === GAP).map(([a, b], k) => <Dots key={'n' + k} a={[ex[0] + 30, ex[1]]} b={WG.w[a === GAP ? b : a].o} at={K11.replacing + k * 6} color={VIOLET} width={6} />)}
			<Tag x={1340} y={420} text="OH ↔ water: hydrogen bonds replaced" at={K11.replacing} size={26} color={VIOLET} fill="#e6ddf5" />
			<g opacity={vis(f, K11.so)}>
				{[alc(1, 0), alc(2, 1), alc(3, 2)].map((a, i) => <AlcAt key={i} a={a} x={300 + i * 330} y={920} s={0.6} at={K11.so + i * 8} />)}
			</g>
			<Tag x={1260} y={900} text="miscible: mix in any proportion" at={K11.any} size={30} color={OXY_INK} fill="#f5ddd3" />
		</Overlay>
	);
};

// ---------- 12. A longer chain dissolves less ----------
const K12 = cues(sc('longer-chain-solubility'), {but: 'But the', breaking: 'breaking hydrogen', longer: 'The longer', drops: 'drops', butanol: 'Butan-one-ol', hexanol: 'hexan-one-ol', layer: 'layer on'});
const HEX = alc(6, 5);
export const SceneLonger: React.FC = () => {
	const f = useCurrentFrame();
	const up = dimAt(f, K12.drops, 0.35);
	const strip = dimAt(f, K12.layer, 0.4);
	const near = WG.pairs.filter(([a, b]) => WG.w[a].o[1] > 440 && WG.w[a].o[1] < 600 && WG.w[b].o[1] > 440 && WG.w[b].o[1] < 600).slice(0, 5);
	return (
		<Overlay>
			<TaskLine text="A longer chain dissolves less" at={0} size={50} y={130} />
			<g opacity={up}>
				{WG.w.map((w, i) => <WaterMol key={i} p={w} />)}
				{WG.pairs.map(([a, b], k) => <HBond key={k} a={WG.w[a].o} b={WG.w[b].o} at={-100} o={near.some(n => n[0] === a && n[1] === b) ? 1 - prog(f, K12.breaking + 40, 20) : 1} flash={near.some(n => n[0] === a && n[1] === b) ? K12.breaking : undefined} />)}
				<AlcAt a={HEX} x={880} y={520} s={0.9} at={K12.but} ring={K12.but + 20} />
				<Tag x={1340} y={330} text="long chain: breaks bonds, can't replace" at={K12.breaking} size={26} color={OXY_INK} fill="#f5ddd3" />
			</g>
			<g opacity={strip}>
				<Tag x={96} y={860} text="C1 to C3: mix in any proportion" at={K12.drops} size={28} o={dimAt(f, K12.butanol, 0.5)} />
				<Tag x={620} y={860} text="butan-1-ol: partly" at={K12.butanol} size={28} o={dimAt(f, K12.hexanol, 0.5)} />
				<Tag x={940} y={860} text="hexan-1-ol: barely" at={K12.hexanol} size={28} />
				<Tag x={96} y={930} text="no sharp cut-off" at={K12.drops + 30} size={22} />
			</g>
			<PlateC p={ALC_TUBES} cx={1560} top={420} h={420} o={vis(f, K12.layer)} />
			<Tag x={1400} y={870} text="ethanol + water: one layer" at={K12.layer + 10} size={22} anchor="middle" />
			<Tag x={1720} y={910} text="hexan-1-ol on top, water below" at={K12.layer + 20} size={22} anchor="middle" />
			<Tag x={1260} y={980} text="long chains: mix with non-polar solvents (dispersion forces)" at={K12.layer + 50} size={22} anchor="middle" />
			{void K12.longer}{void P}
		</Overlay>
	);
};

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {so: 'So, the', chain: 'Then the', same: 'Same size?', classify: 'to classify'});
const CARDS = [['OH: hydrogen bonds → higher boiling point than an', 'alkane of the same size; small alcohols mix with water'], ['longer chain: higher boiling point, lower solubility', '(polar head, non-polar tail)'], ['classify: C–OH carbon, count its carbons: 1°, 2°, 3°']];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [K13.so, K13.chain, K13.classify];
	return (
		<Overlay>
			<Sx x={960} y={230} text="Same size? Hydrogen bonding wins. Same family? Size wins." size={58} color={RED} anchor="middle" hand at={K13.same} />
			{CARDS.map((c, i) => {
				const o = prog(f, lit[i], 12) * (lit[i + 1] === undefined ? 1 : 1 - 0.5 * prog(f, lit[i + 1], 12));
				if (o <= 0.01) return null;
				return (
					<g key={i} opacity={o}>
						<rect x={260} y={330 + i * 190} width={1400} height={160} rx={18} fill="#fffdf8" stroke={i === 0 ? VIOLET : i === 1 ? '#2d6f9e' : RED} strokeWidth={3} />
						{c.map((t, k) => <Sx key={k} x={300} y={400 + i * 190 + k * 50} text={t} size={34} color={INK} weight={700} at={-1000} />)}
					</g>
				);
			})}
		</Overlay>
	);
};
