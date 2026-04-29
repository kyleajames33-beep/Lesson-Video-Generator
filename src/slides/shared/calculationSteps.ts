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
