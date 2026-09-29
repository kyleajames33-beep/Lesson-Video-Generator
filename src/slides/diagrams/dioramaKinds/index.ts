// Merges every lane's diorama kinds into one lookup. Lanes never edit this
// file: it already imports every lane registry, so parallel lanes only touch
// their own lane-*.ts file and their own component files.

import type {DioramaKindMap} from './types';
import {KINDS as K_core} from './lane-core';
import {KINDS as K_chem_y11_m1} from './lane-chem-y11-m1';
import {KINDS as K_chem_y11_m2} from './lane-chem-y11-m2';
import {KINDS as K_chem_y11_m3m4} from './lane-chem-y11-m3m4';
import {KINDS as K_chem_y12_m5} from './lane-chem-y12-m5';
import {KINDS as K_chem_y12_m6} from './lane-chem-y12-m6';
import {KINDS as K_chem_y12_m7} from './lane-chem-y12-m7';
import {KINDS as K_chem_y12_m7b} from './lane-chem-y12-m7b';
import {KINDS as K_chem_y12_m8} from './lane-chem-y12-m8';
import {KINDS as K_bio_y12_m5} from './lane-bio-y12-m5';
import {KINDS as K_bio_y12_m6} from './lane-bio-y12-m6';
import {KINDS as K_bio_y12_m7} from './lane-bio-y12-m7';
import {KINDS as K_bio_y12_m8} from './lane-bio-y12-m8';
import {KINDS as K_handdrawn} from './lane-handdrawn';
import {KINDS as K_bio_y11_m1a} from './lane-bio-y11-m1a';
import {KINDS as K_bio_y11_m1b} from './lane-bio-y11-m1b';
import {KINDS as K_bio_y11_m2a} from './lane-bio-y11-m2a';
import {KINDS as K_bio_y11_m2b} from './lane-bio-y11-m2b';
import {KINDS as K_bio_y11_m3a} from './lane-bio-y11-m3a';
import {KINDS as K_bio_y11_m3b} from './lane-bio-y11-m3b';

const LANES: DioramaKindMap[] = [
	K_core,
	K_chem_y11_m1,
	K_chem_y11_m2,
	K_chem_y11_m3m4,
	K_chem_y12_m5,
	K_chem_y12_m6,
	K_chem_y12_m7,
	K_chem_y12_m7b,
	K_chem_y12_m8,
	K_bio_y12_m5,
	K_bio_y12_m6,
	K_bio_y12_m7,
	K_bio_y12_m8,
	K_handdrawn,
	K_bio_y11_m1a,
	K_bio_y11_m1b,
	K_bio_y11_m2a,
	K_bio_y11_m2b,
	K_bio_y11_m3a,
	K_bio_y11_m3b,
];

export const DIORAMA_KINDS: DioramaKindMap = Object.assign({}, ...LANES);
