export const PRACTICAL={g:9.8,launchSpeed:2,height:.8,ranges:[.798,.804,.808,.812,.818],dx:.01,dh:.02};
export const mean=(values:number[])=>values.reduce((sum,n)=>sum+n,0)/values.length;
export const halfRange=(values:number[])=>(Math.max(...values)-Math.min(...values))/2;
export const fallTime=(height:number,g=9.8)=>Math.sqrt(2*height/g);
export const predictedRange=(height:number,speed:number,g=9.8)=>speed*fallTime(height,g);
export const practicalPoints=()=>[.2,.4,.6,.8,1].map(h=>{
  const x=predictedRange(h,PRACTICAL.launchSpeed,PRACTICAL.g);
  return {h,x,x2:x*x,x2lo:(x-PRACTICAL.dx)**2,x2hi:(x+PRACTICAL.dx)**2,hlo:h-PRACTICAL.dh,hhi:h+PRACTICAL.dh};
});
/** Gradients through the origin compatible with every measurement rectangle. */
export const compatibleSlopes=()=>{
  const points=practicalPoints();
  return {low:Math.max(...points.map(p=>p.hlo/p.x2hi)),high:Math.min(...points.map(p=>p.hhi/p.x2lo))};
};
export const speedFromSlope=(slope:number,g=9.8)=>Math.sqrt(g/(2*slope));
export const selectedSlopeAt=(progress:number)=>{
  const b=compatibleSlopes(),fraction=Math.max(0,Math.min(1,(progress-.6)/.2));
  return b.low+(b.high-b.low)*fraction;
};
