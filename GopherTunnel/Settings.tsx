import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Title} from 'react-native-paper';

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});