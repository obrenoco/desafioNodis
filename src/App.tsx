/**
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details';
import {Image} from 'react-native';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'http://10.0.2.2:3000',
  cache: new InMemoryCache(),
});

function LogoTitle() {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
      }}
      source={require('../assets/images/logo.png')}
    />
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => <LogoTitle />,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
