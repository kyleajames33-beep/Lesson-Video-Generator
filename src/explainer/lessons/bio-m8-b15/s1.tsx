// B8-15 scenes 1 to 5: the hook (louder isn't clearer), the outer and middle ear (eardrum, ossicles, the small window),
// the cochlea and hair cells (where vibration becomes a nerve signal), two kinds of loss (conductive, sensorineural),
// and the hearing aid. The sound pathway strip owns the bottom from scene 2; the ear section is the home plate.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {SignalPulse} from '../m8-shared/parts';
import {
	AMBER, AMBER_INK, BLUE, Bubble, C_AID, CARD, Call, Chip, DrawPath, EarStack, GREEN, GTag, INK, INK_SOFT, ON, PicH, PlateB, RED, Ring, Rings, Strip, Svg, Sx, TEAL, Title, Uncoiled, Veil, VolBar,
	Waves, earPt, lerp, plPt, prog, smooth, vis,
} from './parts';
import type {Arc, EarG, Pt} from './parts';
import {AP, EP, HP, OP, PL} from './assets';
import {K} from './common';

export const LIT5 = [ON, ON, ON, ON, ON, ON];
export const ARC_AID = (at: number, out?: number, label?: string, o?: number): Arc => ({to: 0, color: C_AID, at, out, rise: 70, label, lx: 560, o});

// ---------- 1. hook ----------
const K1 = K('hook', {far: 'as far as', cant: "can't make", vol: "Volume isn't", between: 'Somewhere between', part: 'one part', past: 'gets the signal', y1978: 'In 1978', so: 'So how'});
const G1: EarG = {cx: 900, cy: 500, w: 680};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const A = 1 - prog(f, K1.part - 6, 16);
	const B = prog(f, K1.part, 18);
	const level = lerp(0.25, 1, smooth(prog(f, K1.far, 34)));
	const slide = smooth(prog(f, K1.part - 6, 24));
	const aidCx = lerp(560, 260, slide), aidW = lerp(480, 280, slide);
	const aidCy = lerp(480, 500, slide);
	const tip = plPt(PL.aid, aidCx, aidCy, aidW, AP.tip);
	const coch = earPt(G1, EP.cochlea);
	return (
		<Svg>
			<Title text="Louder isn't clearer" out={K1.so} />
			<Title text="How can technology assist hearing loss?" at={K1.so} />
			<PlateB p={PL.aid} cx={aidCx} cy={aidCy} w={aidW} o={1 - 0.4 * slide} />
			{A > 0.01 ? <g opacity={A}>
				<VolBar x={150} y={360} h={300} level={level} />
				<Sx x={110} y={720} text="volume: full" size={40} color={AMBER_INK} hand at={K1.far + 20} />
				<Waves a={tip} b={[1140, 470]} at={K1.far} amp={f2 => 18 + 34 * smooth(prog(f2, K1.far, 40))} n={4} period={50} />
				<Bubble x={1160} y={250} w={620} h={240} at={K1.cant} />
				<Sx x={1160} y={680} text="louder, but no clearer" size={54} color={INK} hand at={K1.vol} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<EarStack g={G1} base={PL.ear} />
				<Veil c={coch} rx={70} ry={58} v={prog(f, K1.between + 10, 16)} />
				<Chip x={coch[0] - 26} y={coch[1] - 30} text="?" size={40} color={RED} ink={RED} at={K1.part + 10} />
				<Sx x={1290} y={300} text="one part has stopped working" size={40} color={INK} hand at={K1.part + 4} />
				<Sx x={1290} y={360} text="get the signal past it" size={40} color={TEAL} hand at={K1.past} />
				<PicH p={PL.ci} cx={1500} cy={560} h={220} at={K1.y1978} />
				<GTag x={1320} y={700} text="Melbourne, 1978" size={32} at={K1.y1978 + 10} />
			</g> : null}
			{void BLUE}{void CARD}
		</Svg>
	);
};

// ---------- 2. outer and middle ear ----------
const K2 = K('outer-middle-ear', {follow: "Let's follow", outer: 'outer ear funnels', eardrum: 'to the eardrum', membrane: 'a thin membrane', ossicles: 'called the ossicles', malleus: 'malleus', incus: 'incus', stapes: 'then stapes', pushes: 'The stapes pushes', window: 'small window', smaller: 'much smaller', conc: 'is concentrated', fluid: 'moves the fluid'});
const G2: EarG = {cx: 440, cy: 470, w: 560};
const O2 = {cx: 1330, cy: 340, w: 600};
export const SceneOuterMiddle: React.FC = () => {
	const f = useCurrentFrame();
	const P = (p: Pt) => earPt(G2, p);
	const O = (p: Pt) => plPt(PL.oss, O2.cx, O2.cy, O2.w, p);
	const ok = O2.w / (PL.oss.box[2] - PL.oss.box[0]);
	const drum = P(EP.drum);
	const shimmer = vis(f, K2.membrane, K2.ossicles + 30, 10);
	const bones: [keyof typeof OP, number, number][] = [['malleus', K2.malleus, 1], ['incus', K2.incus, 2], ['stapes', K2.stapes, 3]];
	const chain = ['eardrum', 'malleus', 'incus', 'stapes', 'window'];
	const chainAt = [K2.ossicles + 10, K2.malleus, K2.incus, K2.stapes, K2.pushes];
	const cmp = prog(f, K2.smaller, 14);
	const bar = smooth(prog(f, K2.conc, 30));
	let cx = 900;
	return (
		<Svg>
			<Title text="Follow the sound: outer and middle ear" />
			<EarStack g={G2} base={PL.ear} />
			<Waves a={[60, P(EP.canalIn)[1] - 4]} b={P(EP.canal)} at={K2.outer} out={K2.ossicles} amp={24} />
			{shimmer > 0.01 ? <ellipse cx={drum[0]} cy={drum[1]} rx={10 + 3 * Math.sin(f / 2)} ry={40} fill="none" stroke={AMBER} strokeWidth={5} opacity={shimmer} /> : null}
			<Call x={110} y={800} text="outer ear: funnels sound" pt={P([620, 960])} at={K2.outer} from={[300, 768]} />
			<Call x={560} y={800} text="eardrum: vibrates" pt={[drum[0], drum[1] + 30]} at={K2.eardrum} from={[640, 768]} />
			<Rings c={P(EP.cochlea)} at={K2.fluid} R={60} color={BLUE} />
			<Sx x={900} y={598} text="ossicles: three tiny bones" size={36} color={INK} hand at={K2.ossicles} />
			<Ring cx={P([1150, 880])[0]} cy={P([1150, 880])[1]} rx={42} ry={54} at={K2.ossicles} out={K2.pushes} color={AMBER} seed={9} />
			<g opacity={prog(f, K2.ossicles, 16)}>
				<PlateB p={PL.oss} cx={O2.cx} cy={O2.cy} w={O2.w} />
			</g>
			{bones.map(([k, at], i) => {
				const b = OP[k] as {c: Pt; rx: number; ry: number};
				const c = O(b.c);
				const next = bones[i + 1]?.[1] ?? K2.window;
				return <Ring key={k} cx={c[0]} cy={c[1]} rx={b.rx * ok} ry={b.ry * ok} at={at} out={next} color={AMBER} seed={i + 2} />;
			})}
			{chain.map((w, i) => {
				const x = cx;
				cx += w.length * 19 + 60;
				const hot = i > 0 && i < 4 ? vis(f, chainAt[i], chainAt[i + 1] ?? K2.window, 8) : 0;
				return <g key={w}>
					<Sx x={x} y={640} text={w} size={36} color={hot > 0.5 ? AMBER_INK : INK} hand at={chainAt[i]} />
					{i < chain.length - 1 ? <Sx x={x + w.length * 19 + 14} y={640} text="→" size={34} color={INK_SOFT} at={chainAt[i + 1]} /> : null}
				</g>;
			})}
			<Ring cx={O(OP.window)[0]} cy={O(OP.window)[1]} rx={46} ry={70} at={K2.window} color={RED} seed={7} />
			<GTag x={1620} y={210} text="oval window" size={30} at={K2.window + 6} />
			<Ring cx={O(OP.drum)[0]} cy={O(OP.drum)[1]} rx={150} ry={200} at={K2.smaller} color={BLUE} seed={5} />
			{cmp > 0.01 ? <g opacity={cmp}>
				<circle cx={990} cy={770} r={52} fill="#dce7f4" stroke={BLUE} strokeWidth={4} />
				<circle cx={1250} cy={770} r={16} fill="#f6dcd5" stroke={RED} strokeWidth={4} />
				<path d="M880,770 L928,770 M916,760 L930,770 L916,780" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<path d="M1176,770 L1224,770 M1212,760 L1226,770 L1212,780" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<rect x={1060} y={800 - 24 - 6 * bar} width={24} height={24 + 6 * bar} fill={BLUE} />
				<rect x={1290} y={800 - 24 - 80 * bar} width={24} height={24 + 80 * bar} fill={RED} />
				<Sx x={1350} y={756} text="same push, smaller area" size={34} color={INK} hand at={K2.smaller} />
				<Sx x={1350} y={800} text="→ more pressure" size={34} color={RED} hand at={K2.conc} />
			</g> : null}
			<Strip s={{lit: [K2.outer, K2.eardrum, K2.ossicles, K2.fluid, undefined, undefined], pulses: [{at: K2.outer + 6, until: K2.pushes, to: 2, every: 45}, {at: K2.fluid, to: 3, every: 45}]}} />
			{void GREEN}{void CARD}{void BLUE}
		</Svg>
	);
};

// ---------- 3. the cochlea and hair cells ----------
const K3 = K('cochlea-hair-cells', {cochlea: 'the cochlea is', waves: 'waves travel', vibrate: 'inside vibrate', high: 'High sounds', low: 'low sounds', hair: 'are hair cells', receptors: 'the receptors', bend: 'hairs bend', ion: 'ion channels', triggers: 'triggers signals', nerve: 'auditory nerve', brain: 'to the brain', so: 'So the cochlea', becomes: 'vibration becomes'});
const G3: EarG = {cx: 290, cy: 330, w: 360};
export const H3 = {cx: 1400, cy: 450, w: 700};
export const SceneCochlea: React.FC = () => {
	const f = useCurrentFrame();
	const P = (p: Pt) => earPt(G3, p);
	const H = (p: Pt) => plPt(PL.hcOk, H3.cx, H3.cy, H3.w, p);
	const tip = H(HP.tip);
	const bend = smooth(prog(f, K3.bend, 14)) * (0.8 + 0.2 * Math.sin(f / 5));
	const ionV = vis(f, K3.ion, K3.so, 10);
	return (
		<Svg>
			<Title text="The cochlea: vibration to signal" />
			<EarStack g={G3} base={PL.ear} />
			<Rings c={P(EP.cochlea)} at={K3.cochlea} out={K3.hair} R={44} color={BLUE} />
			<Call x={520} y={290} text="cochlea: coiled, fluid-filled" pt={P(EP.cochlea)} at={K3.cochlea} size={36} from={[510, 280]} />
			<GTag x={520} y={320} text="uncoiled view below" size={28} at={K3.waves} />
			<Uncoiled x0={120} x1={860} y={710} at={K3.waves} bulges={[{t: 0.14, at: K3.high, out: K3.low + 20}, {t: 0.8, at: K3.low}]} />
			<Sx x={120} y={630} text="start of coil: high pitch" size={34} color={BLUE} hand at={K3.high} />
			<Sx x={600} y={630} text="end: low pitch" size={34} color={BLUE} hand at={K3.low} />
			<g opacity={prog(f, K3.hair, 16)}>
				<PlateB p={PL.hcOk} cx={H3.cx} cy={H3.cy} w={H3.w} />
			</g>
			<GTag x={1500} y={150} text="b01: receptors" size={30} at={K3.receptors} />
			<Sx x={1230} y={760} text="hair cells: the receptors" size={38} color={INK} hand at={K3.hair} />
			{bend > 0.01 ? <g opacity={Math.min(1, bend * 1.4)}>
				{[0, 87, 174].map(dx => <path key={dx} d={`M${tip[0] + dx - 6},${tip[1] + 34} Q${tip[0] + dx},${tip[1]} ${tip[0] + dx + 26 * bend},${tip[1] - 34}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />)}
				<path d={`M${tip[0] - 20},${tip[1] - 60} L${tip[0] + 190},${tip[1] - 60} M${tip[0] + 176},${tip[1] - 70} L${tip[0] + 192},${tip[1] - 60} L${tip[0] + 176},${tip[1] - 50}`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" opacity={0.9} />
			</g> : null}
			{ionV > 0.01 ? <g opacity={ionV}>
				{Array.from({length: 8}, (_, i) => {
					const t = (((f - K3.ion) / 40 + i / 8) % 1 + 1) % 1;
					const a0 = (i / 8) * Math.PI - Math.PI;
					const sx = tip[0] - 60 + Math.cos(a0) * 40, sy = tip[1] + 10 + Math.sin(a0) * 24;
					return <circle key={i} cx={lerp(sx, tip[0] + 4, t)} cy={lerp(sy, tip[1] + 50, t)} r={7} fill={TEAL} opacity={1 - t * 0.6} />;
				})}
			</g> : null}
			<Call x={900} y={240} text="channels open" size={36} color={TEAL} pt={[tip[0] - 4, tip[1] + 40]} at={K3.ion} />
			<SignalPulse a={H(HP.fibreA)} b={H(HP.fibreB)} at={K3.triggers} every={16} dur={22} bow={0} color={AMBER} r={9} track={false} />
			<Strip s={{lit: [ON, ON, ON, K3.cochlea, K3.nerve, K3.brain], pulses: [{at: K3.waves, until: K3.hair, to: 3, every: 40}, {at: K3.nerve, from: 3, to: 5, every: 30}], brackets: [{a: 3, b: 3, at: K3.becomes, label: 'vibration → nerve signal', color: AMBER_INK, lx: 1000}]}} />
			{void INK_SOFT}{void CARD}{void RED}{void C_AID}{void Chip}{void PicH}{void GREEN}{void DrawPath}
		</Svg>
	);
};

// ---------- 4. two kinds of hearing loss ----------
const K4 = K('two-kinds-of-loss', {two: 'two main', conductive: 'In conductive', blocked: 'canal might', fluid: 'fluid might', torn: 'might be torn', stuck: 'might be stuck', works: 'cochlea still works', senso: 'In sensorineural', damaged: 'are damaged', noise: 'loud noise', ageing: 'ageing', genes: 'genes', infections: 'some infections', grow: "don't grow", perm: 'usually permanent'});
const G4: EarG = {cx: 360, cy: 410, w: 520};
const H4 = {cx: 1430, cy: 390, w: 640};
export const SceneTwoKinds: React.FC = () => {
	const f = useCurrentFrame();
	const P = (p: Pt) => earPt(G4, p);
	const A = 1 - prog(f, K4.senso - 4, 14);
	const dmg = smooth(prog(f, K4.damaged, 30));
	const causes: {t: string; at: number; p: Pt; y: number}[] = [
		{t: 'blocked canal', at: K4.blocked, p: EP.canal, y: 170},
		{t: 'torn eardrum', at: K4.torn, p: [1030, 940], y: 240},
		{t: 'stuck stapes', at: K4.stuck, p: EP.stapes, y: 310},
		{t: 'middle ear fluid', at: K4.fluid, p: [1180, 1060], y: 380},
	];
	const coch = P(EP.cochlea);
	return (
		<Svg>
			<Title text="Two kinds of hearing loss" />
			<EarStack g={G4} base={PL.ear} />
			{A > 0.01 ? <g opacity={A}>
				{causes.map((c, i) => {
					const pt = P(c.p);
					const top: Pt = [692, c.y + 25];
					const ang = Math.atan2(pt[1] - top[1], pt[0] - top[0]);
					return <g key={c.t}>
						<Ring cx={pt[0]} cy={pt[1]} rx={20} ry={20} at={c.at} color={RED} width={7} seed={i + 3} />
						<DrawPath d={`M${top[0]},${top[1]} L${pt[0] - 24 * Math.cos(ang)},${pt[1] - 24 * Math.sin(ang)}`} at={c.at + 4} dur={10} color={RED} width={3} />
						<Chip x={700} y={c.y} text={c.t} size={32} color={RED} ink={INK} at={c.at} />
					</g>;
				})}
				<Ring cx={coch[0]} cy={coch[1]} rx={52} ry={52} at={K4.works} color={GREEN} width={6} seed={4} />
				<Call x={700} y={540} text="cochlea still works" size={40} color={GREEN} pt={[coch[0] + 46, coch[1] + 24]} at={K4.works} />
			</g> : null}
			<g>
				<PlateB p={PL.hcOk} cx={H4.cx} cy={H4.cy} w={H4.w} />
				{dmg > 0.01 ? <PlateB p={PL.hcBad} cx={H4.cx} cy={H4.cy} w={H4.w} o={dmg} /> : null}
			</g>
			<Sx x={1130} y={150} text="hair cells" size={34} color={INK} hand at={ON} out={K4.damaged} />
			<Sx x={1130} y={150} text="hair cells after damage" size={34} color={RED} hand at={K4.damaged + 6} />
			{[['noise', K4.noise, 1100, 640], ['ageing', K4.ageing, 1230, 640], ['genes', K4.genes, 1385, 640], ['some infections', K4.infections, 1520, 640]].map(([t, at, x, y]) => (
				<Chip key={t as string} x={x as number} y={y as number} text={t as string} size={30} color={RED} ink={INK} at={at as number} />
			))}
			<GTag x={1100} y={712} text="hair cells don't grow back: usually permanent" size={28} at={K4.grow} />
			<GTag x={700} y={600} text="both together: mixed loss" size={28} at={K4.perm} />
			<Strip s={{
				lit: LIT5,
				tick: [{i: 3, at: K4.works, out: K4.senso}],
				brk: [{after: 2, at: K4.conductive + 10, out: K4.senso}],
				bad: [{i: 3, at: K4.damaged}, {i: 4, at: K4.damaged + 10}],
				brackets: [{a: 0, b: 2, at: K4.conductive, out: K4.senso, label: 'conductive: outer or middle ear', color: AMBER_INK}, {a: 3, b: 4, at: K4.senso, label: 'sensorineural: hair cells or nerve', color: RED}],
			}} />
			{void BLUE}{void CARD}{void TEAL}{void PicH}{void Rings}
		</Svg>
	);
};

// ---------- 5. the hearing aid ----------
const K5 = K('hearing-aid', {match: 'Now match', aid: 'A hearing aid', mic: 'A microphone', amp: 'an amplifier', pitches: 'mostly at', speaker: 'tiny speaker', louder: 'That louder', normal: 'the normal path', some: 'needs some', enough: 'enough usable', most: 'if most', nothing: 'nothing left'});
const G5: EarG = {cx: 1420, cy: 430, w: 560};
const A5 = {cx: 290, cy: 330, w: 360};
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const A = 1 - prog(f, K5.most - 8, 14);
	const B = prog(f, K5.most, 16);
	const Ap = (p: Pt) => plPt(PL.aid, A5.cx, A5.cy, A5.w, p);
	const tip = Ap(AP.tip);
	const canal = earPt(G5, EP.canalIn);
	const hk = 380;
	const hcY = 360;
	return (
		<Svg>
			<Title text="The hearing aid: louder sound" />
			<EarStack g={G5} base={PL.ear} />
			<Waves a={tip} b={[canal[0] + 70, canal[1]]} at={K5.speaker} out={K5.most} amp={f2 => 20 + 18 * smooth(prog(f2, K5.louder, 20))} n={5} period={50} color={C_AID} />
			{A > 0.01 ? <g opacity={A}>
				<g opacity={prog(f, K5.aid - 6, 14)}><PlateB p={PL.aid} cx={A5.cx} cy={A5.cy} w={A5.w} /></g>
				<Waves a={[760, 190]} b={Ap(AP.mic)} at={K5.mic} out={K5.speaker} amp={16} n={4} period={46} color={INK_SOFT} />
				<Call x={110} y={570} text="microphone" pt={Ap(AP.mic)} at={K5.mic} from={[320, 558]} />
				<Call x={110} y={630} text="amplifier: louder" pt={Ap(AP.body)} at={K5.amp} from={[420, 618]} />
				<GTag x={110} y={650} text="mostly at the pitches heard worst" size={28} at={K5.pitches} />
				<Call x={110} y={735} text="speaker: into the canal" pt={tip} at={K5.speaker} from={[520, 723]} />
				<Chip x={540} y={180} text="helps if enough usable hearing remains" size={32} color={C_AID} ink={INK} at={K5.enough} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<PlateB p={PL.hcOk} cx={300} cy={hcY} w={hk} />
				<PlateB p={PL.hcBad} cx={760} cy={hcY} w={hk} />
				<Waves a={[1000, 330]} b={[900, 330]} at={K5.most + 10} amp={34} n={3} period={40} color={C_AID} />
				<SignalPulse a={plPt(PL.hcOk, 300, hcY, hk, HP.fibreA)} b={plPt(PL.hcOk, 300, hcY, hk, HP.fibreB)} at={K5.most + 10} every={18} dur={22} bow={0} color={GREEN} r={8} track={false} />
				<Sx x={130} y={560} text="enough hair cells:" size={34} color={INK} hand at={K5.most} />
				<Sx x={130} y={604} text="louder helps" size={34} color={GREEN} hand at={K5.most} />
				<Sx x={590} y={560} text="most gone:" size={34} color={INK} hand at={K5.most + 8} />
				<Sx x={590} y={604} text="nothing to stimulate" size={34} color={RED} hand at={K5.nothing} />
				<Sx x={130} y={710} text="louder isn't clearer" size={48} color={AMBER_INK} hand at={K5.nothing + 16} />
			</g> : null}
			<Strip s={{
				lit: LIT5,
				arcs: [ARC_AID(K5.normal, undefined, 'hearing aid: louder sound, normal path')],
				pulses: [{at: K5.normal + 14, until: K5.most, to: 5, arc: ARC_AID(K5.normal), every: 40, dur: 60, color: C_AID}],
				bad: [{i: 3, at: K5.nothing}],
			}} />
			{void BLUE}{void CARD}{void TEAL}{void INK_SOFT}{void PicH}{void Rings}{void RED}{void vis}{void DrawPath}{void lerp}
		</Svg>
	);
};
