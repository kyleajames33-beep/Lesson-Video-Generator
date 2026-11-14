// Scenes 5 to 8: the interest-only line (term against repayment: huge near Pr, flat far above it), changing the rate
// at a fixed $2,500 (a rise costs more years than an equal fall saves), a rate rise that stops the loan (interest above
// the repayment) and the memory aid (only what's left after the interest pays the loan down).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, SceneHeading, StudioPlot, smooth} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {LaptopThumb, lin, mix} from './s1';
import {ANSR, CARD, Calc, Chip, FramedCard, GREY, HL, Hand, INTR, M30, REPY, Split, TermCurve, c0, c2, loanBalance, termAt} from './parts';

const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
const yrs = (t: number) => (Number.isFinite(t) ? `≈ ${t.toFixed(1)} years` : 'never');

// ---------- 5. the interest-only line ----------
const markM = (fr: number) => {
	const k = K5;
	if (fr < k.s36 - 10) return mix(1850, 1700, smooth(lin(fr, k.just, k.s79)));
	if (fr < k.far) return mix(1700, 2000, smooth(lin(fr, k.s36 - 10, k.s36 + 10)));
	return mix(2000, 3500, smooth(lin(fr, k.far, k.flattens + 20)));
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const M = Math.round(markM(fr) / 10) * 10, T = termAt(M);
	const mo = prog(fr, k.just, 12);
	return (
		<>
			<SceneHeading text="The interest-only line" at={4} size={52} />
			<TermCurve x={96} y={160} width={1270} height={800} rates={[{rate: 5, draw: smooth(lin(fr, k.plot, k.plot + 80))}]} io={[{rate: 5, o: prog(fr, k.first, 12), label: 'interest-only: $1,666.67'}]}>{m => {
				const [px, py] = m.p(M, Math.min(36.5, T)), [x17] = m.p(1700, 40), [x20, y20] = m.p(2000, termAt(2000));
				return <g>
					{mo > 0.01 ? <g opacity={mo}><circle cx={px} cy={py} r={16} fill={CARD} stroke={INK} strokeWidth={6} /><circle cx={px} cy={py} r={6} fill={INK} /></g> : null}
					<g opacity={prog(fr, k.s79, 12)}><path d={`M${x17},${m.box.top + 70} V${m.box.top + 8} m-14,20 l14,-20 l14,20`} stroke={INK} strokeWidth={4} fill="none" /></g>
					<g opacity={prog(fr, k.s36, 12)}><circle cx={x20} cy={y20} r={11} fill={INK} /><text x={x20 + 22} y={y20 - 14} style={TXT(36, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">$2,000: ≈ 36 years</text></g>
					{[M30, 2500, 3000, 3500].map((v, i) => {const [a, b] = m.p(v, termAt(v)); return <circle key={i} cx={a} cy={b} r={11} fill={REPY.stroke} stroke={CARD} strokeWidth={4} opacity={prog(fr, k.flattens + i * 6, 10)} />;})}
				</g>;
			}}</TermCurve>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.plot - 10, 14)}}>
				<Split x={560} y={420} k={0.28} M={2500} interest={HL.P * HL.r} label="$2,500" tealLabel="$833.33" tealSize={44} />
				<Hand x={420} y={300} at={k.only} size={42} color={REPY.ink} w={860}>only the part above the interest pays the debt down</Hand>
			</div>
			<StudioPlot x={1400} y={160} width={480} height={360} window={{x: [0, 5.2], y: [390000, 416000]}} xTicks={[1, 2, 3, 4, 5]} yTicks={[{value: 400000, label: '$400k'}, {value: 410000, label: '$410k'}]} xLabel="years" yLabel="balance owed" at={-30}>{m => {
				const line = (M2: number) => {let d = ''; for (let i = 0; i <= 50; i++) {const t = (5.2 * i) / 50, [a, b] = m.p(t, loanBalance(HL.P, HL.r, M2, t * 12)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;} return d;};
				return <g>
					<path d={line(HL.P * HL.r)} fill="none" stroke={INK} strokeWidth={5} opacity={prog(fr, k.stays, 12)} />
					<path d={line(1500)} fill="none" stroke={INTR.stroke} strokeWidth={5} opacity={prog(fr, k.grows, 12)} />
				</g>;
			}}</StudioPlot>
			<Hand x={1420} y={530} at={k.stays} size={36} color={INK} w={460}>pay $1,666.67: never falls</Hand>
			<Hand x={1420} y={580} at={k.grows} size={36} color={INTR.ink} w={460}>pay $1,500: grows ($400,166.67 after 1 month)</Hand>
			<LiveReadoutBoard x={1420} y={690} width={460} at={k.just} inline size={48} labelSize={30} rows={[
				{label: 'repayment', value: M, role: 'repay', format: v => c0(v)},
				{label: 'term', value: T, format: v => (v > 40 ? `≈ ${Math.round(v)} years` : yrs(v))},
			]} />
			<Hand x={760} y={230} at={k.s79} size={40} color={INK} w={560}>$1,700: ≈ 79 years, off the top</Hand>
			<Hand x={1420} y={860} at={k.flattens + 30} size={38} color={REPY.ink} w={460}>only M above the interest pays it down</Hand>
		</>
	);
};

// ---------- 6. changing the rate ----------
const rateAt = (fr: number) => {const k = K6; return fr < k.at4 ? 5 : fr < k.at6 ? 4 : fr < k.at7 ? 6 : 7;};
const AX = {x: 1090, y0: 900, y1: 220, max: 3000};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const rate = rateAt(fr);
	const prev = fr < k.at4 ? 5 : fr < k.at6 ? 5 : fr < k.at7 ? 4 : 6;
	const sw = [k.at4, k.at6, k.at7].reduce((a, c) => (fr >= c ? c : a), -1e9);
	const ioV = mix((HL.P * prev) / 1200, (HL.P * rate) / 1200, smooth(lin(fr, sw, sw + 20)));
	const Y = (v: number) => AX.y0 - ((AX.y1 - AX.y0) * -1 * v) / AX.max;
	const spoken = [{r: 5, at: k.at5}, {r: 4, at: k.at4}, {r: 6, at: k.at6}, {r: 7, at: k.at7}];
	return (
		<>
			<SceneHeading text="Changing the rate" at={4} size={52} />
			<Chip x={620} y={96} at={k.each} size={34} color={GREY}>each rate: a new loan, fixed from month 1</Chip>
			<Calc x={30} y={220} w={930} s={{M: 2500, rate, glowRate: fr >= k.at5, extra: [{label: 'left for the debt', value: c2(2500 - ioV), role: 'repay'}]}} />
			<FrameSvg>
				<line x1={AX.x} x2={AX.x} y1={AX.y0} y2={AX.y1} stroke={INK} strokeWidth={4} />
				{[0, 1000, 2000, 3000].map(v => <g key={v}><line x1={AX.x - 12} x2={AX.x} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><text x={AX.x - 20} y={Y(v) + 10} textAnchor="end" style={TXT(28, INK)}>{c0(v)}</text></g>)}
				<line x1={AX.x - 20} x2={AX.x + 120} y1={Y(2500)} y2={Y(2500)} stroke={REPY.stroke} strokeWidth={7} /><text x={AX.x + 130} y={Y(2500) + 12} style={TXT(34, REPY.ink)}>M = $2,500</text>
				<line x1={AX.x - 20} x2={AX.x + 120} y1={Y(ioV)} y2={Y(ioV)} stroke={INTR.stroke} strokeWidth={6} strokeDasharray="12 8" /><text x={AX.x + 130} y={Y(ioV) + 12 + Math.max(0, 46 - (Y(ioV) - Y(2500)))} style={TXT(32, INTR.ink)}>interest: {c2(ioV)}</text>
				<path d={`M${AX.x + 60},${Y(2500) + 6} V${Y(ioV) - 6}`} stroke={REPY.stroke} strokeWidth={5} />
			</FrameSvg>
			<StudioPlot x={1440} y={520} width={440} height={420} window={{x: [3.2, 7.6], y: [0, 48]}} xTicks={[4, 5, 6, 7].map(v => ({value: v, label: `${v}%`}))} yTicks={[10, 20, 30, 40]} xLabel="rate" yLabel="term (years)" at={-30}>{m => <g>
				{spoken.map((s, i) => {const [a, b] = m.p(s.r, termAt(2500, s.r)); return <g key={i} opacity={prog(fr, s.at, 10)}><circle cx={a} cy={b} r={11} fill={INK} stroke={CARD} strokeWidth={4} /><text x={a - 14} y={b - 18} textAnchor="end" style={TXT(28, INK)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{termAt(2500, s.r).toFixed(1)}</text></g>;})}
			</g>}</StudioPlot>
			<Hand x={1560} y={180} at={k.rise} size={42} color={INTR.ink}>rise: +4.9 years</Hand>
			<Hand x={1560} y={240} at={k.fall} size={42} color={REPY.ink}>fall: −2.9 years</Hand>
			<Hand x={1560} y={310} at={k.closer} size={34} color={GREY} w={320}>the closer the interest line gets to M, the faster the term grows</Hand>
		</>
	);
};

// ---------- 7. when a rate rise stops the loan ----------
const BRK = {x: 1110, k: 3.2, from: 2000};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const rate = fr < k.with ? 5 : fr < k.at65 ? 6 : 6.5;
	const W = (v: number) => (v - BRK.from) * BRK.k;
	const iv = (HL.P * 0.065) / 12;
	return (
		<>
			<SceneHeading text="When a rate rise stops the loan" at={4} size={52} />
			<Calc x={40} y={210} w={1000} s={{M: M30, rate, glowRate: fr >= k.with}} />
			<Hand x={800} y={152} at={k.never} size={46} color={INTR.ink}>never repaid</Hand>
			<FrameSvg style={{opacity: prog(fr, k.at65, 14)}}>
				<path d={`M${BRK.x},300 v90 M${BRK.x - 10},330 l20,-10 M${BRK.x - 10},350 l20,-10`} stroke={INK} strokeWidth={4} />
				<rect x={BRK.x} y={300} width={W(M30)} height={44} rx={6} fill={REPY.soft} stroke={REPY.stroke} strokeWidth={4} />
				<text x={BRK.x + 14} y={333} style={TXT(30, REPY.ink)}>repayment $2,147.29</text>
				<rect x={BRK.x} y={354} width={W(M30)} height={44} rx={6} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} />
				<defs><pattern id="f10ovh" width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width={14} height={14} fill={INTR.soft} /><line x1={0} y1={0} x2={0} y2={14} stroke={INTR.stroke} strokeWidth={5} /></pattern></defs>
				<rect x={BRK.x + W(M30)} y={354} width={W(iv) - W(M30)} height={44} rx={6} fill="url(#f10ovh)" stroke={INTR.stroke} strokeWidth={4} />
				<text x={BRK.x + 14} y={387} style={TXT(30, INTR.ink)}>interest $2,166.67</text>
				<text x={BRK.x + W(iv) + 16} y={387} style={TXT(32, INTR.ink, true)}>interest &gt; repayment</text>
				<text x={BRK.x} y={430} style={TXT(26, GREY)}>bars start at $2,000</text>
			</FrameSvg>
			<StudioPlot x={1090} y={460} width={790} height={460} window={{x: [0, 52], y: [0, 440000]}} xTicks={[10, 20, 30, 40, 50]} yTicks={[{value: 200000, label: '$200k'}, {value: 400000, label: '$400k'}]} xLabel="years" yLabel={`balance owed at ${rate}%`} at={-30}>{m => {
				let d = ''; for (let i = 0; i <= 120; i++) {const t = (52 * i) / 120, v = loanBalance(HL.P, rate / 1200, M30, t * 12); if (v < 0) break; const [a, b] = m.p(t, Math.min(440000, v)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
				const never = rate >= 6.5, [ex, ey] = m.p(52, Math.min(440000, loanBalance(HL.P, rate / 1200, M30, 624)));
				return <g><path d={d} fill="none" stroke={never ? INTR.stroke : INK} strokeWidth={6} />{never ? <path d={`M${ex - 18},${ey + 10} L${ex + 4},${ey - 4} L${ex - 18},${ey - 18}`} fill="none" stroke={INTR.stroke} strokeWidth={5} /> : null}
					{never ? <text x={m.box.left + 16} y={m.box.top + m.box.height - 20} style={TXT(30, GREY)}>after 1 month: $400,019.38 (it grows)</text> : null}</g>;
			}}</StudioPlot>
			<Hand x={1110} y={190} at={k.stretches} out={k.at65 - 6} size={40} color={GREY} w={760}>6% from the start: ≈ 44.8 years</Hand>
			<div style={{position: 'absolute', left: 1080, top: 160, opacity: prog(fr, k.only, 14), background: CARD, border: `5px solid ${ANSR.stroke}`, borderRadius: 18, padding: '4px 24px 8px', fontFamily: FONT_DISPLAY, color: ANSR.ink, boxShadow: '0 12px 26px rgba(40,115,71,0.16)'}}>
				<div style={{fontWeight: 800, fontSize: 52}}>repays only if M &gt; Pr</div>
				<div style={{fontWeight: 700, fontSize: 30, color: GREY}}>Pr: the interest on the balance</div>
			</div>
		</>
	);
};

// ---------- 8. memory aid ----------
export const AidBar: React.FC<{x: number; y: number; k: number; M: number; I: number; size?: number; pulse?: number}> = ({x, y, k, M, I, size = 40, pulse = 0}) => {
	const iw = Math.min(M, I) * k, tw = Math.max(0, M - I) * k;
	return <FrameSvg>
		<rect x={x} y={y} width={iw} height={70} rx={10} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} />
		{tw > 0.5 ? <rect x={x + iw} y={y} width={tw} height={70} rx={10} fill={REPY.soft} stroke={REPY.stroke} strokeWidth={4 + 4 * pulse} /> : null}
		<text x={x + iw / 2} y={y + 116} textAnchor="middle" style={TXT(size, INTR.ink, true)}>interest</text>
		{tw > 60 ? <text x={x + iw + tw / 2} y={y + 116} textAnchor="middle" style={TXT(size, REPY.ink, true)}>what's left</text> : null}
	</FrameSvg>;
};
export const AidCard: React.FC<{x: number; y: number; M?: number; I?: number; pulse?: number; lineAt?: number}> = ({x, y, M = 2500, I = 1666.67, pulse = 0, lineAt = -30}) => {
	const fr = useCurrentFrame();
	return <>
		<FramedCard x={x} y={y} w={1400} h={700} at={-30} />
		<div style={{position: 'absolute', left: x + 60, top: y + 28, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: GREY}}>Memory aid</div>
		<LaptopThumb x={x + 60} y={y + 110} w={330} text="22 years 1 month" />
		<div style={{position: 'absolute', left: x + 450, top: y + 110, width: 900, opacity: prog(fr, lineAt, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 68, lineHeight: 1.1, color: INK}}>Only what's left after the interest pays the loan down.</div>
		<AidBar x={x + 160} y={y + 430} k={0.3} M={M} I={I} pulse={pulse} />
	</>;
};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const M = mix(2500, 3200, smooth(lin(fr, k.bigger, k.bigger + 20)));
	const I = fr < k.higher ? 1666.67 : fr < k.nothing ? mix(1666.67, 2400, smooth(lin(fr, k.higher, k.higher + 20))) : mix(2400, 3200, smooth(lin(fr, k.nothing, k.nothing + 20)));
	const pulse = Math.max(0, 1 - Math.abs(fr - k.only - 60) / 30);
	return <AidCard x={260} y={170} M={M} I={I} pulse={pulse} />;
};
export {SceneHeading};
