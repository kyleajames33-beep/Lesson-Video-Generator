// S06 scenes 7 to 9: part (c) interpolate (the inside-the-data band, the teal read-off from 2016 to the line, not the
// 2017 cross, "about 13%", data on both sides); part (d) extrapolate (the main graph dims; an inset at its own wider
// even scale; the dashed line into "no data here", the grey 2040 read-off, the fan of possible paths, row (d), the
// aid); line or column (the part (a) line graph against a small column graph with gaps, three amber ticks).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER_INK, AnswerBox, Chip, DrawPath, GREY_INK, GreyTag, HandLine, Heading, INK, Overlay, PenTick, QuestionCard, T, TEAL, prog, pulse, vis} from './kit';
import type {ARow, Ann} from './kit';
import {ABOX, ANS, MAIN, PCT, PTS, STRIP_S, SX, SW, YEARS, fit, gxM, gyM, sc, stripSpec} from './common';
import type {Grid} from './common';
import {AxesInk, AxisLabel, GridPaper, PathLine, ReadOff, Ticks, XMark} from './pieces';
import {MainGraph} from './s2';

const H = MAIN.ny * MAIN.s;
const strip = (part: number, ann: Ann[] = []) => <QuestionCard spec={stripSpec(part)} at={-100} s={STRIP_S} ann={ann} />;
const ROW_B: ARow = {text: ANS.b, at: -1000, tick: -1000};

// ---------- 7. Part (c): interpolate ----------
const K7 = cues(sc('part-c-interpolate'), {partc: 'Part c', y2016: 'twenty sixteen', inside: 'inside the data', interp: 'interpolation', up: 'Go up from', line: 'line of best fit', nearest: 'nearest point', across: 'across to the axis', thirteen: 'about thirteen', draw: 'Draw your read-off', safe: 'fairly safe', both: 'both sides'});
export const ScenePartC: React.FC = () => {
	const f = useCurrentFrame();
	const x16 = gxM(2016), y16 = gyM(fit(2016));
	const rows: ARow[] = [ROW_B, {text: ANS.c, at: K7.thirteen + 6, dur: 40, tick: K7.thirteen + 20}];
	return (
		<Overlay>
			{strip(2, [{kind: 'verb', phrase: 'estimate', at: 8}, {kind: 'given', phrase: 'Use your graph', at: 16}, {kind: 'given', phrase: '2016.', at: K7.y2016}, {kind: 'marks', at: 24}])}
			<MainGraph pts={-100} line={-100} />
			<g opacity={vis(f, K7.inside, K7.up + 10, 12) * 0.9 + 0.25 * prog(f, K7.up + 10, 12)}>
				<rect x={gxM(2010)} y={MAIN.y} width={gxM(2020) - gxM(2010)} height={H} fill={TEAL} opacity={0.1} />
				<T x={gxM(2015)} y={MAIN.y + 30} text="inside the data: 2010 to 2020" size={22} color={TEAL} weight={700} anchor="middle" />
			</g>
			<ReadOff x={x16} y={y16} base={MAIN.y + H} x0={MAIN.x} at={K7.up} />
			{f >= K7.nearest ? <g opacity={pulse(f, K7.nearest, 40) + 0.3}><circle cx={PTS[3][0]} cy={PTS[3][1]} r={16} fill="none" stroke={GREY_INK} strokeWidth={3} /></g> : null}
			<GreyTag x={PTS[3][0] + 20} y={PTS[3][1] - 70} text="not the nearest point" at={K7.nearest} out={K7.both} size={20} />
			<Chip x={MAIN.x + 8} y={y16 - 60} text="about 13%" at={K7.thirteen} size={28} color={TEAL} />
			{[2, 3].map(i => f >= K7.both ? <circle key={i} cx={PTS[i][0]} cy={PTS[i][1]} r={18} fill="none" stroke={TEAL} strokeWidth={4} opacity={0.4 + 0.6 * pulse(f, K7.both + (i - 2) * 8, 30)} /> : null)}
			<GreyTag x={(PTS[2][0] + PTS[3][0]) / 2} y={PTS[3][1] - 120} text="data on both sides" at={K7.both + 6} size={20} anchor="middle" />
			<Chip x={SX} y={330} text="interpolation: reading a value between measured points" at={K7.interp} size={28} color={TEAL} maxW={SW} />
			<GreyTag x={SX} y={480} text="draw the read-off lines: a marker can follow them" at={K7.draw} size={20} maxW={SW} />
			<AnswerBox spec={ABOX} rows={rows} at={-100} counter={{total: 8, extra: [-100, -100, -100, -100], label: true}} dimRows={[{rows: [0], at: 0}]} />
			{void K7.partc}{void K7.line}{void K7.across}{void K7.safe}{void INK}
		</Overlay>
	);
};

// ---------- 8. Part (d): extrapolate ----------
const K8 = cues(sc('part-d-extrapolate'), {partd: 'Part d', y2040: 'Twenty forty', extrap: 'extrapolation', fifty: 'reach about fifty', assumes: 'assumes resistance', change: 'change it', further: 'further the line', weak: 'prediction is weak', inside: 'Inside the data', outside: 'Outside', extend: 'extend a line', assumption: 'assumption'});
const GI: Grid = {x: 1430, y: 330, s: 24, nx: 15, ny: 15};
const ix = (yr: number) => GI.x + ((yr - 2010) / 2) * GI.s;
const iy = (p: number) => GI.y + GI.ny * GI.s - (p / 4) * GI.s;
export const ScenePartD: React.FC = () => {
	const f = useCurrentFrame();
	const t0 = K8.y2040;
	const rows: ARow[] = [ROW_B, {text: ANS.c, at: -1000, tick: -1000}, {text: ANS.d, at: K8.assumes, dur: K8.weak - K8.assumes, tick: K8.change + 10}];
	const fan = (p: number[][]) => p.map(([yr, v]) => [ix(yr), iy(v)] as [number, number]);
	const sideOut = K8.inside;
	return (
		<Overlay>
			{strip(3, [{kind: 'verb', phrase: 'Assess', at: 10}, {kind: 'given', phrase: '2040.', at: t0}, {kind: 'given', phrase: 'about 50%', at: K8.fifty}, {kind: 'marks', at: 20}])}
			<MainGraph pts={-100} line={-100} dim={prog(f, t0, 16)} />
			<GreyTag x={MAIN.x + 20} y={MAIN.y + 16} text="assess: a judgement with evidence (s04)" at={14} out={K8.extrap} size={20} />
			{/* the inset at its own even scale */}
			<g opacity={prog(f, t0, 14)}>
				<GridPaper g={GI} at={t0} />
				<AxesInk g={GI} at={t0 + 6} width={3} />
				<Ticks g={GI} axis="x" ticks={[2010, 2020, 2030, 2040].map(y => ({pos: ix(y), label: `${y}`}))} at={t0 + 10} size={16} />
				<Ticks g={GI} axis="y" ticks={[0, 20, 40, 60].map(v => ({pos: iy(v), label: `${v}`}))} at={t0 + 10} size={16} />
				<AxisLabel g={GI} axis="y" text="%" at={t0 + 10} size={18} off={36} />
				{YEARS.map((y, i) => <XMark key={i} x={ix(y)} y={iy(PCT[i])} at={t0 + 14 + i * 3} s={6} />)}
				<PathLine pts={[[ix(2010), iy(fit(2010))], [ix(2020), iy(fit(2020))]]} at={t0 + 24} dur={14} color={INK} width={3} />
			</g>
			<GreyTag x={GI.x + 8} y={GI.y + 8} text="same data, wider even scale" at={t0 + 20} out={K8.extrap} size={18} />
			{f >= K8.extrap ? (
				<g opacity={prog(f, K8.extrap, 12)}>
					<rect x={ix(2020)} y={GI.y} width={ix(2040) - ix(2020)} height={GI.ny * GI.s} fill="#9a948a" opacity={0.16} />
					<T x={(ix(2020) + ix(2040)) / 2} y={GI.y + GI.ny * GI.s - 14} text="no data here" size={18} color={GREY_INK} weight={700} anchor="middle" />
					<PathLine pts={[[ix(2020), iy(fit(2020))], [ix(2040), iy(fit(2040))]]} at={K8.extrap + 6} dur={20} color={GREY_INK} width={3} dash="8 6" />
				</g>
			) : null}
			<ReadOff x={ix(2040)} y={iy(fit(2040))} base={GI.y + GI.ny * GI.s} x0={GI.x} at={K8.fifty} color={GREY_INK} />
			<Chip x={GI.x + 20} y={iy(fit(2040)) - 54} text="about 50%" at={K8.fifty + 16} size={24} color={GREY_INK} />
			{f >= K8.change ? (
				<g>
					<PathLine pts={fan([[2020, 19.2], [2026, 24], [2032, 26.5], [2040, 27.5]])} at={K8.change} dur={18} color={GREY_INK} width={2.5} dash="6 6" smoothPath />
					<PathLine pts={fan([[2020, 19.2], [2025, 21], [2032, 16], [2040, 11]])} at={K8.change + 8} dur={18} color={GREY_INK} width={2.5} dash="6 6" smoothPath />
				</g>
			) : null}
			<GreyTag x={SX} y={748} text="new drugs, less prescribing or better infection control could bend it; the line assumes the top path" at={K8.change + 12} out={sideOut} size={18} maxW={SW} />
			<GreyTag x={SX} y={830} text="extrapolation: extending the line beyond the data. NESA glossary, extrapolate: 'Infer from what is known.'" at={K8.extrap + 10} out={sideOut} size={18} maxW={SW} />
			<HandLine x={SX} y={790} text="Inside the data, read it." at={K8.inside} size={42} color={TEAL} />
			<HandLine x={SX} y={850} text="Outside, doubt it." at={K8.outside} size={42} color={TEAL} />
			<T x={SX} y={900} text="asked to extend? do it, and state the assumption" size={20} weight={600} color={GREY_INK} o={prog(f, K8.assumption, 10)} />
			<AnswerBox spec={ABOX} rows={rows} at={-100} counter={{total: 8, extra: [-100, -100, -100, -100, K8.weak + 10], label: true}} dimRows={[{rows: [0, 1], at: 0}]} />
			{void K8.partd}{void K8.further}{void K8.extend}{void AMBER_INK}
		</Overlay>
	);
};

// ---------- 9. Line or column? ----------
const K9 = cues(sc('line-or-column'), {one: 'One more drawing', line: 'line graph', continuous: 'continuous', time: 'change over time', pct: 'percentages', cat: 'categories', column: 'column graph', gaps: 'gaps', nothing: 'nothing in between', recent: 'In one recent', scale: 'accurate scale', labels: 'axis labels', heights: 'column heights'});
const GC: Grid = {x: 1150, y: 330, s: 26, nx: 16, ny: 15};
export const SceneLineColumn: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [{l: 'antibiotic A', v: 25}, {l: 'B', v: 15}, {l: 'C', v: 6}];
	const by = GC.y + GC.ny * GC.s;
	return (
		<>
			<Heading text="Line or column?" at={4} size={50} />
			<Overlay>
				<g transform="translate(-300,0)" opacity={prog(f, K9.pct - 30, 14)}>
					<MainGraph pts={-100} line={-100} />
				</g>
				<Chip x={150} y={900} text="continuous or over time → line" at={K9.pct} size={30} color={INK} />
				<g opacity={prog(f, K9.cat, 14)}>
					<GridPaper g={GC} at={K9.cat} />
					<AxesInk g={GC} at={K9.cat + 4} />
					<Ticks g={GC} axis="y" ticks={[0, 10, 20, 30].map(v => ({pos: by - (v / 2) * GC.s, label: `${v}`}))} at={K9.cat + 8} size={17} />
					<AxisLabel g={GC} axis="y" text="Mean zone diameter (mm)" at={K9.cat + 8} size={22} off={54} />
					<AxisLabel g={GC} axis="x" text="Antibiotic" at={K9.cat + 8} size={22} off={64} />
					{cols.map((c, i) => {
						const x = GC.x + (1.5 + i * 5) * GC.s, h = (c.v / 2) * GC.s * prog(f, K9.column + i * 8, 14);
						return (
							<g key={i}>
								<rect x={x} y={by - h} width={3 * GC.s} height={h} fill="#f6d77a" stroke={AMBER_INK} strokeWidth={2.5} />
								<T x={x + 1.5 * GC.s} y={by + 28} text={c.l} size={18} weight={600} color={INK} anchor="middle" />
							</g>
						);
					})}
				</g>
				{f >= K9.gaps ? [0, 1].map(i => <DrawPath key={i} d={`M${GC.x + (4.5 + i * 5) * GC.s + 4},${by - 18} L${GC.x + (6.5 + i * 5) * GC.s - 4},${by - 18}`} at={K9.gaps + i * 6} dur={8} color={TEAL} width={3} />) : null}
				<Chip x={1100} y={900} text="categories → columns, with gaps" at={K9.cat + 10} size={30} color={INK} />
				<GreyTag x={GC.x + GC.nx * GC.s} y={290} text="example values" at={K9.cat + 10} size={18} anchor="end" />
				<PenTick x={GC.x - 40} y={GC.y + 30} at={K9.scale} s={30} color={AMBER_INK} />
				<PenTick x={GC.x - 80} y={GC.y + GC.ny * GC.s / 2 + 120} at={K9.labels} s={30} color={AMBER_INK} />
				{cols.map((c, i) => <PenTick key={i} x={GC.x + (3 + i * 5) * GC.s} y={by - (c.v / 2) * GC.s - 24} at={K9.heights + i * 6} s={26} color={AMBER_INK} />)}
				<GreyTag x={1100} y={980} text="a NESA Chemistry marking guideline, 2025 (3 marks)" at={K9.recent} size={20} />
				{void K9.one}{void K9.line}{void K9.continuous}{void K9.time}{void K9.nothing}
			</Overlay>
		</>
	);
};
