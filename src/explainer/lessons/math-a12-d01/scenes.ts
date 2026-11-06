import {S1,S2,S3,S4,S5,S6} from './s1-s6';
import {S7,S8,S9,S10} from './s7-s10';
import {S11,S12,S13,S14,S15,S16} from './s11-s16';
export const SCENES = Object.fromEntries([S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16].map((s,i)=>[`scene-${String(i+1).padStart(2,'0')}`,s]));
