import styled from 'styled-components';
// import mediaSize from '../../constants/MediaSize';

const Input = styled.input`
  margin: 20px auto 0 auto;
  min-height: 1.5rem;
  width: 100%;
  font-family: var(--ff-primary);
  font-size: 1.1875rem;
  padding: 12px 12px;
  opacity: 1;
  border-radius: 4px;
  box-shadow: 0 3px 5px 0 rgb(212 212 212 / 80%);
  background-color: var(--clr-white);
  border: #ccc solid 1px;
  text-align: left;
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
