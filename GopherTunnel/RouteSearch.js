import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, TextInput, Searchbar, Button } from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import base from './styles/base';

function search(start, end, navigation) {
  navigation.navigate("Map", {startNode: start, endNode: end});
};

export default function RouteSearch({ navigation }) {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={base.search}>
        <Searchbar
          placeholder="Start"
          // mode='view'
          icon='home'
          value={start}
          onChangeText={start => setStart(start)}
        />
        <Searchbar
          placeholder="End"
          // mode='view'
          icon='home'
          value={end}
          onChangeText={end => setEnd(end)}
        />
        <View style={base.routeButton}>
          <Button mode="contained"
            onPress={() => search(start, end, navigation)}
          >
            Find Route
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
};
