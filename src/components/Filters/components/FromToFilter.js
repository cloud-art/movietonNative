import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput, View } from 'react-native-web';
import { setFrontPremiers } from '../../../store/actions';
import TextField from '../../TextField';

const FromToFilter = ({ value, onChange, min, max }) => {
  return (
    <View style={[styles.inputs]}>
      <View style={styles.input}>
        <Text>От</Text>
        <TextInput
          style={styles.textinput}
          value={value[0]}
          onChangeText={(e) => {
            onChange([e, value[1]]);
          }}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Text>До</Text>
        <TextInput
          style={styles.textinput}
          value={value[1]}
          onChangeText={(e) => {
            onChange([value[0], e]);
          }}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: { width: '100%', display: 'flex', flexDirection: 'row' },
  input: { margin: '5px' },
  filterActive: {},
  textinput: {
    width: '100%',
    fontSize: '18px',
    paddingLeft: '5px',
    paddingRight: '5px',
    marginRight: '5px',
    marginBottom: '5px',
    marginTop: '5px',
    borderColor: '0A1C34',
    borderWidth: '1px',
    borderRadius: '3px'
  }
});

export default FromToFilter;
