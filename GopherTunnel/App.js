import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import DrawerContent from './components/DrawerContent';
import Settings from './Settings';
import Home from './Home';
import colors from './styles/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7A0019',
  },
};

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          drawerContent={(props) => <DrawerContent {...props} />}
          style={colors.drawer}
        >
          <Drawer.Group
            screenOptions={{ headerTitle: "Locations" }}>
            <Drawer.Screen
              name='Home'
              component={Home}
              options={{
                drawerIcon: () => <MaterialCommunityIcon name="home" size={30} />
              }}
            />
          </Drawer.Group>
          <Drawer.Screen
            name='Settings'
            component={Settings}
            options={{
              drawerIcon: () => <MaterialCommunityIcon name="cog" size={30} />
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
