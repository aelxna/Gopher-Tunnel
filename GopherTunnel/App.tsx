import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {IconButton} from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import DrawerContent from './components/DrawerContent';
import Settings from './Settings';
import Home from './Home';


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator 
            screenOptions={{headerShown: false}}
            drawerContent={(props) => <DrawerContent {...props} />}
            >
            <Drawer.Group
              screenOptions= {{ headerTitle : "Locations" }}>
                <Drawer.Screen name='Home' component={Home} />

                
            </Drawer.Group>
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
