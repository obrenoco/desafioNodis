import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #fff;
  padding: 0 16px;
  border-radius: 10px;
`;

export const ImageFrame = styled.View`
  width: 196px;
  height: 196px;
  margin: 4px auto;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ProductTitle = styled.Text`
  font-family: 'Rubik-Regular';
  color: #333333;
  margin: 7px 0 15px;
  font-size: 21px;
  line-height: 24px;
`;

export const Stock = styled.View`
  margin: 14px 0;
`;

export const StockTitle = styled.Text`
  font-family: 'Rubik-Medium';
  color: #212b36;
  margin-bottom: 4px;
  font-size: 15px;
`;

export const StockInputs = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const InputStock = styled.TextInput`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  border-color: #c4cdd5;
  border-width: 1px;
  width: 92px;
  border-radius: 3px;
`;
export const ButtonStock = styled.TouchableOpacity`
  background-color: #f9fafb;
  border-color: #c4cdd5;
  border-width: 1px;
  padding: 12px 45px;
`;

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
