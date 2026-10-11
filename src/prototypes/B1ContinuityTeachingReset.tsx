import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, Img, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import draft from '../../docs/production/module5-starters-2026-10-10/biology/teaching-reset/lesson.json';
import type {LessonData, SceneData} from '../lesson/types';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';

const ART = 'assets/biology/strawberry-runner-botanical-v1.png';
const FLOWER = 'assets/biology/strawberry-flower-botanical-b1-v1.png';
const SEEDLING = 'assets/biology/strawberry-seedling-botanical-b1-v1.png';
const SEED = 'assets/biology/strawberry-seed-cutaway-b1-v1.png';
const GREEN = '#386348';
const BLUE = '#1f6fb2';
const AMBER = '#b86e0a';
const dnaPath = (variant: number, x: number, y: number) => variant ? `M${x} ${y} q22 10 0 20 q-22 10 0 20` : `M${x} ${y} l18 10 l-18 10 l18 10 l-18 10`;
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
export const B1_RESET_SCENES = draft.scenes.map((scene, index, scenes) => ({
  ...scene, from: scenes.slice(0, index).reduce((sum, previous) => sum + previous.durationInFrames, 0),
}));
export const B1_RESET_FRAMES = B1_RESET_SCENES.reduce((sum, scene) => sum + scene.durationInFrames, 0);
type Beat = {at: number; line: string; view: string; spokenCue?: string};
type AttemptData = {goal: string; groupA: string; groupB: string; condition: string};
type TeachingReset = {previewBeats: Beat[]; quietHoldStartFrame?: number; attempt?: AttemptData};
type B1Scene = SceneData & {heading?: string; points?: string[]; teachingReset?: unknown};
const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;
// A selected measured lesson keeps its own cues, task facts and notes. Unknown custom data is checked at this boundary.
const readReset = (scene: SceneData): TeachingReset => {
  const value = (scene as B1Scene).teachingReset;
  if (!isRecord(value) || !Array.isArray(value.previewBeats) || !value.previewBeats.length || !value.previewBeats.every(beat => isRecord(beat) && typeof beat.at === 'number' && Number.isFinite(beat.at) && typeof beat.line === 'string' && typeof beat.view === 'string')) throw new Error(`B1 scene ${scene.id} needs valid local teaching cues.`);
  return value as unknown as TeachingReset;
};
const readAttempt = (lesson: LessonData): AttemptData => {
  const scene = lesson.scenes.find(item => item.id === 'dry-soil-attempt');
  const value = scene ? readReset(scene).attempt : undefined;
  if (!value || !['goal', 'groupA', 'groupB', 'condition'].every(key => typeof value[key as keyof AttemptData] === 'string')) throw new Error('B1 selected lesson needs the complete dry-soil task.');
  return value;
};

const Text = ({x, y, width = 1700, size = 50, color = TOK.ink, children}: {
  x: number; y: number; width?: number; size?: number; color?: string; children: React.ReactNode;
}) => <div style={{position: 'absolute', left: x, top: y, width, fontSize: size, fontWeight: 650, lineHeight: 1.16, color}}>{children}</div>;

/** Real artwork crops identify plant relationships. They are not growth animations. */
const PlantReference = ({x, y, width, height, parent = false}: {x: number; y: number; width: number; height: number; parent?: boolean}) => {
  const scale = width / (parent ? 950 : 670);
  return <div style={{position: 'absolute', left: x, top: y, width, height, overflow: 'hidden'}}>
    <Img src={staticFile(ART)} alt={parent ? 'Mature strawberry parent reference' : 'Established rooted strawberry daughter reference'}
      style={{position: 'absolute', width: 1672 * scale, height: 941 * scale, left: parent ? 0 : -1000 * scale, top: -(parent ? 60 : 290) * scale, mixBlendMode: 'multiply'}} />
  </div>;
};
const Botanical = ({art, x, y, width, height, alt}: {art: string; x: number; y: number; width: number; height: number; alt: string}) => <Img src={staticFile(art)} alt={alt} style={{position: 'absolute', left: x, top: y, width, height, objectFit: 'contain', mixBlendMode: 'multiply'}}/>;
const Seedling = ({x, y, width, height}: {x: number; y: number; width: number; height: number}) => <Botanical art={SEEDLING} x={x} y={y} width={width} height={height} alt="Young seed-grown strawberry with cotyledons, true leaves and roots, without a runner"/>;
const DnaMarks = ({x, y, variant = 0, label = false}: {x: number; y: number; variant?: number; label?: boolean}) => <svg style={{position: 'absolute', left: x, top: y, width: 245, height: 95}} viewBox="0 0 245 95" role="img" aria-label={`Symbolic inherited DNA combination ${variant + 1}; no trait outcome shown`}>
  <path d={dnaPath(variant, 35, 5)} stroke={GREEN} strokeWidth={5} fill="none"/>
  <path d={dnaPath(1 - variant, 95, 5)} stroke={BLUE} strokeWidth={5} fill="none"/>
  {label ? <text x={0} y={85} fontFamily={FONT_DISPLAY} fontSize={28} fill={TOK.inkDim}>DNA combination {variant + 1}</text> : null}
</svg>;

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
  {[0, 1].map(index => <React.Fragment key={'b' + index}><Seedling x={1030 + index * 360} y={420} width={260} height={335}/><DnaMarks x={1230 + index * 360} y={650} variant={index}/></React.Fragment>) }
  <Text x={100} y={780} width={760} size={44}>{disease ? 'May share the parent\'s weakness' : 'Inherited DNA: usually retains a parent combination'}</Text>
  <Text x={1030} y={780} width={760} size={44}>{disease ? 'Relevant differences may alter response' : 'Inherited DNA: combinations can differ'}</Text>
  {!disease ? <Text x={100} y={905} width={1700} size={31} color={TOK.inkDim}>Plant appearance alone does not show inherited differences.</Text> : null}
</>;

/** Magnified nonmotile plant sperm and egg model. DNA marks show selections, not chromosomes or traits. */
const CellPair = ({x, y, variant = 0, joined = false, joinProgress = 1, scale = 1}: {
  x: number; y: number; variant?: number; joined?: boolean; joinProgress?: number; scale?: number;
}) => {
  const spermX = joined ? 50 + 145 * joinProgress : 50;
  const colour = BLUE;
  return <svg style={{position: 'absolute', left: x, top: y, width: 510 * scale, height: 280 * scale}} viewBox="0 0 510 280" role="img" aria-label="Magnified plant reproductive-cell schematic. Different DNA marks represent different inherited selections, not literal chromosome counts.">
    <ellipse cx={285} cy={145} rx={110} ry={92} fill="#edf1e9" stroke={GREEN} strokeWidth={4}/>
    <ellipse cx={295} cy={145} rx={42} ry={37} fill="#fbfaf5" stroke={GREEN} strokeWidth={2}/>
    <path d={dnaPath(variant, 280, 120)} stroke={GREEN} strokeWidth={5} fill="none"/>
    <g opacity={joined ? 1 - joinProgress : 1}>
      <ellipse cx={spermX} cy={145} rx={36} ry={28} fill="#e8eef2" stroke={colour} strokeWidth={3}/>
      <path d={dnaPath(1 - variant, spermX - 10, 125)} fill="none" stroke={colour} strokeWidth={4}/>
    </g>
    {joined && joinProgress > 0.6 ? <path d={dnaPath(1 - variant, 310, 120)} fill="none" stroke={colour} strokeWidth={5}/> : null}
    {!(joined && joinProgress > 0.95) ? <text x={5} y={55} fontFamily={FONT_DISPLAY} fontSize={34} fontWeight={650} fill={colour}>Sperm cell</text> : null}
    <text x={260} y={35} fontFamily={FONT_DISPLAY} fontSize={34} fontWeight={650} fill={GREEN}>{joined && joinProgress > 0.95 ? 'New cell' : 'Egg cell'}</text>
    {scale >= 1 ? <text x={8} y={270} fontFamily={FONT_DISPLAY} fontSize={30} fill={TOK.inkDim}>{joined ? 'DNA from egg and sperm' : 'Each carries inherited DNA'}</text> : null}
  </svg>;
};

const Cross = ({view, local, viewStartAt}: {view: string; local: number; viewStartAt: number}) => {
  const pairing = view === 'pair-one' || view === 'pair-two';
  const parentsOnly = view === 'parents';
  const joining = view === 'cells-joined';
  const progress = interpolate(local - viewStartAt, [0, 45], [0, 1], clamp);
  const flowerX = pairing ? 80 : 130;
  const flowerY = pairing ? 480 : 405;
  const flowerSize = pairing ? 310 : 465;
  const flowerPointX = flowerX + flowerSize * 0.54;
  const flowerPointY = flowerY + flowerSize * 0.46;
  const pathway = view === 'seed' || view === 'seedling';
  return <>
    {parentsOnly ? <>
      <PlantReference x={120} y={430} width={580} height={430} parent/>
      <PlantReference x={1170} y={430} width={580} height={430} parent/>
      <Text x={150} y={370} width={650} size={43} color={GREEN}>Parent 1</Text>
      <Text x={1200} y={370} width={650} size={43} color={BLUE}>Parent 2</Text>
      <DnaMarks x={620} y={610}/><DnaMarks x={1700} y={610} variant={1}/>
    </> : <>
      <Botanical art={FLOWER} x={flowerX} y={flowerY} width={flowerSize} height={flowerSize} alt="Strawberry flower with five white petals, yellow anthers and many separate pistils"/>
      <Text x={flowerX} y={pairing ? 380 : 350} width={flowerSize + 30} size={pairing ? 33 : 40}>Inside a flower</Text>
      <svg width={1920} height={960} style={{position: 'absolute', inset: 0}} aria-hidden>
        <circle cx={flowerPointX} cy={flowerPointY} r={14} fill="none" stroke={GREEN} strokeWidth={3}/>
        <path d={`M${flowerPointX + 15} ${flowerPointY} L${pairing ? 435 : 770} ${pairing ? 490 : 560}`} fill="none" stroke={GREEN} strokeWidth={3} strokeDasharray="9 7"/>
      </svg>
      {pairing ? <>
        {[0, ...(view === 'pair-two' ? [1] : [])].map(variant => {
          const y = variant ? 700 : 400;
          const revealPath = view === 'pair-two';
          return <React.Fragment key={variant}>
            <Text x={465} y={y - 60} width={500} size={36}>Possible joining {variant + 1}</Text>
            <CellPair x={460} y={y} variant={variant} joined={revealPath} joinProgress={progress} scale={0.8}/>
            {revealPath ? <>
              <svg width={1920} height={960} style={{position: 'absolute', inset: 0}} aria-hidden><path d={`M875 ${y + 115} H1030 m-18 -12 l18 12 l-18 12 M1190 ${y + 115} H1340 m-18 -12 l18 12 l-18 12`} fill="none" stroke={GREEN} strokeWidth={3}/></svg>
              <Text x={1060} y={y - 60} width={190} size={36}>Seed</Text>
              <Botanical art={SEED} x={1045} y={y - 5} width={140} height={220} alt="Magnified cutaway of seed-bearing strawberry achene, showing a developing plant inside"/>
              <Text x={1360} y={y - 60} width={470} size={36}>Later seedling {variant + 1}</Text>
              <Seedling x={1350} y={y - 10} width={240} height={230}/>
              <DnaMarks x={1620} y={y + 110} variant={variant} label/>
            </> : null}
          </React.Fragment>;
        })}
      </> : pathway ? <>
        <CellPair x={615} y={485} joined scale={0.75}/>
        <Text x={625} y={390} width={440} size={39}>Joined cell</Text>
        <svg width={1920} height={960} style={{position: 'absolute', inset: 0}} aria-hidden><path d="M1010 610 H1120 m-18 -12 l18 12 l-18 12" fill="none" stroke={GREEN} strokeWidth={3}/>{view === 'seedling' ? <path d="M1390 610 H1500 m-18 -12 l18 12 l-18 12" fill="none" stroke={GREEN} strokeWidth={3}/> : null}</svg>
        <Botanical art={SEED} x={1135} y={440} width={235} height={355} alt="Magnified seed-bearing achene cutaway showing the developing new plant protected inside the seed"/>
        <Text x={1110} y={365} width={350} size={38}>Developing plant in a seed</Text>
        {view === 'seedling' ? <><Seedling x={1510} y={420} width={300} height={415}/><Text x={1490} y={365} width={380} size={38}>Later seedling</Text><DnaMarks x={1550} y={835}/></> : null}
      </> : <>
        <Text x={790} y={365} width={910} size={43}>Magnified reproductive cells</Text>
        <CellPair x={805} y={450} joined={joining} joinProgress={progress}/>
      </>}
    </>}
    <Text x={100} y={pairing ? 928 : 915} width={1730} size={pairing ? 25 : 29} color={TOK.inkDim}>{parentsOnly ? 'DNA marks show inherited information, not plant appearance.' : 'Stages at different times, not to scale. DNA marks show inherited information, not predicted traits.'}</Text>
  </>;
};

const Attempt = ({lesson, feedback, view}: {lesson: LessonData; feedback: boolean; view: string}) => {
  const attempt = readAttempt(lesson);
  return <>
    <Text x={90} y={295} size={48}>{attempt.goal}</Text>
    <Text x={90} y={395} width={770} size={49} color={GREEN}>{attempt.groupA}</Text>
    <Text x={1030} y={395} width={790} size={49} color={BLUE}>{attempt.groupB}</Text>
    <PlantReference x={150} y={530} width={305} height={240}/>
    <Seedling x={1070} y={500} width={240} height={280}/>
    <Text x={90} y={790} size={47}>{attempt.condition}</Text>
    <Text x={90} y={860} size={45}>Choose A or B. Explain why. Name one unknown result.</Text>
    {feedback ? <Text x={view === 'feedback-a' ? 480 : 1390} y={620} width={430} size={42} color={view === 'feedback-unknown' ? AMBER : BLUE}>
      {view === 'feedback-a' ? 'Usually keeps a combination' : view === 'feedback-unknown' ? 'Outcome still unknown' : 'Different combinations possible'}
    </Text> : null}
  </>;
};

export const B1ContinuityTeachingScene = ({lesson, scene}: {lesson: LessonData; scene: SceneData}) => {
  const local = useCurrentFrame();
  const reset = readReset(scene);
  const activeIndex = reset.previewBeats.reduce((active, item, index) => local >= item.at ? index : active, 0);
  const beat: Beat = reset.previewBeats[activeIndex];
  let viewStartIndex = activeIndex;
  while (viewStartIndex > 0 && reset.previewBeats[viewStartIndex - 1].view === beat.view) viewStartIndex--;
  const viewStartAt = reset.previewBeats[viewStartIndex].at;
  const inheritedAt=reset.previewBeats.find(item=>item.spokenCue==='The new plant also receives DNA')?.at??Infinity;
  const mnemonicAt=reset.previewBeats.find(item=>item.spokenCue==='For this grower, a useful reminder is')?.at??Infinity;
  const notes = scene.id === 'key-notes';
  const feedback = scene.id === 'dry-soil-feedback';
  const opacity = interpolate(local - beat.at, [0, 12], [0, 1], clamp);
  const sideLine = ['grower-hook', 'copying'].includes(scene.id) || (scene.id === 'continuity' && beat.view !== 'generations');
  return <AbsoluteFill style={{background: '#fafaf8', color: TOK.ink, fontFamily: FONT_DISPLAY}}>
    <div style={{position: 'absolute', left: 90, top: 52, fontFamily: FONT_MONO, fontSize: 25, letterSpacing: '0.07em', color: GREEN}}>BIOLOGY · REPRODUCTION</div>
    <Text x={90} y={145} width={1740} size={notes ? 60 : 64}>{(scene as B1Scene).heading}</Text>
    {notes ? <>
      <div style={{position: 'absolute', left: 100, top: 290, width: 1690, display: 'grid', gap: 56, fontSize: 49, fontWeight: 550, lineHeight: 1.25}}>
        {(lesson.teachingNotes ?? (scene as B1Scene).points ?? []).map((point, index) => <div key={index}>{point}</div>)}
      </div>
      <Text x={100} y={885} width={1650} size={37} color={TOK.inkDim}>Pause if you would like more time to write.</Text>
    </> : scene.id === 'dry-soil-attempt' || feedback ? <Attempt lesson={lesson} feedback={feedback} view={beat.view}/> : <>
      {beat.view === 'generations' ? <Generations inheritance={local >= inheritedAt}/> : ['parents', 'cells', 'cells-joined', 'pair-one', 'pair-two', 'seed', 'seedling'].includes(beat.view) ? <Cross view={beat.view} local={local} viewStartAt={viewStartAt}/> : beat.view === 'compare' ? <Comparison disease={scene.id === 'grower-tradeoff' && local < mnemonicAt}/> : <Runner view={beat.view}/>}
      <div style={{opacity}}><Text x={sideLine ? 1220 : 100} y={sideLine ? 340 : 245} width={sideLine ? 610 : 1700} size={sideLine ? 61 : 50}>{beat.line}</Text></div>
    </>}
    {notes && local < (reset.quietHoldStartFrame ?? 0) ? <Text x={90} y={930} width={1740} size={32} color={TOK.inkDim}>{beat.line}</Text> : null}
  </AbsoluteFill>;
};

export const B1ContinuityTeachingReset = () => <AbsoluteFill>{B1_RESET_SCENES.map(scene => <Sequence key={scene.id} from={scene.from} durationInFrames={scene.durationInFrames}><B1ContinuityTeachingScene lesson={draft as unknown as LessonData} scene={scene as unknown as SceneData}/></Sequence>)}</AbsoluteFill>;

export const B1ContinuityTeachingResetReview = () => {
  const player = useRef<PlayerRef>(null);
  const [width, setWidth] = useState(960);
  const [selected, setSelected] = useState(0);
  const select = (index: number) => {setSelected(index); player.current?.pause(); player.current?.seekTo(B1_RESET_SCENES[index].from + 45);};
  return <main>
    <h1>B1: reproduction teaching reset</h1>
    <p>A new ten-scene teaching source, with conversational causes, a genuine dry-soil application and quiet notes. This silent Player uses estimated timings. The measured parent and its audio are preserved.</p>
    <p><strong>Artwork and model scope:</strong> the existing runner plate is retained. New botanical flower, seed-bearing achene cutaway and actual seedling art locate the cross. Joining paths lead through seed development to later seedlings. Repeated seedling art supplies organism context; matching DNA marks show different inherited combinations without predicting a visible trait. The cutaway and cell model are simplified and not to scale. This is a silent draft, with scientific, learning, motion and voiced checks still required.</p>
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
