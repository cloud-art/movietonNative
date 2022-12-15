import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen/Homescreen';
import Search from '../screens/Search';
import FilmScreen from '../screens/FilmScreen';
import FilmListScreen from '../screens/FilmListScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Homescreen}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Film"
        component={FilmScreen}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="FilmList"
        component={FilmListScreen}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false
        }}
      />
      <SearchStack.Screen
        name="Film"
        component={FilmScreen}
        options={{
          headerShown: false
        }}
      />
    </SearchStack.Navigator>
  );
}

export { HomeStackScreen, SearchStackScreen };
