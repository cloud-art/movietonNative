import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const FilmScreen = ({ route }) => {
  const [filmInfo, setFilmInfo] = useState('undefined');

  useEffect(() => {
    route.params.film ? setFilmInfo(route.params.film) : true;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{filmInfo.nameRu}</Text>
      <Image
        style={styles.img}
        source={{
          uri: filmInfo.posterUrlPreview
        }}
      />
      <View style={styles.filmProps}>
        <Text style={styles.filmPropsLabel}>Оригинальное название</Text>
        <Text style={styles.filmPropsText}>{filmInfo.nameOriginal}</Text>
      </View>

      {/* <View style={styles.filmProps}>
        <Text style={styles.filmPropsLabel}>Жанры</Text>
        <View style={styles.filmGenres}>
          {filmInfo.genres.map((e) => {
            return <Text style={styles.filmPropsText}>{e.genre}</Text>;
          })}
        </View>
      </View> */}

      <View style={styles.filmProps}>
        <Text style={styles.filmPropsLabel}>Год</Text>
        <Text style={styles.filmPropsText}>{filmInfo.year}</Text>
      </View>

      <View style={styles.filmProps}>
        <Text style={styles.filmPropsLabel}>Рейтинг Кинопоиск</Text>
        <Text style={styles.filmPropsText}>{filmInfo.ratingKinopoisk}</Text>
      </View>

      <View style={styles.filmProps}>
        <Text style={styles.filmPropsLabel}>Рейтинг Imdb</Text>
        <Text style={styles.filmPropsText}>{filmInfo.ratingImdb}</Text>
      </View>
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
  img: { width: '50%', height: '400px', alignSelf: 'center', marginBottom: '3px' },
  label: { fontSize: '28px', alignSelf: 'center' },
  filmProps: { marginLeft: '20px' },
  filmPropsLabel: { padding: '5px', fontSize: '22px', fontWeight: 'bold' },
  filmPropsText: { fontSize: '18px' }
});

export default FilmScreen;
