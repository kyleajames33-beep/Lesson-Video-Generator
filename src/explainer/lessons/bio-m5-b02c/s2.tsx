import React from 'react';
import {useCurrentFrame} from 'remotion';
import {scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Body, Card, Clock, Crowd, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Heading, INK, INK_SOFT, Line, Overlay, Pill, prog, S, Scribble, SPLIT, CELL_FILL, CELL_LINE, LOOP, CellDot, Fade, GREEN,
} from './shared';

const fmt = (n: number) => n.toLocaleString('en-AU');
const vis = (f: number, from: number, to?: number, d = 14) => prog(f, from, d) * (to === undefined ? 1 : 1 - prog(f, to, d));

// ---------- 3. How fast? Worked doubling example ----------
export const SceneDoubling: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('doubling'), {
		warm: 'In warm conditions', every: 'every 20 minutes', follow: 'Follow one cell', two: 'there are two', split2: 'Each of those splits', four: 'there are four', eight: 'then eight', sixteen: 'then sixteen', whole: 'whole crowd doubles',
		howmany: 'how many cells after 3 hours', h3: 'Three hours is', min180: ['180 minutes', 1], each: 'Each doubling takes', count: 'we count how many', steps: '20-minute steps', div: '180 divided by', nine: ['nine doublings', 1],
		mult: 'multiplies the crowd', nines: 'nine 2s multiplied', power: '2 to the power 9', five: '512 cells', ten: 'Keep going for 10 hours', thirty: 'thirty doublings', billion: 'about a billion', food: 'only if the food',
		acid: 'acid and other waste', slows: 'growth slows',
	});
	const stageAt = [c.two - 4, c.split2, c.eight - 4, c.sixteen - 4];
	const crowdOut = prog(f, c.h3 - 12, 16);
	const stageNow = stageAt.filter(t => f >= t + 8).length;
	const secsPerStage = ['0 min', '20 min', '40 min', '60 min', '80 min'];
	const deg = stageAt.reduce((sum, t) => sum + 120 * prog(f, t, 22), 0);
	const tickP = stageAt.length ? prog(f, stageAt[Math.max(0, stageNow - 1)] + 8, 10) : 1;
	const tickPop = stageNow === 0 ? 1 : 1 + 0.18 * Math.sin(Math.PI * tickP);

	// working stages
	const s1 = vis(f, c.h3 - 10, c.mult - 8);
	const s2 = vis(f, c.mult - 4, c.ten - 8);
	const s3 = vis(f, c.ten - 4);
	const barP = prog(f, c.count, 14);
	const blocks = Math.max(0, Math.min(9, Math.floor((f - c.steps) / 5) + 1));
	const fiveP = prog(f, c.five - 6, 22);
	const bigN = Math.round(512 * fiveP);
	const spin = prog(f, c.ten, 50);
	const billionP = prog(f, c.billion - 10, 40);
	const billionN = Math.round(512 * Math.pow(1073741824 / 512, billionP));
	// growth curve
	const CV = {x: 1060, y: 480, w: 660, h: 340};
	const pts: [number, number][] = Array.from({length: 41}, (_, i) => {
		const t = i / 40;
		const y = 1 / (1 + Math.exp(-11 * (t - 0.52)));
		return [CV.x + t * CV.w, CV.y + CV.h - y * (CV.h - 30)];
	});
	const curveD = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const twos = Array.from({length: 9}, (_, i) => i);

	return (
		<>
			<Heading items={[[0, 'How fast can one cell become a crowd?']]} size={68} />
			{/* the task, kept on screen */}
			<Card x={96} y={176} w={1180} at={c.warm} pad="14px 26px">
				<Body size={38} weight={700}>Start with <span style={{color: AMBER_INK}}>1 cell</span>. It divides every <span style={{color: AMBER_INK}}>20 min</span>.</Body>
				<Enter at={c.howmany} dy={8}><Body size={38} weight={700} color={SPLIT}>How many cells after 3 hours?</Body></Enter>
			</Card>

			{/* A. one cell becomes a crowd */}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - crowdOut, transform: `translateX(${crowdOut * 160}px) scale(${1 - 0.3 * crowdOut})`, transformOrigin: '800px 600px'}}>
				<Overlay>
					<Crowd cx={520} cy={650} stageAt={stageAt} r={42} sp={116} cols={4} o={prog(f, c.warm + 20, 14)} />
					<Clock x={1130} y={480} r={96} deg={deg} o={prog(f, c.warm + 20, 14)} />
					<text x={1130} y={640} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={INK_SOFT} opacity={prog(f, c.warm + 20, 14)}>{secsPerStage[stageNow]}</text>
					<g transform={`translate(1130,820) scale(${tickPop})`} opacity={prog(f, c.warm + 20, 14)}>
						<text textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 170}} fill={AMBER_INK}>{2 ** stageNow}</text>
					</g>
					<text x={1270} y={800} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={INK_SOFT} opacity={prog(f, c.warm + 20, 14)}>{stageNow === 0 ? 'cell' : 'cells'}</text>
				</Overlay>
				<Pill at={c.whole} x={1380} y={430} size={52}>the whole crowd doubles</Pill>
				<Pill at={c.whole + 14} x={1380} y={520} size={64} color={SPLIT}>x 2 each time</Pill>
			</div>

			{/* B1. givens, the steps and the doubling count */}
			<div style={{position: 'absolute', inset: 0, opacity: s1}}>
				<Card x={96} y={340} w={780} at={c.h3} out={c.mult - 8} pad="16px 28px">
					<Body size={40} weight={600}>Start: 1 cell</Body>
					<Body size={40} weight={600}>Doubling time: <span style={{color: AMBER_INK, fontWeight: 800}}>20 min</span></Body>
					<Enter at={c.min180 - 6} dy={8}><Body size={40} weight={600}>Time: 3 h = <span style={{color: AMBER_INK, fontWeight: 800}}>180 min</span></Body></Enter>
				</Card>
				<Overlay>
					<Scribble cx={457} cy={432} rx={92} ry={30} at={c.each} color={AMBER} seed={5} width={6} />
					{/* the 180 minute bar with nine 20 minute blocks */}
					<g opacity={barP}>
						<text x={1380} y={400} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={INK}>180 min</text>
						<path d="M960,430 L960,448 L1800,448 L1800,430" fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
						<rect x={960} y={470} width={840} height={96} rx={14} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
					</g>
					{twos.map(i => (
						<g key={i} opacity={prog(f, c.steps + i * 5, 8)} transform={`translate(${(1 - prog(f, c.steps + i * 5, 8)) * 0},${0})`}>
							<rect x={966 + i * 93} y={476} width={87} height={84} rx={10} fill="#ffe9b8" stroke={AMBER} strokeWidth={4} />
							<text x={966 + i * 93 + 43.5} y={532} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={AMBER_INK}>20</text>
						</g>
					))}
					<text x={1380} y={640} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}} fill={blocks >= 9 ? AMBER_INK : INK_SOFT} opacity={prog(f, c.steps, 12)}>{blocks} blocks of 20 min</text>
				</Overlay>
				<Card x={96} y={540} w={780} at={c.count} out={c.mult - 8} tint="#fff6e0" pad="14px 28px">
					<Body size={40} weight={700}>doublings = time ÷ doubling time</Body>
				</Card>
				<Enter at={c.div} dy={10} out={c.mult - 8} style={{position: 'absolute', left: 96, top: 690, width: 1000}}>
					<Body size={58} weight={700}>
						180 <span style={{position: 'relative'}}>min<span style={{position: 'absolute', left: 0, right: 0, top: '52%', height: 5, background: SPLIT, transformOrigin: 'left', transform: `scaleX(${prog(f, c.div + 44, 12)})`}} /></span> ÷ 20 <span style={{position: 'relative'}}>min<span style={{position: 'absolute', left: 0, right: 0, top: '52%', height: 5, background: SPLIT, transformOrigin: 'left', transform: `scaleX(${prog(f, c.div + 52, 12)})`}} /></span> = <span style={{color: AMBER_INK, fontSize: 70}}>9 doublings</span>
					</Body>
				</Enter>
			</div>

			{/* B2. each doubling multiplies by 2 */}
			<div style={{position: 'absolute', inset: 0, opacity: s2}}>
				<Line at={c.mult} x={96} y={344} size={32} color={INK_SOFT}>9 doublings (180 min ÷ 20 min)</Line>
				<Card x={96} y={410} w={1100} at={c.mult} tint="#fff6e0" pad="14px 28px">
					<Body size={42} weight={700}>cells = 2 to the power (number of doublings)</Body>
				</Card>
				<div style={{position: 'absolute', left: 96, top: 560, display: 'flex', alignItems: 'flex-end'}}>
					{twos.map(i => {
						const p = prog(f, c.nines + i * 6, 8);
						return (
							<div key={i} style={{width: 118, textAlign: 'center', opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
								<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 84, color: INK, lineHeight: 1}}>{i === 0 ? '2' : <span><span style={{color: INK_SOFT, fontSize: 52}}>x </span>2</span>}</div>
								<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK}}>{i + 1}</div>
							</div>
						);
					})}
				</div>
				<Enter at={c.power} dy={10} style={{position: 'absolute', left: 96, top: 718}}>
					<Body size={84} weight={800}>= 2<sup style={{fontSize: 52}}>9</sup></Body>
				</Enter>
				<div style={{position: 'absolute', left: 420, top: 690, opacity: prog(f, c.five - 6, 10)}}>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 130, color: AMBER_INK}}>= {bigN} cells</span>
				</div>
				<Overlay>
					<DrawPath d={scribbleEllipse(790, 790, 440, 78, 9)} at={c.five + 16} dur={26} color={AMBER} width={8} />
				</Overlay>
			</div>

			{/* B3. ten hours, and what stops the growth */}
			<div style={{position: 'absolute', inset: 0, opacity: s3}}>
				<Line at={c.ten} x={96} y={344} size={32} color={INK_SOFT}>3 h: 512 cells</Line>
				<Overlay>
					<Clock x={240} y={560} r={96} deg={spin * 1440} o={prog(f, c.ten, 12)} />
					<text x={240} y={716} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60}} fill={INK} opacity={prog(f, c.ten + 20, 12)}>10 h</text>
				</Overlay>
				<Pill at={c.thirty} x={420} y={520} size={60}>10 h = 30 doublings</Pill>
				<div style={{position: 'absolute', left: 96, top: 770, opacity: prog(f, c.billion - 10, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 86, color: AMBER_INK, whiteSpace: 'nowrap'}}>
					{billionP < 1 ? fmt(billionN) : 'about 1 billion cells'}
				</div>
				<Card x={1000} y={330} w={800} at={c.food} tint="#fff6e0" pad="12px 26px">
					<Body size={42} weight={800} color={AMBER_INK}>only if the food never runs out</Body>
				</Card>
				<Overlay>
					<g opacity={prog(f, c.acid - 6, 14)}>
						<path d={`M${CV.x},${CV.y} L${CV.x},${CV.y + CV.h} L${CV.x + CV.w},${CV.y + CV.h}`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
						<text x={CV.x + CV.w / 2} y={CV.y + CV.h + 52} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK_SOFT}>time</text>
						<text x={CV.x - 16} y={CV.y + 4} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK_SOFT}>cells</text>
					</g>
					<DrawPath d={curveD} at={c.acid} dur={c.slows - c.acid + 40} color={AMBER_INK} width={9} />
					<Fade at={c.slows + 6}><text x={CV.x + CV.w * 0.72} y={CV.y - 6} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={SPLIT}>growth slows and stops</text></Fade>
					<Fade at={c.acid + 10}><text x={CV.x + CV.w * 0.76} y={CV.y + CV.h - 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={INK_SOFT}>acid and waste build up</text></Fade>
				</Overlay>
			</div>
		</>
	);
};
void [AMBER, INK, CELL_FILL, CELL_LINE, LOOP, CellDot, GREEN];
