import { appColors } from '@/Theme/appTheme';
import { View, Text, StyleSheet } from 'react-native';

export default function BoardScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF'}}>BoardGame</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.main,
  },
});
