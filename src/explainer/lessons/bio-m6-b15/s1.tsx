// M6 B15 scenes 1 to 4: one bull reaching many farms against one wheat ear at a time; what both methods share (choose
// the parents, no DNA changed, gametes still vary by meiosis, sex-sorted semen is not certain); step one, collect and
// store (semen collected, diluted, frozen in straws for decades; pollen from the anthers lasts hours); step two, deliver
// and keep other gametes out (timing and no bull for the cow, shown on the tract diagram only; the flower's anthers out,
// then the flower isolated, the chosen pollen on, and a bag as one example).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {Brace, GreyCross, ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {ANTHERS, STIGMA, TRACT} from './assets';
import {
	AMBER, AMBER_INK, CARD, ClockRing, ColHead, Divider, EDGE, FemaleSym, GREYT, GREY_INK, GreyTick, INK, INK_SOFT, MaleSym, PLATES, Pill, Pl, PlC, PollenDot,
	Rail, ReachMap, Rg, SlimStrand, Sperm, StrawG, TOP, Vial, Wisp, clamp01, colsAt, lerp, platePt, prog, smooth, vis,
} from './parts';
import type {RK} from './parts';

const C0 = colsAt(0);
/** The comparison board's frame: heads, divider and rail. */
export const BoardTop: React.FC<{cols?: [ColG2, ColG2]; n: number; last?: number; active?: number; lit?: [number, number]; o?: number; divider?: boolean}> = ({cols = C0, n, last = 1, active = -1, lit = [1, 1], o = 1, divider = true}) => (
	<g opacity={o}>
		<ColHead c={cols[0]} kind="ai" lit={lit[0]} />
		<ColHead c={cols[1]} kind="ap" lit={lit[1]} />
		{divider ? <Divider cols={cols} /> : null}
		<Rail n={n} last={last} active={active} />
	</g>
);
type ColG2 = ReturnType<typeof colsAt>[0];

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {bull: 'One champion dairy bull', tens: 'tens of thousands', without: 'without ever meeting', wheat: 'A wheat breeder', ear: 'one ear at a time', choosing: 'Both are choosing', ai: 'artificial insemination', ap: 'artificial pollination', reshape: 'reshape a whole breed', faster: 'faster'});
export const HOOK = {bull: {cx: 500, cy: 400, w: 440}, ear: {cx: 1420, cy: 490, w: 230}};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = vis(f, K1.reshape, K1.faster + 30, 8) * (0.5 + 0.5 * Math.sin((f - K1.reshape) / 4));
	const dotT = smooth(prog(f, K1.ear, 40));
	const earTop = platePt(PLATES.ear, HOOK.ear.cx, HOOK.ear.cy, HOOK.ear.w, 560, 300);
	return (
		<>
			<Heading text="Same aim, different reach?" at={K1.faster} size={64} />
			<Overlay>
				<Pl p={PLATES.bull} cx={HOOK.bull.cx} cy={HOOK.bull.cy} w={HOOK.bull.w} o={prog(f, K1.bull, 16)} />
				<ReachMap cx={HOOK.bull.cx} cy={790} w={560} t={prog(f, K1.tens, 70, x => x)} calves={prog(f, K1.tens + 30, 60, x => x)} pulse={pulse} o={prog(f, K1.tens - 6, 12)} />
				<GTag x={HOOK.bull.cx} y={572} text="no mating: frozen semen" at={K1.without} out={K1.ear} size={28} anchor="middle" />
				<PlC p={PLATES.ear} cx={HOOK.ear.cx} cy={HOOK.ear.cy} w={HOOK.ear.w} id="b15-hook-ear" o={prog(f, K1.wheat, 16)} />
				<PollenDot x={lerp(1760, earTop[0], dotT)} y={lerp(300, earTop[1], dotT) - Math.sin(dotT * Math.PI) * 50} r={9} o={vis(f, K1.ear, K1.choosing + 20, 8)} />
				<GTag x={HOOK.ear.cx} y={760} text="one ear at a time" at={K1.ear + 10} out={K1.faster} size={28} anchor="middle" />
				<Brace x1={HOOK.bull.cx} x2={HOOK.ear.cx} y={196} at={K1.choosing} label="choose the parents" size={34} out={K1.faster} />
				{void K1.ai}{void K1.ap}
			</Overlay>
		</>
	);
};

// ---------- 2. What both do ----------
const K2 = cues(S('what-both-do'), {share: 'what they share', choose: 'Both choose which', dna: 'neither changes any DNA', vary: 'still vary', meiosis: 'Meiosis gives', mix: 'its own mix', differ: 'still differ', sorted: 'sex-sorted semen', xchrom: 'Sperm carrying an X', more: 'slightly more DNA', machine: 'a machine can sort', notp: 'not perfectly', nine: 'nine in ten', likely: 'more likely, not'});
const GAMETE: [RK, RK][] = [['A', 'C'], ['B', 'D'], ['A', 'D'], ['B', 'C']];
const SPERM: ('X' | 'Y')[] = ['X', 'Y', 'X', 'X', 'Y', 'Y', 'X', 'Y', 'X', 'Y'];
const SLIP = 7;
export const SceneBoth: React.FC = () => {
	const f = useCurrentFrame();
	const cellsO = vis(f, K2.meiosis - 6, K2.sorted, 12);
	const cx = 640, cy = 650, cw = 330;
	const q = (i: number): [number, number] => [cx + (i % 2 ? 1 : -1) * cw * 0.245, cy + (i < 2 ? -1 : 1) * cw * 0.245];
	const offX = (i: number) => 1060 + i * 190;
	const sortO = prog(f, K2.sorted, 12);
	const gateX = 760;
	const spermPos = (i: number): [number, number, number] => {
		const t = (f - K2.xchrom - i * 9) / 70;
		if (t <= 0) return [440, 640, 0];
		const goX = SPERM[i] === 'X' || (i === SLIP && f >= K2.notp);
		if (t < 0.55) return [lerp(440, gateX, t / 0.55), 640 + Math.sin(i * 1.7) * 30 * (1 - t / 0.55), 1];
		const u = clamp01((t - 0.55) / 0.45);
		return [lerp(gateX, 880, u), lerp(640, goX ? 530 : 750, u), 1 - prog(f, K2.xchrom + i * 9 + 72, 8)];
	};
	return (
		<>
			<Heading text="What both do" at={4} size={60} />
			<Overlay>
				<BoardTop n={1} last={prog(f, K2.share, 14)} active={0} o={prog(f, 0, 14)} />
				<Pill x={430} y={TOP + 10} text="choose the parents" size={32} o={prog(f, K2.choose, 12)} lit={1 - prog(f, K2.dna, 10)} />
				<Pill x={1150} y={TOP + 10} text="more likely, not certain" size={32} o={prog(f, K2.likely, 12)} />
				{/* DNA unchanged under each column */}
				<g opacity={vis(f, K2.dna, K2.meiosis, 12)}>
					{[C0[0], C0[1]].map((c, i) => (
						<g key={i}>
							<SlimStrand x={c.cx - 170} y={480} n={10} pitch={30} gap={30} lineW={3} />
							<GreyTick x={c.cx - 110} y={580} text="DNA unchanged" o={prog(f, K2.dna + 12, 10) * (1 - 0.5 * prog(f, K2.vary, 10))} />
						</g>
					))}
				</g>
				{/* meiosis: four different gametes, each sends its own ring set */}
				<g opacity={cellsO}>
					<Pl p={PLATES.cells4} cx={cx} cy={cy} w={cw} />
					<Sx x={cx} y={cy + cw / 2 + 40} text="meiosis: four different gametes" size={28} color={GREY_INK} hand anchor="middle" opacity={1 - 0.6 * prog(f, K2.mix + 30, 10)} />
					{GAMETE.map((pair, i) => {
						const t = smooth(prog(f, K2.mix + i * 8, 34));
						const [sx, sy] = q(i);
						const x = lerp(sx, offX(i), t), y = lerp(sy, 740, t);
						return (
							<g key={i} opacity={prog(f, K2.mix + i * 8, 6)}>
								<Rg x={x - 14} y={y} r={11} k={pair[0]} />
								<Rg x={x + 14} y={y} r={11} k={pair[1]} />
							</g>
						);
					})}
					{GAMETE.map((_, i) => <Pl key={i} p={PLATES.calf} cx={offX(i)} cy={650} w={130} o={prog(f, K2.mix + 30 + i * 8, 10)} />)}
				</g>
				<Tg x={1340} y={850} text="each gamete, its own mix" at={K2.mix + 40} out={K2.sorted} anchor="middle" size={38} />
				{/* sex-sorted semen: sorted by DNA content, not perfectly */}
				<g opacity={sortO}>
					<rect x={gateX - 20} y={540} width={40} height={74} rx={8} fill="#e9e2d4" stroke={INK_SOFT} strokeWidth={3} />
					<rect x={gateX - 20} y={668} width={40} height={74} rx={6} fill="#e9e2d4" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={gateX} y={526} text="sorter" size={24} color={GREY_INK} hand anchor="middle" />
					<StrawG x={880} y={530} w={200} fill={0.6} />
					<StrawG x={880} y={750} w={200} fill={0.4} />
					<Sx x={980} y={508} text="X straw" size={24} color={GREY_INK} hand anchor="middle" />
					<Sx x={980} y={790} text="Y straw" size={24} color={GREY_INK} hand anchor="middle" />
					{SPERM.map((l, i) => {
						const [x, y, o] = spermPos(i);
						return <Sperm key={i} x={x} y={y} l={l} o={o} s={1.5} glow={l === 'X' ? vis(f, K2.more, K2.machine + 30, 10) : 0} />;
					})}
					{Array.from({length: 10}, (_, i) => (
						<g key={i} opacity={prog(f, K2.nine + i * 3, 8)}>
							<Pl p={PLATES.calf} cx={460 + i * 64} cy={870} w={60} />
							{i === 9 ? <MaleSym x={460 + i * 64} y={922} s={0.75} /> : <FemaleSym x={460 + i * 64} y={924} s={0.75} />}
						</g>
					))}
				</g>
				<Tg x={440} y={1000} text="about 9 in 10 female" at={K2.nine + 30} out={K2.likely} size={38} />
				{void K2.differ}{void CARD}{void EDGE}{void AMBER}{void INK}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 3. Step one: collect and store ----------
const K3 = cues(S('collect-store'), {compare: 'Now compare the processes', step: 'Step one', semen: 'Semen is collected', diluted: 'diluted into hundreds', frozen: 'frozen in thin straws', stored: 'Stored like this', decades: 'keeps for decades', sent: 'sent anywhere', pollen: 'Pollen is collected', anthers: 'anthers of the chosen', survives: 'survives only hours', fresh: 'used fresh'});
export const SceneCollect: React.FC = () => {
	const f = useCurrentFrame();
	const leftDim = prog(f, K3.pollen, 12);
	const fl = {cx: 1420, cy: 620, w: 380};
	const A = ANTHERS.map(a => platePt(PLATES.floret, fl.cx, fl.cy, fl.w, a[0], a[1]));
	const split = prog(f, K3.diluted, 30);
	const send = smooth(prog(f, K3.sent, 30));
	const clock = prog(f, K3.survives + 6, 60, x => x);
	const ear2 = {cx: 1745, cy: 720};
	return (
		<>
			<Heading text="Step one: collect and store" at={4} size={60} />
			<Overlay>
				<BoardTop n={2} last={prog(f, K3.step, 14)} active={1} lit={[1 - 0.7 * leftDim, 0.3 + 0.7 * prog(f, K3.pollen - 6, 12)]} />
				{/* the bull's semen: collected, diluted into doses, frozen */}
				<g opacity={1 - 0.6 * leftDim}>
					<Pl p={PLATES.bull} cx={560} cy={420} w={250} o={prog(f, K3.semen - 10, 12)} />
					<Vial x={790} y={360} s={0.9} fill={0.75 * prog(f, K3.semen + 6, 24) * (1 - 0.7 * split)} o={prog(f, K3.semen, 12)} />
					{Array.from({length: 8}, (_, i) => <StrawG key={i} x={880} y={350 + i * 22} w={180} fill={prog(f, K3.diluted + i * 3, 10)} frost={prog(f, K3.frozen, 10)} o={prog(f, K3.diluted + i * 3, 8) * (i === 7 ? 1 - send : 1)} />)}
					<StrawG x={lerp(880, 1060, send)} y={lerp(504, 640, send)} w={180} frost={1} o={vis(f, K3.sent, K3.sent + 50, 8)} />
					{send > 0.05 ? <path d={`M900,520 Q1000,${560} ${lerp(900, 1080, send)},${lerp(520, 640, send)}`} fill="none" stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="5 6" opacity={vis(f, K3.sent, K3.pollen, 10)} /> : null}
					<g opacity={prog(f, K3.frozen, 12)}>
						<Pl p={PLATES.strawFrost} cx={680} cy={660} w={420} />
						<Pl p={PLATES.tank} cx={980} cy={760} w={190} />
						<rect x={460} y={600} width={440} height={120} rx={20} fill="#dcebf5" opacity={0.35 * (1 - prog(f, K3.stored, 20))} />
					</g>
				</g>
				<Pill x={440} y={900} text="frozen: keeps for decades" size={32} o={vis(f, K3.decades, K3.survives, 10)} />
				{/* pollen from the anthers: lasts hours, used fresh close by */}
				<PlC p={PLATES.floret} cx={fl.cx} cy={fl.cy} w={fl.w} id="b15-s3-floret" o={prog(f, K3.pollen - 10, 14)} />
				{A.map((a, i) => <ScribbleRing key={i} cx={a[0]} cy={a[1]} rx={30} ry={60} at={K3.anthers + i * 6} out={K3.survives + 40} seed={2 + i} />)}
				<Sx x={fl.cx} y={fl.cy - 250} text="anthers: make pollen" size={28} color={GREY_INK} hand anchor="middle" at={K3.anthers + 10} out={K3.fresh + 40} />
				<ClockRing x={1700} y={420} t={clock} o={vis(f, K3.survives, K3.fresh + 30, 10)} />
				{[[1660, 500], [1690, 516], [1720, 500], [1700, 486], [1745, 515]].map(([x, y], i) => <PollenDot key={i} x={x} y={y} o={prog(f, K3.survives, 10) * (1 - prog(f, K3.survives + 60, 14))} />)}
				<PlC p={PLATES.ear} cx={ear2.cx} cy={ear2.cy} w={110} id="b15-s3-ear2" o={prog(f, K3.fresh, 12)} />
				{f >= K3.fresh + 6 ? <path d={`M${A[2][0] + 20},${A[2][1]} Q${(A[2][0] + ear2.cx) / 2},${A[2][1] - 60} ${ear2.cx - 20},${ear2.cy - 120}`} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 7" opacity={prog(f, K3.fresh + 6, 12)} /> : null}
				<Pill x={1150} y={900} text="many crops: lasts hours" size={32} o={prog(f, K3.survives + 10, 10)} />
				{void K3.compare}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 4. Step two: deliver, and keep other gametes out ----------
const K4 = cues(S('deliver-exclude'), {step2: 'Step two', cow: 'For the cow', timing: 'timing is the control', thaws: 'thaws a dose', places: 'places it in her uterus', heat: "she's on heat", nobull: 'no bull is there', flower: 'A flower is harder', own: 'its own anthers', wind: 'the wind or insects', remove: "remove the seed flower's", protect: 'protect it from stray', applied: 'the chosen pollen is applied', keep: 'keep other pollen out', bag: 'A bag is one way'});
const MASK = [{rx: 40, ry: 100, rot: 0, fill: '#dcc78f'}, {rx: 46, ry: 100, rot: 0, fill: '#f6f1e7'}, {rx: 44, ry: 98, rot: -14, fill: '#e1cc9a'}];
export const SceneDeliver: React.FC = () => {
	const f = useCurrentFrame();
	const leftDim = prog(f, K4.flower, 12);
	// the tract diagram (anatomy only)
	const tr = {cx: 770, cy: 540, w: 640};
	const T = (u: [number, number]) => platePt(PLATES.tract, tr.cx, tr.cy, tr.w, u[0], u[1]);
	const vag = T(TRACT.vagina), cer = T(TRACT.cervix), ut = T(TRACT.uterus);
	const tube = smooth(prog(f, K4.places, 40));
	const tipX = tube < 0.5 ? lerp(vag[0] + 30, cer[0], tube * 2) : lerp(cer[0], ut[0] + 40, (tube - 0.5) * 2);
	const tipY = tube < 0.5 ? lerp(vag[1], cer[1], tube * 2) : lerp(cer[1], ut[1], (tube - 0.5) * 2);
	// the floret
	const fl = {cx: 1480, cy: 600, w: 440};
	const P = (u: [number, number]) => platePt(PLATES.floret, fl.cx, fl.cy, fl.w, u[0], u[1]);
	const A = ANTHERS.map(P), st = P(STIGMA);
	const kk = fl.w / (PLATES.floret.box[2] - PLATES.floret.box[0]);
	const t0 = K4.remove + 14, slot = 30;
	const DROP: [number, number] = [1820, 470];
	const gone = (i: number) => prog(f, t0 + i * slot + 10, 8);
	// the forceps visit each anther in turn and carry it up and away
	let fpos: [number, number] | null = null;
	let carry = -1;
	for (let i = 0; i < 3; i++) {
		const ph = f - (t0 + i * slot);
		const from: [number, number] = i === 0 ? [1830, 470] : DROP;
		if (ph >= -12 && ph < 0) fpos = [lerp(from[0], A[i][0], smooth((ph + 12) / 12)), lerp(from[1], A[i][1] - 30, smooth((ph + 12) / 12))];
		if (ph >= 0 && ph < 10) fpos = [A[i][0], A[i][1] - 30];
		if (ph >= 10 && ph < slot - 12) { const u = smooth((ph - 10) / (slot - 22)); fpos = [lerp(A[i][0], DROP[0], u), lerp(A[i][1] - 30, DROP[1], u)]; carry = i; }
	}
	if (f >= t0 + 3 * slot - 12 && f < t0 + 3 * slot + 8) fpos = [DROP[0] + 60 * prog(f, t0 + 3 * slot - 12, 20), DROP[1]];
	const fH = 220;
	const iso = prog(f, K4.protect, 14);
	const open = vis(f, K4.applied - 4, K4.applied + 46, 8);
	const gap = 22 * open;
	const ownT = smooth(prog(f, K4.own + 6, 24));
	const windT = prog(f, K4.wind, 40, x => x);
	const strayT = prog(f, K4.protect + 6, 40, x => x);
	const keepT = prog(f, K4.keep + 4, 44, x => x);
	const bag = smooth(prog(f, K4.bag, 30));
	const bW = 330, bH = bW * (1596 / 988);
	return (
		<>
			<Heading text="Step two: deliver, keep others out" at={4} size={60} />
			<Overlay>
				<BoardTop n={3} last={prog(f, K4.step2, 14)} active={2} lit={[1 - 0.7 * leftDim, 0.3 + 0.7 * prog(f, K4.flower - 6, 12)]} />
				{/* the cow: timing is the control (anatomy diagram, a thin tube, no animal body) */}
				<g opacity={1 - 0.6 * leftDim}>
					<Pl p={PLATES.tract} cx={tr.cx} cy={tr.cy} w={tr.w} o={prog(f, K4.cow - 6, 14)} />
					<g opacity={vis(f, K4.thaws - 6, K4.places + 20, 10)}>
						<Pl p={PLATES.strawFrost} cx={tr.cx + 60} cy={790} w={300} />
						<rect x={tr.cx - 100} y={772} width={320} height={36} rx={14} fill="#dcebf5" opacity={0.5 * (1 - prog(f, K4.thaws + 6, 24))} />
					</g>
					{tube > 0.01 ? <line x1={vag[0] + 18} y1={vag[1]} x2={tipX} y2={tipY} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" /> : null}
					{tube > 0.98 ? [0, 1, 2, 3, 4].map(i => <circle key={i} cx={ut[0] + 30 - prog(f, K4.places + 40 + i * 4, 20) * (30 + i * 14)} cy={ut[1] + (i % 2 ? -1 : 1) * 8 * prog(f, K4.places + 40 + i * 4, 20)} r={5} fill="#f1e2a8" stroke={AMBER_INK} strokeWidth={1.5} opacity={prog(f, K4.places + 40 + i * 4, 6)} />) : null}
					<ScribbleRing cx={ut[0] - 10} cy={ut[1]} rx={70} ry={42} at={K4.places + 30} out={K4.heat + 30} seed={4} />
					<Sx x={ut[0] - 10} y={ut[1] - 60} text="uterus" size={26} color={GREY_INK} hand anchor="middle" at={K4.places + 30} />
					<Sx x={cer[0] + 10} y={cer[1] + 70} text="cervix" size={24} color={GREY_INK} hand anchor="middle" at={K4.places + 10} />
					{/* the heat strip with the dose on it */}
					<g opacity={prog(f, K4.heat, 12)}>
						<rect x={480} y={800} width={520} height={34} rx={17} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
						<rect x={700} y={800} width={110} height={34} rx={17} fill="#fde7c4" stroke={AMBER} strokeWidth={2.5} />
						<Sx x={755} y={864} text="on heat" size={26} color={AMBER_INK} hand anchor="middle" />
						<circle cx={755} cy={817} r={8} fill="#f1e2a8" stroke={AMBER_INK} strokeWidth={2} />
					</g>
					<g opacity={prog(f, K4.nobull, 12)}>
						<Pl p={PLATES.bull} cx={990} cy={420} w={130} dim={1} />
					</g>
					<GreyCross x={990} y={420} at={K4.nobull + 8} s={34} />
				</g>
				<Pill x={440} y={910} text="timing + no bull: no other sperm" size={30} o={vis(f, K4.nobull + 16, K4.wind, 10)} />
				{/* the flower: two other sources, anthers out, isolated, chosen pollen on */}
				<PlC p={PLATES.floret} cx={fl.cx} cy={fl.cy} w={fl.w} id="b15-s4-floret" o={prog(f, K4.flower - 10, 14)} />
				<defs><filter id="b15-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" /></filter></defs>
				{A.map((a, i) => (
					<g key={i} opacity={gone(i)} filter="url(#b15-soft)">
						<ellipse cx={a[0]} cy={a[1]} rx={MASK[i].rx * kk} ry={MASK[i].ry * kk} transform={`rotate(${MASK[i].rot} ${a[0]} ${a[1]})`} fill={MASK[i].fill} />
					</g>
				))}
				{/* its own pollen, then pollen on the wind */}
				<PollenDot x={lerp(A[2][0], st[0] + 8, ownT)} y={lerp(A[2][1] + 30, st[1], ownT)} o={vis(f, K4.own + 6, K4.remove, 8)} />
				<Wisp x={lerp(1880, st[0] + 30, Math.min(1, windT * 1.6))} y={st[1] - 70} o={vis(f, K4.wind, K4.wind + 50, 8)} />
				<PollenDot x={lerp(1900, st[0] + 18, Math.min(1, windT * 1.4))} y={lerp(st[1] - 60, st[1] + 6, Math.min(1, windT * 1.4))} grey o={vis(f, K4.wind + 4, K4.remove, 8)} />
				<Tg x={1150} y={960} text="two other sources: own anthers, wind or insects" at={K4.wind + 20} out={K4.remove + 10} size={30} />
				{fpos ? (
					<g>
						<Pl p={PLATES.forceps} cx={fpos[0]} cy={fpos[1] - fH / 2 + 8} w={fH * (184 / 1216)} />
						{carry >= 0 ? <ellipse cx={fpos[0]} cy={fpos[1] + 22} rx={14} ry={34} fill="#e8b81f" stroke="#a9830a" strokeWidth={2.5} /> : null}
					</g>
				) : null}
				{/* the isolation outline: on at once, opens only while the chosen pollen goes on */}
				{iso > 0.01 ? (
					<ellipse cx={fl.cx} cy={fl.cy - 10} rx={262} ry={300} fill="none" stroke={BLUE_LINE} strokeWidth={4} pathLength={100} strokeDasharray={`${100 - gap} ${gap}`} strokeDashoffset={-8} opacity={iso * (1 - 0.6 * bag)} />
				) : null}
				<Sx x={fl.cx} y={fl.cy + 330} text="stigma exposed: protect it now" size={26} color={GREY_INK} hand anchor="middle" at={K4.protect + 8} out={K4.applied} />
				<Wisp x={strayT < 0.6 ? lerp(1900, fl.cx + 280, strayT / 0.6) : lerp(fl.cx + 280, 1900, (strayT - 0.6) / 0.4)} y={fl.cy - 160 + (strayT < 0.6 ? 0 : -120 * (strayT - 0.6))} o={vis(f, K4.protect + 6, K4.protect + 50, 8)} />
				<Pl p={PLATES.brush} cx={1800} cy={360} w={190} o={vis(f, K4.applied - 6, K4.keep + 20, 10)} />
				{[0, 1, 2, 3, 4].map(i => {
					const t = smooth(prog(f, K4.applied + 6 + i * 5, 26));
					return <PollenDot key={i} x={lerp(1735, st[0] + (i - 2) * 6, t)} y={lerp(325, st[1] - 4 + (i % 2) * 6, t) - Math.sin(t * Math.PI) * 30} r={6} o={prog(f, K4.applied + 6 + i * 5, 6)} />;
				})}
				<Wisp x={keepT < 0.5 ? lerp(1900, fl.cx + 270, keepT / 0.5) : lerp(fl.cx + 270, 1900, (keepT - 0.5) / 0.5)} y={fl.cy + 40 - (keepT < 0.5 ? 0 : 140 * (keepT - 0.5))} o={vis(f, K4.keep + 4, K4.keep + 48, 8)} />
				<Pill x={1150} y={960} text="anthers out + isolated: no other pollen" size={30} o={vis(f, K4.keep + 20, K4.bag + 50, 10)} lit={1} />
				<g opacity={bag * 0.82} transform={`translate(0,${lerp(-200, 0, bag)})`}>
					<Pl p={PLATES.bag} cx={fl.cx} cy={fl.cy - 30} w={bW} />
				</g>
				<GTag x={1150} y={1000} text="one way to isolate the flower" at={K4.bag + 20} size={26} />
				{void K4.timing}{void bH}{void Rg}{void INK}{void AMBER}{void GREYT}
			</Overlay>
		</>
	);
};
const BLUE_LINE = '#5b8fae';
