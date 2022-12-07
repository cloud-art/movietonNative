import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { getPopularFilms, getPopularFilmsLastYear, getReleasedFilmsLastMonth } from '../../services/MovietonService';
import NewFilms from './components/NewFilms';

export default function Homescreen() {
  const [popularFilms, setPopularFilms] = useState([]);
  const [popularFilmsLastYear, setPopularFilmsLastYear] = useState([]);
  const [releasedFilms, setReleasedFilms] = useState([]);

  console.log(releasedFilms);

  useEffect(() => {
    getPopularFilms(1)
      .then((data) => {
        setPopularFilms(data.items.slice());
      })
      .catch((err) => console.log(err));

    getPopularFilmsLastYear(1)
      .then((data) => {
        setPopularFilmsLastYear(data.items.slice());
      })
      .catch((err) => console.log(err));

    getReleasedFilmsLastMonth(1)
      .then((data) => {
        setReleasedFilms(data.releases.slice());
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <NewFilms title={'Популярное'} list={popularFilms} />
      <NewFilms title={'Лучшее за последний год'} list={popularFilmsLastYear} />
      <NewFilms title={'Релизы'} list={releasedFilms} />
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
