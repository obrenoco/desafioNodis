/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {RoutesDataProps} from '../../@types/dataProps';
import formatPrice from '../../utils/formatPrice';

import Icon from 'react-native-vector-icons/Feather';

import {
  Wrapper,
  ImageContainer,
  Image,
  Title,
  Stock,
  StockTitle,
  StockContainer,
  StockInput,
  StockButton,
  Measures,
  MeasureContainer,
  Divider,
  MeasureTitle,
  MeasureInput,
  MeasureUnity,
  Edit,
  TextEdit,
} from './styles';

export default function Details({
  route: {
    params: {name, salePrice, imageUrl, promotionalPrice, dimensions},
  },
}: RoutesDataProps) {
  return (
    <Wrapper>
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
          <StockInput placeholder={'0'} keyboardType={'number-pad'} />
          <StockButton activeOpacity={0.5} style={{marginLeft: 'auto'}}>
            <Icon name="divide-circle" size={24} color="red" />
          </StockButton>
          <StockButton activeOpacity={0.5}>
            <Icon name="plus-circle" size={24} color="green" />
          </StockButton>
        </StockContainer>
      </Stock>

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
          <MeasureInput keyboardType="numeric">{dimensions.width}</MeasureInput>
          <MeasureUnity>cm</MeasureUnity>
        </MeasureContainer>
        <Divider />
      </Measures>

      <Edit>
        <TextEdit>Salvar alterações</TextEdit>
      </Edit>
    </Wrapper>
  );
}
