// LabFootageSlide — Phase 4, 2026-05-02.
//
// Purpose: display a lab image with handwritten annotations.
// The image sits in a dark visual stage; notes fade up around the
// edges and arrows draw inward, creating the feel of a teacher
// pointing out what matters in the apparatus.
//
// Beat plan:
//   0    chrome anchors
//   3    "LAB DEMO" mono eyebrow reveals
//   12   heading fades up
//   24   visual stage fades up
//   36   image lands
//   60   first annotation fades up + arrow draws
//   90   second annotation fades up + arrow draws (if present)
//   120  third annotation fades up + arrow draws (if present)
//   150  callout or body reveals (if present)

import {Img} from 'remotion';
import type {LessonData, LabFootageScene} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleArrow} from '../animations/DoodlePrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type LabFootageSlideProps = {
	scene: LabFootageScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

// Anchor labels to the corresponding frame edge so long captions never clip.
// `anchorX` says which side of the frame to pin the text to; the label then
// grows inward.
const ANNOTATION_POSITIONS: Record<
	string,
	{anchorX: 'left' | 'right'; nx: number; ny: number; tx: number; ty: number; flip: boolean}
> = {
	// top-left sits ABOVE the heading column (ny: 110, between chrome and
	// heading at top:210) — at ny:220 it collided with the heading text.
	'top-left':     {anchorX: 'left',  nx: 110, ny: 110, tx: 540,  ty: 250, flip: false},
	'top-right':    {anchorX: 'right', nx: 110, ny: 220, tx: 1420, ty: 290, flip: true},
	'bottom-left':  {anchorX: 'left',  nx: 110, ny: 870, tx: 540,  ty: 760, flip: false},
	'bottom-right': {anchorX: 'right', nx: 110, ny: 720, tx: 1420, ty: 720, flip: true},
};

export const LabFootageSlide = ({scene, lesson, sceneIndex, totalScenes}: LabFootageSlideProps) => {
	const rd = scene.revealDelays ?? {};
	const src = ASSETS[scene.image as AssetName];
	const theme = useAccent();

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} dot="2.1" topic="LAB DEMO" sceneType="labFootage" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			{/* Mono eyebrow */}
			<div style={{position: 'absolute', top: 150, left: 64}}>
				<Eyebrow color={TOK.inkDim}>LAB DEMO</Eyebrow>
			</div>

			{/* Heading + body */}
			<div style={{position: 'absolute', top: 210, left: 64, width: 440}}>
				<FadeUp delay={rd.heading ?? 12} durationFrames={14} dy={16}>
					<h1
						style={{
							margin: 0,
							fontSize: fitHeadingSize(scene.heading),
							fontWeight: 800,
							lineHeight: 1.02,
							letterSpacing: '-0.035em',
							color: TOK.ink,
						}}
					>
						{scene.heading}
					</h1>
				</FadeUp>

				{scene.body ? (
					<div style={{marginTop: 28}}>
						<FadeUp delay={rd.body ?? 36} durationFrames={14} dy={12}>
							<div
								style={{
									fontSize: 26,
									lineHeight: 1.45,
									color: TOK.inkDim,
									maxWidth: 400,
								}}
							>
								{scene.body}
							</div>
						</FadeUp>
					</div>
				) : null}
			</div>

			{/* Visual stage — narrower so right-side annotations have clear room */}
			<FadeUp delay={rd.visual ?? 24} durationFrames={16} dy={20}>
				<div
					style={{
						position: 'absolute',
						left: 540,
						top: 190,
						width: 880,
						height: 640,
						borderRadius: 18,
						border: `1px solid ${TOK.rule}`,
						background:
							`linear-gradient(135deg, ${TOK.bgLift} 0%, rgba(${theme.cardTint},0.48) 55%, ${TOK.bg} 100%)`,
						boxShadow: `0 34px 120px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(232,239,233,0.025)`,
						overflow: 'hidden',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						aria-hidden
						style={{
							position: 'absolute',
							inset: -160,
							background:
								`radial-gradient(circle at 50% 42%, ${theme.accent2}38 0%, ${theme.accent}18 26%, transparent 58%)`,
							opacity: 0.18,
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

					{src ? (
						<FadeUp delay={36} durationFrames={14} dy={10}>
							<Img
								src={src}
								alt=""
								style={{
									maxWidth: '82%',
									maxHeight: '82%',
									objectFit: 'contain',
									filter: 'drop-shadow(0 28px 54px rgba(0,0,0,0.45))',
								}}
							/>
						</FadeUp>
					) : null}
				</div>
			</FadeUp>

			{/* Annotations — labels anchor to the frame edge to prevent clipping */}
			{scene.annotations?.map((annotation, index) => {
				const pos = ANNOTATION_POSITIONS[annotation.position];
				if (!pos) return null;
				const delay = 60 + index * 30;
				const color = TOK.amber;
				// Arrow start: estimate the label's inner edge from the anchor side.
				// 320px is a conservative budget for a 3-4 word handwritten label.
				const labelWidth = 320;
				const arrowStartX = pos.anchorX === 'right'
					? 1920 - pos.nx - labelWidth + 20
					: pos.nx + labelWidth - 20;
				const arrowStartY = pos.ny + 28;

				const labelStyle = {
					position: 'absolute' as const,
					top: pos.ny,
					fontFamily: FONT_HAND,
					fontSize: 44,
					color,
					fontWeight: 600,
					whiteSpace: 'nowrap' as const,
					transform: `rotate(${pos.flip ? 4 : -4}deg)`,
					transformOrigin: pos.flip ? ('right center' as const) : ('left center' as const),
					textAlign: pos.flip ? ('right' as const) : ('left' as const),
					zIndex: 2,
					...(pos.anchorX === 'right' ? {right: pos.nx} : {left: pos.nx}),
				};

				return (
					<div key={index} style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none'}}>
						<FadeUp delay={delay} durationFrames={12} dy={14}>
							<div style={labelStyle}>{annotation.text}</div>
						</FadeUp>
						<ScribbleArrow
							x1={arrowStartX}
							y1={arrowStartY}
							x2={pos.tx}
							y2={pos.ty}
							color={color}
							seed={5 + index}
							delay={delay + 8}
							durationFrames={14}
							curve={0.25}
						/>
					</div>
				);
			})}
		</SlideFrame>
	);
};

const fitHeadingSize = (heading: string) => {
	if (heading.length > 36) return 48;
	if (heading.length > 24) return 56;
	return 64;
};
