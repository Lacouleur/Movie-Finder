import styled from '@emotion/styled';


const SearchBar = styled.input`
width: 17em;
height: 2em; 
background-color: ${((props) => props.theme.colors.grey)};
position: absolute;
right: 6rem;
top: 2em;
border : none; 
border-radius: 25px;
padding-left: 3rem;
color: ${((props) => props.theme.colors.white)};
`;

export default SearchBar;
