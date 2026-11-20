// Y11 Chem M1 V05 scenes 6 to 10: the worked example (P and Q, g01-style rows with framed answers), the live replay
// with a halfway strip (distances halve, ratios hold), the three-lane standards sheet, the practical details (the
// painted pencil draws the baseline and marks the front) and the traps with the "Spot over front" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DYE, HOOK_SPOTS, JAR_B, PENCIL, WE_SPOTS, sc} from './common';
import {
	Chip, Cross, DevStrip, Dim, Fade, Framed, Heading, INK, Inset, Jar, PURE, PenArrow, PenRing, Plate, RED, RF_INK, Readout, Rich, SLATE_INK, SVG, Solvent, StrikeLine, Sx, Write,
	jarGeo, kf, plateMap, prog, spotY, tw,
} from './parts';
import {Underline} from '../chem-y11-m1-v01/s1';
import {JarStrip} from './s1';

export const PXCM = 70;
export const WS = {x: 160, y: 190, w: 240, h: 760};
export const WB = WS.h / 6;
const wby = WS.y + WS.h - WB;
const GOOD = '#23704a';
/** The worked strip with P and Q labels; travel in px. */
export const WorkedStrip: React.FC<{travel: number; x?: number; w?: number}> = ({travel, x = WS.x, w = WS.w}) => (
	<g>
		<DevStrip x={x} y={WS.y} w={w} h={WS.h} base={WB} travel={travel} spots={WE_SPOTS} dot={DYE.green} />
		{travel > 20 ? <>
			<Sx x={x - 14} y={spotY(WS.y, WS.h, WB, travel, 0.3) + 12} text="P" size={38} color={INK} anchor="end" weight={800} at={-1000} />
			<Sx x={x - 14} y={spotY(WS.y, WS.h, WB, travel, 0.8) + 12} text="Q" size={38} color={INK} anchor="end" weight={800} at={-1000} />
		</> : null}
	</g>
);

// ---------- 6. worked example ----------
const K6 = cues(sc('worked-example'), {green: 'green food', front: 'eight point zero', p: 'two point four', q: 'six point four', forP: 'For P', zero1: ['zero', 3], forQ: 'For Q', zero2: ['zero', 6], both: 'Both answers', sig: 'significant'});
export const SceneWorked: React.FC = () => {
	const tr = 8 * PXCM;
	const pY = spotY(WS.y, WS.h, WB, tr, 0.3), qY = spotY(WS.y, WS.h, WB, tr, 0.8);
	const ux = 804 + tw('solvent front: ', 38, false, 700);
	return (
		<SVG>
			<Heading text="Worked example: P and Q" at={0} />
			<WorkedStrip travel={tr} />
			<Dim x={430} y0={wby} y1={pY} at={K6.p} label="2.4 cm" color={RF_INK} />
			<Dim x={480} y0={wby} y1={qY} at={K6.q} label="6.4 cm" color={RF_INK} />
			<Dim x={640} y0={wby} y1={wby - tr} at={K6.front} label="8.0 cm" color={PURE} />
			<Write x={780} y={440} text="green food colouring: spots P and Q" at={K6.green} out={K6.front - 10} size={42} color={INK} />
			<Rich x={780} y={250} segs={[{t: 'Calculate Rf for spots P and Q'}]} size={44} at={-1000} />
			<Rich x={780} y={320} segs={[{t: 'Rf = ', c: RF_INK}, {t: 'spot distance', c: RF_INK}, {t: ' ÷ '}, {t: 'front distance', c: PURE}]} size={44} at={-1000} />
			<Fade at={K6.front - 8}><rect x={780} y={360} width={560} height={190} rx={16} fill="#eef2fa" stroke={PURE} strokeWidth={3} /></Fade>
			<Sx x={804} y={410} text="solvent front: 8.0 cm" size={38} color={PURE} weight={700} at={K6.front} />
			<Sx x={804} y={462} text="spot P: 2.4 cm" size={38} color={PURE} weight={700} at={K6.p} />
			<Sx x={804} y={514} text="spot Q: 6.4 cm" size={38} color={PURE} weight={700} at={K6.q} />
			<Sx x={1360} y={462} text="all from the" size={30} color={INK} weight={700} at={K6.front} />
			<Sx x={1360} y={498} text="baseline" size={30} color={INK} weight={700} at={K6.front} />
			<Rich x={780} y={680} segs={[{t: 'Rf(P) = 2.4 ÷ 8.0 ='}]} size={52} at={K6.forP} />
			<Framed x={1340} y={680} segs={[{t: '0.30', c: GOOD}]} at={K6.zero1} size={52} />
			<Rich x={780} y={800} segs={[{t: 'Rf(Q) = 6.4 ÷ 8.0 ='}]} size={52} at={K6.forQ} />
			<Framed x={1340} y={800} segs={[{t: '0.80', c: GOOD}]} at={K6.zero2} size={52} />
			<Underline x0={ux} x1={ux + tw('8.0', 38, false, 700)} y={420} at={K6.sig} color={INK} />
			<Write x={780} y={910} text="2 sig figs, like the data" at={K6.sig} size={42} color={INK} />
			<JarStrip x={1560} y={540} h={380} />
			<Cross x={WS.x + WS.w / 2} y={pY} at={K6.p} color={RF_INK} />
			<Cross x={WS.x + WS.w / 2} y={qY} at={K6.q} color={RF_INK} />
			{void K6.green}{void K6.both}
		</SVG>
	);
};

// ---------- 7. why a ratio ----------
const K7 = cues(sc('why-a-ratio'), {stopped: 'stopped this run', four: 'four point zero', p: 'one point two', q: 'three point two', every: 'Every distance', ratios: 'the ratios', zero: ['zero', 5], fixed: 'fixed fraction', depends: 'depends on', paper: 'type of paper', solvent: 'the solvent and', temp: 'temperature', change: 'change'});
export const SceneRatio: React.FC = () => {
	const f = useCurrentFrame();
	const F = kf(f, [[0, 0.3], [60, 4], [K7.change - 120, 4], [K7.change, 8]]);
	const tr = F * PXCM;
	const H = {x: 470, w: 200};
	const htr = 4 * PXCM;
	const hP = spotY(WS.y, WS.h, WB, htr, 0.3), hQ = spotY(WS.y, WS.h, WB, htr, 0.8);
	const r = (v: number) => (F < 0.5 ? '–' : (v * F / F).toFixed(2));
	return (
		<SVG>
			<Heading text="Why a ratio?" at={0} />
			<WorkedStrip travel={tr} />
			<Sx x={WS.x + WS.w / 2} y={232} text="the run (replay)" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Fade at={K7.stopped}>
				<DevStrip x={H.x} y={WS.y} w={H.w} h={WS.h} base={WB} travel={htr} spots={WE_SPOTS} dot={DYE.green} />
				<Sx x={H.x + H.w / 2} y={232} text="stopped" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={H.x + H.w / 2} y={266} text="halfway" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Dim x={H.x + H.w + 20} y0={wby} y1={hP} at={K7.p} label="1.2 cm" color={RF_INK} size={30} />
			<Dim x={H.x + H.w + 90} y0={wby} y1={hQ} at={K7.q} label="3.2 cm" color={RF_INK} size={30} />
						<Dim x={H.x + H.w + 190} y0={wby} y1={wby - htr} at={K7.four} label="4.0 cm" color={PURE} size={30} />
			{/* live readouts read from the replay */}
			<Sx x={1000} y={226} text="read from the run" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={1000} y={240} w={330} text={`front: ${F.toFixed(1)} cm`} size={44} color={PURE} frame={PURE} />
			<Readout x={1000} y={322} w={330} text={`P: ${(0.3 * F).toFixed(1)} cm`} size={44} color={RF_INK} frame={RF_INK} />
			<Readout x={1000} y={404} w={330} text={`Q: ${(0.8 * F).toFixed(1)} cm`} size={44} color={RF_INK} frame={RF_INK} />
			<Readout x={1360} y={322} w={420} text={`Rf(P) = ${r(0.3)}`} size={52} color={RF_INK} frame={RF_INK} />
			<Readout x={1360} y={404} w={420} text={`Rf(Q) = ${r(0.8)}`} size={52} color={RF_INK} frame={RF_INK} />
			<Rich x={1000} y={560} segs={[{t: '1.2 ÷ 4.0 = 0.30'}]} size={44} at={K7.ratios} />
			<Rich x={1000} y={620} segs={[{t: '3.2 ÷ 4.0 = 0.80'}]} size={44} at={K7.ratios + 20} />
			<Write x={1360} y={600} text="same fraction" at={K7.zero} size={42} color={RF_INK} />
			<Rich x={1000} y={710} segs={[{t: 'Rf depends on the conditions:'}]} size={38} weight={700} at={K7.depends} />
			<Chip x={1000} y={730} segs={[{t: 'paper'}]} at={K7.paper} size={38} color={INK} />
			<Chip x={1170} y={730} segs={[{t: 'solvent'}]} at={K7.solvent} size={38} color={INK} />
			<Chip x={1380} y={730} segs={[{t: 'temperature'}]} at={K7.temp} size={38} color={INK} />
			<Inset x={1000} y={810} w={824} h={140} title="different solvent" at={K7.change - 10}>
				<DevStrip x={1300} y={822} w={60} h={120} base={20} travel={86} spots={[{c: DYE.blue, rf: 0.55}, {c: DYE.yellow, rf: 0.7}]} dot={DYE.green} spotR={7} />
				<Write x={1400} y={900} text="new conditions, new Rf" at={K7.change} size={42} color={INK} />
			</Inset>
			{void K7.every}{void K7.fixed}{void PenArrow}
		</SVG>
	);
};

// ---------- 8. comparing with standards ----------
const K8 = cues(sc('standards'), {identify: 'helps identify', run: 'Run known', time: 'same time', x: 'standard X', y: 'standard Y', px: 'P matches', qy: 'Q matches', but: 'But a match', prove: "doesn't prove", share: 'share an', again: 'run them again', match: 'still match'});
const SH = {x: 500, y: 190, w: 600, h: 760};
const LXF = [1 / 6, 1 / 2, 5 / 6];
const LANES = [[{c: DYE.blue, rf: 0.3}, {c: DYE.yellow, rf: 0.8}], [{c: DYE.blue, rf: 0.3}], [{c: DYE.yellow, rf: 0.8}]];
const DOTS = [DYE.green, DYE.blue, DYE.yellow];
/** A three-lane sheet (sample, X, Y) developed to fraction d of its full run (front 8.0 cm on the big sheet). */
const Sheet3: React.FC<{x: number; y: number; w: number; h: number; d: number; r?: number; labels?: boolean}> = ({x, y, w, h, d, r = 16, labels = false}) => {
	const base = h / 6, by = y + h - base, full = 0.74 * (h - base), tr = full * d;
	const s = tr > 4 ? 1 : 0;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={4} fill="#fff" stroke="#8a8378" strokeWidth={3} />
			{tr > 0 ? <rect x={x + 2} y={by - tr} width={w - 4} height={y + h - (by - tr) - 2} fill="rgba(120,170,220,0.22)" /> : null}
			{tr > 0 ? <line x1={x + 2} x2={x + w - 2} y1={by - tr} y2={by - tr} stroke="#5b8fc2" strokeWidth={3} /> : null}
			<line x1={x + 8} x2={x + w - 8} y1={by} y2={by} stroke="#4a4642" strokeWidth={3.5} />
			{LXF.map((fx, i) => (
				<g key={i}>
					{s < 1 ? <circle cx={x + fx * w} cy={by} r={r - 2} fill={DOTS[i]} /> : null}
					{s ? LANES[i].map((p, k) => <ellipse key={k} cx={x + fx * w} cy={by - p.rf * tr} rx={r} ry={r * 1.1} fill={p.c} stroke="rgba(30,30,30,0.35)" strokeWidth={1.5} />) : null}
					{labels ? <Sx x={x + fx * w} y={by + 52} text={['sample', 'X', 'Y'][i]} size={34} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
				</g>
			))}
		</g>
	);
};
export const SceneStandards: React.FC = () => {
	const f = useCurrentFrame();
	const d = kf(f, [[0, 0], [K8.time + 140, 1]]);
	const g = jarGeo(96, 260, 640);
	const base = SH.h / 6, by = SH.y + SH.h - base, full = 0.74 * (SH.h - base);
	const LX = LXF.map(fx => SH.x + fx * SH.w);
	const yP = by - 0.3 * full, yQ = by - 0.8 * full;
	return (
		<SVG>
			<Heading text="Comparing with standards" at={0} />
			<Jar x={96} y={260} h={640}>
				<Solvent g={g} lvl={46} />
				<Sheet3 x={g.cx - 120} y={g.Y(520)} w={240} h={g.Y(1370) - g.Y(520)} d={d} r={8} />
			</Jar>
			<Sheet3 x={SH.x} y={SH.y} w={SH.w} h={SH.h} d={d} labels />
			<line x1={LX[0] + 20} x2={LX[1] - 20} y1={yP} y2={yP} stroke={RF_INK} strokeWidth={4} strokeDasharray="10 7" opacity={prog(f, K8.px, 12)} />
			<line x1={LX[0] + 20} x2={LX[2] - 20} y1={yQ} y2={yQ} stroke={RF_INK} strokeWidth={4} strokeDasharray="10 7" opacity={prog(f, K8.qy, 12)} />
			<Write x={LX[0] + 50} y={yP - 16} text="match" at={K8.px + 6} size={42} color={RF_INK} />
			<Write x={LX[1] + 30} y={yQ - 16} text="match" at={K8.qy + 6} size={42} color={RF_INK} />
			<Write x={1150} y={260} text="same paper, same solvent, same run" at={8} size={40} color={INK} />
			<Rich x={1150} y={330} segs={[{t: 'sample: ', c: DYE.green}, {t: 'green food colouring'}]} size={38} weight={700} at={-1000} />
			<Rich x={1150} y={380} segs={[{t: 'X, Y: ', c: INK}, {t: 'known substances (standards)'}]} size={38} weight={700} at={-1000} />
			<Rich x={1150} y={470} segs={[{t: 'X: Rf 0.30', c: DYE.blue}]} size={44} at={K8.x} />
			<Rich x={1480} y={470} segs={[{t: 'Y: Rf 0.80', c: '#8a6a00'}]} size={44} at={K8.y} />
			<Rich x={1150} y={540} segs={[{t: 'P matches X; Q matches Y'}]} size={44} at={K8.px} />
			<Chip x={1150} y={570} segs={[{t: "match: supports, doesn't prove"}]} at={K8.but} size={38} color={RF_INK} />
			<Inset x={1150} y={660} w={320} h={290} title="another dye, Z" at={K8.prove}>
				<DevStrip x={1275} y={716} w={70} h={150} base={28} travel={104} spots={[{c: '#2a8a8a', rf: 0.3}]} dot={'#2a8a8a'} spotR={10} />
				<Sx x={1170} y={902} text="same Rf," size={34} color={RED} hand weight={700} at={K8.share} />
				<Sx x={1170} y={934} text="different dye" size={34} color={RED} hand weight={700} at={K8.share} />
			</Inset>
			<Inset x={1500} y={660} w={324} h={290} title="different solvent" at={K8.again}>
				<DevStrip x={1550} y={716} w={60} h={150} base={28} travel={104} spots={[{c: DYE.blue, rf: 0.55}]} dot={DYE.green} spotR={10} />
				<DevStrip x={1680} y={716} w={60} h={150} base={28} travel={104} spots={[{c: DYE.blue, rf: 0.55}]} dot={DYE.blue} spotR={10} />
				<line x1={1580} x2={1710} y1={716 + 150 - 28 - 0.55 * 104} y2={716 + 150 - 28 - 0.55 * 104} stroke={RF_INK} strokeWidth={3} strokeDasharray="8 6" />
				<Sx x={1516} y={902} text="still matches:" size={30} color={INK} weight={800} at={K8.match} />
				<Sx x={1516} y={934} text="stronger evidence" size={30} color={INK} weight={800} at={K8.match} />
			</Inset>
			{void K8.identify}{void K8.time}
		</SVG>
	);
};

// ---------- 9. details that protect the measurement ----------
const K9 = cues(sc('practical-details'), {few: 'A few details', draw: 'Draw the baseline', pencil: "pencil doesn't", ink: 'ink would', keep: 'Keep the solvent', pool: 'pool', lid: 'Keep the lid', climbs: 'climbs', mark: 'mark the solvent', soon: 'as soon as', disappears: 'disappears'});
const FS = {x: 520, y: 220, w: 220, h: 700};
export const PencilAt: React.FC<{x: number; y: number; h?: number; o?: number}> = ({x, y, h = 300, o = 1}) => {
	const k = h / PENCIL.box[3];
	return <Plate p={PENCIL} x={x - (165 - PENCIL.box[0]) * k} y={y - (1765 - PENCIL.box[1]) * k} h={h} o={o} />;
};
export const ScenePractical: React.FC = () => {
	const f = useCurrentFrame();
	const g = jarGeo(96, 300, 560);
	const fb = FS.h / 6, fby = FS.y + FS.h - fb;
	const draw = prog(f, K9.draw, 50);
	const dev = kf(f, [[K9.lid - 40, 0], [K9.mark, 1]]);
	const tr = 0.8 * (FS.h - fb) * dev;
	const dry = prog(f, K9.disappears - 10, 30);
	const markP = prog(f, K9.soon, 24);
	const fy = fby - 0.8 * (FS.h - fb);
	const pen: [number, number] | null = f >= K9.draw - 10 && f < K9.draw + 70 ? [FS.x + 8 + draw * (FS.w - 16), fby] : f >= K9.soon - 10 && f < K9.disappears + 20 ? [FS.x + FS.w - 30 + markP * 24, fy] : f < K9.draw - 10 ? [FS.x + 8, fby] : null;
	void JAR_B;
	return (
		<SVG>
			<Heading text="Details that protect the measurement" at={0} />
			<Jar x={96} y={300} h={560}>
				<Solvent g={g} lvl={46} />
				<DevStrip x={g.cx - 38} y={g.Y(520)} w={76} h={g.Y(1370) - g.Y(520)} base={(g.Y(1370) - g.Y(520)) / 6} travel={0} spots={[]} />
			</Jar>
			<PenRing cx={g.lidC[0]} cy={g.lidC[1]} rx={180} ry={44} at={K9.lid} color={INK} seed={4} />
			<Write x={96} y={260} text="lid on" at={K9.lid + 4} size={42} color={INK} />
			{/* the fresh strip */}
			<g>
				<rect x={FS.x} y={FS.y} width={FS.w} height={FS.h} rx={4} fill="#fff" stroke="#8a8378" strokeWidth={3} />
				{tr > 0 ? <rect x={FS.x + 2} y={fby - tr} width={FS.w - 4} height={FS.y + FS.h - (fby - tr) - 2} fill="rgba(120,170,220,0.22)" opacity={1 - dry} /> : null}
				{tr > 0 ? <line x1={FS.x + 2} x2={FS.x + FS.w - 2} y1={fby - tr} y2={fby - tr} stroke="#5b8fc2" strokeWidth={3} opacity={1 - dry} /> : null}
				<line x1={FS.x + 8} x2={FS.x + 8 + draw * (FS.w - 16)} y1={fby} y2={fby} stroke="#4a4642" strokeWidth={3.5} />
				{f >= K9.soon ? <line x1={FS.x + FS.w - 30} x2={FS.x + FS.w - 30 + markP * 24} y1={fy} y2={fy} stroke="#4a4642" strokeWidth={4} /> : null}
			</g>
			{pen ? <PencilAt x={pen[0]} y={pen[1]} h={240} /> : null}
			<Write x={FS.x} y={fby + 70} text="pencil stays put" at={K9.pencil} size={42} color={INK} />
			<Write x={FS.x + FS.w + 20} y={fy + 14} text="mark it now" at={K9.soon + 10} size={42} color={INK} />
			{/* two wrong set-ups */}
			<Inset x={820} y={200} w={480} h={340} title="ink baseline" at={20}>
				<rect x={860} y={270} width={90} height={250} fill="#fff" stroke="#8a8378" strokeWidth={2} />
				<path d={`M866,480 L944,480 L944,${480 - 120 * prog(f, K9.ink, 40)} Q905,${470 - 160 * prog(f, K9.ink, 40)} 866,${480 - 100 * prog(f, K9.ink, 40)} Z`} fill="rgba(80,60,160,0.45)" />
				<line x1={866} x2={944} y1={480} y2={480} stroke="#3c2a8a" strokeWidth={5} />
				<StrikeLine x1={840} y1={530} x2={1280} y2={250} at={K9.ink + 20} />
				<Write x={980} y={420} text="ink would run" at={K9.ink + 26} size={42} color={RED} />
			</Inset>
			<Inset x={1340} y={200} w={484} h={340} title="solvent above the line" at={K9.keep}>
				<rect x={1380} y={270} width={90} height={250} fill="#fff" stroke="#8a8378" strokeWidth={2} />
				<rect x={1366} y={430} width={118} height={100} fill="rgba(120,170,220,0.45)" />
				<line x1={1386} x2={1464} y1={480} y2={480} stroke="#4a4642" strokeWidth={3} />
				<circle cx={1425} cy={480} r={10 + 30 * prog(f, K9.keep + 20, 60)} fill={DYE.pink} opacity={0.5} />
				<StrikeLine x1={1360} y1={530} x2={1800} y2={250} at={K9.pool} />
				<Write x={1500} y={420} text="spots wash out" at={K9.pool + 6} size={42} color={RED} />
			</Inset>
			<Sx x={820} y={630} text="baseline: drawn in pencil, which doesn't dissolve" size={34} color={INK} weight={800} at={-1000} />
			<Sx x={820} y={700} text="solvent below the baseline" size={34} color={INK} weight={800} at={K9.keep} />
			<Sx x={820} y={770} text="lid on: the solvent doesn't evaporate off the paper" size={34} color={INK} weight={800} at={K9.lid} />
			<Sx x={820} y={840} text="mark the solvent front straight away: it dries" size={34} color={INK} weight={800} at={K9.mark} />
			{void K9.few}{void K9.climbs}{void plateMap}{void Chip}
		</SVG>
	);
};

// ---------- 10. traps, and a way to remember ----------
const K10 = cues(sc('traps-and-memory-aid'), {measure: 'Measure from', bottom: 'bottom edge', centre: 'centre', top: 'on top', ever: 'If you ever', flipped: 'flipped', here: "Here's a way", spot: 'Spot over front', stickier: 'stickier', lower: 'lower', cannot: 'cannot pass', smallest: 'smallest'});
export const SceneTraps: React.FC = () => {
	const f = useCurrentFrame();
	const tr = 8 * PXCM;
	const pY = spotY(WS.y, WS.h, WB, tr, 0.3);
	const HS = {x: 1320, y: 470, w: 120, h: 420};
	const hb = HS.h / 6, htr = 0.82 * (HS.h - hb);
	const NL = {x0: 1500, x1: 1780, y: 900};
	return (
		<SVG>
			<Heading text="Two traps, and a way to remember" at={0} />
			<WorkedStrip travel={tr} />
			<Dim x={440} y0={WS.y + WS.h} y1={pY} at={K10.bottom} color={RED} dashed />
			<StrikeLine x1={420} y1={WS.y + WS.h - 40} x2={470} y2={pY + 40} at={K10.bottom + 24} />
			<Write x={480} y={880} text="from the baseline" at={K10.bottom + 30} size={42} color={RED} />
			<Dim x={520} y0={wby} y1={pY - 16} at={K10.centre} color={RED} dashed />
			<StrikeLine x1={500} y1={wby - 20} x2={550} y2={pY + 10} at={K10.centre + 20} />
			<Write x={560} y={pY + 40} text="to the centre" at={K10.centre + 26} size={42} color={RED} />
			<Rich x={480} y={580} segs={[{t: 'Rf = ', c: RF_INK}, {t: 'spot distance', c: RF_INK}, {t: ' ÷ '}, {t: 'front distance', c: PURE}]} size={44} at={-1000} />
			<Chip x={480} y={230} segs={[{t: 'Rf = 8.0 ÷ 2.4 = 3.3'}]} at={K10.ever} size={44} color={RED} strike={K10.flipped} />
			<Write x={480} y={370} text="bigger than 1: flipped" at={K10.flipped + 6} size={42} color={RED} />
			<Rich x={480} y={450} segs={[{t: 'spot distance on top'}]} size={44} at={K10.top} />
			<Fade at={K10.here}>
				<rect x={960} y={200} width={864} height={240} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<rect x={970} y={210} width={844} height={220} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={1000} y={256} text="memory aid" size={30} color={INK} hand weight={700} at={-1000} />
			</Fade>
			<Rich x={1000} y={330} segs={[{t: 'Spot over front,', c: RF_INK}]} size={52} hand at={K10.spot} />
			<Rich x={1000} y={400} segs={[{t: 'and stickier stays lower.', c: SLATE_INK}]} size={52} hand at={K10.stickier} />
			<Fade at={-1000}>
				<DevStrip x={HS.x} y={HS.y} w={HS.w} h={HS.h} base={hb} travel={htr} spots={HOOK_SPOTS} spotR={11} />
			</Fade>
			<PenRing cx={HS.x + HS.w / 2} cy={spotY(HS.y, HS.h, hb, htr, 0.2)} rx={34} ry={30} at={K10.lower} color={DYE.blue} seed={2} />
			<Write x={HS.x + HS.w + 20} y={spotY(HS.y, HS.h, hb, htr, 0.2) + 12} text="stickiest: lowest" at={K10.lower + 4} size={42} color={DYE.blue} />
			<Fade at={K10.smallest}>
				<line x1={NL.x0} x2={NL.x1} y1={NL.y} y2={NL.y} stroke={INK} strokeWidth={4} />
				{[0, 0.5, 1].map(v => <g key={v}><line x1={NL.x0 + v * (NL.x1 - NL.x0)} x2={NL.x0 + v * (NL.x1 - NL.x0)} y1={NL.y - 12} y2={NL.y + 12} stroke={INK} strokeWidth={4} /><Sx x={NL.x0 + v * (NL.x1 - NL.x0)} y={NL.y + 50} text={`${v}`} size={34} color={INK} anchor="middle" weight={800} at={-1000} /></g>)}
				{HOOK_SPOTS.map((p, i) => <circle key={i} cx={NL.x0 + p.rf * (NL.x1 - NL.x0)} cy={NL.y} r={16} fill={p.c} stroke="#222" strokeWidth={2} />)}
				<Sx x={NL.x0} y={NL.y - 30} text="Rf" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			{void K10.measure}{void K10.cannot}{void Readout}{void Framed}{void Cross}
		</SVG>
	);
};
