import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: var(--ff-logo);
  font-size: ${({ fontSize }) => fontSize || "3.0625rem"};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: green;
  -webkit-text-stroke: 2px white;
  margin-bottom: 0px !important;
`;
const Logo = (props) => {
  return <H1 {...props}>Snake Rivals</H1>;
};

export default Logo;
