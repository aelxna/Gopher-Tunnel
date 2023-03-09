import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Title} from 'react-native-paper';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});