import { appColors } from "@/Theme/appTheme";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { useGameStore } from "@/global/gameStore";
const { width } = Dimensions.get('window')

const rows = 6;
const cols = 7;

export default function RectBoard() {

  const {
    switchTurn,
    board,
    updateBoard,
    currentTurn
  } = useGameStore.getState();

  const handleTurns = (colIndex: number) => {
    for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
      if (board[rowIndex][colIndex] === null) {
        const newBoard = [...board];
        const color = currentTurn === 'Player1' ? appColors.player1 : appColors.player2;
        newBoard[rowIndex][colIndex] = color;
        updateBoard(newBoard);
        switchTurn();
        break;
      }
    }
  }

  return (
    <View style={styles.board}>
      {Array.from({ length: cols }).map((_, colIndex) => (
        <TouchableOpacity
          key={colIndex}
          style={styles.column}
          activeOpacity={0.6}
          onPress={() => handleTurns(colIndex)}
        >
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const chip = board[rowIndex][colIndex]
            return (
              <View key={rowIndex} style={styles.cell}>
                <View style={styles.circle}>
                  {chip && <View style={[styles.chip, {backgroundColor: chip}]}/>}
                </View>
              </View>
            )
          })}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  column: {
    flexDirection: 'column',
  },
  cell: {
    width: width / cols,
    height: (width / rows),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.main,
  },
  circle: {
    width: (width / cols - 10),
    height: (width / cols - 10),
    backgroundColor: appColors.secondary,
    borderRadius: 50,
  },
  chip: {
    width: (width / cols - 10),
    height: (width / cols - 10),
    borderRadius: 50,
  }
});

