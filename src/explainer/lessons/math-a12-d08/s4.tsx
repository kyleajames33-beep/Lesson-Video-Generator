// Scenes 13 and 14: the handoff (d09 opens on its final frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, HandTag, KeyNotesBullets, SceneHeading,
	MATH_STRAND_ACCENT, smooth,
} from '../../math/studio';
import {cue} from './common';
import {
	Am, Asym, BLUE, Bt, DISPLAY, Dashboard, Frac, HandoffBoard, HandoffTop, OpenMark, QUOT, Sup, TEAL, Tp, WIN_A, A_YTICKS, gmap,
} from './parts';

// ---------- 13. handoff ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), heres = cue(id, "Here's the derivative"), where = cue(id, 'Where is it');
	// window A with its plot box exactly over the handoff number line (x from −3 to 2.5 across 1500 px)
	const G = {x: 126, y: 190, w: 1626, h: 640};
	const M = gmap(G.x, G.y, G.w, G.h, WIN_A);
	const gone = smooth(prog(f, next - 10, 26));
	const P = M.pt(0, 1);
	const arrows = prog(f, 20, 14) * (1 - gone);
	return (
		<>
			<HandoffTop at={-30} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - gone, transform: `scaleY(${1 - 0.6 * gone})`, transformOrigin: '50% 640px'}}>
				<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_A} family={QUOT} timeline={[{frame: 0, x: 0}]} color={INK}
					yTicks={A_YTICKS} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: -30, halfLength: 200}}
					overlay={() => <FrameSvg><Asym M={M} X={-1} label="x = −1" /><OpenMark M={M} X={-1} /></FrameSvg>} />
			</div>
			<FrameSvg style={{opacity: arrows}}>
				<path d={`M${P[0] - 60},${P[1] - 14} V${P[1] - 120}`} stroke={TEAL} strokeWidth={9} strokeLinecap="round" />
				<path d={`M${P[0] - 78},${P[1] - 98} L${P[0] - 60},${P[1] - 124} L${P[0] - 42},${P[1] - 98}`} stroke={TEAL} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				<path d={`M${P[0] + 60},${P[1] + 14} V${P[1] + 120}`} stroke={BLUE} strokeWidth={9} strokeLinecap="round" />
				<path d={`M${P[0] + 42},${P[1] + 98} L${P[0] + 60},${P[1] + 124} L${P[0] + 78},${P[1] + 98}`} stroke={BLUE} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			</FrameSvg>
			<div style={{position: 'absolute', left: P[0] - 30, top: P[1] - 156, opacity: arrows, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: TEAL}}>top&apos;s push</div>
			<div style={{position: 'absolute', left: P[0] + 90, top: P[1] + 70, opacity: arrows, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: BLUE}}>bottom&apos;s pull (the minus)</div>
			<HandTag x={M.pt(-2.9, 0)[0]} y={M.pt(0, 4.3)[1]} text="both turns, and the domain kept" at={40} out={next} size={42} color={INK} />
			<HandoffBoard boxAt={next + 6} lineAt={next} qAt={where} chipAt={heres} />
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>(f/g)′ = (<Tp>f′g</Tp> <Bt>− fg′</Bt>)/g², where <Am>g ≠ 0</Am></>, at: 10},
		{content: <>Top&apos;s derivative first; the minus is the <Bt>bottom&apos;s pull</Bt>.</>, at: 22},
		{content: <>Square the whole bottom.</>, at: 34},
		{content: <><Am>Domain first</Am>, from the original function; keep it.</>, at: 46},
		{content: <>Cancel only a nonzero factor; exclusions stay.</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-14', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={220} w={1020} items={items} size={40} gap={76} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 700, boxSizing: 'border-box', position: 'relative'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK, marginTop: 4}}><span style={{color: TEAL}}>lo d(hi)</span> <span style={{color: BLUE}}>− hi d(lo)</span>,<br />over lo²</div>
					<div style={{...DISPLAY(44, INK, 800), marginTop: 16, opacity: prog(f, 84, 12), display: 'flex', alignItems: 'center', gap: 12}}><Frac n={<><Tp>f′g</Tp> <Bt>− fg′</Bt></>} d={<>g<Sup>2</Sup></>} /> <Am>, g ≠ 0</Am></div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 8px'}} />
					<div style={{position: 'absolute', left: 30, right: 26, top: 540, opacity: prog(f, 96, 12), ...DISPLAY(36, INK, 700), whiteSpace: 'normal'}}>Trip: <span style={{color: TEAL}}>distance pushes</span> the average up; <span style={{color: BLUE}}>time pulls</span> it down.</div>
				</div>
			</Enter>
			<Dashboard x={1206} y={604} w={250} numbers={false} speed={100} at={80} />
			<Enter at={84} style={{position: 'absolute', left: 1480, top: 612}}><span style={DISPLAY(32, INK_SOFT, 700)}>average =</span><div style={{...DISPLAY(32, INK, 800)}}><Tp>distance</Tp> ÷ <Bt>time</Bt></div></Enter>
		</>
	);
};
