import type {DiagramConfig} from '../../lesson/types';

// Estimates a diagram's natural rendered height so a slide can scale it into a
// fixed slot. Pure function of the config — no DOM measurement — so the result
// is identical on every frame and every re-render (contract §4, deterministic
// rendering). The estimate is deliberately slightly pessimistic: over-estimating
// height shrinks the diagram a little, which is safe, whereas under-estimating
// lets it overlap the content below.
//
// Metrics below mirror `.diagram-compact .table-cell` in styles.css. Keep the
// two in sync if either changes.

const CELL_GAP = 10;
const CELL_PAD_X = 14;
const CELL_PAD_Y = 10;
const CELL_MIN_HEIGHT = 48;
const BODY_FONT = 24;
const HEADER_FONT = 20;
const LINE_HEIGHT = 1.12;

// Mean advance width per character as a fraction of font size, for the display
// face at semibold. Close enough to pick a line count.
const CHAR_ADVANCE = 0.58;

const lineCount = (text: string, fontSize: number, boxWidth: number) =>
	Math.max(1, Math.ceil((text.length * fontSize * CHAR_ADVANCE) / Math.max(1, boxWidth)));

const tableHeight = (headers: string[], rows: string[][], width: number) => {
	const columns = Math.max(headers.length, ...rows.map((r) => r.length), 1);
	// Track sizing mirrors TableReveal: `0.72fr` then `1.28fr` per extra column.
	const totalFr = 0.72 + 1.28 * (columns - 1);
	const trackSpace = width - CELL_GAP * (columns - 1);
	const columnWidth = (index: number) => ((index === 0 ? 0.72 : 1.28) / totalFr) * trackSpace;

	const rowHeight = (cells: string[], fontSize: number) => {
		const lines = cells.reduce(
			(most, cell, index) => Math.max(most, lineCount(cell, fontSize, columnWidth(index) - CELL_PAD_X * 2)),
			1
		);
		return Math.max(CELL_MIN_HEIGHT, lines * fontSize * LINE_HEIGHT + CELL_PAD_Y * 2);
	};

	const heights = [rowHeight(headers, HEADER_FONT), ...rows.map((row) => rowHeight(row, BODY_FONT))];
	return heights.reduce((total, h) => total + h, 0) + CELL_GAP * (heights.length - 1);
};

export const diagramNaturalHeight = (diagram: DiagramConfig, width: number): number => {
	if (diagram.type === 'table') return tableHeight(diagram.headers, diagram.rows, width);
	// DataChart renders at its fixed 520×320 default.
	if (diagram.type === 'barChart') return 320;
	// Coded SVG diagrams are authored to a ~720×440 viewBox and scale with width.
	return width * (440 / 720);
};

/** Scale factor that fits `diagram` into `availableHeight`, never magnifying. */
export const diagramSlotScale = (diagram: DiagramConfig, width: number, availableHeight: number): number =>
	Math.min(1, availableHeight / diagramNaturalHeight(diagram, width));
