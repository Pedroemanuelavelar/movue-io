import { Mutations, MutationsInterface } from './types';

export default {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX] (state, index) {
		state.currentChallengeIndex = index;
	},
	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (state, flag) {
		state.isLevelUpModalOpen = flag;
	},
	[Mutations.COMPLETE_CHALLENGE] (state, xpAmount) {
		// Acessando os valores
		const { current, end } = state.xp;
		const currentTotalXp = current + xpAmount;
		const shouldLevelUp = currentTotalXp >= end;

		state.completedChallenges += 1;

		if (shouldLevelUp) {
			state.level += 1;

			const remainingXp = currentTotalXp - end; // Quanto de XP que sobrou
			const experienceToNextLevel = Math.pow((state.level + 1) * 4, 2); // Experiencia para o proximo nivél

			state.xp = {
				current: remainingXp,
				start: 0,
				end: experienceToNextLevel,
			};

			// Se subir de nivél aparece o modal
			state.isLevelUpModalOpen = true;
			return;
		}

		// Caso não up de nivél
		state.xp = {
			...state.xp,
			current: currentTotalXp,
		};
	},
	[Mutations.SAVE_COOKIE_DATA] (state, cookie) {
		state.level = cookie.level; // O level recebe o level que está no cookie
		state.xp = cookie.xp;
		state.completedChallenges = cookie.completedChallenges;
	},
} as MutationsInterface;
