// DefinitionSlide — gold-standard re-skin (Phase 1.5, 2026-05-01).
//
// Pattern: docs/design-canvas-reference/scenes-v2.jsx SceneKeyTermDoodled.
// Beat plan:
//   0    chrome anchors
//   3    "DEFINITION" mono eyebrow reveals
//   12   hero word fades up, period accent in chem1
//   24   scribble circle draws around key term in hero
//   36   handwritten margin note ("↑ symbol: mol") + leader line
//   42   sub-heading (right of "=") fades up
//   70   horizontal rule + body text reveals
//   90   highlight wipes behind key phrase in body
//   100  secondary text reveals
//   140  callout reveals

import type {LessonData, TextScene} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {
	ScribbleCircle,
} from '../animations/DoodlePrimitives';
import {HighlightWipe} from '../animations/AttentionPrimitives';
import {NumberTicker, StampInTitle} from '../animations/MotionPrimitives';
import {BulletReveal} from '../animations/BulletReveal';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {ConceptText} from './shared/ConceptText';
import {FONT_HAND, FONT_MONO, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type DefinitionSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

export const DefinitionSlide = ({scene, lesson, sceneIndex, totalScenes}: DefinitionSlideProps) => {
	const theme = useAccent();
	const rd = scene.revealDelays ?? {};

	// Branch: if bullets are present, render a structured-list layout rather
	// than the hero-word layout. Hero-word treatment is for single-term
	// definitions ("One mole."); list treatment is for "Five indicators…".
	if (scene.bullets && scene.bullets.length > 0) {
		return <DefinitionListLayout scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
	}

	const {hero, sub} = splitHeading(scene.heading);
	// Try to find a key word inside the hero to circle. Falls back to whole hero.
	const heroCircleTarget = pickCircleTarget(hero);
	const bodyHighlight = pickBodyHighlight(scene.body);
	const annotationLabel = pickAnnotationLabel(scene);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} dot="2.1" topic="KEY TERM" sceneType="definition" sceneIndex={sceneIndex} totalScenes={totalScenes} />
			<AmbientGlow left={28} top={214} width={940} height={330} delay={130} opacity={0.09} />

			{/* Mono eyebrow */}
			<div style={{position: 'absolute', top: 150, left: 64}}>
				<Eyebrow color={TOK.inkDim}>DEFINITION</Eyebrow>
			</div>

			{/* Hero word with scribble circle + handwritten annotation */}
			<div
				style={{
					position: 'absolute',
					top: 240,
					left: 64,
					right: 64,
				}}
			>
				<FadeUp delay={rd.hero ?? 12} durationFrames={14}>
					<div
						style={{
							fontSize: 200,
							fontWeight: 800,
							lineHeight: 1,
							letterSpacing: '-0.04em',
							position: 'relative',
							display: 'inline-block',
						}}
					>
						<HeroWithCircle
							text={hero}
							circleTarget={heroCircleTarget}
							circleDelay={rd.circle ?? 24}
							annotationLabel={annotationLabel}
							annotationDelay={rd.annotation ?? 36}
						/>
											</div>
				</FadeUp>

				{sub ? (
					<FadeUp delay={rd.subheading ?? 42} durationFrames={14}>
						<div
							style={{
								fontSize: 88,
								fontWeight: 600,
								lineHeight: 1.05,
								letterSpacing: '-0.03em',
								color: theme.accent2,
								marginTop: 42,
							}}
						>
							<ScientificSub text={sub} delay={rd.subheading ?? 42} />
						</div>
					</FadeUp>
				) : null}
			</div>

			{/* Body with highlighted phrase */}
			<div
				style={{
					position: 'absolute',
					bottom: 240,
					left: 64,
					right: hasUnitTable(scene) || scene.image ? 760 : 64,
					maxWidth: hasUnitTable(scene) || scene.image ? 1020 : 1500,
				}}
			>
				<FadeUp delay={rd.body ?? 70} durationFrames={12}>
					<div
						style={{
							height: 1,
							background: TOK.rule,
							marginBottom: 28,
						}}
					/>
				</FadeUp>
				<FadeUp delay={rd.body ?? 70} durationFrames={14}>
					<div
						style={{
							fontSize: 32,
							lineHeight: 1.4,
							fontWeight: 400,
							color: TOK.ink,
						}}
					>
						<BodyWithHighlight
							text={scene.body}
							highlightPhrase={bodyHighlight}
							highlightDelay={rd.highlight ?? 90}
						/>
					</div>
				</FadeUp>
				{scene.secondary ? (
					<FadeUp delay={rd.secondary ?? 100} durationFrames={14}>
						<div
							style={{
								fontSize: 24,
								lineHeight: 1.45,
								color: TOK.inkDim,
								marginTop: 22,
								maxWidth: 1300,
								display: 'flex',
								flexDirection: 'column',
								gap: 10,
							}}
						>
							{splitSecondary(scene.secondary).map((line, i) => (
								<div key={i}>
									<ConceptText baseColor={TOK.inkDim}>{line}</ConceptText>
								</div>
							))}
						</div>
					</FadeUp>
				) : null}
			</div>

			{hasUnitTable(scene) ? (
				<UnitTable diagram={scene.diagram} delay={rd.unitTable ?? 84} />
			) : scene.image && ASSETS[scene.image as AssetName] ? (
				<FadeUp delay={rd.unitTable ?? 84} durationFrames={16} dy={22}>
					<img
						src={ASSETS[scene.image as AssetName]}
						alt=""
						style={{
							position: 'absolute',
							right: 64,
							bottom: 250,
							width: 540,
							maxHeight: 620,
							objectFit: 'contain',
							filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.18))',
						}}
					/>
				</FadeUp>
			) : null}

			{/* Callout */}
			{scene.callout ? (
				<div style={{position: 'absolute', bottom: 150, left: 64}}>
					<FadeUp delay={rd.callout ?? 140} durationFrames={14} dy={20}>
						<div
							style={{
								fontSize: 28,
								fontStyle: 'italic',
								color: TOK.amber,
								fontWeight: 500,
								letterSpacing: '-0.01em',
							}}
						>
							→ {scene.callout}
						</div>
					</FadeUp>
				</div>
			) : null}
		</SlideFrame>
	);
};

const hasUnitTable = (
	scene: TextScene,
): scene is TextScene & {diagram: {type: 'table'; headers: string[]; rows: string[][]}} =>
	scene.diagram?.type === 'table';

const UnitTable = ({
	diagram,
	delay,
}: {
	diagram: {type: 'table'; headers: string[]; rows: string[][]};
	delay: number;
}) => (
	<aside
		style={{
			position: 'absolute',
			right: 64,
			bottom: 250,
			width: 610,
		}}
	>
		<FadeUp
			delay={delay}
			durationFrames={16}
			dy={22}
			style={{
				position: 'relative',
				padding: '30px 34px 34px',
				background: TOK.bgLift,
				border: `1px solid ${TOK.rule}`,
				boxShadow: `0 0 70px ${TOK.chem1}18`,
			}}
		>
			<AmbientBorderPulse delay={150} color={TOK.chem1} opacity={0.14} />
			<div
				style={{
					fontFamily: FONT_MONO,
					fontSize: 18,
					color: TOK.chem2,
					letterSpacing: '0.18em',
					textTransform: 'uppercase',
					marginBottom: 22,
				}}
			>
				UNIT TRANSLATOR
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '160px 1fr',
					fontFamily: FONT_MONO,
					fontSize: 17,
					color: TOK.inkMute,
					letterSpacing: '0.1em',
					textTransform: 'uppercase',
					borderBottom: `1px solid ${TOK.rule}`,
					paddingBottom: 12,
					marginBottom: 4,
				}}
			>
				<div>{diagram.headers[0] ?? 'Symbol'}</div>
				<div>{diagram.headers[1] ?? 'Meaning'}</div>
			</div>
			{diagram.rows.map((row, index) => (
				<FadeUp key={`${row[0]}-${row[1]}`} delay={delay + 16 + index * 12} durationFrames={12} dy={12}>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '160px 1fr',
							gap: 18,
							alignItems: 'center',
							padding: '18px 0',
							borderBottom: index === diagram.rows.length - 1 ? 'none' : `1px solid ${TOK.rule}`,
						}}
					>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 34,
								fontWeight: 700,
								color: TOK.amber,
								letterSpacing: '-0.03em',
							}}
						>
							<MathText text={row[0] ?? ''} />
						</div>
						<div style={{fontSize: 26, color: TOK.ink, lineHeight: 1.25}}>
							{row[1]}
						</div>
					</div>
				</FadeUp>
			))}
		</FadeUp>
	</aside>
);

// ─── Hero with circle + annotation ──────────────────────────────────────

const HeroWithCircle = ({
	text,
	circleTarget,
	circleDelay,
	annotationLabel,
	annotationDelay,
}: {
	text: string;
	circleTarget: {start: number; end: number} | null;
	circleDelay: number;
	annotationLabel: string | null;
	annotationDelay: number;
}) => {
	if (!circleTarget) {
		return (
			<FadeUp delay={12} durationFrames={14} dy={18}>
				{text}
			</FadeUp>
		);
	}

	const before = text.slice(0, circleTarget.start);
	const target = text.slice(circleTarget.start, circleTarget.end);
	const after = text.slice(circleTarget.end);
	const targetPx = target.length * 100;

	return (
		<>
			<span>{before}</span>
			<span style={{position: 'relative', display: 'inline-block'}}>
				{target}
				<div
					style={{
						position: 'absolute',
						top: -76,
						left: -76,
						pointerEvents: 'none',
					}}
				>
					<ScribbleCircle
						width={Math.max(360, targetPx + 180)}
						height={308}
						color={TOK.amber}
						strokeWidth={5}
						seed={5}
						loops={2}
						delay={circleDelay}
						durationFrames={36}
					/>
				</div>
				{annotationLabel ? (
					<div
						style={{
							position: 'absolute',
							top: -10,
							left: '100%',
							marginLeft: 60,
							fontFamily: FONT_HAND,
							fontSize: 48,
							color: TOK.amber,
							fontWeight: 600,
							transform: 'rotate(-6deg)',
							whiteSpace: 'nowrap',
						}}
					>
						<FadeUp delay={annotationDelay} durationFrames={14} dy={12}>
							{annotationLabel}
						</FadeUp>
					</div>
				) : null}
			</span>
			<span>{after}</span>
		</>
	);
};

// ─── Body text with highlight wipe ──────────────────────────────────────

const BodyWithHighlight = ({
	text,
	highlightPhrase,
	highlightDelay,
}: {
	text: string;
	highlightPhrase: string | null;
	highlightDelay: number;
}) => {
	if (!highlightPhrase) {
		return <>{text}</>;
	}

	const lower = text.toLowerCase();
	const idx = lower.indexOf(highlightPhrase.toLowerCase());
	if (idx === -1) return <>{text}</>;

	const before = text.slice(0, idx);
	const phrase = text.slice(idx, idx + highlightPhrase.length);
	const after = text.slice(idx + highlightPhrase.length);

	return (
		<>
			{before}
			<HighlightWipe delay={highlightDelay} durationFrames={12} color={TOK.amber} opacity={0.25}>
				{phrase}
			</HighlightWipe>
			{after}
		</>
	);
};

const ScientificSub = ({text, delay}: {text: string; delay: number}) => {
	const match = text.match(/^(.*?)(\d+\.\d+\s*[×x]\s*10[⁰¹²³⁴⁵⁶⁷⁸⁹0-9]+)(.*)$/);
	if (match) {
		return (
			<>
				{match[1]}
				<NumberTicker to={match[2]} delay={delay} durationFrames={24} decimals={3} />
				{match[3]}
			</>
		);
	}
	return <>{text}</>;
};


const MathText = ({text}: {text: string}) => {
	const pieces = text.split(/(mol⁻¹|mol|g\/mol|g)/g).filter(Boolean);

	return (
		<>
			{pieces.map((piece, index) => (
				<span
					key={`${piece}-${index}`}
					style={{
						color: ['mol', 'mol⁻¹', 'g/mol'].includes(piece) ? TOK.chem2 : undefined,
					}}
				>
					{piece}
				</span>
			))}
		</>
	);
};

// ─── Heuristics for parsing JSON content ───────────────────────────────

function splitSecondary(secondary: string): string[] {
	// Split on sentence boundary so each "Term. Definition." pair gets its
	// own line in the rendered stack. Falls back to the whole string if
	// no boundary is found.
	const parts = secondary
		.split(/(?<=[.!?])\s+(?=[A-Z])/)
		.map((p) => p.trim())
		.filter(Boolean);
	return parts.length > 0 ? parts : [secondary];
}

function splitHeading(heading: string): {hero: string; sub: string | null} {
	// Split on `=` if present — formula-style headings get their RHS on a second line.
	const eqIdx = heading.indexOf('=');
	if (eqIdx > 0) {
		return {
			hero: heading.slice(0, eqIdx).trim(),
			sub: '= ' + heading.slice(eqIdx + 1).trim(),
		};
	}
	return {hero: heading.trim(), sub: null};
}

// Look for a single noun in the hero text to circle (e.g. "mole" in "One mole").
// Falls back to null (no circle) if no good target is found.
function pickCircleTarget(hero: string): {start: number; end: number} | null {
	const lower = hero.toLowerCase();
	if (lower.startsWith('one mole')) {
		return {start: 0, end: 'one mole'.length};
	}
	const candidates = ['mole', 'mol', 'moles'];
	for (const c of candidates) {
		const idx = lower.indexOf(c);
		if (idx >= 0) {
			// ensure it's a whole-word match
			const before = idx === 0 ? ' ' : lower[idx - 1];
			const after = idx + c.length >= lower.length ? ' ' : lower[idx + c.length];
			if (!/[a-z]/.test(before) && !/[a-z]/.test(after)) {
				return {start: idx, end: idx + c.length};
			}
		}
	}
	return null;
}

function pickBodyHighlight(body: string): string | null {
	// Prefer Avogadro-style numerals; fall back to a few key chemistry phrases.
	const candidates = [
		'6.022 × 10²³',
		'6.022 × 10^23',
		'elementary entities',
		'amount of substance',
	];
	for (const c of candidates) {
		if (body.includes(c)) return c;
	}
	return null;
}

function pickAnnotationLabel(scene: TextScene): string | null {
	const headingLower = scene.heading.toLowerCase();
	if (headingLower.includes('mole')) return '↑ symbol: mol';
	if (headingLower.includes('avogadro')) return '↑ Nₐ';
	return null;
}

// ─── Definition rendered as structured list (when bullets present) ──────
//
// Used for definition scenes that are actually frameworks/lists rather than
// single-term definitions — e.g. "Five indicators of chemical change". The
// hero-word treatment is wrong for these; we use a tighter heading + bullet
// reveal instead.

const DefinitionListLayout = ({
	scene,
	lesson,
	sceneIndex,
	totalScenes,
}: DefinitionSlideProps) => {
	const theme = useAccent();
	const rd = scene.revealDelays ?? {};
	const bulletStart = rd.bulletsStart ?? rd.body ?? 70;
	const bulletEnd = Math.max(bulletStart + 60, scene.durationInFrames - 90);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} dot="2.1" topic="KEY TERM" sceneType="definition" sceneIndex={sceneIndex} totalScenes={totalScenes} />
			<AmbientGlow left={28} top={214} width={940} height={330} delay={130} opacity={0.09} />

			<div style={{position: 'absolute', top: 150, left: 64}}>
				<Eyebrow color={TOK.inkDim}>DEFINITION</Eyebrow>
			</div>

			<div
				style={{
					position: 'absolute',
					top: 200,
					left: 64,
					right: scene.image ? 760 : 64,
					maxWidth: scene.image ? 1080 : 1700,
				}}
			>
				<FadeUp delay={rd.heading ?? 12} durationFrames={14} dy={20}>
					<StampInTitle delay={rd.heading ?? 12} color={TOK.ink} underlineColor={theme.accent}>
						<h1
							style={{
								margin: 0,
								fontSize: fitDefinitionListHeadingSize(scene.heading),
								fontWeight: 800,
								lineHeight: 1.02,
								letterSpacing: '-0.035em',
								color: TOK.ink,
							}}
						>
							{scene.heading}
													</h1>
					</StampInTitle>
				</FadeUp>

				{scene.body ? (
					<FadeUp delay={rd.subheading ?? 36} durationFrames={14} dy={14}>
						<p
							style={{
								margin: '24px 0 0',
								fontSize: 26,
								lineHeight: 1.4,
								color: TOK.inkDim,
								maxWidth: 980,
							}}
						>
							<ConceptText baseColor={TOK.inkDim}>{scene.body}</ConceptText>
						</p>
					</FadeUp>
				) : null}

				<div style={{marginTop: 36}}>
					<BulletReveal
						bullets={scene.bullets!}
						startFrame={bulletStart}
						endFrame={bulletEnd}
						markerColor={theme.accent}
						fontSize={32}
					/>
				</div>
			</div>

			{scene.image && ASSETS[scene.image as AssetName] ? (
				<FadeUp delay={rd.diagram ?? 90} durationFrames={16} dy={22}>
					<img
						src={ASSETS[scene.image as AssetName]}
						alt=""
						style={{
							position: 'absolute',
							right: 64,
							top: 220,
							width: 620,
							maxHeight: 660,
							objectFit: 'contain',
							filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.18))',
						}}
					/>
				</FadeUp>
			) : null}

			{scene.callout ? (
				<div style={{position: 'absolute', bottom: 150, left: 64}}>
					<FadeUp delay={rd.callout ?? 200} durationFrames={14} dy={20}>
						<div
							style={{
								fontSize: 28,
								fontStyle: 'italic',
								color: TOK.amber,
								fontWeight: 500,
								letterSpacing: '-0.01em',
							}}
						>
							→ {scene.callout}
						</div>
					</FadeUp>
				</div>
			) : null}
		</SlideFrame>
	);
};

const fitDefinitionListHeadingSize = (heading: string) => {
	if (heading.length > 36) return 56;
	if (heading.length > 26) return 64;
	return 72;
};
