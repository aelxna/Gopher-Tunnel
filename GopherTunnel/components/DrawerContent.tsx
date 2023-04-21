import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Settings from '../Settings'
import colors from '../styles/colors';




const DrawerContent: React.FunctionComponent<DrawerContentComponentProps> = (
  props
) => {
  const { state, descriptors, navigation } = props

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>

        <DrawerItemList {...props} />

      </DrawerContentScrollView>
    </SafeAreaView>



  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 16
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionLine: {
    backgroundColor: 'black',
    flex: 1,
    height: 1,
    marginLeft: 10,
    marginRight: 20,
  },
  drawer: {
    justifyContent: 'space-between'
  },
  items: {
    justifyContent: 'flex-start'
  }
});