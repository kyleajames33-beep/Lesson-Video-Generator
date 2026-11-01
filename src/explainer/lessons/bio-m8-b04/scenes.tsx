import React from 'react';
import {Hook,Concentration,Nephron,Release,Aquaporins} from './s1';
import {Closes,Reverse,Aldosterone,Memory} from './s2';
import {Attempt,Feedback1,Attempt2,Feedback2,Decision,Notes} from './s3';
export const SCENES:Record<string,React.FC>={hook:Hook,concentration:Concentration,nephron:Nephron,'adh-release':Release,aquaporins:Aquaporins,'loop-closes':Closes,reverse:Reverse,aldosterone:Aldosterone,memory:Memory,attempt:Attempt,'feedback-one':Feedback1,'attempt-two':Attempt2,'feedback-two':Feedback2,'decision-rule':Decision,'key-notes':Notes};
