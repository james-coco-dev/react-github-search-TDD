
import styled from 'styled-components';

const Root = styled.div`
  width: 25%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Avatar = styled.img`
  width: 102px;
  height: 102px;
  border-radius: 50%;
`;

export {
  Root,
  Avatar
};
