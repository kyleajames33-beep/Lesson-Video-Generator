// HSC exam skills series kit (s01 onwards). See README notes at the top of each file.
// - theme.ts: colours, ZONE layout (strip, card, box, side column), helpers.
// - text.tsx: T (markup text), measure, wrap, phrase lookup.
// - card.tsx: QuestionCard + annotation layer (Ann), cardGeom / phraseAt / marksAt, MarksBadge, PenTick.
// - answer.tsx: AnswerBox (rows, margin ticks, counter, slots, AAnn incl. cause-effect chain), MarkCounter,
//   LostMarksTag, WeakStrongPanel.
// - board.tsx: RoutineStrip, DrillCountdown, Chip, GreyTag, CrossedHabit, PenArrow, Plate/PlatePair/mkPlate,
//   Heading, HandLine, Flag, Stopwatch, Icon, KeyNotes, Overlay, Fade.
// - lesson.ts: sceneOf/holdOf helpers bound to a measured lesson JSON.
export * from './theme';
export * from './text';
export * from './card';
export * from './answer';
export * from './board';
export * from './lesson';
export * from './plates';
