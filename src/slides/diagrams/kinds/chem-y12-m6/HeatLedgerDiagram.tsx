// HeatLedgerDiagram — where the heat of neutralisation goes, as an energy
// waterfall on a stone ledge.
//
// Blocks hang from a 0 kJ line: the water-forming step drops the full
// release (−57), an ionisation cost climbs back up, and the net block shows
// what the thermometer actually sees. Values come from props (the lesson's
// own figures) and bar heights are drawn to scale; with `numbers: false` the
// cost is drawn but not labelled with a figure (when the lesson gives none).
//
// `markers` mode is a vertical ΔH scale instead: 0 at the top, the −57
// maximum as a floor, and pins for values to compare (less exothermic above
// the floor; anything past it flagged as a measurement error).

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {BLUE, ease, fadeAt, shade} from './shared';

export type LedgerStep = {label: string; sub?: string; kind: 'release' | 'cost' | 'net'; value: number; valueText?: string; at: number};
export type LedgerMarker = {value: number; label: string; at: number; tone?: 'accent' | 'blue' | 'amber'};
export type HeatLedgerProps = {
	steps?: LedgerStep[];
	markers?: LedgerMarker[];
	/** Floor line (the maximum release), e.g. 57. */
	floor?: {value: number; label: string; at: number};
	formula?: {text: string; at: number};
	numbers?: boolean;
	scaleMax?: number;
	delay?: number;
};

const ID = 'c12m6heat';
const W = 760;
const H = 530;

export const HeatLedgerDiagram = ({steps = [], markers, floor, formula, numbers = true, scaleMax = 60, delay = 62}: HeatLedgerProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const Y0 = 96, Y1 = 430;
	const ky = (kj: number) => Y0 + (kj / scaleMax) * (Y1 - Y0); // kj as a positive release depth

	const toneColor = (t?: string) => (t === 'blue' ? BLUE : t === 'amber' ? TOK.amber : theme.accent);

	if (markers) {
		const x = 250;
		const lo = 40, hi = 62;
		const ky = (kj: number) => Y0 + ((kj - lo) / (hi - lo)) * (Y1 - Y0);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Enthalpy of neutralisation scale with −57 kJ/mol as the maximum" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<g opacity={fadeAt(frame, 0, 14)}>
					<rect x={x - 22} y={Y0 - 10} width={44} height={Y1 - Y0 + 60} rx={12} fill="#d3cfc7" stroke="#8f8b83" strokeWidth={2} />
					<rect x={x - 14} y={Y0} width={28} height={Y1 - Y0 + 40} rx={8} fill="#ffffff" opacity={0.8} />
					{[40, 45, 50, 55, 60].map((v) => (
						<g key={v}>
							<line x1={x - 22} y1={ky(v)} x2={x - 34} y2={ky(v)} stroke={TOK.inkMute} strokeWidth={2} />
							<text x={x - 42} y={ky(v) + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={700}>−{v}</text>
						</g>
					))}
					<text x={x - 96} y={(Y0 + Y1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} transform={`rotate(-90 ${x - 96} ${(Y0 + Y1) / 2})`}>ΔHn (kJ mol⁻¹)</text>
					<text x={x} y={Y0 - 26} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>less heat released ↑</text>
					<text x={x} y={Y1 + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>↓ more heat released</text>
				</g>
				{floor && (
					<g opacity={fadeAt(frame, floor.at)}>
						<rect x={x - 22} y={ky(floor.value)} width={470} height={ky(hi) - ky(floor.value) + 30} fill={TOK.amber} opacity={0.08} />
						<line x1={x - 30} y1={ky(floor.value)} x2={x + 450} y2={ky(floor.value)} stroke={theme.accent} strokeWidth={3.5} />
						<text x={x + 450} y={ky(hi) + 22} textAnchor="end" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{floor.label}</text>
					</g>
				)}
				{markers.map((m, i) => {
					const t = ease(frame, m.at, m.at + 18);
					if (t <= 0) return null;
					const c = toneColor(m.tone);
					const y = ky(m.value);
					return (
						<g key={i} opacity={t}>
							<circle cx={x} cy={y} r={10 + (m.tone === 'amber' ? idlePulse(frame) * 2 : 0)} fill="#ffffff" stroke={c} strokeWidth={4} />
							<line x1={x + 12} y1={y} x2={x + 40 * t} y2={y} stroke={c} strokeWidth={3} />
							<text x={x + 48} y={floor && Math.abs(m.value - floor.value) < 0.5 ? y - 9 : y + 7} fill={m.tone === 'amber' ? TOK.amberInk : c} fontSize={19} fontWeight={800}>−{m.value}  {m.label}</text>
						</g>
					);
				})}
			</svg>
		);
	}

	// Waterfall
	const n = steps.length;
	const bw = 128;
	const gap = (W - 80 - n * bw) / Math.max(1, n - 1);
	let level = 0; // current depth (positive = released)
	const blocks = steps.map((s) => {
		let top: number, bottom: number;
		if (s.kind === 'release') { top = level; bottom = level + s.value; level = bottom; }
		else if (s.kind === 'cost') { bottom = level; top = level - s.value; level = top; }
		else { top = 0; bottom = s.value; }
		return {s, top, bottom};
	});
	const colorOf = (k: LedgerStep['kind']) => (k === 'release' ? theme.accent : k === 'cost' ? TOK.amber : BLUE);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Energy ledger for neutralisation" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<g opacity={fadeAt(frame, 0, 14)}>
				<rect x={24} y={Y0 - 16} width={W - 48} height={14} rx={6} fill="#bdb8ae" />
				<rect x={24} y={Y0 - 6} width={W - 48} height={7} rx={3} fill="#8f8b83" />
				<text x={30} y={Y0 - 26} fill={TOK.inkDim} fontSize={16} fontWeight={800}>0 kJ</text>
				<line x1={30} y1={ky(57)} x2={W - 30} y2={ky(57)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="6 6" opacity={numbers ? 0.8 : 0.8} />
			</g>
			{blocks.map(({s, top, bottom}, i) => {
				const x = 40 + i * (bw + gap);
				const t = ease(frame, s.at, s.at + 26);
				if (t <= 0) return null;
				const c = colorOf(s.kind);
				const yA = ky(top), yB = ky(bottom);
				// Release/net blocks grow downward; cost blocks grow upward from the bottom.
				const y = s.kind === 'cost' ? yB - (yB - yA) * t : yA;
				const h = (yB - yA) * t;
				const pulse = s.kind === 'cost' ? idlePulse(frame) : 0;
				const valueText = s.valueText ?? (s.kind === 'cost' ? `+${s.value}` : `−${s.value}`);
				const labelBelow = s.kind !== 'cost';
				return (
					<g key={i}>
						{i > 0 && (
							<line x1={x - gap} y1={ky(blocks[i - 1].s.kind === 'cost' ? blocks[i - 1].top : blocks[i - 1].bottom)} x2={x} y2={ky(blocks[i - 1].s.kind === 'cost' ? blocks[i - 1].top : blocks[i - 1].bottom)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 4" opacity={t} />
						)}
						<rect x={x} y={y} width={bw} height={Math.max(0, h)} rx={8} fill={c} opacity={0.88} stroke={shade(c.startsWith('#') ? c : '#888888', -0.25)} strokeWidth={s.kind === 'cost' ? 2 + pulse * 1.5 : 1.5} />
						<rect x={x + 8} y={y + 6} width={10} height={Math.max(0, h - 12)} rx={5} fill="#ffffff" opacity={0.18 + 0.2 * idlePulse(frame + i * 20, 70)} />
						<text x={x + bw / 2} y={(labelBelow ? yB + 26 : yA - 44)} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, s.at + 18)}>{s.label}</text>
						{s.sub && <text x={x + bw / 2} y={(labelBelow ? yB + 48 : yA - 22)} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, s.at + 18)}>{s.sub}</text>}
						{(numbers || s.kind === 'release' || s.valueText) && (
							h >= 36 ? (
								<text x={x + bw / 2} y={y + h / 2 + 8} textAnchor="middle" fill="#ffffff" fontSize={22} fontWeight={800} opacity={fadeAt(frame, s.at + 20)}>{valueText}</text>
							) : (
								<text x={x + bw + 8} y={y + h / 2 + 7} fill={s.kind === 'cost' ? TOK.amberInk : c} fontSize={21} fontWeight={800} opacity={fadeAt(frame, s.at + 20)}>{valueText}</text>
							)
						)}
					</g>
				);
			})}
			{formula && (
				<text x={W / 2} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, formula.at)}>{formula.text}</text>
			)}
		</svg>
	);
};
