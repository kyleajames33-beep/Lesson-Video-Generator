// M6 P05 scenes 1 to 7: same pH, which is the buffer (two meters, flipping labels); choosing the pair and the amounts
// (reagent bottles, the C11 ratio bar, the pKa prediction); making it accurately and making enough (pipette streams into
// a rising beaker, the moles, the volume tally); measuring its pH; designing the test (the 2 × 2 grid, water control,
// dose drops from the graduated pipette, the same-beaker trap); the results with change bars; why the buffer barely moved.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {PIPETTE_G, WASH, WASH_N} from './assets';
import {
	ACIDC, AChip, AMBER_INK, BASE_INK, BUF, BUFTINT, BUF_TAB, ChangeBar, DimG, DrawPath, ETHC, FillBeaker, Fade, FullMeter, GCard, GLINE, GradPip, INK, INK_SOFT, Meter, MistakeX, Note,
	Overlay, P, PicH, PipettePlate, RBottle, RatioBar, StableDot, Stream, Sx, TEAL, TabBeaker, TaskLine, VAxis, WATERC, WATER_TAB, WATERL, WLine, beakerW, flicker, lerp, meterBeaker,
	meterScreen, picW, probeArc, rbW, smooth, vaY, vis,
} from './parts';
import type {VA} from './parts';

// ---------- 1. Hook: same pH, which is the buffer? ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {read: 'four point six eight', buffer: "buffer you've", dilute: 'dilute hydrochloric acid', which: 'Which is which', tell: "can't tell", does: 'it does', practical: 'this practical', prove: 'prove it'});
/** A label that flips (squashes vertically) to a second text at `flip` and back at `back`. */
const FlipLabel: React.FC<{x: number; y: number; a: string; b: string; flip: number; back: number; size?: number; at: number}> = ({x, y, a, b, flip, back, size = 38, at}) => {
	const f = useCurrentFrame();
	const t1 = Math.min(1, Math.max(0, (f - flip) / 14)), t2 = Math.min(1, Math.max(0, (f - back) / 14));
	const showB = (t1 >= 0.5 && t2 < 0.5);
	const sy = Math.abs(Math.cos(Math.PI * (t2 > 0 ? t2 : t1)));
	return (
		<g transform={`translate(0,${y}) scale(1,${Math.max(0.02, sy)}) translate(0,${-y})`}>
			<Sx x={x} y={y} text={showB ? b : a} size={size} color={showB ? AMBER_INK : INK} anchor="middle" weight={700} at={at} />
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const XS = [330, 1130], MY = 300, MH = 420;
	const r = K1.read;
	const readX = flicker(16, r + 6, '4.68', 4.3, 5.1);
	const readY = (fr: number) => (fr < r + 40 ? flicker(16, r + 40, '4.69', 4.3, 5.1)(fr) : fr < r + 58 ? '4.69' : '4.68');
	return (
		<>
			<Heading text="A buffer is what it does" at={K1.does} size={62} />
			<Overlay>
				{XS.map((x, i) => {
					const mb = meterBeaker(x, MY, MH), scr = meterScreen(x, MY, MH);
					return (
						<g key={i}>
							<FullMeter x={x} y={MY} h={MH} at={-100} read={i === 0 ? readX : readY} />
							<StableDot x={scr.right - 22} y={scr.top + 20} at={i === 0 ? r + 8 : r + 58} />
							<FlipLabel x={mb.cx} y={mb.bottom + 56} a={i === 0 ? 'solution X' : 'solution Y'} b={i === 0 ? 'buffer?' : 'HCl, about 0.00002 mol/L?'} flip={K1.dilute + 10} back={K1.which + 30} at={4} />
						</g>
					);
				})}
				<Sx x={960} y={560} text="?" size={110} color={GLINE} anchor="middle" hand at={K1.dilute + 16} out={K1.which + 44} />
				<Note x={960} y={940} text="same reading: you can't tell" size={36} color={INK_SOFT} anchor="middle" at={K1.tell} out={K1.does} />
				<AChip x={960} y={900} text="resists a pH change (C11)" size={36} color={TEAL} hand={false} anchor="middle" at={K1.does + 14} />
				{void K1.buffer}{void K1.practical}{void K1.prove}
			</Overlay>
		</>
	);
};

// ---------- 2. Choose the pair and the amounts ----------
const S2 = 'choose-pair';
const K2 = cues(sc(S2), {weak: 'weak acid', conj: 'conjugate base', eth: 'use ethanoic', sodium: 'sodium ethanoate', equal: 'equal moles', ratio: 'ratio is one', pka: 'pKa', f474: 'four point seven four'});
export const SceneChoose: React.FC = () => {
	const BH = 380, bw = rbW(BH);
	const BX = [1120, 1480], BY = 230;
	return (
		<Overlay>
			<TaskLine text="Choose the pair and the amounts" at={4} size={56} />
			<RBottle x={BX[0]} y={BY} h={BH} lines={['ethanoic acid', '0.100 mol/L']} color={ACIDC} at={6} glow={K2.weak} />
			<RBottle x={BX[1]} y={BY} h={BH} lines={['sodium ethanoate', '0.100 mol/L']} color={ETHC} at={12} glow={K2.conj} />
			<DimG at={K2.equal} to={0.4}>
				<Sx x={BX[0] + bw / 2} y={BY + BH + 50} text="HA: weak acid" size={34} color={AMBER_INK} anchor="middle" weight={800} at={K2.weak} />
				<Sx x={BX[1] + bw / 2} y={BY + BH + 50} text="A^{−}: its conjugate base" size={34} color={BASE_INK} anchor="middle" weight={800} at={K2.conj} />
				<Note x={BX[1] + bw / 2} y={BY + BH + 100} text="supplies the ethanoate" size={30} color={INK_SOFT} anchor="middle" at={K2.sodium + 10} />
			</DimG>
			<RatioBar x={260} base={700} k={230} nA={() => 1} nB={() => 1} at={K2.equal} labA="CH_3COOH" labB="CH_3COO^{−}" mid={{t: 'ratio 1 : 1', at: K2.ratio}} size={30} bw={110} gap={100} />
			<Sx x={96} y={890} text="equal moles: pH = pKa = −log(1.8 × 10^{−5}) = 4.74" size={44} color={INK} weight={800} at={K2.f474 - 10} />
			<Sx x={96} y={950} text="Ka and pKa video" size={26} color={INK_SOFT} weight={600} at={K2.f474 + 10} />
			{void K2.eth}{void K2.pka}
		</Overlay>
	);
};

// ---------- 3. Make it accurately, and make enough ----------
const S3 = 'prepare';
const K3 = cues(sc(S3), {pip: 'volumetric pipette', fifty: 'fifty millilitres', beaker: 'dry beaker', swirl: 'swirl', hundred: 'one hundred', moles: 'zero point zero zero five zero zero', ratio: 'ratio sets', enough: 'make enough', seventy: 'seventy millilitres', fifty2: ['fifty', 2], rinsing: 'rinsing'});
export const ScenePrepare: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 420, BY = 430, BH = 290, bw = beakerW(BH), cx = BX + bw / 2;
	const tip: [number, number] = [cx, BY + 40];
	const s1 = [K3.fifty + 10, K3.swirl - 6], s2 = [K3.swirl + 8, K3.hundred + 24];
	const level = (fr: number) => kf(fr, [[s1[0], 0], [s1[1], 0.5], [s2[0], 0.5], [s2[1], 1]]);
	const surf = BY + BH * (0.416 + (1 - level(f)) * 0.41);
	const pipO = vis(f, K3.pip - 10, K3.hundred + 40, 12);
	const flow1 = vis(f, s1[0], s1[1], 6), flow2 = vis(f, s2[0], s2[1], 6);
	const pz = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K3.ratio) / 36)) * Math.PI));
	const RB = {x: 1200, base: 700};
	return (
		<Overlay>
			<TaskLine text="Make it accurately" at={4} size={56} />
			<FillBeaker x={BX} y={BY} h={BH} level={level} tint={BUFTINT} />
			{pipO > 0.01 ? <g opacity={pipO}><PipettePlate tipX={tip[0]} tipY={tip[1]} h={260} rot={PIPETTE_G.tilt} /></g> : null}
			{flow1 > 0.01 ? <line x1={tip[0]} y1={tip[1]} x2={tip[0]} y2={surf} stroke={ACIDC} strokeWidth={6} strokeLinecap="round" opacity={0.85 * flow1} /> : null}
			{flow2 > 0.01 ? <line x1={tip[0]} y1={tip[1]} x2={tip[0]} y2={surf} stroke={ETHC} strokeWidth={6} strokeLinecap="round" opacity={0.85 * flow2} /> : null}
			<DimG at={K3.swirl} to={0.4}><Note x={BX - 30} y={BY + 110} text="50.0 mL ethanoic acid" size={32} color={AMBER_INK} anchor="end" at={K3.fifty + 6} /></DimG>
			<DimG at={K3.ratio} to={0.4}><Note x={BX - 30} y={BY + 170} text="50.0 mL sodium ethanoate" size={32} color={BASE_INK} anchor="end" at={K3.swirl + 8} /></DimG>
			<Sx x={cx} y={BY + BH + 46} text="buffer, about 100 mL" size={32} color={INK} anchor="middle" weight={700} at={K3.hundred} />
			<Sx x={cx} y={BY + BH + 86} text="(0.00500 mol of each)" size={28} color={INK_SOFT} anchor="middle" weight={600} at={K3.moles + 20} />
			<DimG at={K3.enough} to={0.42}>
				<Sx x={1000} y={330} text="n = c × V = 0.100 mol/L × 0.0500 L" size={34} color={INK} weight={600} at={K3.moles} />
				<Sx x={1000} y={385} text="= 0.00500 mol each" size={38} color={TEAL} weight={800} at={K3.moles + 16} />
				<g transform={pz > 0 ? `translate(${RB.x + 170},${RB.base}) scale(${1 + 0.12 * pz}) translate(${-RB.x - 170},${-RB.base})` : undefined}>
					<RatioBar x={RB.x} base={RB.base} k={220} nA={() => 1} nB={() => 1} at={K3.moles + 10} labA="CH_3COOH" labB="CH_3COO^{−}" valA={() => '0.00500 mol'} valB={() => '0.00500 mol'} size={28} bw={120} gap={100} />
				</g>
				<Note x={RB.x + 170} y={RB.base + 90} text="the ratio sets the pH" size={32} color={TEAL} anchor="middle" at={K3.ratio + 6} />
			</DimG>
			<Sx x={96} y={900} text="2 × 20.0 mL portions + 10.00 mL for dilution" size={32} color={INK} weight={600} at={K3.seventy - 20} />
			<Sx x={96} y={948} text="+ pipette rinses and a spare ≈ 70 mL per set" size={32} color={INK} weight={700} at={K3.seventy} />
			<MistakeX x={1180} y={840} text="make 50 mL" at={K3.fifty2 - 10} cross={K3.rinsing - 6} note="nothing left for rinsing or a re-test" size={34} />
			{void K3.beaker}{void K3.enough}{void picW}
		</Overlay>
	);
};

// ---------- 4. Measure its pH ----------
const S4 = 'measure-start';
const K4 = cues(sc(S4), {meter: 'calibrated meter', routine: 'routine', f468: 'four point six eight', below: 'a little below', simple: 'simple ratio', do: 'do a little', changes: 'pH changes'});
export const SceneMeasure: React.FC = () => {
	const BX = 520, BY = 470, BH = 260, bw = beakerW(BH);
	const tip: [number, number] = [BX + bw / 2, BY + BH * 0.8];
	const probe = probeArc([440, 560], [{at: K4.meter, to: tip}]);
	const read = (fr: number) => (fr < K4.meter + 24 ? '' : flicker(K4.meter + 24, K4.f468 + 4, '4.68', 4.3, 5.0)(fr));
	const CX = 1100;
	return (
		<Overlay>
			<TaskLine text="Measure its pH" at={4} size={56} />
			<Meter x={60} y={600} w={320} at={-100} probe={probe} read={read} />
			<TabBeaker x={BX} y={BY} h={BH} label="buffer" tab={BUF_TAB} at={-100} tint={BUFTINT} size={30} />
			<Sx x={CX} y={330} text="measured 4.68" size={46} color={TEAL} weight={800} at={K4.f468} />
			<Sx x={CX} y={400} text="predicted 4.74" size={40} color={INK_SOFT} weight={700} at={K4.below} />
			<Sx x={CX} y={455} text="(mean of three sets: 4.67, 4.69, 4.68)" size={28} color={INK_SOFT} weight={600} at={K4.f468 + 20} />
			<Sx x={CX} y={545} text="real ions affect each other; stock concentrations" size={28} color={INK_SOFT} weight={600} at={K4.do} />
			<MistakeX x={CX} y={640} text="the reading should equal 4.74 exactly" at={K4.changes - 16} cross={K4.changes + 10} note="small offsets are normal; compare changes" size={30} />
			<Sx x={420} y={720} text="Δ" size={84} color={TEAL} anchor="middle" weight={800} at={K4.changes + 14} />
			{void K4.routine}{void K4.simple}
		</Overlay>
	);
};

// ---------- 5. Design the test: split, control, dose ----------
const S5 = 'test-design';
const K5 = cues(sc(S5), {split: 'split', matching: 'matching', water: 'distilled water', control: 'control', read: 'Read each', dose: 'same dose', one: 'one millilitre', hcl: 'hydrochloric acid', naoh: 'sodium hydroxide', different: 'different portions', undo: 'undo it'});
export const GX = [560, 900], GY = [300, 650], GH = 160;
export const gcx = (i: number) => GX[i] + beakerW(GH) / 2;
export const SceneDesign: React.FC = () => {
	const f = useCurrentFrame();
	const BBX = 96, BBY = 430, BBH = 230, bbw = beakerW(BBH);
	const spout: [number, number] = [BBX + bbw - 14, BBY + 24];
	const rise = (a: number) => (fr: number) => kf(fr, [[a, 0], [a + 22, 1]]);
	const tops = [K5.split + 8, K5.split + 24], bots = [K5.water + 4, K5.water + 20];
	const WH = 200, k = WH / WASH.box[3];
	const nozzle: [number, number] = [GX[0] - 26, GY[1] - 40];
	const wx = nozzle[0] - (WASH_N.nozzle[0] - WASH.box[0]) * k, wy = nozzle[1] - (WASH_N.nozzle[1] - WASH.box[1]) * k;
	const dimLab = K5.control + 30;
	const colAt = [K5.hcl, K5.naoh];
	const RX = 1180;
	return (
		<Overlay>
			<TaskLine text="Design the test" at={4} size={56} />
			<FillBeaker x={BBX} y={BBY} h={BBH} level={fr => kf(fr, [[tops[0], 1], [tops[1] + 22, 0.62]])} tint={BUFTINT} />
			<Sx x={BBX + bbw / 2} y={BBY + BBH + 40} text="buffer batch" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
			{[0, 1].map(i => <Stream key={'s' + i} a={spout} b={[gcx(i), GY[0] + 20]} at={tops[i] - 6} out={tops[i] + 24} color="#8fcabb" />)}
			<g opacity={vis(f, K5.matching, K5.read + 20, 12)}><PicH p={WASH} x={wx} y={wy} h={WH} /></g>
			{[0, 1].map(i => <Stream key={'w' + i} a={nozzle} b={[gcx(i), GY[1] + 20]} at={bots[i] - 6} out={bots[i] + 24} />)}
			{[0, 1].map(i => (
				<g key={i}>
					<TabBeaker x={GX[i]} y={GY[0]} h={GH} label="buffer, 20.0 mL" tab={BUF_TAB} at={K5.split - 6} dimAt={dimLab} level={rise(tops[i])} tint={BUFTINT} />
					<TabBeaker x={GX[i]} y={GY[1]} h={GH} label="water, 20.0 mL" tab={WATER_TAB} at={K5.matching} dimAt={dimLab} level={rise(bots[i])} tint={WATERC} />
					<Sx x={gcx(i)} y={930} text={i === 0 ? '+ acid' : '+ base'} size={34} color={INK} anchor="middle" weight={800} at={colAt[i] - 4} />
					<GradPip tipX={gcx(i)} tipY={GY[0] - 4} len={170} at={colAt[i] - 12} out={colAt[i] + 50} drop={colAt[i] + 6} fall={60} dropColor={i === 0 ? '#f0b9a8' : '#c9b8e8'} />
					<GradPip tipX={gcx(i) + 40} tipY={GY[1] - 4} len={150} at={colAt[i] - 8} out={colAt[i] + 54} drop={colAt[i] + 12} fall={60} dropColor={i === 0 ? '#f0b9a8' : '#c9b8e8'} />
				</g>
			))}
			<DimG at={K5.dose} to={0.4}><Note x={RX} y={360} text="control: same treatment, not buffered" size={36} color={TEAL} at={K5.control} /></DimG>
			<Note x={RX} y={420} text="read each starting pH first" size={30} color={INK_SOFT} at={K5.read} out={K5.dose} hand={false} />
			<DimG at={K5.different} to={0.4}>
				<Note x={RX} y={480} text="the same dose to each pair:" size={34} color={INK} at={K5.dose} />
				<Sx x={RX} y={536} text="+ acid: 1.00 mL of 0.100 mol/L HCl" size={30} color={INK} weight={700} at={K5.hcl} />
				<Sx x={RX} y={582} text="+ base: 1.00 mL of 0.100 mol/L NaOH" size={30} color={INK} weight={700} at={K5.naoh} />
			</DimG>
			{/* the same-beaker trap */}
			<Fade at={K5.different - 6}>
				<FillBeaker x={RX + 10} y={650} h={130} level={() => 1} tint={BUFTINT} />
			</Fade>
			{[0, 1].map(i => {
				const t0 = K5.different + 6 + i * 26;
				const q = Math.min(1, Math.max(0, (f - t0) / 14));
				if (f < t0 || q >= 1) return null;
				return <circle key={'d' + i} cx={RX + 10 + beakerW(130) / 2} cy={lerp(610, 700, q * q)} r={9} fill={i === 0 ? '#e0866a' : '#a58ad6'} stroke={INK_SOFT} strokeWidth={1.5} />;
			})}
			<Sx x={RX + 150} y={700} text="acid, then base" size={28} color={INK_SOFT} weight={700} at={K5.different + 10} />
			<MistakeX x={RX} y={830} text="base after acid, same beaker" at={K5.different + 30} cross={K5.undo} note="the base just neutralises the acid you added" size={30} />
			{void K5.one}{void smooth}{void TEAL}
		</Overlay>
	);
};

// ---------- 6. The results: acid and base ----------
const S6 = 'results';
const K6 = cues(sc(S6), {f459: 'four point five nine', f477: 'four point seven seven', tenth: 'less than a tenth', water: 'water started', f593: 'five point nine three', co2: 'dissolved carbon dioxide', further: 'further to rise', plunged: 'plunged', f235: 'two point three five', shot: 'shot up', f1163: 'eleven point six three', resists: 'resists', prevent: 'prevent'});
export const AXR: VA = {x: 150, top: 240, bottom: 920, lo: 0, hi: 14};
export const RBARS = [
	{x: 260, p: [4.68, 4.59], buf: true, l: ['buffer', '+ acid']},
	{x: 350, p: [4.68, 4.77], buf: true, l: ['buffer', '+ base']},
	{x: 470, p: [5.93, 2.35], buf: false, l: ['water', '+ acid']},
	{x: 560, p: [5.93, 11.63], buf: false, l: ['water', '+ base']},
];
export const RROWS = [
	{n: 'buffer + HCl', a: '4.68', b: '→ 4.59', d: '−0.09'},
	{n: 'buffer + NaOH', a: '4.68', b: '→ 4.77', d: '+0.09'},
	{n: 'water + HCl', a: '5.93', b: '→ 2.35', d: '−3.58'},
	{n: 'water + NaOH', a: '5.93', b: '→ 11.63', d: '+5.70'},
];
export const ResultBars: React.FC<{at: number[]; o?: number; pulse?: number; size?: number}> = ({at, o = 1, pulse, size = 20}) => (
	<g opacity={o}>
		<VAxis a={AXR} ticks={[0, 2, 4, 6, 8, 10, 12, 14]} at={-100} size={22} />
		{RBARS.map((b, i) => (
			<g key={i}>
				<ChangeBar x={b.x} y1={vaY(AXR, b.p[0])} y2={vaY(AXR, b.p[1])} at={at[i]} solid color={b.buf ? BUF : WATERL} ink={b.buf ? BUF : '#3f7fb5'} w={40} pulse={b.buf ? undefined : pulse} />
				{b.l.map((t, k) => <Sx key={k} x={b.x} y={AXR.bottom + 40 + k * (size + 4)} text={t} size={size} color={INK} anchor="middle" weight={700} at={at[i]} />)}
			</g>
		))}
	</g>
);
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [4, K6.f477 - 30, K6.water, K6.shot - 10];
	const startAt = [10, K6.f477 - 24, K6.f593, K6.shot - 4];
	const afterAt = [K6.f459, K6.f477, K6.f235, K6.f1163];
	const GX2 = [680, 860], GY2 = [300, 560], GHH = 130;
	const tip = (c: number, r: number): [number, number] => [GX2[c] + beakerW(GHH) / 2, GY2[r] + GHH * 0.8];
	const probe = probeArc([960, 760], [{at: rowAt[0] - 2, to: tip(0, 0)}, {at: rowAt[1], to: tip(1, 0)}, {at: rowAt[2], to: tip(0, 1)}, {at: rowAt[3], to: tip(1, 1)}], K6.resists, 120);
	const vals = [4.59, 4.77, 2.35, 11.63];
	const read = (fr: number) => {
		let i = -1;
		rowAt.forEach((a, k) => { if (fr >= a + 22) i = k; });
		if (i < 0 || fr > K6.resists) return '';
		return flicker(rowAt[i] + 22, afterAt[i] + 4, vals[i].toFixed(2), vals[i] - 0.4, vals[i] + 0.4)(fr);
	};
	const TX = 1080, TY = 330, C = [0, 290, 400, 590];
	const ry = (i: number) => TY + 80 + i * 76;
	const y7 = vaY(AXR, 7);
	return (
		<Overlay>
			<TaskLine text="The results: acid and base" at={4} size={56} />
			<ResultBars at={afterAt} pulse={K6.plunged} />
			<Fade at={K6.tenth}>
				<DrawPath d={`M232,${vaY(AXR, 4.77) - 24} L232,${vaY(AXR, 4.77) - 40} L378,${vaY(AXR, 4.77) - 40} L378,${vaY(AXR, 4.77) - 24}`} at={K6.tenth} dur={12} color={BUF} width={4} />
			</Fade>
			<Sx x={305} y={vaY(AXR, 4.77) - 54} text="< 0.1" size={34} color={BUF} anchor="middle" weight={800} at={K6.tenth + 6} />
			<Fade at={K6.further}>
				<line x1={AXR.x} y1={y7} x2={610} y2={y7} stroke={GLINE} strokeWidth={3} strokeDasharray="10 8" />
				<Sx x={620} y={y7 + 8} text="7" size={24} color={INK_SOFT} weight={700} at={-1000} />
			</Fade>
			{[0, 1].map(c => [0, 1].map(r => <TabBeaker key={`${c}${r}`} x={GX2[c]} y={GY2[r]} h={GHH} label={r === 0 ? 'buffer' : 'water'} tab={r === 0 ? BUF_TAB : WATER_TAB} at={-100} tint={r === 0 ? BUFTINT : WATERC} size={20} />))}
			<Meter x={660} y={800} w={220} at={-100} probe={probe} read={read} />
			<Fade at={2}>
				{['portion', 'start', 'after', 'change'].map((t, i) => <Sx key={i} x={TX + C[i]} y={TY} text={t} size={28} color={INK_SOFT} hand weight={700} at={-1000} />)}
				<line x1={TX - 10} y1={TY + 18} x2={TX + 720} y2={TY + 18} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			</Fade>
			{RROWS.map((r, i) => {
				const o = i < 3 ? 1 - 0.55 * prog(f, rowAt[i + 1] + 20, 14) : 1;
				return (
					<g key={i} opacity={o}>
						<Sx x={TX + C[0]} y={ry(i)} text={r.n} size={30} color={INK} weight={700} at={rowAt[i]} />
						<Sx x={TX + C[1]} y={ry(i)} text={r.a} size={30} color={INK} weight={600} at={startAt[i]} />
						<Sx x={TX + C[2]} y={ry(i)} text={r.b} size={30} color={INK} weight={600} at={afterAt[i]} />
						<Sx x={TX + C[3]} y={ry(i)} text={r.d} size={30} color={i < 2 ? BUF : '#3f7fb5'} weight={800} at={afterAt[i] + 12} />
					</g>
				);
			})}
			<DimG at={K6.plunged} to={0.4}><Sx x={TX} y={ry(4) + 10} text="5.93: CO_2 from the air (P03)" size={28} color={INK_SOFT} weight={600} at={K6.co2} /></DimG>
			<AChip x={TX} y={ry(4) + 60} text="resists, not prevents" size={40} color={BUF} hand={false} at={K6.resists} />
			{void K6.prevent}{void lerp}
		</Overlay>
	);
};

// ---------- 7. Why the buffer barely moved ----------
const S7 = 'why-small';
const K7 = cues(sc(S7), {why: 'Why so little', each: 'Each buffer portion', moles: 'zero point zero zero one zero zero', dose: 'acid dose', tenth: 'one tenth', example: "video's example", takes: 'ethanoate takes up', ratio: 'the ratio moves', one2: 'one point two', f466: 'four point six six', same: 'same small drop'});
export const SceneWhy: React.FC = () => {
	const nA = (fr: number) => kf(fr, [[K7.takes, 0.001], [K7.takes + 24, 0.0011]]);
	const nB = (fr: number) => kf(fr, [[K7.takes - 1, 0.001], [K7.takes, 0.0009]], false);
	const done = (fr: number) => fr >= K7.takes + 24;
	const G = INK_SOFT;
	return (
		<Overlay>
			<TaskLine text="Predict the buffer's pH after the acid" at={4} size={52} />
			<Sx x={96} y={245} text="[H_3O^{+}] = Ka × n(CH_3COOH) ÷ n(CH_3COO^{−})" size={36} color={INK_SOFT} weight={700} at={6} />
			<Sx x={900} y={245} text="buffers video" size={26} color={INK_SOFT} hand weight={700} at={14} />
			<DimG at={K7.takes} to={0.4}>
				<GCard x={96} y={290} w={1060} lh={60} size={32} at={K7.each} lines={[
					{t: 'each partner: 0.0500 mol/L × 0.0200 L = 0.00100 mol', at: K7.each + 10},
					{t: 'HCl: 0.100 mol/L × 0.00100 L = 1.00 × 10^{−4} mol', at: K7.dose},
					{t: 'Ka = 1.8 × 10^{−5}', at: K7.example},
				]} />
				<Note x={96} y={610} text="1.00 × 10^{−4} mol is a tenth of 0.00100 mol" size={34} color={TEAL} at={K7.tenth} />
			</DimG>
			<RatioBar x={1330} base={560} k={200000} bw={120} gap={110} nA={nA} nB={nB} at={K7.each + 6} labA="CH_3COOH" labB="CH_3COO^{−}" size={26}
				valA={fr => (done(fr) ? '0.00110 mol' : '0.00100 mol')} valB={fr => (fr >= K7.takes ? '0.000900 mol' : '0.00100 mol')} slices={[{at: K7.takes, n: 0.0001}]} />
			<Note x={1505} y={650} text="ethanoate takes up the hydronium" size={28} color={BASE_INK} anchor="middle" at={K7.takes + 6} />
			<WLine x={96} y={710} size={36} dim={K7.f466} dimTo={0.5} items={P({t: 'ratio = 0.00110 ÷ 0.000900', color: G}, K7.ratio, {t: '= 1.22', color: G}, K7.one2)} />
			<WLine x={96} y={775} size={36} dim={K7.f466} dimTo={0.5} items={P({t: '[H_3O^{+}] = 1.8 × 10^{−5} × 1.22', color: G}, K7.one2 + 20, {t: '= 2.2 × 10^{−5} mol/L', color: G}, K7.one2 + 40)} />
			<WLine x={96} y={860} size={46} items={P({t: 'pH = 4.66', color: TEAL}, K7.f466, {t: '(2 decimal places: Ka has 2 s.f.)', color: INK_SOFT}, K7.f466 + 16)} />
			<AChip x={96} y={910} text="predicted 4.74 → 4.66; measured 4.68 → 4.59: both under 0.1" size={32} color={TEAL} hand={false} at={K7.same} />
			{void K7.why}{void K7.moles}
		</Overlay>
	);
};
