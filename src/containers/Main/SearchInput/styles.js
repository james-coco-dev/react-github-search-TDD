
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 258px;
  border: 3px solid #00B4CC;
  padding: 5px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  color: #9DBFAF;
  &:hover {
    color: #00B4CC;
  }
`;

const SearchButton = styled.button`
  margin-left: -9px;
  margin-top: 20px;
  position: absolute;  
  min-width: 40px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;
`;

export {
  Root,
  Input,
  SearchButton
};
