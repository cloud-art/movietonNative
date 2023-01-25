import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import Dotdotdot from 'react-clamp';

const FilmsItem = ({ id, image, nameRu, nameOriginal, styleName, styleImage }) => {
  return (
    <View style={styles.FilmItem} key={id}>
      <Link to={{ screen: 'Film', params: { id: id } }}>
        <Image
          style={styleImage ? styleImage : styles.img}
          source={{
            uri: image
          }}
        />
      </Link>
      <Dotdotdot clamp="2">
        <Link to={{ screen: 'Film', params: { id: id } }}>
          <Text style={styleName ? styleName : styles.name}>{nameRu ? nameRu : nameOriginal}</Text>
        </Link>
      </Dotdotdot>
    </View>
  );
};

const styles = StyleSheet.create({
  FilmItem: { display: 'flex', width: '140px', marginRight: '10px', alignItems: 'center', paddingBottom: '10px' },
  name: {
    fontSize: 16
  },
  img: { width: '140px', height: '200px', alignSelf: 'center', marginBottom: '3px' }
});

export default FilmsItem;
