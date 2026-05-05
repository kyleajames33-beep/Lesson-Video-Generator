// Design system reference cards: tokens, type scale, motion principles.

function SystemTokens() {
  const swatches = [
    { name: 'bg', val: TOK.bg, role: 'Stage background' },
    { name: 'bgLift', val: TOK.bgLift, role: 'Card surface' },
    { name: 'chem1', val: TOK.chem1, role: 'Chem · primary' },
    { name: 'chem2', val: TOK.chem2, role: 'Chem · light' },
    { name: 'chem3', val: TOK.chem3, role: 'Chem · deep fill' },
    { name: 'amber', val: TOK.amber, role: 'Universal accent' },
    { name: 'bio', val: TOK.bio, role: 'Biology subject' },
    { name: 'phys', val: TOK.phys, role: 'Physics subject' },
    { name: 'math', val: TOK.math, role: 'Maths subject' },
    { name: 'ink', val: TOK.ink, role: 'Primary text' },
    { name: 'inkDim', val: TOK.inkDim, role: 'Secondary text' },
    { name: 'inkMute', val: TOK.inkMute, role: 'Tertiary / chrome' },
  ];
  return (
    <Frame>
      <div style={{ position: 'absolute', top: 64, left: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          DESIGN SYSTEM · 01
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12, letterSpacing: '-0.03em' }}>
          Color tokens.
        </div>
        <div style={{ fontSize: 26, color: TOK.inkDim, marginTop: 16, maxWidth: 1200 }}>
          Subject-coded. Chem leads with emerald; Bio/Phys/Maths share the same chroma & lightness so the system feels unified across all four.
        </div>
      </div>
      <div style={{
        position: 'absolute', top: 380, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
      }}>
        {swatches.map(s => (
          <div key={s.name} style={{
            background: TOK.bgLift, border: `1px solid ${TOK.rule}`,
            borderRadius: 8, overflow: 'hidden',
          }}>
            <div style={{ background: s.val, height: 100 }} />
            <div style={{ padding: '16px 20px' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: TOK.ink }}>{s.name}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 14, color: TOK.inkDim, marginTop: 4 }}>{s.val}</div>
              <div style={{ fontSize: 16, color: TOK.inkDim, marginTop: 6 }}>{s.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function SystemType() {
  return (
    <Frame>
      <div style={{ position: 'absolute', top: 64, left: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          DESIGN SYSTEM · 02
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12, letterSpacing: '-0.03em' }}>
          Typography.
        </div>
      </div>
      <div style={{ position: 'absolute', top: 320, left: 64, right: 64 }}>
        <div style={{ borderTop: `1px solid ${TOK.rule}`, padding: '32px 0', display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'baseline' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute, letterSpacing: '0.15em' }}>HERO · 220</div>
          <div style={{ fontSize: 220, fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.04em' }}>Reactivity.</div>
        </div>
        <div style={{ borderTop: `1px solid ${TOK.rule}`, padding: '24px 0', display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'baseline' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute, letterSpacing: '0.15em' }}>TITLE · 96</div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em' }}>Why iron rusts.</div>
        </div>
        <div style={{ borderTop: `1px solid ${TOK.rule}`, padding: '24px 0', display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'baseline' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute, letterSpacing: '0.15em' }}>SECTION · 56</div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05 }}>Section heading.</div>
        </div>
        <div style={{ borderTop: `1px solid ${TOK.rule}`, padding: '24px 0', display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'baseline' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute, letterSpacing: '0.15em' }}>BODY · 28</div>
          <div style={{ fontSize: 28, lineHeight: 1.45, color: TOK.ink, maxWidth: 1200 }}>
            Body copy is set in Inter Tight at 28px with 1.45 leading. Long-form definition or narration text uses this size — never below 24px on a 1080p frame.
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${TOK.rule}`, padding: '24px 0', display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'baseline' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute, letterSpacing: '0.15em' }}>MONO · 22</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 22, letterSpacing: '0.15em', color: TOK.chem2 }}>
            CHROME · LABELS · UNITS · TIMECODES
          </div>
        </div>
      </div>
    </Frame>
  );
}

function SystemMotion() {
  const principles = [
    { n: '01', t: 'Reveal, don\'t announce', d: 'Type slides up 16px and fades in over 400ms with a custom ease (cubic-bezier .2,.7,.3,1). Stagger between siblings: 60ms for words, 120ms for blocks.' },
    { n: '02', t: 'Always anchor with a frame', d: 'Top-row chrome (subject + module) and bottom-row chrome (syllabus dot + episode count) appear within the first 400ms and persist. Students never lose context.' },
    { n: '03', t: 'One accent per beat', d: 'Amber is reserved for the single most important word, equation term, or callout in the frame. Never two ambers competing.' },
    { n: '04', t: 'Diagrams draw, they don\'t cut', d: 'SVG strokes use stroke-dashoffset animation. Leader lines, arrows, brackets all draw from origin to target — never appear instantly.' },
    { n: '05', t: 'Hold long enough to read', d: 'Minimum 2.5s on screen for any 28px body line. Equations get 4s minimum. Recap items get 3s each.' },
    { n: '06', t: 'Cuts are punctuation', d: 'Hard cut on beat changes (hook → title, process step → next). Use cross-dissolves only inside continuous explanations.' },
  ];
  return (
    <Frame>
      <div style={{ position: 'absolute', top: 64, left: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          DESIGN SYSTEM · 03
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12, letterSpacing: '-0.03em' }}>
          Motion principles.
        </div>
        <div style={{ fontSize: 26, color: TOK.inkDim, marginTop: 16, maxWidth: 1200 }}>
          Six rules that keep the videos feeling intentional, not "AI-animated".
        </div>
      </div>
      <div style={{
        position: 'absolute', top: 400, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 80px',
      }}>
        {principles.map(p => (
          <div key={p.n} style={{ display: 'flex', gap: 24 }}>
            <div style={{
              fontFamily: FONT_MONO, fontSize: 24, color: TOK.amber,
              flexShrink: 0, letterSpacing: '0.1em',
            }}>{p.n}</div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 10, lineHeight: 1.1 }}>{p.t}</div>
              <div style={{ fontSize: 20, color: TOK.inkDim, lineHeight: 1.5 }}>{p.d}</div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function StoryboardArc() {
  // Visualizes a 4-5 min video as a timeline
  const beats = [
    { t: '0:00', n: 'HOOK',     dur: 20, color: TOK.amber, scene: 'Why iron rusts but gold doesn\'t' },
    { t: '0:20', n: 'TITLE',    dur: 8,  color: TOK.chem1, scene: 'Episode 4: Reactivity of metals' },
    { t: '0:28', n: 'TERM',     dur: 35, color: TOK.chem2, scene: 'Defining oxidation · OIL RIG' },
    { t: '1:03', n: 'FORMULA',  dur: 45, color: TOK.amber, scene: 'The rusting equation, atom by atom' },
    { t: '1:48', n: 'PROCESS',  dur: 80, color: TOK.chem1, scene: '4-step electron flow walkthrough' },
    { t: '3:08', n: 'DIAGRAM',  dur: 50, color: TOK.chem2, scene: 'Anatomy of a single droplet' },
    { t: '3:58', n: 'COMPARE',  dur: 35, color: TOK.amber, scene: 'Iron vs gold · why the difference' },
    { t: '4:33', n: 'RECAP',    dur: 27, color: TOK.chem1, scene: '3 takeaways + next episode hook' },
  ];
  const total = beats.reduce((s, b) => s + b.dur, 0);
  return (
    <Frame>
      <div style={{ position: 'absolute', top: 64, left: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          STORYBOARD · ONE EPISODE
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12, letterSpacing: '-0.03em' }}>
          A 5-minute arc.
        </div>
        <div style={{ fontSize: 26, color: TOK.inkDim, marginTop: 16, maxWidth: 1300 }}>
          How the 8 scene templates compose into a single, paced lesson. The hook returns at the recap — answering its own question.
        </div>
      </div>

      {/* timeline bar */}
      <div style={{
        position: 'absolute', top: 460, left: 64, right: 64,
        height: 100, display: 'flex', borderRadius: 8, overflow: 'hidden',
        border: `1px solid ${TOK.rule}`,
      }}>
        {beats.map((b, i) => (
          <div key={i} style={{
            flex: b.dur, background: b.color, position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRight: i < beats.length - 1 ? `2px solid ${TOK.bg}` : 'none',
          }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: TOK.bg, fontWeight: 700, letterSpacing: '0.1em' }}>
              {b.n}
            </div>
          </div>
        ))}
      </div>

      {/* timecode ruler */}
      <div style={{
        position: 'absolute', top: 580, left: 64, right: 64,
        display: 'flex', fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute,
      }}>
        {beats.map((b, i) => (
          <div key={i} style={{ flex: b.dur, paddingLeft: 4 }}>{b.t}</div>
        ))}
      </div>

      {/* beat list */}
      <div style={{
        position: 'absolute', top: 660, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px 32px',
      }}>
        {beats.map((b, i) => (
          <div key={i} style={{ display: 'flex', gap: 14 }}>
            <div style={{ width: 4, background: b.color, borderRadius: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 14, color: TOK.inkMute, letterSpacing: '0.1em' }}>
                {b.t} · {b.dur}s
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>{b.n}</div>
              <div style={{ fontSize: 16, color: TOK.inkDim, marginTop: 4, lineHeight: 1.35 }}>{b.scene}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute', bottom: 64, right: 64,
        fontFamily: FONT_MONO, fontSize: 18, color: TOK.inkDim, letterSpacing: '0.1em',
      }}>TOTAL · {Math.floor(total/60)}:{String(total%60).padStart(2,'0')}</div>
    </Frame>
  );
}

Object.assign(window, { SystemTokens, SystemType, SystemMotion, StoryboardArc });
