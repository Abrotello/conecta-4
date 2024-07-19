import { appColors } from '@/Theme/appTheme';
import RectBoard from '@/components/RectBoard';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


interface BoardProps {

}

export default function BoardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <RectBoard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: appColors.main,
  },
});
