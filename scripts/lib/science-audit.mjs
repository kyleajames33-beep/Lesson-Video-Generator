import {createHash} from 'node:crypto';
import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';

export const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

// Restricted arithmetic parser. Never evaluate lesson content as JavaScript.
export function calculate(expression) {
  const source = expression.replaceAll('×', '*').replaceAll('÷', '/').replaceAll('−', '-');
  if (source.length > 200 || /[^\d.\s+*/()\-]/u.test(source)) throw new Error('Unsupported arithmetic');
  const tokens = source.match(/(?:\d+(?:\.\d+)?|\.\d+)|[+*/()\-]/gu) ?? [];
  if (tokens.join('') !== source.replace(/\s/gu, '')) throw new Error('Invalid number');
  let position = 0;
  const atom = () => {
    const token = tokens[position++];
    if (token === '+') return atom();
    if (token === '-') return -atom();
    if (token === '(') {
      const result = sum();
      if (tokens[position++] !== ')') throw new Error('Unclosed parentheses');
      return result;
    }
    if (!token || !/^\d*\.?\d+$/u.test(token)) throw new Error('Expected number');
    return Number(token);
  };
  const product = () => {
    let result = atom();
    while (tokens[position] === '*' || tokens[position] === '/') {
      const operator = tokens[position++];
      const next = atom();
      if (operator === '/' && next === 0) throw new Error('Division by zero');
      result = operator === '*' ? result * next : result / next;
    }
    return result;
  };
  const sum = () => {
    let result = product();
    while (tokens[position] === '+' || tokens[position] === '-') {
      const operator = tokens[position++];
      const next = product();
      result = operator === '+' ? result + next : result - next;
    }
    return result;
  };
  const result = sum();
  if (position !== tokens.length || !Number.isFinite(result)) throw new Error('Invalid arithmetic');
  return result;
}

export function numericChecks(text) {
  const checks = [];
  // Only decimal answers have an unambiguous displayed rounding interval.
  // Scientific notation, symbolic expressions and integer precision need manual review.
  const pattern = /(?<![\w.,₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹])([+-]?\d+(?:\.\d+)?(?:\s*[×÷*/+−-]\s*[+-]?\d+(?:\.\d+)?)+)\s*(?:=|≈)\s*([+-]?\d+\.\d+)(?![\d.eE₀-₉])/gu;
  for (const match of text.matchAll(pattern)) {
    // Never report a numeric tail after an operator whose left operand was
    // skipped (for example a bracketed expression or symbolic numerator).
    if (/[×÷*/+−-]\s*$/u.test(text.slice(0, match.index))) continue;
    const suffix = text.slice(match.index + match[0].length);
    if (/^\s*[×÷*/+−-]\s*\d/u.test(suffix) || /^\s*[eE^⁰¹²³⁴⁵⁶⁷⁸⁹]/u.test(suffix)) continue;
    // A dimensionless fraction can be reported as a percent with a ×100 conversion.
    // Skip implicit percent conversions instead of reporting them as arithmetic errors.
    if (/^\s*%/u.test(suffix) && !/[×*]\s*100\s*$/u.test(match[1])) continue;
    try {
      const actual = calculate(match[1]);
      const displayed = Number(match[2]);
      const places = match[2].split('.')[1].length;
      const tolerance = 0.5 * 10 ** -places;
      const difference = Math.abs(actual - displayed);
      checks.push({expression: match[0], actual, displayed, tolerance,
        compatible: difference <= tolerance + Number.EPSILON * Math.max(1, Math.abs(actual)) * 8});
    } catch { /* Unsupported notation stays outside the numerical check. */ }
  }
  return checks;
}

export const rules = [
  {id: 'punctuation', pattern: /\u2014/u, why: 'Selected copy must be checked for prohibited U+2014.'},
  {id: 'attainment-claim', pattern: /Band 6|cost(?:s)? (?:a lot of )?marks|earn(?:s)? (?:the )?(?:marks|Band)|most (?:students|candidates)/iu, why: 'Check whether assessment or prevalence evidence supports the claim.'},
  {id: 'denaturation-absolute', pattern: /permanent(?:ly)?.{0,70}(?:shape|active site|distort)|denaturation.{0,40}permanent|fully denatured/iu, why: 'Check whether irreversibility and structural change are established for these conditions.'},
  {id: 'saturation-absolute', pattern: /every active site|only more enzyme|plateau means saturated|plateau is saturation/iu, why: 'Bound the saturation account to the stated kinetic model and controlled assay.'},
  {id: 'enzyme-optimum', pattern: /optimum.{0,45}37|37.{0,45}optimum|most human enzymes/iu, why: 'Check enzyme preparation and assay context; negated warnings can be valid.'},
  {id: 'fidelity-inference', pattern: /(?:template|semi.?conservative|base pairing).{0,85}(?:accurate|exact|matches)|why the copies are so accurate/iu, why: 'Templating is not a complete fidelity account; check selection, proofreading and repair.'},
  {id: 'control-overproof', pattern: /(?:control|boiled|no oxygen).{0,100}(?:prove|you know|shows that|effect is real)|repeat.{0,90}(?:make the results reliable|become reliable)/iu, why: 'Check whether evidence is being treated as a guarantee or unique causal proof.'},
];

export function stringFields(value, field = '$') {
  if (typeof value === 'string') return [{field, text: value}];
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, child]) => stringFields(child, `${field}.${key}`));
}

export async function auditCatalogue(root) {
  const directory = path.join(root, 'src/data');
  const files = (await readdir(directory)).filter((file) => file.endsWith('.json')).sort();
  const lessons = [];
  for (const file of files) {
    const bytes = await readFile(path.join(directory, file));
    const lesson = JSON.parse(bytes);
    if (!Array.isArray(lesson.scenes)) continue;
    const findings = [];
    let numericExpressions = 0;
    for (const {field, text} of stringFields(lesson)) {
      const sceneIndex = /^\$\.scenes\.(\d+)/u.exec(field)?.[1];
      const scene = sceneIndex === undefined ? null : lesson.scenes[Number(sceneIndex)].id;
      for (const rule of rules) {
        if (rule.pattern.test(text)) findings.push({rule: rule.id, scene, field, text, why: rule.why, disposition: 'context-review-required'});
      }
      const checks = numericChecks(text);
      numericExpressions += checks.length;
      for (const check of checks.filter((item) => !item.compatible)) {
        findings.push({rule: 'numeric-equality', scene, field, text, check,
          why: 'Displayed arithmetic falls outside its rounding interval. Check rounded inputs, examples of mistakes and context.', disposition: 'context-review-required'});
      }
    }
    lessons.push({file: `src/data/${file}`, title: lesson.title, sourceHash: hash(bytes), numericExpressions, findings});
  }
  const counts = {};
  for (const lesson of lessons) for (const finding of lesson.findings) counts[finding.rule] = (counts[finding.rule] ?? 0) + 1;
  return {schemaVersion: 1, scope: 'Source diagnostics only. No scientific approval, media inspection or rendering.',
    limitations: ['Rules are a narrow triage screen, not a comprehensive science validator.',
      'Numeric checks use displayed decimal rounding, not uncertainty propagation or full significant-figure semantics.',
      'Symbolic expressions, scientific notation, spoken number words, units and integer precision require manual checking.',
      'A flag may quote a misconception, negate a claim or use rounded intermediates. Never auto-correct it.'],
    totals: {lessons: lessons.length, lessonsFlagged: lessons.filter((lesson) => lesson.findings.length).length,
      numericExpressions: lessons.reduce((total, lesson) => total + lesson.numericExpressions, 0),
      findings: Object.values(counts).reduce((total, count) => total + count, 0), byRule: counts}, lessons};
}
