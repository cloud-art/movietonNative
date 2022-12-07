import { StyleSheet, Text, View, FlatList } from 'react-native';

const Grid = ({ list }) => {
  return (
    <View style={styles.grid}>
      {list.map((e) => {
        return (
          <View style={styles.gridElement}>
            <Text style={styles.item}>{e.nameRu}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { display: 'flex', flexDirection: 'row', overflow: 'scroll', paddingTop: '10px', paddingBottom: '10px' },
  gridElement: {},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default Grid;
