import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Title, TextInput, Button} from 'react-native-paper';
import MenuIcon from './components/MenuIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import base from './styles/base';

interface IHomeProps {}

function displayRoute(start : string, end : string) {
  
  return (
    <View>
      <Text>
        Start: {start}
      </Text>
      <Text>
        End: {end}
      </Text>
    </View>
  )
}


const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [pressed, setPressed] = React.useState(false);

  let route = '';
  if (pressed) {
    route = 'Placeholder';
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuIcon />
      <View style={base.search}>
        <TextInput
          label="Start"
          value={start}
          onChangeText={start => setStart(start)}
        />
        <TextInput
          label="End"
          value={end}
          onChangeText={end => setEnd(end)}
        />
        <View style={base.routeButton}>
          <Button mode="contained" onPress={() => setPressed(pressed => !pressed)}>
              Find Route
          </Button>
        </View>
      </View>
      <View style={base.centered}>
        <Text>
          {route}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Home;