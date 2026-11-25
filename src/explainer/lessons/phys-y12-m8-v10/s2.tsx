// Scenes 8 to 14: Bohr's photon postulate (a drop on the ladder sends out one photon carrying the gap; a photon of the
// exact gap lifts it back), both failures fixed (a floor under n = 1; gaps to n = 2 become lines; a bigger drop gives a
// shorter wavelength), the angular momentum rule (the orbit picker: allowed circles light as n steps), success then
// limits (the assessment board), limit 1 (one electron only: helium's repulsion), limit 2 (brightness and fine
// structure in a line zoom) and limit 3 (the classical and quantum halves joined by a jagged seam).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {Arrow} from '../../physics/light/em';
import {Packet} from '../../physics/light/photo';
import {wlColor} from '../../physics/light/spectrum';
import {DropArrow, HLevels, yOf} from '../../physics/atom/bohr';
import {HE_LINES, HEAD, HEAD_SIZE, cap, cue, lineNm} from './common';
import {AMBER, Elec, GREY, GlowTube, INK, Lbl, LineStrip, NAVY, Nucleus, ROSE, Wavelets, stripX} from './parts';
import {LAD, LINES5, RADII} from './s1';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const RED_C = wlColor(lineNm(3));
const CardBox: React.FC<{x: number; y: number; w: number; h: number; dashed?: boolean; opacity?: number}> = ({x, y, w, h, dashed = false, opacity = 1}) => <rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke={dashed ? GREY.stroke : 'rgba(60,45,20,0.25)'} strokeWidth={dashed ? 3 : 2.5} strokeDasharray={dashed ? '12 8' : undefined} opacity={opacity} />;

// ---------- 8. Bohr's photon postulate ----------
export const S08: React.FC = () => {
	const id = 'photon-postulate';
	const f = useCurrentFrame();
	const dr = cue(id, 'drops from a higher level to a lower one'), ep = cue(id, 'emits one photon'), ce = cue(id, 'By conservation of energy'), hf = cue(id, 'h f equals E initial minus E final'), ju = cue(id, 'An electron can also jump up'), en = cap(id, cue(id, 'with exactly the right energy'));
	const ex = LAD.x + 300;
	const y3 = yOf(LAD, 3), y2 = yOf(LAD, 2);
	const down = prog(f, dr, 24), up = prog(f, ju + 30, 24);
	const ey = f < ju + 30 ? y3 + (y2 - y3) * down : y2 + (y3 - y2) * up;
	const outX = LAD.x + 320 + 600 * prog(f, ep, 60);
	const inX = LAD.x - 420 + 680 * prog(f, ju, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HLevels g={LAD} levels={[1, 2, 3, 4, 5]} color={NAVY.stroke} label={n => (n <= 3 ? `n = ${n}` : '')} size={28} />
				{f >= dr && f < ju + 30 ? <DropArrow g={LAD} x={ex - 40} from={3} to={2} color={NAVY.stroke} u={down} /> : null}
				{f >= ju + 30 ? <DropArrow g={LAD} x={ex - 40} from={2} to={3} color={NAVY.stroke} u={up} /> : null}
				<Elec x={ex} y={ey} r={14} />
				{f >= ep && f < ju ? <Packet x={outX} y={(y2 + y3) / 2} deg={0} len={80} color={RED_C} label="656 nm" size={26} /> : null}
				{f >= ju && f < ju + 32 ? <Packet x={inX} y={(y2 + y3) / 2} deg={0} len={80} color={RED_C} /> : null}
			</FrameSvg>
			<HandTag x={LAD.x + LAD.w + 30} y={(y2 + y3) / 2} text="ΔE" at={ce} size={40} color={NAVY.ink} marks={[{kind: 'brace', x: LAD.x + LAD.w + 8, y1: y3, y2: y2, facing: 'right'}]} />
			<Lbl x={LAD.x + LAD.w + 20} y={yOf(LAD, 1)} at={0} color={NAVY.ink} size={26}>ground state</Lbl>
			<div style={{position: 'absolute', left: 96, top: 520, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={hf} size={40}><AnswerBox at={hf + 6}>emission: hf = E<sub>i</sub> − E<sub>f</sub></AnswerBox></Row>
				<Row at={en} size={40}><AnswerBox at={en + 6}>absorption: hf = E<sub>f</sub> − E<sub>i</sub></AnswerBox></Row>
			</div>
			<Chip x={96} y={420} at={hf + 10} size={30} color={AMBER.ink}>E = hf (from earlier)</Chip>
			<CrossedChip x={96} y={720} at={hf + 30} crossAt={hf + 50} size={28} caption="the gap, not the level">hf = E₃ (the level&apos;s energy)</CrossedChip>
			<Lbl x={96} y={250} at={dr} color={INK} size={30}>a drop from 3 to 2: one photon out</Lbl>
			<Lbl x={96} y={300} at={ju} color={INK} size={30}>a photon of the exact gap: a jump from 2 to 3</Lbl>
			<HandTag x={1400} y={760} text="only the exact gap" at={en + 10} size={34} color={AMBER.ink} />
		</>
	);
};

// ---------- 9. both failures fixed ----------
const ST9 = {x: 1300, y: 560, w: 500, h: 70};
export const S09: React.FC = () => {
	const id = 'failures-fixed';
	const f = useCurrentFrame();
	const nl = cue(id, 'nothing lower to fall to'), st = cue(id, 'so the atom is stable'), cg = cue(id, 'Only certain energy gaps exist'), ls = cue(id, "That's a line spectrum"), bd = cue(id, 'A bigger drop gives'), wl = cap(id, cue(id, 'and a shorter wavelength'));
	const y1 = yOf(LAD, 1), y2 = yOf(LAD, 2);
	const fly = prog(f, ls, 40);
	const order = [3, 4, 5];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HLevels g={LAD} levels={[1, 2, 3, 4, 5]} color={NAVY.stroke} label={n => (n <= 3 ? `n = ${n}` : '')} size={28} />
				<Elec x={LAD.x + 120} y={y1} r={14} />
				{RADII.slice(0, 3).map((r, i) => <circle key={i} cx={360} cy={620} r={r * 0.8} fill="none" stroke={NAVY.stroke} strokeWidth={3} />)}
				<Nucleus x={360} y={620} r={16} />
				<Elec x={360 + RADII[0] * 0.8} y={620} r={12} />
				{f >= nl ? <g opacity={prog(f, nl, 12)}><rect x={LAD.x - 10} y={y1 + 14} width={LAD.w + 20} height={30} fill="#cfc8bb" stroke={INK} strokeWidth={3} /></g> : null}
				{f >= cg ? order.map((n, k) => <DropArrow key={n} g={LAD} x={LAD.x + 230 + 70 * k} from={n} to={2} color={wlColor(lineNm(n))} u={prog(f, cg + 8 * k, 20)} />) : null}
				<LineStrip x={ST9.x} y={ST9.y} w={ST9.w} h={ST9.h} lines={order.map(n => lineNm(n))} reveal={fly} />
				{f >= ls && fly < 1 ? order.map((n, k) => <Packet key={n} x={LAD.x + 230 + 70 * k + (stripX(ST9.x, ST9.w, lineNm(n)) - LAD.x - 230 - 70 * k) * fly} y={(y2 + yOf(LAD, n)) / 2 + (ST9.y - (y2 + yOf(LAD, n)) / 2) * fly} len={50} color={wlColor(lineNm(n))} />) : null}
				{f >= bd ? <g opacity={prog(f, bd, 12)}><Arrow from={[stripX(ST9.x, ST9.w, lineNm(3)), ST9.y + ST9.h + 60]} to={[stripX(ST9.x, ST9.w, lineNm(4)) + 8, ST9.y + ST9.h + 60]} color={INK} width={4} head={14} /></g> : null}
			</FrameSvg>
			<Lbl x={LAD.x + LAD.w + 20} y={y1 + 60} at={nl} color={INK} size={28}>no lower level</Lbl>
			<HandTag x={LAD.x + 20} y={y1 + 90} text="nothing lower" at={nl + 20} size={32} color={INK} marks={[{kind: 'circle', cx: LAD.x + LAD.w / 2, cy: y1 + 28, rx: LAD.w / 2 + 30, ry: 34}]} />
			<Lbl x={360} y={880} at={nl} color={INK} size={28} anchor="middle">n = 1: no orbit inside it</Lbl>
			<div style={{position: 'absolute', left: 1300, top: 200, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={-30} size={34}><AnswerBox at={-30} tick={f >= st}>failure 1: stability {f >= st ? '(fixed)' : ''}</AnswerBox></Row>
				<Row at={-30} size={34}><AnswerBox at={-30} tick={f >= ls}>failure 2: line spectra {f >= ls ? '(fixed)' : ''}</AnswerBox></Row>
			</div>
			<Lbl x={ST9.x} y={ST9.y - 22} at={ls} color={INK} size={26}>only certain gaps → only certain lines</Lbl>
			<Lbl x={ST9.x} y={ST9.y + ST9.h + 110} at={bd} color={INK} size={28}>bigger ΔE → higher f → shorter λ</Lbl>
			<Lbl x={ST9.x} y={ST9.y + ST9.h + 160} at={wl} color={INK} size={26}>{`3 → 2: ${Math.round(lineNm(3))} nm (red); 4 → 2: ${Math.round(lineNm(4))} nm (blue-green)`}</Lbl>
		</>
	);
};

// ---------- 10. Bohr's angular momentum rule (the orbit picker) ----------
const C10 = {x: 560, y: 590};
export const S10: React.FC = () => {
	const id = 'angular-momentum';
	const f = useCurrentFrame();
	const am = cue(id, 'angular momentum'), wn = cue(id, 'a whole number times h over two pi'), mh = cue(id, "matched hydrogen's lines"), nr = cue(id, 'he gave no reason for it'), it = cap(id, cue(id, 'so he used it'));
	const n = f < wn ? 0 : Math.min(3, 1 + Math.floor((f - wn) / 24));
	const a = -Math.PI / 2 + f * 0.08, r1 = RADII[0];
	const ex = C10.x + r1 * Math.cos(a), ey = C10.y + r1 * Math.sin(a);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{RADII.slice(0, 3).map((r, i) => <circle key={i} cx={C10.x} cy={C10.y} r={r} fill="none" stroke={i < n ? NAVY.stroke : '#b9b2a6'} strokeWidth={i < n ? 6 : 3} />)}
				{f >= wn + 72 ? <g opacity={prog(f, wn + 72, 12)}><circle cx={C10.x} cy={C10.y} r={110} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="8 6" /></g> : null}
				<Nucleus x={C10.x} y={C10.y} r={20} />
				<Elec x={ex} y={ey} r={14} />
				{f >= am ? <g opacity={prog(f, am, 12)}>
					<Arrow from={[ex, ey]} to={[ex - 70 * Math.sin(a), ey + 70 * Math.cos(a)]} color={'#13767a'} width={5} head={14} />
					<line x1={C10.x} y1={C10.y} x2={ex} y2={ey} stroke={INK} strokeWidth={3} strokeDasharray="6 5" />
				</g> : null}
				<HLevels g={{x: 1080, w: 160, top: 640, bot: 860}} levels={[1, 2, 3, 4]} color={NAVY.stroke} inf={false} /><LineStrip x={1320} y={720} w={480} h={60} lines={LINES5.slice(0, 4)} />
				{f >= mh ? <Arrow from={[1250, 760]} to={[1310, 750]} color={INK} width={4} head={14} opacity={prog(f, mh, 12)} /> : null}
				{f >= wn + 72 ? <Mark x={C10.x + 78} y={C10.y - 78} at={wn + 72} kind="cross" color={GREY.stroke} size={36} /> : null}
			</FrameSvg>
			<Lbl x={1080} y={230} at={am} color={INK} size={34}>angular momentum L = mvr</Lbl>
			<Lbl x={ex + 30} y={ey - 40} at={am + 10} out={wn} color={INK} size={26}>m, v, r</Lbl>
			<div style={{position: 'absolute', left: 1080, top: 290}}><Row at={wn} size={48}><AnswerBox at={wn + 6}>mvr = nh / 2π, n = 1, 2, 3, ...</AnswerBox></Row></div>
			<Readout x={1080} y={420} label="n" value={n ? String(n) : '·'} color={NAVY.ink} w={200} />
			<Lbl x={1320} y={470} at={wn + 72} color={GREY.ink} size={28}>n = 1.5: not allowed</Lbl>
			<Lbl x={C10.x} y={C10.y + 370} at={0} color={GREY.ink} size={26} anchor="middle">allowed orbits (not to scale)</Lbl>
			<Lbl x={1080} y={620} at={0} color={INK} size={28}>{f >= mh ? "levels → hydrogen's lines ✓" : "Bohr's levels and hydrogen's lines"}</Lbl>
			<Chip x={96} y={190} at={0} size={28} color={INK}>postulate 2: which orbits are allowed?</Chip>
			<Chip x={1080} y={880} at={nr} size={30} color={GREY.ink}>why? (not explained)</Chip>
			<HandTag x={1480} y={900} text="it just works" at={it} size={34} color={GREY.ink} />
		</>
	);
};

// ---------- 11. success, then limits ----------
const COLS = {l: 96, r: 980, w: 840};
export const S11: React.FC = () => {
	const id = 'bohr-success';
	const f = useCurrentFrame();
	const pl = cue(id, 'it predicts the spectral lines'), li = cap(id, cue(id, 'But it has real limits'));
	const pu = pulseOf(f, li, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardBox x={COLS.l} y={260} w={COLS.w} h={250} />
				<CardBox x={COLS.l} y={540} w={COLS.w} h={160} />
				<GlowTube x={COLS.l + 640} y={280} h={210} />
				<LineStrip x={COLS.l + 30} y={400} w={560} h={60} lines={LINES5.slice(0, 4)} />
				{[0, 1, 2].map(i => <CardBox key={i} x={COLS.r} y={260 + i * 220} w={COLS.w} h={190} dashed />)}
				{pu > 0 ? <rect x={COLS.r - 6} y={188} width={360} height={56} rx={10} fill="none" stroke={INK} strokeWidth={5} opacity={pu} /> : null}
			</FrameSvg>
			<Lbl x={COLS.l} y={220} at={0} color={INK} size={34}>explains</Lbl>
			<Lbl x={COLS.r} y={220} at={0} color={INK} size={34}>limitations</Lbl>
			<div style={{position: 'absolute', left: COLS.l + 30, top: 290}}><Row at={pl} size={36}><AnswerBox at={pl + 6}>{"hydrogen's lines: accurate"}</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: COLS.l + 30, top: 590}}><Row at={pl + 20} size={36}><AnswerBox at={pl + 26}>stable atoms</AnswerBox></Row></div>
			<Lbl x={COLS.l + 30} y={490} at={pl} color={GREY.ink} size={26}>calculated next time</Lbl>
			{['1', '2', '3'].map((t, i) => <Lbl key={t} x={COLS.r + 30} y={310 + i * 220} at={li} color={GREY.ink} size={34}>{`${t}. ?`}</Lbl>)}
		</>
	);
};

// ---------- 12. limit 1: only one electron ----------
export const S12: React.FC = () => {
	const id = 'limit-one-electron';
	const f = useCurrentFrame();
	const io = cue(id, 'ions with just one electron'), he = cue(id, 'helium, with two electrons'), pw = cue(id, 'the predicted lines are wrong'), po = cap(id, cue(id, 'pushing on each other'));
	const a = f * 0.07;
	const PRED = [440, 482, 520, 560, 620, 700];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardBox x={96} y={200} w={1724} h={700} />
				{true ? <g><circle cx={330} cy={480} r={120} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" /><Nucleus x={330} y={480} r={26} /><Elec x={330 + 120 * Math.cos(a)} y={480 + 120 * Math.sin(a)} r={14} /></g> : null}
				{true ? <g><circle cx={820} cy={480} r={120} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" /><Nucleus x={820} y={480} r={26} /><Elec x={820 + 120 * Math.cos(a)} y={480 + 120 * Math.sin(a)} r={14} /><Elec x={820 - 120 * Math.cos(a)} y={480 - 120 * Math.sin(a)} r={14} /></g> : null}
				{f >= po ? <g opacity={prog(f, po, 10)}><Arrow from={[820 + 90 * Math.cos(a), 480 + 90 * Math.sin(a)]} to={[820 + 30 * Math.cos(a), 480 + 30 * Math.sin(a)]} color={ROSE.stroke} width={5} head={14} /><Arrow from={[820 - 90 * Math.cos(a), 480 - 90 * Math.sin(a)]} to={[820 - 30 * Math.cos(a), 480 - 30 * Math.sin(a)]} color={ROSE.stroke} width={5} head={14} /></g> : null}
				<LineStrip x={1100} y={380} w={640} h={60} lines={PRED} opacity={prog(f, pw, 12)} />
				<LineStrip x={1100} y={540} w={640} h={60} lines={HE_LINES} />
				{f >= io ? <circle cx={330} cy={480} r={150} fill="none" stroke={INK} strokeWidth={4} opacity={pulseOf(f, io, 40)} /> : null}
				{f >= he ? <circle cx={820} cy={480} r={150} fill="none" stroke={INK} strokeWidth={4} opacity={pulseOf(f, he, 40)} /> : null}
			</FrameSvg>
			<Lbl x={120} y={240} at={0} color={INK} size={34}>limitation 1: one electron only</Lbl>
			<Lbl x={330} y={660} at={io} color={INK} size={28} anchor="middle">He⁺: one electron ✓</Lbl>
			<Lbl x={820} y={660} at={he} color={INK} size={28} anchor="middle">helium: two electrons</Lbl>
			<Lbl x={1100} y={360} at={pw} color={GREY.ink} size={26}>one-electron rules applied (sketch)</Lbl>
			<Lbl x={1100} y={520} at={0} color={INK} size={26}>measured helium lines</Lbl>
			<HandTag x={1100} y={680} text="predicted ≠ observed" at={pw + 30} size={34} color={INK} />
			<Lbl x={120} y={760} at={po} color={ROSE.ink} size={30}>electron-electron repulsion: ignored</Lbl>
			<HandTag x={700} y={820} text="they push each other" at={po + 8} size={34} color={ROSE.ink} marks={[{kind: 'circle', cx: 820, cy: 480, rx: 120, ry: 60}]} />
		</>
	);
};

// ---------- 13. limit 2: the details of the lines ----------
const ZM = {x: 1000, y: 250, w: 820, h: 560};
export const S13: React.FC = () => {
	const id = 'limit-details';
	const f = useCurrentFrame();
	const mb = cue(id, 'much brighter than others'), tc = cue(id, 'two or more lines very close together'), mf = cue(id, 'in a magnetic field'), th = cap(id, cue(id, 'predicts none of this'));
	const sep = 60 * prog(f, tc, 30), spl = 40 * prog(f, mf + 10, 30);
	const cx = ZM.x + ZM.w / 2;
	const lines = sep < 1 ? [cx] : [cx - sep, cx + sep];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardBox x={96} y={250} w={860} h={560} />
				<LineStrip x={140} y={420} w={760} h={80} lines={LINES5.slice(0, 4)} strengths={f >= mb ? [1, 0.5, 0.3, 0.2] : [1, 1, 1, 1]} />
				<rect x={ZM.x} y={ZM.y} width={ZM.w} height={ZM.h} rx={16} fill="#14110f" stroke={INK} strokeWidth={3} />
				{f >= mf ? <g opacity={prog(f, mf, 12)}>{Array.from({length: 5}, (_, i) => Array.from({length: 3}, (_, j) => { const x = ZM.x + 90 + i * 160, y = ZM.y + 90 + j * 190; return <g key={`${i}${j}`} stroke={GREY.stroke} strokeWidth={4}><line x1={x - 12} y1={y - 12} x2={x + 12} y2={y + 12} /><line x1={x + 12} y1={y - 12} x2={x - 12} y2={y + 12} /></g>; }))}</g> : null}
				{lines.map((x, i) => (spl > 0.5 ? [-spl, 0, spl] : [0]).map((d, j) => <rect key={`${i}${j}`} x={x + d - 6} y={ZM.y + 40} width={12} height={ZM.h - 80} fill={RED_C} opacity={j === 1 || spl <= 0.5 ? 1 : 0.7} />))}
				<path d={`M${140 + ((656 - 380) / 370) * 760},420 L${ZM.x},${ZM.y}`} stroke={GREY.stroke} strokeWidth={2.5} strokeDasharray="8 6" fill="none" />
			</FrameSvg>
			<Lbl x={120} y={290} at={0} color={INK} size={34}>limitation 2: line details</Lbl>
			<Lbl x={140} y={400} at={mb} color={INK} size={26}>relative intensities: not explained (brightness sketched)</Lbl>
			<HandTag x={140} y={600} text="why brighter?" at={mb + 20} size={36} color={INK} />
			<Lbl x={ZM.x} y={ZM.y - 22} at={0} color={INK} size={26}>zoom on the 656 nm line (not to scale)</Lbl>
			<Lbl x={ZM.x + 20} y={ZM.y + ZM.h + 40} at={tc + 20} color={INK} size={28}>fine structure: two close lines</Lbl>
			<Lbl x={ZM.x + 20} y={ZM.y + ZM.h + 84} at={mf + 20} color={GREY.ink} size={28}>magnetic field (×): they split further</Lbl>
			<div style={{position: 'absolute', left: 140, top: 680}}><Row at={th} size={34}><AnswerBox at={th + 6}>intensities and fine structure: not predicted</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={th + 10} color={INK} marks={[{kind: 'circle', cx: cx, cy: ZM.y + ZM.h / 2, rx: 160, ry: 200}]} />
		</>
	);
};

// ---------- 14. limit 3: rules without reasons ----------
const seam = (x: number, y0: number, y1: number) => Array.from({length: 11}, (_, i) => `${i ? 'L' : 'M'}${x + (i % 2 ? 22 : -22)},${y0 + ((y1 - y0) * i) / 10}`).join(' ');
export const S14: React.FC = () => {
	const id = 'limit-hybrid';
	const f = useCurrentFrame();
	const mx = cue(id, 'mixes two kinds of physics'), kc = cue(id, "It keeps classical orbits and Coulomb's force"), so = cue(id, 'switches off classical radiation'), ar = cue(id, 'assumes the angular momentum rule'), wy = cap(id, cue(id, "it doesn't say why"));
	const a = f * 0.06;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={250} width={860} height={560} rx={16} fill="#e6edf6" stroke={NAVY.stroke} strokeWidth={3} />
				<rect x={960} y={250} width={860} height={560} rx={16} fill="#fbf0dc" stroke={AMBER.stroke} strokeWidth={3} />
				<path d={seam(958, 250, 810)} fill="none" stroke={INK} strokeWidth={5} />
				<circle cx={420} cy={560} r={170} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<Nucleus x={420} y={560} r={24} />
				<Elec x={420 + 170 * Math.cos(a)} y={560 + 170 * Math.sin(a)} r={14} />
				{f >= kc ? <Arrow from={[420 + 150 * Math.cos(a), 560 + 150 * Math.sin(a)]} to={[420 + 60 * Math.cos(a), 560 + 60 * Math.sin(a)]} color={AMBER.stroke} width={5} head={14} opacity={prog(f, kc, 12)} /> : null}
				{f >= so ? <g opacity={prog(f, so, 12)}><Wavelets x={1180} y={520} u={(f % 40) / 40} r0={16} r1={70} /><line x1={1120} y1={460} x2={1240} y2={580} stroke={GREY.stroke} strokeWidth={8} /><line x1={1240} y1={460} x2={1120} y2={580} stroke={GREY.stroke} strokeWidth={8} /></g> : null}
			</FrameSvg>
			<Lbl x={120} y={290} at={0} color={NAVY.ink} size={32}>classical</Lbl>
			<Lbl x={984} y={290} at={0} color={AMBER.ink} size={32}>quantum</Lbl>
			<Lbl x={120} y={340} at={kc} color={NAVY.ink} size={28}>circular orbits, Coulomb force</Lbl>
			<Lbl x={984} y={340} at={so} color={AMBER.ink} size={28}>no radiation in an allowed orbit</Lbl>
			<Lbl x={1300} y={520} at={so + 10} color={GREY.ink} size={28}>switched off (assumed)</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 640}}><Row at={ar} size={40}><AnswerBox at={ar + 6} tick={false}>mvr = nh / 2π (assumed)</AnswerBox></Row></div>
			<HandTag x={760} y={220} text="hybrid" at={mx} size={40} color={INK} />
			<div style={{position: 'absolute', left: 96, top: 840}}><Row at={wy} size={36}><AnswerBox at={wy + 6}>limitation 3: rules assumed, not explained</AnswerBox></Row></div>
			<HandTag x={1100} y={860} text="two kinds of physics" at={wy + 10} size={34} color={INK} marks={[{kind: 'arrow', from: [958, 280], to: [958, 790], bend: 0.05}]} />
		</>
	);
};
