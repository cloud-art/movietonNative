import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, SearchStackScreen } from './stacks';
import { useActions } from '../hooks/useActions';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const { setPagination } = useActions();

  const resetPagination = () => {
    setPagination(1);
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        const trackScreenView = () => {
          resetPagination();
        };

        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;

          // Replace the line below to add the tracker from a mobile analytics SDK
          await trackScreenView(currentRouteName);
        }
      }}
    >
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
