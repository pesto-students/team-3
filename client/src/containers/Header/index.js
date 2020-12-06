import React, { useState } from "react";
import { Col } from "react-flexbox-grid";
import { HeaderRow, Span } from "./HeaderStyle";
import Logo from "../../components/Logo";
import Text from "../../components/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { ButtonWithOutStyle } from "../../components/Button";

export default function Header() {
  const [playPause, setPlayPause] = useState(false);
  return (
    <HeaderRow middle="xs">
      <Col>
        <Text>
          Username: <span className="username">Name</span>
        </Text>
        <Text>
          Current Score: <span className="username">120</span>
        </Text>
      </Col>
      <Col>
        <Logo fontSize={"2.5rem"} />
      </Col>
      <Col>
        <ButtonWithOutStyle onClick={() => setPlayPause(!playPause)}>
          <Span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} color="green" />
            <FontAwesomeIcon
              icon={playPause ? faPlay : faPause}
              inverse
              transform="shrink-8"
            />
          </Span>
        </ButtonWithOutStyle>
      </Col>
    </HeaderRow>
  );
}
