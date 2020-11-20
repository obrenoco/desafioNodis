/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {RoutesDataProps} from '../../@types/dataProps';
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

export default function Details({
  route: {
    params: {name, imageUrl, salePrice, promotionalPrice, dimensions, stock},
  },
}: RoutesDataProps) {
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
              value={`${stockAvailable}`}
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
              value={formatPrice(salePrice)}
            />
          </PriceContainer>

          <PriceContainer>
            <PriceTitle>Preço promocional</PriceTitle>
            <PriceInput
              keyboardType="numeric"
              placeholder={'R$ 0,00'}
              value={formatPrice(promotionalPrice)}
            />
          </PriceContainer>
        </Prices>

        <Measures>
          <MeasureContainer>
            <MeasureTitle>Peso</MeasureTitle>
            <MeasureInput keyboardType="numeric" placeholder={'1000'}>
              {formatWeight(dimensions.weight)}
            </MeasureInput>
            <MeasureUnity> kg</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Altura</MeasureTitle>
            <MeasureInput keyboardType="numeric" placeholder={'100'}>
              {dimensions.height}
            </MeasureInput>
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Largura</MeasureTitle>
            <MeasureInput keyboardType="numeric" placeholder={'100'}>
              {dimensions.width}
            </MeasureInput>
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Profundidade</MeasureTitle>
            <MeasureInput keyboardType="numeric" placeholder={'100'}>
              {dimensions.depth}
            </MeasureInput>
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
        </Measures>
      </Container>

      <Edit>
        <Divider />
        <EditButton activeOpacity={0.5}>
          <TextEdit>Salvar alterações</TextEdit>
        </EditButton>
      </Edit>
    </Wrapper>
  );
}
