import styled from '@emotion/styled';

export const ThumbMovie = styled.img`
height: 250px;
width : 160px;
margin-top: ${(props) => props.marginTop};
margin-right: ${(props) => props.marginRight}; 
margin-bottom: ${(props) => props.marginBottom};
margin-left: ${(props) => props.marginLeft};
margin:${(props) => props.margin};
border-radius: 25px; 
align-self: center;
`;

export const MovieTitle = styled.p`
color: ${(props) => props.theme.colors.white};
font-weight: 700;
margin-left: 4rem;
margin-top: 1rem; 
`;

export const MovieDate = styled.p`
color: ${(props) => props.theme.colors.offWhite};
margin-top: 0.7rem; 
margin-left: 4rem;
`;

export default ThumbMovie;
