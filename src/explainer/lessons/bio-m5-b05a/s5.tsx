import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, anaOffsets, arcPath, CellBody, CELL_FILL, CELL_LINE, CH, Chrom, clamp01, CX, CY, DrawPath, Envelope, Fibre, FONT_DISPLAY, FONT_HAND, GreyCross, GreyTag, Hand, Heading,
	INK, INK_SOFT, Kind, lerp, META_Y, NUC_FILL, NUC_LINE, onCircle, Overlay, PenTap, PlateArt, PLATES, plateH, Pill, Pole, prog, PLUM, S, Scribble, SplitCells, StageStrip, TEALC, Tick, vis, Chip, Bracket, Arrow, PCell, poleDX,
} from './shared';
import {HAVE} from './assets';
import {SvgPlate} from './shared';

const GREY = '#7a8088';

// ---------- 6c. What mitosis is used for ----------
const MiniDivide: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 34);
	const d = lerp(0, 46, p);
	return (
		<g opacity={prog(f, at - 8, 10)}>
			<SplitCells cx={x} cy={y} rx={60} ry={44} d={d} sw={4} />
			<circle cx={x - d * 0.6} cy={y} r={10} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} opacity={0.9} />
			<circle cx={x + d * 0.6} cy={y} r={10} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} opacity={0.9} />
		</g>
	);
};
export const SceneUses: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('uses'), {
		because: 'Because every new cell', organism: 'an organism', grows: 'grows from one cell', graze: 'a graze heals', worn: 'worn-out skin', gut: 'gut lining', also: 'It is also how yeast', amoeba: 'an amoeba', ident: 'identical offspring',
		bact: 'Bacteria have no nucleus', fission: 'fission', without: 'without mitosis',
	});
	const tile = (at: number) => prog(f, at - 6, 18);
	const surf = (k: number) => {
		const t = prog(f, c.worn + k * 6, 60);
		return t;
	};
	return (
		<>
			<Heading items={[[0, 'What mitosis is used for']]} size={64} />
			<Hand at={c.because} x={96} y={186} size={46} color={INK_SOFT}>every new cell gets the same chromosomes</Hand>
			{/* growth */}
			<div style={{opacity: tile(c.organism), position: 'absolute', inset: 0}}>
				<PlateArt a={PLATES.embryo} x={170} y={250} w={300} />
				<Overlay><MiniDivide x={320} y={690} at={c.grows + 20} /></Overlay>
				<Hand at={c.grows + 6} x={220} y={560} size={60} color={AMBER_INK}>growth</Hand>
			</div>
			{/* repair */}
			<div style={{opacity: tile(c.graze), position: 'absolute', inset: 0}}>
				<PlateArt a={PLATES.skin} x={600} y={290} w={440} />
				<Overlay><MiniDivide x={820} y={690} at={c.graze + 20} /></Overlay>
				<Hand at={c.graze + 6} x={760} y={560} size={60} color={AMBER_INK}>repair</Hand>
			</div>
			{/* replacement: worn-out skin sheds, new cells rise */}
			<div style={{opacity: tile(c.worn), position: 'absolute', inset: 0}}>
				<Overlay>
					{HAVE.has(PLATES.epi.src) ? (
						<g transform={`translate(0,${(1 - prog(f, c.worn - 4, 24)) * 16})`}>
							<SvgPlate a={PLATES.epi} cx={1270} cy={410} w={340} o={prog(f, c.worn - 4, 24)} />
							<Arrow x1={1180} y1={470} x2={1180} y2={400} at={c.gut} color={AMBER_INK} width={7} />
						</g>
					) : (
						<>
							<rect x={1120} y={420} width={300} height={110} rx={14} fill="#f4d7bd" stroke="#c58a62" strokeWidth={4} />
							{[0, 1, 2, 3, 4].map(k => {
								const t = surf(k);
								return (
									<g key={'old' + k} opacity={1 - t} transform={`translate(${1150 + k * 60},${390 - 70 * t}) rotate(${t * 18})`}>
										<ellipse rx={27} ry={20} fill="#e9c9ad" stroke="#c58a62" strokeWidth={3.5} />
										<circle r={6} fill="#a98bd1" />
									</g>
								);
							})}
							{[0, 1, 2, 3, 4].map(k => {
								const t = surf(k);
								return (
									<g key={'new' + k} opacity={0.4 + 0.6 * t} transform={`translate(${1150 + k * 60},${490 - 66 * t})`}>
										<ellipse rx={27} ry={20} fill="#e2d9ee" stroke="#8e7aa9" strokeWidth={3.5} />
										<circle r={6} fill="#9b7cc4" />
									</g>
								);
							})}
						</>
					)}
					<MiniDivide x={1270} y={690} at={c.worn + 24} />
				</Overlay>
				<Hand at={c.worn + 6} x={1130} y={560} size={60} color={AMBER_INK}>replacement</Hand>
			</div>
			{/* identical offspring */}
			<div style={{opacity: tile(c.also), position: 'absolute', inset: 0}}>
				<PlateArt a={PLATES.yeast} x={1450} y={270} w={125} style={{opacity: prog(f, c.also + 20, 14)}} />
				<PlateArt a={PLATES.amoeba} x={1585} y={306} w={170} style={{opacity: prog(f, c.amoeba, 14)}} />
				<PlateArt a={PLATES.cutting} x={1760} y={262} w={78} style={{opacity: prog(f, c.ident, 14)}} />
				<Hand at={c.also + 6} x={1500} y={470} size={52} w={340} color={AMBER_INK}>making identical offspring</Hand>
				<Overlay><MiniDivide x={1660} y={690} at={c.also + 30} /></Overlay>
				<GreyTag at={c.ident + 4} x={1500} y={750} text="nucleus divides by mitosis" size={28} />
			</div>
			{/* bacteria: no nucleus, no mitosis */}
			<div style={{opacity: prog(f, c.bact - 6, 16), position: 'absolute', inset: 0}}>
				<PlateArt a={PLATES.bacterium} x={300} y={790} w={300} />
				<Hand at={c.bact + 20} x={640} y={800} size={52} color={INK_SOFT}>bacteria: no nucleus</Hand>
				<GreyTag at={c.fission} x={640} y={872} text="fission, no mitosis" size={38} />
			</div>
		</>
	);
};

// ---------- 7. Attempt ----------
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
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		two: 'Two questions', one: 'One', fly: 'a fruit fly', eight: '8 chromosomes', copied: 'just been copied', started: 'has not started', how: 'How many chromosomes and', each: 'does each new cell', q2: 'this body cell', stage: 'Name the stage', count: 'count the chromosomes', assume: 'Assume no mistakes', pause: 'Pause here',
	});
	const hold = scene.responseHold!;
	const X1 = FR.x[0], X2 = FR.x[1], Y = FR.y;
	const six: {kind: Kind; color: string}[] = [{kind: 'L', color: PLUM}, {kind: 'S', color: TEALC}, {kind: 'M', color: PLUM}, {kind: 'L', color: TEALC}, {kind: 'S', color: PLUM}, {kind: 'M', color: TEALC}];
	const cc: [number, number] = [X2 + 400, Y + 290];
	const sp = 62;
	const yAt = (i: number) => cc[1] + (i - 2.5) * sp;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: two questions" at={c.two} size={76} cps={30} /></div>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, lineHeight: 1}}>Pause here to answer.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1560} y={130} r={44} /></Overlay>
			<Frame i={0} at={c.one - 6} title="A fruit fly body cell" badge="1" />
			<Frame i={1} at={c.q2 - 6} title="A body cell in mitosis" badge="2" />
			{/* 1: the fruit fly cell, counted in the answer */}
			<Overlay>
				<g opacity={prog(f, c.fly, 14)}>
					<PCell cx={X1 + 690} cy={Y + 175} rx={72} ry={56} />
					<circle cx={X1 + 690} cy={Y + 175} r={32} fill={NUC_FILL} stroke={NUC_LINE} strokeWidth={4} strokeDasharray="14 7" />
				</g>
			</Overlay>
			<Note x={X1 + 30} y={Y + 92} w={500} at={c.fly} size={28}>A fruit fly body cell has 8 chromosomes, in 2 sets.</Note>
			<Note x={X1 + 30} y={Y + 190} w={530} at={c.copied} size={28}>Its DNA has just been copied. Mitosis has not started. Assume no mistakes. The cell divides once by mitosis.</Note>
			<Demand x={X1 + 30} y={Y + 306} w={720} at={c.how}>1. How many chromosomes and how many chromatids does the cell hold now?</Demand>
			<Demand x={X1 + 30} y={Y + 410} w={720} at={c.each}>2. After mitosis, how many chromosomes are in each new cell?</Demand>
			<AnswerBox x={X1 + 30} y={Y + 520} w={340} at={c.how + 30} label="chromosomes now" />
			<AnswerBox x={X1 + 400} y={Y + 520} w={340} at={c.how + 36} label="chromatids now" />
			<AnswerBox x={X1 + 30} y={Y + 590} w={420} at={c.each + 10} label="in each new cell" />
			{/* 2: six X-shaped chromosomes lined up */}
			<Overlay>
				<g opacity={prog(f, c.q2, 14)}>
					<PCell cx={cc[0]} cy={cc[1]} rx={300} ry={200} spindle={1} />
					{six.map((s, i) => (
						<g key={i}>
							<Fibre x1={cc[0] - poleDX(300)} y1={cc[1]} x2={cc[0] - 4} y2={yAt(i)} />
							<Fibre x1={cc[0] + poleDX(300)} y1={cc[1]} x2={cc[0] + 4} y2={yAt(i)} />
						</g>
					))}
					{six.map((s, i) => <Chrom key={i} x={cc[0]} y={yAt(i)} kind={s.kind} color={s.color} dup={1} coil={1} s={0.56} />)}
				</g>
			</Overlay>
			<Note x={X2 + 30} y={Y + 500} w={860} at={c.q2} size={28}>This body cell is part-way through mitosis. Assume no mistakes.</Note>
			<Demand x={X2 + 30} y={Y + 556} w={540} at={c.stage}>Name the stage.</Demand>
			<Demand x={X2 + 30} y={Y + 612} w={560} at={c.count}>How many chromosomes does the cell hold?</Demand>
			<AnswerBox x={X2 + 640} y={Y + 556} w={250} at={c.stage + 20} label="stage" />
			<AnswerBox x={X2 + 590} y={Y + 616} w={300} at={c.count + 20} label="chromosomes" />
		</>
	);
};

// ---------- shared pieces for the two feedback scenes ----------
const Wrong: React.FC<{at: number; x: number; y: number; w?: number; text: string; why: string}> = ({at, x, y, w = 860, text, why}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const strike = prog(f, at + 14, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: p, transform: `translateY(${(1 - p) * 14}px)`, display: 'flex', alignItems: 'baseline', gap: 18}}>
			<span style={{position: 'relative', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK_SOFT, background: '#fffdf8', border: '3px solid #e3d8c3', borderRadius: 999, padding: '0 22px 4px', whiteSpace: 'nowrap'}}>
				{text}
				<span style={{position: 'absolute', left: 8, right: 8, top: '54%', height: 5, background: GREY, borderRadius: 3, transform: `scaleX(${strike})`, transformOrigin: 'left'}} />
			</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT, opacity: prog(f, at + 22, 12)}}>{why}</span>
		</div>
	);
};
const Right: React.FC<{at: number; x: number; y: number; w?: number; children: React.ReactNode}> = ({at, x, y, w = 860, children}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 14, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: AMBER_INK}}>
				<svg width={56} height={46} viewBox="0 0 56 46"><DrawPath d="M6,24 L22,40 L50,6" at={at + 8} dur={12} color="#2f8a5b" width={8} /></svg>
				<span>{children}</span>
			</div>
			<div style={{display: 'none'}}>{f}</div>
		</Enter>
	);
};
/** Small cycle ring with the dot resting on S phase. */
const MiniRing: React.FC<{x: number; y: number; r?: number; at: number}> = ({x, y, r = 64, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	const dot = onCircle(x, y, r, 162);
	return (
		<g opacity={p}>
			<path d={arcPath(x, y, r, 0, 324)} fill="none" stroke="#d8cdb6" strokeWidth={22} />
			<path d={arcPath(x, y, r, 324, 358)} fill="none" stroke="#2a9d8f" strokeWidth={22} />
			<path d={arcPath(x, y, r, 358, 360)} fill="none" stroke="#c4432f" strokeWidth={22} />
			<path d={arcPath(x, y, r, 126, 198)} fill="none" stroke="#e08a1e" strokeWidth={22} />
			<circle cx={dot[0]} cy={dot[1]} r={13} fill={AMBER} stroke={AMBER_INK} strokeWidth={4} />
		</g>
	);
};

// ---------- 8a. Feedback, item one (take02, 16 Oct: brief, one crossed mistake) ----------
const KINDS8: Kind[] = ['L', 'M', 'S', 'S'];
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-one'), {
		one: 'One', copying: 'After copying', eight: '8 chromosomes', joined: 'joined at', sixteen: '16 chromatids', mitosis: 'After mitosis', each8: 'each new cell has', parent: 'the same as the parent',
		w4: 'If you said 4', halved: 'you halved the number', first: 'doubled the DNA',
	});
	const MC: [number, number] = [600, 585];
	const dup = prog(f, c.copying + 4, 36);
	const coil = prog(f, c.mitosis + 6, 28);
	const e = prog(f, c.each8 - 6, 64);
	const d = 250 * prog(f, c.each8 - 6, 64);
	const slots: {x: number; y: number; kind: Kind; color: string; i: number}[] = [];
	const K1 = 0.7;
	[0, 1].forEach(row => [0, 1, 2, 3].forEach(col => slots.push({x: MC[0] + (col - 1.5) * 80, y: MC[1] + (row - 0.5) * 150, kind: KINDS8[col], color: row ? TEALC : PLUM, i: row * 4 + col})));
	const bend = prog(f, c.each8 - 6, 30);
	const nums = prog(f, c.each8 + 12, 12);
	const cell = d < 1 ? <CellBody cx={MC[0]} cy={MC[1]} rx={330} ry={270} /> : <SplitCells cx={MC[0]} cy={MC[1]} rx={330} ry={270} d={d} />;
	return (
		<>
			<Heading items={[[0, 'Question 1: the counts']]} size={64} />
			<div style={{position: 'absolute', left: 300, top: 200, opacity: prog(f, c.eight, 10) * (1 - prog(f, c.mitosis, 12))}}>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: AMBER_INK}}>chromosomes: 8</span>
			</div>
			<div style={{position: 'absolute', left: 660, top: 200, opacity: prog(f, c.sixteen, 10) * (1 - prog(f, c.mitosis, 12))}}>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: AMBER_INK}}>chromatids: {Math.min(16, Math.round(16 * prog(f, c.sixteen, 20)))}</span>
			</div>
			<Overlay>
				{cell}
				{d < 1 ? <Envelope cx={MC[0]} cy={MC[1]} r={205} p={prog(f, c.mitosis + 10, 20)} /> : null}
				{slots.map(s => {
					const xa = lerp(0, -250 / K1, e), xb = lerp(0, 250 / K1, e);
					return <Chrom key={s.i} x={s.x} y={s.y} kind={s.kind} color={s.color} dup={dup} coil={coil} s={K1} xa={dup > 0 && coil > 0 && e > 0 ? xa : undefined} xb={dup > 0 && coil > 0 && e > 0 ? xb : undefined} sep={e > 0 ? Math.min(1, e * 25) : undefined} bend={bend} />;
				})}
				<MiniRing x={170} y={236} r={44} at={c.copying} />
				<g opacity={nums}>
					<Tick x={MC[0] - 250 + 70} y={MC[1] + 205} at={c.parent} s={0.9} />
					<Tick x={MC[0] + 250 + 70} y={MC[1] + 205} at={c.parent + 6} s={0.9} />
				</g>
			</Overlay>
			<Hand at={c.copying + 20} x={96} y={296} size={32} color={INK_SOFT} w={250}>S phase: copying, before mitosis</Hand>
			<Hand at={c.each8 + 14} x={MC[0] - 250 - 10} y={MC[1] + 180} size={64} color={AMBER_INK}>8</Hand>
			<Hand at={c.each8 + 20} x={MC[0] + 250 - 10} y={MC[1] + 180} size={64} color={AMBER_INK}>8</Hand>
			<Hand at={c.first} x={640} y={868} size={52} color={AMBER_INK}>doubled first, then shared back</Hand>
			{/* the answers and the likely wrong ideas */}
			<Right at={c.eight + 4} x={1010} y={220}>now: 8 chromosomes</Right>
			<Hand at={c.joined} out={c.mitosis} x={1080} y={300} size={36} color={INK_SOFT} w={760}>the copies stay joined at their centromeres</Hand>
			<Right at={c.sixteen + 4} x={1010} y={360}>and 16 chromatids</Right>
			<Right at={c.each8 + 6} x={1010} y={460}>each new cell: 8, same as the parent</Right>
			<Wrong at={c.w4} x={1010} y={590} text="4 in each new cell" why="halved, but the DNA doubled first" />
		</>
	);
};

// ---------- 8b. Feedback, item two (take02, 16 Oct: brief, one crossed mistake) ----------
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-two'), {
		lined: 'lined up across the middle', fibres: 'fibres attached', meta: 'this is metaphase', count: 'Count the centromeres', six: '6 chromosomes',
		w1: 'If you said 12', counted: 'you counted chromatids', copies: 'the two copies in each',
	});
	const cc: [number, number] = [560, 540];
	const six: {kind: Kind; color: string}[] = [{kind: 'L', color: PLUM}, {kind: 'S', color: TEALC}, {kind: 'M', color: PLUM}, {kind: 'L', color: TEALC}, {kind: 'S', color: PLUM}, {kind: 'M', color: TEALC}];
	const sp = 80;
	const yAt = (i: number) => cc[1] + (i - 2.5) * sp;
	const taps = [0, 1, 2, 3, 4, 5].map(i => c.count + 14 + i * 9);
	const pts: [number, number][] = six.map((_, i) => [cc[0], yAt(i)]);
	const chromN = Math.min(6, [0, 1, 2, 3, 4, 5].filter(i => f >= taps[i]).length);
	const hiAt = (i: number) => vis(f, c.copies + i * 5, c.copies + i * 5 + 34, 6);
	const lineGlow = vis(f, c.lined, c.fibres - 4, 8);
	const fibreGlow = vis(f, c.fibres, c.meta, 8);
	return (
		<>
			<Heading items={[[0, 'Question 2: the cell']]} size={64} />
			<Overlay>
				<CellBody cx={cc[0]} cy={cc[1]} rx={330} ry={272} spindle={1} />
				{six.map((s, i) => (
					<g key={i}>
						<Fibre x1={cc[0] - poleDX(330)} y1={cc[1]} x2={cc[0] - 4} y2={yAt(i)} color={fibreGlow > 0.05 ? AMBER_INK : INK_SOFT} w={3.2 + 1.6 * fibreGlow} />
						<Fibre x1={cc[0] + poleDX(330)} y1={cc[1]} x2={cc[0] + 4} y2={yAt(i)} color={fibreGlow > 0.05 ? AMBER_INK : INK_SOFT} w={3.2 + 1.6 * fibreGlow} />
					</g>
				))}
				{/* the middle line the chromosomes sit on */}
				<line x1={cc[0]} x2={cc[0]} y1={yAt(0) - 60} y2={yAt(5) + 60} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="3 12" strokeLinecap="round" opacity={lineGlow} />
				{six.map((s, i) => <Chrom key={i} x={cc[0]} y={yAt(i)} kind={s.kind} color={s.color} dup={1} coil={1} s={0.8} hiA={hiAt(i)} hiB={hiAt(i)} />)}
				<PenTap pts={pts} at={taps} badge={[56, 0]} out={c.w1 - 10} />
			</Overlay>
			<Hand at={c.count + 14} x={96} y={850} size={52} color={AMBER_INK}>{`${chromN} centromeres = ${chromN} chromosomes`}</Hand>
			<Hand at={c.lined} out={c.w1} x={1050} y={220} size={36} color={INK_SOFT} w={780}>lined up across the middle, fibres from both ends</Hand>
			<Right at={c.meta} x={980} y={286}>metaphase</Right>
			<Right at={c.six + 4} x={980} y={390}>6 chromosomes</Right>
			<Wrong at={c.w1} x={980} y={550} w={850} text="12 chromosomes" why="you counted chromatids" />
			<Hand at={c.copies} x={1050} y={640} size={40} color={INK} w={780}>12 = chromatids: 6 x 2, two copies in each X</Hand>
			<StageStrip at={[-999, -999, -999, -999, -999]} active={1} x={930} y={112} k={0.8} />
		</>
	);
};
