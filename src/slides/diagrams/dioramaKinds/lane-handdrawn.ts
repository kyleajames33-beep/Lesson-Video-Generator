// Diorama kinds owned by the "handdrawn" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Hand-drawn stop-motion kinds are prefixed
// `hd`. See docs/hand-drawn-style.md.

import type {DioramaKindMap} from './types';
import {HdActionPotential} from '../kinds/handdrawn/HdActionPotential';
import {HdMitosis} from '../kinds/handdrawn/HdMitosis';
import {HdDnaReplication} from '../kinds/handdrawn/HdDnaReplication';
import {HdCollisionTheory} from '../kinds/handdrawn/HdCollisionTheory';
import {HdDissolvingSalt} from '../kinds/handdrawn/HdDissolvingSalt';

export const KINDS: DioramaKindMap = {
  hdActionPotential: HdActionPotential,
  hdMitosis: HdMitosis,
  hdDnaReplication: HdDnaReplication,
  hdCollisionTheory: HdCollisionTheory,
  hdDissolvingSalt: HdDissolvingSalt,
};
