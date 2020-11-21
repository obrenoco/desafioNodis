import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
import formatPrice from '../../utils/formatPrice';

import {
  Wrapper,
  Container,
  Divider,
  Title,
  ItemTitle,
  Info,
  Image,
  ImageFrame,
  Price,
  Amount,
  ItemValue,
} from './styles';
import {DataProps} from '../../@types/dataProps';

const GET_SKU = gql`
  query GetSku {
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
  const {loading, error, data} = useQuery(GET_SKU);

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
      activeOpacity={0.7}
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
      <Container>
        <ImageFrame>
          <Image source={{uri: `${skus.imageUrl}`}} />
        </ImageFrame>
        <Info>
          <ItemTitle
            style={{fontFamily: 'Rubik-Regular', fontWeight: 'normal'}}>
            {skus.name}
          </ItemTitle>
          <Price>
            <Amount>1 X</Amount>
            <ItemValue>{formatPrice(skus.salePrice)}</ItemValue>
          </Price>
        </Info>
      </Container>
      <Divider />
    </TouchableOpacity>
  ));
};

function HomeScreen() {
  return (
    <ScrollView>
      <Wrapper>
        <Title>Produtos</Title>
        <ProductList />
      </Wrapper>
    </ScrollView>
  );
}

export default HomeScreen;
