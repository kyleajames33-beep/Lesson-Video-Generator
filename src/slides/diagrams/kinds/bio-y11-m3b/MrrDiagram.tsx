// MrrDiagram (bio11m3Mrr) — mark–release–recapture and the Lincoln index.
//
// A population of mobile animals (or beans, in the class model) crowds a
// stone plinth: nobody can count it. On the narration's beats:
//   capture1  M animals are caught into the left tray (drawn one per animal)
//   mark      each gets a harmless amber mark
//   release   they go back and mix through the population; the crowd on the
//             plinth now shows marked animals in the proportion M ÷ N
//             (COMPUTED from the props' own answer, so the picture and the
//             maths agree)
//   capture2  a second catch of C lands in the right tray, R of them marked
//             (drawn exactly)
//   ratio     R ÷ C = M ÷ N: the marked fraction in the sample stands for the
//             marked fraction of the whole population
//   solve     N = (M × C) ÷ R, with the number COMPUTED from M, C and R.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Footer, H, Title, W, clamp, easeT, fadeAt, popAt, type FooterLine} from './shared';
import {EcoGloss, EcoIcon, type AnyIconName} from './icons';

export type MrrProps = {
	title?: string;
	M: number;
	C: number;
	R: number;
	organism?: AnyIconName;
	noun?: string;
	beats?: Partial<{pop: number; capture1: number; mark: number; release: number; capture2: number; ratio: number; solve: number}>;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3mrr';
const hash = (n: number) => {
	const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
	return x - Math.floor(x);
};

const Tray = ({x, y, w, h, label, n, marked, organism, frame, start, fps, cols}: {
	x: number; y: number; w: number; h: number; label: string; n: number; marked: number; organism: AnyIconName; frame: number; start: number; fps: number; cols: number;
}) => {
	const rows = Math.ceil(n / cols);
	const cw = (w - 16) / cols;
	const rh = Math.min(22, (h - 16) / rows);
	return (
		<g opacity={fadeAt(frame, start, 12)}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill="#eeebe5" stroke="#bdb8ae" strokeWidth={2.5} />
			<rect x={x} y={y + h} width={w} height={8} rx={4} fill="#b3afa7" />
			{Array.from({length: n}, (_, k) => {
				const r = Math.floor(k / cols);
				const c = k % cols;
				const p = popAt(frame, fps, start + 4 + k * 0.8);
				const isM = k < marked;
				const tx = x + 8 + cw * (c + 0.5);
				const ty = y + 10 + rh * (r + 0.5);
				return (
					<g key={k}>
						{isM && <circle cx={tx} cy={ty} r={9} fill="none" stroke={TOK.amber} strokeWidth={3} />}
						<EcoIcon id={ID} name={organism} x={tx} y={ty} s={0.2 * Math.min(1, p)} frame={frame} opts={{marked: isM}} />
					</g>
				);
			})}
			<text x={x + w / 2} y={y + h + 30} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{label}</text>
		</g>
	);
};

export const MrrDiagram = ({title, M, C, R, organism = 'beetle', noun = 'animals', beats = {}, footer = [], delay = 62}: MrrProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const b = {pop: 0, capture1: 40, mark: 80, release: 110, capture2: 160, ratio: 220, solve: 280, ...beats};
	const top = title ? 50 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const pulse = idlePulse(frame);
	const N = (M * C) / R;
	const Nr = Math.round(N);

	// plinth crowd: 44 tokens; after release the marked share is M / N
	const crowdN = 44;
	const crowdMarked = Math.round((crowdN * M) / N);
	const pcx = 380;
	const pcy = top + 250;
	const prx = 150;
	const crowd = Array.from({length: crowdN}, (_, i) => {
		const a = hash(i * 3 + 1) * Math.PI * 2;
		const rr = Math.sqrt(hash(i * 7 + 2)) * 0.82;
		return {x: pcx + Math.cos(a) * rr * prx, y: pcy - 16 + Math.sin(a) * rr * prx * 0.3, i};
	});
	const released = frame > b.release;
	const mixT = easeT(frame, b.release, b.release + 36);

	const trayW = 190;
	const trayH = 150;
	const trayY = top + 30;
	const cols = 10;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Mark–release–recapture'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, b.pop, 14)}>
				<DioramaPlinth id={`${ID}p`} cx={pcx} cy={pcy} rx={prx} />
				{crowd.map((c, k) => {
					const isMarked = released && k < crowdMarked;
					const wander = mixT < 1 ? 0 : idleBob(frame, k, 3);
					const showMark = isMarked && fadeAt(frame, b.release + 20 + k, 8) > 0.5;
					const cy2 = c.y + idleBob(frame, k + 50, 1.2);
					return (
						<g key={k}>
							{showMark && <circle cx={c.x + wander} cy={cy2} r={10} fill="none" stroke={TOK.amber} strokeWidth={3} />}
							<EcoIcon id={ID} name={organism} x={c.x + wander} y={cy2} s={0.22} frame={frame} opts={{marked: showMark}} />
						</g>
					);
				})}
				<text x={pcx} y={pcy + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{`population: N = ?`}</text>
			</g>
			{/* first catch */}
			{frame > b.capture1 && (
				<g opacity={1 - interpolate(frame, [b.release, b.release + 30], [0, 0.55], clamp)}>
					<Tray x={16} y={trayY} w={trayW} h={trayH} label={`1st catch: M = ${M}`} n={M} marked={frame > b.mark ? Math.round(M * easeT(frame, b.mark, b.mark + 24)) : 0} organism={organism} frame={frame} start={b.capture1} fps={fps} cols={cols} />
					{frame > b.mark && <text x={16 + trayW / 2} y={trayY + trayH + 52} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, b.mark, 12)}>marked, then released</text>}
				</g>
			)}
			{/* second catch */}
			{frame > b.capture2 && (
				<g>
					<Tray x={W - 16 - trayW} y={trayY} w={trayW} h={trayH} label={`2nd catch: C = ${C}`} n={C} marked={R} organism={organism} frame={frame} start={b.capture2} fps={fps} cols={cols} />
					<text x={W - 16 - trayW / 2} y={trayY + trayH + 52} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.capture2 + 40, 12)}>{`marked: R = ${R}`}</text>
				</g>
			)}
			{/* the ratio and the answer */}
			{frame > b.ratio && (
				<g opacity={fadeAt(frame, b.ratio, 14)}>
					<text x={W / 2} y={H - footH - 62} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{`R ÷ C = M ÷ N   →   ${R} ÷ ${C} = ${M} ÷ N`}</text>
				</g>
			)}
			{frame > b.solve && (
				<g opacity={fadeAt(frame, b.solve, 14)}>
					<rect x={W / 2 - 250} y={H - footH - 46} width={500} height={40} rx={10} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
					<text x={W / 2} y={H - footH - 18} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>{`N = (M × C) ÷ R = (${M} × ${C}) ÷ ${R} ≈ ${Nr} ${noun}`}</text>
				</g>
			)}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
