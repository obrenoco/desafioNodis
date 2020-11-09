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
  font-family: 'Rubik-Regular';
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
  font-family: 'Rubik-Regular';
  font-size: 30px;
  margin-top: 10px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  padding: 1px;
`;

export const InfoDescription = styled.TextInput`
  line-height: 28px;
  font-family: 'Rubik-Light';
  font-size: 18px;
  text-align: justify;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  font-family: 'Rubik-Bold';
  font-size: 16px;
`;

export const ItemDescription = styled.TextInput`
  font-family: 'Rubik-Regular';
  font-size: 16px;
`;

export const ItemUnity = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 16px;
`;

export const InfoEdit = styled.View`
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 12px;
`;

export const InfoEditText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 12px;
  margin-right: 10px;
`;
