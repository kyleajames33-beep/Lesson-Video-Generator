import {Composition, registerRoot} from 'remotion';
import {DesignDirections, DIRECTIONS, PROTOTYPE_SECONDS} from './DesignDirections';
import {MolarMassPilot, PILOT_FRAMES} from './MolarMassPilot';
import {NativeDnaTest, PaintedDioramaTest, CAPABILITY_FRAMES} from './CapabilityTests';
import {ConnectedChemistry, CONNECTED_FRAMES} from './ConnectedChemistry';
import {WorkedCarbon} from './ConnectedChemistry';
import {BracketRevision,ChlorineRevision} from './MolarMassRevisionTests';

const PrototypeRoot = () => <>
  <Composition id="Revision-mass" component={WorkedCarbon} durationInFrames={480} fps={30} width={1920} height={1080}/>
  <Composition id="Revision-brackets" component={BracketRevision} durationInFrames={540} fps={30} width={1920} height={1080}/>
  <Composition id="Revision-chlorine" component={ChlorineRevision} durationInFrames={540} fps={30} width={1920} height={1080}/>
  <Composition id="Connected-chemistry" component={ConnectedChemistry} durationInFrames={CONNECTED_FRAMES} fps={30} width={1920} height={1080}/>
  {DIRECTIONS.map(d=><Composition key={d.id} id={`Direction-${d.id}`} component={DesignDirections} defaultProps={{direction:d.id}} durationInFrames={PROTOTYPE_SECONDS*30} fps={30} width={1920} height={1080}/>)}
  <Composition id="MolarMass-mixed-pilot" component={MolarMassPilot} durationInFrames={PILOT_FRAMES} fps={30} width={1920} height={1080}/>
  <Composition id="Native-DNA-test" component={NativeDnaTest} durationInFrames={CAPABILITY_FRAMES} fps={30} width={1920} height={1080}/>
  {[false,true].map(painted=><Composition key={String(painted)} id={painted?'Painted-diorama-test':'Plain-diorama-test'} component={PaintedDioramaTest} defaultProps={{painted}} durationInFrames={CAPABILITY_FRAMES} fps={30} width={1920} height={1080}/>)}
</>;
registerRoot(PrototypeRoot);
