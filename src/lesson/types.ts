export type SceneBase = {
  id: string;
  type:
    | 'title'
    | 'hook'
    | 'concept'
    | 'definition'
    | 'formula'
    | 'workedExample'
    | 'misconception'
    | 'quickCheck'
    | 'summary';
  durationInFrames: number;
  caption: string;
  voiceover?: {
    text: string;
    audioFile?: string;
    startFrame?: number;
    endFrame?: number;
  };
};

export type UnitCancelConfig = {
  left: string;
  right: string;
  result: string;
};

export type DiagramConfig =
  | {type: 'bridge'}
  | {type: 'dozenMole'}
  | {type: 'massComparison'}
  | {
      type: 'balance';
      leftLabel: string;
      rightLabel: string;
      leftValue: number;
      rightValue: number;
      delay?: number;
    }
  | {
      type: 'barChart';
      bars: {label: string; value: number}[];
      unit?: string;
      delay?: number;
    }
  | {
      type: 'venn';
      leftLabel: string;
      rightLabel: string;
      overlapLabel: string;
      delay?: number;
    }
  | {
      type: 'flow';
      nodes: {id: string; label: string}[];
      edges: {from: string; to: string}[];
      delay?: number;
    }
  | {
      type: 'orbit';
      nucleus: string;
      electrons: {label: string; shell: number}[];
    }
  | {
      type: 'table';
      headers: string[];
      rows: string[][];
      delay?: number;
    }
  | {
      type: 'beforeAfter';
      beforeLabel: string;
      afterLabel: string;
      beforeContent: string;
      afterContent: string;
      delay?: number;
    }
  | {
      type: 'explode';
      parts: {label: string; color?: string}[];
      delay?: number;
    };

export type TitleScene = SceneBase & {
  type: 'title';
};

export type TextScene = SceneBase & {
  type: 'hook' | 'concept' | 'definition' | 'formula' | 'misconception';
  heading: string;
  body: string;
  secondary?: string;
  callout?: string;
  mistakeTag?: string;
  unitCancel?: UnitCancelConfig;
  diagram?: DiagramConfig;
  image?: string;
};

export type WorkedExampleScene = SceneBase & {
  type: 'workedExample';
  heading: string;
  question: string;
  coachNote?: string;
  unitCancel?: UnitCancelConfig;
  steps: string[];
};

export type QuickCheckScene = SceneBase & {
  type: 'quickCheck';
  heading: string;
  question: string;
  pausePrompt?: string;
  answerSteps: string[];
};

export type SummaryScene = SceneBase & {
  type: 'summary';
  heading: string;
  finalPrompt?: string;
  points: string[];
};

export type SceneData =
  | TitleScene
  | TextScene
  | WorkedExampleScene
  | QuickCheckScene
  | SummaryScene;

export type LessonData = {
  title: string;
  subtitle: string;
  subject: string;
  yearLevel: string;
  module: string;
  lesson: string;
  syllabusVersion?: string;
  syllabusModule?: string;
  syllabusDotPoints?: string[];
  lessonIntent?: string;
  examSkill?: string;
  productionRole?: 'reference' | 'production';
  fps: number;
  width: number;
  height: number;
  scenes: SceneData[];
};
