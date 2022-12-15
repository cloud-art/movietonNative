import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import { useState, useEffect } from 'react';

const FilmList = ({ filmList }) => {
  const [fList, setFList] = useState([]);
  useEffect(() => {
    filmList ? setFList(filmList) : true;
    console.log(fList);
    console.log(filmList);
  }, []);

  return (
    <View style={styles.list}>
      {fList.map((e) => {
        return (
          <View style={styles.listElement} key={e.id}>
            <Link to={{ screen: 'Film', params: { film: e } }}>
              <Image
                style={styles.img}
                source={{
                  uri: e.posterUrlPreview
                }}
              />
            </Link>
            <Link style={styles.item} to={{ screen: 'Film', params: { id: e.filmId } }}>
              <Text>{e.nameRu ? e.nameRu : e.nameOriginal}</Text>
            </Link>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  listElement: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' },
  img: { width: '140px', height: '200px', alignSelf: 'flex-start', marginBottom: '3px' },
  item: { alignSelf: 'center', textAlign: 'center' }
});

export default FilmList;
