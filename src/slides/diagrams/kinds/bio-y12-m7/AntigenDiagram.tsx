// AntigenDiagram (bio12m7Antigen) — antigen versus epitope, and self versus
// non-self.
//
// A foreign antigen (a surface protein) stands on a plinth carrying three
// epitopes, each a different shape and colour. The epitope idea is picked
// out first; then one antibody docks on each epitope, each fitting only its
// own shape, and three B cells below carry the matching receptor colours (a
// different clone for each epitope). Finally a body cell appears on its own
// plinth: self, tolerated; the foreign antigen: non-self, attacked.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, Mark, PAL, Title, W, bioBeats, clamp, fadeAt, shade} from './shared';
import {Icon} from './icons';
import {Antibody, EP_COLORS, Epitope, tipOffset, type EpShape} from './immune';

type Beats = {antigen: number; epitope: number; bind: number; clones: number; self: number; nonself: number; verdict: number};
export type AntigenProps = {
	title?: string;
	labels?: {antigen?: string; epitope?: string; clones?: string; self?: string; nonself?: string; verdict?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7ag';
const ease = Easing.out(Easing.cubic);
const EPS: {shape: EpShape; a: number}[] = [
	{shape: 'tri', a: -150},
	{shape: 'sq', a: -90},
	{shape: 'round', a: -30},
];

export const AntigenDiagram = ({title, labels = {}, beats, delay = 62}: AntigenProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({antigen: 20, epitope: 200, bind: 300, clones: 360, self: 500, nonself: 600, verdict: 700}, beats);
	const top = title ? 44 : 0;
	const cx = 250;
	const cy = top + 220;
	const R = 62;
	const pl = {x: cx, y: top + 330};
	const ep = EPS.map((e) => {
		const a = (e.a * Math.PI) / 180;
		return {...e, x: cx + Math.cos(a) * (R + 6), y: cy + Math.sin(a) * (R * 0.85 + 6)};
	});
	const pulse = idlePulse(frame);
	const agOn = fadeAt(frame, b.antigen, 16);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Antigens and epitopes'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={pl.x} cy={pl.y} rx={200} />
			</g>
			{/* the antigen: a foreign surface protein on a stalk */}
			<g opacity={agOn} transform={`translate(0, ${idleBob(frame, 1, 1.2)})`}>
				<rect x={cx - 9} y={cy + R * 0.7} width={18} height={pl.y - cy - R * 0.7 - 6} rx={6} fill={shade(PAL.protein, -0.1)} />
				<path d={`M ${cx - R} ${cy} C ${cx - R} ${cy - R * 1.1} ${cx + R} ${cy - R * 1.1} ${cx + R} ${cy} C ${cx + R} ${cy + R * 0.9} ${cx - R} ${cy + R * 0.9} ${cx - R} ${cy} Z`} fill={`url(#${ID}-ball-protein)`} stroke={shade(PAL.protein, -0.35)} strokeWidth={1.2} />
				{ep.map((e, i) => (
					<g key={i}>
						{i === 1 && frame >= b.epitope && <circle cx={e.x} cy={e.y} r={17 + pulse * 3} fill="none" stroke={TOK.amber} strokeWidth={3} opacity={fadeAt(frame, b.epitope)} />}
						<Epitope x={e.x} y={e.y} shape={e.shape} size={10} />
					</g>
				))}
			</g>
			<text x={cx} y={cy + 10} textAnchor="middle" fill="#ffffff" fontSize={19} fontWeight={800} opacity={agOn}>{labels.antigen ?? 'antigen'}</text>
			{/* epitope label */}
			<g opacity={fadeAt(frame, b.epitope)}>
				<line x1={ep[1].x + 16} y1={ep[1].y - 10} x2={ep[1].x + 150} y2={top + 44} stroke={TOK.amber} strokeWidth={2} />
				<text x={ep[1].x + 156} y={top + 40} fill={TOK.amberInk} fontSize={19} fontWeight={800}>{labels.epitope ?? 'epitope'}</text>
			</g>
			{/* antibodies dock, one per epitope */}
			{ep.map((e, i) => {
				const at = b.bind + i * 34;
				const t = interpolate(frame, [at, at + 36], [0, 1], {...clamp, easing: ease});
				if (t <= 0) return null;
				const rot = e.a - 90;
				const s = 1.05;
				const off = tipOffset(s, rot, -1);
				const fx = e.x - off.dx;
				const fy = e.y - off.dy;
				const out = (1 - t) * 90;
				const ax = fx + Math.cos((e.a * Math.PI) / 180) * out;
				const ay = fy + Math.sin((e.a * Math.PI) / 180) * out;
				return <Antibody key={i} x={ax} y={ay} s={s} rot={rot} tip={e.shape} opacity={Math.min(1, t * 2)} hiTips={1} />;
			})}
			{/* one B-cell clone per epitope */}
			{ep.map((e, i) => (
				<g key={i} opacity={fadeAt(frame, b.clones + i * 12)}>
					<Icon id={ID} name="bcell" x={cx - 90 + i * 90} y={pl.y + 2 + idleBob(frame, i + 4, 1.2)} s={0.5} frame={frame} opts={{rec: EP_COLORS[e.shape]}} />
				</g>
			))}
			<text x={cx} y={pl.y + 98} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.clones + 30)}>{labels.clones ?? 'a different B cell clone for each epitope'}</text>
			{/* self vs non-self */}
			<g opacity={fadeAt(frame, b.self)}>
				<DioramaPlinth id={`${ID}s`} cx={604} cy={top + 250} rx={96} />
				<Icon id={ID} name="cell" x={604} y={top + 200 + idleBob(frame, 7, 1.2)} s={1.1} frame={frame} />
				{[-160, -120, -60, -20].map((deg, k) => {
					const a = (deg * Math.PI) / 180;
					return <rect key={k} x={604 + Math.cos(a) * 36 - 4} y={top + 200 + Math.sin(a) * 36 - 4} width={8} height={8} rx={2} fill="#8a8a8a" />;
				})}
				<Mark x={666} y={top + 150} ok r={13} />
				<Lines x={604} y={top + 318} lines={[labels.self ?? 'self-antigens', 'tolerated']} size={18} color={TOK.inkDim} />
			</g>
			<g opacity={fadeAt(frame, b.nonself)}>
				<Lines x={604} y={top + 400} lines={[labels.nonself ?? 'non-self antigens', 'attacked']} size={18} color={TOK.amberInk} />
				<path d={`M 540 ${top + 394} C 480 ${top + 380} 420 ${top + 300} ${cx + R + 30} ${cy + 10}`} fill="none" stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="5 5" />
			</g>
			{labels.verdict && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.verdict)}>{labels.verdict}</text>
			)}
		</svg>
	);
};
