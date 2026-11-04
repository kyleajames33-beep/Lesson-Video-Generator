// Context-sensitive pronunciation replacements. Never rewrite the article in "a half".
export const pronunciationRules = [
  {name: 'math-a-before-exponential', pattern: /\ba(?=\s+e\s+to\s+the\s+a\s+x\b)/gi, replacement: 'ay'},
  {name: 'math-a-before-x', pattern: /\ba(?=\s+x\b)/gi, replacement: 'ay'},
  {name: 'math-a-after-times', pattern: /(?<=\btimes\s)a\b/gi, replacement: 'ay'},
  {name: 'math-a-after-just', pattern: /(?<=\bjust\s)a\b/gi, replacement: 'ay'},
  {name: 'math-a-after-only', pattern: /(?<=\bonly\s)a\b/gi, replacement: 'ay'},
  {name: 'math-a-before-is-or-equals', pattern: /\ba(?=\s+(?:is|equals)\b)/gi, replacement: 'ay'},
  {name: 'math-a-after-by-or-and', pattern: /(?<=\b(?:by|and)\s)a(?=[,.!;?]|\s*$)/gi, replacement: 'ay'},
];
export function pronunciationText(displayText, {math = false} = {}) {
  const displayWords = [...displayText.matchAll(/\S+/gu)].map(m => m[0]);
  let spoken = displayText;
  if (math) for (const {pattern, replacement} of pronunciationRules) spoken = spoken.replace(pattern, replacement);
  const spokenWords = [...spoken.matchAll(/\S+/gu)].map(m => m[0]);
  if (displayWords.length !== spokenWords.length) throw Error('Pronunciation rule changed word count');
  return {displayText, spokenText: spoken, displayWords, spokenWords};
}
export function mapWordTimings(displayText, spokenText, words) {
  const display = [...displayText.matchAll(/\S+/gu)];
  const spoken = [...spokenText.matchAll(/\S+/gu)];
  if (display.length !== spoken.length || words.length !== spoken.length) throw Error('Word count mismatch');
  const characters = [], character_start_times_seconds = [], character_end_times_seconds = [];
  let cursor = 0, previous = 0;
  for (let i = 0; i < display.length; i++) {
    const expected = spoken[i][0], word = words[i];
    if (word.word.toLowerCase() !== expected.toLowerCase() || !Number.isFinite(word.start) || !Number.isFinite(word.end) || word.start < previous || word.end < word.start) throw Error(`Unmatched or untimed word ${i}`);
    while (cursor < display[i].index) { characters.push(displayText[cursor++]); character_start_times_seconds.push(previous); character_end_times_seconds.push(previous); }
    const token = display[i][0];
    for (let k = 0; k < token.length; k++) {
      characters.push(token[k]); character_start_times_seconds.push(word.start + (word.end-word.start)*k/token.length); character_end_times_seconds.push(word.start + (word.end-word.start)*(k+1)/token.length); cursor++;
    }
    previous = word.end;
  }
  while (cursor < displayText.length) { characters.push(displayText[cursor++]); character_start_times_seconds.push(previous); character_end_times_seconds.push(previous); }
  return {characters, character_start_times_seconds, character_end_times_seconds, source:'WhisperX word boundaries; interpolated character positions', pronunciationText:spokenText};
}
