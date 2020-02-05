import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const SliderContainer = styled.div`
width: 95%;   
margin: auto;
margin-bottom:5%;
${phoneQuery`
    overflow: hidden;
    width: 130%;  
`};
`;

export const SlideBox = styled.div`
width: 100%;
height: 100%;
background-color: greenyellow;

`;

export const H1 = styled.h1`
font-size: 26px; 
line-height: 31px;
color : ${(props) => props.theme.colors.white};
${phoneQuery`
font-size: 16px; 
line-height: 19px;
width: 404px;
`};
`;

export const Arrow = styled.img`
background-color: ${(props) => props.theme.colors.grey};
border-radius: 50%;
padding: 3px;
width: 6vmin;
height: 6vmin;
min-width: 40px;
min-height: 40px;
    ${phoneQuery`
    width: 0; 
    height: 0;
    opacity: 0;
    `};
`;
