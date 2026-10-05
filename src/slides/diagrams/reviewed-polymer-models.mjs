// Only the two source-reviewed L21 treatments have this opt-in. Other legacy
// polymer modes keep their existing output and remain separate review scope.
export function validateReviewedPolymerDiagram(diagram){
 const p=diagram?.props;if(!p||!Object.hasOwn(p,'reviewedPolymer'))return;
 if(typeof p.reviewedPolymer!=='boolean')throw new Error('reviewedPolymer must be boolean');
 if(!p.reviewedPolymer)return;
 if(diagram.type!=='diorama'||!['chem12m7PolymerProps','chem12m7PolymerFate'].includes(diagram.kind))throw new Error('Unsupported reviewed polymer diagram');
 if(diagram.kind==='chem12m7PolymerFate'&&(p.mode??'thermo')!=='thermo')throw new Error('Reviewed polymer fate is limited to the polyethylene thermo example');
}
