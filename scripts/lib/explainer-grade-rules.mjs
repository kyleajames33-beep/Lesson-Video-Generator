// The measurable rules of the grade-A build gate, as pure functions over the
// frame measurements from explainer-audit-probe.tsx and the rendered still.
// Thresholds come from docs/production/claude-pm/maths-visual-standard.md
// ("Build gate") and build-agent-brief.md. Change a number here, not in the
// callers, and re-run scripts/explainer-grade-rules.test.mjs.
import fs from 'node:fs';
import path from 'node:path';

export const RULES = {
	minReadPx: 26,          // nothing a student must read sits below "about" this: under it warns
	failReadPx: 24,         // and under this fails (the g01 reference sheet carries a little 24 px text)
	minCurrentPx: 44,       // the current working line
	smallCharsFail: 12,     // this many characters under failReadPx fails the frame; fewer only warns
	shortTokenChars: 3,     // labels this short (subscripts, axis ticks, units) are judged by tinyPx instead
	tinyPx: 18,
	faintOpacity: 0.6,      // text below this opacity counts as faint
	faintContrast: 2.2,     // or text whose measured contrast against its own background is below this
	faintShareFail: 0.5,    // a frame whose text is mostly faint fails (set against bio-m8-b09 and chem-m8-c03b)
	faintShareWarn: 0.25,
	emptyFail: 0.6,         // share of the frame's coarse cells with nothing in them (see inkStats)
	emptyWarn: 0.5,         // set against the g01 sheet: its well-filled frames score 0.42 to 0.46
	thinChars: 25,          // fewer characters than this, with no picture, is a title-only frame
	pictureMinPx: 250,      // a plate has to be at least this tall to carry a frame
	pictureShapes: 40,      // or the frame has this many drawn shapes (a diagram or simulation)
	stretchTolerance: 0.03,
	sameChange: 0.02,       // consecutive sheet frames that differ by less than this are "the same set-up"
	sameRunFail: 4,         // four in a row is over 90 s unchanged on an 8 minute video
	sameRunWarn: 3,
	overlapShare: 0.35,
	notesMinFrames: 1200,   // 40 s key-notes hold
	notesMaxChars: 480,
	pictureShareWarn: 0.5,  // share of teaching frames that should hold a plate or a drawn diagram
};

const lum = (r, g, b) => {
	const c = [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
	return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const PAPER = [246, 241, 231];
const CHROME_BAND = 76; // header label and stage tracker, in 1920x1080 pixels

/** True when a pixel is not bare paper. White cards count as bare; their text and borders do not. */
const isInk = (d, o) => Math.max(Math.abs(d[o] - PAPER[0]), Math.abs(d[o + 1] - PAPER[1]), Math.abs(d[o + 2] - PAPER[2])) > 34;

/**
 * How full the frame is. The picture (below the header band) is cut into an
 * 8 x 6 grid of coarse cells; a cell is "used" when at least 1.5% of it is ink.
 * `empty` is the share of unused cells, so a frame with content spread across
 * it scores near 0 and a frame with one small item scores near 1.
 */
export const inkStats = (png, cols = 8, rows = 6) => {
	const k = png.width / 1920, top = Math.round(CHROME_BAND * k), h = png.height - top;
	const used = new Array(cols * rows).fill(0), size = new Array(cols * rows).fill(0);
	let x0 = png.width, y0 = png.height, x1 = -1, y1 = -1, ink = 0;
	for (let y = top; y < png.height; y++) for (let x = 0; x < png.width; x++) {
		const cell = Math.min(rows - 1, Math.floor(((y - top) / h) * rows)) * cols + Math.min(cols - 1, Math.floor((x / png.width) * cols));
		size[cell]++;
		if (isInk(png.data, (y * png.width + x) * 4)) { used[cell]++; ink++; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
	}
	const usedCells = used.filter((n, i) => n / size[i] >= 0.015).length;
	const span = x1 < 0 ? {w: 0, h: 0} : {w: (x1 - x0 + 1) / png.width, h: (y1 - y0 + 1) / h};
	return {empty: 1 - usedCells / (cols * rows), inkShare: ink / (png.width * h), spanW: Math.round(span.w * 100) / 100, spanH: Math.round(span.h * 100) / 100};
};

/** Share of pixels that differ visibly between two stills of the same size. */
export const changedFraction = (a, b) => {
	let n = 0;
	const total = a.width * a.height;
	for (let o = 0; o < total * 4; o += 4) if (Math.max(Math.abs(a.data[o] - b.data[o]), Math.abs(a.data[o + 1] - b.data[o + 1]), Math.abs(a.data[o + 2] - b.data[o + 2])) > 28) n++;
	return n / total;
};

/** Contrast between the text strokes and their background, measured from the still. */
export const boxContrast = (png, box) => {
	const k = png.width / 1920;
	const x0 = Math.max(0, Math.floor(box[0] * k)), y0 = Math.max(0, Math.floor(box[1] * k));
	const x1 = Math.min(png.width, Math.ceil((box[0] + box[2]) * k)), y1 = Math.min(png.height, Math.ceil((box[1] + box[3]) * k));
	const ls = [];
	for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) { const o = (y * png.width + x) * 4; ls.push(lum(png.data[o], png.data[o + 1], png.data[o + 2])); }
	if (ls.length < 12) return null;
	ls.sort((p, q) => p - q);
	const lo = ls[Math.floor(ls.length * 0.02)], hi = ls[Math.floor(ls.length * 0.98)];
	return (hi + 0.05) / (lo + 0.05);
};

const quote = t => `"${t.length > 48 ? t.slice(0, 45) + '...' : t}"`;
const area = b => b[2] * b[3];
const overlap = (a, b) => Math.max(0, Math.min(a[0] + a[2], b[0] + b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[1] + a[3], b[1] + b[3]) - Math.max(a[1], b[1]));

/** A frame "has a picture" when a plate is big enough to carry it or a diagram is drawn. */
export const hasPicture = audit => audit.images.some(i => i.box[3] >= RULES.pictureMinPx && i.op >= 0.5) || audit.shapes >= RULES.pictureShapes;

/** Findings for one frame: [{rule, level: 'fail' | 'warn', detail}]. */
export const analyseFrame = f => {
	const out = [];
	const add = (level, rule, detail) => out.push({level, rule, detail});
	const {audit, png, ink} = f;
	const texts = audit.texts.map(t => ({...t, contrast: png ? boxContrast(png, t.box) : null}));
	const chars = texts.reduce((n, t) => n + t.t.length, 0);

	// Render defects first: these mean an asset or font failed, whatever the design.
	for (const i of audit.images) if (i.broken) add('fail', 'Broken picture', `${i.src} did not load.`);
	if (!audit.fonts.hand || !audit.fonts.display) add('fail', 'Font not loaded', `${!audit.fonts.hand ? 'Caveat ' : ''}${!audit.fonts.display ? 'Inter Tight' : ''} is missing, so text is in a fallback font.`);
	const fallback = texts.filter(t => !t.fontOk);
	if (fallback.length) add('fail', 'Fallback font', `${fallback.length} text runs use "${fallback[0].family}", which is not loaded: ${quote(fallback[0].t)}.`);
	for (const i of audit.images) if (Math.abs(i.stretch - 1) > RULES.stretchTolerance) add('fail', 'Stretched plate', `${i.src} is drawn ${Math.round(Math.abs(i.stretch - 1) * 100)}% ${i.stretch > 1 ? 'wider' : 'taller'} than its true shape.`);

	const dash = texts.find(t => t.t.includes('—'));
	if (dash) add('fail', 'Em dash on screen', quote(dash.t));

	const solid = texts.filter(t => t.op >= 0.5);
	const small = solid.filter(t => (t.t.length > RULES.shortTokenChars ? t.size < RULES.minReadPx - 0.5 : t.size < RULES.tinyPx - 0.5));
	if (small.length) {
		const n = small.reduce((s, t) => s + t.t.length, 0), worst = small.reduce((a, b) => (b.size < a.size ? b : a));
		const bad = small.filter(t => t.size < RULES.failReadPx - 0.5).reduce((s, t) => s + t.t.length, 0);
		add(bad >= RULES.smallCharsFail ? 'fail' : 'warn', 'Text too small', `${n} characters below ${RULES.minReadPx} px (${bad} below ${RULES.failReadPx} px); smallest is ${Math.round(worst.size)} px: ${quote(worst.t)}.`);
	}
	const lines = solid.filter(t => t.t.length >= 6);
	if (!f.isNotes && lines.length && chars >= 20) {
		const largest = Math.max(...lines.map(t => t.size));
		if (largest < RULES.minCurrentPx - 0.5) add('fail', 'No line at working size', `The largest line is ${Math.round(largest)} px; the current line must be at least ${RULES.minCurrentPx} px.`);
	}

	const faint = texts.filter(t => t.t.length > RULES.shortTokenChars && (t.op < RULES.faintOpacity || (t.contrast !== null && t.contrast < RULES.faintContrast)));
	const faintChars = faint.reduce((s, t) => s + t.t.length, 0);
	if (chars >= 30 && faintChars / chars > RULES.faintShareWarn) add(faintChars / chars > RULES.faintShareFail ? 'fail' : 'warn', 'Faint text', `${Math.round((faintChars / chars) * 100)}% of the text is faint or low contrast, for example ${quote(faint[0].t)}.`);

	const off = solid.filter(t => t.box[0] < -6 || t.box[1] < -6 || t.box[0] + t.box[2] > 1926 || t.box[1] + t.box[3] > 1086);
	if (off.length) add('fail', 'Text off the frame', `${quote(off[0].t)} runs past the edge.`);

	const firm = texts.filter(t => t.op >= 0.7 && t.t.length >= 3);
	let hit = null;
	for (let i = 0; i < firm.length && !hit; i++) for (let j = i + 1; j < firm.length; j++) {
		if (firm[i].blk !== undefined && firm[i].blk === firm[j].blk) continue;
		const o = overlap(firm[i].box, firm[j].box);
		if (o > RULES.overlapShare * Math.min(area(firm[i].box), area(firm[j].box))) { hit = [firm[i], firm[j]]; break; }
	}
	if (hit) add('warn', 'Text may collide', `${quote(hit[0].t)} overlaps ${quote(hit[1].t)}.`);

	const picture = hasPicture(audit);
	if (!f.inHold && chars < RULES.thinChars && !picture) add('fail', 'Thin frame', `Only ${chars} characters and no plate or diagram.`);
	if (ink && !f.inHold && !(f.isNotes && f.afterSpeech)) {
		// A question card on its own is allowed to leave room (the gate's empty rule is for teaching frames), so it only warns.
		if (ink.empty > RULES.emptyFail) add(f.isQuestion ? 'warn' : 'fail', 'Mostly empty frame', `${Math.round(ink.empty * 100)}% of the frame is bare paper.${f.isQuestion ? ' Question scene: consider showing the picture the question is about.' : ''}`);
		else if (ink.empty > RULES.emptyWarn) add('warn', 'Sparse frame', `${Math.round(ink.empty * 100)}% of the frame is bare paper.`);
		if (ink.empty <= RULES.emptyFail && (ink.spanW < 0.55 || ink.spanH < 0.4)) add('warn', 'Content in one corner', `Content spans ${Math.round(ink.spanW * 100)}% of the width and ${Math.round(ink.spanH * 100)}% of the height.`);
	}
	if (f.role === 'hold' && !audit.countdown) add('warn', 'Countdown not detected', 'No kit Countdown is on screen in the middle of the answer pause. Ignore this if the lesson draws its own ring.');
	if (f.role === 'notes' && chars > RULES.notesMaxChars) add('warn', 'Dense key notes', `${chars} characters on the notes screen; the standard is about five short bullets.`);
	return out;
};

/** Findings about the lesson as a whole. */
export const analyseLesson = ({config, scenes, sheet, lessonDir}) => {
	const out = [];
	const add = (level, rule, detail, extra = {}) => out.push({level, rule, detail, ...extra});

	// Long unchanged stretches, ignoring answer pauses and the quiet notes hold.
	let run = [];
	const flush = () => {
		if (run.length >= RULES.sameRunWarn) add(run.length >= RULES.sameRunFail ? 'fail' : 'warn', 'Unchanged set-up', `Frames ${run[0].slot} to ${run[run.length - 1].slot} of the sheet show almost the same picture (about ${Math.round(((run[run.length - 1].frame - run[0].frame) / 30))} s).`);
		run = [];
	};
	sheet.forEach((f, i) => {
		const quiet = f.inHold || (f.isNotes && f.afterSpeech);
		if (i && !quiet && f.changedFromPrev !== null && f.changedFromPrev < RULES.sameChange) { if (!run.length) run.push(sheet[i - 1]); run.push(f); } else flush();
	});
	flush();

	const teaching = sheet.filter(f => !f.inHold && !f.isNotes);
	const withPicture = teaching.filter(f => hasPicture(f.audit)).length;
	if (teaching.length && withPicture / teaching.length < RULES.pictureShareWarn) add('warn', 'Few pictures', `Only ${withPicture} of ${teaching.length} teaching frames hold a plate (${RULES.pictureMinPx} px or taller) or a drawn diagram.`);

	const notes = scenes.find(s => /key-?notes/i.test(s.id));
	if (notes && notes.durationInFrames < RULES.notesMinFrames) add('fail', 'Short key-notes hold', `The key-notes scene is ${(notes.durationInFrames / 30).toFixed(1)} s; it must be at least 40 s.`, {scene: notes.id});

	for (const s of scenes) {
		if (!config.scenes[s.id]) add('fail', 'Scene has no picture', 'No component is registered for this scene, so it renders blank.', {scene: s.id});
		if ((s.captions ?? []).some(c => c.text.includes('—'))) add('fail', 'Em dash in captions', 'The caption track contains an em dash.', {scene: s.id});
	}

	if (lessonDir && fs.existsSync(lessonDir)) {
		for (const file of fs.readdirSync(lessonDir).filter(n => /\.tsx?$/.test(n))) {
			const text = fs.readFileSync(path.join(lessonDir, file), 'utf8');
			if (text.includes('—')) add('fail', 'Em dash in source', `${file} contains an em dash.`);
		}
	}
	return out;
};
