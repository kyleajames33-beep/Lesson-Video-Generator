// Scenes 7 to 12: why it got through lead (a coded slab of lead atoms: a proton ionising and stopping, a neutron
// slipping through to strike a nucleus; the reaction balanced), the recoil rule (the live target-mass slider on the
// collisions engine beside the supplied rule and its two checks), two targets cancel the unknown speed, solve for the
// mass (with the ± 10% range on a mass line), the nucleus adds up (gold completed with neutrons) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {VCELL} from '../../physics/light/plates';
import {STEEL_BALL} from '../../physics/light/frames';
import {GOLD_RING} from '../../physics/atom/elements';
import {NucEq, Tally} from '../../physics/atom/nuclear';
import {Readout} from '../../physics/atom/universe';
import {Arrow} from '../../physics/light/em';
import {LEAD, WAX, headOnAt, headOnRun} from '../../physics/atom/neutron';
import {lazy} from '../../sims';
import {BARS, GN} from '../phys-y12-m8-v08/s3';
import {AU_A, AU_N, AU_Z, HEAD, HEAD_SIZE, MN_FROM_R2, MN_HI, MN_LO, MN_MP, MN_SITE, R2, SLIDER_M, cap, cue, recoil} from './common';
import {AMBER, GREY, Givens, INK, Lbl, N, NAVY, NEUTRON, NUC_RED, P, PURPLE, RED, Strip, TEAL, fx} from './parts';

const Frac: React.FC<{top: React.ReactNode; bot: React.ReactNode}> = ({top, bot}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 0.15em'}}>
		<span style={{padding: '0 0.15em'}}>{top}</span>
		<span style={{alignSelf: 'stretch', borderTop: `3px solid ${INK}`, margin: '2px 0'}} />
		<span style={{padding: '0 0.15em'}}>{bot}</span>
	</span>
);
const Cut: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => (
	<span style={{position: 'relative', display: 'inline-block'}}>{children}{on > 0 ? <span style={{position: 'absolute', left: -4, right: -4, top: '52%', height: 4, background: TEAL.stroke, transform: `scaleX(${on})`, transformOrigin: 'left'}} /> : null}</span>
);

// ---------- 7. why it got through lead ----------
const SL = {x: 480, y: 196, w: 1340, h: 400, cols: 15, rows: 4};
const atomPos = (i: number, j: number) => [SL.x + 60 + i * 88, SL.y + 70 + j * 88] as const;
export const S07: React.FC = () => {
	const id = 'through-lead';
	const f = useCurrentFrame();
	const ce = cue(id, 'A charged particle tugs on electrons'), lf = cue(id, 'losing energy fast'), nf = cue(id, 'A neutron feels no electric force'), sn = cue(id, 'strikes a nucleus'), rb = cue(id, 'And the reaction balances'), on = cap(id, cue(id, 'plus one neutron'));
	const pU = prog(f, ce, Math.max(30, lf + 20 - ce));
	const pX = SL.x - 40 + 470 * pU;
	const nU = prog(f, nf, Math.max(30, sn - nf));
	const hitI = 13, [hx, hy] = atomPos(hitI, 3);
	const nX = SL.x - 40 + (hx - 30 - SL.x + 40) * nU;
	const rec = prog(f, sn, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LEAD} p={{x: 96, y: 210, w: 320}} />
				<rect x={SL.x} y={SL.y} width={SL.w} height={SL.h} rx={16} fill="#eceae6" stroke={GREY.stroke} strokeWidth={3} />
				{Array.from({length: SL.cols}, (_, i) => Array.from({length: SL.rows}, (_, j) => {
					const [x, y] = atomPos(i, j);
					const ion = j === 1 && x < pX - 10 && f >= ce;
					const ion2 = j === 3 && i === hitI + 1 && rec > 0.5;
					return <g key={`${i}-${j}`}>
						<circle cx={x} cy={y} r={30} fill="#d9d6d0" stroke="#9a958c" strokeWidth={2} />
						<circle cx={x} cy={y} r={7} fill={NUC_RED} />
						{!ion && !ion2 ? <circle cx={x + 22} cy={y - 18} r={6} fill={NAVY.stroke} /> : null}
						{ion || ion2 ? <g><text x={x - 22} y={y - 12} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: RED.ink}}>+</text><circle cx={x + 22 + 20} cy={y - 18 - 30} r={6} fill={NAVY.stroke} /></g> : null}
					</g>;
				}))}
				{f >= ce ? <g><line x1={SL.x - 40} y1={atomPos(0, 1)[1] + 44} x2={pX} y2={atomPos(0, 1)[1] + 44} stroke={RED.stroke} strokeWidth={5} /><P x={pX} y={atomPos(0, 1)[1] + 44} r={18} /></g> : null}
				{f >= nf ? <g><line x1={SL.x - 40} y1={hy} x2={nX} y2={hy} stroke={NEUTRON} strokeWidth={5} strokeDasharray="12 8" /><N x={nX} y={hy} r={18} /></g> : null}
				{rec > 0 ? <g><line x1={hx} y1={hy} x2={hx + 70 * rec} y2={hy} stroke={RED.stroke} strokeWidth={4} /><circle cx={hx + 70 * rec} cy={hy} r={9} fill={NUC_RED} stroke={INK} strokeWidth={2} /></g> : null}
			</FrameSvg>
			<Lbl x={96} y={440} at={0} color={GREY.ink} size={26}>lead, from outside</Lbl>
			<Lbl x={96} y={490} at={0} color={GREY.ink} size={26}>inside (coded atoms)</Lbl>
			<HandTag x={0} y={0} at={8} color={GREY.stroke} marks={[{kind: 'arrow', from: [300, 470], to: [SL.x - 10, 470], bend: 0}]} />
			<Lbl x={SL.x + 20} y={SL.y + SL.h + 40} at={ce + 30} color={RED.ink} size={28}>charged: ionises, stops quickly</Lbl>
			<HandTag x={pX + 40} y={atomPos(0, 1)[1] + 44} text="charged: stops fast" at={lf + 10} size={32} color={RED.ink} />
			<Lbl x={SL.x + 620} y={SL.y + SL.h + 40} at={sn} color={GREY.ink} size={28}>neutral: no direct ionisation, penetrates</Lbl>
			<HandTag x={1360} y={SL.y + SL.h + 90} text="seen only through what it hits" at={sn + 30} size={30} color={GREY.ink} />
			<div style={{position: 'absolute', left: 96, top: 700, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={rb} size={48}>{f >= on ? <AnswerBox at={on + 8}><NucEq size={48} terms={[{A: 4, Z: 2, s: 'He'}, '+', {A: 9, Z: 4, s: 'Be'}, '→', {A: 12, Z: 6, s: 'C'}, '+', {A: 1, Z: 0, s: 'n'}]} /></AnswerBox> : <NucEq size={48} terms={[{A: 4, Z: 2, s: 'He'}, '+', {A: 9, Z: 4, s: 'Be'}, '→', {A: 12, Z: 6, s: 'C'}, '+', {A: 1, Z: 0, s: 'n'}]} />}</Row>
			</div>
			<div style={{position: 'absolute', left: 900, top: 720, display: 'flex', flexDirection: 'column', gap: 8, opacity: prog(f, on, 12)}}>
				<Tally label="A" sum="4 + 9 = 12 + 1" tickAt={on + 4} size={36} />
				<Tally label="Z" sum="2 + 4 = 6 + 0" tickAt={on + 10} size={36} />
			</div>
		</>
	);
};

// ---------- 8. the recoil rule (live target-mass slider) ----------
const TK = {x: 96, y: 300, w: 820, h: 250};
const SLD = {x: 160, y: 640, w: 700};
const sldX = (M: number) => SLD.x + (Math.log10(M) / Math.log10(197)) * SLD.w;
const RUNS = lazy(() => SLIDER_M.map(M => headOnRun(1, M, 3.2, 8)));
const two = (v: number) => (v < 0.05 ? fx(v, 3) : fx(v, 2));
export const S08: React.FC = () => {
	const id = 'recoil-rule';
	const f = useCurrentFrame();
	const cm = cue(id, 'conservation of momentum and kinetic energy'), sp = cue(id, "times the neutron's speed"), ck = cue(id, 'Check it'), ow = cue(id, "the recoil speed is the neutron's own speed"), vh = cue(id, 'If the target is very heavy'), mv = cap(id, cue(id, 'it hardly moves'));
	const step = 20, v0 = Math.min(vh - 6, mv - 2 * step);
	const marks = [0, ow, v0, v0 + step, v0 + 2 * step];
	const k = f < v0 ? 0 : Math.min(3, 1 + Math.floor((f - v0) / step));
	const M = SLIDER_M[k];
	const t0 = k === 0 ? (f >= ow ? ow : 20) : marks[k + 1];
	const run = RUNS()[k];
	const a = headOnAt(run, Math.max(0, (f - t0) / 9), TK.x + 80, 110);
	const r = recoil(M);
	const tr = 26 + 10 * Math.log10(M);
	const knob = k === 0 ? sldX(1) : sldX(SLIDER_M[k - 1]) + (sldX(M) - sldX(SLIDER_M[k - 1])) * prog(f, marks[k + 1], 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={TK.x} y={TK.y} width={TK.w} height={TK.h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<line x1={TK.x + 30} y1={TK.y + 170} x2={TK.x + TK.w - 30} y2={TK.y + 170} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
				<N x={Math.max(TK.x + 30, a.x1)} y={TK.y + 140} r={26} />
				<circle cx={Math.min(TK.x + TK.w - tr - 10, a.x2)} cy={TK.y + 170 - tr} r={tr} fill={PURPLE.soft} stroke={PURPLE.stroke} strokeWidth={4} />
				{a.hit && a.x2 < TK.x + TK.w - 60 ? <Arrow from={[a.x2 + tr + 6, TK.y + 70]} to={[a.x2 + tr + 6 + 120 * a.v2, TK.y + 70]} color={TEAL.stroke} width={6} head={14} /> : null}
				<line x1={SLD.x} y1={SLD.y} x2={SLD.x + SLD.w} y2={SLD.y} stroke={PURPLE.stroke} strokeWidth={6} strokeLinecap="round" />
				{SLIDER_M.map(m => <line key={m} x1={sldX(m)} y1={SLD.y - 14} x2={sldX(m)} y2={SLD.y + 14} stroke={PURPLE.stroke} strokeWidth={3} />)}
				<circle cx={knob} cy={SLD.y} r={18} fill={PURPLE.stroke} stroke="#ffffff" strokeWidth={3} />
			</FrameSvg>
			<Lbl x={TK.x + 20} y={TK.y + 36} at={0} color={INK} size={26}>head-on, elastic: a neutron hits a target at rest</Lbl>
			<Lbl x={SLD.x} y={SLD.y - 40} at={0} color={PURPLE.ink} size={28}>target mass (× mₙ)</Lbl>
			{SLIDER_M.map(m => <Lbl key={m} x={sldX(m)} y={SLD.y + 46} at={0} color={PURPLE.ink} size={26} anchor="middle">{String(m)}</Lbl>)}
			<Readout x={96} y={720} label="recoil speed ÷ neutron speed" value={two(r.speedRatio)} color={TEAL.ink} w={400} />
			<Readout x={516} y={720} label="share of energy handed over" value={two(r.energyShare)} color={AMBER.ink} w={400} />
			<Strip x={980} y={190} at={0} size={34}>{"Find the neutron's mass mₙ"}</Strip>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, ck - 20, 14)}}><FrameSvg><LPlate spec={WAX} p={{x: 1010, y: 610, w: 150}} /><LPlate spec={VCELL} p={{x: 1260, y: 680, w: 420}} /></FrameSvg></div>
			<Lbl x={980} y={590} at={0} out={ck - 20} color={INK} size={28}>{"Chadwick's two targets: paraffin (protons) and nitrogen gas"}</Lbl>
			<Chip x={980} y={280} at={cm} size={28} color={INK}>momentum conserved</Chip>
			<Chip x={1330} y={280} at={cm + 8} size={28} color={INK}>kinetic energy conserved (elastic)</Chip>
			<div style={{position: 'absolute', left: 980, top: 360}}><Row at={sp - 6} size={48}><AnswerBox at={sp}>v<sub>recoil</sub> = 2mₙv / (mₙ + m)</AnswerBox></Row></div>
			<HandTag x={980} y={470} text="from both conservation laws; exams supply this" at={sp + 16} size={30} color={INK} />
			<Lbl x={980} y={520} at={sp + 20} color={INK} size={28}>{"v: neutron's speed (unknown); m: target's mass"}</Lbl>
			<Lbl x={980} y={600} at={ck} color={INK} size={28}>Check 1: equal masses</Lbl>
			<div style={{position: 'absolute', left: 980, top: 630}}><Row at={ow} size={40}>m = mₙ → v<sub>recoil</sub> = 2mₙv / (2mₙ) = v ✓</Row></div>
			<HandTag x={1560} y={600} text="equal masses: all of it" at={ow + 20} out={vh} size={30} color={PURPLE.ink} />
			<Lbl x={980} y={760} at={vh} color={INK} size={28}>Check 2: a very heavy target</Lbl>
			<div style={{position: 'absolute', left: 980, top: 790}}><Row at={mv} size={40}>m ≫ mₙ → v<sub>recoil</sub> ≈ 0 ✓</Row></div>
			<HandTag x={0} y={0} at={v0 + step + 4} color={PURPLE.stroke} marks={[{kind: 'circle', cx: sldX(14), cy: SLD.y + 44, rx: 30, ry: 26}]} />
			<HandTag x={sldX(14) - 40} y={SLD.y + 96} text="nitrogen: 14" at={v0 + step + 8} size={30} color={PURPLE.ink} />
		</>
	);
};

// ---------- 9. two targets cancel the unknown speed ----------
export const S09: React.FC = () => {
	const id = 'two-targets';
	const f = useCurrentFrame();
	const uk = cue(id, "the neutron's speed is unknown too"), op = cue(id, 'write the rule once for protons'), on = cue(id, 'once for nitrogen nuclei'), dv = cue(id, 'Then divide'), cc = cue(id, 'The unknown speed cancels'), sx = cue(id, 'four point seven times ten to the six'), se = cap(id, cue(id, 'So seven point zero two equals'));
	const cut = prog(f, cc, 16);
	const s = 34;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={WAX} p={{x: 150, y: 300, w: 160}} />
				<LPlate spec={VCELL} p={{x: 96, y: 640, w: 330}} />
				{f >= op ? [0, 1].map(i => <Arrow key={i} from={[260, 420 + i * 60]} to={[360, 420 + i * 60]} color={TEAL.stroke} width={5} head={14} opacity={prog(f, op, 12)} />) : null}
				{f >= on ? <Arrow from={[300, 740]} to={[350, 740]} color={TEAL.stroke} width={5} head={12} opacity={prog(f, on, 12)} /> : null}
			</FrameSvg>
			<Lbl x={96} y={280} at={0} color={RED.ink} size={26}>protons (paraffin)</Lbl>
			<Lbl x={96} y={620} at={0} color={RED.ink} size={26}>nitrogen gas: m ≈ 14 mₚ</Lbl>
			<Strip x={480} y={186} at={0} size={34}>v<sub>recoil</sub> = 2mₙv / (mₙ + m)</Strip>
			<Givens x={1110} y={186} w={710} at={0} size={28} lines={['vₚ (max, head-on) = 3.3 × 10⁷ m s⁻¹', 'v_N (max, head-on) = 4.7 × 10⁶ m s⁻¹', 'm_N ≈ 14 mₚ;  unknowns: mₙ and v']} />
			<HandTag x={1110} y={380} text="same fastest neutrons for both" at={op} size={30} color={TEAL.ink} />
			<Lbl x={480} y={300} at={uk} color={INK} size={30}>{"v (neutron's speed) is unknown too"}</Lbl>
			<div style={{position: 'absolute', left: 480, top: 420, display: 'flex', flexDirection: 'column', gap: 16, ...{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: s, color: INK}}}>
				<Row at={op} ageAt={dv} size={40}>vₚ = 2mₙv / (mₙ + mₚ)</Row>
				<Row at={on} ageAt={dv} size={40}>v_N = 2mₙv / (mₙ + 14mₚ)</Row>
				<Row at={dv} ageAt={sx} size={44}>
					<span style={{display: 'inline-flex', alignItems: 'center', gap: 12}}>vₚ / v_N = <Frac top={<><Cut on={cut}>2mₙv</Cut> / (mₙ + mₚ)</>} bot={<><Cut on={cut}>2mₙv</Cut> / (mₙ + 14mₚ)</>} /></span>
				</Row>
				<Row at={sx - 10} ageAt={se + 30} size={48}>vₚ / v_N = (mₙ + 14mₚ) / (mₙ + mₚ)</Row>
				<Row at={se} size={48}><AnswerBox at={se + 20}>{`(3.3 × 10⁷) / (4.7 × 10⁶) = ${fx(R2, 2)} = (mₙ + 14mₚ) / (mₙ + mₚ)`}</AnswerBox></Row>
			</div>
			<HandTag x={1500} y={560} text="v cancels" at={cc + 10} size={34} color={TEAL.ink} />
			<CrossedChip x={1340} y={740} at={sx + 20} crossAt={sx + 40} size={26} caption="heavier target, slower recoil">vₚ / v_N = (mₙ + mₚ) / (mₙ + 14mₚ)</CrossedChip>
		</>
	);
};

// ---------- 10. solve for the mass ----------
const ML = {x: 1000, y: 820, w: 760, lo: 0.8, hi: 1.5};
const mlX = (v: number) => ML.x + ((v - ML.lo) / (ML.hi - ML.lo)) * ML.w;
export const S10: React.FC = () => {
	const id = 'solve-mass';
	const f = useCurrentFrame();
	const cs = cue(id, 'Cross-multiply and solve'), ms = cue(id, 'one point one six proton masses'), ce = cue(id, "Chadwick's own estimate was close"), dv = cue(id, "Today's data-sheet value"), hp = cap(id, cue(id, 'heavier than a proton'));
	const L1 = R2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={186} at={0} size={34}>{`${fx(R2, 2)} = (mₙ + 14mₚ) / (mₙ + mₚ)`}</Strip>
			<div style={{position: 'absolute', left: 96, top: 290, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={cs} ageAt={ms} size={48}>{`${fx(L1, 2)} mₙ + ${fx(L1, 2)} mₚ = mₙ + 14 mₚ`}</Row>
				<Row at={cs + 40} ageAt={ms} size={48}>{`${fx(L1 - 1, 2)} mₙ = ${fx(14 - L1, 2)} mₚ`}</Row>
				<Row at={ms} size={56}><AnswerBox at={ms + 6}>{`mₙ = ${fx(MN_FROM_R2, 2)} mₚ`}</AnswerBox></Row>
			</div>
			<Chip x={96} y={590} at={ms + 30} size={28} color={GREY.ink}>{`same as mₙ = (v_N m_N − vₚ mₚ) / (vₚ − v_N) = ${fx(MN_SITE, 2)} mₚ`}</Chip>
			<div style={{position: 'absolute', left: 96, top: 700}}><Row at={dv} size={40}><AnswerBox at={dv + 10}>{`data sheet: mₙ = 1.675 × 10⁻²⁷ kg, mₚ = 1.673 × 10⁻²⁷ kg → mₙ = ${fx(MN_MP, 3)} mₚ`}</AnswerBox></Row></div>
			<FrameSvg>
				<g>
					<line x1={ML.x} y1={ML.y} x2={ML.x + ML.w} y2={ML.y} stroke={INK} strokeWidth={4} />
					{[0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5].map(v => <g key={v}><line x1={mlX(v)} y1={ML.y - 10} x2={mlX(v)} y2={ML.y + 10} stroke={INK} strokeWidth={3} /><text x={mlX(v)} y={ML.y + 42} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{fx(v, 1)}</text></g>)}
					{f >= ms ? <circle cx={mlX(MN_FROM_R2)} cy={ML.y} r={13} fill={NEUTRON} stroke={INK} strokeWidth={2} /> : null}
					<N x={1240} y={330} r={70} /><P x={1560} y={330} r={70} />
				</g>
				{f >= ce ? <rect x={mlX(MN_LO)} y={ML.y - 34} width={(mlX(MN_HI) - mlX(MN_LO)) * prog(f, ce, 20)} height={16} rx={6} fill={GREY.soft} stroke={GREY.stroke} strokeWidth={3} /> : null}
				{f >= dv ? <g opacity={prog(f, dv, 12)}><line x1={mlX(MN_MP)} y1={ML.y - 60} x2={mlX(MN_MP)} y2={ML.y + 12} stroke={TEAL.stroke} strokeWidth={5} /><circle cx={mlX(MN_MP)} cy={ML.y} r={10} fill={TEAL.stroke} /></g> : null}
			</FrameSvg>
			<Lbl x={ML.x} y={ML.y - 140} at={0} color={INK} size={28}>neutron mass (in proton masses)</Lbl>
			<Lbl x={1400} y={450} at={0} color={INK} size={40} anchor="middle">{f < ms ? 'mₙ = ? × mₚ' : f < dv ? `mₙ ≈ ${fx(MN_FROM_R2, 2)} mₚ` : `mₙ = ${fx(MN_MP, 3)} mₚ`}</Lbl>
			<Lbl x={mlX(MN_FROM_R2) + 18} y={ML.y - 54} at={ms + 10} color={GREY.ink} size={26}>{`${fx(MN_FROM_R2, 2)} (two targets)`}</Lbl>
			<HandTag x={1000} y={600} text={`nitrogen speed ± about 10%: mₙ about ${fx(MN_LO, 1)} to ${fx(MN_HI, 1)} mₚ`} at={ce + 10} size={30} color={GREY.ink} />
			<Lbl x={mlX(MN_MP) - 12} y={ML.y - 80} at={dv + 10} color={TEAL.ink} size={26} anchor="end">{`today: ${fx(MN_MP, 3)}`}</Lbl>
			<HandTag x={1000} y={540} text="a tenth of a percent heavier" at={hp} size={34} color={INK} />
		</>
	);
};

// ---------- 11. the nucleus adds up ----------
const DISCS = Array.from({length: 64}, (_, i) => { const a = i * 2.39996, d = 24 * Math.sqrt(i + 0.5); return [Math.cos(a) * d, Math.sin(a) * d] as const; }).filter(([x, y]) => Math.hypot(x, y) < 196);
export const S11: React.FC = () => {
	const id = 'nucleus-adds-up';
	const f = useCurrentFrame();
	const hn = cue(id, 'a hundred and eighteen neutrons'), sv = cue(id, 'one hundred and ninety seven'), an = cue(id, 'The atomic number counts protons'), pn = cap(id, cue(id, 'and the mass number counts'));
	const red = BARS.w * (AU_Z / AU_A);
	const fill = prog(f, hn, 40);
	const isN = (i: number) => i % 5 === 1 || i % 5 === 3 || i % 5 === 4;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={GN.x} cy={GN.y} r={GN.r} fill="#f2b9ae" stroke={NUC_RED} strokeWidth={5} />
				{DISCS.map(([dx, dy], i) => isN(i) ? (i / DISCS.length < fill ? <circle key={i} cx={GN.x + dx} cy={GN.y + dy} r={12} fill={NEUTRON} stroke={INK} strokeWidth={1.5} /> : <circle key={i} cx={GN.x + dx} cy={GN.y + dy} r={11} fill="none" stroke={GREY.stroke} strokeWidth={2} strokeDasharray="5 4" />) : <circle key={i} cx={GN.x + dx} cy={GN.y + dy} r={12} fill={NUC_RED} stroke={INK} strokeWidth={1.5} />)}
				<P x={140} y={880} r={22} /><N x={330} y={880} r={22} />
				<rect x={BARS.x} y={BARS.yQ} width={BARS.w} height={BARS.h} rx={8} fill="none" stroke={INK} strokeWidth={2.5} />
				<rect x={BARS.x} y={BARS.yQ} width={red} height={BARS.h} rx={8} fill={RED.stroke} />
				<rect x={BARS.x} y={BARS.yM} width={BARS.w} height={BARS.h} rx={8} fill="none" stroke={INK} strokeWidth={2.5} />
				<rect x={BARS.x} y={BARS.yM} width={red} height={BARS.h} rx={8} fill={RED.stroke} />
				<rect x={BARS.x + red} y={BARS.yM} width={(BARS.w - red) * fill} height={BARS.h} rx={8} fill={NEUTRON} />
				{fill < 1 ? <rect x={BARS.x + red + (BARS.w - red) * fill} y={BARS.yM} width={(BARS.w - red) * (1 - fill)} height={BARS.h} rx={8} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="14 10" /> : null}
				<LPlate spec={GOLD_RING} p={{x: 1600, y: 186, w: 200}} />
			</FrameSvg>
			<Lbl x={GN.x} y={GN.y - GN.r - 30} at={0} color={RED.ink} size={30} anchor="middle">{`gold nucleus: +${AU_Z}e (enlarged)`}</Lbl>
			<Lbl x={BARS.x} y={BARS.yQ - 24} at={0} color={INK} size={30}>charge</Lbl>
			<Lbl x={BARS.x + red + 20} y={BARS.yQ + 42} at={0} color={RED.ink} size={30}>{`${AU_Z} protons → +${AU_Z}e ✓`}</Lbl>
			<Lbl x={BARS.x} y={BARS.yM - 24} at={0} color={INK} size={30}>mass</Lbl>
			<Lbl x={BARS.x + 16} y={BARS.yM + 42} at={0} color={'#ffffff'} size={28} bg={false}>{`${AU_Z} mₚ`}</Lbl>
			<Lbl x={BARS.x + red + 16} y={BARS.yM + 42} at={hn + 30} color={'#ffffff'} size={28} bg={false}>{`${AU_N} mₙ`}</Lbl>
			<Lbl x={BARS.x} y={BARS.yM + BARS.h + 44} at={hn + 30} color={INK} size={30}>{`${AU_Z} mₚ + ${AU_N} mₙ ≈ ${AU_A} mₚ`}</Lbl>
			<Lbl x={BARS.x} y={BARS.yM + BARS.h + 86} at={hn + 40} color={GREY.ink} size={26}>≈ because mₙ and mₚ are equal to about 0.1%</Lbl>
			<HandTag x={BARS.x + 760} y={BARS.yM + BARS.h + 50} text="gap filled" at={hn + 40} size={34} color={GREY.ink} marks={[{kind: 'circle', cx: BARS.x + red + (BARS.w - red) / 2, cy: BARS.yM + BARS.h / 2, rx: (BARS.w - red) / 2 + 20, ry: 46}]} />
			<div style={{position: 'absolute', left: BARS.x, top: 180, opacity: prog(f, sv, 14)}}><NucEq size={72} terms={[{A: AU_A, Z: AU_Z, s: 'Au'}]} /></div>
			<Lbl x={175} y={884} at={0} color={RED.ink} size={26}>proton</Lbl>
			<Lbl x={365} y={884} at={0} color={GREY.ink} size={26}>neutron</Lbl>
			<div style={{position: 'absolute', left: 560, top: 840, display: 'flex', gap: 28, alignItems: 'center', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32}}>
				<Row at={an} size={34}>{`Z = ${AU_Z}: protons`}</Row>
				<Row at={pn} size={34}>{`N = ${AU_N}: neutrons`}</Row>
				<Row at={pn + 6} size={44}><AnswerBox at={pn + 12}>{`A = Z + N = ${AU_A}`}</AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 12. a way to remember ----------
const EQB = lazy(() => headOnRun(1, 1, 3.2, 8));
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const ph = cue(id, 'A photon hitting a proton'), nh = cue(id, 'A neutron hitting a proton'), an = cap(id, cue(id, 'one billiard ball hitting another'));
	const roll = ((f - ph) % 70) / 70;
	const t = Math.max(0, ((f - nh) % 90) / 9);
	const b = headOnAt(EQB(), t, 1080, 110);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={200} width={800} height={380} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<circle cx={600} cy={420} r={110} fill="#3a3a44" stroke={INK} strokeWidth={3} />
				{f >= ph ? <circle cx={roll < 0.5 ? 160 + 660 * roll : 490 - 600 * (roll - 0.5)} cy={460} r={22} fill="#ffffff" stroke={INK} strokeWidth={2.5} /> : null}
				<rect x={1000} y={200} width={820} height={380} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<LPlate spec={STEEL_BALL} p={{x: b.x1 - 40, y: 400, w: 80}} />
				<LPlate spec={STEEL_BALL} p={{x: Math.min(1740, b.x2) - 40, y: 400, w: 80}} />
			</FrameSvg>
			<Lbl x={120} y={240} at={0} color={AMBER.ink} size={28}>photon on proton: ping-pong on bowling ball</Lbl>
			<Lbl x={1024} y={240} at={0} color={GREY.ink} size={28}>neutron on proton: billiard on billiard</Lbl>
			<HandTag x={120} y={540} text="photon: small share" at={ph + 10} size={34} color={AMBER.ink} />
			<HandTag x={1024} y={540} text="neutron: full hand-over" at={nh + 10} size={34} color={INK} />
			<HandTag x={96} y={700} text="Photon on proton: ping-pong on bowling ball." at={an} size={52} color={INK} />
			<HandTag x={96} y={800} text="Neutron on proton: billiard on billiard." at={an + 24} size={52} color={INK} />
		</>
	);
};
