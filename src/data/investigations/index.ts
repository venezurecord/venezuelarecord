// Registry of original investigations, newest first. Each one has its own view in src/views/investigations/.
import { localePath, type Lang } from '../../i18n/ui';
import { META as whoCommands } from './who-commands-venezuela-2026';
import { META as residualCapacity } from './residual-capacity-2026';
import type { InvestigationMeta } from './types';

export const INVESTIGATIONS: InvestigationMeta[] = [residualCapacity, whoCommands];

export const investigationUrl = (lang: Lang, slug: string) => localePath(lang, `/investigations/${slug}/`);
