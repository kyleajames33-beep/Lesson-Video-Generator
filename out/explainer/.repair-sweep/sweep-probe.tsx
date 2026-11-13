import React, {useEffect, useRef} from 'react';
import {continueRender, delayRender, useCurrentFrame} from 'remotion';
// Repair-sweep probe (12 Nov 2026): text runs plus opaque cards, with paint order, for overlap checks.
export const SWEEP_PREFIX = 'REPAIR_SWEEP::';
// Ink mode (13 Nov 2026): hide every glyph (HTML text fill/stroke/shadow/decoration, SVG text fill/stroke) but keep
// all graphics, card fills and borders. Text boxes are still measured from the DOM, so ink.py can count non-background
// pixels inside each text box: any line, curve, axis, leader, border or plate edge that passes through a label.
const HIDE_TEXT_CSS = `*, *::before, *::after { -webkit-text-fill-color: transparent !important; -webkit-text-stroke-color: transparent !important; text-shadow: none !important; text-decoration-color: transparent !important; }
svg text, svg tspan, svg textPath { fill: transparent !important; stroke: transparent !important; }`;
// Text-only mode (13 Nov 2026): the opposite render, every graphic, fill, border, shadow and image hidden on a white
// ground, so ink.py gets an exact glyph mask (glyphs and halos only).
const TEXT_ONLY_CSS = `*, *::before, *::after { background-color: transparent !important; background-image: none !important; border-color: transparent !important; box-shadow: none !important; outline-color: transparent !important; }
svg path, svg line, svg rect, svg circle, svg ellipse, svg polyline, svg polygon, svg image, img, canvas, video { visibility: hidden !important; }
div[data-probe-root] { background-color: #ffffff !important; }`;
const r1 = (n: number) => Math.round(n);
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
const scaleOf = (el: Element, root: Element): number => {
	if (el instanceof SVGGraphicsElement) { const m = el.getScreenCTM(); if (m) return Math.sqrt(Math.abs(m.a * m.d - m.b * m.c)); }
	let s = 1;
	for (let e: Element | null = el; e && e !== root.parentElement; e = e.parentElement) {
		const t = getComputedStyle(e).transform;
		if (t && t !== 'none') { const m = new DOMMatrixReadOnly(t); s *= Math.sqrt(Math.abs(m.a * m.d - m.b * m.c)); }
	}
	return s;
};
const clipped = (el: Element, root: Element): boolean => {
	for (let e: Element | null = el; e && e !== root; e = e.parentElement) {
		const m = /inset\(\s*\S+\s+([\d.]+)%/.exec(getComputedStyle(e).clipPath);
		if (m && Number(m[1]) >= 97) return true;
	}
	return false;
};
const collect = (root: HTMLElement, frame: number) => {
	let order = 0;
	const idx = new Map<Element, number>();
	for (const el of Array.from(root.querySelectorAll('*'))) idx.set(el, order++);
	const blocks = new Map<Element, number>();
	const blockOf = (el: Element): number => {
		let e: Element = el;
		while (e !== root && e.parentElement && (e instanceof SVGElement ? e.tagName.toLowerCase() === 'tspan' : getComputedStyle(e).display.startsWith('inline'))) e = e.parentElement;
		if (!blocks.has(e)) blocks.set(e, blocks.size);
		return blocks.get(e) as number;
	};
	const texts: any[] = [];
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	const range = document.createRange();
	for (let node = walker.nextNode(); node; node = walker.nextNode()) {
		const raw = (node.textContent ?? '').replace(/\s+/g, ' ').trim();
		const parent = node.parentElement;
		if (!raw || !parent) continue;
		const op = opacityChain(parent, root);
		if (op < 0.3 || clipped(parent, root)) continue;
		range.selectNodeContents(node);
		const rects = Array.from(range.getClientRects()).filter(r => r.width >= 1 && r.height >= 1);
		if (!rects.length) continue;
		const size = parseFloat(getComputedStyle(parent).fontSize) * scaleOf(parent, root);
		for (const r of rects) texts.push({t: raw.slice(0, 60), s: Math.round(size * 10) / 10, op: Math.round(op * 100) / 100, b: [r1(r.left), r1(r.top), r1(r.width), r1(r.height)], k: blockOf(parent), i: idx.get(parent) ?? -1});
	}
	const cards: any[] = [];
	for (const el of Array.from(root.querySelectorAll('div, span'))) {
		const cs = getComputedStyle(el);
		const m = /rgba?\(([^)]+)\)/.exec(cs.backgroundColor);
		if (!m) continue;
		const parts = m[1].split(',').map(Number);
		const a = parts.length > 3 ? parts[3] : 1;
		if (a < 0.8) continue;
		const op = opacityChain(el, root);
		if (op < 0.5) continue;
		const r = el.getBoundingClientRect();
		if (r.width < 40 || r.height < 30 || (r.width > 1800 && r.height > 1000)) continue;
		cards.push({b: [r1(r.left), r1(r.top), r1(r.width), r1(r.height)], op: Math.round(op * 100) / 100, i: idx.get(el) ?? -1, n: el.querySelectorAll('*').length, last: (() => { const all = el.querySelectorAll('*'); return all.length ? idx.get(all[all.length - 1]) ?? -1 : idx.get(el) ?? -1; })()});
	}
	return {frame, texts, cards};
};
export const SweepProbe: React.FC<{children: React.ReactNode; hideText?: boolean; textOnly?: boolean}> = ({children, hideText = false, textOnly = false}) => {
	const frame = useCurrentFrame();
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handle = delayRender(`Sweep frame ${frame}`, {timeoutInMilliseconds: 60000});
		let done = false;
		const finish = () => { if (!done) { done = true; continueRender(handle); } };
		const measure = () => {
			if (done) return;
			const root = ref.current;
			if (!root) return finish();
			try { console.log(SWEEP_PREFIX + JSON.stringify(collect(root, frame))); } catch (error) { console.log(SWEEP_PREFIX + JSON.stringify({frame, error: String(error)})); }
			finish();
		};
		document.fonts.ready.then(() => setTimeout(measure, 40), finish);
		return finish;
	}, [frame]);
	return <div ref={ref} data-probe-root="" style={{position: 'absolute', inset: 0}}>{hideText ? <style>{HIDE_TEXT_CSS}</style> : null}{textOnly ? <style>{TEXT_ONLY_CSS}</style> : null}{children}</div>;
};
