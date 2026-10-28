// M7 C14 scenes 1 to 5: the hook (a gas becomes a solid; the polymer objects), opening the double bond again and
// again (the zipper), drawing the repeat unit (bracket stamp; PVC), going backwards to the monomer (styrene) and why a
// polymer is solid but softens (the chain view: contact, no bonds between chains, the warm slide, thermoplastic).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, Tag} from '../chem-m7-c01/molecules';
import {CT, Mol2D, apt, cmol, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {Heading, OBJ, sc} from './common';
import {CL, ChainBox, GREY, INK, NAVY, RED, RU, STRAND, TEALC} from './parts';

export const ETHENE = cmol([{ul: 'H', dl: 'H'}, {ur: 'H', dr: 'H'}], [2]);
export const CLETH = cmol([{ul: 'H', dl: 'H'}, {ur: 'H', dr: 'Cl'}], [2]);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {gas: 'Ethene is', join: 'Join thousands', poly: 'polyethylene,', swap: 'Swap one', pipes: 'pipes.', so: 'So how', diff: 'behave so'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const cx = 1260, top = 280, h = 500;
	const bag = ptOn(OBJ, cx, top, h, 490, 810), pipe = ptOn(OBJ, cx, top, h, 1120, 710), cup = ptOn(OBJ, cx, top, h, 1160, 1210), bottle = ptOn(OBJ, cx, top, h, 1640, 1040);
	return (
		<>
			<Heading text="Addition polymers: from alkene to plastic" at={4} size={56} />
			<Overlay>
				<Mol2D m={ETHENE} x={330} y={400} s={1} at={K1.gas} />
				<Tag x={330} y={480} text="ethene: a gas" at={K1.gas + 10} size={26} anchor="middle" o={dimAt(f, K1.poly, 0.4)} />
				<Mol2D m={CLETH} x={330} y={680} s={1} at={K1.swap} />
				<Tag x={330} y={760} text="chloroethene" at={K1.swap + 10} size={26} color={CL} fill="#dcefdc" anchor="middle" />
				<Plate p={OBJ} cx={cx} top={top} h={h} at={K1.join} />
				<RingAt c={bag} rx={120} ry={150} at={K1.poly} out={K1.swap} />
				<Tag x={bag[0]} y={bag[1] - 220} text="polyethylene" at={K1.poly} out={K1.swap + 20} size={28} anchor="middle" color={RED} fill="#f9e1dc" />
				<RingAt c={pipe} rx={150} ry={70} at={K1.pipes} out={K1.diff} />
				<Tag x={pipe[0]} y={pipe[1] - 130} text="PVC" at={K1.pipes} out={K1.diff + 10} size={28} anchor="middle" color={RED} fill="#f9e1dc" />
				<RingAt c={cup} rx={100} ry={110} at={K1.diff} />
				<Tag x={cup[0]} y={cup[1] + 120} text="polystyrene foam" at={K1.diff} size={28} anchor="middle" color={RED} fill="#f9e1dc" />
				<Tag x={bottle[0] + 60} y={top + h + 70} text="PET bottle: a condensation polymer, next video" at={K1.join + 20} size={20} anchor="middle" />
				{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. The zipper ----------
const K2 = cues(sc('open-double-bond'), {mono: 'monomer,', poly: 'polymer,', rem: 'Remember', breaks: 'breaks,', spare: 'one spare', behind: 'chain behind', init: 'initiator', thousands: 'thousands of times', nothing: 'Nothing else', every: 'Every atom'});
export const SceneZipper: React.FC = () => {
	const f = useCurrentFrame();
	const S = 0.75, Y = 520, X0 = 300, DX = 300;
	const zip = (i: number) => K2.init + 30 + i * 18;
	const pull = smooth(prog(f, K2.thousands - 10, 40));
	const c0 = (i: number) => apt(ETHENE, ETHENE.k.c0, X0 + i * DX, Y, S), c1 = (i: number) => apt(ETHENE, ETHENE.k.c1, X0 + i * DX, Y, S);
	const joined = Math.min(5, Math.max(0, Math.floor((f - K2.init - 30) / 18) + 1));
	return (
		<Overlay>
			<TaskLine text="Monomer to polymer" at={0} size={54} y={130} />
			<g transform={`translate(${960},${Y}) scale(${1 - 0.55 * pull}) translate(${-960},${-Y})`}>
				{[0, 1, 2, 3, 4].map(i => <Mol2D key={i} m={ETHENE} x={X0 + i * DX} y={Y} s={S} at={i * 4} relax={{0: i === 0 ? K2.breaks : zip(i)}} />)}
				{[0, 1, 2, 3].map(i => f >= zip(i) ? <line key={'l' + i} x1={c1(i)[0] + 16} y1={Y} x2={c1(i)[0] + 16 + (c0(i + 1)[0] - c1(i)[0] - 32) * prog(f, zip(i), 12)} y2={Y} stroke={TEALC} strokeWidth={5} strokeLinecap="round" /> : null)}
				<RingAt c={[X0, Y]} rx={110} ry={90} at={K2.mono} out={K2.breaks} />
				{f >= K2.init ? <circle cx={c0(0)[0] - 50} cy={Y} r={14} fill="#e2b04a" stroke="#a8761a" strokeWidth={3} opacity={prog(f, K2.init, 8)} /> : null}
				<g opacity={pull}>
					<polyline points={Array.from({length: 30}, (_, k) => `${X0 + 4 * DX + 120 + k * 60},${Y + (k % 2 ? -18 : 18)}`).join(' ')} fill="none" stroke={INK} strokeWidth={5} />
					<polyline points={Array.from({length: 30}, (_, k) => `${X0 - 120 - k * 60},${Y + (k % 2 ? -18 : 18)}`).join(' ')} fill="none" stroke={INK} strokeWidth={5} />
				</g>
			</g>
			<Tag x={X0 - 100} y={Y - 170} text="monomer: a small molecule that joins up" at={K2.mono} out={K2.breaks} size={26} />
			<Tag x={96} y={200} text="polymer: many parts" at={K2.poly} out={K2.init} size={24} />
			<Tag x={96} y={260} text="C04a: the weaker second bond breaks" at={K2.breaks} out={K2.init} size={22} />
			<Tag x={X0 - 120} y={Y + 110} text="one spare bond on each carbon" at={K2.spare} out={K2.behind} size={24} color={TEALC} fill="#dff2ef" />
			<Tag x={X0 - 220} y={Y + 110} text="← to the chain" at={K2.behind} out={K2.init} size={24} color={TEALC} fill="#dff2ef" />
			<Tag x={X0 + 30} y={Y + 110} text="to the next monomer →" at={K2.behind + 10} out={K2.init} size={24} color={TEALC} fill="#dff2ef" />
			<Tag x={960} y={760} text={f < K2.thousands ? `monomers joined: ${joined}` : 'monomers joined: 1000s'} at={K2.init + 30} size={32} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Tag x={960} y={840} text="+ nothing else" at={K2.nothing} size={30} anchor="middle" />
			<Tag x={960} y={910} text="every atom ends up in the chain" at={K2.every} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
		</Overlay>
	);
};

// ---------- 3. Repeat unit ----------
const K3 = cues(sc('draw-repeat-unit'), {draw: "can't draw", rep: 'repeats,', take: 'Take chloroethene', single: 'single bond', cont: 'continuation bond', put: 'Put square', nout: 'outside,', pvc: 'PVC.', two: ['The two carbons', 2], back: 'backbone,', side: 'side.'});
export const SceneRepeat: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Draw it" at={0} size={54} y={130} />
			<g opacity={vis(f, K3.rep, K3.put)}>
				<CT x={960} y={260} text="–CH_2–CHCl–CH_2–CHCl–" size={44} anchor="middle" />
				<Tag x={960} y={290} text="draw two units first" at={K3.rep + 10} size={22} anchor="middle" />
			</g>
			<Mol2D m={CLETH} x={420} y={540} s={1.1} at={K3.take} relax={{0: K3.single}} />
			<Sx x={420} y={420} text="chloroethene" size={28} color={INK} anchor="middle" weight={700} at={K3.take} />
			<Sx x={720} y={556} text="→" size={60} color={GREY} anchor="middle" weight={700} at={K3.cont} />
			<RU x={1120} y={540} s={1.1} subs={[['H', 'H'], ['H', 'Cl']]} at={K3.cont} stamp={K3.put} glowBack={K3.two} glowSide={K3.side} />
			<Tag x={1380} y={380} text="repeat unit: brackets, n, bonds through" at={K3.nout} out={K3.two} size={24} color={NAVY} fill="#e7edf8" />
			<CT x={960} y={820} text="n CH_2=CHCl → [–CH_2–CHCl–]ₙ" size={40} anchor="middle" at={K3.nout + 20} />
			<Tag x={1380} y={380} text="poly(chloroethene): PVC" at={K3.pvc} out={K3.two} size={28} color={RED} fill="#f9e1dc" />
			<Sx x={1380} y={470} text="PVC: polyvinyl chloride (vinyl chloride = chloroethene)" size={20} color={GREY} weight={600} at={K3.pvc + 20} />
			<Tag x={1380} y={380} text="backbone: the two C=C carbons" at={K3.two} out={K3.side} size={26} />
			<Tag x={1380} y={380} text="side group: Cl" at={K3.side} size={28} color={CL} fill="#dcefdc" />
			<Crossed x={140} y={900} text="C=C inside the brackets" at={K3.nout + 40} cross={K3.nout + 60} out={K3.two} size={28} />
			{void K3.draw}{void K3.back}{void STRAND}
		</Overlay>
	);
};

// ---------- 4. Backwards ----------
const K4 = cues(sc('monomer-from-unit'), {to: 'To find', back: 'backwards.', take: 'Take the two', remove: 'remove the', put: 'put the double', dont: "Don't add", once: 'Once the', bonds: 'four bonds', so: 'So', sty: 'styrene,'});
export const SceneBackwards: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Backwards: monomer from repeat unit" at={K4.to} size={54} y={130} />
			<RU x={860} y={420} s={1.2} subs={[['H', 'H'], ['H', 'ring']]} at={0} unstamp={K4.put} ghostH={K4.dont} />
			<Tag x={96} y={260} text="remove the two bonds that poke out; restore C=C" at={K4.remove} out={K4.dont} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1200} y={300} text="no extra H" at={K4.dont + 30} size={30} color={RED} fill="#f9e1dc" />
			{[0, 1].map(i => [0, 1, 2, 3].map(k => <g key={i + '-' + k} opacity={prog(f, K4.bonds - 20 + i * 30 + k * 6, 6) * dimAt(f, K4.sty + 40, 0.4)}><circle cx={860 + (i ? 78 : -78) * 1.2 + (i ? 30 : -30)} cy={420 - 60 + k * 30} r={13} fill="#fffdf8" stroke={NAVY} strokeWidth={2} /><Sx x={860 + (i ? 78 : -78) * 1.2 + (i ? 30 : -30)} y={420 - 53 + k * 30} text={String(k + 1)} size={18} color={NAVY} anchor="middle" weight={800} at={-1000} /></g>))}
			<Tag x={1200} y={370} text="four bonds each" at={K4.bonds} size={30} color={NAVY} fill="#e7edf8" />
			<CT x={960} y={820} text="styrene (phenylethene), CH_2=CHC_6H_5" size={42} anchor="middle" at={K4.sty} />
			<Tag x={960} y={850} text="monomer" at={K4.sty + 10} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K4.back}{void K4.take}{void K4.once}{void K4.so}
		</Overlay>
	);
};

// ---------- 5. Solid, and softens ----------
const K5 = cues(sc('solid-thermoplastic'), {so: 'So why', each: 'Each chain', contact: 'contact,', no: 'No bonds join', warm: 'Warm the', slide: 'slide past', cool: 'Cool it', cov: 'The covalent', thermo: 'thermoplastic', rec: 'recycled'});
export const SceneSolid: React.FC = () => {
	const f = useCurrentFrame();
	const heat = vis(f, K5.warm, K5.cool);
	const slide = vis(f, K5.slide - 10, K5.cool, 20);
	return (
		<Overlay>
			<TaskLine text="Why solid?" at={K5.so} size={54} y={130} />
			<ChainBox x={560} y={240} w={800} h={520} at={K5.each - 20} c={{ticks: prog(f, K5.contact, 30) * (1 - 0.7 * slide), heat, slide, cross: vis(f, K5.no, K5.warm)}} />
			<Tag x={96} y={200} text="C03: more contact, stronger dispersion" at={K5.contact} out={K5.no} size={22} />
			<Tag x={1390} y={300} text="many small forces add up" at={K5.contact + 10} out={K5.no} size={26} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={1390} y={370} text="no bonds between chains" at={K5.no + 10} out={K5.warm + 40} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={1390} y={440} text="warm: chains slide, it softens" at={K5.slide} out={K5.cov} size={26} color="#a8761a" fill="#fbedd0" />
			<Tag x={1390} y={510} text="chain bonds intact" at={K5.cov} size={28} color={NAVY} fill="#e7edf8" />
			<Tag x={560} y={800} text="thermoplastic: softens on heating, again and again" at={K5.thermo} size={30} color={TEAL} fill="#dff2ef" />
			<Sx x={560} y={900} text="chains joined by covalent cross-links don't soften like this (thermosets)" size={20} color={GREY} weight={600} at={K5.thermo + 30} />
			{void K5.rec}
		</Overlay>
	);
};
