// Animated Worked Example — line-by-line reveal of balancing an equation.
// HSC pedagogy: "show your working" is the core teaching moment.
// 14s total. Each step writes itself in like a teacher at a whiteboard.

function WorkedExampleAnimated() {
  return (
    <window.Frame>
      <window.FadeUp start={0} dur={0.4}><window.Chrome topic="WORKED EXAMPLE" /></window.FadeUp>

      <div style={{ position: 'absolute', top: 140, left: 64 }}>
        <window.FadeUp start={0.3} dur={0.5}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>
            PROBLEM · 01
          </div>
        </window.FadeUp>
        <window.FadeUp start={0.7} dur={0.5}>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 12, lineHeight: 1.1, maxWidth: 1300 }}>
            Balance: <span style={{ fontFamily: window.FONT_MONO, color: window.TOK.amber }}>Fe + O₂ → Fe₂O₃</span>
          </div>
        </window.FadeUp>
      </div>

      <div style={{ position: 'absolute', top: 380, left: 64, right: 64 }}>
        {/* STEP 1 — unbalanced */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 36 }}>
          <window.FadeUp start={2.0} dur={0.4}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 28, color: window.TOK.inkMute, width: 80 }}>STEP 1</div>
          </window.FadeUp>
          <window.FadeUp start={2.3} dur={0.5}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 64, fontWeight: 600 }}>
              Fe <span style={{ color: window.TOK.inkDim }}>+</span> O₂ <span style={{ color: window.TOK.amber }}>→</span> Fe₂O₃
            </div>
          </window.FadeUp>
          <window.FadeUp start={3.5} dur={0.4} style={{ transform: 'rotate(-3deg)' }}>
            <div style={{ fontFamily: window.FONT_HAND, fontSize: 38, color: window.TOK.inkDim }}>
              ← unbalanced
            </div>
          </window.FadeUp>
        </div>

        {/* STEP 2 — coefficient */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 36 }}>
          <window.FadeUp start={5.0} dur={0.4}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 28, color: window.TOK.inkMute, width: 80 }}>STEP 2</div>
          </window.FadeUp>
          <window.FadeUp start={5.3} dur={0.5}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 64, fontWeight: 600, position: 'relative' }}>
              <span style={{ color: window.TOK.amber }}>2</span>Fe <span style={{ color: window.TOK.inkDim }}>+</span> O₂ <span style={{ color: window.TOK.amber }}>→</span> Fe₂O₃
              <window.FadeUp start={6.0} dur={0.4} style={{ position: 'absolute', top: -50, left: -10, transform: 'rotate(-8deg)' }}>
                <div style={{ fontFamily: window.FONT_HAND, fontSize: 28, color: window.TOK.amber, whiteSpace: 'nowrap' }}>
                  +2 here
                </div>
              </window.FadeUp>
            </div>
          </window.FadeUp>
        </div>

        {/* STEP 3 — final balance with check mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 36 }}>
          <window.FadeUp start={8.0} dur={0.4}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 28, color: window.TOK.inkMute, width: 80 }}>STEP 3</div>
          </window.FadeUp>
          <window.FadeUp start={8.3} dur={0.5}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 64, fontWeight: 600 }}>
              <span style={{ color: window.TOK.amber }}>4</span>Fe <span style={{ color: window.TOK.inkDim }}>+</span> <span style={{ color: window.TOK.amber }}>3</span>O₂ <span style={{ color: window.TOK.amber }}>→</span> <span style={{ color: window.TOK.amber }}>2</span>Fe₂O₃
            </div>
          </window.FadeUp>
          <div style={{ marginLeft: 20 }}>
            <window.AnimatedDoodle start={9.5} end={10.2} length={300}>
              <window.ScribbleMark kind="check" size={70} color={window.TOK.chem1} strokeWidth={6} seed={31}/>
            </window.AnimatedDoodle>
          </div>
        </div>

        {/* Verification box */}
        <div style={{ marginTop: 60, padding: 32, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <window.AnimatedDoodle start={11.0} end={12.2} length={3500}>
              <window.ScribbleBox width={1500} height={140} color={window.TOK.chem2} strokeWidth={3} seed={37}/>
            </window.AnimatedDoodle>
          </div>
          <window.FadeUp start={11.5} dur={0.5}>
            <div style={{ fontFamily: window.FONT_HAND, fontSize: 32, color: window.TOK.chem2, marginBottom: 12, transform: 'rotate(-1deg)' }}>
              check: count atoms each side
            </div>
          </window.FadeUp>
          <div style={{ display: 'flex', gap: 60, fontFamily: window.FONT_MONO, fontSize: 32 }}>
            <window.FadeUp start={12.2} dur={0.4}>
              <div><span style={{ color: window.TOK.inkDim }}>Fe:</span> 4 = 4 ✓</div>
            </window.FadeUp>
            <window.FadeUp start={12.7} dur={0.4}>
              <div><span style={{ color: window.TOK.inkDim }}>O:</span> 6 = 6 ✓</div>
            </window.FadeUp>
          </div>
        </div>
      </div>
    </window.Frame>
  );
}

function WorkedExamplePreview() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000' }}>
      <window.Stage width={1920} height={1080} duration={14} background={window.TOK.bg} loop>
        <WorkedExampleAnimated/>
      </window.Stage>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Animated Quiz — pause card with answer reveal
// 10s. Question types in, options stagger up, "PAUSE!" wobbles in,
// at t=8s correct answer's check mark draws.
// ═══════════════════════════════════════════════════════════
function QuizAnimated() {
  const opts = [
    { k: 'A', t: 'Iron loses electrons to oxygen', correct: true },
    { k: 'B', t: 'Iron gains electrons from water' },
    { k: 'C', t: 'Oxygen and iron swap protons' },
    { k: 'D', t: 'Iron melts at room temperature' },
  ];
  return (
    <window.Frame>
      <window.FadeUp start={0} dur={0.4}><window.Chrome topic="YOUR TURN" /></window.FadeUp>

      <window.FadeUp start={0.5} dur={0.6} style={{ position: 'absolute', top: 130, right: 80, transform: 'rotate(8deg)' }}>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 96, color: window.TOK.amber, fontWeight: 700, lineHeight: 1, position: 'relative' }}>
          pause!
          <div style={{ position: 'absolute', left: -20, top: 30, transform: 'rotate(-15deg)' }}>
            <window.AnimatedDoodle start={1.0} end={1.6} length={250}>
              <window.ScribbleStar size={60} color={window.TOK.amber} seed={2}/>
            </window.AnimatedDoodle>
          </div>
        </div>
      </window.FadeUp>

      <div style={{ position: 'absolute', top: 200, left: 64 }}>
        <window.FadeUp start={0.3} dur={0.4}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>
            QUICK CHECK · 30 SECONDS
          </div>
        </window.FadeUp>
        <window.FadeUp start={0.8} dur={0.6}>
          <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: 1500 }}>
            When iron rusts, what's <span style={{ position: 'relative' }}>actually
              <div style={{ position: 'absolute', left: -10, bottom: -22, width: 380 }}>
                <window.AnimatedDoodle start={2.0} end={2.6} length={500}>
                  <window.ScribbleUnderline width={380} color={window.TOK.amber} strokeWidth={5} seed={4} strokes={2}/>
                </window.AnimatedDoodle>
              </div>
            </span> happening?
          </div>
        </window.FadeUp>
      </div>

      <div style={{
        position: 'absolute', top: 540, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28,
      }}>
        {opts.map((o, i) => (
          <window.FadeUp key={o.k} start={3.0 + i * 0.3} dur={0.5}>
            <div style={{
              position: 'relative', padding: '32px 36px',
              background: window.TOK.bgLift, borderRadius: 14,
              border: `1px solid ${window.TOK.rule}`,
              display: 'flex', alignItems: 'center', gap: 28,
            }}>
              <div style={{
                fontFamily: window.FONT_MONO, fontSize: 36, fontWeight: 700,
                color: window.TOK.amber,
                width: 64, height: 64, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid ${window.TOK.amber}`, flexShrink: 0,
              }}>{o.k}</div>
              <div style={{ fontSize: 32, color: window.TOK.ink, lineHeight: 1.3, fontWeight: 500 }}>{o.t}</div>
              {o.correct && (
                <div style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%) rotate(-8deg)' }}>
                  <window.AnimatedDoodle start={8.0} end={8.7} length={300}>
                    <window.ScribbleMark kind="check" size={70} color={window.TOK.chem2} strokeWidth={6} seed={20}/>
                  </window.AnimatedDoodle>
                </div>
              )}
            </div>
          </window.FadeUp>
        ))}
      </div>

      <window.FadeUp start={5.0} dur={0.5} style={{ position: 'absolute', bottom: 110, left: 64, transform: 'rotate(-1deg)' }}>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 36, color: window.TOK.inkDim }}>
          take 30s — then keep watching
        </div>
      </window.FadeUp>
    </window.Frame>
  );
}

function QuizPreview() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000' }}>
      <window.Stage width={1920} height={1080} duration={10} background={window.TOK.bg} loop>
        <QuizAnimated/>
      </window.Stage>
    </div>
  );
}

Object.assign(window, {
  WorkedExampleAnimated, WorkedExamplePreview,
  QuizAnimated, QuizPreview,
});
