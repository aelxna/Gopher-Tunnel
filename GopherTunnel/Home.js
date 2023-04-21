import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, TextInput, Searchbar, Button } from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import base from './styles/base';
import RouteSearch from './RouteSearch';
import Map from './Map';



export default function Home({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <MenuIcon />
        <Title style={base.header}>
          Home
        </Title>
      </View>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Map" component={Map} initialParams={{ startNode: "", endNode: ""}} />
        <Stack.Screen name="RouteSearch" component={RouteSearch} />
      </Stack.Navigator>

    </SafeAreaView>
  );
};

