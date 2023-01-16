import { StyleSheet, View } from 'react-native';

import Pagination from '../../../components/Pagination';
import FilmList from '../../../components/FilmList';
import { useActions } from '../../../hooks/useActions';
import { useSelector } from 'react-redux';

export default function Content() {
  const pagination = useSelector((state) => state.pagination.page);
  const { setPagination } = useActions();

  const totalPages = useSelector((state) => state.searchFilms.totalPages);
  const searchFilms = useSelector((state) => state.searchFilms.items);

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
      <FilmList style={styles.filmList} filmList={searchFilms}></FilmList>
      <View style={styles.bottom}>
        <Pagination pagination={pagination} handleClickNext={handleClickNext} handleClickBefore={handleClickBefore} totalPages={totalPages}></Pagination>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: '100%' },
  top: { display: 'flex', flexDirection: 'column', width: '100%' },
  filmList: { alignSelf: 'center' },
  bottom: { alignSelf: 'center' }
});
