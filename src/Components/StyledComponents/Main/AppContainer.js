import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';


const AppContainer = styled.div`
margin: 0;
background-color: ${((props) => props.theme.colors.darkBlue)};                
max-width: 100vw;
position: relative;
font-family: 'Roboto', sans-serif;
line-height: 17px; 
font-size: 14px; 

${phoneQuery`
font-size: 1rem;
overflow: hidden;
  `}
`;

export default AppContainer;
