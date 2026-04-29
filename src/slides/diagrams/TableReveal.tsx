import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {headers: string[]; rows: string[][]; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const TableReveal = ({headers, rows, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const headerP = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 180, mass: 0.7}});
	const headerX = interpolate(headerP, [0, 1], [-32, 0], clamp);
	const headerOp = interpolate(headerP, [0, 0.4], [0, 1], clamp);

	return (
		<div className="table-reveal">
			<div className="table-row header-row" style={{opacity: headerOp, transform: `translateX(${headerX}px)`}}>
				{headers.map((h, i) => (
					<div key={i} className="table-cell header-cell">{h}</div>
				))}
			</div>
			{rows.map((row, rowIdx) => {
				const rowDelay = delay + 14 + rowIdx * 16;
				const rowP = spring({frame: frame - rowDelay, fps, config: {damping: 18, stiffness: 160, mass: 0.8}});
				const rowX = interpolate(rowP, [0, 1], [-42, 0], clamp);
				const rowOp = interpolate(rowP, [0, 0.4], [0, 1], clamp);
				return (
					<div key={rowIdx} className="table-row" style={{opacity: rowOp, transform: `translateX(${rowX}px)`}}>
						{row.map((cell, cellIdx) => (
							<div key={cellIdx} className={`table-cell${cellIdx === 0 ? ' row-header' : ''}`}>
								{cell}
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
};
