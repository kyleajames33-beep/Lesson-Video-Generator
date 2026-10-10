import {interpolate, useCurrentFrame} from 'remotion';
import type {CalculationPresentation} from '../../lesson/types';
import {FadeUp} from '../../animations/FadeUp';
import {MathText} from './MathText';
import {Eyebrow} from './Eyebrow';
import {FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const currentContext = (presentation: CalculationPresentation, frame: number) => {
  const contexts = presentation.focusedContext;
  if (!contexts) return null;
  if (!contexts.length || contexts[0].at !== 0 || contexts.some((context, index) =>
    !Number.isInteger(context.at) || context.at < 0 || (index > 0 && context.at <= contexts[index - 1].at))) {
    throw new Error('Focused context needs an initial case and increasing local frame cues.');
  }
  return contexts.reduce((active, context) => frame >= context.at ? context : active, contexts[0]);
};

// Selected evidence tasks use the full width for stable supplied information.
// Existing quantitative presentations keep their original component.
export const Module5CalculationProblem = ({presentation, eyebrow, delay, prompt, promptOpacity = 1}: {
  presentation: CalculationPresentation; eyebrow: string; delay: number;
  prompt?: string; promptOpacity?: number;
}) => {
  const theme = useAccent();
  const frame = useCurrentFrame();
  const context = currentContext(presentation, frame);
  const captionSafe = presentation.captionSafeWorking === true;
  if (context) return <>
    <div data-calculation-header style={{position: 'absolute', top: 142, left: 64, right: 64}}>
      <Eyebrow color={TOK.inkDim}>{eyebrow}</Eyebrow>
      <FadeUp delay={delay} durationFrames={16} dy={18}>
        <div data-calculation-task style={{marginTop: 12, fontSize: 62, fontWeight: 720, lineHeight: 1.12, letterSpacing: '-0.02em'}}>{context.task ?? presentation.task}</div>
        {context.secondaryTask ? <div data-calculation-secondary-task style={{marginTop: 12, fontSize: 44, lineHeight: 1.2}}>{context.secondaryTask}</div> : null}
        {context.equation ? <div data-calculation-equation style={{marginTop: 12, fontFamily: FONT_MONO, fontSize: 48, fontWeight: 600, color: theme.accent, lineHeight: 1.15}}>{context.equation}</div> : null}
      </FadeUp>
    </div>
    <div data-calculation-focused-context={context.at} style={{position: 'absolute', top: context.equation ? 410 : 350, left: 64, width: 670}}>
      <FadeUp delay={delay} durationFrames={16} dy={12}>
        <div style={{padding: '20px 24px', borderLeft: `5px solid ${theme.accent}`, background: TOK.card}}>
          <div style={{fontSize: 48, fontWeight: 650, lineHeight: 1.15, color: theme.accent, marginBottom: 18}}>{context.title}</div>
          <div style={{display: 'grid', gap: 18}}>{context.lines.map((line, index) => <div key={index} data-calculation-context-line style={{fontSize: 50, lineHeight: 1.18}}>{line}</div>)}</div>
        </div>
      </FadeUp>
    </div>
    {prompt ? <div style={{position: 'absolute', left: 774, right: 64, top: 780, opacity: promptOpacity, fontSize: 44, lineHeight: 1.18, color: TOK.inkDim}}>{prompt}</div> : null}
  </>;
  return <>
    <div data-calculation-header style={{position: 'absolute', top: 142, left: 64, right: 64}}>
      <Eyebrow color={TOK.inkDim}>{eyebrow}</Eyebrow>
      <FadeUp delay={delay} durationFrames={16} dy={18}>
        <div data-calculation-task style={{marginTop: 12, fontSize: 62, fontWeight: 720, lineHeight: 1.12, letterSpacing: '-0.02em'}}>{presentation.task}</div>
        {presentation.equation ? <div data-calculation-equation style={{marginTop: 12, fontFamily: FONT_MONO, fontSize: 52, fontWeight: 600, color: theme.accent, lineHeight: 1.15}}>{presentation.equation}</div> : null}
      </FadeUp>
    </div>
    <div data-calculation-givens style={{position: 'absolute', top: 330, left: 64, right: 64}}>
      <FadeUp delay={delay} durationFrames={16} dy={16}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24}}>
          {presentation.givens.map(given => <div key={given.label} data-calculation-given style={{padding: captionSafe ? '12px 24px' : '16px 24px', border: `1px solid ${TOK.rule}`, borderLeft: `5px solid ${theme.accent}`, background: TOK.card}}>
            <div style={{display: 'flex', gap: 24, alignItems: 'baseline', justifyContent: 'space-between', fontSize: 58, lineHeight: 1.15}}>
              <span style={{fontWeight: 650}}>{given.label}</span><span style={{fontFamily: FONT_MONO, fontSize: 54, fontWeight: 600, whiteSpace: 'nowrap'}}>{given.value}</span>
            </div>
            {given.reference ? <div style={{marginTop: 10, fontSize: 52, color: TOK.ink, lineHeight: 1.15}}>{given.reference}</div> : null}
          </div>)}
        </div>
        {presentation.references?.length ? <div style={{marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24}}>
          {presentation.references.map(reference => <div key={reference.label} style={{fontSize: 52, lineHeight: 1.15}}><span style={{fontWeight: 650}}>{reference.label}: </span>{reference.value}</div>)}
        </div> : null}
        {presentation.note ? <div data-calculation-note style={{marginTop: 16, paddingTop: 12, borderTop: `1px solid ${TOK.rule}`, fontSize: 52, lineHeight: 1.15, color: TOK.ink}}>{presentation.note}</div> : null}
        {prompt ? <div style={{marginTop: 12, opacity: promptOpacity, fontSize: 48, lineHeight: 1.15, color: TOK.inkDim}}>{prompt}</div> : null}
      </FadeUp>
    </div>
  </>;
};

export const Module5FocusedWorking = ({presentation, delays, earliestFrame = 0}: {
  presentation: CalculationPresentation; delays: number[]; earliestFrame?: number;
}) => {
  const frame = useCurrentFrame();
  const theme = useAccent();
  const captionSafe = presentation.captionSafeWorking === true;
  const focused = Boolean(presentation.focusedContext);
  const context = currentContext(presentation, frame);
  if (delays.length !== presentation.stages.length) throw new Error('Module 5 stages must match the authored step cues.');
  const cues = delays.map(delay => Math.max(earliestFrame, delay));
  const activeIndex = cues.reduce((index, cue, i) => frame >= cue ? i : index, -1);
  if (activeIndex < 0) return null;
  // A newly spoken case replaces the old answer before its own reasoning cue.
  if (context && context.at > cues[activeIndex]) return null;
  const active = presentation.stages[activeIndex];
  const opacity = interpolate(frame, [cues[activeIndex], cues[activeIndex] + 16], [0, 1], clamp);
  const isFinal = activeIndex === presentation.stages.length - 1;
  return <div data-calculation-working style={{position: 'absolute', top: focused ? context?.equation ? 410 : 350 : captionSafe ? 600 : 680, left: focused ? 774 : 64, right: 64, display: 'grid', gridTemplateColumns: focused ? 'minmax(0, 1fr)' : 'minmax(0, 1fr) 560px', gap: 30}}>
    <div data-calculation-active={activeIndex} style={{opacity, padding: captionSafe ? '14px 24px' : '18px 24px', background: TOK.card, border: `1px solid ${TOK.rule}`, borderTop: `5px solid ${isFinal ? TOK.amber : theme.accent}`}}>
      <div data-calculation-stage-label style={{fontSize: 48, lineHeight: 1.12, fontWeight: 650, color: theme.accent, marginBottom: captionSafe ? 12 : 16}}>{active.label}</div>
      <div style={{display: 'grid', gap: 8}}>
        {active.lines.map((line, index) => {
          const lineCue = Math.max(cues[activeIndex], active.lineAts?.[index] ?? cues[activeIndex]);
          const lineOpacity = interpolate(frame, [lineCue, lineCue + 16], [0, 1], clamp);
          return <div key={index} data-calculation-line style={{opacity: lineOpacity, fontSize: 58, lineHeight: 1.16, fontWeight: 600, color: isFinal ? TOK.amberInk : TOK.ink}}><MathText text={line} isFinal={isFinal} /></div>;
        })}
      </div>
    </div>
    {!focused && activeIndex > 0 ? <div data-calculation-trail>
      <div style={{fontFamily: FONT_MONO, fontSize: 26, color: TOK.inkDim, marginBottom: 8}}>ESTABLISHED</div>
      {presentation.stages.slice(0, activeIndex).map((stage, index) => <div key={index} data-calculation-result={index} style={{padding: captionSafe ? '4px 0' : '10px 0', borderBottom: `1px solid ${TOK.rule}`, fontSize: 44, lineHeight: 1.13}}>{stage.summary}</div>)}
    </div> : null}
  </div>;
};
