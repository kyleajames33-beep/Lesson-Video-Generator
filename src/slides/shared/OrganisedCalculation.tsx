import {interpolate, useCurrentFrame} from 'remotion';
import type {CalculationPresentation} from '../../lesson/types';
import {FadeUp} from '../../animations/FadeUp';
import {MathText} from './MathText';
import {Eyebrow} from './Eyebrow';
import {FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {Module5CalculationProblem, Module5FocusedWorking} from './Module5EvidenceBoard';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const labelStyle = {fontFamily: FONT_MONO, fontSize: 22, letterSpacing: '0.08em', color: TOK.inkDim};

export const CalculationProblem = ({presentation, eyebrow, delay, prompt, promptOpacity = 1}: {
  presentation: CalculationPresentation;
  eyebrow: string;
  delay: number;
  prompt?: string;
  promptOpacity?: number;
}) => {
  const theme = useAccent();
  if (presentation.layout === 'module5Evidence') return <Module5CalculationProblem presentation={presentation} eyebrow={eyebrow} delay={delay} prompt={prompt} promptOpacity={promptOpacity} />;
  return <>
    <div data-calculation-header style={{position: 'absolute', top: 142, left: 64, right: 64}}>
      <Eyebrow color={TOK.inkDim}>{eyebrow}</Eyebrow>
      <FadeUp delay={delay} durationFrames={16} dy={18}>
        <div data-calculation-task style={{marginTop: 16, fontSize: 52, fontWeight: 720, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: 1510}}>{presentation.task}</div>
        {presentation.equation ? <div data-calculation-equation style={{marginTop: 18, fontFamily: FONT_MONO, fontSize: 42, fontWeight: 600, color: theme.accent, lineHeight: 1.2}}>{presentation.equation}</div> : null}
      </FadeUp>
    </div>
    <div data-calculation-givens style={{position: 'absolute', top: 344, left: 64, width: 510}}>
      <FadeUp delay={delay} durationFrames={16} dy={16}>
        <div style={{...labelStyle, marginBottom: 18}}>GIVEN</div>
        <div style={{display: 'grid', gap: 12}}>
          {presentation.givens.map(given => <div key={given.label} data-calculation-given style={{padding: '14px 20px', border: `1px solid ${TOK.rule}`, borderLeft: `4px solid ${theme.accent}`, background: TOK.card}}>
            <div style={{display: 'flex', flexDirection: given.value.length > 10 ? 'column' : 'row', gap: given.value.length > 10 ? 8 : 18, alignItems: 'baseline', justifyContent: 'space-between', fontSize: 34, lineHeight: 1.2}}>
              <span style={{fontWeight: 600, fontSize: given.value.length > 10 ? 26 : 34}}>{given.label}</span><span style={{fontFamily: FONT_MONO, fontWeight: 600, whiteSpace: 'nowrap'}}>{given.value}</span>
            </div>
            {given.reference ? <div style={{marginTop: 10, fontSize: 26, color: TOK.inkDim, lineHeight: 1.2}}>{given.reference}</div> : null}
          </div>)}
        </div>
        {presentation.references?.length ? <div style={{marginTop: 24, display: 'grid', gap: 10}}>
          <div style={labelStyle}>ALSO SUPPLIED</div>
          {presentation.references.map(reference => <div key={reference.label} style={{fontSize: 26, lineHeight: 1.3}}><span style={{color: TOK.inkDim}}>{reference.label}: </span>{reference.value}</div>)}
        </div> : null}
        {presentation.note ? <div data-calculation-note style={{marginTop: 24, paddingTop: 18, borderTop: `1px solid ${TOK.rule}`, fontSize: 26, lineHeight: 1.35, color: TOK.inkDim}}>{presentation.note}</div> : null}
        {prompt ? <div style={{marginTop: 24, opacity: promptOpacity, color: TOK.inkDim, fontSize: 26, lineHeight: 1.35, fontStyle: 'italic'}}>{prompt}</div> : null}
      </FadeUp>
    </div>
  </>;
};

export const FocusedWorking = ({presentation, delays, earliestFrame = 0}: {
  presentation: CalculationPresentation;
  delays: number[];
  earliestFrame?: number;
}) => {
  const frame = useCurrentFrame();
  const theme = useAccent();
  if (presentation.layout === 'module5Evidence') return <Module5FocusedWorking presentation={presentation} delays={delays} earliestFrame={earliestFrame} />;
  if (delays.length !== presentation.stages.length) throw new Error('Calculation stages must match the recorded step cues.');
  const cues = delays.map(delay => Math.max(earliestFrame, delay));
  const activeIndex = cues.reduce((index, cue, i) => frame >= cue ? i : index, -1);
  if (activeIndex < 0) return null;
  const active = presentation.stages[activeIndex];
  const opacity = interpolate(frame, [cues[activeIndex], cues[activeIndex] + 16], [0, 1], clamp);
  const isFinal = activeIndex === presentation.stages.length - 1;
  const size = active.lines.some(line => line.length > 62) ? 36 : 42;
  return <div data-calculation-working style={{position: 'absolute', top: 344, left: 634, right: 64}}>
    <div data-calculation-active={activeIndex} style={{minHeight: 280, opacity, padding: '22px 28px', background: TOK.card, border: `1px solid ${TOK.rule}`, borderTop: `4px solid ${isFinal ? TOK.amber : theme.accent}`}}>
      <div style={{display: 'flex', gap: 18, alignItems: 'baseline', marginBottom: 24}}>
        <span style={{fontFamily: FONT_MONO, fontSize: 28, color: theme.accent}}>{String(activeIndex + 1).padStart(2, '0')}</span>
        <div data-calculation-stage-label style={{fontSize: 32, lineHeight: 1.2, fontWeight: 650}}>{active.label}</div>
      </div>
      <div style={{display: 'grid', gap: 16}}>
        {active.lines.map((line, index) => {
          const lineCue = Math.max(cues[activeIndex], active.lineAts?.[index] ?? cues[activeIndex]);
          const lineOpacity = interpolate(frame, [lineCue, lineCue + 16], [0, 1], clamp);
          return <div key={index} data-calculation-line style={{opacity: lineOpacity, fontFamily: FONT_MONO, fontSize: size, lineHeight: 1.3, letterSpacing: '-0.035em', fontWeight: 600, color: isFinal ? TOK.amberInk : TOK.ink}}><MathText text={line} isFinal={isFinal} /></div>;
        })}
      </div>
    </div>
    {activeIndex > 0 ? <div data-calculation-trail style={{marginTop: 24}}>
      <div style={{...labelStyle, marginBottom: 12}}>ESTABLISHED SO FAR</div>
      {presentation.stages.slice(0, activeIndex).map((stage, index) => <div key={index} data-calculation-result={index} style={{display: 'grid', gridTemplateColumns: '44px minmax(0, 1fr)', alignItems: 'baseline', gap: 16, padding: '8px 0', borderBottom: `1px solid ${TOK.rule}`, fontSize: 30, lineHeight: 1.25}}>
        <span style={{fontFamily: FONT_MONO, color: theme.accent, fontSize: 22}}>{String(index + 1).padStart(2, '0')}</span><span>{stage.summary}</span>
      </div>)}
    </div> : null}
  </div>;
};
