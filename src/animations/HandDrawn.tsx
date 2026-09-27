// Hand-drawn "stop-motion" style: line boil + animating on threes + paper grain.
//
// The look: every line wobbles slightly each redraw, as if the frame had been
// traced again by hand, and motion advances in held steps (10 drawings a
// second) instead of a smooth 30 fps. Three ingredients:
//
//   1. Stepped time. <HandDrawnStage> wraps its children in Remotion's <Freeze>
//      at a quantised frame, so ANY existing diagram inside it (it reads
//      useCurrentFrame() as usual) animates in held steps without being edited.
//   2. Line boil. An SVG turbulence + displacement filter is applied (as a CSS
//      filter) to the whole stage. Its noise seed re-rolls every step and
//      cycles through BOIL_CYCLE drawings, like a classic animation boil loop.
//      The boil runs off the real frame, so a finished diagram never looks
//      frozen during a long narration hold.
//   3. Paper grain. A faint noise overlay that also re-rolls each step.
//
// Used two ways:
//   - The style toggle: `"visualStyle": "handDrawn"` on a lesson, or
//     `"diagramStyle": "handDrawn"` on a single concept scene, wraps that
//     diagram in a stage (ConceptSlide). No diagram component changes.
//   - The hand-drawn diorama kinds (src/slides/diagrams/kinds/handdrawn/) wrap
//     themselves, so they always look hand-drawn. Stages don't nest: an inner
//     stage inside an outer one renders its children as-is.
//
// Deterministic: no Math.random(); the same frame always renders the same way.
// Filter ids are namespaced with the `id` prop so two stages on screen at once
// (e.g. during a transition) never clash. See docs/hand-drawn-style.md.

import {createContext, useContext, type CSSProperties, type ReactNode} from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {TOK} from '../styles/tokens';

/** Frames each drawing is held for. 3 = "on threes" (10 drawings/s at 30 fps). */
export const HAND_STEP = 3;
/** Number of distinct boil drawings before the wobble repeats. */
export const BOIL_CYCLE = 4;

/** Graphite-pencil palette for hand-drawn diagrams on the light stage. */
export const PENCIL = {
	ink: '#2b2a33',
	inkSoft: '#5d5b66',
	hatch: '#7d7a86',
	paper: '#fbfaf6',
	paperShade: '#efece4',
} as const;

const HandDrawnContext = createContext<{id: string} | null>(null);

/** True when rendering inside a <HandDrawnStage>. */
export const useInHandDrawnStage = () => useContext(HandDrawnContext) !== null;

/** Quantise a frame to the held-drawing grid. */
export const stepFrame = (frame: number, step = HAND_STEP) => Math.floor(frame / step) * step;

/** Which boil drawing is showing (0 … BOIL_CYCLE-1). Reads the real frame. */
export const useBoilIndex = (step = HAND_STEP, cycle = BOIL_CYCLE) => Math.floor(useCurrentFrame() / step) % cycle;

const safeId = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, '-');

/** SVG <filter>s for the boil, keyed by `id`. Render inside an <svg><defs>. */
export const BoilFilters = ({id, strength = 3, freq = 0.02, boil}: {id: string; strength?: number; freq?: number; boil: number}) => (
	<>
		<filter id={`${id}-boil`} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
			<feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves={2} seed={boil * 17 + 3} result="n" />
			<feDisplacementMap in="SourceGraphic" in2="n" scale={strength} xChannelSelector="R" yChannelSelector="G" />
		</filter>
		<filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
			<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={boil * 11 + 1} />
			{/* graphite specks: ink colour, alpha only where the noise dips, so the
			    overlay adds texture without greying the whole stage */}
			<feColorMatrix type="matrix" values="0 0 0 0 0.17  0 0 0 0 0.16  0 0 0 0 0.2  -2.2 0 0 0 1.05" />
		</filter>
	</>
);

/**
 * Pencil-hatching fills. Use as fill={`url(#${id}-hatch)`} (40°) or
 * `url(#${id}-hatchX)` (-50°, lighter). Render inside <defs>.
 */
export const HatchDefs = ({id, color = PENCIL.hatch}: {id: string; color?: string}) => (
	<>
		<pattern id={`${id}-hatch`} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(40)">
			<line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="1.3" opacity="0.6" />
		</pattern>
		<pattern id={`${id}-hatchX`} patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(-50)">
			<line x1="0" y1="0" x2="0" y2="10" stroke={color} strokeWidth="1.1" opacity="0.45" />
		</pattern>
	</>
);

export type HandDrawnStageProps = {
	/** Namespace for filter ids; unique per stage on screen. */
	id?: string;
	children: ReactNode;
	/** Frames per held drawing (default HAND_STEP = 3). */
	step?: number;
	/** Boil displacement in px (default 3). 0 turns the wobble off. */
	strength?: number;
	/** Paper-grain overlay opacity (default 0.25). 0 turns it off. */
	grain?: number;
	style?: CSSProperties;
};

export const HandDrawnStage = ({id = 'hd', children, step = HAND_STEP, strength = 3, grain = 0.25, style}: HandDrawnStageProps) => {
	const outer = useContext(HandDrawnContext);
	const frame = useCurrentFrame();
	if (outer) return <>{children}</>;

	const sid = safeId(id);
	const boil = Math.floor(frame / step) % BOIL_CYCLE;

	return (
		<HandDrawnContext.Provider value={{id: sid}}>
			<div style={{position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style}}>
				<svg width={0} height={0} style={{position: 'absolute'}} aria-hidden>
					<defs>
						<BoilFilters id={sid} strength={strength} boil={boil} />
					</defs>
				</svg>
				<div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: strength > 0 ? `url(#${sid}-boil)` : undefined}}>
					<Freeze frame={stepFrame(frame, step)}>{children}</Freeze>
				</div>
				{grain > 0 && (
					<svg
						width="100%"
						height="100%"
						// feathered edges so the grain never shows the stage's rectangle
						style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: grain, WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 98%)', maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 98%)'}}
						aria-hidden
					>
						<rect width="100%" height="100%" filter={`url(#${sid}-grain)`} />
					</svg>
				)}
			</div>
		</HandDrawnContext.Provider>
	);
};

/** Resolve whether a concept scene's diagram should be hand-drawn. */
export const resolveDiagramStyle = (
	lessonStyle: 'default' | 'handDrawn' | undefined,
	sceneStyle: 'default' | 'handDrawn' | undefined,
): 'default' | 'handDrawn' => sceneStyle ?? lessonStyle ?? 'default';

/** Handwritten label text in the house Caveat face. */
export const HAND_TEXT: CSSProperties = {fontFamily: '"Caveat", "Kalam", cursive', fontWeight: 600, fill: TOK.ink};
