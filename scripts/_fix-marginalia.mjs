import {readFileSync, writeFileSync} from 'fs';

let content = readFileSync('src/slides/MarginaliaSlide.tsx', 'utf8');

const oldStr = `\t\t\t\t\t{scene.image && (
\t\t\t\t\t\t<FadeUp delay={rd.diagram ?? 24} durationFrames={16} dy={12}>\\n\t\t\t\t\t\t\t<img\\n\t\t\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}\\n\t\t\t\t\t\t\t\talt={scene.image}\\n\t\t\t\t\t\t\t\tstyle={{\\n\t\t\t\t\t\t\t\t\tposition: 'absolute',\\n\t\t\t\t\t\t\t\t\tright: -60,\\n\t\t\t\t\t\t\t\t\ttop: '50%',\\n\t\t\t\t\t\t\t\t\ttransform: 'translateY(-50%)',\\n\t\t\t\t\t\t\t\t\twidth: 480,\\n\t\t\t\t\t\t\t\t\tmaxHeight: 480,\\n\t\t\t\t\t\t\t\t\tobjectFit: 'contain',\\n\t\t\t\t\t\t\t\t\tfilter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',\\n\t\t\t\t\t\t\t\t\topacity: 0.55,\\n\t\t\t\t\t\t\t\t}}\\n\t\t\t\t\t\t\t/>\\n\t\t\t\t\t\t</FadeUp>\\n\t\t\t\t\t)}\\n\t\t\t\t\t{/* Subtle inner glow */}`;

const newStr = `\t\t\t\t\t{scene.image && (
\t\t\t\t\t\t<FadeUp delay={rd.diagram ?? 24} durationFrames={16} dy={12}>
\t\t\t\t\t\t\t<img
\t\t\t\t\t\t\t\tsrc={ASSETS[scene.image as AssetName]}
\t\t\t\t\t\t\t\talt={scene.image}
\t\t\t\t\t\t\t\tstyle={{
\t\t\t\t\t\t\t\t\tposition: 'absolute',
\t\t\t\t\t\t\t\t\tright: -60,
\t\t\t\t\t\t\t\t\ttop: '50%',
\t\t\t\t\t\t\t\t\ttransform: 'translateY(-50%)',
\t\t\t\t\t\t\t\t\twidth: 480,
\t\t\t\t\t\t\t\t\tmaxHeight: 480,
\t\t\t\t\t\t\t\t\tobjectFit: 'contain',
\t\t\t\t\t\t\t\t\tfilter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',
\t\t\t\t\t\t\t\t\topacity: 0.55,
\t\t\t\t\t\t\t\t}}
\t\t\t\t\t\t\t/>
\t\t\t\t\t\t</FadeUp>
\t\t\t\t\t)}
\t\t\t\t\t{/* Subtle inner glow */}`;

content = content.replace(oldStr, newStr);
writeFileSync('src/slides/MarginaliaSlide.tsx', content);
console.log('MarginaliaSlide fixed');
