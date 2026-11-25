// Scenes 7 to 12: Rydberg for the red line (full-width working), the blue-green line and the swapped-levels trap, the
// live n_i slider (drops to n = 2 from 5 to 10 with live ΔE, 1/λ and λ; lines bunching into the UV band; the drop
// sizes becoming almost equal), the series limit (an edge at 365 nm, not a line), why Balmer is the visible series (the
// series fan on one wavelength axis) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {Packet} from '../../physics/light/photo';
import {wlColor} from '../../physics/light/spectrum';
import {DropArrow, HLevels, yOf} from '../../physics/atom/bohr';
import type {LevelsGeom} from '../../physics/atom/bohr';
import {HEAD, HEAD_SIZE, INV32, INV42, INV_LIM, LIM_NM, SLIDE_N, VIS_HI, VIS_LO, cap, cue, eVofNm, invLambda, rydbergNm} from './common';
import {GREY, GlowTube, Givens, INK, Lbl, LineStrip, NAVY, ORANGE, Strip, TEAL, UvStrip, fx, lineColor, sci, stripX, tubeW, uvX} from './parts';
import {BRIGHT, LS, SmallLadder} from './s1';

const CYAN = wlColor(BRIGHT[1]);

// ---------- 7. Rydberg for the red line ----------
export const S07: React.FC = () => {
	const id = 'rydberg-red';
	const f = useCurrentFrame();
	const fl = cue(id, 'The final level, n f'), qn = cue(id, 'One quarter minus one ninth'), pm = cue(id, 'one point five two four times ten to the six'), fi = cue(id, 'Flip it'), ag = cap(id, cue(id, 'nanometres again'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SmallLadder f={f} labels={false} /></FrameSvg>
			<Lbl x={LS.x} y={LS.top - 20} at={0} color={GREY.ink} size={26}>3 → 2</Lbl>
			<FrameSvg><LineStrip x={440} y={830} w={900} h={56} lines={BRIGHT} /></FrameSvg>
			<Lbl x={440} y={810} at={0} color={INK} size={26}>measured hydrogen lines</Lbl>
			<FrameSvg><GlowTube x={1660} y={400} h={400} /></FrameSvg>
			<Lbl x={1660 + tubeW(400) / 2} y={830} at={0} color={GREY.ink} size={26} anchor="middle">hydrogen tube</Lbl>
			<Strip x={440} y={190} at={0} size={34}>Use the Rydberg equation for 3 → 2</Strip>
			<Strip x={1130} y={190} at={0} size={34}>1/λ = R (1/n<sub>f</sub>² − 1/n<sub>i</sub>²)</Strip>
			<Givens x={440} y={270} w={900} at={0} size={32} lines={['nf = 2 (lower), ni = 3, R = 1.097 × 10⁷ m⁻¹']} />
			<HandTag x={0} y={0} at={fl + 10} color={TEAL.stroke} marks={[{kind: 'circle', cx: 540, cy: 300, rx: 110, ry: 34}]} />
			<div style={{position: 'absolute', left: 440, top: 400, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={qn} ageAt={pm} size={44}>{`1/2² − 1/3² = 1/4 − 1/9 = 5/36 = ${fx(5 / 36, 4)}`}</Row>
				<Row at={pm - 10} ageAt={ag} size={44}>{`1/λ = 1.097 × 10⁷ × 5/36 = ${sci(INV32, 3)} m⁻¹`}</Row>
				<Row at={ag - 20} size={44}><AnswerBox at={ag}>{`λ = 1 / (${sci(INV32, 3)}) = ${sci(1 / INV32, 2)} m = ${fx(1e9 / INV32)} nm`}</AnswerBox></Row>
			</div>
			<HandTag x={1200} y={730} text="flip it" at={fi} size={40} color={TEAL.ink} />
			<Chip x={1100} y={640} at={ag} size={30} color={INK}>{`gap method: ${fx(1e9 / INV32)} nm ✓`}</Chip>
		</>
	);
};

// ---------- 8. the blue-green line, and the trap ----------
const ST8 = {x: 440, y: 800, w: 880, h: 60};
export const S08: React.FC = () => {
	const id = 'rydberg-blue-trap';
	const f = useCurrentFrame();
	const n4 = cue(id, 'n i is four'), ts = cue(id, 'three sixteenths'), nm = cue(id, 'four hundred and eighty six nanometres'), al = cue(id, 'Always make the lower level n f'), sw = cap(id, cue(id, "you've swapped them"));
	const fly = prog(f, nm, 30), x486 = stripX(ST8.x, ST8.w, BRIGHT[1]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SmallLadder f={f} from={4} to={2} color={CYAN} at={n4} labels={false} />
				<LineStrip x={ST8.x} y={ST8.y} w={ST8.w} h={ST8.h} lines={BRIGHT} />
				{f >= nm && fly < 1 ? <Packet x={LS.x + 150 + (x486 - LS.x - 150) * fly} y={400 + (ST8.y + 30 - 400) * fly} len={56} color={CYAN} /> : null}
				{f >= nm + 30 ? <Mark x={x486 + 40} y={ST8.y - 20} at={nm + 30} kind="tick" color={INK} size={36} /> : null}
			</FrameSvg>
			<Strip x={440} y={190} at={0} size={34}>{`kept: 3 → 2: ${fx(1e9 / INV32)} nm`}</Strip>
			<Givens x={440} y={270} w={700} at={n4} size={32} lines={['nf = 2, ni = 4']} />
			<div style={{position: 'absolute', left: 440, top: 380, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={ts} ageAt={nm + 20} size={46}>{`1/4 − 1/16 = 3/16 = ${fx(3 / 16, 4)};  1/λ = ${sci(INV42, 3)} m⁻¹`}</Row>
				<Row at={nm} size={52}><AnswerBox at={nm + 6}>{`λ = ${fx(1e9 / INV42)} nm`}</AnswerBox></Row>
			</div>
			<Chip x={1000} y={560} at={al} size={32} color={NAVY.ink}>nf = lower (final) level</Chip>
			<FrameSvg><GlowTube x={1660} y={380} h={400} /></FrameSvg>
			<CrossedChip x={1000} y={650} at={sw} crossAt={sw + 8} size={26} caption="negative → ni and nf swapped">{`1/λ = R(1/4² − 1/2²) = ${sci(-INV42, 3)} m⁻¹`}</CrossedChip>
			<Lbl x={ST8.x} y={ST8.y - 22} at={0} color={INK} size={26}>measured lines</Lbl>
		</>
	);
};

// ---------- 9 and 10. the live n_i slider, the series limit ----------
export const L9: LevelsGeom = {x: 150, w: 400, top: 230, bot: 900};
const S9 = {x: 1080, y: 210, w: 720, h: 90, nm0: 340, nm1: 700};
const SL_X = 620;
const nSteps = (f: number, five: number, seven: number, bunch: number): number => {
	if (f < five) return 0;
	if (f < five + 40) return 5;
	if (f < seven) return 6;
	if (f < bunch) return 7;
	return Math.min(10, 8 + Math.floor((f - bunch) / 20));
};
const Slider: React.FC<{n: number}> = ({n}) => (
	<g>
		<line x1={SL_X} y1={yOf(L9, 4) - 4} x2={SL_X} y2={L9.top - 10} stroke={TEAL.stroke} strokeWidth={5} />
		{n ? <circle cx={SL_X} cy={Number.isFinite(n) ? yOf(L9, n) : L9.top} r={14} fill={TEAL.stroke} stroke="#ffffff" strokeWidth={3} /> : null}
	</g>
);
export const S09: React.FC = () => {
	const id = 'crowding';
	const f = useCurrentFrame();
	const fs = cue(id, 'Levels five and six'), ma = cue(id, 'matching all four bright lines'), l7 = cue(id, 'Level seven gives'), bu = cue(id, 'the lines bunch up'), sz = cap(id, cue(id, 'almost the same size'));
	const n = nSteps(f, fs, l7, bu);
	const shown = SLIDE_N.filter(k => k <= n);
	const nm = n ? rydbergNm(2, n) : NaN;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HLevels g={L9} levels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} color={NAVY.stroke} infLabel="" hi={2} />
				{shown.map(k => <DropArrow key={k} g={L9} x={L9.x + 160 + 24 * (k - 5)} from={k} to={2} color={lineColor(rydbergNm(2, k))} width={5} />)}
				<Slider n={n} />
				<UvStrip x={S9.x} y={S9.y} w={S9.w} h={S9.h} nm0={S9.nm0} nm1={S9.nm1} lines={[...BRIGHT.slice(0, 2), ...shown.map(k => rydbergNm(2, k))]} strengths={[1, 1, ...shown.map(k => (k >= 7 ? 0.5 : 1))]} />
				{f >= sz ? <g opacity={prog(f, sz, 12)}>
					<rect x={S9.x} y={560} width={S9.w} height={340} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					{SLIDE_N.map((k, i) => { const e = eVofNm(rydbergNm(2, k)); return <g key={k}><rect x={S9.x + 120} y={600 + i * 46} width={(e / 3.4) * 520} height={30} rx={6} fill={ORANGE.soft} stroke={ORANGE.stroke} strokeWidth={2.5} /><text x={S9.x + 100} y={624 + i * 46} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>{`${k} → 2`}</text></g>; })}
				</g> : null}
			</FrameSvg>
			<Lbl x={L9.x - 14} y={yOf(L9, 1)} at={0} color={NAVY.ink} size={26} anchor="end">n = 1</Lbl>
			<Lbl x={L9.x - 14} y={yOf(L9, 2)} at={0} color={NAVY.ink} size={26} anchor="end">n = 2</Lbl>
			<Lbl x={SL_X} y={yOf(L9, 4) + 30} at={0} color={TEAL.ink} size={28} anchor="middle">nᵢ</Lbl>
			<Readout x={700} y={330} label="nᵢ" value={n ? String(n) : '·'} color={TEAL.ink} w={300} />
			<Readout x={700} y={450} label="ΔE" value={n ? `${fx(eVofNm(nm), 3)} eV` : '·'} color={ORANGE.stroke} w={300} />
			<Readout x={700} y={570} label="1/λ" value={n ? `${sci(invLambda(2, n), 3)} m⁻¹` : '·'} color={INK} w={340} size={44} />
			<Readout x={700} y={690} label="λ" value={n ? `${fx(nm, 1)} nm` : '·'} color={INK} w={300} />
			<Chip x={S9.x} y={330} at={0} size={28} color={INK}>{`kept: 3 → 2: ${Math.round(BRIGHT[0])} nm`}</Chip>
			<Chip x={S9.x + 380} y={330} at={0} size={28} color={INK}>{`4 → 2: ${Math.round(BRIGHT[1])} nm`}</Chip>
			<div style={{position: 'absolute', left: S9.x, top: 410}}><Row at={ma} size={32}><AnswerBox at={ma + 6}>all four predicted</AnswerBox></Row></div>
			<HandTag x={S9.x + 400} y={440} text="faint, still visible" at={l7 + 10} out={bu} size={30} color={TEAL.ink} />
			<HandTag x={0} y={0} at={bu + 40} color={TEAL.stroke} marks={[{kind: 'underline', x1: uvX(S9.x, S9.w, S9.nm0, S9.nm1, 378), x2: uvX(S9.x, S9.w, S9.nm0, S9.nm1, 400), y: S9.y + S9.h + 14}]} />
			<Lbl x={S9.x} y={S9.y - 18} at={0} color={INK} size={26}>{`${S9.nm0} to ${S9.nm1} nm (UV below 380 nm, grey)`}</Lbl>
			<Lbl x={S9.x + 20} y={590} at={sz} color={INK} size={26}>drop sizes to n = 2 (eV)</Lbl>
			<HandTag x={S9.x + 300} y={880} text="upper levels crowd → lines crowd" at={sz + 6} size={30} color={ORANGE.ink} />
		</>
	);
};
export const S10: React.FC = () => {
	const id = 'series-limit';
	const f = useCurrentFrame();
	const ni = cue(id, 'starts at n equals infinity'), iz = cue(id, 'one over n i squared is zero'), r4 = cue(id, 'one over lambda is R over four'), sf = cue(id, 'three hundred and sixty five nanometres'), sl = cue(id, "That's the series limit"), nl = cue(id, "It isn't one more line"), tw = cap(id, cue(id, 'the edge the lines crowd towards'));
	const more = Array.from({length: 22}, (_, i) => rydbergNm(2, 11 + i));
	const pile = prog(f, nl, 30);
	const xLim = uvX(S9.x, S9.w, S9.nm0, S9.nm1, LIM_NM);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HLevels g={L9} levels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} color={NAVY.stroke} infLabel="" hi={2} />
				{f >= ni ? <line x1={L9.x} y1={L9.top} x2={L9.x + L9.w} y2={L9.top} stroke={GREY.stroke} strokeWidth={8} strokeDasharray="14 8" opacity={prog(f, ni, 12)} /> : null}
				{f >= ni ? <DropArrow g={L9} x={L9.x + 330} from={Infinity} to={2} color={GREY.stroke} dash="12 8" u={prog(f, ni + 6, 20)} width={6} /> : null}
				<Slider n={f >= ni ? Infinity : 10} />
				<UvStrip x={S9.x} y={S9.y} w={S9.w} h={S9.h} nm0={S9.nm0} nm1={S9.nm1} lines={[...BRIGHT.slice(0, 2), ...SLIDE_N.map(k => rydbergNm(2, k)), ...more.slice(0, Math.round(more.length * pile))]} strengths={[1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, ...more.map(() => 0.4)]} lineW={5} />
				{f >= sl ? <line x1={xLim} y1={S9.y - 14} x2={xLim} y2={S9.y + S9.h + 14} stroke={GREY.stroke} strokeWidth={6} strokeDasharray="10 7" opacity={prog(f, sl, 12)} /> : null}
			</FrameSvg>
			<Lbl x={L9.x + L9.w + 14} y={L9.top + 4} at={ni} color={GREY.ink} size={28}>n = ∞, E = 0 (just free)</Lbl>
			<Lbl x={L9.x - 14} y={yOf(L9, 2)} at={0} color={NAVY.ink} size={26} anchor="end">n = 2</Lbl>
			<Readout x={700} y={330} label="nᵢ" value={f >= ni ? '∞' : '10'} color={TEAL.ink} w={300} />
			<Readout x={700} y={450} label="ΔE" value={`${fx(eVofNm(f >= ni ? LIM_NM : rydbergNm(2, 10)), 3)} eV`} color={ORANGE.stroke} w={300} />
			<Readout x={1060} y={450} label="λ" value={`${fx(f >= ni ? LIM_NM : rydbergNm(2, 10), 1)} nm`} color={INK} w={300} />
			<div style={{position: 'absolute', left: 700, top: 600, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={iz} ageAt={sf} size={44}>1/∞² = 0</Row>
				<Row at={r4} ageAt={sf} size={44}>{`1/λ = R/4 = ${sci(INV_LIM, 3)} m⁻¹`}</Row>
				<Row at={sf} size={52}><AnswerBox at={sf + 6}>{`λ = ${fx(LIM_NM)} nm`}</AnswerBox></Row>
			</div>
			<Lbl x={xLim} y={S9.y + S9.h + 50} at={sl} color={GREY.ink} size={28} anchor="middle">Balmer series limit</Lbl>
			<Lbl x={S9.x} y={S9.y - 18} at={0} color={INK} size={26}>{`${S9.nm0} to ${S9.nm1} nm (UV below 380 nm, grey)`}</Lbl>
			<Lbl x={1380} y={640} at={nl} color={INK} size={28}>limit: the edge of the series,</Lbl>
			<Lbl x={1380} y={680} at={nl} color={INK} size={28}>not a single level&apos;s line</Lbl>
			<HandTag x={1380} y={760} text="an edge, not a line" at={tw} size={36} color={GREY.ink} marks={[{kind: 'circle', cx: xLim, cy: S9.y + S9.h / 2, rx: 34, ry: 70}]} />
		</>
	);
};

// ---------- 11 and 12. the series fan ----------
export const L11: LevelsGeom = {x: 150, w: 820, top: 230, bot: 880};
const AX = {x: 1080, w: 740, y: 330, lo: Math.log10(80), hi: Math.log10(2000)};
export const lx = (nm: number) => AX.x + ((Math.log10(nm) - AX.lo) / (AX.hi - AX.lo)) * AX.w;
export const FAM = [
	{name: 'Lyman', to: 1, from: [2, 3, 4, 5, Infinity], x0: 210, color: GREY.stroke, row: 430},
	{name: 'Balmer', to: 2, from: [3, 4, 5, 6, Infinity], x0: 470, color: '', row: 510},
	{name: 'Paschen', to: 3, from: [4, 5, 6, Infinity], x0: 760, color: GREY.stroke, row: 590},
] as const;
export const SeriesFan: React.FC<{f: number; o?: readonly number[]}> = ({f, o = [1, 1, 1]}) => (
	<g>
		<HLevels g={L11} levels={[1, 2, 3, 4, 5, 6]} color={NAVY.stroke} infLabel="" />
		{FAM.map((fam, j) => fam.from.map((n, k) => <DropArrow key={`${j}-${k}`} g={L11} x={fam.x0 + 36 * k} from={n} to={fam.to} color={fam.color || lineColor(rydbergNm(2, n))} width={5} dash={Number.isFinite(n) ? undefined : '10 7'} />))}
		<rect x={lx(80)} y={AX.y} width={lx(380) - lx(80)} height={40} fill="#e6e0f0" />
		{Array.from({length: 30}, (_, i) => { const a = 380 + (370 * i) / 30, b = 380 + (370 * (i + 1)) / 30; return <rect key={i} x={lx(a)} y={AX.y} width={lx(b) - lx(a) + 0.8} height={40} fill={wlColor((a + b) / 2)} />; })}
		<rect x={lx(750)} y={AX.y} width={lx(2000) - lx(750)} height={40} fill="#f4e1d6" />
		<rect x={AX.x} y={AX.y} width={AX.w} height={40} fill="none" stroke={INK} strokeWidth={3} />
		{FAM.map((fam, j) => <g key={fam.name} opacity={o[j]}>
			<line x1={AX.x} y1={fam.row} x2={AX.x + AX.w} y2={fam.row} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			{[...fam.from, ...(j === 1 ? [7, 8, 9, 10] : [])].map((n, k) => { const nm = rydbergNm(fam.to, n); return <rect key={k} x={lx(nm) - 3} y={fam.row - 22} width={6} height={44} fill={j === 1 ? lineColor(nm) : '#6b6358'} />; })}
		</g>)}
		{[100, 200, 400, 1000, 2000].map(t => <g key={t}><line x1={lx(t)} y1={AX.y + 40} x2={lx(t)} y2={AX.y + 52} stroke={INK} strokeWidth={3} /><text x={lx(t)} y={AX.y - 12} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{t}</text></g>)}
	</g>
);
export const S11: React.FC = () => {
	const id = 'other-series';
	const f = useCurrentFrame();
	const vr = cue(id, 'one point seven to three point three electron volts'), tl = cue(id, 'at least ten point two electron volts'), mo = cue(id, 'at most one point five one'), od = cue(id, 'Only drops to level two land in the visible'), ff = cap(id, cue(id, 'first few lines'));
	const o = [prog(f, tl, 14), prog(f, od, 14), prog(f, mo, 14)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SeriesFan f={f} o={o} /></FrameSvg>
			<Lbl x={AX.x} y={AX.y - 52} at={0} color={INK} size={26}>wavelength (nm, log scale)</Lbl>
			<Lbl x={lx(100)} y={AX.y + 80} at={0} color={GREY.ink} size={26} anchor="middle">UV</Lbl>
			<Lbl x={lx(530)} y={AX.y + 80} at={0} color={INK} size={26} anchor="middle">visible</Lbl>
			<Lbl x={lx(1300)} y={AX.y + 80} at={0} color={GREY.ink} size={26} anchor="middle">IR</Lbl>
			<Lbl x={AX.x} y={690} at={vr} color={INK} size={28}>{`visible: ${fx(VIS_LO, 2)} to ${fx(VIS_HI, 2)} eV (750 to 380 nm)`}</Lbl>
			<HandTag x={0} y={0} at={vr + 10} color={INK} marks={[{kind: 'circle', cx: (lx(380) + lx(750)) / 2, cy: AX.y + 20, rx: (lx(750) - lx(380)) / 2 + 24, ry: 40}]} />
			{FAM.map((fam, j) => <Lbl key={fam.name} x={fam.x0 + 60} y={L11.bot + 44} at={[tl, od, mo][j]} color={j === 1 ? INK : GREY.ink} size={28} anchor="middle">{fam.name}</Lbl>)}
			<Lbl x={AX.x - 10} y={430} at={tl} color={GREY.ink} size={26} anchor="end">L</Lbl>
			<Lbl x={AX.x - 10} y={510} at={od} color={INK} size={26} anchor="end">B</Lbl>
			<Lbl x={AX.x - 10} y={590} at={mo} color={GREY.ink} size={26} anchor="end">P</Lbl>
			<Lbl x={AX.x} y={740} at={tl} color={GREY.ink} size={26}>{`Lyman 2 → 1: ${fx(10.2, 1)} eV, ${Math.round(rydbergNm(1, 2))} nm: too big, UV`}</Lbl>
			<Lbl x={AX.x} y={780} at={mo} color={GREY.ink} size={26}>{`Paschen ∞ → 3: ${fx(13.6 / 9, 2)} eV, ${Math.round(rydbergNm(3, Infinity))} nm;  4 → 3: ${fx(eVofNm(rydbergNm(3, 4)), 2)} eV, ${Math.round(rydbergNm(3, 4))} nm`}</Lbl>
			<HandTag x={AX.x} y={840} text="too small: IR" at={mo + 14} size={30} color={GREY.ink} />
			<Lbl x={AX.x} y={900} at={ff} color={INK} size={26}>Balmer: bright lines visible; the tail reaches UV</Lbl>
		</>
	);
};
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const lb = cue(id, 'Lyman, Balmer, Paschen land on'), uv = cap(id, cue(id, 'Ultraviolet, visible, infrared'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SeriesFan f={f} /></FrameSvg>
			{['Lyman → n = 1: UV', 'Balmer → n = 2: visible', 'Paschen → n = 3: IR'].map((t, j) => <Chip key={t} x={AX.x} y={630 + 60 * j} at={lb + 10 * j} size={28} color={j === 1 ? INK : GREY.ink}>{t}</Chip>)}
			<HandTag x={AX.x - 40} y={840} text="Lyman, Balmer, Paschen land on 1, 2, 3:" at={uv} size={44} color={INK} />
			<HandTag x={AX.x - 40} y={905} text="ultraviolet, visible, infrared." at={uv + 10} size={44} color={INK} />
		</>
	);
};
