import { StyleSheet, Text, View, Button } from 'react-native';
import Grid from '../../../components/Grid';
import Title from '../../../components/Title';

const NewFilms = ({ title, list }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title name={title}></Title>
        <Button style={styles.btn} title="Смотреть все" />
      </View>
      <Grid list={list}></Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: 'flex', alignItems: 'flex-start', flexDirection: 'column', paddingBottom: '10px', width: '100%', height: 'initial' },
  top: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }
});

export default NewFilms;
