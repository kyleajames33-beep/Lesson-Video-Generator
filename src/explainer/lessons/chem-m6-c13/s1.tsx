// M6 C13 scenes 1 to 6: one titration and two indicators (rig, counter, the methyl orange set and its ring); an
// indicator is a weak acid (lens with HIn and In-, strip, conjugate pair, colour tags, swatch); the reversible switch
// (hydroxide removes hydronium, the flask turns pink, acid turns it back, three cycles); the transition range (ratio
// columns on a pH ruler, then four range bands); endpoint against equivalence; what is in the flask at equivalence.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hexMix, kf, sc} from './common';
import {CFLASK, MO_SET, PHTH, PH_SET, SET_U, TILE} from './assets';
import {
	ACID_INK, AChip, An, BASE_INK, HInTok, InTok, mw, BTB_BLUE, BTB_YEL, BuretteFill, CLEAR, ColBar, Counter, DimG, EqBox, EqLine, Fade, H3O, HydSite, IndSite, INK, INK_SOFT, LensFrame, MO_RED, MO_YEL, MR_RED,
	MeetPair, NAVY, NaTok, Note, OpGlow, Overlay, PINK, PINK_INK, PHRuler, PairBracket, PicH, RBand, Rig, SetRing, Swatch, Sx, TEAL, WaterT, burAt, burPt, eSpan, eq, fitSize, levelY, picW, rx,
	smooth,
} from './parts';
import type {IEv, PR} from './parts';

const LENS_BG = '#eef6fb';

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {here: "Here's twenty five", tf: 'needs twenty five', phth: 'With phenolphthalein', pink: 'pink within', mo: 'methyl orange', drifts: 'drifts from red', first: 'first eight', same: 'Same acid', mislead: 'mislead you'});
const moPos = (v: number) => (v < 0.35 ? 0 : v < 2.0 ? (v - 0.35) / 1.65 : 1 + Math.min(1, (v - 2.0) / 5.8));
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 820, ty: 600, bh: 500, fh: 250};
	const b = burAt(R.tx, R.ty, R.bh);
	const fw = picW(CFLASK, R.fh), fx = R.tx - fw / 2, fy = R.ty + 16;
	const tw = fw * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const [tubeR, yTop] = burPt(b.x, b.y, R.bh, 1172, 300);
	const run1 = K1.pink - 22, run2 = K1.mo + 30;
	const level = (fr: number) => kf(fr, [[run1, 0], [K1.pink + 32, 25], [K1.mo, 25], [K1.mo + 22, 0], [run2, 0], [K1.first + 6, 8]], false);
	const vol = level(f);
	const pinkO = prog(f, K1.pink + 22, 26) * (1 - prog(f, K1.mo, 20));
	const clearO = 1 - prog(f, K1.mo, 20);
	const freshO = prog(f, K1.mo, 20);
	const phase2 = f >= K1.mo + 22;
	return (
		<>
			<Heading text="Which indicator, and why?" at={K1.mislead} size={60} />
			<Overlay>
				<PicH p={TILE} x={R.tx - tw / 2} y={fy + R.fh - th * 0.55} h={th} />
				<BuretteFill x={b.x} y={b.y} h={R.bh} level={() => vol} />
				{clearO > 0.01 ? <PicH p={PHTH.clear} x={fx} y={fy} h={R.fh} o={clearO * (1 - pinkO)} /> : null}
				{pinkO > 0.01 ? <PicH p={PHTH.pink} x={fx} y={fy} h={R.fh} o={pinkO} /> : null}
				{freshO > 0.01 ? <PicH p={PHTH.clear} x={fx} y={fy} h={R.fh} o={freshO} /> : null}
				<Note x={fx - 24} y={fy + R.fh * 0.62} text="25.00 mL of 0.100 mol/L CH_3COOH" size={32} color={ACID_INK} anchor="end" at={K1.here + 70} />
				<Note x={tubeR + 26} y={yTop} text="0.100 mol/L NaOH" size={32} color={NAVY} at={K1.here + 240} />
				<Note x={fx - 24} y={fy + R.fh * 0.62 + 50} text="+ phenolphthalein" size={30} color={PINK_INK} anchor="end" at={K1.phth + 6} out={K1.mo} />
				<Note x={fx - 24} y={fy + R.fh * 0.62 + 50} text="+ methyl orange" size={30} color={MO_RED} anchor="end" at={K1.mo + 10} />
				<Counter x={tubeR + 110} y={yTop + 150} text={`${vol.toFixed(2)} mL`} at={run1} color={NAVY} size={32} />
				<DimG at={K1.phth} to={0.4}>
					<AChip x={1150} y={250} text="n(acid) = n(NaOH): 25.00 mL needed" size={32} color={INK_SOFT} hand={false} at={K1.tf} />
				</DimG>
				<AChip x={1150} y={330} text="phenolphthalein: 25.00 mL" size={32} color={PINK_INK} hand={false} at={K1.pink + 40} />
				<Fade at={K1.pink + 50}><DrawPath d="M1610,354 L1624,370 L1650,340" at={K1.pink + 50} dur={10} color="#2f8a5b" width={6} /></Fade>
				<SetRing p={MO_SET} u={SET_U.mo} x={1150} y={520} h={220} at={K1.mo} pos={fr => (fr >= K1.mo + 22 ? moPos(level(fr)) : 0)} ringAt={run2} />
				<Note x={1150 + picW(MO_SET, 220) / 2} y={790} text="the methyl orange flask's colour as base goes in" size={28} color={INK_SOFT} anchor="middle" at={run2 + 10} />
				<AChip x={1150} y={410} text="methyl orange: changes over 0 to 8 mL ?" size={32} color={MO_RED} hand={false} at={K1.first} />
				{void phase2}{void K1.drifts}{void K1.same}
			</Overlay>
		</>
	);
};

// ---------- shared lens for scenes 2 and 3 ----------
export const IND_STRIP = (at: number | number[]) => eq(['HIn(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'In^{−}(aq)'], at);
const LZ = {cx: 560, cy: 610, r: 200};
const SITES: [number, number, number][] = [[-0.5, -0.4, -0.6], [0.05, -0.32, 0.4], [0.55, -0.05, -2.3], [-0.1, 0.12, -0.8], [-0.55, 0.42, 0.5], [0.32, 0.5, -1.0]];
const WATERS: [number, number][] = [[-0.82, -0.05], [0.72, 0.42], [0.0, 0.85], [-0.25, -0.82], [0.78, -0.5], [-0.25, 0.7]];
const sitePos = (i: number) => [LZ.cx + SITES[i][0] * LZ.r, LZ.cy + SITES[i][1] * LZ.r] as [number, number];
const siteW = (i: number, s: number) => { const [x, y] = sitePos(i); return [x + 40 * s, y - 30 * s] as [number, number]; };
const LS = 1.5;
const PL = {x: 110, y: 300, h: 300};
const SX = 860, SY = 330;
const IndLens: React.FC<{events: IEv[][]; init?: ('HIn' | 'In')[]; initH3O?: number; at: number; children?: React.ReactNode}> = ({events, init, initH3O, at, children}) => (
	<LensFrame cx={LZ.cx} cy={LZ.cy} r={LZ.r} at={at}>
		<rect x={LZ.cx - LZ.r} y={LZ.cy - LZ.r} width={2 * LZ.r} height={2 * LZ.r} fill={LENS_BG} />
		{WATERS.map(([u, v], i) => <WaterT key={'w' + i} x={LZ.cx + u * LZ.r} y={LZ.cy + v * LZ.r} s={1.1} o={0.7} />)}
		{SITES.map((s, i) => { const [x, y] = sitePos(i); return <IndSite key={i} x={x} y={y} s={LS} a={s[2]} color={PINK} events={events[i] ?? []} init={init?.[i] ?? 'HIn'} initH3O={initH3O} />; })}
		{children}
	</LensFrame>
);

// ---------- 2. An indicator is a weak acid ----------
const S2 = 'indicator-weak-acid';
const K2 = cues(sc(S2), {indicator: 'An indicator', hin: 'Call it H', gives: 'gives a proton', making: 'making hydronium', conj: 'conjugate base', inm: ['In minus', 1], trick: 'The trick', colourless: 'is colourless', pink: 'is pink', winning: 'which form'});
export const SceneIndicator: React.FC = () => {
	const strip = IND_STRIP([K2.hin, K2.gives, K2.gives + 20, K2.making, K2.making + 6, K2.inm - 6, K2.inm]);
	const ss = fitSize(strip, 980, 46);
	const pw = picW(PHTH.clear, PL.h);
	const tagY = SY + 64;
	return (
		<Overlay>
			<PicH p={PHTH.clear} x={PL.x} y={PL.y} h={PL.h} />
			<Swatch x={PL.x + pw / 2 - 75} y={PL.y + PL.h + 50} color={() => CLEAR} at={K2.trick} label="flask colour" />
			<Fade at={K2.hin - 10}><line x1={PL.x + pw - 10} y1={PL.y + PL.h * 0.7} x2={LZ.cx - LZ.r * 0.8} y2={LZ.cy - LZ.r * 0.5} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" /></Fade>
			<IndLens at={K2.hin - 10} events={[[], [{at: K2.inm + 4, to: 'In'}]]} />
			<EqLine items={strip} x={SX} y={SY} size={ss} />
			<PairBracket items={strip} i={0} j={6} size={ss} x={SX} y={SY} at={K2.conj} above color={TEAL} label="conjugate pair" lsize={30} />
			<Sx x={eSpan(strip, 0, ss, SX).cx} y={tagY} text="colourless" size={30} color={INK_SOFT} anchor="middle" hand at={K2.colourless} />
			<Sx x={eSpan(strip, 6, ss, SX).cx} y={tagY} text="pink" size={32} color={PINK} anchor="middle" hand at={K2.pink} />
			<Fade at={K2.hin + 10}><HInTok x={SX + 20} y={548} s={1.5} /></Fade>
			<Note x={SX + 60} y={560} text="HIn: the acid form" size={32} color={INK} at={K2.hin + 10} />
			<Fade at={K2.inm + 10}><InTok x={SX + 20} y={628} s={1.5} color={PINK} /></Fade>
			<Note x={SX + 60} y={640} text="In^{−}: its conjugate base form" size={32} color={PINK_INK} at={K2.inm + 10} />
			<Note x={SX} y={760} text="the colour shows which form wins" size={36} color={INK} at={K2.winning} />
			{void K2.indicator}
		</Overlay>
	);
};

// ---------- 3. A reversible switch ----------
const S3 = 'reversible-switch';
const K3 = cues(sc(S3), {add: 'Add sodium', hyd: 'removes hydronium', shifts: 'shifts right', builds: 'builds up', pink: 'turns pink', acid: 'Add acid', extra: 'extra hydronium', left: 'back left', again: 'again and again', used: 'used up', see: 'you can see'});
export const SceneSwitch: React.FC = () => {
	const f = useCurrentFrame();
	const strip = IND_STRIP(-100);
	const ss = fitSize(strip, 980, 46);
	const pw = picW(PHTH.clear, PL.h);
	const tagY = SY + 64;
	const fwd = [0, 2, 3, 4, 5].map((i, k) => K3.shifts + 4 + k * 20);
	const back = [0, 1, 2, 3, 4, 5].map((i, k) => K3.extra + 6 + k * 13);
	const events: IEv[][] = SITES.map((_, i) => {
		const e: IEv[] = [];
		if (i !== 1) { const k = [0, 2, 3, 4, 5].indexOf(i); e.push({at: fwd[k], to: 'In', meet: fwd[k] + 30}); }
		e.push({at: back[i], to: 'HIn'});
		return e;
	});
	const c1 = K3.again, c2 = K3.again + 34;
	const frac = (fr: number) => kf(fr, [[K3.shifts + 60, 0], [K3.pink + 6, 1], [K3.extra + 20, 1], [K3.left + 20, 0], [c1, 0], [c1 + 10, 1], [c1 + 20, 1], [c1 + 30, 0], [c2, 0], [c2 + 10, 1], [c2 + 20, 1], [c2 + 30, 0]], true);
	const cyc = f < c1 ? 1 : f < c2 ? 2 : 3;
	const LX = 1180, LY = 640;
	return (
		<Overlay>
			<PicH p={PHTH.clear} x={PL.x} y={PL.y} h={PL.h} />
			<PicH p={PHTH.pink} x={PL.x} y={PL.y} h={PL.h} o={frac(f)} />
			<Swatch x={PL.x + pw / 2 - 75} y={PL.y + PL.h + 50} color={fr => hexMix(CLEAR, PINK, frac(fr))} at={-100} label="flask colour" />
			<line x1={PL.x + pw - 10} y1={PL.y + PL.h * 0.7} x2={LZ.cx - LZ.r * 0.8} y2={LZ.cy - LZ.r * 0.5} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
			<IndLens at={-100} events={events} init={['HIn', 'In', 'HIn', 'HIn', 'HIn', 'HIn']} initH3O={K3.hyd}>
				<MeetPair a={siteW(1, LS)} b={[siteW(1, LS)[0] - 70, siteW(1, LS)[1] - 120]} at={K3.hyd} s={LS * 0.8} o={1 - prog(f, K3.hyd + 50, 20)} />
				{[0, 2, 3, 4, 5].map((i, k) => { const w = siteW(i, LS); return <MeetPair key={i} a={w} b={[w[0] - 60, w[1] - 110]} at={fwd[k] + 30} s={LS * 0.8} o={1 - prog(f, fwd[k] + 80, 20)} />; })}
			</IndLens>
			<EqLine items={strip} x={SX} y={SY} size={ss} />
			<OpGlow items={strip} i={3} size={ss} x={SX} y={SY} at={K3.hyd} len={70} color={TEAL} />
			<OpGlow items={strip} i={3} size={ss} x={SX} y={SY} at={K3.left - 20} len={70} color={'#e07b2e'} />
			<g opacity={0.6}>
				<Sx x={eSpan(strip, 0, ss, SX).cx} y={tagY} text="colourless" size={30} color={INK_SOFT} anchor="middle" hand at={-100} />
				<Sx x={eSpan(strip, 6, ss, SX).cx} y={tagY} text="pink" size={32} color={PINK} anchor="middle" hand at={-100} />
			</g>
			<Note x={SX} y={480} text="Module 5: Le Chatelier" size={28} color={INK_SOFT} at={K3.hyd + 20} out={K3.pink} />
			<Note x={SX} y={480} text="OH^{−} removes H_3O^{+} → shifts right" size={32} color={BASE_INK} at={K3.shifts} out={K3.acid} />
			<Note x={SX} y={480} text="extra H_3O^{+} → shifts left" size={32} color={ACID_INK} at={K3.extra} out={K3.again} />
			<Fade at={K3.again}>
				<Sx x={LX} y={LY - 70} text="add base: pink" size={34} color={PINK_INK} anchor="middle" hand at={K3.again} />
				<Sx x={LX} y={LY + 110} text="add acid: colourless" size={34} color={INK_SOFT} anchor="middle" hand at={K3.again} />
				<DrawPath d={`M${LX + 170},${LY - 70} C${LX + 260},${LY - 40} ${LX + 260},${LY + 70} ${LX + 190},${LY + 100}`} at={K3.again + 4} dur={16} color={INK_SOFT} width={4} />
				<path d={`M${LX + 204},${LY + 84} L${LX + 188},${LY + 102} L${LX + 212},${LY + 108}`} fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={prog(f, K3.again + 18, 6)} />
				<DrawPath d={`M${LX - 190},${LY + 100} C${LX - 270},${LY + 70} ${LX - 270},${LY - 40} ${LX - 150},${LY - 70}`} at={K3.again + 10} dur={16} color={INK_SOFT} width={4} />
				<path d={`M${LX - 170},${LY - 88} L${LX - 150},${LY - 70} L${LX - 172},${LY - 58}`} fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={prog(f, K3.again + 24, 6)} />
			</Fade>
			<Counter x={PL.x + pw / 2} y={PL.y - 70} text={`cycle ${cyc}`} at={K3.left + 10} color={INK} size={30} />
			<Note x={SX} y={860} text="same two colours each time: not used up" size={36} color={TEAL} at={K3.used - 10} />
			{void K3.add}{void K3.builds}{void K3.see}{void H3O}{void smooth}
		</Overlay>
	);
};

// ---------- 4. A colour change over a range ----------
const S4 = 'transition-range';
const K4 = cues(sc(S4), {instant: "isn't instant", buffer: 'buffer ratio', pka: 'p K a', equal: 'are equal', ten: 'ten times', spreads: 'spreads over', tr: 'transition range', mo: ['methyl orange', 1], eight: 'eight point three', phth: 'for phenolphthalein'});
export const R4: PR = {x: 520, w: 1260, lo: 0, hi: 14};
export const BANDS = [
	{n: 'methyl orange 3.1–4.4', a: 3.1, b: 4.4, cA: MO_RED, cB: MO_YEL},
	{n: 'methyl red 4.4–6.2', a: 4.4, b: 6.2, cA: MR_RED, cB: MO_YEL},
	{n: 'bromothymol blue 6.0–7.6', a: 6.0, b: 7.6, cA: BTB_YEL, cB: BTB_BLUE},
	{n: 'phenolphthalein 8.3–10.0', a: 8.3, b: 10.0, cA: CLEAR, cB: PINK},
];
export const SceneRange: React.FC = () => {
	const f = useCurrentFrame();
	const RY = 640;
	const mp = (fr: number) => kf(fr, [[K4.buffer, 6.5], [K4.pka + 10, 9], [K4.ten, 9], [K4.ten + 20, 8], [K4.ten + 44, 8], [K4.spreads + 4, 10], [K4.spreads + 30, 10], [K4.tr - 30, 9]]);
	const mX = rx(R4, mp(f));
	const frac = (fr: number) => { const r = 10 ** (mp(fr) - 9); return r / (1 + r); };
	const out = K4.tr - 6;
	const lit = [K4.mo, -1, -1, K4.eight];
	return (
		<Overlay>
			<PHRuler R={R4} y={RY} at={0} />
			<Fade at={K4.buffer - 10} out={out}>
				<path d={`M${mX - 14},${RY - 42} L${mX + 14},${RY - 42} L${mX},${RY - 16} Z`} fill={TEAL} stroke={INK} strokeWidth={1.5} />
			</Fade>
			<ColBar x={mX - 85} base={RY - 60} H={230} frac={frac} color={PINK} at={K4.buffer - 10} out={out} />
			<Swatch x={mX + 120} y={RY - 200} w={110} h={60} color={fr => hexMix(CLEAR, PINK, frac(fr))} at={K4.buffer} out={out} label="colour" />
			<Note x={R4.x} y={300} text="buffer video: ratio follows [H_3O^{+}]" size={28} color={INK_SOFT} at={K4.buffer} out={K4.pka - 10} />
			<Note x={rx(R4, 9)} y={330} text="[HIn] = [In^{−}]: pH = pKa(HIn)" size={36} color={INK} anchor="middle" at={K4.pka + 6} out={K4.ten - 6} />
			<Note x={rx(R4, 9)} y={330} text="about 10 : 1 → one colour seen" size={36} color={INK} anchor="middle" at={K4.ten + 10} out={out} />
			{BANDS.map((bd, k) => (
				<RBand key={k} R={R4} y={RY - 64 - 56 * k} a={bd.a} b={bd.b} cA={bd.cA} cB={bd.cB} at={K4.tr + k * 8} label={bd.n} labelX={R4.x - 20} size={28} o={fr => (lit[k] < 0 ? 0.4 : 0.4 + 0.6 * prog(fr, lit[k], 12))} />
			))}
			<SetRing p={MO_SET} u={SET_U.mo} x={rx(R4, 3.75) - picW(MO_SET, 140) / 2} y={RY + 80} h={140} at={K4.mo} />
			<SetRing p={PH_SET} u={SET_U.ph} x={rx(R4, 9.15) - picW(PH_SET, 140) / 2} y={RY + 80} h={140} at={K4.eight} />
			{void K4.instant}{void K4.equal}{void K4.phth}
		</Overlay>
	);
};

// ---------- 5. Endpoint and equivalence ----------
const S5 = 'endpoint-equivalence';
const K5 = cues(sc(S5), {video: 'titration video', endpoint: ['endpoint was', 1], eqp: 'equivalence point', good: 'A good indicator', phAt: 'pH at equivalence', isnt: "isn't always"});
export const SceneEndpoint: React.FC = () => {
	const R5: PR = {x: 560, w: 800, lo: 0, hi: 14};
	return (
		<Overlay>
			<g opacity={0.35}>
				<PHRuler R={R5} y={960} at={-100} size={20} />
				{BANDS.map((bd, k) => <RBand key={k} R={R5} y={928 - 0 * k} a={bd.a} b={bd.b} cA={bd.cA} cB={bd.cB} at={-100} h={20} />)}
			</g>
			<Rig tx={1560} ty={470} bh={380} fh={190} level={() => 25} at={0} clearAt={-100} pinkAt={-100} />
			<Note x={96} y={260} text="titration video" size={28} color={INK_SOFT} at={K5.video} out={K5.good} />
			<DimG at={K5.phAt} to={0.35}>
				<Note x={96} y={340} text="endpoint: the colour change (seen)" size={40} color={PINK_INK} at={K5.endpoint} />
				<Note x={96} y={420} text="equivalence point: amounts match the equation (calculated)" size={40} color={INK} at={K5.eqp} />
			</DimG>
			<AChip x={96} y={540} text="pH at equivalence = ?" size={48} color={TEAL} hand={false} at={K5.phAt} />
			<Note x={96 + mw('pH at equivalence = ?', 48, false, 700) + 67 + 30} y={590} text="7?" size={44} color={INK_SOFT} at={K5.isnt} />
		</Overlay>
	);
};

// ---------- 6. What's in the flask at equivalence ----------
const S6 = 'flask-at-equivalence';
const K6 = cues(sc(S6), {used: 'used up', sodium: 'sodium ethanoate', ions: "Sodium ions don't", conj: 'conjugate base', video: 'K a video', takes: 'takes protons', water: 'back from water', eth: 'Ethanoate plus', gives: 'gives ethanoic', hyd: 'and hydroxide', basic: 'slightly basic'});
export const EQ_SALT = (at: number | number[]) => eq(['CH_3COOH(aq)', '+', 'NaOH(aq)', '->', 'CH_3COONa(aq)', '+', 'H_2O(l)'], at);
export const EQ_HYD = (at: number | number[]) => eq(['CH_3COO^{−}(aq)', '+', 'H_2O(l)', '<=>', 'CH_3COOH(aq)', '+', 'OH^{−}(aq)'], at);
export const ETH_LENS = {cx: 560, cy: 640, r: 210};
export const ETH_IONS: [number, number][] = [[-0.45, -0.45], [0.35, -0.5], [-0.55, 0.35], [0.45, 0.4]];
export const NA_IONS: [number, number][] = [[0.05, -0.15], [-0.15, 0.6], [0.7, -0.05]];
export const ETH_WATERS: [number, number][] = [[-0.8, -0.05], [0.25, 0.75], [-0.2, -0.8], [0.62, -0.68]];
export const SceneFlask: React.FC = () => {
	const L = ETH_LENS;
	const P = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const s1 = EQ_SALT(K6.sodium - 30), s2 = EQ_HYD([K6.eth, K6.eth + 14, K6.eth + 20, K6.gives, K6.gives + 10, K6.hyd - 6, K6.hyd]);
	const ss = Math.min(fitSize(s1, 960, 40), fitSize(s2, 960, 40));
	const SX6 = 870;
	const fw = picW(PHTH.clear, 240);
	const hop = P(-0.05, 0.12), hopW = P(0.22, 0.2);
	return (
		<Overlay>
			<PicH p={PHTH.clear} x={110} y={330} h={240} />
			<Sx x={110 + fw / 2} y={610} text="at equivalence" size={30} color={INK_SOFT} anchor="middle" hand at={4} />
			<Fade at={6}><line x1={110 + fw - 10} y1={470} x2={L.cx - L.r * 0.85} y2={L.cy - L.r * 0.35} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" /></Fade>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={6}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
				{ETH_WATERS.map(([u, v], i) => <WaterT key={'w' + i} x={P(u, v)[0]} y={P(u, v)[1]} s={1.2} o={0.8} />)}
				{NA_IONS.map(([u, v], i) => <NaTok key={'n' + i} x={P(u, v)[0]} y={P(u, v)[1]} s={0.85} grey={1} />)}
				{ETH_IONS.map(([u, v], i) => <An key={'a' + i} x={P(u, v)[0]} y={P(u, v)[1]} s={1.5} />)}
				<HydSite x={hop[0]} y={hop[1]} w={hopW} at={K6.water + 4} kind="eth" s={1.5} a={0.2} />
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 50} text="Na^{+}: spectator" size={30} color={INK_SOFT} anchor="middle" at={K6.ions} out={K6.takes} />
			<Note x={L.cx} y={L.cy + L.r + 50} text="ethanoate takes a proton from water" size={30} color={BASE_INK} anchor="middle" at={K6.water + 10} />
			<DimG at={K6.eth} to={0.35}>
				<EqLine items={s1} x={SX6} y={300} size={ss} />
				<EqBox items={s1} i={4} size={ss} x={SX6} y={300} at={K6.sodium} color={TEAL} />
			</DimG>
			<EqLine items={s2} x={SX6} y={430} size={ss} />
			<Note x={SX6} y={500} text="Ka and pKa video: ethanoate + water" size={28} color={INK_SOFT} at={K6.eth + 10} out={K6.basic} />
			<AChip x={SX6} y={560} text="pH at equivalence > 7" size={44} color={TEAL} hand={false} at={K6.basic} />
			{void K6.used}{void K6.conj}{void K6.video}{void H3O}
		</Overlay>
	);
};
