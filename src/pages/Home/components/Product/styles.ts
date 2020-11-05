import {Card} from 'react-native-elements';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled(Card.Title)`
  text-align: left;
  max-width: 50%;
`;

export const Image = styled(Card.Image)`
  width: 100%;
`;

export const Price = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
