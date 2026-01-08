import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Coktail from '../views/Coktail';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeList" component={Home} />
      <Stack.Screen name="CoktailDetail" component={Coktail} />
    </Stack.Navigator>
  );
}
