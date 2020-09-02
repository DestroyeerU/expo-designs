import React, { useCallback, useState } from 'react';
import { GestureResponderEvent, TouchableWithoutFeedback } from 'react-native';

import { Container, StyledButton, StyledText } from './styles';

const OutlineButton: React.FC = () => {
  const [onLongPress, setOnLongPress] = useState(false);

  const handleActiveStateChange = useCallback((event: GestureResponderEvent) => {
    console.log('aki');
  }, []);

  return (
    <TouchableWithoutFeedback onLongPress={handleActiveStateChange} delayLongPress={170}>
      {/* <StyledButton> */}
      <StyledText isOnLongPress={false}>ENTRAR</StyledText>
      {/* </StyledButton> */}
    </TouchableWithoutFeedback>
  );
};

export default OutlineButton;
