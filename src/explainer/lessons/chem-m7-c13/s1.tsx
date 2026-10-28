// M7 C13 scenes 1 to 7: the hook (a pear ester from ethene and 1-bromopropane), the reaction map (boxes, the alcohol
// hub, joining arrows, the alkane's UV step; then the grey card), move 1 (count carbons), move 2 (work backwards),
// move 3 (choose: a haloalkane fixes the OH position; propene gives mainly the 2-isomer), move 4 (write forwards with
// conditions) and checking every arrow (two crossed arrows; fewer steps, higher overall yield).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, Dots, Locants, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, apt, cmol, ctW, dimAt, loc, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {FRUIT, Heading, sc} from './common';
import {ALL_EDGES, AMB, BROWN, FArrow, FBox, GREY, INK, INK_SOFT, MapCard, NAVY, RED, RMap, TEALC, boxH} from './parts';

/** Condensed formula in two coloured halves (acid side amber, alcohol side pale blue). */
export const Halves: React.FC<{x: number; y: number; a: string; b: string; at: number; size?: number; split?: number; cut?: number; anchor?: 'start' | 'middle'}> = ({x, y, a, b, at, size = 44, split, cut, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const wa = ctW(a, size), wb = ctW(b, size);
	const x0 = anchor === 'middle' ? x - (wa + wb) / 2 : x;
	const sp = split === undefined ? 0 : smooth(prog(f, split, 24)) * 40;
	return (
		<g opacity={v}>
			<CT x={x0 - sp} y={y} text={a} size={size} color={AMB} />
			<CT x={x0 + wa + sp} y={y} text={b} size={size} color="#2d6f9e" />
			{cut !== undefined ? <line x1={x0 + wa} x2={x0 + wa} y1={y - size * 1.1} y2={y + size * 0.5} stroke={RED} strokeWidth={4} strokeDasharray="7 6" opacity={prog(f, cut, 10)} /> : null}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {pears: 'pears', suppose: 'Suppose', ethene: 'ethene,', brp: '1-bromopropane,', neither: 'Neither', ester: ['ester', 2], synth: 'synthesis', so: 'So how', flow: 'flow chart'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const pear = ptOn(FRUIT, 260, 420, 200, 1560, 1000);
	return (
		<>
			<Heading text="Organic synthesis: planning a route" at={4} size={56} />
			<Overlay>
				<g opacity={dimAt(f, K1.suppose, 0.25)}><Plate p={FRUIT} cx={260} top={420} h={200} /></g>
				<RingAt c={pear} rx={60} ry={70} at={K1.pears} out={K1.ester} />
				<Tag x={260} y={650} text="propyl ethanoate: smells of pears" at={K1.pears + 6} out={K1.ester} size={22} anchor="middle" />
				<FBox x={560} y={330} w={380} name="ethene" formula="CH₂=CH₂" at={K1.ethene} />
				<FBox x={560} y={560} w={380} name="1-bromopropane" formula="CH₃CH₂CH₂Br" at={K1.brp} />
				<Tag x={560} y={780} text="allowed starting materials" at={K1.brp + 20} out={K1.synth} size={24} />
				<FBox x={1330} y={440} w={440} name="propyl ethanoate" formula="CH₃COOCH₂CH₂CH₃" at={K1.ester} edge="red" />
				<Tag x={1330} y={380} text="target" at={K1.ester + 10} out={K1.synth} size={24} color={RED} fill="#f9e1dc" />
				<FArrow a={[960, 480]} b={[1310, 480]} at={K1.ester + 10} dashed color={GREY} />
				<Sx x={1135} y={460} text="?" size={52} color={GREY} anchor="middle" weight={800} at={K1.ester + 20} />
				<Tag x={1135} y={660} text="synthesis: making a target from simpler compounds" at={K1.synth} size={24} anchor="middle" />
				<Sx x={960} y={900} text="How do you plan a route, and show it as a flow chart?" size={40} color={INK} anchor="middle" hand at={K1.so} />
				{void K1.neither}{void K1.flow}
			</Overlay>
		</>
	);
};

// ---------- 2. The reaction map ----------
const K2 = cues(sc('reaction-map'), {good: 'Good news', map: 'map.', each: 'Each box', hub: 'hub', alk: 'Alkenes and', lead: 'lead on', now: 'Now add', esters: 'esters,', amines: 'amines', uv: 'U V light', all: 'at all'});
export const SceneMap: React.FC = () => {
	const f = useCurrentFrame();
	const hubE = ['hyd', 'sub', 'deh', 'hx', 'oxald', 'oxket', 'oxacid', 'alacid'];
	const edgeAt: Record<string, number> = {};
	hubE.forEach((e, i) => { edgeAt[e] = K2.hub + (i % 2) * 4; });
	edgeAt.est = K2.esters; edgeAt.amd = K2.amines; edgeAt.uv = K2.uv; edgeAt.h2 = K2.uv + 30; edgeAt.addhx = K2.uv + 36; edgeAt.hydro = K2.uv + 42;
	const lit: Record<string, [number, number]> = {est: [K2.esters, K2.amines], amd: [K2.amines, K2.uv], uv: [K2.uv, K2.uv + 50]};
	hubE.forEach(e => { lit[e] = [K2.hub, K2.now]; });
	const sh = smooth(prog(f, K2.all + 30, 24));
	return (
		<Overlay>
			<TaskLine text="Map" at={K2.map} size={54} y={130} />
			<g opacity={sh}><rect x={1440} y={830} width={440} height={200} rx={16} fill="#f6f3ec" stroke={GREY} strokeWidth={2} /></g>
			<RMap T={{boxAt: K2.map, edgeAt, lit, hub: K2.hub}} x={sh * 1415} y={sh * 790} s={1 - sh * 0.75} labels={sh < 0.5} />
			<Tag x={96} y={190} text="each box: a family; each arrow: a reaction from an earlier video" at={K2.each} out={K2.hub} size={24} />
			<Tag x={96} y={190} text="C08a: the alcohol is a hub" at={K2.hub} size={24} o={dimAt(f, K2.now, 0.5)} />
			<Tag x={1200} y={190} text="C10: esters; C11: amides" at={K2.esters} out={K2.uv} size={22} />
			<Tag x={1200} y={190} text="alkanes: X₂ and UV light first (C04b)" at={K2.uv} size={24} color={NAVY} fill="#e7edf8" />
			{void K2.good}{void K2.alk}{void K2.lead}
		</Overlay>
	);
};

// ---------- 3. Move 1: count ----------
const K3 = cues(sc('count-carbons'), {move: 'Move one', chain: 'chain keeps', join: 'join two', prop: 'Propyl ethanoate', two: 'two carbons', three: 'three.', eth: 'Ethene has', brp: ['three.', 2], counts: 'The counts', if: 'If they'});
export const SceneCount: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="1 Count" at={K3.move} size={54} y={130} />
			<FBox x={140} y={330} w={360} name="ethene" formula="CH₂=CH₂" at={0} />
			<FBox x={140} y={600} w={360} name="1-bromopropane" formula="CH₃CH₂CH₂Br" at={4} />
			<FBox x={1080} y={440} w={520} name="propyl ethanoate" formula="" at={8} edge="red" />
			<Halves x={1340} y={530} a="CH_3COO" b="CH_2CH_2CH_3" at={8} size={34} anchor="middle" />
			<g opacity={vis(f, K3.chain, K3.join)}>
				<CT x={640} y={300} text="CH_3CH_2OH → CH_3COOH" size={32} color={GREY} />
				<Tag x={640} y={320} text="groups change, chains stay (2 C → 2 C)" at={K3.chain + 10} size={22} />
			</g>
			<Tag x={640} y={300} text="only ester and amide formation add chains" at={K3.join} out={K3.prop} size={24} />
			<Tag x={1100} y={620} text="ethanoate: C 1, 2" at={K3.two} size={28} color={AMB} fill="#fbedd0" />
			<Tag x={1360} y={620} text="propyl: C 1, 2, 3" at={K3.three} size={28} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={520} y={360} text="2 C" at={K3.eth + 10} size={30} color={AMB} fill="#fbedd0" />
			<Tag x={520} y={630} text="3 C" at={K3.brp} size={30} color="#2d6f9e" fill="#e3f0fa" />
			<Dots a={[620, 380]} b={[1180, 610]} at={K3.brp + 10} color={AMB} width={4} />
			<Dots a={[620, 650]} b={[1420, 610]} at={K3.brp + 16} color="#2d6f9e" width={4} />
			<Tag x={960} y={800} text="2 + 3: counts match" at={K3.counts} size={32} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={960} y={880} text="if not: a joining step, or a different start" at={K3.if} size={24} anchor="middle" />
			<MapCard />
		</Overlay>
	);
};

// ---------- 4. Move 2: backwards ----------
const K4 = cues(sc('work-backwards'), {move: 'Move two', ask: 'Ask which', ester: 'An ester', cut: 'cut it', oxygen: 'oxygen,', eth: 'ethanoate part', prop: 'propyl part', now: 'Now ask', acid: 'Ethanoic acid comes', ethanol: 'ethanol.', ethene: 'ethene and steam', keep: 'Keep asking'});
export const SceneBack: React.FC = () => {
	const f = useCurrentFrame();
	const TY = 470;
	return (
		<Overlay>
			<TaskLine text="2 Backwards" at={K4.move} size={54} y={130} />
			<Sx x={96} y={200} text="working backwards: retrosynthesis" size={22} color={GREY} weight={600} at={K4.move + 20} />
			<FBox x={1380} y={TY - 40} w={460} name="propyl ethanoate" formula="" at={0} edge="red" />
			<Halves x={1610} y={TY + 50} a="CH_3CO" b="OCH_2CH_2CH_3" at={0} size={32} anchor="middle" split={K4.oxygen + 10} cut={K4.oxygen} />
			<Tag x={1380} y={TY + 110} text="C10: cut at the single-bonded O" at={K4.oxygen} out={K4.now} size={22} />
			<FBox x={900} y={280} w={380} name="ethanoic acid" formula="CH₃COOH" at={K4.eth} />
			<FArrow a={[1370, TY - 10]} b={[1290, 330]} at={K4.eth} color={AMB} dashed />
			<FBox x={900} y={620} w={380} name="propan-1-ol" formula="CH₃CH₂CH₂OH" at={K4.prop} />
			<FArrow a={[1370, TY + 60]} b={[1290, 660]} at={K4.prop} color={AMB} dashed />
			<FBox x={460} y={280} w={340} name="ethanol" formula="CH₃CH₂OH" at={K4.ethanol} />
			<FArrow a={[890, 320]} b={[810, 320]} at={K4.acid} color={AMB} dashed />
			<Tag x={460} y={400} text="acid ← primary alcohol" at={K4.ethanol + 10} size={24} color={AMB} fill="#fbedd0" />
			<FBox x={96} y={280} w={280} name="ethene" formula="CH₂=CH₂" at={K4.ethene} glow={K4.ethene} />
			<FArrow a={[450, 320]} b={[386, 320]} at={K4.ethene} color={AMB} dashed />
			<Tag x={96} y={400} text="← alkene + steam" at={K4.ethene + 10} size={24} color={AMB} fill="#fbedd0" />
			<FBox x={600} y={620} w={200} name="?" at={K4.prop + 20} edge="grey" />
			<FArrow a={[890, 660]} b={[810, 660]} at={K4.prop + 20} color={GREY} dashed />
			<Tag x={96} y={800} text="keep asking until you reach an allowed start" at={K4.keep} size={26} color={TEAL} fill="#dff2ef" />
			<MapCard amber={{est: K4.oxygen, alacid: K4.ethanol, hyd: K4.ethene}} />
			{void K4.ask}{void K4.ester}{void K4.cut}
		</Overlay>
	);
};

// ---------- 5. Move 3: choose ----------
const K5 = cues(sc('choose-route'), {where: 'Where does', here: 'from 1-bromopropane', hyd: 'Hydroxide takes', same: 'same carbon', one: 'carbon one', why: 'Why not', propene: 'propene.', either: 'either carbon', middle: 'middle one', hbr: 'Adding H Br', so: 'So when', right: 'right carbon'});
const BRP = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'Br'}]);
const POL = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'OH'}]);
export const SceneChoose: React.FC = () => {
	const f = useCurrentFrame();
	const X = 420, Y = 470, S = 1.05;
	const left = Math.min(dimAt(f, K5.propene, 0.3) + prog(f, K5.right, 12), 1);
	const c2 = apt(BRP, BRP.k.c2, X, Y, S);
	const rightO = vis(f, K5.propene - 10) * dimAt(f, K5.right, 0.3);
	return (
		<Overlay>
			<TaskLine text="3 Choose" at={K5.where} size={54} y={130} />
			<FBox x={96} y={190} w={260} name="? → propan-1-ol" at={0} edge="grey" size={22} o={vis(f, 0, K5.here + 20)} />
			<g opacity={left}>
				<Mol2D m={BRP} x={X} y={Y} s={S} at={K5.here} lift={{[BRP.k['2r']]: {to: loc([X + 260, Y - 160], X, Y, S), at: K5.same, dur: 26, fade: K5.same + 30}}} />
				<Mol2D m={POL} x={X} y={Y} s={S} at={K5.same + 20} atomO={i => (i === POL.k['2r'] || i === POL.k['2rH'] ? 1 : 0)} />
				<Locants pts={[c2]} at={K5.here + 10} offs={[[30, 60]]} />
				<Sx x={X} y={Y - 140} text="1-bromopropane → propan-1-ol" size={28} color={INK} anchor="middle" weight={700} at={K5.here} />
				<Tag x={X - 200} y={Y + 130} text="C06: OH⁻ takes Br's place on the same carbon" at={K5.same} out={K5.propene} size={22} />
				<Tag x={X - 200} y={Y + 130} text="OH on C1, as needed" at={K5.one} size={28} color={TEAL} fill="#dff2ef" />
			</g>
			<g opacity={rightO}>
				<CT x={1000} y={300} text="CH_2=CHCH_3" size={44} color={INK} at={K5.propene} />
				<Tag x={1000} y={320} text="propene (not one of our starting materials)" at={K5.propene + 10} size={20} />
				<FArrow a={[1290, 290]} b={[1440, 250]} at={K5.either} color={GREY} />
				<FArrow a={[1290, 300]} b={[1440, 360]} at={K5.either} color={INK} />
				<Sx x={1460} y={260} text="propan-1-ol" size={24} color={GREY} weight={700} at={K5.either + 10} />
				<Sx x={1460} y={380} text="propan-2-ol" size={38} color={INK} weight={800} at={K5.middle} />
				<Tag x={1460} y={410} text="mainly propan-2-ol (C04a)" at={K5.middle + 10} size={22} />
				<CT x={1000} y={600} text="CH_2=CHCH_3 + HBr" size={40} color={INK} at={K5.hbr} />
				<FArrow a={[1400, 590]} b={[1520, 550]} at={K5.hbr + 10} color={GREY} />
				<FArrow a={[1400, 600]} b={[1520, 660]} at={K5.hbr + 10} color={INK} />
				<Sx x={1540} y={560} text="1-bromopropane" size={22} color={GREY} weight={700} at={K5.hbr + 20} />
				<Sx x={1540} y={680} text="2-bromopropane" size={34} color={INK} weight={800} at={K5.hbr + 20} />
				<Crossed x={1000} y={740} text="propene + HBr: same problem" at={K5.hbr + 30} cross={K5.so} size={28} />
			</g>
			<Tag x={96} y={860} text="position matters: start from a haloalkane with its halogen on the right carbon" at={K5.right} size={28} color={TEAL} fill="#dff2ef" />
			<MapCard amber={{sub: K5.same}} />
			{void K5.hyd}{void K5.why}{void BROWN}{void TEALC}
		</Overlay>
	);
};

// ---------- 6. Move 4: forwards ----------
const K6 = cues(sc('write-forwards'), {move: 'Move four', arrow: 'arrow.', ethene: 'Ethene and steam', inter: 'intermediate', then: 'Then acidified', reflux: 'reflux,', distil: 'distillation', other: 'On the other', brp: '1-bromopropane heated', fin: 'Finally', water: 'water.', eqm: 'equilibrium', both: 'both arrows'});
export const FlowMain: React.FC<{T: {e: number; a1: number; et: number; a2: number; ac: number; br: number; a3: number; po: number; j: number; fin: number; dist?: number; both?: number; inter?: number}; dimChips?: boolean}> = ({T, dimChips = true}) => {
	const U = 230, D = 500, H = boxH(24);
	return (
		<g>
			<FBox x={96} y={U} w={250} name="ethene" formula="CH₂=CH₂" at={T.e} size={24} />
			<FArrow a={[356, U + H / 2]} b={[616, U + H / 2]} at={T.a1} eq chips={['H₂O (steam), H₃PO₄ catalyst', 'about 300 °C, high pressure']} dim={dimChips ? T.a2 : undefined} />
			<FBox x={626} y={U} w={270} name="ethanol" formula="CH₃CH₂OH" at={T.et} size={24} />
			<FArrow a={[906, U + H / 2]} b={[1166, U + H / 2]} at={T.a2} chips={['excess K₂Cr₂O₇ / H⁺', 'heat under reflux']} dim={dimChips ? T.a3 : undefined} />
			<FBox x={1176} y={U} w={300} name="ethanoic acid" formula="CH₃COOH" at={T.ac} size={24} />
			<FBox x={576} y={D} w={320} name="1-bromopropane" formula="CH₃CH₂CH₂Br" at={T.br} size={24} />
			<FArrow a={[906, D + H / 2]} b={[1166, D + H / 2]} at={T.a3} chips={['NaOH(aq)', 'heat under reflux']} dim={dimChips ? T.j : undefined} />
			<FBox x={1176} y={D} w={300} name="propan-1-ol" formula="CH₃CH₂CH₂OH" at={T.po} size={24} />
			<FArrow a={[1486, U + H / 2]} b={[1566, U + H + 80]} at={T.j} color="#24407a" />
			<FArrow a={[1486, D + H / 2]} b={[1566, D - 20]} at={T.j} color="#24407a" />
			<FArrow a={[1580, U + H + 100]} b={[1580, D - 40]} at={T.j} eq chips={[]} />
			<Sx x={1600} y={U + H + 170} text="conc. H₂SO₄ (a few drops)," size={18} color={NAVY} weight={700} at={T.j + 8} />
			<Sx x={1600} y={U + H + 194} text="heat under reflux" size={18} color={NAVY} weight={700} at={T.j + 14} />
			<FBox x={1440} y={D + H + 40} w={440} name="propyl ethanoate" formula="CH₃COOCH₂CH₂CH₃ + H₂O" at={T.fin} edge="red" size={24} />
		</g>
	);
};
export const SceneForwards: React.FC = () => {
	const f = useCurrentFrame();
	const T = {e: 0, a1: K6.arrow, et: K6.ethene + 60, a2: K6.then, ac: K6.reflux - 20, br: K6.other, a3: K6.brp, po: K6.brp + 60, j: K6.fin, fin: K6.water};
	const pl = (a: number) => 1 + 0.25 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - a) / 30)) * Math.PI));
	return (
		<Overlay>
			<TaskLine text="4 Forwards" at={K6.move} size={54} y={130} />
			<FlowMain T={T} />
			<Tag x={626} y={340} text="intermediate: made, then used" at={K6.inter} out={K6.then + 40} size={24} color={AMB} fill="#fbedd0" />
			<Tag x={906} y={340} text="C08a: distil → ethanal" at={K6.distil} out={K6.other} size={22} />
			<g transform={`translate(486,315) scale(${pl(K6.both)}) translate(-486,-315)`}><Tag x={420} y={760} text="equilibrium: ⇌ on hydration and esterification" at={K6.both} size={28} color={NAVY} fill="#e7edf8" /></g>
			<MapCard amber={{hyd: K6.arrow, alacid: K6.then, sub: K6.brp, est: K6.fin}} o={dimAt(f, 0, 1)} />
			{void K6.eqm}
		</Overlay>
	);
};

// ---------- 7. Check every arrow ----------
const K7 = cues(sc('check-arrows'), {then: 'Then finish', here: "Here's a plan", turns: 'It turns', p2: 'propan-2-ol.', no: 'No reaction', alk: 'An alkane first', oxid: 'Then it oxidises', acid: ['propanoic acid', 2], arrow: "That arrow doesn't", ketone: 'A ketone has', dead: 'dead end', prim: 'primary alcohol', keep: 'And keep', overall: 'overall'});
export const SceneCheck: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 290, W = 300, H = boxH(24);
	const xs = [96, 520, 944, 1368];
	const names = [['propane', 'CH₃CH₂CH₃'], ['propan-2-ol', 'CH₃CH(OH)CH₃'], ['propanone', 'CH₃COCH₃'], ['propanoic acid', 'CH₃CH₂COOH']];
	const chips = [['NaOH(aq)'], ['K₂Cr₂O₇ / H⁺'], ['K₂Cr₂O₇ / H⁺, reflux']];
	const cross = [K7.p2, undefined, K7.acid];
	const top = dimAt(f, K7.prim, 0.55);
	return (
		<Overlay>
			<TaskLine text="Check every arrow" at={K7.then} size={54} y={130} />
			<Sx x={96} y={240} text="A plan for propanoic acid" size={30} color={INK_SOFT} hand at={K7.here} />
			<g opacity={top}>
				{names.map((n, i) => <FBox key={i} x={xs[i]} y={Y} w={W} name={n[0]} formula={n[1]} at={K7.here + i * 8} size={24} />)}
				{chips.map((c, i) => <FArrow key={i} a={[xs[i] + W + 8, Y + H / 2]} b={[xs[i + 1] - 8, Y + H / 2]} at={K7.here + 6 + i * 8} chips={c} size={18} cross={cross[i]} />)}
			</g>
			<Tag x={96} y={420} text="no direct alkane → alcohol" at={K7.p2 + 10} out={K7.oxid} size={26} color={RED} fill="#f9e1dc" />
			<g opacity={vis(f, K7.alk, K7.oxid)}><CT x={96} y={500} text="propane → (Cl_2, UV light) → chloropropanes (mixture) → (NaOH(aq), reflux) → propanols" size={24} color={GREY} /></g>
			<Tag x={944} y={420} text="ketone: dead end (no H on the C=O carbon)" at={K7.ketone} out={K7.prim} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={944} y={480} text="C08a: oxidation needs an H on that carbon" at={K7.ketone + 20} out={K7.dead + 20} size={20} />
			<Sx x={96} y={580} text="tertiary alcohol: no H on the C–OH carbon, no oxidation" size={20} color={GREY} weight={600} at={K7.dead + 20} />
			<FBox x={944} y={600} w={W} name="propan-1-ol" formula="CH₃CH₂CH₂OH" at={K7.prim} edge="amber" size={24} />
			<FArrow a={[944 + W + 8, 640]} b={[1440, Y + H + 8]} at={K7.prim + 10} color={AMB} chips={['excess K₂Cr₂O₇ / H⁺, reflux']} below size={18} />
			<Tag x={944} y={720} text="C10: only a primary alcohol oxidises to an acid" at={K7.prim + 20} size={22} />
			{[0, 1, 2].map(i => <g key={i} opacity={vis(f, K7.overall - 20)}><FArrow a={[140 + i * 180, 860]} b={[290 + i * 180, 860]} at={K7.overall - 20 + i * 6} color={GREY} /><circle cx={215 + i * 180} cy={880 + 30 * prog(f, K7.overall + i * 6, 20)} r={8} fill={GREY} opacity={prog(f, K7.overall + i * 6, 6)} /></g>)}
			<Tag x={720} y={840} text="more steps: lower overall yield" at={K7.overall} size={28} color={NAVY} fill="#e7edf8" />
			<MapCard ring={{ketone: K7.dead}} />
			{void K7.no}{void K7.arrow}{void K7.keep}{void K7.turns}
		</Overlay>
	);
};
export {ALL_EDGES};
