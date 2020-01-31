import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const ThumbMovie = styled.img`
height: 250px;
width : 160px;
margin-top: 2rem;
margin-right: 3rem; 
margin-left: 3rem;
border-radius: 25px; 
align-self: center;

${phoneQuery`
height: 160px;
width : 110px;
align-self: center;
margin-right: 0; 
  `}

`;

export const MovieTitle = styled.p`
color: ${(props) => props.theme.colors.white};
font-weight: 700;
margin-left: ${(props) => props.marginLeft || '3rem' };
margin-top: ${(props) => props.marginTop || '1rem' };
margin-right: ${(props) => props.marginRight}; 
max-width: 160px;
min-width: 100px;
${phoneQuery`
max-width: 110px;
min-width: 100px;

  `}
`;

export const MovieDate = styled.p`
color: ${(props) => props.theme.colors.offWhite};
margin-top: 0.7rem; 
margin-left: ${(props) => props.marginLeft || '3rem' };
`;

export default ThumbMovie;
