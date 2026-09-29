// PressureFlowDiagram (bio11m2PressureFlow) — the translocation (pressure-flow)
// theory, step by step.
//
// A xylem vessel (left) and a phloem sieve tube with its companion cell stand
// side by side between a SOURCE cell at the top and a SINK cell at the bottom.
// Beats: (1) sucrose is actively loaded from the source through the companion
// cell (ATP) into the sieve tube; (2) water follows from the xylem by osmosis,
// and the pressure gauge at the top rises; (3) at the sink sucrose is unloaded
// and water leaves back to the xylem, so the pressure at the bottom falls;
// (4) sap flows in bulk down the pressure gradient. All labels from props.
// Hold: loading, water movement and bulk flow keep running.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, Lines, Notes, Title, W, clamp, fadeAt, mix, popAt, wrap, type Note} from './shared';

type Beats = {load: number; water: number; high: number; unload: number; waterOut: number; low: number; flow: number};
type LabelKey = 'source' | 'sink' | 'xylem' | 'phloem' | 'companion' | 'load' | 'water' | 'high' | 'unload' | 'waterOut' | 'low' | 'flow';
export type PressureFlowProps = {
	title?: string;
	at?: number;
	beats?: Partial<Beats>;
	labels?: Partial<Record<LabelKey, string>>;
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2pf';
const DEF: Record<LabelKey, string> = {
	source: 'SOURCE (leaf)', sink: 'SINK (root)', xylem: 'xylem', phloem: 'phloem', companion: 'companion cell',
	load: '1 sucrose loaded (ATP)', water: '2 water in by osmosis', high: 'high pressure', unload: '3 sucrose unloaded',
	waterOut: 'water leaves', low: 'low pressure', flow: '4 bulk flow',
};

export const PressureFlowDiagram = ({title, at = 0, beats, labels, notes = [], delay = 62}: PressureFlowProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b: Beats = {load: 60, water: 160, high: 220, unload: 300, waterOut: 360, low: 400, flow: 480, ...(beats ?? {})};
	const L = {...DEF, ...(labels ?? {})};
	const top = title ? 52 : 12;
	const footH = notes.length * 25;
	const y0 = top + 70;
	const y1 = H - 80 - footH;
	const xX = 150;
	const pX = 330;
	const pw = 64;
	const ccX = pX + pw / 2 + 36;
	const srcBox = {x: 540, y: top + 8, w: 196, h: 96};
	const snkBox = {x: 540, y: y1 - 70, w: 196, h: 96};
	const on = Math.min(1, popAt(frame, fps, at) * 1.3);

	const loadOn = fadeAt(frame, b.load, 14);
	const waterOn = fadeAt(frame, b.water, 14);
	const highOn = interpolate(frame, [b.high - 10, b.high + 30], [0, 1], clamp);
	const unloadOn = fadeAt(frame, b.unload, 14);
	const wOutOn = fadeAt(frame, b.waterOut, 14);
	const lowOn = interpolate(frame, [b.low - 10, b.low + 30], [0, 1], clamp);
	const flowOn = fadeAt(frame, b.flow, 18);

	const dots = (n: number, speed: number, fn: (t: number, k: number) => {x: number; y: number}, fill: string, o: number, r = 6) =>
		o > 0 && Array.from({length: n}, (_, k) => {
			const t = ((frame * speed + k / n) % 1);
			const p = fn(t, k);
			return <circle key={k} cx={p.x} cy={p.y} r={r} fill={`url(#${ID}-ball-${fill})`} opacity={o * Math.min(1, Math.sin(t * Math.PI) * 3)} />;
		});

	const topShade = mix('#fdf1dc', '#e8a94a', highOn * 0.8);
	const botShade = mix('#fdf1dc', '#fbe9cc', lowOn);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Pressure flow'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<defs>
				<linearGradient id={`${ID}-grad`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={topShade} />
					<stop offset="100%" stopColor={botShade} />
				</linearGradient>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={on}>
				<DioramaPlinth id={`${ID}p`} cx={250} cy={y1 + 14} rx={190} />
				{/* xylem */}
				<rect x={xX - 22} y={y0} width={44} height={y1 - y0} fill="#e6f1fa" stroke={COL.xylem} strokeWidth={5} />
				<text x={xX} y={y0 - 12} textAnchor="middle" fill="#2a6fa8" fontSize={18} fontWeight={800}>{L.xylem}</text>
				{/* phloem */}
				<rect x={pX - pw / 2} y={y0} width={pw} height={y1 - y0} fill={`url(#${ID}-grad)`} stroke="#b8894a" strokeWidth={3} />
				{[1, 2].map((k) => <line key={k} x1={pX - pw / 2} x2={pX + pw / 2} y1={y0 + ((y1 - y0) * k) / 3} y2={y0 + ((y1 - y0) * k) / 3} stroke="#b8894a" strokeWidth={4} strokeDasharray="6 5" />)}
				<text x={pX} y={y0 - 12} textAnchor="middle" fill="#b0621a" fontSize={18} fontWeight={800}>{L.phloem}</text>
				{/* companion cell at the source end */}
				<rect x={ccX - 22} y={y0 + 4} width={44} height={96} rx={10} fill="#f0dcc8" stroke="#a8784a" strokeWidth={2} />
				<ellipse cx={ccX} cy={y0 + 34} rx={11} ry={9} fill={`url(#${ID}-ball-nucleus)`} />
				{[0, 1].map((m) => <ellipse key={m} cx={ccX + (m ? 7 : -7)} cy={y0 + 62 + m * 16} rx={7} ry={3.5} fill={`url(#${ID}-ball-mito)`} />)}
				{/* source and sink cells */}
				{[{box: srcBox, text: L.source, col: '#b0621a'}, {box: snkBox, text: L.sink, col: theme.accent}].map(({box, text, col}, i) => (
					<g key={i}>
						<rect x={box.x} y={box.y} width={box.w} height={box.h} rx={18} fill={i === 0 ? '#e9f4dd' : '#f6ecdc'} stroke={i === 0 ? COL.leafDark : '#b8894a'} strokeWidth={2} />
						<text x={box.x + box.w / 2} y={box.y + 26} textAnchor="middle" fill={col} fontSize={18} fontWeight={800}>{text}</text>
					</g>
				))}
				{Array.from({length: 4}, (_, k) => <ellipse key={k} cx={srcBox.x + 40 + k * 40} cy={srcBox.y + 62} rx={12} ry={7} fill={`url(#${ID}-ball-chloro)`} />)}
				{Array.from({length: 4}, (_, k) => <circle key={k} cx={snkBox.x + 40 + k * 40} cy={snkBox.y + 62} r={10} fill="#efe6cf" stroke="#b8a070" strokeWidth={1.5} opacity={unloadOn} />)}
			</g>
			{/* 1 loading: source → companion → sieve tube top */}
			{dots(4, 0.012, (t) => (t < 0.5
				? {x: srcBox.x + 10 - t * 2 * (srcBox.x + 10 - ccX), y: srcBox.y + 60 + t * 2 * (y0 + 40 - srcBox.y - 60)}
				: {x: ccX - (t - 0.5) * 2 * (ccX - pX), y: y0 + 40}), 'sugar', loadOn)}
			<g opacity={loadOn}>
				<Lines x={srcBox.x + 100} y={srcBox.y + srcBox.h + 26} lines={wrap(L.load, 22)} size={18} color="#b0621a" />
				<Lines x={ccX + 30} y={y0 + 40} lines={wrap(L.companion, 10)} size={17} color={TOK.inkDim} anchor="start" />
			</g>
			{/* 2 water in from xylem */}
			{dots(4, 0.014, (t) => ({x: xX + 12 + t * (pX - xX - 30), y: y0 + 60 + Math.sin(t * 6) * 3}), 'water', waterOn, 5)}
			{waterOn > 0 && <Arrow x1={xX + 26} y1={y0 + 80} x2={pX - pw / 2 - 4} y2={y0 + 80} color={COL.water} width={3} head={10} opacity={waterOn} />}
			<g opacity={waterOn}><Lines x={(xX + pX) / 2 - 10} y={y0 + 106} lines={wrap(L.water, 14)} size={17} color="#2a6fa8" /></g>
			{/* high pressure gauge */}
			<g opacity={highOn}>
				<rect x={pX - 72} y={y0 + 146} width={144} height={34} rx={17} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5} />
				<text x={pX} y={y0 + 169} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{L.high}</text>
			</g>
			{/* 3 unloading at sink + water out */}
			{dots(4, 0.012, (t) => ({x: pX + t * (snkBox.x + 30 - pX), y: y1 - 40 + t * (snkBox.y + 60 - y1 + 40)}), 'sugar', unloadOn)}
			<g opacity={unloadOn}><Lines x={snkBox.x + 100} y={snkBox.y - 18} lines={wrap(L.unload, 24)} size={18} color="#b0621a" /></g>
			{dots(4, 0.014, (t) => ({x: pX - 20 - t * (pX - xX - 30), y: y1 - 60 + Math.sin(t * 6) * 3}), 'water', wOutOn, 5)}
			{wOutOn > 0 && <Arrow x1={pX - pw / 2 - 4} y1={y1 - 80} x2={xX + 26} y2={y1 - 80} color={COL.water} width={3} head={10} opacity={wOutOn} />}
			<g opacity={wOutOn}><Lines x={(xX + pX) / 2 - 10} y={y1 - 100} lines={wrap(L.waterOut, 14)} size={17} color="#2a6fa8" /></g>
			<g opacity={lowOn}>
				<rect x={pX - 72} y={y1 - 146} width={144} height={34} rx={17} fill="#ffffff" stroke={theme.accent} strokeWidth={2.5} />
				<text x={pX} y={y1 - 123} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>{L.low}</text>
			</g>
			{/* 4 bulk flow */}
			{dots(8, 0.006, (t, k) => ({x: pX + ((k % 3) - 1) * 14, y: y0 + 20 + t * (y1 - y0 - 40)}), 'sugar', flowOn, 5)}
			<g opacity={flowOn}>
				<Arrow x1={pX + pw / 2 + 58} y1={y0 + 150} x2={pX + pw / 2 + 58} y2={y1 - 110} color={TOK.amber} width={5} head={15} />
				<rect x={pX + pw / 2 + 72} y={(y0 + y1) / 2 - 20} width={126} height={40} rx={20} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2} opacity={0.7 + 0.3 * idlePulse(frame)} />
				<text x={pX + pw / 2 + 135} y={(y0 + y1) / 2 + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{L.flow}</text>
			</g>
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
