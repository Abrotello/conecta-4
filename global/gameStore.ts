import { create } from "zustand";

interface GameState {
    currentTurn: 'Player1' | 'Player2',
    board: (null | string)[][],
    updateBoard: (newBoard: (null | string)[][]) => void,
    switchTurn: () => void,
    resetGame: () => void,
}

export const useGameStore = create<GameState>((set) => ({
    currentTurn: "Player1",
    board: Array.from({ length: 6 }, () => Array(7).fill(null)),

    updateBoard: (newBoard) =>
        set({ board: newBoard }),

    switchTurn: () => {
        set((state) => ({
            currentTurn: state.currentTurn === 'Player1' ? 'Player2' : 'Player1'
        }));
    },

    resetGame: () =>
        set((state) => ({
            currentTurn: 'Player1',
            board: Array.from({ length: 6 }, () => Array(7).fill(null))
        }))
}));
