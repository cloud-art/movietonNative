import { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/Content';
import { fetchPopularFilms } from '../services/MovietonService';

const Populars = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.popularFilms);
  const pagination = useSelector((state) => state.pagination.page);

  useEffect(() => {
    dispatch(fetchPopularFilms(pagination));
  }, [pagination]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Популярное: </Text>
      <Content data={data}></Content>
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
  label: { fontSize: '28px', alignSelf: 'center' }
});

export default Populars;
