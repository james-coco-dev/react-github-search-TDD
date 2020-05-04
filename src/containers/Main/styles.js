
import styled from 'styled-components';

const Root = styled.div`
  grid-column: 2 / span 1;
  @media only screen and (max-width: 768px) {
    grid-column: 1 / span 3;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingWrapper = styled.div`
  margin-top: 32px;
`;

export {
  Root,
  FlexContainer,
  LoadingWrapper
};
