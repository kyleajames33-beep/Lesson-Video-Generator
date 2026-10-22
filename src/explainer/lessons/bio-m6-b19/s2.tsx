// M6 B19 scenes 5 to 9: growth hormone (the old pituitary source was scarce and sometimes carried a fatal disease, so
// the benefit is bigger); the industry column (chymosin: the same enzyme without calves); tank or field (contained
// microbes against released crops, resistance, narrowing crop diversity, Bt cotton held by refuges); the ranking on
// the full board; the memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, CARD, ColumnCard, DONE, Dot, DrawPath, EDGE, EnzymeG, GREYT, GREY_INK, GTag, INK, INK_SOFT, InsectG, MiniBoard, MiniLevels, PLATES, Pl, Pollen,
	RefugeStrip, Sx, SupplyLine, TESTS, TestIcon, Tg, VialG, clamp01, lerp, prog, smooth, tw, vis,
} from './parts';
import type {DotK, MiniCell, TestK} from './parts';
import {LABEL_X, TestLabel, labelY} from './s1';

// ---------- 5. Growth hormone ----------
const K5 = cues(S('growth-hormone'), {gh: 'growth hormone,', children: 'given to children', until: 'Until 1985,', pit: 'pituitary glands', died: 'who had died', scarce: 'scarce,', fatal: 'fatal brain disease', withdrawn: 'withdrawn,', made: 'made by bacteria', replaced: 'replaced it', old: 'The old source', bigger: 'far bigger', btw: 'Better than what sets'});
export const SceneGrowth: React.FC = () => {
	const f = useCurrentFrame();
	const SRC: [number, number] = [260, 540], DST: [number, number] = [990, 540];
	const bact = prog(f, K5.made, 16);
	const audioY = 680;
	const mini: MiniCell[] = [...DONE.farm, ...DONE.medicine].map(c => ({...c, at: -100})).concat([
		{c: 2, r: 0, k: 'full', at: K5.fatal + 40},
		{c: 2, r: 1, k: 'full', at: K5.replaced},
	] as MiniCell[]);
	return (
		<>
			<Heading text="Medicine: growth hormone" at={4} size={56} />
			<Overlay>
				<MiniBoard cells={mini} active={2} o={prog(f, 0, 14)} />
				<ColumnCard title="growth hormone" sub="medicine" plate={PLATES.hormone} plateW={34} at={0} pulseRow={{r: 0, at: K5.btw}}
					cells={[{text: 'scarce, and some batches unsafe', k: 'full', at: K5.fatal + 40}, {text: 'harm from old source documented; replaced 1985', k: 'full', at: K5.replaced}, undefined]} />
				<Pl p={PLATES.hormone} cx={1060} cy={520} w={110} o={prog(f, K5.gh, 14)} />
				<Sx x={1060} y={audioY} text="growth hormone" size={30} color={GREY_INK} weight={700} anchor="middle" at={K5.gh + 6} />
				<Sx x={1060} y={audioY + 34} text="for children who don't make enough" size={22} color={GREY_INK} weight={600} anchor="middle" at={K5.children + 10} out={K5.until + 40} />
				{/* the old source: text only (no body, no person) */}
				<g opacity={vis(f, K5.until, K5.made, 14)}>
					<circle cx={SRC[0]} cy={SRC[1]} r={90} fill="#f3f2ee" stroke={GREYT} strokeWidth={3} strokeDasharray="8 7" />
					<Sx x={SRC[0]} y={SRC[1] + 10} text="old source" size={30} color={GREY_INK} weight={700} anchor="middle" />
				</g>
				<GTag x={110} y={260} text="pituitary gland: a small gland under the brain" at={K5.pit} out={K5.died + 20} size={26} />
				<GTag x={110} y={260} text="until 1985: from donors who had died" at={K5.died + 22} out={K5.made} size={26} />
				<SupplyLine a={[SRC[0] + 110, SRC[1]]} b={[DST[0] - 30, DST[1]]} draw={prog(f, K5.scarce, 24)} gaps={prog(f, K5.scarce, 1)} warn={prog(f, K5.fatal, 12)} thick={prog(f, K5.made + 6, 26)} amber={prog(f, K5.made + 6, 2)} />
				<GTag x={560} y={600} text="Creutzfeldt-Jakob disease" at={K5.fatal + 6} out={K5.made} size={24} />
				<Pl p={PLATES.bactP} cx={SRC[0]} cy={SRC[1]} w={300} o={bact} />
				<Tg x={SRC[0] - 140} y={740} text="1985: made by bacteria" at={K5.made + 14} out={K5.bigger + 20} size={38} />
				{void K5.withdrawn}{void K5.old}
			</Overlay>
		</>
	);
};

// ---------- 6. Industry: chymosin ----------
const K6 = cues(S('factory'), {industry: 'Industry follows', factory: 'factory scale', chym: 'Take chymosin', calves: "calves' stomachs", b1: 'Better than what?', sameEnz: 'the same enzyme', same: 'the same,', calves2: 'depend on calves', shown: 'Shown how?', since: 'Since about', who: 'Who gets it?', cheese: 'Cheesemakers,'});
export const SceneFactory: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K6.sameEnz + 4, 30));
	const mini: MiniCell[] = [...DONE.farm, ...DONE.medicine, ...DONE.hormone].map(c => ({...c, at: -100})).concat([
		{c: 3, r: 0, k: 'full', at: K6.same},
		{c: 3, r: 1, k: 'full', at: K6.since},
		{c: 3, r: 2, k: 'full', at: K6.cheese},
	] as MiniCell[]);
	const calfDim = prog(f, K6.sameEnz + 30, 14);
	return (
		<>
			<Heading text="Industry: chymosin for cheese" at={4} size={56} />
			<Overlay>
				<MiniBoard cells={mini} active={3} o={prog(f, 0, 14)} />
				<ColumnCard title="industry" sub="chymosin" plate={PLATES.cheese} plateW={84} at={K6.industry}
					cells={[{text: 'same enzyme, no calves needed', k: 'full', at: K6.same}, {text: "used since about 1990, much of world's cheese", k: 'full', at: K6.since}, {text: 'cheesemakers: steady, cheaper supply', k: 'full', at: K6.cheese}]} />
				<Pl p={PLATES.fermenter} cx={1050} cy={460} w={150} o={prog(f, K6.factory, 14)} />
				<GTag x={1050} y={680} text="same logic as medicine" at={K6.factory + 10} out={K6.calves} size={24} anchor="middle" />
				<Pl p={PLATES.cheese} cx={640} cy={400} w={300} o={prog(f, K6.chym, 14)} />
				<g opacity={1 - 0.55 * prog(f, K6.b1, 14)}>
					<Sx x={640} y={580} text="chymosin" size={50} color={INK} weight={800} anchor="middle" at={K6.chym} />
					<Sx x={640} y={624} text="the enzyme that curdles milk" size={32} color={GREY_INK} hand anchor="middle" at={K6.chym + 10} />
				</g>
				<Pl p={PLATES.calf} cx={220} cy={440} w={220} o={prog(f, K6.calves - 6, 14)} dim={calfDim} />
				<GTag x={220} y={580} text="calf rennet" at={K6.calves + 6} size={26} anchor="middle" />
				{/* the same enzyme from both sources */}
				<EnzymeG x={lerp(220, 600, slide)} y={780} s={1.3} o={prog(f, K6.sameEnz - 6, 10)} />
				<EnzymeG x={lerp(1050, 600, slide)} y={780} s={1.3} o={prog(f, K6.sameEnz - 6, 10) * (slide < 0.98 ? 1 : 0.85)} />
				{slide > 0.98 ? <circle cx={600} cy={780} r={70} fill="none" stroke={AMBER} strokeWidth={4} opacity={vis(f, K6.sameEnz + 34, K6.calves2 + 10, 8)} /> : null}
				<Tg x={600} y={900} text="identical enzyme" at={K6.sameEnz + 36} out={K6.calves2 + 20} size={38} anchor="middle" />
				<g opacity={vis(f, K6.calves2 + 26) * (1 - 0.5 * prog(f, K6.since + 30, 14))}>
					<EnzymeG x={860} y={790} s={1.1} alt grey />
				</g>
				<GTag x={600} y={880} text="fungal enzymes: can taste bitter in aged cheese" at={K6.calves2 + 30} out={K6.who} size={24} anchor="middle" />
				{void K6.shown}
			</Overlay>
		</>
	);
};

// ---------- 7. Tank or field ----------
const K7 = cues(S('tank-or-field'), {med: 'In medicine and', sealed: 'stay sealed', only: 'only the purified', leaves: 'leaves.', farm: 'On a farm,', released: 'released.', grows: 'It grows among', pests: 'pests can evolve', one: 'if one variety', narrows: 'diversity narrows', bt: "That's why Bt", fewer: 'far fewer sprays', refuges: 'refuges keep', gain: 'A gain in harvest'});
const FIELD = {cx: 1220, cy: 450, w: 760};
export const SceneTankField: React.FC = () => {
	const f = useCurrentFrame();
	const k = FIELD.w / 1600;
	const fh = 582 * k;
	const fx0 = FIELD.cx - FIELD.w / 2, fy0 = FIELD.cy - fh / 2;
	const splitX = fx0 + (1010 - 200) * k;
	const vialT = smooth(prog(f, K7.only + 6, 40));
	const rel = f - K7.released;
	const out = (i: number) => {
		if (rel < 0) return null;
		const t = ((rel / 70 + i / 6) % 1 + 1) % 1;
		const ang = [-2.2, -1.6, -0.9, 2.4, 2.9, 3.4][i];
		const cx = (fx0 + splitX) / 2, cy = FIELD.cy;
		return {x: cx + Math.cos(ang) * (120 + 260 * t), y: cy + Math.sin(ang) * (90 + 200 * t), o: Math.sin(t * Math.PI) * prog(f, K7.released, 12)};
	};
	const btO = vis(f, K7.bt, K7.gain - 10, 14);
	return (
		<>
			<Heading text="Sealed tank or open field" at={4} size={56} />
			<Overlay>
				<MiniBoard cells={[...DONE.farm, ...DONE.medicine, ...DONE.hormone, ...DONE.industry].map(c => ({...c, at: -100}))} o={prog(f, 0, 14)} />
				<Sx x={110} y={232} text="Why is farming the most argued over?" size={32} color={GREY_INK} hand at={6} out={K7.released} />
				{/* the sealed tank */}
				<Pl p={PLATES.fermenter} cx={330} cy={480} w={210} o={prog(f, K7.med, 14)} />
				<rect x={190} y={270} width={280} height={420} rx={30} fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={prog(f, K7.sealed, 12)} />
				<g opacity={vis(f, K7.sealed, K7.farm + 30, 12)}>
					<circle cx={560} cy={380} r={72} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={392} y1={430} x2={492} y2={400} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="5 5" />
					{Array.from({length: 7}, (_, i) => {
						const a = (f / 30) * 1.6 + (i * Math.PI * 2) / 7;
						const r = 22 + (i % 3) * 14;
						const x = 560 + Math.cos(a) * r, y = 380 + Math.sin(a) * r;
						return <ellipse key={i} cx={x} cy={y} rx={10} ry={5} transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`} fill="#cfe3b8" stroke="#5e8a3a" strokeWidth={2} />;
					})}
				</g>
				{vialT > 0.01 ? <VialG x={lerp(330, 560, vialT)} y={lerp(690, 760, vialT)} s={1.2} o={1 - prog(f, K7.farm + 40, 14)} /> : null}
				<GTag x={330} y={770} text="contained" at={K7.leaves} out={K7.released} size={26} anchor="middle" />
				{/* the open field: monoculture half stays, mixed half dims */}
				<Pl p={PLATES.field} cx={FIELD.cx} cy={FIELD.cy} w={FIELD.w} o={prog(f, K7.farm - 6, 14)} />
				<rect x={splitX} y={fy0 - 4} width={fx0 + FIELD.w - splitX + 6} height={fh + 8} fill="#faf6ec" opacity={0.7 * prog(f, K7.farm, 14)} />
				<g opacity={prog(f, K7.farm + 6, 14)}>
					<path d={`M${fx0 - 14},${fy0 + 40} L${fx0 - 14},${fy0 - 14} L${splitX + 10},${fy0 - 14} L${splitX + 10},${fy0 + 40} M${splitX + 10},${fy0 + fh - 40} L${splitX + 10},${fy0 + fh + 14} L${fx0 - 14},${fy0 + fh + 14} L${fx0 - 14},${fy0 + fh - 40}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 9" />
				</g>
				{[0, 1, 2, 3, 4, 5].map(i => {
					const p = out(i);
					if (!p || p.o <= 0.01) return null;
					return i % 2 ? <InsectG key={i} x={p.x} y={p.y} s={0.8} o={p.o} /> : <Pollen key={i} x={p.x} y={p.y} o={p.o} />;
				})}
				<InsectG x={1100} y={660} s={1.1} o={vis(f, K7.pests, K7.bt, 12)} color={AMBER_INK} />
				<Tg x={1150} y={672} text="resistance evolves" at={K7.pests + 8} out={K7.narrows} size={36} />
				{/* crop genetic diversity narrows */}
				<MiniLevels x={840} y={740} w={240} h={150} labels marks={[{r: 2, kind: 'down', o: prog(f, K7.narrows + 10, 10)}]} o={vis(f, K7.narrows - 6, undefined, 12)} lit={[0, 0, prog(f, K7.narrows + 10, 1)]} />
				<GTag x={1100} y={790} text="b12: the banana problem returns" at={K7.narrows + 14} out={K7.bt} size={24} />
				{/* Bt cotton: far fewer sprays, held by refuges */}
				<g opacity={btO}>
					<Pl p={PLATES.cotton} cx={190} cy={870} w={150} />
					<Sx x={290} y={826} text="ordinary cotton" size={22} color={GREY_INK} weight={700} />
					<rect x={290} y={836} width={300 * smooth(prog(f, K7.fewer, 18))} height={24} rx={6} fill="#c9c4bb" />
					<Sx x={290} y={892} text="Bt cotton" size={22} color={GREY_INK} weight={700} />
					<rect x={290} y={902} width={45 * smooth(prog(f, K7.fewer + 10, 18))} height={24} rx={6} fill={AMBER} />
					<RefugeStrip x={640} y={836} w={150} h={70} o={prog(f, K7.refuges, 12)} />
				</g>
				<GTag x={290} y={950} text="about 85% less insecticide" at={K7.fewer + 20} out={K7.gain - 10} size={24} />
				<GTag x={620} y={950} text="holds while refuges work" at={K7.refuges + 10} out={K7.gain - 10} size={24} />
				{/* the trade-off */}
				<Sx x={FIELD.cx} y={fy0 + fh + 64} text="biodiversity trade-off" size={32} color={GREY_INK} weight={700} anchor="middle" at={K7.gain} />
				<GTag x={1100} y={790} text="b12: yield isn't a level" at={K7.gain + 16} size={24} />
				{void K7.grows}{void K7.one}{void EDGE}{void DrawPath}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 8. Ranking on the full board ----------
const K8 = cues(S('ranking'), {so: 'So which benefits', did: 'did something the', meas: 'measures the real', reaches: 'reaches the people', gh: 'Growth hormone and', clear: 'with clear evidence', ins: 'Insulin and chymosin', reach: "insulin's reach", other: 'Other farm crops', managed: "how they're managed", gains: 'who gains', advanced: 'how advanced'});
type BCell = {t: string; k: DotK} | undefined;
const BOARD: {title: string; sub: string; plate: keyof typeof PLATES; pw: number; cells: BCell[]}[] = [
	{title: 'papaya', sub: 'farm', plate: 'papayaOk', pw: 54, cells: [{t: 'dying trees, no resistant variety', k: 'full'}, {t: 'harvests climbed back after 1998', k: 'full'}, {t: 'growers', k: 'full'}]},
	{title: 'insulin', sub: 'medicine', plate: 'vial', pw: 28, cells: [{t: 'pig and cattle insulin worked too', k: 'half'}, {t: 'trials: similar control; supply grew', k: 'full'}, {t: 'depends on price', k: 'half'}]},
	{title: 'growth hormone', sub: 'medicine', plate: 'hormone', pw: 28, cells: [{t: 'scarce, and some batches unsafe', k: 'full'}, {t: 'harm from old source documented; replaced 1985', k: 'full'}, undefined]},
	{title: 'chymosin', sub: 'industry', plate: 'cheese', pw: 64, cells: [{t: 'same enzyme, no calves needed', k: 'full'}, {t: "used since about 1990, much of world's cheese", k: 'full'}, {t: 'cheesemakers: steady, cheaper supply', k: 'full'}]},
];
const BX0 = 590, BCW = 310, BY0 = 215, BHEAD = 110, BRH = 196;
const bcx = (c: number) => BX0 + c * BCW;
const bry = (r: number) => BY0 + BHEAD + r * BRH;
const wrapW = (text: string, w: number, size: number) => {
	const out: string[] = [];
	let cur = '';
	for (const wd of text.split(' ')) {
		const t = cur ? cur + ' ' + wd : wd;
		if (tw(t, size, true) > w && cur) { out.push(cur); cur = wd; } else cur = t;
	}
	if (cur) out.push(cur);
	return out;
};
export const SceneRanking: React.FC = () => {
	const f = useCurrentFrame();
	const grow = smooth(prog(f, 0, 26));
	const rowLit = (r: number) => (r === 0 ? vis(f, K8.did, K8.meas, 10) : r === 1 ? vis(f, K8.meas, K8.reaches, 10) : vis(f, K8.reaches, K8.gh - 6, 10));
	const strong = (c: number, r: number) => (c === 0 || c === 2) && r < 2 ? prog(f, K8.gh, 12) : 0;
	const pulse2 = (r: number) => (r === 1 ? Math.max(0, Math.sin(clamp01((f - K8.clear) / 30) * Math.PI)) : 0);
	const thinCol = (c: number) => (c === 1 || c === 3 ? prog(f, K8.ins, 12) : 0);
	return (
		<>
			<Heading text="Which benefits hold up best?" at={4} size={56} />
			<Overlay>
				<g opacity={grow} transform={`translate(${1800 * (1 - lerp(0.7, 1, grow))},${200 * (1 - lerp(0.7, 1, grow))}) scale(${lerp(0.7, 1, grow)})`}>
					{[0, 1, 2].map(r => <TestLabel key={r} r={r as TestK} x={LABEL_X - 10} y={bry(r) + 40} lit={rowLit(r)} size={34} />)}
					{BOARD.map((col, c) => {
						const x = bcx(c);
						const thin = thinCol(c);
						return (
							<g key={c}>
								<rect x={x} y={BY0} width={BCW - 16} height={BHEAD + 3 * BRH} rx={20} fill={CARD} stroke={thin > 0.5 ? AMBER : EDGE} strokeWidth={thin > 0.5 ? 2.5 : 2} />
								<Pl p={PLATES[col.plate]} cx={x + 20 + col.pw / 2} cy={BY0 + 54} w={col.pw} />
								<Sx x={x + 34 + col.pw} y={BY0 + 50} text={col.title} size={col.title.length > 10 ? 30 : 36} color={INK} hand weight={700} />
								<Sx x={x + 34 + col.pw} y={BY0 + 82} text={col.sub} size={20} color={GREY_INK} weight={600} />
								{col.cells.map((cell, r) => {
									const y = bry(r);
									const st = strong(c, r);
									const lit = Math.max(rowLit(r), st);
									const lines = cell ? wrapW(cell.t, BCW - 90, 26) : [];
									const hh = lines.length * 32 + 22;
									const pz = 1 + 0.35 * rowLit(r) + 0.3 * pulse2(r) * st + (c === 1 && r === 2 ? 0.4 * Math.max(0, Math.sin(clamp01((f - K8.reach) / 30) * Math.PI)) : 0);
									return (
										<g key={r}>
											<line x1={x + 14} x2={x + BCW - 30} y1={y - 6} y2={y - 6} stroke={EDGE} strokeWidth={2} />
											{cell ? (
												<g>
													<rect x={x + 12} y={y + 14} width={BCW - 40} height={hh} rx={14} fill={st > 0.5 ? '#fff8e6' : '#f6f5f1'} stroke={st > 0.5 ? AMBER : EDGE} strokeWidth={st > 0.5 ? 3 + 2 * pulse2(r) : 2} />
													{lines.map((t, i) => <Sx key={i} x={x + 28} y={y + 46 + i * 32} text={t} size={26} color={lit > 0.5 ? INK : GREY_INK} hand weight={700} at={-100} />)}
													<g transform={`translate(${x + BCW - 52},${y + 14 + hh / 2}) scale(${pz}) translate(${-(x + BCW - 52)},${-(y + 14 + hh / 2)})`}><Dot x={x + BCW - 52} y={y + 14 + hh / 2} k={cell.k} r={13} grey={lit > 0.5 ? 0 : 1} /></g>
												</g>
											) : <rect x={x + 12} y={y + 14} width={BCW - 40} height={70} rx={14} fill="none" stroke={GREYT} strokeWidth={2} strokeDasharray="6 6" />}
										</g>
									);
								})}
							</g>
						);
					})}
				</g>
				<GTag x={bcx(2) + 20} y={bry(2) + 100} text="depends on cost" at={K8.gh + 30} out={K8.reach} size={24} />
				<GTag x={bcx(1) + 20} y={bry(2) + 120} text="reach depends on price" at={K8.reach + 6} out={K8.other} size={24} />
				<g opacity={vis(f, K8.other, undefined, 14)}>
					<Pl p={PLATES.cotton} cx={bcx(0) + 50} cy={980} w={80} />
					<RefugeStrip x={bcx(0) + 100} y={950} w={120} h={50} />
				</g>
				<GTag x={bcx(0) + 240} y={958} text="depends on management" at={K8.managed} size={24} />
				<MistakeChip x={1220} y={960} text="most advanced = most beneficial" at={K8.advanced - 10} cross={K8.advanced + 20} size={30} />
				{void K8.so}{void K8.gains}{void AMBER_INK}{void INK_SOFT}{void TESTS}{void TestIcon}{void labelY}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {here: "Here's the test", t1: 'Better than what?', t2: 'Shown how?', t3: 'Who gets it?', and: 'And one reminder', gain: 'a gain in harvest'});
/** A small coded field icon (crop rows). */
const FieldIcon: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - 40} y={y - 26} width={80} height={52} rx={8} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={2.5} />
		{[-24, -8, 8, 24].map(dx => <line key={dx} x1={x + dx} y1={y - 18} x2={x + dx} y2={y + 18} stroke="#2f8a5b" strokeWidth={3} strokeDasharray="5 4" />)}
	</g>
));
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K9.t1, K9.t2, K9.t3];
	return (
		<Overlay>
			{[0, 1, 2].map(r => <TestLabel key={r} r={r as TestK} x={LABEL_X} y={labelY(r)} o={1 - prog(f, 10, 20)} />)}
			{[0, 1, 2].map(r => (
				<g key={r} opacity={prog(f, at[r] - 4, 12)}>
					<TestIcon k={r as TestK} x={230} y={300 + r * 140} s={1.8} color={AMBER_INK} />
					<Sx x={330} y={326 + r * 140} text={TESTS[r]} size={84} color={INK} hand weight={700} at={at[r] - 4} />
				</g>
			))}
			<FieldIcon x={230} y={790} o={prog(f, K9.gain - 4, 12)} />
			<Sx x={330} y={812} text="A gain in harvest isn't a gain in biodiversity." size={58} color={AMBER_INK} hand weight={700} at={K9.gain - 4} />
			{void K9.here}{void K9.and}{void GREY_INK}
		</Overlay>
	);
};
