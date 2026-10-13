import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/b4/measured/lesson.json';
import {INK_SOFT, PAPER_DEEP, Plate} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export {
	AMBER, AMBER_INK, Arrow, BLUE, Body, Card, Chip, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, GREEN, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, RED, Underline, W, H,
} from '../bio-m5-b01/shared';
export {Scribble, Trail} from '../bio-m5-b02a/shared';
export {Cross, Tick, Fade, FadeDiv, along, pathOf, Line, Pill, Stamp, WrongChip} from '../bio-m5-b02c/shared';
export {Cam, Zoom, Bracket, Underlined, Hand, Say, vis, GreyTag} from '../bio-m5-b03a/shared';
export {Countdown} from '../../kit';
export {PAPER_DEEP};
export * from './dna';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

export const GREYC = '#8d949b';
export const GREY_INK = '#5d646b';

/** The amoeba plate (cropped to its alpha box), or a coded cell stand-in when the file is not in HAVE. */
export const AMOEBA = {src: A.AMOEBA, nat: [1800, 1200] as [number, number], box: [152, 93, 1457, 989] as [number, number, number, number], nuc: [904.23, 610.2] as [number, number]};
export const amoebaH = (w: number) => (w * AMOEBA.box[3]) / AMOEBA.box[2];
/** Screen position of the nucleus centre for a plate placed at x,y with width w. */
export const nucleusAt = (x: number, y: number, w: number): [number, number] => [x + ((AMOEBA.nuc[0] - AMOEBA.box[0]) * w) / AMOEBA.box[2], y + ((AMOEBA.nuc[1] - AMOEBA.box[1]) * w) / AMOEBA.box[2]];
export const AmoebaArt: React.FC<{x: number; y: number; w: number; o?: number}> = ({x, y, w, o = 1}) => {
	if (!A.HAVE.has(A.AMOEBA)) {
		const [nx, ny] = nucleusAt(x, y, w);
		return (
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: o}}>
				<ellipse cx={x + w / 2} cy={y + amoebaH(w) / 2} rx={w / 2} ry={amoebaH(w) / 2} fill="#e3f0ec" stroke={INK_SOFT} strokeWidth={5} />
				<circle cx={nx} cy={ny} r={w * 0.06} fill="#a98bd1" stroke="#6a4c93" strokeWidth={4} />
			</svg>
		);
	}
	return <Plate src={AMOEBA.src} natural={AMOEBA.nat} crop={AMOEBA.box} width={w} style={{left: x, top: y, opacity: o}} />;
};
