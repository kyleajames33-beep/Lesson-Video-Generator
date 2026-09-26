// OrbitDiagram — a Bohr-style atom in the diorama family: a glossy nucleus
// marble floating over a soft ground shadow, painted shell rings, and glossy
// electron marbles that keep orbiting (so it is never frozen). Shells appear
// inner to outer. Colours follow the subject accent; the nucleus is the one
// warm (amber) item.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, idleBob} from './diorama';
import {PaintDefs, clamp, idHash, shade} from './kinds/restyle-generic/paint';

type Electron = {label: string; shell: number};
type Props = {nucleus: string; electrons: Electron[]; delay?: number};

const SHELLS = [
	{radius: 96, speed: 1.9},
	{radius: 160, speed: 1.25},
	{radius: 218, speed: 0.72},
];

export const OrbitDiagram = ({nucleus, electrons, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const ID = `orbit-${idHash(nucleus + electrons.length)}`;
	const t = frame / fps;
	const cx = 350;
	const cy = 244 + idleBob(frame, 2, 2);

	const usedShells = [...new Set(electrons.map((e) => e.shell))].sort();
	const nucP = spring({frame: frame - delay, fps, config: {damping: 13, stiffness: 190, mass: 0.7}});

	return (
		<svg viewBox="0 0 700 500" className="diagram" role="img" aria-label={`Atom model: nucleus ${nucleus}, ${electrons.length} electrons`} style={{fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<PaintDefs id={ID} colors={{e: theme.accent2, n: TOK.amber}} />
			</defs>
			<ellipse cx={354} cy={486} rx={220} ry={16} fill="rgba(58,40,18,0.16)" filter={`url(#${ID}-blur)`} />

			{usedShells.map((shellNum) => {
				const sh = SHELLS[shellNum - 1];
				if (!sh) return null;
				const o = interpolate(frame - delay, [8 + (shellNum - 1) * 14, 20 + (shellNum - 1) * 14], [0, 1], clamp);
				return (
					<g key={shellNum} opacity={o}>
						<circle cx={cx} cy={cy} r={sh.radius} fill="none" stroke={theme.accent} strokeOpacity={0.12} strokeWidth={9} />
						<circle cx={cx} cy={cy} r={sh.radius} fill="none" stroke={theme.accent} strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="6 5" />
					</g>
				);
			})}

			{electrons.map((e, i) => {
				const sh = SHELLS[e.shell - 1] ?? SHELLS[0];
				const sibs = electrons.filter((x) => x.shell === e.shell);
				const angle = t * sh.speed + (2 * Math.PI * sibs.indexOf(e)) / sibs.length;
				const ex = cx + Math.cos(angle) * sh.radius;
				const ey = cy + Math.sin(angle) * sh.radius;
				const appear = spring({frame: frame - delay - 18 - (e.shell - 1) * 14, fps, config: {damping: 15, stiffness: 200, mass: 0.65}});
				const s = interpolate(appear, [0, 1], [0, 1], clamp);
				return (
					<g key={i} transform={`translate(${ex} ${ey}) scale(${s})`}>
						<circle r={19} fill={`url(#${ID}-e-ball)`} stroke={shade(theme.accent2, -0.3)} strokeWidth={1} />
						<text y={6} textAnchor="middle" fontSize={15} fontWeight={800} fill="#ffffff" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>
							{e.label}
						</text>
					</g>
				);
			})}

			<g transform={`translate(${cx} ${cy}) scale(${Math.max(0, nucP)})`}>
				<circle r={46} fill={`url(#${ID}-n-ball)`} stroke={shade(TOK.amber, -0.3)} strokeWidth={1.5} />
				<text y={9} textAnchor="middle" fontSize={26} fontWeight={900} fill={TOK.amberDim}>
					{nucleus}
				</text>
			</g>
		</svg>
	);
};
