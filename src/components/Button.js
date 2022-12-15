import { StyleSheet, Button, View, FlatList, Image } from 'react-native';

const Button = ( { children }, ...props) => {
  return (
    <Button props={...props}>{ children }</Button>
  );
};

const styles = StyleSheet.create({
  
});

export default Button;
