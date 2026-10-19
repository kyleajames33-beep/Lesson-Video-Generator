import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText, Enter, Countdown} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Cell, CELL_FILL, CELL_LINE, Chrom, Col, CX, DrawPath, Fibre, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, Kind, lerp, MiniBar, Num, Overlay, PArt, PenTap, Pill, PLUM, PL, pH, Pole, prog, S, Scribble, TEALC, Tick, vis, clamp01, MC, PP, TT, COL, PCell, poleDX,
} from './shared';
import {TrackStrip} from './sE';

const GREY = '#7a8088';

// ---------- 14. Compare ----------
const RY = [335, 440, 545, 650, 755, 860];
const CM = {x: 620, w: 580}, CE = {x: 1230, w: 600};
const Txt: React.FC<{at: number; x: number; y: number; w: number; size?: number; color?: string; weight?: number; children: React.ReactNode}> = ({at, x, y, w, size = 36, color = INK, weight = 700, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, lineHeight: 1.18}}>{children}</div>
	</Enter>
);
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('compare'), {
		mit: 'Mitosis is', one: 'one division', two: ['two cells', 1], par: "parent's chromosomes", ident: 'identical', mei: 'Meiosis is', twoD: 'two divisions', four: 'four cells', half: 'half the number', usual: 'usually different', diff: 'The difference starts', mid: 'at the middle', mOwn: 'each chromosome lines', mSep: 'sister chromatids separate', meiPairs: 'homologous pairs', meiSep: 'the partners separate',
	});
	const label = (i: number, at: number, t: string) => <Txt key={i} at={at} x={96} y={RY[i] - 24} w={500} size={34} color={INK_SOFT} weight={700}>{t}</Txt>;
	const circ = prog(f, c.diff + 10, 26);
	return (
		<>
			<Heading items={[[0, 'Mitosis and meiosis side by side']]} size={60} />
			<Pill at={c.mit} x={CM.x + 150} y={188} size={46}>mitosis</Pill>
			<Pill at={c.mei} x={CE.x + 170} y={188} size={46} color="#5b4d70">meiosis</Pill>
			{label(0, c.mit + 20, 'divisions')}
			{label(1, c.two - 6, 'cells made')}
			{label(2, c.par - 10, 'chromosomes in each')}
			{label(3, c.ident - 12, 'alike or different')}
			{label(4, c.diff + 30, 'what lines up in the middle')}
			{label(5, c.mOwn + 60, 'what separates')}
			<Txt at={c.one} x={CM.x} y={RY[0] - 20} w={CM.w}>1 division</Txt>
			<Txt at={c.two} x={CM.x} y={RY[1] - 20} w={CM.w}>2 cells</Txt>
			<Txt at={c.par} x={CM.x} y={RY[2] - 36} w={CM.w}>same chromosomes as the parent: 4 in each new cell</Txt>
			<Txt at={c.ident} x={CM.x} y={RY[3] - 20} w={CM.w}>identical (barring errors)</Txt>
			<Txt at={c.mOwn} x={CM.x} y={RY[4] - 36} w={430} size={32}>each chromosome on its own</Txt>
			<Txt at={c.mSep} x={CM.x} y={RY[5] - 20} w={CM.w}>sister chromatids</Txt>
			<Txt at={c.twoD} x={CE.x} y={RY[0] - 20} w={CE.w}>2 divisions, after 1 copy</Txt>
			<Txt at={c.four} x={CE.x} y={RY[1] - 20} w={CE.w}>4 cells</Txt>
			<Txt at={c.half} x={CE.x} y={RY[2] - 36} w={CE.w}>half the number: 2 in each of four cells</Txt>
			<Txt at={c.usual} x={CE.x} y={RY[3] - 38} w={CE.w}>usually different</Txt>
			<Txt at={c.usual + 14} x={CE.x} y={RY[3] + 6} w={CE.w} size={26} color={INK_SOFT} weight={600}><span style={{whiteSpace: 'pre'}}>{'A B D   ·   A b D   ·   a B d   ·   a b d'}</span></Txt>
			<Txt at={c.meiPairs} x={CE.x} y={RY[4] - 36} w={440} size={32}>homologous pairs, side by side</Txt>
			<Txt at={c.meiSep} x={CE.x} y={RY[5] - 40} w={CE.w} size={30}>first, homologous partners; second, sister chromatids</Txt>
			<Overlay>
				{/* tiny pictures of what lines up */}
				<g opacity={prog(f, c.mOwn + 20, 14)}>
					{[0, 1, 2, 3].map(i => <Chrom key={i} x={1120} y={RY[4] + (i - 1.5) * 25} kind="S" color={i % 2 ? TEALC : PLUM} dup={1} coil={1} s={0.24} />)}
				</g>
				<g opacity={prog(f, c.meiPairs + 20, 14)}>
					<Chrom x={1730} y={RY[4] - 22} kind="L" color={PLUM} dup={1} coil={1} s={0.3} />
					<Chrom x={1776} y={RY[4] - 22} kind="L" color={TEALC} dup={1} coil={1} s={0.3} />
					<Chrom x={1730} y={RY[4] + 28} kind="S" color={PLUM} dup={1} coil={1} s={0.3} />
					<Chrom x={1776} y={RY[4] + 28} kind="S" color={TEALC} dup={1} coil={1} s={0.3} />
				</g>
				<line x1={96} x2={1830} y1={RY[0] - 54} y2={RY[0] - 54} stroke="#d8cdb6" strokeWidth={3} strokeDasharray="3 12" strokeLinecap="round" />
				<rect x={84} y={RY[4] - 62} width={1760} height={124} rx={40} fill="none" stroke={AMBER} strokeWidth={7} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - circ} />
			</Overlay>
			<Pill at={c.mid} x={96} y={176} size={32}>difference starts at the middle</Pill>
		</>
	);
};

// ---------- 15. Attempt ----------
const FR = {y: 250, h: 690, x: [96, 900], w: [780, 924]};
const Frame: React.FC<{i: number; at: number; title: string; badge: string}> = ({i, at, title, badge}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: FR.x[i], top: FR.y, width: FR.w[i], height: FR.h, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '14px 22px 0'}}>
				<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{badge}</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{title}</div>
			</div>
		</div>
	);
};
const Demand: React.FC<{x: number; y: number; w: number; at: number; children: React.ReactNode}> = ({x, y, w, at, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{borderLeft: `8px solid ${AMBER}`, paddingLeft: 18, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, lineHeight: 1.2, color: AMBER_INK}}>{children}</div>
	</Enter>
);
const Note: React.FC<{x: number; y: number; w: number; at: number; size?: number; color?: string; children: React.ReactNode}> = ({x, y, w, at, size = 28, color = INK, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color, lineHeight: 1.22}}>{children}</div>
	</Enter>
);
const AnswerBox: React.FC<{x: number; y: number; w: number; at: number; label: string}> = ({x, y, w, at, label}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'flex', alignItems: 'center', gap: 12, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: INK_SOFT}}>
			<span>{label}</span><span style={{flex: 1, height: 46, border: `3px dashed ${GREY}`, borderRadius: 10}} />
		</div>
	</Enter>
);

/** Three homologous pairs of X-shaped chromosomes lined up across the middle (no labels, no stage word). */
const PAIR_KINDS: Kind[] = ['L', 'M', 'S'];
export const SixX: React.FC<{cx: number; cy: number; s: number; sp: number; dx?: number; split?: number; sepPartners?: number; hi?: number; poles?: boolean; fib?: number; o?: number; pole?: number}> = ({cx, cy, s, sp, dx = 40, sepPartners = 0, hi = 0, poles = true, fib = 1, o = 1, pole}) => {
	const pd = pole ?? 340 * s;
	return (
	<g opacity={o}>
		{PAIR_KINDS.map((k, i) => {
			const y = cy + (i - 1) * sp;
			const xp = cx - dx - sepPartners, xt = cx + dx + sepPartners;
			return (
				<g key={i}>
					{poles && sepPartners < 1 ? <><Fibre x1={cx - pd} y1={cy} x2={xp - 3} y2={y} p={fib} /><Fibre x1={cx + pd} y1={cy} x2={xt + 3} y2={y} p={fib} /></> : null}
					<Chrom x={xp} y={y} kind={k} color={PLUM} dup={1} coil={1} s={s} hiA={hi} hiB={hi} />
					<Chrom x={xt} y={y} kind={k} color={TEALC} dup={1} coil={1} s={s} hiA={hi} hiB={hi} />
				</g>
			);
		})}
	</g>
	);
};

export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		two: 'Two questions', first: 'the first about', pea: 'pea plant', second: 'the second about', cell: 'a cell that', div: 'through a division', pause: 'Pause here',
	});
	const hold = scene.responseHold!;
	const X1 = FR.x[0], X2 = FR.x[1], Y = FR.y;
	const cc: [number, number] = [X2 + 300, Y + 380];
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: two questions" at={c.two} size={76} cps={30} /></div>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, lineHeight: 1}}>Pause here to answer.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1560} y={130} r={44} /></Overlay>
			<Frame i={0} at={c.first - 6} title="A pea plant" badge="1" />
			<Frame i={1} at={c.second - 6} title="A cell making gametes" badge="2" />
			{/* 1: the pea plant */}
			<div style={{opacity: prog(f, c.pea, 16)}}><PArt a={PL.pod} x={X1 + 506} y={Y + 96} w={250} /></div>
			<Overlay>
				<g opacity={prog(f, c.pea + 10, 14)}>
					<Cell cx={X1 + 630} cy={Y + 250} rx={96} ry={72} nuc={1} />
				</g>
			</Overlay>
			<Note x={X1 + 30} y={Y + 92} w={470} at={c.pea} size={26}>A pea plant body cell has 14 chromosomes, in 7 homologous pairs. Assume no crossing over. A gamete of this plant joins a gamete from another pea plant of the same kind. A combination means which chromosome of each pair a gamete carries.</Note>
			<Demand x={X1 + 30} y={Y + 392} w={720} at={c.pea + 20}>1. How many chromosomes are in each gamete?</Demand>
			<Demand x={X1 + 30} y={Y + 448} w={720} at={c.pea + 30}>2. How many different combinations can its gametes carry?</Demand>
			<Demand x={X1 + 30} y={Y + 534} w={720} at={c.pea + 40}>3. How many chromosomes are in the fertilised egg?</Demand>
			<AnswerBox x={X1 + 30} y={Y + 616} w={220} at={c.pea + 50} label="1" />
			<AnswerBox x={X1 + 290} y={Y + 616} w={220} at={c.pea + 56} label="2" />
			<AnswerBox x={X1 + 550} y={Y + 616} w={200} at={c.pea + 62} label="3" />
			{/* 2: a cell part-way through a division */}
			<Overlay>
				<g opacity={prog(f, c.cell, 14)}>
					<PCell cx={cc[0]} cy={cc[1]} rx={265} ry={190} spindle={1} />
					<SixX cx={cc[0]} cy={cc[1] - 10} s={0.5} sp={92} dx={40} pole={poleDX(265)} />
				</g>
			</Overlay>
			<Note x={X2 + 30} y={Y + 92} w={860} at={c.cell} size={26}>A cell of another species that is making gametes is part-way through a division. Assume no mistakes.</Note>
			<Demand x={X2 + 590} y={Y + 270} w={300} at={c.div}>Name the division and stage.</Demand>
			<Demand x={X2 + 590} y={Y + 380} w={300} at={c.div + 12}>How many chromosomes will each cell hold when this division is finished?</Demand>
			<AnswerBox x={X2 + 590} y={Y + 560} w={300} at={c.div + 24} label="division, stage" />
			<AnswerBox x={X2 + 590} y={Y + 626} w={300} at={c.div + 30} label="chromosomes" />
		</>
	);
};

// ---------- feedback shared ----------
const Wrong: React.FC<{at: number; x: number; y: number; w?: number; text: string; why: string}> = ({at, x, y, w = 860, text, why}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const strike = prog(f, at + 14, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: p, transform: `translateY(${(1 - p) * 14}px)`, display: 'flex', alignItems: 'center', gap: 18}}>
			<div style={{flex: 'none', position: 'relative', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT, background: '#fffdf8', border: '3px solid #e3d8c3', borderRadius: 999, padding: '0 22px 4px', whiteSpace: 'nowrap'}}>
				{text}
				<span style={{position: 'absolute', left: 8, right: 8, top: '54%', height: 4, background: GREY, opacity: 0.55, borderRadius: 3, transform: `scaleX(${strike})`, transformOrigin: 'left'}} />
			</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: INK_SOFT, opacity: prog(f, at + 22, 12), lineHeight: 1.15}}>{why}</div>
		</div>
	);
};

// ---------- 16. Feedback, item one (take02, 16 Oct: brief, one crossed mistake) ----------
const PX = (i: number) => 150 + i * 118;
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-one'), {
		one: 'One', seven: '7 chromosomes', each: 'one from each', either: 'either partner', mult: 'choices multiply', pow: '2 to the power', is128: 'is 128', egg: 'fertilised egg', fourteen: ['14', 1], plus: 'because 7', w1: 'If you said 14', w2b: 'added up',
	});
	const flipAt = (i: number) => c.either + i * 7;
	const choose: Col[] = ['P', 'T', 'T', 'P', 'T', 'P', 'P'];
	const doub = [2, 4, 8, 16, 32, 64, 128];
	const joinT = prog(f, c.plus, 40);
	return (
		<>
			<Heading items={[[0, 'Question 1: the pea plant']]} size={60} />
			<Overlay>
				{/* seven pairs with a coin each */}
				{choose.map((ch, i) => (
					<g key={i}>
						<MiniBar x={PX(i) - 14} y={320} h={74 - (i % 3) * 12} col="P" w={12} o={prog(f, c.one, 14)} />
						<MiniBar x={PX(i) + 14} y={320} h={74 - (i % 3) * 12} col="T" w={12} o={prog(f, c.one, 14)} />
						<Coin2 x={PX(i)} y={236} from={flipAt(i)} to={flipAt(i) + 26} face={ch} />
					</g>
				))}
				{/* one from each pair into the gamete */}
				<g opacity={prog(f, c.seven - 10, 14)}>
					<ellipse cx={PX(3)} cy={470} rx={470} ry={62} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
				</g>
				{choose.map((ch, i) => {
					const t = prog(f, c.each + i * 4, 24);
					return t > 0 ? <MiniBar key={i} x={lerp(PX(i) + (ch === 'P' ? -14 : 14), PX(i), t)} y={lerp(320, 470, t)} h={lerp(74 - (i % 3) * 12, 60 - (i % 3) * 8, t)} col={ch} w={12} /> : null;
				})}
				{/* two gametes of 7 join into 14 */}
				<g opacity={prog(f, c.egg, 14)}>
					<Cell cx={lerp(1400, 1560, joinT)} cy={420} rx={110} ry={86} o={1 - joinT} />
					<Cell cx={lerp(1720, 1560, joinT)} cy={420} rx={110} ry={86} o={1 - joinT} />
					{[0, 1, 2, 3, 4, 5, 6].map(i => <MiniBar key={'g' + i} x={lerp(1400, 1560, joinT) + (i - 3) * 22} y={420} h={36} w={8} col="P" o={1 - joinT} />)}
					{[0, 1, 2, 3, 4, 5, 6].map(i => <MiniBar key={'h' + i} x={lerp(1720, 1560, joinT) + (i - 3) * 22} y={420} h={36} w={8} col="T" o={1 - joinT} />)}
					<g opacity={joinT}>
						<Cell cx={1560} cy={420} rx={170} ry={110} />
						{Array.from({length: 7}, (_, i) => <g key={i}><MiniBar x={1560 + (i - 3) * 40 - 8} y={420} h={46} w={9} col="P" /><MiniBar x={1560 + (i - 3) * 40 + 8} y={420} h={46} w={9} col="T" /></g>)}
					</g>
				</g>
				<Tick x={1052} y={380} at={c.seven + 40} s={1.1} />
				<Tick x={1130} y={612} at={c.is128 + 14} s={1.1} />
				<Tick x={1860} y={570} at={c.plus + 30} s={1} />
			</Overlay>
			<Num at={c.seven} x={960} y={330} text="7" size={110} color={AMBER_INK} w={160} />
			<Hand at={c.seven + 10} x={1100} y={350} size={44} w={380}>in each gamete</Hand>
			{doub.map((v, i) => (
				<Enter key={v} at={c.pow + 6 + i * 6} style={{position: 'absolute', left: 150 + i * 110, top: 600}}>
					<div style={{width: 94, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: i === 6 ? 40 : 38, color: i === 6 ? AMBER_INK : INK, background: '#fffdf8', border: `3px solid ${i === 6 ? AMBER : '#d8cdb6'}`, borderRadius: 14, padding: '6px 0'}}>{v}</div>
				</Enter>
			))}
			<Hand at={c.mult} x={150} y={545} size={40} w={800} color={AMBER_INK}>choices multiply: doubling for each pair</Hand>
			<Hand at={c.is128} x={940} y={580} size={92}>128</Hand>
			<Hand at={c.fourteen} x={1300} y={540} size={64} w={520}><span style={{display: 'block', textAlign: 'center'}}>7 + 7 = 14</span></Hand>
			<Wrong at={c.w1} x={96} y={720} text="14 combinations" why="added 2 seven times: the choices multiply" w={1300} />
			<GreyTag at={c.is128 + 40} x={1300} y={700} text="with crossing over there would be even more" size={26} />
		</>
	);
};
const Coin2: React.FC<{x: number; y: number; from: number; to: number; face: Col}> = ({x, y, from, to, face}) => {
	const f = useCurrentFrame();
	const t = clamp01((f - from) / Math.max(1, to - from));
	const ang = t * 2 * Math.PI * 2;
	const sy = Math.abs(Math.cos(ang));
	const showing: Col = t >= 1 ? face : (Math.floor((ang + Math.PI / 2) / Math.PI) % 2 === 0 ? face : (face === 'P' ? 'T' : 'P'));
	const lift = Math.sin(t * Math.PI) * 18;
	return <ellipse cx={x} cy={y - lift} rx={20} ry={Math.max(2, 20 * sy)} fill={showing === 'P' ? PLUM : TEALC} stroke={INK} strokeWidth={3} opacity={clamp01((f - from + 30) / 8)} />;
};

// ---------- 17. Feedback, item two (take02, 16 Oct: brief, one crossed mistake) ----------
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-two'), {
		lined: 'lined up in homologous', nosplit: 'no centromeres split', meta: 'metaphase of meiosis', separates: 'separates the partners', three: 'will hold 3', w1: 'If you said 6', halves: 'meiosis one halves it',
	});
	const cx = 640, cy = 530;
	const lit = vis(f, c.lined, c.nosplit - 6, 14);
	const apart = prog(f, c.separates, 56);
	const penPts: [number, number][] = [];
	[cy - 150, cy, cy + 156].forEach(yy => { penPts.push([cx - 44, yy], [cx + 44, yy]); });
	return (
		<>
			<Heading items={[[0, 'Question 2: which division?']]} size={60} />
			<Overlay>
				<PCell cx={cx} cy={cy} rx={380} ry={265} spindle={1 - apart} />
				<SixXApart cx={cx} cy={cy} apart={apart} hi={lit} showFib={apart < 0.02} />
				<g opacity={prog(f, c.nosplit, 14) * (1 - apart)}>
					<Scribble cx={cx - 44} cy={cy - 150} rx={36} ry={36} at={c.nosplit + 10} color={AMBER_INK} seed={3} />
					<Scribble cx={cx + 44} cy={cy - 150} rx={36} ry={36} at={c.nosplit + 24} color={AMBER_INK} seed={7} />
				</g>
			</Overlay>
			<Hand at={c.meta} x={cx - 330} y={cy - 345} size={50} w={680} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>pairs lined up: meiosis I</span></Hand>
			<Hand at={c.lined + 6} out={c.three + 16} x={cx - 300} y={cy + 275} size={46} w={600} color={INK}><span style={{display: 'block', textAlign: 'center'}}>homologous pairs, side by side</span></Hand>
			<Hand at={c.three + 30} x={cx - 480} y={cy - 40} size={60} w={80} color={PLUM}>3</Hand>
			<Hand at={c.three + 36} x={cx + 400} y={cy + 30} size={60} w={80} color={TEALC}>3</Hand>
			<Hand at={c.three + 24} x={cx - 300} y={cy + 275} size={46} w={600} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>3 + 3: each cell holds 3 chromosomes</span></Hand>
			<Hand at={c.nosplit + 6} x={1100} y={250} size={42} w={760} color={INK}>no centromeres split: still X shapes</Hand>
			<Hand at={c.separates} x={1100} y={330} size={42} w={760} color={INK}>this division separates the partners</Hand>
			<Wrong at={c.w1} x={1100} y={450} text="6 in each cell" why="kept the number, but meiosis I halves it" w={760} />
		</>
	);
};

const SixXApart: React.FC<{cx: number; cy: number; apart: number; hi: number; showFib: boolean}> = ({cx, cy, apart, hi, showFib}) => {
	const kinds: Kind[] = ['L', 'M', 'S'];
	return (
		<g>
			{kinds.map((k, i) => {
				const y = cy + (i - 1) * 150 + (k === 'S' ? 6 : 0);
				const yEnd = y;
				const xp = lerp(cx - 44, cx - 190, apart), xt = lerp(cx + 44, cx + 190, apart);
				const yy = lerp(y, yEnd, apart);
				return (
					<g key={i}>
						{showFib ? <><Fibre x1={cx - poleDX(380)} y1={cy} x2={xp - 3} y2={y} p={1} /><Fibre x1={cx + poleDX(380)} y1={cy} x2={xt + 3} y2={y} p={1} /></> : null}
						<Chrom x={xp} y={yy} kind={k} color={PLUM} dup={1} coil={1} s={1.05} hiA={hi} hiB={hi} />
						<Chrom x={xt} y={yy} kind={k} color={TEALC} dup={1} coil={1} s={1.05} hiA={hi} hiB={hi} />
					</g>
				);
			})}
		</g>
	);
};
