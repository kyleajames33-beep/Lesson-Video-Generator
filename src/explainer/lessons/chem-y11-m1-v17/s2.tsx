// Y11 Chem M1 V17 scenes 7 to 12: the penetration diagram driven by three chance-engine runs (alpha stops in the paper,
// beta in the aluminium, gamma mostly in the lead with some getting through) with live readouts and ionisation trails;
// the natural board (uranium ore, gum tree, potassium-40 card); the human-made board (smoke alarm, cobalt-60 source pot
// with the neutron inset, technetium-99m vial); the two columns matched by radiation type with the answer; the
// made-to-order board (the vial and its detector, the alarm and its chamber); the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {ALARM, HUMAN, ISO, MODEL_PEN, NATURAL, ORE, POT, RAD, SRC_ISO, TREE, VIAL, pw, sc} from './common';
import type {Iso, PDef, RKey} from './common';
import {
	Absorbers, AlphaClu, BetaDot, Bracket, Chamber, Chip, Detector, E_BLUE, Fade, Framed, HUM_T, Heading, INK, IonMark, K40Card, Lane, NAT_T, Nuc, Nucleus, PAPER, PenArrow,
	PenRing, PenRun, Photon, Plate, Rich, RUNS, StrikeLine, Sx, TickMark, Trail, VIOLET, VIOLET_T, Write, chipW, clamp01, flyPt, landed, lerp, prog, rFor, richW, smooth,
} from './parts';
import type {Pace, PenG} from './parts';

const RED = '#c4362f';
const GREEN = '#2f8a5b';
const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number; at?: number; o?: number}> = ({p, cx, bottom, h, at = -1000, o = 1}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} at={at} o={o} />;

// ---------- 7. penetration and ionisation ----------
const K7 = cues(sc('penetration'), {gamma: 'Gamma travels', alpha: 'Alpha is stopped', sheet: 'a sheet of paper', beta: 'Beta gets through', al: 'few millimetres of aluminium', passes: 'Gamma passes', lead: 'several centimetres of lead', cut: 'cut it down', why: 'Why?', big: 'Alpha is big', collides: 'collides', loses: 'loses its energy', nocharge: 'Gamma has no charge', rarely: 'rarely hits', more: 'The more it ionises', stops: ['stops.', 1]});
export const G7: PenG = {x0: 96, srcW: 190, ax: [520, 760, 1000], aw: [16, 34, 110], top: 470, bot: 800, lanes: {alpha: 540, beta: 640, gamma: 740}, end: 1250, thumb: 170};
export const PACE7: Record<RKey, Pace> = {alpha: {at: K7.alpha, every: 4}, beta: {at: K7.beta, every: 4}, gamma: {at: K7.passes, every: 3}};
const TX = 1300, TCOL = [1640, 1722, 1800];
const TROWS: {label: string; v: (c: number[], sent: number) => number}[] = [
	{label: 'sent', v: (_, s) => s},
	{label: 'stopped by paper', v: c => c[0]},
	{label: 'stopped by aluminium', v: c => c[1]},
	{label: 'stopped by lead', v: c => c[2]},
	{label: 'through the lead', v: c => c[3]},
];
/** The live readout table: one column per run, read from the stored runs. */
export const PenTable: React.FC<{y: number; pace: Record<RKey, Pace>; o?: number}> = ({y, pace, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const ks: RKey[] = ['alpha', 'beta', 'gamma'];
	return (
		<g opacity={o}>
			<rect x={TX - 20} y={y - 70} width={1824 - TX + 20} height={70 + TROWS.length * 66 + 20} rx={18} fill={PAPER} stroke={INK} strokeWidth={4} />
			{ks.map((k, i) => <Sx key={k} x={TCOL[i]} y={y - 18} text={RAD[k].sym} size={44} color={RAD[k].ink} anchor="middle" weight={800} at={-1000} />)}
			{TROWS.map((r, j) => (
				<g key={j}>
					<Sx x={TX} y={y + 48 + j * 66} text={r.label} size={30} color={INK} weight={800} at={-1000} />
					{ks.map((k, i) => {
						const L = landed(k, pace[k], f);
						const started = f >= pace[k].at;
						return <Sx key={k} x={TCOL[i]} y={y + 50 + j * 66} text={started ? `${r.v(L.c, L.sent)}` : '–'} size={44} color={started ? RAD[k].ink : INK} anchor="middle" weight={800} at={-1000} />;
					})}
				</g>
			))}
		</g>
	);
};
export const ScenePenetration: React.FC = () => {
	const f = useCurrentFrame();
	const g = G7;
	const ab = [g.ax[0] + g.aw[0], g.ax[1] + g.aw[1], g.ax[2] + g.aw[2]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="How far does each one get?" at={0} />
			<Framed x={1060} y={262} segs={[{t: 'gamma', c: GREEN}, {t: ' gets furthest'}]} at={K7.gamma} size={52} stroke={GREEN} />
			<Plate p={POT} x={g.x0 + g.srcW / 2 - pw(POT, 150) / 2} y={g.top - 26 - 150} h={150} />
			<Absorbers g={g} />
			{(['alpha', 'beta', 'gamma'] as RKey[]).map(k => <Lane key={k} g={g} k={k} at={PACE7[k].at} />)}
			{(['alpha', 'beta', 'gamma'] as RKey[]).map(k => <PenRun key={k} g={g} k={k} p={PACE7[k]} />)}
			<PenTable y={420} pace={PACE7} />
			<Sx x={1824} y={940} text={MODEL_PEN} size={28} color={INK} anchor="end" weight={700} at={-1000} />
			{/* where each stops */}
			<Write x={ab[0] + 16} y={g.lanes.alpha + 14} text="stops here" at={K7.sheet} size={42} color={RAD.alpha.ink} />
			<Write x={ab[1] + 16} y={g.lanes.beta + 14} text="stops here" at={K7.al} size={42} color={RAD.beta.ink} />
			<Write x={ab[2] + 12} y={g.lanes.gamma - 44} text="reduced," at={K7.cut} size={42} color={VIOLET_T} />
			<Write x={ab[2] + 12} y={g.lanes.gamma + 56} text="not zero" at={K7.cut + 8} size={42} color={VIOLET_T} />
			{/* ionisation trails */}
			{(['alpha', 'beta', 'gamma'] as RKey[]).map((k, i) => <Trail key={k} g={g} k={k} at={K7.collides + i * 10} />)}
			<Bracket a={[ab[0] - 22, g.lanes.alpha - 50]} b={[g.x0 + g.srcW + 6, g.lanes.alpha - 50]} at={K7.loses} color={RAD.alpha.fill} depth={14} />
			<Write x={g.x0 + g.srcW + 10} y={g.lanes.alpha - 82} text="most ionising" at={K7.loses + 6} size={38} color={RAD.alpha.ink} />
			<Write x={g.x0 + g.srcW + 340} y={g.lanes.gamma + 56} text="few ions" at={K7.rarely} size={42} color={VIOLET_T} />
			<Chip x={960} y={872} segs={[{t: 'more ionising → less penetrating'}]} at={K7.stops} size={44} color={INK} anchor="middle" />
			{void K7.why}{void K7.big}{void K7.nocharge}{void K7.more}{void K7.lead}{void RUNS}
		</svg>
	);
};

// ---------- 8 and 9: the natural and human-made boards ----------
const COLS = [330, 960, 1590];
const BOT = 600;
/** Radiation line for an isotope: "alpha (α)" or "beta, then gamma" in their colours. */
const radSegs = (iso: Iso, joiner = ', and some ') => iso.rads.flatMap((k, i) => [...(i ? [{t: joiner}] : []), {t: `${RAD[k].name} (${RAD[k].sym})`, c: RAD[k].ink}]);
const Caption: React.FC<{iso: Iso; cx: number; nameAt: number; radAt: number; joiner?: string; size?: number}> = ({iso, cx, nameAt, radAt, joiner, size = 34}) => (
	<g>
		<Sx x={cx} y={BOT + 50} text={iso.name} size={40} color={INK} anchor="middle" weight={800} at={nameAt} />
		{iso.where.map((t, i) => <Sx key={i} x={cx} y={BOT + 92 + i * 38} text={t} size={size} color={INK} anchor="middle" weight={700} at={nameAt + 6} />)}
		<Rich x={cx} y={BOT + 100 + iso.where.length * 38} segs={radSegs(iso, joiner)} size={size} anchor="middle" weight={800} at={radAt} />
	</g>
);
const Tag: React.FC<{x: number; y: number; k: RKey; at: number; size?: number}> = ({x, y, k, at, size = 64}) => <Write x={x} y={y} text={RAD[k].sym} at={at} size={size} color={RAD[k].ink} anchor="middle" />;

const K8 = cues(sc('natural'), {sort: "let's sort", natural: 'Natural ones', uranium: 'Uranium-two-thirty-eight', alpha: 'alpha particles', carbon: 'Carbon-fourteen', upper: 'upper atmosphere', beta: 'beta particles', potassium: 'potassium-forty', body: 'your body', gamma: 'some gamma'});
export const SceneNatural: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Sorting real radioisotopes" at={0} />
		<Chip x={1824} y={104} segs={[{t: 'natural'}]} at={-1000} size={44} color={NAT_T} anchor="end" />
		<PB p={ORE} cx={COLS[0]} bottom={BOT} h={320} />
		<PB p={TREE} cx={COLS[1]} bottom={BOT} h={370} />
		<K40Card x={COLS[2] - 180} y={BOT - 330} w={360} h={330} />
		<Caption iso={ISO.U238} cx={COLS[0]} nameAt={K8.uranium} radAt={K8.alpha} />
		<Caption iso={ISO.C14} cx={COLS[1]} nameAt={K8.carbon} radAt={K8.beta} />
		<Caption iso={ISO.K40} cx={COLS[2]} nameAt={K8.potassium} radAt={K8.gamma} />
		<Tag x={COLS[0] + 150} y={BOT - 250} k="alpha" at={K8.alpha} />
		<Tag x={COLS[1] + 160} y={BOT - 250} k="beta" at={K8.beta} />
		<Write x={COLS[2] - 190} y={BOT - 346} text="in you, too" at={K8.body} size={42} color={INK} />
		<Tag x={COLS[2] + 210} y={BOT - 190} k="beta" at={K8.gamma - 8} />
		<Tag x={COLS[2] + 210} y={BOT - 90} k="gamma" at={K8.gamma + 4} />
		<Bracket a={[1760, BOT + 200]} b={[160, BOT + 200]} at={K8.gamma + 10} color={NAT_T} depth={-18} />
		<Write x={960} y={BOT + 280} text="α, β and γ: all here" at={K8.gamma + 20} size={46} color={NAT_T} anchor="middle" />
		{void K8.sort}{void K8.natural}{void K8.upper}{void NATURAL}
	</svg>
);

const K9 = cues(sc('human-made'), {americium: 'Americium-two-forty-one', alpha: 'alpha particles', cobalt: 'Cobalt-sixty', adding: 'adding a neutron', beta: 'beta particles', then: 'then gamma', equipment: 'medical equipment', technetium: 'technetium-ninety-nine', gamma: ['gives out gamma rays', 1], m: 'The M means', energy: 'extra energy', australia: 'In Australia', lucas: 'Lucas Heights', sydney: 'Sydney'});
export const SceneHuman: React.FC = () => {
	const f = useCurrentFrame();
	// the neutron inset under the pot: a neutron joins a cobalt-59 nucleus (model)
	const IN = {x: 630, y: 802, w: 760, h: 140};
	const nuc: [number, number] = [IN.x + 170, IN.y + 72];
	const r = 9;
	const nb = flyPt(f, [IN.x + 30, IN.y + 72], [nuc[0] - 50, nuc[1]], K9.adding + 6, 22);
	const joined = f >= K9.adding + 28;
	const insetO = prog(f, K9.adding - 4, 10) * (1 - prog(f, K9.equipment + 30, 14));
	const capY = BOT + 100 + ISO.Tc99m.where.length * 38;
	const mX = COLS[2] + richW([{t: ISO.Tc99m.name}], 40) / 2 - 12;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Sorting real radioisotopes" at={-1000} />
			<Chip x={1824} y={104} segs={[{t: 'human-made'}]} at={-1000} size={44} color={HUM_T} anchor="end" />
			<PB p={ALARM} cx={COLS[0]} bottom={BOT} h={310} />
			<PB p={POT} cx={COLS[1]} bottom={BOT} h={320} />
			<PB p={VIAL} cx={COLS[2]} bottom={BOT} h={330} />
			<Caption iso={ISO.Am241} cx={COLS[0]} nameAt={-1000} radAt={K9.alpha} />
			<Caption iso={ISO.Co60} cx={COLS[1]} nameAt={K9.cobalt} radAt={K9.then} joiner=", then " />
			<Caption iso={ISO.Tc99m} cx={COLS[2]} nameAt={K9.technetium} radAt={K9.gamma} />
			<Tag x={COLS[0] + 200} y={BOT - 230} k="alpha" at={K9.alpha} />
			<Tag x={COLS[1] + 210} y={BOT - 230} k="beta" at={K9.beta} />
			<Tag x={COLS[1] + 210} y={BOT - 130} k="gamma" at={K9.then + 4} />
			<Tag x={COLS[2] + 210} y={BOT - 200} k="gamma" at={K9.gamma} />
			{/* the neutron inset (made in a reactor) */}
			{insetO > 0.005 ? (
				<g opacity={insetO}>
					<rect x={IN.x} y={IN.y} width={IN.w} height={IN.h} rx={16} fill={PAPER} stroke={HUM_T} strokeWidth={4} />
					<Nucleus cx={nuc[0]} cy={nuc[1]} p={6} n={7} r={r * 1.6} />
					{joined ? null : <circle cx={nb[0]} cy={nb[1]} r={r * 1.6} fill="#9aa3ad" stroke="#4f5862" strokeWidth={2} />}
					{joined ? <circle cx={nuc[0] + 34} cy={nuc[1] - 16} r={r * 1.6} fill="#9aa3ad" stroke="#4f5862" strokeWidth={2} /> : null}
					<Sx x={IN.x + 270} y={IN.y + 50} text="made in a reactor: neutron added" size={30} color={HUM_T} weight={800} at={-1000} />
				</g>
			) : null}
			<Rich x={IN.x + 270} y={IN.y + 108} segs={[{t: '^{59}Co + neutron → ^{60}Co'}]} size={34} anchor="start" weight={800} at={K9.adding + 30} />
			{/* the m gloss */}
			<PenArrow a={[COLS[2] - 40, 800]} b={[mX, BOT + 62]} at={K9.m} color={INK} bend={0.25} />
			<Sx x={COLS[2] - 230} y={836} text="m: the nucleus holds extra" size={34} color={INK} weight={800} at={K9.m + 6} />
			<Sx x={COLS[2] - 230} y={874} text="energy, given out as gamma" size={34} color={INK} weight={800} at={K9.energy} />
			<Sx x={COLS[2] - 230} y={916} text="from molybdenum-99, made at Lucas Heights, Sydney" size={30} color={INK} weight={700} at={K9.lucas} />
			<Bracket a={[1100, BOT + 200]} b={[160, BOT + 200]} at={K9.australia} color={HUM_T} depth={-18} />
			<Write x={360} y={BOT + 262} text="α, β and γ: all here" at={K9.australia + 10} size={46} color={HUM_T} anchor="middle" />
			{void K9.americium}{void K9.equipment}{void K9.sydney}{void HUMAN}{void capY}
		</svg>
	);
};

// ---------- 10. so does it matter? ----------
const K10 = cues(sc('does-it-matter'), {look: 'Look at the two', both: 'Both have', dont: "don't give out", type: 'The type of radiation', decided: 'decided by the nucleus', fact: 'In fact', reactor: 'made in a reactor', cosmic: 'made by cosmic rays', exactly: 'exactly the same beta', particles: 'beta particles'});
const ROW10 = [310, 545, 780];
const NX = 150, HX = 640;
const Thumb: React.FC<{iso: Iso; x: number; y: number; h: number}> = ({iso, x, y, h}) => iso.plate ? <PB p={iso.plate} cx={x} bottom={y + h / 2} h={h} /> : (
	<g>
		<rect x={x - h * 0.55} y={y - h / 2} width={h * 1.1} height={h} rx={16} fill={PAPER} stroke={NAT_T} strokeWidth={4} />
		<Sx x={x} y={y + 20} text="K-40" size={52} color={NAT_T} anchor="middle" weight={800} at={-1000} />
	</g>
);
export const SceneMatter: React.FC = () => {
	const f = useCurrentFrame();
	const ks: RKey[] = ['alpha', 'beta', 'gamma'];
	const pairs = [[ISO.U238, ISO.Am241], [ISO.C14, ISO.Co60], [ISO.K40, ISO.Tc99m]];
	const cw = chipW([{t: 'human-made = stronger radiation?'}], 40, false);
	const rC = rFor(14, 105);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="So does it matter?" at={0} />
			<Sx x={NX} y={210} text="natural" size={44} color={NAT_T} anchor="middle" weight={800} at={-1000} />
			<Sx x={HX + 100} y={210} text="human-made" size={44} color={HUM_T} anchor="middle" weight={800} at={-1000} />
			{pairs.map(([a, b], i) => (
				<g key={i}>
					<Thumb iso={a} x={NX} y={ROW10[i]} h={190} />
					<Sx x={NX + 110} y={ROW10[i] + 12} text={a.short} size={38} color={INK} weight={800} at={-1000} />
					<Thumb iso={b} x={HX + 100} y={ROW10[i]} h={190} />
					<Sx x={HX + 210} y={ROW10[i] + 12} text={b.short} size={38} color={INK} weight={800} at={-1000} />
					<PenArrow a={[NX + 250, ROW10[i] + 40]} b={[HX - 12, ROW10[i] + 40]} at={K10.both + i * 14} color={RAD[ks[i]].ink} bend={0} width={5} />
					<Write x={(NX + 250 + HX) / 2} y={ROW10[i] + 10} text={RAD[ks[i]].sym} at={K10.both + i * 14 + 4} size={56} color={RAD[ks[i]].ink} anchor="middle" />
				</g>
			))}
			{/* the hook's question, struck */}
			<Chip x={1110} y={196} segs={[{t: 'human-made = stronger radiation?'}]} at={-1000} size={40} color={INK} strike={K10.dont} />
			<Write x={1110 + cw / 2} y={330} text="same three types" at={K10.dont + 10} size={44} color={RED} anchor="middle" />
			{/* the answer */}
			<Fade at={K10.decided}>
				<rect x={1110} y={370} width={714} height={196} rx={16} fill={PAPER} stroke={GREEN} strokeWidth={5} />
				<Sx x={1140} y={434} text="the nucleus decides" size={44} color={GREEN} weight={800} at={-1000} />
				<Sx x={1140} y={490} text="the radiation," size={44} color={GREEN} weight={800} at={-1000} />
				<Sx x={1140} y={546} text="not its origin" size={44} color={GREEN} weight={800} at={-1000} />
			</Fade>
			<TickMark x={1780} y={410} at={K10.decided + 10} s={1.2} color={GREEN} />
			{/* two carbon-14 nuclei */}
			<Fade at={K10.type}>
				<Nucleus cx={1290} cy={720} p={6} n={8} r={rC} />
				<Nucleus cx={1650} cy={720} p={6} n={8} r={rC} />
				<Sx x={1290} y={860} text="carbon-14" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1650} y={860} text="carbon-14" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Write x={1650} y={612} text="reactor" at={K10.reactor} size={42} color={HUM_T} anchor="middle" />
			<Write x={1290} y={612} text="cosmic rays" at={K10.cosmic} size={42} color={NAT_T} anchor="middle" />
			{f >= K10.particles - 6 ? [1290, 1650].map((x, i) => { const p = flyPt(f, [x + 100, 720], [x + 165, 660], K10.particles - 6, 14); return <BetaDot key={i} x={p[0]} y={p[1]} r={12} />; }) : null}
			<Bracket a={[1200, 884]} b={[1740, 884]} at={K10.exactly} color={INK} />
			<Write x={1470} y={938} text="identical" at={K10.exactly + 8} size={44} color={INK} anchor="middle" />
			{void K10.look}{void K10.fact}{void StrikeLine}{void E_BLUE}{void clamp01}
		</svg>
	);
};

// ---------- 11. what origin does change ----------
const K11 = cues(sc('origin-changes'), {differ: 'What does differ', natural: 'Natural radioisotopes', left: 'left over', constantly: 'constantly made', human: 'Human-made ones', order: 'made to order', choose: 'choose the radiation', half: 'Half-life is', time: 'the time it takes', tech: "Technetium-ninety-nine M's", pass: 'pass out', six: 'about six hours', falls: 'falls quickly', am: "Americium's", ionise: 'ionise the air', few: 'only a few'});
const VG = {cx: 290, bottom: 860, h: 330};
const AG = {cx: 1110, bottom: 820, h: 270};
const CH = {x: 1330, y: 560, w: 470, h: 300};
/** Half-life model: 16 nuclei, eight of which decay (model count). */
const HL = Array.from({length: 16}, (_, i) => ({x: 1196 + (i % 8) * 40, y: 344 + Math.floor(i / 8) * 40, d: [1, 4, 6, 7, 9, 10, 13, 15].includes(i)}));
export const SceneOrigin: React.FC = () => {
	const f = useCurrentFrame();
	const vx = VG.cx + pw(VIAL, VG.h) / 2;
	const decayed = HL.filter((q, i) => q.d && f >= K11.time + 10 + HL.filter(z => z.d).indexOf(q) * 4).length;
	void decayed;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="What origin does change" at={0} />
			<Chip x={96} y={196} segs={[{t: 'origin changes: supply and choice'}]} at={-1000} size={38} color={INK} />
			{/* natural supply */}
			<PB p={ORE} cx={170} bottom={420} h={110} at={K11.left - 6} />
			<Write x={250} y={392} text="left over since Earth formed" at={K11.left} size={40} color={NAT_T} />
			<PB p={TREE} cx={170} bottom={548} h={118} at={K11.constantly - 6} />
			<Write x={250} y={516} text="made constantly in nature" at={K11.constantly} size={40} color={NAT_T} />
			{/* half-life model */}
			<Fade at={K11.half - 4}>
				<Sx x={1170} y={260} text="half-life: time for half of the" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={1170} y={298} text="unstable nuclei to decay" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			{HL.map((q, i) => {
				const k = HL.filter(z => z.d).indexOf(q);
				const gone = q.d ? prog(f, K11.time + 10 + k * 4, 6) : 0;
				const o = prog(f, K11.half, 10);
				return o > 0.005 ? <circle key={i} cx={q.x} cy={q.y} r={14} fill={gone > 0.5 ? PAPER : '#d24a3c'} stroke={gone > 0.5 ? '#8a929c' : '#a8322a'} strokeWidth={3} opacity={o} /> : null;
			})}
			{(() => {
				const n = 16 - HL.filter(q => q.d && f >= K11.time + 10 + HL.filter(z => z.d).indexOf(q) * 4 + 3).length;
				return prog(f, K11.half, 10) > 0.005 ? <Rich x={1530} y={378} segs={[{t: 'unstable nuclei: '}, {t: `${n}`, c: '#a8322a'}]} size={34} weight={800} at={K11.half} /> : null;
			})()}
			<Sx x={1530} y={414} text="(model)" size={30} color={INK} weight={700} at={K11.half} />
			{/* technetium: gamma gets out to a camera */}
			<PB p={VIAL} cx={VG.cx} bottom={VG.bottom} h={VG.h} />
			<Sx x={VG.cx} y={VG.bottom + 50} text="technetium-99m" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Detector x={720} y={600} w={70} h={260} hit={prog(f, K11.pass + 16, 10) * (0.6 + 0.4 * Math.sin(f * 0.4))} />
			<Sx x={755} y={900} text="camera" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{[0, 1, 2].map(i => <Photon key={i} a={[vx - 30, 680 + i * 50]} b={[710, 660 + i * 70]} at={K11.pass + i * 6} dur={16} color={VIOLET} stay width={6} />)}
			<Write x={500} y={560} text="gamma gets out;" at={K11.six} size={40} color={VIOLET_T} />
			<Write x={500} y={604} text="gone in hours" at={K11.six + 14} size={40} color={VIOLET_T} />
			{/* americium: alpha stays inside the chamber */}
			<PB p={ALARM} cx={AG.cx} bottom={AG.bottom} h={AG.h} />
			<Sx x={AG.cx} y={AG.bottom + 50} text="smoke alarm" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<line x1={AG.cx + 120} y1={AG.bottom - AG.h + 40} x2={CH.x} y2={CH.y} stroke={INK} strokeWidth={2.5} strokeDasharray="8 8" />
			<line x1={AG.cx + 120} y1={AG.bottom - 40} x2={CH.x} y2={CH.y + CH.h} stroke={INK} strokeWidth={2.5} strokeDasharray="8 8" />
			<Chamber x={CH.x} y={CH.y} w={CH.w} h={CH.h} tracksAt={K11.am} ionAt={K11.ionise} />
			<Sx x={CH.x + CH.w / 2} y={CH.y + CH.h + 44} text="inside the chamber" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={CH.x + CH.w - 10} y={CH.y - 20} text="alpha: stays inside" at={K11.few} size={42} color={RAD.alpha.ink} anchor="end" />
			<Write x={960} y={480} text="chosen for the job" at={K11.order} size={46} color={HUM_T} anchor="middle" />
			{void K11.differ}{void K11.natural}{void K11.human}{void K11.choose}{void K11.tech}{void K11.falls}{void smooth}{void lerp}{void IonMark}{void AlphaClu}{void Nuc}
		</svg>
	);
};

// ---------- 12. one line to remember ----------
const K12 = cues(sc('memory-line'), {so: "So here's", paper: 'Paper stops', al: 'aluminium stops', lead: 'lead cuts', more: 'The more it ionises'});
export const G12: PenG = {x0: 200, srcW: 180, ax: [720, 1060, 1400], aw: [18, 40, 130], top: 560, bot: 860, lanes: {alpha: 620, beta: 710, gamma: 800}, end: 1760, thumb: 0};
/** Compact diagram with its three finished tracks (no run). */
export const Compact: React.FC<{g: PenG; o?: number; labelSize?: number}> = ({g, o = 1, labelSize = 34}) => {
	if (o <= 0.005) return null;
	const sx = g.x0 + g.srcW;
	const ends: Record<RKey, number> = {alpha: g.ax[0] + 6, beta: g.ax[1] + 12, gamma: g.end};
	return (
		<g opacity={o}>
			<Absorbers g={g} thumbs={false} labelSize={labelSize} />
			{(['alpha', 'beta', 'gamma'] as RKey[]).map(k => (
				<g key={k}>
					<line x1={sx} y1={g.lanes[k]} x2={k === 'gamma' ? g.ax[2] + g.aw[2] : ends[k]} y2={g.lanes[k]} stroke={RAD[k].fill} strokeWidth={9} strokeLinecap="round" />
					{k === 'gamma' ? <line x1={g.ax[2] + g.aw[2]} y1={g.lanes[k]} x2={g.end} y2={g.lanes[k]} stroke={RAD[k].fill} strokeWidth={3} strokeLinecap="round" /> : null}
					<Sx x={sx + 20} y={g.lanes[k] - 14} text={RAD[k].sym} size={38} color={RAD[k].ink} weight={800} at={-1000} />
				</g>
			))}
		</g>
	);
};
export const SceneMemoryLine: React.FC = () => {
	const ord: [string, RKey, number][] = [['paper', 'alpha', K12.paper], ['aluminium', 'beta', K12.al], ['lead', 'gamma', K12.lead]];
	let x = 300;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="One line to remember" at={0} />
			<rect x={250} y={196} width={1420} height={300} rx={24} fill={PAPER} stroke={INK} strokeWidth={5} />
			<Sx x={290} y={244} text="memory aid" size={30} color={INK} hand at={-1000} />
			{ord.map(([t, k, at], i) => {
				const x0 = x;
				x += richW([{t}], 38) + (i < 2 ? 140 : 0);
				return (
					<g key={t}>
						<Sx x={x0} y={316} text={t} size={38} color={INK} weight={800} at={-1000} />
						<TickMark x={x0 + richW([{t}], 38) / 2} y={270} at={at} color={RAD[k].fill} />
						{i < 2 ? <Sx x={x0 + richW([{t}], 38) + 70} y={316} text="→" size={38} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
					</g>
				);
			})}
			<Write x={960} y={430} text="The more it ionises, the sooner it stops." at={K12.more} size={64} color={RED} anchor="middle" />
			<Compact g={G12} />
			{void K12.so}{void Lane}{void Trail}{void PenRing}{void E_BLUE}
		</svg>
	);
};
