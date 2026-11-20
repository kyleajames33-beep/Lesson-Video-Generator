// ws-v01's final frame for scene 1, imported read-only from chem-y11-ws-v01 (its SceneHandoff shown frozen on its last
// frame) with its plates added to this lesson's asset list. FF gives the clipboard and question-box geometry that
// scene 1 continues from.
import {SceneHandoff as WsV01Final, FF as WS1_FF} from '../chem-y11-ws-v01/s3';
import {dur as ws1dur} from '../chem-y11-ws-v01/common';
import {ASSETS as WS1_ASSETS} from '../chem-y11-ws-v01/assets';

export const WS1_END = ws1dur('conclusion-handoff') - 1;
export {WsV01Final, WS1_FF, WS1_ASSETS};
