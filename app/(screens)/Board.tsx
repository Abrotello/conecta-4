import { appColors } from '@/Theme/appTheme';
import RectBoard from '@/components/RectBoard';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native';

export default function BoardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <View style={styles.winContainer}>
          <Text style={styles.winText}>Wins</Text>
        </View>
        <View style={styles.playersInfoContainer}>
          <View style={styles.playersContainer}>
            <Text style={styles.playersText}>Player 1</Text>
            <Text style={styles.playersText}>Player 2</Text>
          </View>
          <View style={styles.counterContainer}>
            <Text style={styles.playersText}>1</Text>
            <Text style={styles.playersText}>2</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, {backgroundColor: appColors.main}]}
            onPress={() => {console.log('Restart game')}}
          >
            <Text style={styles.buttonText}>Restart game</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, {backgroundColor: appColors.player1}]}
            onPress={() => {console.log('Reset wins')}}
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
  playersText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  }
});
