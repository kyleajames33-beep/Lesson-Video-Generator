import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout, Mark, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Arrow, Art, artH, BLUE, Body, Card, Chip, CORAL, DrawPath, Enter, FONT_HAND, GREEN, HandText, Heading, Helix,
	INK, INK_SOFT, Label, Overlay, RED, S, prog,
} from './shared';

// ---------- 1. Hook ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {cav: 'Cavendish', clone: 'clone', same: 'same DNA', grow: 'just the way growers', tr4: 'TR4', twenty: 'twenty countries', why: 'Why would'});
	const m = prog(f, c.clone, 30);
	const rowOut = 1 - prog(f, c.tr4 - 8, 16);
	const bx = interpolate(m, [0, 1], [640, 150]), by = interpolate(m, [0, 1], [270, 430]), bw = interpolate(m, [0, 1], [640, 290]);
	const xi = (i: number) => 150 + i * 340;
	const plantIn = prog(f, c.tr4, 22);
	const PX = 210, PY = 400, PW = 1500;
	const count = Math.round(20 * prog(f, c.twenty, 34));
	return (
		<>
			<Heading items={[[6, 'The banana in your fruit bowl'], [c.tr4, 'A fungus is spreading'], [c.why, 'Why is one shared set of DNA risky?']]} />
			{/* the bunch and its clones */}
			<div style={{opacity: rowOut * prog(f, 4, 16)}}>
				<Art a={ART.bunch} x={bx} y={by} w={bw} style={{transform: `translateY(${(1 - prog(f, 4, 20)) * 30}px)`}} />
				{[1, 2, 3, 4].map(i => {
					const q = prog(f, c.clone + 8 + i * 7, 24);
					return <Art key={i} a={ART.bunch} x={interpolate(q, [0, 1], [150, xi(i)])} y={430} w={290} style={{opacity: q}} />;
				})}
			</div>
			<Overlay>
				<g opacity={(1 - prog(f, c.clone - 6, 10)) * rowOut}>
					<Callout from={[1000, 360]} to={[1200, 300]} at={c.cav} text="Cavendish" sub="the variety shipped worldwide" />
				</g>
				<g opacity={rowOut}>
					<Label x={960} y={392} at={c.clone + 30} text="clones: identical copies" size={64} color={BLUE} out={c.grow} />
					<Label x={960} y={392} at={c.grow} text="just what growers want" size={64} color={GREEN} />
					{[0, 1, 2, 3, 4].map(i => <Helix key={i} x={xi(i) + 35} y={706} w={220} h={56} at={c.same + i * 5} dur={26} />)}
					<Label x={960} y={846} at={c.same + 24} text="the same DNA in every plant" size={64} color={BLUE} />
				</g>
				{/* TR4 plantation */}
				<g opacity={plantIn}>
					<Callout from={[PX + 0.075 * PW, PY + 150]} to={[PX + 60, PY - 40]} at={c.tr4 + 4} text="TR4 fungus" sub="wilting and yellowing" color={RED} />
					{[0.075, 0.44, 0.7, 0.905].map((fx, i) => <DrawPath key={i} d={scribbleEllipse(PX + fx * PW, PY + 300, 95, 160, 20 + i)} at={c.tr4 + 30 + i * 10} dur={22} color={AMBER} width={6} />)}
				</g>
			</Overlay>
			<Art a={ART.plantation} x={PX} y={PY} w={PW} style={{opacity: plantIn, transform: `scale(${1 + 0.03 * plantIn})`, transformOrigin: 'center'}} />
			<Card x={1400} y={205} w={420} at={c.twenty}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 120, color: RED, lineHeight: 1}}>{count}+</div>
				<Body size={34} weight={600} color={INK_SOFT}>countries with TR4</Body>
			</Card>
		</>
	);
};

// ---------- 2. Continuity ----------
export const SceneContinuity: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('continuity'), {idea: 'big idea', indiv: 'Every individual', dies: 'dies', repro: 'reproduce', off: 'offspring', dna: 'DNA', those: 'Those offspring', survive: 'survive', repro2: ['reproduce', 2], chain: 'generation after generation', cont: 'species continues'});
	const PW = 240;
	const ph = artH(ART.prize, PW);
	const grey = prog(f, c.dies, 24);
	const pos = {p1: [130, 260], p2: [520, 260], p3: [910, 260], p3b: [910, 500], p4: [1300, 260]} as const;
	const plant = (key: keyof typeof pos, at: number, extra?: React.CSSProperties) => (
		<Art a={ART.prize} x={pos[key][0]} y={pos[key][1]} w={PW} style={{opacity: prog(f, at, 16), transform: `translateY(${(1 - prog(f, at, 20)) * 24}px)`, ...extra}} />
	);
	const failP = prog(f, c.survive + 4, 24);
	return (
		<>
			<Heading items={[[6, 'The big idea: continuity']]} />
			{plant('p1', c.indiv - 20, {filter: `grayscale(${grey * 0.9})`, opacity: prog(f, c.indiv - 20, 16) * (1 - grey * 0.4)})}
			{plant('p2', c.repro)}
			{plant('p3', c.those)}
			{plant('p3b', c.those, {opacity: prog(f, c.those, 16) * (1 - failP * 0.65), filter: `grayscale(${failP})`})}
			{plant('p4', c.repro2)}
			<Overlay>
				<Label x={pos.p1[0] + PW / 2} y={240} at={c.indiv - 10} text="parent" size={48} color={INK_SOFT} />
				<Label x={pos.p2[0] + PW / 2} y={240} at={c.off} text="offspring" size={48} color={INK_SOFT} />
				<Label x={pos.p3[0] + PW / 2} y={240} at={c.those + 6} text="offspring" size={48} color={INK_SOFT} />
				<Label x={pos.p4[0] + PW / 2} y={240} at={c.repro2 + 6} text="offspring" size={48} color={INK_SOFT} />
				<Label x={pos.p1[0] + PW / 2} y={ph + 300} at={c.dies} text="every individual dies" size={44} color={INK_SOFT} />
				{/* arrows with DNA riding along */}
				<Arrow x1={385} y1={400} x2={510} y2={400} at={c.repro} color={BLUE} />
				<Helix x={395} y={328} w={105} h={44} at={c.dna} dur={20} turns={2} />
				<Arrow x1={775} y1={400} x2={900} y2={400} at={c.those} color={BLUE} />
				<Helix x={785} y={328} w={105} h={44} at={c.those + 10} dur={20} turns={2} />
				<Arrow x1={650} y1={510} x2={905} y2={640} at={c.those + 6} color={INK_SOFT} dash="10 10" />
				<Arrow x1={1165} y1={400} x2={1290} y2={400} at={c.repro2} color={BLUE} />
				<Helix x={1175} y={328} w={105} h={44} at={c.repro2 + 10} dur={20} turns={2} />
				{/* survive / did not survive */}
				<Mark x={pos.p3[0] + PW + 10} y={ph + 270} at={c.survive + 6} kind="tick" size={44} />
				<g opacity={prog(f, c.survive, 12)}>
					<Mark x={pos.p3b[0] + PW / 2} y={pos.p3b[1] + ph / 2} at={c.survive + 8} kind="cross" size={90} />
				</g>
				<Label x={pos.p3b[0] + PW + 30} y={pos.p3b[1] + ph / 2 + 12} at={c.survive + 12} text="does not survive" size={46} color={RED} anchor="start" />
				
				{/* the chain keeps going */}
				<Arrow x1={1550} y1={400} x2={1800} y2={400} at={c.chain} color={BLUE} dash="4 16" dur={30} />
				<Label x={1690} y={320} at={c.chain} text="generation" size={44} color={INK} />
				<Label x={1690} y={364} at={c.chain + 6} text="after generation" size={44} color={INK} />
			</Overlay>
			<Chip x={1500} y={500} at={c.cont} text="species continues" size={42} color={GREEN} />
			{/* the rule, built piece by piece */}
			<div style={{position: 'absolute', left: 0, right: 0, top: 800, display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 22}}>
				<Enter at={c.idea}><HandText text="continuity =" at={c.idea} size={64} /></Enter>
				<Enter at={c.dna}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: BLUE}}>DNA passed on</span></Enter>
				<Enter at={c.survive}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK}}>+</span></Enter>
				<Enter at={c.survive + 6}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: GREEN}}>offspring that survive to reproduce</span></Enter>
			</div>
		</>
	);
};

// ---------- 3. Asexual ----------
const PX = (i: number) => 96 + i * 594;
const PY = 250;
const PH = 400;
const PanelCard: React.FC<{i: number; at: number; children?: React.ReactNode}> = ({i, at}) => (
	<Card x={PX(i)} y={PY} w={540} h={PH} at={at} pad="0">{null}</Card>
);

export const SceneAsexual: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('asexual'), {first: 'asexual', one: 'One parent', cells: 'reproductive cells joining', strawb: 'strawberry plant', runner: 'runner', newp: 'new plant', bact: 'bacterium', splits: 'splits', yeast: 'yeast cell', bud: 'bud', away: 'breaks away', copy: 'a copy', parent: "parent's", clone: 'a clone', fast: "It's fast", nop: 'no partner', field: 'fill a field', mut: 'mutations', differ: 'clones can differ'});
	// panel 1: runner
	const reveal = 0.5 + 0.5 * prog(f, c.runner - 6, 70);
	// panels 2 and 3: painted three-stage sequences, each stage fading over the one before
	const st = (start: number, dur: number) => prog(f, start, dur);
	const fis = [1, st(c.splits - 4, 36), st(c.splits + 44, 36)];
	const bud = [1, st(c.bud - 4, 22), st(c.away - 6, 30)];
	const fisW = 470;
	const budH = 230, budW = (budH / artH(ART.budding1, 100)) * 100;
	return (
		<>
			<Heading items={[[6, 'Two ways to make offspring'], [c.first, 'Asexual reproduction']]} />
			<div style={{position: 'absolute', left: 940, top: 124, whiteSpace: 'nowrap', display: 'flex', alignItems: 'baseline'}}>
				<Enter at={c.one}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>one parent</span></Enter>
				<Enter at={c.cells} style={{display: 'inline-block', marginLeft: 20}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>+ no cells joining</span></Enter>
			</div>
			<PanelCard i={0} at={c.strawb - 6} />
			<PanelCard i={1} at={c.bact - 6} />
			<PanelCard i={2} at={c.yeast - 6} />
			<Enter at={c.strawb} style={{position: 'absolute', left: PX(0) + 30, top: PY + 130}}>
				<div style={{width: 480, height: artH(ART.runner, 480), clipPath: `inset(0 ${100 - reveal * 100}% 0 0)`}}>
					<Art a={ART.runner} x={0} y={0} w={480} />
				</div>
			</Enter>
			{(['fission1', 'fission2', 'fission3'] as const).map((k, i) => (
				<Art key={k} a={ART[k]} x={PX(1) + 35} y={PY + 175} w={fisW} style={{opacity: prog(f, c.bact, 14) * fis[i] * (i < 2 ? 1 - prog(f, (i ? c.splits + 44 : c.splits - 4) + 18, 18) : 1)}} />
			))}
			{(['budding1', 'budding2', 'budding3'] as const).map((k, i) => (
				<Art key={k} a={ART[k]} x={PX(2) + 60} y={PY + 150} w={budW} style={{opacity: prog(f, c.yeast, 14) * bud[i] * (i < 2 ? 1 - prog(f, (i ? c.away - 6 : c.bud - 4) + 12, 14) : 1)}} />
			))}
			<Overlay>
				<Label x={PX(0) + 270} y={PY + 76} at={c.strawb} text="Runners" size={62} color={BLUE} />
				<Label x={PX(1) + 270} y={PY + 76} at={c.bact} text="Binary fission" size={62} color={BLUE} />
				<Label x={PX(1) + 270} y={PY + 124} at={c.splits} text="one cell splits in two" size={38} color={INK_SOFT} />
				<Label x={PX(2) + 270} y={PY + 76} at={c.yeast} text="Budding" size={62} color={BLUE} />
				<Label x={PX(2) + 270} y={PY + 124} at={c.bud} text="a bud grows, then breaks away" size={38} color={INK_SOFT} />
				<DrawPath d={scribbleEllipse(PX(0) + 424, PY + 215, 72, 62, 8)} at={c.newp} dur={22} color={AMBER} width={6} />
				<Label x={PX(0) + 424} y={PY + 132} at={c.newp + 12} text="new plant" size={44} color={AMBER_INK} />
				<Label x={PX(1) + 270} y={PY + 362} at={c.splits + 70} text="two identical cells" size={44} color={AMBER_INK} />
				<Label x={PX(2) + 222} y={PY + 300} at={c.away + 10} text="a new cell" size={44} color={AMBER_INK} anchor="start" />
				{/* copy of the parent's DNA */}
				<Label x={300} y={820} at={c.parent} text="parent's DNA" size={46} color={BLUE} />
				<Helix x={150} y={690} w={300} h={70} at={c.parent - 10} dur={26} />
				<Arrow x1={480} y1={725} x2={600} y2={725} at={c.copy} color={INK_SOFT} />
				<Label x={540} y={690} at={c.copy + 8} text="copy" size={46} color={INK} />
				<Helix x={620} y={690} w={300} h={70} at={c.copy + 14} dur={26} mark={3} markAt={c.mut} />
				<Label x={770} y={820} at={c.copy + 30} text="offspring's DNA" size={46} color={BLUE} />
				<Label x={1090} y={740} at={c.clone} text="= a clone" size={84} color={BLUE} anchor="middle" out={c.mut - 8} />
				<DrawPath d={scribbleEllipse(795, 725, 34, 52, 31)} at={c.mut} dur={20} color={AMBER} width={6} />
				<Callout from={[795, 668]} to={[980, 668]} at={c.mut + 6} text="a copying error" sub="a mutation" color={AMBER_INK} />
				<Label x={1230} y={780} at={c.differ} text="so clones can differ a little" size={34} font="body" weight={600} color={INK_SOFT} anchor="middle" />
			</Overlay>
			<Chip x={150} y={858} at={c.fast} text="fast" color={GREEN} />
			<Chip x={410} y={858} at={c.nop} text="needs no partner" color={GREEN} />
			<Chip x={930} y={858} at={c.field} text="fills a field quickly" color={GREEN} />
		</>
	);
};
