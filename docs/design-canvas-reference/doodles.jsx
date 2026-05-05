// Hand-drawn doodle / scribble primitives.
// Goal: make videos feel drawn-on, not slide-presented.
// Every primitive uses jittered SVG paths so it reads as human, not generated.
// All are designed to "draw on" via stroke-dashoffset animation in Remotion.

// Pseudo-random with seed so doodles are stable per render but feel organic.
function rand(seed) {
  let s = seed * 9301 + 49297;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

// Scribbled circle around content. Multiple offset loops = "I went around twice" feel.
function ScribbleCircle({ width = 400, height = 200, color = '#f0a830', strokeWidth = 4, seed = 1, loops = 2, opacity = 1 }) {
  const r = rand(seed);
  const cx = width / 2, cy = height / 2;
  const rx = width * 0.45, ry = height * 0.45;
  let d = '';
  for (let l = 0; l < loops; l++) {
    const off = (r() - 0.5) * 12;
    const start = -Math.PI / 2 + l * 0.3;
    for (let i = 0; i <= 64; i++) {
      const t = start + (i / 64) * Math.PI * 2;
      const jitter = (r() - 0.5) * 8;
      const x = cx + (rx + off + jitter) * Math.cos(t);
      const y = cy + (ry + off + jitter) * Math.sin(t);
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
    }
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible', opacity }}>
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Scribbled underline — 2-3 strokes overlapping
function ScribbleUnderline({ width = 300, color = '#f0a830', strokeWidth = 6, seed = 1, strokes = 2 }) {
  const r = rand(seed);
  let paths = [];
  for (let s = 0; s < strokes; s++) {
    let d = '';
    const yBase = 8 + s * 3 + (r() - 0.5) * 4;
    for (let i = 0; i <= 20; i++) {
      const x = (i / 20) * width + (r() - 0.5) * 4;
      const y = yBase + Math.sin(i * 0.7) * 2 + (r() - 0.5) * 2;
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
    }
    paths.push(<path key={s} d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />);
  }
  return (
    <svg width={width} height={28} viewBox={`0 0 ${width} 28`} style={{ overflow: 'visible' }}>
      {paths}
    </svg>
  );
}

// Wobbly arrow — start to end with hand jitter and arrowhead
function ScribbleArrow({ x1 = 0, y1 = 0, x2 = 200, y2 = 0, color = '#f0a830', strokeWidth = 4, seed = 1, curve = 0.2 }) {
  const r = rand(seed);
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);
  // jittered path with control point for curve
  const cx = (x1 + x2) / 2 - dy * curve;
  const cy = (y1 + y2) / 2 + dx * curve;
  const j = () => (r() - 0.5) * 4;
  let d = `M${x1},${y1} `;
  for (let i = 1; i <= 12; i++) {
    const t = i / 12;
    const x = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2 + j();
    const y = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2 + j();
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }
  // arrowhead
  const ah = 18;
  const a1 = angle + Math.PI - 0.4, a2 = angle + Math.PI + 0.4;
  const hx1 = x2 + Math.cos(a1) * ah, hy1 = y2 + Math.sin(a1) * ah;
  const hx2 = x2 + Math.cos(a2) * ah, hy2 = y2 + Math.sin(a2) * ah;
  return (
    <svg style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', width: '100%', height: '100%' }}>
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${hx1.toFixed(1)},${hy1.toFixed(1)} L${x2},${y2} L${hx2.toFixed(1)},${hy2.toFixed(1)}`}
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Sketchy box — wobbly rectangle outline
function ScribbleBox({ width = 300, height = 200, color = '#f0a830', strokeWidth = 3, seed = 1 }) {
  const r = rand(seed);
  const j = () => (r() - 0.5) * 5;
  // 4 sides with jitter at corners + along edges
  const pts = [
    [j(), j()],
    [width + j(), j()],
    [width + j(), height + j()],
    [j(), height + j()],
    [j(), j()],
  ];
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)} `;
  for (let i = 1; i < pts.length; i++) {
    // intermediate jittered points along each edge
    const [px, py] = pts[i - 1], [qx, qy] = pts[i];
    for (let t = 0.25; t < 1; t += 0.25) {
      d += `L${(px + (qx - px) * t + (r() - 0.5) * 3).toFixed(1)},${(py + (qy - py) * t + (r() - 0.5) * 3).toFixed(1)} `;
    }
    d += `L${qx.toFixed(1)},${qy.toFixed(1)} `;
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Hand-drawn checkmark or X
function ScribbleMark({ kind = 'check', size = 60, color = '#1f8a6f', strokeWidth = 5, seed = 1 }) {
  const r = rand(seed);
  const j = () => (r() - 0.5) * 3;
  let d;
  if (kind === 'check') {
    d = `M${10+j()},${size*0.55+j()} L${size*0.4+j()},${size*0.85+j()} L${size*0.95+j()},${10+j()}`;
  } else {
    d = `M${10+j()},${10+j()} L${size-10+j()},${size-10+j()} M${size-10+j()},${10+j()} L${10+j()},${size-10+j()}`;
  }
  return (
    <svg width={size} height={size} style={{ overflow: 'visible' }}>
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Curly bracket — for grouping
function ScribbleBracket({ height = 200, color = '#8a9590', strokeWidth = 3, side = 'left', seed = 1 }) {
  const r = rand(seed);
  const j = () => (r() - 0.5) * 2;
  const w = 24;
  const x = side === 'left' ? w : 0;
  const tip = side === 'left' ? 0 : w;
  const mid = height / 2;
  let d = `M${x+j()},${j()} `;
  d += `Q${tip+j()},${j()} ${tip+j()},${20+j()} `;
  d += `L${tip+j()},${mid - 24 + j()} `;
  d += `Q${tip+j()},${mid+j()} ${(side === 'left' ? -4 : w+4)+j()},${mid+j()} `;
  d += `Q${tip+j()},${mid+j()} ${tip+j()},${mid + 24 + j()} `;
  d += `L${tip+j()},${height - 20 + j()} `;
  d += `Q${tip+j()},${height+j()} ${x+j()},${height+j()} `;
  return (
    <svg width={w + 8} height={height} style={{ overflow: 'visible' }}>
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Hatching fill (like marker shading) — diagonal lines inside a rect
function ScribbleHatch({ width = 200, height = 80, color = '#f0a830', spacing = 8, strokeWidth = 1.5, seed = 1, opacity = 0.4 }) {
  const r = rand(seed);
  const lines = [];
  // diagonal lines from top-left to bottom-right
  for (let x = -height; x < width; x += spacing) {
    const j1 = (r() - 0.5) * 3, j2 = (r() - 0.5) * 3;
    lines.push(<line key={x} x1={x + j1} y1={j1} x2={x + height + j2} y2={height + j2}
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />);
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'hidden', opacity }}>
      {lines}
    </svg>
  );
}

// Highlighter — semi-transparent rectangle behind text
function ScribbleHighlight({ width = 300, height = 50, color = '#f0a830', seed = 1, opacity = 0.35 }) {
  const r = rand(seed);
  const j = () => (r() - 0.5) * 3;
  const pts = [
    [j(), 4+j()],
    [width + j(), j()],
    [width + j(), height + j()],
    [j(), height - 4 + j()],
  ];
  const d = `M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]} L${pts[2][0]},${pts[2][1]} L${pts[3][0]},${pts[3][1]} Z`;
  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <path d={d} fill={color} opacity={opacity} />
    </svg>
  );
}

// Star/sparkle/asterisk — hand-drawn marginalia decoration
function ScribbleStar({ size = 40, color = '#f0a830', strokeWidth = 3, seed = 1 }) {
  const r = rand(seed);
  const j = () => (r() - 0.5) * 2;
  const c = size / 2;
  const arms = 4;
  let paths = [];
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI;
    const x1 = c + Math.cos(a) * (c - 4) + j(), y1 = c + Math.sin(a) * (c - 4) + j();
    const x2 = c - Math.cos(a) * (c - 4) + j(), y2 = c - Math.sin(a) * (c - 4) + j();
    paths.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />);
  }
  return <svg width={size} height={size} style={{ overflow: 'visible' }}>{paths}</svg>;
}

// Annotation label — small handwritten-feel text with leader line to a point
function ScribbleAnnotation({ x, y, dx = 60, dy = -40, label, color = '#f0a830', seed = 1, side = 'right' }) {
  const r = rand(seed);
  const j = () => (r() - 0.5) * 2;
  const tx = x + dx, ty = y + dy;
  // wobbly leader line
  let d = `M${x+j()},${y+j()} `;
  for (let i = 1; i <= 6; i++) {
    const t = i / 6;
    d += `L${(x + (tx - x) * t + j()).toFixed(1)},${(y + (ty - y) * t + j()).toFixed(1)} `;
  }
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
      <svg style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }} width="1" height="1">
        <path d={d} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
        <circle cx={x} cy={y} r={4} fill={color} />
      </svg>
      <div style={{
        position: 'absolute', left: tx, top: ty,
        transform: side === 'right' ? 'translate(8px, -50%)' : 'translate(calc(-100% - 8px), -50%)',
        fontFamily: '"Caveat", "Kalam", cursive',
        fontSize: 28, color, fontWeight: 600, whiteSpace: 'nowrap',
      }}>{label}</div>
    </div>
  );
}

// Inject hand-drawn font (Caveat/Kalam) once
if (typeof document !== 'undefined' && !document.getElementById('hsc-hand-font')) {
  const link = document.createElement('link');
  link.id = 'hsc-hand-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Kalam:wght@400;700&display=swap';
  document.head.appendChild(link);
}

const FONT_HAND = '"Caveat", "Kalam", cursive';

Object.assign(window, {
  ScribbleCircle, ScribbleUnderline, ScribbleArrow, ScribbleBox,
  ScribbleMark, ScribbleBracket, ScribbleHatch, ScribbleHighlight,
  ScribbleStar, ScribbleAnnotation, FONT_HAND,
});
