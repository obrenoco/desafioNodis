import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, Price, Title} from './styles';

class Product extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <Card>
          <Image
            source={{
              uri:
                'https://images-shoptime.b2w.io/produtos/01/00/sku/7134/2/7134233P.jpg',
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Card.Divider />
          <Title>Livro</Title>
          <Price>
            <Text>R$</Text>
            <Text>200</Text>
          </Price>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default Product;
