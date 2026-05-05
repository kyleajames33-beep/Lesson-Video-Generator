// MisconceptionSlide — gold-standard re-skin (Phase 3, 2026-05-01).
//
// Purpose: prevent the exam mistake at the exact moment students are likely
// to make it. The mistake/fix comparison is built directly in the slide
// instead of using old light-theme diagrams.

import type {LessonData, TextScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleBox, ScribbleMark, ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, FONT_MONO, TYPE, TOK} from '../styles/tokens';

type MisconceptionSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

export const MisconceptionSlide = ({scene, lesson, sceneIndex, totalScenes}: MisconceptionSlideProps) => {
	const compare = getCompareData(scene);

	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="COMMON TRAP" sceneType="misconception" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<div style={{position: 'absolute', top: 156, left: 64, right: 64}}>
				<FadeUp delay={3} durationFrames={12}>
					<div
						style={{
							fontFamily: FONT_MONO,
							fontSize: 22,
							color: TOK.amber,
							letterSpacing: '0.2em',
							textTransform: 'uppercase',
						}}
					>
						COMMON TRAP
					</div>
				</FadeUp>

				<FadeUp delay={16} durationFrames={14} dy={18}>
					<StampInTitle delay={16} color={TOK.ink} underlineColor={TOK.amber}>
						<div
							style={{
								marginTop: 14,
								fontSize: 82,
								fontWeight: 800,
								lineHeight: 0.98,
								letterSpacing: '-0.035em',
								color: TOK.ink,
								maxWidth: 1320,
							}}
						>
							{scene.heading}
							<span style={{color: TOK.chem1}}>.</span>
						</div>
					</StampInTitle>
				</FadeUp>
			</div>

			{scene.mistakeTag ? (
				<MistakeStamp text={scene.mistakeTag} delay={38} />
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
					body={scene.body}
					tone="wrong"
					delay={58}
				/>
				<MistakeCard
					label="Fix"
					title={compare.rightTitle}
					body={scene.secondary ?? compare.rightBody}
					tone="right"
					delay={88}
				/>
			</div>

			{scene.callout ? (
				<div style={{position: 'absolute', left: 64, right: 64, bottom: 150}}>
					<FadeUp delay={150} durationFrames={14} dy={18}>
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
	const color = tone === 'wrong' ? TOK.phys : TOK.chem2;

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
					<AmbientBorderPulse delay={delay + 62} color={TOK.chem2} opacity={0.12} style={{borderRadius: 14}} />
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
					<EmphasisedText text={body} tone={tone} />
				</div>

				{tone === 'right' ? (
					<div style={{position: 'absolute', inset: 10, pointerEvents: 'none', opacity: 0.7}}>
						<ScribbleBox
							width={820}
							height={340}
							color={TOK.chem2}
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

const EmphasisedText = ({text, tone}: {text: string; tone: 'wrong' | 'right'}) => {
	const pieces = text.split(/(Capital N|Lowercase n|raw count|moles|no units|small number|huge number|N|n|mol)/g).filter(Boolean);

	return (
		<>
			{pieces.map((piece, index) => {
				const color = getPieceColor(piece, tone);
				return (
					<span key={`${piece}-${index}`} style={{color, fontWeight: color ? 740 : undefined}}>
						{piece}
					</span>
				);
			})}
		</>
	);
};

const getPieceColor = (piece: string, tone: 'wrong' | 'right') => {
	if (['N', 'Capital N', 'raw count', 'huge number', 'no units'].includes(piece)) return TOK.amber;
	if (['n', 'Lowercase n', 'moles', 'mol', 'small number'].includes(piece)) return TOK.chem2;
	if (tone === 'wrong' && piece === 'swap') return TOK.phys;
	return undefined;
};

const getCompareData = (scene: TextScene) => {
	if (scene.diagram?.type === 'beforeAfter') {
		return {
			wrongTitle: scene.diagram.beforeLabel,
			rightTitle: scene.diagram.afterLabel,
			rightBody: scene.diagram.afterContent,
		};
	}

	return {
		wrongTitle: 'The tempting shortcut',
		rightTitle: 'The correction',
		rightBody: scene.secondary ?? 'Name the target first, then choose the formula.',
	};
};
