import { StyleSheet, Text, View, Button } from 'react-native';
import Grid from '../../../components/Grid';
import Title from '../../../components/Title';

const NewFilms = ({ title, list }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.top}>
          <Title name={title}></Title>
          <Button />
        </View>
        <Grid list={list}></Grid>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: 'flex', alignItems: 'flex-start', flexDirection: 'column' },
  top: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
});

export default NewFilms;
