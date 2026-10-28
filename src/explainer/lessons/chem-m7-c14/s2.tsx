// M7 C14 scenes 6 to 10: LDPE against HDPE (the branch toggle), PVC (polar C–Cl; plasticisers), polystyrene (rings
// catch), PTFE (the F sheath: inert, dipoles cancel, electrons hardly shift, non-stick) and the comparison board.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Tag} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {Delta} from '../chem-m7-c05/parts';
import {Plate} from '../chem-m7-c06/parts';
import {CUP, HDPE, LDPE, PAN, PVCP, sc} from './common';
import {CL, ChainBox, FL, GREY, INK, NAVY, RED, RU, TEALC} from './parts';
import type {CBox} from './parts';

// ---------- 6. LDPE and HDPE ----------
const K6 = cues(sc('ldpe-hdpe'), {poly: 'Polyethylene comes', low: 'Low density', br: 'short branches', the: 'The branches', soft: "It's softer", ten: 'hundred and ten', suits: 'That suits', high: 'High density', str: 'straight', more: 'More contact', thirty: 'thirty', bottles: ['bottles.', 2]});
export const SceneLdpe: React.FC = () => {
	const f = useCurrentFrame();
	const b = prog(f, K6.br, 30) * (1 - prog(f, K6.str, 30));
	return (
		<Overlay>
			<TaskLine text="LDPE or HDPE" at={K6.poly} size={54} y={130} />
			<Tag x={560} y={200} text="same monomer, same repeat unit [–CH₂–CH₂–]ₙ" at={6} out={K6.br} size={24} />
			<ChainBox x={560} y={270} w={800} h={480} at={0} c={{branch: b, spread: b, ticks: 1 - 0.5 * b}} />
			<g opacity={vis(f, K6.br) * dimAt(f, K6.str, 0.3)}><Plate p={LDPE} cx={290} top={300} h={380} /></g>
			<Tag x={96} y={690} text="LDPE: branches, less contact, weaker forces" at={K6.the} out={K6.str} size={24} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={96} y={750} text="LDPE: soft, about 110 °C" at={K6.ten} size={26} color="#a8761a" fill="#fbedd0" o={dimAt(f, K6.str, 0.35)} />
			<Sx x={96} y={830} text="about 0.91 to 0.94 g/cm³; varies by grade" size={20} color={GREY} weight={600} at={K6.soft} />
			<g opacity={vis(f, K6.str + 20)}><Plate p={HDPE} cx={1640} top={420} h={200} /></g>
			<Tag x={1400} y={690} text="straight chains pack: more contact" at={K6.str + 10} out={K6.thirty} size={24} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={1400} y={750} text="HDPE: stiff, about 130 °C" at={K6.thirty} size={28} color={NAVY} fill="#e7edf8" />
			<Sx x={1400} y={830} text="about 0.94 to 0.97 g/cm³" size={20} color={GREY} weight={600} at={K6.more} />
			<Sx x={560} y={900} text="C03: straight chains lie close; branches get in the way" size={24} color={GREY} hand at={K6.bottles} />
			{void K6.low}{void K6.suits}{void K6.high}
		</Overlay>
	);
};

// ---------- 7. PVC ----------
const K7 = cues(sc('pvc'), {now: 'Now change', in: 'In PVC', polar: 'polar.', so: 'So neighbouring', grip: 'The chains grip', pipes: 'pipes.', mix: 'Mix in', apart: 'apart,', flex: 'flexible'});
export const ScenePvc: React.FC = () => {
	const f = useCurrentFrame();
	const ap = prog(f, K7.apart - 10, 30);
	return (
		<Overlay>
			<TaskLine text="Side groups: PVC" at={K7.now} size={54} y={130} />
			<CT x={960} y={250} text="–CH_2–CHCl–CH_2–CHCl–CH_2–CHCl–" size={40} anchor="middle" at={K7.in} />
			<Delta x={1010} y={196} t="+" at={K7.polar} size={24} />
			<Delta x={1090} y={290} t="−" at={K7.polar} size={24} />
			<Tag x={96} y={300} text="C08b: polar C–Cl bond, dipole–dipole" at={K7.polar} out={K7.grip} size={22} />
			<ChainBox x={560} y={330} w={800} h={460} at={K7.so - 20} c={{cl: prog(f, K7.so - 10, 14), dip: prog(f, K7.so, 20) * (1 - 0.6 * ap), beads: ap, spread: ap}} />
			<Tag x={96} y={840} text="dispersion + dipole–dipole: grips harder, rigid" at={K7.so + 20} out={K7.apart} size={26} color={TEALC} fill="#dff2ef" />
			<g opacity={vis(f, K7.pipes - 10)}><Plate p={PVCP} cx={1640} top={430} h={150} /></g>
			<Tag x={1520} y={600} text="rigid PVC: pipes" at={K7.pipes} size={26} color={CL} fill="#dcefdc" />
			<Tag x={96} y={840} text="plasticiser: chains pushed apart, flexible" at={K7.apart} size={28} color={NAVY} fill="#e7edf8" />
			<Tag x={96} y={910} text="flexible PVC: cable coating" at={K7.flex + 20} size={22} />
			{void K7.mix}
		</Overlay>
	);
};

// ---------- 8. Polystyrene ----------
const K8 = cues(sc('polystyrene'), {ps: 'Polystyrene has', you: 'You might', like: "like LDPE's", but: 'But these', slide: 'slide.', that: 'That makes', snaps: 'snaps', blow: 'Blow gas', foam: 'foam,', cups: 'cups'});
export const ScenePs: React.FC = () => {
	const f = useCurrentFrame();
	const jig = vis(f, K8.slide - 20, K8.slide + 40) * 0.25;
	return (
		<Overlay>
			<TaskLine text="Side groups: polystyrene" at={K8.ps} size={54} y={130} />
			<CT x={960} y={250} text="–CH_2–CH(C_6H_5)–CH_2–CH(C_6H_5)–" size={40} anchor="middle" at={K8.ps} />
			<Tag x={96} y={300} text="LDPE: short, floppy branches (softer)" at={K8.like} out={K8.but + 30} size={22} />
			<ChainBox x={560} y={330} w={800} h={460} at={K8.ps + 20} c={{rings: prog(f, K8.but, 20), spread: 0.6, slide: jig}} />
			<Tag x={96} y={840} text="big, stiff rings catch: chains hardly slide" at={K8.slide - 10} size={28} color={NAVY} fill="#e7edf8" o={dimAt(f, K8.foam + 30, 0.5)} />
			<Sx x={96} y={920} text="rigid, clear, brittle" size={22} color={GREY} weight={600} at={K8.snaps} />
			<g opacity={vis(f, K8.foam - 10)}><Plate p={CUP} cx={1640} top={400} h={260} /></g>
			<Tag x={1640} y={680} text="expanded polystyrene: trapped air insulates" at={K8.foam} size={24} color="#a8761a" fill="#fbedd0" anchor="middle" />
			{void K8.you}{void K8.that}{void K8.blow}{void K8.cups}
		</Overlay>
	);
};

// ---------- 9. PTFE ----------
const K9 = cues(sc('ptfe'), {fin: 'Finally', poly: 'polymerise', ptfe: 'PTFE.', cf: 'Carbon fluorine', attack: 'attack', polar: 'polar,', cancel: 'cancel', hold: 'And fluorine', shift: 'hardly shift', sticks: 'sticks', why: "That's why"});
const Sheath: React.FC<{x: number; y: number; at: number; dots: number; drop: number}> = ({x, y, at, dots, drop}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const n = 9;
	const dp = smooth(prog(f, drop, 60));
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, k) => [-1, 1].map(s => <circle key={k + '-' + s} cx={x + k * 50} cy={y + s * 36 + (k % 2 ? -8 : 8)} r={26} fill="#eef5c9" stroke={FL} strokeWidth={3} />))}
			<polyline points={Array.from({length: n}, (_, k) => `${x + k * 50},${y + (k % 2 ? -10 : 10)}`).join(' ')} fill="none" stroke={INK} strokeWidth={5} />
			{[0, 1, 2, 3].map(k => { const t = ((f - dots - k * 12) % 48) / 48; if (f < dots) return null; const yy = y - 160 + Math.abs(Math.sin(t * Math.PI)) * 90; return <circle key={'r' + k} cx={x + 60 + k * 100} cy={yy} r={9} fill={GREY} opacity={0.8} />; })}
			{f >= drop ? <ellipse cx={x + 100 + dp * 420} cy={y - 74 + dp * 20} rx={34} ry={22} fill="#bcd7ea" stroke="#5f8aa8" strokeWidth={2} opacity={1 - prog(f, drop + 50, 12)} /> : null}
		</g>
	);
};
export const ScenePtfe: React.FC = () => {
	const f = useCurrentFrame();
	const delta = vis(f, K9.polar, K9.shift);
	return (
		<Overlay>
			<TaskLine text="Side groups: PTFE" at={K9.fin} size={54} y={130} />
			<CT x={960} y={250} text="n CF_2=CF_2 → [–CF_2–CF_2–]ₙ" size={42} anchor="middle" at={K9.poly} />
			<RU x={480} y={540} s={1.1} subs={[['F', 'F'], ['F', 'F']]} at={K9.poly} stamp={K9.poly + 20} />
			<g opacity={delta}>
				<Delta x={410} y={430} t="−" at={K9.polar} size={24} /><Delta x={480} y={680} t="−" at={K9.polar} size={24} /><Delta x={440} y={520} t="+" at={K9.polar} size={24} />
				<path d="M406,470 l0,-40 m-10,14 l10,-14 l10,14 M406,610 l0,40 m-10,-14 l10,14 l10,-14" stroke={NAVY} strokeWidth={4} fill="none" opacity={vis(f, K9.cancel, K9.cancel + 60)} />
			</g>
			<Tag x={96} y={780} text="poly(tetrafluoroethene): PTFE" at={K9.ptfe} out={K9.polar} size={28} color="#6d8a1f" fill="#eef5c9" />
			<Sheath x={960} y={560} at={K9.attack - 10} dots={K9.attack} drop={K9.sticks} />
			<Tag x={960} y={680} text="strong C–F bonds, F sheath: resists attack" at={K9.attack} out={K9.sticks} size={26} color={NAVY} fill="#e7edf8" />
			<Sx x={960} y={760} text="C–F ≈ 485 kJ/mol; C–H ≈ 413 kJ/mol" size={20} color={GREY} weight={600} at={K9.attack + 10} />
			<Tag x={96} y={780} text="even sheath: pulls cancel" at={K9.cancel} out={K9.sticks} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={96} y={850} text="F holds its electrons tightly: they hardly shift" at={K9.shift} out={K9.sticks} size={24} />
			<Tag x={960} y={680} text="only very weak forces: non-stick" at={K9.sticks + 10} size={30} color={TEAL} fill="#dff2ef" />
			<g opacity={vis(f, K9.why - 20)}><Plate p={PAN} cx={1640} top={780} h={200} /></g>
			<Sx x={96} y={950} text="used up to about 260 °C; melts at about 327 °C" size={20} color={GREY} weight={600} at={K9.why + 20} />
			{void K9.cf}{void K9.hold}{void RED}
		</Overlay>
	);
};

// ---------- 10. Memory aid and comparison ----------
const K10 = cues(sc('memory-aid'), {so: 'So, to draw', brackets: 'brackets,', trace: 'trace it back', branch: 'The branching', use: 'use.', ptfe: "PTFE's", bonds: 'bonds.'});
const ROWS: {c: CBox; t: string}[] = [{c: {branch: 1, spread: 1, ticks: 0.5}, t: 'LDPE: soft → squeeze bottles'}, {c: {ticks: 1}, t: 'HDPE: stiff → crates, milk bottles'}, {c: {cl: 1, dip: 1}, t: 'PVC: rigid → pipes'}, {c: {rings: 1, spread: 0.6}, t: 'PS: rigid; foam → cups'}, {c: {cl: 0}, t: 'PTFE: inert, non-stick → pans'}];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = ROWS.map((_, i) => K10.trace + i * 45);
	return (
		<Overlay>
			<TaskLine text="Open the double bond, add brackets. Nothing lost." at={K10.so} size={56} x={120} y={170} color={TEAL} />
			<Sx x={960} y={270} text="structure → forces → property → use" size={36} color={NAVY} anchor="middle" hand at={K10.use} />
			{ROWS.map((r, i) => {
				const lit = i === 4 ? Math.max(vis(f, at[i]) * dimAt(f, K10.use, 0.5), vis(f, K10.bonds)) : vis(f, at[i]) * (at[i + 1] ? dimAt(f, at[i + 1], 0.45) : 1);
				const y = 310 + i * 130;
				return (
					<g key={i} opacity={vis(f, at[i]) * (0.4 + 0.6 * lit)}>
						<ChainBox x={240} y={y} w={300} h={110} at={at[i]} c={r.c} n={4} />
						<Sx x={600} y={y + 68} text={r.t} size={34} color={INK} weight={700} at={-1000} />
					</g>
				);
			})}
			<Tag x={1180} y={854} text="inert: strong C–F bonds, not forces between chains" at={K10.bonds} size={24} color={NAVY} fill="#e7edf8" />
			{void K10.brackets}{void K10.branch}{void K10.ptfe}
		</Overlay>
	);
};
