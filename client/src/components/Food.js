import React from 'react';
import styled from 'styled-components';
import food from '../assets/food1.png';
// import Apple from '../assets/apple.svg';
import { ReactComponent as Apple } from '../assets/apple.svg';

const SnakeFood = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  // background-image: url(${food});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 3;
  left: ${({ left }) => left + 'px'};
  top: ${({ top }) => top + 'px'};
`;
const Food = ({ dot }) => {
  if (dot) {
    return (
      <SnakeFood left={dot[0]} top={dot[1]}>
        <Apple width="22px" height="22px" />
      </SnakeFood>
    );
  }
};
export default React.memo(Food);
