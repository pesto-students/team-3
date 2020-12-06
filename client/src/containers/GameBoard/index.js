import React, { Component } from 'react';
import Header from '../Header/';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const GridStyled = styled(Grid)`
  padding: 0px;
`;
const BG = styled.div`
  width: 100%;
  background-color: white;
  min-height: 86vh;
`;
class GameBoard extends Component {
  render() {
    return (
      <GridStyled fluid>
        <Header />
        <Row>
          <BG></BG>
        </Row>
      </GridStyled>
    );
  }
}
export default GameBoard;
