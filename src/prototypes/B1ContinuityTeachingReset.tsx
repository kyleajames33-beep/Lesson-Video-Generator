import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../docs/production/module5-starters-2026-10-10/biology/teaching-reset/lesson.json';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';

const ART = 'assets/biology/strawberry-runner-botanical-v1.png';
const GREEN = '#386348';
const BLUE = '#1f6fb2';
const AMBER = '#b86e0a';
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
export const B1_RESET_SCENES = lesson.scenes.map((scene, index, scenes) => ({
  ...scene, from: scenes.slice(0, index).reduce((sum, previous) => sum + previous.durationInFrames, 0),
}));
export const B1_RESET_FRAMES = B1_RESET_SCENES.reduce((sum, scene) => sum + scene.durationInFrames, 0);
type Scene = typeof B1_RESET_SCENES[number];
type Beat = Scene['teachingReset']['previewBeats'][number];

const Text = ({x, y, width = 1700, size = 50, color = TOK.ink, children}: {
  x: number; y: number; width?: number; size?: number; color?: string; children: React.ReactNode;
}) => <div style={{position: 'absolute', left: x, top: y, width, fontSize: size, fontWeight: 650, lineHeight: 1.16, color}}>{children}</div>;

/** Real artwork crops identify plant relationships. They are not growth animations. */
const PlantReference = ({x, y, width, height, parent = false, omitRunner = false}: {x: number; y: number; width: number; height: number; parent?: boolean; omitRunner?: boolean}) => {
  const scale = width / (parent ? 950 : 670);
  // For sexual-route context references, crop the connecting runner out. This is still not seedling art.
  const crop = omitRunner ? `polygon(0px 0px, ${width}px 0px, ${width}px ${height}px, 0px ${height}px, 0px ${335 * scale}px, ${345 * scale}px ${335 * scale}px, ${345 * scale}px ${290 * scale}px, 0px ${290 * scale}px)` : undefined;
  return <div style={{position: 'absolute', left: x, top: y, width, height, overflow: 'hidden', clipPath: crop}}>
    <Img src={staticFile(ART)} alt={parent ? 'Mature strawberry parent reference' : 'Established rooted strawberry daughter reference'}
      style={{position: 'absolute', width: 1672 * scale, height: 941 * scale, left: parent ? 0 : -1000 * scale, top: -(parent ? 60 : 290) * scale, mixBlendMode: 'multiply'}} />
  </div>;
};

const Runner = ({view}: {view: string}) => <>
  <Img src={staticFile(ART)} alt="Strawberry parent, connecting runner and rooted daughter plant" style={{position: 'absolute', left: 60, top: 310, width: 1100, height: 619, mixBlendMode: 'multiply'}} />
  <Text x={95} y={266} width={600} size={44} color={GREEN}>Parent plant</Text>
  <Text x={1210} y={690} width={590} size={44} color={GREEN}>Rooted offspring</Text>
  <svg width={1920} height={920} style={{position: 'absolute', inset: 0}} aria-hidden>
    <path d="M1200 715 L1010 715 L966 708" fill="none" stroke={GREEN} strokeWidth={3}/>
    {view === 'whole' || view === 'copy' ? <path d="M710 605 L710 663 L730 687" fill="none" stroke={GREEN} strokeWidth={3}/> : null}
  </svg>
  {view === 'whole' || view === 'copy' ? <Text x={630} y={550} width={350} size={44} color={GREEN}>Runner</Text> : null}
  {view === 'disease' ? <Text x={1210} y={785} width={620} size={48} color={AMBER}>New disease at the farm</Text> : null}
</>;

const Generations = ({inheritance}: {inheritance: boolean}) => <>
  <PlantReference x={100} y={350} width={620} height={495} parent/>
  <PlantReference x={760} y={470} width={400} height={400}/>
  <PlantReference x={1340} y={500} width={370} height={355}/>
  <Text x={100} y={300} width={520} size={44} color={GREEN}>Parent</Text>
  <Text x={730} y={395} width={470} size={44} color={GREEN}>Its offspring</Text>
  <Text x={1330} y={395} width={490} size={44} color={GREEN}>A later offspring</Text>
  <svg width={1920} height={930} style={{position: 'absolute', inset: 0}} aria-hidden>
    <path d="M590 450 L790 450 M1120 450 L1350 450" stroke={GREEN} strokeWidth={4} fill="none"/>
    <path d="M770 438 L790 450 L770 462 M1330 438 L1350 450 L1330 462" stroke={GREEN} strokeWidth={4} fill="none"/>
  </svg>
  <Text x={100} y={895} width={1700} size={34} color={TOK.inkDim}>{inheritance ? 'Stages shown at different times.' : 'An established offspring can later reproduce. Stages shown at different times.'}</Text>
</>;

const Comparison = ({disease = false, aid = false}: {disease?: boolean; aid?: boolean}) => <>
  <Text x={100} y={350} width={760} size={46} color={GREEN}>Runner offspring</Text>
  <Text x={1030} y={350} width={760} size={46} color={BLUE}>Offspring from a cross</Text>
  {[0, 1].map(index => <PlantReference key={'a' + index} x={100 + index * 360} y={460} width={320} height={300}/>) }
  {[0, 1].map(index => <PlantReference key={'b' + index} x={1030 + index * 360} y={460} width={320} height={300} omitRunner/>) }
  <Text x={100} y={780} width={760} size={44}>{disease ? 'May share the parent\'s weakness' : 'Inherited DNA: usually retains a parent combination'}</Text>
  <Text x={1030} y={780} width={760} size={44}>{disease ? 'Relevant differences may alter response' : 'Inherited DNA: combinations can differ'}</Text>
  {!disease ? <Text x={100} y={905} width={1700} size={31} color={TOK.inkDim}>Plant appearance alone does not show inherited differences.</Text> : null}
</>;

/** Magnified nonmotile plant sperm and egg model. DNA marks show selections, not chromosomes or traits. */
const CellPair = ({x, y, variant = 0, joined = false, joinProgress = 1}: {
  x: number; y: number; variant?: number; joined?: boolean; joinProgress?: number;
}) => {
  const spermX = joined ? 50 + 145 * joinProgress : 50;
  const colour = variant ? AMBER : BLUE;
  return <svg style={{position: 'absolute', left: x, top: y, width: 510, height: 280}} viewBox="0 0 510 280" role="img" aria-label="Magnified plant reproductive-cell schematic. Different DNA marks represent different inherited selections, not literal chromosome counts.">
    <ellipse cx={285} cy={145} rx={110} ry={92} fill="#edf1e9" stroke={GREEN} strokeWidth={4}/>
    <ellipse cx={295} cy={145} rx={42} ry={37} fill="#fbfaf5" stroke={GREEN} strokeWidth={2}/>
    <path d={variant ? 'M280 130 q20 10 0 20 q20 10 0 15' : 'M280 120 q30 10 0 20 q30 10 0 20'} stroke={GREEN} strokeWidth={6} fill="none"/>
    <g opacity={joined ? 1 - joinProgress : 1}>
      <ellipse cx={spermX} cy={145} rx={36} ry={28} fill="#e8eef2" stroke={colour} strokeWidth={3}/>
      <path d={variant ? `M${spermX - 10} 132 q20 8 0 16 q20 8 0 12` : `M${spermX - 10} 128 q18 12 0 22 q18 10 0 10`} fill="none" stroke={colour} strokeWidth={5}/>
    </g>
    {joined && joinProgress > 0.6 ? <path d={`M310 123 q${variant ? 18 : 25} 10 0 20 q18 10 0 16`} fill="none" stroke={colour} strokeWidth={5}/> : null}
    <text x={5} y={55} fontFamily={FONT_DISPLAY} fontSize={34} fontWeight={650} fill={colour}>{joined && joinProgress > 0.95 ? 'DNA from sperm' : 'Sperm cell'}</text>
    <text x={260} y={35} fontFamily={FONT_DISPLAY} fontSize={34} fontWeight={650} fill={GREEN}>{joined && joinProgress > 0.95 ? 'New cell' : 'Egg cell'}</text>
    <text x={8} y={270} fontFamily={FONT_DISPLAY} fontSize={30} fill={TOK.inkDim}>{joined ? 'Each contributes inherited DNA' : 'Reproductive cells carry inherited information'}</text>
  </svg>;
};

const Cross = ({view, local, beatAt}: {view: string; local: number; beatAt: number}) => {
  const pairing = view === 'pair-one' || view === 'pair-two';
  const parentsOnly = view === 'parents';
  const joining = view === 'cells-joined';
  const progress = interpolate(local - beatAt, [0, 45], [0, 1], clamp);
  return <>
    <PlantReference x={80} y={395} width={360} height={340} parent/>
    <PlantReference x={1470} y={395} width={360} height={340} parent/>
    <Text x={90} y={340} width={380} size={43} color={GREEN}>Parent 1</Text>
    <Text x={1460} y={340} width={390} size={43} color={BLUE}>Parent 2</Text>
    {parentsOnly ? <Text x={540} y={440} width={790} size={57}>Their inherited DNA differs.</Text> : pairing ? <>
      <Text x={490} y={370} width={540} size={40}>Possible joining 1</Text>
      <CellPair x={485} y={450} joined/>
      {view === 'pair-two' ? <><Text x={1020} y={370} width={540} size={40}>Possible joining 2</Text><CellPair x={1015} y={450} variant={1} joined/></> : null}
      <Text x={490} y={795} width={1060} size={34} color={TOK.inkDim}>Two possible joining events from the same parents.</Text>
    </> : view === 'offspring' ? <>
      <PlantReference x={695} y={425} width={430} height={390} omitRunner/>
      <Text x={570} y={820} width={790} size={40}>A later offspring can inherit DNA from both parents.</Text>
    </> : <>
      <Text x={650} y={325} width={760} size={43}>Joining happens inside a flower.</Text>
      <CellPair x={710} y={470} joined={joining} joinProgress={progress}/>
    </>}
    <Text x={100} y={895} width={1700} size={29} color={TOK.inkDim}>Magnified schematic. DNA marks represent inherited selections, not predicted traits.</Text>
  </>;
};

const Attempt = ({scene, feedback, view, holding}: {scene: Scene; feedback: boolean; view: string; holding: boolean}) => {
  const attempt = B1_RESET_SCENES.find(item => item.id === 'dry-soil-attempt')!.teachingReset.attempt!;
  return <>
    <Text x={90} y={295} size={48}>{attempt.goal}</Text>
    <Text x={90} y={395} width={770} size={49} color={GREEN}>{attempt.groupA}</Text>
    <Text x={1030} y={395} width={790} size={49} color={BLUE}>{attempt.groupB}</Text>
    <PlantReference x={150} y={530} width={305} height={240}/>
    <PlantReference x={1070} y={560} width={305} height={215} omitRunner/>
    <Text x={90} y={790} size={47}>{attempt.condition}</Text>
    <Text x={90} y={860} size={45}>Choose A or B. Explain why. Name one unknown result.</Text>
    {feedback ? <Text x={view === 'feedback-a' ? 480 : 1390} y={620} width={430} size={42} color={view === 'feedback-unknown' ? AMBER : BLUE}>
      {view === 'feedback-a' ? 'Usually keeps a combination' : view === 'feedback-unknown' ? 'Outcome still unknown' : 'Different combinations possible'}
    </Text> : holding ? <Text x={90} y={995} width={1750} size={32} color={TOK.inkDim}>Time to decide. Pause if you want longer.</Text> : null}
  </>;
};

export const B1ContinuityTeachingReset = () => {
  const frame = useCurrentFrame();
  const scene = B1_RESET_SCENES.find(item => frame >= item.from && frame < item.from + item.durationInFrames) ?? B1_RESET_SCENES.at(-1)!;
  const local = frame - scene.from;
  const beat: Beat = scene.teachingReset.previewBeats.reduce((active, item) => local >= item.at ? item : active, scene.teachingReset.previewBeats[0]);
  const hold = scene.id === 'dry-soil-attempt' && local >= scene.responseHold!.startFrame;
  const notes = scene.id === 'key-notes';
  const feedback = scene.id === 'dry-soil-feedback';
  const opacity = interpolate(local - beat.at, [0, 12], [0, 1], clamp);
  const sideLine = ['grower-hook', 'copying'].includes(scene.id) || (scene.id === 'continuity' && beat.view !== 'generations');
  return <AbsoluteFill style={{background: '#fafaf8', color: TOK.ink, fontFamily: FONT_DISPLAY}}>
    <div style={{position: 'absolute', left: 90, top: 52, fontFamily: FONT_MONO, fontSize: 25, letterSpacing: '0.07em', color: GREEN}}>BIOLOGY · REPRODUCTION</div>
    <Text x={90} y={145} width={1740} size={notes ? 60 : 64}>{scene.heading}</Text>
    {notes ? <>
      <div style={{position: 'absolute', left: 100, top: 290, width: 1690, display: 'grid', gap: 56, fontSize: 49, fontWeight: 550, lineHeight: 1.25}}>
        {scene.points!.map((point, index) => <div key={index}>{point}</div>)}
      </div>
      <Text x={100} y={885} width={1650} size={37} color={TOK.inkDim}>Pause if you would like more time to write.</Text>
    </> : scene.id === 'dry-soil-attempt' || feedback ? <Attempt scene={scene} feedback={feedback} view={beat.view} holding={hold}/> : <>
      {beat.view === 'generations' ? <Generations inheritance={local >= scene.durationInFrames * 0.6}/> : ['parents', 'cells', 'cells-joined', 'pair-one', 'pair-two', 'offspring'].includes(beat.view) ? <Cross view={beat.view} local={local} beatAt={beat.at}/> : beat.view === 'compare' ? <Comparison disease={scene.id === 'grower-tradeoff' && local < scene.durationInFrames * 0.75} aid={scene.id === 'grower-tradeoff' && local >= scene.durationInFrames * 0.75}/> : <Runner view={beat.view}/>}
      <div style={{opacity}}><Text x={sideLine ? 1220 : 100} y={sideLine ? 340 : 245} width={sideLine ? 610 : 1700} size={sideLine ? 61 : 50}>{beat.line}</Text></div>
    </>}
    {!hold && (feedback || (notes && local < scene.teachingReset.quietHoldStartFrame!)) ? <Text x={90} y={955} width={1740} size={feedback ? 38 : 32} color={TOK.inkDim}>{beat.line}</Text> : null}
  </AbsoluteFill>;
};

export const B1ContinuityTeachingResetReview = () => {
  const player = useRef<PlayerRef>(null);
  const [width, setWidth] = useState(960);
  const [selected, setSelected] = useState(0);
  const select = (index: number) => {setSelected(index); player.current?.pause(); player.current?.seekTo(B1_RESET_SCENES[index].from + 45);};
  return <main>
    <h1>B1: reproduction teaching reset</h1>
    <p>A new ten-scene teaching source, with conversational causes, a genuine dry-soil application and quiet notes. This silent Player uses estimated timings. The measured parent and its audio are preserved.</p>
    <p><strong>Visual limits:</strong> the real runner plate is present. Flower and seedling artwork is still missing. Plant-reference crops identify the cases; magnified cell schematics demonstrate joining and different inherited selections. These are not complete botanical mechanism visuals or a release approval.</p>
    <div className="controls">{B1_RESET_SCENES.map((scene, index) => <button key={scene.id} onClick={() => select(index)}>{scene.heading}</button>)}</div>
    <div className="controls"><button onClick={() => setWidth(width === 960 ? 480 : 960)}>View at {width === 960 ? 480 : 960} pixels</button><button onClick={() => {setSelected(0); player.current?.seekTo(0); player.current?.play();}}>Play from start</button><button onClick={() => {const attempt = B1_RESET_SCENES.find(item => item.id === 'dry-soil-attempt')!; player.current?.pause(); player.current?.seekTo(attempt.from + attempt.responseHold!.startFrame + 120);}}>Inspect answer-free attempt</button></div>
    <Player ref={player} component={B1ContinuityTeachingReset} durationInFrames={B1_RESET_FRAMES} fps={30} compositionWidth={1920} compositionHeight={1080} controls loop={false} style={{width, maxWidth: '100%'}}/>
    <h2>{B1_RESET_SCENES[selected].heading}</h2>
    <p>{B1_RESET_SCENES[selected].voiceover.text}</p>
    <details><summary>Read the complete new narration</summary>{B1_RESET_SCENES.map(scene => <section key={scene.id}><h3>{scene.heading}</h3><p>{scene.voiceover.text}</p></section>)}</details>
    <p>Current-stage text is selected instead of accumulating answer history. Every dry-soil demand and condition remains present during the attempt. Human listening, fresh audio alignment, complete playback and design judgement remain pending.</p>
  </main>;
};
if (typeof document !== 'undefined' && document.getElementById('b1-reset-review-root')) createRoot(document.getElementById('b1-reset-review-root')!).render(<B1ContinuityTeachingResetReview/>);
