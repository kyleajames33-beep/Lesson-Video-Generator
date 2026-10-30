// Record a read-only Studio download comparison. This never changes remote tracks.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {parseTimedCaptions, compareTimedCaptions} from './lib/caption-provenance.mjs';
const [lessonId, videoId, downloadPath, referencePath, outputPath] = process.argv.slice(2);
if (![lessonId, videoId, downloadPath, referencePath, outputPath].every(Boolean)) throw new Error('Supply lesson ID, video ID, downloaded SBV, reference SRT and report JSON.');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const actual = fs.readFileSync(downloadPath), reference = fs.readFileSync(referencePath);
const comparison = compareTimedCaptions(parseTimedCaptions(actual.toString('utf8'), 'sbv'), parseTimedCaptions(reference.toString('utf8'), 'srt'));
const report = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8').replace(/^\uFEFF/, '')) : {date: '2026-10-25', timezone: 'Australia/Sydney', method: 'Read-only saved English (Australia) Studio editor download; no edit/save/publish action. SBV/SRT identity is compared by cue timing and text, not raw file hash.', videos: []};
if (report.videos.some(v => v.videoId === videoId)) throw new Error('This report already contains the video. Use a new report for a later observation.');
report.videos.push({lessonId, videoId, studioUrl: `https://studio.youtube.com/video/${videoId}/translations`, captionLanguage: 'English (Australia)', downloadPath, downloadedSha256: hash(actual), referencePath, referenceSha256: hash(reference), savedTrackMatchesReference: comparison.equivalent, comparison});
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({lessonId, ...comparison}));
if (!comparison.equivalent) process.exitCode = 1;
