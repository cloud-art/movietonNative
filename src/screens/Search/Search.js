import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchFilms } from '../../services/MovietonService';
import SearchInput from './components/SearchInput';
import Content from './components/Content';

export default function Search() {
  const dispatch = useDispatch();
  const viewRef = useRef();

  const [keyword, setKeyword] = useState('');

  const pagination = useSelector((state) => state.pagination.page);

  useEffect(() => {
    dispatch(fetchSearchFilms(pagination, keyword));
    viewRef.current.scrollTo(0, 0);
  }, [pagination]);

  return (
    <View ref={viewRef} style={styles.container}>
      <View style={styles.top}>
        <SearchInput keyword={keyword} setKeyword={setKeyword}></SearchInput>
      </View>
      <View style={styles.content}></View>
      <Content></Content>
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
