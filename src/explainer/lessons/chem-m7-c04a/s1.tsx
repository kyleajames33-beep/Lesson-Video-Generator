// M7 C04a scenes 1 to 3: the hook (hydrogen adds across the double bonds in oil: liquid to soft solid), why an alkene
// can add and an alkane can't (no spare bond; the weaker second bond opens into one spare bond on each carbon), and the
// addition pattern on the ink ball-and-stick (Br₂ splits, one Br on each carbon, flat to tetrahedral).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, Overlay, Sx, TEAL, smooth} from '../chem-m6-c01/parts';
import {BallStick, HGREY, MULTI, Skel, Tag, ethene3d, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {PiCloud} from '../chem-m7-c03/parts';
import {Heading, OIL, TUB, sc} from './common';
import {AddModel, Halo, Mol2D, Opener, PlateC, RxArrow, apt, cmol, dimAt, lerp, pulseAt, vis} from './parts';

const chainB = (n: number, dbl = -1): Bond[] => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1, order: i === dbl ? 2 : 1, color: i === dbl ? MULTI : undefined}));

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {oil: 'Vegetable oil', molecules: 'long molecules', double: 'double bonds', add: 'Add hydrogen', adds: 'adds across', solid: 'solid', much: 'For much', isnt: "Hydrogen isn't", so: 'So what', cdc: 'C double bond C', make: 'what does it'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const P = zig(8, 520, 330, 86, 50);
	const dock = smooth(prog(f, K1.adds, 24));
	const dimP = dimAt(f, K1.so, 0.3);
	const chainO = vis(f, K1.double, K1.so);
	const tubX = lerp(1900, 1620, smooth(prog(f, K1.solid, 24)));
	const hp = (i: number): V2 => outward(P, i, 64);
	return (
		<>
			<Heading text="What can add across a C=C bond?" at={K1.so} size={64} />
			<Overlay>
				<PlateC p={OIL} cx={260} top={300} h={560} o={vis(f, K1.oil - 30) * dimP} />
				<g opacity={chainO}>
					<g opacity={1 - dock}><Skel pts={P} bonds={chainB(8, 3)} at={K1.double} stagger={3} width={6} /></g>
					<g opacity={dock}><Skel pts={P} bonds={chainB(8)} at={-1000} width={6} /></g>
					{[3, 4].map(i => {
						const home = hp(i), from: V2 = [home[0] + (i === 3 ? -60 : 60), 160];
						const t = smooth(prog(f, K1.add, K1.adds - K1.add + 16));
						const p: V2 = [lerp(from[0], home[0], t), lerp(from[1], home[1], t)];
						return (
							<g key={i} opacity={prog(f, K1.add, 10)}>
								<line x1={P[i][0]} y1={P[i][1]} x2={lerp(P[i][0], home[0], 0.7)} y2={lerp(P[i][1], home[1], 0.7)} stroke={HGREY} strokeWidth={4} strokeLinecap="round" opacity={prog(f, K1.adds + 10, 8)} />
								<Sx x={p[0]} y={p[1] + 12} text="H" size={36} color={HGREY} anchor="middle" weight={700} at={-1000} />
							</g>
						);
					})}
					<Tag x={820} y={470} text="part of an oil molecule" at={K1.molecules + 20} size={28} anchor="middle" />
				</g>
				<g opacity={vis(f, K1.solid) * dimP}><PlateC p={TUB} cx={tubX} top={560} h={260} /></g>
				<RxArrow x1={430} x2={1440} y={780} at={K1.solid} out={K1.so} above={[{t: '+ H_2, Ni, heat', at: K1.solid + 8}]} />
				<Sx x={260} y={920} text="liquid" size={36} color={INK_SOFT} anchor="middle" hand at={K1.oil + 30} out={K1.so} />
				<Sx x={1620} y={880} text="soft solid" size={36} color={INK_SOFT} anchor="middle" hand at={K1.solid + 10} out={K1.so} />
				<Sx x={760} y={600} text="C=C" size={110} color={TEAL} anchor="middle" weight={800} at={K1.cdc} />
				<Sx x={960} y={590} text="+ ?" size={84} color={INK} anchor="middle" weight={700} at={K1.cdc + 10} />
				<RxArrow x1={1060} x2={1230} y={562} at={K1.make} />
				<g opacity={vis(f, K1.make + 10)}>
					<rect x={1270} y={490} width={170} height={140} rx={18} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
					<Sx x={1355} y={590} text="?" size={84} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				</g>
				{void K1.much}{void K1.isnt}
			</Overlay>
		</>
	);
};

// ---------- 2. Why an alkene can add and an alkane can't ----------
const K2 = cues(sc('why-alkenes-add'), {start: 'Start with', alkane: 'In an alkane', four: 'four single bonds', spare: "there's no spare", sat: 'saturated', alkene: "An alkene's", props: 'properties video', second: 'its second bond', weaker: 'weaker one', above: 'above and below', brk: 'break', then: 'Then each carbon'});
const ETHANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const ETHENE = cmol([{ul: 'H', dl: 'H'}, {ur: 'H', dr: 'H'}], [2]);
const ETE3 = ethene3d();
export const SceneWhy: React.FC = () => {
	const f = useCurrentFrame();
	const A = {x: 470, y: 540, s: 1.45}, E = {x: 1300, y: 540, s: 1.5};
	const dimA = dimAt(f, K2.alkene, 0.38);
	const c1 = apt(ETHENE, 0, E.x, E.y, E.s), c2 = apt(ETHENE, 1, E.x, E.y, E.s);
	const thumb = vis(f, K2.props, K2.brk);
	return (
		<Overlay>
			<Sx x={96} y={150} text="Why can an alkene add?" size={52} color={INK} hand at={K2.start} />
			<g opacity={dimA}>
				{[0, 1].map(i => { const p = apt(ETHANE, i, A.x, A.y, A.s); return <Halo key={i} x={p[0]} y={p[1]} r={70} at={K2.four + i * 8} out={K2.sat} />; })}
				<Mol2D m={ETHANE} x={A.x} y={A.y} s={A.s} at={K2.alkane} size={40} />
				<Sx x={A.x} y={A.y - 190} text="ethane (alkane)" size={34} color={INK_SOFT} anchor="middle" hand at={K2.alkane} />
				<Tag x={A.x} y={A.y + 170} text="4 bonds each: no spare bond" at={K2.spare} size={30} anchor="middle" />
			</g>
			<Tag x={A.x} y={A.y + 250} text="saturated" at={K2.sat} size={36} color={TEAL} fill="#dff2ef" anchor="middle" o={dimAt(f, K2.alkene, 0.55)} />
			<Mol2D m={ETHENE} x={E.x} y={E.y} s={E.s} at={K2.alkene} size={40} relax={{0: K2.brk}} />
			<Sx x={E.x} y={E.y + 210} text="ethene (alkene)" size={34} color={INK_SOFT} anchor="middle" hand at={K2.alkene} />
			<Opener c1={c1} c2={c2} at={K2.second} split={K2.brk} pulse={K2.weaker} stub={70} />
			<Tag x={E.x} y={E.y + 250} text="second bond: weaker, exposed" at={K2.weaker} out={K2.then} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={E.x} y={E.y - 230} text="1 spare bond on each carbon" at={K2.then} size={32} color={TEAL} fill="#dff2ef" anchor="middle" />
			<g opacity={thumb}>
				<rect x={1590} y={800} width={260} height={190} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
				<BallStick {...ETE3} orders={ETE3.orders.map(() => 1)} cx={1720} cy={880} unitPx={80} yaw={0} pitch={1.08} />
				<PiCloud c1={ETE3.atoms[0].p} c2={ETE3.atoms[1].p} normal={[0, 0, 1]} cx={1720} cy={880} unitPx={80} yaw={0} pitch={1.08} pulse={pulseAt(f, K2.above, 30)} />
				<Sx x={1720} y={975} text="from the properties video" size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 3. Addition: one piece on each carbon ----------
const K3 = cues(sc('addition-pattern'), {addition: 'addition reaction', lost: 'no atoms', picture: 'Picture the', piece: 'one piece', after: 'Afterwards', tet: 'tetrahedral', alkanes: 'Alkanes have', diff: 'a different way'});
export const SceneAddition: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Tag x={960} y={150} text="addition: 2 molecules → 1 molecule, nothing lost" at={K3.addition} size={36} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={960} y={240} text="reagent: the molecule added to the alkene (here Br_2)" at={K3.picture} out={K3.after} size={28} anchor="middle" />
			<AddModel T={{drift: K3.picture, dock: K3.piece, tet: K3.tet}} cx={960} cy={620} u={230} outlines />
			<Tag x={960} y={880} text="one Br on each carbon" at={K3.piece + 20} out={K3.tet} size={30} anchor="middle" />
			<Tag x={960} y={880} text="flat → tetrahedral" at={K3.tet} size={34} color={INK} fill="#fffdf8" anchor="middle" />
			<Tag x={1600} y={970} text="alkanes: next video" at={K3.diff} size={26} anchor="middle" o={dimAt(f, K3.diff + 50, 0.45)} />
			{void K3.lost}{void K3.alkanes}{void INK}
		</Overlay>
	);
};
