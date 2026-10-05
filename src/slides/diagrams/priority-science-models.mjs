// Narrow opt-ins for isolated, source-guarded priority science proposals.
export function validatePriorityScienceDiagram(diagram){
 const p=diagram?.props;if(!p)return;
 if(p.referenceBandOnly!==undefined&&p.referenceBandOnly!==false){
  if(p.referenceBandOnly!==true||diagram.type!=='diorama'||diagram.kind!=='bio11m2Zones')throw new Error('referenceBandOnly requires a Zones diorama and boolean flag');
  const {scale,optimal,tolerance,critical}=p;
  if(!scale||!optimal||!tolerance||!critical||![scale.min,scale.max,scale.step,optimal.from,optimal.to,tolerance.from,tolerance.to].every(Number.isFinite)||scale.min>=scale.max||scale.step<=0||(scale.max-scale.min)/scale.step>100||!(scale.min<optimal.from&&optimal.from<optimal.to&&optimal.to<scale.max)||tolerance.from!==scale.min||tolerance.to!==scale.max||critical.failLabel!==''||p.enzyme!==undefined)throw new Error('Reference-band chart must have an ordered reference interval, no asserted critical bounds and no enzyme curve');
 }
 if(p.reviewedMethylmercury!==undefined&&p.reviewedMethylmercury!==false){
  if(p.reviewedMethylmercury!==true||diagram.type!=='diorama'||diagram.kind!=='chem12m8FoodChain'||p.contaminant!=='MeHg')throw new Error('Reviewed methylmercury schematic requires explicit MeHg and its supported diagram');
 }
}
