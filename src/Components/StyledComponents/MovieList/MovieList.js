import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const ListContainer = styled.div`
height: 100%;
margin : 2rem 10%;
display: flex;
align-self: center;
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
width : 100%;
border-radius: 25px; 
align-self: center;
`;

export const MovieTitle = styled.p`
color: ${(props) => props.theme.colors.white};
font-weight: 700;
margin-top: 1rem;
max-width: 160px;
${phoneQuery`
max-width: 110px;
  `}
`;

export const H1 = styled.h1`
margin-left: 10%;
font-size: 4vmin;
color : ${(props) => props.theme.colors.white};
`;

export const MovieDate = styled.p`
color: ${(props) => props.theme.colors.offWhite};
margin-top: 0.7rem; 
`;
