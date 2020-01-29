import styled from '@emotion/styled';

export const ThumbMovie = styled.img`
background-color: blue; 
height: 250px;
width : 160px;
margin-top: ${(props) => props.marginTop};
margin-right: ${(props) => props.marginRight}; 
margin-bottom: ${(props) => props.marginBottom};
margin-left: ${(props) => props.marginLeft};
border-radius: 25px; 
align-self: center;
`;