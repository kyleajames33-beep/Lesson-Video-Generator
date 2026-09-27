// NetIonicDiagram (kind: chem12m5NetIonic) — molecular → full ionic → net
// ionic, each stage cleaner than the last.
//
// Row 1, the molecular equation. Row 2, the full ionic equation: every (aq)
// compound of row 1 splits, its ions flying down into place, while the solid
// precipitate drops down whole (it is never split). Spectator ions (the same
// on both sides) are struck out on both sides and tagged. Row 3, the net
// ionic equation (amber) assembles from what is left. The precipitate carries
// a yellow highlight in every row (PbI₂ is a bright yellow solid), and a small
// beaker shows it on the floor with the spectators still swimming.
//
// Tokens and their sources are props, so the kind serves any precipitation.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Beaker, Pill, bounce, clamp, ease, hash01, ramp, textW} from './shared';

/** A token: text; `from` = index of the row-above token it comes from; `spect` = spectator; `solid` = the precipitate. */
export type NiTok = {t: string; from?: number; spect?: boolean; solid?: boolean; op?: boolean};

export type NetIonicProps = {
	delay?: number;
	molecular?: NiTok[];
	/** Full ionic, as one or two lines. `from` indexes the molecular tokens. */
	ionic?: NiTok[][];
	/** Net ionic. `from` indexes the flattened full-ionic tokens. */
	net?: NiTok[];
	precipitateColor?: string;
	spectators?: string;
	/** Ions for the beaker: spectators [cation, anion] as elements. */
	beaker?: {spectators: {el: string; sign: '+' | '−'; label: string}[]; solid: string};
	beats?: {molecular?: number; ionicLabel?: number; split?: number; netLabel?: number; cancel?: number; spect?: number; net?: number; never?: number; aq?: number};
};

const ID = 'c12m5ni';
const W = 760;
const H = 530;
const FS = 21;
const GAP = 12;
const STRIKE = '#c0392b';

const layout = (toks: NiTok[], size: number, cx = W / 2) => {
	const ws = toks.map((k) => textW(k.t, size));
	const total = ws.reduce((a, w) => a + w, 0) + GAP * (toks.length - 1);
	let x = cx - total / 2;
	return ws.map((w) => {
		const c = x + w / 2;
		x += w + GAP;
		return {c, w};
	});
};

export const NetIonicDiagram = ({
	delay = 62,
	molecular = [
		{t: '2KI(aq)'}, {t: '+', op: true}, {t: 'Pb(NO₃)₂(aq)'}, {t: '→', op: true}, {t: 'PbI₂(s)', solid: true}, {t: '+', op: true}, {t: '2KNO₃(aq)'},
	],
	ionic = [
		[{t: '2K⁺(aq)', from: 0, spect: true}, {t: '+', op: true}, {t: '2I⁻(aq)', from: 0}, {t: '+', op: true}, {t: 'Pb²⁺(aq)', from: 2}, {t: '+', op: true}, {t: '2NO₃⁻(aq)', from: 2, spect: true}],
		[{t: '→', op: true}, {t: 'PbI₂(s)', from: 4, solid: true}, {t: '+', op: true}, {t: '2K⁺(aq)', from: 6, spect: true}, {t: '+', op: true}, {t: '2NO₃⁻(aq)', from: 6, spect: true}],
	],
	net = [{t: 'Pb²⁺(aq)', from: 4}, {t: '+', op: true}, {t: '2I⁻(aq)', from: 2}, {t: '→', op: true}, {t: 'PbI₂(s)', from: 8, solid: true}],
	precipitateColor = '#f2c618',
	spectators = 'K⁺ and NO₃⁻',
	beaker = {spectators: [{el: 'K', sign: '+', label: 'K⁺'}, {el: 'N', sign: '−', label: 'NO₃⁻'}], solid: 'PbI₂(s)'},
	beats = {},
}: NetIonicProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {molecular: 103, ionicLabel: 245, split: 298, netLabel: 463, cancel: 568, spect: 643, net: 733, never: 808, aq: 1003, ...beats};

	const Y1 = 70;
	const YI = ionic.length > 1 ? [150, 186] : [160];
	const Y3 = 292;
	const L1 = layout(molecular, FS);
	const LI = ionic.map((line) => layout(line, FS));
	const flatIonic = ionic.flat();
	const flatLI = LI.flat();
	const flatY = ionic.flatMap((line, li) => line.map(() => YI[li]));
	const L3 = layout(net, 26);

	const label = (x: number, y: number, t: string, at: number) => (
		<text x={x} y={y} fill={TOK.inkDim} fontSize={16} fontWeight={800} letterSpacing="0.06em" opacity={ramp(frame, at, 14)}>{t}</text>
	);
	const solidBox = (c: number, w: number, y: number, size: number, op: number, key: string) => {
		const pulse = frame >= b.never ? idlePulse(frame) : 0;
		return (
			<rect key={key} x={c - w / 2 - 7} y={y - size * 0.95} width={w + 14} height={size * 1.35} rx={8} fill={precipitateColor} opacity={op * (0.35 + 0.2 * pulse)} stroke={frame >= b.never ? '#b8920a' : 'none'} strokeWidth={1.5 + pulse} />
		);
	};

	// Spectator strikes
	const strikeAt = (i: number) => b.cancel + i * 12;
	let sIdx = 0;
	const strikes = flatIonic.map((k) => (k.spect ? sIdx++ : -1));

	// Beaker ions (spectators swimming; precipitate on the floor)
	const BK = {x: 150, base: 452, w: 200, h: 130};
	const swimmers = Array.from({length: 8}, (_, i) => {
		const sp = beaker.spectators[i % beaker.spectators.length];
		const s = i * 23 + 9;
		const x0 = BK.x - BK.w / 2 + 20, x1 = BK.x + BK.w / 2 - 20;
		const y0 = BK.base - BK.h * 0.8 + 16, y1 = BK.base - 34;
		return {
			sp,
			x: bounce(x0 + hash01(s) * (x1 - x0), (0.3 + hash01(s + 1) * 0.3) * (hash01(s + 2) > 0.5 ? 1 : -1), frame, x0, x1),
			y: bounce(y0 + hash01(s + 3) * (y1 - y0), (0.2 + hash01(s + 4) * 0.2) * (hash01(s + 5) > 0.5 ? 1 : -1), frame, y0, y1),
		};
	});
	const pile = Array.from({length: 11}, (_, i) => {
		const row = i < 6 ? 0 : 1;
		const c = row === 0 ? i : i - 6;
		return {x: BK.x - 50 + c * 20 + row * 10, y: BK.base - 14 - row * 12};
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Molecular, full ionic and net ionic equations for potassium iodide and lead nitrate: split the aqueous compounds, keep solid PbI₂ whole, cancel the spectator ions K⁺ and NO₃⁻, leaving Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={beaker.spectators.map((s) => s.el)} />
			<defs>
				<radialGradient id={`${ID}-ppt`} cx="38%" cy="32%" r="70%">
					<stop offset="0%" stopColor="#fff7c2" />
					<stop offset="60%" stopColor={precipitateColor} />
					<stop offset="100%" stopColor="#c99a06" />
				</radialGradient>
			</defs>

			{/* Row 1: molecular */}
			{label(24, Y1 - 34, '1  MOLECULAR', b.molecular - 20)}
			<g opacity={ramp(frame, b.molecular - 20, 16) * (1 - 0.35 * ramp(frame, b.net, 20))}>
				{molecular.map((k, i) => (k.solid ? solidBox(L1[i].c, L1[i].w, Y1, FS, 1, `s1${i}`) : null))}
				{molecular.map((k, i) => (
					<text key={i} x={L1[i].c} y={Y1} textAnchor="middle" fill={k.op ? TOK.inkDim : TOK.ink} fontSize={FS} fontWeight={800}>{k.t}</text>
				))}
			</g>

			{/* Row 2: full ionic */}
			{label(24, YI[0] - 34, '2  FULL IONIC', b.ionicLabel)}
			<g opacity={1 - 0.35 * ramp(frame, b.net + 20, 20)}>
				{flatIonic.map((k, i) => {
					const pos = flatLI[i];
					const y = flatY[i];
					const t0 = b.split + (k.from ?? 0) * 7 + (i % 7) * 4;
					const u = ease(interpolate(frame, [t0, t0 + 30], [0, 1], clamp));
					if (k.op) {
						return <text key={i} x={pos.c} y={y} textAnchor="middle" fill={TOK.inkDim} fontSize={FS} fontWeight={800} opacity={ramp(frame, b.split + 30, 14)}>{k.t}</text>;
					}
					const src = k.from !== undefined ? L1[k.from] : pos;
					const x = src.c + (pos.c - src.c) * u;
					const yy = Y1 + (y - Y1) * u;
					const si = strikes[i];
					const st = si >= 0 ? ease(interpolate(frame, [strikeAt(si), strikeAt(si) + 16], [0, 1], clamp)) : 0;
					return (
						<g key={i} opacity={ramp(frame, t0 - 4, 8)}>
							{k.solid && solidBox(x, pos.w, yy, FS, 1, `s2${i}`)}
							<text x={x} y={yy} textAnchor="middle" fill={TOK.ink} fontSize={FS} fontWeight={800} opacity={1 - 0.5 * st}>{k.t}</text>
							{st > 0 && <line x1={pos.c - pos.w / 2 - 3} y1={y - 7} x2={pos.c - pos.w / 2 - 3 + (pos.w + 6) * st} y2={y - 7} stroke={STRIKE} strokeWidth={3} strokeLinecap="round" />}
						</g>
					);
				})}
			</g>
			<g opacity={ramp(frame, b.spect, 14)}>
				<Pill x={W / 2} y={YI[YI.length - 1] + 38} text={`struck out: spectators ${spectators}`} color={STRIKE} ink={STRIKE} size={16} />
			</g>

			{/* Row 3: net ionic */}
			{label(24, Y3 - 44, '3  NET IONIC', b.netLabel)}
			<g>
				{net.map((k, i) => {
					const pos = L3[i];
					const t0 = b.net + i * 5;
					const u = ease(interpolate(frame, [t0, t0 + 30], [0, 1], clamp));
					if (k.op) return <text key={i} x={pos.c} y={Y3} textAnchor="middle" fill={TOK.amberInk} fontSize={26} fontWeight={800} opacity={ramp(frame, b.net + 26, 14)}>{k.t}</text>;
					const src = k.from !== undefined ? {c: flatLI[k.from].c, y: flatY[k.from]} : {c: pos.c, y: Y3};
					const x = src.c + (pos.c - src.c) * u;
					const y = src.y + (Y3 - src.y) * u;
					return (
						<g key={i} opacity={ramp(frame, t0 - 4, 8)}>
							{k.solid && solidBox(x, pos.w, y, 26, 1, `s3${i}`)}
							<text x={x} y={y} textAnchor="middle" fill={TOK.amberInk} fontSize={26} fontWeight={800}>{k.t}</text>
						</g>
					);
				})}
				<rect x={L3[0].c - L3[0].w / 2 - 18} y={Y3 - 34} width={L3[L3.length - 1].c + L3[L3.length - 1].w / 2 - L3[0].c + L3[0].w / 2 + 36} height={48} rx={12} fill="none" stroke={TOK.amber} strokeWidth={2.5 + (frame > b.net + 40 ? idlePulse(frame) * 1.2 : 0)} opacity={ramp(frame, b.net + 30, 14)} />
			</g>

			{/* Beaker */}
			<g opacity={ramp(frame, 4)}>
				<DioramaPlinth id={ID} cx={BK.x} cy={BK.base + 4} rx={124}>
					<Beaker cx={BK.x} baseY={BK.base} w={BK.w} h={BK.h} level={0.8}>
						<ellipse cx={BK.x} cy={BK.base - 10} rx={70} ry={10} fill={precipitateColor} opacity={0.7} />
						{pile.map((p, i) => (
							<circle key={i} cx={p.x} cy={p.y} r={9} fill={`url(#${ID}-ppt)`} stroke="#b8920a" strokeWidth={1} />
						))}
						{swimmers.map((s, i) => (
							<Ball key={i} id={ID} el={s.sp.el} x={s.x + idleBob(frame, i, 0.6)} y={s.y} r={11} label={s.sp.sign} labelSize={15} />
						))}
					</Beaker>
				</DioramaPlinth>
				{beaker.spectators.map((s, i) => (
					<g key={i}>
						<Ball id={ID} el={s.el} x={BK.x + BK.w / 2 + 34} y={BK.base - 96 + i * 30} r={11} label={s.sign} labelSize={15} />
						<text x={BK.x + BK.w / 2 + 52} y={BK.base - 90 + i * 30} fill={TOK.ink} fontSize={17} fontWeight={800}>{s.label}</text>
					</g>
				))}
				<circle cx={BK.x + BK.w / 2 + 34} cy={BK.base - 36} r={10} fill={`url(#${ID}-ppt)`} stroke="#b8920a" strokeWidth={1} />
				<text x={BK.x + BK.w / 2 + 52} y={BK.base - 30} fill={TOK.ink} fontSize={17} fontWeight={800}>{beaker.solid}</text>
			</g>

			{/* Rules */}
			<g opacity={ramp(frame, b.never, 16)}>
				<text x={420} y={372} fill={TOK.ink} fontSize={19} fontWeight={800}>Never split the precipitate:</text>
				<text x={420} y={398} fill={TOK.ink} fontSize={19} fontWeight={800}>it stays whole, as a solid</text>
			</g>
			<g opacity={ramp(frame, b.aq, 16)}>
				<text x={420} y={442} fill={theme.accent} fontSize={19} fontWeight={800}>Only (aq) species split into ions</text>
			</g>
		</svg>
	);
};
