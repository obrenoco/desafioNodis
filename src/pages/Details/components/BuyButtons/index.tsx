import React from 'react';

import {Alert, View} from 'react-native';

import {Buy, Cart, ButtonText, Divider} from './styles';

const BuyButtons: React.FC = () => {
  const createCartAlert = () =>
    Alert.alert(
      'Adicionado ao carrinho',
      'Seu produto foi adicionado ao carrinho !',
      [{text: 'OK'}],
      {cancelable: false},
    );

  const createBuyAlert = () =>
    Alert.alert(
      'Compra efetuada',
      'Sua compra foi efetuada com sucesso !',
      [{text: 'OK'}],
      {cancelable: false},
    );

  return (
    <View>
      <Buy activeOpacity={0.7} onPress={createBuyAlert}>
        <ButtonText>Comprar</ButtonText>
      </Buy>

      <Cart activeOpacity={0.7} onPress={createCartAlert}>
        <ButtonText>Adicionar ao carrinho</ButtonText>
      </Cart>

      <Divider />
    </View>
  );
};

export default BuyButtons;
