// Scenes 1 to 6: the hook (last time's plum-pudding atom shrinks into a foil edge; the painted chamber; what should
// the alphas do?), the alpha particles and the apparatus (the painted chamber with its arm layer turned about its hub,
// the beam, a flash), Thomson's prediction (plum-pudding atoms with paths on the field motion engine, a bowling-ball
// inset, random nudges), the observations (the live detector arm with θ and relative count-rate readouts), why
// Thomson's atom can't do it, and concentrating the charge (Coulomb's 1/r² with a live distance readout).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {CHAMBER_AT, Chamber, armScreenAt, chamberAt} from '../../physics/atom/scattering';
import {HandoffBoard07, M8V07FinalFrame, PUD} from '../phys-y12-m8-v07/s3';
import {ALPHA_ME, ARM_ANGLES, CLOSER, E_DEFL_DEG, HEAD, HEAD_SIZE, ONE_IN, R_ATOM, R_SHOWN, STRONGER, V_ALPHA, cap, cue, relRate} from './common';
import {AMBER, Alpha, GREY, INK, Lbl, NAVY, NucPlus, PURPLE, PlumAtom, RED, RunPath, TEAL, fx, rRuns, sci, tRuns, zigzag} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const hash = (n: number) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
/** Whole-number counts with spaces ("240 000"). */
export const spaced = (v: number) => Math.round(v).toLocaleString('en-AU').replace(/,/g, ' ');
/** The readout for a relative rate: whole numbers above 10, one decimal below. */
export const rateText = (r: number) => (r >= 1000 ? `about ${spaced(Math.round(r / 1000) * 1000)}` : r >= 10 ? `${fx(r)}` : r > 1.05 ? fx(r, 1) : '1');

// ---------- 1. hook ----------
const CH1 = {x: 1390, y: 430, w: 400};
const FOIL = {x: 720, y: 540};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const ht = cue(id, "Here's Thomson's atom"), gm = cue(id, 'Hans Geiger and Ernest Marsden'), fg = cue(id, 'gold foil only a few hundred atoms thick'), pred = cue(id, 'prediction'), nu = cue(id, 'nudged by tiny angles'), bk = cue(id, 'a few bounced almost straight back'), nx = cap(id, cue(id, 'So why did scattering require'));
	if (f < 1) return <M8V07FinalFrame />;
	const shrink = prog(f, fg, 26), pl = pulseOf(f, ht, 40);
	const tickAt = Math.max(bk, pred + 92);
	const [cfx, cfy] = chamberAt(CH1, CHAMBER_AT.foil[0], CHAMBER_AT.foil[1]);
	const rev = prog(f, bk + 6, 40);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard07 f={0} final heading={false} chip={false} /></div>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - shrink}}><HandoffBoard07 f={0} final heading={false} chip={false} marks={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pl > 0 ? <circle cx={PUD.cx} cy={PUD.cy} r={PUD.r + 10 + 14 * pl} fill="none" stroke={AMBER.stroke} strokeWidth={5} /> : null}
				{shrink > 0.001 ? <g opacity={shrink}>
					{Array.from({length: 3 * 15}, (_, i) => <circle key={i} cx={FOIL.x - 30 + 30 * (i % 3)} cy={FOIL.y - 280 + 40 * Math.floor(i / 3)} r={15} fill="#e3c060" stroke={INK} strokeWidth={2} />)}
				</g> : null}
				<Chamber p={CH1} opacity={prog(f, fg + 10, 16)} />
				{f >= nu ? <g opacity={prog(f, nu, 14)}>{[-200, -100, 0, 100, 200].map((dy, i) => <line key={i} x1={200} y1={FOIL.y + dy} x2={1250} y2={FOIL.y + dy + (i - 2) * 6} stroke={AMBER.stroke} strokeWidth={3.5} opacity={0.9} />)}</g> : null}
				{f >= bk ? <g><path d={`M200,${FOIL.y + 50} L${FOIL.x - 40},${FOIL.y + 50} L${FOIL.x - 40 - 480 * rev},${FOIL.y + 50 + 140 * rev}`} fill="none" stroke={AMBER.stroke} strokeWidth={7} /><Alpha x={FOIL.x - 40 - 480 * rev} y={FOIL.y + 50 + 140 * rev} r={20} /></g> : null}
				<Countdown start={pred} end={pred + 90} x={1220} y={270} r={40} />
				{f >= tickAt ? <Mark x={1300} y={272} at={tickAt} kind="tick" color={INK} size={30} /> : null}
			</FrameSvg>
			<Lbl x={96} y={250} at={gm} color={INK} size={30}>Geiger and Marsden, 1909</Lbl>
			<Lbl x={96} y={292} at={gm + 10} color={INK} size={30}>with Rutherford</Lbl>
			<Lbl x={FOIL.x} y={FOIL.y + 340} at={fg + 10} color={INK} size={28} anchor="middle">gold foil ≈ 10⁻⁷ m: a few hundred atoms</Lbl>
			<HandTag x={0} y={0} at={fg + 30} color={INK} marks={[{kind: 'circle', cx: cfx, cy: cfy, rx: 34, ry: 46}]} />
			<Lbl x={CH1.x + CH1.w / 2} y={CH1.y + 400} at={fg + 10} color={INK} size={26} anchor="middle">the scattering chamber</Lbl>
			<Chip x={1320} y={190} at={pred} size={28} color={INK}>all pass, tiny deflections</Chip>
			<Chip x={1320} y={250} at={pred + 4} size={28} color={INK}>a few bounce back</Chip>
			<Chip x={1320} y={310} at={pred + 8} size={28} color={INK}>most are stopped</Chip>
			<Lbl x={1320} y={400} at={nu + 10} out={bk} color={GREY.ink} size={26}>{"first chip: Thomson's model"}</Lbl>
			<HandTag x={200} y={FOIL.y + 260} text="observed!" at={bk + 30} size={40} color={AMBER.ink} />
			<Chip x={96} y={870} at={-30} out={nx} size={30} w={1728} color={INK} border={INK}>Next: why did scattering require a tiny dense nucleus?</Chip>
		</>
	);
};

// ---------- 2. the alpha particles and the apparatus ----------
const CH2 = {x: 1010, y: 190, w: 740};
export const S02: React.FC = () => {
	const id = 'alpha-apparatus';
	const f = useCurrentFrame();
	const ap = cue(id, 'An alpha particle is a helium atom stripped'), pe = cue(id, 'a charge of plus two e'), se = cue(id, 'seventy three hundred times'), tw = cue(id, 'two times ten to the seven metres per second'), vc = cue(id, 'In a vacuum chamber'), nb = cue(id, 'a narrow beam of alphas hits the foil'), fl = cue(id, 'a tiny flash of light'), mi = cue(id, 'counted through a microscope'), an = cap(id, cue(id, 'at every angle'));
	const off = prog(f, ap + 20, 40);
	const th = kf(f, [[mi - 10, 0], [mi + 20, 45], [mi + 45, 90], [an, 150]]);
	const [hx, hy] = chamberAt(CH2, CHAMBER_AT.hub[0], CHAMBER_AT.hub[1]), [sx, sy] = chamberAt(CH2, CHAMBER_AT.slit[0], CHAMBER_AT.slit[1]), [fx0, fy0] = chamberAt(CH2, CHAMBER_AT.foil[0], CHAMBER_AT.foil[1]);
	const [scx, scy] = armScreenAt(CH2, th);
	const flash = f >= fl ? 0.5 + 0.5 * Math.sin((f - fl) / 3) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Alpha x={300} y={340} r={46} />
				{[0, 1].map(i => <circle key={i} cx={300 + (i ? 1 : -1) * (90 + 160 * off)} cy={340 - 40 * off} r={12} fill={NAVY.stroke} opacity={1 - 0.6 * off} />)}
				{f >= se ? <g opacity={prog(f, se, 12)}><rect x={120} y={560} width={720 * prog(f, se, 30)} height={36} rx={6} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /><rect x={120} y={620} width={3} height={36} fill={NAVY.stroke} /></g> : null}
				<Chamber p={CH2} theta={th} beam={prog(f, nb, 24)} flash={flash} />
				{f >= mi ? <g opacity={prog(f, mi, 12)}><path d={`M${hx + 120},${hy} A120,120 0 0 0 ${hx + 120 * Math.cos((150 * Math.PI) / 180)},${hy - 120 * Math.sin((150 * Math.PI) / 180)}`} fill="none" stroke={TEAL.stroke} strokeWidth={4} />{[0, 45, 90, 150].map(a => <text key={a} x={hx + 160 * Math.cos((a * Math.PI) / 180)} y={hy - 160 * Math.sin((a * Math.PI) / 180) + 10} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: TEAL.ink, paintOrder: 'stroke', stroke: '#fffdf8', strokeWidth: 6}}>{`${a}°`}</text>)}</g> : null}
			</FrameSvg>
			<HandTag x={380} y={260} text="the bullets" at={ap + 10} out={vc} size={34} color={AMBER.ink} />
			<Lbl x={300} y={450} at={ap} color={INK} size={28} anchor="middle">helium atom without its 2 electrons</Lbl>
			<Lbl x={120} y={520} at={pe} color={AMBER.ink} size={30}>charge +2e</Lbl>
			<Lbl x={120} y={700} at={se + 10} color={INK} size={28}>{`α ≈ ${fx(Math.round(ALPHA_ME / 100) * 100)} × mₑ (the speck below the bar: one electron)`}</Lbl>
			<Lbl x={120} y={780} at={tw} color={TEAL.ink} size={30}>{`v ≈ 2 × 10⁷ m s⁻¹ (7.7 MeV alpha: ${sci(V_ALPHA, 2)} m s⁻¹)`}</Lbl>
			<Lbl x={sx - 20} y={sy + 70} at={vc + 20} color={INK} size={26} anchor="end">lead block and source</Lbl>
			<Lbl x={sx + 10} y={sy - 40} at={vc + 26} color={INK} size={26}>slit</Lbl>
			<Lbl x={fx0} y={fy0 - 70} at={vc + 32} color={INK} size={26} anchor="middle">gold foil</Lbl>
			<Lbl x={scx} y={scy + 60} at={vc + 38} color={INK} size={26} anchor="middle">zinc sulfide screen</Lbl>
			<Lbl x={CH2.x + CH2.w - 10} y={CH2.y + 300} at={vc + 44} out={mi} color={INK} size={26} anchor="end">microscope</Lbl>
			<Lbl x={CH2.x} y={CH2.y + 710} at={vc} color={GREY.ink} size={26}>vacuum chamber (cutaway)</Lbl>
			<Chip x={120} y={860} at={fl} size={28} color={INK}>scintillation: one flash per alpha</Chip>
			<HandTag x={scx - 260} y={scy - 70} text="one flash = one alpha" at={fl + 20} out={mi} size={30} color={'#287347'} />
			<HandTag x={0} y={0} at={mi + 10} color={TEAL.stroke} marks={[{kind: 'arrow', from: [hx + 200, hy + 40], to: [hx - 80, hy - 220], bend: -0.35}]} />
		</>
	);
};

// ---------- 3. what Thomson's model predicts ----------
const TS = {x: 700, y: 520};
const ATOMS3 = [[-250, -240], [0, -240], [250, -240], [-250, 0], [0, 0], [250, 0], [-250, 240], [0, 240], [250, 240]] as const;
export const S03: React.FC = () => {
	const id = 'thomson-prediction';
	const f = useCurrentFrame();
	const sp = cue(id, 'spread thinly through the whole atom'), bb = cue(id, 'like a bowling ball hitting a ping-pong ball'), tf = cue(id, 'a tiny fraction of a degree'), rn = cue(id, 'random nudges partly cancel'), bk = cap(id, cue(id, 'almost nothing should ever come back'));
	const runs = tRuns();
	const u = prog(f, 10, 60), roll = prog(f, bb + 10, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{ATOMS3.map(([dx, dy], i) => <PlumAtom key={i} cx={TS.x + dx} cy={TS.y + dy} r={110} />)}
				{pulseOf(f, sp, 40) > 0 ? <circle cx={TS.x} cy={TS.y} r={120} fill="none" stroke={RED.stroke} strokeWidth={6} opacity={pulseOf(f, sp, 40)} /> : null}
				{runs.map((r, i) => <RunPath key={i} run={r} cx={TS.x} cy={TS.y} u={u} width={3.5} />)}
				{f >= sp + 20 ? <g opacity={prog(f, sp + 20, 12)}><Alpha x={TS.x - 120} y={TS.y - 120} r={16} /><line x1={TS.x - 120} y1={TS.y - 140} x2={TS.x - 120} y2={TS.y - 170} stroke={AMBER.stroke} strokeWidth={6} /></g> : null}
				{f >= bb ? <g opacity={prog(f, bb, 12)}>
					<rect x={1240} y={560} width={580} height={240} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<circle cx={1300 + 300 * roll} cy={690} r={56} fill="#3a3a44" stroke={INK} strokeWidth={3} />
					<circle cx={1560 + 200 * Math.max(0, roll - 0.45)} cy={690 - 160 * Math.max(0, roll - 0.45)} r={16} fill="#ffffff" stroke={INK} strokeWidth={2.5} />
				</g> : null}
				{f >= rn ? <path d={zigzag(TS.x - 420, TS.x + 420, TS.y + 120, 18, 22)} fill="none" stroke={GREY.stroke} strokeWidth={4} opacity={prog(f, rn, 14)} /> : null}
				{f >= bk ? <g opacity={prog(f, bk, 14)}>{[-3, -1.5, 0, 1.5, 3].map((d, i) => <line key={i} x1={TS.x + 420} y1={TS.y} x2={TS.x + 560} y2={TS.y + d * 12} stroke={AMBER.stroke} strokeWidth={4} />)}</g> : null}
			</FrameSvg>
			<Lbl x={TS.x - 380} y={TS.y + 400} at={0} color={GREY.ink} size={26}>{"Thomson's atoms in the foil (bends exaggerated)"}</Lbl>
			<Lbl x={1240} y={220} at={sp + 20} color={AMBER.ink} size={28}>spread charge → weak push</Lbl>
			<HandTag x={1240} y={530} text="electrons: too light" at={bb + 20} out={rn} size={30} color={PURPLE.ink} />
			<Lbl x={1240} y={850} at={bb + 20} color={INK} size={26}>{`α ≈ ${fx(Math.round(ALPHA_ME / 100) * 100)} × mₑ: bowling ball against ping-pong ball`}</Lbl>
			<Lbl x={1240} y={300} at={tf} color={TEAL.ink} size={30}>{`< 0.01° per atom (largest from one electron: ${fx(E_DEFL_DEG, 4)}°)`}</Lbl>
			<HandTag x={0} y={0} at={tf + 10} color={TEAL.stroke} marks={[{kind: 'circle', cx: TS.x + 160, cy: TS.y - 60, rx: 80, ry: 40}]} />
			<HandTag x={TS.x - 400} y={TS.y + 190} text="up, down, up" at={rn + 16} out={bk} size={32} color={GREY.ink} />
			<Chip x={1240} y={380} at={bk} size={30} color={INK}>Thomson: small deflections only</Chip>
			<Chip x={1240} y={460} at={bk + 6} size={28} color={INK}>θ &gt; 90°: vanishingly rare</Chip>
		</>
	);
};

// ---------- 4. what they actually saw ----------
export const CH4 = {x: 96, y: 200, w: 700};
export const S04: React.FC = () => {
	const id = 'observations';
	const f = useCurrentFrame();
	const so = cue(id, 'turned only slightly'), fe = cue(id, 'That fits either model'), vf = cue(id, 'a very few turned through large angles'), ot = cue(id, 'about one in twenty thousand'), bk = cue(id, 'some came almost straight back'), yo = cap(id, cue(id, 'come back and hit you'));
	const step = Math.max(14, (ot - vf) / 3);
	const th = f < so ? 0 : kf(f, [[so, 0], [so + 14, 5], [vf, 5], [vf + 14, 15], [vf + step, 15], [vf + step + 14, 45], [vf + 2 * step, 45], [vf + 2 * step + 14, 90], [bk, 90], [bk + 20, 150]]);
	const nearest = ARM_ANGLES.reduce((a, b) => (Math.abs(b - th) < Math.abs(a - th) ? b : a), 5 as number);
	const settled = Math.abs(th - nearest) < 0.5 && f >= so + 14;
	const rate = relRate(nearest);
	const p = Math.min(0.9, 0.06 + 0.16 * Math.log10(rate));
	const flash = settled && hash(Math.floor(f / 3)) < p ? 1 : 0;
	const rev = prog(f, bk + 20, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Chamber p={CH4} theta={th} beam={1} flash={flash} />
				{f >= bk + 10 ? <g opacity={prog(f, bk + 10, 12)}>
					<rect x={1400} y={600} width={420} height={110} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					{[0, 1, 2, 3].map(i => <circle key={i} cx={1660} cy={620 + 22 * i} r={8} fill="#e3c060" stroke={INK} strokeWidth={1.5} />)}
					<path d={`M1420,666 L1640,666 L${1640 - 200 * rev},${666 - 40 * rev}`} fill="none" stroke={AMBER.stroke} strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Readout x={900} y={190} label="θ" value={`${fx(th)}°`} color={TEAL.ink} w={300} />
			<Readout x={1240} y={190} label="relative count rate (1 at 150°)" value={f >= so + 14 ? rateText(rate) : '·'} color={INK} w={580} />
			<Lbl x={900} y={340} at={so + 14} color={GREY.ink} size={26}>illustrative rates for a point nucleus</Lbl>
			<Lbl x={900} y={390} at={so + 20} out={vf} color={INK} size={28}>most: straight or small angle</Lbl>
			<Chip x={900} y={420} at={fe} size={28} color={GREY.ink}>fits Thomson and Rutherford</Chip>
			<HandTag x={1350} y={530} text="rarer and rarer" at={vf + 20} out={bk} size={32} color={TEAL.ink} />
			<div style={{position: 'absolute', left: 900, top: 500}}><Row at={ot - 6} size={34}><AnswerBox at={ot}>{`thin gold: about 1 in ${spaced(ONE_IN)} near 90°`}</AnswerBox></Row></div>
			<CrossedChip x={900} y={590} at={bk} crossAt={bk + 16} size={28}>Thomson: θ &gt; 90° vanishingly rare</CrossedChip>
			<HandTag x={900} y={700} text="Thomson can't do this" at={bk + 30} size={32} color={RED.ink} />
			<div style={{position: 'absolute', left: 900, top: 740, width: 920, opacity: prog(f, yo, 14), background: '#fffdf8', borderLeft: `8px solid ${INK}`, borderRadius: 10, padding: '8px 18px', fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, color: INK}}>
				“almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.” (Rutherford)
			</div>
		</>
	);
};

// ---------- 5. why Thomson's atom can't do it ----------
const TS5 = {x: 480, y: 590};
export const S05: React.FC = () => {
	const id = 'thomson-fails';
	const f = useCurrentFrame();
	const hf = cue(id, 'a huge force in one close encounter'), ss = cue(id, "Spread-out charge can't supply it"), tl = cue(id, 'the electrons are too light'), an = cue(id, 'almost never add up to a full reversal'), en = cap(id, cue(id, 'anywhere near often enough'));
	const runs = rRuns();
	const grey = prog(f, en, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{[-250, 0, 250].map((dy, i) => <PlumAtom key={i} cx={TS5.x} cy={TS5.y + dy} r={105} grey={grey} />)}
				{f >= an ? <path d={zigzag(TS5.x - 380, TS5.x + 380, TS5.y + 130, 20, 20, 7)} fill="none" stroke={GREY.stroke} strokeWidth={4} opacity={prog(f, an, 14)} /> : null}
				<Chamber p={{x: 1560, y: 170, w: 260}} theta={150} />
				<RunPath run={runs[4]} cx={1300} cy={600} />
				<NucPlus x={1300} y={600} r={10} />
				{f >= hf ? <g opacity={prog(f, hf, 12)}><line x1={1280} y1={596} x2={1060} y2={596} stroke={AMBER.stroke} strokeWidth={12} /><path d="M0,0 L28,-18 L28,18 z" transform="translate(1040 596)" fill={AMBER.stroke} /></g> : null}
				{f >= ss ? <g opacity={prog(f, ss, 12)}><line x1={1280} y1={700} x2={1240} y2={700} stroke={AMBER.stroke} strokeWidth={7} /><path d="M0,0 L16,-10 L16,10 z" transform="translate(1228 700)" fill={AMBER.stroke} /></g> : null}
				{f >= tl ? <g opacity={prog(f, tl, 12)}><circle cx={1420} cy={800} r={30} fill="#3a3a44" /><circle cx={1480} cy={790} r={9} fill="#ffffff" stroke={INK} strokeWidth={2} /></g> : null}
				{f >= an ? <g opacity={prog(f, an + 10, 12)}><rect x={96} y={880} width={720} height={26} rx={6} fill="#fffdf8" stroke={INK} strokeWidth={2.5} /><rect x={96} y={880} width={8} height={26} fill={GREY.stroke} /></g> : null}
			</FrameSvg>
			<Lbl x={TS5.x + 140} y={TS5.y - 250} at={0} color={GREY.ink} size={26}>{"Thomson's atoms"}</Lbl>
			<Lbl x={1300} y={480} at={0} color={GREY.ink} size={26} anchor="middle">an alpha turned right around</Lbl>
			<HandTag x={1000} y={540} text="needed: one huge push" at={hf + 12} size={32} color={AMBER.ink} />
			<HandTag x={0} y={0} at={ss + 14} color={GREY.stroke} marks={[{kind: 'cross', cx: 1250, cy: 700, size: 44}]} />
			<Lbl x={1100} y={705} at={ss} color={INK} size={26} anchor="end">spread charge: weak</Lbl>
			<HandTag x={0} y={0} at={tl + 14} color={GREY.stroke} marks={[{kind: 'cross', cx: 1450, cy: 800, size: 50}]} />
			<Lbl x={1520} y={810} at={tl} color={INK} size={26}>electrons: too light</Lbl>
			<Lbl x={96} y={850} at={an + 10} color={INK} size={26}>total turn from many small nudges (a sliver of 180°)</Lbl>
			<HandTag x={0} y={0} at={an + 20} color={TEAL.stroke} marks={[{kind: 'brace', x: 100, y1: 878, y2: 908, facing: 'left'}]} />
			<Lbl x={TS5.x + 200} y={TS5.y + 400} at={an + 16} out={en} color={GREY.ink} size={26}>many small nudges: almost never a reversal</Lbl>
			<div style={{position: 'absolute', left: 980, top: 320}}><Row at={en - 6} size={40}><AnswerBox at={en}>{"Thomson's model: ruled out"}</AnswerBox></Row></div>
		</>
	);
};

// ---------- 6. concentrate the charge ----------
const CC6 = {x: 300, y: 320};
const RP = {x: 1500, y: 700};
export const S06: React.FC = () => {
	const id = 'concentrate-charge';
	const f = useCurrentFrame();
	const sq = cue(id, 'squeezed all the positive charge into a tiny centre'), cl = cue(id, "Remember Coulomb's law"), or = cue(id, 'grows as one over r squared'), ed = cue(id, "the strongest push is at the atom's edge"), ct = cue(id, 'about three times ten to the minus fourteen metres'), tc = cue(id, 'over three thousand times closer'), st = cap(id, cue(id, 'about ten million times stronger'));
	const col = prog(f, sq, 30);
	const lr = f < ct ? Math.log10(R_ATOM) : kf(f, [[ct, Math.log10(R_ATOM)], [tc, Math.log10(R_SHOWN)]]);
	const ratio = (R_ATOM / 10 ** lr) ** 2;
	const frac = (Math.log10(R_ATOM) - lr) / (Math.log10(R_ATOM) - Math.log10(R_SHOWN)), ax = RP.x - 360 + 300 * frac;
	const arrowL = Math.min(320, 30 * ratio ** 0.25);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PlumAtom cx={CC6.x} cy={CC6.y} r={130 * (1 - col) + 1} opacity={1 - col} />
				<NucPlus x={CC6.x} y={CC6.y} r={16} opacity={col} />
				{f >= or ? <g opacity={prog(f, or, 14)}>
					<line x1={600} y1={440} x2={1000} y2={440} stroke={INK} strokeWidth={3} /><line x1={600} y1={440} x2={600} y2={250} stroke={INK} strokeWidth={3} />
					<path d={Array.from({length: 40}, (_, i) => { const r = 0.25 + i * 0.1; return `${i ? 'L' : 'M'}${600 + r * 95},${440 - Math.min(180, 18 / (r * r))}`; }).join(' ')} fill="none" stroke={AMBER.stroke} strokeWidth={4} />
				</g> : null}
				{f >= cl ? <g opacity={prog(f, cl, 14)}>
					<PlumAtom cx={360} cy={700} r={150} />
					<Alpha x={360 - 150 - 22} y={700} r={20} />
					<line x1={360 - 150 - 46} y1={700} x2={360 - 150 - 86} y2={700} stroke={AMBER.stroke} strokeWidth={7} /><path d="M0,0 L16,-10 L16,10 z" transform={`translate(${360 - 150 - 100} 700)`} fill={AMBER.stroke} />
				</g> : null}
				{f >= cl ? <g opacity={prog(f, cl, 12)}>
					<NucPlus x={RP.x} y={RP.y} r={14} />
					<Alpha x={ax} y={RP.y} r={18} />
					<line x1={ax - 22} y1={RP.y} x2={ax - 22 - arrowL} y2={RP.y} stroke={AMBER.stroke} strokeWidth={9} strokeDasharray={arrowL >= 300 ? '40 14 999' : undefined} />
					<path d="M0,0 L18,-11 L18,11 z" transform={`translate(${ax - 36 - arrowL} ${RP.y})`} fill={AMBER.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={CC6.x} y={CC6.y + 170} at={sq + 20} color={RED.ink} size={26} anchor="middle">positive charge in a tiny centre (enlarged)</Lbl>
			<Chip x={600} y={170} at={cl} size={28} color={INK}>F = q₁q₂ / (4πε₀r²) (Year 11)</Chip>
			<Lbl x={1010} y={450} at={or} color={INK} size={26}>r</Lbl>
			<Lbl x={610} y={250} at={or} color={INK} size={26}>F</Lbl>
			<HandTag x={700} y={500} text="closer: much stronger" at={or + 16} size={32} color={NAVY.ink} />
			<Lbl x={360} y={890} at={ed} color={NAVY.ink} size={28} anchor="middle">{"Thomson's atom: r ≈ 10⁻¹⁰ m (strongest at the edge)"}</Lbl>
			<Lbl x={RP.x - 200} y={RP.y - 90} at={cl} out={ct} color={INK} size={26} anchor="middle">charge squeezed into a tiny core (enlarged)</Lbl>
			<Lbl x={RP.x - 200} y={RP.y + 70} at={ct} color={NAVY.ink} size={26} anchor="middle">r ≈ 3 × 10⁻¹⁴ m (7.7 MeV alpha, gold: closest approach)</Lbl>
			<Readout x={1300} y={810} label="push compared with at 10⁻¹⁰ m" value={f >= ct ? `× ${ratio >= 1e3 ? sci(ratio, 1) : fx(ratio)}` : '× 1'} color={AMBER.ink} w={520} size={40} opacity={prog(f, cl, 12)} />
			<div style={{position: 'absolute', left: 1080, top: 180, display: 'flex', flexDirection: 'column', gap: 10, width: 760}}>
				<Row at={tc - 6} ageAt={st} size={36}>{`10⁻¹⁰ / (3 × 10⁻¹⁴) ≈ ${sci(CLOSER, 1)} (over 3000)`}</Row>
				<Row at={st - 6} size={40}><AnswerBox at={st}>{`(${sci(CLOSER, 1)})² ≈ ${sci(STRONGER, 1)}`}</AnswerBox></Row>
				<Row at={st - 6} size={30}>about ten million times stronger</Row>
			</div>
			<CrossedChip x={1080} y={380} at={tc + 30} crossAt={tc + 46} out={st} size={26} caption="1/r²: square it">so about 3300 times stronger</CrossedChip>
			<HandTag x={0} y={0} at={st + 10} color={AMBER.stroke} marks={[{kind: 'circle', cx: RP.x - 250, cy: RP.y, rx: 220, ry: 40}]} />
		</>
	);
};
