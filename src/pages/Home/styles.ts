import styled from 'styled-components/native';
import {Card} from 'react-native-elements';

export const Wrapper = styled.View`
  background-color: #f4f4f3;
  flex: 1;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  margin: 20px 10px 5px;
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const Image = styled(Card.Image)`
  width: 100px;
  height: 100px;
`;

export const Info = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  margin: 0 15px;
`;

export const CardTitle = styled(Card.Title)`
  text-align: left;
  font-size: 18px;
  color: #000;
`;

export const Price = styled.Text`
  font-family: 'Rubik-Medium';
  text-align: right;
  font-size: 24px;
`;
