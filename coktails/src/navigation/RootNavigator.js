import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';

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
          title: 'Catégories',
          tabBarLabel: 'Catégories',
        }}
      />
    </Tab.Navigator>
  );
}
