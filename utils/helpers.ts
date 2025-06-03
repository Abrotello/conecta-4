import { useGameStore } from "@/global/gameStore";

type Board = (null | string)[][];
type Player = 'Player1' | 'Player2';

export function checkRows(player: Player, row: number) {
    const { board } = useGameStore.getState();
    // board[row][columna que se itera]
    let count = 0;
    for (let col = 0; col < board[row].length; col++) {
        if (count == 4) return true
        
        if(board[row][col]?.player == player) {
            count++;
        } else {
            count = 0;
        }
    }
    return false
}

function checkColumns(board: Board, player: Player, column: number) {
    // board[filas que se itera][column]

}

function checkDiagonals(board: Board, player: Player) {

}