export const visualProgress=(frame:number,fps:number,seconds:number)=>{
  const hold=seconds<=8?1:2;
  return Math.max(0,Math.min(1,(frame/fps-hold)/(seconds-2*hold)));
};
export const frameAtProgress=(seconds:number,progress:number,fps=30)=>{
  const hold=seconds<=8?1:2;
  return Math.round((hold+Math.max(0,Math.min(1,progress))*(seconds-2*hold))*fps);
};
