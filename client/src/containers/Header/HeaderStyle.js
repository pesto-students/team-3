import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const HeaderRow = styled(Row)`
  padding: 10px 40px;
  max-height: 12%;
  justify-content: space-between;
  background-color: #4dba6e;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    div {
      margin-bottom: 5px;
    }
  }
`;

export const Span = styled.span`
  font-size: 2.3rem;
`;
