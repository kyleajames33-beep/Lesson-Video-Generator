// Scenes 1 to 7: the hook (last time's alpha striking nitrogen replayed: the nucleus becomes oxygen-17 and a proton
// leaves; release or cost? would faster alphas release more?), what Rutherford saw (the coded 1919 chamber: alpha
// tracks stopping at their range, flashes on the screen beyond it, protons knocked out), the balanced equation built
// from disc groups, where Q comes from (the energy ledger: total energy conserved with rest energy counted), the sign
// of Q (two small ledgers), which masses (electrons pairing off across the arrow) and stage 1 of the working.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {MarkedHeading} from '../../physics/atom/headline';
import {BindingCurve, NucEq} from '../../physics/atom/nuclear';
import {Balance, NucleonCluster, panAt} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {CurveMark} from '../../physics/atom/binding';
import {Disc} from '../../physics/atom/neutron';
import {ArrowFlow, Ledger} from '../../physics/atom/qvalue';
import type {StackSeg} from '../../physics/atom/qvalue';
import {BCH, M8V16FinalFrame, N14} from '../phys-y12-m8-v16/s3';
import {CurveArrows} from '../phys-y12-m8-v16/s2';
import {HEAD, HEAD_SIZE, M, PO_Q, R_IN, R_OUT, U_MEV, cap, cue} from './common';
import {AMBER, Alpha, Chamber, GREY, Givens, HE, INK, L_HE, L_N14, L_O17, Lbl, N7, NAVY, NEUTRON, NUC_RED, O8, ORANGE, RED, ROSE, RUTH_EQ, Strip, T, TEAL, fx, u6, H1} from './parts';
import type {ChamberG} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const hsh = (n: number) => { const s = Math.sin(n * 91.345 + 7.1) * 43758.5453; return s - Math.floor(s); };

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const fa = cue(id, 'fired alpha particles into nitrogen'), bo = cue(id, 'became oxygen'), ge = cue(id, 'give out energy'), te = cue(id, 'take energy in'), fs = cue(id, 'faster alphas'), tr = cap(id, cue(id, 'an artificial transmutation'), 8);
	if (f < 1) return <M8V16FinalFrame />;
	const t = f < fa ? 1 : prog(f, fa, 36);
	const ax = f < fa ? 1340 : 1000 + 420 * t;
	const into = prog(f, bo, 18), pOut = prog(f, bo + 4, 40);
	const px = 1560 + 130 * pOut, py = 430 + 60 * pOut;
	const plus = pulseOf(f, ge, 30), minus = pulseOf(f, te, 30);
	return (
		<>
			<MarkedHeading text={HEAD} marks={['determines', 'energy released']} at={tr} size={HEAD_SIZE} />
			<Chip x={96} y={870} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: what determines the energy released in an artificial transmutation?</Chip>
			<FrameSvg>
				<BindingCurve b={BCH} size={26} ticksA={[4, 16, 56, 150, 238]} />
				<CurveArrows b={BCH} draw={1} />
				<CurveMark b={BCH} A={4} B={7.074} text="⁴He" color={AMBER.ink} size={28} dx={-34} dy={10} anchor="end" />
				<CurveMark b={BCH} A={14} B={7.476} text="¹⁴N" color={NAVY.ink} size={28} dx={0} dy={44} />
				<CurveMark b={BCH} A={17} B={7.751} text="¹⁷O" color={TEAL.ink} size={28} dx={10} dy={-24} anchor="start" />
				<NucleonCluster cx={1500} cy={420} r={22} discs={N14} pFill={NUC_RED} nFill={NEUTRON} opacity={1 - into} />
				<NucleonCluster cx={1500} cy={420} r={22} discs={L_O17} pFill={NUC_RED} nFill={NEUTRON} opacity={into} />
				{into < 1 ? <g opacity={1 - into}><line x1={f < fa ? 1040 : 1000} y1={420} x2={ax} y2={420} stroke={AMBER.stroke} strokeWidth={6} strokeDasharray="14 9" /><circle cx={ax} cy={420} r={22} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /><text x={ax} y={432} textAnchor="middle" style={T(30, AMBER.ink)}>α</text></g> : null}
				{pOut > 0.001 ? <g><line x1={1560} y1={430} x2={px} y2={py} stroke={RED.stroke} strokeWidth={4} strokeDasharray="10 8" /><Disc x={px} y={py} r={22} fill={NUC_RED} text="p" /><line x1={px + 28} y1={py + 12} x2={px + 100} y2={py + 44} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" /><path d={`M${px + 114},${py + 50} L${px + 88},${py + 52} L${px + 100},${py + 30} Z`} fill={TEAL.stroke} /></g> : null}
				<g>
					<rect x={1100} y={740} width={520} height={30} rx={6} fill={ORANGE.stroke} />
					<text x={1080} y={766} textAnchor="end" style={T(34 + 14 * minus, ORANGE.ink)}>−?</text>
					<text x={1640} y={766} style={T(34 + 14 * plus, ORANGE.ink)}>+?</text>
				</g>
				{f >= fs ? <g opacity={prog(f, fs, 12)}>
					<circle cx={1060} cy={505} r={20} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /><text x={1060} y={516} textAnchor="middle" style={T(28, AMBER.ink)}>α</text>
					<line x1={1088} y1={505} x2={1088 + 230 * prog(f, fs, 20)} y2={505} stroke={TEAL.stroke} strokeWidth={8} strokeLinecap="round" />
					<path d={`M${1100 + 230 * prog(f, fs, 20)},505 L${1080 + 230 * prog(f, fs, 20)},492 L${1080 + 230 * prog(f, fs, 20)},518 Z`} fill={TEAL.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={1040} y={300} at={-60} color={INK} size={34}>Rutherford, 1919</Lbl>
			<Lbl x={1500} y={560} at={-60} out={bo} color={NAVY.ink} size={28} anchor="middle">nitrogen-14 (7 p, 7 n)</Lbl>
			<Lbl x={1500} y={560} at={bo + 10} color={NAVY.ink} size={28} anchor="middle">oxygen-17 (8 p, 9 n)</Lbl>
			<Lbl x={1690} y={440} at={bo + 30} color={RED.ink} size={28} anchor="middle">proton</Lbl>
			<div style={{position: 'absolute', left: 1040, top: 610}}><NucEq terms={RUTH_EQ} size={46} /></div>
			<Chip x={1600} y={200} at={-60} size={34} color={INK} border={INK}>Q = ?</Chip>
			<HandTag x={1040} y={248} text="more KE in → more out?" at={fs + 16} size={36} color={TEAL.ink} marks={[{kind: 'circle', cx: 1200, cy: 505, rx: 175, ry: 44}]} />
		</>
	);
};

// ---------- 2. what Rutherford saw ----------
const CH: ChamberG = {x: 150, y: 330, w: 1300, h: 300, range: 700, screen: 1400};
const SRC: [number, number] = [CH.x + 86, CH.y + CH.h / 2];
const TRACK_DEG = [-14, -9, -4, 0, 4, 9, 14];
export const S02: React.FC = () => {
	const id = 'rutherford-observation';
	const f = useCurrentFrame();
	const ot = cue(id, 'only travelled a few centimetres'), zs = cue(id, 'a zinc sulfide screen'), sf = cue(id, 'still showed tiny flashes'), kn = cue(id, 'knocked out of the nitrogen nuclei'), hn = cap(id, cue(id, 'hydrogen nuclei'), 24);
	const draw = prog(f, ot, 30);
	const flashes = f >= sf ? Array.from({length: 6}, (_, k) => { const slot = Math.floor((f - sf) / 9) - k; if (slot < 0) return null; const age = f - sf - slot * 9; return age < 12 ? <circle key={`${slot}`} cx={CH.screen + 9} cy={CH.y + 50 + hsh(slot) * (CH.h - 100)} r={9 + 4 * Math.sin((age / 12) * Math.PI)} fill="#fff8c4" stroke="#e0b400" strokeWidth={3} opacity={Math.sin((age / 12) * Math.PI)} /> : null; }) : null;
	const pt = prog(f, kn, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><linearGradient id="v17fade" gradientUnits="userSpaceOnUse" x1={SRC[0]} y1={0} x2={CH.range} y2={0}><stop offset="0.6" stopColor={AMBER.stroke} stopOpacity={1} /><stop offset="1" stopColor={AMBER.stroke} stopOpacity={0.05} /></linearGradient></defs>
				<Chamber g={CH} />
				{TRACK_DEG.map((d, i) => { const a = (d * Math.PI) / 180, L = (CH.range - SRC[0]) / Math.cos(a) * (0.94 + 0.05 * hsh(i)); const e = Math.min(1, draw * 1.2 - i * 0.03); return e > 0 ? <line key={i} x1={SRC[0]} y1={SRC[1]} x2={SRC[0] + L * Math.cos(a) * e} y2={SRC[1] + L * Math.sin(a) * e} stroke="url(#v17fade)" strokeWidth={5} strokeLinecap="round" /> : null; })}
				{pt > 0.001 ? <line x1={640} y1={470} x2={640 + (CH.screen - 640) * pt} y2={470 - 40 * pt} stroke={RED.stroke} strokeWidth={5} /> : null}
				{flashes}
				{f >= kn ? <g opacity={prog(f, kn, 14)}>
					<rect x={150} y={690} width={760} height={190} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Alpha x={240 + 160 * Math.min(1, pt * 1.6)} y={785} r={20} />
					<NucleonCluster cx={480} cy={785} r={12} discs={L_N14} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					{pt > 0.6 ? <g><Disc x={560 + 200 * (pt - 0.6) / 0.4} y={760} r={16} fill={NUC_RED} text="p" /><line x1={590 + 200 * (pt - 0.6) / 0.4} y1={760} x2={700 + 200 * (pt - 0.6) / 0.4} y2={760} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" /></g> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={150} y={262} at={-30} color={INK} size={34}>Rutherford, 1919 (schematic, not to scale)</Lbl>
			<Lbl x={CH.x + 58} y={CH.y + CH.h + 40} at={-30} color={INK} size={28} anchor="middle">source</Lbl>
			<Lbl x={CH.x + 120} y={CH.y + 44} at={-30} color={GREY.ink} size={28}>nitrogen gas</Lbl>
			<Lbl x={CH.range} y={CH.y - 18} at={-30} color={AMBER.ink} size={28} anchor="middle">alpha range</Lbl>
			<Lbl x={CH.screen + 9} y={CH.y - 18} at={zs} color={INK} size={28} anchor="middle">zinc sulfide screen</Lbl>
			<Lbl x={CH.x + CH.w + 80} y={CH.y + CH.h + 40} at={-30} color={GREY.ink} size={26} anchor="middle">eyepiece tube</Lbl>
			<Lbl x={CH.range} y={CH.y + CH.h + 40} at={ot + 20} color={AMBER.ink} size={30} anchor="middle">≈ 7 cm in air</Lbl>
			<Lbl x={1320} y={CH.y + 50} at={sf + 20} color={GREY.ink} size={28} anchor="end">scintillations</Lbl>
			<HandTag x={1000} y={690} text="beyond the alpha range!" at={sf + 24} size={38} color={AMBER.ink} marks={[{kind: 'circle', cx: CH.screen + 9, cy: CH.y + CH.h / 2, rx: 56, ry: 150}]} />
			<Lbl x={530} y={724} at={kn + 10} color={INK} size={28} anchor="middle">α hits ¹⁴N: a proton leaves fast</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 770}}><Row at={hn} size={44}><AnswerBox at={hn + 4}>¹₁H: protons</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={hn + 10} color={RED.ink} marks={[{kind: 'arrow', from: [760, 520], to: [1330, 470], bend: -0.12}]} />
		</>
	);
};

// ---------- 3. balance the equation ----------
const GROUPS = [{x: 330, l: L_HE}, {x: 690, l: L_N14}, {x: 1150, l: L_O17}, {x: 1470, l: null}] as const;
export const S03: React.FC = () => {
	const id = 'balance-equation';
	const f = useCurrentFrame();
	const hf = cue(id, 'Helium four plus nitrogen fourteen'), ff = cue(id, 'four plus fourteen is eighteen'), so = cue(id, 'seventeen plus one is eighteen'), tp = cue(id, 'two plus seven is nine'), eo = cue(id, 'eight plus one is nine'), bc = cap(id, cue(id, 'both conserved'), 24);
	const framed = prog(f, bc, 12);
	const span = (at: number, txt: string, color: string) => <span style={{opacity: prog(f, at, 12), color}}>{txt}</span>;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{GROUPS.map((g, i) => (g.l ? <NucleonCluster key={i} cx={g.x} cy={320} r={18} discs={g.l} pFill={NUC_RED} nFill={NEUTRON} /> : <Disc key={i} x={g.x} y={320} r={20} fill={NUC_RED} text="p" />))}
				<text x={510} y={334} textAnchor="middle" style={T(48, INK)}>+</text>
				<text x={920} y={334} textAnchor="middle" style={T(48, INK)}>→</text>
				<text x={1330} y={334} textAnchor="middle" style={T(48, INK)}>+</text>
			</FrameSvg>
			<div style={{position: 'absolute', left: 960, top: 420, transform: 'translateX(-50%)', opacity: prog(f, hf, 14), padding: '4px 22px', background: '#fffdf8', border: `4.5px solid ${framed > 0 ? INK : 'transparent'}`, borderRadius: 14}}><NucEq terms={RUTH_EQ} size={64} /></div>
			<div style={{position: 'absolute', left: 420, top: 580, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 48, color: INK, whiteSpace: 'nowrap'}}>{span(ff, 'top (A): 4 + 14 = 18', INK)}{span(so, '   |   17 + 1 = 18 ✓', INK)}</div>
			<div style={{position: 'absolute', left: 420, top: 670, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 48, color: RED.ink, whiteSpace: 'nowrap'}}>{span(tp, 'bottom (Z): 2 + 7 = 9', RED.ink)}{span(eo, '   |   8 + 1 = 9 ✓', RED.ink)}</div>
			<Chip x={420} y={790} at={bc + 6} size={32} color={INK}>A and Z conserved (an earlier video)</Chip>
			<HandTag x={1480} y={610} text="top 18 = 18" at={bc + 12} size={38} color={INK} marks={[{kind: 'underline', x1: 420, x2: 1400, y: 648}]} />
			<HandTag x={1480} y={700} text="bottom 9 = 9" at={bc + 20} size={38} color={RED.ink} marks={[{kind: 'underline', x1: 420, x2: 1360, y: 738}]} />
		</>
	);
};

// ---------- 4. where Q comes from ----------
const REST = {fill: '#e7e1d6', stroke: INK};
const KIN = {fill: TEAL.soft, stroke: TEAL.stroke};
const seg = (h: number, kind: 'rest' | 'kin', label?: string, extra: Partial<StackSeg> = {}): StackSeg => ({h, ...(kind === 'rest' ? REST : KIN), label, labelColor: kind === 'rest' ? INK : TEAL.ink, brk: kind === 'rest', ...extra});
export const S04: React.FC = () => {
	const id = 'q-from-energy';
	const f = useCurrentFrame();
	const tc = cue(id, 'Total energy is conserved'), rm = cue(id, 'rest mass counts as energy too'), dr = cue(id, 'any drop in rest mass'), qv = cue(id, 'is the Q value'), sq = cap(id, cue(id, 'mass of the products, times c squared'), 30);
	const drop = 60 * prog(f, dr, 30);
	const L = {x: 130, base: 860, w: 150, gap: 100};
	const ax = L.x + 2 * L.w + L.gap;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Ledger x={L.x} base={L.base} w={L.w} gap={L.gap} totals={prog(f, tc, 14)} before={[seg(400, 'rest'), seg(90, 'kin')]} after={[seg(400 - drop, 'rest'), seg(90 + drop, 'kin')]} />
			</FrameSvg>
			<Lbl x={L.x} y={L.base + 92} at={-30} color={GREY.ink} size={26}>rest bars not to scale</Lbl>
			<Lbl x={ax + 20} y={395} at={-30} color={TEAL.ink} size={28}>kinetic energy</Lbl>
			<Lbl x={ax + 20} y={700} at={-30} color={INK} size={28}>rest energy (mc²)</Lbl>
			<Lbl x={L.x - 10} y={335} at={tc + 10} color={INK} size={30}>total before = total after</Lbl>
			<Chip x={760} y={190} at={rm} size={32} color={INK}>rest energy = mc² (from earlier)</Chip>
			<HandTag x={ax + 30} y={600} text="mass drop → KE" at={dr + 30} size={38} color={TEAL.ink} marks={[{kind: 'brace', x: ax + 8, y1: L.base - 400, y2: L.base - 340, facing: 'right'}]} />
			<Lbl x={ax + 50} y={505} at={dr + 30} color={TEAL.ink} size={28}>extra KE</Lbl>
			<div style={{position: 'absolute', left: 880, top: 290, display: 'flex', flexDirection: 'column', gap: 22, width: 940}}>
				<Row at={qv} ageAt={sq} size={40}>K<sub>in</sub> + m<sub>reactants</sub>c² = K<sub>out</sub> + m<sub>products</sub>c²</Row>
				<Row at={qv + 40} ageAt={sq} size={40}>K<sub>out</sub> − K<sub>in</sub> = (m<sub>reactants</sub> − m<sub>products</sub>)c² = Q</Row>
				<Row at={sq} size={56}><AnswerBox at={sq + 4}><span>Q = (m<sub>reactants</sub> − m<sub>products</sub>)c²</span></AnswerBox></Row>
				<Row at={sq + 16} size={44}>{`Q (MeV) = Δm (u) × ${U_MEV}`}</Row>
			</div>
			<HandTag x={1330} y={820} text="before − after" at={sq + 24} size={40} color={ORANGE.ink} />
		</>
	);
};

// ---------- 5. the sign of Q ----------
export const S05: React.FC = () => {
	const id = 'sign-of-q';
	const f = useCurrentFrame();
	const qp = cue(id, 'Q is positive'), es = cue(id, 'Every spontaneous decay'), fp = cue(id, 'five point four one'), qn = cue(id, 'Q is negative'), be = cap(id, cue(id, 'brings enough energy'), 24);
	const p = prog(f, qp, 30), n = prog(f, qn, 30);
	const Lp = {x: 150, base: 740, w: 120, gap: 70}, Ln = {x: 1000, base: 740, w: 120, gap: 70};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Ledger x={Lp.x} base={Lp.base} w={Lp.w} gap={Lp.gap} size={28} before={[seg(300, 'rest'), seg(60, 'kin')]} after={[seg(300 - 60 * p, 'rest'), seg(60 + 60 * p, 'kin')]} totals={1} />
				<Ledger x={Ln.x} base={Ln.base} w={Ln.w} gap={Ln.gap} size={28} before={[seg(240, 'rest'), seg(120, 'kin')]} after={[seg(240 + 60 * n, 'rest'), seg(120 - 60 * n, 'kin')]} totals={1} />
				<ArrowFlow x={Lp.x + 2 * Lp.w + Lp.gap + 20} y={Lp.base - 330} len={150 * p} color={ORANGE.stroke} deg={-20} />
				<ArrowFlow x={Ln.x + 2 * Ln.w + Ln.gap + 170} y={Ln.base - 300} len={150 * n} color={ORANGE.stroke} deg={180} />
				{f >= be ? <ArrowFlow x={Ln.x - 190} y={Ln.base - 300} len={150 * prog(f, be, 16)} color={TEAL.stroke} /> : null}
			</FrameSvg>
			<Lbl x={Lp.x} y={Lp.base + 92} at={qp + 10} color={ORANGE.ink} size={32}>Q &gt; 0: energy out (exothermic)</Lbl>
			<Lbl x={Ln.x} y={Ln.base + 92} at={qn + 10} color={ORANGE.ink} size={32}>Q &lt; 0: energy in (endothermic)</Lbl>
			<Lbl x={Lp.x + 2 * Lp.w + Lp.gap + 40} y={Lp.base - 420} at={qp + 20} color={ORANGE.ink} size={30}>products lighter</Lbl>
			<Lbl x={Ln.x + 2 * Ln.w + Ln.gap + 30} y={Ln.base - 420} at={qn + 20} color={ORANGE.ink} size={30}>products heavier</Lbl>
			<Chip x={96} y={190} at={es} size={32} color={INK}>spontaneous decay: always Q &gt; 0</Chip>
			<div style={{position: 'absolute', left: 640, top: 190, opacity: prog(f, fp, 14), display: 'flex', alignItems: 'center', gap: 18, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: INK}}>
				<NucEq terms={[{A: 210, Z: 84, s: 'Po'}, '→', {A: 206, Z: 82, s: 'Pb'}, '+', HE]} size={40} /><span>{`: Q = +${fx(PO_Q, 2)} MeV (an earlier video)`}</span>
			</div>
			<HandTag x={Ln.x - 60} y={Ln.base + 150} text="projectile must supply it" at={be + 14} size={36} color={TEAL.ink} marks={[{kind: 'circle', cx: Ln.x - 115, cy: Ln.base - 300, rx: 100, ry: 40}]} />
		</>
	);
};

// ---------- 6. which masses ----------
const TERMS6 = [{x: 300, t: HE, e: 2, l: L_HE}, {x: 470, t: '+'}, {x: 640, t: N7, e: 7, l: L_N14}, {x: 815, t: '→'}, {x: 990, t: O8, e: 8, l: L_O17}, {x: 1160, t: '+'}, {x: 1320, t: H1, e: 1, l: null}] as const;
const ATOM_Y = 470, RING = 64;
/** Electron positions on a ring round atom centre cx (n electrons, spread from the top). */
const elecOf = (cx: number, n: number) => Array.from({length: n}, (_, i) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [cx + RING * Math.cos(a), ATOM_Y + RING * Math.sin(a)] as const; });
export const S06: React.FC = () => {
	const id = 'which-masses';
	const f = useCurrentFrame();
	const ie = cue(id, 'include the electrons'), za = cue(id, 'the total atomic number is the same'), ne = cue(id, 'nine electrons on each side'), cn = cap(id, cue(id, 'so they cancel'), 24);
	const left = [...elecOf(300, 2), ...elecOf(640, 7)], right = [...elecOf(990, 8), ...elecOf(1320, 1)];
	const pair = prog(f, cn, 30), show = prog(f, ie, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{TERMS6.map((t, i) => <div key={i} style={{position: 'absolute', left: t.x, top: 236, transform: 'translateX(-50%)'}}>{typeof t.t === 'string' ? <span style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 60, color: INK}}>{t.t}</span> : <NucEq terms={[t.t]} size={60} />}</div>)}
			<FrameSvg>
				{TERMS6.map((t, i) => ('e' in t ? <g key={i}>
					{t.l ? <NucleonCluster cx={t.x} cy={ATOM_Y} r={7} discs={t.l} pFill={NUC_RED} nFill={NEUTRON} letters={false} /> : <Disc x={t.x} y={ATOM_Y} r={9} fill={NUC_RED} />}
					<circle cx={t.x} cy={ATOM_Y} r={RING} fill="none" stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="7 6" opacity={show} />
				</g> : null))}
				<g opacity={show}>
					{[...left, ...right].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={10} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={2} opacity={1 - 0.6 * pair} />)}
				</g>
				{pair > 0.001 ? left.map(([x, y], i) => <path key={i} d={`M${x},${y} Q${(x + right[i][0]) / 2},${560 + i * 4} ${right[i][0]},${right[i][1]}`} fill="none" stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 5" opacity={pair} />) : null}
			</FrameSvg>
			<Lbl x={1440} y={420} at={ie + 10} color={NAVY.ink} size={30}>atomic mass =</Lbl>
			<Lbl x={1440} y={462} at={ie + 14} color={NAVY.ink} size={30}>nucleus + electrons</Lbl>
			<Lbl x={470} y={380} at={ne} color={NAVY.ink} size={36} anchor="middle">9 e⁻</Lbl>
			<Lbl x={1160} y={380} at={ne + 8} color={NAVY.ink} size={36} anchor="middle">9 e⁻</Lbl>
			<div style={{position: 'absolute', left: 96, top: 620, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, color: RED.ink, opacity: prog(f, za, 12), textShadow: prog(f, za, 12) > 0 ? `0 0 ${18 * Math.max(0, 1 - prog(f, za + 30, 30))}px #f2c14e` : undefined}}>Z: 2 + 7 = 9 = 8 + 1</div>
			<div style={{position: 'absolute', left: 96, top: 710}}><Row at={cn + 8} size={44}><AnswerBox at={cn + 12}>Z conserved → electrons cancel → atomic masses OK</AnswerBox></Row></div>
			<Chip x={96} y={830} at={cn + 20} size={30} color={GREY.ink}>last time: a nucleus alone → use ¹H atoms for the protons</Chip>
			<HandTag x={700} y={650} text="9 = 9" at={cn + 16} size={44} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1330, top: 560, width: 490, background: '#fffdf8', border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '10px 20px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, color: INK, lineHeight: 1.45}}><div style={{color: NAVY.ink}}>atomic masses (table)</div><div>⁴He {u6(M.he)} u</div><div>¹⁴N {u6(M.n14)} u</div><div>¹⁷O {u6(M.o17)} u</div><div>¹H {u6(M.h1)} u</div></div>
		</>
	);
};

// ---------- 7 and 8. the working ----------
export const WorkHead: React.FC = () => (
	<>
		<Strip x={96} y={190} at={-30} size={32}>Find Q for Rutherford&apos;s reaction</Strip>
		<Strip x={96} y={260} at={-30} size={32}>Q = (m<sub>reactants</sub> − m<sub>products</sub>)c², 1 u = {U_MEV} MeV/c²</Strip>
		<Givens x={96} y={340} w={1180} at={-30} size={32} lines={[<>reactants: ⁴He {u6(M.he)} u, ¹⁴N {u6(M.n14)} u</>, <>products: ¹⁷O {u6(M.o17)} u, ¹H {u6(M.h1)} u (atomic masses)</>]} />
	</>
);
export const BAL17: BalanceG = {cx: 1560, cy: 400, arm: 220, drop: 130};
export const RBalance: React.FC<{deg: number; glow?: number}> = ({deg, glow = 0}) => {
	const [pl, pr] = panAt(BAL17, deg);
	return (
		<g>
			<Balance g={BAL17} deg={deg} panW={200} size={26} label="mass comparison (diagram)" />
			{glow > 0.001 ? <ellipse cx={pr[0]} cy={pr[1] - 20} rx={120} ry={56} fill="#f2c14e" opacity={0.45 * glow} /> : null}
			<NucleonCluster cx={pl[0] - 50} cy={pl[1] - 26} r={9} discs={L_HE} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
			<NucleonCluster cx={pl[0] + 30} cy={pl[1] - 34} r={9} discs={L_N14} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
			<NucleonCluster cx={pr[0] - 24} cy={pr[1] - 36} r={9} discs={L_O17} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
			<Disc x={pr[0] + 62} y={pr[1] - 22} r={10} fill={NUC_RED} />
			<text x={pl[0]} y={pl[1] + 52} textAnchor="middle" style={T(26, INK)}>reactants</text>
			<text x={pr[0]} y={pr[1] + 52} textAnchor="middle" style={T(26, INK)}>products</text>
		</g>
	);
};
export const S07: React.FC = () => {
	const id = 'rutherford-masses';
	const f = useCurrentFrame();
	const hm = cue(id, 'Here are the atomic masses'), r1 = cue(id, 'a total of eighteen point zero zero five six seven seven'), r2 = cap(id, cue(id, 'a total of eighteen point zero zero six nine five seven'), 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<WorkHead />
			<FrameSvg><RBalance deg={4 * prog(f, r2 + 10, 30)} glow={0} /></FrameSvg>
			<Lbl x={1460} y={250} at={r2 + 30} color={GREY.ink} size={26}>tilt exaggerated</Lbl>
			<HandTag x={1290} y={420} text="atomic masses" at={hm + 10} size={32} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 520, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={r1} size={48}>m<sub>reactants</sub> = {u6(M.he)} + {u6(M.n14)} = {u6(R_IN)} u</Row>
				<Row at={r2} size={48}>m<sub>products</sub> = {u6(M.o17)} + {u6(M.h1)} = {u6(R_OUT)} u</Row>
			</div>
			<Lbl x={96} y={760} at={r2 + 20} color={INK} size={30}>products: slightly more mass</Lbl>
		</>
	);
};
export {ROSE};
