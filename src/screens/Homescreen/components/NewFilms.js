import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import Grid from '../../../components/Grid';
import Title from '../../../components/Title';

const NewFilms = ({ title, list }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title name={title}></Title>
        <Link style={styles.btn} to={{ screen: 'FilmList', params: { list: list } }}>
          <Text>Смотреть все</Text>
        </Link>
      </View>
      <Grid list={list}></Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: 'flex', alignItems: 'flex-start', flexDirection: 'column', paddingBottom: '10px', width: '100%', height: 'initial' },
  btn: { borderRadius: '5px', backgroundColor: '#5A89B9', color: 'white', padding: '10px' },
  top: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }
});

export default NewFilms;
