import React, {useLayoutEffect, useRef} from 'react';
import {cancelRender, continueRender, delayRender, useCurrentFrame} from 'remotion';

/** Wait for the images in this frame, rather than retaining the entire lesson. */
export const ExplainerAssetGuard: React.FC<{children: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const cache = useRef(new Map<string, HTMLImageElement>());
  useLayoutEffect(() => {
    const handle = delayRender(`Decode frame ${frame} images`, {timeoutInMilliseconds: 60000});
    let active = true;
    let released = false;
    const release = () => {if (!released) {released = true; continueRender(handle);}};
    const urls = new Set<string>();
    for (const node of document.querySelectorAll('img, image')) {
      const value = node instanceof HTMLImageElement ? node.currentSrc || node.src : (node as SVGImageElement).href.baseVal;
      if (value) urls.add(new URL(value, window.location.href).href);
    }
    for (const node of document.querySelectorAll<HTMLElement>('[style*="url("]')) {
      const background = node.style.backgroundImage || node.style.background;
      for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        if (!match[1].startsWith('#')) urls.add(new URL(match[1], window.location.href).href);
      }
    }
    // Discard previous-scene bitmaps before loading new ones. SVG elements keep
    // using the browser's resource cache; these references protect current ones.
    for (const url of cache.current.keys()) if (!urls.has(url)) cache.current.delete(url);
    (async () => {
      for (const url of urls) {
        const prior = cache.current.get(url);
        if (prior?.complete && prior.naturalWidth > 0) continue;
        const image = new Image(); image.src = url;
        try {await image.decode();} catch (error) {throw new Error(`${url}: ${String(error)}`);}
        if (!image.naturalWidth) throw new Error(`Empty image: ${url}`);
        if (active) cache.current.set(url, image);
      }
    })().then(release, error => {if (active) cancelRender(new Error(`Explainer image decode failed at frame ${frame}: ${String(error)}`));});
    return () => {active = false; release();};
  }, [frame]);
  return <>{children}</>;
};
