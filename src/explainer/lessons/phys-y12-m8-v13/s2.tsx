// Scenes 7 to 12: no path at all (two detections with no line between them; Bohr's orbit dissolving over the cloud;
// "better instruments?" crossed), the shapes of the allowed states (1s, 2s and three 2p dumbbells on turning axes),
// orbit against orbital (the comparison table writing row by row), the memory aid ("al" for all), and Schrödinger's
// contribution assessed (three strengths with the line-brightness strip and the periodic table's s and p blocks, three
// limits, the judgement framed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Cloud1s, OrbitalSet, cloudDots} from '../../physics/atom/quantum';
import {PeriodicTable, cellOf} from '../../physics/atom/elements';
import {LineStrip} from '../phys-y12-m8-v10/parts';
import {DOTS, HEAD, HEAD_SIZE, cap, cue} from './common';
import {GREEN_C, GREY, INK, Lbl, NAVY, NUC_RED, TEAL, cellStyle} from './parts';
import {RUN6, SLICE, SliceBase} from './s1';
import {Readout} from '../../physics/atom/universe';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);

// ---------- 7. no path at all ----------
const DA: [number, number] = [-150, -70], DB: [number, number] = [110, 120];
export const S07: React.FC = () => {
	const id = 'no-path';
	const f = useCurrentFrame();
	const bm = cue(id, 'between measurements'), nc = cue(id, "There's no circle"), jp = cue(id, 'just probabilities'), tc = cue(id, 'too clumsy'), al = cap(id, cue(id, 'not a road it travels along'), 30);
	const dots = cloudDots(RUN6(), DOTS, SLICE.a);
	const line = prog(f, bm + 20, 20), gone = prog(f, bm + 60, 30);
	const orb = f < nc ? 0 : prog(f, nc, 10) * (1 - prog(f, nc + 40, 50));
	const bright = 1 + 0.15 * prog(f, jp, 20);
	const A = [SLICE.cx + DA[0], SLICE.cy + DA[1]], B = [SLICE.cx + DB[0], SLICE.cy + DB[1]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SliceBase />
				<Cloud1s cx={SLICE.cx} cy={SLICE.cy} a={SLICE.a * bright} id="m8v13-c7" color={TEAL.stroke} peak={0.85 * bright} />
				<g opacity={0.45}>{dots.map(([x, y], i) => <circle key={i} cx={SLICE.cx + x} cy={SLICE.cy + y} r={2.6} fill={NAVY.stroke} />)}</g>
				{f >= bm ? <g>
					<circle cx={A[0]} cy={A[1]} r={11} fill={NAVY.stroke} />
					{f >= bm + 12 ? <circle cx={B[0]} cy={B[1]} r={11} fill={NAVY.stroke} /> : null}
					<circle cx={A[0]} cy={A[1]} r={11 + 22 * pulseOf(f, bm, 24)} fill="none" stroke={NAVY.stroke} strokeWidth={3} opacity={pulseOf(f, bm, 24)} />
					<circle cx={B[0]} cy={B[1]} r={11 + 22 * pulseOf(f, bm + 12, 24)} fill="none" stroke={NAVY.stroke} strokeWidth={3} opacity={pulseOf(f, bm + 12, 24)} />
					<line x1={A[0]} y1={A[1]} x2={A[0] + (B[0] - A[0]) * line} y2={A[1] + (B[1] - A[1]) * line} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 8" opacity={1 - gone} />
				</g> : null}
				{orb > 0.001 ? <circle cx={SLICE.cx} cy={SLICE.cy} r={SLICE.a} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 9" opacity={orb} /> : null}
				<circle cx={SLICE.cx} cy={SLICE.cy} r={8} fill={NUC_RED} stroke="#ffffff" strokeWidth={2} />
			</FrameSvg>
			<Lbl x={A[0] - 20} y={A[1] - 30} at={bm} color={NAVY.ink} size={28} anchor="end">measurement 1</Lbl>
			<Lbl x={B[0] + 24} y={B[1] + 40} at={bm + 12} color={NAVY.ink} size={28}>measurement 2</Lbl>
			<HandTag x={0} y={0} at={bm + 44} color={GREY.stroke} marks={[{kind: 'cross', cx: (A[0] + B[0]) / 2, cy: (A[1] + B[1]) / 2, size: 50}]} />
			<HandTag x={1180} y={250} text="no path between" at={bm + 50} size={38} color={GREY.ink} />
			<Lbl x={SLICE.cx + SLICE.a + 16} y={SLICE.cy - SLICE.a - 10} at={nc} out={nc + 90} color={INK} size={28}>{"Bohr's circle?"}</Lbl>
			<Lbl x={1180} y={340} at={jp} color={TEAL.ink} size={34}>just probabilities</Lbl>
			<Readout x={1500} y={200} label="measurements" value={DOTS.toLocaleString('en-AU')} color={NAVY.ink} w={320} />
			<Lbl x={1180} y={880} at={-30} out={al - 10} color={TEAL.ink} size={28}>1s orbital: a map of where it is likely to be found</Lbl>
			<CrossedChip x={1180} y={420} at={tc} crossAt={tc + 16} size={30} caption="not a measuring problem">better instruments?</CrossedChip>
			<CrossedChip x={1180} y={600} at={al} crossAt={al + 12} size={30}>orbital = a fuzzy track</CrossedChip>
			<div style={{position: 'absolute', left: 1180, top: 720}}><Row at={al + 16} size={40}><AnswerBox at={al + 20}>orbital = a region of likelihood</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={al + 30} color={TEAL.stroke} marks={[{kind: 'circle', cx: 1480, cy: 760, rx: 340, ry: 60}]} />
		</>
	);
};

// ---------- 8. shapes of the allowed states ----------
export const S08: React.FC = () => {
	const id = 'orbital-shapes';
	const f = useCurrentFrame();
	const hs = cue(id, 'Higher energy states'), os = cue(id, 'called one s'), ts = cue(id, 'two s'), td = cue(id, 'three dumbbell shaped orbitals'), sf = cue(id, 'straight out of'), ch = cap(id, cue(id, 'bond in chemistry'));
	const step = Math.max(12, Math.floor((sf - td) / 4));
	const phi = 0.45 + (f < td + 3 * step ? 0 : 2 * Math.PI * prog(f, td + 3 * step, Math.max(120, ch - td - 3 * step)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<OrbitalSet cx={290} cy={560} s={110} phi={0.45} show={{s1: prog(f, os, 16), axes: 0}} color={TEAL.stroke} nucleus={NUC_RED} ink={GREY.ink} id="m8v13-o1" />
				<OrbitalSet cx={700} cy={560} s={110} phi={0.45} show={{s2: prog(f, ts, 16), axes: 0}} color={TEAL.stroke} nucleus={NUC_RED} ink={GREY.ink} id="m8v13-o2" />
				<OrbitalSet cx={1380} cy={580} s={150} phi={phi} show={{px: prog(f, td, 14), py: prog(f, td + step, 14), pz: prog(f, td + 2 * step, 14), axes: 1}} color={TEAL.stroke} nucleus={NUC_RED} ink={GREY.ink} id="m8v13-o3" />
			</FrameSvg>
			<Lbl x={96} y={210} at={hs} color={INK} size={32}>each allowed state has its own shape</Lbl>
			<Lbl x={290} y={800} at={os} color={TEAL.ink} size={34} anchor="middle">1s (n = 1)</Lbl>
			<HandTag x={210} y={390} text="lowest" at={os + 14} size={36} color={TEAL.ink} />
			<Lbl x={700} y={800} at={ts} color={TEAL.ink} size={34} anchor="middle">2s (n = 2)</Lbl>
			<Lbl x={1380} y={250} at={td} color={TEAL.ink} size={34} anchor="middle">2p (n = 2): three, along x, y and z</Lbl>
			<Lbl x={1380} y={900} at={td} color={GREY.ink} size={26} anchor="middle">shapes, not to scale</Lbl>
			<HandTag x={1060} y={860} text="from the equation, not drawn by hand" at={sf + 10} size={34} color={TEAL.ink} marks={[{kind: 'circle', cx: 1380, cy: 580, rx: 300, ry: 290}]} />
			<Chip x={96} y={860} at={ch} size={32} color={TEAL.ink}>orbital shapes → bonding (Chemistry)</Chip>
		</>
	);
};

// ---------- 9. orbit against orbital ----------
const Ic: React.FC<{kind: 'orbit' | 'cloud'}> = ({kind}) => (
	<svg width={90} height={90} viewBox="0 0 90 90" style={{verticalAlign: 'middle'}}>
		{kind === 'orbit' ? <circle cx={45} cy={45} r={34} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 7" /> : <><defs><radialGradient id="m8v13-ic"><stop offset="0" stopColor={TEAL.stroke} stopOpacity={0.85} /><stop offset="1" stopColor={TEAL.stroke} stopOpacity={0} /></radialGradient></defs><circle cx={45} cy={45} r={42} fill="url(#m8v13-ic)" /></>}
		<circle cx={45} cy={45} r={6} fill={NUC_RED} />
	</svg>
);
const Cell: React.FC<{at: number; children: React.ReactNode; color?: string; strike?: number; size?: number}> = ({at, children, color = INK, strike, size = 40}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14), s = strike === undefined ? 0 : prog(f, strike, 14);
	return <div style={{position: 'relative', opacity: o, transform: `translateY(${(1 - o) * 14}px)`, ...cellStyle(size, color)}}>{children}{s > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', overflow: 'visible'}}><path d={`M0,58 L${100 * s},50`} stroke={GREY.stroke} strokeWidth={5} vectorEffect="non-scaling-stroke" /></svg> : null}</div>;
};
export const TableBoard: React.FC<{c: {l1: number; l2: number; r1: number; r2: number; l3: number; r3: number; span: number; strike?: number}; scale?: number}> = ({c, scale = 1}) => (
	<div style={{position: 'absolute', left: 96, top: 186, width: 1728, transform: `scale(${scale})`, transformOrigin: '0 0'}}>
		<div style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', columnGap: 24, rowGap: 22, background: '#fffdf8', border: `3px solid rgba(60,45,20,0.25)`, borderRadius: 18, padding: '18px 26px'}}>
			<div />
			<div style={cellStyle(44, INK)}><Ic kind="orbit" /> Bohr orbit</div>
			<div style={cellStyle(44, TEAL.ink)}><Ic kind="cloud" /> Schrödinger orbital</div>
			<div style={cellStyle(32, GREY.ink)}>shape</div>
			<Cell at={c.l1}>2D circle, one exact radius</Cell>
			<Cell at={c.r1} color={TEAL.ink}>3D region, no exact radius</Cell>
			<div style={cellStyle(32, GREY.ink)}>position</div>
			<Cell at={c.l2} strike={c.strike}>definite position and path</Cell>
			<Cell at={c.r2} color={TEAL.ink}>probability at each point, no path</Cell>
			<div style={cellStyle(32, GREY.ink)}>energy</div>
			<Cell at={c.l3}>quantisation assumed</Cell>
			<Cell at={c.r3} color={TEAL.ink}>quantisation from the wave equation</Cell>
		</div>
		<div style={{marginTop: 22}}><Row at={c.span} size={38}><AnswerBox at={c.span + 4}>same hydrogen energy levels: spectrum predictions unchanged (an earlier video)</AnswerBox></Row></div>
	</div>
);
export const S09: React.FC = () => {
	const id = 'orbit-vs-orbital';
	const c = {l1: cue(id, 'a flat circle at one exact radius'), l2: cue(id, 'a definite place at every moment'), r1: cue(id, 'three dimensional, with no exact radius'), r2: cue(id, 'only the chance'), l3: cue(id, 'quantised energy was assumed'), r3: cue(id, 'out of the wave equation'), span: cap(id, cue(id, 'still holds'), 4)};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={96} y={170} at={cue(id, 'line up the two pictures')} color={INK} size={30}>two pictures of the electron in hydrogen</Lbl>
			<TableBoard c={{...c, strike: c.r2 + 20}} />
			<HandTag x={560} y={700} text="Bohr: assumed" at={c.l3 + 16} size={34} color={GREY.ink} />
			<HandTag x={1320} y={700} text="Schrödinger: derived" at={c.r3 + 16} size={34} color={TEAL.ink} />
		</>
	);
};

// ---------- 10. a way to remember ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const og = cue(id, 'where the electron goes'), lb = cue(id, "where it's likely to be"), be = cap(id, cue(id, 'all the places it might be'), 20);
	const sh = 1 - 0.66 * prog(f, 0, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TableBoard c={{l1: -60, l2: -60, r1: -60, r2: -60, l3: -60, r3: -60, span: -60, strike: -60}} scale={sh} />
			<div style={{position: 'absolute', left: 300, top: 330, fontFamily: 'Caveat', fontWeight: 700, fontSize: 130, color: INK}}>orbit</div>
			<div style={{position: 'absolute', left: 1000, top: 330, fontFamily: 'Caveat', fontWeight: 700, fontSize: 130, color: INK, opacity: prog(f, og - 10, 14)}}>orbit<span style={{color: TEAL.ink}}>al</span></div>
			<FrameSvg>
				<circle cx={420} cy={610} r={90} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 9" opacity={prog(f, og, 14)} />
				<circle cx={420 + 90} cy={610} r={11} fill={NAVY.stroke} opacity={prog(f, og, 14)} />
				<Cloud1s cx={1170} cy={610} a={40} id="m8v13-c10" color={TEAL.stroke} opacity={prog(f, lb, 16)} />
				<circle cx={420} cy={610} r={7} fill={NUC_RED} /><circle cx={1170} cy={610} r={7} fill={NUC_RED} opacity={prog(f, lb, 16)} />
			</FrameSvg>
			<Lbl x={420} y={750} at={og} color={INK} size={34} anchor="middle">where the electron goes</Lbl>
			<Lbl x={1170} y={750} at={lb} color={TEAL.ink} size={34} anchor="middle">{"where it's likely to be"}</Lbl>
			<HandTag x={1400} y={330} text="all the places it might be" at={be} size={40} color={TEAL.ink} marks={[{kind: 'underline', x1: 1250, x2: 1360, y: 495}]} />
			<div style={{position: 'absolute', left: 240, top: 820, width: 1440, opacity: prog(f, be + 20, 14), background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 6px #fffdf8, inset 0 0 0 8.5px ${INK}`, padding: '10px 30px', fontFamily: 'Caveat', fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.05, textAlign: 'center'}}>An orbit is where the electron goes. An orbital is where it&apos;s likely to be.</div>
		</>
	);
};

// ---------- 11 and 12. Schrödinger's contribution ----------
const COLS = {b: 96, c: 520, j: 1460};
const ROWY = [300, 395, 490, 610, 705, 800];
const Tick: React.FC<{color: string}> = ({color}) => <svg width={36} height={36} viewBox="0 0 40 40" style={{flex: 'none'}}><path d="M6,22 L16,32 L35,8" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const BRow: React.FC<{y: number; at: number; tick?: boolean; children: React.ReactNode; color?: string}> = ({y, at, tick = true, children, color = INK}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: COLS.c, top: y, width: 920, display: 'flex', gap: 12, alignItems: 'flex-start', opacity: o, transform: `translateX(${(1 - o) * 20}px)`, ...cellStyle(36, color)}}>{tick ? <Tick color={GREEN_C.stroke} /> : <span style={{flex: 'none', width: 36, textAlign: 'center'}}>−</span>}<span>{children}</span></div>;
};
export const AssessBoard: React.FC<{f: number; s: {bc: number; qe: number; lb: number; me: number; bo: number}; lim?: {lp: number; se: number; sd: number; md: number}}> = ({f, s, lim}) => (
	<>
		<FrameSvg>
			<rect x={80} y={190} width={1760} height={700} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={4} />
			<line x1={COLS.c - 20} y1={200} x2={COLS.c - 20} y2={880} stroke="rgba(60,45,20,0.35)" strokeWidth={5} />
			<line x1={COLS.j - 20} y1={200} x2={COLS.j - 20} y2={880} stroke="rgba(60,45,20,0.35)" strokeWidth={5} />
			<line x1={90} y1={260} x2={1830} y2={260} stroke="rgba(60,45,20,0.35)" strokeWidth={4} />
			<Cloud1s cx={1380} cy={240} a={9} id="m8v13-c11" color={TEAL.stroke} />
			<circle cx={1380} cy={240} r={4} fill={NUC_RED} />
			<g opacity={prog(f, s.lb, 14) * (lim ? 1 - prog(f, lim.md, 14) : 1)}><LineStrip x={1480} y={360} w={330} h={60} lines={[656, 486, 434, 410]} strengths={[1, 0.55, 0.32, 0.18]} lineW={9} /></g>
			<g opacity={prog(f, s.me, 14) * (lim ? 1 - prog(f, lim.md, 14) : 1)}><PeriodicTable b={{x: 1480, y: 520, cw: 15, ch: 15, gap: 3}} upTo={86} symbols={false} fill={Z => { const c = cellOf(Z)[1]; return {color: Z === 2 || c >= 12 ? TEAL.soft : c < 2 ? '#f8e8c8' : '#efe9de'}; }} /></g>
		</FrameSvg>
		<div style={{position: 'absolute', left: COLS.b, top: 210, ...cellStyle(34, GREY.ink)}}>before</div>
		<div style={{position: 'absolute', left: COLS.c, top: 210, ...cellStyle(34, TEAL.ink)}}>{"Schrödinger's contribution"}</div>
		<div style={{position: 'absolute', left: COLS.j, top: 210, ...cellStyle(34, INK)}}>judgement</div>
		{[['Bohr: quantisation', 'assumed'], ['works for one', 'electron only'], ['no reason for line', 'brightness']].map((t, i) => <div key={i} style={{position: 'absolute', left: COLS.b + 10, top: ROWY[i], width: 390, ...cellStyle(32, GREY.ink)}}>{t[0]}<br />{t[1]}</div>)}
		<Chip x={COLS.c} y={252} at={s.bc} size={26} color={TEAL.ink}>current model of the atom</Chip>
		{lim ? null : <>
			<FrameSvg>
				<circle cx={250} cy={720} r={70} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" /><circle cx={250} cy={720} r={8} fill={NUC_RED} /><circle cx={320} cy={720} r={10} fill={NAVY.stroke} />
				<Cloud1s cx={1000} cy={740} a={34} id="m8v13-c11b" color={TEAL.stroke} /><circle cx={1000} cy={740} r={7} fill={NUC_RED} />
			</FrameSvg>
			<Lbl x={250} y={830} at={-30} color={GREY.ink} size={26} anchor="middle">Bohr, 1913: an orbit</Lbl>
			<Lbl x={1000} y={860} at={-30} color={TEAL.ink} size={26} anchor="middle">Schrödinger, 1926: an orbital</Lbl>
			<div style={{position: 'absolute', left: COLS.j, top: 270, opacity: 1 - prog(f, s.lb, 12), ...cellStyle(30, GREY.ink)}}>strengths?<br />limits?<br />verdict?</div>
		</>}
		<BRow y={ROWY[0] + 20} at={s.qe}>quantisation derived, not assumed (fixes {"Bohr's"} postulate)</BRow>
		<BRow y={ROWY[1] + 34} at={s.lb}>predicts line brightness (Bohr could not)</BRow>
		<BRow y={ROWY[2] + 34} at={s.me}>works for many-electron atoms (Bohr: one electron only)</BRow>
		<Lbl x={1480} y={350} at={s.lb} out={lim?.md} color={INK} size={26}>line brightness</Lbl>
		<Lbl x={1480} y={510} at={s.me} out={lim?.md} color={TEAL.ink} size={26}>s and p blocks</Lbl>
		{lim ? <>
			<BRow y={ROWY[3]} at={lim.lp} tick={false} color={GREY.ink}>no picture of the {"electron's"} motion</BRow>
			<BRow y={ROWY[4]} at={lim.se} tick={false} color={GREY.ink}>exact only with one electron: approximations for others</BRow>
			<BRow y={ROWY[5]} at={lim.sd} tick={false} color={GREY.ink}>meaning of the wave: still debated</BRow>
		</> : null}
	</>
);
export const S11: React.FC = () => {
	const id = 'contribution-strengths';
	const f = useCurrentFrame();
	const s = {bc: cue(id, 'the basis of the current model'), qe: cue(id, 'came from one equation'), lb: cue(id, 'why some spectral lines are much brighter'), me: cue(id, 'atoms with many electrons'), bo: cap(id, cue(id, 'chemical bonding'), 16)};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<AssessBoard f={f} s={s} />
			<Chip x={1480} y={760} at={s.bo} size={26} color={TEAL.ink}>bonding (Chemistry)</Chip>
			<HandTag x={1100} y={600} text="three strengths" at={s.bo + 16} size={38} color={GREEN_C.ink} marks={[{kind: 'brace', x: COLS.c - 30, y1: ROWY[0] + 10, y2: ROWY[2] + 100, facing: 'left'}]} />
		</>
	);
};
export const S12: React.FC = () => {
	const id = 'contribution-limits';
	const f = useCurrentFrame();
	const s = {bc: -60, qe: -60, lb: -60, me: -60, bo: -60};
	const lim = {lp: cue(id, 'We lost any picture'), se: cue(id, 'solved exactly with one electron'), sd: cue(id, 'still debated'), md: cap(id, cue(id, "fix to Bohr's model"), 4)};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<AssessBoard f={f} s={s} lim={lim} />
			<div style={{position: 'absolute', left: COLS.j, top: 300, width: 370}}><Row at={lim.md} size={44}><AnswerBox at={lim.md + 4}>foundational, not a small fix</AnswerBox></Row></div>
			<HandTag x={COLS.c + 640} y={ROWY[3] - 30} text="the price" at={lim.sd + 20} size={38} color={GREY.ink} marks={[{kind: 'brace', x: COLS.c - 30, y1: ROWY[3], y2: ROWY[5] + 60, facing: 'left'}]} />
		</>
	);
};
