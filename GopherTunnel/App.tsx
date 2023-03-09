import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MenuIcon from './components/MenuIcon';
import Settings from './Settings';
import Home from './Home';


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{headerShown: true, headerLeft: () => <MenuIcon />}}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Settings' component={Settings} />
          </Drawer.Navigator>
        </NavigationContainer>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
