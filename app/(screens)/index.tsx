import CustomAlert from '@/components/CustomAlert';
import { appColors } from '@/Theme/appTheme';
import { router } from 'expo-router';
import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlayerStore } from '@/global/playersStore';

const { height } = Dimensions.get('window')

export default function HomeScreen() {

  const { setPlayer1Nickname, setPlayer2Nickname } = usePlayerStore()

  const [ user1, setUser1 ] = useState<string>('');
  const [ user2, setUser2 ] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [title, setTitle] = useState<string>('ERROR');
  const [color, setColor] = useState<string>('#BC2C2C');

  const regex: RegExp = /[A-Za-z]{2,6}/;

  const checkUsers = () => {
    if(user1 === '' && user2 == '') {
      setAlertMessage('Both fields are empty!');
      setModalVisible(true);
      return
    }
    if(!regex.test(user1) && !regex.test(user2)) {
      setAlertMessage('Both players are invalid!');
      setModalVisible(true)
      return
    } else if(!regex.test(user1) && regex.test(user2)) {
      setAlertMessage('Player 1 invalid name!')
      setModalVisible(true)
      return
    } else if(regex.test(user1) && !regex.test(user2)) {
      setAlertMessage('Player 2 invalid name!')
      setModalVisible(true)
      return
    }
    if(user1.toLowerCase() === user2.toLowerCase()) {
      setAlertMessage('Players are the same!');
      setTitle('INFO');
      setColor("#FFD966")
      setModalVisible(true);
      return
    }
    setPlayer1Nickname(user1)
    setPlayer2Nickname(user2)
    router.replace('/(screens)/Board')
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: appColors.secondary}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS=== 'ios' ? 'padding': 'height'}>
          <View style={styles.logContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.user1Container}>
                <Text style={styles.title}>Player 1</Text>
                <TextInput 
                  placeholder='Username'
                  placeholderTextColor={'#888'}
                  value={user1}
                  onChangeText={setUser1}
                  style={styles.inputText} 
                  textAlign='center'
                />
              </View>
              <View style={styles.user1Container}>
                <Text style={styles.title}>Player 2</Text>
                <TextInput 
                  placeholder='Username'
                  placeholderTextColor={'#888'}
                  value={user2} 
                  onChangeText={setUser2} 
                  style={styles.inputText} 
                  textAlign='center'/>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.buttonText} 
              onPress={checkUsers}>
              <Text style={[styles.title, {alignSelf: 'center'}]}>Play</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
         <CustomAlert message={alertMessage} visible={modalVisible} title={title} color={color} onClose={() => setModalVisible(false)}/>
    </SafeAreaView>
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
    height: height*0.4,
    width: '90%',
    borderRadius: 30,
    backgroundColor: appColors.main
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  user1Container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 10,
    width: '80%',
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
  buttonContainer: {
    width: '95%',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: appColors.main,
    width: '90%',
    borderRadius: 10,
  }
});
