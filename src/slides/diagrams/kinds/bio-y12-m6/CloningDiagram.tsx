// CloningDiagram — what cloning copies, and how nuclear transfer works.
//
// Modes:
//   scnt     Somatic cell nuclear transfer, step by step on one stage: a
//            pipette draws the egg's own nucleus out (rose), a donor body cell's
//            nucleus (blue) goes in, the egg is stimulated and divides
//            (1 → 2 → 4 → 8 cells, every nucleus blue: the donor's genotype),
//            and the embryo is implanted in a surrogate. Step chips track it.
//   compare  Whole-organism cloning copies a whole nucleus (every chromosome);
//            gene cloning copies one selected sequence many times.
// Frames relative to `delay`.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, BLUE, GlossDefs, ROSE, clamp, ease, fadeAt, popAt, textWidth} from './shared';

export type CloningProps = {
	mode: 'scnt' | 'compare';
	steps?: {label: string; tool?: string; at: number}[];
	panels?: {title: string; at: number; tag: string}[];
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6clone';
const W = 760;
const H = 530;
const EGG = '#f4e6d4';

const Nucleus = ({x, y, r, color, o = 1}: {x: number; y: number; r: number; color: string; o?: number}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={`url(#${ID}-g-${color === BLUE ? 'donor' : 'egg'})`} stroke="rgba(0,0,0,0.3)" />
	</g>
);

const Sheep = ({x, y, o}: {x: number; y: number; o: number}) => (
	<g opacity={o} transform={`translate(${x},${y})`}>
		<ellipse cx={4} cy={58} rx={78} ry={11} fill="rgba(40,36,30,0.18)" />
		{[-34, -14, 14, 34].map((lx, i) => <rect key={i} x={lx - 5} y={20} width={10} height={36} rx={4} fill="#4a4a4f" />)}
		{[[-44, -6], [-22, -20], [4, -24], [30, -18], [48, -2], [30, 14], [2, 18], [-26, 14]].map(([cx, cy], i) => (
			<circle key={i} cx={cx} cy={cy} r={24} fill={`url(#${ID}-g-wool)`} />
		))}
		<circle cx={0} cy={-2} r={34} fill={`url(#${ID}-g-wool)`} />
		<ellipse cx={-78} cy={-18} rx={20} ry={16} fill="#4a4a4f" />
		<ellipse cx={-66} cy={-30} rx={9} ry={5} fill="#4a4a4f" transform="rotate(-30 -66 -30)" />
		<circle cx={-84} cy={-21} r={2.5} fill="#fff" />
	</g>
);

const Chips = ({steps, frame, fps, accent}: {steps: {label: string; tool?: string; at: number}[]; frame: number; fps: number; accent: string}) => {
	const anyTool = steps.some((s) => s.tool);
	const ws = steps.map((s) => Math.max(textWidth(s.label, 17), s.tool ? textWidth(s.tool, 15) : 0) + 24);
	const gap = 12;
	const total = ws.reduce((a, b) => a + b, 0) + gap * (ws.length - 1);
	let x = W / 2 - total / 2;
	return (
		<g>
			{steps.map((s, i) => {
				const cx = x + ws[i] / 2;
				x += ws[i] + gap;
				const on = frame >= s.at;
				const current = on && (i === steps.length - 1 || frame < steps[i + 1].at);
				const p = Math.min(1, popAt(frame, fps, s.at));
				return (
					<g key={i} opacity={0.35 + 0.65 * p}>
						<rect x={cx - ws[i] / 2} y={14} width={ws[i]} height={anyTool ? 54 : 34} rx={12} fill={on ? '#ffffff' : '#f1f3f6'} stroke={current ? accent : TOK.inkMute} strokeWidth={current ? 3 : 1.5} />
						<text x={cx} y={37} textAnchor="middle" fill={on ? accent : TOK.inkDim} fontSize={17} fontWeight={800}>{s.label}</text>
						{s.tool && <text x={cx} y={58} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{s.tool}</text>}
					</g>
				);
			})}
		</g>
	);
};

export const CloningDiagram = ({mode, steps = [], panels = [], footer, delay = 62}: CloningProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const foot = footer && (
		<text x={W / 2} y={H - 12} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
	);
	const defs = (
		<>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{egg: ROSE, donor: BLUE, eggcell: EGG, body: '#d4e6f4', wool: '#f3f1ea', gene: AMBER}} />
		</>
	);

	if (mode === 'compare') {
		const [pL, pR] = panels;
		const cxs = [190, 570];
		const rods = [[-30, -18, 0], [-6, -22, 12], [18, -14, -10], [-22, 14, 20], [4, 18, -6], [26, 12, 8]];
		const nucleus = (x: number, y: number, s: number, key: string, o = 1) => (
			<g key={key} opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
				<circle r={58} fill="#e3eef8" stroke="rgba(60,90,120,0.45)" strokeWidth={2} />
				{rods.map(([dx, dy, rot], k) => (
					<rect key={k} x={dx - 5} y={dy - 16} width={10} height={32} rx={5} fill={BLUE} stroke="rgba(0,0,0,0.25)" transform={`rotate(${rot} ${dx} ${dy})`} />
				))}
			</g>
		);
		const tL = ease(frame, (pL?.at ?? 0) + 30, (pL?.at ?? 0) + 70);
		const tR = (pR?.at ?? 200) + 30;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Whole genome versus single sequence" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				{defs}
				{pL && (
					<g opacity={fadeAt(frame, pL.at)}>
						<text x={cxs[0]} y={44} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{pL.title}</text>
						<DioramaPlinth id={`${ID}lp`} cx={cxs[0]} cy={262} rx={150} />
						{nucleus(cxs[0] - 60 * tL, 196 + idleBob(frame, 1, 1.2), 1, 'a')}
						{tL > 0 && nucleus(cxs[0] + 60 * tL, 196 + idleBob(frame, 2, 1.2), 1, 'b', tL)}
						<text x={cxs[0]} y={376} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, pL.at + 20)}>every chromosome copied</text>
						<g opacity={fadeAt(frame, pL.at + 70)} transform={`translate(${cxs[0]},420)`}>
							<rect x={-(textWidth(pL.tag, 17) + 26) / 2} y={-16} width={textWidth(pL.tag, 17) + 26} height={32} rx={16} fill="#fff" stroke={BLUE} strokeWidth={2} />
							<text y={6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{pL.tag}</text>
						</g>
					</g>
				)}
				<line x1={W / 2} y1={70} x2={W / 2} y2={450} stroke={TOK.inkMute} strokeOpacity={0.35} strokeWidth={2} strokeDasharray="4 8" />
				{pR && (
					<g opacity={fadeAt(frame, pR.at)}>
						<text x={cxs[1]} y={44} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{pR.title}</text>
						<DioramaPlinth id={`${ID}rp`} cx={cxs[1]} cy={262} rx={150} />
						{/* a chromosome with one amber gene; the gene alone is copied */}
						<rect x={cxs[1] - 110} y={100} width={220} height={26} rx={13} fill={BLUE} stroke="rgba(0,0,0,0.25)" />
						<rect x={cxs[1] - 16} y={100} width={40} height={26} fill={AMBER} />
						<text x={cxs[1] + 4} y={90} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>one gene</text>
						{Array.from({length: 8}, (_, k) => {
							const p = Math.min(1, popAt(frame, fps, tR + k * 8));
							const col = k % 4;
							const row = Math.floor(k / 4);
							return (
								<g key={k} opacity={p} transform={`translate(${cxs[1] - 76 + col * 50},${214 + row * 36 + idleBob(frame, k + 20, 1)}) scale(${p})`}>
									<rect x={-20} y={-10} width={40} height={20} rx={5} fill={`url(#${ID}-g-gene)`} stroke="rgba(0,0,0,0.25)" />
								</g>
							);
						})}
						<text x={cxs[1]} y={376} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, tR)}>many copies of it</text>
						<g opacity={fadeAt(frame, tR + 60)} transform={`translate(${cxs[1]},420)`}>
							<rect x={-(textWidth(pR.tag, 17) + 26) / 2} y={-16} width={textWidth(pR.tag, 17) + 26} height={32} rx={16} fill="#fff6e6" stroke={AMBER} strokeWidth={2.5 + idlePulse(frame)} />
							<text y={6} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{pR.tag}</text>
						</g>
					</g>
				)}
				{foot}
			</svg>
		);
	}

	// ── scnt ────────────────────────────────────────────────────────────────
	const [s1, s2, s3, s4] = steps.map((s) => s.at);
	const EX = 250;
	const EY = 262;
	const ER = 78;
	const DX = 560;
	const DY = 190;
	const out = ease(frame, s1 + 10, s1 + 50); // egg nucleus drawn out
	const inn = ease(frame, s2 + 10, s2 + 56); // donor nucleus moved in
	const div = interpolate(frame, [s3 + 10, s3 + 70], [0, 3], clamp); // 0..3 divisions
	const cells = 2 ** Math.floor(div + 0.001);
	const imp = ease(frame, s4 + 10, s4 + 60);
	const SX = 590;
	const SY = 330;
	// embryo cluster offsets
	const pack = (n: number) => {
		if (n === 1) return [[0, 0]];
		if (n === 2) return [[-22, 0], [22, 0]];
		if (n === 4) return [[-20, -20], [20, -20], [-20, 20], [20, 20]];
		return [[-28, -24], [0, -30], [28, -24], [-32, 4], [32, 4], [-16, 28], [16, 28], [0, 0]];
	};
	const cr = cells === 1 ? ER : cells === 2 ? 40 : cells === 4 ? 30 : 22;
	const embX = EX + (SX - 2 - EX) * imp;
	const settle = cells === 1 ? 0 : cells === 2 ? 38 : cells === 4 ? 26 : 22;
	const embY = EY + settle * (1 - imp) + (SY - 2 - EY) * imp - Math.sin(imp * Math.PI) * 60;
	const embS = 1 - imp * 0.72;
	const eggLabel = frame < s1 + 40 ? 'egg cell' : frame < s2 + 50 ? 'empty egg' : frame < s3 + 10 ? 'egg + donor nucleus' : 'embryo';
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Somatic cell nuclear transfer" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{defs}
			<Chips steps={steps} frame={frame} fps={fps} accent={theme.accent} />
			<g opacity={1 - 0.65 * fadeAt(frame, s4 + 40, 20)}>
				<DioramaPlinth id={`${ID}ep`} cx={EX} cy={EY + ER + 18} rx={126} />
			</g>
			<text x={EX} y={EY + ER + 84} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={1 - imp}>{eggLabel}</text>
			{/* pipette for removal (left) */}
			<g opacity={fadeAt(frame, s1 - 6) * (1 - fadeAt(frame, s1 + 56, 12))}>
				<path d={`M ${EX - 250} ${EY - 30} L ${EX - 40 + (1 - out) * 10} ${EY - 6} L ${EX - 40 + (1 - out) * 10} ${EY + 4} L ${EX - 250} ${EY - 16} Z`} fill="#d9eaf5" stroke="rgba(70,110,140,0.6)" strokeWidth={1.5} />
			</g>
			{/* donor body cell (right) and its nucleus moving into the egg */}
			<g opacity={fadeAt(frame, s2 - 30) * (1 - fadeAt(frame, s3, 20))}>
				<DioramaPlinth id={`${ID}dp`} cx={DX} cy={DY + 64} rx={78} />
				<circle cx={DX} cy={DY + idleBob(frame, 4, 1)} r={46} fill={`url(#${ID}-g-body)`} stroke="rgba(60,90,120,0.45)" strokeWidth={1.5} />
				<text x={DX} y={DY + 118} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>donor body cell</text>
			</g>
			{frame >= s2 - 30 && inn < 1 && (
				<g>
					<Nucleus x={DX + (EX - DX) * inn} y={DY + (EY - DY) * inn - Math.sin(inn * Math.PI) * 50} r={18 + 4 * inn} color={BLUE} />
					{inn > 0.05 && (
						<text x={DX + (EX - DX) * inn} y={DY + (EY - DY) * inn - Math.sin(inn * Math.PI) * 50 - 30} textAnchor="middle" fill={BLUE} fontSize={16} fontWeight={800}>donor nucleus</text>
					)}
				</g>
			)}
			{/* stimulation spark */}
			<g opacity={fadeAt(frame, s3 - 4) * (1 - fadeAt(frame, s3 + 40, 14))}>
				{[0, 1, 2, 3, 4, 5].map((k) => {
					const a = (k / 6) * Math.PI * 2 + frame / 20;
					return <line key={k} x1={EX + Math.cos(a) * (ER + 8)} y1={EY + Math.sin(a) * (ER + 8)} x2={EX + Math.cos(a) * (ER + 22)} y2={EY + Math.sin(a) * (ER + 22)} stroke={AMBER} strokeWidth={3} strokeLinecap="round" />;
				})}
			</g>
			{/* surrogate */}
			<g opacity={fadeAt(frame, s4 - 20)}>
				<DioramaPlinth id={`${ID}sp`} cx={SX} cy={SY + 64} rx={120} />
				<Sheep x={SX} y={SY} o={1} />
				<text x={SX} y={SY + 122} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>surrogate mother</text>
			</g>
			{imp > 0.6 && <circle cx={SX - 2} cy={SY - 2} r={30} fill="#fbeff0" stroke={ROSE} strokeWidth={2} opacity={fadeAt(frame, s4 + 40, 10)} />}
			{/* the egg / embryo */}
			<g transform={`translate(${embX},${embY + idleBob(frame, 1, 1.2)}) scale(${embS})`}>
				{pack(cells).map(([dx, dy], k) => (
					<g key={k}>
						<circle cx={dx} cy={dy} r={cr} fill={`url(#${ID}-g-eggcell)`} stroke="rgba(120,90,50,0.45)" strokeWidth={1.5} />
						{(cells > 1 || inn >= 1) && <Nucleus x={dx} y={dy} r={cells === 1 ? 22 : cr * 0.34} color={BLUE} />}
					</g>
				))}
				{cells === 1 && out < 1 && <Nucleus x={-out * 150} y={-out * 20} r={22} color={ROSE} o={1 - fadeAt(frame, s1 + 44, 10)} />}
			</g>
			{imp >= 1 && (
				<text x={SX} y={SY - 70} textAnchor="middle" fill={BLUE} fontSize={17} fontWeight={800} opacity={fadeAt(frame, s4 + 60)}>
					embryo with the donor&apos;s genotype
				</text>
			)}
			{foot}
		</svg>
	);
};
