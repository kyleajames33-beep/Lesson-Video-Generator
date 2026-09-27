// IonCrowdDiagram — how much of an acid actually ionises, counted out.
//
// Each panel is a beaker on a stone plinth holding acid molecules in
// proportion to concentration (100 molecules per `perMolar` mol L⁻¹). On the
// beat, the ionised fraction splits: the H⁺ lifts off with a glow and the A⁻
// stays behind. The fraction comes from the panel's numbers: strong = all;
// weak = [H⁺] ÷ c, where [H⁺] is 10^(−pH) for a measured pH or the exact
// root of Ka = x² ÷ (c − x). Readouts (pH, [H⁺], % ionised) and an optional
// comparison factor 10^ΔpH are computed, never typed.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {BLUE, Beaker, GlossDefs, PROTON, ease, fadeAt, sci} from './shared';

export type CrowdPanel = {
	title: string;
	c: number;
	strong?: boolean;
	Ka?: number;
	/** Measured pH (if given, [H⁺] = 10^−pH). */
	pH?: number;
	pHdp?: number;
	at: number;
	splitAt: number;
	showKa?: boolean;
};
export type IonCrowdProps = {
	panels: CrowdPanel[];
	perMolar?: number;
	/** Comparison line; {ratio} → 10^(pH₂ − pH₁), rounded. */
	compare?: {text: string; at: number};
	delay?: number;
};

const ID = 'c12m6crowd';
const W = 760;
const H = 530;

const hPlus = (p: CrowdPanel) => {
	if (p.strong) return p.c;
	if (p.pH !== undefined) return 10 ** -p.pH;
	const Ka = p.Ka ?? 1e-5;
	return (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * p.c)) / 2;
};

export const IonCrowdDiagram = ({panels, perMolar = 1000, compare, delay = 62}: IonCrowdProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const n = panels.length;
	const colW = W / n;
	const baseY = 322;
	const pHof = (p: CrowdPanel) => (p.pH !== undefined ? p.pH : -Math.log10(hPlus(p)));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Fraction of acid molecules ionised" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{ha: '#4a5563', a: BLUE, proton: PROTON}} />
			{panels.map((p, i) => {
				const cx = colW * (i + 0.5);
				const total = Math.max(1, Math.round(p.c * perMolar));
				const h = hPlus(p);
				const frac = Math.min(1, h / p.c);
				const nIon = p.strong ? total : Math.round(frac * total);
				const cols = total >= 50 ? 10 : Math.ceil(Math.sqrt(total * 2));
				const rows = Math.ceil(total / cols);
				const gap = total >= 50 ? 20 : 42;
				const r = total >= 50 ? 6 : 12;
				const bw = 230, bh = 230;
				const split = ease(frame, p.splitAt, p.splitAt + 26);
				const pH = pHof(p);
				// Spread the ionised ones through the crowd, not in one corner.
				const ionIdx = new Set(Array.from({length: nIon}, (_, k) => Math.floor(((k + 0.5) * total) / Math.max(1, nIon))));
				return (
					<g key={i} opacity={fadeAt(frame, p.at, 14)}>
						<text x={cx} y={34} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>{p.title}</text>
						{p.showKa && p.Ka && <text x={cx} y={60} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>Ka = {sci(p.Ka, 2, false)}</text>}
						<DioramaPlinth id={`${ID}${i}`} cx={cx} cy={baseY + 14} rx={150} />
						<Beaker cx={cx} baseY={baseY} w={bw} h={bh} level={0.9} liquid="rgba(150,190,225,0.22)">
							{Array.from({length: total}, (_, k) => {
								const col = k % cols, row = Math.floor(k / cols);
								const x = cx + (col - (cols - 1) / 2) * gap + idleBob(frame, k + i * 200, 1.2);
								const y = baseY - 22 - row * gap * 0.92 - (rows < 4 ? 60 : 0) + idleBob(frame, k + i * 200 + 7, 1.1);
								const ion = ionIdx.has(k);
								const s = ion ? split : 0;
								return (
									<g key={k}>
										<circle cx={x} cy={y} r={r} fill={`url(#${ID}-g-${s > 0.5 ? 'a' : 'ha'})`} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />
										{ion && !p.strong && s > 0 && <circle cx={x} cy={y} r={r * 2.4} fill="none" stroke={TOK.amber} strokeWidth={2.5} opacity={s * (0.7 + 0.3 * idlePulse(frame))} />}
										{s > 0 && <circle cx={x + r * 0.7 + s * r * 0.8} cy={y - r * 0.7 - s * r * 1.6} r={r * 1.5 * s} fill={TOK.amber} opacity={0.4 * s} />}
										<circle cx={x + r * 0.7 + s * r * 0.8} cy={y - r * 0.7 - s * r * 1.6} r={r * 0.55} fill={`url(#${ID}-g-proton)`} stroke="rgba(0,0,0,0.3)" strokeWidth={0.6} />
									</g>
								);
							})}
						</Beaker>
						<g opacity={fadeAt(frame, p.splitAt + 20)}>
							<text x={cx} y={baseY + 108} textAnchor="middle" fill={theme.accent} fontSize={26} fontWeight={800}>pH {pH.toFixed(p.pHdp ?? 1)}</text>
							<text x={cx} y={baseY + 136} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>[H⁺] = {h >= 0.01 ? h.toFixed(2) : h >= 0.001 ? h.toPrecision(2) : sci(h, 2, false)} mol L⁻¹</text>
							<text x={cx} y={baseY + 162} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{p.strong ? '100' : (frac * 100).toFixed(frac < 0.1 ? 1 : 0)}% ionised ({nIon} of {total} drawn)</text>
						</g>
					</g>
				);
			})}
			{compare && panels.length === 2 && (() => {
				const d = pHof(panels[1]) - pHof(panels[0]);
				const ratio = Math.round(10 ** Math.abs(d));
				return (
					<text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, compare.at) * (0.85 + 0.15 * idlePulse(frame))}>
						{compare.text.replace('{ratio}', String(ratio)).replace('{dpH}', Math.abs(d).toFixed(1))}
					</text>
				);
			})()}
		</svg>
	);
};
