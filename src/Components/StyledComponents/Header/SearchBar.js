import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const SearchBar = styled.input`
width: calc(17em - 15%);
height: 2em; 
background: none;
padding-left: 2.5rem;
border : none; 
color: ${((props) => props.theme.colors.white)};
  ::placeholder {
    opacity: .2;
  }
${phoneQuery`
    padding-left: 1rem;
    width: 100%;
    height: 40px;
    line-height: 14px; 
    font-size: 12px; 
  `}
`;

export const Form = styled.form`
background-color: ${((props) => props.theme.colors.grey)};
border-radius: 25px;
width: 17em;
height: 2em; 
margin-top: 2rem;
align-self: center; 
position : relative;
${phoneQuery`
    width: 315px;
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
 left: 90%
  `}
`;
