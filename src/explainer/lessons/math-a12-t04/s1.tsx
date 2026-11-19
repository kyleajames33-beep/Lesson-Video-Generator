// Scenes 1 to 5: t03's phone frame (the files crushed on an ordinary ruler), the storage ladder and the rescale to
// 2 TB, the morph to a log ruler (equal steps, equal factors; kB, MB, GB, TB three steps apart), two data strips
// (stars spread out, heights squeeze), and the decibel stage (meter, log intensity axis over the dB scale, the step
// span with its ratio readout, the factory's 85 and 95 dB).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {HandTag, LiveReadoutBoard, PlateImg, SceneHeading, kf, smooth} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AnswerBox, Chip, DB5, DbStage, GREY, INK, Meter, MorphStrip, NUM, Nc, PhoneScreen, RATIO, RUL, RatioCard, Row, STAR, STEP, StoreStage, T03FinalFrame, p10} from './parts';

const KRI = NUM.ink;
/** A full-frame wrapper that scales its child about (cx, cy): a short pulse for chips. */
const Pulse: React.FC<{cx: number; cy: number; k: number; children: React.ReactNode}> = ({cx, cy, k, children}) => (
	<div style={{position: 'absolute', inset: 0, transform: `scale(${1 + 0.07 * k})`, transformOrigin: `${cx}px ${cy}px`}}>{children}</div>
);
const bump = (f: number, at: number) => prog(f, at, 8) * (1 - prog(f, at + 14, 14));

// ---------- 1. hook ----------
const FILES = [
	{size: '≈ 10³ bytes', frac: '≈ 0.0000004%'},
	{size: '≈ 3 × 10⁶ bytes', frac: '≈ 0.001%'},
	{size: '≈ 4 × 10⁹ bytes', frac: '≈ 1.6%'},
	{size: '2.56 × 10¹¹ bytes', frac: '100%'},
];
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	if (fr < 1) return <T03FinalFrame />;
	const cur = fr < k.photo ? 0 : fr < k.film ? 1 : fr < k.only ? 2 : 3;
	const row = (a: number, b: number) => prog(fr, a, 8) * (1 - prog(fr, b, 10));
	const sweep = smooth(prog(fr, 101, 48));
	return (
		<>
			<SceneHeading text="Logarithmic scales: when and why" at={6} size={44} />
			<Chip x={96} y={96} at={-300} out={2} size={34} color="#8a5a12">Next: logarithmic scales</Chip>
			<PhoneScreen rows={[row(k.text, k.photo), row(k.photo, k.film), row(k.film, k.but)]} />
			{sweep > 0.01 && fr < k.text + 20 ? <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.text, 16)}}><rect x={RUL.x} y={RUL.y - 9} width={RUL.w * sweep} height={18} rx={9} fill={NUM.soft} stroke={NUM.stroke} strokeWidth={3} /></svg> : null}
			<StoreStage zoom={1} zoomGrow={smooth(prog(fr, k.zero, 16))} pts={[{pulse: bump(fr, k.text + 8) + bump(fr, k.but + 30)}, {pulse: bump(fr, k.photo) + bump(fr, k.but + 50)}, {pulse: bump(fr, k.film) + bump(fr, k.left)}, {pulse: bump(fr, k.only)}]} />
			<HandTag x={RUL.x - 30} y={RUL.y + 80} text="can't tell them apart" at={-300} out={k.zero} size={38} color={KRI} />
			<HandTag x={RUL.x - 30} y={RUL.y + 84} text="crushed" at={k.zero + 6} size={42} color={KRI} />
			<LiveReadoutBoard x={430} y={170} width={650} at={k.text} inline rows={[
				{label: 'size', value: 0, text: FILES[cur].size},
				{label: 'fraction of ruler', value: 0, text: FILES[cur].frac, role: 'k'},
			]} />
			<Pulse cx={1300} cy={325} k={bump(fr, k.place)}><Chip x={1100} y={290} at={-300} size={48} color={KRI}>one ruler for all of them?</Chip></Pulse>
			<Chip x={1100} y={390} at={k.when + 10} size={36} color={GREY}>when does an ordinary axis fail?</Chip>
		</>
	);
};

// ---------- 2. orders of magnitude ----------
const LADDER = ['1 kB = 10³ bytes', '1 MB = 10⁶ bytes', '1 GB = 10⁹ bytes', '1 TB = 10¹² bytes'];
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const at = [k.kb, k.mb, k.gb, k.tb];
	const ext = prog(fr, k.biggest, 80);
	return (
		<>
			<SceneHeading text="Orders of magnitude" at={4} size={44} />
			<PhoneScreen />
			<StoreStage ext={ext} backup={prog(fr, k.biggest, 14)} zoom={1} zoomGrow={1} pts={[{pulse: bump(fr, k.zero)}, {pulse: bump(fr, k.zero + 4)}, {pulse: bump(fr, k.zero + 8)}, {}, {pulse: bump(fr, k.biggest + 70)}]} />
			<HandTag x={RUL.x - 30} y={RUL.y + 84} text="crushed" at={-300} size={42} color={KRI} />
			<HandTag x={RUL.x + 150} y={RUL.y + 84} text="still crushed" at={k.zero} size={38} color={KRI} />
			<Chip x={1100} y={290} at={-300} out={2} size={48} color={KRI}>one ruler for all of them?</Chip>
			{LADDER.map((t, i) => <Row key={t} x={1260} y={160 + i * 70} at={at[i]} size={44} small={44}>{t}</Row>)}
			{[0, 1, 2].map(i => <div key={i} style={{position: 'absolute', left: 1690, top: 194 + i * 70, opacity: prog(fr, at[i + 1] + 6, 10), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: RATIO.ink}}>↓ × 1000</div>)}
			<HandTag x={1260} y={480} text="× 1000 each" at={k.each} size={40} color={RATIO.ink} />
			<Chip x={430} y={170} at={k.magnitude} size={34} color={INK}>order of magnitude = one factor of 10</Chip>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: prog(fr, k.eight, 12), overflow: 'visible'}}>
				<path d="M1240,170 H1222 V432 H1240" fill="none" stroke={STEP.stroke} strokeWidth={6} strokeLinecap="round" />
			</svg>
			<div style={{position: 'absolute', left: 560, top: 262, width: 640, textAlign: 'right', opacity: prog(fr, k.eight, 12)}}>
				<div style={{fontFamily: FONT, fontWeight: 800, fontSize: 38, color: STEP.ink}}>about 8.4 orders of magnitude</div>
				<div style={{fontFamily: FONT, fontWeight: 700, fontSize: 32, color: STEP.ink}}>{p10(3)} to 2.56 × {p10(11)} bytes</div>
			</div>
			<Chip x={1100} y={720} at={k.biggest + 6} out={k.zero - 20} size={34} color={INK}>ruler now ends at 2 TB</Chip>
		</>
	);
};
const FONT = FONT_DISPLAY;

// ---------- 3. the log axis ----------
const SIZES = ['10³ B', '3 × 10⁶ B', '4 × 10⁹ B', '2.56 × 10¹¹ B', '2 × 10¹² B'];
const LOGS = [3, Math.log10(3e6), Math.log10(4e9), Math.log10(2.56e11), Math.log10(2e12)];
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const p = prog(fr, 26, 80);
	const cur = fr < k.ten6 ? 0 : fr < k.soon ? 1 : fr < k.now ? 2 : fr < k.every ? 3 : Math.min(4, Math.floor((fr - k.every) / 8));
	const glow = (i: number) => (fr >= k.every ? prog(fr, k.every + i * 8, 6) * (1 - prog(fr, k.every + i * 8 + 16, 10)) : i === cur && fr >= k.ten3 ? 0.8 : 0);
	return (
		<>
			<SceneHeading text="The log ruler: equal steps, equal factors" at={4} size={44} />
			<PhoneScreen />
			<StoreStage ext={1} p={p} backup={1} zoom={1 - prog(fr, 20, 20)} logRow={prog(fr, k.ten3 - 6, 12)} title={fr >= k.scale ? 1 : 0}
				hopsFrom={k.times} hopsOut={k.kilo - 30} kmgt={prog(fr, k.kilo, 12)} steps={prog(fr, k.three, 12)}
				pts={[0, 1, 2, 3, 4].map(i => ({glow: glow(i)}))} />
			<HandTag x={RUL.x - 30} y={RUL.y + 84} text="crushed" at={-300} out={20} size={42} color={KRI} />
			<LiveReadoutBoard x={430} y={170} width={650} at={k.ten3 - 8} inline rows={[
				{label: 'size', value: 0, text: SIZES[cur]},
				{label: 'log₁₀ size', value: LOGS[cur], digits: 2, role: 'b'},
			]} />
			<Row x={1120} y={168} at={k.because} size={52} small={52}>log₁₀(10x) = 1 + log₁₀ x</Row>
			<Chip x={1120} y={258} at={k.value} size={34} color={GREY}>position = log₁₀(size)</Chip>
			<HandTag x={1120} y={372} text="equal steps, equal factors" at={k.equal} size={40} color={RATIO.ink} />
			<HandTag x={430} y={400} text="spread out" at={k.every + 8} size={42} color={INK} />
		</>
	);
};

// ---------- 4. when is a log scale suitable? ----------
const STARS = Array.from({length: 12}, (_, i) => 3e-13 * (1.4e-8 / 3e-13) ** (i / 11));
const HEIGHTS = [152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 183, 187];
const SA = {x: 380, y: 360, w: 1420};
const SB = {x: 380, y: 650, w: 1420};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const pA = prog(fr, k.thousand + 4, 50);
	const pB = prog(fr, k.adds, 46) * (1 - prog(fr, k.heights + 6, 46));
	return (
		<>
			<SceneHeading text="When does a log scale suit the data?" at={4} size={44} />
			<PlateImg plate={STAR} x={120} y={230} w={170} />
			<MorphStrip x={SA.x} y={SA.y} w={SA.w} lin={[0, 1.5e-8]} dec={[-13, -7]} p={pA} values={STARS} title="A: star brightness (W/m²)"
				linTicks={[{v: 0, label: '0'}, {v: 0.5e-8, label: `0.5 × ${p10(-8)}`}, {v: 1e-8, label: `1 × ${p10(-8)}`}, {v: 1.5e-8, label: `1.5 × ${p10(-8)}`}]} />
			<MorphStrip x={SB.x} y={SB.y} w={SB.w} lin={[140, 200]} dec={[0, 3]} p={pB} values={HEIGHTS} title="B: heights in a class (cm)" decLabel={e => String(10 ** e)}
				linTicks={[140, 150, 160, 170, 180, 190, 200].map(v => ({v, label: String(v)}))} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<g>
					<rect x={160} y={SB.y - 200} width={70} height={250} rx={8} fill="#f3e6c4" stroke={INK} strokeWidth={4} />
					{Array.from({length: 11}, (_, i) => <line key={i} x1={160} x2={i % 5 === 0 ? 205 : 188} y1={SB.y - 180 + i * 21} y2={SB.y - 180 + i * 21} stroke={INK} strokeWidth={3} />)}
					<text x={195} y={SB.y + 92} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>height chart</text>
				</g>
			</svg>
			<Chip x={1120} y={190} at={k.thousand} size={32} color={RATIO.ink}>ratio ≈ 4.7 × 10⁴: 4.7 orders of magnitude</Chip>
			<HandTag x={1560} y={455} text="spread out" at={k.spread} size={42} color={INK} />
			<Chip x={1100} y={480} at={k.three} size={32} color={RATIO.ink}>ratio 187 ÷ 152 ≈ 1.23</Chip>
			<HandTag x={1480} y={585} text="squeezed" at={k.adds + 40} out={k.heights + 10} size={42} color={INK} />
			<HandTag x={1000} y={738} text="compare heights by differences" at={k.heights + 4} out={k.use - 4} size={38} color={GREY} />
			<AnswerBox x={96} y={760} at={k.use} size={38}>{'Use a log scale when the values span several powers of 10\nand comparing by factors makes sense.'}</AnswerBox>
			<Chip x={96} y={890} at={k.use + 60} size={30} color={GREY}>rule of thumb: more than about 2 to 3 orders of magnitude</Chip>
		</>
	);
};

// ---------- 5. decibels ----------
const ratioTxt = (r: number) => (r >= 1000 ? Math.round(r).toLocaleString('en-AU').replace(/,/g, ' ') : r >= 9.995 ? r.toFixed(0) : r.toFixed(2));
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const base = kf(fr, [[0, 40], [k.factory, 40], [k.factory + 24, 95], [k.eighty, 95], [k.eighty + 20, 85]]);
	const step = kf(fr, [[0, 0], [k.decibels, 0], [k.decibels + 20, 10], [k.factory, 10], [k.factory + 24, 0], [k.eighty, 0], [k.eighty + 20, 10], [k.rise, 10], [k.rise + 20, 3]]);
	const rise = fr >= k.rise + 20;
	const hopsFrom = fr < k.factory ? k.decibels + 14 : k.ten;
	const hopsO = fr < k.factory ? 1 - prog(fr, k.factory - 6, 8) : 1;
	const reading = Math.round(base + step);
	return (
		<>
			<SceneHeading text="Decibels: a log scale for sound" at={4} size={44} />
			<Meter x={80} y={210} w={500} value={String(reading)} />
			<div style={{position: 'absolute', left: 120, top: 600, fontFamily: FONT, fontWeight: 700, fontSize: 30, color: GREY}}>meter reading (dB)</div>
			<DbStage g={DB5} base={base} step={step} hopsFrom={hopsFrom} hopsO={hopsO}
				marks={[{L: 85, o: prog(fr, k.eighty, 10), label: 'limit', anchor: 'end'}, {L: 95, o: prog(fr, k.ninety, 10), label: 'factory', anchor: 'start'}]}
				bracket={{a: 85, b: 95, o: prog(fr, k.times, 12), label: '+10 dB = × 10 intensity'}} />
			<Row x={720} y={620} at={k.sound} size={52} small={52}>L = <Nc>10</Nc> log₁₀(I ÷ I₀)</Row>
			<Row x={720} y={688} at={k.nought} size={34} small={34}>I₀ = 10⁻¹² W/m²</Row>
			<Row x={720} y={734} at={k.nought + 20} size={30} small={30} color={GREY}>(conventional reference)</Row>
			<Row x={720} y={780} at={k.intensity} size={30} small={30} color={GREY}>I: sound power arriving on each m²</Row>
			<RatioCard x={1340} y={590} at={k.decibels + 14} out={k.factory} text={`× ${ratioTxt(10 ** (step / 10))}`} sub="+10 dB → 10^(10 ÷ 10)" />
			<RatioCard x={1340} y={590} at={k.ten} out={k.rise} text="× 10" sub="+10 dB → 10^(10 ÷ 10)" />
			<RatioCard x={1340} y={590} at={k.rise + 16} text="× 10^0.3 ≈ 2" sub="+3 dB → 10^(3 ÷ 10) ≈ 1.995" />
			<HandTag x={1340} y={760} text="+10 dB = × 10" at={k.decibels + 24} out={k.factory} size={40} color={RATIO.ink} />
			<Chip x={96} y={660} at={k.reading} size={32} color={GREY}>{'95 − 85 = 10\n10 ÷ 85 ≈ 12% higher reading'}</Chip>
			<CrossChip x={96} y={780} at={k.isnt} crossAt={k.times}>12% more intense?</CrossChip>
			{rise ? <HandTag x={1340} y={760} text="+3 dB ≈ doubles" at={k.rise + 30} size={40} color={RATIO.ink} /> : null}
		</>
	);
};
/** A chip crossed in red at `crossAt` (a claim that is false). */
export const CrossChip: React.FC<{x: number; y: number; at: number; crossAt: number; size?: number; children: React.ReactNode}> = ({x, y, at, crossAt, size = 34, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const s = prog(f, crossAt, 12);
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: '#fffdf8', border: `4px solid ${s > 0.5 ? '#b8322a' : GREY}`, borderRadius: 18, padding: '4px 22px 6px', fontFamily: FONT, fontWeight: 800, fontSize: size, color: s > 0.5 ? '#6b6358' : INK, whiteSpace: 'pre'}}>
		<span style={{position: 'relative', display: 'inline-block'}}>{children}
			<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}><path d="M0,64 Q50,50 100,38" stroke="#b8322a" strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s} /></svg>
		</span>
	</div>;
};
