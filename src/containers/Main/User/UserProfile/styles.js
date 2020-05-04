
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  margin-bottom: 16px;
`;

const VisitButton = styled.a`
  display: block;
  background: #fff;
  border: 1px solid #9e9e9e;
  color: #707070;
  padding: 10px 40px;
  overflow: hidden;
  max-width: 100px;
  color: #262626; 
  text-decoration: none; 
  margin-top: 2px;
  margin-left: 15px;
  font-size: .75rem;
  border-radius: 8px;
  &:hover {
    transition: background 0.5s ease;
    background-color: #3a7999;
    color: #fff;
  }
`;

export {
  Root,
  VisitButton
}