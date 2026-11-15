// Scenes 1 to 4: s01's last frame (one fair die's equal bars, the desk calendar, empty date axes), then a whole year of
// pages torn into the date bars (12, 11, 7); what uniform means and why each value has 1/n (equal pieces filling one
// bar); the count test on the calendar (the pages behind each date); and two dice (the grid sliding into the sums).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, INK, prog} from '../../kit';
import {CalendarFlip, FrameSvg, LiveReadoutBoard, OutcomeGrid, ProbabilityBars, SceneHeading, StackedTotalBar, YearStrip} from '../../math/studio';
import {S01FinalFrame} from '../math-a12-s01/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ASK, AnswerBox, BAD, BoxCard, CAL, CAL_PAGE, Chip, DATES, DeskCalendar, FINAL_COUNTS, GOOD, Hand, MODEL, POS, RedDie, Row, SUMS, Slip, WhiteDie, YAxis, barGeom, dateCounts, flipPace, pagesAt} from './parts';

const SIXTH = 1 / 6;
const dateLabels = Array.from({length: 31}, (_, i) => ([1, 5, 10, 15, 20, 25, 31].includes(i + 1) ? String(i + 1) : ''));
const pTicks = [0.05, 0.1, 0.15, 0.2, 0.25].map(v => ({value: v, label: String(v)}));
const pageTicks = [2, 4, 6, 8, 10, 12, 14].map(v => ({value: v, label: String(v)}));
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ---------- 1. hook: is every date equally likely? ----------
const B1 = {x: 520, y: 190, width: 1340, height: 620} as const;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 12, 18);
	const flipAt = k.date + 8;
	const n = pagesAt(fr, flipAt);
	const counts = dateCounts(n);
	const g = barGeom(B1.x, B1.y, B1.width, B1.height, 31);
	const c31 = g.cx(30);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - open}}>
				<SceneHeading text="When is a distribution uniform?" at={30} size={52} />
				<CalendarFlip x={96} y={200} w={380} pages={DATES} pace={flipPace(flipAt)} plate={CAL} page={CAL_PAGE} />
				<LiveReadoutBoard x={96} y={610} width={400} inline at={30} rows={[{label: 'pages torn', value: n, digits: 0}, {label: 'month', value: 0, text: MONTHS[DATES[Math.max(0, n - 1)].month]}, {label: 'pages for the 31st', value: counts[30], digits: 0, role: 'k'}]} />
				<YAxis x={B1.x} y={B1.y} w={B1.width} h={B1.height} n={31} max={14} ticks={pageTicks} />
				<ProbabilityBars {...B1} labels={dateLabels} values={counts} max={14} role="b" xLabel="date" yLabel="pages" refLine={{value: 12, at: k.seven}} highlight={{index: 30, at: k.seven, role: 'k'}} barFraction={0.7} />
				<Hand x={620} y={420} at={k.guess} out={k.date} size={44} color={INK}>guess: is every date equally likely?</Hand>
				<Hand x={620} y={330} at={k.tear} out={k.date} size={44} color={MODEL.ink}>every page: the same chance</Hand>
				<FrameSvg style={{opacity: 1 - prog(fr, k.date, 12)}}><text x={1200} y={600} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 150, fill: '#8a8378'}}>?</text></FrameSvg>
				<Hand x={900} y={830} at={k.feb} out={k.end + 30} size={40} color={ASK.ink}>February: no 29th, 30th or 31st</Hand>
				<Hand x={760} y={186} at={k.twelve} size={38} color={MODEL.ink}>12 pages each (1st to 28th)</Hand>
				<Hand x={1290} y={186} at={k.ninth} size={38} color={MODEL.ink}>11 (29th, 30th)</Hand>
				<Hand x={1690} y={110} at={k.seven} size={46} color={ASK.ink}>only 7</Hand>
				{fr >= k.seven ? <FrameSvg><DrawPath d={`M${c31},170 L${c31},${g.Y(7, 14) - 12}`} at={k.seven} dur={12} color={ASK.stroke} width={5} /></FrameSvg> : null}
				<Hand x={96} y={880} at={k.page} size={40} color={INK}>every page equally likely: 1/365</Hand>
				<Hand x={760} y={880} at={k.isnt} size={40} color={BAD.ink}>but the date isn't</Hand>
				<Chip x={1300} y={866} at={k.so} size={40} color={INK}>When is it uniform?</Chip>
			</div>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><S01FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. what uniform means, and why 1/n ----------
const B2 = {x: 110, y: 330, width: 760, height: 520} as const;
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const g = barGeom(B2.x, B2.y, B2.width, B2.height, 6);
	const tip = prog(fr, k.say + 30, 50);
	return (
		<>
			<SceneHeading text="Uniform: equal probabilities" at={4} size={52} />
			<BoxCard x={96} y={160} w={1180} at={k.def} size={40} title="uniformly distributed">finitely many values, all with the same probability</BoxCard>
			<DeskCalendar x={1330} y={150} w={170} date="15" />
			<ProbabilityBars x={1520} y={130} width={360} height={240} labels={Array(31).fill('')} values={FINAL_COUNTS} max={14} role="b" barFraction={0.7} highlight={{index: 30, at: -30, role: 'k'}} />
			<Hand x={1530} y={366} at={-30} size={34} color={BAD.ink}>date: not uniform</Hand>
			<RedDie x={760} y={300} w={130} />
			<YAxis x={B2.x} y={B2.y} w={B2.width} h={B2.height} n={6} max={0.25} ticks={pTicks} />
			<ProbabilityBars {...B2} labels={['1', '2', '3', '4', '5', '6']} values={[SIXTH, SIXTH, SIXTH, SIXTH, SIXTH, SIXTH]} max={0.25} role="b" xLabel="face" yLabel="P(x)" valueText={() => '1/6'} refLine={{value: SIXTH, at: k.bars}} />
			<Hand x={140} y={292} at={k.bars} size={36} color={ASK.ink}>every bar the same height</Hand>
			<Row x={960} y={440} at={k.say} out={k.page} size={46}>n values, each with probability c</Row>
			<Row x={960} y={440} at={k.page} size={44}>page: n = 365, each 1/365</Row>
			{fr >= k.say ? <StackedTotalBar x={960} y={560} width={840} thickness={72} parts={Array.from({length: 6}, () => ({value: 1, label: '1/6', role: 'b' as const}))} total={6}
				from={{x: g.left, baseY: g.base, slot: g.slot, barW: g.bw, max: 0.25 * 6, height: g.ph}} tip={tip} totalLabel={{text: '= 1', at: k.must}} at={k.say} out={k.tenth} /> : null}
			{fr >= k.tenth ? <StackedTotalBar x={960} y={560} width={840} thickness={72} parts={Array.from({length: 10}, () => ({value: 1, label: '1/10', role: 'b' as const}))} total={10}
				from={{x: 960, baseY: 632, slot: 84, barW: 72, max: 10, height: 840}} tip={1} totalLabel={{text: '= 1', at: k.tenth}} at={k.tenth} /> : null}
			<Hand x={960} y={650} at={k.die} out={k.digit} size={40} color={MODEL.ink}>fair die: n = 6, each 1/6</Hand>
			<Hand x={960} y={650} at={k.digit} size={40} color={MODEL.ink}>digit 0 to 9: n = 10, each 1/10</Hand>
			<Row x={960} y={720} at={k.must} size={46}>c + c + … + c = nc = 1</Row>
			<AnswerBox x={960} y={800} at={k.c} size={50}>c = 1/n for each of the n values</AnswerBox>
			<Chip x={96} y={872} at={k.so} size={32} color={INK}>chosen with equal chances from a finite list: uniform model</Chip>
		</>
	);
};

// ---------- 3. the test: count what's behind each value ----------
const B3 = {x: 126, y: 600, width: 1042, height: 330} as const;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const hlDay = fr < k.thirty ? {day: 1, at: k.first} : {day: 31, at: k.thirty};
	return (
		<>
			<SceneHeading text="The test: count what's behind each value" at={4} size={48} />
			<YearStrip x={60} y={170} cell={32} highlightDay={{...hlDay, role: 'k'}} />
			<YAxis x={B3.x} y={B3.y} w={B3.width} h={B3.height} n={31} max={14} ticks={[7, 12].map(v => ({value: v, label: String(v)}))} xLabel={false} />
			<ProbabilityBars {...B3} labels={dateLabels} values={FINAL_COUNTS} max={14} role="b" barFraction={0.72} highlight={{index: fr < k.thirty ? 0 : 30, at: fr < k.thirty ? k.first : k.thirty, role: 'k'}} labelSize={28} />
			<Hand x={170} y={604} at={k.month} size={36} color={ASK.ink}>12 pages: one in every month</Hand>
			<Hand x={880} y={604} at={k.thirty} size={36} color={ASK.ink}>7 pages</Hand>
			<Hand x={1162} y={236} at={k.short} size={34} color={BAD.ink}>too short</Hand>
			<DeskCalendar x={1560} y={150} w={260} date="31" />
			<Chip x={1200} y={300} at={k.prop} size={34} color={MODEL.ink}>page: uniform</Chip>
			<Chip x={1200} y={370} at={k.no} size={34} color={BAD.ink}>date: not uniform</Chip>
			<Row x={1200} y={440} at={k.p1} size={50}>P(1st) = 12/365</Row>
			<Hand x={1640} y={454} at={k.p1 + 20} size={34} color={POS}>≈ 0.033</Hand>
			<Row x={1200} y={516} at={k.p31} size={50}>P(31st) = 7/365</Row>
			<Hand x={1640} y={530} at={k.p31 + 20} size={34} color={POS}>≈ 0.019</Hand>
			<BoxCard x={1200} y={620} w={680} at={k.test} size={38} title="the test" edge={ASK.stroke}>Does every value come from the same number of equally likely outcomes?</BoxCard>
			<Hand x={1200} y={862} at={k.ask} size={38} color={ASK.ink}>count behind each bar</Hand>
		</>
	);
};

// ---------- 4. two dice: the same test ----------
const CELL = 84, GX = 260, GY = 240;
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const light = fr < k.outcomes ? {value: 12, at: k.outcome} : {value: 7, at: k.outcomes};
	const cellC = (col: number, row: number): [number, number] => [GX + col * CELL + CELL / 2, GY + row * CELL + CELL / 2];
	const slide = k.so + 10;
	const lab = prog(fr, slide + 30, 14);
	return (
		<>
			<SceneHeading text="Two dice: the same test" at={4} size={52} />
			<WhiteDie x={110} y={150} w={100} />
			<Hand x={220} y={160} at={-30} size={34} color={INK}>white die: across</Hand>
			<RedDie x={110} y={420} w={110} />
			<Hand x={70} y={548} at={-30} size={34} color={INK} w={180}>red die: down</Hand>
			{fr >= slide ? <OutcomeGrid x={GX} y={GY} cell={CELL} value={(r, c) => r + c + 2} colLabels={['1', '2', '3', '4', '5', '6']} rowLabels={['1', '2', '3', '4', '5', '6']} light={{value: 7, at: -30, role: 'k'}} role="b" size={38} at={slide} /> : null}
			<OutcomeGrid x={GX} y={GY} cell={CELL} value={(r, c) => r + c + 2} colLabels={['1', '2', '3', '4', '5', '6']} rowLabels={['1', '2', '3', '4', '5', '6']} light={{...light, role: 'k'}} slide={{at: slide, x: 900, baseY: 880, slot: 84, size: 56}} role="b" size={38} />
			{fr >= k.three && fr < slide ? <FrameSvg style={{opacity: prog(fr, k.three, 10) * (1 - prog(fr, slide - 10, 10))}}>
				{[cellC(2, 3), cellC(3, 2)].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r={44} fill="none" stroke={ASK.stroke} strokeWidth={6} />)}
			</FrameSvg> : null}
			<Hand x={260} y={770} at={k.three} out={slide} size={38} color={ASK.ink}>(3, 4) and (4, 3): different outcomes</Hand>
			<Hand x={260} y={830} at={k.gives} out={slide} size={38} color={INK}>36 cells, each 1/36</Hand>
			<Slip x={900} y={200} at={k.if} strikeAt={k.ways} size={38} caption="a double happens one way; a mixed pair, two">21 unordered pairs, equally likely</Slip>
			<Hand x={900} y={410} at={k.outcome} size={40} color={ASK.ink}>sum 12: 1 outcome</Hand>
			<Hand x={1300} y={410} at={k.outcomes} size={40} color={ASK.ink}>sum 7: 6 outcomes</Hand>
			{lab > 0.01 ? <FrameSvg style={{opacity: lab}}>
				{[[0, '1/36'], [5, '6/36'], [10, '1/36']].map(([i, t]) => <text key={String(i)} x={900 + (i as number) * 84 + 42} y={880 - SUMS[i as number] * 56 - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: MODEL.ink}}>{t}</text>)}
			</FrameSvg> : null}
			<Hand x={260} y={836} at={k.not} size={44} color={GOOD.ink}>outcomes: uniform</Hand>
			<Hand x={260} y={770} at={slide + 20} size={38} color={INK} w={900}>the 36 outcomes, sorted by sum</Hand>
			<FrameSvg style={{opacity: 1 - prog(fr, slide, 12)}}>
				<line x1={900} x2={1824} y1={880} y2={880} stroke={INK} strokeWidth={4} />
				{SUMS.map((_, i) => <text key={i} x={900 + i * 84 + 42} y={920} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{i + 2}</text>)}
				<text x={1362} y={760} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 130, fill: '#8a8378'}}>?</text>
				<text x={1362} y={620} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>sum of the two dice</text>
			</FrameSvg>
			<Hand x={900} y={470} at={k.not + 10} size={44} color={BAD.ink}>sum: not uniform</Hand>
		</>
	);
};
