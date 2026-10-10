import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {FadeUp} from '../animations/FadeUp';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';

export const RUNNER_PILOT_FRAMES = 1800;
export const RUNNER_PILOT_BEATS = [
  {at: 0, label: 'See the whole plant'},
  {at: 240, label: 'Follow the runner'},
  {at: 510, label: 'Look at the new plant'},
  {at: 720, label: 'Why roots and leaves matter'},
  {at: 960, label: 'Growing separately'},
  {at: 1200, label: 'What asexual means'},
  {at: 1500, label: 'Key notes'},
];
const ART = 'assets/biology/strawberry-runner-botanical-v1.png';
const GREEN = '#386348';
const Label = ({x, y, children}: {x: number; y: number; children: React.ReactNode}) =>
  <div style={{position: 'absolute', left: x, top: y, fontSize: 46, fontWeight: 650, lineHeight: 1.15, color: GREEN}}>{children}</div>;

/** Explain one completed botanical illustration. No painted growth is simulated. */
export const PlantRunnerDesignPilot = () => {
  const frame = useCurrentFrame();
  const beat = RUNNER_PILOT_BEATS.reduce((active, item, index) => frame >= item.at ? index : active, 0);
  const local = frame - RUNNER_PILOT_BEATS[beat].at;
  const reveal = interpolate(local, [12, 40], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sentences = [
    'A strawberry plant can make a new plant from a stem.',
    'A runner is a stem that stretches across the soil.',
    'The new plant has its own roots and leaves.',
    'Its roots take up water. Its leaves make food in light.',
    'Once established, it can grow separately.',
    'No sperm and egg join. This is asexual reproduction.',
  ];
  return <AbsoluteFill style={{background: '#fafaf8', color: TOK.ink, fontFamily: FONT_DISPLAY}}>
    <div style={{position: 'absolute', left: 90, top: 52, fontFamily: FONT_MONO, fontSize: 25, letterSpacing: '0.07em', color: GREEN}}>BIOLOGY · STRAWBERRY RUNNERS</div>
    {beat < 3 ? <>
      <Img src={staticFile(ART)} style={{position: 'absolute', left: 60, top: 150, width: 1300, height: 731.64, mixBlendMode: 'multiply'}} />
      <FadeUp key={beat} delay={RUNNER_PILOT_BEATS[beat].at + 8} durationFrames={18} dy={12}>
        <div style={{position: 'absolute', left: 1160, top: 160, width: 655, fontSize: 74, fontWeight: 720, lineHeight: 1.08, letterSpacing: '-0.025em'}}>{sentences[beat]}</div>
      </FadeUp>
      <div style={{opacity: reveal}}>
        {beat === 0 ? <><Label x={110} y={122}>Parent plant</Label><Label x={1390} y={585}>New plant</Label></> : null}
        {beat === 1 ? <Label x={780} y={490}>Runner</Label> : null}
        {beat === 2 ? <><Label x={1390} y={580}>Leaves</Label><Label x={1390} y={745}>Roots</Label></> : null}
        <svg width={1920} height={900} style={{position: 'absolute', inset: 0}} aria-hidden>
          <g fill="none" stroke={GREEN} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          {beat === 0 ? <path d="M1380 620 L1170 620 L1117 642" /> : null}
          {beat === 1 ? <path d="M890 545 L890 582 L875 598" /> : null}
          {beat === 2 ? <><path d="M1375 610 L1280 610 L1195 520" /><path d="M1375 775 L1235 775 L1160 751" /></> : null}
          </g>
        </svg>
      </div>
    </> : <>
      <svg viewBox="1000 300 672 641" style={{position: 'absolute', left: 1190, top: 300, width: 610, height: 570, mixBlendMode: 'multiply'}} role="img" aria-label="Detail of the already rooted daughter strawberry plant in the same illustration.">
        <image href={staticFile(ART)} width={1672} height={941}/>
      </svg>
      {beat < 6 ? <FadeUp key={beat} delay={RUNNER_PILOT_BEATS[beat].at + 8} durationFrames={18} dy={12}>
        <div style={{position: 'absolute', left: 100, top: 220, width: 1010, fontSize: 88, fontWeight: 720, lineHeight: 1.12, letterSpacing: '-0.025em'}}>{sentences[beat]}</div>
      </FadeUp> : <>
        <div style={{position: 'absolute', left: 100, top: 165, fontSize: 58, fontWeight: 720, lineHeight: 1.15}}>Key notes: what to write in your book</div>
        <div style={{position: 'absolute', left: 100, top: 315, width: 1100, display: 'grid', gap: 45, fontSize: 54, fontWeight: 550, lineHeight: 1.2}}>
          <div>A runner is a stem.</div>
          <div>A new plant grows roots and leaves.</div>
          <div>No sperm and egg join: asexual reproduction.</div>
        </div>
        <div style={{position: 'absolute', left: 105, top: 805, fontSize: 36, color: TOK.inkDim}}>Pause if you would like more time to write.</div>
      </>}
    </>}
  </AbsoluteFill>;
};

export const PlantRunnerPilotReview = () => {
  const player = useRef<PlayerRef>(null);
  const [width, setWidth] = useState(960);
  return <main><h1>Plant runner: painted visual direction pilot</h1>
    <p>A 60-second silent design sample, with new narration still to come. One completed botanical illustration is explained over time.</p>
    <p><strong>Human taste review pending.</strong> This is not a finished lesson or a release approval.</p>
    <div className="controls">{RUNNER_PILOT_BEATS.map(beat => <button key={beat.at} onClick={() => {player.current?.pause(); player.current?.seekTo(beat.at + 60);}}>{beat.label}</button>)}</div>
    <div className="controls"><button onClick={() => setWidth(width === 960 ? 480 : 960)}>View at {width === 960 ? 480 : 960} pixels</button><button onClick={() => {player.current?.seekTo(0); player.current?.play();}}>Play from start</button></div>
    <Player ref={player} component={PlantRunnerDesignPilot} durationInFrames={RUNNER_PILOT_FRAMES} fps={30} compositionWidth={1920} compositionHeight={1080} controls loop={false} style={{width, maxWidth: '100%'}} />
    <p>Review the botanical illustration, clear labels and explanation at both sizes.</p>
  </main>;
};
if (typeof document !== 'undefined' && document.getElementById('pilot-review-root')) createRoot(document.getElementById('pilot-review-root')!).render(<PlantRunnerPilotReview/>);
