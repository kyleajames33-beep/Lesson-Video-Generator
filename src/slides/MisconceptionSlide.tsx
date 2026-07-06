// MisconceptionSlide — gold-standard re-skin (Phase 3, 2026-05-01).
//
// Purpose: prevent the exam mistake at the exact moment students are likely
// to make it. The mistake/fix comparison is built directly in the slide
// instead of using old light-theme diagrams.

import type {LessonData, TextScene} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleBox, ScribbleMark, ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {ConceptText} from './shared/ConceptText';
import {FONT_HAND, FONT_MONO, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type MisconceptionSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

export const MisconceptionSlide = ({scene, lesson, sceneIndex, totalScenes}: MisconceptionSlideProps) => {
	const rd = scene.revealDelays ?? {};
	const compare = getCompareData(scene);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} dot="2.1" topic="COMMON TRAP" sceneType="misconception" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			{/* Red warning vignette — makes the whole scene feel different from normal teaching slides. */}
			<div
				aria-hidden
				style={{
					position: 'absolute',
					inset: 0,
					pointerEvents: 'none',
					background: 'radial-gradient(ellipse 90% 80% at 50% 40%, transparent 50%, rgba(224,122,58,0.12) 100%)',
					mixBlendMode: 'screen',
					zIndex: 1,
				}}
			/>

			<TrapWarningBanner delay={(rd.heading ?? 16) - 8} />

			<div style={{position: 'absolute', top: 156, left: 64, right: 64}}>
				<Eyebrow color={TOK.inkDim}>COMMON TRAP</Eyebrow>

				<FadeUp delay={rd.heading ?? 16} durationFrames={14} dy={18}>
					<StampInTitle delay={16} color={TOK.ink} underlineColor={TOK.amber}>
						<div
							style={{
								marginTop: 14,
								fontSize: TYPE.h2.fontSize,
								fontWeight: TYPE.h2.fontWeight,
								lineHeight: TYPE.h2.lineHeight,
								letterSpacing: '-0.035em',
								color: TOK.ink,
								maxWidth: 1320,
							}}
						>
							{scene.heading}
						</div>
					</StampInTitle>
				</FadeUp>
			</div>

			{scene.image && ASSETS[scene.image as AssetName] && (
				<FadeUp delay={rd.diagram ?? 30} durationFrames={16} dy={14}>
					<img
						src={ASSETS[scene.image as AssetName]}
						alt=""
						style={{
							position: 'absolute',
							right: 64,
							top: 240,
							width: 520,
							maxHeight: 160,
							objectFit: 'contain',
							filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
						}}
					/>
				</FadeUp>
			)}
			{scene.mistakeTag ? (
				<MistakeStamp text={scene.mistakeTag} delay={rd.mistakeTag ?? 38} />
			) : null}

			<div
				style={{
					position: 'absolute',
					top: 346,
					left: 64,
					right: 64,
					display: 'grid',
					gridTemplateColumns: 'minmax(0, 0.92fr) minmax(0, 1.08fr)',
					gap: 34,
					alignItems: 'stretch',
				}}
			>
				<AmbientGlow left="46%" top={-20} width="54%" height={420} delay={128} opacity={0.08} speedSeconds={6.4} />
				<MistakeCard
					label="Mistake"
					title={compare.wrongTitle}
					body={compare.wrongBody}
					tone="wrong"
					delay={rd.wrongCard ?? 58}
				/>
				<MistakeCard
					label="Fix"
					title={compare.rightTitle}
					body={compare.rightBody}
					tone="right"
					delay={rd.rightCard ?? 88}
				/>
			</div>

			{scene.callout ? (
				<div style={{position: 'absolute', left: 64, right: 64, bottom: 150}}>
					<FadeUp delay={rd.callout ?? 150} durationFrames={14} dy={18}>
						<div
							style={{
								position: 'relative',
								width: 'fit-content',
								maxWidth: 1200,
								margin: '0 auto',
								padding: '24px 36px',
								borderRadius: 12,
								border: `1px solid ${TOK.rule}`,
								background: 'rgba(15,22,20,0.78)',
								color: TOK.amber,
								fontSize: 34,
								fontWeight: 700,
								fontStyle: 'italic',
								letterSpacing: '-0.012em',
								boxShadow: '0 24px 80px rgba(0,0,0,0.26)',
							}}
						>
							→ {scene.callout}
							<div style={{position: 'absolute', left: 38, right: 38, bottom: 8, pointerEvents: 'none'}}>
								<ScribbleUnderline
									width={Math.min(860, Math.max(320, scene.callout.length * 18))}
									color={TOK.amber}
									strokeWidth={4}
									seed={19}
									strokes={2}
									delay={168}
									durationFrames={16}
								/>
							</div>
						</div>
					</FadeUp>
				</div>
			) : null}
		</SlideFrame>
	);
};

const MistakeCard = ({
	label,
	title,
	body,
	tone,
	delay,
}: {
	label: string;
	title: string;
	body: string;
	tone: 'wrong' | 'right';
	delay: number;
}) => {
	const theme = useAccent();
	const color = tone === 'wrong' ? TOK.phys : theme.accent2;

	return (
		<FadeUp delay={delay} durationFrames={16} dy={24}>
			<div
				style={{
					position: 'relative',
					minHeight: 360,
					padding: '32px 34px',
					borderRadius: 14,
					border: `1px solid ${tone === 'wrong' ? 'rgba(224,122,58,0.34)' : 'rgba(111,217,184,0.34)'}`,
					background:
						tone === 'wrong'
							? 'linear-gradient(135deg, rgba(224,122,58,0.13), rgba(15,22,20,0.76))'
							: 'linear-gradient(135deg, rgba(31,138,111,0.18), rgba(15,22,20,0.76))',
					boxShadow: '0 26px 90px rgba(0,0,0,0.28)',
					overflow: 'hidden',
				}}
			>
				{tone === 'right' ? (
					<AmbientBorderPulse delay={delay + 62} color={theme.accent2} opacity={0.12} style={{borderRadius: 14}} />
				) : null}
				<div style={{position: 'absolute', top: 20, right: 24, width: 54, height: 54}}>
					<ScribbleMark
						kind={tone === 'wrong' ? 'cross' : 'check'}
						size={54}
						color={color}
						strokeWidth={5}
						seed={tone === 'wrong' ? 41 : 43}
						delay={delay + 20}
						durationFrames={14}
					/>
				</div>

				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: 18,
						letterSpacing: '0.16em',
						color,
						textTransform: 'uppercase',
						marginBottom: 26,
					}}
				>
					{label}
				</div>
				<div
					style={{
						fontSize: 46,
						lineHeight: 1.05,
						fontWeight: 760,
						color: TOK.ink,
						letterSpacing: '-0.025em',
						maxWidth: 690,
					}}
				>
					{title}
				</div>
				<div
					style={{
						marginTop: 28,
						maxWidth: 720,
						fontSize: 29,
						lineHeight: 1.34,
						color: tone === 'wrong' ? TOK.inkDim : TOK.ink,
						fontWeight: tone === 'wrong' ? 460 : 560,
					}}
				>
					<ConceptText baseColor={tone === 'wrong' ? TOK.inkDim : TOK.ink}>{body}</ConceptText>
				</div>

				{tone === 'right' ? (
					<div style={{position: 'absolute', inset: 10, pointerEvents: 'none', opacity: 0.7}}>
						<ScribbleBox
							width={820}
							height={340}
							color={theme.accent2}
							strokeWidth={2}
							seed={27}
							delay={delay + 30}
							durationFrames={28}
						/>
					</div>
				) : null}
			</div>
		</FadeUp>
	);
};

// Banner that drops in dramatically — signals "this is the thing that
// will cost you marks." Hand-drawn red text on the dark stage. Positioned
// under the top chrome row so it does not overlap the lesson-position
// info ("L1A OF 12 · HSC · YEAR 11").
const TrapWarningBanner = ({delay}: {delay: number}) => (
	<FadeUp
		delay={delay}
		durationFrames={14}
		dy={28}
		style={{
			position: 'absolute',
			top: 104,
			right: 64,
			transform: 'rotate(-3deg)',
			zIndex: 30,
		}}
	>
		<div
			style={{
				position: 'relative',
				display: 'inline-flex',
				alignItems: 'center',
				gap: 14,
				padding: '10px 22px 12px',
				border: `3px solid ${TOK.phys}`,
				borderRadius: 6,
				background: 'rgba(224,122,58,0.10)',
				boxShadow: `0 14px 40px rgba(224,122,58,0.18), inset 0 0 0 1px rgba(255,255,255,0.04)`,
			}}
		>
			<span
				style={{
					fontFamily: FONT_HAND,
					fontSize: 44,
					fontWeight: 700,
					color: TOK.phys,
					lineHeight: 1,
					letterSpacing: '-0.01em',
				}}
			>
				⚠ exam trap
			</span>
		</div>
	</FadeUp>
);

const MistakeStamp = ({text, delay}: {text: string; delay: number}) => (
	<FadeUp
		delay={delay}
		durationFrames={12}
		dy={16}
		style={{
			position: 'absolute',
			top: 232,
			right: 92,
			transform: 'rotate(4deg)',
		}}
	>
		<div
			style={{
				fontFamily: FONT_HAND,
				fontSize: 54,
				fontWeight: 700,
				color: TOK.phys,
				letterSpacing: '-0.02em',
				whiteSpace: 'nowrap',
			}}
		>
			{text}
		</div>
	</FadeUp>
);

const getCompareData = (scene: TextScene) => {
	if (scene.diagram?.type === 'beforeAfter') {
		return {
			wrongTitle: scene.diagram.beforeLabel,
			rightTitle: scene.diagram.afterLabel,
			wrongBody: scene.diagram.beforeContent,
			rightBody: scene.diagram.afterContent,
		};
	}

	// JSONs in M3 put the full wrong + right argument inside `body` and put
	// the corrective rule in `callout`. Split body where we can; otherwise
	// fall back to the callout for the fix panel.
	const split = splitMisconceptionBody(scene.body);

	return {
		wrongTitle: 'The tempting shortcut',
		rightTitle: 'The correction',
		wrongBody: split.wrong ?? scene.body,
		rightBody:
			scene.secondary ??
			split.right ??
			scene.callout ??
			'Name the test first, then apply the rule.',
	};
};

// Heuristics for splitting a misconception `body` paragraph into a "wrong
// instinct" half and a "corrected rule" half. Looks for explicit divider
// phrases used across the M3 lessons (e.g. "The correct rule:", "Instead",
// "Actually"). If no clean divider is found we just return the wrong half
// as the leading sentence(s) so the right panel can fall back to callout.
const SPLIT_MARKERS = [
	'The correct rule:',
	'The fix:',
	'The actual rule:',
	'Actually,',
	'Instead,',
	'Instead of',
	'But the actual',
	'But the correct',
	'The truth is',
	'In fact,',
];

const splitMisconceptionBody = (body: string): {wrong: string | null; right: string | null} => {
	for (const marker of SPLIT_MARKERS) {
		const idx = body.indexOf(marker);
		if (idx > 0) {
			return {
				wrong: body.slice(0, idx).trim(),
				right: body.slice(idx).trim(),
			};
		}
	}

	// No clean divider — just use the first 1–2 sentences as the wrong
	// instinct and let the caller fall back to callout for the right.
	const sentences = body.split(/(?<=[.!?])\s+/);
	if (sentences.length >= 2) {
		return {wrong: sentences.slice(0, 2).join(' '), right: null};
	}

	return {wrong: null, right: null};
};
