import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';

import Pagination from '../components/Pagination';
import FilmList from '../components/FilmList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchFilms } from '../services/MovietonService';
import { useActions } from '../hooks/useActions';

export default function Search() {
  const dispatch = useDispatch();
  const viewRef = useRef();
  const pagination = useSelector((state) => state.pagination.page);

  const { setPagination } = useActions();

  const [keyword, setKeyword] = useState('');
  const searchFilms = useSelector((state) => state.searchFilms);
  const searchHandler = () => {
    dispatch(fetchSearchFilms(pagination, keyword));
  };

  const handleClickNext = () => {
    setPagination(Number(pagination + 1));
    window.scrollTo(0, 0);
  };
  const handleClickBefore = () => {
    setPagination(pagination - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchSearchFilms(pagination, keyword));
    viewRef.current.scrollTo(0, 0);
  }, [pagination]);

  return (
    <View ref={viewRef} style={styles.container}>
      <View style={styles.top}>
        <TextInput onSubmitEditing={searchHandler} value={keyword} onChangeText={setKeyword} style={styles.searchInput}></TextInput>
      </View>
      <FilmList style={styles.filmList} filmList={searchFilms.items}></FilmList>
      <View style={styles.bottom}>
        <Pagination pagination={pagination} handleClickNext={handleClickNext} handleClickBefore={handleClickBefore}></Pagination>
      </View>
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
  searchInput: { height: '70px', width: '100%', paddingLeft: '10px', paddingRight: '10px', marginRight: '5px', marginBottom: '5px', borderColor: '0A1C34', borderWidth: '1px' },
  bottom: { alignSelf: 'center' }
});
