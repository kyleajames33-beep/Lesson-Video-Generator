import {interpolate, useCurrentFrame} from 'remotion';
import type {ReactNode} from 'react';
import type {LessonData, SceneData} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {AssetImg} from './shared/AssetImg';

// Reuse the pilot's balance, formula cards and larger calculation boards.
// Every teaching cue in the narrated draft is resolved from exact alignment.
type Props = {scene: SceneData; lesson: LessonData; sceneIndex: number; totalScenes: number};
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const Board = ({children}: {children: ReactNode}) => <div style={{position: 'absolute', inset: '128px 120px 100px'}}>{children}</div>;
const Heading = ({children}: {children: ReactNode}) => <div style={{fontSize: 82, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em'}}>{children}</div>;
const Row = ({at, children, size = 76}: {at: number; children: ReactNode; size?: number}) => <FadeUp delay={at} dy={0}>
  <div style={{fontFamily: FONT_MONO, fontSize: size, lineHeight: 1.25}}>{children}</div>
</FadeUp>;

export const MolarMassTeachingSlide = (props: Props) => {
  const {scene, lesson, sceneIndex, totalScenes} = props;
  const frame = useCurrentFrame();
  const rd = scene.revealDelays ?? {};
  const at = (key: string) => {
    if (!Number.isInteger(rd[key])) throw new Error(`Missing aligned teaching cue: ${scene.id}/${key}`);
    return rd[key];
  };
  let content: ReactNode;
  switch (scene.teachingLayout) {
    case 'molarMassDefinition': {
      const doubled = frame >= at('double');
      content = <Board>
        <Heading>More sample. Same molar mass.</Heading>
        <div style={{marginTop: 100, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 40}}>
          {[{key:'mass',symbol:'m',unit:'g',label:doubled?'Twice the sample mass':'Sample mass'},
            {key:'molarMass',symbol:doubled?'n':'M',unit:doubled?'mol':'g mol⁻¹',label:doubled?'Twice the amount':'Mass per mole'}].map(card=>
            <FadeUp key={card.key} delay={at(card.key)}><div style={{background:TOK.card,border:`1px solid ${TOK.cardBorder}`,borderRadius:16,padding:35}}>
              <div style={{fontFamily:FONT_MONO,fontSize:104,fontWeight:700}}>{card.symbol} <span style={{fontSize:62,color:TOK.chem1}}>({card.unit})</span></div>
              <div style={{fontSize:62,marginTop:18}}>{card.label}</div>
            </div></FadeUp>)}
        </div>
        <div style={{marginTop:80,fontSize:76,fontWeight:750,color:TOK.chem1}}><FadeUp delay={at('fixed')}>M stays the same.</FadeUp></div>
        <div style={{marginTop:25,fontSize:56,color:TOK.inkDim}}><FadeUp delay={at('units')}>g mol⁻¹ means grams per mole.</FadeUp></div>
      </Board>;
      break;
    }
    case 'molarMassBalance': {
      if (scene.type !== 'labFootage' || !scene.image) throw new Error('Balance board needs the selected lab scene.');
      content = <Board>
        <Heading>The balance gives grams. We want moles.</Heading>
        <div style={{position: 'absolute', top: 240, width: 680, fontSize: 58, lineHeight: 1.3}}>
          <FadeUp delay={at('tare')}>Tare the empty container.</FadeUp>
          <div style={{marginTop: 55}}><FadeUp delay={at('measure')}>Read sample mass in grams.</FadeUp></div>
          <div style={{marginTop: 55}}><FadeUp delay={at('convert')}>Use molar mass to find moles.</FadeUp></div>
        </div>
        <div style={{position: 'absolute', left: 820, top: 115, width: 860, height: 670}}>
          <AssetImg src={ASSETS[scene.image as AssetName]} alt="" style={{position: 'absolute', left: 95, top: 0, width: 670, height: 670}} />
          <div style={{position: 'absolute', left: 316, top: 447, width: 229, height: 70, background: '#d3e9dd', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 36, color: '#164b3a'}}>mass / g</div>
          <div style={{position: 'absolute', left: 125, top: 670, fontSize: 34, color: TOK.inkDim}}>Schematic. Assume the container is tared.</div>
        </div>
      </Board>;
      break;
    }
    case 'molarMassFormula': {
      const division = frame >= at('divide');
      const causal = frame < at('multiply');
      const strike = interpolate(frame, [at('cancel'), at('cancel') + 18], [0, 1], clamp);
      content = <Board>
        <Heading>{causal ? 'Each mole contributes the same mass.' : division ? 'Finding the amount? Divide.' : 'Finding the mass? Multiply.'}</Heading>
        {causal ? <div style={{marginTop: 120, display: 'flex', gap: 45}}>
          {[['oneMole', '1 mol carbon atoms', '12.01 g'], ['twoMoles', '2 mol carbon atoms', '24.02 g']].map(([key, label, mass]) =>
            <FadeUp key={key} delay={at(key)}><div style={{width: 735, padding: 40, background: TOK.card, border: `1px solid ${TOK.cardBorder}`, borderRadius: 16}}>
              <div style={{fontSize: 60}}>{label}</div><div style={{fontSize: 112, fontWeight: 800, marginTop: 25}}>{mass}</div>
            </div></FadeUp>)}
        </div> : <>
          <div style={{marginTop: 60}}><Row at={at('multiply')} size={112}>{division ? 'n = m ÷ M' : 'm = n × M'}</Row></div>
          <div style={{marginTop: 45, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26}}>
            {[['mass', 'm', 'Sample mass', 'g'], ['amount', 'n', 'Amount', 'mol'], ['molarMass', 'M', 'Molar mass', 'g mol⁻¹']].map(([key, symbol, label, unit]) =>
              <FadeUp key={symbol} delay={at(key)}><div style={{padding: '22px 28px', background: TOK.card, border: `1px solid ${TOK.cardBorder}`, borderRadius: 16}}>
                <div style={{fontFamily: FONT_MONO, fontSize: 68, fontWeight: 700}}>{symbol} <span style={{fontSize: 54, color: TOK.chem1}}>({unit})</span></div>
                <div style={{fontSize: 54, marginTop: 12}}>{label}</div>
              </div></FadeUp>)}
          </div>
          <div style={{marginTop: 50}}><FadeUp delay={division ? at('divide') : at('units')} dy={0}>
            <div style={{fontFamily: FONT_HAND, fontSize: 52, color: TOK.chem1}}>Check the units</div>
            {division ? <div style={{fontFamily: FONT_MONO, fontSize: 76}}>g ÷ (g mol⁻¹) = mol</div> :
              <div style={{display: 'flex', gap: 38, alignItems: 'center', fontFamily: FONT_MONO, fontSize: 86}}>
                <span style={{position: 'relative'}}>mol<Cancellation progress={strike} /></span><span>×</span>
                <span style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><span style={{borderBottom: `4px solid ${TOK.ink}`, padding: '0 30px'}}>g</span>
                  <span style={{position: 'relative'}}>mol<Cancellation progress={strike} /></span></span>
                <FadeUp delay={at('cancel')} dy={0}>= g</FadeUp>
              </div>}
          </FadeUp></div>
        </>}
      </Board>;
      break;
    }
    case 'molarMassCarbon': {
      content = <Board>
        <Heading>Two moles of carbon: multiply or divide?</Heading>
        <div style={{display: 'flex', gap: 90, marginTop: 65, fontSize: 64}}><span>n = 2.00 mol</span><span>M = 12.01 g mol⁻¹</span></div>
        <div style={{marginTop: 65}}><Row at={at('multiply')} size={106}>m = n × M</Row></div>
        <div style={{marginTop: 40}}><Row at={at('substitute')} size={92}>m = 2.00 × 12.01</Row></div>
        <div style={{marginTop: 40}}><Row at={at('unrounded')} size={88}>m = 24.02 g</Row></div>
        <div style={{position: 'absolute', right: 0, top: 545, fontSize: 110, fontWeight: 800, color: TOK.chem1}}>
          <FadeUp delay={at('rounded')}>24.0 g</FadeUp><ScribbleUnderline width={350} delay={at('precision')} durationFrames={20} color={TOK.amber} />
        </div>
        <div style={{position: 'absolute', top: 775, fontSize: 52, color: TOK.inkDim}}><FadeUp delay={at('precision')}>The final zero records three significant figures.</FadeUp></div>
      </Board>;
      break;
    }
    case 'molarMassBrackets': {
      const boundary = scene.responseHold?.endFrame;
      if (boundary === undefined) throw new Error('Bracket board needs its measured response hold.');
      const countAt = Math.max(boundary, at('counts'));
      content = <Board>
        <Heading>What does the outside 2 multiply?</Heading>
        <div style={{marginTop: 40, fontFamily: FONT_MONO, fontSize: 96}}>Ca(H₂PO₄)₂</div>
        <div style={{marginTop: 18, fontSize: 50, color: TOK.inkDim}}>Use: Ca 40.08 · H 1.008 · P 30.97 · O 15.999</div>
        <div style={{marginTop: 55, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24}}>
          {[['Ca', '1', '40.08'], ['H', '4', '4.032'], ['P', '2', '61.94'], ['O', '8', '127.992']].map(([symbol, count, mass]) =>
            <div key={symbol} style={{padding: 20, border: `2px solid ${TOK.cardBorder}`, background: TOK.card, borderRadius: 16, textAlign: 'center'}}>
              <div style={{fontSize: 68, fontWeight: 750}}>{symbol}</div>
              <div style={{fontSize: 62, color: TOK.chem1}}><FadeUp delay={symbol === 'O' ? boundary : countAt} dy={0}>{count} atom{count === '1' ? '' : 's'}</FadeUp></div>
              <div style={{fontSize: 64, fontFamily: FONT_MONO, marginTop: 18}}><FadeUp delay={Math.max(boundary, at('contributions'))} dy={0}>{mass}</FadeUp></div>
            </div>)}
        </div>
        <div style={{position: 'absolute', top: 705, display: 'flex', gap: 24}}><Row at={at('total')} size={72}>M = 234.044</Row><Row at={at('rounded')} size={72}>→ 234.04 g mol⁻¹</Row></div>
        <div style={{position: 'absolute', top: 805, fontSize: 48, color: TOK.inkDim}}><FadeUp delay={at('guardDigits')}>Keep guard digits. Round only the final total.</FadeUp></div>
        {frame >= scene.responseHold!.startFrame && frame < boundary && <div style={{position: 'absolute', top: 735, fontFamily: FONT_HAND, fontSize: 62, color: TOK.chem1}}>Count the oxygen atoms. Pause longer if needed.</div>}
      </Board>;
      break;
    }
    case 'molarMassChlorine': {
      const boundary = scene.responseHold?.endFrame;
      if (boundary === undefined) throw new Error('Chlorine board needs its measured response hold.');
      content = <Board>
        <div style={{fontFamily: FONT_HAND, fontSize: 66, color: TOK.chem1}}>Your turn</div>
        <div style={{marginTop: 20}}><Heading>How many moles are in<br />71.0 g of chlorine gas, Cl₂?</Heading></div>
        <div style={{marginTop: 20, fontSize: 54, color: TOK.inkDim}}>Use Aᵣ(Cl) = 35.45.</div>
        {frame < boundary ? <div style={{marginTop: 90, fontSize: 62}}><FadeUp delay={scene.responseHold!.startFrame} dy={0}>Five seconds to start. Pause longer if needed.</FadeUp></div> :
          <div style={{marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18}}>
            <Row at={Math.max(boundary, at('molarMass'))} size={66}>M(Cl₂) = 2 × 35.45 = 70.90 g mol⁻¹</Row>
            <Row at={at('divide')} size={66}>n = 71.0 ÷ 70.90</Row>
            <Row at={at('unrounded')} size={66}>n ≈ 1.00141 mol</Row>
            <Row at={at('rounded')} size={66}>n = 1.00 mol (3 significant figures)</Row>
          </div>}
      </Board>;
      break;
    }
    default: throw new Error('Unsupported selected teaching board.');
  }
  return <SlideFrame vignette={false} sceneDurationInFrames={scene.durationInFrames}>
    <SlideChrome lesson={lesson} topic="MOLAR MASS" sceneIndex={sceneIndex} totalScenes={totalScenes} />{content}
  </SlideFrame>;
};

const Cancellation = ({progress}: {progress: number}) => <svg width="190" height="110" style={{position: 'absolute', left: -8, top: 0}}>
  <path d="M 0 90 L 170 10" pathLength={1} stroke={TOK.amber} strokeWidth={8} strokeDasharray={1} strokeDashoffset={1 - progress} />
</svg>;
