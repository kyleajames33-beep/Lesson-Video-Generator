// Narrow, source-reviewed water-health opt-ins. A false flag leaves legacy
// content unchanged and does not opt another kind or mode into this review.
export function validateWaterHealthDiagram(diagram) {
  const props = diagram?.props;
  if (!props || !Object.hasOwn(props, 'reviewedWaterHealth')) return;
  if (typeof props.reviewedWaterHealth !== 'boolean') {
    throw new Error('reviewedWaterHealth must be boolean');
  }
  if (!props.reviewedWaterHealth) return;
  if (props.reviewedMedicine === true) throw new Error('Water-health and medicine opt-ins cannot be combined');
  if (diagram.type !== 'diorama') throw new Error('Reviewed water health requires a diorama');
  if (diagram.kind === 'chem12m8Bod') {
    if (props.mode !== undefined) throw new Error('Reviewed BOD has no supported mode property');
    return;
  }
  if (diagram.kind === 'chem12m8WaterBody') {
    if (!['oxygen', 'nutrients', 'sources', 'chain', 'management'].includes(props.mode === undefined ? 'oxygen' : props.mode)) {
      throw new Error('Unsupported reviewed water-body mode');
    }
    return;
  }
  if (diagram.kind === 'chem12m8Treatment') {
    if ((props.mode === undefined ? 'train' : props.mode) !== 'train') throw new Error('Reviewed water treatment is limited to train mode');
    return;
  }
  if (diagram.kind === 'chem12m8Ionisation') {
    if (props.mode !== 'hocl') throw new Error('Reviewed water-health ionisation is limited to hocl mode');
    const {hoclPKa = 7.5, lowerPH = 6.5, higherPH = 8.5} = props;
    if (![hoclPKa, lowerPH, higherPH].every(Number.isFinite) || !(lowerPH < hoclPKa && hoclPKa < higherPH)) {
      throw new Error('Reviewed HOCl requires finite pH values below and above pKa');
    }
    return;
  }
  throw new Error('Unsupported reviewed water-health diagram');
}
