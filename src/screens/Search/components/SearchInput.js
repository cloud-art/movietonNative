import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchFilms } from '../../../services/MovietonService';

import Filters from '../../../components/Filters/Filters';

const SearchInput = ({ keyword, setKeyword }) => {
  const dispatch = useDispatch();

  const pagination = useSelector((state) => state.pagination.page);

  const searchHandler = () => {
    dispatch(fetchSearchFilms(pagination, keyword));
  };
  return (
    <View>
      <TextInput onSubmitEditing={searchHandler} value={keyword} onChangeText={setKeyword} style={styles.searchInput}></TextInput>
      <Filters></Filters>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: { height: '70px', width: '100%', fontSize: '24px', paddingLeft: '10px', paddingRight: '10px', marginRight: '5px', marginBottom: '5px', borderColor: '0A1C34', borderWidth: '1px' }
});

export default SearchInput;
