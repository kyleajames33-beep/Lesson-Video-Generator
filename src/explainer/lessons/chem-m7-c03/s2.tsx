// M7 C03 scenes 5 to 8: the alkane ladder (methane to octane, + CH2 each step, CnH2n+2, n = 8), alkenes and alkynes
// (each multiple bond removes two hydrogens, drawn in full structural butane; the formula column; same bonding, similar
// reactions), a series is not a set of isomers (propane, butane, 2-methylpropane) and intramolecular against
// intermolecular (three pentanes; dispersion lines; boiling pulls the molecules apart with every covalent bond intact).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {
	BallStick, Brace, Crossed, DISP, Dots, FullMol, HGREY, MULTI, Place, Skel, Tag, TickMark, V2, alkane3d, fullAlkane, isomer3d, zig,
} from '../chem-m7-c01/molecules';
import type {FAtom, FBond} from '../chem-m7-c01/molecules';
import {M, SkelAt} from '../chem-m7-c02/parts';
import {WhatChanged} from '../chem-m7-c02/parts';
import {sc} from './common';
import {GChip, GF, lerp, vis} from './parts';

const GLOW = '#f6d77a';
const FORM = ['CH_4', 'C_2H_6', 'C_3H_8', 'C_4H_10', 'C_5H_12', 'C_6H_14', 'C_7H_16', 'C_8H_18'];
const NAMES8 = ['methane', 'ethane', 'propane', 'butane', 'pentane', 'hexane', 'heptane', 'octane'];

// ---------- 5. A homologous series and its general formula ----------
const K5 = cues(sc('homologous-series'), {line: 'Line up', methane: 'from methane', octane: 'to octane', each: 'Each one', ch2: ['C H two', 1], family: 'A family like', hom: 'homologous series', members: 'members built', differing: 'differing by', one: 'One general formula', alk: 'For alkanes', gf: 'C n H two n', oct: 'For octane', c8: 'C eight H'});
const ROWY = [905, 810, 715, 620, 545, 495, 445, 340];
const LADX = 560;
const MOLS = Array.from({length: 8}, (_, i) => alkane3d(i + 1));
export const Ladder: React.FC<{times: number[]; glowAt?: number; pulseAt?: number; octGlow?: number; o?: number; formulas?: boolean; plus?: number}> = ({times, glowAt, pulseAt, octGlow, o = 1, formulas = true, plus}) => {
	const f = useCurrentFrame();
	const pl = pulseAt === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulseAt) / 30)) * Math.PI));
	return (
		<g opacity={o}>
			{MOLS.map((m, i) => {
				const ghost = i >= 4 && i <= 6;
				const v = vis(f, times[i]);
				if (v <= 0.01) return null;
				const n = i + 1;
				const added = (k: number) => n > 1 && (k === n - 1 || k >= m.atoms.length - 3);
				const g = glowAt !== undefined && f >= glowAt && !ghost ? (k: number) => (added(k) || (i === 7 && octGlow !== undefined && f >= octGlow) ? GLOW : undefined) : i === 7 && octGlow !== undefined && f >= octGlow ? () => GLOW : undefined;
				return (
					<g key={i} opacity={v * (ghost ? 0.35 : 1)}>
						{ghost ? <circle cx={LADX} cy={ROWY[i]} r={7} fill={HGREY} /> : <BallStick {...m} cx={LADX} cy={ROWY[i]} unitPx={52} yaw={0.15} pitch={0.25} glowAtoms={g} scaleR={1 + 0.15 * pl} />}
						{formulas ? <GF x={880} y={ROWY[i] + (ghost ? 8 : 12)} text={FORM[i]} size={ghost ? 24 : 36} color={ghost ? HGREY : INK} weight={700} /> : null}
						{formulas && !ghost ? <Sx x={250} y={ROWY[i] + 10} text={NAMES8[i]} size={28} color={INK_SOFT} anchor="end" weight={600} at={-1000} /> : null}
					</g>
				);
			})}
			{plus !== undefined ? [1, 2, 3].map(k => <Tag key={k} x={1040} y={ROWY[k] - 24} text="+ CH_2" at={plus + (k - 1) * 14} size={26} color="#8a6a0c" fill="#fff3d6" />) : null}
		</g>
	);
};
export const SceneSeries: React.FC = () => {
	const f = useCurrentFrame();
	const t = [K5.methane - 30, K5.methane - 14, K5.methane, K5.methane + 14, K5.octane, K5.octane + 6, K5.octane + 12, K5.octane + 20];
	return (
		<Overlay>
			<TaskLine text="Build a series" at={K5.line} size={52} y={150} />
			<Ladder times={t} glowAt={K5.each} pulseAt={K5.ch2} octGlow={K5.c8} plus={K5.each} />
			<g opacity={f >= K5.gf ? 0.45 : 1}>
				<GChip x={1180} y={360} text="homologous series" at={K5.hom} size={34} color={TEAL} fill="#dff2ef" />
				<GChip x={1180} y={430} text="same functional group (if any)" at={K5.members + 30} size={28} />
				<GChip x={1180} y={490} text="each member + CH_2" at={K5.differing} size={28} />
			</g>
			<GChip x={1180} y={600} text="alkanes: C_{n}H_{2n+2}" at={K5.gf} size={46} color={INK} />
			<GF x={1200} y={740} text="n = 8:  2(8) + 2 = 18" size={38} color={INK_SOFT} weight={700} at={K5.oct} />
			<g opacity={vis(f, K5.c8)}><rect x={862} y={ROWY[7] - 36} width={130} height={64} rx={14} fill="none" stroke="#2f8a5b" strokeWidth={4} /></g>
			<TickMark x={1024} y={ROWY[7] + 2} at={K5.c8 + 6} />
			{void K5.family}{void K5.one}{void K5.alk}
		</Overlay>
	);
};

// ---------- 6. Alkenes and alkynes, and what a series shares ----------
const K6 = cues(sc('alkene-alkyne-series'), {alkenes: 'Alkenes form', fg: 'functional group is', cdc: 'C double bond', making: 'Making one', two: 'two hydrogens', so: 'so alkenes', cnh2n: ['C n H two n', 1], triple: 'A triple bond', more: 'two more', alkynes: 'so alkynes', minus: 'minus two', alkanes: 'Alkanes have', none: 'no functional group', members: 'Members of a', react: 'react alike', physical: 'physical properties'});
const BX0 = 380, BY0 = 600, BSP = 170;
export const SceneAlkenes: React.FC = () => {
	const f = useCurrentFrame();
	const base = fullAlkane(4, BX0, BY0, BSP);
	const order: 1 | 2 | 3 = f >= K6.triple + 10 ? 3 : f >= K6.making ? 2 : 1;
	const gone1 = [4, 7], gone2 = [5, 8];
	const atoms: FAtom[] = base.atoms.map((a, i) => {
		const g = gone1.includes(i) ? K6.two - 6 : gone2.includes(i) ? K6.more - 6 : undefined;
		return g === undefined ? {...a, at: -100} : {...a, at: -100, to: [a.p[0] + (i === 4 || i === 5 ? -40 : 40), a.p[1] + (i === 4 || i === 7 ? -150 : 150)], moveAt: g, moveDur: 30, out: g + 22, color: f >= g - 10 ? '#c4432f' : undefined};
	});
	const bonds: FBond[] = base.bonds.map((b, k) => (k === 0 ? {...b, order, color: order > 1 ? MULTI : undefined} : b));
	const molO = f >= K6.react ? 0.35 : 1;
	const colO = f >= K6.react ? 0.3 : 1;
	const fgRing = vis(f, K6.cnh2n);
	return (
		<Overlay>
			{/* the alkane ladder, small and dim at the left */}
			<g opacity={0.35 * (1 - prog(f, K6.making, 14))}>
				{FORM.map((t, i) => <GF key={i} x={100} y={260 + i * 44} text={t} size={30} color={INK_SOFT} weight={700} />)}
			</g>
			<g opacity={molO}>
				<FullMol atoms={atoms} bonds={bonds} size={46} />
				{fgRing > 0.01 ? <ellipse cx={BX0 + BSP / 2} cy={BY0} rx={110} ry={44} fill="none" stroke={TEAL} strokeWidth={4} opacity={fgRing} strokeDasharray="10 6" /> : null}
				<Tag x={BX0 + BSP / 2} y={300} text="1 C=C: −2 H" at={K6.two} out={K6.triple} size={30} color="#a3321f" fill="#fbe8e3" anchor="middle" />
				<Tag x={BX0 + BSP / 2} y={300} text="C≡C: −2 more H" at={K6.more} size={30} color="#a3321f" fill="#fbe8e3" anchor="middle" />
				<GChip x={BX0 + 240} y={790} text="but-1-ene: C_4H_8" at={K6.so} out={K6.triple + 10} size={34} anchor="middle" />
				<GChip x={BX0 + 240} y={790} text="but-1-yne: C_4H_6" at={K6.alkynes} size={34} anchor="middle" />
			</g>
			<g opacity={colO}>
				<GChip x={1000} y={290} text="alkanes C_{n}H_{2n+2} (no functional group, single bonds)" at={K6.alkanes} size={28} />
				<GChip x={1000} y={390} text="alkenes C_{n}H_{2n} (one C=C, no ring)" at={K6.cnh2n} size={28} color={TEAL} o={f >= K6.minus ? 0.45 : 1} />
				<GChip x={1030} y={450} text="no ring: rings (cyclobutane) also fit C_{n}H_{2n}" at={K6.cnh2n + 30} out={K6.minus} size={22} color={HGREY} />
				<GChip x={1000} y={510} text="alkynes C_{n}H_{2n−2} (one C≡C, no ring)" at={K6.minus} size={28} color={TEAL} o={f >= K6.alkanes ? 0.45 : 1} />
			</g>
			{/* same bonding, similar reactions; size changes physical properties gradually */}
			<g opacity={vis(f, K6.react - 6)}>
				{[2, 3, 4].map((n, k) => {
					const Z = zig(n, 1080 + k * 0 - (n - 2) * 40, 720 + k * 90 - 60, 80, 46);
					const pl = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K6.react - 10) / 30)) * Math.PI));
					return (
						<g key={k}>
							<Skel pts={Z} bonds={Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1, order: i === 0 ? 2 : 1, color: i === 0 ? MULTI : undefined})) as {a: number; b: number; order: 1 | 2; color?: string}[]} at={K6.react - 6 + k * 6} width={6} />
							<circle cx={(Z[0][0] + Z[1][0]) / 2} cy={(Z[0][1] + Z[1][1]) / 2} r={34 * (1 + 0.15 * pl)} fill="none" stroke={TEAL} strokeWidth={3} strokeDasharray="6 5" />
						</g>
					);
				})}
				<Tag x={1360} y={600} text="same bonding → similar reactions" at={K6.react} size={30} color={TEAL} fill="#dff2ef" />
				<DrawPath d="M1420,880 L1420,700 M1404,722 L1420,700 L1436,722" at={K6.physical} dur={14} color={INK_SOFT} width={4} />
				<Sx x={1450} y={800} text="size → physical properties" size={34} color={INK_SOFT} hand at={K6.physical} />
				<Sx x={1450} y={842} text="change gradually" size={34} color={INK_SOFT} hand at={K6.physical + 6} />
			</g>
			{void K6.alkenes}{void K6.fg}{void K6.cdc}{void K6.none}{void K6.members}{void lerp}
		</Overlay>
	);
};

// ---------- 7. A series is not a set of isomers ----------
const K7 = cues(sc('series-vs-isomers'), {confuse: "Don't confuse", propane: 'Propane and', ch2: 'C H two', neighbours: 'neighbours in', butane: 'Butane and two-methylpropane', share: 'share one', isomers: ["they're isomers", 1], series: 'Series members', same: 'the same formula'});
const PROPANE = {pts: zig(3, -110, 0, 110, 64), bonds: [{a: 0, b: 1}, {a: 1, b: 2}]};
export const SceneSeriesIso: React.FC = () => {
	const f = useCurrentFrame();
	const X = [440, 960, 1480], Y = 520;
	return (
		<Overlay>
			<SkelAt m={PROPANE} x={X[0]} y={Y} at={K7.propane} width={7} />
			<SkelAt m={M.butane} x={X[1]} y={Y} at={K7.propane + 10} width={7} />
			<SkelAt m={M.methylpropane} x={X[2] + 55} y={Y} at={K7.butane + 10} width={7} />
			{['propane', 'butane', '2-methylpropane'].map((n, i) => <Sx key={n} x={X[i]} y={Y + 110} text={n} size={32} color={INK_SOFT} anchor="middle" weight={700} at={[K7.propane, K7.propane + 10, K7.butane + 10][i]} />)}
			{['C_3H_8', 'C_4H_10', 'C_4H_10'].map((t, i) => <GChip key={i} x={X[i]} y={Y + 140} text={t} at={[K7.propane + 6, K7.propane + 16, K7.butane + 16][i]} size={36} anchor="middle" />)}
			<Brace x1={X[0] - 120} x2={X[1] + 170} y={Y - 110} dir={-1} text="homologous series: + CH_2" at={K7.ch2} size={34} color="#8a6a0c" hand={false} />
			<Brace x1={X[1] - 170} x2={X[2] + 120} y={Y + 230} text="isomers: same formula" at={K7.isomers} size={34} color="#6b4fa0" hand={false} />
			<Place keys={[{at: -100, x: 1180, y: 60, s: 0.42}]}><g opacity={vis(f, K7.isomers + 10)}><WhatChanged at={-100} x={0} y={0} rows={[{v: 'different', lit: -100}, {v: 'n/a', grey: true}, {v: 'same (alkane)'}]} label={{text: 'chain isomers', at: -100}} /></g></Place>
			<GChip x={560} y={880} text="series: different formulas" at={K7.series} size={36} color="#8a6a0c" fill="#fff3d6" anchor="middle" />
			<GChip x={1360} y={880} text="isomers: same formula" at={K7.same} size={36} color="#6b4fa0" fill="#efe9f8" anchor="middle" />
			<DrawPath d="M560,950 L800,952" at={K7.series + 20} dur={12} color="#8a6a0c" width={4} />
			<DrawPath d="M1420,950 L1580,952" at={K7.same + 10} dur={12} color="#6b4fa0" width={4} />
			{void K7.confuse}{void K7.neighbours}{void K7.share}
		</Overlay>
	);
};

// ---------- 8. Inside molecules and between them ----------
const K8 = cues(sc('intra-vs-inter'), {props: 'Now, properties', inside: 'Inside each', covalent: 'strong covalent', intra: 'intramolecular bonding', between: 'Between molecules', weaker: 'much weaker', inter: ['intermolecular forces', 1], nonpolar: 'non-polar', disp: ['dispersion forces', 1], boils: 'boils,', apart: 'move apart', intact: 'stays intact', measures: 'boiling point measures', between2: ['forces between molecules', 1]});
const PENT = alkane3d(5);
export const SceneIntra: React.FC = () => {
	const f = useCurrentFrame();
	const d = smooth(prog(f, K8.boils + 4, 50));
	const start: V2[] = [[960, 380], [990, 570], [950, 760]], end: V2[] = [[640, 330], [1000, 580], [1360, 820]];
	const pos = start.map((p, i) => [lerp(p[0], end[i][0], d), lerp(p[1], end[i][1], d)] as V2);
	const glowM = vis(f, K8.intra - 6, K8.inter + 10);
	const lineO = 1 - prog(f, K8.boils + 10, 30);
	return (
		<Overlay>
			<TaskLine text="Why does boiling point change?" at={K8.props} size={52} y={150} />
			{pos.map((p, i) => <BallStick key={i} {...PENT} cx={p[0]} cy={p[1]} unitPx={90} yaw={0.1} pitch={0.35} o={vis(f, K8.inside - 30 + i * 6)} glowAtoms={i === 1 && glowM > 0.2 ? () => '#e8dcc4' : undefined} />)}
			<Tag x={1300} y={500} text="intramolecular: covalent bonds, strong" at={K8.intra} size={30} color={INK} fill="#fffdf8" o={f >= K8.inter ? 0.4 : 1} out={K8.boils} />
			{[0, 1].map(k => [-140, 0, 140].map((dx, j) => <Dots key={`${k}${j}`} a={[pos[k][0] + dx, pos[k][1] + 45]} b={[pos[k + 1][0] + dx, pos[k + 1][1] - 45]} at={K8.inter + j * 4} color={DISP} width={5} flicker o={lineO} />))}
			<Tag x={96} y={470} text="intermolecular: dispersion forces, weak" at={K8.inter} size={30} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={96} y={200} text="from Year 11" at={K8.inter + 10} size={24} />
			<Tag x={96} y={540} text="non-polar: dispersion forces only" at={K8.nonpolar} out={K8.boils} size={26} />
			{pos.map((p, i) => <TickMark key={i} x={p[0] + 270} y={p[1]} at={K8.intact + i * 6} />)}
			<Tag x={1080} y={250} text="covalent bonds: all intact" at={K8.intact} size={30} color="#1f6b44" fill="#e3f3e9" />
			<Crossed x={96} y={880} text="boiling breaks covalent bonds?" at={K8.measures} cross={K8.between2 + 16} note="boiling separates molecules: no covalent bond breaks" size={34} />
			{void K8.covalent}{void K8.between}{void K8.weaker}{void K8.disp}{void K8.apart}{void isomer3d}{void INK_SOFT}
		</Overlay>
	);
};
