// M6 B02 scenes 1 to 4 on the strand board: UV damage in skin and repair (hook), mutagen against mutation, how a
// damaged base becomes a mutation (repair first, or copied first), and why exposure is a risk, not a guarantee.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {kf} from '../chem-m5-c03/common';
import {DrawPath, Heading, MistakeChip, Overlay, PlainArrow, PlateB, Ring, Sx, Tick, prog} from '../bio-m5-b13/shared';
import {PLATES} from '../bio-m6-b01/assets';
import {S} from './common';
import {
	AMBER, AMBER_INK, BEAKER, BaseSwap, BaseTag, CardBox, CurveArrow, Damage, Fork, GTag, INK, INK_SOFT, Lbl, PlateAt, RED, RepairBlob, SUN, SlimStrand, lerp, rungX, vis, wForH,
} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {damages: 'damages the DNA in your skin cells', many: 'many times over', yet: 'Yet almost all of that damage', fix: 'Your cells fix it', what: 'So what exactly does UV do', xrays: 'X-rays', chem: 'some chemicals', why: "And why doesn't damage always become a mutation"});
const L1 = {x: 1180, y: 520, r: 250};
const MARKS1 = [2, 5, 8, 11];
const KEEP1 = 8;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 970, sy = 498, pitch = 30;
	const blobX = lerp(930, 1430, prog(f, K1.fix, 80, t => t));
	const lens = prog(f, K1.damages - 4, 16);
	return (
		<>
			<Heading text="How mutagens work" at={K1.what} size={60} />
			<Overlay>
				<PlateAt p={PLATES.uvSkin} cx={420} cy={590} w={560} at={0} />
				{/* magnifier on the top layer of the skin */}
				<g opacity={lens}>
					<DrawPath d={`M${520},${640} L${L1.x - L1.r + 10},${L1.y + 40}`} at={K1.damages - 4} dur={14} color={INK_SOFT} width={3} dash="7 6" />
					<circle cx={520} cy={640} r={26} fill="none" stroke={INK_SOFT} strokeWidth={3} />
					<circle cx={L1.x} cy={L1.y} r={L1.r} fill="#fbf7ef" stroke={INK_SOFT} strokeWidth={4} />
					<SlimStrand x={sx} y={sy} n={14} pitch={pitch} gap={44} />
					<Sx x={L1.x} y={L1.y - 130} text="DNA in one skin cell" size={30} color={INK_SOFT} hand anchor="middle" />
				</g>
				{MARKS1.map((r, k) => {
					const x = rungX(sx, r, pitch);
					const appear = prog(f, k === 0 ? K1.damages + 20 : K1.many + (k - 1) * 14, 10);
					const fixed = r !== KEEP1 && blobX > x ? prog(f, K1.fix + ((x - 930) / 500) * 80, 10) : 0;
					return <Damage key={k} x={x} y={sy} o={appear * (1 - fixed)} pulse={r === KEEP1 ? vis(f, K1.why, undefined, 12) : 0} />;
				})}
				<RepairBlob x={blobX} y={sy - 40} o={vis(f, K1.fix - 6, K1.fix + 90, 10)} s={0.8} />
				<Lbl x={L1.x} y={L1.y + 120} text="damage" size={34} color={AMBER_INK} anchor="middle" at={K1.many} out={K1.fix} />
				<Lbl x={L1.x} y={L1.y + 120} text="most damage is repaired" size={34} color={INK} anchor="middle" at={K1.fix + 40} />
				<Sx x={rungX(sx, KEEP1, pitch) + 30} y={sy - 40} text="?" size={60} color={AMBER_INK} weight={800} at={K1.why + 6} />
				<PlateAt p={PLATES.xray} cx={1680} cy={880} w={230} at={K1.xrays} />
				<Lbl x={1680} y={1040} text="X-rays" size={30} color={INK} anchor="middle" at={K1.xrays + 6} />
				<PlateAt p={BEAKER} cx={1450} cy={895} w={wForH(BEAKER, 190)} at={K1.chem} />
				<Lbl x={1450} y={1040} text="some chemicals" size={30} color={INK} anchor="middle" at={K1.chem + 6} />
				{void K1.yet}
			</Overlay>
		</>
	);
};

// ---------- 2. Mutagen and mutation ----------
const K2 = cues(S('mutagen-mutation'), {start: 'Start with two words', mutagen: 'A mutagen is anything', like: 'like UV light', mutation: 'A mutation is the change itself', seq: 'a different base sequence', uvisnt: "So UV isn't a mutation", its: "It's a mutagen", without: 'without any mutagen', rare: 'rare copying mistakes', raises: 'raises that rate'});
export const SceneMutagenMutation: React.FC = () => {
	const f = useCurrentFrame();
	const rx = 1074, ry = 500;
	const bar = (p: number) => 700 * p;
	return (
		<>
			<Heading text="Mutagen or mutation?" at={K2.start} size={56} />
			<Overlay>
				<CardBox x={96} y={210} w={800} h={410} at={K2.mutagen - 6} />
				<Lbl x={136} y={290} text="mutagen" size={62} color={INK} at={K2.mutagen} />
				<Lbl x={136} y={345} text="an agent that raises the chance" size={30} hand={false} color={INK} at={K2.mutagen + 10} />
				<Lbl x={136} y={385} text="of a change in DNA" size={30} hand={false} color={INK} at={K2.mutagen + 14} />
				<g opacity={prog(f, K2.like, 12)}><PlateB p={SUN} cx={230} cy={515} w={130} id="mm-sun" /></g>
				<PlateAt p={PLATES.xray} cx={460} cy={515} w={wForH(PLATES.xray, 150)} at={K2.like + 14} />
				<PlateAt p={BEAKER} cx={680} cy={515} w={wForH(BEAKER, 140)} at={K2.like + 26} />
				<CardBox x={1024} y={210} w={800} h={410} at={K2.mutation - 6} />
				<Lbl x={1064} y={290} text="mutation" size={62} color={INK} at={K2.mutation} />
				<Lbl x={1064} y={345} text="the change itself: a different base sequence" size={30} hand={false} color={INK} at={K2.seq} />
				<g opacity={prog(f, K2.mutation + 10, 12)}>
					<SlimStrand x={rx} y={ry} n={22} pitch={30} gap={44} rung={i => (i === 11 && f >= K2.seq + 20 ? {color: AMBER, w: 6} : undefined)} />
				</g>
				<BaseSwap x={rungX(rx, 11, 30)} y={ry - 4} from="C" to="T" show={K2.mutation + 16} at={K2.seq + 20} size={26} />
				<GTag x={1640} y={235} text="b01" at={K2.seq + 10} size={22} />
				<PlainArrow x1={900} y1={430} x2={1018} y2={430} at={K2.its} color={AMBER_INK} width={5} />
				<Sx x={960} y={410} text="can cause" size={28} color={AMBER_INK} hand anchor="middle" at={K2.its + 8} />
				<MistakeChip x={96} y={660} text="UV is a mutation" at={K2.uvisnt} cross={K2.its + 6} size={32} />
				<GTag x={1024} y={640} text="B4: rare copying errors happen anyway" at={K2.rare} size={24} />
				{/* mutation rate with and without a mutagen (illustrative) */}
				<g opacity={prog(f, K2.without, 12)}>
					<Sx x={700} y={790} text="mutation rate (illustrative, no numbers)" size={26} color={INK_SOFT} weight={600} />
					<Sx x={680} y={846} text="no mutagen" size={30} color={INK} hand anchor="end" />
					<rect x={700} y={820} width={bar(0.22)} height={34} rx={17} fill="#c9b8a0" />
				</g>
				<g opacity={prog(f, K2.raises - 6, 12)}>
					<Sx x={680} y={910} text="with a mutagen" size={30} color={INK} hand anchor="end" />
					<rect x={700} y={884} width={bar(lerp(0.22, 0.8, prog(f, K2.raises, 30)))} height={34} rx={17} fill={AMBER} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 3. Damage, repair or copy ----------
const K3 = cues(S('repair-or-copy'), {here: "Here's how a damaged base", damages: 'A mutagen damages one spot', repair: 'Repair enzymes usually find', guide: 'using the other strand as a guide', but: 'But if the cell copies its DNA', wrong: 'put the wrong base opposite the damage', again: 'When that new strand is copied again', partner: 'gets its own matching partner', both: 'Now the change is in both strands', perm: "It's permanent, a mutation"});
export const SceneRepairOrCopy: React.FC = () => {
	const f = useCurrentFrame();
	const tx = 570, ty = 230, P = 30, DI = 13;
	const lx = 160, ly = 570, LI = 11;
	const m1x = 1040, m1y = 540, m2y = 790, RI = 11;
	const draw1 = prog(f, K3.but + 20, 120, t => t), draw2 = prog(f, K3.again + 10, 60, t => t);
	const blobX = lerp(200, rungX(lx, LI, P), prog(f, K3.repair, 40));
	const cut = vis(f, K3.guide, K3.guide + 40, 10);
	return (
		<>
			<Heading text="How a damaged base becomes a mutation" at={K3.here} size={56} />
			<Overlay>
				<SlimStrand x={tx} y={ty} n={26} pitch={P} gap={44} o={prog(f, 0, 12)} />
				<Damage x={rungX(tx, DI, P)} y={ty} o={prog(f, K3.damages + 10, 10)} pulse={vis(f, K3.damages + 10, K3.repair, 10)} />
				<Lbl x={rungX(tx, DI, P) + 24} y={ty - 22} text="damaged base" size={28} color={AMBER_INK} at={K3.damages + 16} />
				<CurveArrow a={[880, 310]} b={[520, 420]} at={K3.repair - 10} bow={-20} color={INK_SOFT} width={4} />
				<CurveArrow a={[1070, 310]} b={[1400, 420]} at={K3.but - 10} bow={-20} color={INK_SOFT} width={4} />
				{/* repaired first */}
				<CardBox x={96} y={430} w={800} h={330} at={K3.repair - 8} />
				<Lbl x={130} y={480} text="repaired first" size={40} color={INK} at={K3.repair} />
				<g opacity={prog(f, K3.repair, 12)}>
					<SlimStrand x={lx} y={ly} n={22} pitch={P} gap={44} rung={i => (i === LI ? {o: 1 - cut, color: '#c7bcab'} : undefined)} />
					<Damage x={rungX(lx, LI, P)} y={ly} o={1 - prog(f, K3.guide, 10)} />
					<DrawPath d={`M${rungX(lx, LI - 3, P)},${ly + 52} L${rungX(lx, LI + 3, P)},${ly + 52}`} at={K3.guide + 6} dur={12} color="#4f86ad" width={5} />
				</g>
				<RepairBlob x={blobX} y={ly - 40} o={vis(f, K3.repair, K3.guide + 60, 10)} s={0.8} label />
				<Lbl x={130} y={700} text="uses the other strand as a guide" size={30} color="#4f86ad" at={K3.guide + 8} />
				<Tick x={790} y={472} at={K3.guide + 44} s={34} />
				<Lbl x={812} y={482} text="usually" size={30} color={INK_SOFT} at={K3.guide + 50} />
				{/* copied first */}
				<CardBox x={970} y={430} w={854} h={600} at={K3.but - 8} />
				<Lbl x={1004} y={480} text="copied first" size={40} color={INK} at={K3.but} />
				<g opacity={prog(f, K3.but + 14, 12)}>
					<SlimStrand x={m1x} y={m1y} n={24} pitch={P} gap={44} draw={draw1} rung={i => (i === RI && f >= K3.wrong ? {color: RED, w: 6} : undefined)} />
					<Damage x={rungX(m1x, RI, P)} y={m1y} />
					<Fork x={m1x + draw1 * 24 * P} y={m1y} o={vis(f, K3.but + 20, K3.but + 150, 10)} />
				</g>
				<BaseTag x={rungX(m1x, RI, P)} y={m1y + 48} text="A" below len={14} size={26} color={RED} o={prog(f, K3.wrong, 10)} />
				<Lbl x={rungX(m1x, RI, P) + 40} y={m1y + 106} text="wrong base opposite the damage" size={28} color={RED} at={K3.wrong + 10} />
				<Lbl x={1004} y={m2y - 40} text="next copy" size={32} color={INK} at={K3.again} />
				<g opacity={prog(f, K3.again + 4, 12)}>
					<SlimStrand x={m1x} y={m2y} n={24} pitch={P} gap={44} draw={draw2} rung={i => (i === RI && f >= K3.partner ? {color: AMBER, w: 6} : undefined)} />
				</g>
				<BaseTag x={rungX(m1x, RI, P)} y={m2y - 4} text="A" len={12} size={26} color={AMBER} o={prog(f, K3.again + 30, 10)} />
				<BaseTag x={rungX(m1x, RI, P)} y={m2y + 48} text="T" below len={12} size={26} color={AMBER} o={prog(f, K3.partner, 10)} />
				<Lbl x={1004} y={985} text="change now in both strands" size={32} color={AMBER_INK} at={K3.both} />
				<Ring cx={rungX(m1x, RI, P)} cy={m2y + 22} rx={58} ry={96} at={K3.perm} />
				<Lbl x={1530} y={985} text="permanent: a mutation" size={36} color={AMBER_INK} anchor="middle" at={K3.perm + 6} />
			</Overlay>
		</>
	);
};

// ---------- 4. A risk, not a guarantee ----------
const K4 = cues(S('risk'), {why: "That's why exposure is a risk", more: 'More exposure means more damage', chances: 'so more chances', copied: 'copied before repair', wrongly: 'repaired wrongly', stronger: 'A stronger source', behind: 'repair can fall behind', choose: "can't choose where it hits", gene: 'land in any gene', nogene: 'in no gene at all'});
const LOWM = [3, 9, 17, 27, 36, 46, 53];
const HIGHM = [6, 12, 21, 25, 30, 34, 40, 44, 48, 51];
const KEEP4 = [25, 48];
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 120, sy = 560, P = 30, n = 56;
	const e = kf(f, [[K4.more - 10, 0.12], [K4.more + 40, 0.5], [K4.stronger, 0.5], [K4.stronger + 50, 1]]);
	const b1 = lerp(100, 1820, prog(f, K4.chances + 10, 190, t => t));
	const b2 = lerp(100, 1820, prog(f, K4.behind + 20, 360, t => t));
	const knob = lerp(320, 1080, e);
	return (
		<>
			<Heading text="A risk, not a guarantee" at={K4.why} size={56} />
			<Overlay>
				<g opacity={prog(f, K4.more - 16, 12)}>
					<Sx x={320} y={262} text="exposure" size={30} color={INK} weight={700} />
					<line x1={320} y1={300} x2={1080} y2={300} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
					<rect x={320} y={294} width={knob - 320} height={12} rx={6} fill={AMBER} />
					<circle cx={knob} cy={300} r={18} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={320} y={348} text="low" size={26} color={INK_SOFT} hand />
					<Sx x={1080} y={348} text="high" size={26} color={INK_SOFT} hand anchor="end" />
				</g>
				<Lbl x={1180} y={290} text="dose: more damage at once" size={32} color={INK} at={K4.stronger + 20} />
				<Lbl x={1180} y={340} text="repair falls behind" size={32} color={AMBER_INK} at={K4.behind} />
				<SlimStrand x={sx} y={sy} n={n} pitch={P} gap={44} o={prog(f, 0, 12)} band={{i0: 22, i1: 32}} />
				{[[5, 14], [41, 50]].map(([a, b], k) => <rect key={k} x={rungX(sx, a, P) - P / 2} y={sy - 18} width={(b - a + 1) * P} height={80} rx={14} fill="#d9e8f6" stroke="#9fc0de" strokeWidth={2} opacity={0.9 * prog(f, 0, 12)} />)}
				<g opacity={prog(f, 0, 12)}><SlimStrand x={sx} y={sy} n={n} pitch={P} gap={44} /></g>
				{[...LOWM.map((i, k) => ({i, at: K4.more + 4 + k * 6, hi: false})), ...HIGHM.map((i, k) => ({i, at: K4.stronger + 6 + k * 5, hi: true}))].map((m, k) => {
					const x = rungX(sx, m.i, P);
					const keep = KEEP4.includes(m.i);
					const bx = m.hi ? b2 : b1;
					const cleared = !keep && bx > x && f > m.at + 10 ? 1 : 0;
					return <Damage key={k} x={x} y={sy} o={prog(f, m.at, 8) * (1 - cleared)} />;
				})}
				<RepairBlob x={b1} y={sy - 44} o={vis(f, K4.chances + 6, K4.chances + 200, 10)} s={0.7} />
				<RepairBlob x={b2} y={sy - 44} o={vis(f, K4.behind + 16, Math.min(K4.behind + 380, K4.choose), 10)} s={0.7} />
				{KEEP4.map((i, k) => <Ring key={k} cx={rungX(sx, i, P)} cy={sy + 22} rx={34} ry={62} at={K4.behind + 40 + k * 8} out={K4.choose} />)}
				<Lbl x={rungX(sx, KEEP4[0], P) - 60} y={sy + 165} text="copied before repair" size={30} color={AMBER_INK} at={K4.behind + 50} out={K4.choose} />
				<Lbl x={rungX(sx, 23, P)} y={sy + 205} text="or repaired wrongly" size={26} color={INK_SOFT} at={K4.behind + 60} out={K4.choose} />
				{/* random hits */}
				<Damage x={rungX(sx, 28, P)} y={sy} o={prog(f, K4.choose + 10, 8)} pulse={vis(f, K4.gene, K4.nogene, 10)} />
				<Damage x={rungX(sx, 37, P)} y={sy} o={prog(f, K4.choose + 20, 8)} pulse={vis(f, K4.nogene, undefined, 10)} />
				<Lbl x={rungX(sx, 28, P)} y={sy - 50} text="in a gene" size={30} color={AMBER_INK} anchor="middle" at={K4.gene} />
				<Lbl x={rungX(sx, 37, P)} y={sy - 50} text="in no gene" size={30} color={INK_SOFT} anchor="middle" at={K4.nogene} />
				<Lbl x={rungX(sx, 9, P)} y={sy + 110} text="gene" size={28} color="#2f5f8f" anchor="middle" at={4} />
				<Lbl x={rungX(sx, 27, P)} y={sy + 110} text="gene" size={28} color="#2f5f8f" anchor="middle" at={4} />
				<Lbl x={rungX(sx, 45, P)} y={sy + 110} text="gene" size={28} color="#2f5f8f" anchor="middle" at={4} />
				<MistakeChip x={120} y={880} text="exposure = certain mutation" at={K4.nogene + 24} cross={K4.nogene + 44} size={32} />
				{void K4.copied}{void K4.wrongly}
			</Overlay>
		</>
	);
};
