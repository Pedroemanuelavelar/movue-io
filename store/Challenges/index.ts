// Importando todos os challenges
import allChallenges from '~/assets/challenges/data';

// Importanto o tipo State
import { State } from './types';

export const state = (): State => ({
	level: 1,
	// XP inicial
	xp: {
		current: 0,
		start: 0,
		end: 64,
	},
	completedChallenges: 0,
	currentChallengeIndex: null,
	isLevelUpModalOpen: false,
	allChallenges,
});
