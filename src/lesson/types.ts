export type VoiceSettings = {
  stability: number;
  similarity_boost: number;
  style?: number;
  use_speaker_boost?: boolean;
  speed?: number;
};

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
    | 'summary'
    | 'marginalia'
    | 'labFootage'
    | 'endCard'
    | 'mnemonic';
  durationInFrames: number;
  caption: string;
  voiceover?: {
    text: string;
    audioFile?: string;
    startFrame?: number;
    endFrame?: number;
    /**
     * Translations of `text` keyed by IETF language tag (e.g. "zh-CN",
     * "vi", "ar"). Each value is the full translated narration for this
     * scene. Used by generate-elevenlabs-multilang.mjs to render audio
     * variants. Slides remain in the lesson's primary language.
     */
    translations?: Record<string, string>;
    /**
     * Resolved audio paths per language variant. Filled by the
     * multilingual gen script. Lookup format:
     *   { "zh-CN": "public/audio/zh-CN/Chemistry-Y11-M2-L1A/hook.xxx.mp3" }
     */
    translatedAudioFiles?: Record<string, string>;
  };
  /** Optional per-element reveal delays (frames). Overrides component defaults. */
  revealDelays?: Record<string, number>;
  /**
   * Burned-in caption track, compiled from alignment data by build-captions.mjs.
   * Uses the canonical @remotion/captions Caption shape so the data is
   * compatible with createTikTokStyleCaptions() pagination and any future
   * SRT import/export tooling.
   */
  captions?: Array<{
    text: string;
    startMs: number;
    endMs: number;
    timestampMs: number | null;
    confidence: number | null;
  }>;
  /**
   * One short sentence summarizing this scene's takeaway. Auto-displayed
   * at the top of the NEXT scene as a spaced-repetition callback so
   * students get a brief recall hit before the new content lands.
   *
   * Example: "1 mole = 6.022 × 10²³ particles." Keep ≤80 chars.
   */
  recapSeed?: string;
  /**
   * Metacognitive self-check that displays late in the scene as
   * "By now you should be able to: {text}". Used on summary scenes and
   * after key concept blocks. Keep ≤120 chars and write as an action
   * verb phrase. Example: "identify whether a question asks for N or n".
   */
  confidenceCheck?: string;
  /**
   * Index into lesson.syllabusDotPoints. Defaults to 0 if not set. Used
   * by the syllabus badge to highlight which NESA outcome this scene
   * addresses — visible to teachers and students for curriculum mapping.
   * Set to -1 to suppress the badge on a specific scene.
   */
  syllabusDotPointIndex?: number;
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
    }
  | {
      type: 'galvanicCell';
      leftMetal: string;
      leftIon: string;
      rightMetal: string;
      rightIon: string;
      delay?: number;
    }
  | {
      type: 'energyProfile';
      exothermic: boolean;
      ea: number;
      deltaH: number;
      showCatalyst?: boolean;
      delay?: number;
    }
  | {
      type: 'boltzmannDistribution';
      temperatureLow: number;
      temperatureHigh: number;
      activationEnergy: number;
      delay?: number;
    }
  | {type: 'gasVolumeComparison'}
  | {type: 'concentrationCompare'}
  | {type: 'titrationSetup'}
  | {type: 'limitingExcess'}
  | {type: 'errorDartboard'}
  | {type: 'calorimeter'}
  | {type: 'bondEnergy'}
  | {type: 'hessCycle'}
  | {type: 'entropyDisorder'}
  | {type: 'gibbsSpontaneity'}
  | {type: 'reductionPotentialLadder'}
  | {type: 'isotopeAtoms'}
  | {type: 'aufbauStaircase'}
  | {type: 'latticeVsElectronSea'}
  | {
      type: 'punnettSquare';
      /** Parent-1 gamete alleles across the top, e.g. ["T","t"]. */
      top: [string, string];
      /** Parent-2 gamete alleles down the left, e.g. ["T","t"]. */
      left: [string, string];
    }
  | {type: 'pedigree'}
  | {type: 'dnaHelix'}
  | {type: 'transcriptionStrand'}
  | {type: 'chromosomeMutation'}
  | {
      type: 'massBreakdown';
      /** Optional segments override. Defaults to 40% C / 6.7% H / 53.3% O. */
      segments?: {label: string; percent: number; color: string}[];
    }
  | {
      type: 'lineGraph';
      xLabel: string;
      yLabel: string;
      /** Each series: normalized 0..1 control points, smoothed + drawn in. */
      series: {label: string; color: string; points: [number, number][]; dashed?: boolean}[];
      /** Vertical dashed reference lines (e.g. equivalence point). */
      markers?: {x: number; label: string}[];
      /** Horizontal dashed reference lines (e.g. "rates equal"). */
      hLines?: {y: number; label?: string}[];
    }
  | {
      type: 'lottie';
      /** staticFile-relative path to a Lottie JSON, e.g. "assets/lottie/x.json". */
      src: string;
      loop?: boolean;
      /** Playback speed multiplier. Default 1. */
      speed?: number;
    }
  | {
      type: 'molecule3d';
      /** VSEPR shape. */
      geometry:
        | 'linear'
        | 'trigonalPlanar'
        | 'bent'
        | 'trigonalPyramidal'
        | 'tetrahedral'
        | 'trigonalBipyramidal'
        | 'octahedral';
      /** Central atom symbol, e.g. "C". */
      centralLabel: string;
      /** Terminal atom symbol used for every position, e.g. "H". */
      terminalLabel: string;
      /** Optional per-position overrides of terminalLabel. */
      terminalLabels?: string[];
      /** Bond-angle annotation, e.g. "109.5°". Omit to hide the marker. */
      angleLabel?: string;
      /** Draw lone-pair lobes (bent / trigonalPyramidal). Default true. */
      showLonePairs?: boolean;
      /** Seconds per full turntable revolution. Default 14. */
      spinSeconds?: number;
      delay?: number;
    }
  | {
      type: 'circuit3d';
      /** Series components, clockwise; components[0] sits front-centre. */
      components: {
        kind: 'battery' | 'resistor' | 'lamp' | 'switch' | 'ammeter' | 'voltmeter';
        label?: string;
      }[];
      /** Animate current dots (closes any switch first). Default false. */
      showCurrent?: boolean;
      delay?: number;
    };

export type TitleScene = SceneBase & {
  type: 'title';
  /** Optional hero illustration asset name. When set, TitleSlide swaps
   *  the abstract backdrop for the named image (e.g. "heroPartA"). */
  image?: string;
};

export type BulletPoint =
  | string
  | {
      text: string;
      /** Seconds from scene start when this bullet should land. */
      at?: number;
      /** Optional accent override for the bullet marker. */
      accent?: string;
    };

export type MnemonicScene = SceneBase & {
  type: 'mnemonic';
  /** The mnemonic rule itself — the line students should remember and screenshot. */
  rule: string;
  /** Optional one-line gloss explaining what the rule means in plain language. */
  gloss?: string;
  /**
   * Optional paired-mapping items. Renders as two columns with the
   * left-half mapping to the right-half — useful for "BIG N ↔ Number,
   * little n ↔ moles" style memory aids.
   */
  pairs?: Array<{left: string; right: string; leftColor?: string; rightColor?: string}>;
  /** Hashtag-style anchor at the bottom for memorability. */
  anchor?: string;
};

export type EndCardScene = SceneBase & {
  type: 'endCard';
  /** Big stamped headline — e.g. "Part B". */
  partLabel: string;
  /** Subhead — e.g. "Applying It". */
  partSubtitle?: string;
  /** Body intro line. */
  body?: string;
  /** Bullets list — what to expect next. */
  bullets?: BulletPoint[];
  /** CTA text on the prominent button. */
  ctaLabel?: string;
  /** Optional outro line above the CTA. */
  callout?: string;
};

export type TextScene = SceneBase & {
  type: 'hook' | 'concept' | 'definition' | 'formula' | 'misconception';
  heading: string;
  body: string;
  /** Optional dotpoint list. When present, bullets render in place of the body paragraph. */
  bullets?: BulletPoint[];
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
  image?: string;
};

export type QuickCheckScene = SceneBase & {
  type: 'quickCheck';
  heading: string;
  question: string;
  pausePrompt?: string;
  answerSteps: string[];
  image?: string;
};

export type SummaryScene = SceneBase & {
  type: 'summary';
  heading: string;
  finalPrompt?: string;
  points: string[];
  image?: string;
};

export type MarginaliaNote = {
  text: string;
  position: 'top-right' | 'mid-right' | 'bottom-right';
  color?: string;
};

export type MarginaliaScene = SceneBase & {
  type: 'marginalia';
  heading: string;
  body: string;
  callout?: string;
  notes: MarginaliaNote[];
  image?: string;
};

export type LabFootageAnnotation = {
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export type LabFootageScene = SceneBase & {
  type: 'labFootage';
  heading: string;
  body?: string;
  image: string;
  annotations?: LabFootageAnnotation[];
};

export type SceneData =
  | TitleScene
  | TextScene
  | WorkedExampleScene
  | QuickCheckScene
  | SummaryScene
  | MarginaliaScene
  | LabFootageScene
  | EndCardScene
  | MnemonicScene;

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
  /**
   * NESA outcome codes addressed by this lesson, e.g. ["CH11-9",
   * "CH11/12-6"]. Surfaced in the intro stinger panel so teachers and
   * students see the exact curriculum mapping.
   */
  nesaOutcomes?: string[];
  /**
   * The NESA inquiry question driving the module section this lesson
   * belongs to. Shown discreetly under the stinger panel header.
   */
  inquiryQuestion?: string;
  /** This lesson's 1-based position in its module. Used for the progress chip. */
  moduleLessonNumber?: number;
  /** Total lessons in this module (for "X of Y" display). */
  moduleLessonCount?: number;
  /**
   * Optional welcome narration that plays during the intro stinger so
   * the opener isn't silent. Pattern: "Welcome to HSC Science. This is
   * HSC Chemistry. Today: <topic>. Let's get into it." Generated by
   * scripts/generate-intros.mjs and rendered inside the stinger
   * Sequence in LessonVideo.
   */
  introVoiceover?: {
    text: string;
    audioFile?: string;
  };
  /**
   * Optional path to a background music MP3 (relative to public/).
   * E.g. "audio/music/lofi-study.mp3". When set, the track auto-loops at
   * music-bed volume under the entire lesson. Unset = no music.
   */
  backgroundMusic?: string;
  /**
   * Volume override for the background music. 0–1. Defaults to 0.18.
   * Lower this if narration feels muddy against a particular track.
   */
  backgroundMusicVolume?: number;
  /**
   * Per-speaker ElevenLabs voice IDs for multi-speaker (dialogue) lessons.
   * Author inserts `[STUDENT]...[/STUDENT]` (or other speaker tags) into
   * `voiceover.text` and the dialogue gen script swaps voices per segment.
   * Unset = single-speaker narrator (default).
   */
  voices?: {
    narrator: string;
    student?: string;
    /** Settings overrides per speaker (otherwise the standard V5-tuned defaults are used). */
    narratorSettings?: VoiceSettings;
    studentSettings?: VoiceSettings;
  };
  lessonIntent?: string;
  examSkill?: string;
  productionRole?: 'reference' | 'production';
  fps: number;
  width: number;
  height: number;
  scenes: SceneData[];
};
