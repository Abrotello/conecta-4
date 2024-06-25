import { appColors } from '@/Theme/appTheme';
import RectBoard from '@/components/RectBoard';
import { View, Text, StyleSheet } from 'react-native';

const ROWS: number = 6, COLS: number = 7;



export default function BoardScreen() {
  return (
    // <View style={styles.container}>
    //   <View style={styles.gameContainer}>
    //     <Text>Centrado</Text>
    //   </View>
    // </View>
    <RectBoard />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColors.main
  },
  gameContainer: {

    backgroundColor: appColors.player2
  }
});
