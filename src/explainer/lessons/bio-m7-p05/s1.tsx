// M7 P05 (Biology practical) scenes 1 to 5: the hook (four discs on a fresh plate, two days later the zones plate:
// A 25 mm, B 15 mm, C nothing, and the two claims that take a cross); what a zone is (the disc cartridge, the camera
// eases in on disc A, amber dots diffuse out and thin, the dashed "just enough" ring, the gloss, the cloudy lawn);
// aim and variables (the variables card with pen links to the cartridge and a zone diameter); the control and
// repeats (the blank disc lights green; the plate copies into three rotated plates with the chips following);
// lawn and discs (drop, spreader, lawn gloss, forceps, four discs from the cartridge, spacing brackets, the overlap
// inset and contact taps).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER_INK, Bench, CTag, Circle, Clip, CrossChip, DPlate, DSwap, DashRing, DiamLine, DiscChips, DrawPath, FEAT, GREEN, GREY_INK, GREYT, GTag, Halo, INK, INK_SOFT, LetterChip,
	MovingDrop, PLATES, PenLink, Pl, PlateB, QUESTION, RZ, Rail, RowBox, SpreaderArc, Sx, TERRA, Tap, VIOLET, WText, clamp01, discAt, dpt, fitW, kOf, lerp, prog, ptOf, smooth, vis,
} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {four: 'four paper discs', later: 'Two days later', discA: 'disc A', d25: 'twenty five', discB: 'disc B', d15: 'fifteen', discC: 'disc C', nothing: 'nothing', best: 'best medicine', useless: 'useless', either: 'either'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 600, cy: 600, w: 640};
	const k = kOf(P.w);
	const [ax, ay] = discAt(P.cx, P.cy, P.w, 'A');
	const [bx, by] = discAt(P.cx, P.cy, P.w, 'B');
	const [cx, cy] = discAt(P.cx, P.cy, P.w, 'C');
	const dimL = prog(f, K1.either, 12);
	const c1 = 'biggest zone = best medicine?', c2 = 'no zone = useless?';
	return (
		<>
			<Heading text={QUESTION} at={K1.either - 6} size={54} />
			<Overlay>
				<Bench o={prog(f, 0, 16)} />
				<DSwap a={PLATES.fresh} b={PLATES.zones} cx={P.cx} cy={P.cy} w={P.w} swap={K1.later + 8} dur={26} o={prog(f, 6, 16)} />
				<Sx x={P.cx} y={P.cy + P.w / 2 + 6} text="2 days later" size={28} color={GREY_INK} weight={600} anchor="middle" at={K1.later + 10} out={K1.discA + 20} />
				<DiscChips cx={P.cx} cy={P.cy} w={P.w} at={K1.discA} only={['A']} />
				<DiscChips cx={P.cx} cy={P.cy} w={P.w} at={K1.discB} only={['B']} />
				<DiscChips cx={P.cx} cy={P.cy} w={P.w} at={K1.discC} only={['C']} />
				<DiscChips cx={P.cx} cy={P.cy} w={P.w} at={K1.four + 30} only={['blank']} />
				<DiamLine x={ax} y={ay} r={FEAT.zoneR.A * k} at={K1.d25} label="25 mm" dim={dimL} />
				<DiamLine x={bx} y={by} r={FEAT.zoneR.B * k} at={K1.d15} label="15 mm" dim={dimL} />
				<Circle x={cx} y={cy} r={FEAT.discR * k + 16} at={K1.nothing} color={GREYT} />
				<Sx x={cx + FEAT.discR * k + 26} y={cy + 10} text="no zone" size={28} color={GREY_INK} hand weight={700} at={K1.nothing + 6} />
				<GTag x={1850} y={1000} text="example data" at={K1.d25} size={22} anchor="end" />
				<CrossChip x={1060} y={360} text={c1} at={K1.best} cross={K1.either + 4} size={32} />
				<CrossChip x={1060} y={720} text={c2} at={K1.useless} cross={K1.either + 14} size={32} />
				<PenLink a={[1054, 390]} b={[ax + 70, ay - 60]} at={K1.best + 8} color={TERRA} bow={-60} />
				<PenLink a={[1054, 750]} b={[cx + 50, cy + 10]} at={K1.useless + 8} color={TERRA} bow={60} />
			</Overlay>
		</>
	);
};

// ---------- 2. What a zone is ----------
const K2 = cues(S('what-a-zone-is'), {dose: 'measured dose', diffuses: 'diffuses', strongest: 'strongest', weaker: 'weaker', enough: 'strong enough', clear: 'stays clear', zone: 'zone of inhibition', dilute: 'too dilute', cloudy: 'cloudy layer'});
export const SceneZone: React.FC = () => {
	const f = useCurrentFrame();
	const z = smooth(prog(f, K2.diffuses - 6, 30));
	const W = lerp(500, 1500, z);
	const T = {x: lerp(560, 690, z), y: lerp(560, 600, z)};
	const k = kOf(W);
	// place the plate so disc A sits at T
	const a0 = dpt(0, 0, W, FEAT.disc.A);
	const pcx = lerp(760, T.x - a0[0], z), pcy = lerp(600, T.y - a0[1], z);
	const [ax, ay] = discAt(pcx, pcy, W, 'A');
	const edge = FEAT.zoneR.A * k;
	const haloAt = K2.diffuses + 16;
	const cartO = 1 - prog(f, K2.diffuses, 14);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={4} />
				<Bench />
				<Clip id="p05-zone-cam" x={70} y={252} w={1180} h={700}>
					<DPlate p={PLATES.zones} cx={pcx} cy={pcy} w={W} o={prog(f, 0, 14)} />
					<Halo x={ax} y={ay} r0={FEAT.discR * k} R={330 * k} edge={edge} at={haloAt} dilute={K2.dilute} n={220} dot={5} />
					<DashRing x={ax} y={ay} r={edge} at={K2.enough} />
					<Sx x={ax} y={ay - FEAT.discR * k - 18} text="strong" size={26} color={AMBER_INK} hand weight={700} anchor="middle" at={K2.strongest} out={K2.enough} />
					<Sx x={ax + edge * 1.35} y={ay + 8} text="weaker" size={26} color={GREY_INK} hand weight={700} anchor="middle" at={K2.weaker} out={K2.enough} />
				</Clip>
				<g opacity={cartO}>
					<Pl p={PLATES.cartridge} cx={250} cy={360} w={fitW(PLATES.cartridge, 280, 170)} o={prog(f, K2.dose - 4, 12)} />
					<WText x={100} y={470} text="commercial discs: fixed dose, printed by the supplier" size={22} maxW={330} color={GREY_INK} weight={600} at={K2.dose + 8} />
				</g>
				<CTag x={RZ.x} y={260} text="diffuses: spreads from high to low concentration (Year 11)" at={K2.diffuses + 6} color={AMBER_INK} size={28} maxW={RZ.w} dim={prog(f, K2.zone, 12)} />
				<CTag x={RZ.x} y={400} text="edge: just enough drug to stop growth" at={K2.enough + 6} color={AMBER_INK} size={28} maxW={RZ.w} />
				<PenLink a={[RZ.x - 4, 430]} b={[ax + edge * 0.72, ay - edge * 0.7]} at={K2.enough + 14} color={AMBER_INK} bow={-30} />
				<CTag x={RZ.x} y={540} text="zone of inhibition: the clear ring where the drug stopped growth" at={K2.zone} color={GREEN} size={30} maxW={RZ.w - 60} />
				<GTag x={ax + edge + 40} y={ay + edge + 30} text="too little drug: bacteria grow" at={K2.dilute + 6} size={24} />
				<GTag x={1850} y={1000} text="antivirals can't be tested this way: viruses need living cells (antibiotics video)" at={K2.cloudy + 30} size={20} anchor="end" />
				{void K2.clear}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 3. Aim and variables ----------
const K3 = cues(S('aim-variables'), {aim: 'aim', iv: ['antibiotic', 2], diameter: 'diameter', keep: 'Keep everything', bact: 'the bacterium', agar: 'the agar and', depth: 'depth', disc: 'disc size', incub: 'incubation time'});
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const C = {cx: 340, cy: 420, w: fitW(PLATES.cartridge, 420, 280)};
	const Z = {cx: 600, cy: 760, w: 300};
	const kz = kOf(Z.w);
	const [ax, ay] = discAt(Z.cx, Z.cy, Z.w, 'A');
	const ctrl = [
		{t: 'same culture, 0.1 mL spread', at: K3.bact},
		{t: 'same agar batch and depth', at: K3.agar},
		{t: '6 mm discs, same supplier', at: K3.disc},
		{t: '28 °C for 48 h', at: K3.incub},
	];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={4} />
				<Bench />
				<Pl p={PLATES.cartridge} cx={C.cx} cy={C.cy} w={C.w} />
				<Sx x={C.cx} y={610} text="discs A, B, C" size={28} color={VIOLET} hand weight={700} anchor="middle" at={K3.iv} />
				<DPlate p={PLATES.zones} cx={Z.cx} cy={Z.cy} w={Z.w} o={prog(f, K3.diameter - 10, 12)} />
				<DiamLine x={ax} y={ay} r={FEAT.zoneR.A * kz} at={K3.diameter + 4} label="mm" size={26} />
				<RowBox x={RZ.x} y={250} w={RZ.w} h={720} at={K3.aim - 4} color="rgba(60,45,20,0.3)" />
				<WText x={RZ.x + 24} y={300} text="Aim: compare the zones of inhibition that discs A, B and C produce on one harmless bacterium" size={27} maxW={RZ.w - 48} color={INK} weight={700} at={K3.aim} />
				<WText x={RZ.x + 24} y={440} text="independent: the antibiotic in the disc (A, B, C)" size={30} maxW={RZ.w - 48} color={VIOLET} hand weight={700} at={K3.iv} />
				<PenLink a={[RZ.x + 10, 450]} b={[C.cx + 180, C.cy - 40]} at={K3.iv + 10} color={VIOLET} />
				<WText x={RZ.x + 24} y={550} text="dependent: zone diameter (mm)" size={30} maxW={RZ.w - 48} color={AMBER_INK} hand weight={700} at={K3.diameter} />
				<PenLink a={[RZ.x + 10, 556]} b={[ax + 60, ay - 50]} at={K3.diameter + 10} color={AMBER_INK} bow={40} />
				<Sx x={RZ.x + 24} y={620} text="controlled:" size={30} color={GREEN} hand weight={700} at={K3.keep} />
				{ctrl.map((c, i) => <Sx key={i} x={RZ.x + 44} y={666 + i * 46} text={'• ' + c.t} size={27} color={INK} hand weight={700} at={c.at} />)}
				<WText x={RZ.x + 44} y={872} text="discs 2 cm apart, same measuring method" size={24} maxW={RZ.w - 70} color={GREY_INK} weight={600} at={K3.incub + 60} />
				<GTag x={RZ.x - 16} y={688} text="thinner agar lets the drug spread further" at={K3.depth + 6} size={22} anchor="end" />
				{void clamp01}{void vis}
			</Overlay>
		</>
	);
};

// ---------- 4. The control and repeats ----------
const K4 = cues(S('control-repeats'), {neg: 'negative control', blank: 'blank disc', water: 'sterile water', nozone: 'no zone', own: 'their own', three: 'three plates', positions: 'different positions', odd: 'one odd plate', decide: 'decide the result'});
const SLOTX = [270, 640, 1010], ROT = [0, 90, 180];
export const SceneControl: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K4.three, 26));
	const r = smooth(prog(f, K4.positions - 10, 26));
	const big = {cx: 620, cy: 590, w: 560};
	const plates = SLOTX.map((x, i) => ({cx: lerp(big.cx, x, m), cy: lerp(big.cy, 560, m), w: lerp(big.w, 330, m), rot: ROT[i] * r, o: i === 0 ? 1 : prog(f, K4.three + 4, 12)}));
	const p0 = plates[0];
	const [bx, by] = discAt(p0.cx, p0.cy, p0.w, 'blank');
	const ringO = 1 - prog(f, K4.three - 6, 10);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={-100} />
				<Bench />
				{plates.map((p, i) => (
					<g key={i} opacity={p.o}>
						<DPlate p={PLATES.zones} cx={p.cx} cy={p.cy} w={p.w} rot={p.rot} />
						<DiscChips cx={p.cx} cy={p.cy} w={p.w} rot={p.rot} at={-100} size={lerp(26, 20, m)} blankGreen={prog(f, K4.neg, 8)} />
					</g>
				))}
				<g opacity={ringO}><Circle x={bx} y={by} r={FEAT.discR * kOf(p0.w) + 14} at={K4.blank} color={GREEN} /></g>
				<GTag x={640} y={780} text="3 plates, positions rotated" at={K4.positions + 10} size={26} anchor="middle" />
				<Sx x={640} y={870} text="one odd plate or patch of agar can't decide it" size={26} color={GREY_INK} weight={600} anchor="middle" at={K4.odd} />
				{/* compact card: earlier rows grey, the control row bright */}
				<RowBox x={RZ.x} y={250} w={RZ.w} h={560} at={-100} color="rgba(60,45,20,0.3)" />
				{['independent: the antibiotic', 'dependent: zone diameter (mm)', 'controlled: culture, agar, discs, 28 °C, 48 h'].map((t, i) => <Sx key={i} x={RZ.x + 24} y={300 + i * 44} text={t} size={24} color={GREY_INK} weight={600} at={-100} />)}
				<RowBox x={RZ.x + 14} y={440} w={RZ.w - 28} h={150} at={K4.neg} color={GREEN} />
				<WText x={RZ.x + 36} y={486} text="negative control: blank disc + sterile water → expect no zone" size={30} maxW={RZ.w - 70} color={GREEN} hand weight={700} at={K4.neg + 4} />
				<CTag x={RZ.x + 14} y={620} text="negative control: same handling, no antibiotic" at={K4.water + 10} color={GREEN} size={26} maxW={RZ.w - 28} />
				<CrossChip x={100} y={890} text="the blank disc is a waste" at={K4.own - 10} cross={K4.own + 20} size={30} />
				{void K4.nozone}{void K4.decide}{void by}
			</Overlay>
		</>
	);
};

// ---------- 5. Lawn and discs ----------
const K5 = cues(S('lawn-discs'), {approved: 'approved harmless culture', point: 'point one', evenly: 'evenly', spreader: 'sterile spreader', lawn: 'smooth lawn', place: 'place the discs', forceps: 'sterile forceps', two: 'two centimetres', edge: 'away from the edge', overlap: 'overlap'});
export const SceneLawn: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 300, cy: 470, w: fitW(PLATES.pipette, 500, 380)};
	const tip = ptOf(PLATES.pipette, P.cx, P.cy, P.w, FEAT.tip);
	const tube = ptOf(PLATES.pipette, P.cx, P.cy, P.w, FEAT.tube);
	const D = {cx: 870, cy: 600, w: 420};
	const k = kOf(D.w);
	const agarR = FEAT.agar * k;
	const pipO = 1 - prog(f, K5.place, 14);
	const landAt = (i: number) => K5.forceps + i * 10;
	const swap = landAt(3) + 16;
	const CART = {cx: 1130, cy: 870, w: fitW(PLATES.cartridge, 200, 130)};
	const mouth = ptOf(PLATES.cartridge, CART.cx, CART.cy, CART.w, [1500, 1180]);
	const order: ('A' | 'B' | 'C' | 'blank')[] = ['A', 'B', 'C', 'blank'];
	const [ax, ay] = discAt(D.cx, D.cy, D.w, 'A');
	const [bx, by] = discAt(D.cx, D.cy, D.w, 'B');
	const r0 = FEAT.discR * k;
	const rimX = D.cx + Math.sqrt(agarR * agarR - (by - D.cy) * (by - D.cy));
	const I = {x: 1480, y: 820, r: 80};
	const merge = smooth(prog(f, K5.overlap, 30));
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={4} />
				<Bench />
				<g opacity={pipO}>
					<Pl p={PLATES.pipette} cx={P.cx} cy={P.cy} w={P.w} />
					<GTag x={tube[0]} y={tube[1] + 130} text="approved teaching culture" at={K5.approved} size={22} anchor="middle" />
					<MovingDrop a={[tip[0], tip[1] + 6]} b={[D.cx, D.cy - 10]} at={K5.point} dur={26} label="0.1 mL" />
				</g>
				<DSwap a={PLATES.clear} b={PLATES.fresh} cx={D.cx} cy={D.cy} w={D.w} swap={swap} dur={14} />
				<SpreaderArc x={D.cx} y={D.cy} r={agarR} at={K5.spreader} dur={44} />
				<GTag x={D.cx} y={D.cy + D.w / 2 + 14} text="0.1 mL, spread evenly" at={K5.evenly} out={K5.place} size={24} anchor="middle" />
				<GTag x={RZ.x} y={262} text="aseptic technique (water testing practical)" at={K5.spreader + 16} out={K5.lawn + 10} size={22} />
				<CTag x={RZ.x} y={262} text="lawn: an even layer of bacteria covering the agar" at={K5.lawn + 4} color={AMBER_INK} size={30} maxW={RZ.w} />
				<g opacity={prog(f, K5.lawn + 12, 12)}>
					<DPlate p={PLATES.lawn} cx={RZ.x + 90} cy={470} w={150} />
					<Sx x={RZ.x + 186} y={480} text="after incubation" size={24} color={GREY_INK} weight={600} at={-100} />
				</g>
				{/* forceps and the cartridge; four coded discs land, then the painted fresh plate takes over */}
				<g opacity={prog(f, K5.place, 12)}>
					<PlateB p={PLATES.forceps} cx={1170} cy={520} w={64} rot={32} />
					<Pl p={PLATES.cartridge} cx={CART.cx} cy={CART.cy} w={CART.w} />
				</g>
				{order.map((d, i) => {
					const t = landAt(i);
					if (f < t || f > swap + 14) return null;
					const u = smooth(clamp01((f - t) / 14));
					const [tx, ty] = discAt(D.cx, D.cy, D.w, d);
					const x = lerp(mouth[0], tx, u), y = lerp(mouth[1], ty, u) - Math.sin(u * Math.PI) * 60;
					return <circle key={d} cx={x} cy={y} r={r0} fill="#fbfaf5" stroke="#c8c2b4" strokeWidth={2} opacity={1 - prog(f, swap, 14)} />;
				})}
				{order.map((d, i) => { const [x, y] = discAt(D.cx, D.cy, D.w, d); return <Tap key={d} x={x} y={y - r0} at={swap + 8 + i * 8} />; })}
				<GTag x={D.cx} y={D.cy + D.w / 2 + 14} text="contact lets the drug diffuse in" at={swap + 10} size={24} anchor="middle" />
				{/* spacing brackets */}
				{f >= K5.two ? (
					<g>
						<DrawPath d={`M${ax + r0 + 4},${ay - 40} l0,-12 L${bx - r0 - 4},${ay - 52} l0,12`} at={K5.two} dur={14} color={INK_SOFT} width={3.5} />
						<Sx x={(ax + bx) / 2} y={ay - 64} text="≥ 2 cm" size={26} color={INK} weight={700} anchor="middle" at={K5.two + 8} />
					</g>
				) : null}
				{f >= K5.edge ? (
					<g>
						<DrawPath d={`M${bx + r0 + 4},${by + 40} l0,12 L${rimX - 4},${by + 52} l0,-12`} at={K5.edge} dur={12} color={INK_SOFT} width={3.5} />
						<Sx x={(bx + rimX) / 2} y={by + 86} text="≥ 2 cm" size={24} color={INK} weight={700} anchor="middle" at={K5.edge + 8} />
					</g>
				) : null}
				{/* overlap inset */}
				<g opacity={vis(f, K5.overlap - 6, 626, 10)}>
					<circle cx={I.x} cy={I.y} r={I.r} fill="#efe7cf" stroke={GREYT} strokeWidth={3} />
					{[-1, 1].map(s => <circle key={s} cx={I.x + s * 18} cy={I.y} r={7} fill="#fbfaf5" stroke="#c8c2b4" strokeWidth={1.5} />)}
					{[-1, 1].map(s => <circle key={'z' + s} cx={I.x + s * 18} cy={I.y} r={10 + 34 * merge} fill="none" stroke={GREY_INK} strokeWidth={2.5} strokeDasharray="6 5" />)}
				</g>
				<WText x={I.x} y={I.y + I.r + 34} text="zones too close merge: can't measure" size={22} maxW={360} color={GREY_INK} weight={600} anchor="middle" at={K5.overlap + 10} out={626} />
				{void LetterChip}{void INK}{void TERRA}
			</Overlay>
		</>
	);
};
