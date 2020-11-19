import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #ffffff;
  flex: 1;
  padding: 6px 16px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Medium';
  color: #333333;
  font-size: 21px;
  margin-top: 30px;
`;

export const Container = styled.View`
  flex-direction: row;
  margin-top: 16px;
  padding: 15px 0;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #dfe3e8;
  padding: 0 2px;
`;

export const Image = styled.Image`
  width: 48px;
  height: 45px;
`;

export const Info = styled.View`
  flex: 1;
  text-align: center;
  justify-content: flex-start;
  margin: 0 15px;
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
`;
