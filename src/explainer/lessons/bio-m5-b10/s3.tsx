// B10 scenes 9 to 11: ABO blood groups (three alleles in the population, two per person; each allele's enzyme and its
// antigen marks; the computed genotype table), the ABO surprise (A x B can give any group, computed square), and the
// memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABO, ABO_TABLE, AMBER, AMBER_INK, AlleleChip, AntigenCell, Fade, GenoTag, HairZoom, HandText, Heading, INK, INK_SOFT, Overlay, PL10, PSym, PlateB, Punnett, S, SexChrom,
	Sx, cw, fadeV, groupMarks, lerp, pgeom, prog,
} from './shared';

// ---------- 9. Multiple alleles: ABO ----------
const K9 = cues(S('abo'), {abo: 'Your ABO blood group', three: 'this gene has three alleles', mult: "That's multiple alleles", two: 'carries only two of them', aEnz: "One allele's enzyme puts A antigens", sugar: 'small sugar markers', rbc: 'on your red blood cells', b: 'Another puts B antigens on', third: 'The third, small i', neither: 'so it adds neither', codom: 'A and B are co-dominant', ab: "you're type AB", domover: 'Both are dominant over small i', o: 'so type O means two small i alleles'});
const CELLS = [{x: 300, a: 'I^{A}', lab: 'I^{A}: A antigens'}, {x: 690, a: 'I^{B}', lab: 'I^{B}: B antigens'}, {x: 1080, a: 'i', lab: "i: enzyme doesn't work"}, {x: 1470, a: 'I^{A} I^{B}', lab: 'I^{A} I^{B}: type AB'}];
export const SceneAboB10: React.FC = () => {
	const f = useCurrentFrame();
	const drop = prog(f, K9.two, 22);
	const at = [K9.aEnz, K9.b, K9.third, K9.codom];
	return (
		<>
			<Heading text="ABO blood groups: multiple alleles" at={K9.mult} size={52} />
			<Overlay>
				{['I^{A}', 'I^{B}', 'i'].map((a, i) => <AlleleChip key={a} x={240 + i * 120} y={250} t={a} r={30} o={prog(f, K9.three + i * 8, 10)} />)}
				<Sx x={180} y={330} text="three alleles in the population" size={32} color={INK_SOFT} hand at={K9.three + 20} />
				<Fade at={K9.two - 6}>
					<rect x={760} y={196} width={430} height={112} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
					<Sx x={790} y={244} text="each person: two" size={34} color={INK} hand />
				</Fade>
				<AlleleChip x={lerp(240, 1090, drop)} y={lerp(250, 252, drop)} t="I^{A}" r={26} o={prog(f, K9.two, 8)} />
				<AlleleChip x={lerp(480, 1150, drop)} y={lerp(250, 252, drop)} t="i" r={26} o={prog(f, K9.two, 8)} />
				<Sx x={790} y={290} text="(for example)" size={24} color={INK_SOFT} hand at={K9.two + 20} />
				{/* each allele's enzyme and its antigen */}
				{CELLS.map((c, i) => {
					const m = i === 0 ? {a: 1, b: 0} : i === 1 ? {a: 0, b: 1} : i === 3 ? {a: 1, b: 1} : {a: 0, b: 0};
					const g = prog(f, at[i] + 10, 30);
					return (
						<g key={i} opacity={prog(f, at[i], 12)}>
							<AntigenCell id={'abo' + i} x={c.x} y={560} w={210} a={m.a * g} b={m.b * g} />
							<Sx x={c.x} y={740} text={c.lab} size={30} color={INK} weight={700} anchor="middle" />
						</g>
					);
				})}
				<Sx x={300} y={430} text="antigen: a small sugar marker" size={30} color={AMBER_INK} hand anchor="middle" at={K9.sugar} />
				<Sx x={1080} y={786} text="adds neither" size={30} color={INK_SOFT} hand anchor="middle" at={K9.neither} />
				<Sx x={1470} y={790} text="co-dominant: both show" size={30} color={AMBER_INK} hand anchor="middle" at={K9.codom + 10} />
				{/* the genotype table, computed from the three alleles */}
				<Fade at={K9.domover - 6}>
					<rect x={160} y={830} width={980} height={210} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				</Fade>
				{ABO_TABLE.groups.map((g, k) => (
					<Sx key={g.t} x={190 + (k % 2) * 480} y={895 + Math.floor(k / 2) * 80} text={`${g.gs.join(', ')}: ${g.t}`} size={36} color={k === 3 ? AMBER_INK : INK} weight={800} at={k === 3 ? K9.o : K9.domover + k * 6} />
				))}
				<Sx x={1190} y={900} text={`${ABO_TABLE.n} genotypes, ${ABO_TABLE.groups.length} blood groups`} size={34} color={INK} hand at={K9.o + 10} />
				<Sx x={1190} y={980} text="O is only ii" size={52} color={AMBER_INK} hand at={K9.o + 20} />
			</Overlay>
		</>
	);
};

// ---------- 10. The ABO surprise ----------
const SA = S('abo-surprise');
const K10 = cues(SA, {surp: "Here's the surprise", parents: 'A type A parent and a type B parent', any: 'a child of any blood group', hidden: 'If each carries a hidden small i', four: 'the square has four boxes', each: 'each with a one in four chance'});
export const SceneAboSurpriseB10: React.FC = () => {
	const f = useCurrentFrame();
	const word = (k: number) => cw(SA, 'AB A B and O', k);
	/** Fill each box on the word that names its group. */
	const fillOf = (i: number) => ({AB: word(0), A: word(1), B: word(2), O: word(4)} as Record<string, number>)[ABO.cells[i].ph];
	const G = {x: 780, y: 360, cell: 200, dr: 42};
	const pg = pgeom(G.x, G.y, G.cell, G.dr);
	return (
		<>
			<Heading text="The ABO surprise" at={K10.surp} size={56} />
			<Overlay>
				<AntigenCell id="pa" x={200} y={400} w={110} a={1} o={prog(f, K10.parents, 12)} labels={false} />
				<GenoTag x={420} y={400} text={prog(f, K10.hidden, 1) > 0 ? 'type A: I^{A} i' : 'type A'} size={32} o={prog(f, K10.parents, 12)} stroke={prog(f, K10.hidden, 1) > 0 ? AMBER : INK_SOFT} />
				<AntigenCell id="pb" x={200} y={700} w={110} b={1} o={prog(f, K10.parents + 8, 12)} labels={false} />
				<GenoTag x={420} y={700} text={prog(f, K10.hidden, 1) > 0 ? 'type B: I^{B} i' : 'type B'} size={32} o={prog(f, K10.parents + 8, 12)} stroke={prog(f, K10.hidden, 1) > 0 ? AMBER : INK_SOFT} />
				<Sx x={300} y={550} text="×" size={56} color={INK} weight={800} anchor="middle" at={K10.parents + 4} />
				<Sx x={300} y={830} text="each hides an i" size={32} color={AMBER_INK} hand anchor="middle" at={K10.hidden + 6} />
				<Punnett x={G.x} y={G.y} cell={G.cell} res={ABO} top={['I^{A}', 'i']} side={['I^{B}', 'i']} gridAt={K10.hidden} topAt={K10.hidden + 4} sideAt={K10.hidden + 8} fillAt={fillOf} discR={G.dr}
					icon={(i, x, y) => { const m = groupMarks(ABO.cells[i].ph); return <AntigenCell id={'bx' + i} x={x - 40} y={y + 6} w={60} a={m.a} b={m.b} labels={false} />; }} />
				{ABO.cells.map(c => { const [x, y] = pg.box(c.i); return <Sx key={c.i} x={x + 40} y={y + 62} text={c.ph} size={44} color={INK} weight={800} anchor="middle" at={fillOf(c.i) + 10} />; })}
				<Fade at={K10.each}>
					<rect x={1270} y={400} width={560} height={260} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Sx x={1300} y={470} text={ABO.phen.map(p => p.ph).join(' : ')} size={40} color={INK} weight={800} />
					<Sx x={1300} y={540} text={`= ${ABO.phen.map(p => p.n).join(' : ')}`} size={40} color={INK} weight={800} />
					<Sx x={1300} y={616} text={`each ${ABO.frac(c => c.ph === 'O')}`} size={40} color={AMBER_INK} hand />
				</Fade>
				<Sx x={1300} y={330} text="any blood group" size={40} color={AMBER_INK} hand at={K10.any} />
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {rem: 'To remember the three relationships', inc: 'incomplete is in-between', co: 'and co shows both', sl: 'And for sex linkage', dad: 'Dad gives his X to daughters', y: 'and his Y to sons'});
export const SceneMemoryB10: React.FC = () => {
	const f = useCurrentFrame();
	const dad: [number, number] = [1100, 780];
	const dau: [number, number] = [850, 960], son: [number, number] = [1350, 960];
	return (
		<>
			<Overlay>
				<PlateB p={PL10.snapPink} cx={200} cy={230} w={90} o={prog(f, K11.inc - 4, 12)} />
				<HairZoom x={200} y={420} r={64} o={prog(f, K11.co - 4, 12)} />
				{/* father square sends his X to a daughter and his Y to a son */}
				<g opacity={prog(f, K11.dad - 4, 12)}>
					<PSym x={dad[0]} y={dad[1]} sex="M" aff={false} sz={70} />
					<PSym x={dau[0]} y={dau[1]} sex="F" aff={false} sz={70} />
					<PSym x={son[0]} y={son[1]} sex="M" aff={false} sz={70} />
					<Sx x={dau[0]} y={dau[1] + 74} text="daughter" size={28} color={INK_SOFT} hand anchor="middle" />
					<Sx x={son[0]} y={son[1] + 74} text="son" size={28} color={INK_SOFT} hand anchor="middle" />
					<Sx x={dad[0]} y={dad[1] - 52} text="dad" size={28} color={INK_SOFT} hand anchor="middle" />
				</g>
				<Fade at={K11.dad + 4}><path d={`M${dad[0] - 30},${dad[1] + 40} L${dau[0] + 30},${dau[1] - 40}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /></Fade>
				<Fade at={K11.y}><path d={`M${dad[0] + 30},${dad[1] + 40} L${son[0] - 30},${son[1] - 40}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /></Fade>
				{(() => {
					const t1 = prog(f, K11.dad + 6, 24), t2 = prog(f, K11.y, 24);
					return (
						<g>
							<SexChrom x={lerp(dad[0] - 40, dau[0] + 60, t1)} y={lerp(dad[1] + 30, dau[1] - 40, t1)} kind="X" s={0.8} o={prog(f, K11.dad + 4, 8)} />
							<SexChrom x={lerp(dad[0] + 40, son[0] - 60, t2)} y={lerp(dad[1] + 30, son[1] - 40, t2)} kind="Y" s={0.8} o={prog(f, K11.y, 8)} />
						</g>
					);
				})()}
			</Overlay>
			<div style={{position: 'absolute', left: 290, top: 180}}><HandText text="Incomplete is in-between." at={K11.inc} size={72} cps={28} /></div>
			<div style={{position: 'absolute', left: 290, top: 370}}><HandText text="Co shows both." at={K11.co} size={72} cps={28} color={AMBER_INK} /></div>
			<div style={{position: 'absolute', left: 150, top: 560}}><HandText text="Dad gives his X to daughters and his Y to sons." at={K11.dad} size={64} cps={30} /></div>
		</>
	);
};
void INK; void fadeV;
