import React, {useEffect, useRef} from 'react';
import {continueRender, delayRender, useCurrentFrame} from 'remotion';

// Measures what is actually on screen in one frame and prints it to the browser
// console as one line, which scripts/explainer-grade.mjs collects. It reads the
// live page (real font sizes after every scale, real opacity, real image sizes),
// so it checks the picture a student sees rather than the numbers in the source.

export const AUDIT_PREFIX = 'EXPLAINER_AUDIT::';

type Box = [number, number, number, number];
export type AuditText = {t: string; size: number; op: number; box: Box; hand: boolean; fontOk: boolean; family: string; blk: number};
export type AuditImage = {src: string; box: Box; broken: boolean; stretch: number; op: number};
export type AuditFrame = {frame: number; texts: AuditText[]; images: AuditImage[]; shapes: number; countdown: boolean; fonts: {hand: boolean; display: boolean}};

const round = (n: number) => Math.round(n * 10) / 10;

/** Combined opacity of an element and its ancestors, up to the probe root. */
const opacityChain = (el: Element | null, root: Element): number => {
	let o = 1;
	for (let e: Element | null = el; e && e !== root; e = e.parentElement) {
		const cs = getComputedStyle(e);
		if (cs.display === 'none' || cs.visibility === 'hidden') return 0;
		o *= Number(cs.opacity);
		if (o < 0.02) return 0;
	}
	return o;
};

/** Uniform scale applied to an element by every transform above it. */
const scaleOf = (el: Element, root: Element): number => {
	if (el instanceof SVGGraphicsElement) {
		const m = el.getScreenCTM();
		if (m) return Math.sqrt(Math.abs(m.a * m.d - m.b * m.c));
	}
	let s = 1;
	for (let e: Element | null = el; e && e !== root.parentElement; e = e.parentElement) {
		const t = getComputedStyle(e).transform;
		if (t && t !== 'none') {
			const m = new DOMMatrixReadOnly(t);
			s *= Math.sqrt(Math.abs(m.a * m.d - m.b * m.c));
		}
	}
	return s;
};

/** True when a clip-path write-on has not revealed any of the text yet. */
const fullyClipped = (el: Element, root: Element): boolean => {
	for (let e: Element | null = el; e && e !== root; e = e.parentElement) {
		const m = /inset\(\s*\S+\s+([\d.]+)%/.exec(getComputedStyle(e).clipPath);
		if (m && Number(m[1]) >= 97) return true;
	}
	return false;
};

const firstFamily = (family: string) => family.split(',')[0].trim().replace(/^["']|["']$/g, '');

const collect = (root: HTMLElement, frame: number): AuditFrame => {
	const texts: AuditText[] = [];
	// Text runs in the same paragraph (a bold span inside a wrapped sentence) share a block number,
	// so the collision check does not mistake one paragraph's pieces for two overlapping labels.
	const blocks = new Map<Element, number>();
	const blockOf = (el: Element): number => {
		let e: Element = el;
		while (e !== root && e.parentElement && (e instanceof SVGElement ? e.tagName.toLowerCase() !== 'text' && e.parentElement instanceof SVGElement && e.tagName.toLowerCase() === 'tspan' : getComputedStyle(e).display.startsWith('inline'))) e = e.parentElement;
		if (!blocks.has(e)) blocks.set(e, blocks.size);
		return blocks.get(e) as number;
	};
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	const range = document.createRange();
	for (let node = walker.nextNode(); node; node = walker.nextNode()) {
		const raw = (node.textContent ?? '').replace(/\s+/g, ' ').trim();
		const parent = node.parentElement;
		if (!raw || !parent || parent.closest('[data-audit-ignore]')) continue;
		const op = opacityChain(parent, root);
		if (op < 0.05 || fullyClipped(parent, root)) continue;
		range.selectNodeContents(node);
		const r = range.getBoundingClientRect();
		if (r.width < 1 || r.height < 1) continue;
		const cs = getComputedStyle(parent);
		const family = firstFamily(cs.fontFamily);
		const size = parseFloat(cs.fontSize) * scaleOf(parent, root);
		texts.push({
			t: raw.slice(0, 90),
			size: round(size),
			op: round(op * 100) / 100,
			box: [round(r.left), round(r.top), round(r.width), round(r.height)],
			hand: /caveat/i.test(family),
			fontOk: document.fonts.check(`${cs.fontWeight} 20px "${family}"`),
			family,
			blk: blockOf(parent),
		});
	}
	const images: AuditImage[] = [];
	for (const el of Array.from(root.querySelectorAll('img, video'))) {
		if (el.closest('[data-audit-ignore]')) continue;
		const op = opacityChain(el, root);
		if (op < 0.05) continue;
		const r = el.getBoundingClientRect();
		// Report the part of the picture that is really visible: a cropped plate sits in a clipping parent.
		let left = r.left, top = r.top, right = r.right, bottom = r.bottom;
		for (let e = el.parentElement; e && e !== root; e = e.parentElement) {
			if (getComputedStyle(e).overflow !== 'visible') {
				const c = e.getBoundingClientRect();
				left = Math.max(left, c.left); top = Math.max(top, c.top); right = Math.min(right, c.right); bottom = Math.min(bottom, c.bottom);
			}
		}
		if (right - left < 4 || bottom - top < 4) continue;
		const isImg = el instanceof HTMLImageElement;
		const nw = isImg ? el.naturalWidth : (el as HTMLVideoElement).videoWidth;
		const nh = isImg ? el.naturalHeight : (el as HTMLVideoElement).videoHeight;
		const html = el as HTMLElement;
		const fit = getComputedStyle(el).objectFit;
		const stretch = nw && nh && html.offsetWidth && html.offsetHeight && (fit === 'fill' || !fit) ? (html.offsetWidth / html.offsetHeight) / (nw / nh) : 1;
		const src = (isImg ? el.currentSrc || el.src : (el as HTMLVideoElement).currentSrc || (el as HTMLVideoElement).src).split('/').slice(-2).join('/');
		images.push({src, box: [round(left), round(top), round(right - left), round(bottom - top)], broken: isImg ? nw === 0 : false, stretch: round(stretch * 1000) / 1000, op: round(op * 100) / 100});
	}
	// Plates placed inside an SVG (<image>): counted as pictures. Their true shape is not
	// readable here, so the stretch check covers HTML images and video only.
	for (const el of Array.from(root.querySelectorAll('svg image'))) {
		if (el.closest('[data-audit-ignore]')) continue;
		const op = opacityChain(el, root);
		if (op < 0.05) continue;
		const r = el.getBoundingClientRect();
		const left = Math.max(0, r.left), top = Math.max(0, r.top), right = Math.min(1920, r.right), bottom = Math.min(1080, r.bottom);
		if (right - left < 4 || bottom - top < 4) continue;
		const href = (el as SVGImageElement).href.baseVal;
		images.push({src: href.split('/').slice(-2).join('/'), box: [round(left), round(top), round(right - left), round(bottom - top)], broken: false, stretch: 1, op: round(op * 100) / 100});
	}
	let shapes = 0;
	for (const el of Array.from(root.querySelectorAll('path, circle, ellipse, line, rect, polygon, polyline'))) {
		if (!el.closest('[data-audit-ignore]') && opacityChain(el, root) >= 0.2) shapes++;
	}
	return {
		frame, texts, images, shapes,
		countdown: Boolean(root.querySelector('[data-audit="countdown"]')),
		fonts: {hand: document.fonts.check('700 20px "Caveat"'), display: document.fonts.check('500 20px "Inter Tight"')},
	};
};

export const AuditProbe: React.FC<{children: React.ReactNode}> = ({children}) => {
	const frame = useCurrentFrame();
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handle = delayRender(`Audit frame ${frame}`, {timeoutInMilliseconds: 60000});
		let done = false;
		const finish = () => { if (!done) { done = true; continueRender(handle); } };
		const started = Date.now();
		const measure = () => {
			if (done) return;
			const root = ref.current;
			if (!root) return finish();
			const pending = Array.from(root.querySelectorAll('img')).some(i => !i.complete);
			if (pending && Date.now() - started < 8000) { setTimeout(measure, 60); return; }
			try {
				console.log(AUDIT_PREFIX + JSON.stringify(collect(root, frame)));
			} catch (error) {
				console.log(AUDIT_PREFIX + JSON.stringify({frame, error: String(error)}));
			}
			finish();
		};
		document.fonts.ready.then(() => setTimeout(measure, 60), finish);
		return finish;
	}, [frame]);
	return <div ref={ref} style={{position: 'absolute', inset: 0}}>{children}</div>;
};
