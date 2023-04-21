import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, TextInput, Searchbar, Button } from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import base from './styles/base';
import colors from './styles/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function search(start, end, navigation) {
  navigation.navigate("Map", {startNode: start, endNode: end});
};

export default function RouteSearch({ navigation }) {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={base.search}>
        <Searchbar
          placeholder="Start"
          // mode='view'
          icon={()=><MaterialCommunityIcon name="home" size={30}/>}
          value={start}
          onChangeText={start => setStart(start)}
          style={colors.search}
        />
        <Searchbar
          placeholder="End"
          // mode='view'
          icon={()=><MaterialCommunityIcon name="walk" size={30}/>}
          value={end}
          onChangeText={end => setEnd(end)}
          style={colors.search}
        />
        <View style={base.routeButton}>
          <Button mode="contained"
            onPress={() => search(start, end, navigation)}
            style={colors.button}
          >
            Find Route
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
};
