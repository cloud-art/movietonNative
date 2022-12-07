import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFilms, getPopularFilms } from '../../services/MovietonService';
import NewFilms from './components/NewFilms';

export default function Homescreen() {
  const [films, setFilms] = useState([]);

  console.log(films);

  useEffect(() => {
    getPopularFilms(1)
      .then((data) => {
        setFilms(data.items.slice());
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <NewFilms
        title={'Популярное'}
        list={[
          { id: '1', nameRu: 'Популярное 1' },
          { id: '2', nameRu: 'Популярное 2' },
          { id: '1', nameRu: 'Популярное 1' },
          { id: '2', nameRu: 'Популярное 2' },
          { id: '1', nameRu: 'Популярное 1' },
          { id: '2', nameRu: 'Популярное 2' }
        ]}
      />
      <NewFilms
        title={'Лучшее за последний год'}
        list={[
          { id: '1', nameRu: 'Лучшее 1' },
          { id: '2', nameRu: 'Лучшее 2' },
          { id: '2', nameRu: 'Лучшее 2' },
          { id: '2', nameRu: 'Лучшее 2' },
          { id: '2', nameRu: 'Лучшее 2' },
          { id: '2', nameRu: 'Лучшее 2' }
        ]}
      />
      <NewFilms
        title={'Релизы'}
        list={[
          { id: '1', nameRu: 'Релиз 1' },
          { id: '1', nameRu: 'Релиз 1' },
          { id: '1', nameRu: 'Релиз 1' },
          { id: '1', nameRu: 'Релиз 1' },
          { id: '1', nameRu: 'Релиз 1' },
          { id: '2', nameRu: 'Релиз 2' }
        ]}
      />
      {films.map((e) => {
        return <Text key={e.kinopoiskId}>{e.nameRu}</Text>;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: '36px' },
  label: { fontWeight: 'bold', fontSize: '24px' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '15px',
    paddingTop: '10px'
  }
});
