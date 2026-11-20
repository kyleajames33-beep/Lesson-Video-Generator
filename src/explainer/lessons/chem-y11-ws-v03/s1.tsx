// Y11 Chem WS V03 scenes 1 to 4: ws-v02's final frame (the lidded crucible, desiccator and balance, the finished plan)
// giving way to two classes' results; the run strip of planned safe work (glasses, the lidded crucible over a small
// blue flame, tongs on the mat, the balance away from the flame) with the plan's safe chips ticking; the same strip
// while the controls are evaluated (the lid knocked open, a hot crucible nearly weighed, the desiccator rule, darkening
// powder); and the balance close up (zero, the check mass, one balance per sample, readings logged at once).
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CHECK, CLASS1, CLASS2, CRU_B, CRU_K, CRU_LID, CRU_LIDW, DESIC, GLASSES, MAT, TONGS, sc} from './common';
import {
	BalanceW, Bowl, Bracket, Chip, DrawPath, Fade, Flame, GOLD_F, GOLD_S, GOLD_T, GREEN_T, Heading, INK, Inset, Lidded, NAVY_T, PenArrow, PenRing, Plate, PlanBoard, PlanMini, RED_S, RED_T, Readout,
	Rich, SEC, SVG, Sx, TEAL_S, TEAL_T, TERRA_T, Tag, TickMark, VIOLET_S, VIOLET_T, balW, chipW, cruGeo, kf, lerp, plateMap, prog, smooth, vis,
} from './parts';
import type {Seg} from './parts';
import {WS2_END, WS2_HL, WsV02Final, ws2FullSecs} from './opening';

// ---------- 1. hook: two careful classes (opens on ws-v02's final frame) ----------
const K1 = cues(sc('hook'), {plan: 'out the plan', two: 'Two classes', a1: 'thirty-six point zero', b1: 'thirty-five point eight', c1: 'thirty-six point two', a2: 'thirty-four point three', b2: 'thirty-four point five', c2: 'thirty-four point four', agree: 'Both sets agree', formula: 'the formula says', target: 'thirty-six point one', which: 'So which class', know: 'would we know'});
const HC = [{x: 110, chips: 430, col: TEAL_T, stroke: TEAL_S, label: 'class 1', vals: CLASS1}, {x: 790, chips: 1110, col: NAVY_T, stroke: NAVY_T, label: 'class 2', vals: CLASS2}];
const CH_Y = [330, 420, 510];
const MINI = {x: 1440, y: 190, w: 384, h: 330};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const at = [[K1.a1, K1.b1, K1.c1], [K1.a2, K1.b2, K1.c2]];
	// ws-v02's board shrinks to the top right while the small plan card takes its place
	const sh = smooth(prog(f, 30, 30));
	const bs = lerp(1, 0.42, sh), bo = 1 - prog(f, 46, 16);
	const B = WS2_HL.board;
	// the opening crucible moves to class 1 and turns white (heated)
	const mv = smooth(prog(f, 30, 32));
	const cx = lerp(WS2_HL.crucible.x, HC[0].x, mv), cy = lerp(WS2_HL.crucible.y, 280, mv), chh = lerp(WS2_HL.crucible.h, 470, mv);
	const white = prog(f, 50, 24);
	const cw = chipW([{t: '36.0%'}], 44, false);
	return (
		<SVG>
			{/* the live copies under ws-v02's frozen frame: the plan board and the lidded crucible */}
			{bo > 0.005 ? (
				<g opacity={bo} transform={`translate(${B.x + B.w},${B.y}) scale(${bs}) translate(${-(B.x + B.w)},${-B.y})`}>
					<PlanBoard {...B} tsize={32} lh={37} gap={10} secs={ws2FullSecs()} />
				</g>
			) : null}
			<Plate p={CRU_LID} x={cx} y={cy} h={chh} o={1 - white} />
			<Plate p={CRU_LIDW} x={cx} y={cy} h={chh} o={white} />
			<Fade at={-1000} out={14} d={16}>
				<Freeze frame={WS2_END}><WsV02Final /></Freeze>
			</Fade>
			{/* the small plan card */}
			<PlanMini {...MINI} at={50} lines={[
				{segs: [{t: 'valid'}], color: SEC.valid, tick: -1000},
				{segs: [{t: 'reliable'}], color: SEC.reliable, tick: -1000},
				{segs: [{t: 'equipment'}], color: SEC.equipment, tick: -1000},
				{segs: [{t: 'safe and ethical'}], color: SEC.safe, tick: -1000},
			]} size={34} lh={56} />
			<Heading text="Two classes, one plan" at={36} out={K1.know - 8} />
			<Heading text="Collecting data safely and accurately" at={K1.know} />
			{HC.map((c, i) => (
				<g key={i}>
					{i === 1 ? <Plate p={CRU_LIDW} x={c.x} y={280} h={470} at={34} dy={20} /> : null}
					<Sx x={c.x} y={262} text={c.label} size={44} color={c.col} weight={800} at={40 + i * 8} />
					{c.vals.map((v, j) => <Chip key={j} x={c.chips} y={CH_Y[j]} segs={[{t: `${v.toFixed(1)}%`}]} at={at[i][j]} size={44} color={c.col} />)}
					<Bracket a={[c.chips + cw + 22, CH_Y[2] + 68]} b={[c.chips + cw + 22, CH_Y[0]]} at={K1.agree + 8} color={VIOLET_S} depth={18} />
					<Tag x={c.chips + cw + 56} y={462} text="tight" at={K1.agree + 14} color={VIOLET_T} />
					<Sx x={c.chips + cw / 2} y={318} text="?" size={52} color={INK} anchor="middle" weight={800} at={K1.know} />
				</g>
			))}
			<Sx x={110} y={800} text="illustrative data" size={30} color={INK} weight={700} at={K1.a1} />
			{/* the accepted value */}
			<Sx x={1450} y={606} text="the formula says" size={34} color={INK} weight={800} at={K1.formula} />
			<Chip x={1450} y={630} segs={[{t: '36.1%'}]} at={K1.target} size={52} color={GOLD_T} fill={GOLD_F} />
			<Tag x={1460} y={790} text="the target" at={K1.target + 10} color={GOLD_T} />
			<Tag x={470} y={800} text="same crystals, three runs each" at={K1.two + 20} color={INK} />
			<Write2 x={110} y={890} text="Which class is accurate? How would we know?" at={K1.which} />
			{void K1.plan}{void GOLD_S}
		</SVG>
	);
};
const Write2: React.FC<{x: number; y: number; text: string; at: number}> = ({x, y, text, at}) => <Tag x={x} y={y} text={text} at={at} color={INK} size={48} />;

// ---------- the run strip shared by scenes 2 and 3 ----------
const BENCH = 880;
const GL = {x: 96, w: 320}; const GLH = (GL.w / GLASSES.box[2]) * GLASSES.box[3];
const CRU = {x: 440, y: 320, h: 560};
const MT = {x: 830, w: 330}; const MTH = (MT.w / MAT.box[2]) * MAT.box[3];
const TG = {x: 845, w: 300}; const TGH = (TG.w / TONGS.box[2]) * TONGS.box[3];
const BALS = balW(1494, 0, 330);
const BAL_S = balW(1494, BENCH - BALS.h, 330);
const DS = {x: 1185, h: 340}; const DSW = (DS.h / DESIC.box[3]) * DESIC.box[2];
/** The plan's safe chips across the top (tick on cue) and the added rules in a second row. */
type SChip = {segs: Seg[]; at?: number; tick?: number; color?: string};
const PlanStrip: React.FC<{row1: SChip[]; row2?: SChip[]}> = ({row1, row2 = []}) => {
	const row = (cs: SChip[], y: number) => {
		let x = 300;
		return cs.map((c, i) => {
			const w = chipW(c.segs, 30, false);
			const x0 = x;
			x += w + 12;
			return (
				<g key={i}>
					<Chip x={x0} y={y} segs={c.segs} at={c.at ?? -1000} size={30} color={c.color ?? INK} />
					{c.tick !== undefined ? <TickMark x={x0 + w - 8} y={y - 2} at={c.tick} s={0.8} /> : null}
				</g>
			);
		});
	};
	return (
		<g>
			<rect x={96} y={180} width={1728} height={row2.length ? 140 : 80} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3.5} />
			<Sx x={120} y={232} text="Our plan:" size={40} color={INK} hand weight={700} at={-1000} />
			<Sx x={120} y={290} text={row2.length ? 'added:' : ''} size={34} color={INK} hand weight={700} at={-1000} />
			{row(row1, 196)}
			{row(row2, 258)}
		</g>
	);
};
const ROW1 = (k: {glasses: number; hair: number; flame: number; mat: number; away: number}): SChip[] => [
	{segs: [{t: 'glasses on first'}], tick: k.glasses},
	{segs: [{t: 'hair tied back'}], tick: k.hair + 14},
	{segs: [{t: 'lid ajar, small blue flame'}], tick: k.flame},
	{segs: [{t: 'tongs, onto the mat'}], tick: k.mat},
	{segs: [{t: 'balance away from heat'}], tick: k.away},
];

// ---------- 2. employing safe work practices ----------
const K2 = cues(sc('safe-practice'), {only: 'only protects', glasses: 'Safety glasses go', lit: 'is lit', hair: 'long hair', crucible: 'The crucible sits', ajar: 'slightly ajar', flame: 'small blue flame', hot: 'Hot apparatus', tongs: 'only with tongs', mat: 'heatproof mat', balance: 'And the balance', away: 'well away'});
export const SceneSafe: React.FC = () => {
	const f = useCurrentFrame();
	const g = cruGeo(CRU_LID, CRU.x, CRU.y, CRU.h);
	return (
		<SVG>
			<Heading text="Employing safe work practices" at={0} />
			<PlanStrip row1={ROW1({glasses: K2.glasses + 20, hair: K2.hair, flame: K2.flame + 16, mat: K2.mat + 10, away: K2.away + 10})} />
			<line x1={96} x2={1824} y1={BENCH} y2={BENCH} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<Plate p={GLASSES} x={GL.x} y={400} h={GLH} />
			<Lidded id="ws3s2" body={CRU_LID} x={CRU.x} y={CRU.y} h={CRU.h} />
			<Flame x={g.axis} y={g.mouth} h={58 * smooth(prog(f, K2.lit, 16))} />
			<Plate p={MAT} x={MT.x} y={BENCH - MTH} h={MTH} />
			<Plate p={TONGS} x={TG.x} y={BENCH - MTH + 28} h={TGH} />
			<BalanceW g={BAL_S} text="0.00 g" size={40} />
			<Tag x={820} y={372} text="a plan on paper protects no one" at={K2.only} color={TERRA_T} />
			{/* order: glasses before the burner */}
			<Sx x={96} y={620} text="on before lighting" size={34} color={INK} weight={800} at={K2.glasses} />
			<Sx x={300} y={700} text="1" size={56} color={INK} hand weight={700} at={K2.glasses + 4} />
			<PenArrow a={[340, 690]} b={[g.axis - 60, g.mouth - 10]} at={K2.glasses + 8} color={INK} bend={-0.25} />
			<Sx x={g.axis + 70} y={g.mouth + 8} text="2" size={56} color={INK} hand weight={700} at={K2.lit} />
			<Rich x={820} y={448} segs={[{t: 'lid ajar'}]} size={34} at={K2.ajar} />
			<PenArrow a={[812, 438]} b={[g.gap[0] + 20, g.gap[1]]} at={K2.ajar + 6} color={INK} bend={0.2} />
			<Rich x={820} y={640} segs={[{t: 'small blue flame'}]} size={34} at={K2.flame} />
			<PenArrow a={[812, 630]} b={[g.axis + 22, g.mouth - 40]} at={K2.flame + 6} color={INK} bend={-0.2} />
			<PenRing cx={TG.x + TG.w / 2} cy={BENCH - MTH + 28 + TGH / 2} rx={170} ry={62} at={K2.tongs} color={INK} seed={6} />
			<Rich x={830} y={930} segs={[{t: 'hot: tongs, onto the mat'}]} size={34} at={K2.hot} />
			{/* the balance, away from the flame */}
			<DrawPath d={`M1340,${BENCH - 330} L1340,${BENCH + 20}`} at={K2.away} dur={14} color={INK} width={5} dash="14 12" />
			<Tag x={1494} y={600} text="away from the heat" at={K2.away + 4} color={INK} />
			{void K2.crucible}{void K2.balance}{void K2.hair}
		</SVG>
	);
};

// ---------- 3. evaluating safe work, as you go ----------
const K3 = cues(sc('evaluate-safety'), {job: 'do its job', spat: 'crystal spat', knocked: 'knocked fully', works: 'the lid works', place: 'stays in place', another: 'In another', still: 'still hot', burn: 'burn risk', reads: 'reads low', warm: 'warm air', rule: 'add a rule', cool: 'cool in the', weigh: 'then weigh', darken: 'starts to darken', stop: 'stop heating', down: 'breaking down', cant: "can't measure", restart: 'restart gently', teacher: 'teacher checks', check: 'You check it', go: 'as you go'});
export const SceneEvaluate: React.FC = () => {
	const f = useCurrentFrame();
	const g = cruGeo(CRU_LID, CRU.x, CRU.y, CRU.h);
	// incident 1: the lid knocked fully open, then back to ajar
	const off = kf(f, [[K3.spat - 6, 0], [K3.spat + 10, 1], [K3.works + 4, 1], [K3.works + 30, 0]]);
	const lidMoved = off > 0.001;
	const dark = prog(f, K3.darken, 30);
	const flameH = 58 * (1 - smooth(prog(f, K3.stop, 16)));
	// the crystal that spits out
	const cu = prog(f, K3.spat + 4, 26);
	const cx = lerp(g.gap[0] - 20, g.gap[0] + 220, cu), cy = g.gap[1] - 150 * Math.sin(Math.PI * Math.min(1, cu * 0.85)) + cu * cu * 330;
	// incident 2: a hot crucible bowl carried towards the balance, stopping short; it goes into the desiccator on the rule
	const t2 = smooth(prog(f, K3.another + 14, 60));
	const t3 = smooth(prog(f, K3.cool + 8, 30));
	const bx = lerp(lerp(TG.x + 120, 1340, t2), DS.x + DSW / 2, t3), by = lerp(lerp(BENCH - 40, BENCH - 300, Math.sin(Math.PI * 0.5 * t2)), BENCH - 70, t3);
	const bowlO = vis(f, K3.another + 6, K3.cool + 30, 12);
	const hot = vis(f, K3.still - 10, K3.cool + 8, 10);
	const reading = 25.91 - 0.03 * smooth(prog(f, K3.reads + 6, 60));
	const fresh = plateMap(CRU_LID, 0, 0, 200);
	return (
		<SVG>
			<Heading text="Evaluating safety as you go" at={0} />
			<PlanStrip row1={ROW1({glasses: -1000, hair: -1000, flame: -1000, mat: -1000, away: -1000})} row2={[
				{segs: [{t: '+ lid stays ajar'}], at: K3.place + 6, color: TEAL_T},
				{segs: [{t: '+ cool in the desiccator, then weigh'}], at: K3.weigh, color: TEAL_T},
				{segs: [{t: '+ darkening: stop, restart gently'}], at: K3.restart + 10, color: TEAL_T},
			]} />
			<line x1={96} x2={1824} y1={BENCH} y2={BENCH} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<Plate p={GLASSES} x={GL.x} y={400} h={GLH} />
			<Lidded id="ws3s3" body={lidMoved ? CRU_B : dark > 0 ? CRU_B : CRU_LID} body2={CRU_K} mix={dark} x={CRU.x} y={CRU.y} h={CRU.h} dx={330 * off} dy={-60 * Math.sin(Math.PI * off) + 300 * off * off} rot={38 * off} />
			<Flame x={g.axis} y={g.mouth} h={flameH} />
			<Plate p={MAT} x={MT.x} y={BENCH - MTH} h={MTH} />
			<Plate p={TONGS} x={TG.x} y={BENCH - MTH + 28} h={TGH} />
			<BalanceW g={BAL_S} text="0.00 g" size={40} />
			<Plate p={DESIC} x={DS.x} y={BENCH - DS.h} h={DS.h} at={K3.cool - 6} dy={30} />
			{/* incident 1 */}
			{f >= K3.spat + 4 && f < K3.another ? <g opacity={1 - prog(f, K3.another - 20, 14)}>
				<path d={`M${cx},${cy - 13} l11,13 l-11,13 l-11,-13 Z`} fill="#2f7fe0" stroke="#1f4f9e" strokeWidth={3} />
			</g> : null}
			<PenRing cx={g.gap[0] - 30} cy={g.gap[1] - 30} rx={150} ry={70} at={K3.spat} out={K3.works} color={TERRA_T} seed={3} />
			<Fade at={K3.spat} out={K3.another - 8}>
				<Rich x={820} y={450} segs={[{t: 'lid knocked open:', c: TERRA_T}]} size={38} />
				<Rich x={820} y={500} segs={[{t: 'a crystal spat out', c: TERRA_T}]} size={38} />
			</Fade>
			<Tag x={820} y={572} text="works, if it stays put" at={K3.place} out={K3.another - 8} color={TEAL_T} />
			{/* incident 2 */}
			{bowlO > 0.005 ? <g opacity={bowlO}>
				<Bowl id="ws3hot" p={CRU_LID} bx={bx} by={by} rimW={150} />
				{hot > 0.01 ? <g opacity={hot}>
					{[0, 1, 2].map(j => {
						const ph = ((f * 1.6 + j * 20) % 60) / 60;
						return <path key={j} d={`M${bx - 44 + j * 44},${by - 150 - ph * 50} q-10,-12 0,-24 q10,-12 0,-24`} fill="none" stroke={RED_S} strokeWidth={4} strokeLinecap="round" opacity={0.9 - ph * 0.6} />;
					})}
				</g> : null}
			</g> : null}
			<Fade at={K3.still - 4} out={K3.darken - 10}>
				<Rich x={820} y={450} segs={[{t: 'hot crucible,', c: TERRA_T}]} size={38} />
				<Rich x={820} y={500} segs={[{t: 'nearly weighed', c: TERRA_T}]} size={38} />
			</Fade>
			<Tag x={820} y={572} text="burn risk" at={K3.burn} out={K3.cool - 10} color={RED_T} />
			<Inset x={1420} y={330} w={404} h={250} at={K3.reads - 6} out={K3.darken - 10}>
				<Sx x={1444} y={374} text="if weighed hot:" size={30} color={INK} weight={800} at={-1000} />
				<Readout x={1444} y={392} w={340} text={`${reading.toFixed(2)} g`} size={52} anchor="middle" />
				<Tag x={1444} y={556} text="hot reads low" at={K3.reads + 10} color={INK} />
			</Inset>
			<Tag x={1060} y={548} text="warm air lifts it" at={K3.warm} out={K3.cool - 10} color={INK} />
			{/* the rule: cool in the desiccator, then weigh */}
			<PenArrow a={[DS.x + DSW / 2 + 40, BENCH - DS.h - 10]} b={[BAL_S.pan[0] - 40, BAL_S.pan[1] - 30]} at={K3.weigh} out={K3.darken - 10} color={INK} bend={0.3} />
			<Tag x={1130} y={520} text="cool, then weigh" at={K3.weigh + 6} out={K3.darken - 10} color={INK} />
			{/* incident 3: darkening powder */}
			<Tag x={820} y={420} text="darkening: stop" at={K3.darken + 8} color={TERRA_T} />
			<Chip x={820} y={456} segs={[{t: 'this run: not used for water content'}]} at={K3.cant} size={30} color={INK} />
			<PenArrow a={[1390, 480]} b={[1505, 440]} at={K3.restart} color={INK} bend={0.3} />
			<Plate p={CRU_LID} x={1520} y={360} h={200} at={K3.restart + 8} dy={16} />
			<Sx x={1490} y={584} text="restart gently, after" size={30} color={INK} weight={800} at={K3.restart + 12} />
			<Sx x={1490} y={620} text="teacher review" size={30} color={INK} weight={800} at={K3.teacher} />
			<Tag x={1816} y={298} text="check and fix" at={K3.check} color={TEAL_T} size={36} anchor="end" />
			{void K3.job}{void K3.knocked}{void K3.rule}{void K3.down}{void K3.go}{void fresh}{void GREEN_T}{void GOLD_T}
		</SVG>
	);
};

// ---------- 4. ensuring accurate readings ----------
const K4 = cues(sc('ensure-accuracy'), {next: 'Next, accuracy', true: 'true readings', before: 'Before weighing', should: 'should read', zero: 'zero zero.', check: 'check it with', block: 'a metal block', grams: 'zero zero grams', ifr: 'If it reads', trust: 'can trust', each: 'Each sample', same: 'same balance every', diff: 'small differences', record: 'recorded straight', away: 'straight away'});
const BB = balW(96, 0, 760);
const B4 = balW(96, BENCH - BB.h, 760);
const CM = {h: 330}; const CMW = (CM.h / CHECK.box[3]) * CHECK.box[2];
export const SceneAccuracy: React.FC = () => {
	const f = useCurrentFrame();
	// the check mass: waits at the right, travels onto the pan, lifts off for the sample
	const onH = 200, onW = (onH / CHECK.box[3]) * CHECK.box[2];
	const u = smooth(prog(f, K4.block, 34));
	const lift = smooth(prog(f, K4.each, 24));
	const h = lerp(CM.h, onH, u);
	const w = (h / CHECK.box[3]) * CHECK.box[2];
	const x0 = 1180, y0 = 560 - CM.h;
	const x1 = B4.pan[0] - onW / 2, y1 = B4.pan[1] - onH + 22;
	const mx = lerp(x0, x1, u), my = lerp(y0, y1, u) - 160 * Math.sin(Math.PI * u) - 400 * lift;
	const massO = 1 - prog(f, K4.each + 6, 16);
	// the readout: settles to zero, climbs to 10.00 g, returns, then the sample
	const r = f < K4.should ? 0.04 : f < K4.block + 30 ? kf(f, [[K4.should, 0.04], [K4.zero + 4, 0]]) : f < K4.each ? kf(f, [[K4.block + 30, 0], [K4.grams, 10]]) : kf(f, [[K4.each, 10], [K4.each + 16, 0], [K4.each + 40, 0], [K4.each + 70, 26.81]]);
	const bowlIn = smooth(prog(f, K4.each + 30, 30));
	const rows: [string, number][] = [['empty pan: 0.00 g', K4.zero + 4], ['check mass: 10.00 g', K4.grams + 8], ['crucible + crystals: 26.81 g', K4.away - 2]];
	return (
		<SVG>
			<Heading text="Ensuring accurate readings" at={0} />
			<line x1={96} x2={1824} y1={BENCH} y2={BENCH} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<Rich x={96} y={236} segs={[{t: 'true readings first', c: TEAL_T}]} size={44} at={K4.true} out={K4.each} />
			<BalanceW g={B4} text={`${r.toFixed(2)} g`} size={52} />
			{bowlIn > 0.005 ? <g opacity={bowlIn} transform={`translate(0,${-160 * (1 - bowlIn)})`}><Bowl id="ws3b4" p={CRU_LID} bx={B4.pan[0]} by={B4.pan[1] + 8} rimW={280} /></g> : null}
			{massO > 0.005 ? <Plate p={CHECK} x={mx} y={my} h={h} o={massO} /> : null}
			<Sx x={x0 + CMW / 2} y={600} text="check mass" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K4.block} />
			<Sx x={x0 + CMW / 2} y={640} text="(known: 10.00 g)" size={30} color={INK} anchor="middle" weight={700} at={K4.check} out={K4.block} />
			{/* zero first */}
			<TickMark x={B4.disp[0] + 140} y={B4.disp[1] - 6} at={K4.zero + 8} s={1.1} color={TEAL_S} />
			<Tag x={880} y={600} text="zero first" at={K4.should} color={TEAL_T} />
			<PenArrow a={[874, 588]} b={[B4.disp[0] + 160, B4.disp[1] - 20]} at={K4.should + 6} color={TEAL_S} bend={0.2} />
			<Rich x={640} y={330} segs={[{t: 'check mass:'}]} size={34} at={K4.grams} out={K4.each} />
			<Rich x={640} y={372} segs={[{t: 'known value'}]} size={34} at={K4.grams + 4} out={K4.each} />
			<PenRing cx={B4.disp[0] - 10} cy={B4.disp[1] - 14} rx={170} ry={56} at={K4.ifr} color={TEAL_S} seed={4} />
			<Tag x={880} y={680} text="reads true" at={K4.ifr + 8} color={TEAL_T} />
			{/* one balance per sample */}
			<Inset x={1000} y={200} w={824} h={360} at={K4.same - 4} strike={K4.diff}>
				<Sx x={1024} y={244} text="a different balance:" size={30} color={INK} weight={800} at={-1000} />
				<BalanceW g={balW(1040, 260, 400)} text="26.83 g" size={40} />
				<Rich x={1480} y={420} segs={[{t: '+0.02 g?', c: RED_T}]} size={44} />
			</Inset>
			<Tag x={1200} y={612} text="one balance per sample" at={K4.diff + 10} color={RED_T} />
			{/* the logbook */}
			<Fade at={K4.zero}>
				<rect x={1100} y={660} width={724} height={236} rx={16} fill="#fffdf8" stroke={NAVY_T} strokeWidth={4} />
				<Sx x={1124} y={704} text="logbook" size={38} color={NAVY_T} hand weight={700} at={-1000} />
			</Fade>
			{rows.map(([t, a], i) => <Rich key={i} x={1130} y={762 + i * 50} segs={[{t}]} size={38} at={a} />)}
			<Tag x={1810} y={706} text="write it now" at={K4.record} color={INK} anchor="end" />
			{void K4.next}{void K4.before}{void K4.trust}{void GOLD_S}
		</SVG>
	);
};
