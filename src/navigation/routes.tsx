import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Produtos',
            headerStyle: {elevation: 0},
            headerTitleStyle: {
              color: '#637381',
              fontFamily: 'Rubik-Regular',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
