import styled from '@emotion/styled';

export const BestMoviesContainer = styled.div`
height: 20rem;
display: flex; 
margin: 2rem 6rem 4rem 6rem;
justify-content: center;
border-bottom: 2px solid ${(props) => props.theme.colors.white};
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
