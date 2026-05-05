// FormulaSlide — gold-standard re-skin (Phase 3, 2026-05-01).
//
// Pattern: docs/design-canvas-reference/animated-scenes-v3.jsx FormulaAnimated.
// Equation terms enter with staggered labels below; the safety-check layer
// lands after the formula so students read the equation before the notes.

import {interpolate, useCurrentFrame} from 'remotion';
import type {LessonData, TextScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {FONT_MONO, TOK} from '../styles/tokens';

type FormulaSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

type FormulaTermConfig = {
	key: string;
	text: string;
	color: string;
	label?: string;
	sub?: string;
	delay: number;
	kind: 'term' | 'operator';
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const FormulaSlide = ({scene, lesson, sceneIndex, totalScenes}: FormulaSlideProps) => {
	const terms = buildTerms(scene.body);

	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="FORMULA" sceneType="formula" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<div style={{position: 'absolute', top: 180, left: 64, right: 64}}>
				<FadeUp delay={3} durationFrames={12}>
					<div
						style={{
							fontFamily: FONT_MONO,
							fontSize: 22,
							color: TOK.amber,
							letterSpacing: '0.2em',
							textTransform: 'uppercase',
						}}
					>
						↳ THE COUNTING EQUATION
					</div>
				</FadeUp>
				<FadeUp delay={18} durationFrames={14} dy={18}>
					<div
						style={{
							maxWidth: 1400,
							marginTop: 18,
							fontSize: 56,
							fontWeight: 650,
							lineHeight: 1.12,
							letterSpacing: '-0.025em',
							color: TOK.inkDim,
						}}
					>
						Connect particles, moles, and Avogadro&apos;s number.
					</div>
				</FadeUp>
			</div>

			<AmbientGlow left={420} top={330} width={1080} height={300} delay={132} opacity={0.075} speedSeconds={6.2} />

			<div
				style={{
					position: 'absolute',
					top: 386,
					left: 64,
					right: 64,
					height: 330,
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					gap: 36,
				}}
			>
				{terms.map((term) =>
					term.kind === 'operator' ? (
						<OperatorTerm key={term.key} term={term} />
					) : (
						<FormulaTerm key={term.key} term={term} />
					),
				)}
			</div>

			{scene.secondary ? (
				<FormulaNotes secondary={scene.secondary} delay={168} />
			) : null}

			{scene.unitCancel ? (
				<UnitSafetyCheck
					left={scene.unitCancel.left}
					right={scene.unitCancel.right}
					result={scene.unitCancel.result}
					callout={scene.callout}
					delay={216}
				/>
			) : scene.callout ? (
				<div style={{position: 'absolute', bottom: 154, left: 64, right: 64, textAlign: 'center'}}>
					<FadeUp delay={216} durationFrames={14} dy={18}>
						<div style={{fontSize: 30, color: TOK.amber, fontStyle: 'italic', fontWeight: 600}}>
							→ {scene.callout}
						</div>
					</FadeUp>
				</div>
			) : null}
		</SlideFrame>
	);
};

const FormulaTerm = ({term}: {term: FormulaTermConfig}) => {
	return (
		<FadeUp delay={term.delay} durationFrames={15} dy={22}>
			<div style={{position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center'}}>
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: 164,
						fontWeight: 750,
						lineHeight: 1,
						color: term.color,
						letterSpacing: '-0.06em',
						textShadow: `0 0 70px ${term.color}33`,
					}}
				>
					{term.text}
				</div>
				{term.label ? (
					<FadeUp
						delay={term.delay + 12}
						durationFrames={12}
						dy={12}
						style={{position: 'absolute', top: '100%', marginTop: 24, width: 290, textAlign: 'center'}}
					>
						<div style={{width: 1, height: 40, background: term.color, margin: '0 auto 10px', opacity: 0.9}} />
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 16,
								color: term.color,
								letterSpacing: '0.12em',
								fontWeight: 700,
								textTransform: 'uppercase',
							}}
						>
							{term.label}
						</div>
						{term.sub ? (
							<div
								style={{
									marginTop: 8,
									fontSize: 22,
									lineHeight: 1.18,
									color: TOK.inkDim,
									fontWeight: 450,
								}}
							>
								{term.sub}
							</div>
						) : null}
					</FadeUp>
				) : null}
			</div>
		</FadeUp>
	);
};

const OperatorTerm = ({term}: {term: FormulaTermConfig}) => (
	<FadeUp delay={term.delay} durationFrames={10} dy={12}>
		<div
			style={{
				fontFamily: FONT_MONO,
				fontSize: 104,
				lineHeight: 1.45,
				color: term.color,
				fontWeight: term.text === '=' ? 700 : 600,
			}}
		>
			{term.text}
		</div>
	</FadeUp>
);

const FormulaNotes = ({secondary, delay}: {secondary: string; delay: number}) => {
	const notes = secondary
		.split('  ·  ')
		.flatMap((chunk) => chunk.split(' · '))
		.map((note) => note.trim().replace(/\.$/, ''))
		.filter(Boolean)
		.slice(0, 3);

	if (notes.length === 0) return null;

	return (
		<div
			style={{
				position: 'absolute',
				left: 64,
				right: 64,
				bottom: 310,
				display: 'grid',
				gridTemplateColumns: `repeat(${notes.length}, minmax(0, 1fr))`,
				gap: 18,
			}}
		>
			{notes.map((note, index) => (
				<FadeUp key={note} delay={delay + index * 8} durationFrames={14} dy={18}>
					<div
						style={{
							minHeight: 86,
							padding: '20px 22px',
							borderRadius: 10,
							border: `1px solid ${TOK.rule}`,
							background: 'rgba(15,22,20,0.72)',
							color: index === notes.length - 1 ? TOK.amber : TOK.inkDim,
							fontSize: 21,
							lineHeight: 1.28,
						}}
					>
						{note}
					</div>
				</FadeUp>
			))}
		</div>
	);
};

const UnitSafetyCheck = ({
	left,
	right,
	result,
	callout,
	delay,
}: {
	left: string;
	right: string;
	result: string;
	callout?: string;
	delay: number;
}) => {
	const frame = useCurrentFrame();
	const draw = interpolate(frame, [delay + 16, delay + 32], [0, 1], clamp);

	return (
		<div style={{position: 'absolute', left: 64, right: 64, bottom: 176}}>
			<FadeUp delay={delay} durationFrames={14} dy={18}>
				<div
					style={{
						width: 'min(960px, 100%)',
						margin: '0 auto',
						padding: '22px 28px',
						borderRadius: 12,
						border: `1px dashed ${TOK.amberDim}`,
						background: 'rgba(15,22,20,0.78)',
						boxShadow: '0 24px 80px rgba(0,0,0,0.28)',
						position: 'relative',
						display: 'grid',
						gridTemplateColumns: 'auto minmax(0, 1fr)',
						gap: 24,
						alignItems: 'center',
					}}
				>
					<AmbientBorderPulse delay={delay + 46} color={TOK.amber} opacity={0.1} style={{borderRadius: 12}} />
					<div style={{display: 'flex', alignItems: 'center', gap: 16, fontFamily: FONT_MONO, fontSize: 32, color: TOK.ink}}>
						<CrossedUnit text={left} draw={draw} />
						<span style={{color: TOK.inkMute}}>×</span>
						<CrossedUnit text={right} draw={draw} />
					</div>
					<div>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 15,
								letterSpacing: '0.16em',
								color: TOK.amber,
								marginBottom: 8,
								textTransform: 'uppercase',
							}}
						>
							{callout ?? 'Unit safety check'}
						</div>
						<div style={{fontSize: 24, color: TOK.inkDim, lineHeight: 1.32}}>{result}</div>
					</div>
				</div>
			</FadeUp>
		</div>
	);
};

const CrossedUnit = ({text, draw}: {text: string; draw: number}) => (
	<span style={{position: 'relative', display: 'inline-block', minWidth: 96, textAlign: 'center', padding: '2px 8px'}}>
		{text}
		<svg
			viewBox="0 0 100 44"
			aria-hidden
			style={{position: 'absolute', inset: '-3px 0 0', width: '100%', height: 48, overflow: 'visible'}}
		>
			<path
				d="M12 36 L88 8"
				pathLength={1}
				strokeDasharray={1}
				strokeDashoffset={1 - draw}
				fill="none"
				stroke={TOK.amber}
				strokeWidth={5}
				strokeLinecap="round"
			/>
		</svg>
	</span>
);

const buildTerms = (formula: string): FormulaTermConfig[] => {
	const rawParts = formula.replace(/\s+/g, ' ').trim().split(' ');
	let termIndex = 0;

	return rawParts.map((part, index) => {
		const isOperator = ['=', '×', '÷', '+', '−', '-', '·'].includes(part);
		const delay = 58 + termIndex * 18;
		if (!isOperator) termIndex += 1;

		if (isOperator) {
			return {
				key: `${part}-${index}`,
				text: part,
				color: part === '=' ? TOK.inkDim : TOK.amber,
				delay: delay + 8,
				kind: 'operator',
			};
		}

		return {
			key: `${part}-${index}`,
			text: part,
			color: getTermColor(part),
			label: getTermLabel(part),
			sub: getTermSub(part),
			delay,
			kind: 'term',
		};
	});
};

const getTermColor = (term: string) => {
	if (term === 'Nₐ' || term === 'NA') return TOK.amber;
	if (term === 'n') return TOK.chem2;
	return TOK.ink;
};

const getTermLabel = (term: string) => {
	if (term === 'N') return 'PARTICLE COUNT';
	if (term === 'n') return 'MOLES';
	if (term === 'Nₐ' || term === 'NA') return "AVOGADRO'S NUMBER";
	return undefined;
};

const getTermSub = (term: string) => {
	if (term === 'N') return 'raw count, no units';
	if (term === 'n') return 'amount in mol';
	if (term === 'Nₐ' || term === 'NA') return '6.022 × 10²³ mol⁻¹';
	return undefined;
};
