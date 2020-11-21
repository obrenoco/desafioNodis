/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {RoutesDataProps} from '../../@types/dataProps';
import {gql, useMutation} from '@apollo/client';
import formatPrice from '../../utils/formatPrice';

import Icon from 'react-native-vector-icons/Feather';

import {
  Wrapper,
  Container,
  ImageContainer,
  Image,
  Title,
  Stock,
  StockTitle,
  StockContainer,
  StockInput,
  StockButton,
  Prices,
  PriceContainer,
  PriceTitle,
  PriceInput,
  Measures,
  MeasureContainer,
  Divider,
  MeasureTitle,
  MeasureInput,
  MeasureUnity,
  Edit,
  EditButton,
  TextEdit,
} from './styles';
import formatWeight from '../../utils/formatWeight';
import {Alert} from 'react-native';

const UPDATE_SKU = gql`
  mutation UpdateSku(
    $id: Number!
    $salePrice: String!
    $promotionalPrice: String!
  ) {
    updateSku(
      id: $id
      salePrice: $salePrice
      promotionalPrice: $promotionalPrice
    ) {
      id
      salePrice
      promotionalPrice
    }
  }
`;

export default function Details({
  route: {
    params: {name, imageUrl, salePrice, promotionalPrice, dimensions, stock},
  },
}: RoutesDataProps) {
  // const [updateSku, {data}] = useMutation(UPDATE_SKU);

  const [salePriceVal = salePrice, setSalePriceVal] = React.useState(
    salePriceVal,
  );
  const [promoPrice = promotionalPrice, setPromoPrice] = React.useState(
    promoPrice,
  );
  const [weight = dimensions.weight, setWeight] = React.useState(weight);
  const [height = dimensions.height, setHeight] = React.useState(height);
  const [width = dimensions.width, setWidth] = React.useState(width);
  const [depth = dimensions.depth, setDepth] = React.useState(depth);

  const handleEdit = () => {
    Alert.alert(
      'Salvas',
      `
      -Stock ${stock} -Sale ${salePriceVal} - Promo ${promoPrice} - Weight ${weight} - Width ${width} - Depth: ${depth}  - `,
    );
  };

  const [stockAvailable = stock, setStockAvailable] = useState(stock);
  const increaseStock = () =>
    setStockAvailable((prevStockAvailable) => prevStockAvailable + 1);
  const decreaseStock = () =>
    setStockAvailable((prevStockAvailable) =>
      prevStockAvailable > 0 ? prevStockAvailable - 1 : prevStockAvailable,
    );

  return (
    <Wrapper>
      <Container>
        <Title>{name}</Title>

        <ImageContainer>
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
          />
        </ImageContainer>

        <Stock>
          <StockTitle>Estoque:</StockTitle>
          <StockContainer>
            <StockInput
              placeholder={'0'}
              keyboardType={'number-pad'}
              defaultValue={`${stockAvailable}`}
              onChangeText={setStockAvailable}
            />

            <StockButton
              onPress={decreaseStock}
              activeOpacity={0.5}
              style={{marginLeft: 'auto'}}>
              <Icon name="divide-circle" size={24} color="red" />
            </StockButton>
            <StockButton onPress={increaseStock} activeOpacity={0.5}>
              <Icon name="plus-circle" size={24} color="green" />
            </StockButton>
          </StockContainer>
        </Stock>

        <Prices>
          <PriceContainer>
            <PriceTitle>Preço de venda</PriceTitle>
            <PriceInput
              keyboardType="numeric"
              placeholder={'R$ 0,00'}
              defaultValue={`${formatPrice(salePriceVal)}`}
              onChangeText={setSalePriceVal}
            />
          </PriceContainer>

          <PriceContainer>
            <PriceTitle>Preço promocional</PriceTitle>
            <PriceInput
              keyboardType="numeric"
              placeholder={'R$ 0,00'}
              defaultValue={`${formatPrice(promoPrice)}`}
              onChangeText={setPromoPrice}
            />
          </PriceContainer>
        </Prices>

        <Measures>
          <MeasureContainer>
            <MeasureTitle>Peso</MeasureTitle>
            <MeasureInput
              keyboardType="numeric"
              placeholder={'1000'}
              defaultValue={`${formatWeight(weight)}`}
              onChangeText={setWeight}
            />
            <MeasureUnity> kg</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Altura</MeasureTitle>
            <MeasureInput
              keyboardType="numeric"
              placeholder={'100'}
              defaultValue={`${height}`}
              onChangeText={setHeight}
            />
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Largura</MeasureTitle>
            <MeasureInput
              keyboardType="numeric"
              placeholder={'100'}
              defaultValue={`${width}`}
              onChangeText={setWidth}
            />
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Profundidade</MeasureTitle>
            <MeasureInput
              keyboardType="numeric"
              placeholder={'100'}
              defaultValue={`${depth}`}
              onChangeText={setDepth}
            />
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
        </Measures>
      </Container>

      <Edit>
        <Divider />
        <EditButton onPress={handleEdit} activeOpacity={0.5}>
          <TextEdit>Salvar alterações</TextEdit>
        </EditButton>
      </Edit>
    </Wrapper>
  );
}
