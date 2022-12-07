import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen/Homescreen';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Медиа') {
              iconName = focused ? 'ios-film' : 'ios-film-outline';
            } else if (route.name === 'Поиск') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Профиль') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E4553',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen
          name="Медиа"
          component={Homescreen}
          options={
            {
              // headerShown: false
            }
          }
        />
        <Tab.Screen
          name="Поиск"
          component={Search}
          options={
            {
              // headerShown: false
            }
          }
        />
        <Tab.Screen
          name="Профиль"
          component={Profile}
          options={
            {
              // headerShown: false
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
