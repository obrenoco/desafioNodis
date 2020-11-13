/**
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';
import {Image} from 'react-native';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
      }}
      source={require('../../assets/images/logo.png')}
    />
  );
}

function Route() {
  return (
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
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerTitle: 'Detalhes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
