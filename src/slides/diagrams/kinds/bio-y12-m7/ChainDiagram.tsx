// ChainDiagram (bio12m7Chain) — the chain of infection as real chain links.
//
// Glossy steel links form a closed loop, one per link of the chain (agent,
// reservoir, portal of exit, …), each appearing on its narration beat. A
// pathogen token travels round the loop from link to link. Then one link
// snaps (amber, pulled apart) and the token stops at the break: one broken
// link is enough. Optional `breakers` show how other links are broken too
// (layered measures), each as a chip under its link. All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, Mark, Title, W, clamp, fadeAt, popAt, textWidth, wrap} from './shared';
import {Icon} from './icons';

export type ChainProps = {
	title?: string;
	links: {name: string; at: number}[];
	snap: {index: number; at: number; text?: string};
	breakers?: {index: number; text: string; at: number}[];
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b12m7chn';
const ease = Easing.inOut(Easing.cubic);

export const ChainDiagram = ({title, links, snap, breakers = [], footer = [], delay = 62}: ChainProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const n = links.length;
	const C = {x: W / 2, y: top + 236};
	const RX = 246;
	const RY = 96;
	const ang = (i: number) => -Math.PI / 2 + (i / n) * Math.PI * 2;
	const pos = (i: number) => ({x: C.x + Math.cos(ang(i)) * RX, y: C.y + Math.sin(ang(i)) * RY});
	const snapT = interpolate(frame, [snap.at, snap.at + 30], [0, 1], {...clamp, easing: ease});
	// token: travels link to link as they appear, then keeps circling until the snap, then stops at the break
	const lastAt = links[n - 1].at;
	let tokenPos = 0;
	if (frame >= links[0].at) {
		const appeared = links.filter((l) => frame >= l.at).length;
		if (frame < lastAt + 20) {
			const i = appeared - 1;
			const t = interpolate(frame, [links[i].at, links[i].at + 24], [0, 1], {...clamp, easing: ease});
			tokenPos = Math.max(0, i - 1) + (i === 0 ? 0 : t);
		} else if (frame < snap.at) {
			tokenPos = (n - 1 + (frame - lastAt - 20) / 40) % n;
		} else {
			// run up to the gap before the broken link and stay there
			const stopAt = (snap.index - 0.45 + n) % n;
			tokenPos = stopAt;
		}
	}
	const tp = (() => {
		const i0 = Math.floor(tokenPos) % n;
		const f = tokenPos - Math.floor(tokenPos);
		const a0 = ang(i0);
		const a1 = ang(i0 + 1);
		const a = a0 + (a1 - a0) * f;
		return {x: C.x + Math.cos(a) * RX, y: C.y + Math.sin(a) * RY};
	})();

	const Link = ({i}: {i: number}) => {
		const p = pos(i);
		const a = ang(i) + Math.PI / 2;
		const isSnap = i === snap.index;
		const pop = popAt(frame, fps, links[i].at);
		if (pop <= 0) return null;
		const deg = (a * 180) / Math.PI;
		const halfGap = isSnap ? 14 * snapT : 0;
		const piece = (side: -1 | 1) => (
			<g transform={`translate(${p.x + Math.cos(a) * side * halfGap},${p.y + Math.sin(a) * side * halfGap}) rotate(${deg + (isSnap ? side * 14 * snapT : 0)})`}>
				<path
					d={isSnap && snapT > 0 ? (side < 0 ? 'M 0 -20 L -30 -20 A 20 20 0 0 0 -30 20 L 0 20' : 'M 0 -20 L 30 -20 A 20 20 0 0 1 30 20 L 0 20') : 'M -30 -20 L 30 -20 A 20 20 0 0 1 30 20 L -30 20 A 20 20 0 0 1 -30 -20 Z'}
					fill="none"
					stroke={`url(#${ID}-steel)`}
					strokeWidth={10}
					strokeLinecap="round"
				/>
				<path d="M -28 -18 L 28 -18" stroke="#ffffff" strokeOpacity={0.55} strokeWidth={2.5} strokeLinecap="round" />
			</g>
		);
		return (
			<g opacity={Math.min(1, pop * 1.4)} transform={`translate(0, ${(1 - Math.min(1, pop)) * -20})`}>
				{isSnap && snapT > 0 && <circle cx={p.x} cy={p.y} r={34 + pulse * 4} fill={TOK.amber} opacity={0.18} />}
				{isSnap && snapT > 0 ? (
					<>
						{piece(-1)}
						{piece(1)}
					</>
				) : (
					piece(1)
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'The chain of infection'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<defs>
				<linearGradient id={`${ID}-steel`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#dfe4ea" />
					<stop offset="45%" stopColor="#9aa4ae" />
					<stop offset="100%" stopColor="#5e6873" />
				</linearGradient>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={C.x} cy={C.y + 12} rx={330} />
			</g>
			{links.map((l, i) => {
				// an edge-on connector link between link i and i+1
				const a = (ang(i) + ang(i + 1)) / 2;
				const p = {x: C.x + Math.cos(a) * RX, y: C.y + Math.sin(a) * RY};
				const deg = ((a + Math.PI / 2) * 180) / Math.PI;
				const on = Math.min(fadeAt(frame, l.at), fadeAt(frame, links[(i + 1) % n].at));
				const nearSnap = (i === snap.index || (i + 1) % n === snap.index) && snapT > 0;
				return (
					<g key={`c${i}`} opacity={on} transform={`translate(${p.x},${p.y}) rotate(${deg})`}>
						<rect x={-62} y={-5} width={124} height={10} rx={5} fill={`url(#${ID}-steel)`} opacity={nearSnap ? 1 : 1} />
					</g>
				);
			})}
			{links.map((_, i) => (
				<Link key={i} i={i} />
			))}
			{/* link names, outside the loop */}
			{links.map((l, i) => {
				const a = ang(i);
				const p = {x: C.x + Math.cos(a) * (RX + 48), y: C.y + Math.sin(a) * (RY + 34)};
				const anchor = Math.abs(Math.cos(a)) < 0.3 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end';
				const lines = wrap(l.name, 14);
				const isSnap = i === snap.index && snapT > 0;
				return (
					<Lines key={i} x={p.x} y={p.y + (Math.sin(a) > 0.3 ? 14 : Math.sin(a) < -0.3 ? -((lines.length - 1) * 20) - 2 : 6 - (lines.length - 1) * 9)} lines={lines} size={18} color={isSnap ? TOK.amberInk : theme.accent} anchor={anchor} opacity={fadeAt(frame, l.at)} />
				);
			})}
			{/* pathogen token */}
			{frame >= links[0].at && <Icon id={ID} name="virus" x={tp.x} y={tp.y - 2 + idleBob(frame, 3, 1.2)} s={0.44} frame={frame} />}
			{snapT >= 1 && <Mark x={pos(snap.index).x + 26} y={pos(snap.index).y - 30} ok={false} r={13} />}
			{snap.text && <text x={C.x} y={C.y + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800} opacity={fadeAt(frame, snap.at + 20)}>{snap.text}</text>}
			{/* layered breakers */}
			{breakers.map((br, k) => {
				const a = ang(br.index);
				const pop = popAt(frame, fps, br.at);
				if (pop <= 0) return null;
				const w = textWidth(br.text, 15) + 22;
				const below = Math.sin(a) > 0.3;
				const lp = {x: C.x + Math.cos(a) * (RX + 48), y: C.y + Math.sin(a) * (RY + 34)};
				const nl = wrap(links[br.index].name, 14).length;
				const cx = Math.abs(Math.cos(a)) < 0.3 ? lp.x : Math.cos(a) > 0 ? Math.min(W - w / 2 - 4, lp.x + w / 2 - 20) : Math.max(w / 2 + 4, lp.x - w / 2 + 20);
				const cy = below ? lp.y + 14 + nl * 20 + 6 : lp.y + 6 + (nl - 1) * 11 + 26;
				return (
					<g key={k} transform={`translate(${cx},${cy}) scale(${Math.min(1, pop)})`}>
						<rect x={-w / 2} y={-14} width={w} height={28} rx={14} fill="#ffffff" stroke={TOK.amber} strokeWidth={2} />
						<text y={5} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>{br.text}</text>
					</g>
				);
			})}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
