// M7 B08 scenes 7 to 11: cytotoxic T cells find the target (travel from the lymph node in the blood, a healthy cell
// left alone, a fork seated over a red piece on the infected cell); the infected cell self-destructs (released
// proteins, pores, the apoptotic partner brought in on top, phagocytes clearing, the T cell moving on); NK cells, the
// innate killers (two columns; stress flag; a cell with too few cups that the T cell cannot check and the NK cell
// kills; a day axis); two arms, one system (the enlarged strip, each column lit in turn, the outside-inside loop, the
// helper between both columns, memory T cells); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay} from '../bio-m5-b13/shared';
import {FONT_HAND} from '../../kit';
import {ResponseStrip, stepRect, stripRects} from '../bio-m7-b06/strip';
import {S} from './common';
import {PLATES} from './assets';
import {strip8} from './board';
import {RED_CUPS, anglesFrom, tCentreFor} from './s1';
import {
	AMBER, AMBER_INK, AirCell, CTag, Channel, Cup, Dots, DrawPath, Fork, GREY_INK, GTag, Gloss, MistakeChip, Outline, PlainArrow, PlateB, Pl, Ring, StressFlag, TCell, TEAL,
	VRED, clamp01, cupSites, cupSize, lerp, prog, seatFor, smooth, vis,
} from './parts';
import type {Pt} from './parts';

const DEG = Math.PI / 180;

// ---------- 7. Cytotoxic T cells find the target ----------
const K7 = cues(S('cytotoxic-find'), {leave: 'leave the lymph', airway: 'the infected airway', check: 'check the pieces', healthy: 'Healthy cells', fits: 'receptor fits', binds: 'binds to that'});
const H7 = {cx: 420, cy: 600, w: 420};
const I7 = {cx: 980, cy: 600, w: 420};
const TW7 = 160;
export const SceneCytoFind: React.FC = () => {
	const f = useCurrentFrame();
	const travelO = vis(f, K7.leave - 10, K7.airway + 6, 14);
	const tu = smooth(prog(f, K7.leave + 6, 70));
	const boardO = prog(f, K7.airway + 4, 16);
	const cs = cupSize(H7.w);
	const hSite = cupSites(H7.cx, H7.cy, H7.w)[7];
	const hSeat = seatFor(hSite.p[0], hSite.p[1], hSite.a, cs);
	const hPos = tCentreFor([hSeat.p[0] + 18, hSeat.p[1]], hSeat.a, TW7);
	const iSite = cupSites(I7.cx, I7.cy, I7.w)[2];
	const iSeat = seatFor(iSite.p[0], iSite.p[1], iSite.a, cs);
	const iPos = tCentreFor(iSeat.p, iSeat.a, TW7);
	const mv = smooth(prog(f, K7.fits + 6, 30));
	const start: Pt = [hPos[0], hPos[1] + 200];
	const atH = smooth(prog(f, K7.check, 24));
	const tc: Pt = mv > 0 ? [lerp(hPos[0], iPos[0], mv), lerp(hPos[1], iPos[1], mv)] : [lerp(start[0], hPos[0], atH), lerp(start[1], hPos[1], atH)];
	const seated = prog(f, K7.fits + 36, 8);
	const ang = mv > 0.5 ? iSeat.a : hSeat.a;
	return (
		<Overlay>
			<ResponseStrip {...strip8(4)} />
			<g opacity={travelO}>
				<Pl p={PLATES.node} cx={220} cy={420} w={220} />
				<Channel pts={[[330, 420], [920, 420]]} at={K7.leave - 4} dur={20} width={40} />
				<Pl p={PLATES.airway} cx={1090} cy={420} w={300} />
				<TCell cx={lerp(330, 920, tu)} cy={420} w={60} killer={1} ring="amber" forks={0} />
				<GTag x={330} y={500} text="b06: cells leave leaky vessels" at={K7.leave + 10} size={22} />
			</g>
			<AirCell cx={H7.cx} cy={H7.cy} w={H7.w} o={boardO} cups={{}} />
			<AirCell cx={I7.cx} cy={I7.cy} w={I7.w} inf={1} o={boardO} cups={{red: RED_CUPS}} />
			<TCell cx={tc[0]} cy={tc[1]} w={TW7} killer={1} ring="amber" o={prog(f, K7.airway + 14, 12)} angles={anglesFrom(ang / DEG)} skip={seated > 0.5 ? 0 : -1} />
			{seated > 0.01 ? <Fork x={iSeat.p[0]} y={iSeat.p[1]} ang={iSeat.a} s={cs} o={seated} lit={1} /> : null}
			<Ring cx={iSite.p[0]} cy={iSite.p[1]} rx={50} ry={50} at={K7.fits + 44} color={AMBER} />
			<CTag x={90} y={960} text="own pieces: left alone" at={K7.healthy + 4} color={GREY_INK} size={30} dim={prog(f, K7.fits, 10)} />
			<CTag x={620} y={960} text="binds the infected cell" at={K7.fits + 44} color={AMBER_INK} size={30} />
			<MistakeChip x={90} y={170} text="killer T cells attack free virus" at={K7.binds + 6} cross={K7.binds + 26} size={30} />
		</Overlay>
	);
};

// ---------- 8. The infected cell self-destructs ----------
const K8 = cues(S('apoptosis'), {releases: 'releases proteins', holes: 'make holes', pass: 'pass through', apop: 'called apoptosis', phago: 'phagocytes clear', factory: 'loses its factory', moves: 'moves on'});
const I8 = {cx: 760, cy: 560, w: 500};
const TW8 = 190;
export const SceneApoptosis: React.FC = () => {
	const f = useCurrentFrame();
	const cs = cupSize(I8.w);
	const site = cupSites(I8.cx, I8.cy, I8.w)[2];
	const seat = seatFor(site.p[0], site.p[1], site.a, cs);
	const home = tCentreFor(seat.p, seat.a, TW8);
	const off = smooth(prog(f, K8.moves, 40));
	const nb: Pt = [170, 820];
	const tc: Pt = [lerp(home[0], nb[0] + 150, off), lerp(home[1], nb[1] - 40, off)];
	const pores: Pt[] = [-50, 0, 50].map(dy => [site.p[0] + 4, site.p[1] + dy]);
	const inside: Pt = [site.p[0] + 120, site.p[1]];
	const apo = clamp01((f - K8.apop - 4) / 32);
	const strip = strip8(4, [{}, {}, {}, {}, {at: K8.factory + 4, lit: prog(f, K8.factory + 8, 10)}]);
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<AirCell cx={I8.cx} cy={I8.cy} w={I8.w} inf={1} apo={apo} cups={{red: RED_CUPS}} />
			<TCell cx={tc[0]} cy={tc[1]} w={TW8} killer={1} ring="amber" angles={anglesFrom(seat.a / DEG)} skip={off < 0.05 ? 0 : -1} />
			{off < 0.05 ? <Fork x={seat.p[0]} y={seat.p[1]} ang={seat.a} s={cs} lit={1} /> : null}
			<Dots a={[seat.p[0] - 20, seat.p[1]]} b={site.p} at={K8.releases + 4} out={K8.apop} color={AMBER} n={8} period={30} />
			{pores.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={10} fill="#fff7ee" stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, K8.holes + 6 + i * 5, 8) * (1 - apo)} />)}
			<Gloss x={90} y={560} text="perforin" at={K8.holes + 14} color={GREY_INK} out={K8.apop} />
			<Dots a={site.p} b={inside} at={K8.pass + 4} out={K8.apop} color={AMBER} n={8} period={36} />
			<Gloss x={90} y={610} text="granzymes" at={K8.pass + 14} color={GREY_INK} out={K8.apop} />
			<CTag x={90} y={160} text="apoptosis: the cell's own self-destruct program" at={K8.apop + 10} color={TEAL} size={30} maxW={1100} dim={prog(f, K8.factory, 10)} />
			<Pl p={PLATES.macrophage} cx={1090} cy={920} w={300} o={prog(f, K8.phago, 16)} />
			<GTag x={1180} y={1010} text="b06: phagocytes" at={K8.phago + 14} size={22} />
			<MistakeChip x={420} y={990} text="the T cell eats the cell" at={K8.phago + 10} cross={K8.phago + 30} size={28} />
			<CTag x={1010} y={250} text="no factory, fewer new viruses" at={K8.factory + 10} color={AMBER_INK} size={28} maxW={380} />
			<Outline x={nb[0]} y={nb[1]} w={110} h={280} o={prog(f, K8.moves - 10, 14)} />
			{void VRED}{void DrawPath}{void Cup}
		</Overlay>
	);
};

// ---------- 9. NK cells ----------
const K9 = cues(S('nk-cells'), {natural: 'Natural killer cells', have: 'have receptors made', stress: 'stress signals', few: 'too few display', hide: 'hide from T', early: 'act early', longer: 'take longer'});
export const SceneNK: React.FC = () => {
	const f = useCurrentFrame();
	const A: Pt = [420, 400], Bo: Pt = [640, 400];
	const ow = 110, oh = 280;
	const bCup = (i: number): {p: Pt; a: number} => ({p: [Bo[0] + (i < 3 ? -ow / 2 : ow / 2), Bo[1] - 90 + (i % 3) * 90], a: i < 3 ? Math.PI : 0});
	const tmv = smooth(prog(f, K9.few + 14, 30));
	const tc: Pt = [lerp(960, Bo[0] + ow / 2 + 74, tmv), lerp(400, Bo[1], tmv)];
	const nmv = smooth(prog(f, K9.hide + 4, 30));
	const nk: Pt = [lerp(180, Bo[0] - ow / 2 - 74, nmv), lerp(400, Bo[1], nmv)];
	const kill = prog(f, K9.hide + 40, 16);
	const RC: Pt = [1170, 400];
	const rcup = {p: [RC[0] - ow / 2, RC[1]] as Pt, a: Math.PI};
	const rseat = seatFor(rcup.p[0], rcup.p[1], rcup.a, 18);
	const rT = tCentreFor(rseat.p, rseat.a, 130);
	const rightO = prog(f, K9.natural + 30, 14);
	const R = stripRects(strip8(4));
	return (
		<Overlay>
			<ResponseStrip {...strip8(5)} />
			<GTag x={1390} y={R[2].y + 20} text="NK cells" at={K9.natural + 20} anchor="end" size={22} />
			<CTag x={90} y={160} text="NK cells: innate" at={K9.natural} color={TEAL} size={32} />
			<CTag x={830} y={160} text="cytotoxic T cells: adaptive" at={K9.natural + 30} color={AMBER_INK} size={32} />
			<TCell cx={nk[0]} cy={nk[1]} w={130} killer={1} ring="teal" forks={0} o={prog(f, K9.natural + 4, 14)} />
			<GTag x={90} y={560} text="NK cell: a lymphocyte with granules," at={K9.natural + 14} size={20} />
			<GTag x={90} y={600} text="no receptor for one pathogen" at={K9.natural + 20} size={20} />
			<GTag x={90} y={650} text="looks like a killer T cell, recognises differently" at={K9.have + 6} size={20} />
			<Outline x={A[0]} y={A[1]} w={ow} h={oh} o={prog(f, K9.stress, 14)} dash={false} />
			<StressFlag x={A[0] - ow / 2} y={A[1] - 40} ang={Math.PI} s={22} o={prog(f, K9.stress + 8, 10)} />
			<CTag x={90} y={710} text="stress signals" at={K9.stress + 12} color={TEAL} size={28} dim={prog(f, K9.few, 10)} />
			<g opacity={1 - kill}>
				<Outline x={Bo[0]} y={Bo[1]} w={ow} h={oh} o={prog(f, K9.few, 14)} dash={false} />
				{[0, 1, 2, 3, 4, 5].map(i => { const c = bCup(i); return <Cup key={i} x={c.p[0]} y={c.p[1]} ang={c.a} s={18} red={i === 4} o={prog(f, K9.few, 10) * (i === 1 || i === 4 ? 1 : 1 - prog(f, K9.few + 10, 16))} />; })}
			</g>
			<PlateB p={PLATES.apoptotic} cx={Bo[0]} cy={Bo[1]} w={200} o={kill} />
			<GTag x={90} y={780} text="a way some viruses hide from T cells" at={K9.few + 16} size={20} />
			<TCell cx={tc[0]} cy={tc[1]} w={130} killer={1} ring="amber" o={prog(f, K9.few + 10, 12)} angles={anglesFrom(180)} />
			<CTag x={90} y={830} text="nothing for the T cell to check" at={K9.few + 44} color={AMBER_INK} size={28} dim={prog(f, K9.hide, 10)} />
			<CTag x={90} y={900} text="NK cell: kills anyway" at={K9.hide + 44} color={TEAL} size={28} />
			<g opacity={rightO}>
				<Outline x={RC[0]} y={RC[1]} w={ow} h={oh} dash={false} />
				<Cup x={rcup.p[0]} y={rcup.p[1]} ang={rcup.a} s={18} red />
				<TCell cx={rT[0]} cy={rT[1]} w={130} killer={1} ring="amber" angles={anglesFrom(0)} skip={0} />
				<Fork x={rseat.p[0]} y={rseat.p[1]} ang={rseat.a} s={18} lit={1} />
			</g>
			<CTag x={830} y={600} text="receptor for one pathogen" at={K9.natural + 40} color={AMBER_INK} size={28} dim={prog(f, K9.few, 10)} />
			{f >= K9.early ? (
				<g>
					<DrawPath d="M90,1000 L1360,1000" at={K9.early} dur={16} color={GREY_INK} width={3} />
					<rect x={100} y={985} width={300 * prog(f, K9.early + 8, 16)} height={14} rx={7} fill={TEAL} opacity={0.8} />
					<rect x={620} y={1005} width={720 * prog(f, K9.longer, 20)} height={14} rx={7} fill={AMBER} opacity={0.8} />
					<Sx2 x={100} y={1050} text="early" at={K9.early + 10} />
					<Sx2 x={620} y={1050} text="days" at={K9.longer + 6} />
				</g>
			) : null}
		</Overlay>
	);
};
const Sx2: React.FC<{x: number; y: number; text: string; at: number}> = ({x, y, text, at}) => <Gloss x={x} y={y} text={text} at={at} color={GREY_INK} size={26} />;

// ---------- 10. Two arms, one system ----------
const K10 = cues(S('two-arms'), {antibody: 'antibody arm', cell: 'cell-mediated arm', both: 'need both', middle: 'sit in the middle', memory: 'memory T cells'});
export const BIG8 = {x: 450, y: 110, w: 860, rh: 78, gap: 16, stepH: 84, size: 34};
export const SceneTwoArms: React.FC = () => {
	const f = useCurrentFrame();
	const bL = vis(f, K10.antibody, K10.cell, 12);
	const tL = prog(f, K10.cell, 12) * (1 - prog(f, K10.middle, 12) * 0.5);
	const strip = strip8(5,
		[0, 1, 2, 3, 4].map(i => ({lit: tL, thumb: i === 4 ? PLATES.apoptotic : undefined, thumbAt: K10.cell + 10})),
		BIG8,
		[0, 1, 2, 3, 4].map(i => ({lit: bL, thumb: i === 3 ? PLATES.plasma : i === 4 ? PLATES.virus : undefined, thumbAt: K10.antibody + 10})));
	const R4 = stripRects(strip)[3];
	const b2 = stepRect(strip, 3, 1, 0), t5 = stepRect(strip, 3, 4, 1);
	const cw = (R4.w - 48) / 2;
	const mid: Pt = [R4.x + 16 + cw + 8, R4.y + R4.h + 56];
	const loopU = clamp01((f - K10.both - 10) / 60);
	const L1: Pt = [1500, 820], L2: Pt = [1760, 820];
	const sp: Pt = loopU < 0.7 ? [lerp(L1[0] + 50, L2[0] - 50, loopU / 0.7), 760 - Math.sin((loopU / 0.7) * Math.PI) * 60] : [L2[0], 840];
	const footX = R4.x + 32 + cw + cw / 2;
	return (
		<Overlay>
			<g opacity={prog(f, 0, 18)}><ResponseStrip {...strip} /></g>
			<CTag x={1400} y={220} text="antibody arm: outside cells" at={K10.antibody + 8} color={AMBER_INK} size={30} maxW={480} dim={prog(f, K10.cell, 10)} />
			<Gloss x={1404} y={320} text="humoral" at={K10.antibody + 20} color={GREY_INK} />
			<CTag x={1400} y={370} text="cell-mediated arm: infected cells" at={K10.cell + 8} color={AMBER_INK} size={30} maxW={480} dim={prog(f, K10.both, 10)} />
			<CTag x={1400} y={470} text="cell-mediated: T cells act on infected cells" at={K10.cell + 22} color={GREY_INK} size={24} maxW={480} />
			<g opacity={prog(f, K10.both + 4, 14)}>
				<Outline x={L1[0]} y={L1[1]} w={90} h={200} dash={false} />
				<Outline x={L2[0]} y={L2[1]} w={90} h={200} dash={false} />
				<circle cx={sp[0]} cy={sp[1]} r={12} fill={VRED} stroke="#6a1a1a" strokeWidth={2} />
			</g>
			<CTag x={1380} y={630} text="between cells: antibodies" at={K10.both + 14} color={TEAL} size={26} dim={prog(f, K10.middle, 10)} />
			<CTag x={1380} y={950} text="inside cells: cytotoxic T cells" at={K10.both + 56} color={AMBER_INK} size={26} dim={prog(f, K10.middle, 10)} />
			<TCell cx={mid[0]} cy={mid[1]} w={86} ring="teal" forks={0} o={prog(f, K10.middle + 4, 12)} />
			{f >= K10.middle + 14 ? (
				<g>
					<PlainArrow x1={mid[0] - 30} y1={mid[1] - 34} x2={b2.x + b2.w - 30} y2={b2.y + b2.h - 4} at={K10.middle + 14} color={TEAL} width={5} />
					<PlainArrow x1={mid[0] + 34} y1={mid[1] - 30} x2={t5.x + 40} y2={t5.y + t5.h} at={K10.middle + 18} color={TEAL} width={5} />
				</g>
			) : null}
			<CTag x={1400} y={540} text="helpers switch on both" at={K10.middle + 20} color={TEAL} size={30} maxW={480} />
			{[0, 1, 2].map(i => <TCell key={i} cx={footX - 70 + i * 70} cy={R4.y + R4.h + 50} w={56} forks={0} o={prog(f, K10.memory + i * 4, 10)} />)}
			<Ring cx={footX} cy={R4.y + R4.h + 50} rx={120} ry={46} at={K10.memory + 14} color={TEAL} />
			<GTag x={footX + 130} y={R4.y + R4.h + 30} text="b09" at={K10.memory + 20} size={22} />
			{void GREY_INK}
		</Overlay>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {b: 'B cells make', t: 'T cells Terminate', term: 'terminate infected', tell: 'tell other'});
const A_ = ({c}: {c: string}) => <span style={{color: AMBER_INK}}>{c}</span>;
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const line: React.CSSProperties = {position: 'absolute', left: 0, width: 1920, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 92, color: TEAL};
	return (
		<>
			<div style={{...line, top: 250, opacity: prog(f, K11.b, 14)}}>B cells make anti<A_ c="B" />odies.</div>
			<div style={{...line, top: 410, opacity: prog(f, K11.t, 14)}}><A_ c="T" /> cells <A_ c="T" />erminate or <A_ c="T" />ell.</div>
			<Overlay>
				<TCell cx={930} cy={720} w={150} killer={1} ring="amber" forks={0} o={prog(f, K11.term, 14)} />
				<TCell cx={1330} cy={720} w={150} ring="teal" forks={0} o={prog(f, K11.tell, 14)} />
			</Overlay>
		</>
	);
};
