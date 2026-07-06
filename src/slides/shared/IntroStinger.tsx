// IntroStinger — branded opener (9 s) that doubles as the lesson plan.
//
// Phase plan:
//   0 –  50f  HSC SCIENCE wordmark drops in (1.67s).
//   50 – 80f  Wordmark shrinks to corner badge (1s).
//   80 –110f  NESA outcome chips + inquiry question appear (1s read).
//  110 –160f  Syllabus dot points scroll in (1.67s read).
//  160 –230f  "By the end you'll be able to" objectives stagger (2.33s).
//  230 –270f  Hold and fade into the first teaching scene (1.33s).
//
// Treatment matches the rest of the slides: dark stage, doodled accents,
// no flat-card container, hand-drawn ticks + scribble underline.

import {useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, FONT_MONO, TOK, TYPE} from '../../styles/tokens';
import {ScribbleMark, ScribbleUnderline} from '../../animations/DoodlePrimitives';
import {AmbientGlow} from '../../animations/AmbientMotion';
import {useAccent} from '../../styles/theme';

type IntroStingerProps = {
	subjectLabel?: string;
	moduleLabel?: string;
	yearLabel?: string;
	/** "By the end you'll be able to: …" list. */
	objectives?: string[];
	/** NESA outcome codes (e.g. ["CH11-9"]). */
	nesaOutcomes?: string[];
	/** The NESA inquiry question for the module section. */
	inquiryQuestion?: string;
	/** The actual NESA content statements this lesson addresses. */
	syllabusDotPoints?: string[];
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const IntroStinger = ({
	subjectLabel,
	moduleLabel,
	yearLabel,
	objectives,
	nesaOutcomes,
	inquiryQuestion,
	syllabusDotPoints,
}: IntroStingerProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	// ── Phase 1: HSC SCIENCE wordmark ──
	const hscSpring = spring({frame, fps, config: {damping: 14, stiffness: 220, mass: 0.6}});
	const hscY = interpolate(hscSpring, [0, 1], [-180, 0], clamp);
	const hscOpacity = interpolate(frame, [0, 8], [0, 1], clamp);

	const sciSpring = spring({frame: frame - 6, fps, config: {damping: 14, stiffness: 220, mass: 0.6}});
	const sciY = interpolate(sciSpring, [0, 1], [-180, 0], clamp);
	const sciOpacity = interpolate(frame, [6, 14], [0, 1], clamp);

	const ruleProgress = interpolate(frame, [16, 36], [0, 1], clamp);
	const taglineOpacity = interpolate(frame, [26, 42], [0, 1], clamp);

	// Wordmark shrinks to a header
	const wordmarkScale = interpolate(frame, [50, 80], [1, 0.28], clamp);
	const wordmarkY = interpolate(frame, [50, 80], [0, -380], clamp);
	const heroOpacity = interpolate(frame, [70, 90], [1, 0.55], clamp);

	// ── Phase reveal anchors ──
	const nesaAt = 80;
	const inquiryAt = 92;
	const dotPointsHeadingAt = 116;
	const dotPointStaggerAt = 122;
	const objectivesHeadingAt = 162;
	const objectivesStaggerAt = 170;

	const nesaOpacity = interpolate(frame, [nesaAt, nesaAt + 12], [0, 1], clamp);
	const nesaDy = interpolate(frame, [nesaAt, nesaAt + 14], [-14, 0], clamp);

	const inquiryOpacity = interpolate(frame, [inquiryAt, inquiryAt + 16], [0, 1], clamp);
	const inquiryDy = interpolate(frame, [inquiryAt, inquiryAt + 16], [14, 0], clamp);

	const dotPointsHeadingOpacity = interpolate(frame, [dotPointsHeadingAt, dotPointsHeadingAt + 14], [0, 1], clamp);
	const objectivesHeadingOpacity = interpolate(frame, [objectivesHeadingAt, objectivesHeadingAt + 14], [0, 1], clamp);

	// Fade out
	const exitOpacity = interpolate(frame, [248, 270], [1, 0], clamp);

	const tagline = [subjectLabel, yearLabel, moduleLabel].filter(Boolean).join(' · ');

	return (
		<AbsoluteFill style={{background: TOK.bg, color: TOK.ink, opacity: exitOpacity}}>
			<AbsoluteFill
				style={{
					background:
						`radial-gradient(ellipse 65% 55% at 50% 45%, ${theme.accent2}29, transparent 70%)`,
					pointerEvents: 'none',
				}}
			/>
			<AmbientGlow left="20%" top={520} width="60%" height={520} delay={80} opacity={0.08} speedSeconds={6.4} />

			{/* Hero wordmark */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					transform: `translateY(${wordmarkY}px) scale(${wordmarkScale})`,
					opacity: heroOpacity,
					transformOrigin: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'baseline',
						gap: 24,
						fontFamily: FONT_DISPLAY,
						fontWeight: 850,
						letterSpacing: '-0.05em',
						lineHeight: 0.92,
					}}
				>
					<span style={{fontSize: 220, color: TOK.ink, transform: `translateY(${hscY}px)`, opacity: hscOpacity, display: 'inline-block'}}>HSC</span>
					<span style={{fontSize: 220, color: TOK.amber, transform: `translateY(${sciY}px)`, opacity: sciOpacity, display: 'inline-block'}}>SCIENCE</span>
				</div>
				<div
					style={{
						marginTop: 26,
						width: 640,
						height: 5,
						background: TOK.amber,
						transform: `scaleX(${ruleProgress})`,
						transformOrigin: 'left center',
						borderRadius: 2,
					}}
				/>
				{tagline ? (
					<div
						style={{
							marginTop: 30,
							opacity: taglineOpacity,
							fontFamily: FONT_MONO,
							fontSize: 22,
							letterSpacing: '0.32em',
							color: TOK.inkDim,
							textTransform: 'uppercase',
						}}
					>
						{tagline}
					</div>
				) : null}
			</div>

			{/* Phase 2 — Lesson plan content */}
			<div style={{position: 'absolute', top: 170, left: 120, right: 120}}>
				{/* NESA chips */}
				{nesaOutcomes && nesaOutcomes.length > 0 ? (
					<div
						style={{
							opacity: nesaOpacity,
							transform: `translateY(${nesaDy}px)`,
							display: 'flex',
							gap: 12,
							marginBottom: 22,
						}}
					>
						{nesaOutcomes.map((code) => (
							<span
								key={code}
								style={{
									fontFamily: FONT_MONO,
									fontSize: 14,
									letterSpacing: '0.18em',
									color: TOK.amber,
									textTransform: 'uppercase',
									fontWeight: 700,
									padding: '6px 14px',
									border: `1.5px solid ${TOK.amber}`,
									borderRadius: 4,
								}}
							>
								NESA · {code}
							</span>
						))}
					</div>
				) : null}

				{/* Inquiry question */}
				{inquiryQuestion ? (
					<div
						style={{
							opacity: inquiryOpacity,
							transform: `translateY(${inquiryDy}px)`,
							marginBottom: 38,
							position: 'relative',
						}}
					>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 13,
								letterSpacing: '0.22em',
								color: TOK.inkMute,
								textTransform: 'uppercase',
								fontWeight: 600,
								marginBottom: 10,
							}}
						>
							◆ Inquiry question
						</div>
						<div
							style={{
								fontFamily: FONT_HAND,
								fontSize: 68,
								fontWeight: 700,
								lineHeight: 1.05,
								letterSpacing: '-0.015em',
								color: TOK.ink,
								maxWidth: 1500,
							}}
						>
							{inquiryQuestion}
						</div>
						<div style={{position: 'absolute', left: 0, top: 110, opacity: 0.6}}>
							<ScribbleUnderline
								width={Math.min(1100, inquiryQuestion.length * 28)}
								color={TOK.amber}
								strokeWidth={4}
								seed={11}
								strokes={2}
								delay={inquiryAt + 18}
								durationFrames={20}
							/>
						</div>
					</div>
				) : null}

				{/* Syllabus dot points — the actual NESA content statements */}
				{syllabusDotPoints && syllabusDotPoints.length > 0 ? (
					<div style={{opacity: dotPointsHeadingOpacity, marginBottom: 36}}>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 13,
								letterSpacing: '0.22em',
								color: TOK.inkMute,
								textTransform: 'uppercase',
								fontWeight: 600,
								marginBottom: 12,
							}}
						>
							◆ Syllabus content covered
						</div>
						<ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12, maxWidth: 1500}}>
							{syllabusDotPoints.slice(0, 3).map((dp, i) => {
								const itemDelay = dotPointStaggerAt + i * 14;
								const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 14], [0, 1], clamp);
								const itemDx = interpolate(frame, [itemDelay, itemDelay + 16], [-16, 0], clamp);
								return (
									<li
										key={dp.slice(0, 30)}
										style={{
											display: 'grid',
											gridTemplateColumns: '36px 1fr',
											gap: 18,
											alignItems: 'baseline',
											opacity: itemOpacity,
											transform: `translateX(${itemDx}px)`,
										}}
									>
										<span
											style={{
												fontFamily: FONT_MONO,
												fontSize: 22,
												color: TOK.amber,
												lineHeight: 1,
												paddingTop: 4,
											}}
										>
											◆
										</span>
										<span
											style={{
												fontSize: 22,
												fontWeight: 500,
												lineHeight: 1.4,
												color: TOK.inkDim,
												letterSpacing: '-0.005em',
											}}
										>
											{dp}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				) : null}

				{/* "By the end" objectives */}
				{objectives && objectives.length > 0 ? (
					<div style={{opacity: objectivesHeadingOpacity}}>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 13,
								letterSpacing: '0.22em',
								color: theme.accent2,
								textTransform: 'uppercase',
								fontWeight: 700,
								marginBottom: 18,
							}}
						>
							✓ By the end you'll be able to
						</div>
						<ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16, maxWidth: 1500}}>
							{objectives.slice(0, 6).map((obj, i) => {
								const itemDelay = objectivesStaggerAt + i * 12;
								const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 14], [0, 1], clamp);
								const itemDx = interpolate(frame, [itemDelay, itemDelay + 16], [-22, 0], clamp);
								return (
									<li
										key={obj}
										style={{
											display: 'grid',
											gridTemplateColumns: '46px 1fr',
											gap: 20,
											alignItems: 'baseline',
											opacity: itemOpacity,
											transform: `translateX(${itemDx}px)`,
										}}
									>
										<div style={{width: 38, height: 38, paddingTop: 2}}>
											<ScribbleMark
												kind="check"
												size={36}
												color={theme.accent2}
												strokeWidth={5}
												seed={20 + i}
												delay={itemDelay + 2}
												durationFrames={14}
											/>
										</div>
										<span
											style={{
												fontSize: TYPE.body.fontSize,
												fontWeight: 600,
												lineHeight: 1.32,
												color: TOK.ink,
												letterSpacing: '-0.008em',
											}}
										>
											{obj[0].toUpperCase() + obj.slice(1)}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				) : null}
			</div>

			<div
				style={{
					position: 'absolute',
					bottom: 48,
					right: 64,
					fontFamily: FONT_MONO,
					fontSize: 14,
					letterSpacing: '0.18em',
					color: TOK.inkMute,
					opacity: taglineOpacity,
				}}
			>
				hscscience.com.au
			</div>
		</AbsoluteFill>
	);
};
