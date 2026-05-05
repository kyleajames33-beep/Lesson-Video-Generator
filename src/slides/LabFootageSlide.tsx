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
import {FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';

type LabFootageSlideProps = {
	scene: LabFootageScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const ANNOTATION_POSITIONS: Record<string, {nx: number; ny: number; tx: number; ty: number; flip: boolean}> = {
	'top-left':     {nx: 160,  ny: 220, tx: 520, ty: 280, flip: false},
	'top-right':    {nx: 1340, ny: 220, tx: 1200, ty: 280, flip: true},
	'bottom-left':  {nx: 160,  ny: 700, tx: 520, ty: 640, flip: false},
	'bottom-right': {nx: 1340, ny: 700, tx: 1200, ty: 640, flip: true},
};

export const LabFootageSlide = ({scene, lesson, sceneIndex, totalScenes}: LabFootageSlideProps) => {
	const src = ASSETS[scene.image as AssetName];

	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="LAB DEMO" sceneType="labFootage" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			{/* Mono eyebrow */}
			<div style={{position: 'absolute', top: 150, left: 64}}>
				<FadeUp delay={3} durationFrames={12}>
					<div
						style={{
							fontFamily: FONT_MONO,
							fontSize: 22,
							color: TOK.amber,
							letterSpacing: '0.2em',
						}}
					>
						LAB DEMO
					</div>
				</FadeUp>
			</div>

			{/* Heading + body */}
			<div style={{position: 'absolute', top: 210, left: 64, width: 440}}>
				<FadeUp delay={12} durationFrames={14} dy={16}>
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
						<span style={{color: TOK.chem1}}>.</span>
					</h1>
				</FadeUp>

				{scene.body ? (
					<div style={{marginTop: 28}}>
						<FadeUp delay={36} durationFrames={14} dy={12}>
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

			{/* Visual stage */}
			<FadeUp delay={24} durationFrames={16} dy={20}>
				<div
					style={{
						position: 'absolute',
						left: 540,
						top: 190,
						width: 1160,
						height: 640,
						borderRadius: 18,
						border: `1px solid ${TOK.rule}`,
						background:
							`linear-gradient(135deg, ${TOK.bgLift} 0%, rgba(13,58,47,0.48) 55%, ${TOK.bg} 100%)`,
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
								`radial-gradient(circle at 50% 42%, ${TOK.chem2}38 0%, ${TOK.chem1}18 26%, transparent 58%)`,
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
								alt={scene.image}
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

			{/* Annotations */}
			{scene.annotations?.map((annotation, index) => {
				const pos = ANNOTATION_POSITIONS[annotation.position];
				if (!pos) return null;
				const delay = 60 + index * 30;
				const color = TOK.amber;
				const arrowStartX = pos.flip ? pos.nx - 40 : pos.nx + 40;
				const arrowStartY = pos.ny + 18;

				return (
					<div key={index} style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none'}}>
						<FadeUp delay={delay} durationFrames={12} dy={14}>
							<div
								style={{
									position: 'absolute',
									left: pos.nx,
									top: pos.ny,
									fontFamily: FONT_HAND,
									fontSize: 44,
									color,
									fontWeight: 600,
									whiteSpace: 'nowrap',
									transform: `rotate(${pos.flip ? 4 : -4}deg)`,
									transformOrigin: pos.flip ? 'right center' : 'left center',
									zIndex: 2,
								}}
							>
								{annotation.text}
							</div>
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
