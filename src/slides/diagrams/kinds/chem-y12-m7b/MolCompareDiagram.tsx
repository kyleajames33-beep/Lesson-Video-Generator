// MolCompareDiagram — structural formulae standing on stone plinths, side by side.
//
// One to four molecules (presets from molecules.ts), each on its own plinth
// with a name and a sub-line (formula / class). Beats, all frames after
// `delay`, reveal them in step with the narration and then point at the atom
// that matters: an amber ring (`highlight`), a lone pair, a charge cloud that
// shows how far a negative charge spreads (`glow`: the same total charge is
// shared between the listed atoms, so each glow is dimmer when it spreads),
// or a cut line through one bond with a label on each side (`cut`, for
// naming esters). A footer line lands the takeaway.
//
// Config-driven: used for aldehyde vs ketone, amine classes, the three
// conjugate bases and the ester cut.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {ELEMENTS, Chip, LonePair, Mol, Title, atomPos, fadeAt, molSize, popAt, resolveMol} from './shared';
import type {MolSpec} from './molecules';

export type MolCompareItem = {
	mol: string | MolSpec;
	name: string;
	sub?: string;
	at?: number;
	/** Pixels per bond (default depends on layout). */
	bond?: number;
	highlight?: number[];
	highlightAt?: number;
	/** Chip above the molecule. `amber` makes it the key chip. */
	tag?: {text: string; at: number; amber?: boolean};
	/** Lone pair dots on an atom, pointing along `angle` (deg, -90 = up). */
	lonePair?: {atom: number; angle: number; at: number};
	/** Charge cloud: the listed atoms share one unit of negative charge. */
	glow?: {atoms: number[]; at: number};
	/** Cut line through a bond, with labels for the two halves. */
	cut?: {bond: number; at: number; left: string; right: string; leftSub?: string; rightSub?: string; leftAt?: number; rightAt?: number};
	/** Draw the molecule mirrored / nudged. */
	flipX?: boolean;
	dy?: number;
};

export type MolCompareProps = {
	title?: string;
	items?: MolCompareItem[];
	footer?: {text: string; at: number};
	delay?: number;
};

const ID = 'c12m7cmp';
const W = 760;
const H = 530;

type Cell = {cx: number; molY: number; plinthY: number; rx: number; nameY: number; tagY: number; bond: number; ball: number};

const layout = (n: number, oneBond: number): Cell[] => {
	if (n === 1) return [{cx: W / 2, molY: 236, plinthY: 330, rx: 300, nameY: 470, tagY: 96, bond: oneBond, ball: 1.35}];
	if (n === 2)
		return [0, 1].map((i) => ({cx: 192 + i * 376, molY: 232, plinthY: 350, rx: 172, nameY: 462, tagY: 92, bond: 84, ball: 1.3}));
	if (n === 3)
		return [0, 1, 2].map((i) => ({cx: 130 + i * 250, molY: 262, plinthY: 360, rx: 118, nameY: 446, tagY: 92, bond: 60, ball: 1.05}));
	return [0, 1, 2, 3].map((i) => {
		const top = 8 + Math.floor(i / 2) * 262;
		return {cx: 192 + (i % 2) * 376, molY: top + 104, plinthY: top + 176, rx: 158, nameY: top + 226, tagY: top + 22, bond: 62, ball: 1.05};
	});
};

export const MolCompareDiagram = ({title = '', items = [], footer, delay = 62}: MolCompareProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const cells = layout(items.length, 104);
	const four = items.length === 4;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title || 'Structural formulae compared'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<defs>
				<radialGradient id={`${ID}-glow`}>
					<stop offset="0%" stopColor={theme.accent2} stopOpacity={0.95} />
					<stop offset="100%" stopColor={theme.accent2} stopOpacity={0} />
				</radialGradient>
			</defs>
			{!four && title && <Title text={title} opacity={fadeAt(frame, 0)} />}

			{items.map((it, i) => {
				const c = cells[i];
				const at = it.at ?? 10 + i * 30;
				const shown = Math.min(1, popAt(frame, fps, at) * 1.2);
				const bond = it.bond ?? c.bond;
				const spec = resolveMol(it.mol);
				const bob = idleBob(frame, i, 1.6);
				const mx = c.cx;
				const my = c.molY + (it.dy ?? 0) + bob;
				const size = molSize(spec, bond);
				const pos = (k: number) => atomPos(spec, k, mx, my, bond, it.flipX);
				const hl = it.highlight && fadeAt(frame, it.highlightAt ?? at + 40, 12);
				const glowIn = it.glow ? fadeAt(frame, it.glow.at, 20) : 0;
				const cutIn = it.cut ? fadeAt(frame, it.cut.at, 14) : 0;
				return (
					<g key={i}>
						<g opacity={fadeAt(frame, i * 4, 14) * (0.6 + 0.4 * shown)}>
							<DioramaPlinth id={ID} cx={c.cx} cy={c.plinthY} rx={c.rx} />
						</g>
						{/* shadow of the molecule on the plinth top */}
						<ellipse cx={c.cx} cy={c.plinthY - 2} rx={Math.min(c.rx * 0.8, size.w / 2 + 20)} ry={c.rx * 0.12} fill="rgba(40,36,30,0.18)" opacity={shown} />

						{/* charge cloud (drawn under the balls) */}
						{it.glow && glowIn > 0 &&
							it.glow.atoms.map((k) => {
								const p = pos(k);
								const share = 1 / it.glow!.atoms.length;
								const r = 30 + 12 * share + idlePulse(frame, 70) * 4;
								return <circle key={`g${k}`} cx={p.x} cy={p.y} r={r} fill={`url(#${ID}-glow)`} opacity={glowIn * (0.35 + 0.65 * share)} />;
							})}

						<g opacity={shown} transform={`translate(${mx}, ${my}) scale(${0.6 + 0.4 * shown}) translate(${-mx}, ${-my})`}>
							<Mol
								id={ID}
								mol={spec}
								x={mx}
								y={my}
								bond={bond}
								ballScale={c.ball}
								highlight={it.highlight ?? []}
								highlightOpacity={hl || 0}
								frame={frame}
								flipX={it.flipX}
							/>
							{it.lonePair && (() => {
								const p = pos(it.lonePair.atom);
								return <LonePair x={p.x} y={p.y} angle={it.lonePair.angle} dist={30 * c.ball} opacity={fadeAt(frame, it.lonePair.at, 12)} />;
							})()}
						</g>

						{/* cut line through one bond */}
						{it.cut && cutIn > 0 && (() => {
							const [a, b] = spec.bonds[it.cut.bond];
							const pa = pos(a);
							const pb = pos(b);
							const x = (pa.x + pb.x) / 2;
							const y = (pa.y + pb.y) / 2;
							const len = 150 * cutIn;
							const leftX = (Math.min(...spec.atoms.map((_, k) => pos(k).x)) + x) / 2;
							const rightX = (Math.max(...spec.atoms.map((_, k) => pos(k).x)) + x) / 2;
							return (
								<g>
									<line x1={x} y1={y - len / 2 - 20} x2={x} y2={y + len / 2} stroke={TOK.amber} strokeWidth={4} strokeDasharray="10 7" strokeLinecap="round" />
									<text x={x} y={y - len / 2 - 30} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={cutIn}>✂ cut here</text>
									<g opacity={fadeAt(frame, it.cut.leftAt ?? it.cut.at + 30, 14)}>
										<text x={leftX - 18} y={y + 118} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{it.cut.left}</text>
										{it.cut.leftSub && <text x={leftX - 18} y={y + 144} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{it.cut.leftSub}</text>}
									</g>
									<g opacity={fadeAt(frame, it.cut.rightAt ?? it.cut.at + 60, 14)}>
										<text x={rightX + 18} y={y + 118} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{it.cut.right}</text>
										{it.cut.rightSub && <text x={rightX + 18} y={y + 144} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{it.cut.rightSub}</text>}
									</g>
								</g>
							);
						})()}

						{it.tag && (
							<Chip
								x={c.cx}
								y={c.tagY}
								text={it.tag.text}
								color={it.tag.amber ? TOK.amberInk : theme.accent}
								size={four ? 18 : 20}
								opacity={fadeAt(frame, it.tag.at, 12)}
							/>
						)}
						{!it.cut && (
							<g opacity={fadeAt(frame, at + 6, 12)}>
								<text x={c.cx} y={c.nameY} textAnchor="middle" fill={TOK.ink} fontSize={four || items.length === 3 ? 22 : 26} fontWeight={800}>
									{it.name}
								</text>
								{it.sub && (
									<text x={c.cx} y={c.nameY + (four ? 24 : 30)} textAnchor="middle" fill={TOK.inkDim} fontSize={four || items.length === 3 ? 18 : 21} fontWeight={700}>
										{it.sub}
									</text>
								)}
							</g>
						)}
						{it.cut && it.name && (
							<text x={c.cx} y={H - 70} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, at + 6, 12)}>
								{it.name}
							</text>
						)}
					</g>
				);
			})}

			{footer && (
				<text x={W / 2} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={24} fontWeight={800} opacity={fadeAt(frame, footer.at, 14)}>
					{footer.text}
				</text>
			)}
		</svg>
	);
};
