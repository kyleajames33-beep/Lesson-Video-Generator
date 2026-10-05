const flag='reviewedBiologyResiduals';
// Exact component defaults, in semantic order. Partial reviewed schedules must
// be validated after merging these values, not only against supplied keys.
const scheduleDefaults={
 bio12m5Reshuffle:{cross:40,swap:140,assort:300,arrange2:380,result:520},
 bio11m1bAssortment:{one:10,two:90,three:170,human:260,crossing:340,fertilisation:400,rule:480},
};
const schedules=Object.fromEntries(Object.entries(scheduleDefaults).map(([kind,values])=>[kind,new Set(Object.keys(values))]));
export function validateBiologyResidualProps(kind,props){
 if(!props||!Object.hasOwn(props,flag))return;
 if(typeof props[flag]!=='boolean')throw new Error(flag+' must be boolean');
 if(!props[flag])return;
 if(!Object.hasOwn(schedules,kind))throw new Error('Unsupported reviewed Biology residual diagram');
 for(const [key,value]of Object.entries(props))if(key.startsWith('reviewed')&&key!==flag&&value!==false)throw new Error('Biology residual review flags cannot be combined');
 const finite=(v,label)=>{if(typeof v!=='number'||!Number.isFinite(v)||v<0)throw new Error(label+' must be finite and nonnegative');};
 if(Object.hasOwn(props,'delay'))finite(props.delay,'delay');
 if(Object.hasOwn(props,'rule')&&(typeof props.rule!=='string'||!props.rule.trim()))throw new Error('Reviewed Biology rule must be nonempty');
 if(Object.hasOwn(props,'at')){
  if(!props.at||typeof props.at!=='object'||Array.isArray(props.at))throw new Error('Reviewed Biology schedule must be an object');
  for(const key of Object.keys(props.at)){if(!schedules[kind].has(key))throw new Error('Unsupported reviewed Biology cue');finite(props.at[key],'schedule '+key);}
 }
 const effective={...scheduleDefaults[kind],...(props.at??{})};
 let previous=-Infinity;
 for(const key of schedules[kind]){finite(effective[key],'effective schedule '+key);if(effective[key]<previous)throw new Error('Reviewed Biology effective schedule must be ordered');previous=effective[key];}
 // This existing display is explicitly headed humans, so reviewed use is
 // restricted to its stated 23-pair example rather than silently relabelled.
 if(kind==='bio11m1bAssortment'&&Object.hasOwn(props,'pairs')&&props.pairs!==23)throw new Error('Reviewed human assortment example requires 23 pairs');
}
export function validateBiologyResidualDiagram(diagram){
 if(!diagram?.props||!Object.hasOwn(diagram.props,flag))return;
 validateBiologyResidualProps(diagram.kind,diagram.props);
 if(diagram.props[flag]&&diagram.type!=='diorama')throw new Error('Reviewed Biology residual diagrams require a diorama');
}
