import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ViewButton, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ViewButton>
        <ButtonText>{children}</ButtonText>
      </ViewButton>
    </Container>
  );
};
export default Button;
