// Scenes 6 to 10: flipping the iron's magnetism (a magnified grid of coded domain arrows turning with an AC cursor,
// warm pulses at each flip, soft iron), flux that misses (last time's schematic with dashed leakage loops, the output
// label falling under load, the secondary wound over the primary), the loss and fix table (three diagram icons), the
// memory aid lifted from it, and the judgement (three efficiency bars with a scoped source tag).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Bar} from '../../physics/electromagnetism/induction';
import {ACTrace, ConcentricLimb, DomainGrid, HEAT} from '../../physics/electromagnetism/transformer';
import {MemoryCard} from '../../shared/scenes';
import {HEAD, HEAD_SIZE, HOOK, MEPS, REVERSALS, cap, cue} from './common';
import {AMBER, FB, FB_G, FLUX, IconCopper, IconCore, IconCoupling, Lbl, LossCard, NAVY, ORANGE, ROSE, Ring, XCircuit} from './parts';

// ---------- 6. flipping the iron's magnetism ----------
const T6 = 120;
export const S06: React.FC = () => {
	const id = 'hysteresis';
	const f = useCurrentFrame();
	const one = cue(id, "There's one more loss in the core"), flip = cue(id, 'magnetised one way, then the other'), hundred = cue(id, 'a hundred times every second'), costs = cue(id, 'takes a little energy each time'), heatC = cue(id, 'and that ends up as heat too'), called = cue(id, "It's called hysteresis loss"), soft = cue(id, 'Soft iron is easy to magnetise'), less = cap(id, cue(id, 'so it wastes less energy'));
	const run = f >= flip;
	const ph = run ? (f - flip) / T6 : 0;
	const dir = run ? Math.max(-1, Math.min(1, 1.8 * Math.cos(2 * Math.PI * ph))) : 1;
	const flips = run ? Math.floor(2 * ph + 0.5) : 0;
	const since = run ? ((f - flip + T6 / 4) % (T6 / 2)) : 99;
	const pulse = f >= costs ? Math.exp(-since / 14) * (1 - 0.7 * prog(f, soft, 20)) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DomainGrid x={560} y={240} cols={6} rows={4} cell={105} dir={dir} pulse={pulse} opacity={prog(f, one - 10, 14)} />
				<ACTrace x={560} y={700} w={630} h={100} cycles={2} now={run ? (ph % 2) / 2 : undefined} color={FLUX} opacity={prog(f, flip, 12)} />
				<LossCard x={1260} y={550} w={610} size={28} cross={[0, 1, 1]} note={[0, 1, 1]} fix={[0, 0, prog(f, less, 12)]} hi={[0, 0, f >= soft ? 1 : 0]} />
			</FrameSvg>
			<Lbl x={560} y={222} at={one} color={INK} size={30}>a tiny part of the core, magnified (slowed)</Lbl>
			<Lbl x={548} y={760} at={flip} color={FLUX} size={28} anchor="end">supply (AC)</Lbl>
			<Chip x={96} y={250} at={one} size={30} w={420}>one more core loss</Chip>
			<HandTag x={96} y={420} text="each flip costs energy" at={costs} size={34} color={HEAT} />
			<HandTag x={96} y={470} text="→ heat" at={heatC} size={34} color={HEAT} />
			<Lbl x={96} y={560} at={called} color={INK} size={44}>hysteresis loss</Lbl>
			<HandTag x={96} y={880} text="fix: soft iron (easily magnetised and demagnetised)" at={less} size={32} color={NAVY.ink} />
			<Readouts x={1260} y={240} w={600} size={44} at={flip} rows={[
				{label: 'flips shown (slowed)', value: String(flips), color: INK},
				{label: 'real, at 50 Hz', value: `${REVERSALS}`, unit: 'each second', color: FLUX, at: hundred},
			]} />
		</>
	);
};

// ---------- 7. flux that misses ----------
export const S07: React.FC = () => {
	const id = 'flux-leakage';
	const f = useCurrentFrame();
	const last = cue(id, 'The last assumption'), leaks = cue(id, 'leaks out through the air'), never = cue(id, 'and never reaches the secondary'), heat = cue(id, "This one isn't mainly heat"), lessFlux = cue(id, 'the secondary gets less flux'), lower = cue(id, 'lower than the turns ratio predicts'), load = cue(id, 'especially under a heavy load'), fix = cue(id, 'The fix is the closed iron core'), gaps = cue(id, 'made with no gaps'), wound = cue(id, 'the secondary is wound right on top of the primary'), share = cap(id, cue(id, 'so they share almost all their flux'));
	const leak = prog(f, leaks, 20) * (1 - 0.85 * prog(f, share, 20));
	const two = prog(f, load, 14);
	const vs = f < lower ? '11.5 V (ideal)' : f < load + 10 ? 'a little less than 11.5 V' : 'less again';
	const c = FB_G;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<XCircuit cx={FB.cx} cy={FB.cy} s={FB.s} t={FB.t} np={FB.np} ns={FB.ns} ax={FB.ax} lx={FB.lx} phase={f * 3} lit={1} lamp2={two} leak={leak} />
				{f >= lower ? <Arrow2 from={[FB.lx + 70, FB.cy + 40]} to={[FB.lx + 70, FB.cy + 110]} color={ROSE.stroke} width={7} head={20} opacity={prog(f, lower, 10)} /> : null}
				<LossCard x={1290} y={150} w={580} size={28} cross={[prog(f, last, 12), 1, 1]} note={[prog(f, last + 10, 12), 1, 1]} fix={[prog(f, share, 12), 0, 0]} />
				{[[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sy], i) => <Ring key={i} cx={FB.cx + sx * (c.o - 30)} cy={FB.cy + sy * (c.o - 30)} rx={50} ry={50} at={gaps + i * 5} color={NAVY.stroke} seed={i + 2} />)}
				<g opacity={prog(f, wound, 16)}>
					<rect x={1440} y={600} width={420} height={310} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<ConcentricLimb x={1650} y={645} h={210} t={64} pColor={ORANGE.stroke} sColor={ROSE.stroke} rows={6} />
				</g>
				<Ring cx={1650} cy={750} rx={130} ry={130} at={share + 8} color={FLUX} />
			</FrameSvg>
			<Lbl x={FB.cx - c.m} y={FB.cy - c.o - 26} color={NAVY.ink} size={34} anchor="middle">N<Sub>p</Sub> = 1200</Lbl>
			<Lbl x={FB.cx + c.m} y={FB.cy - c.o - 26} color={NAVY.ink} size={34} anchor="middle">N<Sub>s</Sub> = 60</Lbl>
			<Lbl x={FB.ax - 52} y={FB.cy + 12} color={ORANGE.ink} size={34} anchor="end">230 V ~</Lbl>
			<Lbl x={FB.lx + 52 + 150 * two} y={FB.cy + 12} color={ROSE.ink} size={34}>{vs}</Lbl>
			<HandTag x={140} y={420} text="misses the secondary" at={leaks + 10} size={34} color={FLUX} />
			<Lbl x={FB.lx + 120} y={FB.cy - 140} at={never} out={fix} color={ROSE.ink} size={30} anchor="middle">less flux here</Lbl>
			<Chip x={96} y={880} at={heat} size={30} w={640}>not mainly heat: a lower output voltage</Chip>
			<HandTag x={FB.lx - 300} y={FB.cy + 230} text="less flux → less emf" at={lessFlux} out={fix} size={32} color={ROSE.ink} />
			<HandTag x={FB.cx} y={FB.cy + c.o + 50} text="closed core: no gaps" at={gaps + 10} size={34} color={NAVY.ink} anchor="middle" />
			<Lbl x={1650} y={634} at={wound} color={INK} size={28} anchor="middle">one limb, cut open</Lbl>
			<Lbl x={1460} y={892} at={wound + 10} color={ORANGE.ink} size={28}>primary (inside)</Lbl>
			<Lbl x={1845} y={892} at={wound + 16} color={ROSE.ink} size={28} anchor="end">secondary (on top)</Lbl>
			<HandTag x={1290} y={560} text="fix: closed core, windings on top of each other" at={share} size={28} color={NAVY.ink} />
		</>
	);
};

// ---------- 8. each loss, its fix ----------
const ROWS = [
	{y: 330, loss: <>copper: I<sup>2</sup>R in the windings</>, fix: 'thicker wire (and cooling)'},
	{y: 540, loss: <>core: eddy currents; hysteresis</>, fix: 'laminations; soft iron'},
	{y: 750, loss: <>coupling: flux leakage</>, fix: 'closed core, coils wound together'},
];
const Icon: React.FC<{i: number; glow?: number}> = ({i, glow = 1}) => i === 0 ? <IconCopper x={210} y={ROWS[0].y} k={0.85} glow={glow} /> : i === 1 ? <IconCore x={210} y={ROWS[1].y} k={0.85} glow={glow} /> : <IconCoupling x={200} y={ROWS[2].y} k={0.85} glow={glow} />;
export const S08: React.FC = () => {
	const id = 'loss-fix-pairs';
	const f = useCurrentFrame();
	const list = cue(id, "So here's the list"), l1 = cue(id, 'Heating in the copper windings'), f1 = cue(id, 'so use thicker wire'), l2 = cue(id, 'Eddy currents and hysteresis in the core'), f2 = cue(id, 'so use thin, insulated sheets of soft iron'), l3 = cue(id, 'And flux leakage'), f3 = cue(id, 'so use a closed core'), exam = cue(id, 'In an exam'), tip = cap(id, cue(id, 'the fix that targets it'));
	const L = [l1, l2, l3], F = [f1, f2, f3];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{ROWS.map((r, i) => <g key={i} opacity={prog(f, L[i], 14)}>
					<rect x={96} y={r.y - 95} width={1728} height={190} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={2.5} />
					<Icon i={i} />
				</g>)}
				{ROWS.map((r, i) => f >= F[i] ? <Arrow2 key={i} from={[1080, r.y]} to={[1180, r.y]} color={NAVY.stroke} width={7} head={22} opacity={prog(f, F[i], 10)} /> : null)}
			</FrameSvg>
			<Lbl x={400} y={196} at={list} color={INK} size={32}>loss (breaks one assumption)</Lbl>
			<Lbl x={1200} y={196} at={list} color={NAVY.ink} size={32}>fix (targets that loss)</Lbl>
			{ROWS.map((r, i) => <Lbl key={i} x={400} y={r.y + 14} at={L[i]} color={INK} size={40}>{r.loss}</Lbl>)}
			{ROWS.map((r, i) => <Lbl key={i} x={1200} y={r.y + 14} at={F[i]} color={NAVY.ink} size={40}>{r.fix}</Lbl>)}
			<Chip x={96} y={868} at={exam} size={32} w={300} color={AMBER.ink} border={AMBER.stroke}>HSC tip</Chip>
			<HandTag x={420} y={910} text="name the loss and its fix together" at={tip} size={38} color={NAVY.ink} />
		</>
	);
};

// ---------- 9. a way to remember ----------
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a way to remember the three"), ccc = cue(id, 'Copper, core, coupling'), cu = cue(id, 'Copper is heat in the windings'), co = cue(id, 'Core is heat in the iron'), cp = cap(id, cue(id, 'Coupling is flux that never reaches the secondary'));
	const pulse = (a: number) => (f >= a && f < a + 40 ? Math.sin((Math.PI * (f - a)) / 40) : 0);
	const words = [{w: 'Copper', m: 'heat in the windings', at: cu}, {w: 'Core', m: 'heat in the iron', at: co}, {w: 'Coupling', m: 'flux that never reaches the secondary', at: cp}];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{ROWS.map((_, i) => <g key={i} opacity={prog(f, here - 20, 14)}><Icon i={i} glow={0.5 + pulse(words[i].at)} /></g>)}
			</FrameSvg>
			{words.map((w, i) => <Lbl key={i} x={400} y={ROWS[i].y - 6} at={here} color={INK} size={48 + 8 * pulse(w.at)}>{w.w}</Lbl>)}
			{words.map((w, i) => <Lbl key={i} x={400} y={ROWS[i].y + 50} at={w.at} color={i === 0 ? ORANGE.ink : i === 1 ? ROSE.ink : FLUX} size={32}>{w.m}</Lbl>)}
			<div style={{position: 'absolute', left: 1120, top: 300, width: 700}}>
				<MemoryCard at={ccc} main={<>Copper, core, coupling.</>} sub={<>Each one breaks one ideal assumption.</>} />
			</div>
		</>
	);
};

// ---------- 10. how good is the ideal model? ----------
const JB = [{x: 920, frac: 1, v: '100%', l1: 'ideal', l2: 'model'}, {x: 1220, frac: 0.983, v: 'well above 90%', l1: 'large network', l2: 'transformers'}, {x: 1520, frac: HOOK.eta, v: 'about 90%', l1: 'small example', l2: '(this video)'}];
export const S10: React.FC = () => {
	const id = 'judgement';
	const f = useCurrentFrame();
	const wrong = cue(id, 'So is the ideal model wrong'), not = cue(id, 'Not really'), large = cue(id, 'Large transformers in the electricity network'), above = cue(id, 'well above ninety per cent'), pred = cue(id, 'still give very good predictions'), cant = cue(id, "What the model can't tell you"), hot = cue(id, 'how hot the transformer gets'), drop = cue(id, 'how much the voltage drops under load'), lim = cap(id, cue(id, 'with known limits'));
	const scale = (fr: number) => fr;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LossCard x={96} y={160} w={660} size={28} cross={[1, 1, 1]} note={[1, 1, 1]} fix={[1, 1, 1]} />
				{JB.map((b, i) => <g key={i} opacity={prog(f, i === 0 ? wrong : i === 1 ? above : above + 10, 14)}>
					<Bar x={b.x} base={680} w={170} h={400} frac={scale(b.frac)} color={AMBER.stroke} />
				</g>)}
			</FrameSvg>
			{JB.map((b, i) => <React.Fragment key={i}>
				<Lbl x={b.x + 85} y={680 - 400 * scale(b.frac) - 16} at={i === 0 ? wrong : i === 1 ? above : above + 10} color={AMBER.ink} size={i === 1 ? 30 : 34} anchor="middle">{b.v}</Lbl>
				<Lbl x={b.x + 85} y={722} at={i === 0 ? wrong : i === 1 ? large : above + 10} color={INK} size={28} anchor="middle">{b.l1}</Lbl>
				<Lbl x={b.x + 85} y={756} at={i === 0 ? wrong : i === 1 ? large : above + 10} color={INK} size={28} anchor="middle">{b.l2}</Lbl>
			</React.Fragment>)}
			<Chip x={880} y={776} at={above + 14} size={26} w={980}>e.g. Australian minimum for oil-filled distribution transformers at half load: {MEPS} (MEPS)</Chip>
			<HandTag x={1290} y={360} text="not really wrong" at={not} out={above} size={34} color={INK} />
			<Chip x={96} y={606} at={pred} size={32} w={360}>V<Sub>p</Sub>/V<Sub>s</Sub> = N<Sub>p</Sub>/N<Sub>s</Sub> ✓</Chip>
			<Chip x={470} y={606} at={pred + 8} size={32} w={330}>V<Sub>p</Sub>I<Sub>p</Sub> = V<Sub>s</Sub>I<Sub>s</Sub> ✓</Chip>
			<Chip x={96} y={686} at={hot} size={30} w={330} color={HEAT} border={HEAT}>heating</Chip>
			<Chip x={96} y={756} at={drop} size={30} w={420}>voltage drop under load</Chip>
			<HandTag x={450} y={720} text="not in the model" at={cant + 10} size={32} color={FLUX} />
			<HandTag x={540} y={790} text="not in the model" at={drop + 10} size={32} color={FLUX} />
			<Row at={lim} size={40} style={{position: 'absolute', left: 96, top: 860}}><AnswerBox at={lim + 6}><span style={{whiteSpace: 'normal'}}>ideal model: a good approximation, with known limits</span></AnswerBox></Row>
		</>
	);
};
