import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, anaOffsets, ANA_GRID, Arrow, Bracket, CellBody, CELL_FILL, CELL_LINE, CH, Chrom, CX, CY, DrawPath, Envelope, Fibre, FONT_DISPLAY, FONT_HAND, GreyCross, GreyTag, Hand, Heading,
	INK, INK_SOFT, lerp, META_Y, NUC_FILL, NUC_LINE, NUC_X, Overlay, PenTap, Pill, Pole, prog, RX, RY, S, Scribble, vis, clamp01, PLUM, TEALC, CREAM,
} from './shared';

const PLUM_INK = '#7e3a69';
const TEAL_INK = '#1f7a6f';
const GREY = '#7a8088';

const Cen: React.FC<{at: number; out?: number; x: number; y: number; w?: number; size?: number; color?: string; hand?: boolean; weight?: number; children: React.ReactNode}> = ({at, out, x, y, w = 300, size = 46, color = INK, hand = true, weight = 700, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x - w / 2, top: y, width: w, textAlign: 'center'}}>
		<div style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, color, lineHeight: 1.05}}>{children}</div>
	</Enter>
);
/** A big number that pops when it lands. */
const Num: React.FC<{at: number; x: number; y: number; text: string; color?: string; size?: number; out?: number}> = ({at, x, y, text, color = INK, size = 104, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10));
	return <div style={{position: 'absolute', left: x - 150, top: y, width: 300, textAlign: 'center', opacity: o, transform: `scale(${1 + 0.35 * (1 - p)})`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, lineHeight: 1}}>{text}</div>;
};

// ---------- 5. Tracking the numbers ----------
const BX = [610, 920, 1230, 1540];
const MS = 0.42;
const MINI_X = [-60, -20, 20, 60];
export const SceneTracking: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('tracking'), {
		track: "Let's track", four: 'four chromosomes', still: 'still has four', centro: 'we count centromeres', eight: 'eight chromatids', becomes: 'each chromatid becomes', chromo: 'a chromosome', holds: 'holds eight',
		fourEnd: 'four at each end', divides: 'the cell divides', newFour: 'new cell holds four', human: 'A human cell', h46: '46 chromosomes', after: ['after copying', 2], h92: '92 chromatids', twice: 'twice 46', h92c: 'are 92 chromosomes',
		h4646: '46 at each', hnew: 'then 46 in each', halved: 'never halved', doubled: 'doubled the DNA', shared: 'shared it back',
	} as Record<string, string | [string, number]>);
	const col = (i: number) => BX[i];
	const ICY = 310;
	const iconO = (at: number) => prog(f, at - 4, 16);
	const eAna = prog(f, c.becomes - 40, 40);
	const bars = (kind: 'start' | 'copied') => CH.map((ch, i) => ({ch, x: MINI_X[i], dup: kind === 'copied' ? 1 : 0}));
	const chipX = (k: number, grouped: number) => {
		const base = -104 + k * 30 + Math.floor(k / 2) * 12;
		const gap = k < 4 ? -70 : 70;
		return lerp(base, gap + ((k % 4) - 1.5) * 28, grouped);
	};
	const chips8 = Array.from({length: 8}, (_, k) => ({k, ch: CH[Math.floor(k / 2)]}));
	const grouped = prog(f, c.fourEnd, 24);
	const regroup = (k: number) => {
		// chips 0..7 are pairs (A,B) of chromosomes 0..3; grouping puts all A chromatids left, all B right
		const idx = Math.floor(k / 2), isB = k % 2;
		const from = -104 + k * 30 + idx * 12;
		const to = (isB ? 70 : -70) + (idx - 1.5) * 28;
		return lerp(from, to, grouped);
	};
	const pulse = (a: number) => 0.55 * Math.sin(Math.PI * prog(f, a, 36));
	const loop = prog(f, c.halved, 30);
	const arrowsBack = prog(f, c.shared, 24);
	return (
		<>
			<Heading items={[[0, 'Tracking the numbers']]} size={64} />
			{/* headers */}
			<Cen at={c.track + 20} x={col(0)} y={168} size={46} color={INK_SOFT}>start</Cen>
			<Cen at={c.still - 16} x={col(1)} y={168} size={46} color={INK_SOFT}>after copying</Cen>
			<Cen at={c.becomes - 40} x={col(2)} y={168} size={46} color={INK_SOFT}>anaphase</Cen>
			<Cen at={c.divides - 6} x={col(3)} y={168} size={46} color={INK_SOFT}>each new cell</Cen>
			<Overlay>
				{/* mini cells */}
				<g opacity={iconO(c.four)}>
					<ellipse cx={col(0)} cy={ICY} rx={108} ry={82} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{bars('start').map((b, i) => <Chrom key={i} x={col(0) + b.x} y={ICY} kind={b.ch.kind} color={b.ch.color} dup={0} s={MS} />)}
				</g>
				<g opacity={iconO(c.still)}>
					<ellipse cx={col(1)} cy={ICY} rx={108} ry={82} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{bars('copied').map((b, i) => <Chrom key={i} x={col(1) + b.x} y={ICY} kind={b.ch.kind} color={b.ch.color} dup={prog(f, c.still + 4, 24)} s={MS} />)}
				</g>
				<g opacity={iconO(c.becomes - 40)}>
					<ellipse cx={col(2)} cy={ICY} rx={150} ry={82} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
					{CH.map((ch, i) => {
						const gx = ANA_GRID[i][0] * 0.5, gy = ANA_GRID[i][1] * 0.5;
						const bx0 = col(2), by0 = ICY + META_Y[i] * 0.2;
						return (
							<Chrom key={i} x={bx0} y={by0} kind={ch.kind} color={ch.color} dup={1} coil={1} bend={eAna}
								xa={lerp(0, -100 + gx - 0, eAna)} xb={lerp(0, 100 + gx, eAna)} ya={lerp(0, ICY + gy - by0, eAna)} yb={lerp(0, ICY + gy - by0, eAna)} sep={1} s={0.4} />
						);
					})}
				</g>
				<g opacity={iconO(c.divides)}>
					{[-1, 1].map(side => (
						<g key={side}>
							<ellipse cx={col(3) + side * 80} cy={ICY} rx={70} ry={66} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
							{CH.map((ch, i) => <Chrom key={i} x={col(3) + side * 80 + (i - 1.5) * 30} y={ICY} kind={ch.kind} color={ch.color} dup={0} s={0.3} />)}
						</g>
					))}
				</g>
				{/* model row: chromatid chips */}
				<g opacity={pulse(c.doubled)}><ellipse cx={col(1)} cy={574} rx={150} ry={58} fill={AMBER} opacity={0.6} /></g>
				{chips8.map(({k, ch}) => {
					const p = prog(f, c.eight + k * 3, 10);
					const x = col(1) + (-104 + k * 30 + Math.floor(k / 2) * 12) + 15;
					return <g key={'a' + k} opacity={p} transform={`translate(0,${(1 - p) * -24})`}><rect x={x - 6} y={548} width={12} height={54} rx={6} fill={ch.color} stroke={INK} strokeWidth={2.5} /></g>;
				})}
				{chips8.map(({k, ch}) => {
					const p = prog(f, c.becomes + k * 3, 10);
					const x = col(2) + regroup(k) + 0;
					return (
						<g key={'b' + k} opacity={p} transform={`translate(0,${(1 - p) * -24})`}>
							<rect x={x - 6} y={548} width={12} height={54} rx={6} fill={ch.color} stroke={INK} strokeWidth={2.5} />
							<circle cx={x} cy={575} r={6.5 * prog(f, c.becomes + 10 + k * 3, 8)} fill={CREAM} stroke={INK} strokeWidth={2.2} />
						</g>
					);
				})}
				{[-1, 1].map(side => (
					<g key={side} opacity={prog(f, c.newFour + 10, 14)}>
						{CH.map((ch, i) => <Chrom key={i} x={col(3) + side * 70 + (i - 1.5) * 30} y={574} kind={ch.kind} color={ch.color} dup={0} s={0.3} />)}
					</g>
				))}
				{/* the human row */}
				<line x1={96} x2={1830} y1={672} y2={672} stroke="#d8cdb6" strokeWidth={4} strokeDasharray="3 14" strokeLinecap="round" opacity={prog(f, c.human, 16)} />
				<g opacity={pulse(c.doubled + 4)}><rect x={col(1) - 150} y={784} width={300} height={56} rx={28} fill={AMBER} opacity={0.5} /></g>
				{/* arrows back out */}
				<g opacity={arrowsBack}>
					<Arrow x1={col(2) + 90} y1={440} x2={col(3) - 90} y2={440} at={c.shared} color={AMBER_INK} />
					<Arrow x1={col(2) + 90} y1={736} x2={col(3) - 90} y2={736} at={c.shared + 8} color={AMBER_INK} />
				</g>
				{/* never halved: loop from the last column back to the first */}
				<g opacity={loop}>
					<path d={`M${col(3)},${886} C${col(3)},${960} ${col(0)},${960} ${col(0)},${886}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeDasharray="14 12" />
					<path d={`M${col(0) - 16},${912} L${col(0)},${886} L${col(0) + 18},${910}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</g>
				<GreyCross x={1790} y={726} at={c.halved + 14} s={0.9} />
			</Overlay>
			{/* row labels */}
			<Hand at={c.track + 24} x={96} y={398} size={52} color={AMBER_INK}>model cell</Hand>
			<Hand at={c.track + 24} x={96} y={456} size={28} color={INK_SOFT} w={280}>chromosomes in the cell</Hand>
			<Hand at={c.human} x={96} y={696} size={52} color={AMBER_INK}>human cell</Hand>
			<Hand at={c.human} x={96} y={754} size={28} color={INK_SOFT} w={280}>chromosomes in the cell</Hand>
			{/* model numbers */}
			<Num at={c.four} x={col(0)} y={388} text="4" />
			<Num at={c.still} x={col(1)} y={388} text="4" />
			<Num at={c.holds} x={col(2)} y={388} text="8" />
			<Num at={c.newFour} x={col(3)} y={388} text="4" />
			<Cen at={c.centro} out={c.eight} x={col(1)} y={496} w={300} size={42} color={AMBER_INK}>count centromeres</Cen>
			<Cen at={c.eight + 24} x={col(1)} y={610} w={300} size={42} color={AMBER_INK}>8 chromatids</Cen>
			<Cen at={c.chromo} x={col(2)} y={610} w={300} size={42} color={AMBER_INK}>8 chromosomes</Cen>
			<Cen at={c.fourEnd} x={col(2)} y={488} w={300} size={46} color={AMBER_INK}>4 + 4</Cen>
			<Cen at={c.newFour + 10} x={col(3)} y={610} w={300} size={42} color={AMBER_INK}>4 in each</Cen>
			{/* human numbers */}
			<Num at={c.h46} x={col(0)} y={686} text="46" />
			<Num at={c.after} x={col(1)} y={686} text="46" />
			<Num at={c.h92c} x={col(2)} y={686} text="92" />
			<Num at={c.hnew} x={col(3)} y={686} text="46" />
			<Cen at={c.h92} x={col(1)} y={790} w={300} size={46} color={AMBER_INK}>92 chromatids</Cen>
			<Cen at={c.twice} x={col(1)} y={836} w={300} size={38} color={INK}>46 x 2 = 92</Cen>
			<Cen at={c.h4646} x={col(2)} y={790} w={300} size={46} color={AMBER_INK}>46 + 46</Cen>
			<Cen at={c.halved} x={(col(0) + col(3)) / 2} y={886} w={420} size={44} color={AMBER_INK}>46 to 46: never halved</Cen>
			<Cen at={c.halved + 6} x={1790} y={770} w={160} size={40} color={INK_SOFT}>half</Cen>
		</>
	);
};

// ---------- 6a. Why the two new cells are identical ----------
const K = 0.7;
const MC: [number, number] = [CX, 540];
export const SceneIdentical: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('identical'), {
		why: 'Why are the two', copies: 'copies of the same', pull: 'pull the two', opp: 'opposite ends', every: 'a copy of every', both: 'both sets', checks: 'also checks', attached: 'attached from both', before: 'before anaphase', starts: 'starts',
	});
	const PL = MC[0] - 426 * K, PR = MC[0] + 426 * K;
	const my = (i: number) => MC[1] + META_Y[i] * K;
	const hi = vis(f, c.copies, c.pull - 10, 10);
	const fl = (i: number, ab: 'A' | 'B') => prog(f, c.pull + i * 7 + (ab === 'B' ? 3 : 0), 60);
	const slotL = (i: number): [number, number] => [300 + ANA_GRID[i][0] * 1.0, 560 + ANA_GRID[i][1] * 0.8];
	const slotR = (i: number): [number, number] => [1620 + ANA_GRID[i][0] * 1.0, 560 + ANA_GRID[i][1] * 0.8];
	const gate = prog(f, c.checks, 22) * (1 - prog(f, c.before, 22));
	const fixed = prog(f, c.attached, 20);
	const proceed = prog(f, c.starts, 30);
	const missing = 2;
	const e = 0.05 * proceed;
	const launched = (i: number, ab: 'A' | 'B') => f >= c.pull + i * 7 + (ab === 'B' ? 3 : 0);
	return (
		<>
			<Heading items={[[0, 'Why are the two new cells identical?']]} size={64} />
			<Overlay>
				{/* the two new cells to be */}
				{[300, 1620].map((x, k) => (
					<g key={k} opacity={prog(f, c.pull - 10, 20)}>
						<ellipse cx={x} cy={560} rx={205} ry={160} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} strokeDasharray={k ? undefined : undefined} />
					</g>
				))}
				{/* the cell at metaphase */}
				<CellBody cx={MC[0]} cy={MC[1]} rx={RX * K * 1.05} ry={RY * K * 1.05} sw={5} />
				{CH.map((ch, i) => {
					const y = my(i);
					const fm = i === missing ? fixed : 1;
					return (
						<g key={i}>
							<Fibre x1={PL} y1={MC[1]} x2={MC[0] - 4} y2={y} p={1} />
							<Fibre x1={PR} y1={MC[1]} x2={MC[0] + 4} y2={y} p={fm} />
						</g>
					);
				})}
				{f >= c.checks && fixed < 1 ? <line x1={PR} y1={MC[1]} x2={MC[0] + 4} y2={my(missing)} stroke={GREY} strokeWidth={3.5} strokeDasharray="4 11" strokeLinecap="round" opacity={0.8 * (1 - fixed)} /> : null}
				<Pole x={PL} y={MC[1]} at={-20} />
				<Pole x={PR} y={MC[1]} at={-20} />
				{/* checkpoint gate */}
				<g opacity={gate} transform={`translate(0,${-(1 - gate) * 40})`}>
					<rect x={MC[0] - 12} y={MC[1] - 210} width={24} height={420} rx={8} fill="#fff3d6" stroke={AMBER_INK} strokeWidth={4} opacity={0.8} />
					{Array.from({length: 7}, (_, k) => <line key={k} x1={MC[0] - 12} y1={MC[1] - 200 + k * 62} x2={MC[0] + 12} y2={MC[1] - 160 + k * 62} stroke={AMBER_INK} strokeWidth={5} />)}
					<g transform={`translate(${MC[0]},${MC[1] - 250})`}>
						<circle r={32} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={6} />
						<line x1={22} y1={22} x2={56} y2={56} stroke={AMBER_INK} strokeWidth={9} strokeLinecap="round" />
					</g>
				</g>
				{CH.map((ch, i) => {
					const o = anaOffsets(i, e, 36);
					return <Chrom key={i} x={MC[0]} y={my(i)} kind={ch.kind} color={ch.color} dup={1} coil={1} s={K} {...o} hiA={i === 0 ? hi : 0} hiB={i === 0 ? hi : 0} />;
				})}
				{/* flying copies into the two new cells */}
				{CH.map((ch, i) => (['A', 'B'] as const).map(ab => {
					if (!launched(i, ab)) return null;
					const p = fl(i, ab);
					const tgt = ab === 'A' ? slotL(i) : slotR(i);
					const x = lerp(MC[0], tgt[0], p), y = lerp(my(i), tgt[1], p);
					return <Chrom key={i + ab} x={x} y={y} kind={ch.kind} color={ch.color} dup={0} coil={1} s={lerp(K, 0.7, p)} />;
				}))}
				{/* arrows to opposite ends */}
				<Arrow x1={MC[0] - 190} y1={MC[1] + 250} x2={MC[0] - 420} y2={MC[1] + 250} at={c.opp} color={AMBER_INK} />
				<Arrow x1={MC[0] + 190} y1={MC[1] + 250} x2={MC[0] + 420} y2={MC[1] + 250} at={c.opp + 6} color={AMBER_INK} />
				{/* bracket: the equals sign between two copies */}
				<Bracket x1={MC[0] - 26} x2={MC[0] + 26} y={my(0) + 56} at={c.copies + 8} color={AMBER_INK} />
				<g opacity={vis(f, c.copies + 10, c.pull, 8)}><DrawPath d={`M${MC[0] + 30},${my(0) + 60} Q${MC[0] + 200},${my(0) + 110} ${MC[0] + 392},${my(0) + 40}`} at={c.copies + 10} dur={14} color={AMBER_INK} width={4} /></g>
				<g opacity={vis(f, c.checks + 20, c.attached, 8)} transform={`translate(${MC[0] + 230},${MC[1] - 255})`}>
					<circle r={34} fill="#fffdf8" stroke={GREY} strokeWidth={6} />
					<line x1={0} y1={0} x2={0} y2={-22} stroke={GREY} strokeWidth={6} strokeLinecap="round" transform={`rotate(${(f - c.checks) * 9})`} />
					<line x1={0} y1={0} x2={14} y2={0} stroke={GREY} strokeWidth={6} strokeLinecap="round" />
				</g>
				<DrawPath d={`M${MC[0] + 110},${my(missing) - 6} l16,18 l32,-38`} at={c.attached + 18} dur={12} color="#2f8a5b" width={8} />
			</Overlay>
			<Hand at={c.copies} out={c.pull} x={MC[0] + 400} y={my(0) - 6} size={56} color={AMBER_INK}>= the same chromosome</Hand>
			<Cen at={c.pull + 40} x={300} y={730} w={420} size={44} color={AMBER_INK}>new cell</Cen>
			<Cen at={c.pull + 40} x={1620} y={730} w={420} size={44} color={AMBER_INK}>new cell</Cen>
			<Cen at={c.both} x={300} y={786} w={460} size={40} color={INK}>both long bars and both short bars are here</Cen>
			<Cen at={c.both + 8} x={1620} y={786} w={420} size={40} color={INK}>and here too</Cen>
			<Hand at={c.checks + 4} out={c.before} x={MC[0] + 40} y={MC[1] - 330} size={52} color={AMBER_INK}>checkpoint</Hand>
			<Hand at={c.checks + 26} out={c.attached} x={MC[0] + 280} y={MC[1] - 290} size={44} color={GREY}>waits</Hand>
			<Hand at={c.before} x={MC[0] - 330} y={MC[1] - 340} size={48} color="#2f8a5b" w={660}>attached from both ends: go</Hand>
			<Pill at={c.checks + 40} x={MC[0] - 250} y={880} size={38} color={INK_SOFT}>tracker: 4, 4, 8, 4 chromosomes</Pill>
		</>
	);
};

// ---------- 6b. Accurate, not perfect ----------
const Mark: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (
	<g opacity={o}><circle cx={x} cy={y} r={11} fill={AMBER} stroke={AMBER_INK} strokeWidth={3.5} /></g>
);
const SmallCell: React.FC<{x: number; y: number; r?: number; o?: number; marked?: boolean; dup?: number}> = ({x, y, r = 90, o = 1, marked, dup = 0}) => (
	<g opacity={o}>
		<ellipse cx={x} cy={y} rx={r} ry={r * 0.86} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
		<Chrom x={x} y={y} kind="L" color={PLUM} dup={dup} s={0.6} />
		{marked ? <Mark x={x + (dup > 0 ? 8 : 0) * 0.6} y={y - 22} /> : null}
	</g>
);
const Letters: React.FC<{x: number; y: number; letters: string[]; flip?: number; at: number}> = ({x, y, letters, flip, at}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{letters.map((l, i) => {
				const flipped = flip !== undefined && f >= flip && i === 2;
				return (
					<g key={i} opacity={prog(f, at + i * 4, 10)}>
						<rect x={x + i * 74 - 30} y={y - 40} width={62} height={68} rx={12} fill={flipped ? '#ffe6a8' : '#fffdf8'} stroke={flipped ? AMBER_INK : INK_SOFT} strokeWidth={4} />
						<text x={x + i * 74 + 1} y={y + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46}} fill={flipped ? AMBER_INK : INK}>{flipped ? 'T' : l}</text>
					</g>
				);
			})}
		</g>
	);
};
const RIGHT_5: [number, number][] = [];
export const SceneNotPerfect: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('not-perfect'), {
		acc: 'accurate not perfect', mistake: 'A mistake made', copying: 'copying the DNA', mut: 'a mutation', ends: 'ends up in one', then: 'and then in every', divides: 'divides from that one', rarely: 'Rarely', two: 'the two chromatids',
		both: 'both move to', same: 'the same end', extra: 'an extra chromosome', short: 'one short', checks: 'Checks catch', notall: 'but not all',
	});
	const sA = vis(f, c.mistake - 20, c.ends - 6, 12);
	const sB = vis(f, c.ends - 4, c.rarely - 8, 12);
	const sC = prog(f, c.rarely - 4, 20);
	// stage C: metaphase and the mistake
	const travel = prog(f, c.both, 90);
	const e = 0.05 * prog(f, c.two, 16) + 0.95 * travel;
	const PL = CX - 426, PR = CX + 426;
	const my = (i: number) => CY + META_Y[i];
	const offs = (i: number) => {
		if (i !== 0) return anaOffsets(i, e);
		const y0 = META_Y[0];
		return {xa: lerp(0, 320, e), ya: lerp(0, 95 - y0, e), xb: lerp(0, 360, e), yb: lerp(0, -y0, e), sep: Math.min(1, e * 25)};
	};
	const bend = prog(f, c.both - 4, 30);
	const glow = vis(f, c.two, c.both, 10);
	const rightPts: [number, number][] = [[CX + 320, CY - 95], [CX + 400, CY - 95], [CX + 360, CY], [CX + 320, CY + 95], [CX + 400, CY + 95]];
	const leftPts: [number, number][] = [[CX - 400, CY - 95], [CX - 320, CY - 95], [CX - 320, CY + 95]];
	const mag = prog(f, c.checks, 70);
	const flagO = prog(f, c.checks + 54, 10) * (1 - 0.5 * prog(f, c.notall, 14));
	return (
		<>
			<Heading items={[[0, 'Mitosis is accurate, not perfect']]} size={64} />
			{/* A: a copying mistake */}
			<div style={{opacity: sA, position: 'absolute', inset: 0}}>
				<Overlay>
					<Chrom x={400} y={540} kind="L" color={PLUM} dup={1} s={1.9} />
					<Mark x={400 + 7 * 1.9 + 4} y={540 - 90} o={prog(f, c.copying + 30, 10)} />
					<DrawPath d="M480,500 Q620,500 790,500" at={c.mistake} dur={20} color={INK_SOFT} width={4} />
					<circle cx={1010} cy={500} r={225} fill="rgba(255,253,248,0.9)" stroke={AMBER_INK} strokeWidth={8} opacity={prog(f, c.mistake, 14)} />
					<Letters x={905} y={462} letters={['A', 'C', 'C', 'G']} at={c.mistake + 8} />
					<Letters x={905} y={562} letters={['A', 'C', 'C', 'G']} at={c.mistake + 18} flip={c.copying + 30} />
					<text x={880} y={410} textAnchor="start" opacity={prog(f, c.mistake + 8, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>original</text>
					<text x={880} y={510} textAnchor="start" opacity={prog(f, c.mistake + 18, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>copy</text>
				</Overlay>
				<Hand at={c.mut} x={620} y={790} size={56} color={AMBER_INK}>mutation: a change in the base order</Hand>
				<Hand at={c.mistake + 4} x={96} y={215} size={44} color={INK_SOFT} w={640}>one chromosome, copied: two sister chromatids</Hand>
			</div>
			{/* B: where the mistake ends up */}
			<div style={{opacity: sB, position: 'absolute', inset: 0}}>
				<Overlay>
					<SmallCell x={330} y={540} dup={1} marked o={prog(f, c.ends - 6, 12)} />
					<Arrow x1={440} y1={500} x2={660} y2={380} at={c.ends} color={INK_SOFT} />
					<Arrow x1={440} y1={580} x2={660} y2={700} at={c.ends + 4} color={INK_SOFT} />
					<SmallCell x={780} y={360} marked o={prog(f, c.ends + 14, 14)} />
					<SmallCell x={780} y={700} o={prog(f, c.ends + 18, 14)} />
					<Arrow x1={880} y1={330} x2={1060} y2={260} at={c.then} color={AMBER_INK} />
					<Arrow x1={880} y1={390} x2={1060} y2={470} at={c.then + 4} color={AMBER_INK} />
					<SmallCell x={1160} y={250} r={72} marked o={prog(f, c.then + 12, 14)} />
					<SmallCell x={1160} y={480} r={72} marked o={prog(f, c.then + 16, 14)} />
					<Arrow x1={1250} y1={225} x2={1380} y2={190} at={c.divides - 20} color={AMBER_INK} dash="3 12" />
					<Arrow x1={1250} y1={505} x2={1380} y2={540} at={c.divides - 16} color={AMBER_INK} dash="3 12" />
					<SmallCell x={1500} y={170} r={52} marked o={prog(f, c.divides - 8, 14)} />
					<SmallCell x={1500} y={560} r={52} marked o={prog(f, c.divides - 4, 14)} />
				</Overlay>
				<Cen at={c.ends + 20} x={780} y={800} w={400} size={44} color={INK_SOFT}>a clean copy</Cen>
				<Cen at={c.ends + 20} x={780} y={470} w={300} size={44} color={AMBER_INK}>the mistake</Cen>
				<Hand at={c.divides + 6} x={560} y={850} size={54} color={AMBER_INK}>one new cell, then its descendants</Hand>
			</div>
			{/* C: both chromatids to the same end */}
			<div style={{opacity: sC, position: 'absolute', inset: 0}}>
				<Overlay>
					<CellBody rx={RX + 40} />
					{CH.map((ch, i) => {
						const o = offs(i);
						return (
							<g key={i}>
								<Fibre x1={PL} y1={CY} x2={CX + o.xa - 4} y2={my(i) + o.ya} o={i === 0 ? 1 - clamp01(e * 5) : 1} />
								{i === 0 ? <Fibre x1={PR} y1={CY} x2={CX + o.xa + 4} y2={my(i) + o.ya} o={clamp01(e * 5)} /> : null}
								<Fibre x1={PR} y1={CY} x2={CX + o.xb + 4} y2={my(i) + o.yb} />
							</g>
						);
					})}
					<Pole x={PL} y={CY} at={-20} />
					<Pole x={PR} y={CY} at={-20} />
					{CH.map((ch, i) => <Chrom key={i} x={CX} y={my(i)} kind={ch.kind} color={ch.color} dup={1} coil={1} bend={bend} {...offs(i)} da={i === 0 ? 1 : -1} db={1} hiA={i === 0 ? glow : 0} hiB={i === 0 ? glow : 0} />)}
					<PenTap pts={rightPts} at={[0, 1, 2, 3, 4].map(k => c.extra + 16 + k * 14)} badge={[46, -30]} out={c.short} showPen={false} />
					<PenTap pts={leftPts} at={[0, 1, 2].map(k => c.short + 16 + k * 14)} badge={[-46, -30]} showPen={false} />
					{/* the caution mark: a flat grey triangle */}
					<g opacity={prog(f, c.extra, 14)} transform={`translate(${CX},${CY - 228})`}>
						<path d="M0,-34 L36,28 L-36,28 Z" fill="#e8eaec" stroke={GREY} strokeWidth={6} strokeLinejoin="round" />
						<line x1={0} y1={-12} x2={0} y2={8} stroke={GREY} strokeWidth={7} strokeLinecap="round" />
						<circle cx={0} cy={19} r={3.6} fill={GREY} />
					</g>
					{/* the check: a magnifier sweeps across and flags the problem */}
					<g opacity={vis(f, c.checks, c.notall + 30, 8)} transform={`translate(${lerp(CX - 360, CX + 330, mag)},${CY + 270})`}>
						<circle r={34} fill="rgba(255,253,248,0.8)" stroke={AMBER_INK} strokeWidth={7} />
						<line x1={24} y1={24} x2={58} y2={58} stroke={AMBER_INK} strokeWidth={10} strokeLinecap="round" />
					</g>
					<g opacity={flagO} transform={`translate(${CX + 440},${CY + 140})`}>
						<line x1={0} y1={0} x2={0} y2={-80} stroke={INK} strokeWidth={6} strokeLinecap="round" />
						<path d="M0,-80 L56,-62 L0,-44 Z" fill={AMBER} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
					</g>
				</Overlay>
				<Hand at={c.two + 4} out={c.both + 10} x={96} y={290} size={46} w={360}>one chromosome, two chromatids</Hand>
				<Hand at={c.extra + 24} x={1490} y={290} size={64} color={AMBER_INK}>5 chromosomes</Hand>
				<Hand at={c.short + 8} x={96} y={290} size={64} color={AMBER_INK}>3 chromosomes</Hand>
				<Hand at={c.extra + 70} x={1500} y={420} size={44} w={330} color={INK_SOFT}>one centromere, one chromosome</Hand>
				<Hand at={c.extra + 6} x={1500} y={190} size={44} w={330} color={INK_SOFT}>an extra chromosome</Hand>
				<Hand at={c.short + 4} x={96} y={200} size={44} w={330} color={INK_SOFT}>one short</Hand>
				<Hand at={c.checks + 50} x={CX + 330} y={CY + 230} size={44} color={GREY}>flagged</Hand>
			</div>
		</>
	);
};
