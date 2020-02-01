import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const SliderContainer = styled.div`
width: 80%   
margin: 2rem 10% 4rem 10%;
padding-bottom: 5%; 
margin-bottom:5%;
border-bottom: 2px solid ${(props) => props.theme.colors.offWhite};

${phoneQuery`
    overflow: hidden;
    width: 100%;
`};
`;

export const SlideBox = styled.div`
width: 100%;
`;

export const H1 = styled.h1`
font-size: 2.5vmin;
color : ${(props) => props.theme.colors.white};
${phoneQuery`
padding-left: 10%;
`};
`;

export const Arrow = styled.img`
width: 6vmin;
height: 6vmin;
background-color: ${(props) => props.theme.colors.grey};
border-radius: 50%;
    ${phoneQuery`
    width: 0; 
    height: 0;
    opacity: 0;
    `};
`;
