import {Card} from 'react-native-elements';
import styled from 'styled-components/native';

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

export const Title = styled(Card.Title)`
  text-align: left;
  font-size: 18px;
  color: #000;
`;

export const Price = styled.Text`
  font-family: 'Rubik-Bold';
  text-align: right;
  font-size: 24px;
`;
