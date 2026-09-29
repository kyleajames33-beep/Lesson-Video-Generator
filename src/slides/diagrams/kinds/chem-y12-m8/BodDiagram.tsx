// BodDiagram — biochemical oxygen demand, BOD₅ (Chem Y12 M8 L7 concept-bod).
//
// Two sealed BOD bottles are filled from the same water sample (O₂, organic
// matter, microbes). The left bottle's DO is measured at the start; the right
// one goes into a dark incubator at 20 °C for 5 days while microbes decompose
// the organic matter and use up O₂. It comes out with fewer O₂ (the used ones
// are drawn as dashed ghosts), then BOD₅ = initial DO − final DO appears, then
// a BOD scale in mg L⁻¹ with the scene's bands (under 2 clean, 2 to 8 moderate,
// above 8 heavy). Amber: BOD is oxygen consumed, not oxygen present.
// No DO readings are invented: DO is shown only as a count of O₂ molecules.
//
// Beats (frames after `delay`): [bottles, incubate, initial DO, final DO/formula,
// scale, clean, moderate, heavy, key point]

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {clamp, ease, pop, ramp} from './shared';
import {Bacterium, O2, Organic, Tag, WATER, wander} from './water-parts';

export type BodProps = {
	delay?: number;
	/** Frames after `delay`: [bottles, incubate, initial DO, final DO + formula, scale, clean, moderate, heavy, key]. */
	beats?: number[];
};

const ID = 'c12m8bod';
const W = 760;
const H = 530;
const DEFAULT_BEATS = [72, 258, 364, 409, 480, 524, 595, 648, 799];
const N_O2 = 12;
const N_LEFT = 4; // O₂ still present after 5 days (a drawing count, not a reading)

const Bottle = ({cx, base, children, clipId}: {cx: number; base: number; children?: ReactNode; clipId: string}) => {
	const bw = 120, bh = 132, nw = 36, nh = 40;
	const top = base - bh;
	const body = `M ${cx - bw / 2} ${base - 16} Q ${cx - bw / 2} ${base} ${cx - bw / 2 + 16} ${base} L ${cx + bw / 2 - 16} ${base} Q ${cx + bw / 2} ${base} ${cx + bw / 2} ${base - 16} L ${cx + bw / 2} ${top + 22} Q ${cx + bw / 2} ${top} ${cx + nw / 2} ${top - 6} L ${cx + nw / 2} ${top - nh} L ${cx - nw / 2} ${top - nh} L ${cx - nw / 2} ${top - 6} Q ${cx - bw / 2} ${top} ${cx - bw / 2} ${top + 22} Z`;
	return (
		<g>
			<defs>
				<clipPath id={clipId}>
					<path d={body} />
				</clipPath>
			</defs>
			<ellipse cx={cx + 6} cy={base + 4} rx={bw * 0.55} ry={8} fill="rgba(40,36,30,0.2)" />
			{/* filled to the brim (no air gap), sealed */}
			<path d={body} fill="rgba(140,200,234,0.42)" />
			<g clipPath={`url(#${clipId})`}>{children}</g>
			<path d={body} fill="none" stroke={WATER.glass} strokeWidth={3} strokeLinejoin="round" />
			<rect x={cx - bw / 2 + 10} y={top + 20} width={7} height={bh - 44} rx={3.5} fill="#ffffff" opacity={0.5} />
			{/* ground-glass stopper */}
			<rect x={cx - nw / 2 - 4} y={top - nh - 16} width={nw + 8} height={18} rx={6} fill="#dfe5ea" stroke="#8d949b" strokeWidth={1.5} />
			<rect x={cx - 8} y={top - nh - 28} width={16} height={14} rx={4} fill="#dfe5ea" stroke="#8d949b" strokeWidth={1.5} />
		</g>
	);
};

export const BodDiagram = ({delay = 62, beats}: BodProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [tIn, tInc, tInit, tFinal, tScale, tClean, tMod, tHeavy, tKey] = beats && beats.length >= 9 ? beats : DEFAULT_BEATS;
	const base = 272;
	const bottles = [170, 430];
	const incDown = ease(interpolate(frame, [tInc - 20, tInc + 10], [0, 1], clamp));
	const incUp = ease(interpolate(frame, [tInc + 110, tInc + 140], [0, 1], clamp));
	const cover = incDown * (1 - incUp);
	const inside = frame >= tInc + 10; // right bottle's 5 days have run once the box is down
	const day = Math.min(5, Math.max(1, 1 + Math.floor(interpolate(frame, [tInc + 12, tInc + 100], [0, 4.99], clamp))));
	const key = ramp(frame, tKey, 16);

	const contents = (bi: number) => {
		const cx = bottles[bi];
		const x0 = cx - 48, x1 = cx + 48, y0 = base - 118, y1 = base - 18;
		const after = bi === 1 && inside;
		return (
			<>
				{Array.from({length: 6}, (_, i) => {
					const w = wander(i, frame, x0, x1, base - 40, y1, 0.3, 50 + bi);
					return <Organic key={`o${i}`} x={w.x} y={w.y} seed={i} opacity={after && i >= 2 ? 0 : 1} />;
				})}
				{Array.from({length: after ? 7 : 3}, (_, i) => {
					const w = wander(i, frame, x0, x1, y0 + 30, y1, 0.4, 60 + bi);
					return <Bacterium key={`b${i}`} x={w.x} y={w.y} angle={i * 50 + frame * 0.3} s={0.95} />;
				})}
				{Array.from({length: N_O2}, (_, i) => {
					const w = wander(i, frame, x0, x1, y0, y1 - 10, 0.7, 70 + bi);
					const gone = after && i >= N_LEFT;
					if (!gone) return <O2 key={`x${i}`} gid={ID} x={w.x} y={w.y} r={7.5} />;
					// used O₂: a dashed ghost where it was
					const g = wander(i, tInc + 10, x0, x1, y0, y1 - 10, 0.7, 70 + bi);
					const col = key > 0.5 ? TOK.amber : TOK.inkMute;
					return (
						<g key={`x${i}`} opacity={0.9} transform={`translate(${g.x + idleBob(frame, i, 1)},${g.y + idleBob(frame, i + 4, 1)})`}>
							{[-1, 1].map((k) => (
								<circle key={k} cx={k * 6} cy={0} r={7.5} fill="none" stroke={col} strokeWidth={key > 0.5 ? 2.2 : 1.6} strokeDasharray="3 3" />
							))}
						</g>
					);
				})}
			</>
		);
	};

	// BOD scale (mg L⁻¹): 0 → 12 drawn, bands from the scene.
	const SX0 = 90, PX = 50; // 50 px per mg L⁻¹
	const sx = (v: number) => SX0 + v * PX;
	const bands = [
		{a: 0, b: 2, t: tClean, color: theme.accent, label: 'clean'},
		{a: 2, b: 8, t: tMod, color: '#7f8a93', label: 'moderate pollution'},
		{a: 8, b: 12, t: tHeavy, color: '#b03a2e', label: 'heavy pollution'},
	];
	const BY = 424, BH = 34;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="BOD: two sealed bottles of the same sample; one is measured at the start, the other after 5 days at 20 °C in the dark. BOD₅ = initial DO − final DO. Under 2 mg per litre is clean, 2 to 8 moderate, above 8 heavy pollution." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O']} />

			{/* day labels */}
			<g opacity={ramp(frame, tIn, 14)}>
				<text x={bottles[0]} y={40} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>Day 0</text>
				<text x={bottles[1]} y={40} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={ramp(frame, tInc + 120, 14)}>Day 5</text>
				<text x={bottles[1]} y={40} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={800} opacity={1 - ramp(frame, tInc - 20, 14)}>same sample</text>
			</g>

			{bottles.map((cx, bi) => {
				const s = Math.min(1, pop(frame, fps, tIn + bi * 8));
				return (
					<g key={bi} opacity={s} transform={`translate(0,${(1 - s) * 20})`}>
						<DioramaPlinth id={`${ID}-p${bi}`} cx={cx} cy={base - 6} rx={100} />
						<Bottle cx={cx} base={base} clipId={`${ID}-clip${bi}`}>{contents(bi)}</Bottle>
					</g>
				);
			})}

			{/* incubator: dark box over the right bottle */}
			<g opacity={cover} transform={`translate(0,${-40 * (1 - incDown) - 40 * incUp})`}>
				<rect x={bottles[1] - 104} y={56} width={208} height={236} rx={14} fill="#26303a" stroke="#141b22" strokeWidth={2} />
				<rect x={bottles[1] - 92} y={68} width={184} height={40} rx={8} fill="#36424e" />
				<text x={bottles[1]} y={95} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={800}>20 °C · dark</text>
				<text x={bottles[1]} y={180} textAnchor="middle" fill="#ffffff" fontSize={34} fontWeight={800}>Day {day}</text>
				<text x={bottles[1]} y={214} textAnchor="middle" fill="#c9d3dc" fontSize={18} fontWeight={700}>microbes decompose</text>
				<text x={bottles[1]} y={236} textAnchor="middle" fill="#c9d3dc" fontSize={18} fontWeight={700}>organic matter</text>
			</g>

			{/* legend */}
			<g opacity={ramp(frame, tIn + 20, 14)}>
				<O2 gid={ID} x={600} y={104} r={9} />
				<text x={624} y={111} fill={TOK.ink} fontSize={19} fontWeight={800}>O₂</text>
				<Organic x={600} y={148} s={1.5} seed={2} />
				<text x={624} y={155} fill={TOK.ink} fontSize={19} fontWeight={800}>organic matter</text>
				<Bacterium x={600} y={192} s={1.2} angle={-20} />
				<text x={624} y={199} fill={TOK.ink} fontSize={19} fontWeight={800}>microbes</text>
			</g>
			<g opacity={ramp(frame, tInc + 130, 16)}>
				<g opacity={1 - key}>
					<g transform="translate(600,240)">
						{[-1, 1].map((k) => <circle key={k} cx={k * 6} cy={0} r={8} fill="none" stroke={TOK.inkMute} strokeWidth={1.8} strokeDasharray="3 3" />)}
					</g>
					<text x={624} y={247} fill={TOK.inkDim} fontSize={19} fontWeight={800}>O₂ used up</text>
				</g>
				<g opacity={key}>
					<Tag x={640} y={250} lines={['O₂ consumed', '= the BOD']} color={TOK.amber} textColor={TOK.amberInk} subColor={TOK.amberInk} size={20} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
				</g>
			</g>

			{/* measurement tags */}
			<g opacity={ramp(frame, tInit, 14)}>
				<Tag x={bottles[0]} y={336} lines={['initial DO']} color={theme.accent} size={19} />
			</g>
			<g opacity={ramp(frame, tFinal, 14)}>
				<Tag x={bottles[1]} y={336} lines={['final DO']} color={theme.accent} size={19} />
			</g>

			{/* formula */}
			<text x={W / 2} y={392} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={ramp(frame, tFinal + 10, 16)}>
				BOD₅ = initial DO − final DO
			</text>

			{/* BOD scale */}
			<g opacity={ramp(frame, tScale, 16)}>
				<rect x={sx(0)} y={BY} width={sx(12) - sx(0)} height={BH} rx={8} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				{bands.map((bd, i) => {
					const on = ramp(frame, bd.t, 16);
					const x = sx(bd.a) + (i === 0 ? 0 : 0);
					const w = (sx(bd.b) - sx(bd.a)) * on;
					return (
						<g key={i}>
							<path
								d={i === 2
									? `M ${x} ${BY} L ${x + w - 14} ${BY} L ${x + w} ${BY + BH / 2} L ${x + w - 14} ${BY + BH} L ${x} ${BY + BH} Z`
									: `M ${x + (i === 0 ? 8 : 0)} ${BY} L ${x + w} ${BY} L ${x + w} ${BY + BH} L ${x + (i === 0 ? 8 : 0)} ${BY + BH} ${i === 0 ? `Q ${x} ${BY + BH} ${x} ${BY + BH - 8} L ${x} ${BY + 8} Q ${x} ${BY} ${x + 8} ${BY}` : ''} Z`}
								fill={bd.color}
								opacity={w > 1 ? 1 : 0}
							/>
							<text x={(sx(bd.a) + sx(bd.b)) / 2 - (i === 2 ? 6 : 0)} y={BY + 23} textAnchor="middle" fill="#ffffff" fontSize={18} fontWeight={800} opacity={ramp(frame, bd.t + 10, 12)}>
								{bd.label}
							</text>
						</g>
					);
				})}
				{[0, 2, 8].map((v) => (
					<g key={v}>
						<line x1={sx(v)} y1={BY + BH} x2={sx(v)} y2={BY + BH + 8} stroke={TOK.inkDim} strokeWidth={2} />
						<text x={sx(v)} y={BY + BH + 28} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{v}</text>
					</g>
				))}
				<text x={sx(12)} y={BY + BH + 28} textAnchor="end" fill={TOK.inkDim} fontSize={18} fontWeight={800}>BOD₅ / mg L⁻¹</text>
			</g>

			{/* key point */}
			<g opacity={key}>
				<rect x={W / 2 - 250} y={494} width={500} height={34} rx={17} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
				<text x={W / 2} y={518} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>
					BOD = oxygen consumed, not oxygen present
				</text>
			</g>
		</svg>
	);
};
