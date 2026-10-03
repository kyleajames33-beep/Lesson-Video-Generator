import {Composition, registerRoot} from 'remotion';
import {QuickCheckSlide} from '../slides/QuickCheckSlide';
import type {LessonData, QuickCheckScene} from '../lesson/types';
import '../styles/fonts';

type Props = {answerVisibleStart: number; responseHoldStart: number};
const HoldCheck = ({answerVisibleStart, responseHoldStart}: Props) => {
  const scene: QuickCheckScene = {
    id: 'hold-boundary-check', type: 'quickCheck', durationInFrames: 420, caption: 'Timing fixture only',
    heading: 'Molar mass', question: '36.03 g of carbon. Use M = 12.01 g mol⁻¹. Multiply or divide to find the amount?',
    pausePrompt: 'Choose an operation and explain why. Pause for longer.',
    answerSteps: ['n = m / M', '36.03 / 12.01 = 3.00 mol'],
    revealDelays: {answerVisibleStart, responseHoldStart},
  };
  const lesson = {title: 'Response timing check', subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Fixture', fps: 30, width: 1920, height: 1080, scenes: [scene]} as LessonData;
  return <QuickCheckSlide scene={scene} lesson={lesson} />;
};

const Root = () => <Composition id="Response-hold-check" component={HoldCheck} durationInFrames={420} fps={30} width={1920} height={1080} defaultProps={{answerVisibleStart: 300, responseHoldStart: 120}} />;
registerRoot(Root);
