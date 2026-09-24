export const getCalculationStepKind = (step: string, index: number, total: number) => {
  if (index === total - 1) return 'answer';
  const lower = step.toLowerCase();
  if (lower.startsWith('known')) return 'known';
  if (lower.startsWith('find')) return 'find';
  if (lower.startsWith('formula') || lower.startsWith('rearrange')) return 'formula';
  if (lower.startsWith('substitute')) return 'substitute';
  if (/^m\([^)]*\)/i.test(step.trim())) return 'molarMass';
  if (/^m\s*=/.test(step.trim()) && lower.includes('×')) return 'formula';
  if (lower.includes('=') && index <= 1) return 'setup';
  return 'working';
};

export const calculationStepLabel: Record<string, string> = {
  known: 'Known',
  find: 'Target',
  formula: 'Formula',
  molarMass: 'Molar mass',
  setup: 'Setup',
  substitute: 'Substitute',
  working: 'Work',
  answer: 'Answer',
};

// Largest step font size (mono, ~0.57em per char after the -0.035em tracking)
// at which every step fits the vertical space the board has. Calculation steps
// are short and keep the full size; prose-style steps (common in Biology)
// shrink instead of running off the bottom of the frame into the chrome.
export const fitStepFontSize = (
  steps: string[],
  {
    base,
    min = 24,
    width,
    height,
    rowPad,
    gap,
    finalBoost,
    finalMinHeight = 0,
  }: {
    base: number;
    min?: number;
    width: number;
    height: number;
    rowPad: number;
    gap: number;
    finalBoost: number;
    finalMinHeight?: number;
  },
) => {
  for (let size = base; size > min; size -= 2) {
    let total = 0;
    steps.forEach((step, index) => {
      const isFinal = index === steps.length - 1;
      const px = isFinal ? size + finalBoost : size;
      const perLine = Math.max(8, Math.floor(width / (px * 0.57)));
      const lines = Math.ceil(step.length / perLine);
      const row = lines * px * 1.2 + rowPad;
      total += (isFinal ? Math.max(row, finalMinHeight) : row) + (index > 0 ? gap : 0);
    });
    if (total <= height) return size;
  }
  return min;
};
