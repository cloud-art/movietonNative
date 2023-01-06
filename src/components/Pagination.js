import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { propTypes } from 'react-clamp';

const Pagination = ({ pagination, handleClickNext, handleClickBefore }) => {
  return (
    <View style={styles.pagination}>
      <Ionicons name="chevron-back-outline" />
      {pagination === 1 ? <></> : <Button title={pagination - 1} onPress={handleClickBefore}></Button>}
      <Button title={pagination}></Button>
      <Button title={pagination + 1} onPress={handleClickNext}></Button>
      <Ionicons name="chevron-forward-outline" />
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: { display: 'flex', flexDirection: 'row' }
});

export default Pagination;
