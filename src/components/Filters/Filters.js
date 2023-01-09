import { StyleSheet, Text } from 'react-native';

const Filters = ({}) => {
  return <Text style={styles.filters}>Фильтры</Text>;
};

const styles = StyleSheet.create({
  filters: { fontWeight: 'bold', fontSize: '24px' }
});

export default Filters;
