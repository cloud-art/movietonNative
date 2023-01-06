import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import NotFoundText from './NotFoundText';

const FilmList = ({ filmList }) => {
  const [fList, setFList] = useState([]);
  useEffect(() => {
    filmList ? setFList(filmList) : true;
  }, [filmList]);

  return (
    <>
      {filmList.length > 0 ? (
        <View style={styles.list}>
          {fList.map((e) => {
            return (
              <View style={styles.listElement} key={e.kinopoiskId ? e.kinopoiskId : e.filmId}>
                <Link to={{ screen: 'Film', params: { film: e } }}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: e.posterUrlPreview
                    }}
                  />
                </Link>
                <Link style={styles.item} to={{ screen: 'Film', params: { film: e } }}>
                  <Text style={styles.itemName}>{e.nameRu ? e.nameRu : e.nameOriginal}</Text>
                </Link>
              </View>
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
  list: { width: '100%' },
  listElement: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' },
  img: { width: '250px', height: '400px', alignSelf: 'flex-start', marginBottom: '3px' },
  item: { alignSelf: 'center', textAlign: 'center' },
  itemName: { fontSize: '24px' },
  notFound: { fontSize: '32px', alignSelf: 'center' }
});

export default FilmList;
