import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Chrom} from '../bio-m5-b05a/chrom';
import {
	AMBER, AMBER_INK, Beads, Cam, DnaRing, DrawPath, Envelope, Fade, GreyCross, GreyTag, Hand, Heading, INK, INK_SOFT, Magnifier, NUC,
	Overlay, PL, PLUM, Pl, Ring2, Rods8, S, Sx, TagP, Ticker, kf, prog,
} from './shared';
import type {CamKey} from './shared';
import {BoardCells, tangle} from './s1';

// ---------- 6. The eukaryotic cell: linear chromosomes in a nucleus ----------
const H6 = 'eukaryote-linear';
const K6 = cues(S(H6), {now: 'Now a eukaryotic cell', inside: 'inside the nucleus', notring: 'not one ring', split: 'split into several', each: 'each is one DNA molecule', ends: 'two ends', linear: 'call them linear', human: 'In a human body cell', counted: 'you counted 46', together: 'Together they hold', two: 'two metres', billion: 'six billion pairs', why: 'That is why'});
export const SceneLinear: React.FC = () => {
	const f = useCurrentFrame();
	const keys: CamKey[] = [[0, 1, 960, 560], [34, 2.6, NUC.cx, NUC.cy]];
	const rodsO = 1 - 0.65 * prog(f, K6.together + 10, 20);
	return (
		<>
			<Overlay>
				<Cam keys={keys}>
					<BoardCells leftO={1 - 0.7 * prog(f, 6, 16)} right={
						<g>
							<Envelope cx={NUC.cx} cy={NUC.cy} r={NUC.r * 0.97} width={1.6} o={prog(f, K6.inside - 6, 12)} />
							<DnaRing cx={NUC.cx} cy={NUC.cy} rx={NUC.r * 0.6} ry={NUC.r * 0.45} at={K6.notring - 4} o={0.5 * (1 - prog(f, K6.notring + 26, 12))} color="#9a9a9a" width={2} />
							<Rods8 cx={NUC.cx} cy={NUC.cy} r={NUC.r} at={K6.split} stagger={5} width={3} o={rodsO} litI={3} lit={prog(f, K6.each, 10) * (1 - prog(f, K6.human, 12))} />
						</g>
					} />
				</Cam>
				{/* once zoomed, paper covers the rest of the cell so the nucleus and the labels read cleanly */}
				<path d={`M0,0 L1920,0 L1920,1080 L0,1080 Z M${960 - 330},560 a330,330 0 1,0 660,0 a330,330 0 1,0 -660,0 Z`} fillRule="evenodd" fill="#f4eee2" opacity={0.9 * prog(f, 30, 16)} />
				<GreyCross x={960} y={560} at={K6.notring + 6} out={K6.split} s={60} />
				<Sx x={1300} y={300} text="linear: two ends" size={50} color={PLUM} hand at={K6.linear} />
				<Sx x={1300} y={346} text="each one DNA molecule" size={34} color={INK_SOFT} hand at={K6.each + 10} />
				<TagP x={1300} y={400} text="model: 8 shown; human: 46" at={K6.human} />
				<Ticker x={1300} y={560} from={1} to={46} at={K6.counted} dur={40} label="chromosomes, human body cell" size={70} />
				<Fade at={K6.billion - 4}>
					<Sx x={96} y={300} text="about 6 billion base pairs" size={40} color={INK} weight={600} at={K6.billion} />
					<Sx x={96} y={344} text="(pairs of bases)" size={32} color={INK_SOFT} hand at={K6.billion + 6} />
				</Fade>
				<Fade at={K6.why - 4}>
					<Sx x={96} y={440} text="2 m of DNA in a nucleus" size={42} color={AMBER_INK} hand at={K6.why} />
					<Sx x={96} y={490} text="about 6 micrometres across" size={42} color={AMBER_INK} hand at={K6.why + 8} />
				</Fade>
				{/* all 46 end to end: the long thread from the hook */}
				<DrawPath d={'M96,960 ' + Array.from({length: 49}, (_, i) => `L${(96 + i * 36).toFixed(0)},${(960 + 10 * Math.sin(i * 1.1)).toFixed(0)}`).join(' ')} at={K6.together} dur={50} color={PLUM} width={4} />
				<Sx x={960} y={920} text="all 46 together: about 2 metres" size={42} color={PLUM} hand anchor="middle" at={K6.two} />
			</Overlay>
			<Heading text="Your cells: linear chromosomes" at={4} size={60} />
		</>
	);
};

// ---------- 7a. Why the thread winds ----------
const H7 = 'why-thread-winds';
const K7 = cues(S(H7), {holds: 'A nucleus holds', wound: 'wound and folded', loose: 'Loose two metres', tangle: 'a tangle', first: 'The first level', wraps: 'wraps around groups', histones: 'called histones', spool: 'like thread round a spool', neg: 'negative charge', pos: 'positive one', opp: 'opposite charges attract', clings: 'clings to them'});
export const XS7 = [420, 640, 860, 1080, 1300, 1520];
export const TY = 620, BR = 44;
/** Small inset: which part we have zoomed into (one chromosome in a nucleus). */
export const ZoomInset: React.FC<{at: number}> = ({at}) => (
	<Fade at={at}>
		<Envelope cx={1700} cy={230} r={70} width={3} />
		<Rods8 cx={1700} cy={230} r={70} width={3} litI={3} lit={1} />
		<Sx x={1700} y={336} text="one chromosome, zoomed in" size={28} color={INK_SOFT} hand anchor="middle" at={at} />
	</Fade>
);
export const SceneWinds: React.FC = () => {
	const f = useCurrentFrame();
	const wind = XS7.map((_, i) => prog(f, K7.wraps + 16 + i * 16, 18));
	const minus = prog(f, K7.neg, 12) * (0.75 + 0.25 * Math.sin(f * 0.25));
	const plus = XS7.map(() => prog(f, K7.pos, 12) * (0.75 + 0.25 * Math.sin(f * 0.25 + 1)));
	return (
		<>
			<Heading text="Why the thread winds" at={4} size={60} />
			<Overlay>
				<ZoomInset at={6} />
				<g opacity={1 - prog(f, K7.wraps, 14)}><DrawPath d={`M160,${TY} L1760,${TY}`} at={4} dur={26} color={PLUM} width={5} /></g>
				<g opacity={prog(f, K7.wraps, 14)}>
					<Beads xs={XS7} y={TY} r={BR} wind={wind} x0={160} x1={1760} plus={plus} minus={minus} />
				</g>
				<Sx x={960} y={420} text="wound and folded" size={50} color={AMBER_INK} hand anchor="middle" at={K7.wound} out={K7.first} />
				<Fade at={K7.loose - 4} out={K7.first}>
					<path d={tangle(960, 840, 220, 90, 5, 7, 300)} fill="none" stroke={PLUM} strokeWidth={3} opacity={0.45} />
					<GreyCross x={960} y={840} at={K7.tangle + 4} s={60} />
					<Sx x={960} y={990} text="a tangle: could not fit, or be found" size={40} color={INK_SOFT} hand anchor="middle" at={K7.tangle + 8} />
				</Fade>
				{/* analogy: thread on a spool, one beat */}
				<Fade at={K7.spool - 6} out={K7.neg + 10}>
					<Pl p={PL.spool} x={230} y={360} k={0.17} />
					<Sx x={230} y={520} text="analogy: thread on a spool" size={30} color={INK_SOFT} hand anchor="middle" at={K7.spool} />
				</Fade>
				<Sx x={960} y={780} text="DNA (−) clings to histones (+)" size={46} color={INK} hand anchor="middle" at={K7.opp - 10} />
				<TagP x={960} y={820} text="opposite charges attract" anchor="middle" at={K7.opp} />
				<GreyTag x={1300} y={960} text="histone: a packaging protein" at={K7.histones} />
			</Overlay>
		</>
	);
};

// ---------- 7b. Nucleosome and chromatin ----------
const H7b = 'nucleosome-chromatin';
const K7b = cues(S(H7b), {one: 'One spool of DNA', nucleo: 'called a nucleosome', whole: 'The whole beaded thread', chromatin: 'is chromatin', folds: 'folds it further'});
export const SceneNucleosome: React.FC = () => {
	const f = useCurrentFrame();
	const fold = prog(f, K7b.folds, 40);
	const xs = XS7.map(x => x + (960 + (x - 970) * 0.3 - x) * fold);
	const ys = XS7.map((_, i) => TY + (i % 2 ? -42 : 42) * fold);
	const x0 = 160 + (720 - 160) * fold, x1 = 1760 + (1200 - 1760) * fold;
	return (
		<>
			<Heading text="Nucleosomes and chromatin" at={4} size={60} />
			<Overlay>
				<ZoomInset at={-100} />
				<Beads xs={xs} y={ys} r={BR} wind={XS7.map(() => 1)} x0={x0} x1={x1} plus={XS7.map(() => 1 - fold)} />
				<Ring2 cx={XS7[2]} cy={TY} rx={74} ry={74} at={K7b.nucleo - 4} out={K7b.folds} />
				<Sx x={XS7[2]} y={TY - 110} text="nucleosome" size={56} color={AMBER_INK} hand anchor="middle" at={K7b.nucleo} out={K7b.folds + 10} />
				<Sx x={XS7[2]} y={TY + 130} text="DNA wound on histones" size={36} color={INK_SOFT} hand anchor="middle" at={K7b.nucleo + 8} out={K7b.folds + 10} />
				<Fade at={K7b.chromatin - 4} out={K7b.folds}>
					<DrawPath d={`M180,${TY + 180} L180,${TY + 200} L1740,${TY + 200} L1740,${TY + 180}`} at={K7b.chromatin - 4} dur={16} color={PLUM} width={4} />
					<Sx x={960} y={TY + 250} text="chromatin" size={56} color={PLUM} hand anchor="middle" at={K7b.chromatin} />
				</Fade>
				<TagP x={960} y={800} text="wound on histones, then folded further" anchor="middle" at={K7b.folds + 20} />
			</Overlay>
		</>
	);
};

// ---------- 8a. Loosen to read a gene ----------
const H8 = 'loosen-to-read';
const K8 = cues(S(H8), {creates: 'Winding creates a problem', read: 'can only be read', meaning: 'meaning the cell uses', reach: 'can reach it', adjustable: 'the winding is adjustable', tags: 'Chemical tags', loosen: 'loosen the thread', tighten: 'tighten it elsewhere', weaken: "weaken a histone's", grips: 'grips the DNA less'});
export const SceneLoosen: React.FC = () => {
	const f = useCurrentFrame();
	const base = [300, 455, 610, 765, 1155, 1310, 1465, 1620];
	const GENE = 960;
	const breathe = f >= K8.adjustable && f < K8.tags ? 14 * Math.sin((f - K8.adjustable) * 0.15) : 0;
	const open = prog(f, K8.loosen + 4, 30);
	const tight = prog(f, K8.tighten, 24);
	const xs = base.map((x, i) => {
		const near = i === 3 || i === 4;
		const side = x < GENE ? -1 : 1;
		const b = breathe * side * (near ? 1 : 0.5);
		const o = near ? side * 60 * open : 0;
		const t = near ? 0 : [-0, -15, -30, 0, 0, 30, 15, 0][i] * tight;
		return x + b + o + t;
	});
	const weak = prog(f, K8.weaken + 4, 16);
	const plus = base.map((_, i) => (i === 4 ? 1 - weak : 1));
	const ys = base.map((_, i) => TY + (i === 4 ? -10 * weak : 0));
	return (
		<>
			<Heading text="Loosen to read a gene" at={4} size={60} />
			<Overlay>
				<Beads xs={xs} y={ys} r={38} wind={base.map(() => 1)} x0={160} x1={1760} plus={plus} gene={{x: GENE, o: 1}} />
				<Ring2 cx={GENE} cy={TY} rx={40} ry={40} at={K8.read} out={K8.adjustable} />
				<Sx x={GENE} y={TY + 110} text="gene" size={44} color={AMBER_INK} hand anchor="middle" at={K8.read} />
				<Sx x={960} y={330} text="read a gene = use its instructions (next video)" size={42} color={AMBER_INK} hand anchor="middle" at={K8.meaning} />
				<Sx x={960} y={400} text="the cell must reach it" size={38} color={INK_SOFT} hand anchor="middle" at={K8.reach} />
				<g opacity={open}>
					<Magnifier x={GENE - 10} y={TY - 120 + 40 * (1 - open)} s={1.3} />
				</g>
				<TagP x={GENE + 70} y={TY - 150} text="gene reachable" at={K8.loosen + 30} />
				<Sx x={300} y={TY + 120} text="tighter" size={38} color={INK_SOFT} hand anchor="middle" at={K8.tighten + 10} />
				<Sx x={1620} y={TY + 120} text="tighter" size={38} color={INK_SOFT} hand anchor="middle" at={K8.tighten + 10} />
				<TagP x={xs[4] - 60} y={TY + 150} text="weaker + : looser grip" at={K8.weaken + 16} />
				<GreyTag x={960} y={980} text="histone tag: a small chemical group added to a histone" anchor="middle" at={K8.tags} />
			</Overlay>
		</>
	);
};

// ---------- 8b. Tight for division ----------
const H8b = 'tight-for-division';
const K8b = cues(S(H8b), {before: 'Before a cell divides', tightly: 'wound far more tightly', short: 'short thick chromosomes', mitosis: 'you saw in mitosis', shortens: 'shortens it thousands', moved: 'can be moved'});
export const SceneTight: React.FC = () => {
	const f = useCurrentFrame();
	const coil = prog(f, K8b.tightly - 4, 50);
	const mv = prog(f, K8b.moved + 4, 30);
	const spin = (1 - coil) * 8 * Math.sin(f * 0.1);
	return (
		<>
			<Heading text="Wound tightly for division" at={4} size={60} />
			<Overlay>
				<Envelope cx={960} cy={560} r={330} width={4} o={1 - prog(f, K8b.short, 20)} />
				<g transform={`translate(${160 * mv},0) rotate(${spin} 960 560)`}>
					<Chrom x={960} y={560} kind="L" color={PLUM} dup={1} coil={coil} s={2.2} />
				</g>
				<TagP x={960} y={190} text="mitosis chromosomes: chromatin wound tightly" anchor="middle" at={K8b.short} />
				<Sx x={960} y={950} text="about 10,000 times shorter than stretched out" size={40} color={AMBER_INK} hand anchor="middle" at={K8b.shortens} />
				<Fade at={K8b.moved}>
					<path d="M760,800 L1300,800 M1280,784 L1300,800 L1280,816" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
					<Sx x={960} y={1010} text="moved without tangling" size={40} color={INK_SOFT} hand anchor="middle" at={K8b.moved + 6} />
				</Fade>
			</Overlay>
		</>
	);
};
void INK; void kf; void AMBER;
