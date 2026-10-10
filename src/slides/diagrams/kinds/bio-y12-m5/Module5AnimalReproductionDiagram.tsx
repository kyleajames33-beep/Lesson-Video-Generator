import {interpolate, useCurrentFrame} from 'remotion';
import type {ReactNode} from 'react';
import {FONT_DISPLAY, TOK} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';

export type Module5AnimalReproductionProps = {
  mode?: 'ploidy' | 'hydra' | 'external' | 'internal' | 'bird';
  /** Absolute scene frames. Draft cues must be replaced after narration alignment. */
  at?: {start?: number; second?: number; result?: number; condition?: number};
};

// A selected B2 board, not a replacement for the historical fertilisation model.
// Labels stay fixed. No success counts, survival fractions or parental-care outcomes.
export const Module5AnimalReproductionDiagram = ({mode = 'ploidy', at = {}}: Module5AnimalReproductionProps) => {
  const frame = useCurrentFrame();
  const theme = useAccent();
  const cues = {start: 70, second: 220, result: 400, condition: 700, ...at};
  const visible = (cue: number) => interpolate(frame, [cue, cue + 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const text = (x: number, y: number, label: string, size = 58, color: string = TOK.ink) => <text x={x} y={y} textAnchor="middle" fontSize={size} fontWeight={650} fill={color}>{label}</text>;
  const group = (cue: number, children: ReactNode) => <g opacity={visible(cue)}>{children}</g>;
  const box = (y: number, label: string, detail: string, cue: number) => group(cue, <>
    <rect x={42} y={y} width={916} height={150} rx={20} fill={TOK.bgLift} stroke={theme.accent} strokeWidth={3}/>
    {text(500, y + 62, label, 62)}{text(500, y + 120, detail, 48, TOK.inkDim)}
  </>);
  const arrow = (y: number, cue: number) => group(cue, <path d={`M500 ${y} v38 m-14 -14 l14 14 l14 -14`} fill="none" stroke={theme.accent} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={80} strokeDashoffset={80 * (1 - visible(cue))}/>);
  const set = (x: number, y: number, color: string) => <g stroke={color} strokeWidth={18} strokeLinecap="round"><path d={`M${x - 32} ${y - 52} v104`}/><path d={`M${x + 32} ${y - 30} v60`}/></g>;
  const descriptions = {
    ploidy: 'Set-count schematic. Haploid sperm and egg each supply one chromosome set. The diploid zygote contains both labelled sets. Counts and cell events are simplified.',
    hydra: 'Labelled mechanism flow. Parent hydra, connected growing bud, then a separate hydra. Growth and development involve many cell divisions. No gamete fusion is shown.',
    external: 'Location schematic. Sperm and egg meet outside the body in water. Moisture and release proximity support encounters; no success or survival count is depicted.',
    internal: 'Location schematic. Sperm and egg meet within a moist reproductive tract. Compartment is not anatomical detail. Transfer, fertilisation and later survival are separate.',
    bird: 'A supplied fertilised bird egg example. Fusion inside the body occurs before laying. Embryo development later continues outside in the egg. Parental support is a separate dimension.',
  };
  return <svg viewBox="0 0 1000 720" width="100%" style={{display: 'block', fontFamily: FONT_DISPLAY}} role="img" aria-label={descriptions[mode]}>
    {mode === 'ploidy' ? <>
      {group(cues.start, <>
        {text(255, 70, 'Sperm: n', 64)}{text(745, 70, 'Egg: n', 64)}
        <circle cx={255} cy={200} r={105} fill={theme.soft} stroke={theme.accent} strokeWidth={4}/>
        <circle cx={745} cy={200} r={105} fill={TOK.bgLift} stroke="#a74938" strokeWidth={4}/>
        {set(255, 200, theme.accent)}{set(745, 200, '#a74938')}
        {text(255, 348, 'One set', 58)}{text(745, 348, 'One set', 58)}
      </>)}
      {group(cues.second, <>
        <path d="M360 290 L420 382 M640 290 L580 382" stroke={theme.accent} strokeWidth={5} fill="none" strokeDasharray={115} strokeDashoffset={115 * (1 - visible(cues.second))}/>
        {text(500, 420, 'Fertilisation', 58)}
      </>)}
      {group(cues.result, <>
        <rect x={75} y={456} width={850} height={230} rx={36} fill={TOK.bgLift} stroke={TOK.amberInk} strokeWidth={4}/>
        {text(500, 520, 'Zygote: 2n', 66)}
        {set(245, 565, theme.accent)}{set(755, 565, '#a74938')}
        {text(500, 590, 'Two sets', 58)}
        {text(245, 675, 'Sperm set', 46)}{text(755, 675, 'Egg set', 46)}
      </>)}
    </> : mode === 'hydra' ? <>
      {box(35, 'Parent hydra', 'Parent remains as the bud develops', cues.start)}
      {arrow(195, cues.second)}
      {box(245, 'Growing bud', 'Attached: cells divide and develop', cues.second)}
      {arrow(405, cues.result)}
      {box(455, 'Separate hydra', 'The developed bud can detach', cues.result)}
      {group(cues.condition, text(500, 690, 'No gamete fusion', 60, theme.accent))}
    </> : mode === 'bird' ? <>
      {box(35, 'Fusion inside', 'Sperm and egg meet in the female', cues.start)}
      {arrow(195, cues.second)}
      {box(245, 'Fertilised egg laid', 'The supplied egg was fertilised', cues.second)}
      {arrow(405, cues.result)}
      {box(455, 'Development outside', 'Embryo continues within the egg', cues.result)}
      {group(cues.condition, text(500, 690, 'Care is a separate question', 55, theme.accent))}
    </> : <>
      {group(cues.start, <>
        {text(500, 70, mode === 'external' ? 'OUTSIDE BODY' : 'INSIDE BODY', 66)}
        <rect x={50} y={122} width={900} height={400} rx={35} fill={theme.soft} stroke={theme.accent} strokeWidth={4}/>
        {text(500, 195, mode === 'external' ? 'Pond water' : 'Moist reproductive tract', 54)}
        {text(270, 465, 'Sperm', 58)}{text(735, 465, 'Egg', 58)}
        <ellipse cx={245} cy={315} rx={32} ry={24} fill={theme.accent}/>
        <path d="M215 315 q-45 -45 -65 5 q-25 35 -50 0" fill="none" stroke={theme.accent} strokeWidth={7}/>
        <circle cx={735} cy={315} r={62} fill={TOK.bgLift} stroke="#a74938" strokeWidth={5}/>
      </>)}
      {group(cues.second, <>
        <path d="M320 315 H625 m-24 -18 l24 18 l-24 18" fill="none" stroke={theme.accent} strokeWidth={6} strokeDasharray={380} strokeDashoffset={380 * (1 - visible(cues.second))}/>
        {text(500, 585, 'Location of gamete fusion', 54)}
      </>)}
      {group(cues.condition, text(500, 675, mode === 'external' ? 'Proximity and timing matter' : 'Less exposure to drying', 54, theme.accent))}
    </>}
  </svg>;
};
