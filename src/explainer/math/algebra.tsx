import React from 'react';
import {useCurrentFrame} from 'remotion';
import {BLUE, BLUE_SOFT, FONT_DISPLAY, INK, INK_SOFT, PAPER_DEEP, prog} from '../kit';

const ACCENT = '#8a5a12';
export type AlgebraStep = {id: string; left: React.ReactNode; right: React.ReactNode; at: number; until?: number; relation?: React.ReactNode};
export type AlignedAlgebraProps = {steps: AlgebraStep[]; givens?: React.ReactNode; domainExclusions?: readonly React.ReactNode[]; fontSize?: number; style?: React.CSSProperties};
/** Existing string steps remain valid. Givens and original exclusions outlive working. */
export const AlignedAlgebra: React.FC<AlignedAlgebraProps> = ({steps, givens, domainExclusions, fontSize = 44, style}) => {
 const frame = useCurrentFrame();
 return <div style={{fontFamily: FONT_DISPLAY, fontSize, color: INK, ...style}}>
  {givens != null && <div style={{fontSize: '0.76em', marginBottom: 22, paddingBottom: 14, borderBottom: '2px solid ' + PAPER_DEEP}}>{givens}</div>}
  <div style={{display: 'grid', gridTemplateColumns: 'auto 45px 1fr', columnGap: 12, rowGap: 20, alignItems: 'baseline'}}>
   {steps.filter(s => frame >= s.at && (s.until === undefined || frame < s.until)).map(s => <React.Fragment key={s.id}>
    <div style={{textAlign: 'right', color: s.id === 'answer' ? ACCENT : INK}}>{s.left}</div>
    <div style={{textAlign: 'center'}}>{s.relation ?? '='}</div>
    <div style={{opacity: prog(frame, s.at, 12), color: s.id === 'answer' ? ACCENT : INK}}>{s.right}</div>
   </React.Fragment>)}
  </div>
  {domainExclusions && <DomainExclusions exclusions={domainExclusions} />}
 </div>;
};
export const DomainExclusions: React.FC<{exclusions: readonly React.ReactNode[]}> = ({exclusions}) => <div style={{fontSize: '0.72em', marginTop: 18, color: INK_SOFT}}>Original domain: {exclusions.map((x, i) => <React.Fragment key={i}>{i > 0 ? ', ' : ''}{x}</React.Fragment>)}</div>;

/** Compose recursively: an inner slot may itself contain an outer slot. */
export const ExpressionSlot: React.FC<{children: React.ReactNode; role: 'inner' | 'outer'; label?: React.ReactNode; active?: boolean}> = ({children, role, label, active = true}) => <span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 0.08em'}}>
 <span style={{padding: '0.07em 0.16em', borderRadius: 6, border: '2px solid ' + (active ? (role === 'inner' ? BLUE : ACCENT) : PAPER_DEEP), background: active && role === 'inner' ? BLUE_SOFT : undefined}}>{children}</span>
 {label != null && <span style={{fontSize: '0.48em', color: role === 'inner' ? BLUE : ACCENT, lineHeight: 1.35}}>{label}</span>}
</span>;
export const DerivativeFactor: React.FC<{children: React.ReactNode; at?: number; label?: React.ReactNode}> = ({children, at = 0, label}) => {
 const frame = useCurrentFrame();
 const p = prog(frame, at, 12);
 return <span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', padding: '0 0.1em', color: frame >= at ? ACCENT : INK}}><span style={{borderBottom: '3px solid ' + ACCENT, borderBottomColor: frame >= at ? ACCENT : 'transparent', background: 'rgba(226,166,59,' + (p * 0.16) + ')'}}>{children}</span>{label != null && <span style={{fontSize: '0.48em', opacity: p}}>{label}</span>}</span>;
};
export const ProductContributions: React.FC<{first: React.ReactNode; second: React.ReactNode; firstLabel?: React.ReactNode; secondLabel?: React.ReactNode; firstAt?: number; secondAt?: number}> = ({first, second, firstLabel = 'Differentiate the first factor', secondLabel = 'Differentiate the second factor', firstAt = 0, secondAt = 12}) => {
 const frame = useCurrentFrame();
 return <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.25em'}}>
  {frame >= firstAt && <DerivativeFactor at={firstAt} label={firstLabel}>{first}</DerivativeFactor>}
  {frame >= secondAt && <><span style={{opacity: prog(frame, secondAt, 12)}}>+</span><DerivativeFactor at={secondAt} label={secondLabel}>{second}</DerivativeFactor></>}
 </span>;
};
/** Physical fraction bars group their entire operands; optional brackets reinforce subtraction or powers. */
export const AlgebraFraction: React.FC<{numerator: React.ReactNode; denominator: React.ReactNode; bracketNumerator?: boolean; bracketDenominator?: boolean}> = ({numerator, denominator, bracketNumerator = false, bracketDenominator = false}) => <span style={{display: 'inline-flex', flexDirection: 'column', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.3, margin: '0 0.1em'}}><span style={{padding: '0.04em 0.2em', borderBottom: '2px solid currentColor'}}>{bracketNumerator ? <>({numerator})</> : numerator}</span><span style={{padding: '0.04em 0.2em'}}>{bracketDenominator ? <>({denominator})</> : denominator}</span></span>;

/** Mark only a common factor inside a grouped fraction. */
export const CancelledFactor: React.FC<{children: React.ReactNode; at?: number}> = ({children, at = 0}) => {
 const frame = useCurrentFrame();
 return <span style={{position: 'relative', display: 'inline-block'}}>{children}<span aria-hidden style={{position: 'absolute', left: 0, top: '50%', width: '100%', height: 3, background: ACCENT, transformOrigin: 'left', transform: 'rotate(-25deg) scaleX(' + prog(frame, at, 14) + ')'}} /></span>;
};

/** Require nonempty original restrictions so cancellation cannot silently widen a domain. */
export type NonEmptyExclusions = readonly [React.ReactNode, ...React.ReactNode[]];
export const Cancellation: React.FC<{children: React.ReactNode; result: React.ReactNode; domainExclusions: NonEmptyExclusions; at?: number; markWhole?: boolean}> = ({children, result, domainExclusions, at = 0, markWhole = true}) => {
 const frame = useCurrentFrame();
 if (!domainExclusions.length || domainExclusions.some(x => x == null || typeof x === 'boolean' || (typeof x === 'string' && !x.trim()))) throw new Error('Cancellation requires visible original domain exclusions.');
 const p = prog(frame, at, 14);
 return <span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start'}}><span><span style={{position: 'relative', display: 'inline-block'}}>{children}{markWhole && <span aria-hidden style={{position: 'absolute', left: 0, top: '50%', width: '100%', height: 3, background: ACCENT, transformOrigin: 'left', transform: 'rotate(-14deg) scaleX(' + p + ')'}} />}</span>{frame >= at && <span style={{opacity: p}}> = {result}</span>}</span><DomainExclusions exclusions={domainExclusions} /></span>;
};

export type ExactValue = number | {numerator: number; denominator: number};
export const exactValueNumber = (value: ExactValue): number => {
 const n = typeof value === 'number' ? value : value.numerator / value.denominator;
 if (!Number.isFinite(n) || (typeof value !== 'number' && (!Number.isSafeInteger(value.numerator) || !Number.isSafeInteger(value.denominator) || value.denominator === 0))) throw new RangeError('Use a finite value or a fraction of safe integers with a nonzero denominator.');
 return n;
};
export const ExactFraction: React.FC<{value: ExactValue}> = ({value}) => {
 exactValueNumber(value);
 if (typeof value === 'number') return <>{value}</>;
 let a = Math.abs(value.numerator), b = Math.abs(value.denominator);
 while (b) {const remainder = a % b; a = b; b = remainder;}
 const sign = value.denominator < 0 ? -1 : 1;
 const numerator = sign * value.numerator / a, denominator = Math.abs(value.denominator) / a;
 return denominator === 1 ? <>{numerator}</> : <AlgebraFraction numerator={numerator} denominator={denominator} />;
};
export type CandidateValue = {id: string; candidate: React.ReactNode; value: ExactValue; status: 'attained' | 'limit'; reason?: React.ReactNode; at?: number; highlight?: boolean};
/** Limits are explicitly labelled and never presented as attained extrema. Author chooses the comparison highlight. */
export const CandidateValueTable: React.FC<{rows: readonly CandidateValue[]; givens: React.ReactNode; domain: React.ReactNode; candidateHeading?: React.ReactNode; valueHeading?: React.ReactNode; fontSize?: number}> = ({rows, givens, domain, candidateHeading = 'Candidate', valueHeading = 'Function value', fontSize = 34}) => {
 const frame = useCurrentFrame();
 return <div style={{fontFamily: FONT_DISPLAY, fontSize, color: INK}}>
  <div style={{marginBottom: 12}}>{givens}</div><div style={{fontSize: '0.8em', color: INK_SOFT, marginBottom: 18}}>Domain: {domain}</div>
  <table style={{borderCollapse: 'collapse', width: '100%', textAlign: 'left'}}><thead><tr>{[candidateHeading, valueHeading, 'Attainment'].map((heading, i) => <th key={i} style={{padding: '10px 16px', borderBottom: '2px solid ' + INK_SOFT, fontWeight: 650}}>{heading}</th>)}</tr></thead>
   <tbody>{rows.filter(row => frame >= (row.at ?? 0)).map(row => <tr key={row.id} style={{background: row.highlight ? BLUE_SOFT : undefined, opacity: prog(frame, row.at ?? 0, 12)}}><td style={{padding: '12px 16px', borderBottom: '1px solid ' + PAPER_DEEP}}>{row.candidate}</td><td style={{padding: '12px 16px', borderBottom: '1px solid ' + PAPER_DEEP}}><ExactFraction value={row.value} /></td><td style={{padding: '12px 16px', borderBottom: '1px solid ' + PAPER_DEEP, fontSize: '0.76em'}}>{row.status === 'attained' ? 'Attained' : 'Limit only, not attained'}{row.reason != null && <div style={{color: INK_SOFT}}>{row.reason}</div>}</td></tr>)}</tbody>
  </table>
 </div>;
};
