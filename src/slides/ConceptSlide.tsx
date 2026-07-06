// ConceptSlide — gold-standard re-skin (Phase 3, 2026-05-01).
//
// Purpose: core explanatory idea. This is the workhorse text + visual slide,
// so it uses the dark cinematic shell without introducing extra feature
// primitives yet. Diagrams remain existing DiagramRenderer output, wrapped in
// a dark stage so we can migrate slide-by-slide before diagram-by-diagram.

import {Img, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CSSProperties} from 'react';
import type {LessonData, TextScene} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {LeaderLineCallout} from '../animations/AttentionPrimitives';
import {MarginNote} from '../animations/DoodlePrimitives';
import {DiagramRenderer} from './diagrams/DiagramRenderer';
import {StampInTitle} from '../animations/MotionPrimitives';
import {BulletReveal} from '../animations/BulletReveal';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {ConceptText} from './shared/ConceptText';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type ConceptSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const ConceptSlide = ({scene, lesson, sceneIndex, totalScenes}: ConceptSlideProps) => {
	const theme = useAccent();
	const rd = scene.revealDelays ?? {};
	const bulletStart = rd.bulletsStart ?? rd.body ?? 60;
	const bulletEnd = Math.max(bulletStart + 60, scene.durationInFrames - 90);
	// Collapse to single-column text layout when the scene has no visual.
	// Prevents the empty grey "visual stage" box from sitting next to the
	// content (e.g. recap scene in L1B).
	const hasVisual = Boolean(scene.image || scene.diagram);
	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} topic="CORE IDEA" sceneType="concept" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<div
				style={{
					position: 'absolute',
					top: 154,
					left: 64,
					right: 64,
					bottom: 132,
					display: 'grid',
					gridTemplateColumns: hasVisual
						? 'minmax(0, 0.98fr) minmax(560px, 0.92fr)'
						: 'minmax(0, 1fr)',
					gap: 56,
					alignItems: 'center',
				}}
			>
				<div style={{minWidth: 0}}>
					<Eyebrow color={TOK.inkDim}>CORE IDEA</Eyebrow>

					<FadeUp delay={rd.heading ?? 12} durationFrames={14} dy={22}>
						<StampInTitle delay={rd.heading ?? 12} color={TOK.ink} underlineColor={theme.accent}>
							<h1
								style={{
									margin: 0,
									maxWidth: 910,
									fontSize: fitHeadingSize(scene.heading),
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

					<div style={{marginTop: 44, maxWidth: 900}}>
						<div
							style={{
								height: 1,
								background: TOK.rule,
								marginBottom: 28,
							}}
						/>
						{scene.bullets && scene.bullets.length > 0 ? (
							<BulletReveal
								bullets={scene.bullets}
								startFrame={bulletStart}
								endFrame={bulletEnd}
								markerColor={theme.accent}
								fontSize={TYPE.bodyLarge.fontSize}
							/>
						) : (
							<div
								style={{
									fontSize: TYPE.bodyLarge.fontSize,
									lineHeight: TYPE.bodyLarge.lineHeight,
									fontWeight: TYPE.bodyLarge.fontWeight,
									color: TOK.ink,
									letterSpacing: '-0.012em',
								}}
							>
								<FadeUp delay={rd.body ?? 36} durationFrames={14} dy={12} style={{display: 'block'}}>
									<ConceptText>{scene.body}</ConceptText>
								</FadeUp>
							</div>
						)}

						{scene.secondary ? (
							<FadeUp delay={rd.secondary ?? 96} durationFrames={14} dy={18}>
								<p
									style={{
										margin: '26px 0 0',
										maxWidth: 860,
										fontSize: 25,
										lineHeight: 1.42,
										color: TOK.inkDim,
									}}
								>
									<ConceptText baseColor={TOK.inkDim}>{scene.secondary}</ConceptText>
								</p>
							</FadeUp>
						) : null}

						{scene.callout ? (
							<div style={{marginTop: 30}}>
								<FadeUp delay={rd.callout ?? 140} durationFrames={14} dy={18}>
									<div
										style={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: 14,
											fontSize: 28,
											fontWeight: 600,
											fontStyle: 'italic',
											color: TOK.amber,
											letterSpacing: '-0.01em',
										}}
									>
										<span style={{fontFamily: FONT_MONO, fontSize: 24, fontStyle: 'normal'}}>→</span>
										<span>{scene.callout}</span>
									</div>
								</FadeUp>
							</div>
						) : null}
					</div>
				</div>

				{hasVisual ? (
					<FadeUp delay={rd.diagram ?? 62} durationFrames={18} dy={24}>
						<VisualStage scene={scene} />
					</FadeUp>
				) : null}
			</div>
		</SlideFrame>
	);
};

const VisualStage = ({scene}: {scene: TextScene}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const settled = interpolate(frame, [100, 140], [0, 1], clamp);
	const t = frame / fps;
	const driftY = Math.sin(t * Math.PI * 0.12) * 2 * settled;
	const pulse = 0.55 + 0.45 * Math.sin(t * Math.PI * 0.18);
	const glowOpacity = 0.14 + pulse * 0.04;

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: 650,
				borderRadius: 18,
				border: `1px solid ${TOK.rule}`,
				background:
					`linear-gradient(135deg, ${TOK.bgLift} 0%, rgba(${theme.cardTint},0.56) 55%, ${TOK.bg} 100%)`,
				boxShadow: `0 34px 120px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(232,239,233,0.025)`,
				overflow: 'hidden',
			}}
		>
			{/* Decorative layers drift; readable content stays locked */}
			<div
				aria-hidden
				style={{
					position: 'absolute',
					inset: -160,
					background:
						`radial-gradient(circle at 50% 42%, ${theme.accent2}38 0%, ${theme.accent}18 26%, transparent 58%)`,
					opacity: glowOpacity,
					transform: `translateY(${driftY}px)`,
					willChange: 'transform',
				}}
			/>
			<div
				aria-hidden
				style={{
					position: 'absolute',
					inset: 26,
					border: `1px dashed rgba(232,239,233,0.08)`,
					borderRadius: 14,
					transform: `translateY(${driftY}px)`,
					willChange: 'transform',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					inset: 48,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{scene.image ? <ConceptAssetImage name={scene.image} /> : <ConceptDiagram scene={scene} />}
			</div>

			{/* P0.2 — Leader-line callout on water molecule */}
			{scene.image === 'waterMolecule' && (
				<>
					<LeaderLineCallout
						x1={385}
						y1={277}
						x2={480}
						y2={220}
						label="Oxygen"
						delay={90}
						lineColor={TOK.chem1}
					/>
					<LeaderLineCallout
						x1={237}
						y1={366}
						x2={180}
						y2={320}
						label="Hydrogen"
						delay={102}
						lineColor={TOK.chem2}
					/>
				</>
			)}

			{/* P0.5 — MarginNote on bar chart */}
			{scene.diagram?.type === 'barChart' && (
				<MarginNote
					text="huge!"
					x={660}
					y={200}
					pointToX={598}
					pointToY={286}
					delay={120}
					color={TOK.amber}
					seed={3}
				/>
			)}
		</div>
	);
};

const ConceptAssetImage = ({name}: {name: string}) => {
	const src = ASSETS[name as AssetName];
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	if (!src) {
		return null;
	}

	// Subtle ambient motion — slow Ken Burns zoom + gentle float so the
	// image never feels like a dead screenshot. ~6s breathing cycle.
	const t = frame / fps;
	const zoom = 1 + 0.04 * (0.5 + 0.5 * Math.sin(t * Math.PI * 0.18));
	const floatY = Math.sin(t * Math.PI * 0.22) * 3;
	const floatX = Math.cos(t * Math.PI * 0.16) * 2;

	return (
		<Img
			src={src}
			alt=""
			style={{
				maxWidth: '88%',
				maxHeight: '88%',
				objectFit: 'contain',
				filter: 'drop-shadow(0 28px 54px rgba(0,0,0,0.45))',
				transform: `translate(${floatX}px, ${floatY}px) scale(${zoom})`,
				willChange: 'transform',
			}}
		/>
	);
};

const ConceptDiagram = ({scene}: {scene: TextScene}) => {
	if (!scene.diagram) {
		return null;
	}

	return (
		<div style={diagramWrapStyle(scene.diagram.type)}>
			<DiagramRenderer diagram={scene.diagram} />
		</div>
	);
};

// Coded chemistry diagrams are authored at a ~720×440 viewBox to be the
// hero visual of the scene, so they get to fill the stage. Legacy diagram
// types keep the original conservative sizing.
const FULL_SIZE_DIAGRAMS = new Set([
	'gasVolumeComparison', 'massBreakdown', 'concentrationCompare', 'titrationSetup',
	'limitingExcess', 'errorDartboard', 'calorimeter', 'bondEnergy', 'hessCycle',
	'entropyDisorder', 'gibbsSpontaneity', 'reductionPotentialLadder', 'isotopeAtoms',
	'aufbauStaircase', 'latticeVsElectronSea', 'lineGraph',
	'punnettSquare', 'pedigree', 'dnaHelix', 'transcriptionStrand', 'chromosomeMutation',
]);

const diagramWrapStyle = (type: string): CSSProperties => {
	const base: CSSProperties = {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: TOK.ink,
	};

	if (FULL_SIZE_DIAGRAMS.has(type)) {
		return {
			...base,
			maxWidth: 840,
			transform: 'scale(1)',
			transformOrigin: 'center',
		};
	}

	if (type === 'barChart') {
		return {
			...base,
			maxWidth: 720,
			transform: 'scale(0.95)',
			transformOrigin: 'center',
		};
	}

	return {
		...base,
		maxWidth: 680,
		transform: 'scale(0.9)',
		transformOrigin: 'center',
	};
};

const fitHeadingSize = (heading: string) => {
	if (heading.length > 34) return 68;
	if (heading.length > 26) return 76;
	return 84;
};
