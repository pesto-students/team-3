import styled from 'styled-components';

export const ButtonWithOutStyle = styled.button`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  font-family: inherits;
`;

export const ButtonGroupBy = styled.div`
  display: flex;
  button {
    flex: 1 1 auto;
    justify-content: center;
  }
`;
