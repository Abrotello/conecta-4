import { create } from 'zustand'

interface playerNamesState {
    player1: string,
    player2: string,

    setPlayer1: (name: string) => void,
    setPlayer2: (name: string) => void,
}

export const usePlayerStore = create<playerNamesState>((set) => ({
    player1: '',
    player2: '',
    setPlayer1: (player1) => set({player1}),
    setPlayer2: (player2) => set({player2}),

}));