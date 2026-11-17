// MathStudioKitDemo4, scenes 1 to 7: Year 11 Advanced wave 1 algebra parts (brief 245) on the designs' own numbers:
// FactorStack (w01), AlgebraTileGrid (w02, w03), CompleteSquareTiles (w04, w15), RootExtract (w03) and the surd
// formatter (t01). Not a lesson. One 300-frame scene per group.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AlgebraTileGrid, Card, CardTitle, CompleteSquareTiles, ExactSurd, FactorStack, HandTag, LiveReadoutBoard, ParameterSlider, ResultCard, RootExtract, SceneHeading,
	expandTiles, kf, rationalise, surd, surdOf, surdText, tileGridValue,
} from '../../math/studio';
import type {TileTerm} from '../../math/studio';
import {FONT_DISPLAY, INK, INK_SOFT} from '../../kit';

// 1. FactorStack join and group (w01 scene 2).
const A1: React.FC = () => (
	<>
		<SceneHeading text="FactorStack: joining adds indices, groups multiply them" />
		<FactorStack cx={760} y={240} base="3" mode={{kind: 'join', left: 2, right: 3, joinAt: 50}} at={4} label={{at: 90}} brace={{at: 100, text: '5 factors'}} />
		<HandTag x={1320} y={300} text="join: add" role="k" at={110} size={46} />
		<FactorStack cx={760} y={640} base="3" mode={{kind: 'group', groups: 3, per: 2, stagger: 10}} at={140} label={{at: 190}} />
		<HandTag x={1350} y={830} text="groups: multiply" role="k" at={200} size={46} />
	</>
);

// 2. FactorStack cancel (w01 scenes 2 to 4): 3⁵ ÷ 3², 3² ÷ 3² (the empty bar fills with 1), 3² ÷ 3³.
const A2: React.FC = () => (
	<>
		<SceneHeading text="FactorStack: cancel in pairs, the empty bar reads 1" />
		<FactorStack cx={420} y={260} base="3" mode={{kind: 'cancel', top: 5, bottom: 2, cancelAt: 30}} at={4} label={{at: 100, x: 330, y: 720}} />
		<FactorStack cx={1050} y={260} base="3" mode={{kind: 'cancel', top: 2, bottom: 2, cancelAt: 60, fillAt: 130}} at={4} label={{at: 160, x: 960, y: 720}} />
		<FactorStack cx={1580} y={260} base="3" mode={{kind: 'cancel', top: 2, bottom: 3, cancelAt: 90}} at={4} label={{at: 170, x: 1500, y: 720}} />
		<HandTag x={230} y={860} text="cancel in pairs: subtract" role="mistake" at={110} size={42} />
		<HandTag x={900} y={860} text="not nothing: 1" role="answer" at={150} size={42} />
		<HandTag x={1420} y={860} text="a share: 1/3" role="gradient" at={190} size={42} />
	</>
);

// 3. AlgebraTileGrid resize (w02 scene 3): (x + 1)(x + 3) as x sweeps 1 to 5 and back to 3.
const ROWS: TileTerm[] = [{coef: 1, sym: 'x'}, {coef: 1}];
const COLS: TileTerm[] = [{coef: 1, sym: 'x'}, {coef: 3}];
const A3: React.FC = () => {
	const f = useCurrentFrame();
	const xv = kf(f, [[90, 3], [150, 1], [220, 5], [270, 3]]);
	return (
		<>
			<SceneHeading text="AlgebraTileGrid: every term times every term, live" />
			<AlgebraTileGrid x={260} y={300} unit={80} values={{x: xv}} rows={ROWS} cols={COLS} at={4} splitAt={10} cellAt={30} sides={{at: 20}} />
			<ResultCard x={1080} y={200} at={70} role="answer">(x + 1)(x + 3) = {expandTiles(ROWS, COLS)}</ResultCard>
			<LiveReadoutBoard x={1080} y={340} width={620} at={90} rows={[
				{label: '(x + 1)(x + 3)', value: tileGridValue(ROWS, COLS, {x: xv}), digits: 2, role: 'a'},
				{label: 'x² + 4x + 3', value: xv * xv + 4 * xv + 3, digits: 2, role: 'b'},
			]} />
			<ParameterSlider x={1000} y={760} width={480} symbol="x" role="a" value={xv} min={1} max={5} ticks={[1, 2, 3, 4, 5].map(v => ({value: v, label: String(v)}))} at={90} />
			<HandTag x={260} y={950} text="every term × every term" role="a" at={60} size={42} />
		</>
	);
};

// 4. Signed tiles, middles, and middles cancelling (w02 scene 4).
const AMB: TileTerm[] = [{coef: 1, sym: 'a'}, {coef: -1, sym: 'b'}];
const APB: TileTerm[] = [{coef: 1, sym: 'a'}, {coef: 1, sym: 'b'}];
const A4: React.FC = () => (
	<>
		<SceneHeading text="Signed tiles: the middle terms add or cancel" />
		<AlgebraTileGrid x={300} y={300} unit={100} values={{a: 3.8, b: 1.6}} rows={AMB} cols={AMB} at={4} cellAt={20} sides={{at: 10}} middles={{at: 60}} />
		<ResultCard x={180} y={890} at={90}>(a − b)² = a² − 2ab + b²</ResultCard>
		<AlgebraTileGrid x={1180} y={300} unit={100} values={{a: 3.8, b: 1.6}} rows={AMB} cols={APB} at={4} cellAt={20} sides={{at: 10}} middles={{at: 60}} cancelMiddles={{at: 140}} />
		<ResultCard x={1120} y={890} at={190}>(a − b)(a + b) = {expandTiles(AMB, APB)}</ResultCard>
		<HandTag x={1130} y={1010} text="middles cancel" role="gradient" at={170} size={42} />
	</>
);

// 5. AlgebraTileGrid factorise mode (w02 scene 6): 2x² + 7x + 3 snaps into (2x + 1)(x + 3).
const FR: TileTerm[] = [{coef: 2, sym: 'x'}, {coef: 1}];
const FC: TileTerm[] = [{coef: 1, sym: 'x'}, {coef: 3}];
const A5: React.FC = () => (
	<>
		<SceneHeading text="Factorise mode: loose tiles snap into one rectangle" />
		<Card x={96} y={180} w={860} at={4}><CardTitle>Tiles for</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}>{expandTiles(FR, FC)}</div></Card>
		<AlgebraTileGrid x={1180} y={340} unit={80} values={{x: 2.5}} rows={FR} cols={FC} assemble={{at: 40, showAt: 10, pile: {x: 110, y: 400, w: 900}, stagger: 9, dur: 24}} sides={{at: 200}} />
		<HandTag x={1180} y={930} text="one rectangle" role="a" at={215} size={46} />
	</>
);

// 6. CompleteSquareTiles (w04 scene 3: b = 2; w15 scene 3: b = −6 with the balancing − 9).
const A6: React.FC = () => (
	<>
		<SceneHeading text="CompleteSquareTiles: halve the strip, fill the corner" />
		<CompleteSquareTiles x={220} y={330} b={2} xValue={3.2} unit={110} at={4} splitAt={30} moveAt={60} gapAt={110} fillAt={160} labelAt={190} />
		<HandTag x={230} y={950} text="x² + 2x + 1 = (x + 1)²" role="gradient" at={200} size={44} />
		<CompleteSquareTiles x={1120} y={330} b={-6} xValue={4} unit={60} at={4} splitAt={40} moveAt={70} gapAt={120} fillAt={150} labelAt={190} cornerRole="k" offset={{at: 175, dx: 60}} />
		<HandTag x={1160} y={950} text="+ 9 − 9: no change" role="k" at={210} size={44} />
	</>
);

// 7. RootExtract (w03 scenes 2 and 3) and the surd formatter (t01).
const A7: React.FC = () => (
	<>
		<SceneHeading text="RootExtract and exact surds" />
		<RootExtract x={160} y={210} n={648} size={76} at={4} splitAt={30} rewriteAt={70} stepAt={110} answerAt={150} />
		<RootExtract x={160} y={380} n={648} square={4} size={44} at={170} splitAt={170} stepAt={190} tone="grey" />
		<HandTag x={700} y={410} text="not finished: largest square" role="mistake" at={200} size={38} />
		<RootExtract x={1060} y={200} n={72} size={52} equation at={20} splitAt={30} rewriteAt={45} stepAt={60} />
		<RootExtract x={1060} y={300} n={50} size={52} equation at={70} splitAt={80} rewriteAt={95} stepAt={110} />
		<RootExtract x={1060} y={400} n={18} size={52} equation at={120} splitAt={130} rewriteAt={145} stepAt={160} />
		<Card x={160} y={560} w={1600} at={40}>
			<CardTitle>Exact values in lowest terms</CardTitle>
			<div style={{display: 'flex', gap: 80, alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, marginTop: 10}}>
				<span>sin 60° = <ExactSurd value={surd(1, 3, 2)} rootRole="a" /></span>
				<span>2/√3 = <ExactSurd value={rationalise(2, 1, 3)} rootRole="a" /></span>
				<span><ExactSurd value={surdOf([[1, 1], [-1, 3]], 2)} rootRole="a" /></span>
				<span><ExactSurd value={surd(-2, 8, 4)} role="answer" /></span>
			</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT, marginTop: 14}}>
				readout text: {[surd(1, 3, 2), rationalise(2, 1, 3), surdOf([[1, 1], [-1, 3]], 2), surd(1, 72)].map(surdText).join(',  ')}
			</div>
		</Card>
	</>
);

export const SCENES_A: Record<string, React.FC> = {
	'factor-join': A1, 'factor-cancel': A2, 'tile-resize': A3, 'tile-signed': A4, 'tile-factorise': A5, 'complete-square': A6, 'root-extract': A7,
};
