import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navigation({ navigation }) {
  return (
    <View style={StyleSheet.flatten([styles.navigation])}>
      <Button onPress={() => navigation.navigate('Homescreen')} title="Главная" />
      <Button onPress={() => navigation.navigate('Search')} title="Поиск" />
      <Button onPress={() => navigation.navigate('Profile')} title="Профиль" />
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    height: '10%',
    flex: '1 0 0',
    flexDirection: 'row',
    backgroundColor: '#fff',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
