import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {
  Wrapper,
  Container,
  Title,
  CardTitle,
  Info,
  Image,
  Price,
} from './styles';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Wrapper>
        <Title>Products (10)</Title>

        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
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
                <CardTitle
                  style={{fontFamily: 'Rubik-Regular', fontWeight: 'normal'}}>
                  Óculos Shimano AeroLite
                </CardTitle>
                <Price>R$ 419,00</Price>
              </Info>
            </Container>
          </Card>
        </TouchableOpacity>
      </Wrapper>
    </ScrollView>
  );
}

export default HomeScreen;
