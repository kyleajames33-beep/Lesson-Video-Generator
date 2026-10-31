import {module5Visuals} from './module5';
import {module6Visuals} from './module6';
import {module7Visuals} from './module7';
import {module8Visuals} from './module8';
export const modules=[
  {number:5,title:'Advanced mechanics',visuals:module5Visuals},
  {number:6,title:'Electromagnetism',visuals:module6Visuals},
  {number:7,title:'The nature of light',visuals:module7Visuals},
  {number:8,title:'From the Universe to the atom',visuals:module8Visuals},
];
export const allVisuals=modules.flatMap(m=>m.visuals);
export const mechanicsDetails=module5Visuals.filter(v=>v.seconds!==undefined);
export const extraSamples=[{id:'mechanics-details',compositionId:'PhysicsMechanicsDetailsSilent',title:'Derive the level-ground range',visualIds:['m5-range-derivation']}].map(sample=>({...sample,seconds:sample.visualIds.reduce((sum,id)=>sum+(allVisuals.find(v=>v.id===id)?.seconds??12),0)}));
export {frameAtProgress} from './timing';
