import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Product from './components/Product';

import {Container, Title} from './styles';

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <ScrollView>
            <Title>Products (10)</Title>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ScrollView>
        </Container>
      </ScrollView>
    );
  }
}

export default HomeScreen;
