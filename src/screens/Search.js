import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';

import FilmList from '../components/FilmList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchFilms } from '../services/MovietonService';

export default function Search() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');
  const [searchToggle, setSearchToggle] = useState(true);
  const searchFilms = useSelector((state) => state.searchFilms);
  const searchHandler = () => {
    setSearchToggle(!searchToggle);
  };

  useEffect(() => {
    dispatch(fetchSearchFilms(keyword));
  }, [searchToggle]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput onSubmitEditing={searchHandler} value={keyword} onChangeText={setKeyword} style={styles.searchInput}></TextInput>
      </View>
      <FilmList style={styles.filmList} filmList={searchFilms.items}></FilmList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  },
  top: { display: 'flex', flexDirection: 'column', width: '100%' },
  filmList: { alignSelf: 'center' },
  searchInput: { height: '70px', width: '100%', paddingLeft: '10px', paddingRight: '10px', marginRight: '5px', marginBottom: '5px', borderColor: '0A1C34', borderWidth: '1px' }
});
