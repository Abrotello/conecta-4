import { create } from "zustand";

interface WinsState {
    player1Wins: number,
    player2Wins: number,
    incrementPlayer1Wins: () => void;
    incrementPlayer2Wins: () => void;
    resetWins: () => void,
}

export const useWinsStore = create<WinsState>((set) => ({
  player1Wins: 0,
  player2Wins: 0,
  incrementPlayer1Wins: () => set((state) => ({ player1Wins: state.player1Wins + 1 })),
  incrementPlayer2Wins: () => set((state) => ({ player2Wins: state.player2Wins + 1 })),
  resetWins: () => set({ player1Wins: 0, player2Wins: 0 }),
}));