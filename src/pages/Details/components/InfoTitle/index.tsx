import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/MaterialIcons';

import {Title, TitleText} from './styles';

interface InfoTitleProps {
  icon: string;
  description: string;
}

const InfoTitle: React.FC<InfoTitleProps> = ({
  icon,
  description,
}: InfoTitleProps) => {
  return (
    <Title>
      <Icon name={icon} size={24} />
      <TitleText>{description}</TitleText>
      <Arrow
        name="keyboard-arrow-down"
        size={16}
        style={{marginLeft: 'auto'}}
      />
    </Title>
  );
};

export default InfoTitle;
