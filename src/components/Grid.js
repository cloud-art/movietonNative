import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import Dotdotdot from 'react-clamp';
import NotFoundText from './NotFoundText';

const Grid = ({ films, keyGenerateWord }) => {
  return (
    <>
      {films.length > 0 && (
        <View style={styles.grid}>
          {films.map((e) => {
            return (
              <View style={styles.gridElement} key={films.length + e.kinopoiskId ? e.kinopoiskId : e.filmId}>
                <Link to={{ screen: 'Film', params: { film: e } }}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: e.posterUrlPreview
                    }}
                  />
                </Link>
                <Dotdotdot clamp="2">
                  <Link to={{ screen: 'Film', params: { film: e } }}>
                    <Text style={styles.item}>{e.nameRu ? e.nameRu : e.nameOriginal}</Text>
                  </Link>
                </Dotdotdot>
              </View>
            );
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
