import React from 'react';
import styled from 'styled-components';
const LabelStyled = styled.label`
  position: absolute;
  text-align: center;
  .label {
    margin-top: 10px;
    font-size: 2rem;
  }
  border: 1px solid white;
  padding: 10px;
`;
const RadioDiv = styled.div`
  width: var(--radio-size);
  height: var(--radio-size);
  position: relative;
  left: 40%;
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid var(--radio-border);
    background: var(--radio-background);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
  .radio-input {
    opacity: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .radio-fill {
    background: var(--radio-fill);
    width: 0;
    height: 0;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.2s ease-in, height 0.2s ease-in;
    pointer-events: none;
    z-index: 1;
  }

  .radio-input:checked ~ .radio-fill {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transition: width 0.2s ease-out, height 0.2s ease-out;
  }
`;
const Radio = ({ label, value }) => {
  return (
    <LabelStyled>
      <RadioDiv>
        <input className="radio-input" type="radio" value="single" />
        <div className="radio-fill"></div>
      </RadioDiv>
      <div className="label">{label}</div>
    </LabelStyled>
  );
};

export default Radio;
