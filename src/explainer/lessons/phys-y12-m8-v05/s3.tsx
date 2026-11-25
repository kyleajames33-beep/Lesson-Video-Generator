// Scenes 12 to 17: attempt 1 (two helium-3 nuclei meeting, one helium-4 and two protons leaving; no masses on the
// picture) and its feedback, attempt 2 (the painted Sun and hot-blue star above a small pp strip and a small CNO ring)
// and its feedback table, the handoff (the binding curve with the main-sequence climb solid and dashed "?" steps towards
// iron, a helium-filled core, the Sun and a massive star; its last frame is exported as `M8V05FinalFrame`) and the key
// notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, SUN} from '../../physics/light/plates';
import {STAR_BLUE} from '../../physics/light/stars';
import {Nucleus, Particle} from '../../physics/light/massenergy';
import {BindingCurve, NucEq, bcX, bcY, bindingAt} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {A1_DM, A1_E, A1_P, A1_R, A1_SLIP_DM, A1_SLIP_E, ACCENT, DM_PP, E_PP, HEAD, HEAD_NEXT, HEAD_SIZE, M, M_CNO, U_MEV, cap, cue, dur, hold} from './common';
import {AMBER, GREY, H1, HE3, HE4, INK, Lbl, MassBars, NAVY, NEUTRON, NucDisc, ROSE, RingTrack, Shrunk, TEAL, VIOLET, fx} from './parts';

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>The final step of the proton-proton chain is <NucEq terms={[HE3, '+', HE3, '→', HE4, '+', {...H1, k: 2}]} size={u ? 34 : 36} weight={600} />. Atomic masses: ³He {U(`${M.He3} u`)}, ⁴He {U(`${M.He4} u`)}, ¹H {U(`${M.H1} u`)}. Calculate the energy released in this step, in MeV. (1 u = {U_MEV} MeV/c²)</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Nucleus cx={130} cy={200} p={2} n={1} r={24} proton={ROSE.stroke} neutron={NEUTRON} />
		<Nucleus cx={130} cy={380} p={2} n={1} r={24} proton={ROSE.stroke} neutron={NEUTRON} />
		<path d="M200,200 L300,280 M200,380 L300,300" stroke={INK} strokeWidth={4} />
		<path d="M320,290 H400" stroke={INK} strokeWidth={5} /><path d="M420,290 l-22,-12 v24 z" fill={INK} />
		<Nucleus cx={520} cy={290} p={2} n={2} r={24} proton={ROSE.stroke} neutron={NEUTRON} />
		<Particle x={560} y={140} r={26} color={ROSE.stroke} text="p" size={22} />
		<Particle x={560} y={440} r={26} color={ROSE.stroke} text="p" size={22} />
		<text x={130} y={270} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>³He</text>
		<text x={130} y={450} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>³He</text>
		<text x={520} y={360} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>⁴He</text>
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const rc = cue(id, 'Reactants, two helium threes'), pr = cue(id, 'Products, a helium four and two hydrogens'), me = cue(id, 'about twelve point nine MeV'), an = cap(id, cue(id, 'which gives an impossible answer'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>{`³He ${M.He3} u; ⁴He ${M.He4} u; ¹H ${M.H1} u; 1 u = ${U_MEV} MeV/c²`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={-30} size={40}><NucEq terms={[HE3, '+', HE3, '→', HE4, '+', {...H1, k: 2}]} size={40} /></Row>
				<Row at={rc} ageAt={me} size={44}>{`reactants: 2 × ${M.He3} = ${fx(A1_R, 6)} u`}</Row>
				<Row at={pr} ageAt={me} size={44}>{`products: ${M.He4} + 2 × ${M.H1} = ${fx(A1_P, 6)} u`}</Row>
				<Row at={me - 6} size={48}>{`Δm = ${fx(A1_DM, 6)} u`}</Row>
				<Row at={me} size={52}><AnswerBox at={me + 6}>{`E = ${fx(A1_DM, 6)} × ${U_MEV} ≈ ${fx(A1_E, 1)} MeV`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic1 w={620} /></div>
			<FrameSvg><MassBars x={1010} base={900} h={200} gap={200 * (A1_DM / A1_R) * 100} w={80} sep={50} /></FrameSvg>
			<Lbl x={1050} y={680} at={0} color={TEAL.ink} size={26} anchor="middle">reactants</Lbl>
			<Lbl x={1180} y={680} at={0} color={TEAL.ink} size={26} anchor="middle">products</Lbl>
			<Lbl x={1240} y={900} at={0} color={GREY.ink} size={26}>mass (gap × 100)</Lbl>
			<CrossedChip x={96} y={820} at={an} crossAt={an + 12} size={28} caption="count every product">{`Δm = ${fx(A1_R, 6)} − ${M.He4} = ${fx(A1_SLIP_DM, 3)} u → ${Math.round(A1_SLIP_E / 10) * 10} MeV`}</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>{U('Compare')} the proton-proton chain and the CNO cycle as processes that release energy in main-sequence stars.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Disc spec={SUN} cx={170} cy={140} d={140} />
		<Disc spec={STAR_BLUE} cx={500} cy={140} d={170} />
		{[0, 1, 2].map(i => <g key={i}><Particle x={70 + 70 * i} y={360} r={20} color={ROSE.stroke} /><Particle x={95 + 70 * i} y={360} r={20} color={i === 0 ? ROSE.stroke : NEUTRON} /></g>)}
		<path d="M60,420 H300" stroke={INK} strokeWidth={3} /><path d="M312,420 l-16,-9 v18 z" fill={INK} />
		<RingTrack g={{cx: 500, cy: 370, r: 90}} />
		<NucDisc x={500} y={280} r={26} text="C" />
		<text x={170} y={490} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>pp chain</text>
		<text x={500} y={500} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>CNO cycle</text>
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
const Cell: React.FC<{children: React.ReactNode; at: number; color?: string; span?: boolean}> = ({children, at, color = INK, span = false}) => {
	const o = prog(useCurrentFrame(), at, 14);
	return <div style={{gridColumn: span ? '1 / span 2' : undefined, opacity: o, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color, padding: '8px 14px', borderTop: '2.5px solid rgba(60,45,20,0.25)'}}>{children}</div>;
};
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const en = cue(id, 'the same energy'), ed = cue(id, 'returned at the end'), su = cue(id, 'not the Sun'), ca = cap(id, cue(id, 'the CNO cycle uses up carbon'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={260} givens={<>compare: the proton-proton chain | the CNO cycle | both release energy in main-sequence stars</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, width: 1100, opacity: prog(f, en - 6, 12), background: '#fffdf8', border: `4.5px solid ${INK}`, borderRadius: 14, display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: NAVY.ink, padding: '8px 14px'}}>pp chain</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: VIOLET.ink, padding: '8px 14px'}}>CNO cycle</div>
				<Cell at={en} span>{`same: 4 ¹H → ⁴He, ${fx(E_PP, 1)} MeV, Δm = ${fx(DM_PP, 4)} u`}</Cell>
				<Cell at={ed}>directly from protons</Cell>
				<Cell at={ed + 6}>carbon catalyst, returned</Cell>
				<Cell at={su}>cooler cores (Sun, ~99%)</Cell>
				<Cell at={su + 6}>{`hotter cores (> ${M_CNO} M☉)`}</Cell>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic2 w={620} /></div>
			<CrossedChip x={96} y={800} at={ca} crossAt={ca + 12} size={30} caption="catalyst: regenerated">the CNO cycle uses up carbon</CrossedChip>
		</>
	);
};

// ---------- 16. handoff ----------
const HD = (() => {
	const id = 'handoff-v06';
	return {id, hh: cue(id, 'from hydrogen to helium'), mh: cue(id, 'the core is mostly helium'), tc: cue(id, 'towards carbon, oxygen, even iron'), dm: cue(id, 'That depends on its mass'), nx: cap(id, cue(id, 'So how does stellar mass change')), end: dur(id) - 1};
})();
export const BC16: BCBox = {x: 160, y: 230, w: 1260, h: 530};
const L16 = [{A: 1, text: '¹H', dx: -14, dy: 6, anchor: 'end' as const}, {A: 4, text: '⁴He', dy: -26}, {A: 12, text: '¹²C', dx: 14, dy: 40, anchor: 'start' as const}, {A: 16, text: '¹⁶O', dy: -26}, {A: 56, text: 'peak near iron (⁵⁶Fe: 8.8 MeV)', dy: -30}, {A: 238, text: '²³⁸U', dy: -26, anchor: 'end' as const}];
const CORE16 = {x: 1660, y: 330, r: 110};
export const STEPS = [[4, 12], [12, 16], [16, 56]] as const;
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard05: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean; core?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true, core = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const p = (x: number, A: number) => [bcX(BC16, A), bcY(BC16, bindingAt(A))] as const;
	const [x1, y1] = p(0, 1), [x4, y4] = p(0, 4);
	const drawH = final ? 1 : prog(f, HD.hh, 30);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<BindingCurve b={BC16} labels={L16} />
				<line x1={x1 + 12} y1={y1 - 12} x2={x1 + 12 + (x4 - x1 - 30) * drawH} y2={y1 - 12 + (y4 - y1 + 26) * drawH} stroke={AMBER.stroke} strokeWidth={10} strokeLinecap="round" />
				{drawH > 0.95 ? <path d="M0,0 L-24,-13 L-24,13 z" transform={`translate(${x4 - 14} ${y4 + 16}) rotate(${(Math.atan2(y4 - y1 + 26, x4 - x1 - 30) * 180) / Math.PI})`} fill={AMBER.stroke} /> : null}
				{STEPS.map(([a, b], i) => { const [xa, ya] = p(0, a), [xb, yb] = p(0, b), oo = o(HD.tc + 14 * i); return oo > 0.001 ? <g key={i} opacity={oo}><path d={`M${xa + 10},${ya - 30} Q${(xa + xb) / 2},${Math.min(ya, yb) - 70} ${xb - 6},${yb - 34}`} fill="none" stroke={GREY.stroke} strokeWidth={5} strokeDasharray="12 9" /><text x={(xa + xb) / 2} y={Math.min(ya, yb) - 62} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: GREY.ink}}>?</text></g> : null; })}
				<g opacity={core ? o(HD.mh) : 0}>
					<circle cx={CORE16.x} cy={CORE16.y} r={CORE16.r} fill="#fff1d0" stroke={AMBER.stroke} strokeWidth={4} />
					{[[-50, -40], [20, -55], [-40, 30], [35, 20], [-5, -5]].map(([dx, dy], i) => <Nucleus key={i} cx={CORE16.x + dx} cy={CORE16.y + dy} p={2} n={2} r={11} proton={ROSE.stroke} neutron={NEUTRON} />)}
				</g>
				<Disc spec={SUN} cx={620} cy={640} d={140} opacity={o(HD.dm)} />
				<Disc spec={STAR_BLUE} cx={1240} cy={620} d={230} opacity={o(HD.dm + 6)} />
			</FrameSvg>
			<Lbl x={x1 + 60} y={y1 - 70} at={at(HD.hh + 20)} color={AMBER.ink} size={30}>main sequence</Lbl>
			{core ? <Lbl x={CORE16.x} y={CORE16.y + CORE16.r + 40} at={at(HD.mh)} color={INK} size={26} anchor="middle">core hydrogen used up</Lbl> : null}
			{core ? <Lbl x={CORE16.x} y={CORE16.y - CORE16.r - 20} at={at(HD.mh)} color={INK} size={26} anchor="middle">core: mostly ⁴He</Lbl> : null}
			{marks ? <HandTag x={540} y={540} text="how far up?" at={at(HD.dm + 14)} size={32} color={INK} /> : null}
			{marks ? <HandTag x={1150} y={470} text="how far up?" at={at(HD.dm + 20)} size={32} color={INK} /> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: how does stellar mass change the elements a star can make?</Chip> : null}
		</>
	);
};
/** v05's final frame for the next video. */
export const M8V05FinalFrame: React.FC = () => <HandoffBoard05 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard05 f={useCurrentFrame()} />;

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Main sequence: <span style={{color: AMBER.ink}}>pressure out</span> balances <span style={{color: NAVY.ink}}>gravity in</span>.</>, at: 2},
		{content: <>Nucleus lighter than its parts: <span style={{color: TEAL.ink}}>binding energy = Δmc²</span>.</>, at: 6},
		{content: <>B.E. per nucleon peaks near iron: light nuclei fuse.</>, at: 10},
		{content: <>pp chain: 4 ¹H → ⁴He + 2e⁺ + 2ν; <span style={{color: AMBER.ink}}>{fx(E_PP, 1)} MeV</span>.</>, at: 14},
		{content: <>CNO: carbon catalyst; hotter cores (above ~{M_CNO} M☉).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Four protons in, one helium out, 0.7% lighter. The CNO cycle just borrows carbon.</>} picture={<svg width={580} height={220}><g>{[0, 1, 2, 3].map(i => <Particle key={i} x={60 + 46 * i} y={110} r={20} color={ROSE.stroke} />)}<path d="M240,110 H300" stroke={INK} strokeWidth={4} /><path d="M314,110 l-16,-9 v18 z" fill={INK} /><Nucleus cx={360} cy={110} p={2} n={2} r={16} proton={ROSE.stroke} neutron={NEUTRON} /><RingTrack g={{cx: 500, cy: 110, r: 70}} /><NucDisc x={500} y={40} r={20} text="C" /></g></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
