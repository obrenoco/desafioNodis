import React from 'react';
import {Alert, View} from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Wrapper,
  Image,
  ProductTitle,
  Stock,
  StockTitle,
  Divider,
  Price,
  BuyButton,
  CartButton,
  ButtonText,
  ProductInfos,
  ProductInfoText,
  // Description,
} from './styles';

const MIN_HEIGHT = 0;
const MAX_HEIGHT = 350;

export default function Details() {
  const createCartButtonAlert = () =>
    Alert.alert(
      'Adicionado ao carrinho',
      'Seu produto foi adicionado ao carrinho !',
      [{text: 'OK'}],
      {cancelable: false},
    );

  const createBuyButtonAlert = () =>
    Alert.alert(
      'Compra efetuada',
      'Sua compra foi efetuada com sucesso !',
      [{text: 'OK'}],
      {cancelable: false},
    );

  return (
    <Container>
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        renderHeader={() => (
          <Image
            source={{
              uri:
                'https://images-submarino.b2w.io/produtos/01/00/sku/34869/5/34869530P1.jpg',
            }}
          />
        )}>
        <Wrapper>
          <ProductTitle>
            Jogo Game Of Life Meu Malvado Favorito - Hasbro
          </ProductTitle>
          <Price>R$ 200,00</Price>

          <Stock>
            <StockTitle>Estoque disponível</StockTitle>
            <NumericInput
              type="plus-minus"
              onChange={(value) => console.log(value)}
              minValue={0}
              maxValue={3}
              rounded
              rightButtonBackgroundColor="#00b97a"
              leftButtonBackgroundColor="#00b97a"
              iconStyle={{color: '#fff'}}
            />
          </Stock>

          <View>
            <BuyButton activeOpacity={0.7} onPress={createBuyButtonAlert}>
              <ButtonText>Comprar</ButtonText>
            </BuyButton>

            <CartButton activeOpacity={0.7} onPress={createCartButtonAlert}>
              <ButtonText>Adicionar ao carrinho</ButtonText>
            </CartButton>
          </View>

          <Divider />

          <View>
            <ProductInfos activeOpacity={0.7}>
              <Icon name="file-text" size={24} />
              <ProductInfoText>Informações do produto</ProductInfoText>
              <Arrow
                name="arrow-forward-ios"
                size={16}
                style={{marginLeft: 'auto'}}
              />
            </ProductInfos>
            <ProductInfos activeOpacity={0.7}>
              <Icon name="percent" size={24} />
              <ProductInfoText>Preço e promoções</ProductInfoText>
              <Arrow
                name="arrow-forward-ios"
                size={16}
                style={{marginLeft: 'auto'}}
              />
            </ProductInfos>
            <ProductInfos activeOpacity={0.7}>
              <Icon name="box" size={24} />
              <ProductInfoText>Dimensões do produto</ProductInfoText>
              <Arrow
                name="arrow-forward-ios"
                size={16}
                style={{marginLeft: 'auto'}}
              />
            </ProductInfos>
          </View>

          {/* <Description>
            A melhor forma de otimizar o aproveitamento da capacidade de um
            computador é compreender os princípios básicos do seu funcionamento.
            A obra, em sua segunda edição, revista e atualizada, descreve as
            técnicas subjacentes às várias arquiteturas de computador, desde os
            pequenos microcontroladores até os grandes servidores, passando
            pelos computadores pessoais (PC). O livro ensina como construir
            computadores com simples portas lógicas; como é possível com apenas
            dois símbolos (0 e 1), dominar o mundo; conjunto de instruções e
            programação em linguagem assembly; como programas conseguem ser
            executados por um computador; equilíbrio harmonioso entre os vários
            componentes de um computador; como se projeta um computador;
            microprogramação, pipelining, caches e memória virtual; suporte para
            os sistemas operacionais (processos); evoluções mais recentes dos
            processadores. A obra também inclui os últimos avanços tecnológicos
            verificados em processadores comerciais. Materiais suplementares,
            entre os quais, guias de laboratório, simulador, slides com animação
            e exercícios resolvidos, encontram-se disponíveis no site.
          </Description> */}
        </Wrapper>
      </HeaderImageScrollView>
    </Container>
  );
}
