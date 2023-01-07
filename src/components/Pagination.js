import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { propTypes } from 'react-clamp';

const Pagination = ({ pagination, handleClickNext, handleClickBefore, totalPages }) => {
  return (
    <View style={styles.pagination}>
      {pagination == 1 ? (
        <Ionicons style={[styles.chevron, styles.chevronInactive]} name="chevron-back-outline" />
      ) : (
        <Ionicons style={styles.chevron} name="chevron-back-outline" onPress={handleClickBefore} />
      )}

      <Text style={styles.pages}>
        {pagination} / {totalPages}
      </Text>

      {pagination == totalPages ? (
        <Ionicons style={[styles.chevron, styles.chevronInactive]} name="chevron-forward-outline" />
      ) : (
        <Ionicons style={styles.chevron} name="chevron-forward-outline" onPress={handleClickNext} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: { display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center' },
  chevron: { fontSize: '32px' },
  chevronInactive: { color: 'grey' },
  pages: { fontSize: '32px' }
});

export default Pagination;
