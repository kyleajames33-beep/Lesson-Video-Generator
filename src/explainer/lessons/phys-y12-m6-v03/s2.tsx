// Scenes 6 to 10: does doubling the voltage double the speed (the supply dial drives a point along the v against V
// curve, K and v bars, the crossed straight line), same voltage and different particles (two lanes, equal K bars,
// the proton crawling), when q E d applies (last time's path with equipotentials, the split displacement), when the
// starting energy matters (the stacked ledger, the retarding region with one electron through and one turned back,
// each a run on the field motion engine), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, Readouts, Row} from '../../physics/projectile/board';
import {Equipotentials, FieldLines, Particle, PlatePair} from '../../physics/electromagnetism/plates';
import type {SupplyAt} from '../../physics/electromagnetism/plates';
import {stateAt} from '../../sims/field-motion';
import {MAIN as V02_MAIN, RUN_IN as V02_RUN} from '../phys-y12-m6-v02/common';
import {GUN, HEAD, HEAD_SIZE, LOOP, RATIO, RET_A, RET_B, RET_W, cap, cue, mono, vFrom} from './common';
import {AMBER, BLUE, Beam, GREY, GunRig, Lbl, NAVY, ORANGE, Ring, T, TEAL, VIOLET, VecArrow, Trail, RunDot, Strobes, nV, platesFor, sci, toPx} from './parts';
import type {Map} from './parts';

// ---------- 6. does double the voltage double the speed? ----------
const GR = {ox: 920, oy: 840, w: 840, h: 560, vMax: 9e7, VMax: 10000};
const gx = (V: number) => GR.ox + (V / GR.VMax) * GR.w, gy = (v: number) => GR.oy - (v / GR.vMax) * GR.h;
const SUP6: SupplyAt = {x: 96, y: 620, w: 380};
const GUN6 = {x: 420, y: 520};
export const S06: React.FC = () => {
	const id = 'doubling';
	const f = useCurrentFrame();
	const so = cue(id, 'So, does doubling'), dk = cue(id, 'Doubling the voltage doubles'), but = cue(id, 'But kinetic energy goes'), times = cue(id, 'about one point four one'), ten = cue(id, 'Ten thousand volts gives'), four = cue(id, 'not eight point four'), energy = cue(id, 'Energy goes with V');
	const V = kf(f, mono([[so, 0], [times - 20, 5000], [times + 20, 5000], [ten + 10, 10000]]));
	const v = vFrom(Math.max(V, 0.001));
	const curve = Array.from({length: 101}, (_, i) => { const VV = (i / 100) * GR.VMax; return `${i ? 'L' : 'M'}${gx(VV).toFixed(1)},${gy(vFrom(VV)).toFixed(1)}`; }).join(' ');
	const anode = GUN6.x + 34 + 70 + 13;
	const kH = (V / 10000) * 280, vH = (v / vFrom(10000)) * 280;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GunRig x={GUN6.x} y={GUN6.y} sup={SUP6} reading={`${nV(V)} V`} knobDeg={V / 60} h={110} gap={70} />
				<Beam x0={anode + 14} x1={840} y={GUN6.y} phase={(f * (2 + v / 1.5e7)) % 70} opacity={prog(f, so, 14)} />
				{/* the graph */}
				<line x1={GR.ox} y1={GR.oy} x2={GR.ox + GR.w + 20} y2={GR.oy} stroke={INK} strokeWidth={4} />
				<line x1={GR.ox} y1={GR.oy} x2={GR.ox} y2={GR.oy - GR.h - 20} stroke={INK} strokeWidth={4} />
				{[0, 2500, 5000, 7500, 10000].map(VV => <g key={VV}><line x1={gx(VV)} y1={GR.oy} x2={gx(VV)} y2={GR.oy + 12} stroke={INK} strokeWidth={3} /><T x={gx(VV)} y={GR.oy + 44} size={28} anchor="middle">{VV / 1000}</T></g>)}
				{[0, 3e7, 6e7, 9e7].map(vv => <g key={vv}><line x1={GR.ox - 12} y1={gy(vv)} x2={GR.ox} y2={gy(vv)} stroke={INK} strokeWidth={3} /><T x={GR.ox - 18} y={gy(vv) + 10} size={28} anchor="end">{vv / 1e7}</T></g>)}
				<path d={curve} fill="none" stroke={TEAL.stroke} strokeWidth={6} opacity={prog(f, so - 10, 14)} />
				{V > 1 ? <circle cx={gx(V)} cy={gy(v)} r={13} fill={TEAL.stroke} stroke={INK} strokeWidth={3} /> : null}
				{f >= times ? <g opacity={prog(f, times, 12)}><circle cx={gx(5000)} cy={gy(GUN.v)} r={9} fill={INK} /><line x1={gx(5000)} y1={gy(GUN.v)} x2={gx(5000)} y2={GR.oy} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" /></g> : null}
				{f >= four ? <g opacity={prog(f, four, 12)}>
					<line x1={gx(0)} y1={gy(0)} x2={gx(10000)} y2={gy(GUN.line10)} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 9" />
					<path d={`M${gx(10000) - 18},${gy(GUN.line10) - 18} l36,36 m0,-36 l-36,36`} stroke={INK} strokeWidth={6} strokeLinecap="round" opacity={prog(f, four + 16, 8)} />
				</g> : null}
				<Bracket x1={gx(10000) + 30} y1={gy(GUN.v)} x2={gx(10000) + 30} y2={gy(GUN.v10)} color={TEAL.stroke} at={ten + 20} label="× 1.41" size={32} lx={gx(10000) + 44} anchor="start" />
				{f >= ten + 10 ? <line x1={gx(5000)} y1={gy(GUN.v)} x2={gx(10000) + 30} y2={gy(GUN.v)} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" /> : null}
				{/* K and v bars */}
				<g opacity={prog(f, so, 12)}>
					<rect x={600} y={900 - kH} width={70} height={kH} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
					<rect x={700} y={900 - vH} width={70} height={vH} fill="#d6eeee" stroke={TEAL.stroke} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={GR.ox + GR.w / 2} y={GR.oy + 86} at={so} color={GREY.ink} size={30} anchor="middle">accelerating voltage V (kV)</Lbl>
			<Lbl x={GR.ox + 14} y={GR.oy - GR.h - 34} at={so} color={TEAL.ink} size={30}>speed v (× 10⁷ m s⁻¹), electron from rest</Lbl>
			<Lbl x={635} y={930} at={so} color={ORANGE.ink} size={30} anchor="middle">K</Lbl>
			<Lbl x={735} y={930} at={so} color={TEAL.ink} size={30} anchor="middle">v</Lbl>
			<HandTag x={600} y={560} text="× 2" at={dk + 10} size={34} color={ORANGE.ink} />
			<HandTag x={720} y={600} text="× √2" at={but + 10} size={34} color={TEAL.ink} />
			<Readouts x={96} y={176} w={560} size={40} at={so} rows={[
				{label: 'V', value: `${nV(V)} V`, color: GREY.ink},
				{label: 'K = |q|V', value: `${nV(V)} eV`, color: ORANGE.ink},
				{label: 'v', value: V > 1 ? `${sci(v)} m s⁻¹` : '0', color: TEAL.ink},
			]} />
			<Lbl x={gx(10000) - 20} y={gy(GUN.line10) - 30} at={four} color={GREY.ink} size={30} anchor="end">straight line: 8.4 × 10⁷</Lbl>
			<HandTag x={gx(7500)} y={gy(GUN.line10) + 30} text="speed isn't ∝ V" at={four + 20} size={30} color={GREY.ink} anchor="middle" />
			<Row at={energy} size={44} style={{position: 'absolute', left: 1240, top: 640}}><AnswerBox at={energy + 10}><span><span style={{color: ORANGE.ink}}>K ∝ V</span>, <span style={{color: TEAL.ink}}>v ∝ √V</span></span></AnswerBox></Row>
			<Chip x={1240} y={736} at={cap(id, energy + 20)} size={30} border={TEAL.stroke} color={TEAL.ink}>the puzzle: × 1.41, not × 2</Chip>
		</>
	);
};

// ---------- 7. same voltage, different particles ----------
const LANES = [180, 500];
export const S07: React.FC = () => {
	const id = 'particle-compare';
	const f = useCurrentFrame();
	const now = cue(id, 'Now send a proton'), same = cue(id, 'It has the same size of charge'), but = cue(id, "But it's about eighteen hundred"), nine = cue(id, 'nine point seven nine'), forty = cue(id, 'Forty-three is the square root'), sameE = cue(id, 'Same energy, different');
	const runE = ((f % 50) / 50) * 900;
	const runP = Math.max(0, f - now) * (900 / 50 / RATIO ** 0.5);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{LANES.map((y0, i) => {
				const isP = i === 1;
				const sup: SupplyAt = {x: 120, y: y0 + 140, w: 260};
				const gy0 = y0 + 70, anode = 300 + 34 + 70 + 13;
				const px = anode + 20 + (isP ? Math.min(runP, 900) : runE);
				const show = isP ? prog(f, now, 14) : 1;
				return (
					<div key={i} style={{opacity: show}}>
						<FrameSvg>
							<rect x={96} y={y0} width={1728} height={300} rx={16} fill={CARD} stroke="rgba(60,45,20,0.18)" strokeWidth={2.5} />
							<GunRig x={300} y={gy0} sup={sup} reading="" h={100} gap={70} />
							<line x1={anode + 14} y1={gy0} x2={1340} y2={gy0} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 8" />
							<Particle cx={px} cy={gy0} sign={isP ? '+' : '−'} r={isP ? 22 : 16} />
							<rect x={1400} y={y0 + 40} width={300 * prog(f, isP ? same : -30, 30)} height={34} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
						</FrameSvg>
						<Lbl x={640} y={y0 + 40} color={INK} size={32}>{isP ? 'proton' : 'electron'}</Lbl>
						<Lbl x={317} y={y0 + 6} color={GREY.ink} size={26} anchor="middle">0 V</Lbl>
						<Lbl x={anode + 40} y={y0 + 6} color={GREY.ink} size={26}>+5000 V</Lbl>
						<Lbl x={1400} y={y0 + 110} at={isP ? same : -30} color={ORANGE.ink} size={30}>K = 5000 eV</Lbl>
						<Lbl x={1400} y={y0 + 190} at={isP ? nine : -30} color={TEAL.ink} size={40}>v = {sci(isP ? GUN.vp : GUN.v)} m s⁻¹</Lbl>
					</div>
				);
			})}
			<HandTag x={1560} y={492} text="same |q|, same K" at={same + 30} size={30} color={ORANGE.ink} anchor="middle" />
			<HandTag x={560} y={760} text="heavier: slower" at={but + 20} size={32} color={TEAL.ink} marks={[{kind: 'arrow', from: [680, 740], to: [740, 600], bend: 0.2}]} markAt={but + 24} />
			<Chip x={1100} y={460} at={nine + 20} size={32} border={TEAL.stroke} color={TEAL.ink}>÷ {Math.round(GUN.ratio)}</Chip>
			<Row at={forty} size={44} style={{position: 'absolute', left: 96, top: 830}}><AnswerBox at={forty + 12}><span style={{color: TEAL.ink}}>v ∝ 1/√m: √{Math.round(RATIO)} ≈ {Math.round(Math.sqrt(RATIO))}</span></AnswerBox></Row>
			<CrossedChip x={900} y={834} at={cap(id, sameE - 30)} crossAt={cap(id, sameE)} size={30} caption="same |q| and V: same K">heavier gains more energy</CrossedChip>
		</>
	);
};

// ---------- 8 and 9: last time's path ----------
const M8: Map = {x0: 200, y0: 560, k: 14000};
const G8 = platesFor(M8, V02_MAIN.L, V02_MAIN.d);
const PathStage: React.FC<{m: Map; slideAt?: number}> = ({m, slideAt = 1e9}) => {
	const f = useCurrentFrame();
	const g = platesFor(m, V02_MAIN.L, V02_MAIN.d);
	const s = prog(f, slideAt, 50);
	const eqY = g.yTop + (g.yBot - g.yTop) * 0.25;
	return (
		<g>
			<FieldLines g={g} step={120} width={3} />
			<Equipotentials g={g} n={5} />
			<PlatePair g={g} />
			<Trail m={m} path={V02_RUN} t={V02_MAIN.t} width={5} />
			<Strobes m={m} path={V02_RUN} T={V02_MAIN.t} n={4} t={V02_MAIN.t} />
			<RunDot m={m} path={V02_RUN} t={V02_MAIN.t} r={16} />
			{f >= slideAt ? <g opacity={prog(f, slideAt, 10)}><Particle cx={g.x1 + 60 + s * (g.x2 - g.x1 - 160)} cy={eqY} sign="+" r={14} /></g> : null}
		</g>
	);
};
export const S08: React.FC = () => {
	const id = 'qed-limits';
	const f = useCurrentFrame();
	const when = cue(id, 'So when can you use'), only = cue(id, 'Only for the distance'), go = cue(id, "Go back to last video's"), travelled = cue(id, 'It travelled five centimetres'), pushed = cue(id, 'the way the force pushed'), side = cue(id, 'Sideways motion is at right'), lines = cue(id, 'Lines parallel to the plates'), noWork = cue(id, 'so moving along them'), work = cue(id, 'The work is q E times');
	const [ex, ey] = toPx(M8, V02_MAIN.L, V02_MAIN.y);
	const eqY = G8.yTop + (G8.yBot - G8.yTop) * 0.25;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, go - 10, 14)}><PathStage m={M8} slideAt={noWork} /></g>
				<Bracket x1={G8.x1} y1={G8.yBot + 80} x2={G8.x2} y2={G8.yBot + 80} color={TEAL.stroke} at={travelled} label="5.0 cm along the plates (no work)" size={30} ly={G8.yBot + 114} />
				<Bracket x1={ex + 40} y1={M8.y0} x2={ex + 40} y2={ey} color={NAVY.stroke} at={pushed} />
				{f >= pushed ? <VecArrow x={(G8.x1 + G8.x2) / 2} y={M8.y0 - 30} dx={0} dy={-90} color={AMBER.stroke} width={7} head={20} at={pushed} label="F" lx={(G8.x1 + G8.x2) / 2 + 14} ly={M8.y0 - 100} size={32} labelColor={AMBER.ink} /> : null}
				<line x1={G8.x1 - 10} y1={M8.y0} x2={ex + 60} y2={M8.y0} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="8 7" opacity={prog(f, pushed, 12)} />
			</FrameSvg>
			<Lbl x={ex + 56} y={(M8.y0 + ey) / 2 + 8} at={pushed + 10} color={NAVY.ink} size={28}>4.9 mm along the force</Lbl>
			<Lbl x={G8.x1} y={G8.yTop - 70} at={go} color={INK} size={28}>last time's electron (E down, force up)</Lbl>
			<Lbl x={G8.x2 - 40} y={eqY - 26} at={noWork + 50} color={GREY.ink} size={28} anchor="end">W = 0</Lbl>
			<HandTag x={G8.x1 + 30} y={G8.yBot + 170} text="⊥ force: no work" at={side + 10} size={30} color={TEAL.ink} />
			<HandTag x={ex + 70} y={ey - 60} text="with the push" at={pushed + 30} size={30} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 1080, top: 190, display: 'flex', flexDirection: 'column', gap: 12, width: 744}}>
				<Row at={when} ageAt={work} size={36} oldSize={30} style={{whiteSpace: 'normal'}}>q E d: only the distance <span style={{color: NAVY.ink}}>parallel to the field</span>, uniform field</Row>
				<Row at={side} ageAt={work} size={34} oldSize={30} style={{whiteSpace: 'normal'}}><span style={{color: TEAL.ink}}>sideways: at right angles to the force, no work</span></Row>
				<Row at={lines} ageAt={work} size={34} oldSize={30} style={{whiteSpace: 'normal'}}><span style={{color: GREY.ink}}>equipotential: the same potential all along, so no work along it</span></Row>
			</div>
			<Row at={work} size={40} style={{position: 'absolute', left: 1080, top: 560, width: 744, whiteSpace: 'normal'}}><AnswerBox at={work + 20}><span>W = |q|E × 4.89 mm = {sci(LOOP.W)} J ≈ {Math.round(LOOP.WeV)} eV</span></AnswerBox></Row>
			<Lbl x={1080} y={720} at={work + 30} color={GREY.ink} size={28}>displacement along the force: positive work</Lbl>
			<CrossedChip x={1080} y={770} at={work + 40} crossAt={cap(id, work + 70)} size={30} caption="path length is not displacement along E">qE × 5.0 cm = {nV(LOOP.wrongeV)} eV</CrossedChip>
			<Lbl x={G8.x1} y={G8.yTop - 110} at={only} color={INK_SOFT} size={26}>grey dashed: equipotentials</Lbl>
			<Ring cx={G8.x2 - 200} cy={eqY} rx={240} ry={30} at={lines + 10} color={GREY.stroke} />
		</>
	);
};
const M9: Map = {x0: 150, y0: 370, k: 11000};
const RX = 520;
export const S09: React.FC = () => {
	const id = 'initial-energy';
	const f = useCurrentFrame();
	const didnt = cue(id, "And that electron didn't"), went = cue(id, 'It went in with about'), came = cue(id, 'So it came out'), three = cue(id, 'which is three point oh six'), exactly = cue(id, "That's exactly what"), against = cue(id, 'If the field pushes against'), hundred = cue(id, 'A hundred electronvolt electron'), less = cue(id, 'and if it has less');
	const SCALE = 0.11, base = 560, bx = 790;
	const k0 = LOOP.K0eV * SCALE * prog(f, went, 20), w = LOOP.WeV * SCALE * prog(f, came, 20);
	const runA = RET_A, runB = RET_B;
	const tA = Math.max(0, f - hundred), tB = Math.max(0, f - (less - 30));
	const sA = stateAt(runA, Math.min(tA, runA.duration)), sB = stateAt(runB, Math.min(tB, runB.duration));
	const retO = prog(f, against - 10, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PathStage m={M9} />
				{/* the stacked ledger: K0 then the work */}
				<line x1={bx - 20} y1={base} x2={bx + 120} y2={base} stroke={INK} strokeWidth={4} opacity={prog(f, went - 10, 10)} />
				{k0 > 0 ? <rect x={bx} y={base - k0} width={100} height={k0} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} /> : null}
				{w > 0 ? <rect x={bx} y={base - k0 - w} width={100} height={w} fill={VIOLET.soft} stroke={VIOLET.stroke} strokeWidth={3} /> : null}
				{/* the retarding region */}
				<g opacity={retO}>
					<rect x={96} y={650} width={1728} height={290} rx={16} fill={CARD} stroke="rgba(60,45,20,0.18)" strokeWidth={2.5} />
					<line x1={RX} y1={680} x2={RX} y2={910} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
					<line x1={RX + RET_W} y1={680} x2={RX + RET_W} y2={910} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
					{[720, 800, 880].map(y => <VecArrow key={y} x={RX + 40} y={y} dx={RET_W - 80} dy={0} color={BLUE.stroke} width={4} head={16} />)}
					{f >= hundred ? <Particle cx={RX + sA.x} cy={760} sign="−" r={16} /> : null}
					{f >= less - 30 ? <Particle cx={RX + sB.x} cy={860} sign="−" r={16} /> : null}
				</g>
			</FrameSvg>
			<Lbl x={bx + 110} y={base - k0 / 2} at={went} color={ORANGE.ink} size={30}>K₀ = {nV(LOOP.K0eV)} eV</Lbl>
			<Lbl x={bx + 110} y={base - k0 - 30} at={came} color={VIOLET.ink} size={30}>+ W = {Math.round(LOOP.WeV)} eV</Lbl>
			<HandTag x={bx - 10} y={base - k0 - 80} text="start + work" at={came + 20} size={30} color={ORANGE.ink} anchor="end" />
			<div style={{position: 'absolute', left: 1200, top: 186, display: 'flex', flexDirection: 'column', gap: 10, width: 624}}>
				<Row at={didnt} ageAt={came} size={34} oldSize={30}>it started with K₀ = {nV(LOOP.K0eV)} eV</Row>
				<Row at={came} size={40}>K = <AnswerBox at={came + 30}><span style={{color: ORANGE.ink}}>{nV(LOOP.KeV)} eV</span></AnswerBox></Row>
				<Row at={three} size={40}>v = √(2K/m) = <AnswerBox at={three + 20}><span style={{color: TEAL.ink}}>{sci(LOOP.v)} m s⁻¹</span></AnswerBox></Row>
				<Row at={exactly} size={32}><span style={{color: TEAL.ink}}>last time, from components: {sci(V02_MAIN.v)} m s⁻¹</span></Row>
			</div>
			<HandTag x={1500} y={520} text="same answer, two ways" at={exactly + 16} size={30} color={TEAL.ink} />
			<CrossedChip x={1200} y={560} at={exactly + 10} out={against} crossAt={exactly + 34} size={28} caption="it did not start from rest">K = 98 eV (as if from rest)</CrossedChip>
			<Lbl x={RX - 20} y={680} at={against} color={INK} size={28} anchor="end">0 V</Lbl>
			<Lbl x={RX + RET_W + 20} y={680} at={against} color={INK} size={28}>−60 V</Lbl>
			<Lbl x={RX + RET_W / 2} y={940} at={against} color={BLUE.ink} size={26} anchor="middle">E: the force on an electron points back</Lbl>
			<Lbl x={140} y={768} at={hundred} color={ORANGE.ink} size={30}>100 eV in</Lbl>
			<Lbl x={140} y={868} at={less - 30} color={ORANGE.ink} size={30}>50 eV in</Lbl>
			<Row at={hundred + 60} size={36} style={{position: 'absolute', left: 1000, top: 730}}><AnswerBox at={hundred + 80}><span>100 eV in, 60 V against: 40 eV out</span></AnswerBox></Row>
			<HandTag x={1000} y={860} text="K₀ < |q|V: turns back" at={cap(id, less + 10)} size={32} color={ORANGE.ink} />
			<Lbl x={M9.x0} y={M9.y0 + 170} at={-30} color={INK_SOFT} size={26}>last time's path</Lbl>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const remember = cue(id, 'To remember it'), speed = cue(id, 'and speed goes with root'), only = cue(id, 'And only the potential difference');
	return (
		<div style={{position: 'absolute', left: 200, top: 170, width: 1520, opacity: prog(f, remember - 10, 12)}}>
			<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '26px 44px 34px'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, lineHeight: 1.1}}><span style={{color: ORANGE.ink}}>Energy ∝ V.</span> <span style={{color: TEAL.ink, opacity: prog(f, speed, 12)}}>Speed ∝ √V.</span></div>
				<div style={{display: 'flex', gap: 40, marginTop: 14, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>
					<span>from rest: <span style={{color: ORANGE.ink}}>K = |q|V</span></span>
					<span style={{color: TEAL.ink}}>v = √(2|q|V/m)</span>
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: 18, opacity: prog(f, only, 14)}}>
					<svg width={560} height={230}>
						<line x1={30} y1={30} x2={530} y2={30} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="12 8" />
						<line x1={30} y1={200} x2={530} y2={200} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="12 8" />
						<path d="M90,30 L90,200" stroke={TEAL.stroke} strokeWidth={5} fill="none" />
						<path d="M300,30 C420,80 220,150 380,200" stroke={TEAL.stroke} strokeWidth={5} fill="none" />
						<T x={110} y={125} size={30} color={ORANGE.ink}>W = qV</T>
						<T x={400} y={125} size={30} color={ORANGE.ink}>W = qV</T>
					</svg>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK}}>not the gap,<br />not the path</div>
				</div>
			</div>
		</div>
	);
};
