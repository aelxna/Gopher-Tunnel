import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import base from './styles/base';


export default function Settings() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <MenuIcon />
        <Title style={base.header}>
          Settings
        </Title>
      </View>
      <View style={base.centered}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};
