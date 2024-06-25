import { appColors } from '@/Theme/appTheme';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, Platform, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import DropwDownPicker from 'react-native-dropdown-picker'
import RectBoard from '@/components/RectBoard';

const { height, width } = Dimensions.get('window')

export default function HomeScreen() {

  const [ text, setText ] = useState<string>('');
  const [ difficult, setDifficult ] = useState('easy');
  const [ open, setOpen ] = useState(false);
  const [ items, setItems ] = useState([
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' }
  ]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.userContainer}>
              <Text style={styles.title}>Username</Text>
              <TextInput value={text} onChangeText={setText} style={styles.inputText} textAlign='center'/>
            </View>
            <View style={styles.difficultContainer}>
              <Text style={styles.title}>Difficulty</Text>
              <DropwDownPicker 
                open={open}
                value={difficult}
                items={items}
                setOpen={setOpen}
                setValue={setDifficult}
                setItems={setItems}
                textStyle={styles.pickerText}
              />  
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
            <View style={{ alignItems: 'flex-end', right: 15, }}>
              {
                <Link href={'/Board'} style={styles.buttonText} onPress={() => {setText(''), setDifficult('easy')}}>Play</Link>
              }
          </View>
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
  userContainer: {
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
  difficultContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 10,
    width: width-130,
  },
  pickerText: {
    fontSize: 25,
    color: '#000',
    textAlign: 'left',
  },
  buttonContainer: {
    flex: 0,
    width: width-50,
  },
  buttonText: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: '#FFF'
  }
});
