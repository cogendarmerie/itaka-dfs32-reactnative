import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../views/Favorites';
import Coktail from '../views/Coktail';

const Stack = createNativeStackNavigator();

export default function FavoritesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FavoritesList" component={Favorites} />
      <Stack.Screen name="CoktailDetail" component={Coktail} />
    </Stack.Navigator>
  );
}
