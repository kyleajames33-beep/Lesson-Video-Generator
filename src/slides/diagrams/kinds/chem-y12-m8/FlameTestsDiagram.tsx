// FlameTestsDiagram — flame tests as supporting evidence (Chem Y12 M8 L3,
// concept-flame).
//
// Act 1: six Bunsen burners on stone plinths, each with a plain blue flame. A
// clean nichrome wire loop carrying a sample dips into each flame in turn and
// the flame takes the ion's characteristic emission colour: Li⁺ crimson,
// Na⁺ yellow, K⁺ lilac, Ca²⁺ brick red, Ba²⁺ pale green, Cu²⁺ blue-green.
// Act 2: the limitation. A K⁺ sample gives lilac; the same K⁺ sample with a
// trace of Na⁺ just looks yellow, because sodium's bright yellow swamps it. An
// amber verdict: supporting evidence, not proof.
//
// Beats (frames after `delay`): [first loop dips in, first label, then one per
// remaining ion (colour + label), act 2, masking shown, verdict].

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {ease, ramp} from './shared';
import {Burner, BurnerDefs, Flame, WireLoop} from './lab-parts';

export type FlameIon = {ion: string; color: string; name: string};
export type FlameTestsProps = {
	delay?: number;
	ions?: FlameIon[];
	beats?: number[];
};

// Realistic flame emission colours.
const DEFAULT_IONS: FlameIon[] = [
	{ion: 'Li⁺', color: '#d3143a', name: 'crimson'},
	{ion: 'Na⁺', color: '#ffb300', name: 'yellow'},
	{ion: 'K⁺', color: '#c39ae6', name: 'lilac'},
	{ion: 'Ca²⁺', color: '#e2572b', name: 'brick red'},
	{ion: 'Ba²⁺', color: '#9bd45a', name: 'pale green'},
	{ion: 'Cu²⁺', color: '#1fb5a0', name: 'blue-green'},
];

const ID = 'c12m8flame';
const W = 760;
const PY = 392;

export const FlameTestsDiagram = ({delay = 62, ions = DEFAULT_IONS, beats = [100, 360, 390, 410, 430, 465, 495, 590, 665, 800]}: FlameTestsProps) => {
	const frame = useCurrentFrame() - delay;
	const n = ions.length;
	const tLoop0 = beats[0];
	const tLabel = (i: number) => beats[i + 1];
	const tColour = (i: number) => (i === 0 ? tLoop0 + 18 : tLabel(i));
	const [tAct2, tMask, tVerdict] = beats.slice(n + 1, n + 4);
	const act1 = 1 - ramp(frame, tAct2, 18);
	const act2 = ramp(frame, tAct2 + 8, 18);
	const pulse = idlePulse(frame);

	const K = ions.find((x) => x.ion === 'K⁺') ?? ions[2];
	const Na = ions.find((x) => x.ion === 'Na⁺') ?? ions[1];

	const step = W / n;
	const xs = ions.map((_, i) => step / 2 + i * step);
	const barrelH = 66;
	const mouthY = PY + 2 - barrelH;
	const fh = 150;

	// Top caption for act 1
	const cap = frame < 150 ? 'Clean nichrome wire, dipped in the sample' : 'Excited metal ions emit characteristic colours';
	const capIn = frame < 150 ? ramp(frame, 10, 14) : ramp(frame, 150, 14);

	const loopPos = (cx: number, tEnter: number, tShow = tEnter) => {
		// Slides in from the upper right and settles in the flame's hot outer zone.
		const e = ease(ramp(frame, tEnter, 20));
		return {x: cx + 4 + (1 - e) * 40, y: mouthY - 70 - (1 - e) * 70, op: ramp(frame, tShow, 10)};
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Flame tests: Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ brick red, Ba²⁺ pale green, Cu²⁺ blue-green; sodium's yellow can mask other colours, so a flame test is supporting evidence, not proof" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BurnerDefs id={ID} />

			{act1 > 0 && (
				<g opacity={act1}>
					<text x={W / 2} y={42} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700} opacity={capIn}>{cap}</text>
					{ions.map((ion, i) => {
						const cx = xs[i];
						const appear = ramp(frame, i * 3, 14);
						const tEnter = i === 0 ? tLoop0 : tLabel(i) - 20;
						const lp = loopPos(cx, tEnter, i === 0 ? 16 : tEnter);
						const mix = ramp(frame, tColour(i), 14);
						const lab = ramp(frame, tLabel(i), 12);
						return (
							<g key={ion.ion} opacity={appear}>
								<DioramaPlinth id={ID} cx={cx} cy={PY} rx={56}>
									<Burner id={ID} cx={cx} baseY={PY + 2} barrelH={barrelH} scale={0.85} />
									<Flame id={ID} cx={cx} baseY={mouthY} h={fh} w={50} color={ion.color} mix={mix} frame={frame} seed={i + 1} mouth={15} />
								</DioramaPlinth>
								<WireLoop x={lp.x} y={lp.y} opacity={lp.op} scale={0.62} />
								<text x={cx} y={446} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800} opacity={lab}>{ion.ion}</text>
								<text x={cx} y={472} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={lab}>{ion.name}</text>
							</g>
						);
					})}
					{/* point out the wire during the intro */}
					<g opacity={ramp(frame, 20, 14) * (1 - ramp(frame, 150, 14))}>
						<text x={xs[0] + 100} y={126} fill={TOK.ink} fontSize={19} fontWeight={800}>clean nichrome wire loop</text>
					</g>
				</g>
			)}

			{act2 > 0 && (
				<g opacity={act2}>
					<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>Sodium’s yellow masks weaker colours</text>
					{[
						{cx: 220, color: K.color, tIn: tAct2 + 16, title: `${K.ion} alone`, sub: K.name},
						{cx: 540, color: Na.color, tIn: tMask, title: `${K.ion} + trace ${Na.ion}`, sub: 'just looks yellow'},
					].map((f, k) => {
						const lp = loopPos(f.cx, f.tIn - 20);
						const mix = ramp(frame, f.tIn, 14);
						return (
							<g key={k}>
								<DioramaPlinth id={ID} cx={f.cx} cy={PY} rx={108}>
									<Burner id={ID} cx={f.cx} baseY={PY + 2} barrelH={82} scale={1.1} />
									<Flame id={ID} cx={f.cx} baseY={PY + 2 - 82} h={180} w={70} color={f.color} mix={mix} frame={frame} seed={k + 11} mouth={19} />
								</DioramaPlinth>
								<WireLoop x={lp.x} y={lp.y - 12} opacity={lp.op} />
								<g opacity={mix}>
									<text x={f.cx} y={476} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{f.title}</text>
									<text x={f.cx} y={501} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>{f.sub}</text>
								</g>
							</g>
						);
					})}
					<g opacity={ramp(frame, tVerdict, 16)}>
						<rect x={W / 2 - 190} y={66} width={380} height={42} rx={21} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} />
						<text x={W / 2} y={94} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>Supporting evidence, not proof</text>
					</g>
				</g>
			)}
		</svg>
	);
};
