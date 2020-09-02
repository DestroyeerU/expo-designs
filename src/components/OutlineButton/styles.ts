import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import colors from '@styles/colors';

interface CommomProps {
  isOnLongPress: boolean;
}

export const Container = styled.View`
  width: 250px;

  border-width: 2px;
  border-color: ${colors.primary};

  border-radius: 1000px;
`;

export const StyledButton = styled(RectButton).attrs({
  rippleColor: colors.primary,
})`
  padding: 16px;

  border-radius: 1000px;
`;

export const StyledText = styled.Text<CommomProps>`
  text-align: center;

  font-weight: bold;
  color: ${(props) => (props.isOnLongPress ? '#fff' : colors.primary)};
`;
