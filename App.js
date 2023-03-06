import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Discover from './src/screens/Discover';
import ItemScreen from './src/screens/ItemScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TailwindProvider>
   <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Discover" component={Discover} />
        <Stack.Screen  name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
   </NavigationContainer>
    </TailwindProvider>
  );
}


