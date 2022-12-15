import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import FilmList from '../components/FilmList';

const FilmListScreen = ({ route }) => {
  const [label, setLabel] = useState('Список фильмов:');
  const [filmList, setFilmList] = useState(route.params.list);

  useEffect(() => {
    route.params.label ? setLabel(route.params.label) : true;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <FilmList filmList={filmList}></FilmList>
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

export default FilmListScreen;
