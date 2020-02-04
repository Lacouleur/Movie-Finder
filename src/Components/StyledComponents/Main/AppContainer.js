import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';


const AppContainer = styled.div`
margin: 0;
background-color: ${((props) => props.theme.colors.darkBlue)};                
max-width: 100vw;
position: relative;
font-family: 'Roboto', sans-serif;
z-index: 0;
${phoneQuery`
font-size: 0.8rem;
max-width: 100vw;
  `}
`;

export default AppContainer;
