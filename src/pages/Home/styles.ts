import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #ffffff;
  flex: 1;
  padding: 6px 16px 18px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Regular';
  color: #333333;
  font-size: 21px;
  margin-top: 30px;
`;

export const Loading = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 16px;
  padding: 15px 0;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #dfe3e8;
  padding: 0 2px;
`;

export const ImageFrame = styled.View`
  border-color: #dfe4e8;
  border-width: 1px;
  padding: 2px;
  width: 48px;
  height: 45px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Info = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: flex-start;
`;

export const ItemTitle = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  color: #333333;
  line-height: 20px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Amount = styled.Text`
  font-family: 'Rubik-Regular';
  color: #212b36;
  font-size: 13px;
  margin-right: 4px;
`;

export const ItemValue = styled.Text`
  font-family: 'Rubik-Regular';
  color: #212b36;
  font-size: 13px;
  margin-left: 6px;
`;

export const ItemDiscount = styled.Text`
  font-family: 'Rubik-Regular';
  color: #637381;
  font-size: 13px;
  text-decoration: line-through;
`;
