import * as React from 'react';
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { A } from '@expo/html-elements';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Details" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Vai pra Detalhes' onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

// SobreScreen
// Seu nome e um oi e uma frase de impacto!

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
