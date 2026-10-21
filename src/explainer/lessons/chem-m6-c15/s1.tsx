// M6 C15 scenes 1 to 4: two samples that won't titrate directly (burette over the tablet heap, the marble chips
// inset, the flask turning red, a vanishing indicator drop); why the direct titration fails (the solid-surface lens,
// the early colour change and drift back, dissolved CO2); the back titration idea (pipette, timer, the moles bar
// splitting into used and left over); driving off the carbon dioxide (lens, the bar stretching, the hotplate).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {ANTACID, CFLASK, HOTPLATE, MARBLE, PHTH, RVIN, TILE} from './assets';
import {
	AChip, Blot, Bubble, BuretteFill, CO2Tok, ClTok, DimG, Fade, Heap, INK, INK_SOFT, LensFrame, MolesBar, NAVY, NaTok, Note, OHg, Overlay, PicH, PipetteIcon, PlateAt, SpanBracket, SurfaceLens, Sx,
	TEAL, TFlask, TimerIcon, USED_INK, burAt, burPt, clamp01, lerp, picW, smooth,
} from './parts';

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {tablet: 'antacid tablet', base: 'a base', so: 'So why', hcl: 'hydrochloric acid', tryit: 'Try it', fizz: 'fizzing slowly', ind: 'indicator changes', solid: 'while solid', dark: 'A dark red', hides: 'hides', when: 'So when'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 520, ty: 560, bh: 470, fh: 250};
	const b = burAt(R.tx, R.ty, R.bh);
	const fw = picW(PHTH.clear, R.fh), fx = R.tx - fw / 2, fy = R.ty + 16;
	const tw = fw * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const [tubeR, yTop] = burPt(b.x, b.y, R.bh, 1172, 300);
	const level = (fr: number) => kf(fr, [[K1.hcl + 10, 0], [K1.dark - 10, 6.5]], false);
	const heapO = 1 - prog(f, K1.dark, 18);
	const mw = picW(MARBLE, 230);
	const fizzing = f >= K1.fizz && f < K1.dark + 10;
	return (
		<>
			<Heading text="When a direct titration won't work" at={K1.when} size={60} />
			<Overlay>
				<PicH p={TILE} x={R.tx - tw / 2} y={fy + R.fh - th * 0.55} h={th} />
				<BuretteFill x={b.x} y={b.y} h={R.bh} level={level} />
				<TFlask x={fx} y={fy} h={R.fh} pink={fr => 1 - prog(fr, K1.ind + 4, 20)} red={fr => prog(fr, K1.dark + 6, 26)}>
					<Heap cx={R.tx} base={fy + R.fh * 0.95} s={1.4} left={fr => kf(fr, [[K1.fizz, 1], [K1.dark, 0.72]])} o={heapO} />
					{fizzing ? [0, 1, 2, 3, 4, 5].map(i => {
						const q = ((f - K1.fizz + i * 13) % 70) / 70;
						return <Bubble key={i} x={R.tx - 30 + i * 12 + Math.sin(q * 7 + i) * 4} y={lerp(fy + R.fh * 0.9, fy + R.fh * 0.55, q)} r={3 + (i % 3)} o={(1 - q) * heapO} />;
					}) : null}
				</TFlask>
				<DimG at={K1.tryit} to={0.35}>
					<Note x={tubeR + 26} y={yTop} text="HCl" size={34} color={TEAL} at={K1.hcl} hand={false} weight={800} />
				</DimG>
				<Blot x={R.tx} y0={fy - 50} y1={fy + R.fh * 0.62} at={K1.hides + 4} />
				<PlateAt p={ANTACID} x={1480} y={210} h={170} at={K1.tablet - 6} />
				<DimG at={K1.so} to={0.35}>
					<Note x={1480 + picW(ANTACID, 170) / 2} y={430} text="CaCO_3 tablet" size={32} color={USED_INK} anchor="middle" at={K1.tablet + 20} hand={false} weight={700} />
				</DimG>
				<DimG at={K1.dark} to={0.35}>
					<PlateAt p={MARBLE} x={880} y={220} h={230} at={K1.fizz} />
					<Note x={880 + mw / 2} y={500} text="slow, at the surface" size={32} color={INK_SOFT} anchor="middle" at={K1.fizz + 10} />
				</DimG>
				<AChip x={880} y={560} text="colour changed: solid still there ?" size={32} color={INK} hand={false} at={K1.solid} />
				<PlateAt p={RVIN} x={1560} y={480} h={320} at={K1.dark + 10} />
				<AChip x={880} y={700} text="endpoint hidden ?" size={32} color={INK} hand={false} at={K1.hides + 20} />
			</Overlay>
		</>
	);
};

// ---------- 2. Why the direct titration fails ----------
const S2 = 'direct-fails';
const K2 = cues(sc(S2), {barely: 'barely dissolves', surface: 'surface', add: 'Add acid', early: 'too early', drifts: 'drifts back', carbonic: 'carbonic acid', blurs: 'blurs'});
export const SceneDirect: React.FC = () => {
	const L = {cx: 600, cy: 590, r: 270};
	const FH = 280, FX = 1150, FY = 290;
	const fw = picW(PHTH.clear, FH);
	return (
		<Overlay>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={0}>
				<SurfaceLens cx={L.cx} cy={L.cy} r={L.r} waves={[K2.surface + 6, K2.add + 40, K2.drifts + 10]} dissolve={K2.carbonic + 6} />
			</LensFrame>
			<DimG at={K2.carbonic} to={0.4}>
				<Note x={L.cx} y={L.cy + L.r + 56} text="reacts only at the surface" size={34} color={USED_INK} anchor="middle" at={K2.surface + 14} />
			</DimG>
			<TFlask x={FX} y={FY} h={FH} pink={fr => kf(fr, [[K2.early - 2, 1], [K2.early + 14, 0], [K2.drifts + 6, 0], [K2.drifts + 40, 1]])}>
				<Heap cx={FX + fw / 2} base={FY + FH * 0.95} s={1.1} left={fr => kf(fr, [[K2.add, 1], [K2.carbonic, 0.7]])} />
			</TFlask>
			<Sx x={FX + fw / 2} y={FY - 24} text="the flask" size={28} color={INK_SOFT} anchor="middle" hand at={K2.add} />
			<AChip x={1040} y={640} text="endpoint before the solid has reacted" size={32} color={INK} hand={false} at={K2.early + 14} />
			<Note x={1040} y={790} text="CO_2 dissolves → H_2CO_3: blurs the endpoint" size={32} color={INK_SOFT} at={K2.carbonic + 10} hand={false} />
			{void K2.barely}{void K2.blurs}
		</Overlay>
	);
};

// ---------- 3. The back titration idea ----------
const S3 = 'back-titration-idea';
const K3 = cues(sc(S3), {back: 'back titration', excess: 'excess', complete: 'react completely', left: 'left over', sodium: 'sodium hydroxide', cant: "You can't", diff: 'the difference'});
export const BAR = {x: 900, y: 330, w: 840, h: 80};
export const USEDF = 7.9 / 12.5;
export const SceneBackIdea: React.FC = () => {
	const f = useCurrentFrame();
	const FH = 250, FX = 300, FY = 540;
	const fw = picW(CFLASK, FH);
	const tx = FX + fw / 2, ty = FY - 16;
	const tw = fw * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const BH = 400;
	const b = burAt(tx, ty, BH);
	const [tubeR, yTop] = burPt(b.x, b.y, BH, 1172, 300);
	const burO = prog(f, K3.left - 10, 16);
	const xu = BAR.x + BAR.w * USEDF;
	return (
		<>
			<Heading text="Back titration" at={K3.back - 10} size={60} />
			<Overlay>
				<PicH p={TILE} x={tx - tw / 2} y={FY + FH - th * 0.55} h={th} />
				{burO > 0.01 ? <BuretteFill x={b.x} y={b.y} h={BH} level={fr => kf(fr, [[K3.sodium, 0], [K3.cant + 20, 9]], false)} o={burO} /> : null}
				<PicH p={CFLASK} x={FX} y={FY} h={FH} />
				<Heap cx={tx} base={FY + FH * 0.95} s={1.3} left={fr => kf(fr, [[K3.complete - 10, 1], [K3.complete + 50, 0]])} />
				<PipetteIcon tx={tx} ty={FY - 6} h={330} at={K3.excess - 10} out={K3.left - 24} fill={fr => kf(fr, [[K3.excess, 1], [K3.complete - 20, 0]])} />
				<TimerIcon cx={FX + fw + 80} cy={FY + 70} at={K3.complete - 16} out={K3.left - 10} spin={70} />
				<Note x={tubeR + 24} y={yTop + 20} text="NaOH" size={32} color={NAVY} at={K3.sodium} hand={false} weight={800} />
				<MolesBar x={BAR.x} y={BAR.y} w={BAR.w} h={BAR.h} at={K3.excess + 6} split={K3.left} glow={K3.diff} size={30} />
				<Note x={BAR.x} y={BAR.y - 24} text="acid added (measured)" size={32} color={TEAL} at={K3.excess + 16} hand={false} weight={700} />
				<Note x={BAR.x} y={BAR.y + 190} text="excess: more than the sample can use" size={32} color={INK_SOFT} at={K3.excess + 30} out={K3.left - 20} />
				<SpanBracket x1={xu + 6} x2={BAR.x + BAR.w} y={BAR.y + BAR.h + 22} text="measured by the titration" at={K3.sodium} color={NAVY} size={32} />
				<Sx x={(BAR.x + xu) / 2} y={BAR.y + BAR.h + 70} text="?" size={48} color={USED_INK} anchor="middle" weight={800} at={K3.cant + 30} out={K3.diff + 20} />
				<Sx x={(BAR.x + xu) / 2} y={BAR.y + BAR.h + 70} text="added − left over" size={36} color={USED_INK} anchor="middle" hand weight={700} at={K3.diff + 26} />
			</Overlay>
		</>
	);
};

// ---------- 4. Drive off the carbon dioxide ----------
const S4 = 'boil-off-co2';
const K4 = cues(sc(S4), {one: 'One step', dissolved: 'dissolved', carbonic: 'carbonic acid', react: 'react with it', bigger: 'bigger', small: 'too small', boiled: 'boiled', drive: 'drive the', cooled: 'cooled'});
const CO2S: [number, number][] = [[-0.45, -0.35], [0.3, -0.5], [0.5, 0.15], [-0.15, 0.25], [-0.55, 0.45], [0.15, 0.62]];
const IONS: [number, number, 'ca' | 'cl'][] = [[-0.1, -0.7, 'ca'], [0.62, -0.25, 'cl'], [-0.7, -0.05, 'cl'], [0.1, -0.1, 'cl'], [0.4, 0.5, 'ca'], [-0.35, 0.72, 'cl']];
export const SceneBoil: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 470, cy: 610, r: 230};
	const P = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const used = (fr: number) => kf(fr, [[K4.bigger, USEDF], [K4.bigger + 40, 0.5], [K4.boiled + 20, 0.5], [K4.boiled + 70, USEDF]]);
	const co2O = (fr: number) => prog(fr, K4.dissolved, 14) * (1 - prog(fr, K4.bigger + 24, 14) * (1 - prog(fr, K4.boiled, 16)));
	const rise = kf(f, [[K4.drive, 0], [K4.drive + 80, 1]]);
	const hpIn = smooth(prog(f, K4.boiled, 24));
	return (
		<Overlay>
			<MolesBar x={900} y={200} w={820} h={56} at={-100} split={-100} used={used} size={24} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={0}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{IONS.map(([u, v, k], i) => k === 'ca' ? <NaTok key={i} x={P(u, v)[0]} y={P(u, v)[1]} s={1.05} grey={1} label="Ca^{2+}" /> : <ClTok key={i} x={P(u, v)[0]} y={P(u, v)[1]} s={0.95} grey={1} />)}
				{CO2S.map(([u, v], i) => {
					const [x, y] = P(u, v);
					const yy = y - rise * (y - (L.cy - L.r) + 60 + i * 10);
					return <CO2Tok key={i} x={x} y={yy} s={1.3} o={co2O(f) * (1 - clamp01((rise - 0.75) * 4))} />;
				})}
				{CO2S.map(([u, v], i) => {
					const [x, y] = P(u, v);
					const t = clamp01((f - (K4.bigger + i * 4)) / 22);
					const o = prog(f, K4.bigger + i * 4 - 6, 6) * (1 - prog(f, K4.bigger + 30, 12));
					return <OHg key={'o' + i} x={lerp(L.cx - L.r - 20, x - 30, smooth(t))} y={lerp(y + 40, y, smooth(t))} s={1.1} o={o} />;
				})}
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 56} text="dissolved CO_2 (as H_2CO_3)" size={32} color={INK_SOFT} anchor="middle" at={K4.carbonic} out={K4.boiled} hand={false} />
			<Note x={900} y={330} text="CO_2 uses NaOH: leftover looks bigger, CaCO_3 too small" size={30} color={INK} at={K4.bigger + 20} out={K4.boiled} hand={false} />
			<g transform={`translate(${(1 - hpIn) * 300},0)`} opacity={hpIn}>
				<PicH p={HOTPLATE} x={1300} y={400} h={520} />
			</g>
			<AChip x={900} y={300} text="boil off CO_2, cool, then titrate" size={34} color={TEAL} hand={false} at={K4.drive + 30} />
			<Fade at={K4.cooled} out={K4.cooled + 60}><Sx x={1300 + picW(HOTPLATE, 520) / 2} y={960} text="cooled" size={30} color={INK_SOFT} anchor="middle" hand at={K4.cooled} /></Fade>
			{void K4.one}{void K4.react}{void K4.small}{void INK}
		</Overlay>
	);
};
