import { create } from 'zustand'

interface playerNamesState {
  player1: {
    nickname: string;
    wins: number;
  };
  player2: {
    nickname: string;
    wins: number;
  };
  setPlayer1Nickname: (nick: string) => void;
  setPlayer2Nickname: (nick: string) => void;
  incrementPlayer1Wins: () => void;
  incrementPlayer2Wins: () => void;
  resetWins: () => void;
}

export const usePlayerStore = create<playerNamesState>((set) => ({
  player1: { nickname: '', wins: 0 },
  player2: { nickname: '', wins: 0 },

  setPlayer1Nickname: (nick) =>
    set((state) => ({
      player1: {
        ...state.player1,
        nickname: nick,
      },
    })),

  setPlayer2Nickname: (nick) =>
    set((state) => ({
      player2: {
        ...state.player2,
        nickname: nick,
      },
    })),

  incrementPlayer1Wins: () =>
    set((state) => ({
      player1: {
        ...state.player1,
        wins: state.player1.wins + 1,
      },
    })),

  incrementPlayer2Wins: () =>
    set((state) => ({
      player2: {
        ...state.player2,
        wins: state.player2.wins + 1,
      },
    })),

  resetWins: () =>
    set((state) => ({
      player1: { ...state.player1, wins: 0 },
      player2: { ...state.player2, wins: 0 },
    })),
}));
