/**
 * M6 P01 (Biology practical: UV exposure and yeast survival) plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files in public/assets/biology/.
 * - Brief 98: the closed UV cabinet (door shut, no light), the five sealed yeast plates (plate 2 of each set: 144, 97,
 *   61, 24 and 5 colonies), the selective plate (three colonies), the micropipette with spreader and tube, the
 *   autoclave bag. All six dishes share one 2000 x 2000 canvas and one box, so they swap and cross-fade in place.
 * - Reused: blank agar dish (b01), budding yeast (Year 11).
 * - Never used: m6-uv-cabinet-v1.png (open door, lit lamp), the velvet block, the bacterial antibiotic plates.
 * - Anchor points (natural pixels) found from the files: 120 s plate colonies, selective plate colonies, a set of
 *   0 s colony centres (scene 2's spread cells grow into them), 30 s colonies for the tally run, the cabinet latch,
 *   display and indicator lights, the micropipette tip and the suspension tube.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];
const DISH: [number, number, number, number] = [200, 215, 1799, 1784];

export const PLATES = {
	p000: mk('m6-yeast-plate-000s-v1.png', N2, DISH),
	p015: mk('m6-yeast-plate-015s-v1.png', N2, DISH),
	p030: mk('m6-yeast-plate-030s-v1.png', N2, DISH),
	p060: mk('m6-yeast-plate-060s-v1.png', N2, DISH),
	p120: mk('m6-yeast-plate-120s-v1.png', N2, DISH),
	selective: mk('m6-yeast-selective-plate-v1.png', N2, DISH),
	agar: mk('m6-agar-dish-top-v1.png', N2, [200, 215, 1799, 1784]),
	cabinet: mk('m6-uv-cabinet-closed-v1.png', N2, [456, 659, 1543, 1340]),
	pipette: mk('m6-micropipette-spreader-v1.png', N2, [295, 519, 1705, 1482]),
	bag: mk('m6-autoclave-bag-plates-v1.png', N2, [569, 456, 1430, 1544]),
	yeast: mk('y11-budding-yeast-v1.png', [1374, 1145], [252, 253, 1138, 914]),
};
export const PLATE_BY_TIME = [PLATES.p000, PLATES.p015, PLATES.p030, PLATES.p060, PLATES.p120];

/** The five colonies on the 120 s plate (natural pixels). */
export const C120: [number, number][] = [[1310, 504], [1575, 935], [718, 812], [625, 986], [1404, 1393]];
/** The three colonies on the selective plate. */
export const CSEL: [number, number][] = [[1279, 694], [1432, 894], [917, 1322]];
/** A run of 30 s colonies for the tally marks (scene 12). */
export const C030: [number, number][] = [[754, 391], [962, 452], [801, 465], [1175, 548], [706, 591], [609, 596], [752, 660], [1102, 673], [968, 725], [809, 727], [640, 767], [795, 860], [894, 873], [1055, 895]];
/** 0 s colony centres (scene 2: the spread cells sit where these colonies grow). */
const RAW000: [number, number][] = [[1124,327],[1271,358],[602,432],[922,348],[1027,374],[772,408],[639,422],[1092,426],[1370,433],[858,438],[1230,452],[509,488],[712,464],[1024,484],[1319,499],[944,499],[1116,504],[621,537],[1495,540],[1416,551],[810,558],[534,566],[1170,569],[942,580],[1078,590],[448,600],[389,623],[1561,619],[613,625],[747,627],[1308,640],[1216,647],[839,671],[1394,679],[484,682],[1508,683],[1046,693],[933,695],[1127,715],[702,735],[1589,739],[780,747],[553,754],[1264,765],[373,771],[1371,778],[869,780],[952,782],[1047,782],[462,801],[608,818],[1489,821],[1617,826],[691,826],[1147,843],[1297,849],[984,858],[1388,877],[1071,881],[383,892],[840,897],[753,896],[538,899],[1564,906],[1167,932],[1657,932],[1333,941],[469,950],[1016,953],[1496,961],[681,978],[336,988],[1241,991],[842,1016],[535,1018],[1628,1024],[1339,1029],[1139,1034],[757,1046],[1474,1048],[1058,1066],[402,1072],[929,1074],[1548,1079],[494,1104],[1395,1101],[1300,1105],[810,1111],[587,1115],[675,1117],[1207,1122],[1120,1126],[334,1138],[983,1135],[1469,1135],[1610,1164],[1341,1178],[449,1185],[1194,1198],[1067,1203],[884,1202],[654,1212],[977,1214],[379,1219],[1439,1238],[1570,1242],[793,1253],[1287,1255],[538,1256],[913,1288],[1088,1291],[463,1293],[656,1297],[1003,1305],[1516,1308],[1215,1329],[1398,1330],[548,1352],[769,1360],[950,1370],[446,1372],[1284,1389],[1549,1386],[1451,1396],[1085,1401],[1201,1407],[875,1408],[688,1408],[1362,1418],[608,1440],[521,1457],[795,1474],[1054,1492],[1180,1494],[931,1494],[1286,1497],[679,1514],[1403,1519],[753,1543],[868,1570],[1108,1587],[691,1593],[1247,1598],[980,1634],[1178,1635],[894,1647]];
export const C000: [number, number][] = RAW000.filter(([u, v]) => (u - 1000) ** 2 + (v - 1000) ** 2 < 670 ** 2);
/** Two empty agar spots on the 0 s plate (scene 2: cells that cannot divide stay as grey dots). */
export const GREY000: [number, number][] = [[1440, 1280], [700, 1180]];
/** Empty agar points on the 120 s plate for the magnifier sweep. */
export const EMPTY120: [number, number][] = [[1000, 1100], [800, 1350], [1150, 800], [950, 650]];
/** Cabinet anchors (natural pixels). */
export const CAB = {latch: [1401, 1014] as [number, number], display: [1468, 807] as [number, number], light1: [1468, 874] as [number, number], light2: [1468, 924] as [number, number]};
/** Micropipette plate anchors. */
export const PIP = {tube: [1475, 1000] as [number, number], pipette: [520, 1000] as [number, number], tip: [330, 1440] as [number, number]};

export const ASSETS_P01B: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
