import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const HeaderRow = styled(Row)`
  padding: 10px 40px;
  justify-content: space-between;
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
