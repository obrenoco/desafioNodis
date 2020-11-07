import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  margin: 15px;
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
  margin: 30px 0 10px;
`;

export const StockTitle = styled.Text`
  font-family: 'Rubik-Medium';
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

export const Description = styled.Text`
  margin: 20px 0;
  line-height: 24px;
  font-family: 'Rubik-Light';
  font-size: 20px;
`;
