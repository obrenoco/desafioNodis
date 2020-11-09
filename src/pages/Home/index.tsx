import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';

import {
  Wrapper,
  Container,
  Title,
  CardTitle,
  Info,
  Image,
  Price,
} from './styles';

interface DataProps {
  id: number;
  name: string;
  salePrice: string;
  imageUrl: string;
}

const API_DATA = gql`
  query GetRates {
    allSkus {
      id
      name
      salePrice
      imageUrl
    }
  }
`;

const ProductList: DataProps | any = () => {
  const navigation = useNavigation();
  const {loading, error, data} = useQuery(API_DATA);

  if (loading) {
    return (
      <ActivityIndicator
        style={{justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  return data.allSkus.map(({id, name, salePrice, imageUrl}: DataProps) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details')} key={id}>
      <Card>
        <Container>
          <Image
            source={{
              uri: `'${imageUrl}'`,
            }}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="cover"
          />
          <Info>
            <CardTitle
              style={{fontFamily: 'Rubik-Regular', fontWeight: 'normal'}}>
              {name}
            </CardTitle>
            <Price>R$ {salePrice}</Price>
          </Info>
        </Container>
      </Card>
    </TouchableOpacity>
  ));
};

function HomeScreen() {
  return (
    <ScrollView>
      <Wrapper>
        <Title>Products (10)</Title>
        <ProductList />
      </Wrapper>
    </ScrollView>
  );
}

export default HomeScreen;
