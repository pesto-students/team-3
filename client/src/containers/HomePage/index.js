import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { GridStyle, LogoStyle } from './HomePageStyle';
import Radio from '../../components/Radio';
import Input from '../../components/Input';
import LabelWithIcon from '../../components/LabelWithIcon';

const HomePage = (props) => {
  return (
    <GridStyle fluid>
      <Row center="xs">
        <Col xs={12}>
          <LogoStyle />
        </Col>
        <Col xs={12}>
          <div>
            <Radio label="Single Player" />
            <Radio label="Multiple Player" />
          </div>
        </Col>
        <Col xs={12}>
          <Input type="text" />
        </Col>
        <Col xs={12}>
          <LabelWithIcon label="Start game" />
        </Col>
      </Row>
    </GridStyle>
  );
};

export default HomePage;
