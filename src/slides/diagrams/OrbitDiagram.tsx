import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Electron = {label: string; shell: number};
type Props = {nucleus: string; electrons: Electron[]};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const SHELLS = [
	{radius: 96,  speed: 1.9},
	{radius: 160, speed: 1.25},
	{radius: 218, speed: 0.72},
];

export const OrbitDiagram = ({nucleus, electrons}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;
	const cx = 350, cy = 215;

	const usedShells = [...new Set(electrons.map(e => e.shell))].sort();

	return (
		<svg viewBox="0 0 700 430" className="diagram">
			{/* Shell rings */}
			{usedShells.map(shellNum => {
				const sh = SHELLS[shellNum - 1];
				if (!sh) return null;
				return (
					<circle key={shellNum} cx={cx} cy={cy} r={sh.radius}
						fill="none" stroke="rgba(79,70,229,0.18)" strokeWidth="1.5" strokeDasharray="6 4" />
				);
			})}

			{/* Electrons */}
			{electrons.map((e, i) => {
				const sh = SHELLS[e.shell - 1] ?? SHELLS[0];
				const sibs = electrons.filter(x => x.shell === e.shell);
				const idxInShell = sibs.indexOf(e);
				const angleOffset = (2 * Math.PI * idxInShell) / sibs.length;
				const angle = t * sh.speed + angleOffset;
				const ex = cx + Math.cos(angle) * sh.radius;
				const ey = cy + Math.sin(angle) * sh.radius;

				const appear = spring({
					frame: frame - 18 - (e.shell - 1) * 14,
					fps,
					config: {damping: 15, stiffness: 200, mass: 0.65},
				});
				const eScale = interpolate(appear, [0, 1], [0, 1], clamp);

				return (
					<g key={i} style={{transform: `scale(${eScale})`, transformOrigin: `${ex}px ${ey}px`}}>
						<circle cx={ex} cy={ey} r="20" fill="rgba(79,70,229,0.14)" stroke="#4f46e5" strokeWidth="2" />
						<text x={ex} y={ey + 6} textAnchor="middle" fontSize="14" fontWeight="700" fill="#3730a3">
							{e.label}
						</text>
					</g>
				);
			})}

			{/* Nucleus */}
			<circle cx={cx} cy={cy} r="44" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth="2.5" />
			<text x={cx} y={cy + 9} textAnchor="middle" fontSize="24" fontWeight="900" fill="#92400e">{nucleus}</text>
		</svg>
	);
};
