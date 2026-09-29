// TranspireDiagram (bio11m2Transpire) — how light, temperature, wind and
// humidity change the rate of transpiration.
//
// A cut-away of the underside of a leaf: moist air spaces among the spongy
// mesophyll cells, the lower epidermis with one stoma between two guard cells,
// and the outside air below with its still, humid boundary layer. Four
// sliders show the conditions; a dial on a stone plinth shows the rate.
// Each `state` sets the conditions (0..1) on its beat, and everything follows
// from them: light opens the stoma; heat makes vapour leave faster; wind strips
// the boundary layer; humidity fills the outside air with vapour. The rate is
// computed as stoma opening × vapour gradient × evaporation speed, so the
// dial always agrees with the picture. The slider that just changed is amber.
// All text from props. Hold: vapour keeps diffusing out at the current rate.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, Lines, Notes, Sun, Title, W, clamp, fadeAt, wrap, type Note} from './shared';

type Cond = {light: number; temp: number; wind: number; humidity: number};
export type TranspireProps = {
	title?: string;
	states: (Cond & {at: number; label?: string})[];
	sliderLabels?: [string, string, string, string];
	rateLabel?: string;
	tags?: {text: string; at: number; anchor: 'stoma' | 'airspace' | 'boundary' | 'outside'}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2tr';
const KEYS: (keyof Cond)[] = ['light', 'temp', 'wind', 'humidity'];

const rateOf = (c: Cond) => {
	const aperture = 0.08 + 0.92 * c.light;
	const outside = Math.min(1, c.humidity * 0.8 + (1 - c.wind) * 0.22);
	const gradient = 1 - outside;
	const evap = 0.55 + 0.9 * c.temp;
	return (aperture * gradient * evap) / 1.45;
};

export const TranspireDiagram = ({title, states, sliderLabels = ['Light', 'Temperature', 'Wind', 'Humidity'], rateLabel = 'rate of transpiration', tags = [], notes = [], delay = 62}: TranspireProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 46 : 6;

	// interpolate conditions through the states
	const condAt = (f: number): Cond => {
		let c: Cond = {light: states[0].light, temp: states[0].temp, wind: states[0].wind, humidity: states[0].humidity};
		for (let i = 1; i < states.length; i++) {
			const t = interpolate(f, [states[i].at, states[i].at + 24], [0, 1], clamp);
			if (t > 0) c = Object.fromEntries(KEYS.map((k) => [k, c[k] + (states[i][k] - c[k]) * t])) as Cond;
		}
		return c;
	};
	const c = condAt(frame);
	const rate = rateOf(c);
	let si = 0;
	states.forEach((s, i) => {
		if (frame >= s.at) si = i;
	});
	const changed = si > 0 ? KEYS.filter((k) => Math.abs(states[si][k] - states[si - 1][k]) > 0.05) : [];
	const label = states[si]?.label;

	const L = {x0: 24, x1: 474, y0: top + 44, epi: top + 196};
	const stX = 250;
	const aperture = 2 + 16 * (0.08 + 0.92 * c.light);
	const airBot = top + 330;
	const blH = 34 * (1 - c.wind);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Transpiration'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* inside the leaf */}
			<rect x={L.x0} y={L.y0} width={L.x1 - L.x0} height={L.epi - L.y0} rx={14} fill="#eef7e6" stroke={COL.leafDark} strokeWidth={2} />
			{Array.from({length: 12}, (_, k) => {
				const x = L.x0 + 36 + (k % 6) * 70 + (k > 5 ? 32 : 0);
				const y = L.y0 + 38 + (k > 5 ? 68 : 0);
				if (Math.abs(x - stX) < 44 && k > 5) return null;
				return <ellipse key={k} cx={x} cy={y} rx={30} ry={24} fill="#cfe7b4" stroke={COL.leafDark} strokeWidth={1.3} />;
			})}
			{/* saturated air-space vapour */}
			{Array.from({length: 22}, (_, k) => {
				const x = L.x0 + 20 + ((k * 53) % (L.x1 - L.x0 - 40));
				const y = L.y0 + 20 + ((k * 37) % (L.epi - L.y0 - 40)) + Math.sin(frame / 14 + k) * 3;
				return <circle key={k} cx={x} cy={y} r={3.5} fill={`url(#${ID}-ball-vapour)`} opacity={0.9} />;
			})}
			{/* lower epidermis with a stoma */}
			<rect x={L.x0} y={L.epi} width={L.x1 - L.x0} height={18} fill="#d8e9c4" stroke={COL.leafDark} strokeWidth={1.5} />
			<rect x={stX - aperture / 2 - 1} y={L.epi - 1} width={aperture + 2} height={20} fill="#ffffff" />
			{[-1, 1].map((s) => (
				<ellipse key={s} cx={stX + s * (aperture / 2 + 14)} cy={L.epi + 9} rx={15} ry={13} fill={`url(#${ID}-ball-leaf)`} stroke={COL.leafDark} strokeWidth={1.2} />
			))}
			{/* outside air: boundary layer + ambient vapour */}
			<rect x={L.x0} y={L.epi + 18} width={L.x1 - L.x0} height={blH} fill={COL.vapour} opacity={0.35} />
			{Array.from({length: 26}, (_, k) => {
				const show = k / 26 < c.humidity * 0.9 + 0.05;
				if (!show) return null;
				const drift = c.wind * frame * 1.2;
				const x = L.x0 + ((((k * 71) % (L.x1 - L.x0)) + drift) % (L.x1 - L.x0));
				const y = L.epi + 40 + ((k * 29) % (airBot - L.epi - 50)) + Math.sin(frame / 18 + k) * 3;
				return <circle key={k} cx={x} cy={y} r={3.5} fill={`url(#${ID}-ball-vapour)`} opacity={0.75} />;
			})}
			{c.wind > 0.05 && [0, 1, 2].map((k) => {
				const x = L.x0 + 20 + ((frame * 3 * c.wind + k * 150) % (L.x1 - L.x0 - 80));
				return <Arrow key={k} x1={x} y1={L.epi + 50 + k * 34} x2={x + 60} y2={L.epi + 50 + k * 34} color="#7a9ab0" width={3} head={10} opacity={c.wind} />;
			})}
			{/* vapour leaving through the stoma */}
			{Array.from({length: 10}, (_, k) => {
				const speed = 0.006 + 0.012 * c.temp;
				const t = ((frame * speed + k / 10) % 1);
				const visible = k / 10 < rate * 1.3;
				if (!visible) return null;
				return <circle key={k} cx={stX + Math.sin(k * 2.1) * t * 60} cy={L.epi + 8 + t * (airBot - L.epi - 30)} r={6} fill={`url(#${ID}-ball-water)`} opacity={Math.sin(t * Math.PI)} />;
			})}
			{/* sliders */}
			{KEYS.map((k, i) => {
				const x = L.x0 + 30 + i * 112;
				const y0 = top + 356;
				const hh = 90;
				const hot = changed.includes(k) ? fadeAt(frame, states[si].at, 10) : 0;
				const col = hot > 0 ? TOK.amber : theme.accent;
				return (
					<g key={k}>
						<rect x={x} y={y0} width={26} height={hh} rx={8} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={1.5} />
						<rect x={x + 4} y={y0 + hh - 4 - (hh - 8) * c[k]} width={18} height={(hh - 8) * c[k]} rx={5} fill={col} opacity={hot > 0 ? 0.75 + 0.25 * idlePulse(frame) : 1} />
						<text x={x + 13} y={y0 + hh + 24} textAnchor="middle" fill={hot > 0 ? TOK.amberInk : TOK.ink} fontSize={18} fontWeight={800}>{sliderLabels[i]}</text>
					</g>
				);
			})}
			{/* light + temperature cues */}
			<Sun x={560} y={top + 60} r={22} frame={frame} opacity={0.15 + 0.85 * c.light} />
			<g>
				<rect x={645} y={top + 30} width={14} height={62} rx={7} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2} />
				<rect x={649} y={top + 86 - 50 * c.temp} width={6} height={50 * c.temp + 4} fill="#d9534a" />
				<circle cx={652} cy={top + 98} r={11} fill="#d9534a" stroke={TOK.inkDim} strokeWidth={2} />
			</g>
			{/* rate dial */}
			<DioramaPlinth id={`${ID}d`} cx={620} cy={top + 350} rx={110} />
			<g transform={`translate(620, ${top + 300})`}>
				<path d="M -90 0 A 90 90 0 0 1 90 0" fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2} />
				<path d="M -76 0 A 76 76 0 0 1 76 0" fill="none" stroke={theme.accent} strokeWidth={10} opacity={0.2} />
				<text x={-62} y={-12} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>slow</text>
				<text x={62} y={-12} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>fast</text>
				<line x1={0} y1={0} x2={Math.cos(Math.PI - rate * Math.PI) * 72} y2={-Math.sin(Math.PI - rate * Math.PI) * 72} stroke={TOK.amber} strokeWidth={5} strokeLinecap="round" />
				<circle r={8} fill={TOK.amberInk} />
			</g>
			<Lines x={620} y={top + 158} lines={wrap(rateLabel, 18)} size={18} color={TOK.inkDim} />
			{label && (
				<g opacity={fadeAt(frame, states[si].at, 12)}>
					<Lines x={620} y={top + 430} lines={wrap(label, 18)} size={19} color={TOK.amberInk} />
				</g>
			)}
			{tags.map((t, i) => {
				const o = fadeAt(frame, t.at, 12);
				const pos = t.anchor === 'stoma' ? {x: stX + 70, y: L.epi + 30} : t.anchor === 'airspace' ? {x: 130, y: L.y0 + 22} : t.anchor === 'boundary' ? {x: 400, y: L.epi + 34} : {x: 400, y: airBot - 20};
				return <text key={i} x={pos.x} y={pos.y} textAnchor="middle" fill={t.anchor === 'stoma' ? COL.leafDark : '#2a6fa8'} fontSize={18} fontWeight={800} opacity={o}>{t.text}</text>;
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
