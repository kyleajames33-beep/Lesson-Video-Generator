// M8 C01 scenes 1 to 6: the hook (clear estuary water, hidden chloride; a pH indicator has nothing to respond to), silver
// meets chloride (burette drip, white AgCl in the ion inset, then nothing new), a second precipitate as the signal (the
// chromate dropper, the yellow, white and endpoint flasks cross-fading, a red-brown tile), why chloride goes first (the
// crossed solubility claim, the silver-needed ladder with its givens and workings), keeping the endpoint valid (the pH
// strip, acid and base insets, interferences, the blank) and the hazard (why the method is often met as data).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BOTTLE, DROPPER, Heading, MOHR, PHTH, sc} from './common';
import {
	AChip, Ag, CRC, CR_INK, Cl, Cr, DimG, Diamond, Dot, EqLine, FallDrop, Fade, Hp, H_INK, INK, INK_SOFT, IonSwap, LMark, Ladder, LensFrame, MistakeX, MohrRig, NAVY, Note, OpGlow, Overlay, PHStrip,
	PicF, PlateAt, RB, RB_INK, Swirl, Sx, TEAL, TitreTable, Tile, clamp01, eSpan, eq, fitSize, lerp, picW, rigGeom, smooth, vis,
} from './parts';
import type {LadderP, Site} from './parts';

const GREYX = '#9a948a';
export const EQ1 = (at: number) => eq(['Ag^{+}(aq)', '+', 'Cl^{−}(aq)', '->', 'AgCl(s)'], at);
export const EQ2 = (at: number) => eq(['2Ag^{+}(aq)', '+', 'CrO_4^{2−}(aq)', '->', 'Ag_2CrO_4(s)'], at);
export const RIG = {tx: 430, ty: 470, bh: 470, fh: 280};
const EQX = 760;

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {bottle: 'This bottle', tap: 'tap water', salt: 'dissolved salt', how: 'How much chloride', know: 'You already know', ncv: 'n equals c', chloride: "Chloride isn't", indicator: 'indicator has', nothing: 'nothing to respond', so: 'So how do', out: 'runs out'});
const SALT: [number, number, boolean][] = [[-0.5, -0.3, true], [0.1, -0.5, false], [0.45, -0.1, true], [-0.15, 0.2, false], [0.35, 0.45, true], [-0.55, 0.4, false]];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 520, bw = picW(BOTTLE, BH), BX = 560 - bw / 2, BY = 250;
	const L = {cx: 1150, cy: 430, r: 130};
	const PX = 1450, PY = 330, PH = 300, pw = picW(PHTH.pink, PH);
	return (
		<>
			<Heading text="How much chloride is in this water?" at={4} size={60} />
			<Overlay>
				<PlateAt p={BOTTLE} x={BX} y={BY} h={BH} at={K1.bottle} />
				<Note x={560} y={BY + BH + 50} text="estuary water: looks like tap water" size={36} color={INK} anchor="middle" at={K1.tap} />
				<Fade at={K1.salt} out={K1.indicator}>
					<line x1={BX + bw * 0.62} y1={BY + BH * 0.55} x2={L.cx - L.r * 0.8} y2={L.cy + L.r * 0.5} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
				</Fade>
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K1.salt} out={K1.indicator} title="dissolved, invisible" titleAt={K1.salt + 10}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
					{SALT.map(([u, v, c], i) => (c ? <Cl key={i} x={L.cx + u * L.r} y={L.cy + v * L.r} s={1.1} /> : <Dot key={i} x={L.cx + u * L.r} y={L.cy + v * L.r} r={17} fill="#b9c8e6" ink="#3b5487" label="Na^{+}" size={12} />))}
				</LensFrame>
				<AChip x={560} y={BY + BH + 90} text="c12: titration, n = cV" size={30} color={GREYX} hand={false} anchor="middle" at={K1.know} />
				<g opacity={vis(f, K1.indicator, K1.out, 14)}>
					<PicF p={PHTH.pink} x={PX} y={PY} h={PH} />
					<Note x={PX + pw / 2} y={PY + PH + 50} text="c13: a pH indicator" size={30} color={GREYX} anchor="middle" hand={false} at={K1.indicator} />
					<Note x={PX + pw / 2} y={PY + PH + 100} text="no acid or base here" size={34} color="#c4432f" anchor="middle" at={K1.nothing} />
					{f >= K1.nothing ? <g><line x1={PX - 20} y1={PY + 20} x2={PX + pw + 20} y2={PY + PH - 20} stroke="#c4432f" strokeWidth={7} strokeLinecap="round" opacity={0.75 * prog(f, K1.nothing, 10)} /></g> : null}
				</g>
				<g opacity={0.75}><AChip x={1150} y={760} text="when is the chloride used up?" size={38} color={NAVY} anchor="middle" at={K1.out} /></g>
				{void K1.how}{void K1.ncv}{void K1.chloride}{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. Silver meets chloride ----------
const K2 = cues(sc('silver-meets-chloride'), {trick: 'The trick is', titrate: 'titrate with silver', grab: 'Silver ions grab', form: 'form silver chloride', white: 'a white solid', one: 'One silver for', ratio: 'so the ratio', runs: 'runs in', cloudy: 'turns cloudy', problem: "But here's the", keeps: 'The white keeps', stops: 'simply stops', nothing: 'Nothing new', stop: 'tell you to stop'});
const CL6: Site[] = [[-0.5, -0.3], [0.1, -0.5], [0.5, -0.2], [-0.2, 0.12], [0.32, 0.22], [-0.62, 0.3]];
export const LENS = {cx: 1380, cy: 680, r: 220};
export const SceneSilver: React.FC = () => {
	const f = useCurrentFrame();
	const e1 = EQ1(K2.grab + 10);
	const es = fitSize(e1, 900, 54);
	const wx = eSpan(e1, 4, es, EQX).cx;
	const G = rigGeom(RIG.tx, RIG.ty, RIG.fh);
	const level = (fr: number) => (fr < K2.runs ? 0 : Math.min(18.5, ((fr - K2.runs) / (K2.stops - K2.runs)) * 18.5));
	const clT = [K2.form + 10, K2.white + 10, K2.runs + 20, K2.runs + 60, K2.runs + 100, K2.runs + 140];
	return (
		<Overlay>
			<PlateAt p={BOTTLE} x={60} y={110} h={120} at={-100} />
			<Sx x={130} y={262} text="estuary water" size={22} color={INK_SOFT} anchor="middle" hand at={-100} />
			<MohrRig {...RIG} level={level} at={-100} states={[{p: PHTH.clear, at: -100}, {p: MOHR.white, at: K2.runs + 30, dur: 60, filter: 'saturate(0.05)'}]} drops={[[K2.runs, K2.stops + 60, 14]]} label={{t: 'AgNO_3(aq)', at: K2.titrate}} />
			<Note x={G.x + G.w / 2} y={G.y + G.h + 90} text="Cl^{−}(aq) sample" size={32} color={INK} anchor="middle" hand={false} at={10} />
			<EqLine items={e1} x={EQX} y={270} size={es} />
			<Note x={wx} y={340} text="white" size={36} color={INK_SOFT} anchor="middle" at={K2.white} />
			<OpGlow items={e1} i={0} size={es} x={EQX} y={270} at={K2.one} len={50} color={TEAL} />
			<OpGlow items={e1} i={2} size={es} x={EQX} y={270} at={K2.one + 8} len={50} color={TEAL} />
			<AChip x={EQX} y={380} text="1 : 1" size={40} color={TEAL} hand={false} at={K2.ratio} />
			<LensFrame cx={LENS.cx} cy={LENS.cy} r={LENS.r} at={K2.grab - 10} title="in the flask" titleAt={K2.grab}>
				<IonSwap s={1.4} cx={LENS.cx} cy={LENS.cy} r={LENS.r} cl={CL6} clT={clT} extra={[K2.stops, K2.stops + 22, K2.nothing + 6]} />
			</LensFrame>
			<Note x={LENS.cx} y={LENS.cy - LENS.r - 24} text="no Cl^{−} left: nothing new forms" size={30} color={INK} anchor="middle" hand={false} at={K2.stops + 10} />
			<Sx x={G.x + G.w + 30} y={G.y + 40} text="?" size={110} color="#c4432f" weight={800} at={K2.nothing} />
			{void K2.trick}{void K2.cloudy}{void K2.problem}{void K2.keeps}{void K2.stop}
		</Overlay>
	);
};

// ---------- 3. A second precipitate as the signal ----------
const K3 = cues(sc('second-precipitate'), {add: 'So we add', chromate: 'potassium chromate before', yellow: "It's yellow", indicator: 'our indicator', while: 'While chloride is', keeps: 'the silver keeps', once: 'Once nearly all', meet: 'meet chromate instead', solid: 'a redbrown solid', two: 'Two silvers', first: 'The first faint', endpoint: 'is the endpoint', signal: 'the signal is'});
const CL5: Site[] = [[-0.5, -0.3], [0.12, -0.52], [0.52, -0.22], [-0.2, 0.1], [0.36, 0.24]];
const CR3: Site[] = [[-0.12, -0.2], [0.62, 0.32], [-0.6, 0.32]];
const L3 = {cx: 1380, cy: 745, r: 205};
export const SceneChromate: React.FC = () => {
	const f = useCurrentFrame();
	const e1 = EQ1(-100), e2 = EQ2(K3.solid);
	const es = fitSize(e2, 900, 54);
	const G = rigGeom(RIG.tx, RIG.ty, RIG.fh);
	const rbx = eSpan(e2, 4, es, EQX).cx;
	const level = (fr: number) => (fr < K3.keeps ? 0 : Math.min(18.5, ((fr - K3.keeps) / (K3.endpoint - K3.keeps)) * 18.5));
	const DH = 250, dw = picW(DROPPER, DH), DX = G.x + G.w + 60, DY = RIG.ty + 10;
	return (
		<>
			<Heading text="The Mohr method" at={K3.signal} size={60} />
			<Overlay>
				<MohrRig {...RIG} level={level} at={-100} states={[{p: PHTH.clear, at: -100}, {p: MOHR.yellow, at: K3.yellow - 16}, {p: MOHR.white, at: K3.keeps + 20, dur: 70}, {p: MOHR.end, at: K3.endpoint - 30, dur: 30}]} drops={[[K3.keeps, K3.endpoint, 14]]} label={{t: 'AgNO_3(aq)', at: -100}} />
				<Fade at={K3.add} out={K3.once}>
					<PicF p={DROPPER} x={DX} y={DY} h={DH} />
					<Note x={DX + dw / 2} y={DY + DH + 40} text="K_2CrO_4 indicator" size={28} color={CR_INK} anchor="middle" hand={false} at={K3.add + 10} />
				</Fade>
				{[0, 1, 2].map(i => <FallDrop key={i} x={RIG.tx - 20} y0={RIG.ty + 10} y1={G.y + G.h * 0.6} at={K3.chromate + i * 14} color={CRC} />)}
				<DimG at={K3.solid} to={0.35}><EqLine items={e1} x={EQX} y={250} size={es} /></DimG>
				<EqLine items={e2} x={EQX} y={380} size={es} />
				<Note x={rbx} y={450} text="red-brown" size={36} color={RB_INK} anchor="middle" at={K3.solid + 10} />
				<AChip x={EQX} y={480} text="2 : 1" size={36} color={TEAL} hand={false} at={K3.two} />
				<LensFrame cx={L3.cx} cy={L3.cy} r={L3.r} at={K3.while - 20}>
					<IonSwap s={1.35} cx={L3.cx} cy={L3.cy} r={L3.r} cl={CL5} clT={[K3.while + 20, K3.while + 60, K3.keeps + 30, K3.keeps + 60, K3.once + 30]} cr={CR3} crT={[K3.solid - 6, Infinity, Infinity]} />
				</LensFrame>
				<Note x={L3.cx} y={L3.cy - L3.r - 22} text="chromate waits until Cl^{−} is nearly gone" size={28} color={INK_SOFT} anchor="middle" hand={false} at={K3.while + 30} />
				<Swirl cx={RIG.tx} cy={G.y + G.h * 0.7} rx={G.w * 0.62} ry={G.h * 0.18} at={K3.first} />
				<AChip x={96} y={900} text="endpoint: first lasting red-brown" size={40} color={RB_INK} hand={false} at={K3.endpoint} />
				<Note x={EQX} y={990} text="precipitation titration: the titrant forms a solid with the ion being measured" size={26} color={INK_SOFT} hand={false} at={K3.signal + 6} />
				<Note x={EQX} y={1030} text="Mohr method: chloride titrated with silver nitrate, chromate indicator" size={26} color={INK_SOFT} hand={false} at={K3.signal + 16} />
				{void K3.indicator}{void K3.meet}{void f}
			</Overlay>
		</>
	);
};

// ---------- 4. Why chloride goes first ----------
const K4 = cues(sc('why-chloride-first'), {why: 'Why does the', read: "You'll sometimes read", careful: 'Careful that', think: 'Think back to', solid: 'A solid only', start: 'At the start', lots: 'lots of chloride', p074: 'point zero seven four', silver: 'trace of silver', little: 'only a little chromate', p005: 'point zero zero five', squared: 'is squared', thousands: 'thousands of times', climbs: 'climbs', red: 'The red only', gone: 'is gone', thats: "That's why only"});
const LAD: LadderP = {x: 1580, y0: 200, y1: 880, lo: -10, hi: -4};
const E_CL = Math.log10(2.4e-9), E_CR = Math.log10(1.5e-5);
export const SceneFirst: React.FC = () => {
	const f = useCurrentFrame();
	const c0 = K4.climbs - 50;
	const climb = smooth(clamp01((f - c0) / (K4.gone - c0)));
	const clH = 260 * lerp(1, 0.02, climb);
	return (
		<Overlay>
			<DimG at={K4.start} to={0.3}>
				<MistakeX x={96} y={180} text="AgCl is less soluble, so it goes first" at={K4.read} cross={K4.careful} note="not the reason in a mixture" size={34} />
				<AChip x={96} y={320} text="c15: a solid forms when Qsp > Ksp" size={32} color={GREYX} hand={false} at={K4.think} />
			</DimG>
			{/* the two workings, one at a time */}
			<DimG at={K4.p005} to={0.35}>
				<DimG at={c0} to={0.5}><Note x={96} y={470} text="[Ag^{+}] = Ksp ÷ [Cl^{−}] = 1.77 × 10^{−10} ÷ 0.074" size={36} color={INK} hand={false} at={K4.silver - 34} /></DimG>
			</DimG>
			<DimG at={c0} to={0.35}>
				<Note x={96} y={560} text="[Ag^{+}] = √(Ksp ÷ [CrO_4^{2−}]) = √(1.12 × 10^{−12} ÷ 0.005)" size={36} color={INK} hand={false} at={K4.p005} />
				<Note x={96} y={630} text="silver is squared: Ksp = [Ag^{+}]^{2}[CrO_4^{2−}]" size={30} color="#b07a12" hand={false} at={K4.squared} />
			</DimG>
			{/* the givens beside their bars */}
			<Fade at={K4.lots - 10}>
				<rect x={140} y={960 - clH} width={60} height={clH} rx={6} fill="#5aa469" opacity={0.85} />
				<Note x={220} y={760} text="lots of Cl^{−}" size={32} color="#2f6b3c" hand={false} at={K4.lots} />
				<Note x={220} y={806} text="[Cl^{−}] at the start ≈ 0.074 mol/L" size={30} color={NAVY} hand={false} at={K4.p074} />
				<Note x={220} y={848} text="sample value, worked out in the calculation later" size={22} color={GREYX} hand={false} at={K4.p074 + 20} />
			</Fade>
			<Fade at={K4.little - 10}>
				<rect x={760} y={934} width={60} height={26} rx={5} fill={CRC} stroke={CR_INK} strokeWidth={2} />
				<Note x={840} y={898} text="a little CrO_4^{2−}" size={30} color={CR_INK} hand={false} at={K4.little} />
				<Note x={840} y={944} text="[CrO_4^{2−}] ≈ 0.005 mol/L" size={30} color={NAVY} hand={false} at={K4.p005} />
			</Fade>
			<Note x={760} y={1010} text="small, set amount of chromate" size={30} color={INK_SOFT} at={K4.thats} />
			<Ladder L={LAD} at={K4.solid} />
			<Note x={LAD.x} y={LAD.y1 + 70} text="one illustrative sample, not a fixed threshold" size={22} color={GREYX} anchor="middle" hand={false} at={K4.solid + 20} />
			<LMark L={LAD} e={() => E_CL} at={K4.silver + 10} out={c0} color="#fbfbf8" ink={INK} lines={['AgCl starts', 'about 2 × 10^{−9} mol/L']} />
			<LMark L={LAD} e={() => lerp(E_CL, E_CR - 0.05, climb)} at={c0} color="#fbfbf8" ink={INK} lines={[]} />
			<Note x={1120} y={700} text="as Cl^{−} falls, AgCl needs more Ag^{+}" size={28} color={INK_SOFT} hand={false} at={c0 + 10} out={K4.gone + 30} />
			<LMark L={LAD} e={() => E_CR} at={K4.thousands} color={RB} ink={RB_INK} lines={['Ag_2CrO_4 starts', 'about 1.5 × 10^{−5} mol/L']} flash={K4.gone} />
			<AChip x={1080} y={250} text="> 99.9% of Cl^{−} gone" size={34} color={RB_INK} hand={false} at={K4.gone} />
			{void K4.why}{void K4.red}
		</Overlay>
	);
};

// ---------- 5. Keeping the endpoint valid ----------
const K5 = cues(sc('valid-endpoint'), {works: 'This endpoint works', keep: 'Keep the solution', roughly: 'roughly p H', acid: 'In acid', pick: 'pick up hydrogen', dichromate: 'turn into dichromate', less: "there's less chromate", late: 'comes late', high: 'reads high', base: 'In strong base', brown: 'brown silver oxide', instead: 'oxide instead', other: 'Other ions', bromide: 'like bromide', counted: 'get counted', red: 'And the red', excess: 'tiny excess', blank: 'run a blank'});
const DichroTile: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x - 54} y={y - 22} width={108} height={44} rx={12} fill="#f3c08a" stroke={H_INK} strokeWidth={2.5} />
			<Sx x={x} y={y + 8} text="Cr_2O_7^{2−}" size={22} color={H_INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const SceneValid: React.FC = () => {
	const f = useCurrentFrame();
	const LA = {cx: 400, cy: 610, r: 160}, LB = {cx: 1520, cy: 610, r: 160};
	const UA = (u: number, v: number): [number, number] => [LA.cx + u * LA.r, LA.cy + v * LA.r];
	const UB = (u: number, v: number): [number, number] => [LB.cx + u * LB.r, LB.cy + v * LB.r];
	const merge = (k: number) => smooth(clamp01((f - (K5.dichromate + k * 22)) / 18));
	const crs: [number, number][] = [[-0.45, -0.3], [-0.05, -0.42], [0.25, 0.18], [0.55, -0.05]];
	const yb = 70 * lerp(1, 0.35, smooth(prog(f, K5.less, 24)));
	const agB = smooth(prog(f, K5.base + 20, 24)), oxB = prog(f, K5.brown, 14);
	return (
		<Overlay>
			<PHStrip x={200} y={250} w={1520} at={K5.keep - 10} win={[6.5, 10]} winAt={K5.roughly} lit={[{side: 'l', from: K5.acid, to: K5.base}, {side: 'r', from: K5.base, to: K5.other}]} />
			<LensFrame cx={LA.cx} cy={LA.cy} r={LA.r} at={K5.acid} title="in acid" titleAt={K5.acid + 6}>
				<rect x={LA.cx - LA.r} y={LA.cy - LA.r} width={2 * LA.r} height={2 * LA.r} fill="#fbf0e4" />
				{crs.map(([u, v], i) => {
					const pair = Math.floor(i / 2), m = merge(pair);
					const [x, y] = UA(u, v);
					const [mx, my] = UA(pair ? 0.4 : -0.25, pair ? 0.05 : -0.36);
					return m >= 0.99 ? null : <Cr key={i} x={lerp(x, mx, m)} y={lerp(y, my, m)} s={1.05} o={1 - m} />;
				})}
				{[0, 1, 2, 3].map(i => {
					const a = smooth(clamp01((f - (K5.pick + i * 8)) / 20));
					const [x, y] = UA([-0.25, -0.1, 0.35, 0.5][i], [-0.36, -0.2, 0.1, 0.0][i]);
					const m = merge(i < 2 ? 0 : 1);
					return a > 0 && m < 0.99 ? <Hp key={i} x={lerp(LA.cx - LA.r - 20, x, a)} y={lerp(LA.cy + 60, y, a)} o={1 - m} /> : null;
				})}
				<DichroTile x={UA(-0.25, -0.36)[0]} y={UA(-0.25, -0.36)[1]} at={K5.dichromate + 12} />
				<DichroTile x={UA(0.4, 0.05)[0]} y={UA(0.4, 0.05)[1]} at={K5.dichromate + 34} />
			</LensFrame>
			<Fade at={K5.less - 10}>
				<rect x={610} y={760 - yb} width={46} height={yb} rx={5} fill={CRC} stroke={CR_INK} strokeWidth={2} />
				<Note x={672} y={750} text="less CrO_4^{2−}" size={28} color={CR_INK} hand={false} at={K5.less} />
			</Fade>
			<DimG at={K5.instead} to={0.35}><AChip x={96} y={840} text="late endpoint, titre too high" size={38} color={H_INK} hand={false} at={K5.high} /></DimG>
			<LensFrame cx={LB.cx} cy={LB.cy} r={LB.r} at={K5.base} title="in strong base" titleAt={K5.base + 6}>
				<rect x={LB.cx - LB.r} y={LB.cy - LB.r} width={2 * LB.r} height={2 * LB.r} fill="#eeeef6" />
				{[[-0.4, -0.3], [0.3, -0.35]].map(([u, v], i) => { const [x, y] = UB(u, v); return <Ag key={i} x={lerp(x, LB.cx - 20 + i * 40, oxB)} y={lerp(y - 40 * (1 - agB), LB.cy, oxB)} o={1 - oxB} s={1.1} />; })}
				{[[-0.3, 0.3], [0.35, 0.25]].map(([u, v], i) => { const [x, y] = UB(u, v); return <Dot key={'o' + i} x={lerp(x, LB.cx, oxB)} y={lerp(y, LB.cy, oxB)} r={19} fill="#c9c1dd" ink="#4f4373" label="OH^{−}" size={12} o={(1 - oxB) * prog(f, K5.base, 10)} />; })}
				{oxB > 0.01 ? <g opacity={oxB}><rect x={LB.cx - 46} y={LB.cy - 22} width={92} height={44} rx={10} fill="#6b4a2e" stroke="#3f2a18" strokeWidth={2.5} /><Sx x={LB.cx} y={LB.cy + 8} text="Ag_2O" size={24} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g> : null}
			</LensFrame>
			<DimG at={K5.bromide} to={0.35}><AChip x={1130} y={840} text="Ag_2O forms (brown)" size={38} color="#5b4630" hand={false} at={K5.instead} /></DimG>
			<AChip x={96} y={950} text="Br^{−}, I^{−} counted as Cl^{−}" size={38} color={INK} hand={false} at={K5.bromide} />
			<AChip x={1000} y={950} text="blank: no chloride, subtract its titre" size={34} color={GREYX} hand={false} at={K5.blank} />
			{void K5.works}{void K5.late}{void K5.counted}{void K5.red}{void K5.excess}{void Tile}{void Cl}
		</Overlay>
	);
};

// ---------- 6. The hazard, and why it's data ----------
const K6 = cues(sc('hazard-data'), {one: 'One more thing', pot: 'Potassium chromate contains', six: 'chromium six', toxic: 'which is toxic', cancer: 'cancercausing', skip: 'many schools skip', likely: "You're more likely", data: 'as data', process: "So let's"});
export const SceneHazard: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K6.data, 30));
	const DH = 520, dw = picW(DROPPER, DH);
	const x0 = 860 - dw / 2;
	return (
		<Overlay>
			<g opacity={1 - slide} transform={`translate(${-300 * slide},0)`}>
				<PlateAt p={DROPPER} x={x0} y={190} h={DH} at={K6.one} />
				<Note x={860} y={760} text="K_2CrO_4 indicator" size={32} color={CR_INK} anchor="middle" hand={false} at={K6.pot} />
				<Fade at={K6.six}>
					<rect x={500} y={800} width={720} height={110} rx={18} fill="#fff1ed" stroke="#c4432f" strokeWidth={4} />
					<Diamond x={570} y={855} s={0.85} mark="!" at={K6.toxic} />
					<Diamond x={1150} y={855} s={0.85} mark="!" at={K6.cancer} />
					<Sx x={860} y={868} text="Cr(VI): toxic, carcinogen" size={38} color="#9b2f1f" anchor="middle" weight={800} at={K6.six} />
				</Fade>
			</g>
			<AChip x={500} y={950} text="many schools skip this practical" size={34} color={INK_SOFT} hand={false} at={K6.skip} out={K6.data + 20} />
			<Fade at={K6.data}>
				<TitreTable x={1100} y={380} at={K6.data + 6} rows={[]} />
				<Note x={1100} y={300} text="met as data in a question" size={40} color={TEAL} at={K6.likely + 10} />
			</Fade>
			{void K6.process}{void Ag}{void Cr}{void INK}
		</Overlay>
	);
};
