import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import stone from '../../assets/stone.png';
import grass from '../../assets/grass.png';

export const GameBoardRow = styled(Row)`
  height: 100%;
`;
export const OverLapWrapper = styled.div`
  position: fixed;
  top: 12%;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items: baseline;
`;

export const OverLapWrapperBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const OverLapWrapperBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 40%;
  top: 40%;
  overflow: hidden;
  padding: 16px;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  color: white;
  font-size: 2rem;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const GridStyled = styled(Grid)`
  padding: 0px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const GameArea = styled.div`
  position: relative;
  margin: 0px auto;
  width: 100%;
  border: 10px solid transparent;
  border-image: url(${stone}) 20 round;
  border-image-repeat: repeat;
  background: url(${grass}) left top no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  background-size: cover;
  padding: 30px;
`;
