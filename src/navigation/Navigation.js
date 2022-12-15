import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, SearchStackScreen } from './stacks';

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
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E4553',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen
          name="Медиа"
          component={HomeStackScreen}
          options={
            {
              // headerShown: false
            }
          }
        />
        <Tab.Screen
          name="Поиск"
          component={SearchStackScreen}
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
