// M7 P01 (Biology practical) scenes 9 to 11: indirect contact (the door handle as a fomite, a coded powder dab, the
// aligned UV handle crossfading in place under a violet beam, glowing specks on a desk edge, a pen and a second handle;
// vectors greyed on the route chips); the model's limits (the limits card's model and real rows, each acted out on the
// cups: a contact that doesn't transmit, a dilution strip, recovery and an immune ring, one cup meeting many; the
// valid and not-valid verdict lines); the risk assessment (Hazard, Harm and Control rows on cue; the footer lines).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER_INK, Bench, CARD, CTag, Cup, DrawPath, Dropper, EDGE, FEAT, GREEN, GREYT, GREY_INK, GTag, INK, PINK, PLATES, PlateB, PourArc, QUESTION, RZ, Rail, Sx, TEAL, TERRA, VIOLET,
	WText, clamp01, cupH, fitW, prog, ptOf, rng, smooth, vis, wrapT,
} from './parts';
import type {Pt} from './parts';

// ---------- 9. Indirect contact ----------
const K9 = cues(S('indirect-contact'), {model: 'model indirect contact', dab: 'Dab a little', fomite: 'or fomite', after: 'After a lesson', uv: 'ultraviolet torch', glowing: 'Glowing specks', other: 'other handles', desks: 'desks', pens: 'pens', vectors: 'Vectors are harder'});
const HD = {cx: 400, cy: 600, w: 440};
const Specks: React.FC<{x: number; y: number; w: number; h: number; n: number; o: number; seed: number}> = ({x, y, w, h, n, o, seed}) => {
	if (o <= 0.01) return null;
	const r = rng(seed);
	return <g opacity={o}>{Array.from({length: n}, (_, i) => <circle key={i} cx={x + r() * w} cy={y + r() * h} r={2.5 + r() * 2.5} fill="#e9fbff" stroke="#9ff0ff" strokeWidth={1.5} />)}</g>;
};
export const SceneIndirect: React.FC = () => {
	const f = useCurrentFrame();
	const uvP = prog(f, K9.uv + 6, 18);
	const [lx, ly] = ptOf(PLATES.handle, HD.cx, HD.cy, HD.w, FEAT.lever);
	const sweep = Math.sin(clamp01((f - K9.uv) / 70) * Math.PI) * 0.6;
	const objs = [{at: K9.other, label: 'second handle'}, {at: K9.desks, label: 'desk edge'}, {at: K9.pens, label: 'pen'}];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={-100} />
				<Bench />
				<rect x={70} y={252} width={1180} height={700} rx={26} fill="#2a2140" opacity={0.45 * uvP} />
				<PlateB p={PLATES.handle} cx={HD.cx} cy={HD.cy} w={HD.w} o={prog(f, 0, 14) * (1 - uvP * 0.999)} />
				{uvP > 0.001 ? <PlateB p={PLATES.handleUV} cx={HD.cx} cy={HD.cy} w={HD.w} o={uvP} /> : null}
				<ellipse cx={lx} cy={ly} rx={14} ry={8} fill="#fdfdf6" stroke="#cfcfc0" strokeWidth={1.5} opacity={prog(f, K9.dab + 10, 10) * (1 - uvP)} />
				<GTag x={110} y={880} text="fluorescent powder stands for the pathogen" at={K9.dab + 16} size={20} />
				{f >= K9.uv ? <path d={`M1180,280 L${lx - 140 + 260 * sweep},${ly - 160} L${lx + 60 + 260 * sweep},${ly + 160} Z`} fill="#8c6cf0" opacity={0.18 * (1 - prog(f, K9.glowing + 60, 20))} /> : null}
				<GTag x={110} y={290} text="UV torch: never shine it at eyes" at={K9.uv + 10} size={20} />
				{objs.map((o, i) => {
					const p = prog(f, o.at, 10);
					if (p <= 0.01) return null;
					const x = 800, y = 360 + i * 170;
					return (
						<g key={o.label} opacity={p}>
							{i === 0 ? <path d={`M${x},${y} l0,70 m0,-35 l180,0 l0,22`} fill="none" stroke="#cfc6e8" strokeWidth={8} strokeLinecap="round" /> : null}
							{i === 1 ? <rect x={x} y={y + 20} width={330} height={36} rx={6} fill="none" stroke="#cfc6e8" strokeWidth={5} /> : null}
							{i === 2 ? <rect x={x} y={y + 30} width={260} height={16} rx={8} fill="none" stroke="#cfc6e8" strokeWidth={5} transform={`rotate(-8 ${x} ${y})`} /> : null}
							<Specks x={x + 10} y={y + 14} w={i === 0 ? 170 : 300} h={i === 0 ? 50 : 40} n={10} o={prog(f, o.at + 6, 10)} seed={i + 4} />
							<Sx x={x} y={y + 112} text={o.label} size={22} color="#e8e2f8" weight={700} at={-100} />
						</g>
					);
				})}
				<CTag x={RZ.x} y={262} text="fomite: a contaminated object that carries a pathogen" at={K9.fomite} color={TEAL} size={28} maxW={560} dim={prog(f, K9.other, 10)} />
				<GTag x={RZ.x} y={380} text="b03" at={K9.fomite + 10} size={18} />
				<CTag x={RZ.x} y={440} text="indirect contact: through shared objects" at={K9.other + 20} color={VIOLET} size={30} maxW={560} />
				<GTag x={RZ.x} y={560} text="record: which objects glow, and how far from the handle" at={K9.pens + 16} size={15} />
				<g opacity={prog(f, K9.vectors, 12)}>
					{['direct', 'indirect', 'vector'].map((t, i) => (
						<g key={t}>
							<rect x={RZ.x + i * 180} y={640} width={160} height={46} rx={23} fill={i === 2 ? '#eceeef' : '#fffdf8'} stroke={i === 2 ? GREYT : i === 1 ? VIOLET : EDGE} strokeWidth={i === 1 ? 3 : 2} />
							<Sx x={RZ.x + i * 180 + 80} y={671} text={t} size={24} color={i === 2 ? GREY_INK : INK} weight={700} anchor="middle" at={-100} />
						</g>
					))}
				</g>
				<CTag x={RZ.x} y={720} text="vectors: use secondary data, for example mosquito surveys" at={K9.vectors + 10} color={AMBER_INK} size={28} maxW={560} />
				{void K9.model}{void K9.after}{void PINK}{void GREEN}{void TERRA}{void CARD}
			</Overlay>
		</>
	);
};

// ---------- 10. The model's limits ----------
const K10 = cues(S('model-limits'), {limits: 'Now the limits', every: 'every contact passes', dont: "don't always transmit", multiply: 'multiply inside a', dilute: 'more dilute with', miss: 'miss a case', delay: 'no delay before', recovery: 'no recovery', immunity: 'no immunity', exactly: 'exactly one person', valid: 'the model is valid'});
const LC = {x: 1090, w: 770, c1: 330};
const LROWS = [
	{m: 'every contact transmits', r: "many contacts don't"},
	{m: 'marker dilutes each pour', r: 'pathogens multiply in the host'},
	{m: 'infectious at once; never recovers; nobody immune', r: 'a delay before spreading; recovery; immunity'},
	{m: 'one equal contact per round', r: 'uneven mixing: some people meet many'},
];
const LS = 24, LL = 30;
const lrowH = (r: {m: string; r: string}) => Math.max(wrapT(r.m, LS, LC.c1 - 30, true).length, wrapT(r.r, LS, LC.w - LC.c1 - 30, true).length) * LL + 24;
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K10.every, K10.multiply, K10.delay, K10.exactly];
	const demo = (i: number) => vis(f, at[i], at[i + 1] ?? 1e9, 12);
	const top = (x: number, y: number, w: number): Pt => [x, y - cupH(w) * 0.3];
	let y = 300;
	const ys = LROWS.map(r => { const y0 = y; y += lrowH(r); return y0; });
	const yEnd = y;
	const strip = [1, 0.55, 0.25, 0.04];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={4} />
				<Bench w={1000} />
				<g opacity={demo(0)}>
					<Cup cx={300} cy={520} w={130} pink={1} />
					<Cup cx={600} cy={520} w={130} />
					<PourArc a={top(300, 520, 130)} b={top(600, 520, 130)} at={K10.dont - 10} dur={16} hold={20} />
					<CTag x={150} y={660} text="real: a contact may not transmit" at={K10.dont + 10} color={TERRA} size={30} />
				</g>
				<g opacity={demo(1)}>
					{strip.map((p, i) => <Cup key={i} cx={220 + i * 200} cy={520} w={120} pink={i === 0 ? 1 : p * prog(f, K10.dilute + 4 + i * 10, 12)} />)}
					{[0, 1, 2].map(i => <PourArc key={i} a={top(220 + i * 200, 520, 120)} b={top(420 + i * 200, 520, 120)} at={K10.dilute + 4 + i * 10} dur={10} hold={4} bow={-40} />)}
					<CTag x={150} y={660} text="too dilute: a false negative" at={K10.miss + 4} color={TERRA} size={30} />
				</g>
				<g opacity={demo(2)}>
					<Cup cx={300} cy={520} w={130} pink={1 - prog(f, K10.recovery + 6, 24)} />
					<Sx x={300} y={640} text="recovers" size={28} color={TERRA} hand weight={700} anchor="middle" at={K10.recovery + 20} />
					<Cup cx={720} cy={520} w={130} ring={prog(f, K10.immunity, 10)} />
					{f >= K10.immunity + 6 ? <DrawPath d="M520,380 Q600,360 640,420 Q660,470 600,500" at={K10.immunity + 6} dur={16} color={GREYT} width={4} dash="8 6" /> : null}
					<Sx x={720} y={640} text="immune" size={28} color={TERRA} hand weight={700} anchor="middle" at={K10.immunity + 14} />
				</g>
				<g opacity={demo(3)}>
					<Cup cx={250} cy={560} w={110} pink={1} />
					{[0, 1, 2].map(i => <g key={i}><Cup cx={560 + i * 160} cy={480 + (i % 2) * 120} w={100} /><PourArc a={top(250, 560, 110)} b={top(560 + i * 160, 480 + (i % 2) * 120, 100)} at={K10.exactly + 10 + i * 8} dur={12} hold={30} bow={-60} /></g>)}
					<CTag x={150} y={700} text="some people meet many" at={K10.exactly + 30} color={TERRA} size={30} />
				</g>
				<g opacity={prog(f, K10.every - 10, 12)}>
					<rect x={LC.x} y={250} width={LC.w} height={yEnd - 250 + 6} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<Sx x={LC.x + 18} y={285} text="model" size={26} color={INK} weight={800} at={-100} />
					<Sx x={LC.x + LC.c1 + 18} y={285} text="real disease" size={26} color={TERRA} weight={800} at={-100} />
					<line x1={LC.x + LC.c1} x2={LC.x + LC.c1} y1={258} y2={yEnd} stroke={EDGE} strokeWidth={2} />
				</g>
				{LROWS.map((r, i) => {
					const o = prog(f, at[i], 12);
					if (o <= 0.01) return null;
					const dm = i < 2 ? prog(f, K10.exactly, 12) : 0;
					return (
						<g key={i} opacity={o * (1 - 0.45 * dm)}>
							<line x1={LC.x + 10} x2={LC.x + LC.w - 10} y1={ys[i]} y2={ys[i]} stroke={EDGE} strokeWidth={2} />
							<WText x={LC.x + 18} y={ys[i] + 34} text={r.m} size={LS} maxW={LC.c1 - 30} color={dm > 0.5 ? GREY_INK : INK} hand weight={700} lh={LL} at={-100} />
							<WText x={LC.x + LC.c1 + 18} y={ys[i] + 34} text={r.r} size={LS} maxW={LC.w - LC.c1 - 30} color={dm > 0.5 ? GREY_INK : TERRA} hand weight={700} lh={LL} at={at[i] + 10} />
						</g>
					);
				})}
				<CTag x={LC.x} y={yEnd + 24} text="valid for: how contacts link cases, and how fast linked cases can multiply" at={K10.valid + 6} color={GREEN} size={28} maxW={LC.w - 40} />
				<CTag x={LC.x} y={yEnd + 140} text="not valid for: predicting a real disease's speed" at={K10.valid + 50} color={TERRA} size={28} maxW={LC.w - 40} />
				{void K10.limits}{void GREY_INK}{void smooth}{void fitW}{void Dropper}{void RZ}{void GTag}
			</Overlay>
		</>
	);
};

// ---------- 11. Risk assessment ----------
const K11 = cues(S('risk-assessment'), {risk: 'The risk assessment', eyes: 'irritate eyes', cancer: 'may cause cancer', glasses: 'wear safety glasses', taste: 'Never taste or', uv: 'ultraviolet torch', wipe: 'Wipe up spills', dispose: 'dispose of liquids'});
const RC = [{x: 100, w: 600}, {x: 710, w: 400}, {x: 1120, w: 740}];
const RS = 22, RL = 28;
type RRow = {cells: [string, string, string]; at: number; thumb?: boolean};
const rowH = (r: RRow) => Math.max(...r.cells.map((c, i) => wrapT(c, RS, RC[i].w - (i === 2 && r.thumb ? 110 : 36)).length)) * RL + 20;
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const rows: RRow[] = [
		{cells: ['dilute sodium carbonate solution (about 0.1 mol/L)', 'eye irritation', 'safety glasses; rinse eyes with water if splashed'], at: K11.eyes},
		{cells: ['phenolphthalein indicator (0.5% in ethanol): highly flammable; causes serious eye irritation; may cause cancer (H225, H319, H350)', 'fire; eye irritation; long-term health hazard', "teacher adds the drops; gloves; no flames nearby; small dropper bottle; check the bottle's SDS"], at: K11.cancer, thumb: true},
		{cells: ['all liquids', 'swallowing', "never taste; label cups 'not for drinking'; no food or drink in the lab"], at: K11.taste},
		{cells: ['UV torch', 'eye damage', "never point it at anyone's eyes"], at: K11.uv},
		{cells: ['fluorescent powder', 'eye irritation; breathing the dust', "small amount; avoid breathing the dust: don't shake or blow it; wash hands (or use a fluorescent gel)"], at: K11.wipe},
	];
	const Y0 = 260, HH = 46;
	let y = Y0 + HH;
	const ys = rows.map(r => { const y0 = y; y += rowH(r); return y0; });
	const yEnd = y;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={6} at={4} />
				<g opacity={prog(f, K11.risk, 12)}>
					<rect x={90} y={Y0} width={1770} height={yEnd - Y0 + 8} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={90} y={Y0} width={1770} height={HH} rx={18} fill="#efe6d4" />
					{['Hazard', 'Harm', 'Control'].map((t, i) => <Sx key={t} x={RC[i].x + 18} y={Y0 + 33} text={t} size={26} color={i === 0 ? TERRA : INK} weight={800} at={-100} />)}
					{[1, 2].map(i => <line key={i} x1={RC[i].x - 5} y1={Y0 + 8} x2={RC[i].x - 5} y2={yEnd} stroke={EDGE} strokeWidth={2} />)}
				</g>
				{rows.map((r, ri) => {
					const o = prog(f, r.at, 12);
					if (o <= 0.01) return null;
					const dm = prog(f, rows[ri + 1]?.at ?? 1e9, 12);
					return (
						<g key={ri} opacity={o * (1 - 0.35 * dm)}>
							<line x1={100} y1={ys[ri]} x2={1850} y2={ys[ri]} stroke={EDGE} strokeWidth={2} />
							{r.cells.map((c, ci) => wrapT(c, RS, RC[ci].w - (ci === 2 && r.thumb ? 110 : 36)).map((t, k) => <Sx key={ci + '-' + k} x={RC[ci].x + 18} y={ys[ri] + 30 + k * RL} text={t} size={RS} color={dm > 0.5 ? GREY_INK : ci === 0 ? TERRA : INK} weight={600} at={r.at + ci * 8} />))}
							{r.thumb ? <Dropper cx={1810} cy={ys[ri] + rowH(r) / 2} h={rowH(r) - 14} label={false} /> : null}
						</g>
					);
				})}
				<GTag x={100} y={yEnd + 30} text="small volumes of dilute solutions: to the sink with plenty of water, or the waste container, as your school's procedure says" at={K11.dispose} size={19} />
				<CTag x={100} y={yEnd + 96} text="follow your school's risk assessment and each safety data sheet" at={K11.dispose + 20} color={AMBER_INK} size={28} />
				{void K11.glasses}{void GREYT}{void TEAL}{void VIOLET}{void PINK}{void clamp01}
			</Overlay>
		</>
	);
};
