// Scenes 8 to 13: stage 2 of the working (Δm negative, Q = −1.19 MeV, the balance's product pan glowing, the orange bar
// resolving to energy taken in), what that means for the alpha (the energy ledger with numbers: the minimum line, the
// momentum and repulsion reasons, Rutherford's 7.69 MeV alphas), Q does not care how fast (the ledger's live K_in
// slider: K_out follows, Q never moves), the same answer from binding energies (stacked binding bars), a reaction that
// releases energy (the painted polonium-beryllium source) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {NucEq} from '../../physics/atom/nuclear';
import {Balance, NucleonCluster, panAt} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {Disc, PO_BE} from '../../physics/atom/neutron';
import {LPlate} from '../../physics/light/plates';
import {ArrowFlow, Ledger, StackColumn} from '../../physics/atom/qvalue';
import type {StackSeg} from '../../physics/atom/qvalue';
import {MemoryCard} from '../../shared/scenes';
import {B_DM, B_IN, B_KOUT, B_OUT, B_Q, BE_DIFF, BE_HE, BE_IN, BE_N, BE_O, HEAD, HEAD_SIZE, K_OUT_RUTH, K_RUTH, K_STEPS, M, R_DM, R_IN, R_OUT, R_Q, R_SLIP, THRESH, U_MEV, cap, cue} from './common';
import {AMBER, Alpha, BE4, C6, GREY, HE, INK, RUTH_EQ as RUTH, L_N14, L_O17, Lbl, NAVY, NEU, NEUTRON, NUC_RED, ORANGE, ROSE, T, TEAL, fx, s6, sg, u6} from './parts';
import {RBalance, WorkHead} from './s1';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const REST = {fill: '#e7e1d6', stroke: INK};
const KIN = {fill: TEAL.soft, stroke: TEAL.stroke};

// ---------- 8. stage 2: Q is negative ----------
export const S08: React.FC = () => {
	const id = 'rutherford-q';
	const f = useCurrentFrame();
	const md = cue(id, 'minus zero point zero zero one two eight zero u'), ph = cue(id, 'The products are heavier'), mn = cue(id, 'minus one point one nine'), ab = cue(id, 'about one point two'), ke = cap(id, cue(id, "from the alpha's kinetic energy"), 24);
	const tick = Math.min(1, prog(f, mn, 24));
	const res = prog(f, ke, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<WorkHead />
			<FrameSvg>
				<RBalance deg={4} glow={prog(f, ph, 14)} />
				<rect x={1160} y={820} width={560} height={30} rx={6} fill={ORANGE.stroke} />
				<text x={1140} y={846} textAnchor="end" style={T(34, ORANGE.ink)}>−?</text>
				<text x={1740} y={846} style={T(34, f >= ke ? GREY.stroke : ORANGE.ink)} opacity={1 - 0.5 * res}>+?</text>
			</FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={-30} size={32} style={{color: GREY.ink}}>{`kept: m_reactants = ${u6(R_IN)} u, m_products = ${u6(R_OUT)} u`}</Row>
				<Row at={md} ageAt={mn} size={52}>{`Δm = ${u6(R_IN)} − ${u6(R_OUT)} = ${s6(R_DM)} u`}</Row>
				<Row at={mn} size={56}><AnswerBox at={mn + 4}>{`Q = ${s6(R_DM)} × ${U_MEV} = ${fx(R_Q * tick, 2)} MeV`}</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={mn + 40} crossAt={mn + 60} size={30} caption="× 931.5 for MeV">{`Q = ${fx(R_SLIP * 1, 5)} MeV`}</CrossedChip>
			<HandTag x={1290} y={262} text="products heavier" at={ph + 10} size={36} color={INK} marks={[{kind: 'arrow', from: [1560, 280], to: [1770, 500], bend: -0.2}]} />
			<Lbl x={1160} y={790} at={ke} color={ORANGE.ink} size={32}>{`${fx(R_Q, 2)} MeV: energy taken in`}</Lbl>
			<Lbl x={1160} y={900} at={ab} color={ORANGE.ink} size={28}>{`said: about ${fx(-R_Q, 1)} MeV`}</Lbl>
		</>
	);
};

// ---------- 9 and 10. the ledger with numbers ----------
const KPX = 40, RESTH = 220;
const LG = {x: 150, base: 880, w: 150, gap: 110};
const ledgerSegs = (kin: number, glow = 0): {before: StackSeg[]; after: StackSeg[]} => ({
	before: [{h: RESTH, ...REST, brk: true, label: 'rest', labelSide: 'in', glow}, {h: kin * KPX, ...KIN, label: kin * KPX > 40 ? 'K_in' : undefined, labelSide: 'in', labelColor: TEAL.ink}],
	after: [{h: RESTH, ...REST, brk: true, label: 'rest', labelSide: 'in', glow}, {h: -R_Q * KPX, fill: ORANGE.soft, stroke: ORANGE.stroke, dashed: true, glow}, {h: Math.max(0, kin + R_Q) * KPX, ...KIN, label: (kin + R_Q) * KPX > 40 ? 'K_out' : undefined, labelSide: 'in', labelColor: TEAL.ink}],
});
const LedgerBoard: React.FC<{kin: number; glow?: number; minLine?: number}> = ({kin, glow = 0, minLine = 0}) => {
	const s = ledgerSegs(kin, glow);
	const ax = LG.x + 2 * LG.w + LG.gap;
	return (
		<g>
			<Ledger x={LG.x} base={LG.base} w={LG.w} gap={LG.gap} before={s.before} after={s.after} totals={1} />
			{minLine > 0.001 ? <g opacity={minLine}><line x1={LG.x - 30} y1={LG.base - RESTH + R_Q * KPX} x2={LG.x + LG.w + 30} y2={LG.base - RESTH + R_Q * KPX} stroke={TEAL.ink} strokeWidth={4} strokeDasharray="10 7" /></g> : null}
			<text x={ax + 14} y={LG.base - RESTH + R_Q * KPX / 2 + 10} style={T(26, ORANGE.ink)}>{`+${fx(-R_Q, 2)} MeV of rest energy`}</text>
		</g>
	);
};
const MiniReaction: React.FC<{mom: number; rep: number}> = ({mom, rep}) => (
	<g>
		<rect x={880} y={210} width={940} height={330} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<Alpha x={1010} y={300} r={22} />
		<NucleonCluster cx={1230} cy={300} r={14} discs={L_N14} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		{rep > 0.001 ? <g opacity={rep}><line x1={1040} y1={300} x2={1040 - 70 * rep} y2={300} stroke={ROSE.stroke} strokeWidth={7} /><path d={`M${1024 - 70 * rep},300 l18,-12 l0,24 Z`} fill={ROSE.stroke} /></g> : null}
		<text x={1360} y={310} style={T(44, INK)}>→</text>
		<NucleonCluster cx={1530} cy={300} r={14} discs={L_O17} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<Disc x={1700} y={260} r={18} fill={NUC_RED} text="p" />
		{mom > 0.001 ? <g opacity={mom}>
			<line x1={1580} y1={330} x2={1580 + 70 * mom} y2={360} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" />
			<line x1={1722} y1={250} x2={1722 + 70 * mom} y2={225} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" />
		</g> : null}
		<text x={1010} y={380} textAnchor="middle" style={T(26, AMBER.ink)}>α</text>
		<text x={1230} y={400} textAnchor="middle" style={T(26, NAVY.ink)}>¹⁴N</text>
		<text x={1530} y={400} textAnchor="middle" style={T(26, NAVY.ink)}>¹⁷O</text>
		<text x={1700} y={318} textAnchor="middle" style={T(26, NAVY.ink)}>¹H</text>
	</g>
);
export const S09: React.FC = () => {
	const id = 'alpha-energy';
	const f = useCurrentFrame();
	const al = cue(id, 'at least one point one nine'), cm = cue(id, 'to conserve momentum'), er = cue(id, 'against its electric repulsion'), ra = cue(id, "Rutherford's alphas had about seven point seven"), sp = cap(id, cue(id, 'shared about six point five'), 30);
	const kin = -R_Q + (K_RUTH + R_Q) * prog(f, ra, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LedgerBoard kin={kin} minLine={prog(f, al, 14)} />
				<MiniReaction mom={prog(f, cm, 20)} rep={prog(f, er, 20)} />
			</FrameSvg>
			<Lbl x={LG.x} y={LG.base + 92} at={-30} color={GREY.ink} size={26}>rest bars not to scale</Lbl>
			<Lbl x={96} y={250} at={al + 10} color={TEAL.ink} size={30}>{`K_in ≥ ${fx(-R_Q, 2)} MeV (ignoring momentum)`}</Lbl>
			<HandTag x={0} y={0} at={al + 16} color={TEAL.ink} marks={[{kind: 'arrow', from: [180, 272], to: [LG.x + 20, LG.base - RESTH + R_Q * KPX - 8], bend: 0.15}]} />
			<Lbl x={900} y={500} at={cm + 10} color={TEAL.ink} size={30}>{`products must move: threshold ≈ ${fx(THRESH, 1)} MeV`}</Lbl>
			<Lbl x={900} y={580} at={er + 10} color={ROSE.ink} size={30}>repulsion: about 4 MeV to get close</Lbl>
			<div style={{position: 'absolute', left: 900, top: 640, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={ra} size={40}>{`K_in = ${fx(K_RUTH, 2)} MeV (about ${fx(K_RUTH, 1)}),  Q = ${fx(R_Q, 2)} MeV`}</Row>
				<Row at={sp} size={46}><AnswerBox at={sp + 4}>{`K_out = ${fx(K_RUTH, 2)} − ${fx(-R_Q, 2)} = ${fx(K_OUT_RUTH, 2)} MeV (≈ ${fx(K_OUT_RUTH, 1)})`}</AnswerBox></Row>
			</div>
			<HandTag x={1300} y={880} text="K_out = K_in + Q" at={sp + 16} size={38} color={TEAL.ink} />
		</>
	);
};
export const S10: React.FC = () => {
	const id = 'q-fixed';
	const f = useCurrentFrame();
	const dm = cue(id, 'depends only on the masses'), mk = cue(id, 'more kinetic energy'), dc = cue(id, "doesn't change Q"), ap = cap(id, cue(id, 'or appears'), 24);
	const steps = [K_RUTH, ...K_STEPS];
	let kin = steps[0];
	for (let i = 1; i < steps.length; i++) kin = kin + (steps[i] - kin) * prog(f, mk + (i - 1) * 34, 16);
	const shown = f < mk ? K_RUTH : steps[Math.min(3, 1 + Math.floor((f - mk) / 34))];
	const pq = pulseOf(f, dc, 30);
	const SX = 900, SW = 600;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LedgerBoard kin={kin} glow={pulseOf(f, dm, 40)} />
				<line x1={SX} y1={720} x2={SX + SW} y2={720} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{[0, 2, 4, 6, 8, 10].map(k => <g key={k}><line x1={SX + (k / 10) * SW} y1={708} x2={SX + (k / 10) * SW} y2={732} stroke={INK} strokeWidth={3} /><text x={SX + (k / 10) * SW} y={768} textAnchor="middle" style={T(26, INK)}>{k}</text></g>)}
				<circle cx={SX + (kin / 10) * SW} cy={720} r={18} fill={TEAL.stroke} stroke="#fffdf8" strokeWidth={3} />
			</FrameSvg>
			<Lbl x={SX} y={680} at={-30} color={TEAL.ink} size={28}>K_in slider (MeV)</Lbl>
			<Lbl x={LG.x} y={LG.base + 92} at={-30} color={GREY.ink} size={26}>rest bars not to scale</Lbl>
			<Readout x={900} y={220} label="K_in" value={`${fx(shown, 1)} MeV`} color={TEAL.ink} w={280} />
			<Readout x={1210} y={220} label="Q" value={`${fx(R_Q, 2)} MeV`} color={ORANGE.ink} w={280} size={52 + 8 * pq} />
			<Readout x={1520} y={220} label="K_out = K_in + Q" value={`${fx(shown + R_Q, 2)} MeV`} color={TEAL.ink} w={320} />
			<HandTag x={1520} y={420} text="K_out bigger" at={mk + 110} size={36} color={TEAL.ink} />
			<HandTag x={1210} y={420} text="same Q" at={dc + 10} size={40} color={ORANGE.ink} marks={[{kind: 'underline', x1: 1214, x2: 1490, y: 352}]} />
			<HandTag x={0} y={0} at={dm + 10} color={INK} marks={[{kind: 'circle', cx: LG.x + LG.w + LG.gap / 2, cy: LG.base - RESTH / 2, rx: 250, ry: 105}]} />
			<div style={{position: 'absolute', left: 900, top: 820}}><Row at={ap} size={48}><AnswerBox at={ap + 4}>Q: set by masses only</AnswerBox></Row></div>
		</>
	);
};

// ---------- 11. the same answer from binding energies ----------
const BPX = 4.5, BB = 860;
export const S11: React.FC = () => {
	const id = 'binding-route';
	const f = useCurrentFrame();
	const ht = cue(id, 'about one hundred and thirty three'), ox = cue(id, 'one hundred and thirty one point eight'), lp = cue(id, 'a lone proton has none'), lt = cue(id, 'less tightly bound in total'), ce = cap(id, cue(id, 'costs that energy'), 24);
	const gl = prog(f, ht, 30), gr = prog(f, ox, 30);
	const left: StackSeg[] = [{h: BE_HE * BPX * gl, fill: AMBER.soft, stroke: AMBER.stroke, label: gl > 0.5 ? `⁴He ${fx(BE_HE, 3)}` : undefined, labelSide: 'in', labelColor: AMBER.ink}, {h: BE_N * BPX * gl, fill: NAVY.soft, stroke: NAVY.stroke, label: gl > 0.5 ? `¹⁴N ${fx(BE_N, 3)}` : undefined, labelSide: 'in', labelColor: NAVY.ink}];
	const right: StackSeg[] = [{h: BE_O * BPX * gr, fill: TEAL.soft, stroke: TEAL.stroke, label: gr > 0.5 ? `¹⁷O ${fx(BE_O, 3)}` : undefined, labelSide: 'in', labelColor: TEAL.ink}];
	const topL = BB - BE_IN * BPX, topR = BB - BE_O * BPX;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<StackColumn x={200} base={BB} w={200} segs={left} title="reactants" />
				<StackColumn x={560} base={BB} w={200} segs={right} title="products" />
				{f >= lp ? <g opacity={prog(f, lp, 12)}><rect x={560} y={topR - 70} width={200} height={60} fill="none" stroke={ROSE.stroke} strokeWidth={3} strokeDasharray="10 7" /><text x={660} y={topR - 30} textAnchor="middle" style={T(28, ROSE.ink)}>¹H: 0</text></g> : null}
				{f >= ce ? <g opacity={prog(f, ce, 12)}><line x1={400} y1={topL} x2={820} y2={topL} stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="8 6" /><line x1={760} y1={topR} x2={820} y2={topR} stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="8 6" /></g> : null}
			</FrameSvg>
			<Lbl x={200} y={BB + 92} at={-30} color={GREY.ink} size={26}>binding energy (MeV)</Lbl>
			<div style={{position: 'absolute', left: 900, top: 260, display: 'flex', flexDirection: 'column', gap: 18, width: 930}}>
				<Row at={ht} ageAt={ce} size={40}>{`reactants: ${fx(BE_HE, 3)} + ${fx(BE_N, 3)} = ${fx(BE_IN, 3)} MeV`}</Row>
				<Row at={ht + 10} ageAt={ce} size={30} style={{color: GREY.ink}}>{`said: about ${fx(BE_IN, 0)}`}</Row>
				<Row at={ox} ageAt={ce} size={40}>{`products: ${fx(BE_O, 3)} + 0 = ${fx(BE_O, 3)} MeV`}</Row>
				<Row at={ox + 10} ageAt={ce} size={30} style={{color: GREY.ink}}>{`said: ${fx(BE_O, 1)}`}</Row>
				<Row at={ce} size={46}><AnswerBox at={ce + 4}>{`${fx(BE_O, 3)} − ${fx(BE_IN, 3)} = ${fx(BE_DIFF, 2)} MeV = Q`}</AnswerBox></Row>
				<Row at={ce + 12} size={28} style={{color: GREY.ink}}>{`one decimal gives ${fx(BE_O, 1)} − ${fx(BE_IN, 1)} ≈ ${fx(Math.round(BE_O * 10) / 10 - Math.round(BE_IN * 10) / 10, 1)}`}</Row>
			</div>
			<HandTag x={900} y={850} text="less total binding → heavier → Q < 0" at={lt + 10} size={36} color={ORANGE.ink} marks={[{kind: 'brace', x: 830, y1: topL - 4, y2: topR + 4, facing: 'right'}]} />
		</>
	);
};

// ---------- 12. a reaction that releases energy ----------
export const S12: React.FC = () => {
	const id = 'positive-reaction';
	const f = useCurrentFrame();
	const cn = cue(id, "Chadwick's neutrons"), bn = cue(id, 'beryllium nine, making carbon twelve and a neutron'), r1 = cue(id, 'thirteen point zero one four seven eight six'), r2 = cue(id, 'thirteen point zero zero eight six six five'), qv = cap(id, cue(id, 'plus five point seven zero'), 30);
	const tick = Math.min(1, prog(f, qv, 24));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={PO_BE} p={{x: 96, y: 200, w: 640}} />
				<ArrowFlow x={1525} y={905} len={160 * prog(f, qv + 10, 16)} color={ORANGE.stroke} deg={-20} />
			</FrameSvg>
			<Lbl x={96} y={530} at={cn} color={INK} size={30}>Chadwick&apos;s neutron source (an earlier video)</Lbl>
			<div style={{position: 'absolute', left: 820, top: 200, opacity: prog(f, bn, 14)}}><NucEq terms={[HE, '+', BE4, '→', C6, '+', NEU]} size={56} /></div>
			<div style={{position: 'absolute', left: 820, top: 300, opacity: prog(f, bn + 20, 14), fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, color: INK, lineHeight: 1.4}}>A: 4 + 9 = 13 = 12 + 1 ✓<br /><span style={{color: '#b8312f'}}>Z: 2 + 4 = 6 = 6 + 0 ✓</span></div>
			<div style={{position: 'absolute', left: 96, top: 580, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={r1} ageAt={qv} size={44}>{`m_reactants = ${u6(M.he)} + ${u6(M.be9)} = ${u6(B_IN)} u`}</Row>
				<Row at={r2} ageAt={qv} size={44}>{`m_products = ${u6(M.c12)} + ${u6(M.n)} = ${u6(B_OUT)} u`}</Row>
				<Row at={qv} size={52}><AnswerBox at={qv + 4}>{`Δm = +${u6(B_DM)} u; Q = ${u6(B_DM)} × ${U_MEV} = ${sg(B_Q * tick, 2)} MeV`}</AnswerBox></Row>
			</div>
			<HandTag x={1420} y={590} text="products lighter: energy out" at={qv + 16} size={34} color={ORANGE.ink} />
			<Lbl x={820} y={440} at={qv + 24} color={GREY.ink} size={28}>{`with 5.3 MeV alphas: K_out ≈ ${fx(B_KOUT, 1)} MeV`}</Lbl>
		</>
	);
};

// ---------- 13. a way to remember ----------
const MB_L: BalanceG = {cx: 480, cy: 360, arm: 190, drop: 80}, MB_R: BalanceG = {cx: 1340, cy: 360, arm: 190, drop: 80};
const MiniBal: React.FC<{g: BalanceG; deg: number}> = ({g, deg}) => {
	const [pl, pr] = panAt(g, deg);
	return (
		<g>
			<Balance g={g} deg={deg} panW={170} size={24} label="" />
			<text x={pl[0]} y={pl[1] + 44} textAnchor="middle" style={T(28, INK)}>before</text>
			<text x={pr[0]} y={pr[1] + 44} textAnchor="middle" style={T(28, INK)}>after</text>
		</g>
	);
};
export const S13: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const mb = cue(id, 'Q is mass before, minus mass after'), po = cue(id, 'Positive Q gives energy out'), ti = cap(id, cue(id, 'Negative Q takes energy in'), 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={150} y={186} at={-30} size={38} color={INK}>{`Rutherford: Q = ${fx(R_Q, 2)} MeV`}</Chip>
			<Chip x={1010} y={186} at={-30} size={38} color={INK}>{`Chadwick's source: Q = ${sg(B_Q, 2)} MeV`}</Chip>
			<FrameSvg>
				<MiniBal g={MB_L} deg={5} />
				<MiniBal g={MB_R} deg={-5} />
				<ArrowFlow x={80} y={470} len={130 * prog(f, ti, 16)} color={ORANGE.stroke} deg={0} />
				<ArrowFlow x={1600} y={470} len={160 * prog(f, po, 16)} color={ORANGE.stroke} deg={0} />
			</FrameSvg>
			<Lbl x={80} y={540} at={ti + 10} color={ORANGE.ink} size={30}>energy in</Lbl>
			<Lbl x={1610} y={540} at={po + 10} color={ORANGE.ink} size={30}>energy out</Lbl>
			<Lbl x={480} y={640} at={-30} color={GREY.ink} size={26} anchor="middle">after heavier (diagram)</Lbl>
			<Lbl x={1340} y={640} at={-30} color={GREY.ink} size={26} anchor="middle">before heavier (diagram)</Lbl>
			<div style={{position: 'absolute', left: 150, top: 256}}><NucEq terms={RUTH} size={36} /></div>
			<div style={{position: 'absolute', left: 1010, top: 256}}><NucEq terms={[HE, '+', BE4, '→', C6, '+', NEU]} size={36} /></div>
			<div style={{position: 'absolute', left: 330, top: 670, width: 1260}}><MemoryCard at={mb} main={<>Q = mass before − mass after (× c²)</>} sub={<>Positive Q gives energy out. Negative Q takes energy in.</>} /></div>
		</>
	);
};
export {R_SLIP};
