// Dev-only preview harness for the 3D coded diagrams. Not part of the lesson
// build — render via:
//   npx remotion still src/dev/diagram3d-preview-entry.ts <CompId> out.png --frame=N
// Wraps each diagram in the subject AccentContext it would receive in a real
// lesson (Chemistry for molecule3d, Physics for circuit3d).

import {AbsoluteFill, Composition} from 'remotion';
import {AccentContext, themeFor} from '../styles/theme';
import {TOK} from '../styles/tokens';
import {Molecule3DDiagram} from '../slides/diagrams/Molecule3DDiagram';
import {Circuit3DDiagram} from '../slides/diagrams/Circuit3DDiagram';
import '../styles.css';

const Stage = ({subject, children}: {subject: string; children: React.ReactNode}) => (
	<AccentContext.Provider value={themeFor(subject)}>
		<AbsoluteFill style={{background: TOK.bg, alignItems: 'center', justifyContent: 'center'}}>
			<div style={{width: 1150}}>{children}</div>
		</AbsoluteFill>
	</AccentContext.Provider>
);

const CH4 = () => (
	<Stage subject="Chemistry">
		<Molecule3DDiagram geometry="tetrahedral" centralLabel="C" terminalLabel="H" angleLabel="109.5°" />
	</Stage>
);

const NH3 = () => (
	<Stage subject="Chemistry">
		<Molecule3DDiagram geometry="trigonalPyramidal" centralLabel="N" terminalLabel="H" angleLabel="107°" />
	</Stage>
);

const H2O = () => (
	<Stage subject="Chemistry">
		<Molecule3DDiagram geometry="bent" centralLabel="O" terminalLabel="H" angleLabel="104.5°" />
	</Stage>
);

const SeriesCircuit = () => (
	<Stage subject="Physics">
		<Circuit3DDiagram
			showCurrent
			components={[
				{kind: 'battery', label: '6 V'},
				{kind: 'switch'},
				{kind: 'lamp', label: 'Lamp'},
				{kind: 'resistor', label: 'R = 10 Ω'},
				{kind: 'ammeter'},
			]}
		/>
	</Stage>
);

export const Diagram3DPreviewRoot = () => (
	<>
		<Composition id="Molecule3D-CH4" component={CH4} durationInFrames={360} fps={30} width={1920} height={1080} />
		<Composition id="Molecule3D-NH3" component={NH3} durationInFrames={360} fps={30} width={1920} height={1080} />
		<Composition id="Molecule3D-H2O" component={H2O} durationInFrames={360} fps={30} width={1920} height={1080} />
		<Composition id="Circuit3D-Series" component={SeriesCircuit} durationInFrames={360} fps={30} width={1920} height={1080} />
	</>
);
