import React from 'react';
import styled from 'styled-components';
const SnakeFood = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background: red;
  border: 1px solid #fff;
  z-index: 3;
  left: ${({ left }) => left + 'px'};
  top: ${({ top }) => top + 'px'};
`;
const Food = ({ dot }) => {
  if (dot) {
    return <SnakeFood left={dot[0]} top={dot[1]}></SnakeFood>;
  }
};
export default React.memo(Food);
