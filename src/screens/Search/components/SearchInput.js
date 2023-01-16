import { StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native-web';

const SearchInput = ({ keyword, setKeyword, handleSearch }) => {
  return (
    <View>
      <TextInput onSubmitEditing={handleSearch} value={keyword} onChangeText={setKeyword} style={styles.searchInput}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: '70px',
    width: '100%',
    fontSize: '24px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginRight: '5px',
    marginBottom: '5px',
    borderColor: '0A1C34',
    borderWidth: '1px',
    borderRadius: '3px'
  }
});

export default SearchInput;
