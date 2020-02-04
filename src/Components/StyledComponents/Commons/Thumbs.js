import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const ThumbMovie = styled.img`
width: 138px;
height: 200px;
border-radius: 25px; 
align-self: center;

${phoneQuery`
width : 86px;
height: 124px;
align-self: center;
margin-right: 0; 
  `}
`;

export const MovieBox = styled.div`
width: 138px;
height: 243px;
padding-top: 2em;
margin-bottom: 10%;
${phoneQuery`
height: 167px;
width : 86px;
  `}
`;

export const MovieTitle = styled.p`
color: ${(props) => props.theme.colors.white};
text-align: left;
max-height: 1em;
font-weight: 700;
${phoneQuery`
margin-top:.5rem;
width: 100%;
min-width: 100px;
font-size: 14px; 
line-height: 17px;
  `}
`;

export const MovieDate = styled.p`
font-size: 12px; 
line-height: 14px;
color: ${(props) => props.theme.colors.offWhite};
margin-top: 0.7rem; 
${phoneQuery`
margin-top:.3rem;
  `}
`;

export const H1 = styled.h1`
font-size: 26px;
line-height: 31px; 
color : ${(props) => props.theme.colors.white};
${phoneQuery`
font-size: 16px; 
line-height: 19px;
  `}
`;
