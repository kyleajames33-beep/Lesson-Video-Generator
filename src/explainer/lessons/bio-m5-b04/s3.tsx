import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, DirArrow, EndTag, Enter, Fade, FONT_HAND, HalfIcon, Hand, Heading, INK, INK_SOFT, ladderGeom, Ladder, mix, NEUT, NEWC, ORIG, Overlay,
	prog, pulse, S, Scribble, StrandKey, StrandRow, Tick, tilesOf, TileSpec, TwistHelix, Cross,
} from './shared';
import {CT, CB, X0, PIT, N, Y_U, Y_L} from './s2';

const GREYC = '#8d949b';

// ---------- 7. Half old, half new ----------
const Daughters: React.FC<{o?: number; topA?: string; botA?: string; topB?: string; botB?: string; ghost?: boolean; yU?: number; yL?: number; glow?: [number, number, number, number]; tint?: boolean}> = ({o = 1, topA = ORIG, botA = NEWC, topB = NEWC, botB = ORIG, ghost, yU = Y_U, yL = Y_L, glow = [0, 0, 0, 0], tint}) => {
	const tp = (g: number, tone?: TileSpec['tone']) => tilesOf(CT, undefined, () => ({tone, glow: g}));
	const bt = (g: number, tone?: TileSpec['tone']) => tilesOf(CB, undefined, () => ({tone, glow: g}));
	const tone = ghost ? 'ghost' : undefined;
	return (
		<g opacity={o}>
			<Ladder x={X0} y={yU} n={N} pitch={PIT} top={tp(glow[0], tone)} bot={bt(glow[1], tone)} topColor={topA} botColor={botA} />
			<Ladder x={X0} y={yL} n={N} pitch={PIT} top={tp(glow[2], tone)} bot={bt(glow[3], tone)} topColor={topB} botColor={botB} />
		</g>
	);
};

export const SceneSemi: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('semi-conservative'), {
		two: 'two new DNA molecules', daughter: 'called daughter molecules', origS: 'one original strand', newS: 'one new strand', semi: 'called semi-conservative', halfMeans: 'Semi means half', kept: 'conservative means kept',
		another: 'gone another way', bothOrig: 'keep both original strands', allNew: 'be all new', doesnot: 'It does not', shared: 'The original is shared out', oneEach: 'one strand to each', half: 'Half old', halfNew: 'half new',
	});
	const gM = ladderGeom({x: X0, y: Y_U, pitch: PIT, n: N});
	const SC = 0.66, OX = 76, OY = 166;
	const mx = (x: number) => OX + x * SC, my = (y: number) => OY + y * SC;
	const ghostP = prog(f, c.another, 18) * (1 - prog(f, c.doesnot + 34, 16));
	const realO = 1 - ghostP * 0.92;
	const crossO = prog(f, c.doesnot, 10);
	const startP = prog(f, c.shared, 16);
	const pullO = 1 - prog(f, c.halfNew + 6, 30);
	const helixP = prog(f, c.halfNew + 6, 30);
	const midU = (Y_U + gM.yBot) / 2, midL = (Y_L + Y_L + 242) / 2;
	const hiBar = (y: number, at: number, color: string) => <rect x={X0 - 150} y={y} width={N * PIT + 120} height={118} rx={26} fill={color} opacity={0.22 * pulse(f, at, 46)} />;
	const sc = 1 - 0.35 * helixP;
	const rightO = 1 - prog(f, c.another - 8, 12);
	return (
		<>
			<Heading items={[[2, 'Two new molecules']]} size={64} />
			<div style={{position: 'absolute', inset: 0, opacity: pullO, transform: `scale(${sc})`, transformOrigin: '960px 520px'}}>
				<Overlay>
					<g transform={`translate(${OX},${OY}) scale(${SC})`}>
						{hiBar(Y_U - 30, c.origS, ORIG)}
						{hiBar(Y_L + 242 - 100, c.origS, ORIG)}
						{hiBar(Y_U + 242 - 100, c.newS, NEWC)}
						{hiBar(Y_L - 30, c.newS, NEWC)}
						<Daughters o={realO} />
						{/* the other way (ghost): one molecule with both originals, one all new */}
						<g opacity={ghostP}>
							<Ladder x={X0} y={Y_U} n={N} pitch={PIT} top={tilesOf(CT, undefined, () => ({tone: 'ghost' as const}))} bot={tilesOf(CB, undefined, () => ({tone: 'ghost' as const}))} topColor={mix(ORIG, '#ffffff', 0.35)} botColor={mix(ORIG, '#ffffff', 0.35)} />
							<Ladder x={X0} y={Y_L} n={N} pitch={PIT} top={tilesOf(CT, undefined, () => ({tone: 'ghost' as const}))} bot={tilesOf(CB, undefined, () => ({tone: 'ghost' as const}))} topColor={mix(NEWC, '#ffffff', 0.35)} botColor={mix(NEWC, '#ffffff', 0.35)} />
						</g>
						<g opacity={crossO * (1 - prog(f, c.doesnot + 34, 16))}><Cross x={960} y={(midU + midL) / 2} s={6} at={c.doesnot} color={GREYC} width={16} /></g>
					</g>
					{/* the start ladder and the arrows to each daughter */}
					<g opacity={startP}>
						<Ladder x={1420} y={560} n={4} pitch={82} tw={50} th={36} so={14} gap={26} top={tilesOf('ATCG')} bot={tilesOf('TAGC')} />
						<text x={1540} y={756} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>the molecule we copied</text>
						<path d={`M1691,560 C1760,440 1470,${my(Y_U) + 30} ${mx(X0 + 7 * PIT + 100)},${my(Y_U)}`} fill="none" stroke={ORIG} strokeWidth={6} strokeDasharray="14 12" strokeLinecap="round" />
						<path d={`M1691,686 C1760,780 1470,${my(Y_L + 242) + 10} ${mx(X0 + 7 * PIT + 100)},${my(Y_L + 242)}`} fill="none" stroke={ORIG} strokeWidth={6} strokeDasharray="14 12" strokeLinecap="round" />
					</g>
				</Overlay>
				<Hand at={c.daughter} x={96} y={my(midU) - 40} size={40} w={180} color={INK}>daughter molecule</Hand>
				<Hand at={c.daughter + 12} x={96} y={my(midL) - 40} size={40} w={180} color={INK}>daughter molecule</Hand>
				<Enter at={c.semi} out={c.half - 8} style={{position: 'absolute', left: 96, top: 196}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK}}>semi-conservative replication</span>
				</Enter>
				<Hand at={c.bothOrig + 30} out={c.doesnot + 30} x={1330} y={300} size={46} w={520} color={GREYC}>the other way: not what happens</Hand>
				<Hand at={c.oneEach} x={1290} y={440} size={44} w={560} color={ORIG}>one original strand to each</Hand>
			</div>
			{/* meaning of semi */}
			<Overlay style={{opacity: pullO * rightO}}>
				<HalfIcon x={1480} y={400} r={56} p={prog(f, c.halfMeans, 24)} o={prog(f, c.halfMeans - 6, 10)} />
			</Overlay>
			<div style={{opacity: pullO * rightO}}>
				<Enter at={c.kept} style={{position: 'absolute', left: 1290, top: 490, width: 600}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: AMBER_INK, lineHeight: 1.05}}>semi = half<br />conservative = kept</div>
				</Enter>
			</div>
			{/* the pull-out: two helices, one blue strand and one green strand each */}
			<Overlay style={{opacity: helixP}}>
				<TwistHelix x={200} y={520} w={640} amp={86} turns={1.8} tw={1} phase={f * 0.03} c1={ORIG} c2={NEWC} rungs={9} p={helixP} />
				<TwistHelix x={1080} y={520} w={640} amp={86} turns={1.8} tw={1} phase={f * 0.03 + 1.2} c1={NEWC} c2={ORIG} rungs={9} p={helixP} />
			</Overlay>
			<Enter at={c.half} style={{position: 'absolute', left: 0, right: 0, top: 170, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28}}>
				<svg width={110} height={110} viewBox="-55 -55 110 110"><HalfIcon x={0} y={0} r={46} /></svg>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 110, color: AMBER_INK}}>Half old, half new.</span>
			</Enter>
			<StrandKey at={0} />
		</>
	);
};

// ---------- worked example ----------
const WX = 510, WP = 300, WY = 330;
const wg = ladderGeom({th: 80, x: WX, y: WY, pitch: WP, n: 4});
const wcol = (i: number) => WX + i * WP;
const TaskBar: React.FC<{at: number}> = ({at}) => <Hand at={at} x={96} y={96} size={52}>Copy this molecule. Label original and new strands and every end.</Hand>;
const StepNote: React.FC<{at: number; out?: number; t: string; y?: number}> = ({at, out, t, y = 740}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: 96, top: y, width: 560}}>
		<div style={{background: '#fff3d6', border: `4px solid ${AMBER}`, borderRadius: 26, padding: '6px 22px 12px', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: AMBER_INK, lineHeight: 1.05}}>{t}</div>
	</Enter>
);

export const SceneWorkedMolecule: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-molecule'), {
		piece: 'short piece of DNA', four: 'four pairs of bases long', other: 'the other way round', three: "its 3' end", tA: 'A T', tT: 'T C', tC: 'C G', tG: 'G Its',
		five: "5' to 3'", bT: 'reads T', bA: 'T A', bG: 'A G', bC: 'G C', step: 'Step one', sep: 'the strands separate', blue: 'colour them blue', orig: 'because they are original',
	});
	const lad = prog(f, c.piece, 20);
	const open = prog(f, c.sep, 44);
	const col = mix(NEUT, ORIG, prog(f, c.blue, 22));
	const oD = 90;
	const yTop = WY - open * oD + 14, yBot = wg.yBot + open * oD + 14;
	const gl = (at: number) => pulse(f, at, 26);
	const top: TileSpec[] = 'ATCG'.split('').map((l, i) => ({l, glow: gl([c.tA, c.tT, c.tC, c.tG][i])}));
	const bot: TileSpec[] = 'TAGC'.split('').map((l, i) => ({l, glow: gl([c.bT, c.bA, c.bG, c.bC][i])}));
	return (
		<>
			<TaskBar at={0} />
			<Overlay>
				<Ladder tw={110} th={80} x={WX} y={WY} n={4} pitch={WP} dirTop={-1} top={top} bot={bot} topColor={col} botColor={col} open={() => open} openDist={oD} o={lad} />
				<EndTag x={wcol(0) - 215} y={yTop} t="3'" at={c.three} size={66} />
				<EndTag x={wcol(3) + 215} y={yTop} t="5'" at={c.three + 10} size={66} />
				<EndTag x={wcol(0) - 215} y={yBot} t="5'" at={c.five} size={66} />
				<EndTag x={wcol(3) + 215} y={yBot} t="3'" at={c.five + 6} size={66} />
				<Scribble cx={wcol(0) - 215} cy={yTop - 18} rx={46} ry={42} at={c.three + 6} color={AMBER} seed={2} />
				<EndTag x={wcol(3) + 380} y={yTop} t="original" at={c.orig} color={ORIG} size={52} />
				<EndTag x={wcol(3) + 380} y={yBot} t="original" at={c.orig + 8} color={ORIG} size={52} />
			</Overlay>
			<Hand at={c.other} out={c.sep} x={840} y={190} size={44} color={AMBER_INK}>drawn the other way round this time</Hand>
			<StepNote at={c.step} t="1 separate" />
			<StrandKey at={c.blue} />
		</>
	);
};

// ---------- 5b + 5b2: new bottom strand, then turn the pair round ----------
export const SceneWorkedBottom: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-bottom'), {
		start: 'Start with the top template', first: 'Its first base is A', lT: 'needs a T', lA: 'needs an A', lG: 'needs a G', lC: 'needs a C', green: 'in green', gT: 'reads T', gA: 'T A', gG: ['A G', 2], gC: 'G C',
		opp: 'runs opposite', turn: 'turn the pair round', fiveL: "5' end", swap: 'swap order', nowReads: 'now reads G', rG: 'reads G', rC: ['G C', 2], rT: 'C T', rA: ['T A', 2], nC: 'reads C', nG: 'C G', nA: 'G A', nT: ['A T', 2],
	});
	const g = wg;
	const landAt = [c.lT, c.lA, c.lG, c.lC];
	const flipP = prog(f, c.turn, 38);
	const sx = Math.max(0.001, Math.abs(Math.cos(Math.PI * flipP)));
	const after = flipP >= 0.5;
	const newTiles = (arr: string, lands: number[], dirAfter: boolean): TileSpec[] => arr.split('').map((l, i) => {
		const p = prog(f, lands[i], 14);
		return {l, o: p, dy: (1 - p) * 110, glow: pulse(f, lands[i] + 6, 26) + (dirAfter ? 0 : pulse(f, [c.gT, c.gA, c.gG, c.gC][i], 26) * 0.8)};
	});
	const tmplBefore: TileSpec[] = 'ATCG'.split('').map((l, i) => ({l, glow: pulse(f, c.first + i * 14, 24) * (i === 0 ? 1 : 0)}));
	const greenP = prog(f, c.green, 22);
	const nLink = (i: number) => prog(f, c.green + i * 8, 14);
	const nUnit = () => greenP;
	// after the flip: template 5' left reads G C T A; new strand 3' left reads C G A T
	const tmplAfter: TileSpec[] = 'GCTA'.split('').map((l, i) => ({l, glow: pulse(f, [c.rG, c.rC, c.rT, c.rA][i] as number, 24)}));
	const newAfter: TileSpec[] = 'CGAT'.split('').map((l, i) => ({l, glow: pulse(f, [c.nC, c.nG, c.nA, c.nT][i], 24)}));
	const arcs = 'ATCG'.split('').map((_, i) => ({a: wcol(i), b: wcol(3 - i)}));
	const arcO = pulse(f, c.turn - 2, 44);
	return (
		<>
			<TaskBar at={0} />
			<StepNote at={c.start - 6} t="2 build the new bottom strand" />
			<Enter at={c.swap} out={c.swap + 120} style={{position: 'absolute', left: 720, top: 730, width: 420}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: AMBER_INK, lineHeight: 1.05}}>letters swap order</div></Enter>
			<Overlay>
				{/* the pair, flipped like a page about the vertical centre */}
				<g transform={`translate(960,0) scale(${sx},1) translate(-960,0)`}>
					{!after ? (
						<g>
							<Ladder tw={110} th={80} x={WX} y={WY} n={4} pitch={WP} dirTop={-1} top={tmplBefore} bot={newTiles('TAGC', landAt, false)} topColor={ORIG} botColor={NEWC} botUnit={nUnit} botLink={nLink} bond={i => prog(f, landAt[i] + 8, 12)} />
							<EndTag x={wcol(0) - 215} y={WY + 14} t="3'" at={0} size={66} /><EndTag x={wcol(3) + 215} y={WY + 14} t="5'" at={0} size={66} />
							<EndTag x={wcol(0) - 215} y={g.yBot + 14} t="5'" at={c.opp + 6} color={NEWC} size={66} /><EndTag x={wcol(3) + 215} y={g.yBot + 14} t="3'" at={c.opp + 12} color={NEWC} size={66} />
							<DirArrow x1={wcol(3) + 110} x2={wcol(0) - 110} y={WY - 62} at={c.start + 10} color={ORIG} dur={30} />
							<DirArrow x1={wcol(0) - 110} x2={wcol(3) + 110} y={g.yBot + 74} at={c.opp + 2} color={NEWC} dur={30} />
							<Scribble cx={wcol(0) - 215} cy={(WY + g.yBot) / 2 + 14} rx={62} ry={150} at={c.opp + 20} color={AMBER} seed={8} />
							{[0, 1, 2, 3].map(i => <Tick key={i} x={wcol(i) + 100} y={(g.topFace + g.botFace) / 2 + 3} at={landAt[i] + 14} s={0.85} />)}
						</g>
					) : (
						<g>
							<Ladder tw={110} th={80} x={WX} y={WY} n={4} pitch={WP} dirTop={1} top={tmplAfter} bot={newAfter} topColor={ORIG} botColor={NEWC} />
							<EndTag x={wcol(0) - 215} y={WY + 14} t="5'" at={0} size={66} /><EndTag x={wcol(3) + 215} y={WY + 14} t="3'" at={0} size={66} />
							<EndTag x={wcol(0) - 215} y={g.yBot + 14} t="3'" at={0} color={NEWC} size={66} /><EndTag x={wcol(3) + 215} y={g.yBot + 14} t="5'" at={0} color={NEWC} size={66} />
							<DirArrow x1={wcol(0) - 110} x2={wcol(3) + 110} y={WY - 62} at={c.turn + 20} color={ORIG} dur={20} />
							<DirArrow x1={wcol(3) + 110} x2={wcol(0) - 110} y={g.yBot + 74} at={c.turn + 20} color={NEWC} dur={20} />
						</g>
					)}
				</g>
				{/* ghost arcs from each tile to its mirrored position during the turn */}
				<g opacity={arcO * 0.5}>
					{arcs.map((a, i) => <path key={i} d={`M${a.a},${g.topFace + 36} Q${(a.a + a.b) / 2},${WY - 150 - Math.abs(a.a - a.b) * 0.06} ${a.b},${g.topFace + 36}`} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="8 10" />)}
				</g>
				{/* the other original strand, set aside */}
				<g transform="translate(1300,850) scale(0.5)" opacity={1 - prog(f, c.turn + 30, 16)}>
					<StrandRow tw={110} th={80} x={0} y={0} n={4} pitch={WP} face="up" dir={1} color={ORIG} tiles={tilesOf('TAGC')} />
				</g>
				<g opacity={1 - prog(f, c.turn + 30, 16)}><text x={1150} y={758} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={ORIG}>original strand, set aside</text></g>
			</Overlay>
			<Overlay>
				{[c.lT, c.lA, c.lG, c.lC].map((a, i) => <Fade key={i} at={a - 2} out={a + 36}><text x={wcol(i)} y={WY - 100} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>{['A needs T', 'T needs A', 'C needs G', 'G needs C'][i]}</text></Fade>)}
			</Overlay>
			<StrandKey at={0} />
		</>
	);
};

// ---------- 5c: new top strand ----------
export const SceneWorkedTop: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-top'), {
		now: 'Now the bottom template', fiveL: "its 5' end", rT: 'reads T', needA: 'needs an A', needT: 'needs a T', needC: 'needs a C', needG: 'needs a G', reads: 'reads A', rA2: 'A T', rT2: 'T C', rC2: 'C G',
		threeL: "3' end", exactly: 'exactly like', orig: 'original top strand',
	});
	const YT = 410;
	const g = ladderGeom({th: 80, x: WX, y: YT, pitch: WP, n: 4});
	const landAt = [c.needA + 4, c.needT + 4, c.needC + 4, c.needG + 4];
	const tIn = prog(f, 4, 26);
	const newTop: TileSpec[] = 'ATCG'.split('').map((l, i) => {
		const p = prog(f, landAt[i], 14);
		return {l, o: p, dy: -(1 - p) * 110, glow: pulse(f, landAt[i] + 6, 26) + pulse(f, [c.reads, c.rA2, c.rT2, c.rC2][i], 24) * 0.8 + pulse(f, c.exactly, 50) * 0.7};
	});
	const tmpl: TileSpec[] = 'TAGC'.split('').map((l, i) => ({l, glow: pulse(f, [c.rT, c.rT + 14, c.rT + 28, c.rT + 42][i], 24) * (f < c.needA ? 0.8 : 0)}));
	const gp = prog(f, c.reads, 24);
	const exact = pulse(f, c.exactly, 70);
	const yParked = 215;
	return (
		<>
			<TaskBar at={0} />
			<StepNote at={c.now} t="3 build the new top strand" />
			<Overlay>
				{/* the original top strand, parked above for the comparison */}
				<StrandRow tw={110} th={80} x={WX} y={yParked} n={4} pitch={WP} face="down" dir={-1} color={ORIG} tiles={tilesOf('ATCG', undefined, () => ({glow: exact}))} o={prog(f, c.now + 20, 20)} />
				<EndTag x={wcol(0) - 215} y={yParked + 12} t="3'" at={c.now + 30} size={56} color={ORIG} />
				<EndTag x={wcol(3) + 215} y={yParked + 12} t="5'" at={c.now + 30} size={56} color={ORIG} />
				<Ladder tw={110} th={80} x={WX} y={YT} n={4} pitch={WP} dirTop={-1} top={newTop} bot={tmpl} topColor={NEWC} botColor={ORIG} topUnit={() => gp} topLink={() => gp} bond={i => prog(f, landAt[i] + 8, 12)} o={tIn} />
				<EndTag x={wcol(0) - 215} y={g.yBot + 14} t="5'" at={c.fiveL} size={66} />
				<EndTag x={wcol(3) + 215} y={g.yBot + 14} t="3'" at={c.fiveL + 6} size={66} />
				<EndTag x={wcol(0) - 215} y={YT + 14} t="3'" at={c.threeL} color={NEWC} size={66} />
				<EndTag x={wcol(3) + 215} y={YT + 14} t="5'" at={c.threeL + 6} color={NEWC} size={66} />
				<Scribble cx={wcol(0) - 215} cy={YT + 2} rx={46} ry={42} at={c.threeL + 8} color={AMBER} seed={3} />
				{[0, 1, 2, 3].map(i => <Tick key={i} x={wcol(i) + 100} y={(g.topFace + g.botFace) / 2 + 3} at={landAt[i] + 14} s={0.85} />)}
				{/* bracket and tick between the new top row and the original top row */}
				<g opacity={prog(f, c.exactly, 14)}>
					<path d="M1700,262 L1730,262 L1730,470 L1700,470" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<text x={1752} y={392} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70}} fill={AMBER_INK}>=</text>
				</g>
				<Tick x={1830} y={350} at={c.orig + 4} s={1.4} />
			</Overlay>
			<StrandKey at={0} />
		</>
	);
};

// ---------- 5d: the two daughters ----------
export const SceneWorkedDaughters: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-daughters'), {
		together: 'put the molecules together', each: 'Each daughter', blue: 'one blue original strand', green: 'one green new strand', both: 'both read exactly', began: 'molecule we began with', why: 'Why', same: 'the same bases', partner: 'original partner of its template',
		rebuilds: 'Each template rebuilds', kept: 'how the information survives',
	});
	const YA = 215, YB = 575;
	const gA = ladderGeom({th: 80, x: WX, y: YA, pitch: WP, n: 4}), gB = ladderGeom({th: 80, x: WX, y: YB, pitch: WP, n: 4});
	const asm = prog(f, c.together, 30);
	const hiBar = (y: number, at: number, color: string) => <rect x={WX - 150} y={y} width={3 * WP + 300} height={116} rx={26} fill={color} opacity={0.24 * pulse(f, at, 50)} />;
	const ghostP = prog(f, c.both - 6, 18);
	const eqP = prog(f, c.same, 16);
	return (
		<>
			<TaskBar at={0} />
			<Overlay>
				{hiBar(YA - 28, c.blue, ORIG)}
				{hiBar(YB + 242 - 98, c.blue, ORIG)}
				{hiBar(gA.yBot - 98, c.green, NEWC)}
				{hiBar(YB - 28, c.green, NEWC)}
				<g transform={`translate(0,${(1 - asm) * -60})`} opacity={asm}>
					<Ladder tw={110} th={80} x={WX} y={YA} n={4} pitch={WP} dirTop={-1} top={tilesOf('ATCG')} bot={tilesOf('TAGC')} topColor={ORIG} botColor={NEWC} />
					<EndTag x={wcol(0) - 215} y={YA + 14} t="3'" at={0} size={56} /><EndTag x={wcol(3) + 215} y={YA + 14} t="5'" at={0} size={56} />
					<EndTag x={wcol(0) - 215} y={gA.yBot + 14} t="5'" at={0} size={56} color={NEWC} /><EndTag x={wcol(3) + 215} y={gA.yBot + 14} t="3'" at={0} size={56} color={NEWC} />
				</g>
				<g transform={`translate(0,${(1 - asm) * 60})`} opacity={asm}>
					<Ladder tw={110} th={80} x={WX} y={YB} n={4} pitch={WP} dirTop={-1} top={tilesOf('ATCG')} bot={tilesOf('TAGC')} topColor={NEWC} botColor={ORIG} />
					<EndTag x={wcol(0) - 215} y={YB + 14} t="3'" at={0} size={56} color={NEWC} /><EndTag x={wcol(3) + 215} y={YB + 14} t="5'" at={0} size={56} color={NEWC} />
					<EndTag x={wcol(0) - 215} y={gB.yBot + 14} t="5'" at={0} size={56} /><EndTag x={wcol(3) + 215} y={gB.yBot + 14} t="3'" at={0} size={56} />
				</g>
				{/* the molecule we began with, as a ghost, and ticks across the three */}
				<g opacity={ghostP}>
					<Ladder x={1700} y={330} n={4} pitch={62} tw={46} th={34} so={12} gap={22} dirTop={-1} top={tilesOf('ATCG')} bot={tilesOf('TAGC')} />
					<text x={1790} y={480} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>we began with</text>
				</g>
				<Tick x={1545} y={YA + 128} at={c.both + 18} s={1.2} /><Tick x={1545} y={YB + 128} at={c.both + 30} s={1.2} /><Tick x={1790} y={540} at={c.both + 40} s={0.9} />
				{/* same bases as the original partner of its template */}
				<g opacity={eqP}>
					<path d="M1450,407 C1530,407 1530,767 1450,767" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeDasharray="14 12" strokeLinecap="round" />
				<text x={1534} y={602} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 74}} fill={AMBER_INK}>=</text>
					<path d="M455,281 C395,281 395,641 455,641" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeDasharray="14 12" strokeLinecap="round" />
					<text x={372} y={526} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62}} fill={AMBER_INK}>=</text>
				</g>
			</Overlay>
			<Hand at={c.same} out={c.rebuilds - 10} x={700} y={864} size={40} color={INK_SOFT}>new strand = the original partner of its template</Hand>
			<Enter at={c.rebuilds} style={{position: 'absolute', left: 700, top: 862}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: AMBER_INK}}>each template rebuilds its missing partner</span></Enter>
			<Enter at={c.kept - 6} style={{position: 'absolute', left: 1560, top: 862}}>
				<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: NEWC, border: `4px solid ${NEWC}`, borderRadius: 24, padding: '2px 26px 8px', background: '#fffdf8'}}>information kept</span>
			</Enter>
			<StrandKey at={0} y={900} />
		</>
	);
};
