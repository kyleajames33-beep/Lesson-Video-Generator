// M6 B04 scenes 4 to 6: deletion and duplication (content and copy number, gene dosage, the Bar eye fly), inversion
// and translocation (order and position, balanced, breakpoints, one leukaemia on chromosomes 9 and 22), and a
// balanced carrier's gametes (one balanced, one unbalanced).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, PlateB, prog} from '../bio-m5-b13/shared';
import {ProteinBlob} from '../bio-m5-b06c/shared';
import {CurveArrow, Lbl} from '../bio-m6-b01/parts';
import {Term} from '../bio-m6-b03/parts';
import {S} from './common';
import {PLATES} from './assets';
import {CHR1, CHR2} from './s1';
import {AMBER, AMBER_INK, BIO_INK, Bar, BarTag, BreakMark, CW, Count, DoseBar, INK_SOFT, TickC, lay, lerp, vis} from './parts';
import type {Seg} from './parts';

// ---------- 4. Deletion and duplication ----------
const K4 = cues(S('deletion-duplication'), {lost: 'a segment is lost', one: 'only one copy', dup: 'In a duplication', twice: 'a segment appears twice', dosage: 'called gene dosage', product: 'how much product', flies: 'In fruit flies'});
export const SceneDelDup: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 625, gw = 80, YT = 330, YB = 500;
	const top = lay(CHR1, X0, gw, CW);
	const base = lay(CHR1, X0, gw, CW);
	const boardO = 1 - prog(f, K4.flies - 6, 14);
	const isDel = f < K4.dup;
	const drop = prog(f, K4.lost + 20, 16);
	const back = prog(f, K4.dup, 12);
	const sh = prog(f, K4.twice, 18) * 2 * gw;
	const cp = prog(f, K4.twice + 4, 18);
	const lower: Seg[] = base.segs.map((q, i) => {
		if (isDel && (i === 2 || i === 3)) return {...q, tone: f >= K4.lost ? 'amber' : 'n', y: YB + 70 * drop, o: 1 - drop};
		if (!isDel && i >= 4) return {...q, x: q.x + sh, capR: q.capR};
		if (!isDel && (i === 2 || i === 3)) return {...q, o: back};
		return q;
	});
	const ghosts: Seg[] = isDel ? [2, 3].map(i => ({...base.segs[i], dashed: true, o: prog(f, K4.lost + 24, 10)})) : [];
	const copies: Seg[] = !isDel ? [2, 3].map(i => ({...base.segs[i], x: base.segs[i].x + 2 * gw * cp, tone: 'amber' as const, o: prog(f, K4.twice, 8), capL: false, capR: false})) : [];
	const countsDel = vis(f, K4.one, K4.dup, 10);
	const countsDup = vis(f, K4.dosage, K4.flies, 10);
	const flyO = prog(f, K4.flies, 16);
	const mini = (bar: boolean) => {
		const labels = bar ? ['', '', '', '', '', '', '●', ''] : ['', '', '', '', '', '●', ''];
		const L = lay(labels, 0, 40, 20);
		L.segs.forEach((q, i) => { if (i === 2 || (bar && i === 3)) q.tone = 'amber'; });
		return L;
	};
	const mn = mini(false), mb = mini(true);
	return (
		<>
			<Heading text="Deletion and duplication" at={4} size={56} />
			<Overlay>
				<g opacity={boardO}>
					<BarTag x={600} y={YT} text="partner" at={6} size={32} />
					<Bar segs={top.segs} cen={top.cen} y={YT} gw={gw} h={56} />
					<Bar segs={[...lower, ...ghosts, ...copies]} cen={base.cen} y={YB} gw={gw} h={56} />
					{/* copy counters: this chromosome plus its partner */}
					{base.segs.map((q, i) => <Count key={'d' + i} x={q.x + gw / 2} y={YB + 72} n={i === 2 || i === 3 ? '1' : '2'} hot={i === 2 || i === 3} o={countsDel} />)}
					{base.segs.map((q, i) => <Count key={'u' + i} x={q.x + gw / 2 + (i >= 4 ? 2 * gw : 0)} y={YB + 72} n={i === 2 || i === 3 ? '3' : '2'} hot={i === 2 || i === 3} o={countsDup} />)}
				</g>
				<Lbl x={X0} y={680} text="deletion: segment lost" size={42} color={AMBER_INK} at={K4.lost + 10} out={K4.one} />
				<Lbl x={X0} y={680} text="half the usual copies" size={42} color={AMBER_INK} at={K4.one + 10} out={K4.dup} />
				<Lbl x={X0} y={680} text="duplication: segment twice" size={42} color={AMBER_INK} at={K4.twice + 16} out={K4.dosage} />
				<Term x={140} y={940} term="gene dosage" gloss="how many copies of a gene: more copies, more product" at={K4.dosage} out={K4.flies} size={46} />
				<g opacity={vis(f, K4.product - 10, K4.flies, 12)}>
					<DoseBar x={1480} y={860} h={110} p={1} label="2 copies" />
					<DoseBar x={1640} y={860} h={165} p={prog(f, K4.product, 20)} label="3 copies" amber />
				</g>
				{/* fruit flies: a duplicated stretch of the X narrows the eye */}
				<g opacity={flyO}>
					<PlateB p={PLATES.flyRed} cx={680} cy={500} w={380} />
					<PlateB p={PLATES.flyBar} cx={1240} cy={500} w={380} />
					<g transform={`translate(${680 - mn.end / 2},860)`}><Bar segs={mn.segs} cen={mn.cen} y={0} gw={40} h={30} /></g>
					<g transform={`translate(${1240 - mb.end / 2},860)`}><Bar segs={mb.segs} cen={mb.cen} y={0} gw={40} h={30} /></g>
				</g>
				<Lbl x={680} y={780} text="normal" size={42} anchor="middle" at={K4.flies + 10} />
				<Lbl x={1240} y={780} text="duplication: Bar eye" size={42} color={AMBER_INK} anchor="middle" at={K4.flies + 20} />
				<Lbl x={680 - mn.end / 2 - 16} y={871} text="X" size={34} color={INK_SOFT} anchor="end" at={K4.flies + 20} />
				<Lbl x={1240 - mb.end / 2 - 16} y={871} text="X" size={34} color={INK_SOFT} anchor="end" at={K4.flies + 20} />
				{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 5. Inversion and translocation ----------
const K5 = cues(S('inversion-translocation'), {breaks: 'breaks out', flips: 'flips', back: 'back to front', trans: 'In a translocation', nonmatch: 'non-matching chromosome', swap: 'a swap between two', every: 'every gene is still there', split: 'split it', join: 'join two genes together', single: 'a single blood-forming cell', swap922: 'swap between chromosomes nine', joining: 'joining two genes into one', active: 'always active', dividing: 'keep dividing'});
export const SceneInvTrans: React.FC = () => {
	const f = useCurrentFrame();
	const gw = 72, YN = 300, YM = 470, YC = 620;
	const N = lay(CHR1, 700, gw, CW);
	const M = lay(CHR1, 700, gw, CW);
	const C = lay(CHR2, 916, gw, CW, 'blue');
	const oldO = 1 - prog(f, K5.single - 6, 16);
	// inversion of E F G
	const lift = prog(f, K5.breaks, 14) * (1 - prog(f, K5.back - 8, 14));
	const mir = prog(f, K5.flips, 22) * (1 - prog(f, K5.trans, 16));
	const invTone = f >= K5.breaks && f < K5.trans + 8;
	const ex = M.segs[4].x, gx2 = M.segs[6].x;
	// translocation G H <-> P Q
	const cO = prog(f, K5.nonmatch - 10, 14);
	const t = prog(f, K5.swap + 6, 26);
	const moving = f >= K5.swap && f < K5.every;
	const mid: Seg[] = M.segs.map((q, i) => {
		if (i >= 4 && i <= 6) return {...q, x: lerp(q.x, ex + gx2 - q.x, mir), y: YM - 60 * lift, tone: invTone ? 'amber' : 'n'};
		if (i >= 6) return {...q, y: lerp(YM, YC, t), x: q.x + Math.sin(Math.PI * t) * 60, ring: moving ? 1 : 0};
		return q;
	});
	mid[6] = mir > 0.01 || f < K5.swap ? mid[6] : {...M.segs[6], y: lerp(YM, YC, t), x: M.segs[6].x + Math.sin(Math.PI * t) * 60, ring: moving ? 1 : 0};
	const chr2: Seg[] = C.segs.map((q, i) => (i >= 3 ? {...q, y: lerp(YC, YM, t), x: q.x - Math.sin(Math.PI * t) * 60, ring: moving ? 1 : 0} : q));
	const ticks = vis(f, K5.every, K5.split, 10);
	const cut = prog(f, K5.split + 6, 10);
	chr2[2] = {...chr2[2], cut};
	const joinO = vis(f, K5.join + 6, K5.single, 10);
	const oX = C.segs[2].x + gw / 2, gX = M.segs[6].x + gw / 2;
	// the leukaemia: chromosomes 9 and 22 (no gene names)
	const nO = prog(f, K5.single + 4, 16);
	const L9 = lay(['', '', '●', '', '', '', '', '', ''], 700, gw, CW);
	const L22 = lay(['', '●', '', '', ''], 700, gw, CW, 'blue');
	const t2 = prog(f, K5.swap922 + 6, 26);
	const s9 = L9.segs.map((q, i) => (i === 7 ? {...q, x: lerp(q.x, L22.segs[2].x, t2), y: lerp(YM, YC, t2), capR: true} : q));
	const s22 = L22.segs.map((q, i) => (i >= 2 ? {...q, x: lerp(q.x, L9.segs[7].x + (i - 2) * gw, t2), y: lerp(YC, YM, t2)} : q));
	if (t2 > 0.5) { s9[6] = {...s9[6], capR: false}; s22[1] = {...s22[1], capR: false}; }
	const fuseO = prog(f, K5.joining, 12);
	const glow = prog(f, K5.active, 10);
	const cells = f < K5.dividing ? 1 : f < K5.dividing + 24 ? 2 : 4;
	const cellIn = prog(f, K5.dividing - 30, 12);
	return (
		<>
			<Heading text="Inversion and translocation" at={4} size={56} />
			<Overlay>
				<g opacity={oldO}>
					<BarTag x={675} y={YN} text="normal" at={6} size={32} />
					<Bar segs={N.segs} cen={N.cen} y={YN} gw={gw} h={54} />
					<Bar segs={mid} cen={M.cen} y={YM} gw={gw} h={54} />
					<g opacity={cO} transform={`translate(0,${(1 - cO) * 40})`}><Bar segs={chr2} cen={C.cen} cenTone="blue" y={YC} gw={gw} h={54} /></g>
					{[...mid.map(q => ({x: q.x, y: q.y ?? YM})), ...chr2.map(q => ({x: q.x, y: q.y ?? YC}))].map((q, i) => <TickC key={i} x={q.x + gw / 2} y={q.y - 44} o={ticks * prog(f, K5.every + i * 2, 6)} s={20} />)}
					<BreakMark x={oX} y={YC} h={54} o={vis(f, K5.split, K5.join + 10, 8)} />
					{joinO > 0.01 ? <rect x={oX} y={YC - 36} width={gX - oX} height={72} rx={14} fill="none" stroke={AMBER} strokeWidth={6} opacity={joinO} /> : null}
				</g>
				<Lbl x={1340} y={560} text="inversion: segment reversed" size={38} color={AMBER_INK} at={K5.back + 10} out={K5.trans} />
				<Lbl x={1340} y={560} text="translocation: moved to" size={38} color={AMBER_INK} at={K5.swap + 26} out={K5.every} />
				<Lbl x={1340} y={604} text="another chromosome" size={38} color={AMBER_INK} at={K5.swap + 30} out={K5.every} />
				<Lbl x={1340} y={560} text="balanced: nothing lost or gained" size={38} color={BIO_INK} at={K5.every + 10} out={K5.split} />
				<Lbl x={1340} y={640} text="breakpoint inside a gene" size={38} color={AMBER_INK} at={K5.split + 8} out={K5.join} />
				<Lbl x={1340} y={640} text="two genes joined" size={38} color={AMBER_INK} at={K5.join + 8} out={K5.single} />
				{/* chromosomes 9 and 22 in one blood-forming cell */}
				<g opacity={nO}>
					<BarTag x={675} y={YM} text="9" at={-100} size={40} />
					<BarTag x={675} y={YC} text="22" at={-100} size={40} />
					<Bar segs={s9} cen={L9.cen} y={YM} gw={gw} h={54} />
					<Bar segs={s22} cen={L22.cen} cenTone="blue" y={YC} gw={gw} h={54} />
					{fuseO > 0.01 ? <rect x={L22.segs[1].x + gw / 2} y={YC - 36} width={gw * 1.0 + 4} height={72} rx={14} fill="none" stroke={AMBER} strokeWidth={6} opacity={fuseO} /> : null}
					<g opacity={prog(f, K5.active - 6, 12)}>
						{glow > 0.01 ? <circle cx={1180} cy={YC} r={64 + 6 * Math.sin(f / 5)} fill={AMBER} opacity={0.3 * glow} /> : null}
						<ProteinBlob x={1180} y={YC} r={42} fill="#f3d9a6" stroke={AMBER_INK} />
					</g>
					<g opacity={cellIn}>
						{(cells === 1 ? [[1400, YC]] : cells === 2 ? [[1370, YC], [1440, YC]] : [[1370, YC - 36], [1440, YC - 36], [1370, YC + 36], [1440, YC + 36]]).map(([cx, cy], k) => <circle key={k} cx={cx} cy={cy} r={28} fill="#f4e4ec" stroke="#9a5a78" strokeWidth={3} />)}
					</g>
				</g>
				<Lbl x={700} y={780} text="two genes joined" size={40} color={AMBER_INK} at={K5.joining + 8} out={K5.dividing} />
				<Lbl x={700} y={780} text="chronic myeloid leukaemia" size={40} color={AMBER_INK} at={K5.dividing + 6} />
			</Overlay>
		</>
	);
};

// ---------- 6. A balanced carrier's gametes ----------
const K6 = cues(S('carrier-gametes'), {just: 'can get just one', missing: 'one segment is missing', doubled: 'another is doubled', misc: 'repeated miscarriages'});
const SG = 34, SC = Math.round(CW * SG / 64);
export const SceneCarrier: React.FC = () => {
	const f = useCurrentFrame();
	const n1 = lay(CHR1, 0, SG, SC), n2 = lay(CHR2, 0, SG, SC, 'blue');
	const t1 = lay(['A', 'B', '●', 'C', 'D', 'E', 'F', 'P', 'Q'], 0, SG, SC);
	t1.segs[6].tone = 'blue'; t1.segs[7].tone = 'blue';
	const t2 = lay(['M', 'N', '●', 'O', 'G', 'H'], 0, SG, SC, 'blue');
	t2.segs[3].tone = 'n'; t2.segs[4].tone = 'n';
	const mv = prog(f, K6.just + 10, 30);
	const P = (L: {segs: Seg[]; cen: number | null}, x: number, y: number, extra?: (s: Seg, i: number) => Seg) => (
		<g transform={`translate(${x},0)`}><Bar segs={extra ? L.segs.map(extra) : L.segs} cen={L.cen} cenTone={L.segs[0].tone === 'blue' ? 'blue' : 'n'} y={y} gw={SG} h={30} size={18} /></g>
	);
	const cellRows = {n1: [330, 455], t1: [330, 515], n2: [330, 600], t2: [330, 660]};
	const LG = [1130, 420], RG = [1560, 420];
	const go = (from: number[], to: number[]) => [lerp(from[0], to[0], mv), lerp(from[1], to[1], mv)];
	const ringPQ = prog(f, K6.doubled, 10);
	return (
		<>
			<Heading text="A balanced carrier's gametes" at={4} size={56} />
			<Overlay>
				<ellipse cx={475} cy={560} rx={300} ry={200} fill="#fbf6e8" stroke="#8a7a63" strokeWidth={4} opacity={prog(f, 0, 12)} />
				<g opacity={1 - 0.5 * mv}>
					{P(n1, cellRows.n1[0], cellRows.n1[1])}
					{P(t1, cellRows.t1[0], cellRows.t1[1])}
					{P(n2, cellRows.n2[0], cellRows.n2[1])}
					{P(t2, cellRows.t2[0], cellRows.t2[1])}
				</g>
				{[LG, RG].map((g, k) => <circle key={k} cx={g[0]} cy={g[1]} r={175} fill="#fbf6e8" stroke="#8a7a63" strokeWidth={4} opacity={prog(f, K6.just, 14)} />)}
				{mv > 0.01 ? (
					<>
						{(() => { const [x, y] = go(cellRows.t1, [LG[0] - 144, 385]); return P(t1, x, y); })()}
						{(() => { const [x, y] = go(cellRows.t2, [LG[0] - 93, 460]); return P(t2, x, y); })()}
						{(() => { const [x, y] = go(cellRows.t1, [RG[0] - 144, 385]); return P(t1, x, y, (s, i) => (i >= 6 ? {...s, ring: ringPQ} : s)); })()}
						{(() => { const [x, y] = go(cellRows.n2, [RG[0] - 93, 460]); return P(n2, x, y, (s, i) => (i >= 3 ? {...s, ring: ringPQ} : s)); })()}
					</>
				) : null}
				<TickC x={LG[0] + 120} y={290} o={prog(f, K6.just + 44, 10)} s={34} />
				<Lbl x={LG[0]} y={650} text="every gene once" size={40} color={BIO_INK} anchor="middle" at={K6.just + 44} out={K6.doubled} />
				<Lbl x={RG[0]} y={650} text="G H missing" size={40} color={AMBER_INK} anchor="middle" at={K6.missing + 10} out={K6.misc - 10} />
				<Lbl x={RG[0]} y={700} text="P Q twice" size={40} color={AMBER_INK} anchor="middle" at={K6.doubled + 6} out={K6.misc - 10} />
				<Lbl x={RG[0]} y={222} text="unbalanced" size={42} color={AMBER_INK} anchor="middle" at={K6.doubled + 20} />
				<CurveArrow a={[RG[0], 610]} b={[RG[0], 790]} at={K6.misc} bow={0} color={AMBER_INK} width={5} />
				<Lbl x={RG[0]} y={850} text="unbalanced embryo" size={42} color={AMBER_INK} anchor="middle" at={K6.misc + 12} />
				{void INK_SOFT}
			</Overlay>
		</>
	);
};
