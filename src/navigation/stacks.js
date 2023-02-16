import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen/Homescreen';
import Search from '../screens/Search/Search';
import Film from '../screens/Film/Film';
import Populars from '../screens/Populars';
import TopFilms from '../screens/TopFilms';
import NewFilms from '../screens/NewFilms';

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
        component={Film}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Populars"
        component={Populars}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="NewFilms"
        component={NewFilms}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="TopFilms"
        component={TopFilms}
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
        component={Film}
        options={{
          headerShown: false
        }}
      />
    </SearchStack.Navigator>
  );
}

export { HomeStackScreen, SearchStackScreen };
