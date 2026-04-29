import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CSSProperties, ReactNode} from 'react';

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

const SCRAMBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789×÷=ₐ₀₁₂₃₄₅₆₇₈₉';

type BasicMotionProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	style?: CSSProperties;
};

export const useAmbientFloat = (amplitude = 6, speedSeconds = 4.6, phase = 0) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;

	return Math.sin((t / speedSeconds) * Math.PI * 2 + phase) * amplitude;
};

export const AmbientFloat = ({
	children,
	className,
	delay = 0,
	style,
}: BasicMotionProps) => {
	const offset = useAmbientFloat(5, 4.8, delay * 0.11);

	return (
		<div className={className} style={{...style, transform: `translateY(${offset}px)`}}>
			{children}
		</div>
	);
};

export const ParticleEmitter = ({delay = 0}: {delay?: number}) => {
	const frame = useCurrentFrame();
	const particles = Array.from({length: 14}, (_, index) => index);

	return (
		<div className="particle-emitter" aria-hidden>
			{particles.map((particle) => {
				const cycle = 72;
				const local = (((frame - delay - particle * 5) % cycle) + cycle) % cycle;
				const progress = local / cycle;
				const x = Math.sin(particle * 1.9) * 72 + Math.cos(progress * Math.PI * 2) * 10;
				const y = interpolate(progress, [0, 1], [26, -86]);
				const opacity = interpolate(progress, [0, 0.18, 0.72, 1], [0, 0.55, 0.42, 0], clamp);
				const scale = interpolate(progress, [0, 0.5, 1], [0.4, 1, 0.25]);

				return (
					<span
						key={particle}
						style={{
							left: `calc(50% + ${x}px)`,
							opacity,
							transform: `translateY(${y}px) scale(${scale})`,
						}}
					/>
				);
			})}
		</div>
	);
};

export const Heartbeat = ({
	children,
	className,
	delay = 0,
	style,
}: BasicMotionProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const pulse = spring({
		frame: frame - delay,
		fps,
		config: {damping: 7, stiffness: 420, mass: 0.55},
		durationInFrames: 20,
	});
	const scale = interpolate(pulse, [0, 0.58, 1], [1, 1.05, 1], clamp);

	return (
		<div className={className} style={{...style, transform: `scale(${scale})`}}>
			{children}
		</div>
	);
};

const numberPattern = /(\d+(?:\.\d+)?(?:\s*×\s*10[⁰¹²³⁴⁵⁶⁷⁸⁹]+)?)/g;

const superscriptToNumber = (value: string) =>
	value.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (char) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(char).toString());

const numberToSuperscript = (value: string) =>
	value.replace(/[0-9]/g, (char) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(char)]);

const OdometerNumber = ({value, delay}: {value: string; delay: number}) => {
	const frame = useCurrentFrame();
	const hasScientific = value.includes('×');
	const [base, exponentRaw] = value.split(/×\s*10/);
	const target = Number.parseFloat(base.replace(/\s/g, ''));
	const exponent = exponentRaw ? superscriptToNumber(exponentRaw) : '';
	const decimals = base.includes('.') ? base.split('.')[1].trim().length : 0;
	const progress = interpolate(frame, [delay, delay + 32], [0, 1], clamp);
	const eased = 1 - Math.pow(1 - progress, 3);
	const current = target * eased;
	const formatted = Number.isFinite(current) ? current.toFixed(decimals) : value;

	return (
		<span className="odometer-number">
			{hasScientific ? `${formatted} × 10${numberToSuperscript(exponent)}` : formatted}
		</span>
	);
};

export const OdometerText = ({text, delay = 0}: {text: string; delay?: number}) => {
	const parts = text.split(numberPattern).filter((part) => part.length > 0);

	return (
		<>
			{parts.map((part, index) => {
				const isNumber = /^(\d+(?:\.\d+)?(?:\s*×\s*10[⁰¹²³⁴⁵⁶⁷⁸⁹]+)?)$/.test(part);

				return isNumber ? (
					<OdometerNumber delay={delay + index * 2} key={`${part}-${index}`} value={part} />
				) : (
					<span key={`${part}-${index}`}>{part}</span>
				);
			})}
		</>
	);
};

export const TypewriterText = ({text, delay = 0, speed = 2}: {text: string; delay?: number; speed?: number}) => {
	const frame = useCurrentFrame();
	const duration = Math.max(1, text.length / speed);
	const visible = Math.floor(interpolate(frame, [delay, delay + duration], [0, text.length], clamp));

	return (
		<span>
			{text.slice(0, visible)}
			<span className="typewriter-caret">{visible < text.length ? '|' : ''}</span>
		</span>
	);
};

export const WordReveal = ({text, delay = 0, className}: {text: string; delay?: number; className?: string}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const words = text.split(' ');

	return (
		<span className={className}>
			{words.map((word, index) => {
				const wordDelay = delay + index * 4;
				const progress = spring({
					frame: frame - wordDelay,
					fps,
					config: {damping: 22, stiffness: 280, mass: 0.6},
				});
				const y = interpolate(progress, [0, 1], [22, 0], clamp);
				const opacity = interpolate(frame - wordDelay, [0, 8], [0, 1], clamp);

				return (
					<span
						key={`${word}-${index}`}
						style={{
							display: 'inline-block',
							transform: `translateY(${y}px)`,
							opacity,
							marginRight: index < words.length - 1 ? '0.28em' : 0,
						}}
					>
						{word}
					</span>
				);
			})}
		</span>
	);
};

export const ScrambleText = ({text, delay = 0}: {text: string; delay?: number}) => {
	const frame = useCurrentFrame();
	const resolved = Math.floor(interpolate(frame, [delay, delay + 28], [0, text.length], clamp));

	return (
		<span>
			{Array.from(text).map((char, index) => {
				if (char === ' ' || index < resolved) {
					return char;
				}

				return SCRAMBLE[(index * 13 + frame) % SCRAMBLE.length];
			})}
		</span>
	);
};

export const WaveText = ({text, delay = 0}: {text: string; delay?: number}) => {
	const frame = useCurrentFrame();

	return (
		<span className="wave-text">
			{Array.from(text).map((char, index) => {
				const local = frame - delay - index * 1.4;
				const progress = interpolate(local, [0, 30], [0, 1], clamp);
				const amplitude = interpolate(progress, [0, 0.35, 1], [0, 8, 0], clamp);
				const y = Math.sin(progress * Math.PI * 2) * amplitude;

				return (
					<span key={`${char}-${index}`} style={{transform: `translateY(${y}px)`}}>
						{char === ' ' ? '\u00a0' : char}
					</span>
				);
			})}
		</span>
	);
};

export const useSceneCamera = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const progress = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [0, 1], clamp);
	const pushScale = interpolate(progress, [0, 1], [1, 1.06], {
		...clamp,
		easing: Easing.bezier(0.45, 0, 0.55, 1),
	});

	return {progress, pushScale};
};

export const CameraFrame = ({children, className, style}: BasicMotionProps) => {
	const {pushScale} = useSceneCamera();

	return (
		<div
			className={className}
			style={{
				...style,
				transform: `scale(${pushScale})`,
				transformOrigin: 'center',
			}}
		>
			{children}
		</div>
	);
};

export const KenBurns = ({
	children,
	className,
	delay = 0,
	style,
}: BasicMotionProps) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const progress = interpolate(
		frame,
		[delay, Math.max(delay + 1, durationInFrames - 1)],
		[0, 1],
		clamp,
	);
	const x = interpolate(progress, [0, 1], [-18, 18]);
	const scale = interpolate(progress, [0, 1], [1.01, 1.055]);

	return (
		<div
			className={className}
			style={{
				...style,
				transform: `translateX(${x}px) scale(${scale})`,
				transformOrigin: 'center',
			}}
		>
			{children}
		</div>
	);
};

export const FocusLayer = ({
	children,
	className,
	delay = 30,
	style,
}: BasicMotionProps) => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [delay, delay + 24, delay + 72], [2.6, 0, 0], clamp);
	const opacity = interpolate(frame, [0, delay], [0.86, 1], clamp);

	return (
		<div className={className} style={{...style, filter: `blur(${blur}px)`, opacity}}>
			{children}
		</div>
	);
};

export const ParallaxLayer = ({
	children,
	className,
	depth = 0.5,
	style,
}: BasicMotionProps & {depth?: number}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;
	const x = Math.sin(t * 0.22 * Math.PI * 2) * 16 * depth;
	const y = Math.cos(t * 0.17 * Math.PI * 2) * 9 * depth;

	return (
		<div className={className} style={{...style, transform: `translate(${x}px, ${y}px)`, willChange: 'transform'}}>
			{children}
		</div>
	);
};

export const ShakeLayer = ({
	children,
	className,
	delay = 0,
	style,
}: BasicMotionProps) => {
	const frame = useCurrentFrame();
	const local = frame - delay;
	const strength = interpolate(local, [0, 8], [1, 0], clamp);
	const x = local >= 0 && local <= 8 ? Math.sin(local * Math.PI * 1.65) * 10 * strength : 0;
	const y = local >= 0 && local <= 8 ? Math.cos(local * Math.PI * 1.2) * 3 * strength : 0;

	return (
		<div className={className} style={{...style, transform: `translate(${x}px, ${y}px)`}}>
			{children}
		</div>
	);
};
