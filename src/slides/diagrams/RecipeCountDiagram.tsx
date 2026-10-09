import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, TOK} from '../../styles/tokens';

export type RecipeCountProps = {delay?: number; assembleAt?: number; extraBunsAt?: number};
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const Bun = ({x, y}: {x: number; y: number}) => <g transform={`translate(${x},${y})`}>
  <path d="M -29 5 C -29 -27, 29 -27, 29 5 Z" fill="#dfb26f" stroke="#936633" strokeWidth="2.5"/>
  <path d="M -29 8 L 29 8 Q 28 19 20 19 L -20 19 Q -28 19 -29 8" fill="#edca8e" stroke="#936633" strokeWidth="2.5"/>
  <path d="M -12 -9 l 5 -3 M 6 -12 l 5 3" stroke="#fff5d9" strokeWidth="3" strokeLinecap="round"/>
</g>;
const Patty = ({x, y}: {x: number; y: number}) => <g transform={`translate(${x},${y})`}>
  <ellipse rx="29" ry="10" fill="#74503c" stroke="#453027" strokeWidth="2.5"/>
  <path d="M -19 -2 L -11 3 M -3 -5 L 6 2 M 13 -3 L 20 2" stroke="#a27959" strokeWidth="2"/>
</g>;
const Burger = ({x, y}: {x: number; y: number}) => <g>
  <Bun x={x} y={y}/><Patty x={x} y={y+7}/>
</g>;

// A bounded analogy: one bun and one patty make one burger. Chemistry's
// different coefficients are explained in the following counting model.
export const RecipeCountDiagram = ({delay=0, assembleAt=90, extraBunsAt=240}: RecipeCountProps) => {
  const frame = useCurrentFrame()-delay;
  const progress = interpolate(frame,[Math.max(0,assembleAt-36),assembleAt],[0,4],clamp);
  const completed = Math.min(4,Math.floor(progress));
  const done = interpolate(frame,[assembleAt,assembleAt+12],[0,1],clamp);
  const extra = interpolate(frame,[extraBunsAt,extraBunsAt+12],[0,1],clamp);
  const drawn = interpolate(frame,[assembleAt,assembleAt+20],[0,1],clamp);
  return <svg viewBox="0 0 1000 340" role="img" aria-label="Five buns and four patties make four burgers, leaving one bun. More buns cannot replace the missing patties." style={{width:'100%',fontFamily:FONT_DISPLAY}}>
    <text x="245" y="35" textAnchor="middle" fill={TOK.ink} fontSize="30" fontWeight="750">5 buns + 4 patties</text>
    <text x="745" y="35" textAnchor="middle" fill={TOK.ink} fontSize="30" fontWeight="750" opacity={done}>4 complete burgers</text>
    {Array.from({length:5},(_,i)=><g key={`bun-${i}`} opacity={i<completed?0.16:1} data-recipe-bun={i} data-consumed={i<completed}><Bun x={105+i*70} y={108}/></g>)}
    {Array.from({length:4},(_,i)=><g key={`patty-${i}`} opacity={i<completed?0.16:1} data-recipe-patty={i} data-consumed={i<completed}><Patty x={105+i*70} y={201}/></g>)}
    <text x="498" y="157" textAnchor="middle" fill={TOK.inkDim} fontSize="56">→</text>
    {Array.from({length:4},(_,i)=>{
      const reveal=interpolate(progress,[i,i+1],[0,1],clamp);
      return <g key={`burger-${i}`} opacity={reveal} transform={`translate(0,${(1-reveal)*12})`} data-recipe-burger={i}><Burger x={625+i*80} y={142}/></g>;
    })}
    <path d="M 352 82 C 403 70, 420 83, 419 113 C 419 149, 351 147, 351 114 C 350 95, 357 80, 373 77" fill="none" stroke={TOK.amber} strokeWidth="3.5" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-drawn}/>
    <text x="386" y="181" textAnchor="middle" fill={TOK.amberInk} fontSize="26" fontFamily={FONT_HAND} fontWeight="700" opacity={done}>one bun left</text>
    <text x="245" y="255" textAnchor="middle" fill={TOK.ink} fontSize="26" fontWeight="650" opacity={done}>No patties left.</text>
    <g opacity={extra}>
      <path d="M 595 256 Q 731 248 885 256" stroke={TOK.amber} strokeWidth="3" fill="none" pathLength="1" strokeDasharray="1" strokeDashoffset={1-extra}/>
      <text x="745" y="244" textAnchor="middle" fill={TOK.ink} fontSize="28" fontWeight="650">100 more buns?</text>
      <text x="745" y="301" textAnchor="middle" fill={TOK.inkDim} fontSize="26">Still only 4 burgers.</text>
    </g>
  </svg>;
};
