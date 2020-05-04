
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 64px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export {
  Root,
  UserDetail
};
