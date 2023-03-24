import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Title} from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import base from './styles/base';

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuIcon />
      <View style={base.centered}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};
export default Settings;
