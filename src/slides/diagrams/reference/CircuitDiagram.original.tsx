/**
 * CircuitDiagram.tsx — HSC Science Interactive Diagram
 * =====================================================================
 * PATTERN: "Data-driven 3D-in-SVG diagram" v2 — FAMILY 2: path-based
 * scenes (see ARCHITECTURE.md). Reference family 1 is VSEPRDiagram.tsx.
 *
 * Sections 1, 3 and 4 are copied VERBATIM from VSEPRDiagram.tsx.
 * Section 5a reuses the frozen shell mechanisms unchanged (unified rAF
 * loop, click-to-inspect, hover chips, settle bounce, `controlled`
 * gating) with only topic names swapped. Sections 2 and 5b are new.
 *
 * WHAT MAKES THIS FAMILY DIFFERENT (the placement model):
 *   VSEPR positions are unit vectors radiating from ONE central point.
 *   Circuits place discrete components at EXPLICIT model-space anchor
 *   points along wire polylines. Each component carries:
 *     at:    Vec3 — anchor in model space (z = 0 plane)
 *     along: Vec3 — unit direction of the wire through the anchor
 *   The renderer projects `at` and `at + ε·along` to get a screen
 *   position AND a screen angle, then draws a flat "billboard" symbol
 *   rotated to that angle on an opaque plate that masks the wire
 *   behind it. This anchor+along convention is the reusable idea for
 *   every non-radial family (process diagrams, apparatus, timelines).
 *
 * Constraints honoured — identical to family 1:
 *   - Only import is `react`. No CSS files, no <style>, no className.
 *   - Deterministic when `rotation` is supplied: no rAF, no SMIL, no
 *     handlers, settleScale === 1.
 *   - Ambient animation is SMIL (here: current-flow dashes), gated on
 *     !controlled, pointerEvents="none".
 *   - defs ids namespaced with useId().
 */

import React, { useEffect, useId, useRef, useState } from "react";

/* =====================================================================
 * SECTION 1 — TYPES (FROZEN: identical in every diagram)
 * =================================================================== */

/** A point in 3D model space. All geometry positions are UNIT vectors
 *  (length 1) pointing away from the origin; the engine scales them. */
export type Vec3 = { x: number; y: number; z: number };

/** Yaw = rotation about vertical (Y) axis, pitch = about horizontal (X).
 *  Radians. This is the entire camera state — keep it this simple. */
export type Rotation = { yaw: number; pitch: number };

/** A projected 2D point with retained depth for painter's-algorithm
 *  sorting and depth cues (size/opacity). depth ∈ roughly [-1, 1],
 *  larger = closer to the viewer. */
export type Projected = { x: number; y: number; depth: number };

/** What the learner has clicked in the scene. `kind` values are
 *  topic-family specific; `i` indexes into the relevant data array. */
export type Selection = { kind: string; i: number } | null;

/* =====================================================================
 * SECTION 2 — TOPIC DATA (EDIT PER TOPIC)
 * FAMILY-2 SCHEMA: explicit model-space layout instead of radial unit
 * vectors. Coordinates are in model units; keep |x| ≲ 2.2 and
 * |y| ≲ 0.95 so the scene fits the default 720×400 viewBox at the
 * engine's standard scale. z is always 0 (flat circuit that tilts).
 * =================================================================== */

type ComponentKind = "battery" | "resistor" | "switch" | "ammeter" | "voltmeter";

/** Display names for hover chips. */
const KIND_NAMES: Record<ComponentKind, string> = {
  battery: "Battery (EMF source)",
  resistor: "Resistor",
  switch: "Switch",
  ammeter: "Ammeter",
  voltmeter: "Voltmeter",
};

interface ComponentSpec {
  kind: ComponentKind;
  /** Short label drawn beside the symbol, e.g. "R₁". */
  label: string;
  /** Value drawn with the label, e.g. "10 Ω". Empty string to omit. */
  value: string;
  /** Click-to-inspect callout text (syllabus language, < 85 chars). */
  callout: string;
  /** Anchor point in model space (z = 0). */
  at: Vec3;
  /** Unit direction of the wire through the anchor. */
  along: Vec3;
}

interface WireSpec {
  /** Polyline vertices in model space. Order = conventional current
   *  direction (from + terminal), so the flow animation runs the
   *  right way. */
  pts: Vec3[];
  /** Whether significant current flows here (false for the voltmeter
   *  branch — an ideal voltmeter draws almost no current). Controls
   *  the SMIL flow animation. */
  flow: boolean;
}

interface CircuitEntry {
  id: string;
  /** Exact NSW syllabus term shown on the selector button. */
  name: string;
  /** One-line explanation for the info area (always visible). */
  note: string;
  /** Longer "why?" explanation behind the expandable toggle. */
  detail: string;
  wires: WireSpec[];
  /** Junction dots where wires meet (parallel circuits). */
  junctions: Vec3[];
  components: ComponentSpec[];
  /** Info-panel entries — data-driven in this family so the shell
   *  needs no per-topic edits. */
  readouts: { label: string; value: string }[];
}

const X = (x: number, y: number): Vec3 => ({ x, y, z: 0 });
const RIGHT: Vec3 = { x: 1, y: 0, z: 0 };
const UP: Vec3 = { x: 0, y: 1, z: 0 };

const CIRCUITS: CircuitEntry[] = [
  {
    id: "series",
    name: "Series circuit",
    note: "One path — the same current flows through every component.",
    detail:
      "There is only one path, so the same current (0.20 A) passes through every component. Resistances add: R total = R₁ + R₂ = 30 Ω. The EMF is shared between the resistors in proportion to their resistance (V = IR gives 2.0 V across R₁ and 4.0 V across R₂). Note the connection rules: the ammeter sits in series in the main loop, while the voltmeter connects in parallel across R₁.",
    wires: [
      // Main loop, drawn from the battery's + terminal, clockwise.
      { pts: [X(-1.5, 0.35), X(-1.5, 0.8), X(1.5, 0.8), X(1.5, -0.8), X(-1.5, -0.8), X(-1.5, -0.35)], flow: true },
      // Voltmeter branch across R₁ (right-hand side of the loop).
      { pts: [X(1.5, 0.4), X(2.1, 0.4), X(2.1, -0.4), X(1.5, -0.4)], flow: false },
    ],
    junctions: [X(1.5, 0.4), X(1.5, -0.4)],
    components: [
      { kind: "battery", label: "ε", value: "6.0 V", at: X(-1.5, 0), along: UP,
        callout: "Battery — source of EMF: 6.0 V of energy per coulomb of charge" },
      { kind: "ammeter", label: "A", value: "0.20 A", at: X(0, 0.8), along: RIGHT,
        callout: "Ammeter — measures current, connected in series (reads 0.20 A)" },
      { kind: "resistor", label: "R₁", value: "10 Ω", at: X(1.5, 0), along: UP,
        callout: "Resistor R₁ (10 Ω) — opposes current, converting electrical energy to heat" },
      { kind: "resistor", label: "R₂", value: "20 Ω", at: X(0.4, -0.8), along: RIGHT,
        callout: "Resistor R₂ (20 Ω) — in series, so it carries the same 0.20 A as R₁" },
      { kind: "switch", label: "S", value: "", at: X(-0.7, -0.8), along: RIGHT,
        callout: "Switch (closed) — completes the conducting path so charge can flow" },
      { kind: "voltmeter", label: "V", value: "2.0 V", at: X(2.1, 0), along: UP,
        callout: "Voltmeter — measures potential difference, in parallel across R₁ (reads 2.0 V)" },
    ],
    readouts: [
      { label: "EMF", value: "6.0 V" },
      { label: "Total resistance", value: "30 Ω" },
      { label: "Current", value: "0.20 A" },
      { label: "V across R₁", value: "2.0 V" },
    ],
  },
  {
    id: "parallel",
    name: "Parallel circuit",
    note: "Current splits between branches; each branch gets the full EMF.",
    detail:
      "The current splits at the junctions: each branch receives the full 6.0 V EMF, and the branch currents add to give the total drawn from the battery. With two equal 10 Ω resistors, each branch carries 0.60 A, so the ammeter in the main line reads 1.2 A. Total resistance is less than any single branch: 1/R total = 1/R₁ + 1/R₂ gives 5.0 Ω.",
    wires: [
      // Main loop through the far branch (R₂), from + terminal, clockwise.
      { pts: [X(-1.5, 0.35), X(-1.5, 0.8), X(1.8, 0.8), X(1.8, -0.8), X(-1.5, -0.8), X(-1.5, -0.35)], flow: true },
      // Inner branch through R₁.
      { pts: [X(0.9, 0.8), X(0.9, -0.8)], flow: true },
    ],
    junctions: [X(0.9, 0.8), X(0.9, -0.8)],
    components: [
      { kind: "battery", label: "ε", value: "6.0 V", at: X(-1.5, 0), along: UP,
        callout: "Battery — source of EMF: 6.0 V of energy per coulomb of charge" },
      { kind: "ammeter", label: "A", value: "1.2 A", at: X(-0.5, 0.8), along: RIGHT,
        callout: "Ammeter — in the main line, so it reads the total current (1.2 A)" },
      { kind: "resistor", label: "R₁", value: "10 Ω", at: X(0.9, 0), along: UP,
        callout: "Resistor R₁ (10 Ω) — its branch gets the full 6.0 V, so it carries 0.60 A" },
      { kind: "resistor", label: "R₂", value: "10 Ω", at: X(1.8, 0), along: UP,
        callout: "Resistor R₂ (10 Ω) — its branch also gets the full 6.0 V and carries 0.60 A" },
      { kind: "switch", label: "S", value: "", at: X(-0.5, -0.8), along: RIGHT,
        callout: "Switch (closed) — in the main line, it turns the whole circuit on and off" },
    ],
    readouts: [
      { label: "EMF", value: "6.0 V" },
      { label: "Total resistance", value: "5.0 Ω" },
      { label: "Total current", value: "1.2 A" },
      { label: "Branch current", value: "0.60 A" },
    ],
  },
];

/** Callout text comes straight from each component's data. */
const PART_LABELS = {
  component: (c: ComponentSpec) => c.callout,
};

/* =====================================================================
 * SECTION 3 — 3D ENGINE (FROZEN: copy verbatim into every 3D diagram)
 * Minimal right-handed rotate-then-project pipeline. No matrices, no
 * quaternions — deliberately simple so cheaper models can't break it.
 * =================================================================== */

function rotate(v: Vec3, r: Rotation): Vec3 {
  // Yaw about Y axis
  const cy = Math.cos(r.yaw), sy = Math.sin(r.yaw);
  const x1 = v.x * cy + v.z * sy;
  const z1 = -v.x * sy + v.z * cy;
  // Pitch about X axis
  const cp = Math.cos(r.pitch), sp = Math.sin(r.pitch);
  const y2 = v.y * cp - z1 * sp;
  const z2 = v.y * sp + z1 * cp;
  return { x: x1, y: y2, z: z2 };
}

/** Project rotated model coords to SVG pixel coords.
 *  `scale` = pixels per model unit; mild perspective via FOCAL.
 *  SVG y grows downward, so model y is negated. */
function project(v: Vec3, r: Rotation, cx: number, cy: number, scale: number): Projected {
  const p = rotate(v, r);
  const FOCAL = 4; // model units from camera; larger = flatter perspective
  const f = FOCAL / (FOCAL - p.z);
  return { x: cx + p.x * scale * f, y: cy - p.y * scale * f, depth: p.z };
}

/** Depth cue helper: maps depth [-1,1] → [min,max]. */
const depthLerp = (depth: number, min: number, max: number) =>
  min + ((depth + 1) / 2) * (max - min);

/* =====================================================================
 * SECTION 4 — THEME (FROZEN: shared design tokens, inline only)
 * Coastal palette consistent with hscscience.com.au. Everything is a
 * plain style object — never emit a <style> tag or className.
 * =================================================================== */

const THEME = {
  bg: "#f7fafb",
  panel: "#ffffff",
  ink: "#1e3a42",
  inkSoft: "#5b7681",
  accent: "#0e7d8a", // coastal teal
  accentDeep: "#0a5560", // deep water — headings, panel accents
  accentBright: "#22b8c8", // aqua highlight — glows, selection, pulses
  accentSoft: "#d7edf0",
  border: "#dce8ec",
  lonePair: "#8a6bc9", // violet — visually distinct from any CPK colour
  shadowInk: "#123037", // flood colour for drop shadows
  font: "'Nunito','DM Sans','Segoe UI',system-ui,sans-serif",
  radius: 12,
} as const;

const styles: Record<string, React.CSSProperties> = {
  root: {
    fontFamily: THEME.font,
    background: `linear-gradient(180deg, ${THEME.bg} 0%, #eef6f7 100%)`,
    border: `1px solid ${THEME.border}`,
    borderRadius: THEME.radius,
    padding: 16,
    maxWidth: 760,
    color: THEME.ink,
    boxSizing: "border-box",
  },
  title: { fontSize: 18, fontWeight: 800, margin: "0 0 2px", color: THEME.accentDeep },
  subtitle: { fontSize: 13, color: THEME.inkSoft, margin: "0 0 12px" },
  controlsRow: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 },
  btn: {
    fontFamily: THEME.font,
    fontSize: 13,
    fontWeight: 700,
    padding: "6px 12px",
    borderRadius: 999,
    border: `1px solid ${THEME.border}`,
    background: THEME.panel,
    color: THEME.inkSoft,
    cursor: "pointer",
    transition: "box-shadow 200ms ease, background 200ms ease, color 200ms ease, transform 200ms ease",
  },
  // Active geometry button: aqua glow ring + lift. transition above
  // makes the glow ease in/out — no CSS files needed for this.
  btnActive: {
    background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.accentBright})`,
    borderColor: THEME.accent,
    color: "#fff",
    boxShadow: `0 0 0 3px ${THEME.accentSoft}, 0 4px 14px rgba(34,184,200,0.45)`,
    transform: "translateY(-1px)",
  },
  stage: {
    background: `radial-gradient(120% 130% at 50% 20%, #ffffff 0%, #f2f9fa 55%, #e2f0f2 100%)`,
    border: `1px solid ${THEME.border}`,
    borderRadius: THEME.radius,
    display: "block",
    width: "100%",
    touchAction: "none",
    cursor: "grab",
    userSelect: "none",
  },
  infoPanel: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 12,
    padding: "12px 16px",
    background: `linear-gradient(120deg, ${THEME.accentSoft} 0%, #e9f7f2 60%, #f3f9e9 100%)`,
    borderLeft: `4px solid ${THEME.accentBright}`,
    borderRadius: THEME.radius,
    fontSize: 13,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
  },
  infoItem: { display: "flex", flexDirection: "column", minWidth: 90 },
  infoLabel: { fontSize: 11, fontWeight: 800, color: THEME.accent, textTransform: "uppercase", letterSpacing: 0.5 },
  infoValue: { fontSize: 15, fontWeight: 800, color: THEME.accentDeep },
  note: { margin: "10px 0 0", fontSize: 13, color: THEME.inkSoft, lineHeight: 1.5 },
  detailBtn: {
    fontFamily: THEME.font,
    fontSize: 12,
    fontWeight: 800,
    marginTop: 8,
    padding: "4px 12px",
    borderRadius: 999,
    border: `1px solid ${THEME.accent}`,
    background: "transparent",
    color: THEME.accent,
    cursor: "pointer",
  },
  detailBox: {
    marginTop: 8,
    padding: "10px 14px",
    background: THEME.panel,
    border: `1px solid ${THEME.border}`,
    borderLeft: `4px solid ${THEME.lonePair}`,
    borderRadius: THEME.radius,
    fontSize: 13,
    lineHeight: 1.6,
    color: THEME.ink,
  },
  hint: { fontSize: 11, color: THEME.inkSoft, marginTop: 6, display: "flex", alignItems: "center", gap: 8 },
};

/* =====================================================================
 * SECTION 5 — COMPONENT
 * 5a = generic shell: state, animation loop, interaction, controls,
 *      info panel — FROZEN mechanisms (names adapted to this topic)
 * 5b = renderScene() — the only rendering code that changes per family
 * =================================================================== */

export interface CircuitDiagramProps {
  /** Initial circuit shown. One of the CIRCUITS ids. */
  initialCircuit?: string;
  /** Spin slowly when the user isn't dragging (default true).
   *  Ignored when `rotation` is supplied. */
  autoRotate?: boolean;
  /** REMOTION HOOK: supply rotation explicitly (e.g. derived from
   *  useCurrentFrame()) to make output a pure function of props.
   *  Supplying this disables dragging, all animation (rAF and SMIL),
   *  and click/hover interaction. */
  rotation?: Rotation;
  /** REMOTION HOOK: force a circuit and hide the selector buttons. */
  fixedCircuit?: string;
  width?: number;
  height?: number;
}

export default function CircuitDiagram({
  initialCircuit = "series",
  autoRotate = true,
  rotation,
  fixedCircuit,
  width = 720,
  height = 400,
}: CircuitDiagramProps) {
  /* ---- 5a. GENERIC SHELL (FROZEN mechanisms) ------------------------ */
  const uid = useId().replace(/[^a-zA-Z0-9]/g, ""); // namespace SVG defs ids
  const [activeId, setActiveId] = useState(fixedCircuit ?? initialCircuit);
  // Circuits are mostly 2D, so the resting camera is a gentler tilt
  // than VSEPR's — this is a tuning value, not a mechanism change.
  const [rot, setRot] = useState<Rotation>({ yaw: -0.18, pitch: 0.16 });
  const [spinning, setSpinning] = useState(false); // gentle scenes: off by default
  const [selected, setSelected] = useState<Selection>(null);
  const [hovered, setHovered] = useState<number | null>(null); // component index
  const [settleScale, setSettleScale] = useState(1); // "settle bounce" on circuit change
  const [showDetail, setShowDetail] = useState(false);

  // Animation refs (interactive mode only — never touched when controlled)
  const drag = useRef<{ x: number; y: number; t: number } | null>(null);
  const movedPx = useRef(0); // distinguishes a click from a drag
  const flingVel = useRef<Rotation>({ yaw: 0, pitch: 0 }); // inertia after release
  const spinVel = useRef(0); // eased auto-rotate speed
  const spinningRef = useRef(spinning);
  const settleStart = useRef<number | null>(null);
  const mounted = useRef(false);

  const controlled = rotation !== undefined; // Remotion / deterministic mode
  const effRot = controlled ? rotation! : rot;
  const circ = CIRCUITS.find((c) => c.id === activeId) ?? CIRCUITS[0];

  useEffect(() => {
    spinningRef.current = spinning;
  }, [spinning]);

  // Circuit change: clear selection and trigger the settle bounce
  // (interactive mode only — settleScale stays 1 when controlled).
  useEffect(() => {
    setSelected(null);
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!controlled) settleStart.current = performance.now();
  }, [activeId, controlled]);

  /**
   * UNIFIED ANIMATION LOOP (interactive mode only).
   * One rAF drives: (a) auto-rotate speed eased toward its target,
   * (b) fling inertia after a drag release with exponential decay,
   * (c) the damped-spring settle bounce. It early-returns without
   * setState when nothing is moving, so idle re-renders are avoided.
   * NEVER runs in controlled mode — that is the Remotion contract.
   */
  useEffect(() => {
    if (controlled) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;

      // (a) eased auto-rotate: speed lerps toward target (smoothstep feel)
      const target = spinningRef.current && !drag.current ? 0.5 : 0;
      spinVel.current += (target - spinVel.current) * Math.min(1, dt * 3.5);

      // (b) fling inertia decays exponentially
      flingVel.current.yaw *= Math.pow(0.08, dt);
      flingVel.current.pitch *= Math.pow(0.08, dt);

      const dYaw = (spinVel.current + flingVel.current.yaw) * dt;
      const dPitch = flingVel.current.pitch * dt;
      if (Math.abs(dYaw) > 1e-5 || Math.abs(dPitch) > 1e-5) {
        setRot((r) => ({
          yaw: r.yaw + dYaw,
          pitch: Math.max(-1.4, Math.min(1.4, r.pitch + dPitch)),
        }));
      }

      // (c) settle bounce: damped spring, ~0.8 s, max ±5% scale
      if (settleStart.current !== null) {
        const ts = (t - settleStart.current) / 1000;
        if (ts > 0.85) {
          settleStart.current = null;
          setSettleScale(1);
        } else {
          setSettleScale(1 + 0.05 * Math.exp(-5.5 * ts) * Math.sin(16 * ts));
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [controlled]);

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (controlled) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, t: performance.now() };
    movedPx.current = 0;
    flingVel.current = { yaw: 0, pitch: 0 };
    setSpinning(false);
  };
  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!drag.current) return;
    const now = performance.now();
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    const dtm = Math.max((now - drag.current.t) / 1000, 1 / 120);
    drag.current = { x: e.clientX, y: e.clientY, t: now };
    movedPx.current += Math.abs(dx) + Math.abs(dy);
    // record release velocity for fling inertia (clamped)
    flingVel.current = {
      yaw: Math.max(-4, Math.min(4, (dx * 0.01) / dtm)),
      pitch: Math.max(-4, Math.min(4, (dy * 0.01) / dtm)),
    };
    setRot((r) => ({
      yaw: r.yaw + dx * 0.01,
      pitch: Math.max(-1.4, Math.min(1.4, r.pitch + dy * 0.01)),
    }));
  };
  const onPointerUp = () => (drag.current = null);

  // Background click (not a drag) clears the selection. Clickable scene
  // parts call e.stopPropagation() so this only fires on empty space.
  const onStageClick = () => {
    if (movedPx.current < 4) setSelected(null);
  };
  const toggleSelect = (kind: string, i: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected((s) => (s && s.kind === kind && s.i === i ? null : { kind, i }));
  };

  /* ---- 5b. TOPIC SCENE RENDERER (EDIT PER TOPIC FAMILY) ------------- */
  // FAMILY-2 RENDERER: wires as projected polylines; components as
  // billboarded symbols at anchor+along placements; junction dots.
  // Same renderable/{depth,el}/sort contract as family 1; overlays at
  // reserved depths 98 (hover chip) and 99 (selection callout).
  const renderScene = () => {
    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) * 0.33; // px per model unit
    const S = scale * 0.16; // component symbol unit size
    const P = (v: Vec3) => project(v, effRot, cx, cy, scale);

    type Renderable = { depth: number; el: React.ReactNode };
    const items: Renderable[] = [];

    /** Small rounded-rect callout, clamped inside the viewBox.
     *  (Identical to family 1 — copy verbatim.) */
    const callout = (key: string, x: number, y: number, text: string) => {
      const w = text.length * 6.6 + 22;
      const bx = Math.max(w / 2 + 6, Math.min(width - w / 2 - 6, x));
      const by = Math.max(30, Math.min(height - 14, y - 26));
      return (
        <g key={key} pointerEvents="none">
          <rect x={bx - w / 2} y={by - 13} width={w} height={24} rx={12}
            fill={THEME.accentDeep} opacity={0.94} filter={`url(#${uid}-shadow)`} />
          <text x={bx} y={by} textAnchor="middle" dominantBaseline="central"
            fontFamily={THEME.font} fontWeight={700} fontSize={12} fill="#fff">
            {text}
          </text>
        </g>
      );
    };

    // ---- Wires: projected polylines, drawn beneath everything -------
    circ.wires.forEach((wire, wi) => {
      const pts = wire.pts.map(P);
      const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
      const avgDepth = pts.reduce((s, p) => s + p.depth, 0) / pts.length;
      items.push({
        depth: avgDepth - 0.05, // wires always sit below components
        el: (
          <g key={`w${wi}`}>
            <path d={d} fill="none" stroke={THEME.inkSoft} strokeWidth={3.5}
              strokeLinejoin="round" strokeLinecap="round" />
            {/* Ambient SMIL for this family: current flow as moving
                dashes along the wire. Interactive mode only, and only
                on wires that actually carry current. */}
            {!controlled && wire.flow && (
              <path d={d} fill="none" stroke={THEME.accentBright} strokeWidth={2.5}
                strokeDasharray="4 10" strokeLinecap="round" opacity={0.75}
                pointerEvents="none">
                <animate attributeName="stroke-dashoffset" from="0" to="-28"
                  dur="1.4s" repeatCount="indefinite" />
              </path>
            )}
          </g>
        ),
      });
    });

    // ---- Junction dots ----------------------------------------------
    circ.junctions.forEach((j, ji) => {
      const p = P(j);
      items.push({
        depth: p.depth + 0.01,
        el: <circle key={`j${ji}`} cx={p.x} cy={p.y} r={4.5} fill={THEME.ink} />,
      });
    });

    // ---- Components: billboarded symbols on opaque plates ------------
    circ.components.forEach((c, i) => {
      const p = P(c.at);
      // Screen angle of the wire through this anchor: project a point a
      // small step along the wire direction and measure the angle.
      const q = P({ x: c.at.x + c.along.x * 0.12, y: c.at.y + c.along.y * 0.12, z: c.at.z + c.along.z * 0.12 });
      const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
      const isSel = selected?.kind === "component" && selected.i === i;
      const stroke = isSel ? THEME.accentBright : THEME.ink;

      // Symbol glyphs are drawn in LOCAL coords: the wire runs along the
      // local x axis through (0,0); the group is rotated to the screen
      // angle. The plate rect masks the wire behind the symbol.
      let glyph: React.ReactNode;
      let plateW = S * 1.7, plateH = S * 1.6;
      switch (c.kind) {
        case "battery":
          glyph = (
            <>
              <line x1={-S * 0.18} y1={-S * 0.6} x2={-S * 0.18} y2={S * 0.6} stroke={stroke} strokeWidth={3} strokeLinecap="round" />
              <line x1={S * 0.18} y1={-S * 0.32} x2={S * 0.18} y2={S * 0.32} stroke={stroke} strokeWidth={6.5} strokeLinecap="round" />
              <text x={-S * 0.5} y={-S * 0.55} fontFamily={THEME.font} fontWeight={800} fontSize={12}
                textAnchor="middle" fill={THEME.accentDeep}>+</text>
            </>
          );
          plateW = S * 0.95;
          break;
        case "resistor":
          glyph = (
            <rect x={-S * 0.8} y={-S * 0.35} width={S * 1.6} height={S * 0.7} rx={3}
              fill={`url(#${uid}-metal)`} stroke={stroke} strokeWidth={2.5}
              filter={`url(#${uid}-shadow)`} />
          );
          plateW = S * 1.75;
          plateH = S * 0.9;
          break;
        case "switch":
          glyph = (
            <>
              <line x1={-S * 0.65} y1={0} x2={S * 0.55} y2={-S * 0.3} stroke={stroke} strokeWidth={3} strokeLinecap="round" />
              <circle cx={-S * 0.65} cy={0} r={3.5} fill={THEME.ink} />
              <circle cx={S * 0.65} cy={0} r={3.5} fill={THEME.ink} />
            </>
          );
          plateW = S * 1.5;
          plateH = S * 0.9;
          break;
        case "ammeter":
        case "voltmeter":
          glyph = (
            <>
              <circle cx={0} cy={0} r={S * 0.72} fill={`url(#${uid}-meter)`}
                stroke={stroke} strokeWidth={2.5} filter={`url(#${uid}-shadow)`} />
              {/* Counter-rotate the meter letter so it stays upright. */}
              <text x={0} y={0} transform={`rotate(${-angle})`} textAnchor="middle" dominantBaseline="central"
                fontFamily={THEME.font} fontWeight={800} fontSize={S * 0.75} fill={THEME.accentDeep}>
                {c.kind === "ammeter" ? "A" : "V"}
              </text>
            </>
          );
          plateW = S * 1.55;
          plateH = S * 1.55;
          break;
      }

      items.push({
        depth: p.depth + 0.02, // components draw over their wire
        el: (
          <g key={`c${i}`}
            onClick={controlled ? undefined : toggleSelect("component", i)}
            onMouseEnter={controlled ? undefined : () => setHovered(i)}
            onMouseLeave={controlled ? undefined : () => setHovered(null)}
            style={{ cursor: controlled ? undefined : "pointer" }}>
            <g transform={`translate(${p.x} ${p.y}) rotate(${angle})`}>
              {/* opaque plate masks the wire behind the symbol */}
              <rect x={-plateW / 2} y={-plateH / 2} width={plateW} height={plateH} rx={4} fill="#f2f9fa" />
              {glyph}
              {isSel && (
                <rect x={-plateW / 2 - 4} y={-plateH / 2 - 4} width={plateW + 8} height={plateH + 8} rx={7}
                  fill="none" stroke={THEME.accentBright} strokeWidth={2.5} filter={`url(#${uid}-glow)`} />
              )}
              {/* fat invisible hit area */}
              <rect x={-plateW / 2 - 8} y={-plateH / 2 - 8} width={plateW + 16} height={plateH + 16} fill="transparent" />
            </g>
          </g>
        ),
      });

      // Label + value: separate renderable, NOT rotated with the symbol,
      // offset perpendicular to the wire, flipped toward the scene
      // centre so labels never land outside the viewBox.
      const aRad = (angle * Math.PI) / 180;
      let nx = -Math.sin(aRad), ny = Math.cos(aRad);
      if (nx * (cx - p.x) + ny * (cy - p.y) < 0) { nx = -nx; ny = -ny; }
      const off = Math.max(plateW, plateH) / 2 + 14;
      items.push({
        depth: p.depth + 0.03,
        el: (
          <text key={`t${i}`} x={p.x + nx * off} y={p.y + ny * off} textAnchor="middle"
            dominantBaseline="central" fontFamily={THEME.font} fontWeight={800}
            fontSize={13} fill={THEME.accentDeep} pointerEvents="none">
            {c.value ? `${c.label} · ${c.value}` : c.label}
          </text>
        ),
      });

      // Callout + hover chip at reserved depths (identical convention).
      if (isSel) items.push({ depth: 99, el: callout(`cc${i}`, p.x, p.y - plateH / 2, PART_LABELS.component(c)) });
      if (hovered === i && !isSel) {
        items.push({ depth: 98, el: callout(`hv${i}`, p.x, p.y - plateH / 2, `${c.label} — ${KIND_NAMES[c.kind]}`) });
      }
    });

    items.sort((a, b) => a.depth - b.depth); // far first
    // Settle bounce scales the whole scene about its centre. settleScale
    // is always exactly 1 in controlled mode.
    return (
      <g transform={settleScale === 1 ? undefined : `translate(${cx} ${cy}) scale(${settleScale}) translate(${-cx} ${-cy})`}>
        {items.map((it) => it.el)}
      </g>
    );
  };

  /* ---- 5a continued. GENERIC SHELL RENDER (FROZEN mechanisms) ------- */
  return (
    <div style={styles.root}>
      <h3 style={styles.title}>Electric circuits: series and parallel</h3>
      <p style={styles.subtitle}>
        Current is the rate of flow of charge around a complete conducting loop — how components are connected determines what each one experiences.
      </p>

      {!fixedCircuit && (
        <div style={styles.controlsRow} role="tablist" aria-label="Circuit type">
          {CIRCUITS.map((c) => (
            <button key={c.id} role="tab" aria-selected={c.id === activeId}
              style={{ ...styles.btn, ...(c.id === activeId ? styles.btnActive : {}) }}
              onClick={() => setActiveId(c.id)}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <svg viewBox={`0 0 ${width} ${height}`} style={styles.stage}
        onPointerDown={onPointerDown} onPointerMove={onPointerMove}
        onPointerUp={onPointerUp} onPointerLeave={onPointerUp}
        onClick={controlled ? undefined : onStageClick}
        aria-label={`${circ.name} diagram. Click a component to learn what it does.`}>
        <defs>
          {/* Meter face: glossy dial adapted from the sphere recipe. */}
          <radialGradient id={`${uid}-meter`} cx="33%" cy="27%" r="80%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f2f8f9" />
            <stop offset="100%" stopColor="#d5e5e8" />
          </radialGradient>
          {/* Resistor body: soft metallic teal, linear variant of the
              lighten→base→darken recipe. */}
          <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={lighten(THEME.accent, 0.8)} />
            <stop offset="55%" stopColor={lighten(THEME.accent, 0.55)} />
            <stop offset="100%" stopColor={lighten(THEME.accent, 0.35)} />
          </linearGradient>
          {/* Soft drop shadow — identical recipe to family 1. */}
          <filter id={`${uid}-shadow`} x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="4" floodColor={THEME.shadowInk} floodOpacity="0.28" />
          </filter>
          {/* Aqua glow for the selected component — identical recipe. */}
          <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={THEME.accentBright} floodOpacity="0.9" />
          </filter>
        </defs>
        {renderScene()}
        <text x={12} y={height - 12} fontFamily={THEME.font} fontSize={13}
          fontWeight={800} fill={THEME.accentDeep}>
          {circ.name}
        </text>
      </svg>

      {!controlled && (
        <div style={styles.hint}>
          <span>Drag to tilt · click a component to inspect it</span>
          <button style={{ ...styles.btn, fontSize: 11, padding: "2px 10px" }}
            onClick={() => setSpinning((s) => !s)}>
            {spinning ? "Pause spin" : "Auto-rotate"}
          </button>
        </div>
      )}

      <div style={styles.infoPanel}>
        {circ.readouts.map((r) => (
          <Info key={r.label} label={r.label} value={r.value} />
        ))}
      </div>
      <p style={styles.note}>{circ.note}</p>
      <button style={styles.detailBtn} onClick={() => setShowDetail((d) => !d)}
        aria-expanded={showDetail}>
        {showDetail ? "Hide" : "Why these readings?"}
      </button>
      {showDetail && <div style={styles.detailBox}>{circ.detail}</div>}
    </div>
  );
}

/* ---- small frozen helpers ------------------------------------------ */

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.infoItem}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={styles.infoValue}>{value}</span>
    </div>
  );
}

/** Lighten a #rrggbb colour toward white by t ∈ [0,1]. */
function lighten(hex: string, t: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v: number) => Math.round(v + (255 - v) * t);
  const r = ch((n >> 16) & 255), g = ch((n >> 8) & 255), b = ch(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/** Darken a #rrggbb colour toward black by t ∈ [0,1]. */
function darken(hex: string, t: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v: number) => Math.round(v * (1 - t));
  const r = ch((n >> 16) & 255), g = ch((n >> 8) & 255), b = ch(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/** Black or white label text depending on background luminance. */
function contrastText(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const lum = 0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum > 150 ? "#1e3a42" : "#ffffff";
}
