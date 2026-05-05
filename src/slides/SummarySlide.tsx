// SummarySlide — gold-standard re-skin (Phase 1.11, 2026-05-01).
//
// Pattern: docs/design-canvas-reference/scenes.jsx SceneRecap, adapted for
// HSC: compact takeaways + one final decision rule. The recap should feel
// like a usable exam checklist, not a decorative end card.

import type {LessonData, SummaryScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleMark, ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {MathText} from './shared/MathText';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';

type SummarySlideProps = {
	scene: SummaryScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

export const SummarySlide = ({scene, lesson, sceneIndex, totalScenes}: SummarySlideProps) => {
	const takeaways = scene.points.map(toTakeaway);

	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="THE RECAP" sceneType="summary" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<header style={{position: 'absolute', top: 138, left: 64, right: 64}}>
				<Eyebrow color={TOK.inkDim}>◆ FIVE THINGS TO REMEMBER</Eyebrow>
				<FadeUp delay={18} durationFrames={16} dy={24}>
					<StampInTitle delay={18} color={TOK.ink} underlineColor={TOK.amber}>
						<h1
							style={{
								margin: '18px 0 0',
								fontSize: TYPE.h1.fontSize,
								fontWeight: TYPE.h1.fontWeight,
								lineHeight: TYPE.h1.lineHeight,
								letterSpacing: '-0.04em',
								maxWidth: 1120,
							}}
						>
							{scene.heading.replace(' — Key Ideas', '')}
							<span style={{color: TOK.chem1}}>.</span>
						</h1>
					</StampInTitle>
				</FadeUp>
			</header>

			<div
				style={{
					position: 'absolute',
					top: 360,
					left: 64,
					width: 1120,
					display: 'grid',
					gap: 8,
				}}
			>
				{takeaways.map((takeaway, index) => (
					<TakeawayRow
						key={`${index}-${takeaway.title}`}
						index={index}
						title={takeaway.title}
						detail={takeaway.detail}
						delay={52 + index * 54}
					/>
				))}
			</div>

			{scene.finalPrompt ? (
				<FinalRuleCard text={scene.finalPrompt} delay={360} />
			) : null}
		</SlideFrame>
	);
};

const TakeawayRow = ({
	index,
	title,
	detail,
	delay,
}: {
	index: number;
	title: string;
	detail: string;
	delay: number;
}) => (
	<FadeUp delay={delay} durationFrames={16} dy={22}>
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '74px minmax(0, 1fr)',
				gap: 22,
				alignItems: 'start',
				minHeight: 72,
				padding: '10px 0 12px',
				borderBottom: `1px solid ${TOK.rule}`,
			}}
		>
			<div
				style={{
					fontFamily: FONT_MONO,
					fontSize: 24,
					color: TOK.inkDim,
					border: `1px solid ${TOK.inkDim}`,
					borderRadius: 4,
					padding: '8px 0',
					textAlign: 'center',
					letterSpacing: '0.08em',
					lineHeight: 1,
				}}
			>
				{String(index + 1).padStart(2, '0')}
			</div>
			<div>
				<div
					style={{
						fontSize: TYPE.section.fontSize,
						fontWeight: TYPE.section.fontWeight,
						lineHeight: TYPE.section.lineHeight,
						letterSpacing: '-0.02em',
						marginBottom: 6,
					}}
				>
					<MathText text={title} />
				</div>
				<div
					style={{
						fontSize: TYPE.bodySmall.fontSize,
						lineHeight: TYPE.bodySmall.lineHeight,
						color: TOK.inkDim,
						maxWidth: 940,
					}}
				>
					<MathText text={detail} muted />
				</div>
			</div>
		</div>
	</FadeUp>
);

const FinalRuleCard = ({text, delay}: {text: string; delay: number}) => (
	<FadeUp delay={delay} durationFrames={18} dy={28}>
		<aside
			style={{
				position: 'absolute',
				right: 64,
				top: 400,
				width: 560,
				minHeight: 330,
				padding: '38px 40px',
				background: TOK.bgLift,
				border: `1px solid ${TOK.chem1}`,
				boxShadow: `0 0 80px ${TOK.chem1}22`,
			}}
		>
			<AmbientGlow left={-90} top={-80} width={720} height={500} delay={delay + 70} opacity={0.1} speedSeconds={6.5} />
			<AmbientBorderPulse delay={delay + 72} color={TOK.chem1} opacity={0.16} />
			<div
				style={{
					fontFamily: FONT_MONO,
					fontSize: 18,
					color: TOK.chem2,
					letterSpacing: '0.18em',
					textTransform: 'uppercase',
					marginBottom: 28,
				}}
			>
				EXAM DECISION RULE
			</div>
			<div
				style={{
					position: 'relative',
					fontSize: 54,
					fontWeight: 800,
					lineHeight: 1.05,
					letterSpacing: '-0.035em',
					color: TOK.amber,
					marginBottom: 34,
				}}
			>
				{text}
				<div style={{position: 'absolute', left: -6, bottom: -46}}>
					<ScribbleUnderline
						width={420}
						color={TOK.amber}
						strokeWidth={5}
						seed={41}
						delay={delay + 24}
						durationFrames={16}
					/>
				</div>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '64px 1fr',
					gap: 20,
					alignItems: 'center',
					color: TOK.inkDim,
					fontSize: 25,
					lineHeight: 1.35,
				}}
			>
				<ScribbleMark
					kind="check"
					size={56}
					color={TOK.chem1}
					strokeWidth={6}
					seed={43}
					delay={delay + 34}
					durationFrames={14}
				/>
				<div>
					If the question asks for particles, use <MathText text="N" />. If it asks for amount,
					use <MathText text="n" />.
				</div>
			</div>
		</aside>
	</FadeUp>
);

const toTakeaway = (point: string): {title: string; detail: string} => {
	const direct = TAKEAWAY_OVERRIDES.find(([prefix]) => point.startsWith(prefix));
	if (direct) return {title: direct[1], detail: point};

	const colon = point.indexOf(':');
	if (colon > 0 && colon < 48) {
		return {
			title: point.slice(0, colon).trim(),
			detail: point.slice(colon + 1).trim(),
		};
	}

	const sentenceEnd = point.indexOf('.');
	if (sentenceEnd > 0 && sentenceEnd < 80) {
		return {
			title: point.slice(0, sentenceEnd).trim(),
			detail: point.slice(sentenceEnd + 1).trim(),
		};
	}

	return {title: 'Key idea', detail: point};
};

const TAKEAWAY_OVERRIDES: Array<[string, string]> = [
	['The mole is a counting unit', 'Counting unit'],
	['Capital N', 'Symbols matter'],
	['Formula:', 'Formula'],
	['Units always cancel', 'Unit check'],
	['Nₐ was defined', 'Carbon-12 link'],
];
