// B12 scenes 5 to 8 on the gel board: short tandem repeats (GATA blocks; repeat numbers differ; one copy from each
// parent), separating repeats in a gel (negative DNA moves to +; the shorter group races ahead and settles as a band),
// reading inheritance from bands (every child band from mother or father; man X excluded) and why a match needs many
// markers (chances multiply rung by rung, computed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, CPLUM, ChromBar, Cross, DrawPath, EDGE, Fade, Gel, GreyTag, Heading, INK, INK_SOFT, Overlay, PL12, PSym, Panel, PlainArrow, PlateB, RepeatStrip,
	Ring, S, Sx, TEALC, TRIO, TileRow, bandY, clamp01, fragLen, ladderText, laneX, lerp, prog, vis,
} from './shared';
import type {GelG} from './shared';

// ---------- 5. Short tandem repeats ----------
const K5 = cues(S('short-tandem-repeats'), {
	today: 'profiling usually looks at markers', called: 'called short tandem repeats', run: 'a short run of bases', gata: 'like G, A, T, A', rep: 'repeated over and over', side: 'side by side',
	varies: 'The number of repeats varies', eight: 'might have eight repeats', eleven: 'the other copy eleven', two: 'You carry two copies', parent: 'one from each parent', inh: 'your repeat numbers are inherited',
});
export const SceneStrB12: React.FC = () => {
	const f = useCurrentFrame();
	const box = prog(f, K5.gata + 40, 12);
	const pairY = [790, 900];
	return (
		<>
			<Heading text="Short tandem repeats" at={K5.called} size={56} />
			<Overlay>
				<TileRow x={180} y={290} seq="CTTGATA" pitch={64} w={56} h={46} tile={i => ({o: prog(f, K5.run + i * 4, 8), glow: i >= 3 ? vis(f, K5.gata + i * 10 - 20, K5.rep + 20) : 0})} />
				{box > 0.01 ? <rect x={180 + 3 * 64 - 34} y={258} width={4 * 64 + 4} height={74} rx={14} fill="none" stroke={AMBER_INK} strokeWidth={4} opacity={box} /> : null}
				<Sx x={180 + 4.5 * 64} y={240} text="one repeat unit" size={30} color={AMBER_INK} hand anchor="middle" at={K5.gata + 46} />
				<RepeatStrip x={140} y={420} n={9} grow={prog(f, K5.rep, 60)} o={prog(f, K5.rep - 6, 10)} />
				<Sx x={1120} y={300} text="short tandem repeat (STR)" size={50} color={INK} hand at={K5.side} />
				<Sx x={1120} y={350} text="tandem: side by side" size={34} color={INK_SOFT} weight={700} at={K5.side + 14} />
				{/* repeat numbers vary */}
				{[7, 9, 12].map((n, i) => (
					<RepeatStrip key={n} x={140} y={530 + i * 56} n={n} bw={44} bh={30} o={prog(f, K5.varies + i * 8, 12)} label={false} />
				))}
				<Sx x={1120} y={600} text="repeat number varies person to person" size={34} color={INK} hand at={K5.varies + 20} />
				{/* two copies, one from each parent */}
				{[0, 1].map(k => (
					<g key={k} opacity={prog(f, k ? K5.eleven - 6 : K5.eight - 6, 12)}>
						<rect x={140} y={pairY[k] - 24} width={1300} height={48} rx={24} fill={k ? TEALC : CPLUM} fillOpacity={0.1} stroke={k ? TEALC : CPLUM} strokeWidth={2} strokeOpacity={0.5} />
						<RepeatStrip x={360} y={pairY[k]} n={k ? 11 : 8} bw={56} bh={34} grow={prog(f, k ? K5.eleven : K5.eight, 26)} label={false} />
					</g>
				))}
				<Sx x={1480} y={pairY[0] + 12} text="from mother" size={36} color={CPLUM} hand at={K5.parent} />
				<Sx x={1480} y={pairY[1] + 12} text="from father" size={36} color={TEALC} hand at={K5.parent + 8} />
				<Sx x={140} y={pairY[0] - 46} text="one chromosome pair, same marker" size={28} color={INK_SOFT} weight={700} at={K5.eight - 6} />
				<Sx x={140} y={1010} text="repeat numbers are inherited, just like alleles" size={36} color={AMBER_INK} hand at={K5.inh} />
				<GreyTag x={1120} y={660} text="most STRs are in DNA that doesn't code for protein" at={K5.two} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 6. Separating repeats in a gel ----------
const K6 = cues(S('gel'), {
	copy: 'labs copy each marker', run: 'run the copies through a gel', neg: 'DNA is negatively charged', pulls: 'pulls it towards the positive end', jelly: 'The gel is a jelly',
	pores: 'full of tiny pores', every: 'Every piece carries the same charge', speed: 'so the pores decide the speed', shorter: 'shorter pieces slip through', further: 'so they travel further',
	band: 'Each length ends up as a band', profile: 'their profile',
});
const G6: GelG = {x: 640, y: 310, w: 300, h: 600, n: 1, lo: 6, hi: 13};
export const SceneGelB12: React.FC = () => {
	const f = useCurrentFrame();
	const stacks = prog(f, K6.copy + 10, 20);
	const race = prog(f, K6.shorter - 10, 110, (t: number) => t);
	const settle = prog(f, K6.band, 14);
	const wellY = G6.y + 21;
	const cx = laneX(G6, 0);
	const groups = [{n: 8, c: AMBER_INK}, {n: 11, c: '#3e6a86'}];
	return (
		<>
			<Heading text="Separating repeats in a gel" at={K6.copy} size={56} />
			<Overlay>
				{/* copies of each marker */}
				{groups.map((g, k) => (
					<g key={k}>
						{Array.from({length: 4}, (_, j) => (
							<g key={j} opacity={j === 0 ? prog(f, 0, 12) : stacks} transform={`translate(${j * 6},${j * 18})`}>
								<RepeatStrip x={110} y={290 + k * 150} n={g.n} bw={26} bh={14} label={false} count={j === 3 ? 1 : 0} />
							</g>
						))}
						{f >= K6.neg ? Array.from({length: 6}, (_, j) => <text key={j} x={170 + j * 50} y={286 + k * 150 + (j % 2) * 60} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill="#2f5d7a" opacity={0.4 + 0.6 * Math.abs(Math.sin((f - K6.neg) / 8 + j))}>{'−'}</text>) : null}
					</g>
				))}
				<GreyTag x={110} y={580} text="copying: PCR, Module 6" at={K6.copy + 20} size={24} />
				<Sx x={110} y={680} text="DNA is negatively charged" size={36} color="#2f5d7a" hand at={K6.neg} />
				<Sx x={110} y={760} text="same charge for its length:" size={32} color={INK} hand at={K6.every} />
				<Sx x={110} y={804} text="the pores decide the speed" size={32} color={INK} hand at={K6.speed} />
				{/* the gel and the race */}
				<Gel G={G6} lanes={[{sex: 'F', label: '', bands: [8, 11]}]} bandO={() => 0} o={prog(f, K6.run, 14)} />
				{groups.map((g, k) => {
					const target = bandY(G6, g.n);
					const y = lerp(wellY, target, race);
					const fuzz = (1 - settle) * 10 * Math.min(1, race * 4);
					return race > 0.001 ? (
						<g key={k}>
							<rect x={cx - 50} y={y - 5 - fuzz} width={100} height={10 + 2 * fuzz} rx={6} fill="#3e6a86" opacity={0.85 - 0.4 * (fuzz / 10)} />
							<Sx x={cx + 62} y={y + 9} text={String(g.n)} size={28} color={INK} weight={800} at={K6.band} />
						</g>
					) : null;
				})}
				<Sx x={cx} y={G6.y + G6.h + 56} text={`${fragLen(8)} and ${fragLen(11)} bases`} size={24} color={INK_SOFT} weight={600} anchor="middle" at={K6.band + 10} />
				<PlainArrow x1={1100} y1={420} x2={1100} y2={800} at={K6.pulls} color={AMBER_INK} width={6} />
				<Sx x={1124} y={620} text="DNA moves to +" size={38} color={AMBER_INK} hand at={K6.pulls + 10} />
				<Sx x={cx} y={200} text="one person, one marker" size={30} color={INK} hand anchor="middle" at={K6.profile} />
				<Sx x={1124} y={680} text="shorter travels further" size={32} color={INK} hand at={K6.further} />
				{/* context and the pores */}
				<PlateB p={PL12.tank} cx={1620} cy={300} w={400} o={prog(f, K6.run, 14)} />
				<GreyTag x={1470} y={440} text="gel tank (context)" at={K6.run + 6} size={22} />
				<g opacity={prog(f, K6.jelly, 14)}>
					<defs><clipPath id="b12mesh"><circle cx={1580} cy={720} r={150} /></clipPath></defs>
					<circle cx={1580} cy={720} r={150} fill="#e7f1f5" />
					<g clipPath="url(#b12mesh)">
						{Array.from({length: 16}, (_, i) => <path key={'a' + i} d={`M${1420 + i * 22},560 Q${1460 + i * 22},720 ${1410 + i * 22},880`} fill="none" stroke="#8fb3c2" strokeWidth={2.5} />)}
						{Array.from({length: 16}, (_, i) => <path key={'b' + i} d={`M1420,${560 + i * 22} Q1580,${600 + i * 22} 1740,${555 + i * 22}`} fill="none" stroke="#8fb3c2" strokeWidth={2.5} />)}
						<rect x={1540} y={lerp(600, 800, prog(f, K6.shorter, 60))} width={10} height={44} rx={4} fill={AMBER_INK} opacity={prog(f, K6.shorter, 8)} />
						<rect x={1610} y={lerp(600, 690, prog(f, K6.shorter, 60))} width={10} height={80} rx={4} fill="#3e6a86" opacity={prog(f, K6.shorter, 8)} />
					</g>
					<circle cx={1580} cy={720} r={150} fill="none" stroke={INK} strokeWidth={4} />
					<Sx x={1580} y={904} text="tiny pores" size={32} color={INK} hand anchor="middle" />
				</g>
				<GreyTag x={110} y={990} text="labs now often use thin tubes instead of a slab; same idea" at={K6.profile + 10} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 7. Reading inheritance from bands ----------
const K7 = cues(S('child-bands'), {
	here: "Here's how profiles show inheritance", every: 'At every marker', mother: 'one copy from the mother', father: 'and one from the father', must: 'must match a band',
	eight: "the child's eight came", twelve: 'the twelve came from the father', neither: 'if a child has a band that neither', ruled: 'can be ruled out',
});
const G7: GelG = {x: 300, y: 340, w: 960, h: 560, n: 4, lo: 7, hi: 14};
export const SceneChildBandsB12: React.FC = () => {
	const f = useCurrentFrame();
	const lanes = [
		{sex: 'F' as const, label: 'mother', bands: TRIO.mother}, {sex: 'M' as const, label: 'child', bands: TRIO.child, small: true},
		{sex: 'M' as const, label: 'father', bands: TRIO.father}, {sex: 'M' as const, label: 'man X', bands: TRIO.manX},
	];
	const neither = prog(f, K7.neither, 14);
	const y8 = bandY(G7, 8), y12 = bandY(G7, 12);
	return (
		<>
			<Heading text="Reading inheritance from bands" at={K7.here} size={56} />
			<Overlay>
				<Gel G={G7} lanes={lanes} laneO={i => (i < 3 ? prog(f, 6 + i * 8, 12) * (i === 2 ? 1 - 0.7 * neither : 1) : neither)}
					ring={(i, j) => (i === 1 ? (j === 0 ? vis(f, K7.mother, K7.father) : vis(f, K7.father, K7.must)) || (j === 1 ? neither : 0) : 0)} symSz={48} labelSize={30} />
				<g opacity={vis(f, K7.eight, K7.neither)}>
					<DrawPath d={`M${laneX(G7, 1) - 60},${y8} L${laneX(G7, 0) + 60},${y8}`} at={K7.eight} dur={14} color={CPLUM} width={7} />
				</g>
				<g opacity={vis(f, K7.twelve, K7.neither)}>
					<DrawPath d={`M${laneX(G7, 1) + 60},${y12} L${laneX(G7, 2) - 60},${y12}`} at={K7.twelve} dur={14} color={TEALC} width={7} />
				</g>
				<Sx x={laneX(G7, 0)} y={G7.y + G7.h + 50} text="8 from mother" size={30} color={CPLUM} hand anchor="middle" at={K7.eight + 10} out={K7.neither} />
				<Sx x={laneX(G7, 2)} y={G7.y + G7.h + 50} text="12 from father" size={30} color={TEALC} hand anchor="middle" at={K7.twelve + 10} out={K7.neither} />
				<Panel x={1470} y={420} w={390} h={150} stroke={AMBER} sw={3.5} o={prog(f, K7.must, 12)} />
				<Sx x={1495} y={480} text="every child band:" size={40} color={INK} hand at={K7.must} />
				<Sx x={1495} y={536} text="from mother or father" size={40} color={AMBER_INK} hand at={K7.must + 6} />
				{/* the search for the child's 12 */}
				<g opacity={neither}>
					<Sx x={laneX(G7, 1) + 70} y={y12 - 18} text="?" size={40} color={AMBER_INK} weight={800} />
					<line x1={laneX(G7, 1) - 60} y1={y12} x2={laneX(G7, 0) - 40} y2={y12} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 7" />
					<line x1={laneX(G7, 1) + 60} y1={y12 + 26} x2={laneX(G7, 3) + 40} y2={y12 + 26} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 7" />
				</g>
				<Cross x={laneX(G7, 0)} y={y12} at={K7.neither + 20} s={18} />
				<Cross x={laneX(G7, 3)} y={y12 + 26} at={K7.neither + 28} s={18} />
				<Cross x={laneX(G7, 3)} y={G7.y - 54} at={K7.ruled} s={34} />
				<Sx x={laneX(G7, 3)} y={G7.y + G7.h + 50} text="excluded" size={36} color={INK_SOFT} hand anchor="middle" at={K7.ruled + 6} />
				<GreyTag x={1470} y={640} text="assuming no new mutation in the marker" at={K7.ruled + 14} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 8. Why a match needs many markers ----------
const K8 = cues(S('many-markers'), {
	match: 'A match is weaker evidence', lots: 'lots of people share', say: "Say each marker's pattern", ten: 'one person in ten', matching: 'Matching one marker', sep: 'inherited separately',
	mult: 'the chances multiply', three: 'Three markers give', tenb: 'and ten give one in ten billion', real: 'real profiles compare many markers', proof: 'strong evidence, not proof',
});
export const SceneManyMarkersB12: React.FC = () => {
	const f = useCurrentFrame();
	const RY = [300, 410, 520, 650];
	const rungs = [{n: 1, at: K8.matching}, {n: 2, at: K8.mult + 10}, {n: 3, at: K8.three}, {n: 10, at: K8.tenb}];
	return (
		<>
			<Heading text="Why a match needs many markers" at={K8.match} size={56} />
			<Overlay>
				{/* a crowd of ten, one shares the pattern */}
				{Array.from({length: 10}, (_, i) => (
					<g key={i} opacity={prog(f, K8.lots + i * 2, 10)}>
						{i === 6 && f >= K8.ten ? <circle cx={150 + i * 52} cy={270} r={30} fill={AMBER} opacity={0.6 * prog(f, K8.ten, 10)} /> : null}
						<PSym x={150 + i * 52} y={270} sex={i % 2 ? 'F' : 'M'} aff={false} sz={36} />
					</g>
				))}
				<Sx x={130} y={348} text="1 in 10 share this pattern" size={36} color={AMBER_INK} hand at={K8.ten} />
				<GreyTag x={560} y={316} text="example number" at={K8.ten + 10} size={22} />
				{/* three markers on three chromosomes */}
				{[0, 1, 2].map(i => (
					<g key={i} opacity={prog(f, i === 0 ? K8.matching : K8.sep + i * 6, 12)}>
						<ChromBar x={140} y={470 + i * 96} w={380} h={30} />
						<Sx x={540} y={480 + i * 96} text={`chromosome ${[3, 7, 12][i]}`} size={24} color={INK_SOFT} weight={600} />
						<rect x={250 + i * 60} y={470 + i * 96 - 22} width={18} height={44} rx={5} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
					</g>
				))}
				<GreyTag x={140} y={760} text="different chromosomes: inherited independently" at={K8.sep + 14} size={24} />
				{/* the ladder */}
				<Panel x={900} y={220} w={920} h={560} o={prog(f, K8.matching, 12)} />
				{rungs.map((r, i) => (
					<g key={r.n} opacity={prog(f, r.at, 12)}>
						<Sx x={940} y={RY[i]} text={`${r.n} marker${r.n > 1 ? 's' : ''}:`} size={44} color={INK} weight={800} />
						<Sx x={1190} y={RY[i]} text={ladderText(r.n)} size={44} color={r.n === 10 ? AMBER_INK : INK} weight={800} />
						{i > 0 && r.n !== 10 ? <Sx x={1600} y={RY[i]} text="x 1/10" size={30} color={INK_SOFT} weight={700} /> : null}
					</g>
				))}
				<Sx x={1190} y={730} text="one in ten billion" size={38} color={AMBER_INK} hand at={K8.tenb + 16} />
				<Sx x={940} y={585} text="..." size={44} color={INK_SOFT} weight={800} at={K8.tenb} />
				<GreyTag x={900} y={810} text="real profiles: often 16 or more markers" at={K8.real} size={26} />
				<Sx x={900} y={910} text="a match is strong evidence, not proof" size={46} color={INK} hand at={K8.proof} />
				<GreyTag x={140} y={970} text="close relatives share more bands, so the chances are not this small for a brother" at={K8.proof + 10} size={22} />
			</Overlay>
		</>
	);
};
void CARD; void EDGE; void Fade; void Ring; void clamp01;
