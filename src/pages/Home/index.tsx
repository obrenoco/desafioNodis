import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
import formatPrice from '../../utils/formatPrice';

import {
  Wrapper,
  Container,
  Title,
  Underline,
  CardTitle,
  Info,
  Image,
  Price,
} from './styles';
import {DataProps} from '../../@types/dataProps';

const API_DATA = gql`
  query GetRates {
    allSkus {
      id
      name
      salePrice
      promotionalPrice
      imageUrl
      description
      stock
      package
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
    return <Text>Error :{error}</Text>;
  }
  return data.allSkus.map((skus: DataProps) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          id: skus.id,
          name: skus.name,
          salePrice: skus.salePrice,
          imageUrl: skus.imageUrl,
          description: skus.description,
          promotionalPrice: skus.promotionalPrice,
          stock: skus.stock,
          dimensions: skus.package,
        })
      }
      key={skus.id}>
      <Card>
        <Container>
          <Image
            source={{
              uri: `${skus.imageUrl}`,
            }}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="cover"
          />
          <Info>
            <CardTitle
              style={{fontFamily: 'Rubik-Regular', fontWeight: 'normal'}}>
              {skus.name}
            </CardTitle>
            <Price>{formatPrice(skus.salePrice)}</Price>
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
        <Title>Produtos</Title>
        <Underline />
        <ProductList />
      </Wrapper>
    </ScrollView>
  );
}

export default HomeScreen;
