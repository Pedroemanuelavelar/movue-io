import { MutationTree } from 'vuex';

export interface XP {
	current: number;// XP atual
	start: number;// XP inicial
	end: number;// XP final
}

export interface Challenge {
	type: string;
	description: string;
	amount: number;
}

export interface Cookie {
	level: number;
	xp: XP;
	completedChallenges: number;
}

export interface State {
	level: number;
	xp: XP;
	completedChallenges: number;
	currentChallengeIndex: number | null;// Indice do array de desafios
	isLevelUpModalOpen: boolean;
	allChallenges: Challenge[];
}

export interface Getters {
	challengesLength: (state: String) => number;
	currentXpPercentage: (state: String) => number;
	currentChallenge: (state: String) => Challenge | null;// Qual o desafio atual
}

export enum Mutations {
	SET_CURRENT_CHALLENGE_INDEX = 'SET_CURRENT_CHALLENGE_INDEX', // Responsavél por setar qual o valor do indice de desafio atual
	SET_IS_LEVEL_UP_MODAL_OPEN = 'SET_IS_LEVEL_UP_MODAL_OPEN', // Responsavél por modificar o estado da modal se ela está aberta ou não
	COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE', // Mutation responsavél por completar um desafio
	SAVE_COOKIE_DATA = 'SAVE_COOKIE_DATA', // Mutation responsavél por salvar os dados nos cookies
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX] (s: State, p: number): void;
	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (s: State, p: boolean): void;
	[Mutations.COMPLETE_CHALLENGE] (s: State, p: number): void;
	[Mutations.SAVE_COOKIE_DATA] (s: State, p: Cookie): void;
}
