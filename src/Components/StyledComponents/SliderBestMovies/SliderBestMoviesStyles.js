import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const SliderContainer = styled.div`
.slick-initialized .slick-slide{
    display: flex;
    justify-content: center;
};
width: 100%;   
padding-bottom: 5%; 
margin-bottom:5%;
border-bottom: 2px solid ${(props) => props.theme.colors.offWhite};
${phoneQuery`
    width: 404px;
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
