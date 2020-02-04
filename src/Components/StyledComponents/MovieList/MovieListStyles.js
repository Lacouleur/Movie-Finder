import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

import {
  ThumbMovie,
  MovieTitle,
  H1,
  MovieDate,
  MovieBox
} from '../Commons/Thumbs';

export const ListBlock = styled.div`
width : 1024px;
margin: auto;
${phoneQuery`
    width: 315px;
`};
`;

export const ListContainer = styled.div`
height: 100%;
max-width: 80vw;
margin : 2rem auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

export const MovieBoxLi = styled(MovieBox)`
padding-top: 0;
margin: 2rem 0;
${phoneQuery`
width: 138px;
height: 243px;
  `}
`;


export const ThumbMovieLi = styled(ThumbMovie)`
${phoneQuery`
width: 100%;
height: 200px;
  `}
`;

export const MovieTitleLi = styled(MovieTitle)`
`;

export const H1Li = styled(H1)`
`;

export const MovieDateLi = styled(MovieDate)`
`;
