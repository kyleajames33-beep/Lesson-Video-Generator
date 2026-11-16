// Scenes 1 to 5: s07's train beam levels at 3; the playlist question; x/8 with its beam tilted right; strips that
// narrow into bars whose balance point creeps to 8/3 (Σ → ∫); evaluating 8/3 with the cookie recall; the uniform check;
// the variance generated the same way.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FormulaCrosswalk, FrameSvg, LiveReadoutBoard, SceneHeading, kf, makePlot, smooth} from '../../math/studio';
import {S07FinalFrame} from '../math-a12-s07/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMBER, AnswerBox, BeamDensity, BeamPlot, BoxCard, COOKIE, Chip, DATA_R, DENS, Ev, GREY, Hand, INK, Int, MU8, PHONES, PlaylistRows, Plate, Row, Slip, Task, VIO, f8, strips8, ticks, uni} from './parts';

// ---------- the x/8 board shared by scenes 1 to 3 and 5 ----------
export const GX = {x: 40, y: 300, w: 1000, h: 540} as const;
export const WX = {x: [-0.5, 4.5] as [number, number], y: [0, 0.6] as [number, number]};
export const MX = makePlot(GX.x, GX.y, GX.w, GX.h, WX);
const xT = ticks([0, 1, 2, 3, 4]);
const yT = [{value: 0.5, label: '½'}];
export const X8: React.FC<Omit<React.ComponentProps<typeof BeamDensity>, 'x' | 'y' | 'w' | 'h' | 'win' | 'f' | 'from' | 'to'>> = p => <BeamDensity {...GX} win={WX} f={f8} from={0} to={4} xTicks={xT} yTicks={yT} {...p} />;

// ---------- 1. hook: where does a density balance? ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const s07 = 1 - prog(fr, k.middle - 14, 12);
	const t = kf(fr, [[0, 2], [k.middle, 2], [k.three + 6, 3]]);
	const tilt = kf(fr, [[0, 3], [k.middle, 3], [k.three + 6, 0]]);
	const trainOut = prog(fr, k.shuffle - 6, 16);
	const xo = prog(fr, k.four, 16);
	return (
		<>
			{trainOut < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - trainOut}}>
				<BeamPlot t={t} tilt={tilt} q={1 - prog(fr, k.middle, 10)} />
				{s07 > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: s07}}><S07FinalFrame /></div> : null}
				<Chip x={1300} y={330} at={k.three} size={48} color={VIO.ink}>balance point: 3</Chip>
				<FrameSvg style={{opacity: prog(fr, k.because, 10)}}>{(() => {const m = makePlot(96, 260, 1100, 600, {x: [0, 6], y: [0, 0.4]}), [px, top] = m.pf(3, 0.36), [, b] = m.pf(3, 0); return <line x1={px} x2={px} y1={top} y2={b} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="12 9" />;})()}</FrameSvg>
				<Hand x={1300} y={440} at={k.because} size={42} color={VIO.ink} w={560}>mirror halves: the middle</Hand>
			</div> : null}
			<SceneHeading text="Expected value and variance of a continuous random variable" at={k.but} size={44} />
			{trainOut > 0 && xo < 1 ? <div style={{position: 'absolute', inset: 0, opacity: trainOut * (1 - xo)}}>
				<Plate plate={PHONES} x={96} y={220} w={360} />
				<PlaylistRows x={720} y={220} rows={12} at={k.shuffle + 10} />
				<Hand x={1560} y={260} at={k.how} size={46} color={DATA_R.ink} w={330}>how long, on average?</Hand>
				<Chip x={96} y={680} at={k.how + 40} size={36} color={DATA_R.ink}>40-minute run: how many songs?</Chip>
				<Hand x={96} y={780} at={k.song} size={36} color={GREY} w={560}>song lengths: about 2 to 6 minutes</Hand>
			</div> : null}
			{xo > 0 ? <div style={{position: 'absolute', inset: 0, opacity: xo}}>
				<X8 t={2} tilt={kf(fr, [[k.four, 0], [k.taller, 0], [k.taller + 30, 4]])} q={prog(fr, k.where2, 12)} />
				<Plate plate={PHONES} x={1680} y={110} w={190} />
				<Row x={1100} y={330} at={k.four} size={52} color={DENS.ink}>f(x) = x/8, 0 ≤ x ≤ 4</Row>
				<Row x={1100} y={400} at={k.four} size={34} color={GREY}>0 elsewhere</Row>
				<Hand x={1100} y={480} at={k.taller} size={42} color={DENS.ink} w={700}>taller on the right: balances right of 2</Hand>
				<Hand x={1100} y={600} at={k.where2} size={42} color={VIO.ink} w={700}>where exactly? how spread out?</Hand>
				<Chip x={1100} y={720} at={k.disc} size={36} color={GREY}>discrete: E(X) = Σ x P(x)</Chip>
				<Hand x={1100} y={810} at={k.add} size={40} color={INK}>no list of values here</Hand>
			</div> : null}
		</>
	);
};

// ---------- 2. from a sum to an integral ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const n = fr >= k.sixteen ? 16 : fr >= k.eight ? 8 : 4;
	const narrow = n === 4 ? kf(fr, [[k.treat, 0], [k.treat + 40, 1]]) : kf(fr, [[n === 8 ? k.eight : k.sixteen, 0], [(n === 8 ? k.eight : k.sixteen) + 24, 1]]);
	const S = strips8(n);
	const t = kf(fr, [[k.values, 2], [k.five - 20, 2.625], [k.eight + 10, 2.625], [k.eight + 40, 2.65625], [k.sixteen + 10, 2.65625], [k.sixteen + 40, 2.6640625]]);
	const tilt = kf(fr, [[0, 4], [k.values, 4], [k.values + 60, 2], [k.five - 20, 0]]);
	const hl = prog(fr, k.each, 12) * (1 - prog(fr, k.treat, 12));
	return (
		<>
			<SceneHeading text="From a sum to an integral" at={4} size={48} />
			<X8 t={t} tilt={tilt} q={1 - prog(fr, k.five - 20, 12)} strips={{n, narrow, o: prog(fr, k.cut, 14), labels: n === 4 ? prog(fr, k.treat + 30, 12) : 0}}>
				{m => {
					if (hl <= 0.01) return null;
					const [a, top] = m.p(3, f8(3.5)), [b, base] = m.p(4, 0);
					return <g opacity={hl}>
						<path d={`M${a},${top - 18} v-12 H${b} v12`} fill="none" stroke={AMBER.stroke} strokeWidth={5} />
						<text x={(a + b) / 2} y={top - 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMBER.ink}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">width Δx</text>
						<path d={`M${b + 14},${top} h12 V${base} h-12`} fill="none" stroke={AMBER.stroke} strokeWidth={5} />
						<text x={b + 34} y={(top + base) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMBER.ink}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">height f(x)</text>
					</g>;
				}}
			</X8>
			<Hand x={1100} y={250} at={k.strip} out={k.as} size={42} color={AMBER.ink} w={760}>area ≈ f(x)Δx ≈ probability</Hand>
			<Hand x={1100} y={320} at={k.values} out={k.as} size={38} color={VIO.ink} w={760}>further out, heavier: more pull</Hand>
			<LiveReadoutBoard x={1100} y={400} width={560} at={k.now} out={k.as} rows={[
				{label: 'balance point: Σ x f(x)Δx', value: S.bal, digits: 3, role: 'gradient'},
				{label: 'bars add to', value: S.tot, digits: 0},
			]} />
			<FormulaCrosswalk x={1080} y={250} w={800} size={34} at={k.as} rows={[
				{left: 'Σ P(x) = 1', right: <><Int lo="a" hi="b" /> f(x) dx = 1</>, at: k.as},
				{left: 'E(X) = Σ x P(x)', right: <>E(X) = <Int lo="a" hi="b" /> x f(x) dx</>, at: k.as + 20},
			]} />
			<Row x={1100} y={660} at={k.five} size={34} color={GREY}>4 strips: 2.625</Row>
			<Row x={1100} y={710} at={k.eight + 20} size={34} color={GREY}>8 strips: 2.656</Row>
			<Row x={1100} y={760} at={k.four} size={34} color={GREY}>16 strips: 2.664</Row>
			<AnswerBox x={1080} y={840} at={k.so2} size={46}>E(X) = μ = <Int lo="a" hi="b" /> x f(x) dx</AnswerBox>
		</>
	);
};

// ---------- 3. working it out for x over eight ----------
const CK = {x: 1360, y: 820, w: 480} as const;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const t = kf(fr, [[0, 2.6640625], [k.beam, 2.6640625], [k.beam + 30, MU8]]);
	const ck = prog(fr, k.met, 14);
	const X = (v: number) => CK.x + (v / 4) * CK.w;
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={40}>Find E(X) for f(x) = x/8, 0 ≤ x ≤ 4 (0 elsewhere).</Task>
			<BoxCard x={1080} y={150} w={800} at={-30} size={40} title="the formula"><div style={{fontWeight: 800}}>E(X) = <Int lo="a" hi="b" /> x f(x) dx</div></BoxCard>
			<X8 t={t} mu={{label: 'μ = 8/3', o: prog(fr, k.beam + 20, 12)}} />
			<Hand x={MX.pf(0.15, 0)[0]} y={MX.pf(0, 0.56)[1]} at={k.beam + 30} size={40} color={VIO.ink}>taller side pulls</Hand>
			<Row x={1080} y={320} at={k.multiply} size={44} dim={prog(fr, k.thirds, 12) * 0.3}>E(X) = <Int lo="0" hi="4" /> x · x/8 dx = <Int lo="0" hi="4" /> x²/8 dx</Row>
			<Row x={1080} y={410} at={k.its} size={44} dim={prog(fr, k.thirds, 12) * 0.3}>= (1/8)<Ev lo="0" hi="4">x³/3</Ev> = 64/24</Row>
			<AnswerBox x={1080} y={500} at={k.thirds} size={48}>E(X) = 8/3 ≈ 2.67</AnswerBox>
			{fr < k.met + 14 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.met, 14)}}>
				<Slip x={1080} y={600} at={k.thirds + 50} strikeAt={k.thirds + 72} size={34} caption="only for a flat density">E(X) = 2, the middle of [0, 4]</Slip>
				<Row x={1080} y={740} at={k.number} size={32} color={GREY}>strip sums 2.625, 2.656, 2.664 → 8/3 ≈ 2.667</Row>
			</div> : null}
			{ck > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: ck}}>
				<Plate plate={COOKIE} x={1090} y={620} w={220} />
				<FrameSvg>
					<line x1={X(0)} x2={X(4)} y1={CK.y} y2={CK.y} stroke={INK} strokeWidth={4} />
					{[0, 1, 2, 3, 4].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={CK.y - 8} y2={CK.y + 8} stroke={INK} strokeWidth={3} /><text x={X(v)} y={CK.y + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{v}</text></g>)}
					<line x1={X(MU8)} x2={X(MU8)} y1={CK.y - 70} y2={CK.y} stroke={VIO.stroke} strokeWidth={6} />
					<text x={X(MU8) - 10} y={CK.y - 80} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: VIO.ink}}>mean 2.67</text>
					<line x1={X(2 * Math.SQRT2)} x2={X(2 * Math.SQRT2)} y1={CK.y - 110} y2={CK.y} stroke={AMBER.stroke} strokeWidth={6} opacity={prog(fr, k.median, 12)} />
					<text x={X(2 * Math.SQRT2) + 10} y={CK.y - 120} opacity={prog(fr, k.median, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: AMBER.ink}}>median 2.83</text>
					<path d={`M${X(4)},${CK.y + 4} l-16,28 h32 Z`} fill={DATA_R.stroke} opacity={prog(fr, k.cookie + 30, 12)} />
				</FrameSvg>
				<Hand x={1790} y={CK.y - 76} at={k.cookie + 30} size={32} color={DATA_R.ink}>mode 4</Hand>
				<Hand x={1090} y={590} at={k.cookie} size={32} color={GREY}>the cookie (two videos ago), x in cm</Hand>
			</div> : null}
			<Chip x={1080} y={880} at={k.like} size={30} color={GREY}>long-run average of X</Chip>
		</>
	);
};

// ---------- 4. a check on the uniform ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	return (
		<>
			<SceneHeading text="A check on the uniform" at={4} size={48} />
			<BeamDensity x={40} y={170} w={600} h={360} win={WX} f={f8} from={0} to={4} t={MU8} xTicks={ticks([0, 2, 4])} yTicks={[]} mu={{label: '8/3', o: 1}} />
			<BeamDensity x={700} y={170} w={1180} h={500} win={{x: [0, 6], y: [0, 0.4]}} f={uni(1, 5)} from={1} to={5} t={3} xTicks={ticks([1, 2, 3, 4, 5])} yTicks={[{value: 0.25, label: '1/4'}]} xLabel="t (min)" yLabel="f(t)" mu={{label: fr >= k.middle ? '3 ✓' : '3', o: prog(fr, k.train, 12)}} at={k.train - 10} />
			<Row x={96} y={730} at={k.so} size={44}>E(X) = <Int lo="1" hi="5" /> x · 1/4 dx = <Ev lo="1" hi="5">x²/8</Ev>{fr >= k.thats ? ' = (25 − 1)/8 = 3' : ''}</Row>
			<Hand x={96} y={820} at={k.integral} size={44} color={VIO.ink}>formula = symmetry</Hand>
			<Row x={760} y={830} at={k.any} size={38} color={GREY}>uniform on [a, b]: E(X) = (a + b)/2, the midpoint</Row>
		</>
	);
};

// ---------- 5. the variance, the same way ----------
const G5 = {x: 40, y: 240, w: 900, h: 560} as const;
const M5 = makePlot(G5.x, G5.y, G5.w, G5.h, WX);
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const arms = prog(fr, k.var, 16) * (1 - prog(fr, k.exp, 16));
	const sq = prog(fr, k.weight, 16);
	return (
		<>
			<SceneHeading text="The variance, the same way" at={4} size={48} />
			<BeamDensity {...G5} win={WX} f={f8} from={0} to={4} t={MU8} xTicks={xT} yTicks={yT} mu={{label: 'μ = 8/3', o: 1}} />
			<FrameSvg style={{opacity: arms}}>
				{[0.5, 1.5, 2.5, 3.5].map((v, i) => {
					const [mx] = M5.pf(MU8, 0), [vx, ly] = M5.pf(v, 0.5 - i * 0.09), side = Math.abs(vx - mx) * 0.13;
					return <g key={v}>
						<line x1={mx} x2={vx} y1={ly} y2={ly} stroke={VIO.stroke} strokeWidth={5} strokeDasharray="10 7" />
						<circle cx={vx} cy={ly} r={9} fill={VIO.stroke} />
						<rect x={Math.min(vx, mx)} y={ly + 6} width={Math.abs(vx - mx)} height={side * sq} fill="rgba(122,79,170,0.16)" stroke={VIO.stroke} strokeWidth={2} opacity={sq} />
					</g>;
				})}
			</FrameSvg>
			<Hand x={300} y={196} at={k.weight} out={k.exp} size={36} color={VIO.ink}>(x − μ)², weighted by f(x) dx</Hand>
			<Row x={980} y={230} at={k.var} size={40}>Var(X), both ways:</Row>
			<FormulaCrosswalk x={980} y={290} w={900} size={34} at={k.var} rows={[
				{left: 'Σ (x − μ)² P(x)', right: <><Int lo="a" hi="b" /> (x − μ)² f(x) dx</>, at: k.var},
				{left: 'Σ x² P(x) − μ²', right: <><Int lo="a" hi="b" /> x² f(x) dx − μ²</>, at: k.and},
			]} />
			<Row x={980} y={530} at={k.exp} size={32} dim={prog(fr, k.so, 12) * 0.3}>∫ (x − μ)² f dx = ∫ x² f dx − 2μ ∫ x f dx + μ² ∫ f dx</Row>
			<Row x={980} y={590} at={k.int} size={40} color={VIO.ink}>∫ x f dx = μ,   ∫ f dx = 1</Row>
			<Hand x={980} y={650} at={k.that} size={40} color={AMBER.ink}>no bracket to expand</Hand>
			<Row x={980} y={720} at={k.so} size={44}>= E(X²) − 2μ² + μ²</Row>
			<AnswerBox x={980} y={800} at={k.squared} size={44}>Var(X) = <Int lo="a" hi="b" /> x² f(x) dx − μ²</AnswerBox>
		</>
	);
};
export {smooth};
