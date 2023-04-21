import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, TextInput, Searchbar, Button } from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import base from './styles/base';
import DijkstraLauncher from './scripts/linked';
import colors from './styles/colors';

export default function Map({ navigation, route }) {
    let output = "";
    if (route.params.startNode) {
        output = DijkstraLauncher(route.params.startNode, route.params.endNode);
    } else {
        output = "Find a route to begin";
    }
    return (
      <View style={base.centered}>
        <Text>
          {output}
        </Text>
        <Button mode="contained"
          onPress={() => navigation.navigate('RouteSearch')}
          style={colors.button}
        >
          Find New Route
        </Button>
      </View>
    );
  };