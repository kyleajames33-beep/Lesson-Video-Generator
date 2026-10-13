import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, bondN, EndTag, Enter, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, HBonds, INK, INK_SOFT, ladderGeom, Ladder, NEUT, NEWC, Overlay,
	prog, pulse, S, Scribble, Tick, tilesOf, TileSpec, vis, Tile,
} from './shared';

// ---------- 13. Effects and inheritance ----------
const LW = {tw: 80, th: 60, so: 22, gap: 40, pitch: 170};
const TEND = 'ACTG';
type LKind = 'changed' | 'normal';
/** A four-pair ladder, local origin at its top-left ribbon. */
const KindLadder: React.FC<{kind: LKind; x?: number; y?: number; o?: number}> = ({kind, x = 0, y = 0, o = 1}) => {
	const top = kind === 'changed' ? 'ACCG' : 'ACTG';
	const bot = kind === 'changed' ? 'TGGC' : 'TGAC';
	const t = tilesOf(top, undefined, i => (kind === 'changed' && i === 2 ? {tone: 'amber' as const} : {}));
	const b = tilesOf(bot, undefined, i => (kind === 'changed' && i === 2 ? {tone: 'amber' as const} : {}));
	return <Ladder x={x} y={y} n={4} pitch={LW.pitch} tw={LW.tw} th={LW.th} so={LW.so} gap={LW.gap} top={t} bot={b} topColor={kind === 'changed' ? NEWC : NEUT} botColor={kind === 'changed' ? NEUT : NEWC} o={o} />;
};
const LCEN = [LW.pitch * 1.5, (2 * LW.so + 2 * LW.th + LW.gap) / 2];
const Mini: React.FC<{kind: LKind; cx: number; cy: number; s: number; o?: number}> = ({kind, cx, cy, s, o = 1}) => (
	<g transform={`translate(${cx - s * LCEN[0]},${cy - s * LCEN[1]}) scale(${s})`} opacity={o}><KindLadder kind={kind} /></g>
);
const Blob: React.FC<{x: number; y: number; rx: number; ry: number; o?: number; fill?: string; stroke?: string; sw?: number}> = ({x, y, rx, ry, o = 1, fill = '#e6efd0', stroke = '#6a8a2a', sw = 5}) => (
	<ellipse cx={x} cy={y} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth={sw} opacity={o} />
);
const Person: React.FC<{x: number; y: number; s?: number; o?: number; child?: boolean; color?: string}> = ({x, y, s = 1, o = 1, child, color = '#c58a62'}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<circle cx={0} cy={child ? -34 : -52} r={child ? 26 : 22} fill="#f2cfb2" stroke={color} strokeWidth={4} />
		<path d={child ? 'M-22,36 L-18,-6 Q0,-12 18,-6 L22,36Z' : 'M-30,40 L-24,-26 Q0,-34 24,-26 L30,40Z'} fill={color} stroke="#7d5133" strokeWidth={4} strokeLinejoin="round" />
		{child ? <circle cx={-9} cy={-36} r={3} fill={INK} /> : null}
		{child ? <circle cx={9} cy={-36} r={3} fill={INK} /> : null}
		{child ? <path d="M-8,-26 Q0,-20 8,-26" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" /> : null}
	</g>
);
/** A drawn-on arrow line (solid, or dotted when dash is given). */
const Arr: React.FC<{d: string; at: number; color?: string; dash?: string}> = ({d, at, color = INK_SOFT, dash}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 20);
	if (p <= 0) return null;
	if (dash) return <path d={d} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeDasharray={dash} style={{clipPath: `inset(-20px ${100 - p * 100}% -20px 0)`}} />;
	return <path d={d} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />;
};

export const SceneErrorsEffects: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('errors-effects'), {
		none: 'no effect', harm: 'harm the cell', useful: 'are useful', again: 'copied again', own: 'its own partner', copy: 'one new copy has a changed base pair', normal: 'the other is normal',
		every: 'every cell that divides from it', bact: 'In a bacterium', splits: 'splits in two', onlyone: 'only one of the two new cells', person: 'In a person', body: "body cell's mutation", gam: 'a cell that makes gametes', child: 'reaches children',
	});
	const gL = ladderGeom({x: 0, y: 0, pitch: LW.pitch, n: 4, th: LW.th, so: LW.so, gap: LW.gap});
	const H = gL.yBot;
	const openP = prog(f, c.again + 8, 40);
	const slideP = prog(f, c.copy - 4, 44);
	const baseUy = 320, baseLy = 320 + 280 * openP;
	const ux = 420 + (240 - 420) * slideP, uy = baseUy + (360 - baseUy) * slideP;
	const lx = 420 + (1050 - 420) * slideP, ly = baseLy + (360 - baseLy) * slideP;
	const upperO = 1 - prog(f, c.every - 6, 14);
	const goP = prog(f, c.every, 36);
	const cellC: [number, number] = [360, 430];
	const landN = (i: number) => c.own + i * 9;
	const newBot: TileSpec[] = 'TGAC'.split('').map((l, i) => { const p = prog(f, landN(i), 14); return {l, o: p, dy: (1 - p) * 90, glow: pulse(f, landN(i) + 6, 22)}; });
	const newTop: TileSpec[] = 'ACCG'.split('').map((l, i) => { const p = prog(f, landN(i) + 5, 14); return {l, o: p, dy: -(1 - p) * 90, tone: i === 2 ? ('amber' as const) : undefined, glow: pulse(f, landN(i) + 11, 22)}; });
	const oldTop: TileSpec[] = TEND.split('').map(l => ({l}));
	const oldBot: TileSpec[] = 'TGGC'.split('').map((l, i) => ({l, tone: i === 2 ? ('amber' as const) : undefined}));
	const chip = (t: string, at: number, y: number) => <GreyTag at={at - 4} out={c.again - 8} x={1290} y={y} text={t} size={46} />;
	const stage1 = 1 - prog(f, c.again + 8, 2);
	const stage2 = vis(f, c.again + 8, c.every + 36, 2);
	const cellsO = vis(f, c.every + 20, c.bact - 12);
	const bactO = vis(f, c.bact - 4, c.person - 22);
	const persO = vis(f, c.person - 4);
	const split = prog(f, c.splits, 30);
	const BC: [number, number] = [920, 440];
	return (
		<>
			<Heading items={[[2, 'What happens to a mutation?']]} size={64} />
			{chip('no effect', c.none, 300)}
			{chip('harmful', c.harm, 380)}
			{chip('useful', c.useful, 460)}
			<Overlay>
				{/* stage 1: the surviving mismatch */}
				<g opacity={stage1}>
					<Ladder x={420} y={320} n={4} pitch={LW.pitch} tw={LW.tw} th={LW.th} so={LW.so} gap={LW.gap} top={oldTop} bot={'TGGC'.split('').map((l, i) => ({l, tone: i === 2 ? ('grey' as const) : undefined}))} bond={i => (i === 2 ? 0 : 1)} topColor={NEUT} botColor={NEUT} />
					<text x={420 + 2 * LW.pitch} y={320 + H + 80} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill="#5d646b">mismatch that survived</text>
				</g>
				{/* stage 2: copied again */}
				<g opacity={stage2}>
					<g opacity={upperO}>
						{oldTop.map((t, i) => <HBonds key={'o' + i} x={420 + i * LW.pitch} y1={baseUy + 22 + 60} y2={baseUy + H - 22 - 60 + 280 * openP} n={bondN(t.l)} p={i === 2 ? 0 : 1} o={(1 - Math.min(1, openP * 2.2)) * (1 - slideP)} w={LW.tw} />)}
						<Tick x={ux + 3.6 * LW.pitch} y={uy + H / 2} at={c.normal + 6} s={1} />
						<Ladder x={ux} y={uy} n={4} pitch={LW.pitch} tw={LW.tw} th={LW.th} so={LW.so} gap={LW.gap} top={oldTop} bot={newBot} topColor={NEUT} botColor={NEWC} botUnit={i => prog(f, landN(i) + 2, 10)} botLink={i => Math.min(prog(f, landN(i) + 2, 10), prog(f, landN(i - 1) + 2, 10))} bond={i => prog(f, landN(i) + 8, 12)} />
					</g>
					<g opacity={1 - goP}>
						<Ladder x={lx} y={ly} n={4} pitch={LW.pitch} tw={LW.tw} th={LW.th} so={LW.so} gap={LW.gap} top={newTop} bot={oldBot} topColor={NEWC} botColor={NEUT} topUnit={i => prog(f, landN(i) + 7, 10)} topLink={i => Math.min(prog(f, landN(i) + 7, 10), prog(f, landN(i + 1) + 7, 10))} bond={i => prog(f, landN(i) + 13, 12)} />
						<Scribble cx={lx + 2 * LW.pitch} cy={ly + H / 2} rx={70} ry={100} at={c.copy + 38} color={AMBER_INK} seed={4} />
					</g>
				</g>
				{/* stage 3: into a cell and on to every later cell */}
				<g opacity={cellsO}>
					<Blob x={cellC[0]} y={cellC[1]} rx={210} ry={150} />
					<Mini kind="changed" cx={cellC[0]} cy={cellC[1]} s={0.5} />
					{[330, 530].map((y, k) => (
						<g key={k}>
							<Arr d={`M580,${cellC[1] + (k ? 40 : -40)} C660,${y} 700,${y} 740,${y}`} at={c.every + 24 + k * 6} color={AMBER_INK} />
							<Blob x={880} y={y} rx={140} ry={100} fill="#eaf1d6" />
							<Mini kind="changed" cx={880} cy={y} s={0.34} />
							{[0, 1, 2].map(j => (
								<g key={j} opacity={prog(f, c.every + 70 + j * 10 + k * 5, 10)}>
									<Arr d={`M${1030 + j * 270},${y} L${1100 + j * 270},${y}`} at={c.every + 70 + j * 10 + k * 5} color={AMBER_INK} />
									<circle cx={1190 + j * 270} cy={y} r={44} fill="#eaf1d6" stroke="#6a8a2a" strokeWidth={5} />
									<circle cx={1190 + j * 270} cy={y} r={14} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
								</g>
							))}
						</g>
					))}
				</g>
				{/* stage 4: a bacterium splits */}
				<g opacity={bactO}>
					<rect x={BC[0] - split * 330 - (640 - split * 330) / 2} y={BC[1] - 105} width={640 - split * 330} height={210} rx={105} fill="#e1ecf3" stroke="#3b6fa8" strokeWidth={5} />
					<rect x={BC[0] + split * 330 - (split * 310) / 2} y={BC[1] - 105} width={Math.max(1, split * 310)} height={210} rx={105} fill="#e1ecf3" stroke="#3b6fa8" strokeWidth={5} opacity={split} />
					<Mini kind="changed" cx={BC[0] - split * 330 - 170 * (1 - split)} cy={BC[1]} s={0.34} />
					<Mini kind="normal" cx={BC[0] + split * 330 + 170 * (1 - split)} cy={BC[1]} s={0.34} />
				</g>
				{/* stage 5: a person */}
				<g opacity={persO}>
					<g opacity={1 - 0.62 * prog(f, c.gam, 16)}>
						<Blob x={300} y={500} rx={190} ry={130} fill="#f4dcd0" stroke="#c58a62" />
						<Mini kind="changed" cx={300} cy={500} s={0.46} />
						{[420, 580].map((y, k) => (
							<g key={k} opacity={prog(f, c.body + 44 + k * 8, 12)}>
								<Arr d={`M500,${500 + (k ? 30 : -30)} C560,${y} 600,${y} 650,${y}`} at={c.body + 44 + k * 8} color={INK_SOFT} dash="2 14" />
								<Blob x={790} y={y} rx={120} ry={84} fill="#f4dcd0" stroke="#c58a62" />
								<Mini kind="changed" cx={790} cy={y} s={0.3} />
							</g>
						))}
					</g>
					<g opacity={prog(f, c.child - 4, 14)}>
						<Person x={1720} y={510} s={1.6} child o={0.3 + 0.7 * prog(f, c.gam + 28, 12)} />
						<text x={1720} y={440} textAnchor="middle" opacity={1 - prog(f, c.gam + 28, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={INK_SOFT}>children?</text>
					</g>
					<g opacity={prog(f, c.gam - 4, 14)}>
						<Blob x={1230} y={500} rx={140} ry={110} fill="#e8dcf2" stroke="#7b4fb3" />
						<Mini kind="changed" cx={1230} cy={500} s={0.34} />
						<Arr d="M1380,500 L1450,500" at={c.gam + 8} color={AMBER_INK} />
						<circle cx={1500} cy={500} r={40} fill="#e8dcf2" stroke="#7b4fb3" strokeWidth={5} opacity={prog(f, c.gam + 16, 10)} />
						<circle cx={1500} cy={500} r={12} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, c.gam + 16, 10)} />
						<Arr d="M1550,500 L1610,500" at={c.gam + 20} color={AMBER_INK} />
					</g>
				</g>
			</Overlay>
			<Hand at={c.normal + 4} out={c.every - 8} x={ux - 100} y={uy + H + 60} size={46} w={600} color={NEWC}>normal copy</Hand>
			<Hand at={c.copy + 30} out={c.every - 8} x={lx - 60} y={ly + H + 60} size={46} w={700} color={AMBER_INK}>changed base pair</Hand>
			<Hand at={c.copy + 58} out={c.every - 8} x={lx - 60} y={ly + H + 118} size={48} w={760} color={AMBER_INK}>mutation: a change in the base order</Hand>
			<Hand at={c.every + 50} out={c.bact - 14} x={420} y={720} size={52} w={1200} color={AMBER_INK}>every cell that divides from it</Hand>
			<Hand at={c.bact + 6} out={c.splits + 24} x={BC[0] - 320} y={BC[1] + 200} size={44} w={700} color={INK_SOFT}>a bacterium holds both copies</Hand>
			<Hand at={c.onlyone} out={c.person - 22} x={BC[0] - 560} y={BC[1] + 200} size={48} w={1100} color={AMBER_INK}>passes to one new cell, which starts a new line of cells</Hand>
			<Hand at={c.body + 50} x={140} y={680} size={44} w={900} color={INK_SOFT}>a body cell: passes only to the cells made from it</Hand>
			<GreyTag at={c.child} x={980} y={680} text="sexual reproduction: only through gametes" size={36} />
			<Hand at={c.gam + 36} x={1560} y={620} size={46} w={330} color={AMBER_INK}>reaches offspring</Hand>
		</>
	);
};

// ---------- 14. Attempt ----------
const FR = {y: 250, h: 690, w: 840, x: [96, 984]};
const Frame: React.FC<{i: number; at: number; title: string; badge: string}> = ({i, at, title, badge}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: FR.x[i], top: FR.y, width: FR.w, height: FR.h, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '14px 22px 0'}}>
				<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{badge}</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{title}</div>
			</div>
		</div>
	);
};
const Demand: React.FC<{x: number; y: number; w: number; at: number; children: React.ReactNode}> = ({x, y, w, at, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{borderLeft: `8px solid ${AMBER}`, paddingLeft: 18, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 29, lineHeight: 1.22, color: AMBER_INK}}>{children}</div>
	</Enter>
);
const Note: React.FC<{x: number; y: number; w: number; at: number; size?: number; children: React.ReactNode; color?: string}> = ({x, y, w, at, size = 30, children, color = INK}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color, lineHeight: 1.22}}>{children}</div>
	</Enter>
);
const Bead: React.FC<{x: number; y: number; r?: number; heavy: boolean; o?: number}> = ({x, y, r = 13, heavy, o = 1}) => (
	<g opacity={o}><circle cx={x} cy={y} r={r} fill={heavy ? '#2b2724' : '#fffdf8'} stroke={INK} strokeWidth={3.5} /></g>
);
const MolOutline: React.FC<{x: number; y: number; w?: number; h?: number; at: number}> = ({x, y, w = 150, h = 130, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	return (
		<g opacity={p}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" />
			<line x1={x + 18} y1={y + 32} x2={x + w - 18} y2={y + 32} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" opacity={0.5} />
			<line x1={x + 18} y1={y + h - 32} x2={x + w - 18} y2={y + h - 32} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" opacity={0.5} />
		</g>
	);
};
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		two: 'Two questions', one: 'One', stem: 'this DNA template strand', t1: 'T G', t2: 'G C', t3: 'C C', t4: 'C A', t5: 'A T', t6: 'T Write', write: 'Write the new strand', base: 'base for base', label: 'label both ends',
		q2: 'both strands of one DNA molecule', heavy: 'heavy tag', copied: 'It is copied once', more: 'copied once more', light: 'always built from light', four: 'each of the four final molecules', pause: 'Pause here to answer',
	});
	const hold = scene.responseHold!;
	const X1 = FR.x[0], X2 = FR.x[1], Y = FR.y;
	const T = 'TGCCAT';
	const tAtr = [c.t1, c.t2, c.t3, c.t4, c.t5, c.t6];
	const tp = 110, tx = (i: number) => X1 + 112 + i * tp;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: two questions" at={c.two} size={76} cps={30} /></div>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, lineHeight: 1}}>Pause here to answer.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1500} y={130} r={44} /></Overlay>
			<Frame i={0} at={c.one - 6} title="Copy a strand" badge="1" />
			<Frame i={1} at={c.q2 - 6} title="Track a heavy tag" badge="2" />
			{/* 1: template written 5' to 3', blank slots beneath */}
			<Note x={X1 + 30} y={Y + 84} w={780} at={c.stem} size={28}>This DNA template strand is written 5&#8242; to 3&#8242; and reads T, G, C, C, A, T.</Note>
			<Overlay>
				<line x1={tx(0) - 46} x2={tx(5) + 46} y1={Y + 190} y2={Y + 190} stroke={NEUT} strokeWidth={9} strokeLinecap="round" opacity={prog(f, c.stem + 14, 12)} />
				{T.split('').map((l, i) => <Tile key={i} x={tx(i)} y={Y + 200} face="down" w={84} h={64} l={l} o={prog(f, tAtr[i], 8)} s={0.8 + 0.2 * prog(f, tAtr[i], 8)} />)}
				<EndTag x={X1 + 38} y={Y + 206} t="5'" at={c.stem + 24} size={56} />
				<EndTag x={X1 + 800} y={Y + 206} t="3'" at={c.stem + 30} size={56} />
				{T.split('').map((_, i) => <rect key={i} x={tx(i) - 42} y={Y + 330} width={84} height={64} rx={12} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" opacity={prog(f, c.write + i * 3, 10)} />)}
				<g opacity={prog(f, c.label, 12)}>
					<rect x={X1 + 10} y={Y + 336} width={56} height={56} rx={10} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 7" />
					<rect x={X1 + 774} y={Y + 336} width={56} height={56} rx={10} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 7" />
				</g>
			</Overlay>
			<Note x={X1 + 30} y={Y + 420} w={780} at={c.write} size={26} color={INK_SOFT}>the new strand goes in the empty slots, with a box at each end for its label</Note>
			<Demand x={X1 + 30} y={Y + 520} w={780} at={c.base}>Write the new strand beneath it, base for base. Label both of its ends.</Demand>
			{/* 2: heavy tag over two rounds of copying */}
			<Note x={X2 + 30} y={Y + 84} w={780} at={c.q2} size={28}>Both strands of one DNA molecule carry a heavy tag. It is copied once, then each new molecule is copied once more.</Note>
			<Overlay>
				<g opacity={prog(f, c.q2 + 14, 14)}>
					<line x1={X2 + 40} x2={X2 + 220} y1={Y + 220} y2={Y + 220} stroke={NEUT} strokeWidth={9} strokeLinecap="round" />
					<line x1={X2 + 40} x2={X2 + 220} y1={Y + 300} y2={Y + 300} stroke={NEUT} strokeWidth={9} strokeLinecap="round" />
					{[0, 1, 2, 3].map(k => <line key={k} x1={X2 + 70 + k * 40} x2={X2 + 70 + k * 40} y1={Y + 224} y2={Y + 296} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="1 8" strokeLinecap="round" />)}
				</g>
				<Bead x={X2 + 40} y={Y + 220} heavy o={prog(f, c.heavy, 10)} />
				<Bead x={X2 + 40} y={Y + 300} heavy o={prog(f, c.heavy + 6, 10)} />
				<g opacity={prog(f, c.heavy + 14, 12)}><Bead x={X2 + 590} y={Y + 270} heavy /><text x={X2 + 614} y={Y + 281} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK}>heavy tag</text></g>
				<g opacity={prog(f, c.light, 12)}><Bead x={X2 + 590} y={Y + 222} heavy={false} /><text x={X2 + 614} y={Y + 233} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK}>light</text></g>
				<g opacity={prog(f, c.copied, 14)}>
					<path d={`M${X2 + 250},${Y + 260} L${X2 + 320},${Y + 260}`} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${X2 + 304},${Y + 244} L${X2 + 324},${Y + 260} L${X2 + 304},${Y + 276}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<text x={X2 + 290} y={Y + 232} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={AMBER_INK}>copy once</text>
				</g>
				<g opacity={prog(f, c.more, 14)}>
					<path d={`M${X2 + 346},${Y + 260} L${X2 + 396},${Y + 260}`} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${X2 + 380},${Y + 244} L${X2 + 400},${Y + 260} L${X2 + 380},${Y + 276}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<text x={X2 + 372} y={Y + 306} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={AMBER_INK}>copy once more</text>
				</g>
				{[0, 1, 2, 3].map(k => <MolOutline key={k} x={X2 + 30 + k * 190} y={Y + 360} w={150} h={120} at={c.more + 12 + k * 4} />)}
				{[0, 1, 2, 3].map(k => <text key={k} x={X2 + 105 + k * 190} y={Y + 510} textAnchor="middle" opacity={prog(f, c.more + 14 + k * 4, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>molecule {k + 1}</text>)}
			</Overlay>
			<Note x={X2 + 30} y={Y + 530} w={780} at={c.light} size={24} color={INK_SOFT}>New strands are built from light nucleotides (hollow bead). No strand is ever broken down.</Note>
			<Demand x={X2 + 30} y={Y + 610} w={780} at={c.four}>For each of the four molecules, say how many strands are heavy and how many are light.</Demand>
		</>
	);
};
