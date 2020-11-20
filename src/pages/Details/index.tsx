/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RoutesDataProps} from '../../@types/dataProps';
import formatPrice from '../../utils/formatPrice';

import BuyButtons from './components/BuyButtons';
import InfoTitle from './components/InfoTitle';

import Icon from 'react-native-vector-icons/Feather';

import {
  Wrapper,
  ImageFrame,
  Image,
  ProductTitle,
  Stock,
  StockTitle,
  StockInputs,
  InputStock,
  ButtonStock,
  InfoContainer,
  InfoDescription,
  Item,
  ItemTitle,
  ItemDescription,
  ItemUnity,
  InfoEdit,
  InfoEditText,
} from './styles';

export default function Details({
  route: {
    params: {
      name,
      salePrice,
      description,
      imageUrl,
      promotionalPrice,
      dimensions,
    },
  },
}: RoutesDataProps) {
  const [isInfoEditable, setIsInfoEditable] = useState(false);
  const [isDimensionEditable, setIsDimensionEditable] = useState(false);
  const [isPriceEditable, setIsPriceEditable] = useState(false);

  const toggleSwitchInfo = () =>
    setIsInfoEditable((previousState) => !previousState);

  const toggleSwitchDimension = () =>
    setIsDimensionEditable((previousState) => !previousState);

  const toggleSwitchPrice = () =>
    setIsPriceEditable((previousState) => !previousState);

  return (
    <ScrollView>
      <Wrapper>
        <ProductTitle>{name}</ProductTitle>
        <ImageFrame>
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
          />
        </ImageFrame>

        <Stock>
          <StockTitle>Estoque:</StockTitle>
          <StockInputs>
            <InputStock placeholder={'0'} keyboardType={'number-pad'} />
            <ButtonStock activeOpacity={0.5} style={{marginLeft: 'auto'}}>
              <Icon name="divide-circle" size={24} color="red" />
            </ButtonStock>
            <ButtonStock activeOpacity={0.5}>
              <Icon name="plus-circle" size={24} color="green" />
            </ButtonStock>
          </StockInputs>
        </Stock>

        <BuyButtons />

        <View>
          <InfoContainer>
            <InfoTitle icon="file-text" description="Informações do produto" />

            <InfoEdit>
              <InfoEditText>Editar</InfoEditText>
              <Switch
                trackColor={{true: '#00b97a', false: '#767577'}}
                thumbColor={isInfoEditable ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitchInfo}
                value={isInfoEditable}
              />
            </InfoEdit>

            <InfoDescription
              editable={isInfoEditable}
              multiline
              style={{color: 'black', opacity: 1}}>
              {description}
            </InfoDescription>
          </InfoContainer>

          <InfoContainer>
            <InfoTitle icon="percent" description="Preço e promoções" />

            <InfoEdit>
              <InfoEditText>Editar</InfoEditText>
              <Switch
                trackColor={{true: '#00b97a', false: '#767577'}}
                thumbColor={isInfoEditable ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitchPrice}
                value={isPriceEditable}
              />
            </InfoEdit>

            <Item>
              <ItemTitle>Preço: </ItemTitle>
              <ItemDescription
                editable={isPriceEditable}
                keyboardType="numeric"
                style={{
                  color: 'black',
                  opacity: 1,
                  textAlign: 'right',
                }}>
                {formatPrice(salePrice)}
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle>Preço promocional: </ItemTitle>
              <ItemDescription
                editable={isPriceEditable}
                keyboardType="numeric"
                style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                {formatPrice(promotionalPrice)}
              </ItemDescription>
            </Item>
          </InfoContainer>

          <InfoContainer>
            <InfoTitle icon="box" description="Dimensões do produto" />
            <InfoEdit>
              <InfoEditText>Editar</InfoEditText>
              <Switch
                trackColor={{true: '#00b97a', false: '#767577'}}
                thumbColor={isDimensionEditable ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitchDimension}
                value={isDimensionEditable}
              />
            </InfoEdit>

            <Item>
              <ItemTitle>Altura:</ItemTitle>
              <ItemDescription
                editable={isDimensionEditable}
                keyboardType="numeric"
                style={{
                  color: 'black',
                  opacity: 1,
                  textAlign: 'right',
                }}>
                {dimensions.height}
              </ItemDescription>
              <ItemUnity>cm</ItemUnity>
            </Item>
            <Item>
              <ItemTitle>Largura:</ItemTitle>
              <ItemDescription
                editable={isDimensionEditable}
                keyboardType="numeric"
                style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                {dimensions.width}
              </ItemDescription>
              <ItemUnity>cm</ItemUnity>
            </Item>
            <Item>
              <ItemTitle>Profundidade:</ItemTitle>
              <ItemDescription
                editable={isDimensionEditable}
                keyboardType="numeric"
                style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                {dimensions.depth}
              </ItemDescription>
              <ItemUnity>cm</ItemUnity>
            </Item>
            <Item>
              <ItemTitle>Peso:</ItemTitle>
              <ItemDescription
                editable={isDimensionEditable}
                keyboardType="numeric"
                style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                {dimensions.weight}
              </ItemDescription>
              <ItemUnity>g</ItemUnity>
            </Item>
          </InfoContainer>
        </View>
      </Wrapper>
    </ScrollView>
  );
}
