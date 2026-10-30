// M7 C15 scenes 6 to 10: going backwards (add the water back; the carbon count), addition against condensation (the
// comparison board; hydrolysis), nylon's hydrogen bonds between chains (and the warm slide), PET's stiff rings and
// polar links, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {RU} from '../chem-m7-c14/parts';
import {BOTTLE, FABRIC, HDPE, ROPE, sc} from './common';
import {AMB, CCount, Cut, GREY, INK, INK_SOFT, Insert, NAVY, OXY_INK, PolyBox, RED, Ring2, Row, T, TEALC, VIOLET, WATER, WATER_SOFT, WaterChip, rep, rowGeo} from './parts';
import type {Tok} from './parts';
import {PET_U} from './s1';

const GLOWW = '#cfe3f3';
const tH = (): Tok => ({l: 'H', c: WATER});
const tOw = (): Tok => ({l: 'O', c: WATER});

// ---------- 6. Backwards ----------
const PEA: Tok[] = [T.O, T.CH2, T.CH2, T.O, T.CO, ...rep(T.CH2, 4), T.CO];
const K6 = cues(sc('monomers-back'), {add: 'add the water', find: 'Find each', cut: 'cut it', addOH: 'Add O H', take: 'Take this', poly: 'polyester', cutting: 'Cutting gives', ethane: 'ethane one', count: 'count the', notj: 'not just', six: "That's six", hex: 'hexanedioic'});
export const SceneBackwards: React.FC = () => {
	const f = useCurrentFrame();
	const gl = rowGeo([T.B, T.CO, T.O, T.B], 960, 380, 1.1, 'middle');
	const outA = K6.take - 6;
	const Y = 420, S = 0.85;
	const g = rowGeo(PEA, 960, Y, S, 'middle', 50, 50);
	const ins = K6.cutting - 30;
	const split = ins + 56;
	const drift = smooth(prog(f, split, 26));
	const diol: Tok[] = [tH(), T.O, T.CH2, T.CH2, T.O, tH()];
	const acid: Tok[] = [tH(), tOw(), T.CO, ...rep(T.CH2, 4), T.CO, tOw(), tH()];
	const dg0 = rowGeo(diol, 0, 0, S), ag0 = rowGeo(acid, 0, 0, S);
	const dX0 = g.cx[0] - dg0.cx[1], aX0 = g.cx[4] - ag0.cx[2];
	const dX = dX0 + (90 - dX0) * drift, aX = aX0 + (aX0 + 160 - aX0) * drift;
	const dY = Y + 220 * drift, aY = Y + 220 * drift;
	const ag = rowGeo(acid, aX, aY, S);
	return (
		<Overlay>
			<TaskLine text="Backwards" at={0} size={54} y={130} />
			<g opacity={1 - prog(f, outA, 12)}>
				<Row toks={[T.B, T.CO]} x={gl.L} y={380} s={1.1} at={0} />
				<g transform={`translate(${130 * smooth(prog(f, K6.addOH - 4, 20))},0)`}><Row toks={[T.O, T.B]} x={gl.cx[2] - gl.hw[2]} y={380} s={1.1} at={0} /></g>
				{f < K6.addOH ? <line x1={gl.cx[1] + gl.hw[1] + 4} y1={380} x2={gl.cx[2] - gl.hw[2] - 4 + 130 * smooth(prog(f, K6.addOH - 4, 20))} y2={380} stroke={INK} strokeWidth={4} opacity={1 - prog(f, K6.cut + 10, 6)} /> : null}
				<WaterChip a={[gl.mid(1)[0], 220]} b={[gl.mid(1)[0], 260]} at={K6.add} move={K6.add} out={K6.addOH} size={32} />
				<Tag x={960} y={560} text="each link lost one water: put it back" at={K6.add + 10} out={K6.cut} size={26} color={WATER} fill={WATER_SOFT} anchor="middle" />
				<Cut p={gl.mid(1)} at={K6.cut} out={outA} h={110} />
				<Insert p={gl.mid(1)} cP={[gl.cx[1] + 70, 380]} oP={[gl.cx[2] + 130 - 52, 380]} at={K6.addOH - 30} out={outA} size={30} cutOut={K6.addOH} />
				<Tag x={gl.cx[1] - 40} y={560} text="OH → C=O side" at={K6.addOH + 20} out={K6.poly} size={26} color={OXY_INK} fill="#f5ddd3" anchor="end" />
				<Tag x={gl.cx[2] + 100} y={560} text="H → O or N side" at={K6.addOH + 30} out={K6.poly} size={26} color={WATER} fill={WATER_SOFT} />
			</g>
			<g opacity={1 - prog(f, split, 8)}>
				<Row toks={PEA} x={g.x0} y={Y} s={S} at={K6.take} contL={50} contR={50} br={{a: 0, b: 10, at: K6.take + 20, out: ins + 30}} />
				<Insert p={g.mid(3)} cP={[g.cx[4] + 34, Y + 60]} oP={[g.cx[3] - 30, Y + 60]} at={ins} />
				<Insert p={g.mid(10)} cP={[g.R + 40, Y + 60]} oP={[g.L - 30, Y + 60]} at={ins + 12} />
			</g>
			<g opacity={prog(f, split - 2, 8)}>
				<Row toks={diol} x={dX} y={dY} s={S} at={-1000} glow={{0: [split, split + 60, GLOWW], 5: [split, split + 60, GLOWW]}} />
				<Row toks={acid} x={aX} y={aY} s={S} at={-1000} glow={{0: [split, split + 60, GLOWW], 1: [split, split + 60, GLOWW], 9: [split, split + 60, GLOWW], 10: [split, split + 60, GLOWW]}} />
			</g>
			<Tag x={dX + 150} y={780} text="ethane-1,2-diol" at={K6.ethane} size={26} color={INK} fill="#f1efea" anchor="middle" o={dimAt(f, K6.count, 0.45)} />
			<CCount pts={ag.cx.slice(2, 8).map(x => [x, aY] as V2)} at={K6.count + 6} step={10} red={[0, 5]} dy={-120} />
			<Crossed x={1100} y={240} text="4 CH₂ only: butanedioic?" at={K6.notj - 6} cross={K6.notj + 14} out={K6.six + 10} size={28} />
			<AnswerChip x={(ag.cx[2] + ag.cx[7]) / 2} y={760} text="hexanedioic acid" at={K6.hex} size={34} anchor="middle" />
			<Tag x={(ag.cx[2] + ag.cx[7]) / 2} y={850} text="count the C=O carbons" at={K6.six} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
			{void K6.find}{void K6.poly}
		</Overlay>
	);
};

// ---------- 7. Compare ----------
const K7 = cues(sc('compare'), {so: 'So how', addm: 'An addition monomer', condm: 'condensation monomer', nothing: 'nothing', loses: 'Condensation loses', pet: 'For PET', look: 'And look', allc: 'all carbon', links: 'links in it', water: 'Water can', hyd: 'hydrolysis', usually: 'usually slow', weak: 'weak point'});
const COLS = [96, 520, 980];
const ROWS: [string, string, string][] = [['monomer', 'C=C', 'a reactive group at each end'], ['by-product', 'none', 'a small molecule at every link (water here)'], ['repeat unit formula', '= monomer', 'one of each monomer − 2 H₂O (PET, nylon)'], ['backbone', 'all C–C', 'ester or amide links']];
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K7.addm, K7.nothing, K7.pet, K7.links];
	const pg = rowGeo(PET_U, 1360, 335, 0.6, 'middle', 50, 50);
	return (
		<Overlay>
			<TaskLine text="Compare" at={0} size={54} y={130} />
			<Sx x={COLS[1]} y={230} text="addition" size={40} color={NAVY} weight={800} at={K7.so} />
			<Sx x={COLS[2]} y={230} text="condensation" size={40} color={RED} weight={800} at={K7.so + 6} />
			<RU x={720} y={335} s={0.7} subs={[['H', 'H'], ['H', 'Cl']]} at={K7.so + 10} stamp={-100} glowBack={K7.weak} />
			<Row toks={PET_U} x={pg.x0} y={335} s={0.6} at={K7.so + 14} contL={50} contR={50} br={{a: 0, b: 6, at: -100}} bondO={k => (k === 3 ? 1 - prog(f, K7.hyd + 40, 8) : 1)} />
			<Ring2 c={[(pg.cx[3] + pg.cx[4]) / 2, 325]} rx={56} ry={50} at={K7.links + 6} />
			<Ring2 c={[pg.R + 16, 325]} rx={46} ry={50} at={K7.links + 12} />
			<Insert p={pg.mid(3)} cP={[pg.cx[4] + 14, 405]} oP={[pg.cx[3] - 18, 405]} at={K7.hyd} slow={1.6} size={22} />
			<line x1={96} x2={1830} y1={420} y2={420} stroke="rgba(60,45,20,0.2)" strokeWidth={2} opacity={vis(f, K7.addm)} />
			{ROWS.map((r, i) => {
				const lit = vis(f, at[i]) * (at[i + 1] ? 1 - 0.55 * prog(f, at[i + 1], 12) : 1);
				const y = 490 + i * 82;
				return (
					<g key={i} opacity={lit}>
						{i === 3 ? <rect x={86} y={y - 46} width={1750} height={68} rx={14} fill="#f3eee4" opacity={prog(f, at[3], 12)} /> : null}
						<Sx x={COLS[0]} y={y} text={r[0]} size={30} color={INK_SOFT} weight={700} at={-1000} />
						<Sx x={COLS[1]} y={y} text={r[1]} size={32} color={NAVY} weight={800} at={-1000} />
						<Sx x={COLS[2]} y={y} text={r[2]} size={32} color={RED} weight={800} at={-1000} />
					</g>
				);
			})}
			<Crossed x={96} y={850} text="addition gives water" at={K7.nothing + 14} cross={K7.nothing + 30} out={K7.loses + 30} size={28} />
			<Sx x={96} y={900} text="C₂H₃Cl = C₂H₃Cl   |   C₂H₆O₂ + C₈H₆O₄ − 2 H₂O = C₁₀H₈O₄" size={28} color={GREY} weight={700} at={K7.pet + 20} out={K7.look} />
			<Tag x={880} y={860} text="hydrolysis: water splits the link; usually slow without acid, base or an enzyme" at={K7.hyd + 10} size={22} color={WATER} fill={WATER_SOFT} />
			<Tag x={440} y={940} text="C–C backbone: no link to split" at={K7.weak} size={26} color={NAVY} fill="#e7edf8" />
			{void K7.condm}{void K7.allc}{void K7.water}{void K7.usually}
		</Overlay>
	);
};

// ---------- 8. Nylon: hydrogen bonds between chains ----------
const K8 = cues(sc('nylon-properties'), {now: 'Now the', pe: "Polyethylene's", nh: 'But nylon', hb: 'hydrogen bond', those: 'Those hydrogen', melts: 'melts at', hund: 'hundred and thirty', suits: 'That suits', heat: 'Heat it', slide: 'chains slide', rem: 'remoulded', amide: 'The amide', brk: 'break'});
export const SceneNylonProps: React.FC = () => {
	const f = useCurrentFrame();
	const heat = vis(f, K8.heat, K8.amide + 10, 20);
	const slide = vis(f, K8.slide - 6, K8.amide + 10, 24);
	return (
		<Overlay>
			<TaskLine text="Why strong?" at={K8.now} size={54} y={130} />
			<PolyBox x={560} y={220} w={800} h={500} at={0} c={{sites: prog(f, K8.nh + 10, 20), hb: prog(f, K8.hb, 30), disp: 1 - 0.5 * prog(f, K8.nh, 20), slide, heat}} pulse={{strand: 2, at: K8.brk}} />
			<Tag x={96} y={240} text="c14: dispersion only" at={K8.pe} out={K8.nh + 30} size={24} />
			<Tag x={96} y={240} text="c05: H on N bonds to a lone pair on O" at={K8.hb + 10} out={K8.hund} size={20} />
			<Tag x={560} y={750} text="N–H···O=C between chains" at={K8.hb + 16} out={K8.hund} size={28} color={VIOLET} fill="#e6ddf5" />
			<Sx x={1384} y={280} text="red: C=O" size={22} color={RED} weight={700} at={K8.nh + 20} out={K8.hund} />
			<Sx x={1384} y={316} text="indigo: N–H" size={22} color="#3f4aa8" weight={700} at={K8.nh + 26} out={K8.hund} />
			<g opacity={vis(f, K8.hund) * dimAt(f, K8.slide, 0.3)}>
				<Tag x={560} y={750} text="nylon 6,6: about 265 °C   |   HDPE: about 130 °C" at={K8.hund} size={28} color={NAVY} fill="#e7edf8" />
				<Plate p={HDPE} cx={300} top={420} h={130} />
				<Sx x={300} y={600} text="HDPE" size={26} color={INK} anchor="middle" weight={700} at={-1000} />
			</g>
			<Plate p={ROPE} cx={1620} top={360} h={180} at={K8.hund + 6} />
			<Tag x={560} y={830} text="chains slide; hydrogen bonds re-form on cooling" at={K8.rem} size={26} color="#a8761a" fill="#fbedd0" o={dimAt(f, K8.brk, 0.5)} />
			<Tag x={560} y={910} text="amide links in the chain stay intact" at={K8.brk} size={28} color={NAVY} fill="#e7edf8" />
			{void K8.those}{void K8.melts}{void K8.suits}{void TEAL}
		</Overlay>
	);
};

// ---------- 9. PET: stiff rings and polar links ----------
const K9 = cues(sc('pet-properties'), {no: "PET's repeat", but: 'But its', bend: 'bend', polar: 'polar ester', melts: 'melts at', bottle: 'bottle', spun: 'Spun into', poly: 'polyester'});
export const ScenePetProps: React.FC = () => {
	const f = useCurrentFrame();
	const flex = vis(f, K9.bend - 10, K9.polar + 30, 16);
	const fw = 230, fh = fw * (855 / 1195);
	return (
		<Overlay>
			<TaskLine text="Why strong?" at={0} size={54} y={130} />
			<PolyBox x={420} y={220} w={800} h={500} at={0} c={{rings: prog(f, K9.but - 10, 16), co: 1, flex, dip: prog(f, K9.polar, 24), disp: 0.5, ghost: vis(f, K9.no + 20, K9.bend)}} per={170} />
			<Tag x={420} y={750} text="no N–H: no hydrogen bonds between chains" at={K9.no + 10} out={K9.bend} size={26} />
			<Tag x={420} y={750} text="stiff rings: chains hardly bend" at={K9.bend} size={28} color={NAVY} fill="#e7edf8" o={dimAt(f, K9.bottle, 0.5)} />
			<Tag x={420} y={830} text="c08b: polar C=O, dipole–dipole" at={K9.polar} out={K9.bottle} size={24} color={TEALC} fill="#dff2ef" />
			<Tag x={420} y={910} text="melts about 260 °C" at={K9.melts} out={K9.melts + 80} size={24} />
			<Plate p={BOTTLE} cx={1420} top={260} h={330} at={K9.bottle - 4} />
			<Tag x={1420} y={620} text="bottles: tough, clear" at={K9.bottle} size={26} color={NAVY} fill="#e7edf8" anchor="middle" o={dimAt(f, K9.poly, 0.6)} />
			<Plate p={FABRIC} cx={1700} top={350} h={fh} at={K9.poly - 4} />
			<Tag x={1700} y={690} text="fibres: polyester fabric" at={K9.poly} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K9.spun}{void AMB}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const K10 = cues(sc('memory-aid'), {so: 'So, addition', small: 'small molecule lost', draw: 'To draw', find: 'To find', add: 'add the water', explain: 'And to explain', nh: 'N H and', chains: ['chains', 2]});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 430, S = 0.8;
	const g = rowGeo(PET_U, 960, Y, S, 'middle', 50, 50);
	const outU = K10.chains - 10;
	return (
		<Overlay>
			<g opacity={dimAt(f, K10.chains, 0.35)}>
				<Sx x={960} y={210} text="Addition: nothing lost. Condensation: a small molecule lost." size={50} color={TEAL} anchor="middle" hand at={K10.so} />
			</g>
			<g opacity={1 - prog(f, outU, 12)}>
				<Row toks={PET_U} x={g.x0} y={Y} s={S} at={K10.small - 6} contL={50} contR={50} br={{a: 0, b: 6, at: K10.small}} />
				<WaterChip a={g.mid(-1)} b={[g.mid(-1)[0] - 40, Y - 150]} at={K10.small + 4} move={K10.small + 10} out={K10.small + 50} size={26} />
				<WaterChip a={g.mid(6)} b={[g.mid(6)[0] + 40, Y - 150]} at={K10.small + 4} move={K10.small + 10} out={K10.small + 50} size={26} />
				<Insert p={g.mid(3)} cP={[g.cx[4] + 30, Y + 64]} oP={[g.cx[3] - 26, Y + 64]} at={K10.add} />
				<Tag x={960} y={590} text="monomers: add the water back" at={K10.add + 10} size={28} color={WATER} fill={WATER_SOFT} anchor="middle" />
			</g>
			<PolyBox x={240} y={420} w={640} h={300} at={K10.chains - 6} c={{sites: 1, hb: 1, disp: 0.4}} n={4} per={130} />
			<Tag x={560} y={760} text="nylon: hydrogen bonds" at={K10.chains} size={30} color={VIOLET} fill="#e6ddf5" anchor="middle" />
			<PolyBox x={1040} y={420} w={640} h={300} at={K10.chains} c={{rings: 1, co: 1, dip: 0.6}} n={4} per={150} />
			<Tag x={1360} y={760} text="PET: stiff rings" at={K10.chains + 6} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
			{void K10.draw}{void K10.find}{void K10.explain}{void K10.nh}{void RED}
		</Overlay>
	);
};
