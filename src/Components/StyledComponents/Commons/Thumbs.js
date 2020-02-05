import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const ThumbMovie = styled.img`
width: 60%;
margin-left: 20%;
border-radius: 25px; 
align-self: center;

${phoneQuery`
margin-left: 0;
margin-right: 10%;
width: 80%;
  `}
`;

export const MovieBox = styled.div`
padding-top: 2rem;
${phoneQuery`
margin-top: 2em;
padding-top: 0;
width: 100%;
height: 100%;
  `}
`;

export const MovieTitle = styled.p`
color: ${(props) => props.theme.colors.white};
font-size: 14px; 
line-height: 17px;
text-align: left;
font-weight: 400;
margin-top: 5%;
margin-left: 20%;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
${phoneQuery`
margin-left: 0;
  `}
`;

export const MovieDate = styled.p`
font-size: 12px; 
line-height: 14px;
color: ${(props) => props.theme.colors.offWhite};
margin-left: 20%;
${phoneQuery`
margin-top:.3rem;
margin-left: 0;
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
