import {readFileSync, writeFileSync, mkdirSync, existsSync, createWriteStream, readdirSync, copyFileSync} from 'node:fs';
import path from 'node:path';
import {spawn, execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {verifyRelease} from './lib/release-snapshot.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const plan = JSON.parse(readFileSync(path.join(root, process.argv[2]), 'utf8'));
const within = (base, value) => {
  const resolved = path.resolve(base, value), relative = path.relative(base, resolved);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Queue path escapes its workspace.');
  return resolved;
};
const runtime = within(root, plan.runtimePath);
const statusPath = within(root, plan.statusPath);
mkdirSync(path.dirname(statusPath), {recursive: true});
const state = {startedAt: new Date().toISOString(), runtimeCommit: plan.runtimeCommit, status: 'running', jobs: []};
const save = () => writeFileSync(statusPath, JSON.stringify(state, null, 2) + '\n');
const pause = () => new Promise(resolve => setTimeout(resolve, 3000));
const verifyOutput = output => {
  const snapshot = JSON.parse(readFileSync(path.join(output, 'release.snapshot.json'), 'utf8'));
  const record = JSON.parse(readFileSync(path.join(output, 'render-record.json'), 'utf8'));
  if (record.status !== 'full-render-unreviewed' || !record.inputDriftCheckPassed || !verifyRelease(runtime, snapshot).valid) throw new Error('Completed export failed package verification.');
  return {videoSha256: record.videoSha256, packageSha256: snapshot.packageSha256};
};
const publishLocalReviewCopy = (output, relative) => {
  const destination = within(root, relative);
  mkdirSync(destination, {recursive: true});
  for (const entry of readdirSync(output, {withFileTypes: true}).filter(entry => entry.isFile())) {
    const from = path.join(output, entry.name), to = path.join(destination, entry.name);
    if (existsSync(to)) {
      if (!readFileSync(from).equals(readFileSync(to))) throw new Error('Existing local review copy has different bytes.');
    } else copyFileSync(from, to);
  }
};

try {
  const commit = execFileSync('git', ['rev-parse', 'HEAD'], {cwd: runtime, encoding: 'utf8', windowsHide: true}).trim();
  if (commit !== plan.runtimeCommit) throw new Error('Pinned render runtime changed.');
  for (const job of plan.jobs) {
    const output = within(runtime, job.outputPath);
    const item = {key: job.key, outputPath: job.outputPath, status: job.externalPid ? 'waiting-for-existing-render' : 'pending'};
    state.jobs.push(item); save();
    if (job.externalPid) {
      while (!existsSync(path.join(output, 'release.snapshot.json'))) {
        try {process.kill(job.externalPid, 0);} catch {throw new Error('Existing render exited without a verified package.');}
        await pause();
      }
    } else {
      if (existsSync(output)) throw new Error('Queue refuses to overwrite an existing export directory.');
      const configPath = within(runtime, job.configPath);
      const config = JSON.parse(readFileSync(configPath, 'utf8'));
      const brief = checkProductionBrief(runtime, config.teachingBriefPath, {stage: 'export', expectedLessonPath: config.lessonPath});
      if (!brief.ready) throw new Error('Export brief is not ready: ' + JSON.stringify(brief.blockers));
      const logPath = within(root, job.logPath);
      mkdirSync(path.dirname(logPath), {recursive: true});
      const log = createWriteStream(logPath, {flags: 'wx'});
      const child = spawn(process.execPath, ['scripts/render-release.mjs', job.configPath, '--output-dir=' + job.outputPath], {
        cwd: runtime, windowsHide: true,
        env: {...process.env, FFMPEG_PATH: within(root, plan.ffmpegPath), FFPROBE_PATH: within(root, plan.ffprobePath)},
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      item.status = 'rendering'; item.pid = child.pid; item.startedAt = new Date().toISOString(); save();
      child.stdout.pipe(log, {end: false}); child.stderr.pipe(log, {end: false});
      child.stdout.on('data', bytes => {
        const matches = [...bytes.toString().matchAll(/Rendering: (\d+) frames \((\d+)%\)/g)];
        if (matches.length) {item.renderedFrames = Number(matches.at(-1)[1]); item.progressPercent = Number(matches.at(-1)[2]); save();}
      });
      const code = await new Promise((resolve, reject) => {child.on('error', reject); child.on('close', resolve);});
      log.end();
      if (code !== 0) throw new Error('Render failed. See ' + job.logPath);
    }
    Object.assign(item, verifyOutput(output), {status: 'exported-unreviewed', completedAt: new Date().toISOString()}); save();
    publishLocalReviewCopy(output, job.outputPath);
    execFileSync('python', ['scripts/build-calculation-full-review.py'], {cwd: root, windowsHide: true});
  }
  state.status = 'exports-complete-public-release-review-pending';
} catch (error) {
  state.status = 'failed'; state.error = error.message;
  process.exitCode = 1;
} finally {
  state.updatedAt = new Date().toISOString(); save();
}
