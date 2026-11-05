// M7 B11 quality fix (6 Nov 2026): the two exam items with their givens drawn in a right-hand column as they are read
// (the question text narrows to 1060 px), and short key notes with the framed memory aid. Question text, cues, the
// pause line and the 10 s countdown are unchanged from s3.
import React from 'react';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {hold} from './common';
import {CardBox} from './parts';
import {DEM1, DEM2, KA, KC, STEM1, STEM2} from './s3';
import type {T1, T2} from './s3';
import {ItemOnePicture, ItemTwoPicture, NOTES_BIG} from './big';

export const SceneAttemptBig: React.FC = () => {
	const t: T1 = {a: KA.virus, b: KA.human, c: KA.drug, d: KA.patient, q: KA.explain};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1060} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={640} w={1060} size={36} card={false} />
				<AnsBox x={140} y={790} w={1060} h={210} at={KA.explain + 30} />
				<ItemOnePicture virus={KA.virus} poly={KA.virus + 30} human={KA.human} drug={KA.drug} patient={KA.patient} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

export const SceneAttemptTwoBig: React.FC = () => {
	const t: T2 = {a: KC.untreated, b: KC.about, c: KC.same, d: KC.arises - 20, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={250} w={1060} size={36} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={660} w={1060} size={36} card={false} />
				<AnsBox x={140} y={800} w={1060} h={200} at={KC.explain + 30} />
				<ItemTwoPicture tenB={KC.untreated} one={KC.about} same={KC.same} sep={KC.arises} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

export const SceneNotesBig: React.FC = () => (
	<NotesBoard notes={NOTES_BIG} aid="Antivirals block a step the virus needs. The drug selects resistance; it doesn't create it." tag="Selective toxicity: harm the pathogen much more than the host." size={34} aidTop={690} />
);
