// Scenes 7 to 11: checking the balance (A and Z tallies under each side of step 1 that tick, silent ticks for steps 2
// and 3, the framed net equation, positrons annihilating), how much energy? (working layout from atomic masses, the
// crossed u-as-kg slip), a second route (the CNO ring with a carbon disc travelling round and returning), why the
// bigger stars use it (one shared separation d, repulsion arrows 1 and 6 long, core temperatures, the Sun's share bar,
// the underground detector outline) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, SUN} from '../../physics/light/plates';
import {STAR_BLUE} from '../../physics/light/stars';
import {Packet} from '../../physics/light/photo';
import {Nucleus, Particle} from '../../physics/light/massenergy';
import {Anti, Readout} from '../../physics/atom/universe';
import {NeutrinoDot, NucEq, Tally} from '../../physics/atom/nuclear';
import {CNO_SHARE, DM_PP, E_PP, E_PP_J, FOUR_H, FRAC_PP, HEAD, HEAD_SIZE, M, M_CNO, PP_RATE, SLIP_KG, T_CNO, T_SUN_CORE, U_MEV, cap, cue} from './common';
import {AMBER, CNO, CNO_NUC, GREY, Givens, INK, Lbl, MassBars, NAVY, NET, NEUTRON, NucDisc, RED, ROSE, RingTrack, Strip, TEAL, VIOLET, fx, ringAt, sci} from './parts';
import type {Ring} from './parts';
import {EQX, EQY, PPEqs} from './s1';

// ---------- 7. checking the balance ----------
export const S07: React.FC = () => {
	const id = 'conservation';
	const f = useCurrentFrame();
	const tk = cue(id, 'Take step one'), le = cue(id, 'two nucleons, and a charge of plus two'), on = cue(id, 'the positron carries the other plus one'), tq = cue(id, 'keeps a third quantity balanced'), ne = cue(id, 'two positrons and two neutrinos'), ra = cap(id, cue(id, 'adding more gamma rays'));
	const an = prog(f, ra - 30, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<PPEqs f={f} at={[-30, -30, -30]} />
			<FrameSvg>
				{f >= tk ? <rect x={EQX - 16} y={EQY[0] - 48} width={700} height={96} rx={14} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, tk, 12) * (1 - prog(f, tq, 12))} /> : null}
				{f >= ne ? <g opacity={prog(f, ne + 20, 14)}>
					{[0, 1].map(i => <g key={i}>
						<Anti x={170 + 140 * an} y={520 + 120 * i} r={22} color={ROSE.stroke} text="e⁺" size={18} opacity={1 - an} />
						<Particle x={500 - 140 * an} y={520 + 120 * i} r={14} color={NAVY.stroke} opacity={1 - an} />
						{an > 0.6 ? <><Packet x={335 + 120 * (an - 0.6)} y={490 + 120 * i} deg={-30} len={50} color={AMBER.stroke} label="γ" size={22} /><Packet x={335 - 120 * (an - 0.6)} y={550 + 120 * i} deg={150} len={50} color={AMBER.stroke} /></> : null}
					</g>)}
				</g> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: EQX, top: EQY[0] + 34, display: 'flex', flexDirection: 'column', gap: 2}}>
				{f >= le ? <Tally label="A" sum="1 + 1 = 2" size={30} /> : null}
				{f >= le + 10 ? <Tally label="Z" sum="1 + 1 = 2" size={30} /> : null}
			</div>
			<div style={{position: 'absolute', left: EQX + 330, top: EQY[0] + 34, display: 'flex', flexDirection: 'column', gap: 2}}>
				{f >= on ? <Tally label="A" sum="2 + 0 + 0 = 2" tickAt={on + 14} size={30} /> : null}
				{f >= on + 10 ? <Tally label="Z" sum="1 + 1 + 0 = 2" tickAt={on + 24} size={30} /> : null}
			</div>
			{[['A: 3 = 3', 'Z: 2 = 2'], ['A: 6 = 6', 'Z: 4 = 4']].map((r, i) => (
				<div key={i} style={{position: 'absolute', left: 1460, top: EQY[i + 1] - 40, display: 'flex', flexDirection: 'column', gap: 0}}>
					{f >= on + 40 + 20 * i ? <><Tally label={r[0].slice(0, 1)} sum={r[0].slice(3)} tickAt={on + 46 + 20 * i} size={28} /><Tally label={r[1].slice(0, 1)} sum={r[1].slice(3)} tickAt={on + 52 + 20 * i} size={28} /></> : null}
				</div>
			))}
			<Lbl x={96} y={220} at={tk} out={tq} color={INK} size={28}>A = nucleons (mass number)</Lbl>
			<Lbl x={96} y={260} at={tk} out={tq} color={INK} size={28}>Z = charge (protons, in e)</Lbl>
			<HandTag x={96} y={360} text="A and Z both balance" at={on + 30} out={tq} size={34} color={INK} marks={[{kind: 'underline', x1: EQX, x2: EQX + 620, y: EQY[0] + 122}]} />
			<Lbl x={96} y={360} at={tq} color={GREY.ink} size={28}>ν: lepton number (in a later video)</Lbl>
			<div style={{position: 'absolute', left: 96, top: 780}}><Row at={ne - 6} size={44}><AnswerBox at={ne}><NucEq terms={NET} size={44} /></AnswerBox></Row></div>
			<Lbl x={96} y={460} at={ne + 20} color={INK} size={26}>positrons meet electrons:</Lbl>
			<Lbl x={96} y={760} at={ra} color={AMBER.ink} size={28}>annihilation: more gamma rays</Lbl>
		</>
	);
};

// ---------- 8. how much energy? ----------
export const S08: React.FC = () => {
	const id = 'worked-energy';
	const ie = cue(id, 'which include the electrons'), fh = cue(id, 'Four hydrogen atoms have a mass'), ha = cue(id, 'A helium four atom has'), du = cue(id, 'two eight seven u'), me = cue(id, 'twenty-six point seven MeV'), su = cap(id, cue(id, 'the same figure we used for the Sun'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={34} w={1060}>Energy released per helium-4 formed in the pp chain.</Strip>
			<Strip x={96} y={240} at={6} size={30} w={1060}>Δm = m(reactants) − m(products);  E = Δm × 931.5 MeV</Strip>
			<Givens x={1200} y={168} w={620} at={4} size={30} lines={[`m(¹H atom) = ${M.H1} u`, `m(⁴He atom) = ${M.He4} u`, `1 u = ${U_MEV} MeV/c² (data sheet)`]} />
			<Chip x={96} y={330} at={ie} size={28} w={1060} color={INK}>atomic masses: 4 H atoms carry 4 electrons; He keeps 2; the other 2 annihilate the positrons</Chip>
			<HandTag x={1220} y={390} text="electrons counted" at={ie + 20} out={me} size={34} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 14, width: 1200}}>
				<Row at={fh - 6} ageAt={du} size={44}>{`4 H atoms: 4(${M.H1}) = ${fx(FOUR_H, 6)} u`}</Row>
				<Row at={ha - 6} ageAt={du} size={44}>{`⁴He atom: ${M.He4} u (≈ 4.0026 u)`}</Row>
				<Row at={du - 6} ageAt={me} size={46}>{`Δm = ${fx(FOUR_H, 6)} − ${M.He4} = `}<MarkSpan kind="circle" at={du + 16} color={TEAL.stroke}>{`${fx(DM_PP, 6)} u`}</MarkSpan>{' (≈ 0.0287 u)'}</Row>
				<Row at={me - 6} ageAt={su} size={52}><AnswerBox at={me}>{`E = ${fx(DM_PP, 6)} × ${U_MEV} ≈ ${fx(E_PP, 1)} MeV`}</AnswerBox></Row>
				<Row at={su - 6} size={44}>{`Δm / m = ${fx(DM_PP, 6)} / ${fx(FOUR_H, 4)} = ${fx(FRAC_PP * 100, 2)}% (≈ 0.7%)`}</Row>
			</div>
			<Lbl x={1240} y={720} at={me + 16} color={AMBER.ink} size={30}>{`= ${sci(E_PP_J, 2)} J`}</Lbl>
			<CrossedChip x={1240} y={770} at={me + 30} crossAt={me + 46} size={26} caption="u is not kg">{`E = ${fx(DM_PP, 6)} × (3.00 × 10⁸)² = ${sci(SLIP_KG, 2)} J`}</CrossedChip>
			<Lbl x={1240} y={540} at={su + 10} color={AMBER.ink} size={28}>{`Sun: about ${sci(PP_RATE, 0).replace('1 × ', '')} of these`}</Lbl>
			<Lbl x={1240} y={580} at={su + 10} color={AMBER.ink} size={28}>every second</Lbl>
		</>
	);
};

// ---------- 9. a second route ----------
export const G9: Ring = {cx: 470, cy: 560, r: 230};
const LX = 900, LY = 240, LH = 88;
/** The six CNO equations as a numbered list (row k is step k + 1 on the ring). */
export const CnoList: React.FC<{at: readonly number[]; size?: number; pulse?: readonly number[]; x?: number; y?: number; h?: number}> = ({at, size = 36, pulse = [], x = LX, y = LY, h = LH}) => {
	const f = useCurrentFrame();
	return <>{CNO.map((t, k) => { const p = pulse[k] ?? 0; return <div key={k} style={{position: 'absolute', left: x, top: y + k * h - size * 0.75, opacity: prog(f, at[k], 14), background: p > 0 ? `rgba(209,143,31,${0.25 * p})` : undefined, borderRadius: 10, padding: '0 8px', display: 'flex', alignItems: 'center', gap: 14}}><span style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, color: GREY.ink}}>{k + 1}</span><NucEq terms={t} size={size} /></div>; })}</>;
};
export const S09: React.FC = () => {
	const id = 'cno-cycle';
	const f = useCurrentFrame();
	const e1 = cue(id, 'A carbon twelve nucleus captures a proton'), e2 = cue(id, 'then another'), e3 = cue(id, 'then another', 2), e4 = cue(id, 'and another'), nu = cue(id, 'giving out a positron and a neutrino'), w = cue(id, 'the same carbon it started with'), ca = cue(id, 'Carbon is a catalyst'), me = cap(id, cue(id, 'the same twenty-six point seven MeV'));
	const eqAt = [e1 + 8, e2, e2 + 24, e3, e4, w];
	const u = kf(f, [[e1 + 8, 0], [e1 + 38, 1], [e2 + 20, 2], [e2 + 44, 3], [e3 + 20, 4], [e4 + 20, 5], [w, 5], [w + 40, 6]]);
	const k = Math.floor(u + 1e-6) % 6;
	const [dx, dy] = ringAt(G9, u);
	const npul = f >= nu && f < nu + 40 ? Math.sin(((f - nu) / 40) * Math.PI) : 0;
	const heOut = prog(f, w + 20, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RingTrack g={G9} lit={Math.min(6, Math.floor(u + 1e-6))} />
				{[0, 1, 2, 3, 4, 5].map(i => { const [x, y] = ringAt(G9, i + 0.5); const [x2, y2] = [G9.cx + (x - G9.cx) * 1.2, G9.cy + (y - G9.cy) * 1.2]; return <text key={i} x={x2} y={y2 + 10} textAnchor="middle" opacity={prog(f, eqAt[i], 12)} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: GREY.ink}}>{i + 1}</text>; })}
				{[0, 1, 2, 3, 4, 5].map(i => { const [x, y] = ringAt(G9, i); return <circle key={i} cx={x} cy={y} r={8} fill={GREY.stroke} />; })}
				<NucDisc x={dx} y={dy} r={46} text={CNO_NUC[k].t} fill={k === 0 ? '#e7e0f2' : '#efe6d2'} />
				{heOut > 0.001 ? <g opacity={1 - 0.4 * heOut}><Nucleus cx={ringAt(G9, 5.5)[0] - 140 * heOut} cy={ringAt(G9, 5.5)[1] - 40 * heOut} p={2} n={2} r={14} proton={ROSE.stroke} neutron={NEUTRON} /></g> : null}
				<Disc spec={STAR_BLUE} cx={1700} cy={290} d={220} />
			</FrameSvg>
			<CnoList at={eqAt} pulse={[0, npul, 0, 0, npul, 0]} />
			<Lbl x={G9.cx} y={G9.cy + 10} at={0} color={GREY.ink} size={26} anchor="middle">CNO cycle</Lbl>
			<Lbl x={1700} y={440} at={0} color={INK} size={28} anchor="middle">about 1.3 M☉</Lbl>
			<Lbl x={1700} y={476} at={0} color={INK} size={28} anchor="middle">and above</Lbl>
			<HandTag x={G9.cx - 110} y={G9.cy + 70} text="same carbon back" at={w + 40} size={32} color={INK} marks={[{kind: 'arrow', from: [ringAt(G9, 4.6)[0] + 30, ringAt(G9, 4.6)[1] + 10], to: [ringAt(G9, 5.85)[0] - 20, ringAt(G9, 5.85)[1] + 30], bend: 0.12}]} />
			<Chip x={LX} y={760} at={ca} size={30} color={INK}>catalyst: helps, not used up</Chip>
			<div style={{position: 'absolute', left: LX, top: 832}}><Row at={me - 6} size={36}><AnswerBox at={me}><NucEq terms={NET} size={36} /></AnswerBox></Row></div>
			<Lbl x={1480} y={790} at={me + 6} color={AMBER.ink} size={32}>{`${fx(E_PP, 1)} MeV (same Δm)`}</Lbl>
			<HandTag x={1480} y={560} text="same net, same energy" at={me + 16} size={34} color={AMBER.ink} />
		</>
	);
};

// ---------- 10. why the bigger stars use it ----------
const RTHUMB: Ring = {cx: 220, cy: 300, r: 70};
const XT = 760, D = 270, ROW = [420, 600] as const;
export const S10: React.FC = () => {
	const id = 'cno-temperature';
	const f = useCurrentFrame();
	const sd = cue(id, 'at the same distance'), six = cue(id, 'repelled about six times as strongly'), se = cue(id, 'above about seventeen million kelvin'), fi = cue(id, 'about fifteen million kelvin'), de = cue(id, 'a detector deep under a mountain in Italy'), ce = cue(id, 'confirming the last one per cent'), dm = cap(id, cue(id, 'the CNO cycle dominates'));
	const g = prog(f, six, 30), dp = f >= sd && f < sd + 40 ? Math.sin(((f - sd) / 40) * Math.PI) : 0;
	const L = [50, 300].map(v => v * g);
	const nus = f >= de ? Array.from({length: 6}, (_, i) => ((f - de) / 50 + i / 6) % 1) : [];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RingTrack g={RTHUMB} />
				<NucDisc x={RTHUMB.cx} y={RTHUMB.cy - RTHUMB.r} r={22} text="C" />
				{ROW.map((y, i) => <g key={i}>
					<Particle x={XT - D} y={y} r={32} color={ROSE.stroke} text="p" size={26} />
					{i === 0 ? <Particle x={XT} y={y} r={32} color={ROSE.stroke} text="p" size={26} /> : <NucDisc x={XT} y={y} r={56} text="¹²C" />}
					{L[i] > 4 ? <g><line x1={XT - D - 32} y1={y} x2={XT - D - 32 - L[i] + 14} y2={y} stroke={RED.stroke} strokeWidth={8} /><path d="M0,0 L20,-12 L20,12 z" transform={`translate(${XT - D - 32 - L[i]} ${y})`} fill={RED.stroke} /></g> : null}
				</g>)}
				<g stroke={INK} strokeWidth={3 + 3 * dp} strokeDasharray="8 7"><line x1={XT - D} y1={ROW[0] - 60} x2={XT - D} y2={ROW[1] + 90} /><line x1={XT} y1={ROW[0] - 60} x2={XT} y2={ROW[1] + 90} /></g>
				<line x1={XT - D + 8} y1={ROW[1] + 76} x2={XT - 8} y2={ROW[1] + 76} stroke={INK} strokeWidth={3 + 3 * dp} />
				<Disc spec={SUN} cx={1190} cy={420} d={170} />
				<Disc spec={STAR_BLUE} cx={1700} cy={420} d={220} />
				{f >= fi ? <g opacity={prog(f, fi + 10, 12)}><rect x={1100} y={560} width={700} height={44} rx={8} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} /><rect x={1100 + 700 * (1 - CNO_SHARE)} y={560} width={700 * CNO_SHARE} height={44} fill={VIOLET.stroke} /></g> : null}
				{f >= dm ? <g opacity={prog(f, dm, 12)}><rect x={1100} y={680} width={700} height={44} rx={8} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} /><rect x={1100 + 700 * 0.15} y={680} width={700 * 0.85} height={44} fill={VIOLET.stroke} /></g> : null}
				{f >= de ? <g opacity={prog(f, de, 14)}>
					<rect x={120} y={760} width={340} height={170} rx={10} fill="#e9eef3" stroke={INK} strokeWidth={3.5} />
					<circle cx={290} cy={845} r={64} fill="#fffdf8" stroke={NAVY.stroke} strokeWidth={4} />
					{nus.map((u, i) => <NeutrinoDot key={i} x={560 - 300 * u} y={720 + 120 * u + 12 * i} r={7} size={22} text="" />)}
				</g> : null}
			</FrameSvg>
			<Lbl x={RTHUMB.cx} y={RTHUMB.cy + RTHUMB.r + 40} at={0} color={GREY.ink} size={26} anchor="middle">CNO cycle</Lbl>
			<Lbl x={1190} y={530} at={0} color={INK} size={26} anchor="middle">the Sun</Lbl>
			<Lbl x={1700} y={555} at={0} color={INK} size={26} anchor="middle">a massive star</Lbl>
			<Lbl x={XT + 80} y={ROW[0] + 10} at={0} color={INK} size={30}>p → p</Lbl>
			<Lbl x={XT + 80} y={ROW[1] + 10} at={0} color={INK} size={30}>p → ¹²C (charge +6)</Lbl>
			<Lbl x={(2 * XT - D) / 2} y={ROW[1] + 120} at={0} color={INK} size={30} anchor="middle">same d</Lbl>
			<HandTag x={XT + 80} y={ROW[1] + 120} text="same gap" at={sd + 10} out={fi} size={32} color={INK} />
			<Lbl x={XT - D - 40} y={ROW[0] - 40} at={six + 10} color={RED.ink} size={28} anchor="end">× 1</Lbl>
			<HandTag x={XT - D - 300} y={ROW[1] - 50} text="× 6 (charge 6)" at={six + 20} size={34} color={RED.ink} />
			<Readout x={1100} y={170} label="CNO dominant: core temperature" value={`> ${fx(T_CNO / 1e7, 1)} × 10⁷ K`} color="#b8322a" w={560} size={44} opacity={prog(f, se, 12)} />
			<Readout x={1300} y={345} label="Sun's core" value={`≈ ${fx(T_SUN_CORE / 1e7, 1)} × 10⁷ K`} color="#b8322a" w={300} size={36} opacity={prog(f, fi, 12)} />
			<Lbl x={1100} y={540} at={fi + 10} color={INK} size={28}>{`Sun: pp ≈ ${fx((1 - CNO_SHARE) * 100)}%, CNO ≈ ${fx(CNO_SHARE * 100)}%`}</Lbl>
			<Lbl x={1100} y={660} at={dm} color={INK} size={28}>{`massive star (> ${M_CNO} M☉): CNO dominant (illustrative)`}</Lbl>
			<Lbl x={120} y={740} at={de} color={INK} size={26}>detector underground (schematic)</Lbl>
			<Chip x={500} y={860} at={ce} size={28} color={INK}>Borexino (2020): CNO neutrinos detected</Chip>
			<HandTag x={0} y={0} at={ce + 20} color={GREY.stroke} marks={[{kind: 'circle', cx: 1100 + 700 * (1 - CNO_SHARE / 2), cy: 582, rx: 34, ry: 40}]} />
			<Lbl x={1100 + 360} y={640} at={fi + 10} color={NAVY.ink} size={26}>pp chain</Lbl>
			<Lbl x={1810} y={640} at={fi + 10} color={VIOLET.ink} size={26} anchor="end">CNO</Lbl>
		</>
	);
};

// ---------- 11. a way to remember ----------
const R11: Ring = {cx: 1520, cy: 330, r: 120};
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const fp = cue(id, 'Four protons in, one helium out'), zp = cue(id, 'zero point seven per cent lighter'), cb = cap(id, cue(id, 'just borrows carbon'));
	const mg = prog(f, fp + 10, 30), u = kf(f, [[cb - 30, 0], [cb + 30, 6]]);
	const [cx, cy] = ringAt(R11, u);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{mg < 1 ? [[-90, -60], [90, -60], [-90, 60], [90, 60]].map(([ddx, ddy], i) => <Particle key={i} x={330 + ddx * (1 - mg)} y={330 + ddy * (1 - mg)} r={28} color={ROSE.stroke} text="p" size={22} opacity={1 - mg} />) : null}
				<Nucleus cx={330} cy={330} p={2} n={2} r={22} proton={ROSE.stroke} neutron={NEUTRON} opacity={mg} />
				<MassBars x={720} base={460} h={220} gap={220 * FRAC_PP * 10} w={100} sep={50} opacity={prog(f, zp, 12)} />
				<RingTrack g={R11} />
				<NucDisc x={cx} y={cy} r={30} text="¹²C" />
			</FrameSvg>
			<Lbl x={330} y={470} at={fp} color={INK} size={28} anchor="middle">4 ¹H → ⁴He</Lbl>
			<Lbl x={845} y={500} at={zp} color={TEAL.ink} size={28} anchor="middle">0.7% lighter (gap × 10)</Lbl>
			<Lbl x={R11.cx} y={R11.cy + R11.r + 50} at={0} color={GREY.ink} size={28} anchor="middle">carbon comes back</Lbl>
			<HandTag x={96} y={640} text="Four protons in, one helium out," at={fp} size={54} color={INK} />
			<HandTag x={96} y={730} text="0.7% lighter." at={zp} size={54} color={TEAL.ink} />
			<HandTag x={96} y={830} text="The CNO cycle just borrows carbon." at={cb} size={54} color={INK} />
		</>
	);
};
