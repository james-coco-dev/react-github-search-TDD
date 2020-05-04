
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fields = styled.div`
  border-bottom: 2px solid grey;
  width: 100%
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 16px;
  font-size: 1.125rem;
  width: 100%;
  padding: 0px;
`;

const Li = styled.li`
  margin-bottom: 10px;
  margin-right: 35px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  transition: all 200ms ease;
  position: relative;
  padding: 2px;
  &:hover {
    background: rgba(0,0,0,0);
    color: #3a7999;
    border-bottom: 3px solid #3a7999
  }
  & p {
    padding: 0;
    margin: 0;
  }
`;

export {
  Root,
  Ul,
  Li,
  Fields
};
