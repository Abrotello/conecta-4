import { appColors } from '@/Theme/appTheme';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: appColors.main,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen 
        name="index" 
        options={{
          headerTitle: 'Lobby',
        }}
        />
      <Stack.Screen 
        name="Board" 
        options={{
          headerTitle: 'Board Game',
        }}/>
    </Stack>
  );
}
