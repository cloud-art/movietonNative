import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularFilms, fetchPopularFilmsLastYear, fetchReleasedFilms } from '../../services/MovietonService';
import NewFilms from './components/NewFilms';

export default function Homescreen() {
  const dispatch = useDispatch();

  const popularFilms = useSelector((state) => state.popularFilms);
  const popularFilmsLastYear = useSelector((state) => state.popularFilmsLastYear);
  const releasedFilms = useSelector((state) => state.releasedFilms);

  useEffect(() => {
    dispatch(fetchPopularFilms());
    dispatch(fetchPopularFilmsLastYear());
    dispatch(fetchReleasedFilms());
  }, []);

  return (
    <View style={styles.container}>
      <NewFilms title={'Популярное'} list={popularFilms.items} />
      <NewFilms title={'Лучшее за последний год'} list={popularFilmsLastYear.items} />
      <NewFilms title={'Релизы'} list={releasedFilms.items} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: '36px' },
  label: { fontWeight: 'bold', fontSize: '24px' },
  container: {
    overflow: 'scroll',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  }
});
