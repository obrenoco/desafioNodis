import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, Image, Price, Title, Info} from './styles';

class Product extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <Card>
          <Container>
            <Image
              source={{
                uri:
                  'https://images-submarino.b2w.io/produtos/01/00/sku/34869/5/34869530P1.jpg',
              }}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="cover"
            />
            <Info>
              <Title style={{fontFamily: 'Rubik-Bold', fontWeight: 'normal'}}>
                Óculos Shimano AeroLite
              </Title>
              <Price>R$ 419,00</Price>
            </Info>
          </Container>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default Product;
