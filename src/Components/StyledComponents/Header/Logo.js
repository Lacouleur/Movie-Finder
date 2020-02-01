import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

const Logo = styled.img`
  justify-self: flex-end; 
  width: 20%;
  min-width: 200px; 
  max-width: 300px;
  ${phoneQuery`
    margin-bottom: 2em;
    margin-top: 4em;
    padding-left: 10%;
  `}

`;

export default Logo;
