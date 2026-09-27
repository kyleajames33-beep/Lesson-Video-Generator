// Private helper (lane C): small CPK molecule drawings the diorama Molecule
// primitive does not cover (NH₃ pyramid), plus N₂ and H₂ at a shared scale.
// Gradients come from AtomDefs(id, ['N', 'H']).

import {shade} from './shared';
import {ELEMENT_COLORS} from '../../diorama';

const Atom = ({id, el, x, y, r}: {id: string; el: string; x: number; y: number; r: number}) => (
	<circle cx={x} cy={y} r={r} fill={`url(#${id}-atom-${el})`} stroke={shade(ELEMENT_COLORS[el] ?? '#9a9a9a', -0.35)} strokeWidth={1} />
);

export type GasKind = 'N2' | 'H2' | 'NH3';

/** One gas molecule centred on (x, y). `s` scales the whole drawing. */
export const GasMolecule = ({id, kind, x, y, s = 1, opacity = 1, rot = 0}: {id: string; kind: GasKind; x: number; y: number; s?: number; opacity?: number; rot?: number}) => {
	const rN = 9, rH = 6.4;
	let body;
	if (kind === 'N2') {
		body = (
			<>
				<Atom id={id} el="N" x={-6.5} y={0} r={rN} />
				<Atom id={id} el="N" x={6.5} y={0} r={rN} />
			</>
		);
	} else if (kind === 'H2') {
		body = (
			<>
				<Atom id={id} el="H" x={-4.6} y={0} r={rH} />
				<Atom id={id} el="H" x={4.6} y={0} r={rH} />
			</>
		);
	} else {
		// trigonal pyramid seen slightly from above: one H behind, two in front
		body = (
			<>
				<Atom id={id} el="H" x={0} y={-10} r={rH} />
				<Atom id={id} el="N" x={0} y={0} r={rN + 0.5} />
				<Atom id={id} el="H" x={-9.5} y={6.5} r={rH} />
				<Atom id={id} el="H" x={9.5} y={6.5} r={rH} />
			</>
		);
	}
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
			{body}
		</g>
	);
};
