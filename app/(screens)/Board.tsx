import { appColors } from '@/Theme/appTheme';
import RectBoard from '@/components/RectBoard';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native';
import { usePlayerStore } from '@/global/playersStore';
import { useGameStore } from '@/global/gameStore';

export default function BoardScreen() {

  const { player1, player2, resetWins } = usePlayerStore()
  const { resetGame, currentTurn } = useGameStore();

  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <View style={styles.winContainer}>
          <Text style={styles.winText}>Wins</Text>
        </View>
        <View style={styles.playersInfoContainer}>
          <View style={styles.playersContainer}>
            <Text style={[styles.player1Text, {backgroundColor: currentTurn === 'Player1' ? appColors.opactiyPlayer1 : ""}]}>{player1.nickname}</Text>
            <Text style={[styles.player2Text, {backgroundColor: currentTurn === 'Player2' ? appColors.opactiyPlayer2 : ""}]}>{player2.nickname}</Text>
          </View>
          <View style={styles.counterContainer}>
            <Text style={styles.conterText}>{player1.wins}</Text>
            <Text style={styles.conterText}>{player2.wins}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, {backgroundColor: appColors.main}]}
            onPress={resetGame}
          >
            <Text style={styles.buttonText}>Restart game</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, {backgroundColor: appColors.player1}]}
            onPress={resetWins}
          >
            <Text style={styles.buttonText}>Reset wins</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boardContainer}>
        <RectBoard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.secondary,
  },
  logContainer: {
    flex: 1,
    marginTop: 20,
  },
  winContainer: {
    flex: 0.5,
    paddingRight: 20,
    alignItems: 'flex-end',
    // backgroundColor: appColors.secondary
  },
  playersInfoContainer: {
    flex: 2,
    flexDirection: 'row',
    // backgroundColor: appColors.player1
  },
  playersContainer: {
    flex: 2,
    paddingLeft: 20,
    justifyContent: 'space-around',
    // backgroundColor: appColors.player1
  },
  counterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: appColors.player2
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: appColors.player1
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    width: 150,
  },
  boardContainer: {
    flex: 1.7,
    justifyContent: 'center',
    // backgroundColor: appColors.player2
  },
  winText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 5
  },
  player1Text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
    player2Text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  conterText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  focus: {
    backgroundColor: appColors.main,
    padding: 5,
  }
});
