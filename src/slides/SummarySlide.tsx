// SummarySlide — gold-standard re-skin (Phase 1.11, 2026-05-01).
//
// Pattern: docs/design-canvas-reference/scenes.jsx SceneRecap, adapted for
// HSC: compact takeaways + one final decision rule. The recap should feel
// like a usable exam checklist, not a decorative end card.

import type {LessonData, SummaryScene} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {MathText} from './shared/MathText';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type SummarySlideProps = {
	scene: SummaryScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

export const SummarySlide = ({scene, lesson, sceneIndex, totalScenes}: SummarySlideProps) => {
	const rd = scene.revealDelays ?? {};
	const takeaways = scene.points.map(toTakeaway);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} dot="2.1" topic="THE RECAP" sceneType="summary" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<header style={{position: 'absolute', top: 138, left: 64, right: 64}}>
				<Eyebrow color={TOK.inkDim}>◆ FIVE THINGS TO REMEMBER</Eyebrow>
				<FadeUp delay={rd.heading ?? 18} durationFrames={16} dy={24}>
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
							{scene.heading.replace(/[ ,—–-]+Key Ideas\.?$/i, '')}
						</h1>
					</StampInTitle>
				</FadeUp>
			</header>

			<div
				style={{
					position: 'absolute',
					top: 286,
					left: 64,
					// Stay clear of the FinalRuleCard (right:64 width:560) → 1920-64-560-32 gap
					width: scene.finalPrompt ? 1080 : 1792,
					display: 'grid',
					gap: 2,
				}}
			>
				{takeaways.map((takeaway, index) => {
					// Per-takeaway anchored delays take precedence over the
					// uniform start+interval timing. Auto-sync-reveals fills
					// `takeawayAts` by matching each point against narration.
					const ats = (rd as {takeawayAts?: number[]}).takeawayAts;
					const delay = ats && ats[index] !== undefined
						? ats[index]
						: (rd.takeawaysStart ?? 52) + index * (rd.takeawayInterval ?? 54);
					return (
						<TakeawayRow
							key={`${index}-${takeaway.title}`}
							index={index}
							title={takeaway.title}
							detail={takeaway.detail}
							compact={takeaways.length >= 5}
							delay={delay}
						/>
					);
				})}
			</div>

			{scene.image && ASSETS[scene.image as AssetName] && (
				<FadeUp delay={rd.diagram ?? 40} durationFrames={16} dy={18}>
					<img
						src={ASSETS[scene.image as AssetName]}
						alt=""
						style={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
							bottom: 140,
							width: 720,
							maxHeight: 200,
							objectFit: 'contain',
							filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
						}}
					/>
				</FadeUp>
			)}
			{scene.finalPrompt ? (
				<FinalRuleCard text={scene.finalPrompt} delay={rd.finalPrompt ?? 360} />
			) : null}
		</SlideFrame>
	);
};

const TakeawayRow = ({
	index,
	title,
	detail,
	delay,
	compact,
}: {
	index: number;
	title: string;
	detail: string;
	delay: number;
	compact?: boolean;
}) => {
	const titleSize = compact ? 36 : TYPE.section.fontSize;
	const detailSize = compact ? 22 : TYPE.bodySmall.fontSize;
	const rowMinHeight = compact ? 56 : 72;
	const rowPad = compact ? '6px 0 8px' : '10px 0 12px';
	const numberSize = compact ? 22 : 24;

	return (
		<FadeUp delay={delay} durationFrames={16} dy={22}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '74px minmax(0, 1fr)',
					gap: 22,
					alignItems: 'start',
					minHeight: rowMinHeight,
					padding: rowPad,
					borderBottom: `1px solid ${TOK.rule}`,
				}}
			>
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: numberSize,
						color: TOK.inkDim,
						border: `1px solid ${TOK.inkDim}`,
						borderRadius: 4,
						padding: '6px 0',
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
							fontSize: titleSize,
							fontWeight: 700,
							lineHeight: 1.08,
							letterSpacing: '-0.02em',
							marginBottom: detail ? 4 : 0,
						}}
					>
						<MathText text={title} />
					</div>
					{detail ? (
						<div
							style={{
								fontSize: detailSize,
								lineHeight: 1.36,
								color: TOK.inkDim,
								maxWidth: 940,
							}}
						>
							<MathText text={detail} muted />
						</div>
					) : null}
				</div>
			</div>
		</FadeUp>
	);
};

// The single "EXAM DECISION RULE" card. `text` is the lesson's own finalPrompt
// (e.g. bio "Every cross: define symbols, infer genotypes…"). Previously this
// card hardcoded the chemistry mole "use N for particles / n for amount" rule
// below the prompt, which leaked onto every summary (incl. non-mole chem and all
// biology); that detail is removed so the card is generic + subject-themed.
const FinalRuleCard = ({text, delay}: {text: string; delay: number}) => {
	const theme = useAccent();
	return (
		<FadeUp delay={delay} durationFrames={18} dy={28}>
			<aside
				style={{
					position: 'absolute',
					right: 64,
					top: 400,
					width: 560,
					minHeight: 250,
					padding: '38px 40px',
					background: TOK.bgLift,
					border: `1px solid ${theme.accent}`,
					boxShadow: `0 0 80px ${theme.accent}22`,
				}}
			>
				<AmbientGlow left={-90} top={-80} width={720} height={500} delay={delay + 70} opacity={0.1} speedSeconds={6.5} />
				<AmbientBorderPulse delay={delay + 72} color={theme.accent} opacity={0.16} />
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: 18,
						color: theme.accent2,
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
			</aside>
		</FadeUp>
	);
};

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
