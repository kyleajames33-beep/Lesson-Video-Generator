import type {ComponentType} from 'react';

/** Props every diorama kind receives: its JSON `props`, plus `delay` (frames). */
export type DioramaKindProps = {delay?: number} & Record<string, unknown>;
export type DioramaKindMap = Record<string, ComponentType<any>>;
