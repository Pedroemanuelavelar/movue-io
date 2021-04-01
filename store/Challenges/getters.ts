import { Getters } from './types';

export default {
	challengesLength: state => state.allChallenges.length,
	currentXpPercentage: (state) => {
		const percentage = (state.xp.current / state.xp.end) * 100;
		return Number(percentage.toFixed(2));
	},
	currentChallenge: state =>
		// if ternário representado pela condição "()", caso ela seja verdadeira executa depois do "?", tendo o  ":" como sendo else
		(typeof state.currentChallengeIndex === 'number')
			? state.allChallenges[state.currentChallengeIndex] // Seleciona o desafio atual
			: null,
} as Getters;
