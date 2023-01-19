import { StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import FilmList from './FilmList';
import Pagination from './Pagination';
import Spinner from './Spinner';

const Content = ({ data }) => {
  const pagination = useSelector((state) => state.pagination.page);
  const { setPagination } = useActions();

  const totalPages = data.totalPages;
  const filmList = data.items;
  const isFetching = data.isFetching;

  const handleClickNext = () => {
    setPagination(Number(pagination + 1));
    window.scrollTo(0, 0);
  };
  const handleClickBefore = () => {
    setPagination(pagination - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isFetching ? (
        <View style={styles.spinner}>
          <Spinner styles={{ height: '200px' }} />
        </View>
      ) : (
        <FilmList style={styles.filmList} filmList={filmList}></FilmList>
      )}
      <View style={styles.bottom}>
        <Pagination pagination={pagination} handleClickNext={handleClickNext} handleClickBefore={handleClickBefore} totalPages={totalPages}></Pagination>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: { width: '100%' },
  top: { display: 'flex', flexDirection: 'column', width: '100%' },
  filmList: { alignSelf: 'center' },
  bottom: { alignSelf: 'center' },
  spinner: { alignSelf: 'center' }
});

export default Content;
