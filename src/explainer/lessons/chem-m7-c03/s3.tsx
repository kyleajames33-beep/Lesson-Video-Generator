// M7 C03 scenes 9 to 13: longer chains boil higher (a temporary dipole; methane against octane contact; the boiling
// point strip with methane, butane, pentane and octane; wax solid), branches boil lower (the three C5H12 isomers; the
// zigzag outline; spaghetti against balls; the stove callback), between series (hexane, hex-1-ene, hex-1-yne within
// about 8 °C; decane about 100 °C higher), solubility (the water lattice; hexane forms a layer; hexane and heptane
// mix) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Overlay, PicH, Sx, TEAL, TaskLine, picW, smooth} from '../chem-m6-c01/parts';
import {
	BallStick, CHAIN_INK, DISP, Dots, Edges, MULTI, NAVY, Skel, Tag, TickMark, V2, VIOLET, alkane3d, isomer3d, proj, zig,
} from '../chem-m7-c01/molecules';
import type {Bond} from '../chem-m7-c01/molecules';
import {Burner} from '../chem-m7-c01/s1';
import {CANDLE, TUBES, TUBES_UV, sc} from './common';
import {Cloud, Contact, GChip, HBond, Mark, STRIP, Strip, WaterMol, lerp, ty, vis, waterGrid} from './parts';
import {ThreeStrip} from './s1';

const chainB = (n: number): Bond[] => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));

// ---------- 9. Longer chains boil higher ----------
const K9 = cues(sc('chain-length'), {disp: 'Dispersion forces come', shifting: 'electrons shifting', temp: 'temporary dipole', attracts: 'attracts the next', longer: 'A longer chain', electrons: 'more electrons', surface: 'surface to touch', once: 'at once', energy: 'more energy', rises: 'point rises', methane: 'Methane boils', octane: ['octane at', 1], wax: 'Wax chains', solid: 'solid.'});
const METH = alkane3d(1), OCT = alkane3d(8);
export const SceneChain: React.FC = () => {
	const f = useCurrentFrame();
	const aO = vis(f, 0, K9.surface - 6);
	const s1 = smooth(prog(f, K9.shifting + 6, 26)), s2 = smooth(prog(f, K9.temp + 16, 26));
	const Z1 = zig(5, 440, 430, 80, 46), Z2 = zig(5, 440, 600, 80, 46);
	const bO = vis(f, K9.surface);
	return (
		<Overlay>
			{/* a temporary dipole induces one in the neighbour */}
			<g opacity={aO}>
				<Cloud x={600} y={430} w={420} h={120} shift={s1} />
				<Cloud x={600} y={600} w={420} h={120} shift={-s2} />
				<Skel pts={Z1} bonds={chainB(5)} at={-100} width={6} />
				<Skel pts={Z2} bonds={chainB(5)} at={-100} width={6} />
				<Dots a={[760, 470]} b={[760, 560]} at={K9.attracts} color={DISP} width={5} flicker />
				<Tag x={860} y={490} text="temporary dipole → attraction" at={K9.attracts} out={K9.longer + 10} size={30} color="#2d6f9e" fill="#e3f0fa" />
			</g>
			{/* more surface: methane against octane */}
			<g opacity={bO}>
				<Sx x={330} y={330} text="methane" size={32} color={INK_SOFT} anchor="middle" weight={700} at={K9.surface} />
				<BallStick {...METH} cx={330} cy={430} unitPx={70} yaw={0.4} pitch={0.3} />
				<BallStick {...METH} cx={330} cy={545} unitPx={70} yaw={0.9} pitch={0.3} />
				<Contact x1={310} x2={350} y={488} h={30} at={K9.surface + 20} />
				<Sx x={330} y={660} text="few attractions" size={32} color="#2d6f9e" anchor="middle" hand at={K9.once - 30} />
				<Sx x={880} y={330} text="octane" size={32} color={INK_SOFT} anchor="middle" weight={700} at={K9.surface + 10} />
				<BallStick {...OCT} cx={880} cy={430} unitPx={70} yaw={0.1} pitch={0.3} />
				<BallStick {...OCT} cx={880} cy={545} unitPx={70} yaw={0.1} pitch={0.3} />
				<Contact x1={690} x2={1070} y={488} h={34} at={K9.surface + 30} />
				<Sx x={880} y={660} text="many attractions" size={32} color="#2d6f9e" anchor="middle" hand at={K9.once - 10} />
				<Tag x={600} y={740} text="more electrons, more contact → stronger dispersion forces" at={K9.energy - 20} size={30} anchor="middle" />
				<Tag x={600} y={810} text="more energy to separate → higher boiling point" at={K9.rises} size={30} anchor="middle" color={INK} fill="#fffdf8" />
			</g>
			<Strip at={K9.energy} />
			<Mark T={-162} label="methane −162 °C" at={K9.methane} />
			<Mark T={-1} label="butane −1 °C" at={K9.methane + 50} color={INK_SOFT} />
			<Mark T={126} label="octane 126 °C" at={K9.octane} />
			<Mark T={36} label="pentane 36 °C" at={K9.octane + 40} color={CHAIN_INK} />
			<Tag x={1180} y={ty(36) - 20} text="first liquid: C5" at={K9.octane + 50} out={K9.wax + 20} size={24} anchor="end" />
			<g opacity={vis(f, K9.solid - 10)}><PicH p={CANDLE} x={1290} y={170} h={140} /></g>
			<Sx x={1325} y={345} text="wax: solid at 25 °C" size={26} color={INK} anchor="middle" weight={700} at={K9.solid} />
			{void K9.disp}{void K9.longer}{void K9.electrons}{void STRIP}
		</Overlay>
	);
};

// ---------- 10. Branches boil lower ----------
const K10 = cues(sc('branching'), {branching: 'Branching works', pent: 'Pentane, two-methylbutane', c5: 'all C five', electrons: 'number of electrons', fall: 'fall:', t36: 'thirty six', t28: 'twenty eight', t10: 'then ten', straight: 'A straight chain', zig: 'zigzagging', along: 'lie alongside', spag: 'spaghetti.', ball: 'ball,', smaller: 'smaller area', less: 'Less contact', lower: 'lower boiling point'});
const PENT = alkane3d(5), MB = isomer3d('2-methylbutane'), DMP = isomer3d('2,2-dimethylpropane');
export const SceneBranch: React.FC = () => {
	const f = useCurrentFrame();
	const X = [270, 690, 1110], Y = 280;
	const names = ['pentane', '2-methylbutane', '2,2-dimethylpropane'];
	const mols = [PENT, MB, DMP];
	const dimL = f >= K10.lower ? 0.35 : 1;
	const P = proj(PENT, X[0], Y, 80, 0.15, 0.3);
	return (
		<Overlay>
			<Strip at={-100} />
			{mols.map((m, i) => <BallStick key={i} {...m} cx={X[i]} cy={Y} unitPx={80} yaw={0.15} pitch={0.3} o={vis(f, K10.pent + i * 14)} />)}
			{names.map((n, i) => <Sx key={n} x={X[i]} y={Y + 110} text={n} size={30} color={INK} anchor="middle" weight={700} at={K10.pent + i * 14} />)}
			<GChip x={690} y={420} text="C_5H_12: same electrons" at={K10.c5} size={32} anchor="middle" o={f >= K10.straight ? 0.45 : 1} />
			<g opacity={dimL}>
				<Mark T={36} label="pentane 36 °C" at={K10.t36} dy={-24} />
				<Mark T={28} label="2-methylbutane 28 °C" at={K10.t28} dy={8} />
				<Mark T={10} label="2,2-dimethylpropane 10 °C" at={K10.t10} dy={30} size={24} />
			</g>
			<Edges pts={[P[0], P[2], P[8], P[9]]} at={K10.zig} out={K10.along - 6} color={VIOLET} />
			{/* spaghetti against balls */}
			<g opacity={vis(f, K10.along - 10)}>
				<BallStick {...PENT} cx={430} cy={550} unitPx={75} yaw={0.1} pitch={0.3} />
				<BallStick {...PENT} cx={430} cy={640} unitPx={75} yaw={0.1} pitch={0.3} />
				<Contact x1={300} x2={560} y={595} h={30} at={K10.along + 10} />
				<Sx x={430} y={800} text="straight chains: like spaghetti" size={38} color={TEAL} anchor="middle" hand at={K10.spag} opacity={dimL} />
				<Sx x={640} y={605} text="many" size={32} color="#2d6f9e" hand at={K10.spag + 10} />
			</g>
			<g opacity={vis(f, K10.ball - 10)}>
				<BallStick {...DMP} cx={1000} cy={505} unitPx={58} yaw={0.4} pitch={0.3} />
				<BallStick {...DMP} cx={1000} cy={680} unitPx={58} yaw={1.0} pitch={0.3} />
				<Contact x1={985} x2={1015} y={593} h={26} at={K10.ball + 10} />
				<Sx x={1000} y={800} text="branched: like balls" size={38} color={TEAL} anchor="middle" hand at={K10.ball} opacity={dimL} />
				<Sx x={1110} y={605} text="fewer" size={32} color="#2d6f9e" hand at={K10.less} />
			</g>
			{/* silent callback: the stove's two isomers, now explained */}
			<Burner x={60} y={850} h={190} o={vis(f, K10.lower)} />
			<Tag x={230} y={870} text="butane: about −1 °C" at={K10.lower + 6} size={26} />
			<Tag x={230} y={930} text="2-methylpropane: about −12 °C" at={K10.lower + 12} size={26} />
			<TickMark x={640} y={930} at={K10.lower + 24} />
			<Sx x={670} y={940} text="explained" size={32} color="#1f6b44" hand at={K10.lower + 26} />
			{void K10.branching}{void K10.electrons}{void K10.fall}{void K10.smaller}{void ty}
		</Overlay>
	);
};

// ---------- 11. Between series: size matters most ----------
const K11 = cues(sc('between-series'), {size: 'size still wins', hexane: 'Hexane, hex-one-ene', six: 'all six carbons', eight: 'about eight', decane: 'Decane, with', hundred: 'a hundred degrees', chain: 'chain length usually', type: 'type of bond'});
const yne = (x0: number, y: number): V2[] => [[x0, y], [x0 + 80, y], [x0 + 160, y], [x0 + 230, y - 40], [x0 + 300, y], [x0 + 370, y - 40]];
export const SceneBetween: React.FC = () => {
	const f = useCurrentFrame();
	const rows: {name: string; pts: V2[]; bonds: Bond[]; T: number; y: number}[] = [
		{name: 'hexane', pts: zig(6, 360, 300, 74, 44), bonds: chainB(6), T: 69, y: 300},
		{name: 'hex-1-ene', pts: zig(6, 360, 450, 74, 44), bonds: chainB(6).map((b, k) => (k === 0 ? {...b, order: 2 as const, color: MULTI} : b)), T: 63, y: 450},
		{name: 'hex-1-yne', pts: yne(360, 600), bonds: chainB(6).map((b, k) => (k === 0 ? {...b, order: 3 as const, color: MULTI} : b)), T: 71, y: 600},
	];
	return (
		<Overlay>
			<Strip at={-100} />
			{rows.map((r, i) => (
				<g key={r.name}>
					<Sx x={120} y={r.y + 10} text={r.name} size={32} color={INK} weight={700} at={K11.hexane + i * 14} />
					<Skel pts={r.pts} bonds={r.bonds} at={K11.hexane + i * 14} width={6} />
					<Sx x={800} y={r.y + 10} text={`${r.T} °C`} size={34} color={NAVY} weight={800} at={K11.eight + i * 6} />
					<Mark T={r.T} label="" at={K11.eight + i * 6} color={NAVY} />
				</g>
			))}
			<DrawPath d={`M${STRIP.x + 22},${ty(71) - 4} L${STRIP.x + 36},${ty(71) - 4} L${STRIP.x + 36},${ty(63) + 4} L${STRIP.x + 22},${ty(63) + 4}`} at={K11.eight + 24} dur={10} color={NAVY} width={3.5} />
			<Sx x={STRIP.x + 48} y={ty(67) + 9} text="within about 8 °C" size={26} color={NAVY} weight={700} at={K11.eight + 28} />
			<Sx x={120} y={790} text="decane" size={32} color={INK} weight={700} at={K11.decane} />
			<Skel pts={zig(10, 300, 780, 50, 40)} bonds={chainB(10)} at={K11.decane} stagger={3} width={6} />
			<Sx x={800} y={790} text="174 °C" size={34} color="#a3321f" weight={800} at={K11.decane + 20} />
			<Mark T={174} label="decane 174 °C" at={K11.decane + 20} color="#a3321f" />
			<DrawPath d={`M${STRIP.x - 80},${ty(174)} L${STRIP.x - 96},${ty(174)} L${STRIP.x - 96},${ty(69)} L${STRIP.x - 80},${ty(69)}`} at={K11.hundred} dur={14} color="#a3321f" width={3.5} />
			<Sx x={STRIP.x - 106} y={(ty(174) + ty(69)) / 2 - 6} text="+4 carbons:" size={28} color="#a3321f" anchor="end" weight={700} at={K11.hundred + 8} />
			<Sx x={STRIP.x - 106} y={(ty(174) + ty(69)) / 2 + 28} text="about +100 °C" size={28} color="#a3321f" anchor="end" weight={700} at={K11.hundred + 12} />
			<GChip x={120} y={880} text="chain length > bond type" at={K11.type} size={40} color="#1f6b44" fill="#e3f3e9" />
			{void K11.size}{void K11.six}{void K11.chain}
		</Overlay>
	);
};

// ---------- 12. Solubility ----------
const K12 = cues(sc('solubility'), {sol: 'Now solubility', water: 'Water molecules', hb: 'strong hydrogen bonds', dissolve: 'To dissolve', push: 'push in', breaking: 'breaking those', offer: 'offer weak', layer: 'separate layer', top: 'on top', heptane: 'In heptane', mix: 'mix completely', like: 'Like dissolves', replace: 'replace the ones'});
const WG = waterGrid(250, 330, 5, 4, 128);
export const SceneSol: React.FC = () => {
	const f = useCurrentFrame();
	const pin = smooth(prog(f, K12.push, 40)), pout = smooth(prog(f, K12.offer + 60, 40));
	const depth = pin * (1 - pout);
	const hx = lerp(-120, 330, depth), hy = 480;
	const H = zig(6, hx, hy, 62, 38);
	const latO = vis(f, K12.water - 10, K12.heptane);
	const near = (y: number) => Math.abs(y - hy) < 120;
	const push = (p: V2): V2 => (near(p[1]) && p[0] < hx + 330 ? [0, Math.sign(p[1] - hy || 1) * 42 * depth] : [0, 0]);
	const tw = picW(TUBES, 600), tx = 1250, tyy = 260;
	const L = tx + tw * TUBES_UV.left, R = tx + tw * TUBES_UV.right;
	const yTop = tyy + 600 * TUBES_UV.top, yB = tyy + 600 * TUBES_UV.boundary, yBot = tyy + 600 * TUBES_UV.bottom;
	const lab = vis(f, K12.layer);
	const mixO = vis(f, K12.heptane + 10);
	return (
		<Overlay>
			<TaskLine text="Why does hexane form a layer on water?" at={K12.sol} size={50} y={150} />
			<g opacity={latO}>
				{WG.pairs.map(([i, j], k) => {
					const a = WG.w[i], b = WG.w[j];
					const sa = push(a.o), sb = push(b.o);
					const mid = (a.o[1] + b.o[1]) / 2;
					const hit = near(mid) && Math.min(a.o[0], b.o[0]) < 330 + 330;
					return <HBond key={k} a={[a.o[0] + sa[0], a.o[1] + sa[1]]} b={[b.o[0] + sb[0], b.o[1] + sb[1]]} at={K12.water + k * 2} glow={K12.hb} flash={hit ? K12.breaking : undefined} o={hit ? 1 - 0.7 * depth : 1} />;
				})}
				{WG.w.map((w, i) => <WaterMol key={i} p={w} shift={push(w.o)} o={prog(f, K12.water - 10 + i * 2, 10)} />)}
				<g opacity={vis(f, K12.push - 6, K12.offer + 100)}><Skel pts={H} bonds={chainB(6)} at={K12.push - 6} width={7} color={CHAIN_INK} /></g>
				{[0, 2, 4].map(k => <Dots key={k} a={H[k]} b={[H[k][0] + 10, H[k][1] + (k % 4 ? 70 : -70)]} at={K12.offer} out={K12.offer + 70} color={DISP} width={4} flicker />)}
				<Tag x={150} y={790} text="breaks strong H bonds, gives back weak dispersion" at={K12.offer} out={K12.layer} size={30} color="#8f3f26" fill="#f7e6df" />
				<Tag x={150} y={850} text="from Year 11: water's hydrogen bonds" at={K12.water + 10} out={K12.push} size={26} />
			</g>
			{/* hexane and heptane mingle */}
			<g opacity={mixO * (f >= K12.replace ? 0.4 : 1)}>
				{[0, 1, 2, 3].map(k => {
					const n = k % 2 ? 7 : 6;
					const x0 = 260 + (k % 2) * 90 + Math.sin(f * 0.03 + k) * 18, y0 = 380 + k * 95 + Math.cos(f * 0.025 + k * 2) * 10;
					return <Skel key={k} pts={zig(n, x0, y0, 60, 36)} bonds={chainB(n)} at={K12.heptane + 10 + k * 6} width={6} color={k % 2 ? NAVY : CHAIN_INK} />;
				})}
				{[0, 1, 2].map(k => [0, 1, 2].map(j => <Dots key={`${k}${j}`} a={[300 + j * 120 + (k % 2) * 60, 400 + k * 95]} b={[300 + j * 120 + (k % 2) * 60 + 20, 460 + k * 95]} at={K12.mix + j * 4} color={DISP} width={4} flicker />))}
				<Sx x={280} y={330} text="hexane" size={28} color={CHAIN_INK} weight={700} at={K12.heptane + 10} />
				<Sx x={560} y={330} text="heptane" size={28} color={NAVY} weight={700} at={K12.heptane + 16} />
				<Tag x={150} y={790} text="dispersion ↔ dispersion" at={K12.mix} size={30} color="#2d6f9e" fill="#e3f0fa" o={f >= K12.like ? 0.4 : 1} />
			</g>
			{/* the real observation */}
			<g opacity={vis(f, K12.layer - 6)}><PicH p={TUBES} x={tx} y={tyy} h={600} /></g>
			<g opacity={lab * (f >= K12.mix ? 0.75 : 1)}>
				<DrawPath d={`M${L - 20},${(yTop + yB) / 2} L${tx - 50},${(yTop + yB) / 2}`} at={K12.layer} dur={10} color={INK_SOFT} width={3} />
				<Sx x={tx - 60} y={(yTop + yB) / 2 + 10} text="hexane" size={32} color={CHAIN_INK} anchor="end" weight={800} at={K12.layer} />
				<DrawPath d={`M${L - 20},${(yB + yBot) / 2} L${tx - 50},${(yB + yBot) / 2}`} at={K12.top} dur={10} color={INK_SOFT} width={3} />
				<Sx x={tx - 60} y={(yB + yBot) / 2 + 10} text="water" size={32} color="#2c5f8a" anchor="end" weight={800} at={K12.top} />
			</g>
			<g opacity={vis(f, K12.mix)}>
				<DrawPath d={`M${R + 20},${(yTop + yBot) / 2} L${R + 80},${(yTop + yBot) / 2}`} at={K12.mix} dur={10} color={INK_SOFT} width={3} />
				<Sx x={R + 90} y={(yTop + yBot) / 2 - 8} text="hexane + heptane:" size={28} color={NAVY} weight={800} at={K12.mix} />
				<Sx x={R + 90} y={(yTop + yBot) / 2 + 28} text="one layer" size={28} color={NAVY} weight={800} at={K12.mix + 6} />
			</g>
			<GChip x={960} y={930} text="dissolving: attractions broken must be replaced by similar ones" at={K12.replace} size={32} color="#1f6b44" fill="#e3f3e9" anchor="middle" />
			{void K12.dissolve}{void K12.like}{void VIOLET}{void INK}
		</Overlay>
	);
};

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {so: 'So, at each', count: 'count the bonding', four: 'four, three', tet: 'give tetrahedral', between: 'Between molecules', contact: 'more contact', longer: 'longer chains', branched: 'branched chains', lower: 'boil lower'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const d1 = f >= K13.between + 10 ? 0.6 : 1;
	return (
		<Overlay>
			<g opacity={d1}>
				<Sx x={110} y={240} text="1  At each carbon: 4 → tetrahedral 109.5°, 3 → trigonal planar ~120°, 2 → linear 180°" size={44} color={VIOLET} hand at={K13.count} />
				<ThreeStrip at={K13.four} y={380} u={62} labels={false} />
			</g>
			<Sx x={110} y={570} text="2  Between molecules: more contact → stronger dispersion → higher boiling point" size={44} color={TEAL} hand at={K13.between} />
			<g opacity={vis(f, K13.longer - 6)}>
				<Skel pts={zig(3, 260, 760, 70, 42)} bonds={chainB(3)} at={K13.longer - 6} width={6} />
				<Skel pts={zig(7, 260, 860, 70, 42)} bonds={chainB(7)} at={K13.longer} stagger={3} width={6} />
				<DrawPath d="M760,900 L760,740 M744,762 L760,740 L776,762" at={K13.longer + 10} dur={12} color="#a3321f" width={5} />
				<Sx x={790} y={830} text="longer: higher" size={36} color="#a3321f" hand at={K13.longer + 14} />
			</g>
			<g opacity={vis(f, K13.branched - 6)}>
				<Skel pts={zig(5, 1100, 770, 70, 42)} bonds={chainB(5)} at={K13.branched - 6} width={6} />
				<Skel pts={[[1140, 880], [1210, 880], [1280, 880], [1210, 810], [1210, 950]]} bonds={[{a: 0, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]} at={K13.branched} width={6} />
				<DrawPath d="M1440,740 L1440,900 M1424,878 L1440,900 L1456,878" at={K13.branched + 10} dur={12} color="#2c5f8a" width={5} />
				<Sx x={1470} y={800} text="branched: lower" size={36} color="#2c5f8a" hand at={K13.branched + 14} />
				<Sx x={1470} y={850} text="spaghetti / balls" size={32} color={INK_SOFT} hand at={K13.lower} />
			</g>
			{void K13.so}{void K13.tet}{void K13.contact}{void TEAL}
		</Overlay>
	);
};
