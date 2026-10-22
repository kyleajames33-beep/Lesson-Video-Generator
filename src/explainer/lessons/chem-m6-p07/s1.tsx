// M6 P07 scenes 1 to 5: one vinegar, two pH values (two meters, neither an amount); the two questions (pH from a probe,
// an amount from a titration); pH first, on the undiluted sample, with buffers either side; planning the titre from
// the label (the burette fill counter); diluting the sample tenfold instead of strengthening the base (the pipette
// drains into the volumetric flask, the spread lens, the scale bar).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hexMix, kf, sc} from './common';
import {BUFFER, BURETTE, FLASK, FLASK_G, PHMETER, VINEGAR, WASH, WASH_N} from './assets';
import {
	AChip, AMB, Bottle, BurCounter, DimG, Fade, FlaskFill, FullMeter, GREYX, GTick, INK, INK_SOFT, KeptChip, LabelBeaker, Meter, MistakeX, Note, Overlay, PHV, PicH, PipettePlate,
	RX, RingAt, ScaleBar, SpreadLens, StableDot, StepCard, Stream, Sx, TEAL, TERRA, TaskLine, VBracket2, VINT, WLine, P, beakerW, flicker, lerp, meterBeaker, natP, picW, probeArc,
	smooth, vis,
} from './parts';
import {PIPETTE_G} from './assets';

export const VinBottle: React.FC<{x: number; y: number; h: number; at?: number; lines?: string[]; size?: number; side?: 'right' | 'below'}> = ({x, y, h, at = -100, lines = ['white vinegar:', '4% acidity'], size = 32, side = 'right'}) => {
	const w = picW(VINEGAR, h);
	return (
		<Fade at={at}>
			<PicH p={VINEGAR} x={x} y={y} h={h} />
			{lines.map((t, i) => side === 'right'
				? <Sx key={i} x={x + w + 20} y={y + h * 0.55 + i * size * 1.2} text={t} size={size} color={i === 0 ? INK : INK_SOFT} weight={700} at={-1000} />
				: <Sx key={i} x={x + w / 2} y={y + h + size * 1.3 + i * size * 1.2} text={t} size={size} color={i === 0 ? INK : INK_SOFT} anchor="middle" weight={700} at={-1000} />)}
		</Fade>
	);
};

// ---------- 1. Hook: one vinegar, two pH values ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {a: 'two point four six', dil: 'Dilute it', b: 'two point nine six', same: 'Same vinegar', neither: 'neither one measures', so: 'So how do', say: 'say it means'});
export const SceneHook: React.FC = () => {
	const MH = 360, M = [{x: 620, y: 360}, {x: 1180, y: 360}];
	const mw0 = picW(PHMETER, MH);
	const readA = (fr: number) => (fr < 20 ? '' : flicker(20, K1.a + 4, '2.46', 2.3, 2.7)(fr));
	const readB = (fr: number) => (fr < K1.dil + 20 ? '' : flicker(K1.dil + 20, K1.b + 4, '2.96', 2.7, 3.2)(fr));
	const mb = M.map(m => meterBeaker(m.x, m.y, MH));
	const sy = M[0].y + MH * 0.16;
	return (
		<>
			<Heading text="What does each number mean?" at={K1.say} size={60} />
			<Overlay>
				<DimG at={K1.neither} to={0.5}><VinBottle x={110} y={340} h={480} /></DimG>
				<FullMeter x={M[0].x} y={M[0].y} h={MH} at={6} read={readA} pulse={K1.a} />
				<Sx x={mb[0].cx} y={mb[0].bottom + 44} text="neat vinegar" size={32} color={AMB} anchor="middle" weight={800} at={10} />
				<FullMeter x={M[1].x} y={M[1].y} h={MH} at={K1.dil} read={readB} pulse={K1.b} />
				<Sx x={mb[1].cx} y={mb[1].bottom + 44} text="diluted ten times" size={32} color={AMB} anchor="middle" weight={800} at={K1.dil + 10} />
				<Sx x={M[0].x + mw0 * 0.35} y={sy - 20} text="pH" size={30} color={PHV} anchor="middle" weight={800} at={K1.a} />
				<Sx x={M[1].x + mw0 * 0.35} y={sy - 20} text="pH" size={30} color={PHV} anchor="middle" weight={800} at={K1.b} />
				<DimG at={K1.neither} to={0.4}>
					<Fade at={K1.same}>
						<path d={`M${M[0].x + mw0 * 0.35},${M[0].y - 30} L${M[0].x + mw0 * 0.35},${M[0].y - 60} L${M[1].x + mw0 * 0.35},${M[1].y - 60} L${M[1].x + mw0 * 0.35},${M[1].y - 30}`} fill="none" stroke={GREYX} strokeWidth={4} />
					</Fade>
					<Sx x={(M[0].x + M[1].x) / 2 + mw0 * 0.35} y={M[0].y - 76} text="same vinegar" size={32} color={INK_SOFT} anchor="middle" hand at={K1.same + 6} />
				</DimG>
				<DimG at={K1.neither} to={0.35}><Sx x={M[1].x + mw0 - 20} y={M[1].y + MH + 110} text="+0.50: a weak acid on tenfold dilution (dilution practical)" size={24} color={INK_SOFT} anchor="end" weight={600} at={K1.b + 30} /></DimG>
				<DimG at={K1.say} to={0.4}><AChip x={(M[0].x + M[1].x + mw0) / 2} y={890} text="pH ≠ amount (method choice video)" size={34} color={GREYX} hand={false} anchor="middle" at={K1.neither} /></DimG>
				{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. Two questions, two measurements ----------
const S2 = 'two-questions';
const K2 = cues(sc(S2), {start: 'Start with', acidic: 'How acidic', ph: 'its pH', much: 'How much acid', amount: 'an amount', titr: 'needs a titration', white: 'White vinegar', direct: 'direct titration'});
export const SceneTwoQ: React.FC = () => {
	const f = useCurrentFrame();
	const CX = 520, CW = 1300, R1 = 330, R2 = 640;
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<Overlay>
			<TaskLine text="Two questions, two measurements" at={4} size={56} />
			<Fade at={K2.start}><rect x={CX - 40} y={R1 - 90} width={CW} height={610} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
			{[[R1, K2.ph, K2.much], [R2, K2.amount, K2.white]].map(([y, a, b], i) => lit(a, b) > 0.01 ? <rect key={i} x={CX - 26} y={y - 64} width={CW - 28} height={96} rx={14} fill="#f6d77a" opacity={0.4 * lit(a, b)} /> : null)}
			<FullMeter x={110} y={R1 - 150} h={210} at={K2.acidic} read={() => '2.46'} />
			<Sx x={CX} y={R1} text="How acidic now?" size={44} color={INK} weight={700} at={K2.acidic} />
			<Sx x={CX + 420} y={R1} text="→ pH (calibrated probe)" size={44} color={PHV} weight={800} at={K2.ph} />
			<Fade at={K2.much}><PicH p={BURETTE} x={230} y={R2 - 210} h={380} /></Fade>
			<Sx x={CX} y={R2} text="How much in total?" size={44} color={INK} weight={700} at={K2.much} />
			<Sx x={CX + 460} y={R2} text="→ titration" size={44} color={AMB} weight={800} at={K2.amount} />
			<DimG at={K2.white} to={0.35}><Note x={CX + 760} y={R2} text="method choice video" size={28} color={INK_SOFT} at={K2.titr} /></DimG>
			<GTick x={CX - 10} y={R2 + 92} at={K2.direct} color={TEAL} s={1.4} />
			<AChip x={CX + 24} y={R2 + 56} text="clear + fast → direct titration, phenolphthalein" size={34} color={TEAL} hand={false} at={K2.direct} />
			<Note x={CX + 24} y={R2 + 176} text="why phenolphthalein: the indicators video" size={28} color={INK_SOFT} at={K2.direct + 30} />
		</Overlay>
	);
};

// ---------- 3. pH first, on the sample as it is ----------
const S3 = 'ph-first';
const K3 = cues(sc(S3), {first: 'Measure the pH', cal: 'Calibrate the', seven: 'seven buffer', below: 'reads below four', two: 'two buffer', between: 'falls between', describes: 'describes the solution', undil: 'undiluted', three: 'Three readings', r: 'two point four six'});
const BOT = [{x: 420, ph: 'pH 7.00', color: '#7fb8a6'}, {x: 600, ph: 'pH 2.00', color: '#e6a0a0'}];
export const ScenePhFirst: React.FC = () => {
	const f = useCurrentFrame();
	const BY = 330, BH = 250;
	const bm = BOT.map(b => natP(BUFFER, b.x, BY, BH, 1000, 760));
	const VB = {x: 800, y: 400, h: 180}, GB = {x: 1000, y: 400, h: 180};
	const vtip: [number, number] = [VB.x + beakerW(VB.h) / 2, VB.y + VB.h * 0.78];
	const rest: [number, number] = [330, 520];
	const tW = K3.seven + 30;
	const probe = probeArc(rest, [{at: K3.cal + 6, to: bm[0]}, {at: tW, to: rest}, {at: K3.two - 4, to: bm[1]}, {at: K3.undil - 20, to: vtip}]);
	const read = (fr: number) => {
		if (fr < K3.cal + 30) return '';
		if (fr < tW) return flicker(K3.cal + 30, K3.seven + 10, '7.00', 6.8, 7.2)(fr);
		if (fr < K3.two + 20) return '';
		if (fr < K3.undil + 4) return flicker(K3.two + 20, K3.between, '2.00', 1.8, 2.2)(fr);
		return flicker(K3.undil + 4, K3.undil + 30, '2.46', 2.3, 2.6)(fr);
	};
	const WH = 170, wk = WH / WASH.box[3];
	const noz: [number, number] = [rest[0] + 110, rest[1] - 160];
	const wx = noz[0] - (WASH_N.nozzle[0] - WASH.box[0]) * wk, wy = noz[1] - (WASH_N.nozzle[1] - WASH.box[1]) * wk;
	const NL = {x0: 380, x1: 780, y: 690};
	const X = (p: number) => lerp(NL.x0, NL.x1, (p - 1) / 7);
	const mk = smooth(prog(f, K3.between, 24));
	const ry = 380;
	return (
		<Overlay>
			<StepCard n={1} text="Measure pH" at={6} />
			<Meter x={50} y={720} w={250} at={-100} probe={probe} read={read} />
			<StableDot x={320} y={760} at={K3.seven + 6} out={tW} />
			<StableDot x={320} y={760} at={K3.between - 4} out={K3.undil - 20} />
			<StableDot x={320} y={760} at={K3.undil + 30} />
			{BOT.map((b, i) => <Bottle key={i} x={b.x} y={BY} h={BH} ph={b.ph} color={b.color} at={i === 0 ? K3.cal : K3.below} />)}
			<Fade at={tW - 12} out={K3.two + 10}><PicH p={WASH} x={wx} y={wy} h={WH} /></Fade>
			<Stream a={noz} b={[rest[0] + 10, rest[1] - 120]} at={tW + 22} out={tW + 44} />
			<DimG at={K3.undil} to={0.35}>
				<Fade at={K3.two}>
					<line x1={NL.x0} y1={NL.y} x2={NL.x1} y2={NL.y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
					{[2, 7].map(p => <g key={p}><line x1={X(p)} y1={NL.y - 14} x2={X(p)} y2={NL.y + 14} stroke={INK} strokeWidth={4} /><Sx x={X(p)} y={NL.y + 44} text={String(p)} size={30} color={INK} anchor="middle" weight={800} at={-1000} /></g>)}
					<line x1={X(4)} y1={NL.y - 9} x2={X(4)} y2={NL.y + 9} stroke={GREYX} strokeWidth={3} />
					<Sx x={X(4)} y={NL.y + 40} text="4" size={24} color={GREYX} anchor="middle" weight={600} at={-1000} />
				</Fade>
				<g opacity={prog(f, K3.between, 10)}>
					<path d={`M${X(2.5)},${lerp(NL.y - 120, NL.y - 18, mk)} l-12,-20 l24,0 z`} fill={PHV} />
					<Sx x={X(2.5)} y={lerp(NL.y - 120, NL.y - 18, mk) - 30} text="vinegar ≈ 2.5" size={28} color={PHV} anchor="middle" weight={800} at={-1000} />
				</g>
				<Note x={NL.x0} y={NL.y + 100} text="buffers either side of the sample" size={32} color={TEAL} at={K3.between + 10} />
				<DimG at={K3.describes} to={0.4}><Sx x={NL.x0} y={NL.y + 140} text="method choice video: pH 4 suits most acidic samples; vinegar reads below 4" size={23} color={INK_SOFT} weight={600} at={K3.between + 24} /></DimG>
			</DimG>
			<LabelBeaker x={VB.x} y={VB.y} h={VB.h} at={K3.undil - 30} tint={VINT} size={26} lines={[{t: 'neat vinegar,', at: K3.undil - 20, color: AMB}, {t: 'from the bottle', at: K3.undil - 14, color: AMB}]} />
			<DimG at={K3.three} to={0.35}>
				<g opacity={0.55 * prog(f, K3.undil + 10, 14)}><LabelBeaker x={GB.x} y={GB.y} h={GB.h} at={-100} tint="#f6eed6" size={26} lines={[{t: 'diluted', at: -100, color: INK_SOFT}]} /></g>
				<Fade at={K3.undil + 24}>
					<line x1={GB.x - 6} y1={GB.y - 6} x2={GB.x + beakerW(GB.h) + 6} y2={GB.y + GB.h + 6} stroke={GREYX} strokeWidth={6} strokeLinecap="round" />
					<line x1={GB.x + beakerW(GB.h) + 6} y1={GB.y - 6} x2={GB.x - 6} y2={GB.y + GB.h + 6} stroke={GREYX} strokeWidth={6} strokeLinecap="round" />
				</Fade>
				<Sx x={GB.x + beakerW(GB.h) / 2} y={GB.y + GB.h + 90} text="a different solution:" size={26} color={INK_SOFT} anchor="middle" hand at={K3.undil + 30} />
				<Sx x={GB.x + beakerW(GB.h) / 2} y={GB.y + GB.h + 122} text="a different pH" size={26} color={INK_SOFT} anchor="middle" hand at={K3.undil + 36} />
			</DimG>
			<Sx x={RX} y={ry} text="readings" size={30} color={INK_SOFT} hand at={K3.three} />
			{['2.46', '2.45', '2.46'].map((t, i) => <Sx key={i} x={RX + 30} y={ry + 60 + i * 56} text={t} size={42} color={PHV} weight={800} at={K3.three + 8 + i * 12} />)}
			<VBracket2 x={RX + 160} y1={ry + 22} y2={ry + 186} text="within 0.01" at={K3.three + 44} size={30} color={TEAL} />
			<KeptChip x={RX} y={ry + 250} text="pH = 2.46 (25 °C)" at={K3.r} color={PHV} size={42} />
			{void K3.first}{void RingAt}{void INK}
		</Overlay>
	);
};

// ---------- 4. Plan the titration from the label ----------
const S4 = 'plan-from-label';
const K4 = cues(sc(S4), {now: 'Now the amount', label: 'The label says', four: 'about four grams', c: 'zero point six seven', school: "school's sodium", aliq: 'A twenty five', v: 'hundred and seventy', three: 'three burette'});
export const ScenePlan: React.FC = () => {
	const X = 96, Y0 = 330, LH = 92, S = 40;
	const fill = (fr: number) => 3.35 * smooth(prog(fr, K4.three - 6, 60));
	return (
		<Overlay>
			<TaskLine text="Estimate the titre before you start" at={4} size={54} />
			<StepCard n={2} text="Plan from the label" at={K4.now} />
			<WLine x={X} y={Y0} size={S} dim={K4.c} items={P('label: 4 g per 100 mL = 40 g/L', K4.four)} />
			<WLine x={X} y={Y0 + LH} size={S} dim={K4.aliq} items={P('c ≈ 40 ÷ 60.05', K4.c - 20, '≈ 0.67 mol/L', K4.c)} />
			<DimG at={K4.school} to={0.35}><Note x={X + 640} y={Y0 + LH} text="M(CH_3COOH) = 60.05 g/mol" size={28} color={INK_SOFT} hand={false} at={K4.c + 10} /></DimG>
			<WLine x={X} y={Y0 + LH * 2} size={S} dim={K4.v} items={P('NaOH ≈ 0.1 mol/L', K4.school)} />
			<WLine x={X} y={Y0 + LH * 3} size={S} dim={K4.v + 30} items={P('n in 25.00 mL ≈ 0.67 × 0.02500 ≈ 0.017 mol', K4.aliq)} />
			<WLine x={X} y={Y0 + LH * 4} size={S + 4} items={P('V(NaOH) ≈ 0.017 ÷ 0.1', K4.v - 20, {t: '≈ 170 mL', color: AMB}, K4.v)} />
			<Note x={X} y={Y0 + LH * 4 + 60} text="(estimates: rounded values)" size={28} color={INK_SOFT} at={K4.v + 20} />
			<BurCounter x={RX + 60} y={420} n={4} fill={fill} at={K4.three - 10} h={230} w={40} gap={56} />
			<Note x={RX + 20} y={760} text="50 mL burette:" size={34} color={INK} at={K4.three + 20} />
			<Note x={RX + 20} y={806} text="refill after refill" size={34} color={INK} at={K4.three + 30} />
			{void K4.label}{void INK}
		</Overlay>
	);
};

// ---------- 5. Dilute the sample, not strengthen the base ----------
const S5 = 'dilute';
const K5 = cues(sc(S5), {stronger: 'stronger base', corr: 'corrosive', instead: 'Instead', pip: 'Pipette twenty', flask: 'volumetric flask', mark: 'to the mark', moles: "acid's moles", spread: 'spread out', mult: 'multiply by ten', now: 'Now each titre', sev: 'seventeen'});
export const SceneDilute: React.FC = () => {
	const f = useCurrentFrame();
	const FL = {x: 470, y: 380, h: 520};
	const k = FL.h / FLASK.box[3];
	const neckX = FL.x + (1024 - FLASK.box[0]) * k, neckTop = FL.y + (FLASK_G.cropTop - FLASK.box[1]) * k;
	const pipO = vis(f, K5.pip - 10, K5.pip + 90, 12);
	const level = (fr: number) => kf(fr, [[K5.pip + 20, 1850], [K5.pip + 70, 1700], [K5.mark - 40, 1700], [K5.mark - 2, FLASK_G.ring]]);
	const tint = hexMix('#e7c27a', '#f3e6c4', prog(f, K5.mark - 40, 40));
	const inv = (fr: number) => {
		const t = fr - (K5.mark + 12);
		if (t < 0 || t > 100) return 0;
		return Math.sin((t / 50) * Math.PI) ** 2 * 180;
	};
	const cx = neckX, cy = FL.y + FL.h * 0.62;
	const VBx = 96, VBy = 470, VBh = 360;
	const vcx = VBx + picW(VINEGAR, VBh) / 2;
	const flowO = vis(f, K5.pip + 20, K5.pip + 70, 6);
	return (
		<Overlay>
			<TaskLine text="Dilute the sample" at={K5.instead} size={56} />
			<MistakeX x={RX} y={210} text="0.5 mol/L NaOH instead?" at={K5.stronger} cross={K5.instead} note="dilute the sample instead" size={32} />
			<DimG at={K5.instead + 20} to={0.4}><AChip x={RX + 440} y={214} text="corrosive" size={28} color={TERRA} hand={false} at={K5.corr} /></DimG>
			<PicH p={VINEGAR} x={VBx} y={VBy} h={VBh} />
			<Sx x={vcx} y={VBy + VBh + 40} text="vinegar" size={30} color={AMB} anchor="middle" weight={800} at={-1000} />
			<g transform={`rotate(${inv(f)} ${cx} ${cy})`}>
				<FlaskFill x={FL.x} y={FL.y} h={FL.h} level={level} tint={tint} stopper={prog(f, K5.mark + 4, 10)} />
			</g>
			<Sx x={neckX} y={FL.y + FL.h + 44} text="250.0 mL volumetric flask" size={28} color={INK} anchor="middle" weight={700} at={K5.flask} />
			{pipO > 0.01 ? <PipettePlate tipX={neckX} tipY={neckTop - 6} h={400} rot={PIPETTE_G.tilt} o={pipO} /> : null}
			{flowO > 0.01 ? <line x1={neckX} y1={neckTop} x2={neckX} y2={FL.y + FL.h * 0.9} stroke={AMB} strokeWidth={6} strokeLinecap="round" opacity={0.8 * flowO} /> : null}
			<Sx x={neckX + 90} y={neckTop - 230} text="25.00 mL vinegar" size={28} color={AMB} weight={800} at={K5.pip + 10} out={K5.pip + 86} />
			<DimG at={K5.mark} to={0.35}><Note x={RX} y={440} text="rinse the pipette with vinegar first (titration practical)" size={26} color={INK_SOFT} at={K5.pip + 20} /></DimG>
			<DimG at={K5.mult} to={0.4}><Note x={RX} y={500} text="inverted: the same everywhere" size={32} color={TEAL} at={K5.mark + 30} /></DimG>
			<DimG at={K5.mult} to={0.45}><SpreadLens cx={900} cy={560} r={150} at={K5.moles} spread={K5.spread - 6} title="same moles, bigger volume" /></DimG>
			<ScaleBar x1={neckX} x2={vcx} y={VBy - 20} lift={110} text="× 10" sub="dilution factor: 250.0 ÷ 25.00 = 10" at={K5.mult} size={44} />
			<DimG at={K5.now} to={0.35}><Sx x={RX} y={600} text="or a smaller pipette: also fine; dilution gives" size={24} color={INK_SOFT} weight={600} at={K5.mult + 30} /></DimG>
			<DimG at={K5.now} to={0.35}><Sx x={RX} y={632} text="many aliquots from one careful transfer" size={24} color={INK_SOFT} weight={600} at={K5.mult + 30} /></DimG>
			<BurCounter x={RX + 60} y={700} n={1} fill={fr => 0.34 * smooth(prog(fr, K5.sev - 10, 30))} at={K5.now} h={200} w={40} />
			<AChip x={RX + 150} y={760} text="expected titre ≈ 17 mL" size={36} color={AMB} hand={false} at={K5.sev} />
			{void K5.corr}{void GREYX}
		</Overlay>
	);
};
