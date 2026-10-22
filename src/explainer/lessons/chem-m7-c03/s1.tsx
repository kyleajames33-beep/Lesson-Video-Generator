// M7 C03 scenes 1 to 4: the hook (butane in the stove, wax chains in the candle: same family, gas and solid), four single
// bonds (the direction spreader on one carbon: tetrahedral, 109.5°; ethane; the zigzag chain), a double bond (three
// directions, the double bond as one; flat ethene; the second bond above and below) and a triple bond (linear ethyne;
// the kept three-model strip; propene read carbon by carbon).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, Overlay, PicH, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {
	AngleArc, BallStick, Edges, FullMol, Lobes, MULTI, NAVY, Skel, TET, Tag, V2, VIOLET, alkane3d, ethane3d, ethene3d, ethyne3d, proj, projCarbons, propene3d, zig,
} from '../chem-m7-c01/molecules';
import type {FAtom, FBond, Vec3} from '../chem-m7-c01/molecules';
import {Burner} from '../chem-m7-c01/s1';
import {CANDLE, Heading, sc} from './common';
import {PiCloud, lerp, multiCol, vis} from './parts';

const chainB = (n: number) => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {butane: 'mostly butane', four: 'four carbons', boils: 'boils near', candle: 'Candle wax', alk: 'alkanes,', twenty: 'twenty or more', solid: 'solid at room', same: 'Same family', so: 'So how'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = 1 + 0.05 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K1.same) / 26)) * Math.PI));
	const B = zig(4, 180, 330, 90, 56), W = zig(20, 1040, 330, 38, 26);
	const sl = 1 - smooth(prog(f, K1.candle, 24));
	return (
		<>
			<Heading text="How does carbon bonding explain hydrocarbon properties?" at={K1.so} size={58} />
			<Overlay>
				<Burner x={140} y={440} h={420} />
				<g transform={`translate(${315},${330}) scale(${pulse}) translate(${-315},${-330})`}><Skel pts={B} bonds={chainB(4)} at={K1.butane} width={7} /></g>
				<Tag x={110} y={890} text="butane, C_4H_10: boils near −1 °C" at={K1.boils} size={30} color={INK} fill="#fffdf8" />
				<g opacity={prog(f, K1.candle, 12)} transform={`translate(${sl * 260},0)`}><PicH p={CANDLE} x={1560} y={440} h={420} /></g>
				<g transform={`translate(${1400},${330}) scale(${pulse}) translate(${-1400},${-330})`}><Skel pts={W} bonds={chainB(20)} at={K1.twenty} stagger={2} width={3.5} /></g>
				<Sx x={1410} y={400} text="20 or more carbons" size={30} color={INK_SOFT} anchor="middle" hand at={K1.twenty + 30} />
				<Tag x={1810} y={890} text="wax alkanes: C20 or more: solid" at={K1.solid} size={30} color={INK} fill="#fffdf8" anchor="end" />
				<Tag x={960} y={600} text="both alkanes: C–C and C–H single bonds" at={K1.same} size={32} color={TEAL} fill="#dff2ef" anchor="middle" />
				{void K1.four}{void K1.alk}
			</Overlay>
		</>
	);
};

// ---------- 2. Four single bonds: tetrahedral ----------
const K2 = cues(sc('tetrahedral'), {start: 'Start with shape', four: 'four single bonds', groups: 'four groups', push: 'push each other', three: 'three dimensions', tet: 'tetrahedral shape', angle: 'one hundred and nine', ethane: 'in ethane,', are: 'are tetrahedral', chain: 'a chain of', zz: 'zigzags.'});
const ETH = ethane3d(), BUT = alkane3d(4);
export const SceneTetra: React.FC = () => {
	const f = useCurrentFrame();
	const C = {x: 760, y: 560, u: 210};
	const yaw = lerp(-1.1, 0, smooth(prog(f, K2.four, K2.angle - K2.four))) + 0.4 * smooth(prog(f, K2.ethane, 120));
	const pitch = 0.22;
	const spread = smooth(prog(f, K2.push, 36));
	const lobO = vis(f, K2.four, K2.ethane);
	const tips = TET.map(d => proj({atoms: [{el: 'C', p: [d[0] * 1.05, d[1] * 1.05, d[2] * 1.05]}]}, C.x, C.y, C.u, yaw, pitch)[0]);
	const P = proj(ETH, 700, 560, 210, yaw, pitch);
	const zp = projCarbons(BUT.atoms, 1400, 560, 150, -0.42, 0.16);
	return (
		<Overlay>
			<TaskLine text="Shape at each carbon" at={K2.start} size={52} y={150} />
			<Lobes cx={C.x} cy={C.y} unitPx={C.u} dirs={TET} yaw={yaw} pitch={pitch} len={1.05} spread={spread} bunch={[0.9, 0.5, 0.4]} o={lobO} />
			<g opacity={lobO}><circle cx={C.x} cy={C.y} r={34} fill="#4a4540" stroke={INK} strokeWidth={3} /><Sx x={C.x} y={C.y + 12} text="C" size={32} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g>
			<Edges pts={tips} at={K2.tet} out={K2.ethane} color={VIOLET} />
			<Tag x={1120} y={330} text="tetrahedral: 4 directions" at={K2.tet} size={34} color={VIOLET} fill="#f1ebfa" />
			{f < K2.ethane + 4 ? <AngleArc c={[C.x, C.y]} a={tips[0]} b={tips[1]} r={70} text="109.5°" at={K2.angle} out={K2.ethane} size={38} lab={2.1} /> : null}
			<BallStick {...ETH} cx={700} cy={560} unitPx={210} yaw={yaw} pitch={pitch} o={vis(f, K2.ethane - 4)} />
			{f >= K2.are ? <AngleArc c={P[0]} a={P[1]} b={P[2]} r={58} text="109.5°" at={K2.are} size={34} lab={2.2} /> : null}
			<BallStick {...BUT} cx={1400} cy={560} unitPx={150} yaw={-0.42} pitch={0.16} o={vis(f, K2.chain)} />
			<g opacity={vis(f, K2.zz) * 0.9}><Skel pts={zp} bonds={chainB(4)} at={K2.zz} width={6} color={NAVY} /></g>
			<Tag x={1400} y={760} text="4 directions → zigzag chain" at={K2.zz} size={32} anchor="middle" />
			{void K2.groups}{void K2.three}
		</Overlay>
	);
};

// ---------- 3. A double bond: trigonal planar ----------
const K3 = cues(sc('trigonal-planar'), {double: 'A double bond', ethene: 'in ethene', three: 'three bonding directions', two: 'two to hydrogens', one: 'one to the', counts: 'counts as one', because: 'because both', flat: 'out flat', about: 'about one hundred', trig: 'trigonal planar', second: 'second bond', above: 'above and below', weaker: 'weaker than'});
const ETE = ethene3d();
const fullEthene = (x: number, y: number, at: number): {atoms: FAtom[]; bonds: FBond[]} => {
	const atoms: FAtom[] = [{el: 'C', p: [x, y], at}, {el: 'C', p: [x + 200, y], at: at + 4}, {el: 'H', p: [x - 60, y - 104], at: at + 8}, {el: 'H', p: [x - 60, y + 104], at: at + 10}, {el: 'H', p: [x + 260, y - 104], at: at + 12}, {el: 'H', p: [x + 260, y + 104], at: at + 14}];
	return {atoms, bonds: [{a: 0, b: 1, order: 2, color: MULTI}, {a: 0, b: 2}, {a: 0, b: 3}, {a: 1, b: 4}, {a: 1, b: 5}]};
};
export const SceneTrig: React.FC = () => {
	const f = useCurrentFrame();
	const X = 860, Y = 560;
	const E = fullEthene(X, Y, K3.ethene);
	const flatO = 1 - prog(f, K3.flat + 10, 14);
	const tilt = smooth(prog(f, K3.trig, 30)), back = smooth(prog(f, K3.second, 30));
	const pitch = lerp(lerp(0.05, 1.45, tilt), 1.08, back);
	const yaw = 0.0;
	const bsO = vis(f, K3.flat + 6);
	const P = proj(ETE, 960, 560, 260, yaw, pitch);
	const piO = vis(f, K3.second + 10);
	const pl = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K3.weaker) / 30)) * Math.PI));
	const dbl = f < K3.second + 10;
	const lob = (d: Vec3): Vec3 => d;
	return (
		<Overlay>
			<g opacity={flatO}>
				<FullMol atoms={E.atoms} bonds={E.bonds} size={46} />
				<Lobes cx={X} cy={Y} unitPx={120} dirs={[lob([-0.5, 0.866, 0])]} yaw={0} pitch={0} len={0.95} o={vis(f, K3.two)} />
				<Lobes cx={X} cy={Y} unitPx={120} dirs={[lob([-0.5, -0.866, 0])]} yaw={0} pitch={0} len={0.95} o={vis(f, K3.two + 10)} />
				<Lobes cx={X} cy={Y} unitPx={120} dirs={[[1, 0, 0]]} yaw={0} pitch={0} len={1.25} fat={[1.6 + 0.3 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K3.counts) / 30)) * Math.PI))]} o={vis(f, K3.one)} />
			</g>
			<Sx x={X - 40} y={Y - 170} text="3 directions" size={34} color={VIOLET} anchor="middle" hand at={K3.three} out={K3.flat + 10} />
			<Tag x={X + 100} y={Y + 150} text="double bond = 1 direction" at={K3.counts} out={K3.flat + 10} size={32} color={VIOLET} fill="#f1ebfa" anchor="middle" />
			<BallStick {...ETE} orders={dbl ? ETE.orders : ETE.orders.map(() => 1)} bondColors={multiCol(ETE)} cx={960} cy={560} unitPx={260} yaw={yaw} pitch={pitch} o={bsO} />
			<PiCloud c1={ETE.atoms[0].p} c2={ETE.atoms[1].p} normal={[0, 0, 1]} cx={960} cy={560} unitPx={260} yaw={yaw} pitch={pitch} o={piO} pulse={pl} />
			{f < K3.trig + 4 ? <AngleArc c={P[0]} a={P[2]} b={P[3]} r={60} text="about 120°" at={K3.about} out={K3.trig} size={34} lab={2.6} big={false} /> : null}
			<Tag x={960} y={250} text="trigonal planar: 3 directions, all in one plane" at={K3.trig} size={34} color={VIOLET} fill="#f1ebfa" anchor="middle" />
			<Tag x={1380} y={440} text="about 120°" at={K3.trig + 10} size={30} color={NAVY} fill="#e7edf8" />
			<Tag x={960} y={860} text="second bond: above and below, weaker" at={K3.above} size={34} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K3.double}{void K3.because}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 4. A triple bond: linear; shape carbon by carbon ----------
const K4 = cues(sc('linear-and-local-shape'), {ethyne: 'In ethyne', two: 'just two', opposite: 'opposite ways', straight: 'straight line', one80: 'one hundred and eighty', linear: "That's linear", shape: 'Shape belongs', whole: 'whole molecule', propene: 'In propene', trig: 'trigonal planar', ch3: 'C H three', tet: 'still tetrahedral'});
const ETY = ethyne3d(), PRO = propene3d();
const STRIP3: {m: ReturnType<typeof ethane3d>; t: string}[] = [{m: ETH, t: '4 → tetrahedral 109.5°'}, {m: ETE, t: '3 → trigonal planar ~120°'}, {m: ETY, t: '2 → linear 180°'}];
export const ThreeStrip: React.FC<{at: number; y: number; o?: number; size?: number; xs?: number[]; u?: number; labels?: boolean}> = ({at, y, o = 1, size = 28, xs = [480, 960, 1440], u = 70, labels = true}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{STRIP3.map((s, i) => (
				<g key={i} opacity={vis(f, at + i * 8)}>
					<BallStick {...s.m} orders={s.m.orders} bondColors={multiCol(s.m)} cx={xs[i]} cy={y} unitPx={u} yaw={0.35} pitch={0.3} />
					{labels ? <Sx x={xs[i]} y={y + u * 1.25 + 20} text={s.t} size={size} color={i === 0 ? VIOLET : i === 1 ? TEAL : NAVY} anchor="middle" weight={700} at={-1000} /> : null}
				</g>
			))}
		</g>
	);
};
export const SceneLinear: React.FC = () => {
	const f = useCurrentFrame();
	const yaw = 0.25, pitch = 0.15;
	const P = proj(ETY, 960, 600, 230, yaw, pitch);
	const ethO = vis(f, 0, K4.shape);
	const lobO = vis(f, K4.two, K4.one80 + 10);
	const Q = proj(PRO, 960, 650, 230, 0.25, 0.22);
	const pO = vis(f, K4.propene);
	return (
		<Overlay>
			<BallStick {...ETY} orders={ETY.orders} bondColors={multiCol(ETY)} cx={960} cy={600} unitPx={230} yaw={yaw} pitch={pitch} o={ethO} />
			{[0, 1].map(i => <Lobes key={i} cx={960} cy={600} unitPx={230} dirs={[[-1, 0, 0], [1, 0, 0]]} yaw={yaw} pitch={pitch} len={0.55} centre3={ETY.atoms[i].p} fat={i === 0 ? [1, 1.6] : [1.6, 1]} o={lobO * ethO} />)}
			{f < K4.shape + 4 ? <AngleArc c={P[0]} a={P[2]} b={P[1]} r={64} text="180°" at={K4.one80} out={K4.shape} size={38} lab={2.0} /> : null}
			<Tag x={960} y={780} text="linear: 2 directions" at={K4.linear} out={K4.shape} size={34} color={NAVY} fill="#e7edf8" anchor="middle" />
			<ThreeStrip at={K4.shape} y={250} o={f >= K4.propene ? 0.4 : 1} />
			<Sx x={960} y={430} text="shape belongs to each carbon" size={38} color={INK} anchor="middle" hand at={K4.shape + 20} out={K4.propene} />
			<BallStick {...PRO} orders={PRO.orders} bondColors={multiCol(PRO)} cx={960} cy={650} unitPx={230} yaw={0.25} pitch={0.22} o={pO} />
			<Edges pts={[Q[0], Q[2], Q[6]]} at={K4.trig} color={TEAL} fill="#bfe6df" o={pO} />
			<Edges pts={[Q[1], Q[7], Q[8]]} at={K4.trig + 8} color={TEAL} fill="#bfe6df" o={pO} />
			<Tag x={1240} y={480} text="trigonal planar" at={K4.trig} size={30} color={TEAL} fill="#dff2ef" />
			<Edges pts={[Q[1], Q[3], Q[4], Q[5]]} at={K4.tet} color={VIOLET} o={pO} />
			<Tag x={480} y={480} text="tetrahedral" at={K4.tet} size={30} color={VIOLET} fill="#f1ebfa" />
			<Tag x={960} y={900} text="the whole molecule is flat?" at={K4.whole} size={30} anchor="middle" o={f >= K4.tet + 20 ? 0.4 : 1} />
			{void K4.ethyne}{void K4.opposite}{void K4.straight}{void K4.ch3}{void ({} as V2)}
		</Overlay>
	);
};
