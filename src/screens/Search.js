import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { getFilmsByKeyword } from '../services/MovietonService';
import FilmList from '../components/FilmList';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [films, setFilms] = useState([]);
  const [searchToggle, setSearchToggle] = useState(true);

  const searchHandler = () => {
    setSearchToggle(!searchToggle);
  };

  useEffect(() => {
    getFilmsByKeyword(1, keyword)
      .then((data) => {
        console.log(data);
        setFilms(data.items.slice());
      })
      .catch((err) => console.log(err));
    setKeyword('');
  }, [searchToggle]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput onSubmitEditing={searchHandler} value={keyword} onChangeText={setKeyword} style={styles.searchInput}></TextInput>
        {/* <Button onPress={searchHandler} style={styles.searchSubmit} title="Поиск"></Button> */}
      </View>
      <FilmList style={styles.filmList} filmList={films}></FilmList>
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
