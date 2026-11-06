import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../kit';

export const Heading: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{position: 'absolute', left: 100, top: 112, right: 100, fontFamily: FONT_HAND, fontSize: 53, lineHeight: 1.12, color: INK}}>{children}</div>;
export const Chip: React.FC<{children: React.ReactNode; dim?: boolean; cross?: boolean; circle?: boolean}> = ({children, dim, cross, circle}) => <div style={{position: 'relative', fontFamily: FONT_DISPLAY, color: dim ? INK_SOFT : INK, fontSize: 29, padding: '12px 16px', marginBottom: 14, border: '1px solid #d6cdbd', borderRadius: 8, background: '#fffaf2'}}><span style={{position:'relative',display:'inline-block'}}>{children}{circle && <span aria-hidden style={{position:'absolute',inset:'-0.12em -0.18em',border:'2px solid #8a5a12',borderRadius:'50%',pointerEvents:'none'}}/>}{cross && <svg aria-hidden style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} preserveAspectRatio="none" viewBox="0 0 100 30"><path d="M1 16 Q50 14 99 16" stroke={INK_SOFT} strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>}</span></div>;

/** The complete task remains visible during the measured response hold. */
export const QuestionCard: React.FC<{children: React.ReactNode; hold?: {startFrame: number; endFrame: number}; compact?: boolean}> = ({children, hold, compact}) => {
 const f = useCurrentFrame();
 if (compact) return <div style={{position: 'absolute', left: 130, top: 110, width: 1650, padding: '15px 22px', fontFamily: FONT_DISPLAY, fontSize: 28, lineHeight: 1.4, color: INK, border: '1px solid #d6cdbd', borderRadius: 8}}>{children}</div>;
 return <><Heading>Your turn</Heading><div style={{position: 'absolute', left: 160, top: 270, width: 1500, padding: 45, border: '2px solid #d6cdbd', borderRadius: 16, fontFamily: FONT_DISPLAY, color: INK, fontSize: 45, lineHeight: 1.65}}>{children}</div>{hold && f >= hold.startFrame && <><svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}><Countdown start={hold.startFrame} end={hold.endFrame} x={1690} y={855}/></svg><div style={{position: 'absolute', left: 180, top: 855, fontFamily: FONT_DISPLAY, fontSize: 32}}>Pause here to answer.</div></>}</>;
};

/** Series rule: notes return to the handoff in the final one-second crossfade. */
export const KeyNotes: React.FC<{children: React.ReactNode; handoff: React.ReactNode; durationInFrames: number; fps?: number}> = ({children, handoff, durationInFrames, fps = 30}) => {
 const f = useCurrentFrame(), amount = Math.max(0, Math.min(1, (f - (durationInFrames - fps)) / (fps - 1)));
 return <><div style={{opacity: 1 - amount}}>{children}</div>{amount > 0 && <div style={{opacity: amount}}>{handoff}</div>}</>;
};
/** A cue-linked mark stays attached to the exact mathematical glyph it names. */
export const CueMathMark: React.FC<{children: React.ReactNode; active?: boolean; kind?: 'circle'|'underline'}> = ({children,active=false,kind='circle'}) => <span style={{position:'relative',display:'inline-block',borderBottom:kind==='underline'&&active?'3px solid #8a5a12':undefined}}>{children}{kind==='circle'&&active&&<span aria-hidden style={{position:'absolute',inset:'-0.12em -0.2em',border:'2px solid #8a5a12',borderRadius:'50%',transform:'rotate(-4deg)',pointerEvents:'none'}}/>}</span>;
