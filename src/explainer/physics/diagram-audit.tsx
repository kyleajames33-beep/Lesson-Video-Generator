import React, {useEffect,useRef} from 'react';
import {continueRender,delayRender} from 'remotion';

/** Native font metrics for still QA. This is opt-in and absent from playback. */
export const DiagramAudit:React.FC<{id:string;enabled?:boolean;children:React.ReactNode}>=({id,enabled=false,children})=>{
  const ref=useRef<SVGGElement>(null);
  useEffect(()=>{
    if(!enabled)return;
    const handle=delayRender(`Audit labels: ${id}`,{timeoutInMilliseconds:120000});
    document.fonts.ready.then(()=>{
      const group=ref.current,matrix=group?.getScreenCTM()?.inverse();
      if(group&&matrix){
        const labels=Array.from(group.querySelectorAll('text')).map(el=>{
          const b=el.getBoundingClientRect(),p1=new DOMPoint(b.left,b.top).matrixTransform(matrix),p2=new DOMPoint(b.right,b.bottom).matrixTransform(matrix);
          return {text:el.textContent??'',x:p1.x,y:p1.y,w:p2.x-p1.x,h:p2.y-p1.y};
        });
        const overflow=labels.filter(b=>b.x< -1||b.y< -1||b.x+b.w>1101||b.y+b.h>621);
        const overlaps:unknown[]=[];
        for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
          const a=labels[i],b=labels[j],w=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x),h=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
          if(w>5&&h>5)overlaps.push({a:a.text,b:b.text,width:w,height:h});
        }
        console.log('PHYSICS_LABEL_AUDIT '+JSON.stringify({id,labels:labels.length,overflow,overlaps}));
      }
      continueRender(handle);
    },()=>continueRender(handle));
  },[enabled,id]);
  return <g ref={ref}>{children}</g>;
};
