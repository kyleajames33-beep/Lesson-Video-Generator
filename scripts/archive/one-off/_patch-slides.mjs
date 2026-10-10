import {readFileSync, writeFileSync} from 'fs';

// ── WorkedExampleSlide ──────────────────────────────────────────────────
let worked = readFileSync('src/slides/WorkedExampleSlide.tsx', 'utf8');
worked = worked.replace(
  "import type {LessonData, WorkedExampleScene} from '../lesson/types';",
  "import type {LessonData, WorkedExampleScene} from '../lesson/types';\nimport {ASSETS, type AssetName} from '../assets';"
);
// Add image at top right, beside the question
worked = worked.replace(
  `\t\t\t<Eyebrow color={TOK.inkDim}>PROBLEM · {scene.heading.toUpperCase()}</Eyebrow>`,
  `\t\t\t<Eyebrow color={TOK.inkDim}>PROBLEM · {scene.heading.toUpperCase()}</Eyebrow>\n\t\t\t{scene.image && (\n\t\t\t\t<FadeUp delay={rd.diagram ?? 30} durationFrames={16} dy={16}>\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}\n\t\t\t\t\t\talt={scene.image}\n\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\tright: 0,\n\t\t\t\t\t\t\ttop: 0,\n\t\t\t\t\t\t\twidth: 380,\n\t\t\t\t\t\t\tmaxHeight: 220,\n\t\t\t\t\t\t\tobjectFit: 'contain',\n\t\t\t\t\t\t\tfilter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',\n\t\t\t\t\t\t}}\n\t\t\t\t\t/>\n\t\t\t\t</FadeUp>\n\t\t\t)}`
);
writeFileSync('src/slides/WorkedExampleSlide.tsx', worked);
console.log('WorkedExampleSlide patched');

// ── MisconceptionSlide ──────────────────────────────────────────────────
let misconception = readFileSync('src/slides/MisconceptionSlide.tsx', 'utf8');
misconception = misconception.replace(
  "import type {LessonData, TextScene} from '../lesson/types';",
  "import type {LessonData, TextScene} from '../lesson/types';\nimport {ASSETS, type AssetName} from '../assets';"
);
// Add image between heading and cards, centered
misconception = misconception.replace(
  `\t\t\t{scene.mistakeTag ? (`,
  `\t\t\t{scene.image && (\n\t\t\t\t<FadeUp delay={rd.diagram ?? 30} durationFrames={16} dy={14}>\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}\n\t\t\t\t\t\talt={scene.image}\n\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\tright: 64,\n\t\t\t\t\t\t\ttop: 240,\n\t\t\t\t\t\t\twidth: 520,\n\t\t\t\t\t\t\tmaxHeight: 160,\n\t\t\t\t\t\t\tobjectFit: 'contain',\n\t\t\t\t\t\t\tfilter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',\n\t\t\t\t\t\t}}\n\t\t\t\t\t/>\n\t\t\t\t</FadeUp>\n\t\t\t)}\n\t\t\t{scene.mistakeTag ? (`
);
writeFileSync('src/slides/MisconceptionSlide.tsx', misconception);
console.log('MisconceptionSlide patched');

// ── QuickCheckSlide ─────────────────────────────────────────────────────
let quick = readFileSync('src/slides/QuickCheckSlide.tsx', 'utf8');
quick = quick.replace(
  "import type {LessonData, QuickCheckScene} from '../lesson/types';",
  "import type {LessonData, QuickCheckScene} from '../lesson/types';\nimport {ASSETS, type AssetName} from '../assets';"
);
// Add image to the right of the question
quick = quick.replace(
  `\t\t\t<Eyebrow color={TOK.inkDim}>QUICK CHECK · TRY IT FIRST</Eyebrow>`,
  `\t\t\t<Eyebrow color={TOK.inkDim}>QUICK CHECK · TRY IT FIRST</Eyebrow>\n\n\t\t\t\t{scene.image && (\n\t\t\t\t\t<FadeUp delay={rd.diagram ?? 30} durationFrames={16} dy={16}>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}\n\t\t\t\t\t\t\talt={scene.image}\n\t\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\t\tright: 64,\n\t\t\t\t\t\t\t\ttop: 180,\n\t\t\t\t\t\t\t\twidth: 440,\n\t\t\t\t\t\t\t\tmaxHeight: 280,\n\t\t\t\t\t\t\t\tobjectFit: 'contain',\n\t\t\t\t\t\t\t\tfilter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</FadeUp>\n\t\t\t\t)}`
);
writeFileSync('src/slides/QuickCheckSlide.tsx', quick);
console.log('QuickCheckSlide patched');

// ── SummarySlide ────────────────────────────────────────────────────────
let summary = readFileSync('src/slides/SummarySlide.tsx', 'utf8');
summary = summary.replace(
  "import type {LessonData, SummaryScene} from '../lesson/types';",
  "import type {LessonData, SummaryScene} from '../lesson/types';\nimport {ASSETS, type AssetName} from '../assets';"
);
// Add image at bottom center, below takeaways
summary = summary.replace(
  `\t\t\t{scene.finalPrompt ? (`,
  `\t\t\t{scene.image && (\n\t\t\t\t<FadeUp delay={rd.diagram ?? 40} durationFrames={16} dy={18}>\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}\n\t\t\t\t\t\talt={scene.image}\n\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\tleft: '50%',\n\t\t\t\t\t\t\ttransform: 'translateX(-50%)',\n\t\t\t\t\t\t\tbottom: 140,\n\t\t\t\t\t\t\twidth: 720,\n\t\t\t\t\t\t\tmaxHeight: 200,\n\t\t\t\t\t\t\tobjectFit: 'contain',\n\t\t\t\t\t\t\tfilter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',\n\t\t\t\t\t\t}}\n\t\t\t\t\t/>\n\t\t\t\t</FadeUp>\n\t\t\t)}\n\t\t\t{scene.finalPrompt ? (`
);
writeFileSync('src/slides/SummarySlide.tsx', summary);
console.log('SummarySlide patched');

// ── MarginaliaSlide ─────────────────────────────────────────────────────
let marginalia = readFileSync('src/slides/MarginaliaSlide.tsx', 'utf8');
marginalia = marginalia.replace(
  "import type {LessonData, MarginaliaScene} from '../lesson/types';",
  "import type {LessonData, MarginaliaScene} from '../lesson/types';\nimport {ASSETS, type AssetName} from '../assets';"
);
// Add image as background behind the concept card
marginalia = marginalia.replace(
  `\t\t\t\t\t\t\tbackground:\n\t\t\t\t\t\t\t\t\`linear-gradient(135deg, \${TOK.bgLift} 0%, rgba(13,58,47,0.48) 55%, \${TOK.bg} 100%)\`,`,
  `\t\t\t\t\t\t\tbackground:\n\t\t\t\t\t\t\t\t\`linear-gradient(135deg, \${TOK.bgLift} 0%, rgba(13,58,47,0.48) 55%, \${TOK.bg} 100%)\`,\n\t\t\t\t\t\t\toverflow: 'hidden',`
);
// Actually, let's add the image inside the card as a background element
marginalia = marginalia.replace(
  `\t\t\t\t\t\t{/* Subtle inner glow */}`,
  `\t\t\t\t\t\t{scene.image && (\n\t\t\t\t\t\t\t<FadeUp delay={rd.diagram ?? 24} durationFrames={16} dy={12}>\n\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}\n\t\t\t\t\t\t\t\t\talt={scene.image}\n\t\t\t\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\t\t\t\tright: -60,\n\t\t\t\t\t\t\t\t\t\ttop: '50%',\n\t\t\t\t\t\t\t\t\t\ttransform: 'translateY(-50%)',\n\t\t\t\t\t\t\t\t\t\twidth: 480,\n\t\t\t\t\t\t\t\t\t\tmaxHeight: 480,\n\t\t\t\t\t\t\t\t\t\tobjectFit: 'contain',\n\t\t\t\t\t\t\t\t\t\tfilter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',\n\t\t\t\t\t\t\t\t\t\topacity: 0.55,\n\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</FadeUp>\n\t\t\t\t\t\t)}\n\t\t\t\t\t\t{/* Subtle inner glow */}`
);
writeFileSync('src/slides/MarginaliaSlide.tsx', marginalia);
console.log('MarginaliaSlide patched');
