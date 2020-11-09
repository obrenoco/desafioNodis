import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import NumericInput from 'react-native-numeric-input';
import formatPrice from '../../utils/formatPrice';

import BuyButtons from './components/BuyButtons';
import InfoTitle from './components/InfoTitle';

import {
  Container,
  Wrapper,
  Image,
  ProductTitle,
  Stock,
  StockTitle,
  Price,
  InfoContainer,
  InfoDescription,
  Item,
  ItemTitle,
  ItemDescription,
  ItemUnity,
  InfoEdit,
  InfoEditText,
} from './styles';

const MIN_HEIGHT = 0;
const MAX_HEIGHT = 350;

export default function Details({route}: any) {
  const {
    name,
    salePrice,
    description,
    imageUrl,
    promotionalPrice,
    stock,
  } = route.params;

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
    <Container>
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        renderHeader={() => (
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
          />
        )}>
        <Wrapper>
          <ProductTitle>{name}</ProductTitle>
          <Price>{formatPrice(salePrice)}</Price>

          <Stock>
            <StockTitle>Estoque disponível</StockTitle>
            <NumericInput
              type="plus-minus"
              onChange={() => {}}
              minValue={0}
              maxValue={stock}
              rounded
              rightButtonBackgroundColor="#00b97a"
              leftButtonBackgroundColor="#00b97a"
              iconStyle={{color: '#fff'}}
            />
          </Stock>

          <BuyButtons />

          <View>
            <InfoContainer>
              <InfoTitle
                icon="file-text"
                description="Informações do produto"
              />

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
                  130
                </ItemDescription>
                <ItemUnity>cm</ItemUnity>
              </Item>
              <Item>
                <ItemTitle>Largura:</ItemTitle>
                <ItemDescription
                  editable={isDimensionEditable}
                  keyboardType="numeric"
                  style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                  130
                </ItemDescription>
                <ItemUnity>cm</ItemUnity>
              </Item>
              <Item>
                <ItemTitle>Profundidade:</ItemTitle>
                <ItemDescription
                  editable={isDimensionEditable}
                  keyboardType="numeric"
                  style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                  130
                </ItemDescription>
                <ItemUnity>cm</ItemUnity>
              </Item>
              <Item>
                <ItemTitle>Peso:</ItemTitle>
                <ItemDescription
                  editable={isDimensionEditable}
                  keyboardType="numeric"
                  style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                  1
                </ItemDescription>
                <ItemUnity>kg</ItemUnity>
              </Item>
            </InfoContainer>
          </View>
        </Wrapper>
      </HeaderImageScrollView>
    </Container>
  );
}
