// BridgeDiagram — "the mole bridges invisible particles to measurable samples",
// in the diorama family. Two plinths: a few glossy particles on the left, a
// lab-scale heap on the right. A painted arc draws between them and the mole
// medallion lands on its crest; in the hold a bead keeps crossing the bridge
// and the medallion breathes (it's the one amber thing).

import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from './diorama';
import {PaintDefs, clamp, shade} from './kinds/restyle-generic/paint';

const ID = 'bridge';
const L = {x: 130, y: 300};
const R = {x: 590, y: 300};
const ARC = `M ${L.x + 40} ${L.y - 40} C 250 110, 470 110, ${R.x - 40} ${R.y - 40}`;

// Point on the arc's cubic Bézier at t.
const arcAt = (t: number) => {
	const p = [
		[L.x + 40, L.y - 40],
		[250, 110],
		[470, 110],
		[R.x - 40, R.y - 40],
	];
	const u = 1 - t;
	const b = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
	return {x: b.reduce((a, k, i) => a + k * p[i][0], 0), y: b.reduce((a, k, i) => a + k * p[i][1], 0)};
};

export const BridgeDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const leftP = spring({frame, fps, config: {damping: 18, stiffness: 140, mass: 0.9}});
	const rightP = spring({frame: frame - 10, fps, config: {damping: 18, stiffness: 140, mass: 0.9}});
	const arc = interpolate(frame, [18, 80], [0, 1], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)});
	const moleP = spring({frame: frame - 42, fps, config: {damping: 14, stiffness: 200, mass: 0.7}});
	const footer = interpolate(frame, [82, 98], [0, 1], clamp);
	const hold = interpolate(frame, [100, 130], [0, 1], clamp);
	const beadT = ((frame - 100) % 90) / 90;
	const bead = arcAt(Math.max(0, beadT));
	const crest = arcAt(0.5);

	return (
		<svg className="diagram" viewBox="0 0 720 480" role="img" aria-label="The mole bridges particles and lab-scale samples" style={{fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'H', 'C']} />
			<defs>
				<PaintDefs id={ID} colors={{m: TOK.amber, b: theme.accent2}} />
			</defs>

			<g opacity={interpolate(leftP, [0, 0.4], [0, 1], clamp)} transform={`translate(${interpolate(leftP, [0, 1], [-60, 0])} 0)`}>
				<DioramaPlinth id={ID} cx={L.x} cy={L.y} rx={96}>
					{[[-30, -10], [8, -16], [34, 4], [-8, 10]].map(([dx, dy], i) => (
						<Molecule key={i} id={ID} atoms={['O', 'H', 'H']} x={L.x + dx} y={L.y + dy + idleBob(frame, i, 1.6)} r={12} />
					))}
				</DioramaPlinth>
				<text x={L.x} y={L.y + 86} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>particles</text>
				<text x={L.x} y={L.y + 110} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={650}>atoms</text>
			</g>

			<g opacity={interpolate(rightP, [0, 0.4], [0, 1], clamp)} transform={`translate(${interpolate(rightP, [0, 1], [60, 0])} 0)`}>
				<DioramaPlinth id={ID} cx={R.x} cy={R.y} rx={96}>
					{/* a lab-scale heap: many particles piled */}
					<ellipse cx={R.x} cy={R.y - 8} rx={56} ry={30} fill={shade(TOK.inkMute, 0.28)} />
					<ellipse cx={R.x - 12} cy={R.y - 20} rx={30} ry={12} fill="#ffffff" opacity={0.35} />
				</DioramaPlinth>
				<text x={R.x} y={R.y + 86} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>lab</text>
				<text x={R.x} y={R.y + 110} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={650}>samples</text>
			</g>

			<path d={ARC} fill="none" stroke="rgba(58,40,18,0.14)" strokeWidth={10} strokeLinecap="round" transform="translate(3 5)" pathLength={100} strokeDasharray={100} strokeDashoffset={100 - arc * 100} />
			<path d={ARC} fill="none" stroke={theme.accent2} strokeWidth={6} strokeLinecap="round" pathLength={100} strokeDasharray={100} strokeDashoffset={100 - arc * 100} />
			{hold > 0 && beadT >= 0 ? <circle cx={bead.x} cy={bead.y} r={7} fill={`url(#${ID}-b-ball)`} opacity={hold * interpolate(beadT, [0, 0.1, 0.9, 1], [0, 1, 1, 0], clamp)} /> : null}

			<g transform={`translate(${crest.x} ${crest.y - 20}) scale(${Math.max(0, moleP) * (1 + 0.05 * idlePulse(frame, 70) * hold)})`} opacity={interpolate(moleP, [0, 0.35], [0, 1], clamp)}>
				<circle r={66} fill={`url(#${ID}-m-ball)`} stroke={shade(TOK.amber, -0.3)} strokeWidth={1.5} />
				<text y={-4} textAnchor="middle" fill={TOK.amberDim} fontSize={32} fontWeight={850}>moles</text>
				<text y={24} textAnchor="middle" fill={TOK.amberDim} fontSize={17} fontWeight={700}>counting unit</text>
			</g>

			<text x={360} y={458} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={650} opacity={footer}>
				the mole bridges invisible particles to measurable samples
			</text>
		</svg>
	);
};
