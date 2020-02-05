import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

import {
  ThumbMovie,
  MovieTitle,
  H1,
  MovieDate,
  MovieBox,
} from '../Commons/Thumbs';

export const ListBlock = styled.div`
width : 100%;
margin: auto;
padding-top: 5%;
border-top: 2px solid ${(props) => props.theme.colors.offWhite};
${phoneQuery`
    width: 315px;
`};
`;

export const ListContainer = styled.div`
height: 100%;
margin : 1em auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

export const MovieBoxLi = styled(MovieBox)`
width: calc(100%/5.9);
height: 100%;
padding: 0 ; 
padding-top: 0;
margin: 2rem 0;
${phoneQuery`
width: 138px;
height: 243px;
  `}
`;

export const ThumbMovieLi = styled(ThumbMovie)`
width: 100%;
margin: 0;
${phoneQuery`
width: 100%;
height: 200px;
  `}
`;

export const MovieTitleLi = styled(MovieTitle)`
margin-left: 0;
width: 100%;
`;

export const H1Li = styled(H1)`
`;

export const MovieDateLi = styled(MovieDate)`
margin-left: 0;
`;
