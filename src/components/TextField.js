import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-web';

const TextField = ({ value, onChange, title }) => {
  return (
    <View style={styles.textField}>
      <Text>{title}</Text>
      <TextInput value={value} onChangeText={onChange}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {}
});

export default TextField;
