import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';

type Props = {
  mode?: 'hook' | 'model' | 'association' | 'rates' | 'amounts' | 'catalyst';
  runAt?: number; forwardAt?: number; reverseAt?: number; limitAt?: number;
  comparisonAt?: number; comparisonEnd?: number; graphAt?: number;
};
// All numbers are authored first-order model quantities, not measured data.
// A(0)=1, B(0)=0; kForward=1, kReverse=2; A+B=1.
// No tolerance or finite timestamp is treated as exact equilibrium.
export const approachState = (time: number) => {
  const b = (1 - Math.exp(-3 * Math.max(0, time))) / 3;
  return {a: 1 - b, b, forward: 1 - b, reverse: 2 * b};
};
const points = (value: (t: number) => number) => Array.from({length: 101}, (_, i) => {
  const x = 135 + i * 8.9;
  const y = 465 - value(i / 50) * 210;
  return `${i ? 'L' : 'M'}${x.toFixed(2)},${y.toFixed(2)}`;
}).join(' ');
const progress = (frame: number, start: number) => Math.max(0, Math.min(1, (frame - start) / 150));

export const Module5ApproachDiagram = ({mode = 'model', runAt = 300, forwardAt = 90, reverseAt = 270,
  limitAt = 900, comparisonAt = 1400, comparisonEnd = 1750, graphAt = 500}: Props) => {
  const frame = useCurrentFrame();
  const theme = useAccent();
  const primary = theme.accent, other = TOK.amberInk;
  const text = {fontFamily: FONT_DISPLAY, fill: TOK.ink, fontSize: 52, fontWeight: 650};
  const time = Math.max(0, Math.min(2, (frame - runAt) / 400));
  const state = approachState(time);
  const arrow = (y: number, reverse: boolean, active: boolean) => <g opacity={active ? 1 : 0}>
    <line x1={reverse ? 775 : 350} y1={y} x2={reverse ? 350 : 775} y2={y} stroke={reverse ? other : primary} strokeWidth={9}/>
    <path d={reverse ? `M380 ${y - 18} L350 ${y} L380 ${y + 18}` : `M745 ${y - 18} L775 ${y} L745 ${y + 18}`} fill="none" stroke={reverse ? other : primary} strokeWidth={9}/>
  </g>;
  if (mode === 'hook') return <svg viewBox="0 0 1120 260" style={{width: '100%', height: 300}} role="img" aria-label="Start with A only. The reverse process can begin as B forms, before equilibrium.">
    <text x={560} y={65} textAnchor="middle" {...text}>Start: A only</text>
    <text x={220} y={180} textAnchor="middle" {...text} fontSize={98}>A</text>
    <text x={900} y={180} textAnchor="middle" {...text} fontSize={98}>B</text>
    {arrow(125, false, true)}{arrow(190, true, frame >= reverseAt)}
  </svg>;

  const header = mode === 'association' ? '2NO₂ ⇌ N₂O₄' : mode === 'catalyst' ? 'Same start, temperature and volume' : 'One mixture: A ⇌ B (one-to-one)';
  const conditions = mode === 'association' ? 'Illustrated association, not a full mechanism' : 'Closed; fixed temperature and volume';
  const draw = (path: string, color: string, start: number, dashed = false) => <path d={path} fill="none" stroke={color} strokeWidth={8} pathLength={1} strokeDasharray={dashed ? '0.025 0.014' : '1'} strokeDashoffset={dashed ? 0 : 1 - progress(frame, start)} opacity={frame >= start ? 1 : 0}/>;
  const chart = (catalyst: boolean) => <>
    <text x={70} y={180} {...text} fontSize={50}>{catalyst || mode === 'amounts' ? 'Concentration, arbitrary units' : 'Rate, arbitrary units'}</text>
    <path d="M135 245 V465 H1025" fill="none" stroke={TOK.inkDim} strokeWidth={5}/>
    <text x={95} y={480} {...text} fontSize={50}>0</text>
    <text x={580} y={530} textAnchor="middle" {...text} fontSize={50}>Model time, arbitrary units →</text>
    {catalyst ? <>
      <text x={160} y={225} {...text} fill={primary}>With catalyst</text>
      <text x={655} y={225} {...text} fill={other}>Without catalyst</text>
      {draw(points(t => (1 - Math.exp(-5.5 * t)) / 3), primary, graphAt)}
      {draw(points(t => approachState(t).b), other, graphAt + 120)}
      <path d="M135 395 H1025" fill="none" stroke={TOK.inkDim} strokeWidth={3} strokeDasharray="12 10"/>
      {frame >= limitAt ? <text x={570} y={370} {...text} textAnchor="middle">Shared limiting B level</text> : null}
      {frame >= comparisonAt && frame < comparisonEnd ? <>
        <path d="M370 255 V465" fill="none" stroke={TOK.inkDim} strokeWidth={4} strokeDasharray="12 10"/>
        <text x={410} y={315} {...text} fontSize={50}>Early comparison</text>
      </> : null}
    </> : <>
      <text x={160} y={225} {...text} fill={primary}>{mode === 'rates' ? 'Forward: A → B' : 'A concentration'}</text>
      <text x={630} y={225} {...text} fill={other}>{mode === 'rates' ? 'Reverse: B → A' : 'B concentration'}</text>
      {draw(points(t => mode === 'rates' ? approachState(t).forward : approachState(t).a), primary, forwardAt)}
      {draw(points(t => mode === 'rates' ? approachState(t).reverse : approachState(t).b), other, reverseAt)}
      <text x={580} y={635} textAnchor="middle" {...text} fontSize={50}>Finite trace: approaching equilibrium</text>
    </>}
  </>;
  const atom = (x: number, y: number, element: string) => <g><circle cx={x} cy={y} r={33} fill={element === 'N' ? theme.soft : '#fff1dc'} stroke={element === 'N' ? primary : other} strokeWidth={4}/><text x={x} y={y + 18} {...text} textAnchor="middle" fontSize={50}>{element}</text></g>;
  const no2 = (x: number, y: number) => <g><path d={`M${x - 53} ${y + 48} L${x} ${y} L${x + 53} ${y + 48}`} fill="none" stroke={TOK.inkDim} strokeWidth={6}/>{atom(x, y, 'N')}{atom(x - 65, y + 60, 'O')}{atom(x + 65, y + 60, 'O')}</g>;
  return <svg viewBox="0 0 1120 780" style={{width: '100%'}} role="img" aria-label={mode === 'association' ? 'Two NO2 molecules associate into one N2O4 molecule, retaining two nitrogen atoms and four oxygen atoms. Schematic association, not a complete mechanism.' : mode === 'catalyst' ? 'Schematic catalyst comparison with identical starts and equilibrium limiting composition, faster catalysed approach, lower pathway barrier and unchanged endpoint energies. No universal numerical acceleration factor is claimed.' : `Declared one-to-one A and B model. A-only start, forward rate positive and reverse rate initially zero. Finite traces approach equilibrium; the exact equilibrium limit is separate. ${mode === 'amounts' ? 'Limiting concentrations differ, with twice as much A as B.' : 'At the equilibrium limit both opposing rates are equal and non-zero.'}`}>
    <text x={560} y={62} textAnchor="middle" {...text} fontSize={mode === 'association' ? 80 : 52}>{header}</text>
    <text x={560} y={120} textAnchor="middle" {...text} fontSize={50}>{conditions}</text>
    {mode === 'model' ? <>
      <text x={220} y={250} textAnchor="middle" {...text} fontSize={90}>A</text>
      <text x={900} y={250} textAnchor="middle" {...text} fontSize={90}>B</text>
      {arrow(210, false, true)}{arrow(280, true, time > 0)}
      <rect x={90} y={340} width={440} height={80} rx={10} fill={theme.soft}/><rect x={90} y={340} width={440 * state.a} height={80} rx={10} fill={primary}/>
      <rect x={590} y={340} width={440} height={80} rx={10} fill={theme.soft}/><rect x={590} y={340} width={440 * state.b} height={80} rx={10} fill={other}/>
      <text x={310} y={480} textAnchor="middle" {...text}>A: more</text><text x={810} y={480} textAnchor="middle" {...text}>{time === 0 ? 'B: none' : 'B: forming'}</text>
      <text x={560} y={565} textAnchor="middle" {...text}>{time === 0 ? 'Forward positive; reverse zero' : 'Both directions now continue'}</text>
      <text x={560} y={650} textAnchor="middle" {...text} fontSize={50}>Schematic conversion, not collision paths</text>
      <text x={560} y={720} textAnchor="middle" {...text} fontSize={50}>Closed keeps matter in. It is not insulated.</text>
    </> : mode === 'association' ? <>
      {no2(180, 300)}{no2(440, 300)}
      <text x={310} y={450} textAnchor="middle" {...text}>Two NO₂ molecules</text>
      <path d="M620 315 H700 M675 292 L700 315 L675 338 M700 365 H620 M645 342 L620 365 L645 388" fill="none" stroke={primary} strokeWidth={7}/>
      <path d="M815 300 H935 M815 300 L775 230 M815 300 L775 370 M935 300 L975 230 M935 300 L975 370" stroke={TOK.inkDim} strokeWidth={6}/>
      {atom(815, 300, 'N')}{atom(935, 300, 'N')}{atom(765, 220, 'O')}{atom(765, 380, 'O')}{atom(985, 220, 'O')}{atom(985, 380, 'O')}
      <text x={885} y={450} textAnchor="middle" {...text}>One N₂O₄ molecule</text>
      <text x={560} y={550} textAnchor="middle" {...text}>2 nitrogen atoms + 4 oxygen atoms</text>
      <text x={560} y={625} textAnchor="middle" {...text} fontSize={50}>Effective collision: energy + arrangement</text>
      <text x={560} y={700} textAnchor="middle" {...text} fontSize={50}>Activation energy: the reaction barrier</text>
    </> : mode === 'catalyst' ? <>
      {frame >= graphAt ? chart(true) : null}
      <text x={70} y={730} transform="rotate(-90 70 730)" {...text} fontSize={50}>Energy</text>
      <path d="M180 675 C350 675 350 590 480 590 S630 700 780 700 H990" fill="none" stroke={other} strokeWidth={6}/>
      <path d="M180 675 C350 675 350 640 480 640 S630 700 780 700 H990" fill="none" stroke={primary} strokeWidth={6}/>
      <text x={240} y={600} textAnchor="middle" {...text} fontSize={50}>Reactants</text><text x={1020} y={660} textAnchor="end" {...text} fontSize={50}>Products</text>
      <text x={575} y={765} textAnchor="middle" {...text} fontSize={50}>Schematic reaction coordinate (not time) →</text>
    </> : <>
      {chart(false)}
      {frame >= limitAt ? <g>
        <rect x={30} y={660} width={1060} height={108} rx={12} fill="white" stroke={TOK.inkDim} strokeWidth={2}/>
        <text x={560} y={706} textAnchor="middle" {...text} fontSize={50}>Equilibrium limit (not a finite time)</text>
        <text x={560} y={756} textAnchor="middle" {...text} fontSize={50}>{mode === 'rates' ? 'A ⇌ B: equal, non-zero rates' : 'A: more. B: less. Both conversions continue.'}</text>
      </g> : null}
    </>}
  </svg>;
};
