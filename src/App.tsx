/**
 * @format
 */

import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import Route from './navigation/routes';
import {StatusBar} from 'react-native';

const client = new ApolloClient({
  //uri: 'http://localhost:3000', <= Para emuladores iOS
  uri: 'http://10.0.2.2:3000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <Route />
    </ApolloProvider>
  );
}

export default App;
