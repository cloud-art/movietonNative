import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const FilmInfo = ({ nameOriginal, nameRu, image, year, rating, description }) => {
  return (
    <>
      {nameRu && <Text style={styles.label}>{nameRu}</Text>}

      {image && (
        <Image
          style={styles.img}
          source={{
            uri: image
          }}
        />
      )}

      {nameOriginal && (
        <View style={styles.filmProps}>
          <Text style={styles.filmPropsLabel}>Оригинальное название</Text>
          <Text style={styles.filmPropsText}>{nameOriginal}</Text>
        </View>
      )}

      {year && (
        <View style={styles.filmProps}>
          <Text style={styles.filmPropsLabel}>Год</Text>
          <Text style={styles.filmPropsText}>{year}</Text>
        </View>
      )}

      {rating && (
        <View style={styles.filmProps}>
          <Text style={styles.filmPropsLabel}>Рейтинг Кинопоиск</Text>
          <Text style={styles.filmPropsText}>{rating}</Text>
        </View>
      )}

      {description && (
        <View style={styles.filmProps}>
          <Text style={styles.filmPropsLabel}>Описание</Text>
          <Text style={styles.filmPropsText}>{description}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  img: { width: '300px', height: '500px', alignSelf: 'center', marginBottom: '3px' },
  label: { fontSize: '48px', alignSelf: 'center', textAlign: 'center' },
  filmProps: { marginLeft: '20px' },
  filmPropsLabel: { padding: '5px', fontSize: '32px', fontWeight: 'bold' },
  filmPropsText: { fontSize: '24px' }
});

export default FilmInfo;
