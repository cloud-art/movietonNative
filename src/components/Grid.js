import { StyleSheet, View } from 'react-native';
import NotFoundText from './NotFoundText';
import FilmsItem from './FilmItem';

const Grid = ({ films, keyGenerateWord }) => {
  return (
    <>
      {films.length > 0 && (
        <View style={styles.grid}>
          {films.map((e) => {
            return <FilmsItem id={e.kinopoiskId} image={e.posterUrlPreview} nameRu={e.nameRu} nameOriginal={e.nameOriginal} />;
          })}
        </View>
      )}
      {!(films.length > 0) && <NotFoundText></NotFoundText>}
    </>
  );
};

const styles = StyleSheet.create({
  grid: { display: 'flex', flexDirection: 'row', overflow: 'scroll', paddingTop: '10px', paddingBottom: '10px', width: '100%' },
  gridElement: { display: 'flex', width: '140px', marginRight: '10px', alignItems: 'center' },
  item: {
    fontSize: 16
  },
  img: { width: '140px', height: '200px', alignSelf: 'center', marginBottom: '3px' }
});

export default Grid;
