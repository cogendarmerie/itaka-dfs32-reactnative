import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import CategoryCoktails from '../views/CategoryCoktails';
import Coktail from '../views/Coktail';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CategoryCoktails" component={CategoryCoktails} />
      <Stack.Screen name="CoktailDetail" component={Coktail} />
    </Stack.Navigator>
  );
}
    