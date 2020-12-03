import styled from 'styled-components';
// import mediaSize from '../../constants/MediaSize';

const Input = styled.input`
  margin: 10px;
  min-height: 2.5rem;
  width: 50%;
  font-family: var(--ff-primary);
  font-size: 2.1875rem;
  padding: 15px;
  opacity: 0.59;
  border-radius: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  background-color: var(--clr-white);
  &:focus {
    outline: none;
  }
  text-align: ${({ align }) => align || 'left'};
  &:required:focus {
    border: 2px solid var(--clr-primary);
    outline: none;
  }
`;

export default Input;
