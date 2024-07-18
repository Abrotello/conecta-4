import { appColors } from '@/Theme/appTheme';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window')

export default function HomeScreen() {

  const [ user1, setUser1 ] = useState<string>('');
  const [ user2, setUser2 ] = useState<string>('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.user1Container}>
              <Text style={styles.title}>Username 1</Text>
              <TextInput value={user1} onChangeText={setUser1} style={styles.inputText} textAlign='center'/>
            </View>
            <View style={styles.user2Container}>
              <Text style={styles.title}>Username 2</Text>
              <TextInput value={user2} onChangeText={setUser2} style={styles.inputText} textAlign='center'/>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonText} onPress={()=> router.navigate('Board')}>
            <Text style={[styles.title, {alignSelf: 'center'}]}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.secondary,
    gap: 50,
  },
  logContainer: {
    height: height-450,
    width: width-50,
    borderRadius: 50,
    backgroundColor: appColors.main
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  user1Container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 10,
    width: width-130,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    letterSpacing: 4,
    fontWeight: '800',
  },
  inputText: {
    fontSize: 25,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    letterSpacing: 2,
    borderRadius: 5,
    width: 'auto',
    height: 40,
  },
  user2Container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 10,
    width: width-130,
  },
  buttonContainer: {
    flex: 0,
    width: width-50,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: appColors.main,
    width: '90%',
    borderRadius: 50,
  }
});
