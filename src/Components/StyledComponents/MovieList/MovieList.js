import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const ListContainer = styled.div`
height: 100%;
width : 90%;
max-width: 80vw;
margin : 2rem auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
overflow: hidden;
`;

export const MovieBox = styled.div`
height: 70%;
width: 35%;
max-width: 160px;
margin-bottom: 10%;
`;

export const ThumbMovie = styled.img`
width : 80%;
border-radius: 25px; 
margin: 0 10%;

`;

export const MovieTitle = styled.p`
color: ${(props) => props.theme.colors.white};
font-weight: 700;
margin: 1rem 10%;
max-width: 80%;
${phoneQuery`
max-width: 110px;
  `}
`;

export const H1 = styled.h1`
margin-left: 10%;
font-size: 2vmin;
color : ${(props) => props.theme.colors.white};
${phoneQuery`
margin-left: 10%;
  `}
`;

export const MovieDate = styled.p`
color: ${(props) => props.theme.colors.offWhite};
margin-top: 0.7rem; 
margin: 0 10%;
`;
