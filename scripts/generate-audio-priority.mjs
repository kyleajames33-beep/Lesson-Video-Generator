// Priority-ordered ElevenLabs batch driver for spending a fixed credit budget
// top-down. Dry-run prints a "spend ladder" so you can see how far a given
// balance reaches; live mode voices lessons in priority order, skipping any
// scene whose audio already exists (idempotent — safe to re-run / resume).
//
//   node scripts/generate-audio-priority.mjs                 # dry-run ladder
//   node scripts/generate-audio-priority.mjs --credits=500000 # ladder + cutline
//   node scripts/generate-audio-priority.mjs --run --max-tier=2   # live, tiers 1-2
//   node scripts/generate-audio-priority.mjs --run --tier=1       # live, only tier 1
//
// Env: ELEVENLABS_API_KEY (live only). Voice defaults to production "voice 1".

import {readFileSync, existsSync, mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import process from 'node:process';
import {getCompositionId, hashText} from './lesson-utils.mjs';

const ROOT = process.cwd();
const DATA = path.join(ROOT, 'src/data');
const REGISTRY = path.join(DATA, 'lessonRegistry.ts');
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'loQD3CIxowi7eCEHd4m9';
// eleven_turbo_v2_5 (what generate-elevenlabs-audio.mjs uses) bills at
// 0.5 credits per character. Standard models bill 1.0 — change if you switch.
const CREDITS_PER_CHAR = 0.5;

const args = process.argv.slice(2);
const RUN = args.includes('--run');
const CHECK_BALANCE = args.includes('--balance');
const CHECK_VOICES = args.includes('--voices');

// Voices used across the project. Custom voice IDs are tied to the account
// that created/saved them — a fresh key on a different account won't have them.
const KNOWN_VOICES = {
  'loQD3CIxowi7eCEHd4m9': 'voice 1 — current documented standard (checklist §2)',
  'sai9UY7iXkRDSsXHR0bZ': 'ben — the "M3/M4 sounded good" A/B reference',
};

// Read-only: list voices this key can access and flag whether the project
// voices are present. Answers "is the intended narrator on this account?".
async function checkVoices() {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) {
    console.error('--voices needs ELEVENLABS_API_KEY set.');
    return;
  }
  const res = await fetch('https://api.elevenlabs.io/v1/voices', {headers: {'xi-api-key': key}});
  if (!res.ok) {
    console.error(`voices lookup failed: HTTP ${res.status}`);
    return;
  }
  const {voices = []} = await res.json();
  const byId = new Map(voices.map((v) => [v.voice_id, v]));
  console.log(`This key/account can access ${voices.length} voices.\n`);
  for (const [id, label] of Object.entries(KNOWN_VOICES)) {
    const v = byId.get(id);
    console.log(`  ${v ? 'PRESENT ' : 'MISSING '} ${id}  (${label})${v ? ` → "${v.name}" [${v.category ?? '?'}]` : ''}`);
  }
  console.log('\nIf the voice you want shows MISSING, the credits are on a different account than the one that owns it — add the voice to this account (or switch keys) before generating.');
}
const creditArg = args.find((a) => a.startsWith('--credits='));
let CREDIT_BUDGET = creditArg ? Number(creditArg.split('=')[1]) : null;

// Optional read-only balance check — computes remaining credits from the
// ElevenLabs subscription endpoint and uses it as the ladder cutline.
async function fetchRemainingCredits() {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) {
    console.error('--balance needs ELEVENLABS_API_KEY set.');
    return null;
  }
  const res = await fetch('https://api.elevenlabs.io/v1/user/subscription', {headers: {'xi-api-key': key}});
  if (!res.ok) {
    console.error(`subscription lookup failed: HTTP ${res.status}`);
    return null;
  }
  const s = await res.json();
  const remaining = (s.character_limit ?? 0) - (s.character_count ?? 0);
  const resetIso = s.next_character_count_reset_unix ? new Date(s.next_character_count_reset_unix * 1000).toISOString() : 'unknown';
  console.log(`ElevenLabs balance: ${remaining.toLocaleString()} credits remaining (limit ${(s.character_limit ?? 0).toLocaleString()}, used ${(s.character_count ?? 0).toLocaleString()}), resets ${resetIso}\n`);
  return remaining;
}
const maxTierArg = args.find((a) => a.startsWith('--max-tier='));
const onlyTierArg = args.find((a) => a.startsWith('--tier='));
const lessonArg = args.find((a) => a.startsWith('--lesson='));
const limitArg = args.find((a) => a.startsWith('--limit='));
const MAX_TIER = maxTierArg ? Number(maxTierArg.split('=')[1]) : 99;
const ONLY_TIER = onlyTierArg ? Number(onlyTierArg.split('=')[1]) : null;
// Cap the run to the first N matching lessons (in tier→module→lesson order) —
// for spending a partial budget cleanly and resuming next cycle.
const LIMIT = limitArg ? Number(limitArg.split('=')[1]) : null;
// Target one or more cid substrings (comma-separated), e.g. a single lesson for
// a canary, or whole modules: --lesson=Chemistry-Y12-M5,Chemistry-Y12-M6.
// Bypasses tier/flagged filters — matches exactly what you name.
const LESSONS = lessonArg ? lessonArg.split('=')[1].toLowerCase().split(',').map((s) => s.trim()).filter(Boolean) : null;
const matchesLesson = (cid) => LESSONS && LESSONS.some((s) => cid.toLowerCase().includes(s));

// Length guard: scenes longer than this are voiced via the sentence-splitting
// chunked path (prosody resets per chunk = far lower stutter risk). 800 sits
// just above the p90 of already-accepted audio (766c), so nothing longer than
// what's proven-good is ever sent as a single request.
const maxCharsArg = args.find((a) => a.startsWith('--max-chars='));
const MAX_CHARS = maxCharsArg ? Number(maxCharsArg.split('=')[1]) : 800;

// Scripts the pacing linter flags as robotic/choppy (FAIL/WARN) — voicing them
// now risks generating audio you'll rewrite. Skipped unless --include-flagged.
const INCLUDE_FLAGGED = args.includes('--include-flagged');
const FLAGGED = new Set([
  'Chemistry-Y11-M2-L3', 'Chemistry-Y11-M2-L4', 'Chemistry-Y11-M2-L5',
  'Chemistry-Y11-M2-L6', 'Chemistry-Y11-M2-L13',
]);

// ── Tier definitions ────────────────────────────────────────────────────────
// A lesson is classified by (subject, year, module). Lower tier = spend first.
// Priority (per Kyle 2026-07-04): complete the Year-12 "modules >4" FIRST;
// value Year-11 "modules <4" less. Bio M8 is a >4 module but carries the
// unresolved over-length decision, so it sits LAST within the >4 group — if
// credits run short it defers, not a clean module.
const TIERS = [
  {n: 1, name: 'Y12 Chemistry (M5-M8) — modules >4', match: (r) => r.subject === 'Chemistry' && r.year === 'Y12'},
  {n: 2, name: 'Y12 Biology M5-M7 — modules >4', match: (r) => r.subject === 'Biology' && r.year === 'Y12' && ['M5', 'M6', 'M7'].includes(r.module)},
  {n: 3, name: 'Y12 Biology M8 — >4, length decision pending', match: (r) => r.subject === 'Biology' && r.year === 'Y12' && r.module === 'M8'},
  {n: 4, name: 'Y11 Chemistry M1 + M2 — modules <4', match: (r) => r.subject === 'Chemistry' && r.year === 'Y11' && ['M1', 'M2'].includes(r.module)},
  {n: 5, name: 'Y11 Chem M3/M4 regen debt — <4 (strip em-dashes)', match: (r) => r.subject === 'Chemistry' && r.year === 'Y11' && ['M3', 'M4'].includes(r.module)},
];
const tierOf = (r) => (TIERS.find((t) => t.match(r)) || {n: 98}).n;

// ── Load live lesson files from the auto-generated registry ──────────────────
const registrySrc = readFileSync(REGISTRY, 'utf8');
const liveFiles = [...registrySrc.matchAll(/from '\.\/([^']+\.json)'/g)].map((m) => m[1]);

const tok = (v) => (typeof v === 'string' ? v.replace(/\bYear\s+/i, 'Y').replace(/\bModule\s+/i, 'M').replace(/\bLesson\s+/i, 'L').replace(/[^A-Za-z0-9]+/g, '') : '?');
const hashSync = (t) => createHash('sha256').update(t).digest('hex').slice(0, 12);

const rows = [];
for (const file of liveFiles) {
  const full = path.join(DATA, file);
  if (!existsSync(full)) continue;
  let lesson;
  try {
    lesson = JSON.parse(readFileSync(full, 'utf8'));
  } catch {
    continue;
  }
  if (!Array.isArray(lesson.scenes)) continue;
  const cid = getCompositionId(lesson);
  let missChars = 0;
  let missScenes = 0;
  let voScenes = 0;
  let chunkScenes = 0;
  const missing = []; // {id, len} for scenes we'd actually generate
  for (const scene of lesson.scenes) {
    const text = scene.voiceover?.text ?? '';
    if (!text.trim()) continue;
    voScenes++;
    const audioFile = path.join(ROOT, `public/audio/${cid}/${scene.id}.${hashSync(text)}.mp3`);
    if (!existsSync(audioFile)) {
      missScenes++;
      missChars += text.length;
      missing.push({id: scene.id, len: text.length});
      if (text.length > MAX_CHARS) chunkScenes++;
    }
  }
  const r = {file, full, cid, subject: tok(lesson.subject), year: tok(lesson.yearLevel), module: tok(lesson.module), voScenes, missScenes, missChars, chunkScenes, missing};
  r.tier = tierOf(r);
  r.flagged = FLAGGED.has(cid);
  rows.push(r);
}

// Order: tier, then module, then lesson number.
const lessonNum = (cid) => {
  const m = cid.match(/-L(\d+)/i);
  return m ? Number(m[1]) : (/Checkpoint/i.test(cid) ? 900 : 999);
};
rows.sort((a, b) => a.tier - b.tier || a.module.localeCompare(b.module) || lessonNum(a.cid) - lessonNum(b.cid));

const work = rows.filter((r) => r.missScenes > 0);
const fmt = (n) => Math.round(n).toLocaleString('en-US');

// ── Dry-run ladder ───────────────────────────────────────────────────────────
if (!RUN) {
  if (CHECK_VOICES) {
    await checkVoices();
    console.log('');
  }
  if (CHECK_BALANCE) {
    const remaining = await fetchRemainingCredits();
    if (remaining != null && CREDIT_BUDGET == null) CREDIT_BUDGET = remaining;
  }
  // Focused preview when specific lessons/modules are named.
  if (LESSONS) {
    let sel = work.filter((r) => matchesLesson(r.cid));
    if (LIMIT != null) sel = sel.slice(0, LIMIT);
    const chars = sel.reduce((s, r) => s + r.missChars, 0);
    const scenes = sel.reduce((s, r) => s + r.missScenes, 0);
    const chunked = sel.reduce((s, r) => s + r.chunkScenes, 0);
    console.log(`TARGET: ${LESSONS.join(', ')}\n`);
    console.log(`  ${sel.length} lessons, ${scenes} scenes (${chunked} chunked), ${fmt(chars)} chars`);
    console.log(`  Estimated spend: ${fmt(chars * CREDITS_PER_CHAR)} credits`);
    console.log(`\n  Run live: node scripts/generate-audio-priority.mjs --run --lesson=${LESSONS.join(',')}\n`);
    process.exit(0);
  }
  console.log(`SPEND LADDER — voice-1 turbo, 0.5 credits/char. Skips existing audio;`);
  console.log(`scenes >${MAX_CHARS}c auto-routed through the chunked (sentence-split) path; ${INCLUDE_FLAGGED ? 'INCLUDING' : 'skipping'} pacing-flagged lessons.\n`);
  console.log('tier  scope                                              lessons  scenes  chunked    chars    credits   cumulative');
  let cumChars = 0;
  let cutPrinted = false;
  for (const t of TIERS) {
    const tr = work.filter((r) => r.tier === t.n && (INCLUDE_FLAGGED || !r.flagged));
    if (!tr.length) continue;
    const chars = tr.reduce((s, r) => s + r.missChars, 0);
    const scenes = tr.reduce((s, r) => s + r.missScenes, 0);
    const chunked = tr.reduce((s, r) => s + r.chunkScenes, 0);
    cumChars += chars;
    console.log(
      `  ${t.n}   ${t.name.padEnd(50)}  ${String(tr.length).padStart(5)}  ${String(scenes).padStart(5)}  ${String(chunked).padStart(6)}  ${fmt(chars).padStart(8)}  ${fmt(chars * CREDITS_PER_CHAR).padStart(8)}  ${fmt(cumChars * CREDITS_PER_CHAR).padStart(9)}`,
    );
    if (CREDIT_BUDGET != null && !cutPrinted && cumChars * CREDITS_PER_CHAR >= CREDIT_BUDGET) {
      console.log(`      └─ ~${fmt(CREDIT_BUDGET)} credit budget runs out inside this tier`);
      cutPrinted = true;
    }
  }
  console.log('  ' + '-'.repeat(112));
  const inc = work.filter((r) => INCLUDE_FLAGGED || !r.flagged);
  const totalChars = inc.reduce((s, r) => s + r.missChars, 0);
  const totalScenes = inc.reduce((s, r) => s + r.missScenes, 0);
  const totalChunk = inc.reduce((s, r) => s + r.chunkScenes, 0);
  console.log(`      TOTAL (${INCLUDE_FLAGGED ? 'all' : 'clean'} scripts)                              ${String(inc.length).padStart(7)}  ${String(totalScenes).padStart(5)}  ${String(totalChunk).padStart(6)}  ${fmt(totalChars).padStart(8)}  ${fmt(totalChars * CREDITS_PER_CHAR).padStart(8)}`);
  const flaggedRows = work.filter((r) => r.flagged);
  if (flaggedRows.length && !INCLUDE_FLAGGED) {
    console.log(`\n  Held back (pacing FAIL/WARN — decide before voicing): ${flaggedRows.map((r) => r.cid).join(', ')}`);
    console.log('  Add --include-flagged to voice them anyway.');
  }
  if (CREDIT_BUDGET != null) {
    console.log(`\n  Budget ${fmt(CREDIT_BUDGET)} credits ≈ ${fmt(CREDIT_BUDGET / CREDITS_PER_CHAR)} characters of audio.`);
  }
  console.log('\n  Run live:  node scripts/generate-audio-priority.mjs --run --max-tier=N');
  console.log('  (needs ELEVENLABS_API_KEY set; --tier=N for one tier; --max-chars=N to tune chunk threshold)\n');
  process.exit(0);
}

// ── Live run ─────────────────────────────────────────────────────────────────
if (!process.env.ELEVENLABS_API_KEY) {
  console.error('ELEVENLABS_API_KEY is not set. Aborting before any generation.');
  process.exit(1);
}
let selected = LESSONS
  ? work.filter((r) => matchesLesson(r.cid))
  : work.filter((r) => (ONLY_TIER != null ? r.tier === ONLY_TIER : r.tier <= MAX_TIER) && (INCLUDE_FLAGGED || !r.flagged));
if (LESSONS && !selected.length) {
  console.error(`No unvoiced lesson matches --lesson=${LESSONS.join(',')}`);
  process.exit(1);
}
if (LIMIT != null) selected = selected.slice(0, LIMIT);
const spend = selected.reduce((s, r) => s + r.missChars, 0) * CREDITS_PER_CHAR;
const chunkTotal = selected.reduce((s, r) => s + r.chunkScenes, 0);
console.log(`Live run: ${selected.length} lessons, voice ${VOICE_ID}`);
console.log(`Scenes >${MAX_CHARS}c routed to chunked path: ${chunkTotal}`);
console.log(`Estimated spend: ${fmt(spend)} credits\n`);

let done = 0;
for (const r of selected) {
  const manifest = path.join(ROOT, 'out/voiceover', `${r.cid}.manifest.json`);
  mkdirSync(path.dirname(manifest), {recursive: true});
  console.log(`\n=== [${++done}/${selected.length}] ${r.cid} (tier ${r.tier}, ${r.missScenes} scenes, ${r.chunkScenes} chunked) ===`);
  try {
    execFileSync('node', ['scripts/export-voiceover-manifest.mjs', r.full, manifest], {stdio: 'inherit'});
    // Long scenes first, via the sentence-splitting chunked path (lower stutter
    // risk). Writes the same audioFile the batch step then skips as existing.
    for (const m of r.missing.filter((m) => m.len > MAX_CHARS)) {
      console.log(`  chunked → ${m.id} (${m.len}c)`);
      execFileSync('node', ['scripts/generate-elevenlabs-chunked.mjs', manifest, m.id, `--voice-id=${VOICE_ID}`], {stdio: 'inherit'});
    }
    // Batch fills every remaining (short) scene; skips the chunked ones already on disk.
    execFileSync('node', ['scripts/generate-elevenlabs-audio.mjs', manifest, `--voice-id=${VOICE_ID}`], {stdio: 'inherit'});
  } catch (e) {
    console.error(`  lesson ${r.cid} failed (${e.message}); continuing.`);
  }
}
console.log(`\nDone. Attempted ${selected.length} lessons.`);
