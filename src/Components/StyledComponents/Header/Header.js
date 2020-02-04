import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const HeaderContainer = styled.div`
width: 100%; 
margin: auto;
height: 10vw; 
min-height: 100px;
display: flex; 
flex-direction: row; 
justify-content: space-between;
align-content: center; 
flex-wrap: wrap;
${phoneQuery`
    width: 100%;
    height: 115px;
    padding-top: 22px;
  `}
`;

export const Logo = styled.img`
  justify-self: flex-end; 
  width: 219.49px;
  ${phoneQuery`
    width: 181.58px;
  `}
`;
