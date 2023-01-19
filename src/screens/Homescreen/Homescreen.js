import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFrontPremieres, fetchGenres, fetchNewFrontFilms, fetchPopularFrontFilms, fetchTopFrontFilms } from '../../services/MovietonService';
import ItemsTail from './components/ItemsTail';

export default function Homescreen() {
  const dispatch = useDispatch();

  const popularFilms = useSelector((state) => state.popularFilms.frontItems);
  const topFilms = useSelector((state) => state.topFilms.frontItems);
  const newFilms = useSelector((state) => state.newFilms.frontItems);

  useEffect(() => {
    dispatch(fetchPopularFrontFilms());
    dispatch(fetchTopFrontFilms());
    dispatch(fetchNewFrontFilms());
  }, []);

  return (
    <View style={styles.container}>
      <ItemsTail title={'Популярное'} films={popularFilms} link={{ screen: 'Populars' }} />
      <ItemsTail title={'Лучшие фильмы'} films={topFilms} link={{ screen: 'TopFilms' }} />
      <ItemsTail title={'Новинки'} films={newFilms} link={{ screen: 'NewFilms' }} />
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
