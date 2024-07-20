import { appColors } from '@/Theme/appTheme';
import RectBoard from '@/components/RectBoard';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';

export default function BoardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        
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
    backgroundColor: appColors.main,
  },
  logContainer: {
    flex: 1,
  },
  boardContainer: {
    flex: 1,
  }
});
