import type {ExplainerConfig} from './types';
import {mouldConfig} from './lessons/mould/config';
import {config_c01} from './lessons/chem-m5-c01/config';
import {config_c02} from './lessons/chem-m5-c02/config';
import {config_c03} from './lessons/chem-m5-c03/config';
import {config_c04a} from './lessons/chem-m5-c04a/config';
import {config_c04b} from './lessons/chem-m5-c04b/config';
import {config_g01} from './lessons/chem-m5-g01/config';
import {config_b01} from './lessons/bio-m5-b01/config';
import {config_b02a} from './lessons/bio-m5-b02a/config';
import {config_b02b} from './lessons/bio-m5-b02b/config';
import {config_b02c} from './lessons/bio-m5-b02c/config';
import {config_b03a} from './lessons/bio-m5-b03a/config';
import {config_b03a2} from './lessons/bio-m5-b03a2/config';

export const explainers: ExplainerConfig[] = [mouldConfig, config_c01, config_c02, config_c03, config_c04a, config_c04b, config_g01, config_b01, config_b02a, config_b02b, config_b02c, config_b03a, config_b03a2];
