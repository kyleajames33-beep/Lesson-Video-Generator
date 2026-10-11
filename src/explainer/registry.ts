import type {ExplainerConfig} from './types';
import {mouldConfig} from './lessons/mould/config';
import {config_c01} from './lessons/chem-m5-c01/config';
import {config_c02} from './lessons/chem-m5-c02/config';
import {config_b01} from './lessons/bio-m5-b01/config';
import {config_b02a} from './lessons/bio-m5-b02a/config';

export const explainers: ExplainerConfig[] = [mouldConfig, config_c01, config_c02, config_b01, config_b02a];
