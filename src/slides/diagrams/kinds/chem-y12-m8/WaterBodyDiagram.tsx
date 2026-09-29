// WaterBodyDiagram — a water body in a glass tank on a stone plinth, in five
// modes (Chem Y12 M8 L7 and L9):
//
//   oxygen      DO: O₂ dissolved in water supports fish, snails and microbes;
//               higher temperature, reduced mixing and microbial consumption
//               each lower DO; a DO gauge falls into the low zone (warning).
//               beats [organisms, temperature, mixing, consumption, warning]
//   nutrients   NO₃⁻ and PO₄³⁻: low levels = balanced tank; excess = bloom.
//               beats [nitrate, phosphate, balanced, excess, bloom, key point]
//   sources     three inputs into a lake: fertiliser runoff, sewage effluent,
//               detergents; the lake's O₂ balance tips.
//               beats [fertiliser, sewage, detergents, balance tips]
//   chain       eutrophication: loading → bloom → light blocked → plants die →
//               bacteria decompose (BOD ↑) → DO collapses → fish kill.
//               beats [loading, bloom, light, plants die, bacteria, BOD, hypoxia, fish kill, key]
//   management  prevention: buffer zones, precision agriculture, sewage upgrades
//               + wetlands cut the input; Lake Erie 2014 investment.
//               beats [preventative, buffer, precision, sewage, Erie, key]
//
// Beats are frames after `delay`, from the voiceover word positions
// (beatForWord in ./shared). Motion is analytic, so every frame is deterministic.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Mark, clamp, ease, hash01, pop, ramp} from './shared';
import {
	Alga, Bacterium, DoGauge, Dot, Fish, O2, Organic, Pipe, Plant, Snail, Sun, Tag, Tank, Thermometer, WATER, wander,
} from './water-parts';

export type WaterBodyMode = 'oxygen' | 'nutrients' | 'sources' | 'chain' | 'management';
export type WaterBodyProps = {
	delay?: number;
	mode?: WaterBodyMode;
	/** Frames after `delay`; meaning depends on the mode (see file header). */
	beats?: number[];
};

const DEFAULT_BEATS: Record<WaterBodyMode, number[]> = {
	oxygen: [247, 391, 482, 581, 690],
	nutrients: [365, 424, 432, 599, 691, 716],
	sources: [193, 331, 484, 607],
	chain: [166, 266, 400, 475, 559, 668, 710, 785, 902],
	management: [144, 256, 333, 466, 557, 697],
};

const W = 760;
const H = 530;

type ModeArgs = {id: string; frame: number; fps: number; b: number[]; accent: string};

// ───────────────────────────────────────────── oxygen (L7 concept) ──────
const OxygenMode = ({id, frame, fps, b, accent}: ModeArgs) => {
	const [tLife, tTemp, tMix, tUse, tWarn] = b;
	const TX = 70, TY = 110, TW = 440, TH = 280;
	const surf = TY + TH * 0.14;
	const bed = TY + TH - 26;
	const N = 14;
	// Fate of each O₂: 0 stays, 1 leaves (warmer water), 2 not replaced (less mixing), 3 used by microbes.
	const fate = [0, 3, 1, 2, 3, 1, 0, 2, 3, 1, 2, 3, 0, 1];
	const gone = (f: number) => (f === 1 ? tTemp : f === 2 ? tMix : f === 3 ? tUse : 1e6);
	const leave = (i: number) => ease(interpolate(frame, [gone(fate[i]), gone(fate[i]) + 70], [0, 1], clamp));
	const left = fate.filter((f, i) => leave(i) < 0.5).length;
	const level = (left / N) * 0.94;
	const bact = [
		{x: 180, y: bed - 6}, {x: 262, y: bed - 10}, {x: 340, y: bed - 4}, {x: 410, y: bed - 9}, {x: 222, y: bed - 18}, {x: 380, y: bed - 20},
	];
	const organic = [150, 200, 250, 300, 355, 430].map((x, i) => ({x, y: bed + 2 - (i % 2) * 5}));
	const warn = ramp(frame, tWarn, 20);
	const causes = [
		{t: tTemp, title: 'Higher temperature', sub: 'O₂ less soluble'},
		{t: tMix, title: 'Reduced mixing', sub: 'less O₂ in from air'},
		{t: tUse, title: 'More consumption', sub: 'microbes use up O₂'},
	];
	const mixArrows = 1 - ramp(frame, tMix, 30);
	const heat = ramp(frame, tTemp, 40);
	return (
		<>
			{/* intro line, replaced by the three causes */}
			<text x={W / 2} y={52} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={ramp(frame, 0) * (1 - ramp(frame, tTemp - 24, 16))}>
				Dissolved O₂: the supply aerobic life needs
			</text>
			{causes.map((c, i) => {
				const cx = 130 + i * 250;
				const on = pop(frame, fps, c.t);
				return (
					<g key={i} opacity={Math.min(1, on)} transform={`translate(${cx},44) scale(${0.9 + 0.1 * Math.min(1, on)}) translate(${-cx},-44)`}>
						<rect x={cx - 116} y={12} width={232} height={66} rx={14} fill="#ffffff" stroke={accent} strokeWidth={2.5} />
						<circle cx={cx - 100} cy={12} r={13} fill={accent} />
						<text x={cx - 100} y={18} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{i + 1}</text>
						<text x={cx} y={41} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{c.title}</text>
						<text x={cx} y={65} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{c.sub}</text>
					</g>
				);
			})}

			<DioramaPlinth id={id} cx={290} cy={380} rx={250} />
			<Tank
				id={`${id}-tank`}
				x={TX} y={TY} w={TW} h={TH}
				over={
					<g opacity={ramp(frame, 0) * (0.25 + 0.75 * mixArrows)}>
						{[190, 300, 410].map((x, i) => (
							<g key={x}>
								<O2 gid={id} x={x} y={TY + 12 + ((frame * 0.6 + i * 9) % 18) * mixArrows} r={6} opacity={mixArrows} />
								<Arrow x1={x + 20} y1={TY + 4} x2={x + 20} y2={surf + 10} color={accent} width={2.5} head={8} opacity={mixArrows} dash={mixArrows < 1 ? '4 4' : undefined} />
							</g>
						))}
					</g>
				}
			>
				{/* warm tint */}
				<rect x={TX} y={surf} width={TW} height={TH} fill="#f0a060" opacity={0.12 * heat} />
				{organic.map((o, i) => (
					<Organic key={i} x={o.x} y={o.y} seed={i} s={1.1} opacity={ramp(frame, tUse - 20, 20)} />
				))}
				{bact.map((p, i) => {
					const on = i < 2 ? ramp(frame, 0) : ramp(frame, tUse + i * 6, 14);
					return <Bacterium key={i} x={p.x + idleBob(frame, i, 3)} y={p.y + idleBob(frame, i + 9, 1.5)} angle={i * 37} s={1.1} opacity={on} />;
				})}
				{Array.from({length: N}, (_, i) => {
					const w = wander(i, frame, TX + 50, TX + TW - 30, surf + 16, bed - 40, 0.9, 3);
					const l = leave(i);
					let x = w.x, y = w.y, op = 1;
					if (fate[i] === 1) { y = w.y + (TY - 20 - w.y) * l; op = 1 - ramp(l, 0.6, 0.3); }
					if (fate[i] === 2) { op = 1 - l; }
					if (fate[i] === 3) {
						const t = bact[i % bact.length];
						x = w.x + (t.x - w.x) * l; y = w.y + (t.y - 10 - w.y) * l; op = 1 - ramp(l, 0.75, 0.25);
					}
					return <O2 key={i} gid={id} x={x} y={y} r={8} opacity={op * ramp(frame, i * 2, 10)} />;
				})}
				<Snail x={450} y={bed + 4} s={1.1} />
				{[0, 1].map((k) => {
					const base = wander(k, frame, TX + 90, TX + TW - 60, surf + 40, bed - 70, 0.7, 11);
					const up = ramp(frame, tWarn, 60);
					const y = base.y + (surf + 20 + k * 12 - base.y) * up;
					return <Fish key={k} x={base.x} y={y + idleBob(frame, k, 2)} dir={base.dir} s={k ? 0.95 : 1.15} color={k ? WATER.fish2 : WATER.fish} />;
				})}
			</Tank>
			<g opacity={ramp(frame, tTemp - 10, 20)}>
				<Thermometer x={TX + 26} top={TY + 50} h={130} level={0.3 + 0.55 * heat} />
			</g>
			{/* organisms highlight when named */}
			<g opacity={ramp(frame, tLife, 16) * (1 - ramp(frame, tTemp - 24, 16))}>
				<Tag x={TX + TW / 2} y={TY + TH + 40} lines={['fish · invertebrates · microbes']} color={accent} size={18} />
			</g>

			<DioramaPlinth id={`${id}-g`} cx={640} cy={372} rx={70} />
			<DoGauge x={636} top={150} h={210} level={level} okColor={accent} lowAt={0.3} pulse={idlePulse(frame)} opacity={ramp(frame, 4)} />

			<g opacity={warn}>
				<rect x={548} y={432} width={204} height={70} rx={14} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
				<text x={650} y={462} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>Low oxygen:</text>
				<text x={650} y={487} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>organisms in trouble</text>
			</g>
		</>
	);
};

// ───────────────────────────────────────── nutrients (L9 concept-nutrients) ──
const NutrientsMode = ({id, frame, fps, b, accent}: ModeArgs) => {
	const [tN, tP, tBal, tEx, tBloom, tKey] = b;
	const tanks = [
		{x: 32, label: 'Low levels', excess: false},
		{x: 418, label: 'Excess', excess: true},
	];
	const TY = 118, TW = 310, TH = 250;
	const surf = TY + TH * 0.14;
	const bed = TY + TH - 26;
	const bloom = ease(interpolate(frame, [tBloom - 20, tBloom + 80], [0, 1], clamp));
	return (
		<>
			<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={ramp(frame, 0) * (1 - ramp(frame, tN - 20, 14))}>
				Nitrogen and phosphorus: essential nutrients
			</text>
			<g opacity={ramp(frame, tN, 14)}>
				<Dot x={150} y={33} r={11} color={WATER.nitrate} />
				<text x={170} y={41} fill={TOK.ink} fontSize={22} fontWeight={800}>nitrate <tspan fill={WATER.nitrate}>NO₃⁻</tspan></text>
			</g>
			<g opacity={ramp(frame, tP, 14)}>
				<Dot x={420} y={33} r={11} color={WATER.phosphate} />
				<text x={440} y={41} fill={TOK.ink} fontSize={22} fontWeight={800}>phosphate <tspan fill={WATER.phosphate}>PO₄³⁻</tspan></text>
			</g>
			{tanks.map((t, ti) => {
				const nIons = t.excess ? 3 + Math.round(15 * ease(interpolate(frame, [tEx, tEx + 70], [0, 1], clamp))) : 3;
				const murk = t.excess ? 0.85 * bloom : 0;
				const nAlgae = t.excess ? 5 + Math.round(64 * bloom) : 5;
				const cx = t.x + TW / 2;
				return (
					<g key={ti}>
						<text x={cx} y={98} textAnchor="middle" fill={t.excess ? TOK.ink : accent} fontSize={22} fontWeight={800} opacity={ramp(frame, t.excess ? tEx : tBal, 14)}>
							{t.label}
						</text>
						<DioramaPlinth id={`${id}-p${ti}`} cx={cx} cy={358} rx={168} />
						<Tank id={`${id}-t${ti}`} x={t.x} y={TY} w={TW} h={TH} murk={murk}>
							{[0, 1, 2].map((k) => (
								<Plant key={k} x={t.x + 56 + k * 99} baseY={bed + 6} h={70 + k * 8} frame={frame} seed={k + ti * 3} />
							))}
							{Array.from({length: nAlgae}, (_, i) => {
								const inTop = i >= 5;
								const w = wander(i, frame, t.x + 20, t.x + TW - 20, surf + 8, inTop ? surf + 60 : bed - 30, 0.4, 20 + ti);
								const on = inTop ? pop(frame, fps, tBloom - 20 + (i - 5) * 1.2) : 1;
								return <Alga key={i} x={w.x} y={w.y} r={inTop ? 6.5 : 5.5} opacity={Math.min(1, on)} />;
							})}
							{Array.from({length: nIons * 2}, (_, i) => {
								const isN = i % 2 === 0;
								const w = wander(i, frame, t.x + 24, t.x + TW - 24, surf + 12, bed - 20, 0.8, 40 + ti);
								const first = i < 6;
								const tIn = first ? (isN ? tN : tP) : tEx + (i - 6) * 2;
								const drop = first ? 1 : ease(interpolate(frame, [tIn, tIn + 30], [0, 1], clamp));
								const y = first ? w.y : TY - 10 + (w.y - TY + 10) * drop;
								return <Dot key={i} x={w.x} y={y} r={6} color={isN ? WATER.nitrate : WATER.phosphate} opacity={ramp(frame, tIn, 10)} />;
							})}
							{[0, 1].map((k) => {
								const w = wander(k, frame, t.x + 60, t.x + TW - 50, surf + 70, bed - 60, 0.6, 7 + ti);
								return <Fish key={k} x={w.x} y={w.y} dir={w.dir} s={0.9} color={k ? WATER.fish2 : WATER.fish} />;
							})}
						</Tank>
						{t.excess && (
							<g opacity={ramp(frame, tEx - 6, 10) * (1 - ramp(frame, tEx + 90, 20))}>
								<Arrow x1={cx} y1={60} x2={cx} y2={TY + 30} color={WATER.phosphate} width={4} head={12} />
							</g>
						)}
					</g>
				);
			})}
			<g opacity={ramp(frame, tBal, 16)}>
				<Mark x={80} y={478} ok size={15} />
				<text x={104} y={485} fill={TOK.ink} fontSize={20} fontWeight={800}>Balanced ecosystem</text>
			</g>
			<g opacity={ramp(frame, tBloom, 16)}>
				<Mark x={452} y={478} ok={false} size={15} />
				<text x={476} y={485} fill={TOK.ink} fontSize={20} fontWeight={800}>Explosive algal growth</text>
			</g>
			<g opacity={ramp(frame, tKey, 16)}>
				<rect x={W / 2 - 280} y={498} width={560} height={30} rx={15} fill="#ffffff" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={W / 2} y={519} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>
					Same ions: helpful at low levels, harmful in excess
				</text>
			</g>
		</>
	);
};

// ───────────────────────────────────────── sources (L9 concept-sources) ──
const SourcesMode = ({id, frame, b}: ModeArgs) => {
	const [tF, tS, tD, tTip] = b;
	const LX = 60, LY = 238, LW = 460, LH = 168;
	const surf = LY + LH * 0.14;
	const bed = LY + LH - 22;
	const cols = [
		{x: 110, t: tF, title: 'Fertiliser runoff', sub: 'after heavy rain', ions: ['N', 'P'], organic: false, enter: 150},
		{x: 290, t: tS, title: 'Sewage effluent', sub: 'nutrients + organic matter', ions: ['N', 'P'], organic: true, enter: 290},
		{x: 470, t: tD, title: 'Detergents', sub: 'phosphate source', ions: ['P'], organic: false, enter: 430},
	];
	const tip = ease(interpolate(frame, [tTip, tTip + 70], [0, 1], clamp));
	const demand = cols.filter((c) => frame >= c.t + 20).length;
	const angle = 3 * demand * (1 - tip) + 16 * tip + Math.sin(frame / 30) * 0.6;
	return (
		<>
			{cols.map((c, ci) => {
				const on = ramp(frame, c.t, 14);
				const flow = ramp(frame, c.t + 10, 20);
				const topY = 150;
				return (
					<g key={ci} opacity={on}>
						<text x={c.x} y={26} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{c.title}</text>
						<text x={c.x} y={48} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{c.sub}</text>
						{ci === 0 && (
							<g>
								{/* rain cloud over a fertiliser sack */}
								{Array.from({length: 7}, (_, i) => {
									const y = 86 + ((frame * 2.2 + i * 13) % 34);
									return <line key={i} x1={78 + i * 10} y1={y} x2={75 + i * 10} y2={y + 7} stroke={WATER.cleanDeep} strokeWidth={2.5} strokeLinecap="round" />;
								})}
								<g fill="#e9edf1" stroke="#aab4be" strokeWidth={1.5}>
									<ellipse cx={92} cy={78} rx={24} ry={15} />
									<ellipse cx={122} cy={74} rx={26} ry={18} />
									<ellipse cx={108} cy={84} rx={34} ry={12} />
								</g>
								<path d="M 88 148 Q 84 120 94 114 L 128 114 Q 138 120 134 148 Z" fill="#e7d6a8" stroke="#b39c62" strokeWidth={1.5} />
								<path d="M 96 114 Q 111 106 126 114" fill="none" stroke="#b39c62" strokeWidth={2} />
								<rect x={98} y={126} width={26} height={12} rx={3} fill="#ffffff" opacity={0.6} />
							</g>
						)}
						{ci === 1 && <Pipe x1={200} y1={112} x2={286} y2={112} w={22} />}
						{ci === 2 && (
							<g>
								<rect x={452} y={84} width={36} height={60} rx={10} fill="#5b9bd5" stroke="#3b6f9e" strokeWidth={1.5} />
								<rect x={462} y={72} width={16} height={14} rx={3} fill="#e5e9ee" stroke="#8d949b" strokeWidth={1.2} />
								<rect x={458} y={100} width={8} height={32} rx={4} fill="#ffffff" opacity={0.45} />
								{[0, 1, 2].map((k) => (
									<circle key={k} cx={498 + k * 8} cy={88 - ((frame * 0.5 + k * 10) % 26)} r={4 + k} fill="none" stroke="#9cc3e6" strokeWidth={1.5} />
								))}
							</g>
						)}
						{/* stream into the lake */}
						<path
							d={ci === 1 ? `M 290 118 Q 294 180 ${c.enter} ${surf}` : `M ${c.x} ${topY} Q ${(c.x + c.enter) / 2} ${topY + 30} ${c.enter} ${surf}`}
							stroke={WATER.clean}
							strokeWidth={9}
							fill="none"
							strokeLinecap="round"
							opacity={0.8 * flow}
						/>
						{/* ion chip */}
						<g opacity={flow}>
							<rect x={c.x - (c.organic ? 108 : c.ions.length * 34 + 6)} y={170} width={c.organic ? 216 : c.ions.length * 68 + 12} height={32} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
							<text x={c.x} y={192} textAnchor="middle" fontSize={18} fontWeight={800}>
								{c.ions.includes('N') && <tspan fill={WATER.nitrate}>NO₃⁻ </tspan>}
								<tspan fill={WATER.phosphate}>PO₄³⁻</tspan>
								{c.organic && <tspan fill={WATER.organic}> + organic</tspan>}
							</text>
						</g>
					</g>
				);
			})}

			<DioramaPlinth id={id} cx={290} cy={392} rx={250} />
			<Tank id={`${id}-lake`} x={LX} y={LY} w={LW} h={LH} murk={0.4 * tip}>
				{[0, 1, 2, 3].map((k) => (
					<Plant key={k} x={LX + 70 + k * 110} baseY={bed + 8} h={52} frame={frame} seed={k} />
				))}
				{cols.map((c, ci) =>
					Array.from({length: 10}, (_, i) => {
						const kind = c.organic && i % 3 === 2 ? 'O' : c.ions.length === 1 ? 'P' : i % 2 === 0 ? 'N' : 'P';
						const tIn = c.t + 20 + i * 5;
						const d = ease(interpolate(frame, [tIn, tIn + 40], [0, 1], clamp));
						const w = wander(i + ci * 20, frame, LX + 24, LX + LW - 24, surf + 10, bed - 12, 0.7, 5);
						const x = c.enter + (w.x - c.enter) * d;
						const y = surf + (w.y - surf) * d;
						if (frame < tIn) return null;
						return kind === 'O' ? (
							<Organic key={`${ci}-${i}`} x={x} y={y} seed={i} />
						) : (
							<Dot key={`${ci}-${i}`} x={x} y={y} r={5.5} color={kind === 'N' ? WATER.nitrate : WATER.phosphate} />
						);
					}),
				)}
				{[0, 1].map((k) => {
					const w = wander(k, frame, LX + 80, LX + LW - 60, surf + 30, bed - 40, 0.6, 9);
					return <Fish key={k} x={w.x} y={w.y} dir={w.dir} s={0.85} color={k ? WATER.fish2 : WATER.fish} />;
				})}
			</Tank>
			<text x={LX + LW / 2} y={LY - 8} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={ramp(frame, 0)} letterSpacing="0.06em">
				LAKE
			</text>

			{/* O₂ balance: supply vs demand */}
			<g opacity={ramp(frame, 4)}>
				<DioramaPlinth id={`${id}-b`} cx={655} cy={432} rx={70} />
				<text x={655} y={256} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>O₂ balance</text>
				<path d="M 645 432 L 650 300 L 660 300 L 665 432 Z" fill="#8d949b" />
				<g transform={`rotate(${angle} 655 300)`}>
					<rect x={593} y={296} width={124} height={8} rx={4} fill="#6f777f" />
					{[-1, 1].map((k) => {
						const px = 655 + k * 56;
						return (
							<g key={k} transform={`rotate(${-angle} ${px} 300)`}>
								<line x1={px - 20} y1={340} x2={px} y2={300} stroke="#8d949b" strokeWidth={1.5} />
								<line x1={px + 20} y1={340} x2={px} y2={300} stroke="#8d949b" strokeWidth={1.5} />
								<path d={`M ${px - 26} 340 L ${px + 26} 340 Q ${px} 358 ${px - 26} 340 Z`} fill="#b3afa7" stroke="#8f8b83" strokeWidth={1.5} />
								{k < 0 ? (
									[0, 1].map((m) => <O2 key={m} gid={id} x={px - 9 + m * 18} y={332 - m * 0} r={6} />)
								) : (
									<g>
										{Array.from({length: demand + 3 * Math.round(tip)}, (_, m) => (
											<Organic key={m} x={px - 14 + (m % 4) * 9} y={333 - Math.floor(m / 4) * 8} seed={m} s={0.8} />
										))}
									</g>
								)}
							</g>
						);
					})}
				</g>
				<text x={599} y={400} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>O₂ in</text>
				<text x={711} y={400} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>O₂ used</text>
			</g>
			<g opacity={ramp(frame, tTip + 30, 16)}>
				<Tag x={655} y={494} lines={['Balance tips']} color={TOK.amber} textColor={TOK.amberInk} size={19} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>
		</>
	);
};

// ───────────────────────────────────────── chain (L9 concept-chain) ──
const ChainMode = ({id, frame, fps, b, accent}: ModeArgs) => {
	const [tLoad, tBloom, tLight, tDie, tBact, tBod, tHyp, tKill, tKey] = b;
	const TX = 30, TY = 118, TW = 510, TH = 270;
	const surf = TY + TH * 0.14;
	const bed = TY + TH - 26;
	const steps = [
		{t: tLoad, title: 'Nutrients', sub: 'NO₃⁻, PO₄³⁻ in'},
		{t: tBloom, title: 'Algal bloom', sub: 'blocks light'},
		{t: tDie, title: 'Plants die', sub: 'no light'},
		{t: tBact, title: 'Decomposition', sub: 'BOD rises'},
		{t: tHyp, title: 'Hypoxia', sub: 'fish die'},
	];
	const bloom = ease(interpolate(frame, [tBloom, tBloom + 110], [0, 1], clamp));
	const block = ease(interpolate(frame, [tLight, tLight + 60], [0, 1], clamp));
	const health = 1 - ease(interpolate(frame, [tDie, tDie + 60], [0, 1], clamp));
	const N = 16;
	const bactPos = Array.from({length: 12}, (_, i) => ({x: TX + 50 + i * 38 + hash01(i) * 12, y: bed - 4 - (i % 3) * 7}));
	const consumeAt = (i: number) => tBact + 20 + i * 11; // O₂ used one by one
	const used = (i: number) => (i < 14 ? ease(interpolate(frame, [consumeAt(i), consumeAt(i) + 40], [0, 1], clamp)) : 0);
	const left = Array.from({length: N}, (_, i) => i).filter((i) => used(i) < 0.5).length;
	const level = (left / N) * 0.94;
	const kill = ease(interpolate(frame, [tKill, tKill + 70], [0, 1], clamp));
	const key = ramp(frame, tKey, 16);
	return (
		<>
			{/* step tracker */}
			<line x1={90} y1={28} x2={670} y2={28} stroke={TOK.rule} strokeWidth={4} opacity={ramp(frame, 0)} />
			{steps.map((s, i) => {
				const on = ramp(frame, s.t, 14);
				const isKey = i === 3;
				const col = isKey ? TOK.amber : accent;
				const x = 90 + i * 145;
				return (
					<g key={i}>
						{i > 0 && <line x1={x - 145} y1={28} x2={x - 145 + 145 * on} y2={28} stroke={accent} strokeWidth={4} />}
						<circle cx={x} cy={28} r={15 + (isKey ? idlePulse(frame) * 2 * key : 0)} fill={on > 0.5 ? col : '#ffffff'} stroke={on > 0.1 ? col : TOK.inkMute} strokeWidth={2.5} opacity={ramp(frame, 0)} />
						<text x={x} y={34} textAnchor="middle" fill={on > 0.5 ? '#ffffff' : TOK.inkMute} fontSize={16} fontWeight={800} opacity={ramp(frame, 0)}>{i + 1}</text>
						<g opacity={0.35 + 0.65 * on}>
							<text x={x} y={67} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{s.title}</text>
							<text x={x} y={88} textAnchor="middle" fill={isKey ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={isKey ? 800 : 700}>{s.sub}</text>
						</g>
					</g>
				);
			})}

			<Sun x={594} y={126} r={18} frame={frame} opacity={ramp(frame, 0)} />
			<DioramaPlinth id={id} cx={285} cy={378} rx={268} />
			<Tank
				id={`${id}-tank`}
				x={TX} y={TY} w={TW} h={TH}
				murk={0.85 * bloom}
				dark={block}
				over={
					<g opacity={ramp(frame, tLoad - 20, 16)}>
						<Pipe x1={4} y1={TY + 10} x2={78} y2={TY + 10} w={18} />
					</g>
				}
			>
				{/* sunlight beams: cut off at the bloom once it blocks the light */}
				{[0, 1, 2].map((k) => {
					const x0 = 300 + k * 80;
					const reach = surf + (bed - surf) * (1 - block) + 34 * block;
					const len = (reach - surf) / (bed - surf);
					return (
						<path
							key={k}
							d={`M ${x0} ${surf} L ${x0 + 30} ${surf} L ${x0 + 30 - 110 * len} ${reach} L ${x0 - 110 * len} ${reach} Z`}
							fill="#fff3b0"
							opacity={0.35 * ramp(frame, 0)}
						/>
					);
				})}
				{/* nutrient stream from the pipe */}
				{Array.from({length: 18}, (_, i) => {
					const tIn = tLoad + i * 5;
					const d = ease(interpolate(frame, [tIn, tIn + 36], [0, 1], clamp));
					const w = wander(i, frame, TX + 30, TX + TW - 30, surf + 10, bed - 20, 0.6, 2);
					const x = 84 + (w.x - 84) * d;
					const y = TY + 16 + (w.y - TY - 16) * d;
					const eaten = 1 - ramp(frame, tBloom + 20 + i * 4, 20);
					return frame >= tIn ? <Dot key={i} x={x} y={y} r={4.5} color="#51606b" opacity={eaten} /> : null;
				})}
				{[0, 1, 2, 3].map((k) => {
					const px = TX + 80 + k * 115;
					const fall = ramp(frame, tDie + 110, 60) * 0.75;
					return (
						<g key={k}>
							<Plant x={px} baseY={bed + 8} h={92 + (k % 2) * 16} health={health} frame={frame} seed={k} opacity={1 - fall} />
						</g>
					);
				})}
				{/* dead biomass on the bed */}
				{Array.from({length: 14}, (_, i) => (
					<Organic key={i} x={TX + 50 + i * 32 + hash01(i + 4) * 10} y={bed + 1 - (i % 2) * 5} seed={i} s={1.1} opacity={ramp(frame, tDie + 40 + i * 2, 20) * (1 - 0.4 * ramp(frame, tBod + i * 6, 60))} />
				))}
				{/* the bloom */}
				{Array.from({length: 80}, (_, i) => {
					const w = wander(i, frame, TX + 12, TX + TW - 12, surf + 4, surf + 16 + 30 * ramp(i, 20, 60), 0.25, 30);
					const on = i < 6 ? 1 : pop(frame, fps, tBloom + (i - 6) * 1.3);
					return <Alga key={i} x={w.x} y={w.y} r={6} opacity={Math.min(1, on) * ramp(frame, 0)} />;
				})}
				{bactPos.map((p, i) => (
					<Bacterium key={i} x={p.x + idleBob(frame, i, 3)} y={p.y + idleBob(frame, i + 5, 1.4)} angle={i * 41} s={1.15} opacity={pop(frame, fps, tBact + i * 5) > 0.05 ? Math.min(1, pop(frame, fps, tBact + i * 5)) : 0} />
				))}
				{Array.from({length: N}, (_, i) => {
					const w = wander(i, frame, TX + 40, TX + TW - 40, surf + 60, bed - 36, 0.8, 8);
					const u = used(i);
					const t = bactPos[i % bactPos.length];
					return <O2 key={i} gid={id} x={w.x + (t.x - w.x) * u} y={w.y + (t.y - 8 - w.y) * u} r={7.5} opacity={1 - ramp(u, 0.75, 0.25)} />;
				})}
				{[0, 1, 2].map((k) => {
					const w = wander(k, frame, TX + 80, TX + TW - 70, surf + 60, bed - 60, 0.7, 13);
					const dies = k < 2;
					const leaveX = w.x + (TX - 60 - w.x) * kill;
					const x = dies ? w.x : leaveX;
					const y = dies ? w.y + (surf + 62 + k * 10 - w.y) * kill : w.y;
					return (
						<Fish key={k} x={x + (dies ? 0 : 0)} y={y + (kill >= 1 ? idleBob(frame, k, 1) : 0)} dir={dies ? w.dir : -1} s={1} dead={dies ? kill : 0} color={k === 1 ? WATER.fish2 : WATER.fish} opacity={dies ? 1 : 1 - ramp(kill, 0.6, 0.4)} />
					);
				})}
			</Tank>
			<g opacity={ramp(frame, tBod, 16)}>
				<Tag
					x={TX + TW / 2}
					y={bed - 70 - (key > 0 ? 12 * key : 0)}
					lines={key > 0.01 ? ['Decomposition: BOD ↑', 'O₂ collapse kills fish'] : ['Decomposition: BOD ↑']}
					color={TOK.amber}
					textColor={TOK.amberInk}
					subColor={TOK.ink}
					size={19}
					strokeWidth={2.5 + idlePulse(frame) * 1.5}
				/>
			</g>

			<DioramaPlinth id={`${id}-g`} cx={650} cy={390} rx={62} />
			<DoGauge x={646} top={182} h={196} level={level} okColor={accent} lowAt={0.3} lowColor="#c0392b" lowInk="#c0392b" opacity={ramp(frame, 4)} />
			<g opacity={ramp(frame, tHyp, 16)}>
				<text x={650} y={450} textAnchor="middle" fill="#c0392b" fontSize={18} fontWeight={800}>hypoxia</text>
			</g>
		</>
	);
};

// ───────────────────────────────────────── management (L9 concept-management) ──
const ManagementMode = ({id, frame, b, accent}: ModeArgs) => {
	const [tPrev, tBuf, tPrec, tSew, tErie, tKey] = b;
	const LX = 548, LY = 112, LW = 196, LH = 232;
	const surf = LY + LH * 0.14;
	const bed = LY + LH - 22;
	const rowA = 164, rowB = 318;
	const x0A = 110, x0B = 120, xEnd = LX + 4;
	const speed = 1.6;
	const gap = 11;
	const buffX = 420, plantX = 300;
	const NUT = WATER.phosphate;
	// A dot k in a row is emitted at k*gap. Returns its x and whether it's caught.
	const dotsFor = (row: 'A' | 'B') => {
		const out: {x: number; op: number; k: number}[] = [];
		const x0 = row === 'A' ? x0A : x0B;
		const kMax = Math.floor(frame / gap);
		for (let k = Math.max(0, kMax - 40); k <= kMax; k++) {
			const tEmit = k * gap;
			if (row === 'A' && tEmit > tPrec && k % 2 === 0) continue; // precision: less applied
			const x = x0 + (frame - tEmit) * speed;
			let op = 1;
			let xx = x;
			const barrierX = row === 'A' ? buffX : plantX;
			const tBar = row === 'A' ? tBuf : tSew;
			const passes = row === 'A' ? k % 3 === 0 : k % 4 === 0;
			const tReach = tEmit + (barrierX - x0) / speed;
			if (tReach > tBar && !passes && x > barrierX - 6) {
				xx = barrierX - 6;
				op = 1 - ramp(frame, tReach, 24);
			}
			if (xx > xEnd + 30) continue;
			out.push({x: xx, op: op * (xx > xEnd ? 1 - (xx - xEnd) / 30 : 1), k});
		}
		return out;
	};
	const labelA = [
		{x: 215, t: tPrec, n: 2, title: 'Precision agriculture', sub: 'less fertiliser applied'},
		{x: 420, t: tBuf, n: 1, title: 'Buffer zone', sub: 'plants intercept runoff'},
	];
	const inflow = 1 - 0.3 * ramp(frame, tBuf, 40) - 0.2 * ramp(frame, tPrec, 40) - 0.25 * ramp(frame, tSew, 40);
	const lakeDots = Math.round(10 + 8 * inflow);
	return (
		<>
			<text x={W / 2} y={30} textAnchor="middle" fill={accent} fontSize={21} fontWeight={800} opacity={ramp(frame, tPrev, 16)}>
				Stop nutrients before they reach the water
			</text>

			{/* row A: farm runoff */}
			<g opacity={ramp(frame, 0)}>
				<path d="M 44 190 Q 40 150 52 142 L 92 142 Q 104 150 100 190 Z" fill="#e7d6a8" stroke="#b39c62" strokeWidth={1.5} />
				<path d="M 54 142 Q 72 132 90 142" fill="none" stroke="#b39c62" strokeWidth={2} />
				<rect x={58} y={158} width={28} height={14} rx={3} fill="#ffffff" opacity={0.6} />
				<text x={72} y={218} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>Farm</text>
				<text x={72} y={237} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>runoff</text>
				<Arrow x1={x0A} y1={rowA} x2={LX - 6} y2={rowA} color="rgba(79,151,198,0.45)" width={14} head={20} />
			</g>
			{/* row B: sewage */}
			<g opacity={ramp(frame, 0)}>
				<Pipe x1={20} y1={rowB} x2={108} y2={rowB} w={24} />
				<text x={62} y={rowB + 44} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>Sewage</text>
				<Arrow x1={x0B} y1={rowB} x2={LX - 6} y2={rowB} color="rgba(79,151,198,0.45)" width={14} head={20} />
			</g>
			{dotsFor('A').map((d) => <Dot key={`a${d.k}`} x={d.x} y={rowA + Math.sin(d.k) * 3} r={5.5} color={NUT} opacity={d.op * ramp(frame, 0)} />)}
			{dotsFor('B').map((d) => <Dot key={`b${d.k}`} x={d.x} y={rowB + Math.sin(d.k) * 3} r={5.5} color={NUT} opacity={d.op * ramp(frame, 0)} />)}
			{/* buffer strip */}
			<g opacity={ramp(frame, tBuf, 16)}>
				<rect x={buffX - 4} y={rowA - 30} width={40} height={60} rx={10} fill="#d9ead0" />
				{[0, 1, 2].map((k) => (
					<Plant key={k} x={buffX + 4 + k * 12} baseY={rowA + 26} h={50} frame={frame} seed={k} />
				))}
			</g>
			{/* precision: a dose dial at the sack */}
			<g opacity={ramp(frame, tPrec, 16)}>
				<circle cx={200} cy={rowA - 2} r={20} fill="#ffffff" stroke={accent} strokeWidth={2.5} />
				<path d={`M 186 ${rowA + 4} A 15 15 0 0 1 214 ${rowA + 4}`} fill="none" stroke={TOK.rule} strokeWidth={4} />
				<line x1={200} y1={rowA + 2} x2={200 + 13 * Math.cos(Math.PI * (1 - 0.75 + 0.5 * ramp(frame, tPrec, 30)))} y2={rowA + 2 - 13 * Math.sin(Math.PI * (1 - 0.75 + 0.5 * ramp(frame, tPrec, 30)))} stroke={accent} strokeWidth={3} strokeLinecap="round" />
			</g>
			{labelA.map((l) => (
				<g key={l.n} opacity={ramp(frame, l.t, 16)}>
					{/* plain bullet: these are parallel measures (they build in narration order, not left to right) */}
					<circle cx={l.x - textWidth(l.title) / 2 - 14} cy={84} r={6} fill={accent} />
					<text x={l.x} y={90} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{l.title}</text>
					<text x={l.x} y={112} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{l.sub}</text>
				</g>
			))}
			{/* treatment + wetland */}
			<g opacity={ramp(frame, tSew, 16)}>
				<rect x={plantX - 4} y={rowB - 34} width={96} height={64} rx={12} fill="#e6eef3" stroke="#8d949b" strokeWidth={2} />
				<rect x={plantX + 4} y={rowB - 8} width={80} height={30} rx={8} fill={WATER.clean} opacity={0.6} />
				{[0, 1, 2, 3].map((k) => (
					<Plant key={k} x={plantX + 16 + k * 19} baseY={rowB + 22} h={40} frame={frame} seed={k + 4} />
				))}
				<circle cx={plantX + 90 - textWidth('Sewage upgrade + wetlands') / 2 - 14} cy={rowB - 70} r={6} fill={accent} />
				<text x={plantX + 90} y={rowB - 64} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>Sewage upgrade + wetlands</text>
				<text x={plantX + 90} y={rowB - 44} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>remove phosphate before discharge</text>
			</g>

			<DioramaPlinth id={id} cx={LX + LW / 2} cy={LY + LH - 4} rx={118} />
			<Tank id={`${id}-lake`} x={LX} y={LY} w={LW} h={LH} murk={0.35}>
				{[0, 1].map((k) => (
					<Plant key={k} x={LX + 50 + k * 90} baseY={bed + 8} h={60} frame={frame} seed={k + 9} />
				))}
				{Array.from({length: 18}, (_, i) => {
					const w = wander(i, frame, LX + 16, LX + LW - 16, surf + 8, bed - 10, 0.6, 14);
					return <Dot key={i} x={w.x} y={w.y} r={5} color={NUT} opacity={i < lakeDots ? 0.9 : 0} />;
				})}
				{[0, 1].map((k) => {
					const w = wander(k, frame, LX + 50, LX + LW - 40, surf + 30, bed - 50, 0.5, 4);
					return <Fish key={k} x={w.x} y={w.y} dir={w.dir} s={0.8} color={k ? WATER.fish2 : WATER.fish} />;
				})}
			</Tank>
			<text x={LX + LW / 2} y={LY - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.06em" opacity={ramp(frame, 0)}>
				LAKE
			</text>

			<g opacity={ramp(frame, tErie, 16)}>
				<text x={W / 2 - 60} y={446} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>After the 2014 Lake Erie bloom:</text>
				<text x={W / 2 - 60} y={472} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					US and Canada invested <tspan fill={TOK.ink} fontWeight={800}>200 million dollars</tspan> in prevention
				</text>
			</g>
			<g opacity={ramp(frame, tKey, 16)}>
				<Tag x={W / 2 - 60} y={508} lines={['Prevention beats reaction']} color={TOK.amber} textColor={TOK.amberInk} size={20} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
			</g>
		</>
	);
};

const textWidth = (s: string) => s.length * 18 * 0.56;

export const WaterBodyDiagram = ({delay = 62, mode = 'oxygen', beats}: WaterBodyProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = beats && beats.length >= DEFAULT_BEATS[mode].length ? beats : DEFAULT_BEATS[mode];
	const id = `c12m8wb${mode}`;
	const args: ModeArgs = {id, frame, fps, b, accent: theme.accent};
	const labels: Record<WaterBodyMode, string> = {
		oxygen: 'A water body: higher temperature, reduced mixing and microbial consumption lower dissolved oxygen until organisms are in trouble',
		nutrients: 'Two tanks: low nitrate and phosphate keep a balanced ecosystem; excess drives explosive algal growth',
		sources: 'Fertiliser runoff, sewage effluent and detergents carry nitrate, phosphate and organic matter into a lake, tipping its oxygen balance',
		chain: 'Eutrophication chain: nutrients, algal bloom, plants die, bacteria decompose and BOD rises, oxygen collapses and fish die',
		management: 'Buffer zones, precision agriculture and sewage upgrades with wetlands stop nutrients before they reach the lake',
	};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={labels[mode]} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={id} elements={['O']} />
			{mode === 'oxygen' && <OxygenMode {...args} />}
			{mode === 'nutrients' && <NutrientsMode {...args} />}
			{mode === 'sources' && <SourcesMode {...args} />}
			{mode === 'chain' && <ChainMode {...args} />}
			{mode === 'management' && <ManagementMode {...args} />}
		</svg>
	);
};
