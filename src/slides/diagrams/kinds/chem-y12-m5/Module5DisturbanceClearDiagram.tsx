import {useId} from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth} from '../../diorama';
import {AtomDefs, Ball} from './shared';

export type DisturbanceMode = 'additionHook' | 'addA' | 'removeB' | 'fixedK' | 'associationHeat' | 'temperatureResponse';
export type Module5DisturbanceProps = {mode: DisturbanceMode; at: Record<string, number>; barReferenceStyle?: 'solidMarks'};

// Reuse the reviewed mathematical model and cue API; change presentation only.
import {disturbanceState, temperatureResponseState} from './Module5DisturbanceDiagram';

export const Module5DisturbanceClearDiagram = ({mode, at, barReferenceStyle}: Module5DisturbanceProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const theme = useAccent();
  const instance = useId().replace(/:/g, '');
  const id = `c3-${mode}-${instance}`;
  const primary = theme.accent;
  const other = TOK.amberInk;
  const cue = (key: string) => {
    const value = at[key];
    return Number.isFinite(value) && value >= 0 ? value : Infinity;
  };
  const shown = (key: string) => frame >= cue(key);
  const move = (key: string, seconds: number) => !Number.isFinite(cue(key)) ? 0 : interpolate(frame, [cue(key), cue(key) + seconds * fps], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.45, 0, 0.55, 1),
  });
  const text = (x: number, y: number, label: string, color: string = TOK.ink, size = 38, anchor: 'start' | 'middle' | 'end' = 'start') =>
    <text x={x} y={y} fill={color} fontSize={size} fontWeight={size <= 34 ? 500 : 650} textAnchor={anchor}>{label}</text>;
  const arrow = (x1: number, x2: number, y: number, color: string, opacity = 1) => <g opacity={opacity}>
    <path d={`M${x1} ${y} H${x2}`} fill="none" stroke={color} strokeWidth={7}/>
    <path d={`M${x2 + (x2 > x1 ? -22 : 22)} ${y - 16} L${x2} ${y} L${x2 + (x2 > x1 ? -22 : 22)} ${y + 16}`} fill="none" stroke={color} strokeWidth={7}/>
  </g>;
  const card = (x: number, y: number, w: number, h: number) => <rect x={x} y={y} width={w} height={h} rx={24} fill={TOK.bgLift} stroke={TOK.rule} strokeWidth={3}/>;
  const heatCase = mode === 'associationHeat' || mode === 'temperatureResponse';
  const shell = (body: React.ReactNode, description: string) => <svg viewBox="0 0 1720 620" width="100%" height="100%" role="img" aria-label={description} style={{fontFamily: FONT_DISPLAY, overflow: 'visible'}}>
    <DioramaDefs id={id} elements={['N', 'O']}/><AtomDefs id={`${id}-model`} elements={['A', 'B']}/>
    {text(40, 54, heatCase ? '2NO₂(g) ⇌ N₂O₄(g)' : 'A ⇌ B', TOK.ink, 42)}
    {!heatCase ? text(235, 54, 'one-to-one model', TOK.inkDim, 30) : null}
    {text(1130, 38, heatCase ? 'Material retained' : 'Fixed temperature and volume', TOK.inkDim, 32)}
    {text(1130, 84, heatCase ? 'Fixed volume' : 'Reclosed after transfer', TOK.inkDim, 32)}
    <path d="M40 117 H1680" stroke={TOK.rule} strokeWidth={2}/>
    {body}
  </svg>;
  if (mode === 'additionHook') {
    const progress = Math.max(0, Math.min(1, (frame - cue('response')) / (8 * fps)));
    const state = shown('response') ? disturbanceState('addA', progress * 1.8) : shown('event') ? {a: 5, b: 1} : {a: 2, b: 1};
    const y = (v: number) => 465 - v * 48;
    return shell(<>
      <rect x={90} y={175} width={890} height={310} rx={32} fill={theme.soft} stroke={primary} strokeWidth={5}/>
      {text(540, 224, 'One mixture', primary)}
      {barReferenceStyle === 'solidMarks' ? <path data-reference="original-levels" d="M230 369 H253 M427 369 H450 M600 417 H623 M797 417 H820" fill="none" stroke={TOK.inkDim} strokeWidth={3} strokeLinecap="round"/> :
        <path d="M250 369 H430 M620 417 H800" stroke={TOK.inkDim} strokeWidth={4} strokeDasharray="12 10"/>}
      <rect x={265} y={y(state.a)} width={150} height={465 - y(state.a)} rx={12} fill={primary}/>
      <rect x={635} y={y(state.b)} width={150} height={465 - y(state.b)} rx={12} fill={other}/>
      {text(340, 534, 'A', primary, 50, 'middle')}{text(710, 534, 'B', other, 50, 'middle')}
      {shown('event') && !shown('response') ? <>
        <Ball id={`${id}-model`} el="A" x={340} y={180 + move('event', 0.8) * 44} r={38} label="A" labelSize={50}/>
        <path d="M450 220 V300 M435 282 L450 300 L465 282" fill="none" stroke={primary} strokeWidth={6}/>
      </> : null}
      {arrow(460, 595, 340, primary)}{arrow(595, 460, 403, other)}
      {card(1050, 170, 620, 320)}
      {text(1085, 232, shown('response') ? 'Reaction afterwards' : shown('event') ? 'Direct addition' : 'Original equilibrium')}
      {text(1085, 317, shown('response') ? 'A is being used' : shown('event') ? 'Only A jumps' : 'Amounts stay steady', primary)}
      {text(1085, 397, shown('response') ? 'Extra B is made' : shown('event') ? 'B has not changed' : 'Opposing rates equal', other)}
      {text(40, 593, shown('response') ? 'Reaction is still approaching balance' : barReferenceStyle === 'solidMarks' ? 'Small marks: original concentrations' : 'Dashed levels: original concentrations')}
    </>, 'A-only addition to one mixture. A concentration jumps; B stays unchanged until the later reaction response. Bars are model concentrations, not particle counts.');
  }

  if (mode === 'addA' || mode === 'removeB') {
    const p = Math.max(0, Math.min(1, (frame - cue('response')) / (8 * fps)));
    const state = disturbanceState(mode, p * 1.8);
    const y = (v: number) => 470 - v * 50;
    const xEvent = 340, end = 1030;
    const path = (species: 'a' | 'b') => Array.from({length: 91}, (_, i) => {
      const time = p * 1.8 * i / 90;
      return `${i ? 'L' : 'M'}${(xEvent + (end - xEvent) * p * i / 90).toFixed(2)},${y(disturbanceState(mode, time)[species]).toFixed(2)}`;
    }).join(' ');
    const initial = disturbanceState(mode, 0);
    const showReference = mode === 'addA' ? shown('limit') : shown('originalCompare');
    const panelHeading = showReference ? 'Final equilibrium reference' : shown('response') ? 'Reaction response' : shown('rateReason') && mode === 'addA' ? 'Straight after mixing' : shown('event') ? 'Direct change' : 'Starting equilibrium';
    return shell(<>
      <rect x={40} y={148} width={1040} height={397} rx={18} fill={TOK.bgLift}/>
      {text(65, 191, 'Concentration', TOK.ink, 36)}{text(405, 191, 'model units', TOK.inkDim, 30)}
      <path d="M804 181 H840" stroke={primary} strokeWidth={6}/>{text(855, 191, 'A', primary, 34)}
      <path d="M954 181 H990" stroke={other} strokeWidth={6}/>{text(1005, 191, 'B', other, 34)}
      {[0, 1, 2, 3, 4, 5].map(v => <g key={v}>
        <path d={`M110 ${y(v)} H1040`} stroke={TOK.rule} strokeWidth={1.5}/>
        {text(88, y(v) + 11, String(v), TOK.inkDim, 30, 'end')}
      </g>)}
      <path d="M110 214 V470 H1040" fill="none" stroke={TOK.inkDim} strokeWidth={3}/>
      <path d={`M110 ${y(2)} H${xEvent}`} stroke={primary} strokeWidth={7}/>
      <path d={`M110 ${y(1)} H${xEvent}`} stroke={other} strokeWidth={7}/>
      <path d={`M${xEvent} 214 V470`} stroke={TOK.inkDim} strokeWidth={2} strokeDasharray="8 10"/>
      {shown('event') ? <>
        <path data-event="a" d={`M${xEvent} ${y(2)} V${y(initial.a)}`} stroke={primary} strokeWidth={8}/>
        <path data-event="b" d={`M${xEvent} ${y(1)} V${y(initial.b)}`} stroke={other} strokeWidth={8}/>
        <circle cx={xEvent} cy={y(initial.a)} r={8} fill={primary}/><circle cx={xEvent} cy={y(initial.b)} r={8} fill={other}/>
        <path d={`M${xEvent} ${y(1)} H1040`} stroke={other} strokeWidth={3} strokeDasharray="12 10" opacity={0.65}/>
      </> : null}
      {shown('response') ? <>
        <path data-trace="a" d={path('a')} stroke={primary} fill="none" strokeWidth={8}/><path data-trace="b" d={path('b')} stroke={other} fill="none" strokeWidth={8}/>
        <circle cx={xEvent + (end - xEvent) * p} cy={y(state.a)} r={9} fill={primary}/><circle cx={xEvent + (end - xEvent) * p} cy={y(state.b)} r={9} fill={other}/>
      </> : null}
      {text(115, 521, 'Before', TOK.inkDim, 30)}
      {text(xEvent, 521, mode === 'addA' ? 'Add A' : 'Remove B', TOK.inkDim, 30, 'middle')}
      {text(850, 521, 'Model time →', TOK.inkDim, 30, 'middle')}
      {card(1130, 148, 550, 397)}
      {text(1160, 208, panelHeading, TOK.inkDim, 32)}
      <path d="M1160 230 H1650" stroke={TOK.rule} strokeWidth={2}/>
      {showReference ? <>
        {text(1160, 310, mode === 'addA' ? 'A = 4' : 'A = 5/3', primary, 44)}
        {text(1160, 390, mode === 'addA' ? 'B = 2' : 'B = 5/6', other, 44)}
        {text(1160, 485, mode === 'addA' ? 'Both above the original' : 'B stays below its original level', TOK.ink, 32)}
      </> : shown('response') ? <>
        {text(1160, 310, 'A falls', primary, 44)}{text(1160, 390, 'B rises', other, 44)}
      </> : shown('rateReason') && mode === 'addA' ? <>
        {text(1160, 310, 'A → B is faster', primary, 40)}{text(1160, 390, 'B is made faster', other, 40)}
      </> : <>
        {text(1160, 310, shown('event') ? mode === 'addA' ? 'A: 2 → 5' : 'B: 1 → 0.5' : 'A = 2', shown('event') && mode === 'removeB' ? other : primary, 44)}
        {text(1160, 390, shown('event') ? mode === 'addA' ? 'B stays at 1' : 'A stays at 2' : 'B = 1', shown('event') && mode === 'removeB' ? primary : other, 44)}
      </>}
      {shown('response') ? text(65, 593, 'Curve: approaching equilibrium', TOK.inkDim, 30) : null}
      {shown('event') ? text(680, 593, 'Dashed line: original B', TOK.inkDim, 30) : null}
    </>, `${mode === 'addA' ? 'A rises from 2 to 5; B initially stays 1. A then tends to 4 and B to 2.' : 'Reset A 2, B 1. Remove B to 0.5; A does not jump. A tends to 5/3 and B to 5/6, below original B.'} Fixed-temperature declared one-to-one model. Finite trace and exact equilibrium reference are separate.`);
  }

  if (mode === 'fixedK') {
    const reference = (x: number, label: string, a: number, b: number) => <>
      {card(x, 165, 755, 325)}{text(x + 30, 231, label)}
      <rect x={x + 45} y={290} width={a * 100} height={58} rx={10} fill={primary}/><rect x={x + 45} y={386} width={b * 100} height={58} rx={10} fill={other}/>
      {text(x + 490, 335, `A = ${a}`, primary)}{text(x + 490, 431, `B = ${b}`, other)}
    </>;
    return shell(<>
      {reference(40, 'Original equilibrium reference', 2, 1)}
      {shown('sameK') ? reference(925, 'After adding A: new reference', 4, 2) : <>{card(925, 165, 755, 325)}{text(960, 265, 'One direction is')}{text(960, 330, 'temporarily faster')}</>}
      {shown('defineK') ? <>
        {text(40, 570, shown('sameK') ? 'Same temperature: same K' : 'K: equilibrium relationship', primary)}
        {shown('sameK') ? text(945, 570, 'Different concentrations', TOK.ink) : text(945, 570, 'For the written reaction')}
      </> : text(40, 570, 'The reaction does not completely undo the imposed change')}
    </>, 'Two exact equilibrium reference states for the same one-to-one model: original A 2 B 1, after addition A 4 B 2. Different concentrations, same temperature and same K. No numeric K or expression is taught.');
  }

  if (mode === 'associationHeat') {
    const cooling = shown('cooling');
    const heating = shown('heating') && !cooling;
    const reverse = shown('reverse') && !cooling;
    const joining = cooling ? move('cooling', 2) : reverse ? 1 - move('reverse', 2) : move('association', 2);
    // The same six atom instances persist. Joining changes their spacing and
    // the N-N bond, not identities/counts. This depicts a net relationship.
    const centre = 610;
    const separation = 220 - joining * 163;
    const atom = (x: number, y: number, el: 'N' | 'O', key: string) => <g key={key} data-atom={el}>
      <circle cx={x} cy={y} r={39} fill={`url(#${id}-atom-${el})`} stroke={TOK.inkDim} strokeWidth={2}/>
      {text(x, y + 18, el, '#ffffff', 50, 'middle')}
    </g>;
    const moleculeHalf = (side: -1 | 1) => {
      const x = centre + side * separation;
      return <g key={side}>
        <path d={`M${x + side * 85} 224 L${x} 290 L${x + side * 85} 356`} fill="none" stroke={TOK.inkDim} strokeWidth={9}/>
        {atom(x + side * 85, 224, 'O', `${side}-O-top`)}{atom(x, 290, 'N', `${side}-N`)}{atom(x + side * 85, 356, 'O', `${side}-O-bottom`)}
      </g>;
    };
    const heatStart = cooling ? cue('cooling') : heating ? cue('heating') : reverse ? cue('reverse') : cue('exothermic');
    const energy = Math.max(0, Math.min(1, (frame - heatStart) / (1.8 * fps)));
    const absorbs = reverse || heating;
    const heatVisible = shown('exothermic');
    return shell(<>
      <g transform="translate(0,202.5) scale(1,0.5)"><DioramaPlinth id={id} cx={610} cy={405} rx={435}/></g>
      <path data-bond="N-N" d={`M${centre - separation} 290 H${centre + separation}`} stroke={primary} strokeWidth={9} opacity={joining}/>
      {moleculeHalf(-1)}{moleculeHalf(1)}
      {text(610, 514, joining > 0 && joining < 1 ? reverse ? 'Splitting: same atoms' : 'Joining: same atoms' : joining === 1 ? 'One N₂O₄ molecule' : 'Two distinct NO₂ molecules', TOK.ink, 50, 'middle')}
      {card(1130, 163, 550, 345)}
      {heatVisible ? <>
        {text(1160, 231, cooling ? 'Cooling' : heating ? 'Heating' : reverse ? 'Reverse: splitting' : 'Forward: joining')}
        {text(1160, 306, absorbs ? 'Splitting absorbs heat' : 'Joining releases heat', absorbs ? other : primary)}
        {text(1160, 380, cooling ? 'Favours joining' : heating ? 'Favours splitting' : reverse ? 'Endothermic' : 'Exothermic')}
        {text(1160, 454, reverse ? 'Forward ΔH < 0' : 'ΔH < 0: forward')}
        {arrow(absorbs ? 1090 : 880, absorbs ? 880 : 1090, 285, other)}
        {[0, 1, 2].map(i => {
          const origin = absorbs ? 1070 : 880;
          const destination = absorbs ? 900 : 1050;
          const q = Math.max(0, Math.min(1, energy * 1.5 - i * 0.18));
          return <path key={i} d={`M${origin + (destination - origin) * q - 8} ${326 + i * 35} q18 -16 36 0 t36 0`} fill="none" stroke={other} strokeWidth={5} opacity={q > 0 && q < 1 ? 1 : 0.35}/>;
        })}
      </> : <>{text(1160, 249, 'Joining is forward')}{text(1160, 326, '2 N and 4 O atoms')}{text(1160, 403, 'Atoms conserved')}</>}
      {text(40, 593, cooling || heating ? 'NO₂ is brown; N₂O₄ is colourless' : 'Same atoms before and after joining')}
    </>, 'Two distinct nitrogen dioxide molecules, with two nitrogen and four oxygen atoms in total, join into one dinitrogen tetroxide. Same six atoms persist. Forward joining releases heat; reverse splitting absorbs heat. Heating favours splitting, cooling favours joining. Net relationship illustration, not a mechanism or concentration measurement.');
  }

  const p = Math.max(0, Math.min(1, (frame - cue('response')) / (8 * fps)));
  const y = (v: number) => 465 - v * 54;
  const path = (species: 'no2' | 'n2o4') => Array.from({length: 91}, (_, i) => {
    const time = p * 1.8 * i / 90;
    return `${i ? 'L' : 'M'}${(340 + 690 * p * i / 90).toFixed(2)},${y(temperatureResponseState(time)[species]).toFixed(2)}`;
  }).join(' ');
  return shell(<>
    {text(40, 174, 'Qualitative concentration')}{text(790, 174, 'NO₂', other)}{text(945, 174, 'N₂O₄', primary)}
    <path d="M100 210 V465 H1040" fill="none" stroke={TOK.inkDim} strokeWidth={4}/>
    <path d={`M100 ${y(2)} H340`} stroke={primary} strokeWidth={10}/><path d={`M100 ${y(2)} H340`} stroke={other} strokeWidth={5} strokeDasharray="14 12"/>
    <path d="M340 210 V465" stroke={TOK.inkDim} strokeWidth={3} strokeDasharray="10 12"/>
    {shown('event') ? <>
      <circle cx={340} cy={y(2)} r={11} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={4}/>
      {text(500, 220, 'No concentration step', TOK.inkDim, 32)}
    </> : null}
    {shown('response') ? <>
      <path data-trace="no2" d={path('no2')} stroke={other} strokeWidth={8} fill="none"/><path data-trace="n2o4" d={path('n2o4')} stroke={primary} strokeWidth={8} fill="none"/>
    </> : null}
    {text(120, 527, 'Before')}{text(340, 527, 'T step')}{text(840, 527, 'Later →', TOK.ink, 50, 'middle')}
    {card(1110, 163, 570, 350)}
    {text(1140, 230, shown('event') ? 'Temperature ↑' : 'Original temperature', primary)}
    {text(1140, 305, shown('event') ? 'K ↓ for the new T' : 'K for the original T', other)}
    {text(1140, 383, shown('response') && frame >= cue('response') + 6 * fps ? 'Final reference' : shown('response') ? 'New T held fixed' : shown('defineNewK') ? 'K changes with T' : shown('continuousConcentrations') ? 'No material transferred' : 'Rapid heating')}
    {text(1140, 458, shown('response') && frame >= cue('response') + 6 * fps ? 'NO₂ ↑; N₂O₄ ↓' : shown('response') ? 'K fixed at new T' : 'No instant change')}
    {shown('response') && frame >= cue('response') + 6 * fps ? <>
      {text(40, 593, 'Still approaching balance; final reference shown separately.')}
    </> : text(40, 593, shown('response') ? 'New temperature held fixed; K stays the same.' : 'Temperature and K change first; composition responds afterwards.')}
  </>, 'Idealised rapid heating in a closed fixed-volume 2NO2 to N2O4 equilibrium with a heat-releasing forward direction. Temperature rises and qualitative K decreases at the imposed event. Both concentrations are continuous, then NO2 increases and N2O4 decreases. K stays fixed while composition approaches the new balance. Atom-conserving qualitative traces are not measured kinetics or numeric K data. Separate final-reference text, no finite exact equilibrium marker.');
};
