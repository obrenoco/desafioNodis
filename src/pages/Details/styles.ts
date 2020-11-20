import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: #fff;
`;

export const Container = styled.View`
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Regular';
  color: #333333;
  margin: 7px 0 15px;
  font-size: 21px;
  line-height: 24px;
`;

export const ImageContainer = styled.View`
  width: 196px;
  height: 196px;
  margin: 4px auto;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
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

export const StockContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StockInput = styled.TextInput`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  border-color: #c4cdd5;
  border-width: 1px;
  width: 92px;
  border-radius: 3px;
  padding-left: 13px;
`;
export const StockButton = styled.TouchableOpacity`
  background-color: #f9fafb;
  border-color: #c4cdd5;
  border-width: 1px;
  padding: 12px 45px;
`;

export const Prices = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
  margin: 10px 0;
`;

export const PriceTitle = styled.Text`
  font-family: 'Rubik-Medium';
  color: #212b36;
  margin-bottom: 4px;
  font-size: 15px;
`;

export const PriceInput = styled.TextInput`
  border-color: #c4cdd5;
  border-width: 1px;
  width: 170px;
  padding-left: 13px;
`;

export const Measures = styled.View`
  flex: 1;
  padding: 1px;
`;

export const MeasureContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px 0;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #dfe3e8;
`;

export const MeasureTitle = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  font-size: 16px;
`;

export const MeasureInput = styled.TextInput`
  margin-left: auto;
  font-family: 'Rubik-Regular';
  font-size: 16px;
  color: #212b36;
  opacity: 1;
  border-color: #c4cdd5;
  border-width: 1px;
  height: 36px;
  width: 62px;
  padding: 5px;
  text-align: center;
`;

export const MeasureUnity = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 16px;
  margin-left: 9px;
`;

export const Edit = styled.View`
  margin-top: 35px;
`;

export const EditButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 9px 16px;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 154px;
  height: 36px;
`;

export const TextEdit = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  color: white;
  line-height: 20px;
`;
