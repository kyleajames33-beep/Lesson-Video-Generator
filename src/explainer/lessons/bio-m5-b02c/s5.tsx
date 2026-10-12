import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Body, Card, CELL_FILL, CELL_LINE, CellDot, Clock, Crowd, COPY, CountChip, Cross, DrawPath, EggDot, Enter, Fade, FONT_DISPLAY, FONT_HAND, Heading, INK, INK_SOFT, Line, Overlay, PArt, PL, Pill,
	prog, PSeq, S, SHARE, SPLIT, Stamp, Strip, Tick, WrongChip, along, StepIcon, STEP_COL, pH, Scribble, SpermDot,
} from './shared';

const PURPLE = '#7b4fb3';
const GREENV = '#2f8a5b';
const vis = (f: number, from: number, to?: number, d = 14) => prog(f, from, d) * (to === undefined ? 1 : 1 - prog(f, to, d));

// ---------- small shared vignettes ----------
/** Two painted cells from plate 3, the second with its loop covered (a cell that got no DNA). */
const EmptyPair: React.FC<{x: number; y: number; w: number; at: number; qAt?: number}> = ({x, y, w, at, qAt}) => {
	const f = useCurrentFrame();
	const s = w / 654;
	const gap = w * 0.12;
	const rx = x + w + gap;
	const loopR: [number, number] = [rx + 290 * s, y + 166 * s];
	const o = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<PArt a={PL.cellL} x={x} y={y} w={w} />
			<PArt a={PL.cellR} x={rx} y={y} w={w} />
			<Overlay>
				<ellipse cx={loopR[0]} cy={loopR[1]} rx={140 * s} ry={110 * s} fill="#c4d58a" style={{filter: 'blur(5px)'}} />
				{qAt !== undefined ? <text x={loopR[0]} y={loopR[1] + 22 * s * 3} textAnchor="middle" opacity={prog(f, qAt, 12) * 0.7} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 110 * s}} fill={SPLIT}>?</text> : null}
			</Overlay>
		</div>
	);
};

/** Two painted bacteria with a coded bridge, a gene bead that crosses, then the bridge breaks and they part. */
const BridgePair: React.FC<{x: number; y: number; w: number; gap: number; at: number; bridgeAt: number; beadAt?: number; breakAt?: number; dim?: boolean}> = ({x, y, w, gap, at, bridgeAt, beadAt, breakAt, dim}) => {
	const f = useCurrentFrame();
	const s = w / 654;
	const bp = prog(f, bridgeAt, 24);
	const br = breakAt === undefined ? 0 : prog(f, breakAt, 18);
	const part = 14 * br;
	const rx = x + w + gap;
	const midY = y + (323 * s) / 2;
	const half = gap / 2;
	const loopL: [number, number] = [x + 290 * s, y + 166 * s];
	const loopR: [number, number] = [rx + 290 * s, y + 166 * s];
	const route: [number, number][] = [[loopL[0] + 70 * s * 1.4, loopL[1]], [x + w, midY], [rx, midY], [loopR[0] - 80 * s * 1.4, loopR[1]]];
	const travel = beadAt === undefined ? 0 : prog(f, beadAt, 46);
	const bead = along(route, travel);
	const o = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o * (dim ? 0.9 : 1)}}>
			<PArt a={PL.cellL} x={x} y={y} w={w} style={{transform: `translateX(${-part}px)`}} />
			<PArt a={PL.cellR} x={rx} y={y} w={w} style={{transform: `translateX(${part}px)`}} />
			<Overlay>
				{bp * (1 - br) > 0.02 ? (
					<>
						<rect x={x + w - part - 4} y={midY - 9} width={half * bp * (1 - br) + 4} height={18} rx={4} fill="#e4eeb8" stroke={CELL_LINE} strokeWidth={4} />
						<rect x={rx + part - half * bp * (1 - br)} y={midY - 9} width={half * bp * (1 - br) + 4} height={18} rx={4} fill="#e4eeb8" stroke={CELL_LINE} strokeWidth={4} />
					</>
				) : null}
				{beadAt !== undefined ? <circle cx={bead[0] + (travel >= 1 ? part : 0)} cy={bead[1]} r={13} fill={PURPLE} stroke="#fff" strokeWidth={3} opacity={prog(f, beadAt, 6)} /> : null}
			</Overlay>
		</div>
	);
};

// ---------- 8. Attempt ----------
const CX = [96, 676, 1256];
const CWD = 568;
const FY = 226, FH = 724;
const TITLES = ['A split bacterium', 'Two bacteria and a bridge', 'A flask of bacteria'];
const Badge: React.FC<{n: number}> = ({n}) => (
	<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{n}</div>
);
const Frame: React.FC<{i: number; at: number}> = ({i, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: CX[i], top: FY, width: CWD, height: FH, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '16px 24px 0'}}>
				<Badge n={i + 1} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{TITLES[i]}</div>
			</div>
		</div>
	);
};
const Col: React.FC<{i: number; y: number; children: React.ReactNode}> = ({i, y, children}) => (
	<div style={{position: 'absolute', left: CX[i] + 28, top: FY + y, width: CWD - 56, display: 'flex', flexDirection: 'column', gap: 12}}>{children}</div>
);
const Para: React.FC<{at: number; q?: boolean; children: React.ReactNode}> = ({at, q, children}) => (
	<Enter at={at}>
		<Body size={q ? 34 : 32} weight={q ? 800 : 600} color={q ? AMBER_INK : INK} style={{lineHeight: 1.2}}>{children}</Body>
	</Enter>
);

export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		turn: 'Your turn', one: 'One a scientist watches', c1b: 'One new cell has', q1: 'Which step went wrong', two: 'Two two bacteria', c2b: 'thin bridge forms', c2c: 'passes a copy of a gene', c2d: 'Then the bridge breaks',
		q2: 'Is this reproduction', three: 'Three a different bacterium', c3b: 'One cell goes into a flask', c3c: 'Every cell divides on time', q3: 'How many cells', pause: 'Pause the video',
	});
	const hold = scene.responseHold ?? {startFrame: 1616, endFrame: 3416};
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: three situations" at={c.turn} size={76} cps={30} /></div>
			<Frame i={0} at={c.one} /><Frame i={1} at={c.two} /><Frame i={2} at={c.three} />
			<EmptyPair x={CX[0] + 28} y={FY + 100} w={236} at={c.one + 10} qAt={c.c1b + 40} />
			<BridgePair x={CX[1] + 40} y={FY + 108} w={190} gap={118} at={c.two + 10} bridgeAt={c.c2b} beadAt={c.c2c} breakAt={c.c2d} />
			{/* flask with one cell and the doubling time */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.three + 10, 16)}}>
				<Overlay>
					<g transform={`translate(${CX[2] + 40},${FY + 86}) scale(0.92)`}>
						<path d="M60,0 L60,50 L8,150 C-4,172 8,186 30,186 L150,186 C172,186 184,172 172,150 L120,50 L120,0Z" fill="#fffdf8" stroke={INK_SOFT} strokeWidth={6} strokeLinejoin="round" />
						<path d="M26,128 L152,128 L170,156 C180,176 170,186 150,186 L30,186 C10,186 2,176 12,156Z" fill="#dff0f7" stroke="none" />
						<g opacity={prog(f, c.c3b, 14)}><CellDot x={90} y={158} r={16} /></g>
					</g>
					<Clock x={CX[2] + 380} y={FY + 150} r={52} deg={prog(f, c.three + 20, 40) * 240} o={prog(f, c.three + 20, 14)} />
					<text x={CX[2] + 380} y={FY + 250} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK} opacity={prog(f, c.three + 40, 14)}>40 min</text>
				</Overlay>
			</div>
			<Col i={0} y={290}>
				<Para at={c.one}>A scientist watches a bacterium split into two cells.</Para>
				<Para at={c.c1b}>One new cell has one loop of DNA, and the other has none.</Para>
				<Para at={c.q1} q>Which step went wrong first: copy, share or split? What will the cell with no DNA be unable to do?</Para>
			</Col>
			<Col i={1} y={290}>
				<Para at={c.two}>Two bacteria lie side by side.</Para>
				<Para at={c.c2b}>A thin bridge forms between them, and one passes a copy of a gene to the other.</Para>
				<Para at={c.c2d}>Then the bridge breaks and they separate.</Para>
				<Para at={c.q2} q>Is this reproduction? What changed, and what stayed the same?</Para>
			</Col>
			<Col i={2} y={290}>
				<Para at={c.three}>A different bacterium divides every 40 minutes.</Para>
				<Para at={c.c3b}>One cell goes into a flask with plenty of food and space.</Para>
				<Para at={c.c3c}>Every cell divides on time, and none die.</Para>
				<Para at={c.q3} q>How many cells are there after 2 hours?</Para>
			</Col>
			<Enter at={c.pause} style={{position: 'absolute', left: 100, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>Pause the video if you would like more time.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={118} r={44} /></Overlay>
		</>
	);
};

// ---------- 9. Feedback ----------
const Note2: React.FC<{at: number; x: number; y: number; w?: number; color?: string; children: React.ReactNode; size?: number}> = ({at, x, y, w = 800, color = INK, children, size = 36}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<Body size={size} weight={600} color={color} style={{lineHeight: 1.22}}>{children}</Body>
	</Enter>
);
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback'), {
		v1: 'the copy step did not happen', loops: 'one loop to give out', sharing: 'Sharing needs two loops', wrong: 'where it went wrong', nodna: 'A cell with no DNA', noinstr: 'no instructions to follow', ifshare: 'If you said share',
		ifboth: 'both cells would be fine', size: "size isn't the point", looks: 'look healthy',
		v2: 'Two no', count: 'Count the cells', before: 'Before there were two', after: 'after there are still two', gene: 'A copy of a gene moved', changed: 'That is what changed', same: 'stayed the same',
		cs: 'copy and share happened', nosplit: 'no split', ifyes: 'If you said yes', doesnt: "It doesn't add a cell",
		v3: 'Three eight', hrs: 'Two hours is 120 minutes', div: '120 divided by 40', d3: '3 doublings', b2: 'becomes 2', t4: 'then 4', t8: 'then 8', six: 'If you said 6', nine: 'If you said 9', three: 'If you said 3', each: 'Each doubling doubles',
	});
	const p1 = vis(f, 0, c.v2 - 12);
	const p2 = vis(f, c.v2 - 8, c.v3 - 12);
	const p3 = vis(f, c.v3 - 8);
	const reasonOut = c.ifshare - 8;
	const stageAt3 = [c.b2 - 6, c.t4 - 6, c.t8 - 6];
	return (
		<>
			<Heading items={[[0, 'One: the split with one loop'], [c.v2, 'Two: the bridge'], [c.v3, 'Three: the flask']]} size={72} />
			{/* One */}
			<div style={{position: 'absolute', inset: 0, opacity: p1}}>
				<EmptyPair x={110} y={290} w={400} at={4} qAt={c.noinstr} />
				<Overlay>
					<Fade at={4}><Label2 x={310} y={540} text="has a loop" color={GREENV} at={4} /></Fade>
					<Fade at={c.nodna}><Label2 x={810} y={540} text="no DNA" color={SPLIT} at={c.nodna} /></Fade>
					<Fade at={c.noinstr}><Label2 x={810} y={600} text="no instructions" color={SPLIT} at={c.noinstr} /></Fade>
					<Tick x={310} y={260} at={c.sharing + 40} s={1.4} />
					<Cross x={810} y={262} s={1.4} at={c.nodna + 6} />
				</Overlay>
				<Strip x={110} y={660} on={[[], [], [-20]]} cross={{i: 0, at: c.v1 + 6}} scale={0.8} />
				<Enter at={c.v1 + 14} style={{position: 'absolute', left: 130, top: 740}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: SPLIT}}>skipped: the copy step</span></Enter>
				<Line at={c.wrong} x={110} y={820} size={44} hand color={AMBER_INK}>split without copying = one empty cell</Line>
				<div style={{opacity: 1 - prog(f, reasonOut, 12)}}>
					<Stamp at={c.v1} x={1050} y={236} text="THE COPY STEP WAS SKIPPED" color={SPLIT} size={32} />
					<Note2 at={c.loops} x={1050} y={346}>Only one loop to give out.</Note2>
					<Note2 at={c.sharing} x={1050} y={426}>Sharing needs two loops, so copying is where it went wrong.</Note2>
					<Note2 at={c.nodna} x={1050} y={546} color={SPLIT}>A cell with no DNA has no instructions to follow, so it can't grow or work properly.</Note2>
				</div>
				<WrongChip at={c.ifshare} x={1050} y={280} text="share" />
				<Note2 at={c.ifshare + 20} x={1050} y={364} size={34}>Sharing needs two loops to hand out.</Note2>
				<WrongChip at={c.ifboth} x={1050} y={500} text="both fine" />
				<Note2 at={c.size} x={1050} y={584} size={34}>Size isn't the point.</Note2>
				<Note2 at={c.looks} x={1050} y={640} size={34}>A cell can look healthy and still hold no instructions.</Note2>
			</div>

			{/* Two */}
			<div style={{position: 'absolute', inset: 0, opacity: p2}}>
				<BridgePair x={110} y={290} w={340} gap={140} at={c.v2 - 6} bridgeAt={-60} beadAt={c.gene} />
				<CountChip at={c.before} x={110} y={520} label="Before: 2" n={2} />
				<CountChip at={c.after} x={560} y={520} label="After: 2" n={2} />
				<Strip x={110} y={640} on={[[c.cs], [c.cs + 24], []]} cross={{i: 2, at: c.nosplit}} scale={0.8} />
				<Stamp at={c.v2} x={1050} y={236} text="NOT REPRODUCTION" color={SPLIT} size={32} />
				<Card x={1050} y={330} w={740} at={c.gene} pad="12px 24px"><Body size={34} weight={700}><span style={{color: PURPLE}}>Changed:</span> one cell now carries something new.</Body></Card>
				<Card x={1050} y={450} w={740} at={c.same} pad="12px 24px"><Body size={34} weight={700}><span style={{color: AMBER_INK}}>Stayed the same:</span> the number of cells. Copy and share happened, but there was no split, so no new cell was made.</Body></Card>
				<WrongChip at={c.ifyes} x={1050} y={700} text="yes" />
				<Note2 at={c.doesnt - 40} x={1050} y={780} size={34}>Passing on a gene changes what a cell carries. It doesn't add a cell.</Note2>
				<div style={{position: 'absolute', left: 110, top: 740, opacity: prog(f, c.nosplit + 20, 14)}}>
					<PSeq arts={[PL.fis1, PL.fis3]} x={0} y={0} w={420} at={[c.nosplit + 40]} />
				</div>
				<Line at={c.nosplit + 24} x={110} y={860} size={34} color={INK_SOFT}>fission: one cell becomes two</Line>
			</div>

			{/* Three */}
			<div style={{position: 'absolute', inset: 0, opacity: p3}}>
				<Overlay>
					<Crowd cx={470} cy={470} stageAt={stageAt3} r={54} sp={150} cols={4} o={prog(f, c.v3, 14)} />
				</Overlay>
				<Stamp at={c.v3} x={1050} y={236} text="EIGHT CELLS" color={GREENV} size={36} />
				<Card x={110} y={700} w={800} at={c.hrs} out={c.div - 6} pad="12px 26px"><Body size={44} weight={700}>2 hours = 120 min</Body></Card>
				<Enter at={c.div} out={c.t8 - 6} style={{position: 'absolute', left: 110, top: 700}}><Body size={52} weight={800}>120 min ÷ 40 min = <span style={{color: AMBER_INK}}>3 doublings</span></Body></Enter>
				<Enter at={c.t8} style={{position: 'absolute', left: 110, top: 700}}><Body size={64} weight={800}>2<sup style={{fontSize: 34}}>3</sup> = <span style={{color: AMBER_INK}}>8 cells</span></Body></Enter>
				<WrongChip at={c.six} x={1050} y={330} text="6" size={56} />
				<Note2 at={c.six + 20} x={1190} y={336} w={620} size={38}>you multiplied the 3 by 2</Note2>
				<WrongChip at={c.nine} x={1050} y={450} text="9" size={56} />
				<Note2 at={c.nine + 20} x={1190} y={456} w={620} size={38}>you squared the 3</Note2>
				<WrongChip at={c.three} x={1050} y={570} text="3" size={56} />
				<Note2 at={c.three + 20} x={1190} y={566} w={620} size={38}>you counted the doublings but did not double the crowd</Note2>
				<Line at={c.each} x={1050} y={730} size={60} hand color={AMBER_INK}>2 to the power 3, not 3 x 2</Line>
				<Line at={c.each + 20} x={1050} y={820} w={760} size={38}>Each doubling doubles the whole crowd.</Line>
			</div>
		</>
	);
};
const Label2: React.FC<{x: number; y: number; text: string; color: string; at: number}> = ({x, y, text, color}) => (
	<text x={x} y={y} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}} fill={color}>{text}</text>
);

// ---------- 10. Memory and handoff ----------
const BigChip: React.FC<{i: number; at: number; on: number[]; pulse: number; k: 'copy' | 'share' | 'split'; text: string}> = ({i, at, on, pulse, k, text}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	const isOn = on.filter(t => f >= t).length > 0;
	const pop = 1 + 0.08 * Math.sin(Math.PI * prog(f, pulse, 14));
	const col = STEP_COL[k];
	return (
		<div style={{position: 'absolute', left: 110 + i * 560, top: 215, width: 500, height: 230, borderRadius: 30, background: isOn ? '#fffdf8' : '#f1ebdd', border: `6px solid ${isOn ? col : '#cfc6b4'}`, boxShadow: '0 18px 40px rgba(60,45,20,0.10)', opacity: p * (isOn ? 1 : 0.7), transform: `translateY(${(1 - p) * 30}px) scale(${pop})`, boxSizing: 'border-box'}}>
			<svg width={500} height={140} viewBox="-250 -70 500 140"><StepIcon k={k} x={0} y={0} s={2.6} /></svg>
			<div style={{textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, color: isOn ? col : INK_SOFT, lineHeight: 0.9}}>{text}</div>
		</div>
	);
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		pattern: 'one pattern', first: 'Copy the DNA first', then: 'then split', csp: 'copy share split', infis: 'In fission', inbud: 'In budding', conj: 'Conjugation copies', never: 'it never splits', nonew: 'makes no new cell',
		fis2: 'Fission makes more cells', conj2: 'Conjugation changes cells', next: 'Next',
	});
	const CL = {x: 110, y: 650, w: 230};
	return (
		<>
			<Heading items={[[c.pattern, 'One pattern to remember']]} size={76} />
			<BigChip i={0} at={c.pattern} on={[c.first]} pulse={c.csp} k="copy" text="1 copy" />
			<BigChip i={1} at={c.pattern} on={[c.csp + 21]} pulse={c.csp + 21} k="share" text="2 share" />
			<BigChip i={2} at={c.pattern} on={[c.then]} pulse={c.csp + 47} k="split" text="3 split" />
			<Line at={c.infis} x={110} y={480} size={58} hand color={SPLIT}>fission: the parent becomes two new cells</Line>
			<Line at={c.inbud} x={110} y={552} size={58} hand color={SHARE}>budding: a new cell grows from the parent</Line>
			{/* conjugation: copy and share, but never split */}
			<BridgePair x={CL.x} y={CL.y} w={CL.w} gap={110} at={c.conj} bridgeAt={c.conj + 6} beadAt={c.conj + 30} />
			<Strip x={780} y={700} on={[[c.conj + 20], [c.conj + 50], []]} cross={{i: 2, at: c.never}} scale={0.62} enter={c.conj} />
			<Line at={c.nonew} x={700} y={780} w={540} size={38} color={SPLIT}>it never splits, so it makes no new cell</Line>
			<Line at={c.fis2} x={1290} y={640} w={560} size={52} hand color={SPLIT}>fission = more cells</Line>
			<Line at={c.conj2} x={1290} y={720} w={560} size={52} hand color={PURPLE}>conjugation = changes cells that already exist</Line>
			<Pill at={c.next} x={560} y={890} size={44} color={'#2a5f8f'}>Next: what happens after a mammal's egg is fertilised</Pill>
			<Overlay>
				<g opacity={prog(f, c.next + 14, 14)}>
					<EggDot x={1640} y={925} r={22} />
					<path d="M1690,890 C1690,870 1730,870 1730,890 C1730,920 1760,930 1750,960 C1740,985 1680,985 1670,960 C1660,930 1690,920 1690,890Z" fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinejoin="round" />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 11. Key notes ----------
const NOTES = [
	'Binary fission: a cell copies its DNA, the copies move apart, and the cell splits into two. It is asexual, so the new cells are clones of the parent, apart from rare copying errors. Bacteria, amoebae and paramecia do this.',
	"Budding: a new cell grows from the parent and breaks away. In baker's yeast the DNA is copied first and one copy moves into the bud. Baker's yeast usually does this, as does Acineta.",
	'Copy, share, split. The DNA must be copied before the cell splits, or one new cell would have none and no instructions.',
	'Under good conditions some bacteria divide every 20 minutes. Starting from one cell, the number after n doublings is 2 to the power n. Running out of food, or a build-up of waste, slows or stops this.',
	'Conjugation passes DNA from one existing bacterium to another. It changes cells that already exist, but makes no new cell, so it is not reproduction.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 200, width: 1680}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 12} style={{display: 'flex', gap: 22, marginBottom: 12}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<Body size={31}>{n}</Body>
				</Enter>
			))}
			<Enter at={80} style={{marginTop: 12, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 24, padding: '8px 30px', width: 'fit-content'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70, color: AMBER_INK, lineHeight: 1.1}}>Copy, share, split.</div>
			</Enter>
		</div>
	</>
);
void [AMBER, CELL_FILL, Clock, COPY, Crowd, DrawPath, INK, Scribble, SpermDot, pH, FONT_DISPLAY];
