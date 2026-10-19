// M6 B04 scenes 1 to 3: the 1959 count (microscope, the painted spread, the coded karyotype counting to 46 then 47,
// three identical chromosome 21 bars), what a chromosomal mutation is (painted chromosome to coded bar; a point
// mutation inside one band against many genes at once), and how a chromosome breaks or crosses over out of step.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, PlateB, Sx, Ticker, prog} from '../bio-m5-b13/shared';
import {kf} from '../chem-m5-c03/common';
import {GTag, Lbl, SlimStrand, wForH} from '../bio-m6-b01/parts';
import {Term} from '../bio-m6-b03/parts';
import {S} from './common';
import {PLATES} from './assets';
import {AMBER, AMBER_INK, BIO_INK, BH, Bar, BreakMark, CW, GW, INK_SOFT, Karyo, TEALC, PLUMC, karyoX, lay, lerp, vis} from './parts';
import type {Seg} from './parts';

export const CHR1 = ['A', 'B', '●', 'C', 'D', 'E', 'F', 'G', 'H'];
export const CHR2 = ['M', 'N', '●', 'O', 'P', 'Q'];

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {dividing: 'dividing cells', counted: 'counted their chromosomes', f47: 'forty-seven', named: 'later named chromosome twenty-one', faulty: "Its genes weren't faulty", so: 'So how can', missing: 'missing', rear: 'rearranged'});
const KX0 = 470, KY = 770;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const spreadS = prog(f, K1.dividing, 22);
	const spreadO = spreadS * (1 - prog(f, K1.counted + 10, 16));
	const kO = vis(f, K1.counted + 4, K1.faulty, 16);
	const x21 = karyoX(KX0, 20);
	const three = prog(f, K1.faulty + 6, 20);
	const L3 = lay(CHR1, 420, 56, CW);
	const g = (labels: string[], x0: number, mod: (s: Seg) => Seg = s => s) => { const L = lay(labels, x0, 46, 24); return {segs: L.segs.map(mod), cen: L.cen}; };
	const gMiss = g(CHR1, 1010, s => (s.l === 'E' || s.l === 'F' ? {...s, dashed: true} : s));
	const gDup = g(['A', 'B', '●', 'C', 'D', 'E', 'F', 'E', 'F', 'G', 'H'], 1010);
	gDup.segs[6].tone = 'amber'; gDup.segs[7].tone = 'amber';
	const gFlip = g(['A', 'B', '●', 'C', 'D', 'G', 'F', 'E', 'H'], 1010, s => ('GFE'.includes(s.l) ? {...s, tone: 'amber'} : s));
	const ghosts = [{G: gMiss, at: K1.missing - 30}, {G: gDup, at: K1.missing}, {G: gFlip, at: K1.rear}];
	return (
		<>
			<Heading text="When chromosomes change" at={K1.so + 50} size={60} />
			<Overlay>
				<g opacity={1 - prog(f, K1.faulty, 14)}>
					<PlateB p={PLATES.micro} cx={230} cy={560} w={wForH(PLATES.micro, 500)} o={prog(f, 0, 14)} />
					<GTag x={230} y={830} text="1959, Paris" at={8} size={28} anchor="middle" />
				</g>
				{spreadO > 0.01 ? <g opacity={spreadO}><PlateB p={PLATES.spread} cx={820} cy={540} w={560 * (0.25 + 0.75 * spreadS)} /></g> : null}
				<Karyo x0={KX0} y={KY} sc={0.9} o={kO} lit={i => prog(f, K1.counted + 10 + i * 2.2, 6)} third21={prog(f, K1.f47, 14)} hot21={prog(f, K1.named, 10)} />
				<g opacity={kO}>
					{f < K1.f47 + 6 ? <Ticker x={1760} y={300} from={0} to={46} a={K1.counted + 10} b={K1.counted + 60} size={96} anchor="end" color={BIO_INK} /> : <Sx x={1760} y={300} text="47" size={96} color={AMBER_INK} weight={800} anchor="end" />}
					{f >= K1.named ? <rect x={x21 - 26} y={KY - 70} width={78} height={112} rx={14} fill="none" stroke={AMBER} strokeWidth={5} opacity={prog(f, K1.named, 10)} /> : null}
				</g>
				<Lbl x={x21 + 9} y={KY - 180} text="one extra" size={40} color={AMBER_INK} anchor="middle" at={K1.f47 + 10} out={K1.faulty} />
				{/* the three 21s, enlarged: the same genes three times */}
				{[0, 1, 2].map(k => (
					<g key={k} opacity={three} transform={`translate(${(1 - three) * (x21 - 900)},${(1 - three) * 200})`}>
						<Bar segs={L3.segs} cen={L3.cen} y={430 + k * 110} gw={56} h={46} />
					</g>
				))}
				<Lbl x={960} y={790} text="same genes, three copies" size={44} color={AMBER_INK} anchor="middle" at={K1.faulty + 24} out={K1.so} />
				{ghosts.map((q, k) => <g key={k} opacity={0.85 * prog(f, q.at, 10)}><Bar segs={q.G.segs} cen={q.G.cen} y={430 + k * 110} gw={46} h={40} /></g>)}
				{void GW}{void BH}{void TEALC}{void PLUMC}{void INK_SOFT}{void lerp}
			</Overlay>
		</>
	);
};

// ---------- 2. What a chromosomal mutation is ----------
const K2 = cues(S('chromosomal-mutation'), {structure: 'the structure of a chromosome', number: 'the number of chromosomes', point: 'A point mutation', bases: 'one or a few bases in one gene', hundreds: 'carries hundreds of genes', many: 'change many genes at once', seen: 'seen down a microscope', cant: "can't"});
export const SceneChromosomal: React.FC = () => {
	const f = useCurrentFrame();
	const L = lay(CHR1, 622, 80, CW);
	const dX = L.segs[3].x + 40 + 80; // gene D centre
	const zin = prog(f, K2.point + 4, 22), zout = prog(f, K2.hundreds - 14, 20);
	const z = zin * (1 - zout);
	const s = lerp(1, 7, z);
	const barO = 1 - prog(f, K2.point + 14, 10) * (1 - prog(f, K2.hundreds - 4, 10));
	const strandO = vis(f, K2.point + 16, K2.hundreds - 10, 10);
	const plate = 1 - prog(f, 28, 18);
	const lit = (i: number) => prog(f, K2.hundreds + 16 + i * 6, 6) * (1 - prog(f, K2.seen, 12));
	return (
		<>
			<Overlay>
				{plate > 0.01 ? <g opacity={plate}><PlateB p={PLATES.chrom} cx={960} cy={500} w={wForH(PLATES.chrom, 520)} /></g> : null}
				<g opacity={prog(f, 24, 18) * barO} transform={`translate(${dX},500) scale(${s}) translate(${-dX},-500)`}>
					<Bar segs={L.segs.map((q, i) => ({...q, tone: lit(i) > 0.5 ? 'amber' : 'n'}))} cen={L.cen} y={500} gw={80} h={64} />
				</g>
				<g opacity={strandO}>
					<rect x={560} y={380} width={800} height={230} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<SlimStrand x={600} y={470} n={24} pitch={30} gap={44} band={{i0: 4, i1: 19, o: 0.8}} rung={i => (i === 12 ? {color: AMBER, w: 6} : undefined)} />
				</g>
				<GTag x={1380} y={390} text="b03" at={K2.point + 26} out={K2.hundreds - 10} size={26} />
				<Lbl x={960} y={680} text="point: one gene" size={44} color={AMBER_INK} anchor="middle" at={K2.bases} out={K2.hundreds - 10} />
				<Lbl x={960} y={640} text="chromosomal: many genes at once" size={44} color={AMBER_INK} anchor="middle" at={K2.many} out={K2.seen} />
				<Term x={140} y={930} term="chromosomal mutation" gloss="a change in structure or number" at={30} gat={K2.structure} out={K2.seen} />
				{/* only the large ones show down a microscope */}
				<PlateB p={PLATES.micro} cx={1560} cy={780} w={wForH(PLATES.micro, 300)} o={prog(f, K2.seen, 14)} />
				<Lbl x={140} y={760} text="large chromosomal changes: visible" size={42} color={BIO_INK} at={K2.seen + 10} />
				<Lbl x={140} y={840} text="point mutations: not visible" size={42} color={INK_SOFT} at={K2.cant} />
				{void K2.number}
			</Overlay>
		</>
	);
};

// ---------- 3. How a chromosome breaks or crosses over out of step ----------
const K3 = cues(S('how-they-break'), {snap: 'snap both strands', join: 'join the broken ends back wrongly', mistakes: 'Mistakes in crossing over', line: 'line up slightly out of step', swap: 'swap pieces', twice: 'a stretch twice', loses: 'loses that stretch', dup: 'makes a duplication'});
const XC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', '●', 'H'];
export const SceneHowTheyBreak: React.FC = () => {
	const f = useCurrentFrame();
	// part 1: a break, and ends rejoined wrongly
	const p1 = 1 - prog(f, K3.mistakes - 10, 14);
	const L = lay(CHR1, 625, 80, CW);
	const eIdx = 4; // E
	const brkX = L.segs[eIdx].x;
	const sep = prog(f, K3.snap + 40, 14) * (1 - prog(f, K3.join, 10));
	const flip = kf(f, [[K3.join, 0], [K3.join + 26, 1], [K3.mistakes - 34, 1], [K3.mistakes - 18, 0]]);
	const right = L.segs.slice(eIdx);
	const rx0 = right[0].x, rx1 = right[right.length - 1].x;
	const p1segs: Seg[] = L.segs.map((q, i) => {
		if (i < eIdx) return q;
		const mirror = rx0 + rx1 - q.x;
		return {...q, x: lerp(q.x, mirror, flip) + 20 * sep, y: 420 - 70 * Math.sin(Math.PI * flip) * (flip < 1 ? 1 : 0), tone: flip > 0.05 ? 'amber' : 'n', capR: flip > 0.5 ? false : q.capR, capL: false};
	});
	if (flip > 0.5) p1segs[eIdx].capR = true;
	// part 2: unequal crossing over (centromere outside the crossover region so the partners line up by gene)
	const p2 = prog(f, K3.mistakes - 4, 16);
	const gw = 70;
	const plum = lay(XC, 560, gw, CW, 'plum');
	const teal = lay(XC, 560 + 2 * gw, gw, CW, 'teal');
	const sw = prog(f, K3.swap + 6, 22);
	const yP = 420, yT = 580;
	const arc = Math.sin(Math.PI * sw) * 40;
	const dupT = prog(f, K3.twice, 10);
	const gap = prog(f, K3.loses + 6, 16);
	const top: Seg[] = [
		...plum.segs.slice(0, 4).map(q => ({...q, y: yP})),
		...teal.segs.slice(2).map((q, i) => ({...q, y: lerp(yT, yP, sw) - arc, tone: i < 2 && dupT > 0.5 ? 'amber' as const : q.tone, capL: false})),
	];
	const bot: Seg[] = [
		...teal.segs.slice(0, 2).map(q => ({...q, y: yT})),
		...plum.segs.slice(4).map(q => ({...q, y: lerp(yP, yT, sw) + arc, x: q.x + 2 * gw * gap, capL: false})),
	];
	const ghost: Seg[] = [2, 3].map(i => ({l: ['C', 'D'][i - 2], x: teal.segs[i].x, y: yT, dashed: true, o: gap}));
	return (
		<>
			<Heading text="How a chromosome changes shape" at={4} size={56} />
			<Overlay>
				<g opacity={p1}>
					<Bar segs={p1segs} cen={L.cen} y={420} gw={80} h={60} />
					<BreakMark x={brkX + 10 * sep} y={420} h={60} o={vis(f, K3.snap, K3.join + 30, 10)} />
					<g opacity={vis(f, K3.snap + 8, K3.join - 4, 12)}>
						<path d={`M${brkX},460 L700,600 M${brkX},460 L1220,600`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" fill="none" />
						<rect x={700} y={600} width={520} height={190} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
						<SlimStrand x={740} y={670} n={14} pitch={31} gap={44} breaks={[{i: 6, line: 'top', amt: prog(f, K3.snap + 14, 12)}, {i: 6, line: 'bot', amt: prog(f, K3.snap + 18, 12)}]} />
					</g>
					<GTag x={1240} y={610} text="b02" at={K3.snap + 20} out={K3.join - 4} size={26} />
					<Lbl x={960} y={560} text="rejoined wrongly" size={44} color={AMBER_INK} anchor="middle" at={K3.join + 28} out={K3.mistakes - 16} />
				</g>
				<g opacity={p2}>
					{sw < 0.01 ? (
						<>
							<Bar segs={plum.segs.map(q => ({...q, y: yP}))} cen={plum.cen} cenTone="plum" y={yP} gw={gw} h={56} />
							<Bar segs={teal.segs.map(q => ({...q, y: yT}))} cen={teal.cen} cenTone="teal" y={yT} gw={gw} h={56} />
						</>
					) : (
						<>
							<Bar segs={top} cen={teal.cen} cenTone="teal" cenY={lerp(yT, yP, sw) - arc} y={yP} gw={gw} h={56} />
							<Bar segs={[...bot, ...ghost]} cen={(plum.cen ?? 0) + 2 * gw * gap} cenTone="plum" cenY={lerp(yP, yT, sw) + arc} y={yT} gw={gw} h={56} />
						</>
					)}
					{/* the crossover point */}
					<line x1={plum.segs[4].x} y1={yP + 36} x2={plum.segs[4].x} y2={yT - 36} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="6 5" opacity={vis(f, K3.line + 10, K3.swap + 10, 10)} />
				</g>
				<Lbl x={960} y={700} text="out of step" size={44} color={AMBER_INK} anchor="middle" at={K3.line + 10} out={K3.swap} />
				<Lbl x={535} y={yP + 14} text="duplication" size={42} color={AMBER_INK} anchor="end" at={K3.twice + 10} />
				<Lbl x={535} y={yT + 14} text="deletion" size={42} color={AMBER_INK} anchor="end" at={K3.loses + 14} />
				{void K3.dup}{void PLUMC}{void TEALC}
			</Overlay>
		</>
	);
};
