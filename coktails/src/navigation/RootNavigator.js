import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import FavoritesStackNavigator from './FavoritesStackNavigator';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#756092ff',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStackNavigator}
        options={{
          title: 'Cocktails',
          tabBarLabel: 'Cocktails',
        }}
      />
      <Tab.Screen 
        name="FavoritesTab" 
        component={FavoritesStackNavigator}
        options={{
          title: 'Favoris',
          tabBarLabel: 'Favoris',
        }}
      />
    </Tab.Navigator>
  );
}
