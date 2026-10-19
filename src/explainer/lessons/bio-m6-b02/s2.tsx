// M6 B02 scenes 5 to 8: electromagnetic radiation and UV (thymine dimer), ionising radiation (strand breaks, free
// radicals, a lost piece, deep reach), the three chemical routes, and naturally occurring mutagens. The mutagen board
// strip along the bottom gains one row per scene.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay, Sx, prog} from '../bio-m5-b13/shared';
import {PLATES} from '../bio-m6-b01/assets';
import {S} from './common';
import {
	AMBER, AMBER_INK, Adduct, Atom, BaseSwap, BaseTag, CardBox, Fork, GTag, INK, INK_SOFT, Lbl, MutBoard, PLUM, PlateAt, RED, SlimStrand, Slab, SpectrumBar, Starburst, Water, Wisp,
	lerp, rungX, smooth, vis,
} from './parts';

const TB = '#2f5f8f';

// ---------- 5. Electromagnetic radiation and UV ----------
const K5 = cues(S('uv'), {first: 'The first group of mutagens', em: 'electromagnetic radiation', uvl: 'UV light, X-rays and gamma rays', spectrum: 'same spectrum as visible light', energy: 'carry more energy', knock: "can't knock electrons off atoms", join: 'join two neighbouring thymine bases', dimer: 'forming a thymine dimer', kink: 'That kink distorts the DNA', wrongb: 'the wrong base can go in', far: "UV doesn't get far", skin: 'mainly damages skin cells'});
export const SceneUV: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 160, sy = 560, P = 30, T1 = 13;
	const amt = smooth(prog(f, K5.join + 20, 30));
	const tagX = (i: number) => rungX(sx, i, P) + (i === T1 ? 1 : -1) * amt * P * 0.26 + (i === T1 ? -10 : 10) * amt;
	return (
		<>
			<Heading text="Electromagnetic radiation: UV" at={K5.first} size={56} />
			<Overlay>
				<SpectrumBar x={110} y={215} w={1700} o={prog(f, K5.em, 14)} lit={prog(f, K5.spectrum, 20)} ion={prog(f, K5.knock, 16)} arrow={prog(f, K5.energy, 14)} />
				<Lbl x={110} y={360} text="UV, X-rays and gamma rays: all electromagnetic radiation" size={30} color={INK} at={K5.spectrum + 10} />
				<g opacity={prog(f, K5.knock - 20, 12)}>
					<SlimStrand x={sx} y={sy} n={30} pitch={P} gap={44} lineW={5} kink={{i: T1, amt}} rung={i => (i === T1 || i === T1 + 1 ? {color: AMBER, w: 5} : undefined)} />
				</g>
				<BaseTag x={tagX(T1)} y={sy - 18 * amt - 26} text="T" len={10} size={26} color={AMBER} o={prog(f, K5.join, 10)} />
				<BaseTag x={tagX(T1 + 1)} y={sy - 18 * amt - 26} text="T" len={10} size={26} color={AMBER} o={prog(f, K5.join, 10)} />
				<Lbl x={rungX(sx, T1, P) - 260} y={sy - 70} text="neighbouring T's" size={28} color={AMBER_INK} at={K5.join + 6} out={K5.dimer} />
				<Lbl x={1150} y={460} text="thymine dimer" size={58} color={INK} at={K5.dimer} />
				<Lbl x={1150} y={505} text="two neighbouring T's bonded together" size={28} color={INK_SOFT} hand={false} at={K5.dimer + 12} />
				<Lbl x={1150} y={560} text="the kink distorts the DNA" size={32} color={AMBER_INK} at={K5.kink} />
				<Fork x={lerp(sx + 40, rungX(sx, T1, P) - 20, prog(f, K5.wrongb - 30, 30))} y={sy} o={vis(f, K5.wrongb - 30, K5.far, 10)} />
				<BaseTag x={rungX(sx, T1, P) - 8} y={sy + 50} text="G" below len={12} size={26} color={RED} o={prog(f, K5.wrongb + 6, 10)} />
				<Lbl x={rungX(sx, T1, P) + 40} y={sy + 110} text="wrong base when copied" size={30} color={RED} at={K5.wrongb + 12} />
				<PlateAt p={PLATES.uvSkin} cx={1630} cy={720} w={290} at={K5.far} />
				<Lbl x={160} y={790} text="UV mainly affects skin; UVA reaches the dermis" size={32} color={TB} at={K5.skin} />
				<MutBoard fills={[K5.skin + 30]} />
			</Overlay>
		</>
	);
};

// ---------- 6. Ionising radiation ----------
const K6 = cues(S('ionising'), {xg: 'X-rays and gamma rays carry much more energy', ion: "They're ionising", knock: 'knock electrons off atoms', snap: 'snap the DNA backbone directly', split: 'split water molecules', radicals: 'free radicals', attack: 'which then attack DNA', both: 'Sometimes both strands break', joins: 'If the cell joins the broken ends back wrongly', piece: 'a whole piece can be lost or swapped', deep: 'pass deep into the body', eggs: 'including cells that make eggs or sperm'});
export const SceneIonising: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 520, sy = 600, P = 30;
	const iconsO = 1 - prog(f, K6.deep - 30, 14);
	const fall = smooth(prog(f, K6.joins + 10, 40));
	const rejoin = smooth(prog(f, K6.piece + 10, 30));
	const R0 = 31;
	return (
		<>
			<Heading text="Ionising radiation: X-rays and gamma rays" at={K6.xg} size={56} />
			<Overlay>
				<PlateAt p={PLATES.xray} cx={250} cy={330} w={250} at={K6.xg} />
				<Lbl x={250} y={500} text="X-rays" size={32} color={INK} anchor="middle" at={K6.xg + 6} />
				<PlateAt p={PLATES.shield} cx={250} cy={660} w={240} at={K6.xg + 20} />
				<Lbl x={250} y={800} text="gamma rays: source in a lead shield" size={24} color={INK} anchor="middle" at={K6.xg + 26} />
				<g opacity={iconsO}>
					<Atom x={760} y={300} o={prog(f, K6.ion, 12)} lose={smooth(prog(f, K6.knock + 10, 30))} />
					<Lbl x={620} y={410} text="ionising: knocks electrons off" size={30} color={RED} at={K6.knock + 20} />
					<Water x={1250} y={300} o={prog(f, K6.split - 10, 12) * (1 - prog(f, K6.attack + 30, 10))} split={smooth(prog(f, K6.split + 10, 16))} to={[rungX(sx, 20, P), sy - 20]} travel={smooth(prog(f, K6.attack - 16, 40))} />
					<Lbl x={1250} y={400} text="free radicals" size={30} color={AMBER_INK} anchor="middle" at={K6.radicals} out={K6.attack + 30} />
				</g>
				{/* the strand: left part (single breaks), a middle piece that falls out, right part that rejoins */}
				<g opacity={prog(f, K6.xg + 10, 12)}>
					<SlimStrand x={sx} y={sy} n={28} pitch={P} gap={44} lineW={5} breaks={[{i: 8, line: 'top', amt: prog(f, K6.snap + 10, 12)}, {i: 20, line: 'top', amt: prog(f, K6.attack + 20, 12)}]} />
					<g transform={`translate(0,${fall * 150})`} opacity={1 - fall}>
						<SlimStrand x={sx + 28 * P} y={sy} n={3} pitch={P} gap={44} lineW={5} />
					</g>
					<g transform={`translate(${lerp(0, -3 * P, rejoin) + (f >= K6.both + 10 ? 10 * (1 - rejoin) : 0)},0)`}>
						<SlimStrand x={sx + R0 * P} y={sy} n={9} pitch={P} gap={44} lineW={5} />
					</g>
				</g>
				<line x1={sx + 28 * P} y1={sy - 14} x2={sx + 28 * P} y2={sy + 58} stroke={AMBER} strokeWidth={4} strokeLinecap="round" opacity={prog(f, K6.piece + 36, 10)} />
				<Lbl x={rungX(sx, 8, P)} y={sy + 110} text="backbone snapped" size={28} color={RED} anchor="middle" at={K6.snap + 16} />
				<Lbl x={rungX(sx, 20, P)} y={sy + 110} text="radicals attack" size={28} color={AMBER_INK} anchor="middle" at={K6.attack + 24} />
				<Lbl x={rungX(sx, 29, P)} y={sy - 50} text="both strands break" size={28} color={RED} anchor="middle" at={K6.both + 10} out={K6.piece + 20} />
				<Lbl x={rungX(sx, 28, P)} y={sy + 170} text="piece lost or swapped: later video" size={28} color={INK} anchor="middle" at={K6.piece + 10} />
				{/* depth: UV stops in the skin, X-rays and gamma pass right through */}
				<g opacity={prog(f, K6.deep, 14)}>
					<rect x={600} y={230} width={200} height={190} fill="#f3d9cf" stroke="#c9a495" strokeWidth={2} />
					<rect x={800} y={230} width={500} height={190} fill="#f1e2d8" stroke="#c9a495" strokeWidth={2} />
					<rect x={1300} y={230} width={520} height={190} fill="#e9dbe6" stroke="#b49bb0" strokeWidth={2} opacity={1} />
					<Sx x={700} y={260} text="skin" size={22} color={INK_SOFT} weight={700} anchor="middle" />
					<Sx x={1050} y={260} text="deeper tissue" size={22} color={INK_SOFT} weight={700} anchor="middle" />
					<Sx x={1560} y={260} text="deep organs" size={22} color={INK_SOFT} weight={700} anchor="middle" />
					<line x1={560} y1={310} x2={730} y2={310} stroke="#8a62c4" strokeWidth={6} strokeLinecap="round" />
					<Sx x={612} y={294} text="UV: skin, dermis" size={22} color="#5c3f8a" weight={700} />
					<line x1={560} y1={380} x2={1790} y2={380} stroke="#3d6fa8" strokeWidth={6} strokeLinecap="round" />
					<path d="M1776,370 L1796,380 L1776,390" fill="none" stroke="#3d6fa8" strokeWidth={4} />
					<Sx x={1050} y={368} text="X-rays, gamma: right through" size={22} color="#2d5584" weight={700} anchor="middle" />
				</g>
				<rect x={1302} y={232} width={516} height={186} fill="none" stroke={AMBER} strokeWidth={5} opacity={vis(f, K6.eggs, undefined, 12)} />
				<Lbl x={1560} y={460} text="includes cells that make eggs or sperm" size={26} color={AMBER_INK} anchor="middle" at={K6.eggs} />
				<MutBoard fills={[-100, K6.eggs + 40]} />
			</Overlay>
		</>
	);
};

// ---------- 7. Chemical mutagens ----------
const K7 = cues(S('chemicals'), {second: 'The second group is chemical mutagens', three: 'three main ways', look: 'look so much like a normal base', builds: 'the cell builds them into new DNA', wrong: 'pair with the wrong partner', analogue: "That's a base analogue", tobacco: 'chemicals in tobacco smoke', attach: 'attach to a base', pairs: 'change how it pairs', slide: 'slide in between neighbouring base pairs', adds: 'adds or skips a base', shifts: 'shifts every codon after it'});
export const SceneChemicals: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 330, P = 30, R = 12;
	const Y = [280, 510, 730];
	const slab = smooth(prog(f, K7.slide + 10, 26));
	const shift = smooth(prog(f, K7.adds + 6, 30));
	const rows = [
		{a: '1. mimics', b: 'a base', at: K7.look},
		{a: '2. attaches', b: 'to a base', at: K7.tobacco},
		{a: '3. slides', b: 'between bases', at: K7.slide},
	];
	return (
		<>
			<Heading text="Chemical mutagens: three ways" at={K7.second} size={56} />
			<Overlay>
				{rows.map((r, k) => (
					<g key={k} opacity={prog(f, r.at - 10, 12) * (1 - 0.45 * (k < 2 ? vis(f, rows[k + 1].at, undefined, 12) : 0))}>
						<Sx x={110} y={Y[k] + 12} text={r.a} size={34} color={INK} hand />
						<Sx x={110} y={Y[k] + 50} text={r.b} size={34} color={INK} hand />
					</g>
				))}
				{/* 1. base analogue */}
				<g opacity={prog(f, K7.look - 10, 12)}>
					<SlimStrand x={sx} y={Y[0]} n={26} pitch={P} gap={40} rung={i => (i === R && f >= K7.builds ? {color: PLUM, w: 7} : undefined)} />
				</g>
				<BaseTag x={rungX(sx, R, P)} y={Y[0] - 4} text="looks like T" len={10} size={22} color={PLUM} ink={PLUM} o={prog(f, K7.builds, 10)} />
				<BaseTag x={rungX(sx, R, P)} y={Y[0] + 44} text="G" below len={10} size={24} color={RED} o={prog(f, K7.wrong, 10)} />
				<Lbl x={rungX(sx, R, P) + 34} y={Y[0] + 92} text="next copy pairs it with G: wrong" size={26} color={RED} at={K7.wrong + 8} />
				<Lbl x={1180} y={Y[0] + 22} text="base analogue" size={48} color={INK} at={K7.analogue} />
				<GTag x={1180} y={Y[0] + 44} text="e.g. 5-bromouracil" at={K7.analogue + 10} size={22} />
				{/* 2. base-modifying chemical */}
				<g opacity={prog(f, K7.tobacco - 10, 12)}>
					<SlimStrand x={sx} y={Y[1]} n={26} pitch={P} gap={40} rung={i => (i === R && f >= K7.attach ? {color: '#8a6a4a', w: 6} : undefined)} />
				</g>
				<Adduct x={rungX(sx, R, P)} y={Y[1] - 6} o={prog(f, K7.attach, 10)} p={smooth(prog(f, K7.attach, 18))} />
				<BaseSwap x={rungX(sx, R, P)} y={Y[1] + 44} from="C" to="A" show={K7.attach + 10} at={K7.pairs + 6} below size={24} len={10} />
				<Lbl x={1180} y={Y[1] + 10} text="attaches and changes pairing" size={36} color={INK} at={K7.attach} />
				<GTag x={1180} y={Y[1] + 34} text="e.g. benzo[a]pyrene, from tobacco smoke" at={K7.tobacco + 10} size={22} />
				{/* 3. intercalating chemical: slides between base pairs, an extra base, every codon shifts */}
				<g opacity={prog(f, K7.slide - 10, 12)}>
					<SlimStrand x={sx} y={Y[2]} n={13} pitch={P} gap={40} />
					<SlimStrand x={sx + 13 * P + 18 * slab} y={Y[2]} n={13} pitch={P} gap={40} />
					<Slab x={sx + 13 * P + 9 * slab} y={Y[2]} gap={40} p={slab} />
					{Array.from({length: 8}, (_, k) => {
						const x0 = sx + k * 3 * P + (k >= 5 ? shift * P : 0) + (k >= 5 ? 18 * slab : 0);
						const hot = k >= 5 ? shift : 0;
						return <path key={k} d={`M${x0 + 4},${Y[2] + 56} L${x0 + 4},${Y[2] + 68} L${x0 + 3 * P - 4},${Y[2] + 68} L${x0 + 3 * P - 4},${Y[2] + 56}`} fill="none" stroke={hot > 0.5 ? AMBER_INK : INK_SOFT} strokeWidth={3.5} opacity={prog(f, K7.slide, 12)} />;
					})}
				</g>
				<BaseTag x={sx + 13 * P + 9} y={Y[2] + 44} text="+1" below len={8} size={22} color={AMBER} o={prog(f, K7.adds + 6, 10)} />
				<Lbl x={1180} y={Y[2] + 10} text="adds or skips a base" size={36} color={INK} at={K7.adds} />
				<Lbl x={1180} y={Y[2] + 56} text="every codon after it shifts" size={32} color={AMBER_INK} at={K7.shifts} />
				<GTag x={1180} y={Y[2] + 76} text="e.g. acridine dyes" at={K7.slide + 20} size={22} />
				<GTag x={1450} y={Y[2] + 76} text="B6c: codons" at={K7.shifts + 10} size={22} />
				<MutBoard fills={[-100, -100, K7.shifts + 40]} />
				{void K7.three}
			</Overlay>
		</>
	);
};

// ---------- 8. Naturally occurring mutagens ----------
const K8 = cues(S('natural'), {third: 'The third group is naturally occurring', harmless: "natural doesn't mean harmless", bg: 'Background radiation', rocks: 'rocks and soil', radon: 'radon gas', space: 'and space', ionb: 'is ionising', brk: 'break DNA strands', afla: 'Aflatoxin', mould: 'made by a mould', peanuts: 'damp peanuts and grain', liver: 'once the liver processes it', attaches: 'attaches to bases', virus: 'some viruses insert', ours: 'into ours', inside: 'If it lands inside a gene', region: 'the region that switches it on', broken: 'can be broken', switched: "switched on when it shouldn't be"});
export const SceneNatural: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [100, 690, 1280], PY = 230, PW = 560, PH = 650, P = 30;
	const brk = prog(f, K8.brk + 10, 12);
	const grey = prog(f, K8.broken + 6, 12), lit = prog(f, K8.switched + 10, 12);
	return (
		<>
			<Heading text="Naturally occurring mutagens" at={K8.third} size={56} />
			<Overlay>
				<MistakeChip x={1300} y={130} text="natural = safe" at={K8.harmless} cross={K8.harmless + 26} size={32} />
				{[K8.bg, K8.afla, K8.virus].map((at, k) => <CardBox key={k} x={PX[k]} y={PY} w={PW} h={PH} at={at - 10} />)}
				{/* background radiation */}
				<PlateAt p={PLATES.granite} cx={380} cy={480} w={400} at={K8.bg} />
				<Wisp x={330} y={360} p={prog(f, K8.radon, 30)} />
				<Lbl x={240} y={300} text="radon gas" size={28} color={INK} anchor="middle" at={K8.radon} />
				<Starburst x={560} y={300} p={prog(f, K8.space, 14)} />
				<Lbl x={540} y={360} text="cosmic rays" size={26} color={INK} anchor="middle" at={K8.space + 6} />
				<Lbl x={380} y={650} text="rocks and soil" size={30} color={INK} anchor="middle" at={K8.rocks} />
				<g opacity={prog(f, K8.ionb, 12)}>
					<SlimStrand x={140} y={700} n={16} pitch={P} gap={40} breaks={[{i: 7, line: 'top', amt: brk}, {i: 7, line: 'bot', amt: brk}]} />
				</g>
				<Lbl x={380} y={820} text="ionising, like X-rays" size={30} color={RED} anchor="middle" at={K8.brk + 14} />
				{/* aflatoxin */}
				<PlateAt p={PLATES.peanuts} cx={970} cy={460} w={420} at={K8.afla} />
				<Lbl x={970} y={650} text="aflatoxin, from Aspergillus mould" size={28} color={INK} anchor="middle" at={K8.mould} />
				<g opacity={prog(f, K8.liver - 10, 12)}>
					<SlimStrand x={730} y={700} n={16} pitch={P} gap={40} rung={i => (i === 8 && f >= K8.attaches ? {color: '#8a6a4a', w: 6} : undefined)} />
				</g>
				<Adduct x={rungX(730, 8, P)} y={694} o={prog(f, K8.attaches, 10)} p={smooth(prog(f, K8.attaches, 18))} />
				<BaseTag x={rungX(730, 8, P)} y={744} text="G" below len={8} size={22} color="#8a6a4a" o={prog(f, K8.attaches + 6, 10)} />
				<Lbl x={970} y={835} text="after the liver processes it, attaches to G" size={24} color={INK} anchor="middle" at={K8.attaches + 10} />
				{/* inserting viruses */}
				<PlateAt p={PLATES.virus} cx={1560} cy={390} w={220} at={K8.virus} />
				<Lbl x={1560} y={540} text="some viruses, e.g. hepatitis B" size={26} color={INK} anchor="middle" at={K8.virus + 10} />
				<g opacity={prog(f, K8.inside - 10, 12)}>
					<SlimStrand x={1320} y={600} n={16} pitch={P} gap={36} band={{i0: 4, i1: 12, fill: grey > 0.5 ? '#e1dfdb' : undefined, color: grey > 0.5 ? '#b5b1aa' : undefined}} insert={{i0: 7, i1: 8, o: prog(f, K8.inside + 10, 12)}} />
				</g>
				<Lbl x={1320} y={680} text="inside a gene:" size={26} color={INK} at={K8.inside + 10} />
				<Lbl x={1490} y={680} text="broken" size={28} color={INK_SOFT} at={K8.broken} />
				<g opacity={prog(f, K8.region - 6, 12)}>
					<rect x={rungX(1320, 1, P) - P / 2} y={722} width={3 * P} height={72} rx={12} fill="#f0e3c4" stroke="#c9a65c" strokeWidth={2} />
					<SlimStrand x={1320} y={740} n={16} pitch={P} gap={36} band={{i0: 5, i1: 14, fill: lit > 0.5 ? '#fbe3b0' : undefined, color: lit > 0.5 ? AMBER : undefined}} insert={{i0: 2, i1: 2, o: prog(f, K8.region + 14, 12)}} />
				</g>
				<Lbl x={1320} y={820} text="in its switch:" size={26} color={INK} at={K8.region + 14} />
				<Lbl x={1480} y={820} text="switched on" size={28} color={AMBER_INK} at={K8.switched} />
				<Sx x={rungX(1320, 2, P)} y={712} text="switch" size={20} color="#9a7a3a" weight={700} anchor="middle" at={K8.region} />
				<MutBoard fills={[-100, -100, -100, K8.switched + 36]} />
				{void K8.peanuts}{void K8.ours}{void TB}
			</Overlay>
		</>
	);
};
