// M7 C02 scenes 5 to 8: position isomers (but-1-ene and but-2-ene with locants; "-ol" means an O–H group; propan-1-ol
// and propan-2-ol), functional group isomers (the term; ethanol and methoxymethane recalled; but-1-ene closing into the
// cyclobutane ring; the cycloalkanes; unsaturated against saturated), why the group matters (the C=C is where an alkene
// reacts; a later test), and the three-question check with the propanol slip crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Overlay, Sx, TEAL, smooth} from '../chem-m6-c01/parts';
import {
	Brace, CHAIN_INK, Crossed, HGhosts, Locants, MULTI, NameLbl, OXY, Skel, Tag, V2, ghostDirs, ringPts, zigOffs,
} from '../chem-m7-c01/molecules';
import {sc} from './common';
import {M, SkelAt, Tally, TubeOutline, WhatChanged, at2, vis} from './parts';
import {LX, PY, RX} from './s1';

// ---------- 5. Position isomers ----------
const K5 = cues(sc('position-isomers'), {pos: 'position isomers', skel: 'skeleton stays', family: 'so does the family', only: 'Only the group', b1: 'In but-one-ene', one: 'carbon one', b2: 'In but-two-ene', two: 'carbon two', same: 'The same goes', ol: 'ending ol', means: 'means an O', ethol: 'ethanol ends', number: 'the number says', props: 'propan-one-ol and', too: 'isomers too', moving: 'Moving a group', products: 'different products'});
export const ScenePosition: React.FC = () => {
	const f = useCurrentFrame();
	const swap = K5.ol - 6;
	const A = at2(M.but1ene, LX, PY), B = at2(M.but2ene, RX, PY);
	const P1 = at2(M.propan1ol, LX, PY), P2 = at2(M.propan2ol, RX, PY);
	return (
		<Overlay>
			<Tally x={740} y={150} text="C 4, H 8" at={K5.pos} out={swap} ticks={[K5.b1 + 20, K5.two + 10]} />
			<Tally x={740} y={150} text="C 3, H 8, O 1" at={swap + 10} ticks={[K5.props + 10, K5.props + 50]} />
			<g opacity={1 - prog(f, swap, 12)}>
				<SkelAt m={M.but1ene} x={LX} y={PY} at={K5.pos + 20} width={7} />
				<Locants pts={A.slice(0, 2)} offs={zigOffs(A, 50).slice(0, 2)} at={K5.one - 6} ring={[{i: 0, at: K5.one}]} />
				<NameLbl x={LX} y={PY + 140} parts={[['but', CHAIN_INK], ['-1-ene', TEAL]]} at={K5.b1} />
				<SkelAt m={M.but2ene} x={RX} y={PY} at={K5.b2} width={7} />
				<Locants pts={B.slice(0, 3)} offs={zigOffs(B, 50).slice(0, 3)} at={K5.two - 16} ring={[{i: 1, at: K5.two}]} />
				<NameLbl x={RX} y={PY + 140} parts={[['but', CHAIN_INK], ['-2-ene', TEAL]]} at={K5.b2 + 6} />
			</g>
			<g opacity={vis(f, swap + 8)}>
				<SkelAt m={M.propan1ol} x={LX} y={PY} at={swap + 8} width={7} />
				<SkelAt m={M.propan2ol} x={RX} y={PY} at={swap + 18} width={7} />
				<Locants pts={[P1[2], P1[1], P1[0]]} offs={[[0, 52], [0, -50], [0, 52]]} at={K5.number} ring={[{i: 0, at: K5.number + 20}]} />
				<Locants pts={P2.slice(0, 3)} offs={[[0, 52], [0, 58], [0, 52]]} at={K5.number + 10} ring={[{i: 1, at: K5.number + 30}]} />
				<NameLbl x={LX} y={PY + 150} parts={[['propan', CHAIN_INK], ['-1-ol', OXY]]} at={K5.props} />
				<NameLbl x={RX - 55} y={PY + 150} parts={[['propan', CHAIN_INK], ['-2-ol', OXY]]} at={K5.props + 20} />
			</g>
			<Tag x={740} y={760} text="-ol = an O–H group; the number = which carbon" at={K5.means} size={32} color={INK} fill="#f7e6df" anchor="middle" />
			<Tag x={740} y={830} text="(ethanol: an O–H on a 2-carbon chain)" at={K5.ethol} out={K5.number + 30} size={26} anchor="middle" />
			<Tag x={740} y={860} text="different reactions: later (alcohols video)" at={K5.moving + 30} out={K5.products + 60} size={26} anchor="middle" />
			<WhatChanged at={-100} rows={[{v: 'same', at: K5.skel}, {v: 'different', at: K5.two + 8, lit: K5.two + 8}, {v: 'same (C=C)', at: K5.family}]} pulse={[{row: 1, at: K5.only}]} label={{text: 'position isomers', at: K5.two + 24}} />
			{void K5.same}{void K5.too}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 6. Functional group isomers ----------
const K6 = cues(sc('functional-group-isomers'), {fg: 'functional group isomers', def: 'A functional group is', itself: 'group itself', ethm: 'Ethanol and methoxymethane', here: "Here's a pair", b1: 'But-one-ene is', ring: 'ring instead', cyclo: 'cyclobutane.', also: "It's also", only: ['only single bonds', 1], family: 'different family', cycloalk: 'the cycloalkanes', unsat: 'One is unsaturated', sat: 'other saturated'});
const SQ = ringPts(4, RX, PY, 82, -Math.PI / 4);
const ZMAP = [2, 3, 0, 1]; // zigzag carbon i becomes square corner ZMAP[i] (BL, TL, TR, BR)
export const ringMorph = (t: number): V2[] => at2(M.but1ene, RX, PY).map((p, i) => [p[0] + (SQ[ZMAP[i]][0] - p[0]) * t, p[1] + (SQ[ZMAP[i]][1] - p[1]) * t] as V2);
export const RING_PTS = ringMorph(1);
export const RING_B = [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 0}];
export const RingHs: React.FC<{at: number; out?: number; step?: number; o?: number}> = ({at, out, step = 6, o = 1}) => (
	<g opacity={o}>{RING_PTS.map((p, i) => <HGhosts key={i} p={p} dirs={ghostDirs(p, [RING_PTS[(i + 3) % 4], RING_PTS[(i + 1) % 4]], 2)} at={at + i * step} out={out} len={56} size={26} />)}</g>
);
export const SceneGroup: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K6.ring + 8, 30));
	const P = ringMorph(m);
	const closeAt = K6.ring + 34;
	const ringY = PY + 82;
	return (
		<Overlay>
			<Tag x={96} y={236} text="functional group: the part that gives a family its reactions (C=C, O–H)" at={K6.def} size={30} color={INK} fill="#fffdf8" o={f > K6.here ? 0.5 : 1} />
			{/* ethanol and methoxymethane recalled, small */}
			<g opacity={vis(f, K6.itself, K6.here + 10)}>
				<SkelAt m={M.ethanol} x={420} y={420} s={0.8} at={K6.itself} />
				<SkelAt m={M.methoxymethane} x={820} y={420} s={0.8} at={K6.itself + 8} />
				<Tag x={620} y={480} text="alcohol vs O between carbons" at={K6.ethm} size={28} anchor="middle" />
			</g>
			<Tally x={740} y={130} text="C 4, H 8" at={K6.here} ticks={[K6.b1 + 40, K6.also + 20]} />
			<SkelAt m={M.but1ene} x={LX} y={PY} at={K6.b1} width={7} />
			<NameLbl x={LX} y={PY - 90} parts={[['but', CHAIN_INK], ['-1-ene', TEAL]]} at={K6.b1 + 10} o={1 - 0.5 * prog(f, K6.ring, 10)} />
			{/* a copy of the four carbons closes into a ring */}
			<g opacity={vis(f, K6.ring - 6) * (1 - m)}><Skel pts={P} bonds={M.but1ene.bonds} at={K6.ring - 6} width={7} /></g>
			<g opacity={m}><Skel pts={P} bonds={[{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]} at={-100} width={7} /></g>
			<Skel pts={P} bonds={[{a: 3, b: 0}]} at={closeAt} width={7} />
			<RingHs at={K6.cyclo + 4} out={K6.cycloalk} />
			<Tag x={RX} y={PY - 190} text="cyclo = carbons in a ring" at={K6.cyclo} out={K6.only + 10} size={28} color={INK} fill="#fffdf8" anchor="middle" />
			<NameLbl x={RX} y={PY - 110} parts={[['cyclo', INK], ['butane', CHAIN_INK]]} at={K6.cyclo + 10} />
			<Brace x1={RX - 110} x2={RX + 110} y={ringY + 26} text="cycloalkane (no C=C)" at={K6.cycloalk} out={K6.sat} color={INK_SOFT} size={32} />
			<Brace x1={RX - 130} x2={RX + 130} y={ringY + 26} text="cycloalkane: saturated (no C=C)" at={K6.sat} color={INK_SOFT} size={32} />
			<Brace x1={LX - 180} x2={LX + 180} y={PY + 60} text="alkene: unsaturated (C=C)" at={K6.unsat} color={TEAL} size={32} />
			<WhatChanged at={-100} rows={[{v: 'n/a', at: K6.family, grey: true}, {v: 'n/a', at: K6.family, grey: true}, {v: 'different', at: K6.family, lit: K6.family}]} pulse={[{row: 2, at: K6.itself}]} label={{text: 'functional group isomers', at: K6.cycloalk}} />
			{void K6.fg}{void MULTI}
		</Overlay>
	);
};

// ---------- 7. Why the group matters ----------
const K7 = cues(sc('why-group-matters'), {chem: 'different chemistry', reacts: 'reacts,', cyclo: 'so cyclobutane', care: "That's why", apart: 'apart.', sets: 'the group sets', arr: 'full arrangement'});
export const SceneWhyGroup: React.FC = () => {
	const f = useCurrentFrame();
	const A = at2(M.but1ene, LX, PY);
	const mid: V2 = [(A[0][0] + A[1][0]) / 2, (A[0][1] + A[1][1]) / 2];
	const sp = vis(f, K7.reacts, K7.reacts + 50, 8);
	return (
		<Overlay>
			<Tally x={740} y={130} text="C 4, H 8" at={-100} />
			<WhatChanged at={-100} out={8} rows={[{v: 'n/a', grey: true}, {v: 'n/a', grey: true}, {v: 'different', lit: -100}]} label={{text: 'functional group isomers', at: -100}} />
			<Skel pts={A} bonds={M.but1ene.bonds} at={-100} width={7} pulse={{bond: 0, at: K7.reacts}} />
			{sp > 0.01 ? <g opacity={sp}>{[0, 1, 2, 3, 4, 5].map(k => { const a = (k * Math.PI) / 3 + 0.3, r1 = 30 + 20 * prog(f, K7.reacts, 20), r2 = r1 + 22; return <line key={k} x1={mid[0] + r1 * Math.cos(a)} y1={mid[1] + r1 * Math.sin(a)} x2={mid[0] + r2 * Math.cos(a)} y2={mid[1] + r2 * Math.sin(a)} stroke={MULTI} strokeWidth={5} strokeLinecap="round" />; })}</g> : null}
			<Tag x={LX} y={PY - 190} text="C=C: where an alkene reacts" at={K7.reacts} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Skel pts={RING_PTS} bonds={RING_B} at={-100} width={7} />
			<Tag x={RX} y={PY - 190} text="no C=C" at={K7.cyclo + 10} size={30} anchor="middle" />
			<g opacity={vis(f, K7.apart - 10, K7.apart + 100)}>
				<rect x={560} y={760} width={600} height={150} rx={20} fill="#f6f2ea" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 8" />
				<TubeOutline x={630} y={775} h={120} />
				<Sx x={690} y={850} text="a test tells them apart: later" size={34} color={INK_SOFT} hand at={K7.apart - 4} />
			</g>
			<NameLbl x={LX} y={PY + 150} parts={[['but', CHAIN_INK], ['-1-ene', TEAL]]} at={K7.arr} />
			<NameLbl x={RX} y={PY + 150} parts={[['cyclo', INK], ['butane', CHAIN_INK]]} at={K7.arr + 8} />
			{void K7.chem}{void K7.care}{void K7.sets}
		</Overlay>
	);
};

// ---------- 8. How to classify a pair ----------
const K8 = cues(sc('classify-a-pair'), {ask: 'ask three questions', q1: 'Same molecular formula?', butane: 'Butane and but-one-ene', fewer: 'two fewer', q2: 'Different family?', fg: 'functional group isomers', q3: 'Same family?', skel: 'skeleton changed', pos: "group's position", slip: 'classic slip', props: 'propan-one-ol and', alc: 'Both are alcohols', moved: 'The group moved', change: 'change.'});
export const SceneClassify: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K8.q1, K8.q2, K8.q3];
	const L = ['1  Same molecular formula?  No → not isomers.', '2  Different family (group)?  → functional group isomers.', '3  Same family: skeleton changed → chain; group moved → position.'];
	const Y = [300, 470, 600];
	const s = 0.72;
	const P1 = at2(M.propan1ol, 330, 860, s), P2 = at2(M.propan2ol, 640, 860, s);
	return (
		<Overlay>
			<Sx x={96} y={180} text="Three questions" size={46} color={INK} hand at={K8.ask} />
			{L.map((t, i) => (
				<g key={i} opacity={at[i + 1] !== undefined && f >= at[i + 1] ? 0.45 : f >= K8.slip ? 0.75 : 1}>
					<Sx x={110} y={Y[i]} text={t} size={48} color={i === 2 ? TEAL : INK} hand at={at[i]} />
				</g>
			))}
			<Sx x={150} y={375} text="butane C_4H_10  ≠  but-1-ene C_4H_8" size={32} color={INK_SOFT} weight={600} at={K8.butane} out={K8.q2} />
			<Sx x={860} y={375} text="(2 fewer H)" size={30} color={INK_SOFT} hand at={K8.fewer} out={K8.q2} />
			<WhatChanged at={-100} rows={[{}, {}, {}]} pulse={[{row: 2, at: K8.q2}, {row: 0, at: K8.skel}, {row: 1, at: K8.pos}]} />
			{/* the classic slip */}
			<g opacity={vis(f, K8.slip)}>
				<SkelAt m={M.propan1ol} x={330} y={860} s={s} at={K8.slip} pts={P1} />
				<SkelAt m={M.propan2ol} x={640} y={860} s={s} at={K8.slip + 8} pts={P2} />
				{[P1[3], P2[3]].map((p, k) => <g key={k} opacity={vis(f, K8.alc, K8.moved + 30)}><DrawPath d={`M${p[0] - 36},${p[1]} a42,30 0 1 0 84,0 a42,30 0 1 0 -84,0`} at={K8.alc + k * 6} dur={14} color={OXY} width={4} /></g>)}
			</g>
			<Crossed x={800} y={790} text="propan-1-ol / propan-2-ol: functional group isomers" at={K8.props} cross={K8.change} note="same O–H group, moved: position isomers" size={34} />
			{void K8.fg}
		</Overlay>
	);
};
