import React, { useState } from "react";
import { Col } from "react-flexbox-grid";
import { GridStyle, LogoStyle, HomePageRow } from "./HomePageStyle";
import Input from "../../components/Input";
import LabelWithIcon from "../../components/LabelWithIcon";
import { ButtonWithOutStyle, ButtonGroupBy } from "../../components/Button";
import Modal from "../../components/Modal";
import { Login, Register } from "./ModalComponents";

const HomePage = (props) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [gameType, setGameType] = useState("single");
  return (
    <GridStyle fluid>
      {showLoginModal && (
        <Modal
          visible={showLoginModal}
          dismiss={() => setShowLoginModal(false)}
          children={<Login />}
          client={"70%"}
        />
      )}
      {showRegisterModal && (
        <Modal
          visible={showRegisterModal}
          dismiss={() => setShowRegisterModal(false)}
          children={<Register />}
          client={"70%"}
        />
      )}
      <HomePageRow center="xs">
        <Col xs={12}>
          <LogoStyle />
        </Col>
        <Col xs={12}>
          <div>
            {/* <Radio label="Single Player" />
            <Radio label="Multiple Player" /> */}
            <div
              className="input-radiobtns"
              onChange={(event) => setGameType(event.target.value)}
            >
              <label>
                <input
                  type="radio"
                  value="single"
                  checked={gameType === "single"}
                  name="typeofplaying"
                />{" "}
                Single Player
              </label>
              <label>
                <input
                  type="radio"
                  value="multiple"
                  checked={gameType === "multiple"}
                  name="typeofplaying"
                />{" "}
                Multiple Player
              </label>
            </div>
          </div>
        </Col>
        {gameType === "multiple" && (
          <Col xs={12}>
            <Input align="center" type="text" placeholder="Enter Room id" />
          </Col>
        )}
        <Col xs={12}>
          <ButtonWithOutStyle onClick={() => props.history.push("/gameboard")}>
            <LabelWithIcon label="Start game" />
          </ButtonWithOutStyle>
        </Col>
        <Col xs={12}>
          <ButtonGroupBy>
            <ButtonWithOutStyle onClick={() => setShowLoginModal(true)}>
              <LabelWithIcon fontSize="2rem" label="Login" />
            </ButtonWithOutStyle>
            <ButtonWithOutStyle onClick={() => setShowRegisterModal(true)}>
              <LabelWithIcon fontSize="2rem" label="Register" />
            </ButtonWithOutStyle>
          </ButtonGroupBy>
        </Col>
      </HomePageRow>
    </GridStyle>
  );
};

export default HomePage;
