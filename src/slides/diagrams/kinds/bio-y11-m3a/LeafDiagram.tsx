// LeafDiagram (bio11m3aLeaf) — structural adaptations for water balance.
//
// mode 'section'  Two leaf cross-sections on stone ledges: a soft leaf (thin
//                 cuticle, stomata flush with the lower surface) and a
//                 sclerophyll leaf (thick waxy cuticle, stomata sunk in pits
//                 ringed with hairs). Water vapour (blue dots) leaves through
//                 the stomata; the stream from each pore is set by props
//                 (`rate`), so the soft leaf visibly loses more. Feature tags
//                 land on their beats. Schematic, not to scale.
// mode 'graph'    Percentage of starting mass lost against time. Each leaf's
//                 value is COMPUTED from its balance readings
//                 ((start − end) ÷ start × 100), plotted to scale and labelled,
//                 with the readings shown beside a balance. Only the measured
//                 points are plotted (start and end), joined by a line.
//
// Beats are frames after `delay`. Hold: vapour keeps drifting; the key label
// breathes.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, Ledge, PAL, Tag, W, clamp, fadeAt} from './shared';

type Panel = {title: string; sub?: string; kind: 'soft' | 'sclero'; rate: number; at: number};
export type LeafProps = {
	mode: 'section' | 'graph';
	panels?: Panel[];
	features?: {text: string; target: 'cuticle' | 'stomata' | 'hairs'; at: number}[];
	vapourAt?: number;
	// graph
	series?: {label: string; start: number; end: number; at: number; tone?: 'soft' | 'sclero'}[];
	minutes?: number;
	yMax?: number;
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3leaf';
const ease = Easing.inOut(Easing.cubic);

const Section = ({x, y, w, kind, rate, frame, vapourOn}: {x: number; y: number; w: number; kind: 'soft' | 'sclero'; rate: number; frame: number; vapourOn: number}) => {
	const sclero = kind === 'sclero';
	const cut = sclero ? 12 : 3;
	const epi = 20;
	const pal = 54;
	const spongy = 64;
	const low = 18;
	const yEpi = y + cut;
	const yPal = yEpi + epi;
	const ySp = yPal + pal;
	const yLow = ySp + spongy;
	const yBot = yLow + low;
	const stomata = sclero ? [x + w * 0.3, x + w * 0.72] : [x + w * 0.22, x + w * 0.5, x + w * 0.78];
	const pitD = sclero ? 20 : 0;
	return (
		<g>
			{/* cuticle */}
			<rect x={x} y={y} width={w} height={cut} fill={PAL.wax} stroke="#c9b45a" strokeWidth={1} />
			{/* upper epidermis */}
			{Array.from({length: Math.floor(w / 30)}, (_, k) => (
				<rect key={k} x={x + k * 30 + 1} y={yEpi} width={28} height={epi - 2} rx={4} fill="#e7f2d8" stroke="#9fbf7a" strokeWidth={1} />
			))}
			{/* palisade */}
			{Array.from({length: Math.floor(w / 22)}, (_, k) => (
				<g key={k}>
					<rect x={x + k * 22 + 2} y={yPal + 2} width={18} height={pal - 4} rx={8} fill="#b8dc8e" stroke="#7fa85a" strokeWidth={1} />
					{[0, 1, 2].map((j) => (
						<circle key={j} cx={x + k * 22 + 11} cy={yPal + 12 + j * 14} r={3} fill={PAL.leaf} />
					))}
				</g>
			))}
			{/* spongy mesophyll with air spaces */}
			<rect x={x} y={ySp} width={w} height={spongy} fill="#eef6e4" />
			{Array.from({length: Math.floor(w / 34) * 2}, (_, k) => {
				const c = k % Math.floor(w / 34);
				const r = Math.floor(k / Math.floor(w / 34));
				return <ellipse key={k} cx={x + 18 + c * 34 + (r ? 14 : 0)} cy={ySp + 16 + r * 30} rx={13} ry={11} fill="#c9e3a8" stroke="#8fb36a" strokeWidth={1} />;
			})}
			{/* lower epidermis with stomata */}
			{Array.from({length: Math.floor(w / 30)}, (_, k) => {
				const cx = x + k * 30 + 15;
				if (stomata.some((s) => Math.abs(s - cx) < 22)) return null;
				return <rect key={k} x={x + k * 30 + 1} y={yLow} width={28} height={low - 2} rx={4} fill="#e7f2d8" stroke="#9fbf7a" strokeWidth={1} />;
			})}
			{stomata.map((sx, k) => (
				<g key={`s${k}`}>
					{sclero && <path d={`M ${sx - 26} ${yBot} L ${sx - 10} ${yBot + pitD} L ${sx + 10} ${yBot + pitD} L ${sx + 26} ${yBot} Z`} fill="#eef6e4" stroke="#9fbf7a" strokeWidth={1} />}
					<ellipse cx={sx - 8} cy={yLow + low / 2 + pitD} rx={7} ry={low / 2} fill="#9ccf6a" stroke="#6f9a45" strokeWidth={1} />
					<ellipse cx={sx + 8} cy={yLow + low / 2 + pitD} rx={7} ry={low / 2} fill="#9ccf6a" stroke="#6f9a45" strokeWidth={1} />
					{sclero &&
						[-22, -16, 16, 22].map((hx, j) => (
							<path key={j} d={`M ${sx + hx} ${yBot + 2} q ${hx > 0 ? 6 : -6} 10 ${hx > 0 ? 2 : -2} 20`} stroke="#d8d0b8" strokeWidth={2} fill="none" />
						))}
					{/* vapour */}
					{Array.from({length: rate}, (_, j) => {
						const life = 90;
						const t = ((frame + j * (life / rate) + k * 13) % life) / life;
						return <circle key={`v${j}`} cx={sx + Math.sin(t * 6 + j) * (6 + t * 18)} cy={yLow + low + pitD + t * 70} r={3.2} fill={PAL.vapour} opacity={vapourOn * (1 - t) * 0.95} />;
					})}
				</g>
			))}
			{/* lower cuticle */}
			<rect x={x} y={yBot - 1} width={w} height={sclero ? 4 : 2} fill={PAL.wax} opacity={0.9} />
		</g>
	);
};

export const LeafDiagram = (props: LeafProps) => {
	const {mode, footer = [], delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	if (mode === 'section') {
		const panels = props.panels ?? [];
		const pw = 300;
		const xs = [40, W - 40 - pw];
		const y = 132;
		const vapourOn = fadeAt(frame, props.vapourAt ?? 0, 20);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Soft leaf and sclerophyll leaf cross-sections" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{panels.map((p, i) => (
					<g key={i} opacity={fadeAt(frame, p.at, 16)}>
						<text x={xs[i] + pw / 2} y={44} textAnchor="middle" fontSize={20} fontWeight={800} fill={p.kind === 'sclero' ? theme.accent : TOK.ink}>
							{p.title}
						</text>
						{p.sub && (
							<text x={xs[i] + pw / 2} y={68} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
								{p.sub}
							</text>
						)}
						<g transform={`translate(0, ${idleBob(frame, i, 1)})`}>
							<Section x={xs[i]} y={y} w={pw} kind={p.kind} rate={p.rate} frame={frame} vapourOn={vapourOn} />
						</g>
						<Ledge x0={xs[i] - 14} x1={xs[i] + pw + 14} y={y + 272} />
					</g>
				))}
				{(props.features ?? []).map((f, i) => {
					const last = i === (props.features?.length ?? 0) - 1;
					const pulse = last ? idlePulse(frame) : 0;
					// cuticle: tag just above the leaf; stomata and hairs: tags in a row below the ledge
					const below = f.target !== 'cuticle';
					const tx = f.target === 'cuticle' ? xs[1] + pw * 0.5 : f.target === 'stomata' ? xs[1] + pw * 0.3 : xs[1] + pw * 0.72 + 22;
					const ty = f.target === 'cuticle' ? y + 4 : f.target === 'stomata' ? y + 188 : y + 196;
					const lx = f.target === 'cuticle' ? tx : f.target === 'stomata' ? 480 : 655;
					const ly = f.target === 'cuticle' ? y - 20 : 480;
					return (
						<g key={i} opacity={fadeAt(frame, f.at)}>
							<line x1={lx} y1={below ? ly - 14 : ly + 14} x2={tx} y2={ty} stroke={TOK.amber} strokeWidth={2.5} />
							<circle cx={tx} cy={ty} r={5} fill={TOK.amber} />
							<Tag x={lx} y={ly} text={f.text} color={TOK.amberInk} fill="#fff6e6" size={15} strokeW={2 + pulse} />
						</g>
					);
				})}
				<g opacity={vapourOn}>
					<circle cx={60} cy={480} r={5} fill={PAL.vapour} />
					<text x={72} y={486} fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						water vapour leaving
					</text>
				</g>
				<Foot lines={footer} frame={frame} fade={fadeAt} />
			</svg>
		);
	}

	// graph
	const series = props.series ?? [];
	const minutes = props.minutes ?? 60;
	const yMax = props.yMax ?? 35;
	const GX0 = 110;
	const GX1 = 520;
	const GY0 = 60;
	const GY1 = 400 - Math.max(0, footer.length - 1) * 28;
	const gx = (m: number) => GX0 + (m / minutes) * (GX1 - GX0);
	const gy = (p: number) => GY1 - (p / yMax) * (GY1 - GY0);
	const pct = (s: {start: number; end: number}) => ((s.start - s.end) / s.start) * 100;
	const colOf = (t?: string) => (t === 'sclero' ? theme.accent : PAL.orange);
	const yTicks: number[] = [];
	for (let v = 0; v <= yMax; v += yMax > 20 ? 10 : 5) yTicks.push(v);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Percentage mass lost against time" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<Ledge x0={GX0 - 40} x1={GX1 + 20} y={GY1 + 2} />
			<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.ink} strokeWidth={2.5} />
			<line x1={GX0} y1={GY1} x2={GX0} y2={GY0} stroke={TOK.ink} strokeWidth={2.5} />
			{yTicks.map((v) => (
				<g key={v}>
					<line x1={GX0 - 6} y1={gy(v)} x2={GX1} y2={gy(v)} stroke={TOK.rule} strokeWidth={v ? 1.2 : 0} />
					<text x={GX0 - 12} y={gy(v) + 5} textAnchor="end" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						{v}
					</text>
				</g>
			))}
			{Array.from({length: minutes / 10 + 1}, (_, k) => (
				<text key={k} x={gx(k * 10)} y={GY1 + 44} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
					{k * 10}
				</text>
			))}
			<text x={(GX0 + GX1) / 2} y={GY1 + 70} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.ink}>
				Time (minutes)
			</text>
			<text x={GX0 - 52} y={(GY0 + GY1) / 2} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.ink} transform={`rotate(-90 ${GX0 - 52} ${(GY0 + GY1) / 2})`}>
				Mass lost (%)
			</text>
			{series.map((s, i) => {
				const t = interpolate(frame, [s.at, s.at + 50], [0, 1], {...clamp, easing: ease});
				const p = pct(s);
				const c = colOf(s.tone);
				const ex = gx(minutes * t);
				const ey = gy(p * t);
				const last = i === series.length - 1;
				return (
					<g key={i} opacity={fadeAt(frame, s.at)}>
						<line x1={gx(0)} y1={gy(0)} x2={ex} y2={ey} stroke={c} strokeWidth={4} strokeLinecap="round" strokeDasharray={s.tone === 'sclero' ? '10 7' : undefined} />
						<circle cx={gx(0)} cy={gy(0)} r={6} fill={c} />
						{t >= 1 && <circle cx={gx(minutes)} cy={gy(p)} r={6} fill={c} />}
						<g opacity={fadeAt(frame, s.at + 45)}>
							<text x={gx(minutes) + 12} y={gy(p) + 6} fontSize={18} fontWeight={800} fill={c}>
								{`${Math.round(p)}%`}
							</text>
							{/* balance readout */}
							<g transform={`translate(${GX1 + 90}, ${120 + i * 150})`}>
								<rect x={-6} y={40} width={172} height={34} rx={8} fill="#e8e6e1" stroke="#b3afa7" />
								<rect x={30} y={-4} width={100} height={46} rx={6} fill="#2c3136" />
								<text x={80} y={27} textAnchor="middle" fontSize={17} fontWeight={800} fill="#9ef0a8">
									{`${s.end.toFixed(2)} g`}
								</text>
								<text x={80} y={-16} textAnchor="middle" fontSize={16} fontWeight={800} fill={c}>
									{s.label}
								</text>
								<text x={80} y={98} textAnchor="middle" fontSize={15} fontWeight={700} fill={last ? TOK.inkDim : TOK.inkDim}>
									{`${s.start.toFixed(2)} g → ${s.end.toFixed(2)} g`}
								</text>
							</g>
						</g>
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
