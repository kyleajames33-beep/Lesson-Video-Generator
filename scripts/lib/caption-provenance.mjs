// Compare a saved Studio SBV export with a local SRT without discarding notation.
const stamp = String.raw`\d+:\d{2}:\d{2}[.,]\d{3}`;
const ms = text => Math.round(text.replace(',', '.').split(':').reduce((n, part) => n * 60 + Number(part), 0) * 1000);
export function parseTimedCaptions(text, format) {
  if (!['srt', 'sbv'].includes(format)) throw new Error('Use SRT or SBV.');
  const blocks = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').trim().split(/\n\s*\n/);
  let end = 0;
  return blocks.map((block, index) => {
    const lines = block.split('\n');
    if (format === 'srt') {
      if (!/^\d+$/.test(lines.shift())) throw new Error(`Missing SRT number: ${index + 1}`);
    }
    const pattern = format === 'srt' ? new RegExp(`^(${stamp}) --> (${stamp})$`) : new RegExp(`^(${stamp}),(${stamp})$`);
    const match = lines.shift()?.match(pattern);
    if (!match || !lines.length) throw new Error(`Invalid timed cue: ${index + 1}`);
    const cue = {startMs: ms(match[1]), endMs: ms(match[2]), text: lines.join('\n')};
    if (cue.startMs < end || cue.endMs <= cue.startMs) throw new Error(`Overlapping or empty cue: ${index + 1}`);
    end = cue.endMs;
    return cue;
  });
}

export function compareTimedCaptions(actual, reference, toleranceMs = 1) {
  const flat = text => text.trim().replace(/\s+/g, ' ');
  const differences = [];
  let maxTimingDeltaMs = 0, lineBreakDifferences = 0, textDifferences = 0;
  for (let i = 0; i < Math.max(actual.length, reference.length); i++) {
    const a = actual[i], b = reference[i];
    if (!a || !b) {differences.push({cue: i + 1, missingCue: true}); continue;}
    const startDeltaMs = a.startMs - b.startMs, endDeltaMs = a.endMs - b.endMs;
    maxTimingDeltaMs = Math.max(maxTimingDeltaMs, Math.abs(startDeltaMs), Math.abs(endDeltaMs));
    const sameText = flat(a.text) === flat(b.text);
    if (!sameText) textDifferences++;
    else if (a.text !== b.text) lineBreakDifferences++;
    if (!sameText || Math.abs(startDeltaMs) > toleranceMs || Math.abs(endDeltaMs) > toleranceMs) differences.push({cue: i + 1, sameText, startDeltaMs, endDeltaMs});
  }
  return {actualCues: actual.length, referenceCues: reference.length, toleranceMs, maxTimingDeltaMs, textDifferences, lineBreakDifferences, equivalent: differences.length === 0, differences};
}
