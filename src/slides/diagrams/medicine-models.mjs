// Teaching calculations for the isolated medicine-enrichment drafts.
// Ideal dilute, single-site weak-acid equilibrium. No absorption prediction.
export function weakAcidFractions(pH, pKa) {
  if (![pH,pKa].every(Number.isFinite)) throw new Error('Finite pH and pKa required');
  const difference=pH-pKa;
  const ionised=difference>=0?1/(1+10**-difference):(10**difference)/(1+10**difference);
  return {ionised,unionised:1-ionised,ratio:10**difference};
}
export function illustrativeSolubilityRatio(acid,salt) {
  if (![acid,salt].every(Number.isFinite)||acid<=0||salt<acid) throw new Error('Illustrative chart requires 0 < free-acid solubility <= salt solubility');
  const ratio=salt/acid;
  if (!Number.isFinite(ratio)) throw new Error('Illustrative solubility ratio must be finite');
  return ratio;
}
export function validateReviewedMedicineDiagram(diagram) {
  const props=diagram?.props;
  if (props?.reviewedMedicine===undefined||props.reviewedMedicine===false) return;
  if (props.reviewedMedicine!==true) throw new Error('reviewedMedicine must be boolean');
  if (diagram.type!=='diorama') throw new Error('Reviewed medicine requires a diorama');
  if (diagram.kind==='chem12m8Skeletal'&&props.mode==='modify') return;
  if (diagram.kind!=='chem12m8Ionisation'||!['forms','hh','compare','salts'].includes(props.mode)) throw new Error('Unsupported reviewed medicine diagram mode');
  if (props.mode==='compare') {
    const {pKa,stomachPH,intestinePH,stomachRange,intestineRange}=props;
    if (![pKa,stomachPH,intestinePH].every(v=>Number.isFinite(v)&&v>=0&&v<=8)||!(stomachPH<pKa&&pKa<intestinePH)) throw new Error('Reviewed comparison requires explicit sample pH values below and above pKa within plotted pH 0 to 8');
    for (const [range,sample,lower] of [[stomachRange,stomachPH,true],[intestineRange,intestinePH,false]]) {
      if (!Array.isArray(range)||range.length!==2||!range.every(v=>Number.isFinite(v)&&v>=0&&v<=8)||range[0]>=range[1]||sample<range[0]||sample>range[1]||(lower?range[1]>=pKa:range[0]<=pKa)) throw new Error('Reviewed sample must lie within an ordered range on the stated side of pKa');
    }
  }
  if (props.mode==='salts') {
    illustrativeSolubilityRatio(props.acidSolubility,props.saltSolubility);
    if (props.foldLabel!==undefined) throw new Error('Reviewed solubility ratio is calculated; do not supply a fold label');
  }
}
