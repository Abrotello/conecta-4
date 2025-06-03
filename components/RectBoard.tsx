import { appColors } from "@/Theme/appTheme";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { useGameStore } from "@/global/gameStore";
import { checkRows } from "@/utils/helpers";
import { usePlayerStore } from "@/global/playersStore";
import { useState } from "react";
import CustomAlert from "./CustomAlert";
const { width } = Dimensions.get('window')

const rows = 6;
const cols = 7;

export default function RectBoard() {

  const {
    switchTurn,
    board,
    updateBoard,
    currentTurn,
    resetGame
  } = useGameStore.getState();

  const { incrementPlayer1Wins, incrementPlayer2Wins, player1, player2 } = usePlayerStore.getState();
  
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [title, setTitle] = useState<string>('WINNER');
  const [color, setColor] = useState<string>('#BC2C2C');
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleTurns = (colIndex: number) => {
    for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
      if (board[rowIndex][colIndex] === null) {
        const newBoard = [...board];
        const color = currentTurn === 'Player1' ? appColors.player1 : appColors.player2;
        newBoard[rowIndex][colIndex] = { color, player: currentTurn };
        updateBoard(newBoard);
        if(checkRows(currentTurn, rowIndex)) {
          if (currentTurn === 'Player1') {
            incrementPlayer1Wins();
            setAlertMessage(`${player1.nickname} wins!`);
            setModalVisible(true);
          } else {
            incrementPlayer2Wins();
            setAlertMessage(`${player2.nickname} wins!`);
            setModalVisible(true);
          }
          resetGame()
          return
        }
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
                  {chip && <View style={[styles.chip, {backgroundColor: chip.color}]}/>}
                </View>
              </View>
            )
          })}
        </TouchableOpacity>
      ))}
      <CustomAlert message={alertMessage} visible={modalVisible} title="WINNER!" color="#6AA84F" onClose={() => setModalVisible(false)}/>
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

