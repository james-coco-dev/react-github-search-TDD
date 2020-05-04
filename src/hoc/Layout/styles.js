
import styled from 'styled-components';

const Main = styled.main`
display: grid;
min-height: 100vh;
grid-template-rows: minmax(50px, auto) 1fr;
grid-template-columns: minmax(100px, auto) 1fr minmax(100px, auto);
font-size: 1.5em;
`;

export {
  Main
};
