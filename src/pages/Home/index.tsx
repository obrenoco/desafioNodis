import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Product from './components/Product';

import {Container} from './styles';

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <ScrollView>
            <Product />
          </ScrollView>
        </Container>
      </ScrollView>
    );
  }
}

export default HomeScreen;
