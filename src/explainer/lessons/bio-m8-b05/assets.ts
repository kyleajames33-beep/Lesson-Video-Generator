import type {PB} from '../bio-m8-b01/parts';
// Measured alpha bounds. Matched pairs share union boxes to retain canvas alignment.
const p=(name:string,nat:[number,number],box:[number,number,number,number]):PB=>({src:'assets/biology/'+name,nat,box});
export const P:Record<string,PB>={
 plant:p('b2b-prop-new-plant-v1.png',[1600,1600],[490,242,1119,1360]),
 wilted:p('m8-potted-plant-wilted-v1.png',[1600,1600],[490,242,1119,1360]),
 leaf:p('m8-leaf-cross-section-v1.png',[2000,2000],[220,412,1780,1587]),
 xerophyte:p('m8-xerophyte-leaf-section-v1.png',[2000,2000],[220,412,1780,1587]),
 open:p('m8-stoma-open-v1.png',[2000,2000],[220,222,1780,1776]),
 closed:p('m8-stoma-closed-v1.png',[2000,2000],[220,222,1780,1776]),
 spinifex:p('m7-spinifex-hummock-v1.png',[2000,2000],[250,257,1749,1743]),
 eucalypt:p('m8-eucalypt-hanging-leaves-v1.png',[2000,2000],[413,220,1586,1779]),
};
export const ASSETS=Object.values(P).map(p=>p.src);
