import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/b5a/measured/lesson.json';
import {staticFile} from 'remotion';
import {PAPER_DEEP, Plate} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export {
	AMBER, AMBER_INK, Arrow, Body, Card, Chip, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, W, H,
} from '../bio-m5-b01/shared';
export {Scribble, Trail} from '../bio-m5-b02a/shared';
export {Tick, Fade, FadeDiv, along, pathOf, Line, Pill, Stamp, WrongChip} from '../bio-m5-b02c/shared';
export {Cam, Zoom, Bracket, Underlined, Hand, Say, vis, GreyTag} from '../bio-m5-b03a/shared';
export {Countdown} from '../../kit';
export {PAPER_DEEP};
export * from './chrom';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

export const GREYC = '#8d949b';
export const GREY_INK = '#5d646b';

export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
export const PLATES: Record<string, PDef> = {
	skin: {src: A.SKIN, nat: [1920, 1280], box: [340, 330, 1240, 600]},
	embryo: {src: A.EMBRYO, nat: [1800, 1800], box: [210, 209, 1380, 1378]},
	yeast: {src: A.YEAST, nat: [1800, 1200], box: [498, 179, 716, 823]},
	amoeba: {src: A.AMOEBA, nat: [1800, 1200], box: [152, 93, 1457, 989]},
	cutting: {src: A.CUTTING, nat: [1344, 1856], box: [306, 248, 736, 1305]},
	bacterium: {src: A.BACTERIUM, nat: [1800, 1200], box: [573, 449, 655, 324]},
	epi: {src: A.EPI, nat: [1800, 1222], box: [180, 122, 1440, 978]},
	plant: {src: A.PLANT, nat: [1438, 1800], box: [143, 180, 1151, 1440]},
};
export const plateH = (a: PDef, w: number) => (w * a.box[3]) / a.box[2];
/** A painted plate placed at x,y with width w, or a labelled coded stand-in when the file is not in HAVE. */
export const PlateArt: React.FC<{a: PDef; x: number; y: number; w: number; o?: number; style?: React.CSSProperties}> = ({a, x, y, w, o = 1, style}) => {
	if (!A.HAVE.has(a.src)) {
		return <div style={{position: 'absolute', left: x, top: y, width: w, height: plateH(a, w), border: '4px dashed #b9a98f', borderRadius: 24, opacity: o}} />;
	}
	return <Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: x, top: y, opacity: o, ...style}} />;
};
/** Map a point in the plate's natural pixels to screen, for a plate placed at x,y with width w. */
export const plateAt = (a: PDef, x: number, y: number, w: number) => (px: number, py: number): [number, number] => [x + ((px - a.box[0]) * w) / a.box[2], y + ((py - a.box[1]) * w) / a.box[2]];

/** SVG plate by its alpha box, centred at (cx, cy), width w (before rotation), optional clockwise rotation in degrees. */
export const SvgPlate: React.FC<{a: PDef; cx: number; cy: number; w: number; rot?: number; o?: number}> = ({a, cx, cy, w, rot = 0, o = 1}) => {
	const k = w / a.box[2];
	return (
		<g transform={`translate(${cx},${cy}) rotate(${rot}) scale(${k})`} opacity={o}>
			<image href={staticFile(a.src)} x={-(a.box[0] + a.box[2] / 2)} y={-(a.box[1] + a.box[3] / 2)} width={a.nat[0]} height={a.nat[1]} />
		</g>
	);
};
