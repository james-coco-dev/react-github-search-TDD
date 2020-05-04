
import styled from 'styled-components';

const Root = styled.div`
  & ul {
    list-style: none;
    margin-top: 40px;
    text-align: left;  
  }
  & ul li {
    padding: 5px;
    z-index: -2;
    box-sizing: border-box;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
    margin: 20px;
    display: flex;
    align-items: center;
    margin-left: 0;
  }
  & ul li.repos-list {
    justify-content: space-between;
  }
  & ul li h3 {
    flex: 1;
    align-self: flex-start;
    font-size: 16px;
  }
`;

const UserDataImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const UserDataLoginButton = styled.a`
  margin-left: 12px;
  color: black;
  text-decoration: none;
`;

export {
  Root,
  UserDataImage,
  UserDataLoginButton
};
