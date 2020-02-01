import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const SearchBar = styled.input`
width: calc(17em - 15%);
height: 2em; 
background-color: ${((props) => props.theme.colors.grey)};
border : none; 
border-radius: 25px;
padding-left: 15%;
color: ${((props) => props.theme.colors.white)};
  ::placeholder {
    opacity: .2;
  }
${phoneQuery`
    width: 90%;
    max-width: 100%;
    height: 2.5rem;
    padding-left: 5%;
    padding-right: 15%;
    font-size: 1.5em;
  `}
`;

export const Form = styled.form`
width: 17em;
height: 2em; 
align-self: center; 
position : relative;
${phoneQuery`
    margin-left: 10%;
    margin-right: 15%;
    width: 100vw;
    height: 2.5rem;
  `}
`;

export const SearchIcon = styled.img`
width: 20px; 
top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
left: 5%;
position : absolute; 
${phoneQuery`
 left: 100%

  `}
`;
