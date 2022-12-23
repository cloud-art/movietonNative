import { StyleSheet, Text } from 'react-native';

const NotFoundText = () => {
  return <Text style={styles.title}>Ничего не найдено</Text>;
};

const styles = StyleSheet.create({
  title: { fontSize: '24px', alignSelf: 'center' }
});

export default NotFoundText;
