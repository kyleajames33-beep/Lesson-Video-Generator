import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, BLUE, CELL_FILL, CELL_LINE, Cross, DrawPath, Enter, Fade, FONT_HAND, Heading, INK, INK_SOFT, Label, Line, Loop, Overlay, PArt, pm, PL, Pill, prog, PSeq, S, Scribble,
	Split, Stamp, Strip, Tick, Wall, COPY, FadeDiv, pH, SPLIT,
} from './shared';

const SMELL = '#8a9a3a';

// ---------- 1. Hook: milk and one cell ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		milk: 'glass of milk', warm: 'warm bench', day: 'day or two', sour: 'smells sour', few: 'only a few bacteria', partner: 'no partner', how: 'So how does one cell', crowd: 'become a crowd',
	});
	const GL = {x: 130, y: 290, w: 560};
	const gp = pm(PL.milk, GL.x, GL.y, GL.w);
	const surface = gp(920, 330);
	const zoom = prog(f, c.few, 26);
	const hand = 360 * prog(f, c.warm, c.sour - c.warm);
	const clockIn = prog(f, c.warm, 14);
	const smellOut = 1 - prog(f, c.few, 14);
	const R = 330, CX = 1300, CY = 610;
	const far = {x: 470, y: 520};
	return (
		<>
			<Heading items={[[c.how, 'How does one cell make another?']]} size={76} />
			<Enter at={c.crowd} style={{position: 'absolute', left: 100, top: 192}}>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: AMBER_INK}}>And once it can, how does that become a crowd?</span>
			</Enter>
			<PArt a={PL.milk} x={GL.x} y={GL.y} w={GL.w} style={{opacity: prog(f, 0, 26), transform: `translateX(${(1 - prog(f, 0, 26)) * -80}px)`}} />
			<Overlay>
				{/* clock ticks round once while the milk sits */}
				<g opacity={clockIn * (1 - prog(f, c.few, 14) * 0.7)}>
					<g transform="translate(820,360)">
						<circle r={86} fill="#fffdf8" stroke="rgba(0,0,0,0.08)" strokeWidth={2} />
						<circle r={72} fill="none" stroke={INK_SOFT} strokeWidth={6} />
						{Array.from({length: 12}, (_, i) => <line key={i} x1={0} y1={-66} x2={0} y2={i % 3 === 0 ? -50 : -57} stroke={INK_SOFT} strokeWidth={4} transform={`rotate(${i * 30})`} />)}
						<line x1={0} y1={0} x2={0} y2={-54} stroke={SPLIT} strokeWidth={7} strokeLinecap="round" transform={`rotate(${hand})`} />
						<circle r={7} fill={INK} />
					</g>
				</g>
				<Label x={820} y={494} at={c.day} text="a day or two" size={42} color={INK_SOFT} out={c.few} />
				{/* smell lines */}
				<g opacity={smellOut}>
					{[0, 1, 2].map(i => (
						<DrawPath key={i} d={`M${340 + i * 70},${290} q-18,-26 0,-52 t0,-52`} at={c.sour + i * 6} dur={30} color={SMELL} width={7} />
					))}
				</g>
				{/* magnifier ring on the milk surface */}
				<g opacity={zoom} transform={`translate(${surface[0]},${surface[1] + 70})`}>
					<circle r={46 * (0.5 + 0.5 * zoom)} fill="rgba(255,255,255,0.35)" stroke={INK} strokeWidth={8} />
					<path d="M32,32 L66,66" stroke={INK} strokeWidth={12} strokeLinecap="round" />
				</g>
				<g opacity={zoom}>
					<path d={`M${surface[0] + 30},${surface[1] + 38} L${CX - R * 0.85},${CY - R * 0.52}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
					<path d={`M${surface[0] + 44},${surface[1] + 96} L${CX - R * 0.85},${CY + R * 0.52}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
				</g>
			</Overlay>
			{/* the zoomed field with a single bacterium */}
			<div style={{position: 'absolute', left: CX - R, top: CY - R, width: R * 2, height: R * 2, borderRadius: '50%', overflow: 'hidden', background: 'radial-gradient(circle at 40% 35%, #eaf4fb, #cfe3f3)', border: `8px solid ${INK}`, boxSizing: 'border-box', opacity: zoom, transform: `scale(${0.3 + 0.7 * zoom})`}}>
				<PArt a={PL.cell1} x={R - 190} y={R - pH(PL.cell1, 380) / 2 - 30} w={380} />
				<svg width={R * 2} height={R * 2} style={{position: 'absolute', left: 0, top: 0}}>
					<g transform={`translate(${far.x},${far.y})`} opacity={0.9}>
						<rect x={-62} y={-30} width={124} height={60} rx={30} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
						<ellipse rx={26} ry={18} fill="none" stroke={COPY} strokeWidth={5} />
					</g>
					<Cross x={far.x} y={far.y} s={2.2} at={c.partner + 6} />
				</svg>
			</div>
			<Overlay>
				<Fade at={c.partner}><Label x={CX + 140} y={CY + 130} at={c.partner} text="no partner" size={60} color={SPLIT} /></Fade>
			</Overlay>
			<Pill at={c.partner + 10} x={1370} y={110} size={40}>one cell, no partner</Pill>
		</>
	);
};

// ---------- 2a. The problem and the copy ----------
const PX = 210, PY = 330, PW = 1500;
export const SceneProblemCopy: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('problem-copy'), {
		now: "Now let's see how", here: 'Here is one bacterium', loop: 'single loop', pinch: 'simply pinched in half', half: 'One half would get the loop', nothing: 'would get nothing', instr: 'holds the instructions',
		none: 'cell with none', first: 'first step', copy: 'copy the DNA', two: 'two identical loops',
	});
	const m = pm(PL.fis1, PX, PY, PW);
	const loop = m(897, 620);
	const cutX = m(765, 0)[0];
	const dLine = prog(f, c.pinch, 24);
	const slide = prog(f, c.half, 24) * (1 - prog(f, c.first, 26));
	const grey = prog(f, c.nothing, 16) * (1 - prog(f, c.first, 20));
	const cutOp = 1 - prog(f, c.first, 16);
	const instrP = prog(f, c.instr, 24);
	const copyP = prog(f, c.copy, 36);
	const split = f >= c.pinch;
	const labelsOut = c.first - 4;
	const plateIn = prog(f, 20, 24);
	const rightX = loop[0] + 70 * slide;
	return (
		<>
			<Heading items={[[0, 'How does one cell copy itself?'], [c.copy, 'Step 1: copy the DNA']]} size={72} />
			<Pill at={4} out={c.now} x={100} y={196} size={44}>Recall: asexual = one parent, a copy</Pill>
			<div style={{position: 'absolute', inset: 0, opacity: plateIn}}>
				{split ? (
					<Split cut={cutX} d={70 * slide} leftStyle={{filter: `grayscale(${grey}) opacity(${1 - 0.55 * grey})`}}>
						<PArt a={PL.fis1} x={PX} y={PY} w={PW} />
					</Split>
				) : <PArt a={PL.fis1} x={PX} y={PY} w={PW} />}
			</div>
			<Overlay>
				<Fade at={c.here + 6} out={c.pinch - 4}><Label x={960} y={PY - 24} at={c.here + 6} text="one bacterium" size={52} color={INK_SOFT} /></Fade>
				{/* DNA loop circled and labelled */}
				<g opacity={1 - prog(f, c.pinch - 6, 12)}>
					<Scribble cx={loop[0]} cy={loop[1]} rx={140} ry={122} at={c.loop} color={AMBER} seed={4} width={7} />
					<Callout from={[loop[0] + 100, loop[1] - 90]} to={[1180, 250]} at={c.loop + 6} text="DNA loop" color={COPY} align="left" size={56} />
				</g>
				{/* dashed cut line */}
				<g opacity={cutOp}>
					<DrawPath d={`M${cutX},${PY - 36} L${cutX},${PY + pH(PL.fis1, PW) + 40}`} at={c.pinch} dur={24} color={SPLIT} width={7} dash="14 12" />
				</g>
				{/* verdict on each half */}
				<Fade at={c.half + 10} out={labelsOut}>
					<Tick x={rightX + 270} y={loop[1] - 150} at={c.half + 12} s={1.5} />
					<Label x={rightX + 120} y={PY + pH(PL.fis1, PW) + 70} at={c.half + 14} text="gets the loop" size={54} color="#2f8a5b" />
				</Fade>
				<Fade at={c.nothing} out={labelsOut}>
					<Cross x={cutX - 70 - 105} y={loop[1]} s={1.8} at={c.nothing + 4} />
					<Label x={cutX - 70 - 105} y={PY + pH(PL.fis1, PW) + 70} at={c.nothing + 8} text="no DNA" size={54} color={SPLIT} />
				</Fade>
				{/* instructions page lifting from the loop */}
				<g opacity={instrP * (1 - prog(f, c.first - 6, 12))} transform={`translate(${rightX + 40},${loop[1] - 150 - instrP * 20})`}>
					<rect x={-34} y={-44} width={68} height={88} rx={8} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					{[-22, -8, 6, 20].map(y => <line key={y} x1={-20} x2={20} y1={y} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />)}
				</g>
				<Fade at={c.instr + 8} out={labelsOut}><Label x={rightX + 40} y={loop[1] - 232} at={c.instr + 8} text="the instructions" size={46} color={INK} /></Fade>
				<Fade at={c.none} out={labelsOut}><Label x={cutX - 70 - 105} y={PY - 10} at={c.none} text="no instructions" size={50} color={SPLIT} /></Fade>
				{/* the copy: a second loop slides out beside the first */}
				<Loop x={loop[0] + 245 * copyP} y={loop[1]} s={1.55} o={copyP} />
				<Fade at={c.two - 4}><Label x={loop[0] + 122} y={PY + pH(PL.fis1, PW) + 70} at={c.two} text="two identical loops" size={54} color={COPY} /></Fade>
			</Overlay>
			<Strip on={[[c.two], [], []]} enter={c.first} />
		</>
	);
};

// ---------- 2b. Share and split ----------
export const SceneShareSplit: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('share-split'), {
		grows: 'grows longer', apart: 'move apart', wall: 'new wall grows', pinch: 'pinches the cell', own: 'its own loop', complete: 'a complete bacterium', binary: 'called binary fission',
		means: 'Binary means two', fission: 'fission means splitting', asexual: "It's asexual", parent: 'one parent', clones: 'clones of the parent',
	});
	const m = pm(PL.fis1, PX, PY, PW);
	const bottom = PY + pH(PL.fis1, PW);
	const first = prog(f, c.grows, 26);
	const copyLoopO = 1 - first;
	const l1 = m(897, 620);
	return (
		<>
			<Heading items={[[0, 'Step 2: share, then step 3: split'], [c.binary, 'Binary fission']]} size={72} />
			<PSeq arts={[PL.fis1, PL.fis2, PL.fis3]} x={PX} y={PY} w={PW} at={[c.grows, c.pinch]} dur={26} />
			<Overlay>
				{/* the copy from the last scene fades as the loops separate */}
				<Loop x={l1[0] + 245} y={l1[1]} s={1.55} o={copyLoopO} />
				<Fade at={c.apart + 4} out={c.wall - 6}>
					<Arrow x1={930} y1={bottom + 44} x2={600} y2={bottom + 44} at={c.apart + 4} color={COPY} width={9} dur={22} head={22} />
					<Arrow x1={990} y1={bottom + 44} x2={1320} y2={bottom + 44} at={c.apart + 4} color={COPY} width={9} dur={22} head={22} />
				</Fade>
				<Fade at={c.wall - 2} out={c.pinch + 14}>
					<Wall x1={PX + (900 - 233) * (PW / 1334)} y1={PY + 26} x2={PX + (900 - 233) * (PW / 1334)} y2={PY + 170} at={c.wall} dur={34} />
					<Wall x1={PX + (900 - 233) * (PW / 1334)} y1={bottom - 26} x2={PX + (900 - 233) * (PW / 1334)} y2={bottom - 170} at={c.wall} dur={34} />
				</Fade>
				<Tick x={577} y={PY - 36} at={c.own} s={1.4} />
				<Tick x={1343} y={PY - 36} at={c.own + 6} s={1.4} />
				<Fade at={c.complete} out={c.binary}>
					<Label x={577} y={bottom + 70} at={c.complete} text="a complete bacterium" size={46} color={INK} />
					<Label x={1343} y={bottom + 70} at={c.complete + 6} text="a complete bacterium" size={46} color={INK} />
				</Fade>
			</Overlay>
			<Pill at={c.means} out={c.clones - 6} x={200} y={776} size={58}>binary = two</Pill>
			<Pill at={c.fission} out={c.clones - 6} x={640} y={776} size={58}>fission = splitting</Pill>
			<Stamp at={c.asexual + 4} x={1260} y={772} text="asexual: no joining" color={AMBER_INK} size={38} />
			<Line at={c.clones} x={200} y={768} w={1000} size={40}>The two new cells are clones of the parent (apart from rare copying errors).</Line>
			<Strip on={[[-40], [c.apart], [c.pinch]]} />
		</>
	);
};
void [AMBER_INK, BLUE, INK, FadeDiv, Fade, Stamp];
