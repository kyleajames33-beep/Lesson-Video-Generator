// M6 C05 scenes 1 to 4: same label, different acid; inside the two beakers (schematic lenses); strong and weak and
// what pH shows; why the weak acid stops early (a two-way hop loop).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER, MG, VINEGAR} from './assets';
import {
	ACID, ACID_INK, An, BASE, BASE_INK, Counter, Dim, Fade, Field, FieldLens, GREY_INK, H3O, HopPair, INK, INK_SOFT, LiquidBeaker, Meter, Note, Overlay, PHChip, PHScale, PicH, SpanBracket, Sx, TEAL,
	Under, clamp01, keys, lerp, meterH, mw, phW, phX, picW, smooth, vis,
} from './parts';

// Base geometry of the two lenses (scene 2). Later scenes move them with Zoom, so the particles keep their places.
export const LL = {cx: 560, cy: 600, r: 260}, RL = {cx: 1360, cy: 600, r: 260};
/** Move a lens drawn at base (cx, cy, r) to the place keyed over frames: [frame, cx, cy, r]. */
export const Zoom: React.FC<{base: {cx: number; cy: number; r: number}; pts: [number, number, number, number][]; children: React.ReactNode}> = ({base, pts, children}) => {
	const f = useCurrentFrame();
	const cx = keys(pts.map(p => [p[0], p[1]] as [number, number]))(f), cy = keys(pts.map(p => [p[0], p[2]] as [number, number]))(f), r = keys(pts.map(p => [p[0], p[3]] as [number, number]))(f);
	const k = r / base.r;
	return <g transform={`translate(${cx},${cy}) scale(${k}) translate(${-base.cx},${-base.cy})`}>{children}</g>;
};
/** The strong (HCl) lens: every molecule split from `split`. */
export const StrongLens: React.FC<{split: number; at?: number; pulse?: number; o?: number; keep?: (f: number) => number; children?: React.ReactNode}> = ({split, at = -100, pulse, o = 1, keep, children}) => (
	<FieldLens cx={LL.cx} cy={LL.cy} r={LL.r} at={at} o={o}>
		<Field cx={LL.cx} cy={LL.cy} r={LL.r} seed={11} at={-1000} splitAll={{at: split, spread: 50}} pulse={pulse} keep={keep} />
		{children}
	</FieldLens>
);
/** The weak (acetic acid) lens: whole molecules, one picked-out example split at `ex`. */
export const WeakLens: React.FC<{ex: number; ring?: [number, number]; at?: number; pulse?: number; o?: number; children?: React.ReactNode}> = ({ex, ring, at = -100, pulse, o = 1, children}) => (
	<FieldLens cx={RL.cx} cy={RL.cy} r={RL.r} at={at} o={o}>
		<Field cx={RL.cx} cy={RL.cy} r={RL.r} seed={23} at={-1000} examples={[{u: 0.05, v: 0.12, at: ex, ring}]} pulse={pulse} />
		{children}
	</FieldLens>
);

// ---------- 1. Hook: same label, different acid ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {hcl: 'hydrochloric acid and', acet: 'acetic acid, the', vin: 'vinegar', both: 'Both labels', same: 'same amount of acid dissolved', meter: 'pH meter', one: 'one point zero', two: 'two point nine', drop: 'Drop in magnesium', fizz: 'fizzes hard', barely: 'barely bubbles', why: 'why such a difference'});
const BH = 400, BY = 330;
const BW = picW(BEAKER, BH);
const LX = 170, RX = 660;
const lc = LX + BW / 2, rc = RX + BW / 2;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const MW = 600, MX = 1230, MY = 430;
	const rest: [number, number] = [1150, 800], inL: [number, number] = [lc + 30, 660], inR: [number, number] = [rc + 30, 660];
	const arc = (a: [number, number], b: [number, number], t: number): [number, number] => [lerp(a[0], b[0], t), lerp(a[1], b[1], t) - Math.sin(t * Math.PI) * 260];
	const probe = (fr: number): [number, number] => {
		const t1 = smooth(clamp01((fr - K1.one + 4) / 28)), t2 = smooth(clamp01((fr - K1.two + 4) / 28)), t3 = smooth(clamp01((fr - K1.two - 46) / 26));
		if (t3 > 0) return arc(inR, rest, t3);
		if (t2 > 0) return arc(inL, inR, t2);
		return arc(rest, inL, t1);
	};
	const read = (fr: number) => (fr >= K1.two + 26 && fr < K1.two + 46 + 4 ? 'pH 2.9' : fr >= K1.one + 26 && fr < K1.two ? 'pH 1.0' : '');
	const fizz = prog(f, K1.fizz, 30);
	const nameDim = 1 - 0.6 * prog(f, K1.drop, 14);
	const concDim = 1 - 0.6 * prog(f, K1.fizz + 40, 14);
	const MGH = 400, mgw = picW(MG.strong, MGH);
	const ly = BY + BH + 56;
	const cw = mw('0.10 mol/L', 36, false, 700);
	return (
		<>
			<Heading text="Same concentration. Why different?" at={K1.why} size={58} />
			<Overlay>
				<g transform={`translate(${330 * smooth(prog(f, K1.drop - 4, 30))},0)`}>
				<LiquidBeaker x={LX} y={BY} h={BH} o={1 - fizz} />
				<LiquidBeaker x={RX} y={BY} h={BH} o={1 - fizz} />
				<PicH p={MG.strong} x={lc - mgw / 2} y={BY} h={MGH} o={fizz} />
				<PicH p={MG.weak} x={rc - mgw / 2} y={BY} h={MGH} o={fizz} />
				<Fade at={K1.vin - 6} out={K1.same + 30}><PicH p={VINEGAR} x={RX + BW + 20} y={BY + 140} h={250} /></Fade>
				<g opacity={nameDim}>
					<Note x={lc} y={ly} text="hydrochloric acid" size={38} anchor="middle" at={K1.hcl} />
					<Note x={rc} y={ly} text="acetic acid" size={38} anchor="middle" at={K1.acet} />
				</g>
				<g opacity={concDim}>
					<Sx x={lc} y={ly + 52} text="0.10 mol/L" size={36} color={INK} anchor="middle" weight={700} at={K1.both} />
					<Sx x={rc} y={ly + 52} text="0.10 mol/L" size={36} color={INK} anchor="middle" weight={700} at={K1.both + 6} />
					<Under x1={lc - cw / 2} x2={lc + cw / 2} y={ly + 62} at={K1.same} color={ACID} />
					<Under x1={rc - cw / 2} x2={rc + cw / 2} y={ly + 62} at={K1.same + 8} color={ACID} />
					<Sx x={(lc + rc) / 2} y={ly + 54} text="=" size={56} color={ACID_INK} anchor="middle" weight={800} at={K1.same + 14} />
				</g>
				<PHChip x={lc} y={BY - 70} text="pH 1.0" anchor="middle" at={K1.one + 34} drop />
				<PHChip x={rc} y={BY - 70} text="pH 2.9" anchor="middle" at={K1.two + 34} drop />
				</g>
				<Meter x={MX} y={MY} w={MW} at={K1.meter - 10} out={K1.drop - 6} probe={probe} read={read} />
				{void meterH}{void K1.barely}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 2. Inside the two beakers ----------
const H2 = 'inside-beakers';
const K2 = cues(sc(H2), {zoom: 'Zoom in', every: 'every hydrogen chloride', making: 'making hydronium', whole: 'still whole', eighty: 'one molecule in eighty', hyd: 'Hydronium ions are', fewer: 'far fewer'});
/** Small plate thumbnails with their pH chips, beside the lenses (dimmed). */
const Minis: React.FC<{o?: number}> = ({o = 0.55}) => {
	const h = 150, w = picW(MG.strong, h);
	return (
		<g opacity={o}>
			<PicH p={MG.strong} x={110} y={250} h={h} />
			<PHChip x={110 + w / 2} y={412} text="pH 1.0" anchor="middle" size={26} at={-100} />
			<PicH p={MG.weak} x={1810 - w} y={250} h={h} />
			<PHChip x={1810 - w / 2} y={412} text="pH 2.9" anchor="middle" size={26} at={-100} />
		</g>
	);
};
export const SceneInside: React.FC = () => (
	<>
		<Heading text="Inside the two beakers" at={4} size={58} />
		<Overlay>
			<Minis />
			<Sx x={LL.cx} y={LL.cy - LL.r - 22} text="hydrochloric acid" size={32} color={GREY_INK} anchor="middle" hand at={6} />
			<Sx x={RL.cx} y={RL.cy - RL.r - 22} text="acetic acid" size={32} color={GREY_INK} anchor="middle" hand at={6} />
			<StrongLens split={K2.every} at={K2.zoom} pulse={K2.fewer} />
			<WeakLens ex={K2.eighty} ring={[K2.eighty - 4, 100000]} at={K2.zoom + 6} pulse={K2.fewer} />
			<Counter x={LL.cx} y={LL.cy + LL.r + 22} text="split: all" at={K2.making} />
			<Counter x={RL.cx} y={RL.cy + RL.r + 22} text="split: about 1 in 80" at={K2.eighty + 10} />
			{void K2.whole}{void K2.hyd}
		</Overlay>
	</>
);

// ---------- 3. Strong and weak, and what pH shows ----------
const H3 = 'strong-weak';
const K3 = cues(sc(H3), {strength: 'called strength', strong: 'A strong acid', weak: 'A weak acid', lower: 'A lower pH', ten: 'ten times as many', hundred: 'a hundred times', gap: 'The gap here', eighty: 'about eighty times'});
const S3: {l: [number, number, number, number][]; r: [number, number, number, number][]} = {l: [[0, 560, 600, 260], [24, 560, 470, 205]], r: [[0, 1360, 600, 260], [24, 1360, 470, 205]]};
const PX = 200, PW = 1520, PY = 880;
export const SceneStrongWeak: React.FC = () => {
	const f = useCurrentFrame();
	const tagDim = 1 - 0.65 * prog(f, K3.lower, 14);
	const X = (q: number) => phX(PX, PW, q);
	const marker = (q: number, at: number, label: string) => (
		<Fade at={at}>
			<path d={`M${X(q) - 10},${PY - 26} L${X(q) + 10},${PY - 26} L${X(q)},${PY - 8} Z`} fill={INK} />
			<PHChip x={X(q)} y={PY - 84} text={label} anchor="middle" size={30} at={at} drop />
		</Fade>
	);
	return (
		<>
			<Heading text="Strong and weak" at={K3.strength} size={58} />
			<Overlay>
				<Zoom base={LL} pts={S3.l}><StrongLens split={-1000} /></Zoom>
				<Zoom base={RL} pts={S3.r}><WeakLens ex={-1000} /></Zoom>
				<Counter x={LL.cx} y={LL.cy + LL.r + 22} text="split: all" at={-100} out={K3.strong - 10} />
				<Counter x={RL.cx} y={RL.cy + RL.r + 22} text="split: about 1 in 80" at={-100} out={K3.strong - 10} />
				<g opacity={tagDim}>
					<Note x={560} y={740} text="strong acid: ionises completely" size={38} color={TEAL} anchor="middle" at={K3.strong} />
					<Note x={1360} y={740} text="weak acid: ionises partly" size={38} color={ACID_INK} anchor="middle" at={K3.weak} />
				</g>
				<PHScale x={PX} y={PY} w={PW} at={K3.lower - 6} />
				{marker(1.0, K3.lower + 14, 'pH 1.0')}
				{marker(2.9, K3.lower + 22, 'pH 2.9')}
				<SpanBracket x1={X(1)} x2={X(2)} y={PY + 70} text="× 10" at={K3.ten} out={K3.hundred + 40} size={30} />
				<SpanBracket x1={X(2)} x2={X(3)} y={PY + 70} text="× 10" at={K3.hundred} out={K3.hundred + 40} size={30} />
				<SpanBracket x1={X(1)} x2={X(3)} y={PY + 70} text="× 10 × 10 = × 100" at={K3.hundred + 40} out={K3.eighty - 6} size={30} />
				<SpanBracket x1={X(1)} x2={X(2.9)} y={PY + 70} text="about 80 × more H_3O^{+}" at={K3.eighty} size={32} hand={false} color={TEAL} />
				{void K3.gap}{void K3.weak}
			</Overlay>
		</>
	);
};

// ---------- 4. Why the weak acid stops early ----------
const H4 = 'why-weak-stops';
const K4 = cues(sc(H4), {why: 'Why does acetic acid', both: 'runs both ways', give: 'molecules give protons', back: 'take protons back', soon: 'Very soon', rate: 'the same rate', dyn: 'dynamic equilibrium', mod: 'met in Module', whole: 'still whole', chl: 'Chloride ions almost', all: 'all the way', later: 'A later video'});
/** A small balance whose beam levels at `level`. */
const Balance: React.FC<{x: number; y: number; at: number; level: number; out?: number; o?: number}> = ({x, y, at, level, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const tilt = 14 * (1 - smooth(prog(f, level, 30))) + Math.sin(f * 0.05) * 1.2 * prog(f, level, 30);
	return (
		<g opacity={v}>
			<path d={`M${x - 34},${y + 90} L${x + 34},${y + 90} L${x},${y + 8} Z`} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<g transform={`rotate(${tilt} ${x} ${y})`}>
				<line x1={x - 150} y1={y} x2={x + 150} y2={y} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				<path d={`M${x - 190},${y + 50} L${x - 110},${y + 50} M${x - 150},${y} L${x - 180},${y + 50} M${x - 150},${y} L${x - 120},${y + 50}`} stroke={INK_SOFT} strokeWidth={3} fill="none" />
				<path d={`M${x + 110},${y + 50} L${x + 190},${y + 50} M${x + 150},${y} L${x + 120},${y + 50} M${x + 150},${y} L${x + 180},${y + 50}`} stroke={INK_SOFT} strokeWidth={3} fill="none" />
				<path d={`M${x - 172},${y + 34} L${x - 128},${y + 34} M${x - 142},${y + 24} L${x - 128},${y + 34} L${x - 142},${y + 44}`} stroke={ACID} strokeWidth={5} fill="none" strokeLinecap="round" />
				<path d={`M${x + 172},${y + 34} L${x + 128},${y + 34} M${x + 142},${y + 24} L${x + 128},${y + 34} L${x + 142},${y + 44}`} stroke={BASE} strokeWidth={5} fill="none" strokeLinecap="round" />
			</g>
			<circle cx={x} cy={y} r={7} fill={INK} />
		</g>
	);
};
export const SceneWhyStops: React.FC = () => {
	const f = useCurrentFrame();
	const lDim = 1 - 0.7 * prog(f, 10, 20) * (1 - prog(f, K4.all - 10, 16));
	const s = 1.35;
	// three foreground pairs in the right lens's base frame; forward (amber) and back (violet) at matched pace
	const P = 170;
	const pairs: {a: [number, number]; b: [number, number]; ev: number[]; start?: boolean}[] = [
		{a: [1280, 520], b: [1345, 488], ev: [K4.both, K4.both + 2 * P, K4.both + 4 * P]},
		{a: [1440, 660], b: [1505, 628], ev: [K4.back, K4.back + 2 * P, K4.back + 4 * P], start: true},
		{a: [1250, 720], b: [1315, 688], ev: [K4.both + P, K4.both + 3 * P, K4.both + 5 * P]},
		{a: [1420, 440], b: [1485, 408], ev: [K4.back + P], start: true},
	];
	return (
		<>
			<Heading text="Why does the weak acid stop early?" at={4} size={58} />
			<Overlay>
				<g opacity={lDim}>
					<Zoom base={LL} pts={[[0, 560, 470, 205], [20, 290, 790, 150]]}>
						<StrongLens split={-1000}>
							<Fade at={K4.all}>
								<An x={530} y={610} s={1.9} />
								<H3O x={598} y={592} s={1.9} />
							</Fade>
						</StrongLens>
					</Zoom>
				</g>
				<Note x={290} y={990} text="Cl^{-}: no pull back" size={38} color={GREY_INK} anchor="middle" at={K4.all + 10} />
				<Zoom base={RL} pts={[[0, 1360, 470, 205], [22, 1260, 590, 340]]}>
					<WeakLens ex={-1000} pulse={undefined}>
						<Fade at={K4.both - 8}>
							{pairs.map((p, i) => <PairS key={i} {...p} s={s} />)}
						</Fade>
					</WeakLens>
				</Zoom>
				<Sx x={600} y={300} text="forward: gives H^{+} to water" size={32} color={ACID_INK} anchor="middle" weight={700} at={K4.give} out={K4.dyn} />
				<Sx x={600} y={350} text="back: takes H^{+} from H_3O^{+}" size={32} color={BASE_INK} anchor="middle" weight={700} at={K4.back} out={K4.dyn} />
				<Balance x={600} y={430} at={K4.soon - 10} level={K4.rate} />
				<Note x={600} y={590} text="forward rate = reverse rate" size={38} color={INK} anchor="middle" at={K4.rate + 6} out={K4.dyn + 10} />
				<Note x={600} y={590} text="dynamic equilibrium (Module 5)" size={40} color={TEAL} anchor="middle" at={K4.dyn + 14} />
				{void K4.why}{void K4.mod}{void K4.whole}{void K4.chl}{void K4.later}
			</Overlay>
		</>
	);
};
const PairS: React.FC<{a: [number, number]; b: [number, number]; ev: number[]; start?: boolean; s: number}> = ({a, b, ev, start, s}) => <HopPair a={a} b={b} events={ev} s={s} startSplit={start} />;
void Dim;
