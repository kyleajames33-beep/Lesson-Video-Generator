// OrbitDiagram: a shell-occupancy schematic in the diorama family, with a glossy nucleus
// marble floating over a soft ground shadow, painted shell rings, and glossy
// stationary electron markers. Rings represent shell membership, not trajectories. Shells appear
// inner to outer. Colours follow the subject accent; the nucleus is the one
// warm (amber) item.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, idleBob} from './diorama';
import {PaintDefs, clamp, idHash, shade} from './kinds/restyle-generic/paint';
import {validateShellOccupancy, shellElectronAngle} from './physics-models.mjs';

type Electron = {label: string; shell: number};
type Props = {nucleus: string; electrons: Electron[]; delay?: number};

const SHELLS = [
	{radius: 96},
	{radius: 160},
	{radius: 218},
];

export const OrbitDiagram = ({nucleus, electrons, delay = 0}: Props) => {
	validateShellOccupancy(electrons);
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const ID = `orbit-${idHash(nucleus + electrons.length)}`;
	const cx = 350;
	const cy = 244 + idleBob(frame, 2, 2);

	const usedShells = [...new Set(electrons.map((e) => e.shell))].sort();
	const nucP = spring({frame: frame - delay, fps, config: {damping: 13, stiffness: 190, mass: 0.7}});

	return (
		<svg viewBox="0 0 700 500" className="diagram" role="img" aria-label={`Shell-occupancy schematic: nucleus ${nucleus}, ${electrons.length} electrons. Marker positions are not electron trajectories.`} style={{fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<PaintDefs id={ID} colors={{e: theme.accent2, n: TOK.amber}} />
			</defs>
			<ellipse cx={354} cy={486} rx={220} ry={16} fill="rgba(58,40,18,0.16)" filter={`url(#${ID}-blur)`} />
			<text x={350} y={18} textAnchor="middle" fontSize={16} fill={TOK.inkDim}>Shell occupancy only; positions and distances are schematic</text>

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
				const sh = SHELLS[e.shell - 1];
				const angle = shellElectronAngle(electrons, i);
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
