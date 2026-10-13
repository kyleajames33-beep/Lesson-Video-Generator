import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnimalIcon, Arrow, Balance, balancePans, BarnIcon, BeadDot, CoinIcon, Cross, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GAIN, Germ, HARM, HeartIcon, HerdGrid, Heading, INK, INK_SOFT, MiniLine, NoteCard, Overlay, ORANGE, ORDER, PoolLegend, poolColor, prog, S, Scorecard, SlideIn, Straw, Tag, VAR, WELF_INK, along, COST_INK, BASE, Bracket, Pill,
} from './shared';

const GX = 940, GY = 280, CW = 130, CH = 104;
const cellPos = (i: number): [number, number] => [GX + (i % 6) * CW + CW / 2, GY + Math.floor(i / 6) * CH + CH / 2 + 12];

// ---------- 2c. What it gains, and the risk of the same reach ----------
export const SceneGain: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('gain-and-risk'), {
		gain: 'What does it gain', proven: 'from a proven bull', many: 'on many farms', faster: 'faster improvement', reach: 'the same reach is the risk', few: 'If a few bulls father most', pool: 'gene pool', share: 'The cows then share', closely: 'If the herd is closely related', disease: 'so one disease can spread', harmful: 'a harmful allele carried', passed: 'passed to many calves',
	});
	const per = 9;
	const colorOf = (i: number) => poolColor(i, f, c.few, per);
	const colors = Array.from({length: 24}, (_, i) => colorOf(i));
	const orangeIdx = Array.from({length: 24}, (_, i) => i).filter(i => colorOf(i) === ORANGE);
	const rowMajor = Array.from({length: 24}, (_, i) => i);
	const diseaseGrey = (i: number) => (colorOf(i) === ORANGE ? prog(f, c.disease + 8 + rowMajor.indexOf(i) * 3, 10) * (1 - prog(f, c.harmful - 12, 14)) : 0);
	// the germ sweeps along a snake path through the rows
	const snake: [number, number][] = [];
	for (let r = 0; r < 4; r++) { const row = [0, 1, 2, 3, 4, 5].map(k => cellPos(r * 6 + (r % 2 ? 5 - k : k))); snake.push(...row); }
	const gt = prog(f, c.disease + 6, 90);
	const [gx, gy] = along(snake, gt);
	const bull: [number, number] = [790, 500];
	const bull2: [number, number] = [790, 830];
	const calves = [0, 1, 2, 3, 4, 5].map(i => [GX + 40 + i * CW + CW / 2, 830] as [number, number]);
	return (
		<>
			<Heading items={[[c.gain - 4, 'What does it gain?'], [c.reach, 'The same reach is the risk']]} size={64} />
			<Scorecard x={96} y={230} s={0.9} at={c.gain} colW={440} titles={[{text: 'artificial insemination'}]} cells={{gain: [{at: c.proven + 20, text: 'proven bull, many farms, faster progress'}], variety: [{at: c.passed + 50, text: 'narrower gene pool: shared weakness'}]}} lit={{gain: c.gain + 14, variety: c.passed + 44}} />
			<Overlay>
				<MiniLine x={130} y={770} w={430} h={120} at={c.faster} label="milk yield, improved over generations" color={GAIN} />
			</Overlay>
			{/* gene pool tray */}
			<SlideIn at={c.reach} dx={60}>
				<Overlay>
					<rect x={700} y={196} width={1130} height={520} rx={26} fill="#fffdf8" fillOpacity={0.55} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" />
					<HerdGrid x={GX} y={GY} color={colorOf} grey={diseaseGrey} ringed={[ORDER[0], ORDER[1], ORDER[2]]} ringAt={c.share + 24} />
				</Overlay>
			</SlideIn>
			<Overlay>
				<PoolLegend x={730} y={262} colors={colors} label="alleles in the herd" />
				<g opacity={prog(f, c.pool, 14)}><text x={730} y={226} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={VAR}>gene pool: the variety of alleles in a population</text></g>
			</Overlay>
			{/* the popular bull and its orange alleles */}
			<SlideIn at={c.few - 20}>
				<Overlay>
					<AnimalIcon x={bull[0]} y={bull[1]} s={1.15} kind="bull" ring={ORANGE} />
					<BeadDot cx={bull[0]} cy={bull[1] - 62} r={14} color={ORANGE} />
				</Overlay>
			</SlideIn>
			<Overlay>
				{orangeIdx.map(i => {
					const k = ORDER.indexOf(i);
					const t = (f - (c.few + k * per - 8)) / 10;
					if (t < 0 || t > 1) return null;
					const [tx, ty] = cellPos(i);
					return <circle key={i} cx={bull[0] + 20 + (tx - bull[0] - 20) * t} cy={bull[1] - 62 + (ty - 52 - bull[1] + 62) * t} r={9} fill={ORANGE} stroke={INK} strokeWidth={2} />;
				})}
				{/* the infectious disease pulse */}
				{f >= c.disease + 6 && f < c.disease + 110 ? <Germ x={gx} y={gy - 8} r={16} at={c.disease + 6} /> : null}
			</Overlay>
			<Tag at={c.share + 30} x={1540} y={222} text="same alleles" color={AMBER_INK} size={46} />
			<Tag at={c.disease + 4} x={730} y={560} text="one disease" color={INK_SOFT} size={40} out={c.harmful - 4} />
			{/* the harmful allele is inherited, not caught */}
			<Overlay>
				<g opacity={prog(f, c.harmful, 12)}>
					<AnimalIcon x={bull2[0]} y={bull2[1]} s={0.9} kind="bull" ring={ORANGE} />
					<circle cx={bull2[0] + 4} cy={bull2[1] - 68} r={20} fill="#f3d4cc" stroke={HARM} strokeWidth={4} />
					{[[-8, -5], [6, -8], [2, 8], [-9, 7]].map(([dx, dy], i) => <circle key={i} cx={bull2[0] + 4 + dx} cy={bull2[1] - 68 + dy} r={4.5} fill={HARM} />)}
					<text x={bull2[0] + 34} y={bull2[1] - 60} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={HARM}>harmful allele</text>
				</g>
				{calves.map(([cx, cy], i) => (
					<g key={i}>
						<g opacity={prog(f, c.passed - 20 + i * 5, 12)}><AnimalIcon x={cx} y={cy} s={0.55} kind="cow" /></g>
						<DrawPath d={`M${bull2[0] + 30},${bull2[1] - 76} Q${(bull2[0] + cx) / 2},${bull2[1] - 150 - i * 6} ${cx + 8},${cy - 54}`} at={c.harmful + 24 + i * 6} dur={22} color={HARM} width={4} />
						<g opacity={prog(f, c.harmful + 44 + i * 6, 10)}>
							<circle cx={cx + 8} cy={cy - 38} r={12} fill="#f3d4cc" stroke={HARM} strokeWidth={3} />
							<circle cx={cx + 8} cy={cy - 38} r={4} fill={HARM} />
						</g>
					</g>
				))}
			</Overlay>
			<Tag at={c.passed + 10} x={730} y={905} text="inherited: passed from the bull to his calves" color={HARM} size={42} />
		</>
	);
};

// ---------- 2d. The fertility trade-off, and the cost ----------
export const SceneFertility: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('fertility-cost'), {
		source: 'Studies of Holstein cows', milk: 'as milk yield rose', genetic: 'was genetic', fell: 'the chance of becoming pregnant', everywhere: 'top milk bulls everywhere', fast: 'selection for one trait runs fast', side: 'so does its side effect', harder: 'harder life on the farm', semen: 'Semen and a trained worker', less: 'usually less than buying', farm: 'top bull on every farm',
	});
	const BX = [96, 680, 1264], BY = 262, BW = 560, BH = 270;
	const box = (i: number, at: number, title: string, color: string) => (
		<SlideIn key={i} at={at} dy={24}>
			<div style={{position: 'absolute', left: BX[i], top: BY, width: BW, height: BH, background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 22, boxShadow: '0 10px 24px rgba(60,45,20,0.08)', boxSizing: 'border-box', padding: '12px 20px'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color, lineHeight: 1}}>{title}</div>
			</div>
		</SlideIn>
	);
	const pans = balancePans(1560, 650, 380, 10 * prog(f, c.farm - 20, 40));
	const coinY = 560 + (790 - 560) * Math.min(1, prog(f, c.semen + 10, 18) ) + (f > c.semen + 28 ? -Math.abs(Math.sin((f - c.semen - 28) / 5)) * 18 * Math.max(0, 1 - (f - c.semen - 28) / 24) : 0);
	return (
		<>
			<Heading items={[[c.source - 20, 'The trade-off, and the cost']]} size={64} />
			<Pill at={c.source} x={96} y={176} color={VAR} size={38}>studies of Holstein cows in several countries</Pill>
			<SlideIn at={c.milk} dy={20} out={c.everywhere - 14}>
				<Overlay>
					<rect x={96} y={262} width={1728} height={270} rx={22} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
					<MiniLine x={170} y={300} w={560} h={150} at={c.milk + 6} kind="rise" color={GAIN} label="milk yield rose through selection" />
					<MiniLine x={880} y={300} w={560} h={150} at={c.fell} kind="fall" color={HARM} label="chance of pregnancy after each insemination" />
					<g opacity={prog(f, c.genetic, 14)}><text x={1630} y={380} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={VAR}>part of the fall</text><text x={1630} y={426} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={VAR}>was genetic</text></g>
				</Overlay>
			</SlideIn>
			{box(0, c.everywhere - 10, 'top milk bulls used everywhere', AMBER_INK)}
			{box(1, c.fast - 10, 'selection for one trait runs fast', GAIN)}
			{box(2, c.side - 10, 'side effect: fewer pregnancies per insemination', HARM)}
			<Overlay>
				{/* box 1: the straw reaches farm after farm */}
				{[0, 1, 2, 3, 4].map(i => (
					<g key={i} opacity={prog(f, c.everywhere + i * 8, 10)}>
						<BarnIcon x={BX[0] + 80 + i * 100} y={BY + 200} s={0.85} />
						<Straw x={BX[0] + 80 + i * 100} y={BY + 140} w={64} rot={-20} />
					</g>
				))}
				<MiniLine x={BX[1] + 40} y={BY + 100} w={420} h={110} at={c.fast} kind="steep" color={GAIN} dur={36} label="milk yield" />
				<MiniLine x={BX[2] + 40} y={BY + 120} w={420} h={90} at={c.side} kind="fall" color={HARM} dur={36} label="pregnancies per insemination" />
				<Arrow x1={BX[0] + BW + 6} y1={BY + BH / 2} x2={BX[1] - 6} y2={BY + BH / 2} at={c.fast - 14} color={INK_SOFT} dur={14} />
				<Arrow x1={BX[1] + BW + 6} y1={BY + BH / 2} x2={BX[2] - 6} y2={BY + BH / 2} at={c.side - 14} color={INK_SOFT} dur={14} />
			</Overlay>
			{/* the scorecard stays filled in its first column */}
			<Scorecard x={96} y={570} s={0.62} at={4} colW={480} titles={[{text: 'artificial insemination'}]} cells={{gain: [{at: 0, text: 'proven bull, many farms, faster progress'}], variety: [{at: 0, text: 'narrower gene pool: shared weakness'}], cost: [{at: c.less + 30, text: 'usually less than a bull on every farm'}], welfare: [{at: c.harder + 30, text: 'chasing one trait can harm another'}]}} lit={{welfare: c.harder, cost: c.semen}} />
			<NoteCard x={720} y={590} w={470} at={c.harder} color={WELF_INK} glyph="welfare" title="welfare" size={30}>A cow that struggles to get pregnant can have a harder life on the farm</NoteCard>
			<Overlay>
				<HeartIcon x={1210} y={660} s={1.3} o={prog(f, c.harder + 10, 14)} />
				<CoinIcon x={300} y={coinY} r={26} o={prog(f, c.semen + 6, 10) * (1 - prog(f, c.less + 24, 10))} />
				<Balance x={1560} y={650} w={380} angle={10 * prog(f, c.farm - 20, 40)} o={prog(f, c.less - 10, 14)} />
				<g opacity={prog(f, c.less, 12)}><Straw x={pans.left[0]} y={pans.left[1] - 14} w={90} /></g>
				<g opacity={prog(f, c.farm, 12)}><BarnIcon x={pans.right[0] - 40} y={pans.right[1] - 30} s={0.8} /><AnimalIcon x={pans.right[0] + 24} y={pans.right[1] - 26} s={0.5} kind="bull" /></g>
			</Overlay>
			<Tag at={c.less + 20} x={1200} y={850} text="cost: usually less than a bull on every farm" color={COST_INK} size={40} w={640} />
		</>
	);
};
