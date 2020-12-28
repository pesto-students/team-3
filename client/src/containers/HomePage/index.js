import React, { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { GridStyle, LogoStyle, HomePageRow } from './HomePageStyle';
import Input from '../../components/Input';
import LabelWithIcon from '../../components/LabelWithIcon';
import { ButtonWithOutStyle, ButtonGroupBy } from '../../components/Button';
import Modal from '../../components/Modal';
import { Login, Register } from './ModalComponents';
import Radio from '../../components/Radio';
import SnakeImage from '../../assets/snakenew.png';

const Options = [
  { label: 'Single Player', value: 'single' },
  { label: 'Multiple Player', value: 'multiple' },
];
const HomePage = (props) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [gameType, setGameType] = useState('single');
  return (
    <GridStyle fluid>
      {showLoginModal && (
        <Modal
          visible={showLoginModal}
          dismiss={() => setShowLoginModal(false)}
          children={<Login />}
          client={'70%'}
        />
      )}
      {showRegisterModal && (
        <Modal
          visible={showRegisterModal}
          dismiss={() => setShowRegisterModal(false)}
          children={<Register />}
          client={'70%'}
        />
      )}
      <HomePageRow center="xs">
        <header className="gameHeader">
          <LogoStyle />
          <div className="loginregisterHeader">
            <ButtonWithOutStyle className="headerCommonButton" onClick={() => setShowLoginModal(true)}>
              <LabelWithIcon fontSize="1rem" label="Login" />
            </ButtonWithOutStyle>
            <ButtonWithOutStyle className="headerCommonButton" onClick={() => setShowRegisterModal(true)}>
              <LabelWithIcon fontSize="1rem" label="Register" />
            </ButtonWithOutStyle>
          </div>
        </header>


        <div className="homepageSection">         
          <img src={SnakeImage} alt="Snake Image" className="snake-image"/>
          <Col xs={12}>
            <Radio
              options={Options}
              selectedOption={gameType}
              onChange={(event) => setGameType(event.target.value)}
            />
          </Col>
          {gameType === 'multiple' && (
            <Col xs={12}>
              <Input align="center" type="text" placeholder="Enter Room id" />
            </Col>
          )}
          <Col xs={12}>
            {gameType === 'multiple' ? (
              <ButtonGroupBy className="buttonGroup">
                <ButtonWithOutStyle  className="gameStartBtn"
                  onClick={() => props.history.push('/gameboard')}
                >
                  <LabelWithIcon label="Create a game" />
                </ButtonWithOutStyle>
                <ButtonWithOutStyle className="gameStartBtn"
                  onClick={() => props.history.push('/gameboard')}
                >
                  <LabelWithIcon label="Join a game" />
                </ButtonWithOutStyle>
              </ButtonGroupBy>
            ) : (
              <ButtonWithOutStyle className="gameStartBtn"
                onClick={() => props.history.push('/gameboard')}
              >
                <LabelWithIcon label="Start game" />
              </ButtonWithOutStyle>
            )}
          </Col>  
        </div>
                    
      </HomePageRow>
    </GridStyle>
  );
};

export default HomePage;
