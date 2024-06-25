import { View, Text, StyleSheet } from 'react-native';

export default function BoardScreen() {
  return (
    <View style={styles.container}>
      <Text>BoardGame</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
