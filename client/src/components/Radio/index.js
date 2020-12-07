import React from 'react';
import styled from 'styled-components';
import mediaSize from '../../constants/MediaSize';

const Switch = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border: 3px solid var(--clr-primary);
  color: var(--clr-primary);
  font-size: 1.2;
  font-family: var(--ff-primary);
  border-radius: 10px;
  @media ${mediaSize.tablet} {
    font-size: 1.5625rem;
    width: 75%;
  }
`;
const Quality = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  line-height: 40px;
  &:first-child label {
    border-radius: 5px 0 0 5px;
  }
  &:last-child label {
    border-radius: 0 5px 5px 0;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-style: italic;
    text-align: center;
    transition: transform 0.4s, color 0.4s, background-color 0.4s;
  }
  input[type='radio'] {
    appearance: none;
    width: 0;
    height: 0;
    opacity: 0;
  }

  input[type='radio']:focus {
    outline: 0;
    outline-offset: 0;
  }
  input[type='radio']:checked ~ label {
    background-color: var(--clr-primary);
    color: white;
  }
  input[type='radio']:active ~ label {
    transform: scale(1.05);
  }
`;

const Radio = ({ options, selectedOption, onChange }) => {
  return (
    <Switch>
      {options &&
        options.map((option) => (
          <Quality onChange={onChange}>
            <input
              checked={option.value === selectedOption}
              id={option.value}
              name={option.value}
              type="radio"
              value={option.value}
            ></input>
            <label for={option.value}>{option.label}</label>
          </Quality>
        ))}
    </Switch>
  );
};

export default Radio;
