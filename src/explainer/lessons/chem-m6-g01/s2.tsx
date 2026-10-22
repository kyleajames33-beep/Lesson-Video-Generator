// M6 G01 scenes 3a to 3d: question 2 (25.0 mL of 0.120 mol/L HCl made up to 250.0 mL): the attempt; moles first,
// "made up to" is the final volume, then the pH (the pipette tilts into the flask, the fill rises to the ring, the
// volume outline widens tenfold with the same six tokens); the log-scale check (+1.000); the "added volumes" mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {FLASK, FLASK_G, PIPETTE_G} from './assets';
import {
	DimG, DrawPath, Fade, FlaskFill, INK, INK_SOFT, KeptChip, MistakeX, Note, Overlay, P, PROTON_INK, PauseHold, PicH, PipettePlate, RingAt, Sx, TEAL, VolBox, WLine, flaskPt, lerp,
	picW, smooth,
} from './parts';
import type {QBlock} from './parts';
import {ChemBadge, Checks, HscTag, MiniRuler, QCardC, rulerX} from './board';
import type {QDef} from './board';

export const Q2: QDef = {
	blocks: t => [
		{text: 'A student uses a pipette to transfer 25.0 mL of 0.120 mol/L hydrochloric acid into a 250.0 mL volumetric flask, then makes the solution up to the mark with distilled water.', at: t[0]},
		{text: 'Calculate the pH of the diluted solution at 25 °C.', at: t[1], para: true, weight: 700},
	] as QBlock[],
	h: 320,
	ans: [{label: 'pH', y: 400}],
};
const Q2M = {n: '25.0 mL of 0.120 mol/L', mark: 'up to the mark', v: '250.0 mL'};
const FILL = 'pH = 1.921';
const WX = 840;
const PL = {fx: 1560, fy: 560, fh: 330};

// ---------- 3a. Question 2 (pause) ----------
const KA = cues(sc('q2-question'), {q: 'Question two', student: 'A student uses', makes: 'then makes it', two50: 'two hundred and fifty', calc: 'Calculate the pH', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<QCardC q={Q2} t={[KA.student, KA.calc]} ansAt={[KA.calc + 20]} />
				<Fade at={KA.student + 10}>
					<PipettePlate tipX={1320} tipY={600} h={360} rot={PIPETTE_G.tilt} />
					<PicH p={FLASK} x={1480} y={250} h={360} />
				</Fade>
				<PauseHold h={h} at={KA.pause} x={1180} y={720} cx={1520} cy={830} />
				<Checks hold={h} />
				{void KA.makes}{void KA.two50}
			</Overlay>
		</>
	);
};

// ---------- 3b. In what volume ----------
const KB = cues(sc('q2-moles'), {adding: 'Adding water', moles: 'start with moles', z0120: 'zero point one two zero times', z00300: 'zero point zero zero three zero zero', made: 'Made up to', final: 'final volume', conc: 'So the concentration', z0120c: 'zero point zero one two zero', ph: 'and the pH', p1921: 'one point nine two one'});
export const SceneQ2Moles: React.FC = () => {
	const f = useCurrentFrame();
	const S = 36;
	const k = PL.fh / FLASK.box[3];
	const neck = flaskPt(PL.fx, PL.fy, PL.fh, 1024, FLASK_G.cropTop);
	const ringY = flaskPt(PL.fx, PL.fy, PL.fh, 0, FLASK_G.ring)[1];
	const tilt = smooth(prog(f, 6, 30));
	const tip: [number, number] = [lerp(1380, neck[0], tilt), lerp(560, neck[1] + 30, tilt)];
	const flow = prog(f, 36, 6) * (1 - prog(f, 70, 8));
	const level = (fr: number) => kf(fr, [[36, 1852], [70, 1790], [80, 1790], [140, FLASK_G.ring]]);
	const surf = flaskPt(PL.fx, PL.fy, PL.fh, 0, level(f))[1];
	const wide = (fr: number) => kf(fr, [[KB.adding + 30, 70], [KB.moles + 50, 700]]);
	const PTS: [number, number][] = [[-0.6, -0.4], [-0.1, 0.5], [0.5, -0.3], [-0.4, 0.4], [0.2, 0.1], [0.7, 0.5]];
	return (
		<>
			<Heading text="Question 2: in what volume?" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Dilution" at={6} />
				<QCardC q={Q2} strip shrinkAt={0} marks={[{phrase: Q2M.n, at: KB.z00300}, {phrase: Q2M.mark, at: KB.made}, {phrase: Q2M.v, at: KB.made + 8}]} fills={[{i: 0, text: FILL, at: KB.p1921 + 10}]} ansAt={[-100]} />
				<Sx x={WX} y={230} text="Find the pH after dilution" size={42} color={INK} hand at={4} />
				<DimG at={KB.z00300} to={0.45}>
					<FlaskFill x={PL.fx} y={PL.fy} h={PL.fh} level={level} />
					<g opacity={1 - prog(f, 80, 14)}><PipettePlate tipX={tip[0]} tipY={tip[1]} h={330} rot={PIPETTE_G.tilt - 30 * tilt} /></g>
					{flow > 0.01 ? <line x1={tip[0]} y1={tip[1]} x2={tip[0]} y2={surf} stroke="#bcd9ee" strokeWidth={6} opacity={0.9 * flow} /> : null}
				</DimG>
				<RingAt cx={neck[0]} cy={ringY} rx={42} ry={16} at={KB.made + 4} out={KB.conc} color={TEAL} />
				<VolBox cx={1080} cy={800} w={wide} h={() => 130} pts={PTS} kind="H" at={KB.adding + 20} out={KB.made} s={0.9} />
				<Note x={1080} y={920} text="same moles, bigger volume" size={32} color={INK_SOFT} anchor="middle" at={KB.moles} out={KB.z0120} />
				<WLine x={WX} y={320} size={S} dim={KB.made} items={P('n(H_3O^{+}) = 0.120 × 0.0250', KB.z0120, {t: '= 0.00300 mol', color: PROTON_INK}, KB.z00300)} />
				<WLine x={WX} y={390} size={S} dim={KB.conc} items={P('V = 250.0 mL = 0.2500 L', KB.made, {t: '(final volume)', color: TEAL}, KB.final)} />
				<WLine x={WX} y={460} size={S} dim={KB.p1921} items={P('c = 0.00300 ÷ 0.2500', KB.conc + 10, {t: '= 0.0120 mol/L', color: PROTON_INK}, KB.z0120c)} />
				<WLine x={WX} y={540} size={40} items={P('pH = −log(0.0120)', KB.ph, {t: '= 1.921', color: TEAL}, KB.p1921)} />
				<Checks ticks={{0: [KB.moles], 1: [KB.made]}} />
				{void k}{void picW}
			</Overlay>
		</>
	);
};

// ---------- 3c. Does it make sense ----------
const KC = cues(sc('q2-check'), {sense: 'Does that make', volume: 'The volume went', ten: 'ten times', fell: 'fell ten times', one: 'One pH unit', exactly: 'exactly one', undiluted: 'The undiluted acid', checks: 'checks out'});
export const SceneQ2Check: React.FC = () => {
	const f = useCurrentFrame();
	const R = {x: 360, y: 700, w: 1260, lo: 0, hi: 3};
	const X = (p: number) => rulerX(R.x, R.w, R.lo, R.hi, p);
	const slide = smooth(prog(f, KC.fell, 30));
	const mx = lerp(X(0.921), X(1.921), slide);
	return (
		<>
			<Heading text="Question 2: does it make sense?" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Dilution" at={-100} />
				<QCardC q={Q2} strip marks={[{phrase: Q2M.n, at: -100}, {phrase: Q2M.mark, at: -100}, {phrase: Q2M.v, at: -100}]} fills={[{i: 0, text: FILL, at: -100}]} ansAt={[-100]} />
				<KeptChip x={WX} y={220} text="pH = 1.921" at={-100} color={TEAL} size={38} />
				<Mark x={WX + 280} y={250} at={KC.checks + 10} kind="tick" size={44} />
				<Sx x={WX} y={360} text="volume × 10, so concentration ÷ 10" size={36} color={INK} weight={700} at={KC.volume + 10} />
				<MiniRuler x={R.x} y={R.y} w={R.w} lo={R.lo} hi={R.hi} at={KC.sense + 10} />
				<Fade at={KC.ten}>
					<path d={`M${mx - 13},${R.y - 76} L${mx + 13},${R.y - 76} L${mx},${R.y - 56} Z`} fill={PROTON_INK} />
					<Sx x={mx} y={R.y - 88} text={slide < 0.5 ? '0.120' : '0.0120'} size={30} color={PROTON_INK} anchor="middle" weight={800} at={-1000} />
				</Fade>
				<Fade at={KC.fell + 20}>
					<DrawPath d={`M${X(0.921)},${R.y - 130} L${X(0.921)},${R.y - 142} L${X(1.921)},${R.y - 142} L${X(1.921)},${R.y - 130}`} at={KC.fell + 20} dur={14} color={PROTON_INK} width={4} />
					<Sx x={(X(0.921) + X(1.921)) / 2} y={R.y - 154} text="÷ 10" size={32} color={PROTON_INK} anchor="middle" weight={800} at={KC.fell + 26} />
				</Fade>
				<Fade at={KC.exactly}>
					<DrawPath d={`M${X(0.921)},${R.y + 80} L${X(0.921)},${R.y + 94} L${X(1.921)},${R.y + 94} L${X(1.921)},${R.y + 80}`} at={KC.exactly} dur={14} color={TEAL} width={4} />
					<Sx x={(X(0.921) + X(1.921)) / 2} y={R.y + 134} text="+1.000" size={36} color={TEAL} anchor="middle" weight={800} at={KC.exactly + 6} />
				</Fade>
				<Sx x={X(0.921)} y={R.y + 180} text="0.921 (before)" size={30} color={INK_SOFT} anchor="middle" weight={700} at={KC.undiluted} />
				<Sx x={X(1.921)} y={R.y + 180} text="1.921 (after)" size={30} color={TEAL} anchor="middle" weight={800} at={KC.checks - 30} />
				<Note x={1300} y={240} text="One pH unit is ten times." size={36} color={TEAL} at={KC.checks + 6} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [KC.checks]}} />
				{void KC.one}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 3d. The classic mistake ----------
const KD = cues(sc('q2-mistake'), {classic: 'The classic mistake', adding: 'adding the two', gives: 'That gives', p1962: 'one point nine six two', made: 'Made up to means', total: 'the total is'});
export const SceneQ2Mistake: React.FC = () => {
	const FX = 1460, FY = 420, FH = 400;
	const ringY = flaskPt(FX, FY, FH, 0, FLASK_G.ring)[1];
	const neck = flaskPt(FX, FY, FH, 1024, FLASK_G.cropTop);
	return (
		<>
			<Heading text="Question 2: the classic mistake" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Dilution" at={-100} />
				<QCardC q={Q2} strip marks={[{phrase: Q2M.n, at: -100}, {phrase: Q2M.mark, at: -100}, {phrase: Q2M.v, at: -100}]} fills={[{i: 0, text: FILL, at: -100}]} ansAt={[-100]} />
				<MistakeX x={WX} y={240} text="V = 25.0 + 250.0 = 275.0 mL: pH 1.962" at={4} cross={KD.classic + 24} note="made up to = final volume" size={32} />
				<Fade at={KD.made - 10}>
					<FlaskFill x={FX} y={FY} h={FH} level={() => FLASK_G.ring} />
				</Fade>
				<RingAt cx={neck[0]} cy={ringY} rx={44} ry={16} at={KD.made} color={TEAL} />
				<Note x={FX - 40} y={ringY + 10} text="250.0 mL in total" size={34} color={TEAL} anchor="end" at={KD.total} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [-100]}} />
				{void KD.adding}{void KD.gives}{void KD.p1962}
			</Overlay>
		</>
	);
};
