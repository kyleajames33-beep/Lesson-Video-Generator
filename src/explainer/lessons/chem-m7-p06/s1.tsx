// M7 P06 scenes 1 to 6: the hook (soap froths in soft water; the hard plate fades in; the detergent pair), the aim and
// the tubes (distilled water, CaCl₂, the NaCl check, the two agents, the six-slot line-up with controls), the froth test
// (method card, the shake on all six, the froth ruler, control bubbles), the variables, the results (the hard plate
// fills its slot, ruler readings, froth bars, the two pair brackets) and the scum recall (C12's lock; the detergent's
// soluble calcium salt; "stronger soap" crossed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PenLink, Sx, TaskLine, smooth} from '../chem-m6-p02/parts';
import {Crossed, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {WaterMol} from '../chem-m7-c03/parts';
import {EqRow, Plate} from '../chem-m7-c06/parts';
import {CA, Ion, NA, SoapSym} from '../chem-m7-c12/parts';
import {Bottle2} from '../chem-m7-p02/parts';
import {Heading, ST, TG, WASH, sc} from './common';
import {Chip2, DETC, FrothBars, GREENC, HARDC, HBr, INK, INK_SOFT, LINE, NAVY, Ruler, SOAPC, Slot, TERRA, WATERC, row6, tp} from './parts';
import type {Kind, SlotP} from './parts';

const Note: React.FC<{x: number; y: number; text: string; at: number; out?: number; o?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, o = 1, anchor = 'start'}) => <Tag x={x} y={y} text={text} at={at} out={out} size={20} o={o} anchor={anchor} />;
/** Drops falling onto each slot's stopper. */
const Drops: React.FC<{slots: SlotP[]; at: number}> = ({slots, at}) => {
	const f = useCurrentFrame();
	return <g>{slots.map((S, i) => [0, 1, 2].map(k => {
		const t = prog(f, at + i * 4 + k * 14, 14);
		if (t <= 0 || t >= 1) return null;
		const b = tp(S, 1000, TG.stopTop);
		return <circle key={i + '-' + k} cx={b[0]} cy={b[1] - 70 + 70 * t * t} r={6} fill={i % 4 < 2 ? '#f3dfa6' : '#e2d8f2'} stroke={INK_SOFT} strokeWidth={1.5} opacity={1 - t * 0.3} />;
	}))}</g>;
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {shake: 'Shake a', froth: 'froth.', same: 'Shake the', hard: 'hard water,', cloudy: 'cloudy,', det: 'A detergent', both: 'both.', lets: "Let's show"});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const A: SlotP = {cx: 480, top: 300, h: 560}, B: SlotP = {cx: 900, top: 300, h: 560};
	const C: SlotP = {cx: 1420, top: 420, h: 440}, D: SlotP = {cx: 1660, top: 420, h: 440};
	return (
		<>
			<Heading text="Soap or detergent: which survives hard water?" at={K1.lets} size={56} />
			<Overlay>
				<Slot S={A} at={0} kind="soft" shake={[K1.shake + 4]} chip={{agent: 'soap', water: 'soft', at: 10}} />
				<Tag x={A.cx} y={A.top + A.h + 16} text="tall froth" at={K1.froth} size={24} anchor="middle" o={dimAt(f, K1.det, 0.5)} />
				<Slot S={B} at={K1.hard - 6} kind="hard" shake={[K1.hard + 4]} chip={{agent: 'soap', water: 'hard', at: K1.hard}} />
				<Tag x={B.cx} y={B.top + B.h + 16} text="cloudy, little froth" at={K1.cloudy} size={24} anchor="middle" color={TERRA} fill="#f6e2d3" />
				<Slot S={C} at={K1.det} kind="soft" chip={{agent: 'det', water: 'soft', at: K1.det}} />
				<Slot S={D} at={K1.det + 10} kind="soft" chip={{agent: 'det', water: 'hard', at: K1.det + 10}} />
				<Tag x={(C.cx + D.cx) / 2} y={C.top + C.h + 16} text="froths in both" at={K1.both} size={24} anchor="middle" color={DETC} fill="#e6ddf5" />
				{void K1.same}
			</Overlay>
		</>
	);
};

// ---------- 2. The aim, and the tubes ----------
const K2 = cues(sc('aim-tubes'), {aim: 'The aim:', make: 'Make hard', cacl: 'calcium chloride', dist: 'distilled', plain: 'plain distilled', adds: 'That adds', nacl: 'sodium chloride', pure: 'pure detergent,', sds: 'sodium dodecyl', four: 'four tubes:', two: 'Two more', controls: 'controls.'});
const L2 = row6(200, 210, 650, 310);
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const up = dimAt(f, K2.four, 0.4);
	const kinds: Kind[] = ['soft', 'empty', 'soft', 'soft', 'empty', 'empty'];
	const ats = [K2.four + 20, K2.four + 32, K2.four + 44, K2.four + 56, K2.two + 10, K2.two + 22];
	return (
		<Overlay>
			<TaskLine text="Aim: compare soap and detergent in soft and hard water" at={K2.aim} size={44} y={130} />
			<g opacity={up}>
				<Plate p={WASH} cx={170} top={200} h={250} at={K2.dist} />
				<Sx x={170} y={400} text="distilled" size={18} color={INK} anchor="middle" weight={800} at={K2.dist} />
				<Sx x={170} y={422} text="water" size={18} color={INK} anchor="middle" weight={800} at={K2.dist} />
				<Bottle2 cx={400} top={200} h={250} name="CaCl₂(aq)" formula="0.001 M" edge={HARDC} at={K2.cacl} />
				<Ion x={560} y={280} t="Ca²⁺" r={30} color={CA} o={vis(f, K2.cacl + 10)} />
				<Ion x={640} y={280} t="Cl⁻" r={22} color={WATERC} o={vis(f, K2.adds)} />
				<Tag x={520} y={330} text="added: Ca²⁺ (and Cl⁻)" at={K2.adds} size={22} />
				<Note x={96} y={480} text="distilled: dissolved ions removed" at={K2.dist + 10} />
				<Note x={96} y={530} text="hard water: about 100 mg/L as CaCO₃, moderately hard, like some tap water" at={K2.plain} />
				<Tag x={760} y={200} text="optional check: soap in NaCl(aq), same Cl⁻" at={K2.nacl} size={20} o={dimAt(f, K2.pure, 0.45)} />
				<Bottle2 cx={1150} top={230} h={220} name="soap" formula="0.4%" edge={SOAPC} at={K2.pure} />
				<Bottle2 cx={1380} top={230} h={220} name="SDS" formula="0.1%" edge={DETC} at={K2.sds} />
				<Note x={1480} y={260} text="soap: 0.4%, pure soap (mainly sodium oleate)" at={K2.pure + 10} />
				<Note x={1480} y={310} text="detergent: sodium dodecyl sulfate, 0.1%" at={K2.sds + 10} />
				<Note x={1480} y={360} text="c12: sulfate head" at={K2.sds + 30} />
			</g>
			{L2.map((S, i) => <Slot key={i} S={S} at={ats[i]} kind={kinds[i]} chip={{...LINE[i], at: ats[i]}} />)}
			<Tag x={1360} y={900} text="control: same treatment, no cleaning agent" at={K2.controls} size={24} color={GREENC} fill="#e3f3e9" />
		</Overlay>
	);
};

// ---------- 3. Part A: the froth test ----------
const K3 = cues(sc('froth-test'), {part: 'Part one', put: 'Put ten', match: 'matching', add: 'add five', stopper: 'Stopper it,', shake: 'shake it', stand: 'stand it', after: 'After thirty', height: 'height', from: "from the liquid's", controls: 'The controls', none: 'none.'});
const L3 = row6(220, 210, 560, 360);
export const SceneFroth: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{t: '1  10 mL water in each tube (same size tubes)', at: K3.put},
		{t: '2  5 drops of solution (soap or detergent)', at: K3.add},
		{t: '3  stopper; shake 10 times, same way', at: K3.stopper},
		{t: '4  stand 30 s; measure froth height', at: K3.after},
	];
	const kinds: Kind[] = ['soft', 'empty', 'soft', 'soft', 'empty', 'empty'];
	return (
		<Overlay>
			<TaskLine text="Part A: froth test" at={K3.part} size={54} y={130} />
			{steps.map((s, i) => <g key={i} opacity={steps[i + 1] ? dimAt(f, steps[i + 1].at, 0.4) : 1}><Sx x={120} y={230 + i * 58} text={s.t} size={32} color={INK} weight={600} at={s.at} /></g>)}
			{L3.map((S, i) => <Slot key={i} S={S} at={0} kind={kinds[i]} shake={[K3.shake]} chip={{...LINE[i], at: 0}} thin={i >= 4 ? K3.none - 10 : undefined} />)}
			<Drops slots={L3.slice(0, 4)} at={K3.add + 10} />
			<Ruler S={L3[0]} at={K3.height - 6} read={K3.from + 20} />
			<Tag x={1380} y={600} text="froth height" at={K3.height} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1380} y={660} text="liquid surface → top of froth" at={K3.from} size={22} color={NAVY} fill="#e7edf8" />
			{[4, 5].map(i => <Tag key={i} x={L3[i].cx} y={L3[i].top + L3[i].h + 14} text="under 0.2 cm" at={K3.none} size={20} anchor="middle" color={GREENC} fill="#e3f3e9" />)}
			{void K3.match}{void K3.stand}{void K3.controls}
		</Overlay>
	);
};

// ---------- 4. The variables ----------
const K4 = cues(sc('variables'), {what: 'What changes', two: 'Two independent', agent: 'cleaning agent,', water: 'the water,', dep: 'dependent', forms: 'forms.', keep: 'Keep', vol: 'volume,', drops: 'drops,', shaking: 'shaking', wait: 'waiting', same: ['the same.', 1], sol: 'The two solutions', how: 'how much'});
const L4 = row6(260, 200, 620, 320);
export const SceneVariables: React.FC = () => {
	const f = useCurrentFrame();
	const kinds: Kind[] = ['soft', 'empty', 'soft', 'soft', 'empty', 'empty'];
	const ctrl = [{t: '10 mL water', at: K4.vol, to: tp(L4[0], 1000, 1200)}, {t: 'same size tubes', at: K4.vol + 14, to: tp(L4[1], 1120, 1100)}, {t: '5 drops', at: K4.drops, to: tp(L4[2], 1000, 260)}, {t: 'same stock for each agent', at: K4.drops + 10}, {t: '10 shakes', at: K4.shaking, to: tp(L4[3], 1000, 260)}, {t: '30 s', at: K4.wait}];
	let x = 300;
	return (
		<Overlay>
			<TaskLine text="What changes, what stays the same?" at={K4.what} size={50} y={130} />
			<g opacity={dimAt(f, K4.dep, 0.45)}><Sx x={120} y={230} text="Independent: agent (soap, detergent, none); water (soft, hard)" size={32} color={NAVY} weight={800} at={K4.agent} /></g>
			<g opacity={dimAt(f, K4.keep, 0.45)}><Sx x={120} y={300} text="Dependent: froth height (cm); cloudiness or solid" size={32} color={INK} weight={800} at={K4.dep} /></g>
			<Sx x={120} y={380} text="Controlled:" size={32} color={GREENC} weight={800} at={K4.keep} />
			{ctrl.map((c, i) => {
				const cx = x; x += c.t.length * 13 + 56;
				return (
					<g key={i} opacity={dimAt(f, K4.sol, 0.6)}>
						<Tag x={cx} y={350} text={c.t} at={c.at} size={24} color={GREENC} fill="#e3f3e9" />
						{c.to ? <PenLink a={[cx + 30, 392]} b={c.to} at={c.at + 6} out={K4.sol} /> : null}
					</g>
				);
			})}
			<Tag x={120} y={430} text="compare each agent with its own soft-water tube (soap 0.4%, SDS 0.1%)" at={K4.how} size={26} color={NAVY} fill="#e7edf8" />
			{L4.map((S, i) => <Slot key={i} S={S} at={0} kind={kinds[i]} thin={i >= 4 ? -100 : undefined} chip={{...LINE[i], at: 0, glow: i < 4 ? K4.agent : undefined}} />)}
			<Sx x={120} y={1040} text="Controls: water only, soft and hard" size={22} color={INK_SOFT} weight={600} at={K4.two} />
			{void K4.water}{void K4.forms}{void K4.same}
		</Overlay>
	);
};

// ---------- 5. Part A: the results ----------
const K5 = cues(sc('froth-results'), {here: 'Here are', soap: 'Soap in hard', cloudy: 'cloudy,', det: 'The detergent froths', scum: 'scum', so: 'So hard', soaps: "soap's", dets: "detergent's."});
const L5 = row6(230, 220, 250, 380);
const MEANS = [6.0, 0.6, 6.4, 6.1, 0.1, 0.1];
const VAL = ['6.0 cm', '0.6 cm', '6.4 cm', '6.1 cm', '< 0.2 cm', '< 0.2 cm'];
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const vt = [K5.soap, K5.cloudy, K5.det, K5.det + 50, K5.scum, K5.scum];
	const kinds: Kind[] = ['soft', 'empty', 'soft', 'soft', 'empty', 'empty'];
	const cols = [SOAPC, SOAPC, DETC, DETC, WATERC, WATERC];
	return (
		<Overlay>
			<TaskLine text="Part A: example results" at={K5.here} size={50} y={130} />
			<Tag x={1520} y={110} text="example results, mean of 3" at={K5.here + 16} size={24} color="#a8761a" fill="#fbeec4" />
			{L5.map((S, i) => <Slot key={i} S={S} at={0} kind={kinds[i]} to={i === 1 ? 'hard' : undefined} swap={i === 1 ? K5.cloudy - 6 : undefined} thin={i >= 4 ? -100 : undefined} chip={{...LINE[i], at: 0}} />)}
			{[0, 1, 2, 3].map(i => <Ruler key={i} S={L5[i]} hard={i === 1} at={vt[i] - 8} out={i < 3 ? vt[i + 1] - 8 : K5.scum} read={vt[i] + 4} />)}
			{VAL.map((v, i) => <Tag key={i} x={L5[i].cx} y={652} text={v} at={vt[i] + 10} size={24} anchor="middle" color={i < 4 ? INK : INK_SOFT} fill="#fffdf8" />)}
			<Tag x={L5[1].cx} y={706} text="cloudy, white flecks" at={K5.cloudy + 16} size={20} anchor="middle" color={TERRA} fill="#f6e2d3" />
			<FrothBars xs={L5.map(S => S.cx)} base={960} vals={MEANS} cols={cols} at={K5.det + 60} k={28} pulse={[{i: [2, 3], at: K5.dets}]} />
			<HBr x1={L5[0].cx - 30} x2={L5[1].cx + 30} y={976} dir={1} text="soap: hard vs soft, big drop" at={K5.soaps} color={TERRA} size={30} />
			<HBr x1={L5[2].cx - 30} x2={L5[3].cx + 30} y={976} dir={1} text="detergent: hard vs soft, little change" at={K5.dets} color={DETC} size={30} />
			{void K5.so}
		</Overlay>
	);
};

// ---------- 6. Why? Recall the scum ----------
const K6 = cues(sc('why-scum'), {why: 'Why?', two: 'two soap ions', ion: 'calcium ion', form: 'and form', stearate: 'calcium stearate.', scum: 'the scum', every: 'Every soap', locked: 'locked', det: "The detergent's", sol: 'soluble,', far: 'far less', keeps: 'keeps working.'});
export const SceneWhy: React.FC = () => {
	const f = useCurrentFrame();
	const lock = smooth(prog(f, K6.ion, 30));
	const drop = smooth(prog(f, K6.scum, 30));
	const C: V2 = [600, 430 + drop * 90];
	const g = prog(f, K6.form, 14);
	const D: V2 = [1420, 430];
	const caD = smooth(prog(f, K6.det + 20, 30));
	const ca: V2 = [D[0] - 80 - (1 - caD) * 200, D[1] + 120];
	return (
		<Overlay>
			<TaskLine text="Why?" at={K6.why} size={54} y={130} />
			<Tag x={260} y={110} text="c12: soaps and detergents" at={K6.why + 10} size={20} />
			<g opacity={vis(f, K6.two - 10) * dimAt(f, K6.det, 0.5)}>
				<Sx x={600} y={250} text="soap in hard water" size={34} color={SOAPC} anchor="middle" hand weight={700} at={K6.two - 10} />
				<g transform="translate(600,440) scale(1.45) translate(-600,-440)">
				<Ion x={C[0]} y={C[1]} t="Ca²⁺" r={32} color={g > 0.5 ? '#9a948a' : CA} />
				<SoapSym x={C[0] - 52 - (1 - lock) * 120} y={C[1] - (1 - lock) * 60} ang={Math.PI + (1 - lock) * 0.6} head={g > 0.5 ? 'grey' : 'neg'} />
				<SoapSym x={C[0] + 52 + (1 - lock) * 120} y={C[1] + (1 - lock) * 60} ang={(1 - lock) * 0.6} head={g > 0.5 ? 'grey' : 'neg'} />
				<Ion x={C[0] - 240} y={330} t="Na⁺" color={NA} r={22} />
				<Ion x={C[0] + 240} y={330} t="Na⁺" color={NA} r={22} />
				</g>
				<Tag x={600} y={670} text="locked in scum: lost for frothing or cleaning" at={K6.locked} size={24} color={TERRA} fill="#f6e2d3" anchor="middle" />
			</g>
			<EqRow left={[{t: '2C_17H_35COO⁻(aq)', at: K6.scum}, {t: '+', at: K6.scum}, {t: 'Ca²⁺(aq)', at: K6.scum}]} right={[{t: '(C_17H_35COO)_2Ca(s)', at: K6.scum + 10}]} cx={700} y={780} size={34} len={100} arrow={{at: K6.scum + 6}} />
			<Note x={700} y={820} text="stearate as the model soap; the class soap's oleate reacts the same way" at={K6.scum + 24} anchor="middle" />
			<g opacity={vis(f, K6.det)}>
				<Sx x={1420} y={250} text="detergent in hard water" size={34} color={DETC} anchor="middle" hand weight={700} at={K6.det} />
				<g transform="translate(1420,480) scale(1.4) translate(-1420,-480)">
				<SoapSym x={D[0]} y={D[1]} ang={0} s={1.1} />
				<Sx x={D[0]} y={D[1] - 30} text="SO₄⁻ head" size={20} color={DETC} anchor="middle" weight={800} at={-1000} />
				<Ion x={ca[0]} y={ca[1]} t="Ca²⁺" r={30} color={CA} />
				<g opacity={vis(f, K6.sol)}>{([[D[0] - 60, D[1] - 70, 0.4], [D[0] - 70, D[1] + 50, -0.4], [ca[0] - 60, ca[1] + 40, 1], [ca[0] + 50, ca[1] + 50, -1], [D[0] + 40, D[1] + 60, 2]] as [number, number, number][]).map((w, i) => <WaterMol key={i} p={{o: [w[0], w[1]], a: w[2]}} s={0.7} />)}</g>
				</g>
				<Tag x={1420} y={690} text="calcium dodecyl sulfate: much more soluble" at={K6.sol} size={24} color={DETC} fill="#e6ddf5" anchor="middle" />
			</g>
			<Crossed x={1080} y={890} text="detergent = stronger soap" at={K6.far} cross={K6.keeps} note="same action; the head differs" size={30} />
			{void K6.stearate}{void K6.every}{void FrothBars}{void Chip2}{void ST}
		</Overlay>
	);
};
