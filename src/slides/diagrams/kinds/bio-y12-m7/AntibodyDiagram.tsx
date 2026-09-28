// AntibodyDiagram (bio12m7Antibody) — what an antibody is and what it does.
//
// structure  A big antibody Y on a plinth: the tips (variable region, the
//            binding sites) and the stem (constant region) are picked out in
//            turn, then both identical binding sites glow. Four action tiles
//            build on the right, one per narrated action: neutralisation
//            (blocks a virus from a host receptor), opsonisation (coats a
//            bacterium for a phagocyte), complement activation (a membrane
//            attack complex on the coated cell) and agglutination (two
//            binding sites clump pathogens). None of the tiles shows the
//            antibody killing anything itself.
// ade        Dengue's four serotypes. Infection with one leaves antibodies and
//            lifelong immunity to that one only; a different serotype is then
//            bound but not neutralised, and the bound virus is carried into a
//            host cell (antibody-dependent enhancement). All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, Mark, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, shade, textWidth, wrap} from './shared';
import {Icon} from './icons';
import {Antibody} from './immune';

type Beats = {
	y: number; variable: number; constant: number; two: number; t1: number; t2: number; t3: number; t4: number; verdict: number;
	vector: number; serotypes: number; first: number; others: number; second: number; bind: number; enter: number; severe: number; vaccine: number; note: number;
};
export type AntibodyProps = {
	mode?: 'structure' | 'ade';
	title?: string;
	labels?: {
		variable?: string; constant?: string; two?: string; t1?: string; t2?: string; t3?: string; t4?: string; verdict?: string;
		vector?: string; serotypes?: string; first?: string; others?: string; bind?: string; severe?: string; vaccine?: string; note?: string;
	};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7ab';
const ease = Easing.inOut(Easing.cubic);

export const AntibodyDiagram = ({mode = 'structure', title, labels = {}, beats, delay = 62}: AntibodyProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({
		y: 20, variable: 200, constant: 400, two: 600, t1: 800, t2: 950, t3: 1100, t4: 1250, verdict: 1450,
		vector: 60, serotypes: 300, first: 450, others: 600, second: 740, bind: 800, enter: 900, severe: 1050, vaccine: 1200, note: 1400,
	}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 44 : 0;

	if (mode === 'ade') {
		const tones = ['virus', 'rna', 'nk', 'fungus'] as const;
		const sx = (i: number) => 150 + i * 150;
		const rowY = top + 96;
		const cellX = 520;
		const cellY = top + 336;
		// antibody against serotype 1
		const abOn = fadeAt(frame, b.first + 20);
		// serotype 2 travels to the cell after binding
		const move = interpolate(frame, [b.second, b.bind], [0, 1], {...clamp, easing: ease});
		const enter = interpolate(frame, [b.enter, b.enter + 50], [0, 1], {...clamp, easing: ease});
		const v2 = {x: sx(1) + (330 - sx(1)) * move + (cellX - 330) * enter, y: rowY + (cellY - 40 - rowY) * move + 40 * enter};
		const bound = frame >= b.bind;
		const burst = interpolate(frame, [b.severe - 60, b.severe + 30], [0, 1], clamp);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Antibody-dependent enhancement'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				{labels.vector && (
					<g opacity={fadeAt(frame, b.vector) * (1 - fadeAt(frame, b.serotypes - 20, 14))}>
						<Icon id={ID} name="mosquito" x={W / 2 - 150} y={top + 110} s={1.1} frame={frame} />
						<Lines x={W / 2 - 80} y={top + 100} lines={wrap(labels.vector, 30)} size={19} color={TOK.ink} anchor="start" />
					</g>
				)}
				<g opacity={fadeAt(frame, b.serotypes - 10)}>
					{[0, 1, 2, 3].map((i) => <DioramaPlinth key={i} id={`${ID}p${i}`} cx={sx(i)} cy={rowY + 36} rx={56} />)}
					<text x={W / 2} y={rowY + 104} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>{labels.serotypes ?? 'four serotypes'}</text>
				</g>
				{tones.map((t, i) => {
					const p = popAt(frame, fps, b.serotypes + i * 14);
					if (p <= 0) return null;
					const immune = i === 0 && frame >= b.first;
					const isV2 = i === 1 && frame >= b.second;
					if (isV2) return <text key={i} x={sx(i) + 44} y={rowY + 8} fill={TOK.inkMute} fontSize={17} fontWeight={800}>{i + 1}</text>;
					return (
						<g key={i} opacity={Math.min(1, p * 1.4)}>
							<Icon id={ID} name="virus" x={sx(i)} y={rowY - 4 + idleBob(frame, i, 1.4) - (1 - Math.min(1, p)) * 30} s={0.9} frame={frame} opts={{tone: t}} />
							<text x={sx(i) + 44} y={rowY + 8} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{i + 1}</text>
							{immune && <Mark x={sx(i) + 34} y={rowY - 30} ok r={12} opacity={fadeAt(frame, b.first + 20)} />}
							{i > 0 && frame >= b.others && <circle cx={sx(i)} cy={rowY - 4} r={42} fill="none" stroke={PAL.stop} strokeWidth={2} strokeDasharray="4 4" opacity={fadeAt(frame, b.others) * (0.6 + 0.4 * pulse)} />}
						</g>
					);
				})}
				{/* your antibodies (made against serotype 1) */}
				<g opacity={abOn}>
					<rect x={40} y={top + 250} width={250} height={150} rx={14} fill="#ffffff" stroke={TOK.rule} />
					{[0, 1, 2].map((k) => <Antibody key={k} x={90 + k * 70} y={top + 318 + idleBob(frame, k, 1.5)} s={1.1} tip="tri" tipColor={PAL.virus} hiTips={1} />)}
					<Lines x={165} y={top + 375} lines={wrap(labels.first ?? 'antibodies against serotype 1', 26)} size={16} color={TOK.ink} />
				</g>
				{labels.others && <text x={W / 2} y={top + 32} textAnchor="middle" fill={PAL.stop} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.others) * (1 - fadeAt(frame, b.second - 10, 10))}>{labels.others}</text>}
				{/* the host cell */}
				<g opacity={fadeAt(frame, b.second)}>
					<DioramaPlinth id={`${ID}c`} cx={cellX} cy={cellY + 40} rx={130} />
					<ellipse cx={cellX} cy={cellY} rx={96} ry={62} fill={`url(#${ID}-ball-cell)`} stroke={shade(PAL.cell, -0.35)} strokeWidth={1.2} />
					<circle cx={cellX + 30} cy={cellY + 6} r={18} fill={`url(#${ID}-ball-nucleus)`} opacity={0.8} />
					<text x={cellX} y={cellY + 118} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>host cell</text>
				</g>
				{/* serotype 2 arrives, gets bound but not neutralised, and is carried in */}
				{frame >= b.second && (
					<g opacity={1 - burst * 0.0}>
						<Icon id={ID} name="virus" x={v2.x} y={v2.y} s={0.75 - 0.25 * enter} frame={frame} opts={{tone: 'rna'}} />
						{bound && [-1, 1].map((d) => <Antibody key={d} x={v2.x + d * 36 * (0.75 - 0.25 * enter)} y={v2.y + 30 * (0.75 - 0.25 * enter)} s={0.8 - 0.3 * enter} rot={d * 35} tip="tri" tipColor={PAL.virus} />)}
						{bound && enter < 0.3 && <text x={v2.x} y={v2.y - 42} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>{labels.bind ?? 'bound, not neutralised'}</text>}
					</g>
				)}
				{burst > 0 &&
					Array.from({length: 7}, (_, k) => {
						const a = (k / 7) * Math.PI * 2;
						return <Icon key={k} id={ID} name="virus" x={cellX + Math.cos(a) * 60 * burst} y={cellY + Math.sin(a) * 34 * burst + idleBob(frame, k, 1.2)} s={0.32} frame={frame} opts={{tone: 'rna'}} opacity={burst} />;
					})}
				{labels.severe && (
					<g opacity={fadeAt(frame, b.severe)}>
						<rect x={cellX - textWidth(labels.severe, 18) / 2 - 16} y={cellY - 112} width={textWidth(labels.severe, 18) + 32} height={34} rx={17} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2.5 + pulse} />
						<text x={cellX} y={cellY - 89} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{labels.severe}</text>
					</g>
				)}
				{labels.vaccine && <text x={W / 2} y={H - 34} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.vaccine)}>{labels.vaccine}</text>}
				{labels.note && <text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.note)}>{labels.note}</text>}
			</svg>
		);
	}

	// ── structure ──
	const yx = 175;
	const yy = top + 250;
	const S = 3.4;
	const tiles = [
		{at: b.t1, name: labels.t1 ?? 'Neutralisation'},
		{at: b.t2, name: labels.t2 ?? 'Opsonisation'},
		{at: b.t3, name: labels.t3 ?? 'Complement activation'},
		{at: b.t4, name: labels.t4 ?? 'Agglutination'},
	];
	const tw = 176;
	const th = 190;
	const tx = (i: number) => 384 + (i % 2) * (tw + 12);
	const ty = (i: number) => top + 30 + Math.floor(i / 2) * (th + 12);
	const hiT = frame >= b.two ? 0.6 + 0.4 * pulse : fadeAt(frame, b.variable);
	const hiS = frame >= b.constant && frame < b.two ? 1 : 0;

	const tileArt = (i: number, x: number, y: number) => {
		const cx = x + tw / 2;
		const cy = y + th / 2 + 12;
		if (i === 0) {
			// virus coated with antibodies, held off a host receptor
			return (
				<g>
					<path d={`M ${x + 10} ${y + th - 26} Q ${cx} ${y + th - 46} ${x + tw - 10} ${y + th - 26}`} fill="none" stroke={shade(PAL.cell, -0.3)} strokeWidth={6} />
					<path d={`M ${cx} ${y + th - 38} l 0 -12 m -6 -4 l 6 4 l 6 -4`} stroke={shade(PAL.cell, -0.45)} strokeWidth={3} fill="none" />
					<Icon id={ID} name="virus" x={cx} y={cy - 22} s={0.6} frame={frame} />
					{[-1, 1].map((d) => <Antibody key={d} x={cx + d * 30} y={cy - 2} s={0.62} rot={d * 140} tip="tri" tipColor={PAL.virus} />)}
					<Mark x={cx + 40} y={cy + 24} ok={false} r={11} />
				</g>
			);
		}
		if (i === 1) {
			return (
				<g>
					<Icon id={ID} name="bacterium" x={cx - 30} y={cy - 6} s={0.62} frame={frame} />
					{[-40, -10, 20].map((dx, k) => <Antibody key={k} x={cx - 30 + dx * 0.9} y={cy - 26} s={0.5} rot={180} tip="round" tipColor={PAL.bacterium} />)}
					<Icon id={ID} name="macrophage" x={cx + 48 - 8 * Math.sin(frame / 20)} y={cy + 14} s={0.62} frame={frame} />
				</g>
			);
		}
		if (i === 2) {
			return (
				<g>
					<Icon id={ID} name="bacterium" x={cx} y={cy} s={0.75} frame={frame} />
					<Icon id={ID} name="complement" x={cx + 10} y={cy - 32} s={0.55} frame={frame} />
					{[-1, 1].map((d) => <Antibody key={d} x={cx + d * 40} y={cy - 24} s={0.5} rot={180 + d * 20} tip="round" tipColor={PAL.bacterium} />)}
				</g>
			);
		}
		// agglutination: antibodies bridge pathogens into a clump
		const pts = [[-34, -18], [30, -22], [-26, 28], [36, 24]];
		return (
			<g>
				{pts.map(([dx, dy], k) => <Icon key={k} id={ID} name="virus" x={cx + dx} y={cy + dy - 6} s={0.4} frame={frame} />)}
				<Antibody x={cx - 2} y={cy - 12} s={0.62} rot={0} tip="tri" tipColor={PAL.virus} />
				<Antibody x={cx + 2} y={cy + 8} s={0.62} rot={180} tip="tri" tipColor={PAL.virus} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Antibody structure and actions'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={yx} cy={yy + 118} rx={150} />
			</g>
			<g opacity={fadeAt(frame, b.y, 14)}>
				<Antibody x={yx} y={yy + idleBob(frame, 2, 1.2) + 6} s={S} tip="tri" hiTips={hiT} hiStem={hiS} />
			</g>
			{/* labels */}
			<g opacity={fadeAt(frame, b.variable)}>
				<Lines x={yx} y={top + 40} lines={wrap(labels.variable ?? 'variable region: the binding site', 26)} size={18} color={TOK.amberInk} />
			</g>
			<g opacity={fadeAt(frame, b.constant)}>
				<line x1={yx + 22} y1={yy + 60} x2={yx + 80} y2={yy + 60} stroke={theme.accent} strokeWidth={2} />
				<Lines x={yx + 86} y={yy + 56} lines={wrap(labels.constant ?? 'constant region: class and effector functions', 13)} size={15} color={theme.accent} anchor="start" />
			</g>
			<g opacity={fadeAt(frame, b.two)}>
				<text x={yx} y={yy + 190} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{labels.two ?? 'two identical binding sites'}</text>
			</g>
			{/* action tiles */}
			{tiles.map((t, i) => {
				const p = popAt(frame, fps, t.at);
				if (p <= 0) return null;
				const x = tx(i);
				const y = ty(i);
				return (
					<g key={i} opacity={Math.min(1, p * 1.4)} transform={`translate(${x + tw / 2},${y + th / 2}) scale(${0.9 + 0.1 * Math.min(1, p)}) translate(${-x - tw / 2},${-y - th / 2})`}>
						<rect x={x} y={y} width={tw} height={th} rx={14} fill="#ffffff" stroke={theme.accent} strokeWidth={1.5} />
						<text x={x + tw / 2} y={y + 26} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>{t.name}</text>
						{tileArt(i, x, y)}
					</g>
				);
			})}
			{labels.verdict && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, b.verdict)}>{labels.verdict}</text>
			)}
		</svg>
	);
};

