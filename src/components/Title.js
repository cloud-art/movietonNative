import { StyleSheet, Text } from 'react-native';

const Title = ({ name }) => {
  return <Text style={styles.title}>{name}</Text>;
};

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: '24px' }
});

export default Title;
