// The joins, imported read-only. Opening: ws-v02's final frame (its SceneHandoff shown frozen on its last frame), with
// its layout and plan wording so scene 1 can continue from it. Ending: chem-y11-m1-v11's opening frame
// (WsV03FinalFrame and its pieces), which scene 15 builds to and the key notes cross-fade back to.
import {HANDOFF_LAYOUT as WS2_HL, SceneHandoff as WsV02Final} from '../chem-y11-ws-v02/s3';
import {fullSecs as ws2FullSecs} from '../chem-y11-ws-v02/s2';
import {dur as ws2dur} from '../chem-y11-ws-v02/common';
import {FBlock, QCell, SpdfColumn, WS_NEXT, WS_PT, WsV03FinalFrame, wsSym, Letter} from '../chem-y11-m1-v11/parts';

export const WS2_END = ws2dur('conclusion-handoff') - 1;
export {WS2_HL, WsV02Final, ws2FullSecs, FBlock, QCell, SpdfColumn, WS_NEXT, WS_PT, WsV03FinalFrame, wsSym, Letter};
