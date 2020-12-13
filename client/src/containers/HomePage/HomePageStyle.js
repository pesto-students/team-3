import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import Logo from '../../components/Logo';
export const HomePageRow = styled(Row)`
  flex: 1 1 auto;
`;
export const GridStyle = styled(Grid)`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
  max-width: 100%;

  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LogoStyle = styled(Logo)`
  margin-top: 0%;
`;
