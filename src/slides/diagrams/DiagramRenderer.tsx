import type {DiagramConfig} from '../../lesson/types';
import {BridgeDiagram} from './BridgeDiagram';
import {DozenMoleDiagram} from './DozenMoleDiagram';
import {MassComparisonDiagram} from './MassComparisonDiagram';
import {BalanceDiagram} from './BalanceDiagram';
import {DataChart} from '../../animations/DiagramPrimitives';
import {VennDiagram} from './VennDiagram';
import {FlowDiagram} from './FlowDiagram';
import {OrbitDiagram} from './OrbitDiagram';
import {TableReveal} from './TableReveal';
import {BeforeAfterDiagram} from './BeforeAfterDiagram';
import {ExplodeDiagram} from './ExplodeDiagram';

export const DiagramRenderer = ({diagram}: {diagram: DiagramConfig}) => {
	switch (diagram.type) {
		case 'bridge':         return <BridgeDiagram />;
		case 'dozenMole':      return <DozenMoleDiagram />;
		case 'massComparison': return <MassComparisonDiagram />;
		case 'balance':        return <BalanceDiagram {...diagram} />;
		case 'barChart':       return <DataChart kind="bar" data={diagram.bars} delay={diagram.delay ?? 0} />;
		case 'venn':           return <VennDiagram {...diagram} />;
		case 'flow':           return <FlowDiagram {...diagram} />;
		case 'orbit':          return <OrbitDiagram {...diagram} />;
		case 'table':          return <TableReveal {...diagram} />;
		case 'beforeAfter':    return <BeforeAfterDiagram {...diagram} />;
		case 'explode':        return <ExplodeDiagram {...diagram} />;
		default:               return null;
	}
};
