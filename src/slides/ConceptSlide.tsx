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
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {FONT_MONO, TOK} from '../styles/tokens';

type ConceptSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const ConceptSlide = ({scene, lesson, sceneIndex, totalScenes}: ConceptSlideProps) => {
	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="CORE IDEA" sceneType="concept" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<div
				style={{
					position: 'absolute',
					top: 154,
					left: 64,
					right: 64,
					bottom: 132,
					display: 'grid',
					gridTemplateColumns: 'minmax(0, 0.98fr) minmax(560px, 0.92fr)',
					gap: 56,
					alignItems: 'center',
				}}
			>
				<div style={{minWidth: 0}}>
					<FadeUp delay={3} durationFrames={12}>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 20,
								color: TOK.amber,
								letterSpacing: '0.2em',
								marginBottom: 28,
								textTransform: 'uppercase',
							}}
						>
							CORE IDEA
						</div>
					</FadeUp>

					<FadeUp delay={12} durationFrames={14} dy={22}>
						<StampInTitle delay={12} color={TOK.ink} underlineColor={TOK.amber}>
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
								<span style={{color: TOK.chem1}}>.</span>
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
						<div
							style={{
								fontSize: 34,
								lineHeight: 1.28,
								fontWeight: 600,
								color: TOK.ink,
								letterSpacing: '-0.012em',
							}}
						>
							<FadeUp delay={36} durationFrames={14} dy={12} style={{display: 'block'}}>
								{scene.body}
							</FadeUp>
						</div>

						{scene.secondary ? (
							<FadeUp delay={96} durationFrames={14} dy={18}>
								<p
									style={{
										margin: '26px 0 0',
										maxWidth: 860,
										fontSize: 25,
										lineHeight: 1.42,
										color: TOK.inkDim,
									}}
								>
									{scene.secondary}
								</p>
							</FadeUp>
						) : null}

						{scene.callout ? (
							<div style={{marginTop: 30}}>
								<FadeUp delay={140} durationFrames={14} dy={18}>
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

				<FadeUp delay={62} durationFrames={18} dy={24}>
					<VisualStage scene={scene} />
				</FadeUp>
			</div>
		</SlideFrame>
	);
};

const VisualStage = ({scene}: {scene: TextScene}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
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
					`linear-gradient(135deg, ${TOK.bgLift} 0%, rgba(13,58,47,0.56) 55%, ${TOK.bg} 100%)`,
				boxShadow: `0 34px 120px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(232,239,233,0.025)`,
				overflow: 'hidden',
				transform: `translateY(${driftY}px)`,
				willChange: 'transform',
			}}
		>
			<div
				aria-hidden
				style={{
					position: 'absolute',
					inset: -160,
					background:
						`radial-gradient(circle at 50% 42%, ${TOK.chem2}38 0%, ${TOK.chem1}18 26%, transparent 58%)`,
					opacity: glowOpacity,
				}}
			/>
			<div
				aria-hidden
				style={{
					position: 'absolute',
					inset: 26,
					border: `1px dashed rgba(232,239,233,0.08)`,
					borderRadius: 14,
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

	if (!src) {
		return null;
	}

	return (
		<Img
			src={src}
			alt={name}
			style={{
				maxWidth: '88%',
				maxHeight: '88%',
				objectFit: 'contain',
				filter: 'drop-shadow(0 28px 54px rgba(0,0,0,0.45))',
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

const diagramWrapStyle = (type: string): CSSProperties => {
	const base: CSSProperties = {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: TOK.ink,
	};

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
