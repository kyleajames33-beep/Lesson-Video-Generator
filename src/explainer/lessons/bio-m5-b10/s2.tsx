// B10 scenes 5 to 8: the X-linked recessive pedigree pattern (P4, and B9's P1 ruled out), read the heterozygote first
// (three rows: complete, in between, both), incomplete dominance in snapdragons (one working enzyme, less pigment; red
// and white return) and co-dominance in roan cattle (each hair one colour, side by side).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AlleleChip, Chip, DrawPath, FLANK, Fade, GREYT, GREY_INK, GenoTag, GreyTag, HairZoom, Heading, INK, INK_SOFT, MistakeChip, Overlay, P1, P4,
	PL10, PeaPlant, Pedigree, PetalZoom, PigmentDots, PlateB, PocketBlob, Punnett, ROAN, Ring, S, SNAP, SexChrom, Sx, TtTt, ZoomLines, fadeV, lerp, pbPt,
	pedXY, prog,
} from './shared';
import type {PLay} from './shared';

// ---------- 5. The X-linked pedigree pattern ----------
const K5 = cues(S('x-linked-pedigree'), {ped: 'In a pedigree', pattern: 'leave a pattern', mostly: 'mostly males are affected', through: 'passes through unaffected carrier mothers', never: 'never passes from father to son', but: "But it doesn't only come from mothers", affF: 'An affected father passes his X', every: 'to every daughter', allcar: 'all his daughters are carriers', test: 'one quick test rules it out', affD: 'an affected daughter with an unaffected father', last: "That's the family from the last video", wasnt: "wasn't X-linked recessive"});
const L5: PLay = {x0: 420, y0: 300, gap: 190, row: 250, sz: 76};
const L5b: PLay = {x0: 1360, y0: 680, gap: 110, row: 110, sz: 44};
export const SceneXPedigreeB10: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(P4, L5);
	const seg = (a: string, b: string, at: number) => {
		const [ax, ay] = xy(a), [bx, by] = xy(b);
		return <DrawPath key={a + b} d={`M${ax},${ay + 40} L${bx},${by - 40}`} at={at} dur={16} color={AMBER} width={7} opacity={0.75} />;
	};
	const travel = (to: string, at: number) => {
		const t = prog(f, at, 24);
		const [ax, ay] = xy('I-1'), [bx, by] = xy(to);
		return <g opacity={fadeV(f, at - 4, at + 40)}><SexChrom x={lerp(ax, bx, t) + 50} y={lerp(ay, by, t) - Math.sin(Math.PI * t) * 30} kind="X" tag="h" s={0.75} /></g>;
	};
	const p1 = prog(f, K5.affD, 14);
	return (
		<>
			<Heading text="The X-linked recessive pattern" at={K5.ped} size={56} />
			<Overlay>
				<GreyTag x={1300} y={96} text="this video: X-linked recessive only" at={K5.ped + 10} size={24} />
				<Pedigree ped={P4} L={L5} o={id => prog(f, 6 + P4.inds.findIndex(p => p.id === id) * 4, 12)} dot={1}
					rings={{'I-1': K5.mostly, 'III-1': K5.mostly + 6, 'III-3': K5.mostly + 12}} />
				<Fade at={K5.through}>{[seg('I-1', 'II-2', K5.through), seg('II-2', 'III-1', K5.through + 12), seg('II-2', 'III-3', K5.through + 16)]}</Fade>
				<Ring cx={xy('II-3')[0]} cy={xy('II-3')[1]} rx={62} ry={62} at={K5.never} color={GREYT} seed={4} />
				{travel('II-2', K5.every)}
				{travel('II-4', K5.every + 6)}
				{/* the notes panel */}
				<Sx x={1180} y={290} text="mostly males affected" size={34} color={AMBER_INK} hand at={K5.mostly + 6} />
				<Sx x={1180} y={346} text="through carrier mothers (dot)" size={34} color={AMBER_INK} hand at={K5.through + 6} />
				<Sx x={1180} y={402} text="father to son: never (a son gets his Y)" size={34} color={INK} hand at={K5.never + 6} />
				<MistakeChip x={1180} y={440} text="only from mothers" at={K5.but} cross={K5.but + 16} size={30} />
				<Sx x={1180} y={540} text="affected father: every daughter gets his X^{h}" size={30} color={INK} hand at={K5.allcar} />
				<Sx x={1180} y={576} text="here mum gives X^{H}, so each is a carrier" size={30} color={INK} hand at={K5.allcar + 6} />
				{/* the quick test, on B9's family */}
				<g opacity={p1}>
					<rect x={1180} y={600} width={650} height={420} rx={22} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
					<GreyTag x={1200} y={616} text="B9" at={K5.affD} size={22} />
					<Pedigree ped={P1} L={L5b} rings={{'III-1': K5.affD + 10, 'II-4': K5.affD + 18}} chipSize={18} />
					<Sx x={1505} y={984} text="affected daughter, unaffected father:" size={28} color={AMBER_INK} hand anchor="middle" at={K5.affD + 20} />
					<Sx x={1505} y={1014} text="not X-linked recessive" size={28} color={AMBER_INK} hand anchor="middle" at={K5.wasnt} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- the heterozygote board ----------
export const HB = {cols: [700, 1020, 1340], rows: [330, 590, 850], labelX: 110};
const RowFrame: React.FC<{y: number; at: number; label?: string; labelAt?: number; q?: boolean; o?: number}> = ({y, at, label, labelAt, q, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<rect x={HB.labelX - 20} y={y - 115} width={1720} height={230} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
			{q ? <Sx x={HB.cols[1]} y={y + 30} text="?" size={90} color={GREY_INK} weight={800} anchor="middle" /> : null}
			{label && labelAt !== undefined ? <Sx x={HB.labelX} y={y + 12} text={label} size={36} color={INK} hand at={labelAt} /> : null}
		</g>
	);
};

// ---------- 6. Read the heterozygote first ----------
const K6 = cues(S('heterozygote-first'), {sofar: 'So far, one allele has always', three: 'gave 3 to 1', notonly: "that's not the only possibility", fast: 'The fastest way', read: 'read the heterozygote first', like: 'Does it look like one of the homozygotes', between: 'does it look in between', both: 'or does it show both at once'});
export const SceneHetFirstB10: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Read the heterozygote first" at={K6.fast} size={56} />
			<Overlay>
				{['homozygote', 'heterozygote', 'homozygote'].map((t, i) => <Sx key={i} x={HB.cols[i]} y={196} text={t} size={30} color={INK_SOFT} hand anchor="middle" at={K6.sofar + i * 4} />)}
				<RowFrame y={HB.rows[0]} at={K6.sofar} label="complete dominance" labelAt={K6.sofar + 4} />
				{([['TT', true], ['Tt', true], ['tt', false]] as [string, boolean][]).map(([g, tall], i) => (
					<g key={g} opacity={prog(f, K6.sofar + 6 + i * 5, 12)}>
						<PeaPlant tall={tall} x={HB.cols[i]} ground={HB.rows[0] + 70} k={0.12} />
						<GenoTag x={HB.cols[i] + 90} y={HB.rows[0] + 60} text={g} size={28} />
					</g>
				))}
				<Punnett x={1530} y={HB.rows[0] - 62} cell={62} res={TtTt} top={['T', 't']} side={['T', 't']} gridAt={K6.three - 6} topAt={K6.three - 4} sideAt={K6.three - 2} fillAt={() => K6.three} discR={14} plain chipR={11.5} />
				<Sx x={1720} y={HB.rows[0] + 14} text="3 : 1" size={40} color={INK} weight={800} at={K6.three + 6} />
				<GreyTag x={1700} y={HB.rows[0] + 34} text="B9" at={K6.three + 6} size={22} />
				<Ring cx={HB.cols[1]} cy={HB.rows[0] - 10} rx={66} ry={100} at={K6.read} />
				<Sx x={HB.cols[1] + 140} y={HB.rows[0] + 6} text="looks like TT" size={28} color={AMBER_INK} hand at={K6.like} />
				<RowFrame y={HB.rows[1]} at={K6.between} label="in between?" labelAt={K6.between + 4} q />
				<RowFrame y={HB.rows[2]} at={K6.both} label="both at once?" labelAt={K6.both + 4} q />
			</Overlay>
		</>
	);
};

// ---------- 7. Incomplete dominance: snapdragons ----------
const K7 = cues(S('incomplete-dominance'), {snap: 'Snapdragons show the in-between kind', cross1: 'Cross a red one with a white one', pink: 'every offspring is pink', enzyme: 'The red allele codes for an enzyme', white: "The white allele's enzyme doesn't work", b7: 'in the proteins video', less: 'One working copy makes less pigment', term: "That's incomplete dominance", cross2: 'Cross two pinks', ratio: 'and you get 1 red', back: 'Red and white come back', blended: 'the alleles never blended', colour: 'Only the colour did'});
export const SceneIncompleteB10: React.FC = () => {
	const f = useCurrentFrame();
	const sA = fadeV(f, 0, K7.cross2);
	const sB = prog(f, K7.cross2 + 4, 14);
	const X = [420, 960, 1500];
	const fl: {x: number; p: typeof PL10.snapRed; g: string; at: number; blobs: [number, number]; dots: number}[] = [
		{x: X[0], p: PL10.snapRed, g: 'C^{R} C^{R}', at: K7.cross1, blobs: [0, 0], dots: 18},
		{x: X[1], p: PL10.snapWhite, g: 'C^{W} C^{W}', at: K7.cross1 + 8, blobs: [0.85, 0.85], dots: 0},
		{x: X[2], p: PL10.snapPink, g: 'C^{R} C^{W}', at: K7.pink, blobs: [0, 0.85], dots: 8},
	];
	const G = {x: 760, y: 360, cell: 180, dr: 40};
	const snapOf = (ph: string) => (ph === 'red' ? PL10.snapRed : ph === 'pink' ? PL10.snapPink : PL10.snapWhite);
	return (
		<>
			<Heading text="Incomplete dominance" at={K7.term} size={56} />
			<Overlay>
				<g opacity={sA}>
					{fl.map((s, i) => (
						<g key={i} opacity={prog(f, s.at, 14)}>
							<PlateB p={s.p} cx={s.x} cy={390} w={190} />
							<GenoTag x={s.x} y={610} text={s.g} size={32} />
							{s.blobs.map((sq, k) => (
								<g key={k} style={sq > 0 ? {filter: 'grayscale(0.85)'} : undefined} opacity={sq > 0 ? 0.65 : 1}>
									<PocketBlob cx={s.x - 70 + k * 120} cy={720} R={46} squeeze={sq} o={prog(f, K7.enzyme + i * 6 + k * 4, 12)} sub={0} subO={0} />
								</g>
							))}
							<PigmentDots x={s.x} y={810} n={s.dots} at={i === 2 ? K7.less : K7.enzyme + 10} />
						</g>
					))}
					<Sx x={690} y={410} text="×" size={56} color={INK} weight={800} anchor="middle" at={K7.cross1 + 4} />
					<Sx x={1230} y={410} text="→" size={56} color={INK} weight={800} anchor="middle" at={K7.pink - 4} />
					<Sx x={X[1]} y={186} text="red × white: every offspring pink" size={36} color={AMBER_INK} hand anchor="middle" at={K7.pink + 4} />
					<GreyTag x={X[1] + 120} y={626} text="B7: enzyme doesn't work" at={K7.b7} size={22} />
					<Sx x={X[2]} y={900} text="one working copy: less pigment" size={36} color={AMBER_INK} hand anchor="middle" at={K7.less + 10} />
					<Fade at={K7.term}>
						<rect x={360} y={930} width={1200} height={74} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
						<Sx x={960} y={980} text="incomplete dominance: the heterozygote is in between" size={36} color={INK} hand anchor="middle" />
					</Fade>
					<GreyTag x={1240} y={1016} text="neither allele dominant: one capital letter, two superscripts" at={K7.term + 16} size={22} />
				</g>
				<g opacity={sB}>
					<PlateB p={PL10.snapPink} cx={300} cy={420} w={120} />
					<GenoTag x={300} y={560} text="C^{R} C^{W}" size={28} />
					<Sx x={300} y={640} text="×" size={50} color={INK} weight={800} anchor="middle" />
					<PlateB p={PL10.snapPink} cx={300} cy={760} w={120} />
					<GenoTag x={300} y={900} text="C^{R} C^{W}" size={28} />
					<Punnett x={G.x} y={G.y} cell={G.cell} res={SNAP} top={['C^{R}', 'C^{W}']} side={['C^{R}', 'C^{W}']} gridAt={K7.cross2} topAt={K7.cross2 + 4} sideAt={K7.cross2 + 6} fillAt={i => K7.cross2 + 12 + i * 6} discR={G.dr}
						icon={(i, x, y) => <PlateB p={snapOf(SNAP.cells[i].ph)} cx={x} cy={y + 10} w={44} />} ring={i => (SNAP.cells[i].ph !== 'pink' ? prog(f, K7.back, 12) : 0)} />
					<Fade at={K7.ratio - 4}>
						<rect x={1230} y={370} width={610} height={220} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
						<Sx x={1260} y={430} text="genotypes  1 : 2 : 1" size={38} color={INK} weight={800} />
						<Sx x={1260} y={500} text={`phenotypes  ${SNAP.phenText}`} size={34} color={INK} weight={800} />
						<Sx x={1260} y={556} text="(nothing merges: each genotype looks different)" size={24} color={INK_SOFT} hand />
					</Fade>
					<MistakeChip x={1230} y={660} text="pink = blended alleles" at={K7.blended - 10} cross={K7.blended + 6} size={32} />
					<Sx x={1250} y={790} text="red and white return" size={38} color={AMBER_INK} hand at={K7.back + 6} />
					<Sx x={1250} y={846} text="only the colour was in between" size={34} color={INK} hand at={K7.colour} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 8. Co-dominance: roan cattle ----------
const K8 = cues(S('co-dominance'), {cattle: 'Cattle show the other kind', cross: 'Cross a red bull with a white cow', roan: 'the calves are roan', look: 'Look closely at a roan coat', isnt: "It isn't pink", each: 'Each hair is either fully red', both: 'Both alleles are fully expressed', term: "That's co-dominance", two: 'Two roans give', same: 'the same ratio as the snapdragons', het: 'the heterozygote looks different'});
export const SceneCoDomB10: React.FC = () => {
	const f = useCurrentFrame();
	const C = {y: 390, w: 420};
	const roanPt = pbPt(PL10.cowRoan, 960, C.y, C.w)(...FLANK);
	const zoom = fadeV(f, K8.look, K8.two);
	const grid = prog(f, K8.two, 14);
	const G = {x: 720, y: 720, cell: 140, dr: 30};
	const cowOf = (ph: string) => (ph === 'red' ? PL10.cowRed : ph === 'roan' ? PL10.cowRoan : PL10.cowWhite);
	return (
		<>
			<Heading text="Co-dominance" at={K8.term} size={56} />
			<Overlay>
				<PlateB p={PL10.cowRed} cx={330} cy={C.y} w={360} o={prog(f, K8.cross, 12)} />
				<GenoTag x={330} y={590} text="C^{R} C^{R}" size={30} o={prog(f, K8.cross + 4, 12)} />
				<Sx x={330} y={210} text="red bull" size={32} color={INK} hand anchor="middle" at={K8.cross + 4} />
				<PlateB p={PL10.cowWhite} cx={1590} cy={C.y} w={360} o={prog(f, K8.cross + 8, 12)} />
				<GenoTag x={1590} y={590} text="C^{W} C^{W}" size={30} o={prog(f, K8.cross + 12, 12)} />
				<Sx x={1590} y={210} text="white cow" size={32} color={INK} hand anchor="middle" at={K8.cross + 12} />
				<PlateB p={PL10.cowRoan} cx={960} cy={C.y} w={C.w} o={prog(f, K8.roan, 14)} />
				<GenoTag x={960} y={600} text="C^{R} C^{W}" size={30} o={prog(f, K8.roan + 4, 12)} />
				<Sx x={960} y={210} text="roan calf" size={36} color={AMBER_INK} hand anchor="middle" at={K8.roan + 4} />
				<Sx x={960} y={664} text="co-dominance: both alleles expressed, side by side" size={34} color={INK} hand anchor="middle" at={K8.term} out={K8.two} />
				{/* hair zoom against petal zoom */}
				<g opacity={zoom}>
					<ZoomLines from={roanPt} to={[700, 860]} r={130} spot={20} />
					<HairZoom x={700} y={860} r={130} grow={prog(f, K8.look, 18)} />
					<Sx x={700} y={1030} text="roan: each hair one colour" size={32} color={INK} hand anchor="middle" at={K8.each} />
					<PlateB p={PL10.snapPink} cx={1500} cy={860} w={110} o={prog(f, K8.isnt, 12)} />
					<ZoomLines from={[1500, 780]} to={[1240, 860]} r={130} spot={14} o={prog(f, K8.isnt, 12)} />
					<PetalZoom x={1240} y={860} r={130} grow={prog(f, K8.isnt, 18)} />
					<Sx x={1240} y={1030} text="pink: every cell in between" size={32} color={INK} hand anchor="middle" at={K8.isnt + 10} />
				</g>
				{/* two roans */}
				<g opacity={grid}>
					<Punnett x={G.x} y={G.y} cell={G.cell} res={ROAN} top={['C^{R}', 'C^{W}']} side={['C^{R}', 'C^{W}']} gridAt={K8.two} topAt={K8.two + 2} sideAt={K8.two + 4} fillAt={i => K8.two + 8 + i * 5} discR={G.dr}
						icon={(i, x, y) => <PlateB p={cowOf(ROAN.cells[i].ph)} cx={x} cy={y + 8} w={74} />} chipR={18} />
					<Sx x={1060} y={790} text={ROAN.phenText} size={40} color={INK} weight={800} at={K8.two + 26} />
					<Sx x={1060} y={850} text={`snapdragons: ${SNAP.phenText}`} size={32} color={INK_SOFT} weight={700} at={K8.same} />
					<Sx x={1060} y={930} text="heterozygote looks new:" size={34} color={AMBER_INK} hand at={K8.het} />
					<Sx x={1060} y={980} text="phenotype ratio = genotype ratio, 1 : 2 : 1" size={34} color={AMBER_INK} hand at={K8.het + 10} />
				</g>
			</Overlay>
		</>
	);
};
void AMBER; void AlleleChip; void Chip; void GREYT;
