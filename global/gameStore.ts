import { create } from "zustand";

interface GameState {
    gameStarted: boolean,
    setGameStarted: (started: boolean) => void,
    resetGame: () => void,
}

export const useGameStore = create<GameState>((set) => ({
  gameStarted: false,
  setGameStarted: (started) => set({ gameStarted: started }),
  resetGame: () => set({ gameStarted: false }),
}));