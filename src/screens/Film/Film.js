import { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import { fetchFilm } from '../../services/MovietonService';
import FilmInfo from './components/FilmInfo';

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
        <FilmInfo nameOriginal={data.nameOriginal} nameRu={data.nameRu} image={data.image} year={data.year} rating={data.rating} description={data.description}></FilmInfo>
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
  spinner: { alignSelf: 'center' }
});

export default Film;
