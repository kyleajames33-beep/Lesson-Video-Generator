// MixDiluteDiagram (kind: chem12m5MixDilute) — mixing dilutes every ion.
//
// Two small beakers on plinths (default 50 mL of AgNO₃ and 50 mL of NaCl,
// both 2.0 × 10⁻³ mol L⁻¹) tip into one beaker below. The same ions arrive,
// but the liquid is twice as tall, so each ion is spread through twice the
// volume: its concentration halves. A card on the right works it through on
// the narration's beats: c_new = c × V_original ÷ V_total for each ion, then
// Qsp from the diluted values (amber), then the undiluted Qsp struck out as
// "4 times too big". Every number is computed from the props.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Beaker, Card, bounce, clamp, ease, eramp, hash01, ramp, sci, textW} from './shared';

type Ion = {label: string; el: string; sign: '+' | '−'; ink?: string};
type Sol = {name: string; ion: Ion; counter: Ion; c: number; v: number};

export type MixDiluteProps = {
	delay?: number;
	a?: Sol;
	b?: Sol;
	/** Particles of each ion drawn per beaker. */
	perIon?: number;
	beats?: {pour?: number; halve?: number; formula?: number; ionA?: number; ionB?: number; qsp?: number; skip?: number; fifty?: number; four?: number};
};

const ID = 'c12m5mix';
const W = 760;
const H = 530;
const ERR = '#c0392b';

// Geometry
const SA = {x: 104, base: 196};
const SB = {x: 300, base: 196};
const BIG = {x: 202, base: 468};
const BW = 112;
const SH = 104; // small beaker height
const LIQ = 64; // 50 mL liquid height
const BH = 190; // big beaker height

export const MixDiluteDiagram = ({
	delay = 62,
	a = {name: 'AgNO₃(aq)', ion: {label: 'Ag⁺', el: 'Ag', sign: '+', ink: '#3a3f47'}, counter: {label: 'NO₃⁻', el: 'N', sign: '−'}, c: 2.0e-3, v: 50},
	b = {name: 'NaCl(aq)', ion: {label: 'Cl⁻', el: 'Cl', sign: '−'}, counter: {label: 'Na⁺', el: 'Na', sign: '+'}, c: 2.0e-3, v: 50},
	perIon = 3,
	beats = {},
}: MixDiluteProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const bt = {pour: 40, halve: 163, formula: 323, ionA: 475, ionB: 515, qsp: 555, skip: 620, fifty: 736, four: 895, ...beats};

	// ── Chemistry, computed ──
	const vT = a.v + b.v;
	const cA = (a.c * a.v) / vT;
	const cB = (b.c * b.v) / vT;
	const qsp = cA * cB;
	const qWrong = a.c * b.c;
	const ratio = qWrong / qsp;
	const ratioText = Number.isInteger(Math.round(ratio * 100) / 100) ? String(Math.round(ratio)) : ratio.toFixed(1);

	// ── Pour ──
	const pour = eramp(frame, bt.pour, 80);
	const tilt = interpolate(frame, [bt.pour - 10, bt.pour + 10, bt.pour + 80, bt.pour + 100], [0, 28, 28, 0], clamp);
	const smallLevel = (LIQ / SH) * (1 - pour);
	const bigLiq = (LIQ * (a.v + b.v)) / Math.max(a.v, b.v);
	const bigLevel = (bigLiq / BH) * pour;
	const emptied = ramp(frame, bt.pour + 90, 20);

	// ── Ions ──
	type P = {key: string; ion: Ion; src: 0 | 1; k: number; main: boolean};
	const ps: P[] = [];
	([a, b] as Sol[]).forEach((s, si) => {
		for (let k = 0; k < perIon; k++) {
			ps.push({key: `${si}m${k}`, ion: s.ion, src: si as 0 | 1, k, main: true});
			ps.push({key: `${si}c${k}`, ion: s.counter, src: si as 0 | 1, k: k + perIon, main: false});
		}
	});
	const R = 11;
	const swimIn = (cx: number, base: number, h: number, seed: number) => ({
		x: bounce(cx - BW / 2 + 18 + hash01(seed) * (BW - 36), (0.25 + hash01(seed + 3) * 0.25) * (hash01(seed + 5) > 0.5 ? 1 : -1), frame, cx - BW / 2 + 18, cx + BW / 2 - 18),
		y: bounce(base - h + 12 + hash01(seed + 7) * (h - 26), (0.18 + hash01(seed + 9) * 0.2) * (hash01(seed + 11) > 0.5 ? 1 : -1), frame, base - h + 12, base - 14),
	});
	const drawn = ps.map((p, i) => {
		const seed = i * 13 + 7;
		const S = p.src === 0 ? SA : SB;
		const from = swimIn(S.x, S.base, LIQ, seed);
		const to = swimIn(BIG.x, BIG.base, bigLiq, seed + 101);
		const t0 = bt.pour + 8 + (i % (perIon * 2)) * 6 + p.src * 3;
		const u = ease(interpolate(frame, [t0, t0 + 34], [0, 1], clamp));
		const x = from.x + (to.x - from.x) * u;
		const y = from.y + (to.y - from.y) * u - Math.sin(Math.PI * u) * 40;
		return {p, x, y, u};
	});

	// ── Card lines ──
	const CX0 = 414;
	const lineIn = (at: number) => ramp(frame, at, 14);
	const sub = (t: string) => <tspan fontSize={15} dy={6}>{t}</tspan>;
	const back = <tspan dy={-6} />;
	const ionLine = (ion: Ion, s: Sol, cNew: number, y: number, at: number) => (
		<g opacity={lineIn(at)}>
			<text x={CX0 + 14} y={y} fill={TOK.ink} fontSize={19} fontWeight={800}>
				[{ion.label}] = {sci(s.c)} × <tspan fill={theme.accent}>{s.v} ÷ {vT}</tspan>
			</text>
			<text x={CX0 + 58} y={y + 30} fill={TOK.ink} fontSize={19} fontWeight={800}>
				= {sci(cNew)} mol L⁻¹
			</text>
		</g>
	);
	const fiftyPulse = frame >= bt.fifty && frame < bt.four ? idlePulse(frame, 40) : 0;

	const wrongText = `(${sci(a.c)})(${sci(b.c)})`;
	const wrongIn = lineIn(bt.skip);
	const strike = eramp(frame, bt.skip + 40, 20);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Mixing ${a.v} mL of ${a.name} with ${b.v} mL of ${b.name}: each ion is diluted to ${vT} mL, so each concentration halves to ${sci(cA)} mol per litre and Qsp is ${sci(qsp)}; skipping the dilution gives ${sci(qWrong)}, ${ratioText} times too big`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={Array.from(new Set([a.ion.el, a.counter.el, b.ion.el, b.counter.el]))} />

			{/* Small beakers */}
			{([a, b] as Sol[]).map((s, si) => {
				const S = si === 0 ? SA : SB;
				const rot = (si === 0 ? 1 : -1) * tilt;
				const pivot = si === 0 ? S.x + BW / 2 : S.x - BW / 2;
				return (
					<g key={si} opacity={ramp(frame, 0) * (1 - 0.55 * emptied)}>
						<text x={S.x} y={40} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{s.name}</text>
						<text x={S.x} y={62} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{s.v} mL</text>
						<DioramaPlinth id={ID} cx={S.x} cy={S.base + 4} rx={78}>
							<g transform={`rotate(${rot} ${pivot} ${S.base - SH})`}>
								<Beaker cx={S.x} baseY={S.base} w={BW} h={SH} level={smallLevel} />
							</g>
						</DioramaPlinth>
						<text x={S.x} y={S.base + 58} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>
							{sci(s.c)} mol L⁻¹
						</text>
					</g>
				);
			})}

			{/* Pour streams */}
			{[0, 1].map((si) => {
				const S = si === 0 ? SA : SB;
				const lipX = si === 0 ? S.x + BW / 2 + 4 : S.x - BW / 2 - 4;
				const lipY = S.base - SH + 6;
				const op = interpolate(frame, [bt.pour + 6, bt.pour + 16, bt.pour + 70, bt.pour + 84], [0, 0.75, 0.75, 0], clamp);
				const endX = BIG.x + (si === 0 ? -18 : 18);
				return (
					<path key={si} d={`M ${lipX} ${lipY} Q ${lipX + (si === 0 ? 10 : -10)} ${lipY + 60} ${endX} ${BIG.base - BH + 30}`} stroke="rgba(120,190,235,0.7)" strokeWidth={9} fill="none" strokeLinecap="round" opacity={op} />
				);
			})}

			{/* Big beaker */}
			<g opacity={ramp(frame, 4)}>
				<DioramaPlinth id={ID} cx={BIG.x} cy={BIG.base + 4} rx={96}>
					<Beaker cx={BIG.x} baseY={BIG.base} w={BW} h={BH} level={Math.max(0.001, bigLevel)} />
				</DioramaPlinth>
				{/* volume marks */}
				<g opacity={ramp(frame, bt.pour + 70, 16)}>
					<line x1={BIG.x - BW / 2 - 14} y1={BIG.base - bigLiq} x2={BIG.x - BW / 2 - 2} y2={BIG.base - bigLiq} stroke={TOK.inkDim} strokeWidth={2} />
					<text x={BIG.x - BW / 2 - 20} y={BIG.base - bigLiq + 6} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800}>{vT} mL</text>
					<line x1={BIG.x - BW / 2 - 14} y1={BIG.base - LIQ} x2={BIG.x - BW / 2 - 2} y2={BIG.base - LIQ} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="3 3" />
					<text x={BIG.x - BW / 2 - 20} y={BIG.base - LIQ + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{a.v} mL</text>
				</g>
			</g>

			{/* Ions (drawn above the glass so the flights read) */}
			{drawn
				.slice()
				.sort((p, q) => p.y - q.y)
				.map(({p, x, y}, i) => (
					<Ball key={p.key} id={ID} el={p.ion.el} x={x + idleBob(frame, i, 0.8)} y={y} r={p.main ? R : R - 2} label={p.ion.sign} labelSize={p.main ? 15 : 13} labelColor={p.ion.ink ?? '#ffffff'} opacity={ramp(frame, 2 + i, 10) * (p.main ? 1 : 0.8)} />
				))}

			{/* Halving note by the big beaker */}
			<g opacity={ramp(frame, bt.halve, 16)}>
				<text x={BIG.x + BW / 2 + 18} y={BIG.base - 118} fill={TOK.ink} fontSize={17} fontWeight={800}>same ions,</text>
				<text x={BIG.x + BW / 2 + 18} y={BIG.base - 96} fill={TOK.ink} fontSize={17} fontWeight={800}>2 × volume:</text>
				<text x={BIG.x + BW / 2 + 18} y={BIG.base - 66} fill={theme.accent} fontSize={17} fontWeight={800} opacity={1 - 0.4 * fiftyPulse}>c halves</text>
			</g>

			{/* Working card */}
			<Card x={CX0} y={16} w={W - CX0 - 8} h={H - 26} opacity={ramp(frame, bt.formula - 20, 16)}>
				<text x={CX0 + 14} y={58} fill={TOK.ink} fontSize={21} fontWeight={800} opacity={lineIn(bt.formula)}>
					c{sub('new')}{back} = c × V{sub('original')}{back} ÷ V{sub('total')}
				</text>
				<line x1={CX0 + 14} y1={80} x2={W - 22} y2={80} stroke={TOK.rule} strokeWidth={2} opacity={lineIn(bt.formula)} />
				{ionLine(a.ion, a, cA, 118, bt.ionA)}
				{ionLine(b.ion, b, cB, 196, bt.ionB)}
				<g opacity={lineIn(bt.qsp)}>
					<text x={CX0 + 14} y={278} fill={TOK.ink} fontSize={19} fontWeight={800}>Qsp = [{a.ion.label}][{b.ion.label}]</text>
					<text x={CX0 + 58} y={316} fill={TOK.amberInk} fontSize={26} fontWeight={800}>= {sci(qsp)}</text>
					<rect x={CX0 + 48} y={290} width={textW(`= ${sci(qsp)}`, 26) + 22} height={36} rx={10} fill="none" stroke={TOK.amber} strokeWidth={2.5 + (frame > bt.qsp + 20 ? idlePulse(frame) * 1.2 : 0)} />
				</g>
				<g opacity={wrongIn}>
					<line x1={CX0 + 14} y1={350} x2={W - 22} y2={350} stroke={TOK.rule} strokeWidth={2} />
					<text x={CX0 + 14} y={384} fill={ERR} fontSize={18} fontWeight={800}>Skip the dilution:</text>
					<text x={CX0 + 14} y={416} fill={TOK.inkDim} fontSize={19} fontWeight={800}>Qsp = {wrongText}</text>
					<text x={CX0 + 58} y={450} fill={TOK.inkDim} fontSize={19} fontWeight={800}>= {sci(qWrong)}</text>
					<line x1={CX0 + 54} y1={444} x2={CX0 + 54 + (textW(`= ${sci(qWrong)}`, 19) + 10) * strike} y2={444} stroke={ERR} strokeWidth={3} strokeLinecap="round" />
				</g>
				<g opacity={ramp(frame, bt.four, 14)}>
					<text x={CX0 + 14} y={492} fill={ERR} fontSize={20} fontWeight={800}>{ratioText} times too big</text>
				</g>
			</Card>
		</svg>
	);
};
