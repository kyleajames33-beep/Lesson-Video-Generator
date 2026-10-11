import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout, Mark, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {
	AL, AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, CLONES, CORAL, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Germ, GREEN, HandText,
	Heading, Helix, INK, INK_SOFT, Label, Overlay, POTS, RED, S, Sun, Underline, prog,
} from './shared';
import {BLUE_SOFT, PAPER_DEEP} from '../../kit';

// ---------- 5. Trade-off ----------
const SPOT = '#7a4a1c';
export const SceneTradeOff: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('trade-off'), {dep: 'It depends', stable: ['stable', 1], everyc: 'every copy', change: ['conditions change', 1], newd: 'new disease', clones: 'group of clones', same: 'same alleles', none: 'none of them', varied: 'varied group', surv: 'helps them survive', survivors: 'survivors', cav: 'Cavendish problem', sameDNA: 'same DNA', tr4: 'TR4', all: 'attack them all', remember: 'way to remember', fast: 'asexual is fast', alike: ['alike', 1], slow: 'sexual is slow', varied2: ['varied', 2], suits: 'Alike suits', helps: 'Varied helps'});
	const t1 = 1 - prog(f, c.cav - 10, 14);
	const t2 = prog(f, c.cav, 16) * (1 - prog(f, c.remember - 8, 14));
	const t3 = prog(f, c.remember, 16);
	const leftDim = 1 - 0.72 * prog(f, c.clones - 6, 16);
	// right board
	const CX = 1060, CW = 640;
	const cloneY = 322;
	const cloneH = artH(ART.cloneRow, CW);
	const SY = 640, SH = artH(ART.seedlings, CW);
	const sx = (i: number) => CX + POTS[i] * CW;
	const spots = (cxp: number, seed: number) => Array.from({length: 7}, (_, k) => ({x: cxp + Math.sin(seed * 7 + k * 2.3) * 40, y: SY + SH * 0.22 + Math.cos(seed * 3 + k * 1.7) * 36 + k * 4}));
	// plantation scene
	const PXA = 310, PYA = 340, PWA = 1300;
	return (
		<>
			<Heading items={[[4, 'Which is better?'], [c.dep, 'It depends on the conditions'], [c.cav, 'The Cavendish problem'], [c.remember, 'A way to remember it']]} />
			{/* T1: stable vs change */}
			<div style={{opacity: t1}}>
				<div style={{opacity: leftDim}}>
					{[0, 1, 2, 3, 4].map(i => <Art key={i} a={ART.prize} x={130 + i * 155} y={360} w={135} style={{opacity: prog(f, c.stable + 20 + i * 6, 14), transform: `translateY(${(1 - prog(f, c.stable + 20 + i * 6, 18)) * 20}px)`}} />)}
				</div>
				<Art a={ART.cloneRow} x={CX} y={cloneY} w={CW} style={{opacity: prog(f, c.clones, 16)}} />
				<Art a={ART.seedlings} x={CX} y={SY} w={CW} style={{opacity: prog(f, c.varied, 16)}} />
			</div>
			<Overlay style={{opacity: t1}}>
				<g opacity={leftDim}>
					<Label x={470} y={290} at={c.stable} text="stable conditions" size={64} color={INK} />
					<Sun x={810} y={262} at={c.stable + 6} />
					{[0, 1, 2, 3, 4].map(i => <Mark key={i} x={130 + i * 155 + 67} y={560} at={c.everyc + i * 8} kind="tick" size={44} />)}
					<Label x={510} y={680} at={c.everyc + 10} text="every copy does well" size={58} color={GREEN} />
				</g>
				<Label x={1380} y={282} at={c.change} text="when conditions change" size={58} color={INK} />
				<Germ x={1790} y={262} at={c.newd} />
				<Label x={1380} y={322} at={c.clones} text="clones: the same alleles" size={40} color={INK_SOFT} />
				{CLONES.map((fx, i) => <Mark key={i} x={CX + fx * CW} y={cloneY + cloneH * 0.35} at={c.none + i * 6} kind="cross" size={50} />)}
				<Label x={CX + CW / 2} y={cloneY + cloneH + 48} at={c.none + 8} text="all affected, or none resist" size={50} color={RED} />
				<Label x={CX + CW / 2} y={SY - 10} at={c.varied} text="a varied group" size={44} color={INK_SOFT} />
				{[0, 2, 4].map(i => (
					<g key={i} opacity={prog(f, c.varied + 24 + i * 5, 14)}>
						{spots(sx(i), i + 1).map((s, k) => <circle key={k} cx={s.x} cy={s.y} r={5 + (k % 3) * 1.6} fill={SPOT} opacity={0.85} />)}
					</g>
				))}
				{[1, 3].map((i, k) => (
					<g key={i}>
						<DrawPath d={scribbleEllipse(sx(i), SY + SH * 0.5, 62, 80, 40 + i)} at={c.surv + k * 12} dur={22} color={AMBER} width={6} />
						<g opacity={prog(f, c.surv + 14 + k * 12, 12)}>
							<circle cx={sx(i)} cy={SY - 22 + 0} r={0} />
						</g>
					</g>
				))}
				<Label x={CX + CW / 2} y={SY + SH + 56} at={c.surv + 10} text="some carry a helpful allele" size={48} color={AMBER_INK} out={c.survivors - 4} />
				<Label x={CX + CW / 2} y={SY + SH + 56} at={c.survivors} text="survivors keep the species going" size={48} color={GREEN} />
			</Overlay>
			{/* helpful allele beads above the survivors */}
			<Overlay style={{opacity: t1}}>
				{[1, 3].map((i, k) => (
					<g key={i} opacity={prog(f, c.surv + 20 + k * 12, 12)}>
						<circle cx={sx(i)} cy={SY - 8} r={0} />
						<circle cx={sx(i) + 0} cy={SY + 6} r={0} />
					</g>
				))}
			</Overlay>
			{/* T2: the plantation */}
			<div style={{opacity: t2}}>
				<Art a={ART.plantation} x={PXA} y={PYA} w={PWA} />
			</div>
			<Overlay style={{opacity: t2}}>
				<Helix x={510} y={206} w={900} h={56} at={c.sameDNA - 6} dur={30} turns={6} />
				<Label x={960} y={318} at={c.sameDNA + 10} text="the same DNA in every plant" size={52} color={BLUE} />
				<Callout from={[PXA + 0.075 * PWA, PYA + 150]} to={[PXA + 40, PYA + 380]} at={c.tr4} text="TR4" sub="can attack one plant" color={RED} />
				<DrawPath d={scribbleEllipse(PXA + PWA / 2, PYA + 235, 690, 215, 77)} at={c.all} dur={36} color={RED} width={7} />
				<Label x={960} y={880} at={c.all + 8} text="attack one, attack them all" size={70} color={RED} />
			</Overlay>
			{/* T3: the memory aid */}
			<div style={{opacity: t3}}>
				<Art a={ART.runner} x={130} y={290} w={300} style={{opacity: prog(f, c.fast, 16)}} />
				<Art a={ART.flower} x={190} y={470} w={180} style={{opacity: prog(f, c.slow, 16)}} />
				<div style={{position: 'absolute', left: 480, top: 310, display: 'flex', gap: 26, alignItems: 'baseline'}}>
					<HandText text="Asexual:" at={c.fast - 6} size={120} cps={14} />
					<HandText text="fast and alike." at={c.fast + 12} size={120} cps={13} color={BLUE} />
				</div>
				<div style={{position: 'absolute', left: 480, top: 470, display: 'flex', gap: 26, alignItems: 'baseline'}}>
					<HandText text="Sexual:" at={c.slow - 6} size={120} cps={14} />
					<HandText text="slow and varied." at={c.slow + 10} size={120} cps={13} color={CORAL} />
				</div>
			</div>
			<Overlay style={{opacity: t3}}>
				<Sun x={300} y={740} at={c.suits} />
				<Germ x={300} y={850} at={c.helps} r={24} />
			</Overlay>
			<div style={{opacity: t3}}>
				<Enter at={c.suits} style={{position: 'absolute', left: 400, top: 708}}><Body size={48} weight={600}><span style={{color: BLUE}}>Alike</span> suits stable conditions.</Body></Enter>
				<Enter at={c.helps} style={{position: 'absolute', left: 400, top: 818}}><Body size={48} weight={600}><span style={{color: CORAL}}>Varied</span> helps when conditions change.</Body></Enter>
			</div>
		</>
	);
};

// ---------- 6. Worked compare ----------
const COLS = [380, 650, 650];
const TX = 120;
const colX = (i: number) => TX + COLS.slice(0, i).reduce((a, b) => a + b, 0) + i * 0;
const ROWS = [312, 420, 528, 636, 744];
const RH = 96;
const Cell: React.FC<{x: number; y: number; w: number; at: number; children: React.ReactNode; head?: boolean; glow?: boolean; tint?: string}> = ({x, y, w, at, children, head, glow, tint}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: x + 4, top: y, width: w - 8, height: head ? 64 : RH, opacity: p, transform: `translateY(${(1 - p) * 12}px)`, boxSizing: 'border-box', borderRadius: 16, padding: '0 22px', display: 'flex', alignItems: 'center', background: tint ?? (head ? PAPER_DEEP : '#fffdf8'), border: glow ? `4px solid ${AMBER}` : '1.5px solid rgba(60,45,20,0.12)', boxShadow: glow ? '0 0 0 8px rgba(240,168,48,0.18)' : '0 6px 14px rgba(60,45,20,0.06)'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: head ? 800 : 600, fontSize: head ? 32 : 31, color: INK, lineHeight: 1.18, letterSpacing: head ? 1 : 0}}>{children}</div>
		</div>
	);
};

const ReadOn: React.FC<{lines: string[]; from: number; to: number; size?: number}> = ({lines, from, to, size = 48}) => {
	const f = useCurrentFrame();
	const total = lines.join('').length;
	const shown = Math.floor(total * prog(f, from, to - from, (x: number) => x));
	let used = 0;
	return (
		<>
			{lines.map((ln, i) => {
				const n = Math.max(0, Math.min(ln.length, shown - used));
				used += ln.length;
				return (
					<div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: INK, lineHeight: 1.45, whiteSpace: 'pre'}}>
						<span>{ln.slice(0, n)}</span><span style={{opacity: 0}}>{ln.slice(n)}</span>
					</div>
				);
			})}
		</>
	);
};

export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-compare'), {compare: 'compare', simil: 'similarities and differences', crit: 'criteria', variation: 'Start with variation', clones: 'clones', sexo: 'sexual offspring', speed: 'Then speed', copying: 'copying', joining: 'joining gametes', partners: 'partners and energy', nomate: 'no mate', whileS: ['while sexual', 2], similarity: 'one similarity', both: 'both pass', sentence: 'becomes a sentence', asexp: 'Asexual reproduction produces', whereas: 'whereas', end: ['combinations of alleles', 2], finish: 'Finish by linking', stableF: 'stable conditions favour', changing: 'changing conditions'});
	const lift = prog(f, c.sentence, 18) * (1 - prog(f, c.finish - 8, 16));
	const dimOthers = 1 - lift;
	const cardIn = prog(f, c.sentence + 24, 18) * (1 - prog(f, c.finish - 4, 14));
	const rowOp = (i: number) => (i === 0 ? 1 : dimOthers);
	const linkGlow = f >= c.finish + 20;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 82}}><HandText text="Compare sexual and asexual reproduction" at={4} size={68} cps={34} /></div>
			<Overlay>
				<Underline x1={98} x2={322} y={158} at={c.compare} />
				<Label x={420} y={206} at={c.simil} text="compare = similarities AND differences" size={44} color={AMBER_INK} anchor="start" />
			</Overlay>
			{/* header */}
			{['criteria', 'Asexual', 'Sexual'].map((t, i) => <Cell key={t} x={colX(i)} y={240} w={COLS[i]} at={c.crit - 10 + i * 8} head>{t}</Cell>)}
			{/* rows */}
			<div style={{opacity: rowOp(0), transform: `translateY(${-lift * 0}px) scale(${1 + 0.02 * lift})`, transformOrigin: '50% 50%'}}>
				<Cell x={colX(0)} y={ROWS[0]} w={COLS[0]} at={c.variation} tint={BLUE_SOFT} glow={lift > 0.5}><b>Variation</b></Cell>
				<Cell x={colX(1)} y={ROWS[0]} w={COLS[1]} at={c.clones} glow={lift > 0.5}>clones: almost the same DNA</Cell>
				<Cell x={colX(2)} y={ROWS[0]} w={COLS[2]} at={c.sexo} glow={lift > 0.5}>new combinations of alleles</Cell>
			</div>
			<div style={{opacity: rowOp(1)}}>
				<Cell x={colX(0)} y={ROWS[1]} w={COLS[0]} at={c.speed} tint={BLUE_SOFT}><b>Speed</b></Cell>
				<Cell x={colX(1)} y={ROWS[1]} w={COLS[1]} at={c.copying}>builds a population quickly</Cell>
				<Cell x={colX(2)} y={ROWS[1]} w={COLS[2]} at={c.joining}>slower: gametes must join</Cell>
			</div>
			<div style={{opacity: rowOp(2)}}>
				<Cell x={colX(0)} y={ROWS[2]} w={COLS[0]} at={c.partners} tint={BLUE_SOFT}><b>Partners and energy</b></Cell>
				<Cell x={colX(1)} y={ROWS[2]} w={COLS[1]} at={c.nomate}>no mate needed</Cell>
				<Cell x={colX(2)} y={ROWS[2]} w={COLS[2]} at={c.whileS}>usually needs a mate, costs more energy</Cell>
			</div>
			<div style={{opacity: rowOp(3)}}>
				<Cell x={colX(0)} y={ROWS[3]} w={COLS[0]} at={c.similarity} tint="#e3f1e8"><b>Similarity</b></Cell>
				<Cell x={colX(1)} y={ROWS[3]} w={COLS[1] + COLS[2]} at={c.both} tint="#f1f8f3">both pass DNA to the next generation, and both can be changed by mutation</Cell>
			</div>
			<div style={{opacity: rowOp(4)}}>
				<Cell x={colX(0)} y={ROWS[4]} w={COLS[0]} at={c.finish + 10} tint={BLUE_SOFT} glow={linkGlow}><b>Link to conditions</b></Cell>
				<Cell x={colX(1)} y={ROWS[4]} w={COLS[1]} at={c.stableF} glow={linkGlow}>stable conditions favour asexual</Cell>
				<Cell x={colX(2)} y={ROWS[4]} w={COLS[2]} at={c.changing} glow={linkGlow}>changing conditions favour sexual</Cell>
			</div>
			{/* the model sentence */}
			<div style={{position: 'absolute', left: 160, top: 440, width: 1600, height: 270, opacity: cardIn, transform: `translateY(${(1 - cardIn) * -60}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 24px 60px rgba(60,45,20,0.16)', border: `3px solid ${AMBER}`, boxSizing: 'border-box', padding: '34px 48px'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK, marginBottom: 6}}>one row becomes one sentence</div>
				<ReadOn lines={['Asexual reproduction produces offspring with almost identical DNA,', 'whereas sexual reproduction produces new combinations of alleles.']} from={c.asexp} to={c.end + 30} size={46} />
				<svg width={220} height={90} style={{position: 'absolute', left: 28, top: 154, overflow: 'visible'}}>
					<DrawPath d={scribbleEllipse(124, 52, 110, 34, 5)} at={c.whereas + 6} dur={22} color={AMBER} width={6} />
				</svg>
			</div>
		</>
	);
};
