import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Dotdotdot from 'react-clamp';

const Grid = ({ list }) => {
  return (
    <View style={styles.grid}>
      {list.map((e) => {
        return (
          <View style={styles.gridElement} key={e.id}>
            <Image
              style={styles.img}
              source={{
                uri: e.posterUrlPreview
              }}
            />
            <Dotdotdot clamp="2">
              <Text style={styles.item}>{e.nameRu ? e.nameRu : e.nameOriginal}</Text>
            </Dotdotdot>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { display: 'flex', flexDirection: 'row', overflow: 'scroll', paddingTop: '10px', paddingBottom: '10px', width: '100%' },
  gridElement: { display: 'flex', width: '140px', marginRight: '10px', alignItems: 'center' },
  item: {
    fontSize: 16
  },
  img: { width: '140px', height: '200px', alignSelf: 'center', marginBottom: '3px' }
});

export default Grid;
