import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, fetchSearchFilms } from '../../services/MovietonService';
import SearchInput from './components/SearchInput';
import Filters from '../../components/Filters/Filters';
import Content from '../../components/Content';

export default function Search() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');

  const data = useSelector((state) => state.searchFilms);
  const filters = useSelector((state) => state.filters);
  const pagination = useSelector((state) => state.pagination.page);

  const handleSearch = () => {
    dispatch(fetchSearchFilms(filters, pagination, keyword));
  };

  useEffect(() => {
    handleSearch();
  }, [pagination, filters]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SearchInput keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}></SearchInput>
        <Filters></Filters>
      </View>
      <Content data={data}></Content>
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
  top: { display: 'flex', flexDirection: 'column', width: '100%' }
});
