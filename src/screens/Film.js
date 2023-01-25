import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { fetchFilm } from '../services/MovietonService';

const Film = ({ route }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.film);

  useEffect(() => {
    dispatch(fetchFilm(route.params.id));
  }, []);

  return (
    <View style={styles.container}>
      {data.isFetching ? (
        <View style={styles.spinner}>
          <Spinner styles={{ height: '200px' }} />
        </View>
      ) : (
        <>
          <Text style={styles.label}>{data.nameRu}</Text>
          <Image
            style={styles.img}
            source={{
              uri: data.image
            }}
          />
          <View style={styles.filmProps}>
            <Text style={styles.filmPropsLabel}>Оригинальное название</Text>
            <Text style={styles.filmPropsText}>{data.nameOriginal}</Text>
          </View>

          <View style={styles.filmProps}>
            <Text style={styles.filmPropsLabel}>Год</Text>
            <Text style={styles.filmPropsText}>{data.year}</Text>
          </View>

          <View style={styles.filmProps}>
            <Text style={styles.filmPropsLabel}>Рейтинг Кинопоиск</Text>
            <Text style={styles.filmPropsText}>{data.rating}</Text>
          </View>
          <View style={styles.filmProps}>
            <Text style={styles.filmPropsLabel}>Описание</Text>
            <Text style={styles.filmPropsText}>{data.description}</Text>
          </View>
        </>
      )}
    </View>
  );
};

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
  img: { width: '300px', height: '500px', alignSelf: 'center', marginBottom: '3px' },
  label: { fontSize: '48px', alignSelf: 'center', textAlign: 'center' },
  filmProps: { marginLeft: '20px' },
  filmPropsLabel: { padding: '5px', fontSize: '32px', fontWeight: 'bold' },
  filmPropsText: { fontSize: '24px' },
  spinner: { alignSelf: 'center' }
});

export default Film;
