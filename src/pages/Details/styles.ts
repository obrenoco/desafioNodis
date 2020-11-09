import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: 15px;
  border-radius: 10px;
`;

export const Image = styled.Image`
  margin: 0 auto;
  width: 350px;
  height: 350px;
`;

export const ProductTitle = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 20px;
`;

export const Stock = styled.View`
  margin: 30px 0;
`;

export const StockTitle = styled.Text`
  font-family: 'Rubik-Medium';
  margin-bottom: 10px;
`;

export const Category = styled.Text``;

export const Price = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 30px;
  margin-top: 10px;
`;

export const BuyButton = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  background-color: #00b97a;
  color: #fff;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
`;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  background-color: #00b97aaa;
  color: #fff;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Rubik-Bold';
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Divider = styled.View`
  border: 0.3px black solid;
  margin: 20px 10px;
  opacity: 0.2;
`;

export const InfoContainer = styled.View`
  flex: 1;
  padding: 1px;
`;

export const InfoTitle = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px 2px;
  border-bottom-width: 0.5px;
  border-bottom-color: grey;
`;

export const InfoTitleText = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  margin-left: 12px;
`;

export const InfoDescription = styled.TextInput`
  line-height: 24px;
  font-family: 'Rubik-Light';
  font-size: 20px;
  text-align: justify;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  font-family: 'Rubik-Bold';
`;

export const ItemDescription = styled.TextInput`
  font-family: 'Rubik-Regular';
`;

export const ItemUnity = styled.Text`
  font-family: 'Rubik-Regular';
`;

export const InfoEdit = styled.View`
  /* flex-direction: row; */
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 12px;
`;

export const InfoEditText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 12px;
  margin-right: 10px;
`;
