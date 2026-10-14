import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bracket, Cam, CellBody, CELL_FILL, CELL_LINE, Chip, Chrom, CH, CX, CY, DrawPath, Envelope, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading,
	INK, INK_SOFT, lerp, NUC_X, RX, RY, NUC_FILL, NUC_LINE, Overlay, PlateArt, PLATES, plateAt, PLUM, prog, S, Scribble, TEALC, vis,
} from './shared';

const PLUM_INK = '#7e3a69';
const TEAL_INK = '#1f7a6f';

// ---------- 1. Hook: a graze heals ----------
const Thread: React.FC<{d: string; at: number; color?: string; w?: number; dx?: number; dy?: number}> = ({d, at, color = INK_SOFT, w = 5, dx = 0, dy = 0}) => (
	<g transform={`translate(${dx},${dy})`}><DrawPath d={d} at={at} dur={34} color={color} width={w} /></g>
);
const NewCell: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 29, o = 1}) => (
	<g opacity={o}>
		<ellipse cx={x} cy={y} rx={r} ry={r * 0.92} fill="#e2d9ee" stroke="#8e7aa9" strokeWidth={3.5} />
		<circle cx={x} cy={y} r={r * 0.3} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
	</g>
);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		fill: 'new skin has filled', same: 'the same instructions', beside: 'the cells beside it', n46: '46', dna: 'the DNA packages',
		half: 'only half the job', copies: 'the copies still', shared: 'shared out', how: 'How does',
	});
	const PX = 200, PY = 215, PW = 1520;
	const pa = plateAt(PLATES.skin, PX, PY, PW);
	const slide = prog(f, c.fill - 6, 44);
	const divide = prog(f, c.fill + 36, 30);
	const heal = prog(f, c.fill + 40, 44);
	const L0 = pa(845, 420), L1 = pa(920, 428), R0 = pa(1105, 452), R1 = pa(1040, 428);
	const lx = lerp(L0[0], L1[0], slide), ly = lerp(L0[1], L1[1], slide);
	const rx = lerp(R0[0], R1[0], slide), ry = lerp(R0[1], R1[1], slide);
	const CR = 34;
	const dx = 36 * divide;
	const gap = [[858, 392], [900, 400], [985, 418], [1060, 408], [1120, 392], [1128, 440], [1080, 472], [985, 482], [900, 472], [860, 440]].map(([a, b]) => pa(a, b));
	const gapD = 'M' + gap.map(p => p.join(',')).join(' L') + ' Z';
	const S1 = pa(950, 428), S2 = pa(1010, 428);
	const camO = 1 - prog(f, c.half + 40, 24);
	const insideO = prog(f, c.half + 44, 26);
	const shapes = useMemo(() => {
		const r = rng(11);
		return Array.from({length: 8}, () => {
			let x = 960 + (r() - 0.5) * 180, y = 545 + (r() - 0.5) * 180, a = r() * 6.28;
			let d = `M${x.toFixed(1)},${y.toFixed(1)}`;
			for (let i = 0; i < 7; i++) {
				a += (r() - 0.5) * 2.4;
				x += Math.cos(a) * 68; y += Math.sin(a) * 68;
				const ox = x - 960, oy = y - 545, dist = Math.hypot(ox, oy);
				if (dist > 150) { x = 960 + (ox / dist) * 150; y = 545 + (oy / dist) * 150; a += 2.5; }
				d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
			}
			return d;
		});
	}, []);
	const drift = prog(f, c.shared - 4, 44) * 215;
	const lineP = prog(f, c.shared, 24);
	const sep = prog(f, c.copies, 20) * 5;
	return (
		<>
			<div style={{opacity: camO * prog(f, 0, 20), position: 'absolute', inset: 0}}>
				<Cam keys={[[0, 1, 960, 540], [c.half - 8, 1, 960, 540], [c.half + 56, 5.5, S1[0], S1[1]]]}>
					<PlateArt a={PLATES.skin} x={PX} y={PY} w={PW} />
					<Overlay>
						<path d={gapD} fill="#f2c9a8" opacity={heal * 0.96} />
						<g>
							{/* the left cell slides in, then divides into two */}
							<g stroke="none">
								<ellipse cx={lx - dx} cy={ly} rx={CR} ry={CR * 0.92 - 2 * divide} fill="none" stroke="#8e7aa9" strokeWidth={7} opacity={slide} />
								<ellipse cx={lx + dx} cy={ly} rx={CR} ry={CR * 0.92 - 2 * divide} fill="none" stroke="#8e7aa9" strokeWidth={7} opacity={slide} />
							</g>
							<g opacity={slide}>
								<ellipse cx={lx - dx} cy={ly} rx={CR} ry={CR * 0.92 - 2 * divide} fill="#e2d9ee" />
								<ellipse cx={lx + dx} cy={ly} rx={CR} ry={CR * 0.92 - 2 * divide} fill="#e2d9ee" />
								<circle cx={lx - dx} cy={ly} r={CR * 0.31} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
								<circle cx={lx + dx} cy={ly} r={CR * 0.31} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
							</g>
							<g stroke="none">
								<ellipse cx={rx - dx} cy={ry} rx={CR} ry={CR * 0.92 - 2 * divide} fill="none" stroke="#8e7aa9" strokeWidth={7} opacity={slide} />
								<ellipse cx={rx + dx} cy={ry} rx={CR} ry={CR * 0.92 - 2 * divide} fill="none" stroke="#8e7aa9" strokeWidth={7} opacity={slide} />
							</g>
							<g opacity={slide}>
								<ellipse cx={rx - dx} cy={ry} rx={CR} ry={CR * 0.92 - 2 * divide} fill="#e2d9ee" />
								<ellipse cx={rx + dx} cy={ry} rx={CR} ry={CR * 0.92 - 2 * divide} fill="#e2d9ee" />
								<circle cx={rx - dx} cy={ry} r={CR * 0.31} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
								<circle cx={rx + dx} cy={ry} r={CR * 0.31} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
							</g>
						</g>
						<Scribble cx={S1[0]} cy={S1[1]} rx={46} ry={42} at={c.same} color={AMBER_INK} seed={5} />
						<Scribble cx={S2[0]} cy={S2[1]} rx={46} ry={42} at={c.beside} color={AMBER_INK} seed={9} />
						<DrawPath d={`M${S1[0]},${S1[1] - 44} L${S1[0] - 60},${S1[1] - 120}`} at={c.n46} dur={10} color={AMBER_INK} width={4} />
						<DrawPath d={`M${S2[0]},${S2[1] - 44} L${S2[0] + 60},${S2[1] - 120}`} at={c.n46 + 20} dur={10} color={AMBER_INK} width={4} />
					</Overlay>
					<Hand at={c.n46} x={S1[0] - 330} y={S1[1] - 190} size={54}>46 chromosomes</Hand>
					<Hand at={c.n46 + 20} x={S2[0] + 40} y={S2[1] - 190} size={54}>46 chromosomes</Hand>
					<Hand at={c.dna} x={S1[0] - 330} y={S1[1] - 132} size={40} color={INK_SOFT}>the DNA packages</Hand>
					<GreyTag at={c.fill + 10} out={c.same + 60} x={330} y={190} text="cells move in and divide" size={34} />
					<GreyTag at={c.fill + 40} out={c.half + 30} x={1230} y={190} text="skin cells, simplified" size={34} />
				</Cam>
			</div>
			{/* inside one new skin cell */}
			<div style={{opacity: insideO, position: 'absolute', inset: 0}}>
				<Overlay>
					<ellipse cx={960} cy={545} rx={340} ry={292} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={7} />
					<circle cx={960} cy={545} r={205} fill={NUC_FILL} stroke={NUC_LINE} strokeWidth={5} strokeDasharray="26 10" strokeLinecap="round" opacity={prog(f, c.half + 54, 16)} />
					{shapes.map((d, i) => (
						<g key={i}>
							<Thread d={d} at={c.half + 62 + i * 4} dx={-drift - sep * 0.4} dy={-sep * 0.5} />
							<Thread d={d} at={c.half + 62 + i * 4} dx={drift + sep * 0.4} dy={sep * 0.5} color={INK_SOFT} />
						</g>
					))}
					<line x1={960} y1={250} x2={960} y2={840} stroke={AMBER_INK} strokeWidth={5} strokeDasharray="4 16" strokeLinecap="round" opacity={lineP} />
				</Overlay>
				<GreyTag at={c.half + 50} x={1440} y={236} text="inside one new skin cell" size={34} />
				<Hand at={c.copies} out={c.how - 6} x={1440} y={330} size={46} w={400}>two copies of every thread</Hand>
				<Hand at={c.shared} out={c.how - 6} x={1440} y={440} size={46} w={400}>shared out into two cells</Hand>
			</div>
			<div style={{position: 'absolute', left: 96, top: 92, opacity: f >= c.how ? 1 : 0}}><HandText text="How do both new cells keep every chromosome?" at={c.how} size={64} cps={30} /></div>
		</>
	);
};

// ---------- 2a. Chromosomes, sets and pairs ----------
const KH = (() => {
	const r = rng(3);
	return Array.from({length: 23}, (_, i) => Math.round(98 - i * 1.6 - r() * 16));
})();
const RowBar: React.FC<{x: number; y: number; h: number; color: string; o: number}> = ({x, y, h, color, o}) => (
	<g opacity={o}>
		<rect x={x - 11} y={y - h / 2} width={22} height={h} rx={11} fill={color} stroke={INK} strokeWidth={3} />
		<circle cx={x} cy={y} r={6} fill="#fbf0cf" stroke={INK} strokeWidth={2.5} />
	</g>
);
export const SceneChromosomeSets: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('chromosome-sets'), {
		dna: 'Your DNA', packed: 'structures called', single: 'a single long', wound: 'wound up', body: 'A human body cell', n46: '46', sets: 'two sets', oneSet: 'one set from',
		parent: 'each parent', aset: 'A set is', kind: 'each kind', twice: 'every kind', xy: 'apart from', two: 'the two of one', homol: 'homologous pair', from: 'one from each',
	});
	// stage 1: DNA thread packs into a chromosome
	const s1 = vis(f, 0, c.body - 6, 12);
	const pack = prog(f, c.packed, 54);
	const N = 90;
	const thread = useMemo(() => {
		const r = rng(21);
		return Array.from({length: N + 1}, (_, i) => {
			const s = i / N;
			const sx = 260 + s * 1360, sy = 560 + Math.sin(s * 30) * 30 + (r() - 0.5) * 6;
			const cyc = Math.floor(s * 12), within = s * 12 - cyc;
			const zx = 640 + Math.sin(within * Math.PI * 2) * 46, zy = 300 + s * 480;
			return {sx, sy, zx, zy};
		});
	}, []);
	const tp = thread.map(t => `${lerp(t.sx, t.zx, pack).toFixed(1)},${lerp(t.sy, t.zy, pack).toFixed(1)}`);
	const wound = prog(f, c.wound, 30);
	const capsO = prog(f, c.packed + 40, 20);
	// stage 2: two rows of 23
	const rowsO = prog(f, c.body - 4, 14);
	const plumN = Math.min(23, Math.max(0, Math.floor((f - c.n46) / 2.2)));
	const tealN = Math.min(23, Math.max(0, Math.floor((f - c.sets) / 2.2)));
	const sweep = prog(f, c.aset, 70);
	const shrink = prog(f, c.two - 22, 26);
	const rx = (i: number) => 250 + i * 58;
	const sc = lerp(1, 0.24, shrink);
	const rowX = (x: number) => lerp(x, 1500 + (x - 250) * 0.24, shrink);
	const rowY = (y: number) => lerp(y, 220 + (y - 400) * 0.24, shrink);
	// stage 3: the four bars in two rows, so each kind sits over its twin
	const st3 = prog(f, c.two - 28, 18);
	const four: [number, number][] = [[640, 410], [640, 690], [1360, 410], [1360, 690]];
	return (
		<>
			<Heading items={[[0, 'Chromosomes, sets and pairs']]} size={64} />
			{/* stage 1 */}
			<div style={{opacity: s1, position: 'absolute', inset: 0}}>
				<Overlay>
					<rect x={570} y={262} width={140} height={556} rx={70} fill="#efe6f4" stroke={INK} strokeWidth={6} opacity={capsO} />
					<polyline points={tp.join(' ')} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					{Array.from({length: 12}, (_, k) => {
						const t = thread[Math.round(((k + 0.5) / 12) * N)];
						return <circle key={k} cx={lerp(t.sx, t.zx, pack)} cy={lerp(t.sy, t.zy, pack)} r={14 * wound} fill="#b48ad2" stroke="#6c3f92" strokeWidth={3} />;
					})}
					<circle cx={640} cy={540} r={18 * capsO} fill="#fbf0cf" stroke={INK} strokeWidth={4} />
				</Overlay>
				<Hand at={c.dna} out={c.packed - 4} x={300} y={450} size={58}>DNA: a very long thread</Hand>
				<Hand at={c.packed + 56} x={820} y={320} size={64}>a chromosome</Hand>
				<Hand at={c.single} x={820} y={470} size={56} w={760} color={INK}>one long DNA molecule</Hand>
				<Hand at={c.wound} x={820} y={580} size={56} w={760} color={INK}>wound up with proteins</Hand>
			</div>
			{/* stage 2 */}
			<div style={{opacity: rowsO, position: 'absolute', inset: 0}}>
				<Overlay>
					<g opacity={1 - 0.0}>
						{KH.map((h, i) => <RowBar key={'p' + i} x={rowX(rx(i))} y={rowY(400)} h={h * sc} color={PLUM} o={i < plumN ? 1 : 0} />)}
						{KH.map((h, i) => <RowBar key={'t' + i} x={rowX(rx(i))} y={rowY(560)} h={h * sc} color={TEALC} o={i < tealN ? 1 : 0} />)}
						{shrink < 0.05 ? KH.map((_, i) => <line key={'l' + i} x1={rx(i)} x2={rx(i)} y1={440} y2={520} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="2 9" strokeLinecap="round" opacity={prog(f, c.twice + i * 1.2, 8)} />) : null}
						<rect x={rx(0) - 26 + sweep * (rx(22) - rx(0))} y={330} width={52} height={310} rx={24} fill={AMBER} opacity={shrink < 0.05 ? 0.26 * Math.min(1, sweep * 8) * (1 - prog(f, c.aset + 70, 10)) : 0} />
					</g>
					{shrink < 0.05 ? <Bracket x1={rx(0) - 20} x2={rx(22) + 20} y={316} at={c.aset} color={AMBER_INK} down /> : null}
				</Overlay>
				<div style={{opacity: 1 - shrink}}>
					<div style={{position: 'absolute', left: 96, top: 360, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: PLUM_INK, width: 120, textAlign: 'center'}}>{plumN}</div>
					<div style={{position: 'absolute', left: 96, top: 520, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: TEAL_INK, width: 120, textAlign: 'center'}}>{tealN}</div>
					<Hand at={c.n46 + 30} x={96} y={690} size={80} color={AMBER_INK}>{`${plumN + tealN} chromosomes`}</Hand>
					<Hand at={c.oneSet} x={250} y={236} size={46} color={PLUM_INK}>set from one parent</Hand>
					<Hand at={c.parent} x={250} y={612} size={46} color={TEAL_INK}>set from the other parent</Hand>
					<Hand at={c.kind} x={760} y={250} size={50}>a set = one of each kind</Hand>
					<Hand at={c.twice} x={1000} y={690} size={52}>every kind appears twice</Hand>
					<Overlay><DrawPath d="M1520,596 L1380,672" at={c.xy} dur={14} color={INK_SOFT} width={4} /></Overlay>
					<div style={{position: 'absolute', left: 900, top: 680, width: 640}}><GreyTag at={c.xy} x={0} y={0} text="in males, X and Y are different and only partly match (23rd pair)" size={28} /></div>
				</div>
				<div style={{position: 'absolute', left: 1480, top: 156, width: 360, opacity: shrink}}>
					<GreyTag at={c.two} x={0} y={0} text="two sets of 23" size={28} />
				</div>
			</div>
			{/* stage 3 */}
			<div style={{opacity: st3, position: 'absolute', inset: 0}}>
				<Overlay>
					{four.map(([x, y], i) => <Chrom key={i} x={x} y={y} kind={CH[i].kind} color={CH[i].color} dup={0} s={1.2} />)}
					<Scribble cx={640} cy={550} rx={74} ry={256} at={c.two + 4} color={AMBER_INK} seed={4} />
					<DrawPath d="M714,550 L760,550" at={c.homol} dur={10} color={AMBER_INK} width={4} />
					<Scribble cx={1360} cy={550} rx={74} ry={256} at={c.homol + 24} color={AMBER_INK} seed={7} />
					<DrawPath d="M1434,550 L1480,550" at={c.homol + 40} dur={10} color={AMBER_INK} width={4} />
				</Overlay>
				<Hand at={c.homol + 6} x={770} y={460} size={52} color={AMBER_INK} w={480}>homologous pair: a matching pair, one from each parent</Hand>
				<Hand at={c.homol + 40} x={1490} y={520} size={52} color={AMBER_INK} w={330}>another pair</Hand>
				<Hand at={c.two - 20} x={96} y={225} size={44} color={INK_SOFT}>a simpler example: two kinds, long and short</Hand>
				<Hand at={c.two - 16} x={96} y={380} size={40} color={PLUM_INK} w={400}>set from one parent</Hand>
				<Hand at={c.two - 16} x={96} y={660} size={40} color={TEAL_INK} w={400}>set from the other parent</Hand>
			</div>
		</>
	);
};

// ---------- 2b. Diploid, haploid and the model cell ----------
export const SceneDiploidHaploid: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('diploid-haploid'), {
		cell: 'A cell with', two: 'two sets', dip: 'diploid', one: 'one set', sperm: 'human sperm', hap: 'haploid', keep: 'To keep', model: 'model cell', four: 'four chromosomes', sets2: 'two sets of two',
	});
	const m = prog(f, c.model - 10, 38);
	const cx = lerp(560, CX, m), cy = lerp(540, CY, m), rx = lerp(300, RX, m), ry = lerp(240, RY, m);
	const k = lerp(1.15, 1, m);
	const rightO = (1 - prog(f, c.keep, 16)) * prog(f, c.one - 8, 16);
	const envO = prog(f, c.model + 10, 30);
	const glowP = vis(f, c.sets2, c.sets2 + 24, 6);
	const glowT = vis(f, c.sets2 + 22, c.sets2 + 46, 6);
	const bx = (i: number) => cx + NUC_X[i] * k;
	return (
		<>
			<Heading items={[[0, 'Diploid and haploid']]} size={64} />
			<Overlay>
				<CellBody cx={cx} cy={cy} rx={rx} ry={ry} o={prog(f, 0, 14)} />
				<Envelope cx={cx} cy={cy} r={lerp(226, 230, m)} o={prog(f, 0, 14)} />
				{CH.map((ch, i) => <Chrom key={i} x={bx(i)} y={cy} kind={ch.kind} color={ch.color} dup={0} s={k} o={prog(f, 4 + i * 5, 12)} hiA={ch.color === PLUM ? glowP : glowT} />)}
				<g opacity={rightO}>
					<CellBody cx={1360} cy={540} rx={300} ry={240} />
					<circle cx={1360} cy={540} r={190} fill={NUC_FILL} stroke={NUC_LINE} strokeWidth={5} strokeDasharray="26 10" strokeLinecap="round" />
					<Chrom x={1360 - 105} y={540} kind="L" color={PLUM} dup={0} s={1.15} />
					<Chrom x={1360 + 105} y={540} kind="S" color={PLUM} dup={0} s={1.15} />
				</g>
			</Overlay>
			<Chip x={380} y={200} at={c.cell} out={c.keep} text="body cell" color={AMBER_INK} size={46} />
			<Chip x={1190} y={200} at={c.sperm} out={c.keep} text="gamete" color={AMBER_INK} size={46} />
			<Hand at={c.dip} out={c.keep} x={300} y={816} size={58} color={AMBER_INK}>two sets: diploid</Hand>
			<Hand at={c.hap} out={c.keep} x={1070} y={816} size={58} color={AMBER_INK}>one set: haploid (a sperm or egg)</Hand>
			<Hand at={c.four} x={96} y={300} size={54} color={AMBER_INK} w={360}>model cell: 4 chromosomes</Hand>
			<Hand at={c.sets2} x={1500} y={300} size={54} color={AMBER_INK} w={330}>2 sets of 2</Hand>
			<Hand at={c.sets2 + 6} x={560} y={880} size={44} color={PLUM_INK}>set 1: one long, one short</Hand>
			<Hand at={c.sets2 + 24} x={1010} y={880} size={44} color={TEAL_INK}>set 2: one long, one short</Hand>
		</>
	);
};
