import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FilmList from '../components/FilmList';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import { useActions } from '../hooks/useActions';
import { fetchPopularFilms } from '../services/MovietonService';

const Populars = () => {
  const dispatch = useDispatch();
  const viewRef = useRef();

  const filmList = useSelector((state) => state.popularFilms.items);
  const totalPages = useSelector((state) => state.popularFilms.totalPages);
  const pagination = useSelector((state) => state.pagination.page);
  const isFetching = useSelector((state) => state.popularFilms.isFetching);

  const { setPagination } = useActions();

  const handleClickNext = () => {
    setPagination(Number(pagination + 1));
    window.scrollTo(0, 0);
  };

  const handleClickBefore = () => {
    setPagination(pagination - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchPopularFilms(pagination));
    viewRef.current.scrollTo(0, 0);
  }, [pagination]);

  return (
    <View ref={viewRef} style={styles.container}>
      <Text style={styles.label}>Популярное: </Text>
      {isFetching ? (
        <View style={styles.spinner}>
          <Spinner styles={{ height: '200px' }} />
        </View>
      ) : (
        <FilmList filmList={filmList}></FilmList>
      )}
      <View style={styles.bottom}>
        <Pagination pagination={pagination} handleClickNext={handleClickNext} handleClickBefore={handleClickBefore} totalPages={totalPages}></Pagination>
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
  filmPropsText: { fontSize: '18px' },
  bottom: { alignSelf: 'center' },
  spinner: { alignSelf: 'center' }
});

export default Populars;
