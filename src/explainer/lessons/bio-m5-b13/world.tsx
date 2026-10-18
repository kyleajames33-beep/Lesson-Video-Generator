// B13 coded world map: a simplified hand-keyed outline (equirectangular, longitude -170 to 180, latitude 80 to -56;
// points read from a standard atlas at low detail), banded HbS allele shading redrawn from the published map
// (Piel et al. 2010, Nature Communications 1:104; bands simplified, see the design) and a hatched layer for historical
// malaria. Bands are clipped to the land. Legend bands are always written, never colour only.
import React from 'react';
import {AMBER, FONT_DISPLAY, INK, INK_SOFT} from '../../kit';

export type LL = [number, number];
export type MapBox = {x: number; y: number; w: number};
export const LON0 = -170, LON1 = 180, LAT0 = 80, LAT1 = -56;
export const mapH = (M: MapBox) => (M.w * (LAT0 - LAT1)) / (LON1 - LON0);
export const proj = (M: MapBox) => ([lon, lat]: LL): [number, number] => {
	const k = M.w / (LON1 - LON0);
	return [M.x + (lon - LON0) * k, M.y + (LAT0 - lat) * k];
};
/** Closed Catmull-Rom path through projected points (soft, hand-drawn edges). */
export const smoothPath = (pts: [number, number][], tension = 0.5) => {
	const n = pts.length;
	if (n < 3) return '';
	let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
	for (let i = 0; i < n; i++) {
		const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
		const t = tension / 3;
		const c1 = [p1[0] + (p2[0] - p0[0]) * t, p1[1] + (p2[1] - p0[1]) * t];
		const c2 = [p2[0] - (p3[0] - p1[0]) * t, p2[1] - (p3[1] - p1[1]) * t];
		d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
	}
	return d + ' Z';
};

// ---------- land (lon, lat) ----------
const AFRICA: LL[] = [[-17, 21], [-16, 28], [-10, 30], [-6, 36], [0, 36], [10, 37], [11, 33], [20, 31], [25, 32], [32, 31], [34, 28], [37, 22], [39, 16], [43, 12], [51, 12], [48, 5], [42, -1], [40, -10], [40, -16], [35, -24], [33, -28], [27, -34], [20, -35], [18, -32], [15, -27], [12, -17], [12, -6], [9, -1], [9, 4], [5, 6], [-1, 5], [-8, 4], [-13, 8], [-17, 14]];
const MADAGASCAR: LL[] = [[44, -25], [47, -25], [50, -15], [49, -12], [44, -17]];
const EURASIA: LL[] = [
	[-9, 37], [-9, 43], [-2, 44], [-1, 46], [-4, 48], [2, 51], [5, 53], [8, 54], [9, 57], [11, 56], [12, 54], [20, 55], [21, 57], [24, 60], [22, 61], [21, 64], [25, 65], [22, 66], [17, 62], [18, 59], [16, 56], [12, 58], [5, 59], [5, 62], [13, 66], [18, 70],
	[28, 71], [33, 69], [41, 67], [45, 68], [55, 69], [60, 70], [70, 73], [80, 73], [100, 77], [112, 74], [130, 72], [140, 72], [160, 70], [170, 70], [180, 68], [180, 65], [170, 60], [162, 57], [156, 51], [156, 57], [160, 61], [150, 59], [143, 59], [135, 55], [141, 52], [140, 48], [135, 43], [130, 42],
	[129, 35], [126, 35], [126, 38], [122, 40], [121, 37], [119, 35], [122, 31], [120, 26], [117, 23], [110, 21], [106, 18], [109, 12], [105, 9], [103, 10], [100, 13], [99, 8], [101, 3], [104, 1.5], [103, 6], [100, 13.5], [98, 16], [94, 17], [92, 22], [89, 22], [86, 20], [80, 15], [80, 10], [77, 8], [74, 14], [73, 20], [70, 22], [67, 25], [62, 25],
	[57, 26], [56, 27], [52, 28], [49, 30], [48, 30], [50, 27], [51, 25], [54, 24], [56, 25], [57, 24], [59, 22], [56, 18], [52, 16], [45, 13], [43, 13], [39, 21], [35, 28], [34, 28], [34, 31], [36, 35], [36, 37], [30, 36], [27, 37], [26, 40], [29, 41], [33, 42], [38, 41], [41, 41], [40, 43], [38, 45], [33, 45], [30, 46], [28, 44], [28, 42],
	[26, 41], [24, 40], [23, 38], [22, 37], [21, 39], [19, 42], [16, 43], [13, 45], [12, 44], [14, 42], [16, 40], [17, 39], [16, 38], [15, 40], [12, 42], [10, 44], [7, 44], [3, 43], [3, 42], [0, 40], [0, 38], [-2, 37], [-5, 36],
];
const BRITAIN: LL[] = [[-5, 50], [1, 51], [2, 53], [-1, 55], [-2, 57], [-4, 59], [-6, 58], [-5, 55], [-3, 54], [-5, 52]];
const IRELAND: LL[] = [[-10, 52], [-6, 52], [-6, 55], [-8, 55], [-10, 54]];
export const ICELAND: LL[] = [[-24.3, 65.5], [-22.4, 66.4], [-20, 66.1], [-18.2, 66.2], [-16, 66.5], [-14.5, 66.1], [-13.6, 65.2], [-14.6, 64.4], [-16.2, 64], [-18.7, 63.4], [-21, 63.8], [-22.7, 63.8], [-22, 64.4], [-24, 64.9], [-22.6, 65.2]];
const JAPAN: LL[] = [[130, 31], [132, 34], [135, 34], [140, 36], [141, 40], [141, 42], [145, 44], [142, 45], [140, 41], [136, 37], [131, 35]];
const SUMATRA: LL[] = [[95, 5], [98, 4], [104, -2], [106, -6], [102, -4], [96, 2]];
const BORNEO: LL[] = [[109, 1], [111, 2], [117, 7], [119, 5], [118, 1], [116, -4], [110, -3]];
const JAVA: LL[] = [[105, -6], [114, -7], [114, -8.5], [106, -7.5]];
const GUINEA: LL[] = [[131, -1], [138, -2], [146, -6], [150, -10], [142, -9], [138, -8], [132, -4]];
const AUSTRALIA: LL[] = [[114, -22], [114, -26], [115, -34], [118, -35], [124, -34], [129, -31], [135, -35], [138, -35], [140, -38], [146, -39], [150, -37], [153, -31], [153, -25], [149, -21], [146, -19], [145, -15], [142, -11], [141, -17], [136, -15], [137, -12], [132, -11], [129, -15], [126, -14], [122, -18]];
export const TASMANIA: LL[] = [[144.6, -40.8], [148.3, -40.9], [148, -43.2], [146.5, -43.6], [145.2, -42.2]];
const NZN: LL[] = [[172.7, -34.4], [175.5, -37], [178.5, -37.7], [176, -41.4], [174.8, -41.3], [173.5, -39]];
const NZS: LL[] = [[172.7, -40.5], [174.3, -41.6], [171.3, -44.4], [169, -46.6], [166.5, -46], [168, -44]];
const NAMERICA: LL[] = [
	[-168, 66], [-162, 70], [-156, 71], [-141, 70], [-128, 70], [-115, 68], [-95, 68], [-85, 70], [-80, 64], [-93, 59], [-92, 57], [-82, 55], [-79, 52], [-77, 59], [-71, 61], [-64, 60], [-62, 57], [-56, 53], [-60, 50], [-66, 49], [-70, 47], [-65, 45], [-70, 43], [-70, 41], [-74, 40], [-76, 37], [-76, 35], [-81, 31], [-80, 26],
	[-81, 25], [-83, 29], [-85, 30], [-90, 29], [-94, 29], [-97, 26], [-97, 22], [-95, 19], [-91, 19], [-90, 21], [-87, 21], [-88, 16], [-84, 15], [-83, 11], [-80, 9], [-77, 8], [-79, 9.5], [-81, 8], [-86, 11], [-88, 13], [-92, 14], [-96, 16], [-105, 20], [-109, 23], [-114, 30], [-117, 32], [-121, 35], [-124, 40], [-124, 46], [-123, 49],
	[-128, 51], [-131, 55], [-135, 58], [-140, 60], [-147, 61], [-152, 59], [-158, 57], [-163, 55], [-158, 58], [-162, 60], [-165, 62], [-165, 65],
];
const GREENLAND: LL[] = [[-73, 78], [-60, 80], [-30, 80], [-20, 79], [-20, 72], [-23, 70], [-32, 68], [-42, 61], [-48, 61], [-53, 66], [-55, 71], [-60, 76]];
const SAMERICA: LL[] = [[-77, 8], [-72, 12], [-64, 10], [-60, 9], [-52, 5], [-50, 1], [-44, -2], [-35, -5], [-35, -9], [-39, -13], [-41, -22], [-48, -26], [-49, -29], [-53, -34], [-58, -35], [-57, -38], [-62, -39], [-65, -42], [-64, -45], [-68, -50], [-69, -52], [-72, -54], [-75, -50], [-74, -44], [-73, -37], [-71, -30], [-70, -18], [-76, -14], [-81, -6], [-80, -1], [-78, 2], [-78, 7]];
export const LAND: LL[][] = [AFRICA, MADAGASCAR, EURASIA, BRITAIN, IRELAND, ICELAND, JAPAN, SUMATRA, BORNEO, JAVA, GUINEA, AUSTRALIA, TASMANIA, NZN, NZS, NAMERICA, GREENLAND, SAMERICA];

// ---------- HbS allele bands (redrawn and simplified; band 1: 1 to 5%, 2: 5 to 10%, 3: over 10%) ----------
export type Band = {band: 1 | 2 | 3; pts: LL[]; region: 'africa' | 'med' | 'mideast' | 'india'};
export const BANDS: Band[] = [
	{band: 1, region: 'africa', pts: [[-17, 18], [-5, 19], [10, 19], [24, 18], [34, 16], [41, 14], [46, 9], [44, 2], [41, -4], [40, -12], [36, -21], [30, -26], [22, -26], [14, -22], [11, -10], [9, -1], [5, 5], [-8, 4], [-14, 8], [-18, 13]]},
	{band: 2, region: 'africa', pts: [[-17, 13], [-10, 15], [0, 15], [15, 14], [25, 13], [35, 10], [40, 4], [40, -6], [38, -14], [32, -18], [22, -18], [13, -16], [12, -6], [9, -1], [9, 4], [-1, 5], [-8, 4], [-13, 8]]},
	{band: 3, region: 'africa', pts: [[-3, 10], [5, 11.5], [15, 10.5], [25, 7], [31, 3], [33, -3], [30, -10], [22, -12], [14, -11], [11, -3], [8, 4], [2, 6], [-3, 6]]},
	{band: 1, region: 'med', pts: [[20.5, 41], [24.5, 41], [27, 38.5], [24, 36.5], [21, 37.5]]},
	{band: 1, region: 'med', pts: [[12.5, 38.5], [16, 39.5], [16.5, 37], [13, 36.8]]},
	{band: 1, region: 'med', pts: [[29, 37.6], [36.5, 37.8], [36.5, 36], [30, 36.4]]},
	{band: 1, region: 'mideast', pts: [[38, 31], [48, 30], [52, 25], [56, 21], [50, 16], [43, 16], [39, 22]]},
	{band: 2, region: 'mideast', pts: [[47, 27.5], [50.5, 26.5], [50, 22], [46, 21.5]]},
	{band: 1, region: 'india', pts: [[70, 24], [78, 26], [86, 24], [86, 19], [80, 13], [76, 12], [72, 18]]},
	{band: 2, region: 'india', pts: [[75, 23], [84, 23.5], [84, 19], [79, 17.5], [75, 19]]},
];
export const BAND_FILL = ['#fffdf8', '#f3dca6', '#e8a75a', '#c4632e'];
export const BAND_TEXT = ['under 1%', '1 to 5%', '5 to 10%', 'over 10%'];

// ---------- historical malaria (hatched; redrawn and simplified) ----------
export type MalZone = {pts: LL[]; region: 'africa' | 'med' | 'asia' | 'americas'};
export const MALARIA: MalZone[] = [
	{region: 'africa', pts: [[-17, 18], [-5, 20], [10, 20], [24, 19], [34, 17], [42, 13], [47, 8], [43, 0], [40, -12], [36, -23], [30, -27], [20, -26], [13, -20], [11, -8], [9, 0], [5, 5], [-8, 4], [-14, 8], [-18, 13]]},
	{region: 'med', pts: [[-8, 38], [10, 40], [20, 42], [30, 38], [36, 34], [40, 30], [30, 31], [10, 34], [-2, 35]]},
	{region: 'asia', pts: [[44, 30], [60, 32], [75, 33], [90, 28], [100, 25], [110, 24], [120, 25], [122, 18], [112, 8], [106, -8], [120, -10], [150, -8], [142, -3], [125, 5], [104, 0], [96, 6], [92, 15], [80, 8], [73, 10], [66, 24], [56, 22], [48, 20], [44, 24]]},
	{region: 'americas', pts: [[-106, 25], [-97, 26], [-90, 19], [-83, 11], [-77, 8], [-62, 9], [-50, 2], [-38, -8], [-42, -22], [-55, -26], [-64, -20], [-75, -10], [-80, -2], [-90, 13], [-100, 18]]},
];

// ---------- the map ----------
export type WorldProps = {
	M: MapBox; id: string; o?: number;
	/** outline draw progress 0..1 */
	outline?: number;
	/** band opacity per band index (0 for none) */
	band?: (b: Band, i: number) => number;
	/** extra glow 0..1 on a band region */
	glow?: (b: Band, i: number) => number;
	/** hatched malaria layer opacity per zone */
	hatch?: (z: MalZone, i: number) => number;
	landFill?: string; stroke?: string; strokeW?: number;
};
export const World: React.FC<WorldProps> = ({M, id, o = 1, outline = 1, band, glow, hatch, landFill = '#fbf6ea', stroke = INK_SOFT, strokeW = 2.5}) => {
	if (o <= 0.01) return null;
	const P = proj(M);
	const land = LAND.map(poly => smoothPath(poly.map(P), 0.35));
	const landD = land.join(' ');
	const hp = 14 * (M.w / 1200);
	return (
		<g opacity={o}>
			<defs>
				<clipPath id={`${id}-land`}><path d={landD} /></clipPath>
				<pattern id={`${id}-hatch`} width={hp} height={hp} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1={0} y1={0} x2={0} y2={hp} stroke="#3d5a7a" strokeWidth={Math.max(1.6, hp * 0.22)} />
				</pattern>
			</defs>
			<path d={landD} fill={landFill} opacity={Math.min(1, outline * 1.4)} />
			<g clipPath={`url(#${id}-land)`}>
				{band ? BANDS.map((b, i) => {
					const bo = band(b, i);
					return bo > 0.01 ? <path key={i} d={smoothPath(b.pts.map(P), 0.5)} fill={BAND_FILL[b.band]} opacity={bo} /> : null;
				}) : null}
				{glow ? BANDS.map((b, i) => {
					const g = glow(b, i);
					return g > 0.01 ? <path key={'g' + i} d={smoothPath(b.pts.map(P), 0.5)} fill="#fff4d0" opacity={0.45 * g} /> : null;
				}) : null}
				{hatch ? MALARIA.map((z, i) => {
					const ho = hatch(z, i);
					return ho > 0.01 ? <path key={'h' + i} d={smoothPath(z.pts.map(P), 0.5)} fill={`url(#${id}-hatch)`} opacity={0.7 * ho} /> : null;
				}) : null}
			</g>
			{land.map((d, i) => <path key={i} d={d} fill="none" stroke={stroke} strokeWidth={strokeW} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - outline} />)}
		</g>
	);
};
/** Outline of one zone or band (for amber rings). */
export const zoneD = (M: MapBox, pts: LL[]) => smoothPath(pts.map(proj(M)), 0.5);
/** Written legend for the bands (swatch plus text). */
export const BandLegend: React.FC<{x: number; y: number; o?: number; size?: number; title?: string}> = ({x, y, o = 1, size = 24, title = 'sickle allele, % of allele copies'}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<text x={x} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{title}</text>
		{BAND_TEXT.map((t, i) => (
			<g key={i} transform={`translate(${x + i * size * 6.2},${y + size * 0.7})`}>
				<rect x={0} y={0} width={size * 1.3} height={size * 1.0} rx={4} fill={BAND_FILL[i]} stroke={INK_SOFT} strokeWidth={1.5} />
				<text x={size * 1.6} y={size * 0.84} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size * 0.92}} fill={INK}>{t}</text>
			</g>
		))}
	</g>
));
void AMBER;
