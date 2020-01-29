import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const SliderContainer = styled.div`
width: calc(100vw - 15rem);   
height: 20rem;
margin: 2rem auto 4rem auto;
padding-bottom: 2rem; 
border-bottom: 2px solid ${(props) => props.theme.colors.white};
${phoneQuery`
    width: 350px;
    `};
`;

export const SlideBox = styled.div`
width: calc(100%/4); 
height: 20rem;
${phoneQuery`

    `};
 
`;

export const H1 = styled.h1`
color : ${(props) => props.theme.colors.white};
font-size : 1.5rem;
margin-left: 6rem;
margin-top: 5rem; 
`;

export const Arrow = styled.img`
width: 6vmin;
height: 6vmin;
background-color: ${(props) => props.theme.colors.grey};
padding: 6px; 
align-self: center; 
border-radius: 50%;
    ${phoneQuery`
    width: 0; 
    height: 0;
    opacity: 0;

    `};
`;
