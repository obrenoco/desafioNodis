import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import BuyButtons from './components/BuyButtons';

import {
  Container,
  Wrapper,
  Image,
  ProductTitle,
  Stock,
  StockTitle,
  Price,
  InfoContainer,
  InfoTitle,
  InfoTitleText,
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

export default function Details() {
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

          <BuyButtons />

          <View>
            <InfoContainer>
              <InfoTitle>
                <Icon name="file-text" size={24} />
                <InfoTitleText>Informações do produto</InfoTitleText>
                <Arrow
                  name="keyboard-arrow-down"
                  size={16}
                  style={{marginLeft: 'auto'}}
                />
              </InfoTitle>

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
                A melhor forma de otimizar o aproveitamento da capacidade de um
                computador é compreender os princípios básicos do seu
                funcionamento. A obra, em sua segunda edição, revista e
                atualizada, descreve as técnicas subjacentes às várias
                arquiteturas de computador, desde os pequenos microcontroladores
                até os grandes servidores, passando pelos computadores pessoais
                (PC). O livro ensina como construir computadores com simples
                portas lógicas; como é possível com apenas dois símbolos (0 e
                1), dominar o mundo; conjunto de instruções e programação em
                linguagem assembly; como programas conseguem ser executados por
                um computador; equilíbrio harmonioso entre os vários componentes
                de um computador; como se projeta um computador;
                microprogramação, pipelining, caches e memória virtual; suporte
                para os sistemas operacionais (processos); evoluções mais
                recentes dos processadores. A obra também inclui os últimos
                avanços tecnológicos verificados em processadores comerciais.
                Materiais suplementares, entre os quais, guias de laboratório,
                simulador, slides com animação e exercícios resolvidos,
                encontram-se disponíveis no site.
              </InfoDescription>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>
                <Icon name="percent" size={24} />
                <InfoTitleText>Preço e promoções</InfoTitleText>
                <Arrow
                  name="keyboard-arrow-down"
                  size={16}
                  style={{marginLeft: 'auto'}}
                />
              </InfoTitle>

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
                <ItemTitle>Altura:</ItemTitle>
                <ItemDescription
                  editable={isPriceEditable}
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
                <ItemTitle>Peso:</ItemTitle>
                <ItemDescription
                  editable={isPriceEditable}
                  style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                  1
                </ItemDescription>
                <ItemUnity>kg</ItemUnity>
              </Item>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>
                <Icon name="box" size={24} />
                <InfoTitleText>Dimensões do produto</InfoTitleText>
                <Arrow
                  name="keyboard-arrow-down"
                  size={16}
                  style={{marginLeft: 'auto'}}
                />
              </InfoTitle>
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
                  style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                  130
                </ItemDescription>
                <ItemUnity>cm</ItemUnity>
              </Item>
              <Item>
                <ItemTitle>Profundidade:</ItemTitle>
                <ItemDescription
                  editable={isDimensionEditable}
                  style={{color: 'black', opacity: 1, textAlign: 'right'}}>
                  130
                </ItemDescription>
                <ItemUnity>cm</ItemUnity>
              </Item>
              <Item>
                <ItemTitle>Peso:</ItemTitle>
                <ItemDescription
                  editable={isDimensionEditable}
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
