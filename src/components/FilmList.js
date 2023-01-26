import { StyleSheet, View } from 'react-native';
import NotFoundText from './NotFoundText';
import FilmsItem from './FilmItem';

const FilmList = ({ filmList }) => {
  return (
    <>
      {filmList.length > 0 ? (
        <View style={styles.list}>
          {filmList.map((e) => {
            return (
              <FilmsItem id={e.kinopoiskId ? e.kinopoiskId : e.filmId} image={e.posterUrlPreview} nameRu={e.nameRu} nameOriginal={e.nameOriginal} styleName={styles.itemName} styleImage={styles.img} />
            );
          })}
        </View>
      ) : (
        <NotFoundText></NotFoundText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' },

  img: { width: '250px', height: '400px', alignSelf: 'flex-start', marginBottom: '3px' },
  itemName: { fontSize: '24px' },
  notFound: { fontSize: '32px', alignSelf: 'center' }
});

export default FilmList;
