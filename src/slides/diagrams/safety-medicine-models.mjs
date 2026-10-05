// Narrow source-reviewed opt-ins for chirality and delivery. Omitted/false
// flags preserve legacy output and do not broaden the scope of any review.
export function validateSafetyMedicineDiagram(diagram) {
  const props = diagram?.props;
  if (!props || !Object.hasOwn(props, 'reviewedSafetyMedicine')) return;
  if (typeof props.reviewedSafetyMedicine !== 'boolean') {
    throw new Error('reviewedSafetyMedicine must be boolean');
  }
  if (!props.reviewedSafetyMedicine) return;
  if (Object.entries(props).some(([key, value]) => key !== 'reviewedSafetyMedicine' && /^reviewed[A-Z]/u.test(key) && value !== undefined && value !== false)) {
    throw new Error('Safety-medicine and other reviewed opt-ins cannot be combined');
  }
  if (diagram.type !== 'diorama') throw new Error('Reviewed safety medicine requires a diorama');
  if (diagram.kind === 'chem12m8Chirality') {
    if (!['mirror', 'compare', 'receptor', 'racemic', 'polarimeter'].includes(props.mode === undefined ? 'mirror' : props.mode)) {
      throw new Error('Unsupported reviewed chirality mode');
    }
    return;
  }
  if (diagram.kind === 'chem12m8Delivery') {
    const mode = props.mode === undefined ? 'like' : props.mode;
    if (!['like', 'firstpass'].includes(mode)) throw new Error('Unsupported reviewed delivery mode');
    if (mode === 'firstpass' && ((props.prodrug ?? 'codeine') !== 'codeine' || (props.activeDrug ?? 'morphine') !== 'morphine' || props.prodrug === null || props.activeDrug === null)) {
      throw new Error('Reviewed first-pass example is limited to codeine and morphine');
    }
    return;
  }
  throw new Error('Unsupported reviewed safety-medicine diagram');
}
