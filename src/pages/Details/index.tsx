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

export default function Details({
  route: {
    params: {name, salePrice, imageUrl, promotionalPrice, dimensions},
  },
}: RoutesDataProps) {
  const [stock, setStock] = useState(0);

  const increaseStock = () => setStock((prevStock) => prevStock + 1);
  const decreaseStock = () =>
    setStock((prevStock) => (prevStock > 0 ? prevStock - 1 : prevStock));

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
            <StockInput placeholder={`${stock}`} keyboardType={'number-pad'} />

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
            <PriceInput keyboardType={'number-pad'} placeholder={'R$ 20,00'} />
          </PriceContainer>

          <PriceContainer>
            <PriceTitle>Preço promocional</PriceTitle>
            <PriceInput keyboardType={'number-pad'} placeholder={'R$ 20,00'} />
          </PriceContainer>
        </Prices>

        <Measures>
          <MeasureContainer>
            <MeasureTitle>Peso</MeasureTitle>
            <MeasureInput keyboardType="numeric">{salePrice}</MeasureInput>
            <MeasureUnity> kg</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Altura</MeasureTitle>
            <MeasureInput
              keyboardType="numeric"
              placeholder={formatPrice(promotionalPrice)}>
              {formatPrice(promotionalPrice)}
            </MeasureInput>
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Largura</MeasureTitle>
            <MeasureInput keyboardType="numeric" placeholder={'12'}>
              {dimensions.height}
            </MeasureInput>
            <MeasureUnity>cm</MeasureUnity>
          </MeasureContainer>
          <Divider />

          <MeasureContainer>
            <MeasureTitle>Profundidade</MeasureTitle>
            <MeasureInput keyboardType="numeric">
              {dimensions.width}
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
