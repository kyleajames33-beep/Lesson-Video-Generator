// Scenes 7 to 12: one row of the illustrative results (full-width table), the graph (points drop onto Mg against
// omega squared, the best line beside the prediction, the gradient and the inferred bung mass), how much to trust
// it (a push to one point, error bars), repeats and systematic errors (tube close-up, safety glasses), testing
// length and mass (two mini graphs), and the mistake with the memory aid (the Mg against omega curve straightens).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, ROLE, Row, Sub, Sup} from '../../physics/projectile/board';
import {BUNG_DEFAULT, Bung, BungRig, bungGeom, droopDeg} from '../../physics/circular/bung';
import {APP, FIT, HEAD, HEAD_SIZE, MEAN, REPEATS, ROWS, T20, UNC, cue, mono} from './common';
import {AMBER, Axes, Banner, ERR, Glasses, Lbl, NAVY, ORANGE, OriginLine, Point, Ring, card, fx, gmap, txt, Title} from './parts';
import type {GraphG} from './parts';

const RAD: React.FC = () => <>rad s<Sup>−1</Sup></>;
const RAD2: React.FC = () => <>rad² s<Sup>−2</Sup></>;
const MID = ROWS[1];

// ---------- 6. one row of results (full-width table) ----------
const COLS = ['M (kg)', 'Mg (N)', 't₂₀ (s, mean)', 'T (s)', 'ω (rad s⁻¹)', 'ω² (rad² s⁻²)'];
const CW = 288, TX = 96, TY = 300, RH = 64;
const cells = (i: number) => {
	const r = ROWS[i];
	return [r.M.toFixed(3), fx(r.Mg, 2), fx(r.t20, 1), fx(r.T, 3), fx(r.w, 2), fx(r.w2, 1)];
};
export const S06: React.FC = () => {
	const id = 'one-row';
	const f = useCurrentFrame();
	const illus = cue(id, 'illustrative values'), hundred = cue(id, 'a hundred grams hanging'), nine8 = cue(id, 'nine eight newtons'), eighteen = cue(id, 'eighteen point one seconds'), Tis = cue(id, 'T is zero'), w694 = cue(id, 'six point nine four'), w2 = cue(id, 'forty-eight point two');
	const cellAt = (i: number, c: number) => {
		if (c === 0) return -30;
		if (i === 1) return [0, nine8 + 10, eighteen + 10, Tis + 20, w694 + 10, w2 + 6][c];
		const k = i === 0 ? 0 : i - 1;
		return w2 + 14 + k * 4 + c * 2;
	};
	const cur = prog(f, hundred, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={illus} style={{position: 'absolute', left: 96, top: 186}}>
				<div style={{display: 'inline-block', background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 12, padding: '4px 18px 6px', ...DISPLAY(30, NAVY.ink, 800)}}>illustrative values, not real measurements</div>
			</Enter>
			<Enter at={-30} style={{position: 'absolute', left: 1200, top: 186}}>
				<div style={{display: 'inline-block', background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 12, padding: '4px 18px 6px', ...DISPLAY(30, NAVY.ink, 700)}}>bung m = 0.025 kg | L = 0.80 m</div>
			</Enter>
			<div style={{position: 'absolute', left: TX, top: TY, width: CW * 6, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`}}>
				<div style={{display: 'flex', borderBottom: `3px solid ${INK}`}}>
					{COLS.map((c, k) => <div key={k} style={{width: CW, padding: '8px 12px', ...DISPLAY(30, INK, 800), textAlign: 'center'}}>{c}</div>)}
				</div>
				{ROWS.map((_, i) => {
					const big = i === 1 ? cur : 0;
					return (
						<div key={i} style={{display: 'flex', height: RH + 14 * big, alignItems: 'center', background: i === 1 ? `rgba(219,230,245,${0.9 * cur})` : undefined, borderTop: i ? '2px solid #e4dccb' : undefined}}>
							{cells(i).map((v, c) => <div key={c} style={{width: CW, textAlign: 'center', ...DISPLAY(32 + 12 * big, c === 0 ? AMBER.ink : INK, 800), opacity: prog(f, cellAt(i, c), 10), fontVariantNumeric: 'tabular-nums'}}>{v}</div>)}
						</div>
					);
				})}
			</div>
			<FrameSvg><Ring cx={TX + CW * 3} cy={TY + 56 + RH + 38} rx={860} ry={52} at={hundred + 20} color={NAVY.stroke} /></FrameSvg>
			<HandTag x={TX + CW * 3.5} y={TY + 56 + RH * 4 + 60} text="÷ 20 first" at={Tis + 30} size={30} color={NAVY.ink} anchor="middle" />
			<HandTag x={TX + CW * 4.5} y={TY + 56 + RH * 4 + 60} text="keep 6.943" at={w694 + 30} size={30} color={NAVY.ink} anchor="middle" />
			<div style={{position: 'absolute', left: 96, top: 690, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={nine8 - 20} ageAt={eighteen} size={40} oldSize={32}>Mg = 0.100 × 9.8 = {fx(MID.Mg, 2)} N</Row>
				<Row at={eighteen - 10} ageAt={w694} size={40} oldSize={32}>t<Sub>20</Sub> = 18.1 s, &nbsp;T = 18.1 ÷ 20 = {fx(MID.T, 3)} s</Row>
				<Row at={w694 - 20} ageAt={w2} size={40} oldSize={32}>ω = 2π ÷ 0.905 = {fx(MID.w, 2)} <RAD /></Row>
				<Row at={w2 - 10} size={44}><AnswerBox at={w2}><span>ω² = {fx(MID.w2, 1)} <RAD2 /></span></AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 7 and 8. the graph ----------
export const G7: GraphG = {ox: 720, oy: 800, w: 1040, h: 500, xMax: 110, yMax: 2.2};
const Strip: React.FC<{ring?: number}> = ({ring}) => (
	<div style={{position: 'absolute', left: 96, top: 186, width: 520, background: CARD, borderRadius: 14, boxShadow: CARD_SHADOW, border: `2.5px solid ${INK}`, padding: '6px 8px'}}>
		<div style={{display: 'flex', ...DISPLAY(26, INK, 800)}}>{['M (kg)', 't₂₀ (s)', 'ω²', 'Mg (N)'].map((c, k) => <div key={k} style={{width: 126, textAlign: 'center'}}>{c}</div>)}</div>
		{ROWS.map((r, i) => (
			<div key={i} style={{display: 'flex', ...DISPLAY(28, INK, 700), borderTop: '2px solid #e4dccb', fontVariantNumeric: 'tabular-nums'}}>
				{[r.M.toFixed(3), fx(r.t20, 1), fx(r.w2, 1), fx(r.Mg, 2)].map((v, k) => <div key={k} style={{width: 126, textAlign: 'center'}}>{k === 1 && ring !== undefined && (i === 0 || i === 3) ? <MarkSpan kind="circle" at={ring + 4 * i} color={NAVY.stroke}>{v}</MarkSpan> : v}</div>)}
			</div>
		))}
	</div>
);
export const S07: React.FC = () => {
	const id = 'the-graph';
	const f = useCurrentFrame();
	const plot = cue(id, 'plot the points'), line = cue(id, 'straight line through'), grad = cue(id, 'zero point zero two zero kilogram'), divide = cue(id, 'Dividing by the string'), m254 = cue(id, 'zero point zero two five four'), pct = cue(id, 'about two percent'), real = cue(id, 'Real measurements');
	const [ax, ay] = gmap(G7, 40, FIT.k * 40), [bx, by] = gmap(G7, 90, FIT.k * 90);
	const tri = prog(f, grad, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Axes g={G7} xTitle="ω² (rad² s⁻²)" yTitle="Mg (N)" xStep={20} yStep={0.5} />
				<OriginLine g={G7} k={APP.m * APP.L} color={ORANGE.stroke} dash="16 10" />
				<OriginLine g={G7} k={FIT.k} at={line} color={NAVY.stroke} width={5} />
				{ROWS.map((r, i) => <Point key={i} g={G7} xv={r.w2} yv={r.Mg} at={plot + 10 + i * 12} />)}
				{tri > 0 ? <g opacity={tri}>
					<path d={`M${ax},${ay} L${bx},${ay} L${bx},${by}`} fill="none" stroke={NAVY.stroke} strokeWidth={3.5} strokeDasharray="10 7" />
				</g> : null}
			</FrameSvg>
			<Lbl x={(ax + bx) / 2} y={ay + 46} at={grad} color={NAVY.ink} anchor="middle" size={44}>gradient = {fx(FIT.k, 4)} kg m</Lbl>
			<HandTag x={1600} y={560} text="close to the line" at={line + 20} size={30} color={NAVY.ink} />
			<HandTag x={1450} y={300} text="prediction: mL" at={line + 40} size={28} color={ORANGE.ink} />
			<Strip ring={real} />
			<div style={{position: 'absolute', left: 790, top: 330, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={divide} size={36}>m = gradient ÷ L = {fx(FIT.k, 4)} ÷ 0.80</Row>
				<Row at={m254 - 16} size={52}><AnswerBox at={m254}><span><MarkSpan kind="circle" at={m254 + 30} color={NAVY.stroke}>m = {fx(FIT.m, 4)} kg</MarkSpan></span></AnswerBox></Row>
			</div>
			<HandTag x={96} y={470} text={`4 × the weight: turns about × 2 (${fx(T20[0] / T20[3], 2)})`} at={real} size={30} color={NAVY.ink} />
			<Chip x={96} y={520} at={pct} size={30} w={520} border={NAVY.stroke} color={NAVY.ink}>balance: 0.025 kg; difference about {fx(FIT.diffPct, 0)} %</Chip>
			<CrossedChip x={96} y={640} at={divide + 40} crossAt={m254 + 10} size={30} caption="gradient = mL, so divide">m = gradient × L = {fx(FIT.wrong, 3)} kg</CrossedChip>
			<Enter at={real + 20} style={{position: 'absolute', left: 96, top: 800, width: 560}}>
				<div style={{...DISPLAY(30, NAVY.ink, 800), whiteSpace: 'normal'}}>worked example: a consistency check, not evidence</div>
			</Enter>
		</>
	);
};

/** The close-up window round the 0.100 kg point: omega squared 44 to 53, Mg 0.88 to 1.08 N. */
const CW8 = {x0: 44, x1: 53, y0: 0.88, y1: 1.08, L: 760, R: 1760, T: 280, B: 860};
const cmap = (xv: number, yv: number): [number, number] => [CW8.L + ((xv - CW8.x0) / (CW8.x1 - CW8.x0)) * (CW8.R - CW8.L), CW8.B - ((yv - CW8.y0) / (CW8.y1 - CW8.y0)) * (CW8.B - CW8.T)];
const CloseUp: React.FC<{bar: number; pulse?: number}> = ({bar, pulse}) => {
	const f = useCurrentFrame();
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	const line = (k: number) => { const [ax, ay] = cmap(CW8.x0, k * CW8.x0), [bx, by] = cmap(CW8.x1, k * CW8.x1); return {ax, ay, bx, by}; };
	const b = line(FIT.k), p = line(APP.m * APP.L);
	const [px, py] = cmap(MID.w2, MID.Mg);
	const hw = ((MID.w2 * MID.pct) / 100 / (CW8.x1 - CW8.x0)) * (CW8.R - CW8.L) * bar;
	return (
		<g>
			<rect x={CW8.L - 20} y={CW8.T - 20} width={CW8.R - CW8.L + 40} height={CW8.B - CW8.T + 40} rx={16} fill="#fbf8f1" stroke={INK} strokeWidth={3} />
			<clipPath id="v16-close"><rect x={CW8.L} y={CW8.T} width={CW8.R - CW8.L} height={CW8.B - CW8.T} /></clipPath>
			{[45, 47, 49, 51, 53].map(v => { const [x] = cmap(v, 0); return <g key={v}><line x1={x} x2={x} y1={CW8.B} y2={CW8.B + 10} stroke={INK} strokeWidth={3} /><text x={x} y={CW8.B + 40} textAnchor="middle" style={txt(28, INK_SOFT, 700)}>{v}</text></g>; })}
			{[0.9, 0.95, 1.0, 1.05].map(v => { const [, y] = cmap(CW8.x0, v); return <g key={v}><line x1={CW8.L - 10} x2={CW8.L} y1={y} y2={y} stroke={INK} strokeWidth={3} /><text x={CW8.L - 16} y={y + 9} textAnchor="end" style={txt(28, INK_SOFT, 700)}>{v.toFixed(2)}</text></g>; })}
			<g clipPath="url(#v16-close)">
				<line x1={p.ax} y1={p.ay} x2={p.bx} y2={p.by} stroke={ORANGE.stroke} strokeWidth={6 + 4 * pz} strokeDasharray="18 11" />
				<line x1={b.ax} y1={b.ay} x2={b.bx} y2={b.by} stroke={NAVY.stroke} strokeWidth={5} />
				{bar > 0.01 ? <g><line x1={px - hw} x2={px + hw} y1={py} y2={py} stroke={ERR} strokeWidth={4} /><line x1={px - hw} x2={px - hw} y1={py - 16} y2={py + 16} stroke={ERR} strokeWidth={4} /><line x1={px + hw} x2={px + hw} y1={py - 16} y2={py + 16} stroke={ERR} strokeWidth={4} /></g> : null}
				<circle cx={px} cy={py} r={12} fill={NAVY.stroke} />
			</g>
			<text x={CW8.R} y={CW8.B + 80} textAnchor="end" style={txt(30, INK)}>ω² (rad² s⁻²)</text>
			<text x={CW8.L + 10} y={CW8.T - 30} style={txt(30, INK)}>Mg (N), close up</text>
		</g>
	);
};
export const S08: React.FC = () => {
	const id = 'uncertainty';
	const f = useCurrentFrame();
	const pm = cue(id, 'plus or minus a fifth'), onePct = cue(id, 'one percent'), sq = cue(id, 'Omega squared squares'), twoPct = cue(id, 'around two percent'), each = cue(id, 'Each point gets'), passes = cue(id, 'prediction line passes'), within = cue(id, 'within the uncertainty');
	const z = prog(f, 0, 24) * (1 - prog(f, each, 24));
	const bars = prog(f, each + 20, 30);
	const close = 0.5 * prog(f, onePct, 20) + 0.5 * prog(f, twoPct, 20);
	const last = ROWS[3];
	const [lx, ly] = gmap(G7, last.w2, last.Mg);
	const [px, py] = cmap(MID.w2, MID.Mg);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - z}>
					<Axes g={G7} xTitle="ω² (rad² s⁻²)" yTitle="Mg (N)" xStep={20} yStep={0.5} />
					<OriginLine g={G7} k={APP.m * APP.L} color={ORANGE.stroke} dash="16 10" pulse={passes} />
					<OriginLine g={G7} k={FIT.k} color={NAVY.stroke} width={4} />
					{ROWS.map((r, i) => <Point key={i} g={G7} xv={r.w2} yv={r.Mg} ex={(r.w2 * r.pct) / 100} bar={bars} />)}
				</g>
				{z > 0.01 ? <g opacity={z}><CloseUp bar={close} /></g> : null}
				<Ring cx={lx} cy={ly} rx={46} ry={34} at={passes + 20} color={ORANGE.stroke} />
			</FrameSvg>
			{z > 0.01 ? <div style={{opacity: z}}>
				<Lbl x={px} y={py - 50} at={pm} color={NAVY.ink} anchor="middle" size={34}>the 0.100 kg point</Lbl>
				<Lbl x={px} y={py + 70} at={onePct} color={ERR} anchor="middle" size={40}>ω² = {fx(MID.w2, 1)} ± {fx(f < twoPct ? (MID.w2 * UNC.pctT) / 100 : (MID.w2 * UNC.pctW2) / 100, 1)}</Lbl>
				<Lbl x={1500} y={330} at={sq} color={ORANGE.ink} size={30}>prediction (orange)</Lbl>
				<Lbl x={900} y={820} at={sq} color={NAVY.ink} size={30}>best line (navy)</Lbl>
			</div> : null}
			<div style={{position: 'absolute', left: 96, top: 190, width: 560, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={pm} size={36}>±0.2 s in 18.1 s ≈ {fx(UNC.pctT, 1)} %</Row>
				<Row at={onePct} size={32}>(T = 0.905 ± 0.01 s: also 1.1 %)</Row>
				<Row at={sq} size={TYPE.current}>ω = 2π/T: about {fx(UNC.pctT, 1)} %</Row>
				<Row at={twoPct} size={TYPE.current}>ω²: 2 × 1.1 ≈ {fx(UNC.pctW2, 1)} %</Row>
			</div>
			<HandTag x={96} y={500} text="squaring doubles the %" at={twoPct + 20} size={30} color={NAVY.ink} />
			<Enter at={each + 60} style={{position: 'absolute', left: 96, top: 540, width: 540}}>
				<div style={{...DISPLAY(28, INK, 700), whiteSpace: 'normal'}}>string length ±0.01 m in 0.80 m ≈ {fx(UNC.pctL, 1)} %: affects only m = gradient ÷ L</div>
			</Enter>
			<Enter at={each + 20} style={{position: 'absolute', left: 96, top: 650, width: 540}}>
				<div style={{...DISPLAY(28, ERR, 700), whiteSpace: 'normal'}}>error bars on ω²: {ROWS.map(r => fx(r.pct, 1)).join(', ')} %</div>
			</Enter>
			<Row at={within - 6} size={40} style={{position: 'absolute', left: 96, top: 740}}><AnswerBox at={within}><span>consistent with Mg = mω²L,<br />within the uncertainty</span></AnswerBox></Row>
		</>
	);
};

// ---------- 9. repeats and systematic errors ----------
const LAY9 = BUNG_DEFAULT;
export const S09: React.FC = () => {
	const id = 'systematic-errors';
	const f = useCurrentFrame();
	const random = cue(id, 'random errors'), sys = cue(id, 'systematic error'), rubs = cue(id, 'rubs on the tube'), drifts = cue(id, 'slowly drifts'), eighty = cue(id, 'eighty centimetres'), smooth = cue(id, 'smooth tube'), steady = cue(id, 'steady marker'), safety = cue(id, 'safety steps'), glassesAt = cue(id, 'safety glasses');
	const z = 1 + 0.5 * (prog(f, 0, 30) - prog(f, safety - 20, 30));
	const drop = 18 * prog(f, drifts, 40);
	const lay = {...LAY9, L: LAY9.L - drop};
	const alpha = droopDeg(APP.m, 0.1);
	const g = bungGeom(lay, alpha, 0);
	const tick = (at: number) => (f >= at ? <span style={{opacity: prog(f, at, 10)}}> ✓</span> : null);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, transform: `scale(${z})`, transformOrigin: '640px 560px'}}>
				<FrameSvg>
					<BungRig lay={lay} alpha={alpha} phase={0} n={2} clipDrop={drop} />
					<Ring cx={lay.tubeX} cy={lay.tubeTop + 6} rx={36} ry={26} at={rubs + 8} color={AMBER.stroke} />
					<Bracket x1={g.top[0]} y1={g.top[1]} x2={g.bung[0]} y2={g.bung[1]} color={NAVY.stroke} at={drifts - 10} off={-34} />
					<Glasses x={130} base={LAY9.benchY} w={210} opacity={prog(f, glassesAt, 14)} />
				</FrameSvg>
				<HandTag x={lay.tubeX - 50} y={lay.tubeTop - 20} text="friction" at={rubs + 10} size={30} color={AMBER.ink} anchor="end" />
				<Lbl x={(g.top[0] + g.bung[0]) / 2 + 20} y={(g.top[1] + g.bung[1]) / 2 - 50} at={eighty} color={NAVY.ink} anchor="middle" size={30}>L ≠ 0.80 m</Lbl>
			</div>
			<Banner at={-30} />
			<Enter at={smooth} style={{position: 'absolute', left: 96, top: 186}}>
				<div style={{...card, border: `3px solid ${INK}`, display: 'inline-block'}}>
					<Title>Control them with the method</Title>
					<div style={{...DISPLAY(32, AMBER.ink, 800)}}>friction: a smooth tube{tick(smooth + 6)}</div>
					<div style={{...DISPLAY(32, NAVY.ink, 800), opacity: prog(f, steady, 10)}}>drift: a steady marker{tick(steady + 6)}</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 730, opacity: prog(f, safety, 12)}}>
				<HandTag x={0} y={0} text="safety: follow your school's steps" at={safety} size={30} color={INK} />
				<HandTag x={0} y={42} text="glasses; clear space" at={glassesAt} size={30} color={INK} />
			</div>
			<SvgCardV x={1290} y={320} w={534} h={220} title="random: repeats help the mean" at={random}>
				<line x1={60} x2={480} y1={130} y2={130} stroke={INK} strokeWidth={3} />
				{[17.9, 18.0, 18.1, 18.2, 18.3].map((v, i) => <g key={i}><line x1={60 + (v - 17.9) * 1050} x2={60 + (v - 17.9) * 1050} y1={130} y2={142} stroke={INK} strokeWidth={2} /><text x={60 + (v - 17.9) * 1050} y={172} textAnchor="middle" style={txt(26, INK_SOFT, 700)}>{v.toFixed(1)}</text></g>)}
				{REPEATS.map((v, i) => <circle key={i} cx={60 + (v - 17.9) * 1050} cy={110} r={9} fill={NAVY.stroke} opacity={prog(f, random + 10 + i * 8, 8)} />)}
				<line x1={60 + (MEAN - 17.9) * 1050} x2={60 + (MEAN - 17.9) * 1050} y1={70} y2={130} stroke={AMBER.stroke} strokeWidth={4} opacity={prog(f, random + 40, 10)} />
				<text x={60 + (MEAN - 17.9) * 1050 + 10} y={78} style={txt(26, AMBER.ink)} opacity={prog(f, random + 40, 10)}>mean</text>
				<text x={20} y={208} style={txt(26, INK_SOFT, 700)}>t₂₀ (s): scatter both ways</text>
			</SvgCardV>
			<SvgCardV x={1290} y={570} w={534} h={250} title="systematic: repeats don't help" at={sys}>
				<line x1={60} y1={210} x2={500} y2={210} stroke={INK} strokeWidth={3} />
				<line x1={60} y1={210} x2={60} y2={50} stroke={INK} strokeWidth={3} />
				<line x1={60} y1={210} x2={480} y2={70} stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="10 7" />
				{ROWS.map((r, i) => { const x = 60 + r.w2 * 4.2, y = 210 - r.Mg * 70; return <g key={i}><circle cx={x} cy={y} r={7} fill={NAVY.stroke} /><circle cx={x + 34 * prog(f, sys + 20, 30)} cy={y} r={7} fill={ROLE.slate.stroke} opacity={prog(f, sys + 10, 10)} /></g>; })}
				<text x={100} y={240} style={txt(26, ROLE.slate.ink, 700)}>all points shift the same way</text>
			</SvgCardV>
		</>
	);
};
/** A small titled card with an svg drawing (local to v16). */
const SvgCardV: React.FC<{x: number; y: number; w: number; h: number; title: string; at?: number; children: React.ReactNode}> = ({x, y, w, h, title, at = -30, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w, height: h}}>
		<div style={{position: 'absolute', inset: 0, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`}} />
		<div style={{position: 'absolute', left: 18, top: 8, ...DISPLAY(26, INK_SOFT, 800)}}>{title}</div>
		<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>{children}</svg>
	</Enter>
);

// ---------- 10. testing length and mass ----------
const MiniGraph: React.FC<{x: string; y: string; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 24);
	return (
		<g>
			<line x1={420} y1={420} x2={780} y2={420} stroke={INK} strokeWidth={3} />
			<line x1={420} y1={420} x2={420} y2={120} stroke={INK} strokeWidth={3} />
			<text x={780} y={462} textAnchor="end" style={txt(28, INK)}>{x}</text>
			<text x={432} y={110} style={txt(28, INK)}>{y}</text>
			<line x1={420} y1={420} x2={420 + 330 * p} y2={420 - 270 * p} stroke={NAVY.stroke} strokeWidth={5} />
			{[0.25, 0.5, 0.75, 1].map((k, i) => <circle key={i} cx={420 + 330 * k} cy={420 - 270 * k} r={7} fill={NAVY.stroke} opacity={prog(f, at + 6 + i * 5, 8)} />)}
		</g>
	);
};
export const S10: React.FC = () => {
	const id = 'length-and-mass';
	const f = useCurrentFrame();
	const lenAt = cue(id, 'change the string length'), massAt = cue(id, "bung's mass"), fixed = cue(id, 'everything else fixed');
	const Lpx = 160 + 90 * prog(f, lenAt, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<SvgCardV x={96} y={200} w={840} h={540} title="change L (M and m fixed)" at={-30}>
				<line x1={60} y1={200} x2={60 + Lpx} y2={240} stroke={INK} strokeWidth={4} />
				<Bung x={60 + Lpx} y={240} d={50} />
				<line x1={60} y1={170} x2={60 + Lpx} y2={210} stroke={NAVY.stroke} strokeWidth={3} />
				<text x={60 + Lpx / 2} y={176} textAnchor="middle" style={txt(30, NAVY.ink)}>L</text>
				<MiniGraph x="1/L" y="ω²" at={lenAt + 10} />
				<text x={420} y={510} style={txt(28, NAVY.ink)} opacity={prog(f, lenAt + 20, 10)}>ω² against 1/L: straight line</text>
			</SvgCardV>
			<SvgCardV x={984} y={200} w={840} h={540} title="change m (M and L fixed)" at={-30}>
				<Bung x={150} y={300} d={70} />
				{f >= massAt ? <g opacity={prog(f, massAt, 10)} transform={`translate(0, ${-20 * (1 - prog(f, massAt, 14))})`}><Bung x={150} y={248} d={70} /></g> : null}
				<text x={150} y={380} textAnchor="middle" style={txt(28, INK)}>{f >= massAt ? '2 bungs' : '1 bung'}</text>
				<MiniGraph x="1/m" y="ω²" at={massAt + 10} />
				<text x={420} y={510} style={txt(28, NAVY.ink)} opacity={prog(f, massAt + 20, 10)}>ω² against 1/m: straight line</text>
			</SvgCardV>
			<Chip x={96} y={790} at={fixed} size={38} border={NAVY.stroke} color={NAVY.ink}>fair test: one change at a time</Chip>
			<FrameSvg><Ring cx={400} cy={822} rx={330} ry={52} at={fixed + 16} color={NAVY.stroke} /></FrameSvg>
		</>
	);
};

// ---------- 11. mistake and memory aid ----------
const GW: GraphG = {ox: 200, oy: 720, w: 600, h: 400, xMax: 1, yMax: 2.2};
export const S11: React.FC = () => {
	const id = 'mistake-memory-aid';
	const f = useCurrentFrame();
	const plotting = cue(id, 'plotting the hanging weight'), curve = cue(id, 'gives a curve'), wrongly = cue(id, 'wrongly decide'), fix = cue(id, 'remember the fix'), square = cue(id, 'Square the speed'), line = cue(id, 'straighten the line');
	const u = kf(f, mono([[square, 0], [square + 40, 1]], 10));
	const X = (w: number) => (1 - u) * (w / 11) + u * ((w * w) / 110);
	const pts = Array.from({length: 41}, (_, i) => { const w = (i / 40) * 10.4; return gmap(GW, X(w), APP.m * APP.L * w * w); });
	const draw = prog(f, curve, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 200, width: 800, height: 640, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px dashed ${INK}`}} />
			<div style={{position: 'absolute', left: 120, top: 212, ...DISPLAY(30, u > 0.5 ? NAVY.ink : ROLE.slate.ink, 800)}}>{u > 0.5 ? 'Mg against ω²: a straight line' : 'Mg against ω: a curve'}</div>
			<FrameSvg>
				<line x1={GW.ox} y1={GW.oy} x2={GW.ox + GW.w + 20} y2={GW.oy} stroke={INK} strokeWidth={4} />
				<line x1={GW.ox} y1={GW.oy} x2={GW.ox} y2={GW.oy - GW.h - 20} stroke={INK} strokeWidth={4} />
				<text x={GW.ox + GW.w} y={GW.oy + 50} textAnchor="end" style={txt(32, INK)}>{u > 0.5 ? 'ω² (rad² s⁻²)' : 'ω (rad s⁻¹)'}</text>
				<text x={GW.ox + 14} y={GW.oy - GW.h - 26} style={txt(32, INK)}>Mg (N)</text>
				{draw > 0 ? <path d={'M' + pts.slice(0, Math.max(2, Math.round(41 * draw))).map(p => `${p[0]},${p[1]}`).join(' L')} fill="none" stroke={u > 0.5 ? NAVY.stroke : ROLE.slate.stroke} strokeWidth={5} /> : null}
				{ROWS.map((r, i) => { const [x, y] = gmap(GW, X(r.w), r.Mg); return <circle key={i} cx={x} cy={y} r={8} fill={NAVY.stroke} opacity={prog(f, plotting + 20 + i * 8, 10)} />; })}
			</FrameSvg>
			<CrossedChip x={960} y={640} at={wrongly - 6} crossAt={fix} size={34} caption="curved, but the model can still be right">curved, so the model is wrong</CrossedChip>
			<AidCard x={960} y={240} w={864} at={square - 8}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK}}><span style={{color: ORANGE.ink}}>Square the speed</span> <span style={{color: NAVY.ink, opacity: prog(f, line, 12)}}>to straighten the line.</span></div>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginTop: 10}}>(here the turning speed ω)</div>
			</AidCard>
			<HandTag x={230} y={805} text="square ω" at={square + 10} size={30} color={ORANGE.ink} />
		</>
	);
};
