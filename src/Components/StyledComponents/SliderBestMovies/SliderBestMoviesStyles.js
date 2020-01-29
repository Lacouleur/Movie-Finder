import styled from '@emotion/styled';

export const SliderContainer = styled.div`
width: calc(100vw - 15rem);   
height: 20rem;
margin: 2rem auto 4rem auto;
padding-bottom: 2rem; 
border-bottom: 2px solid ${(props) => props.theme.colors.white};
`;

export const SlideBox = styled.div`
width: calc(100%/4); 
height: 20rem; 
`;

export const H1 = styled.h1`
color : ${(props) => props.theme.colors.white};
font-size : 1.5rem;
margin-left: 20rem;
margin-top: 5rem; 
`;

export const Arrow = styled.img`
width: 50px;
background-color: ${(props) => props.theme.colors.grey};
height: 50px;
padding: 6px; 
align-self: center; 
border-radius: 50%; 
`;
