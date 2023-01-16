import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native-web';

const Filter = ({ name, children }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);
  return (
    <View style={[styles.filter]}>
      <Text style={styles.label}>{name}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: { width: '100%', outline: 'none', display: 'flex', flexDirection: 'column' },
  filterActive: {},
  content: {},
  label: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 18,
    fontWeight: '600'
  }
});

export default Filter;
