import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

export const PaginateStyle = styled.div`
color: pink;
a:focus {
    outline:0;
}
.pagingContainer{
  max-width: 50%;
  height:2.5em; 
  display: flex;
  margin: auto; 
  justify-content: center; 
  flex-direction: row; 
  justify-content: space-between;
  padding-bottom: 1rem; 
}

.pagingBox{
  width:2.5em;
  height:2.5em;
  padding: auto;
  background-color: hidden;
  border: 2px solid ${(props) => props.theme.colors.grey};
  border-radius: 20%;
  margin: 0; 
  position: relative;
  &-activePage{
    background: ${(props) => props.theme.colors.grey};
  }
  :hover{
    cursor: pointer
  }
}
  .pagingText{ 
    padding:1.25em;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.offWhite};
    :hover{
    cursor: pointer
    }
  }
  .break {
    display: none; 
  }

    ${phoneQuery`
.pagingContainer{
  max-width: 266px;
  height: 6rem;
  flex-wrap: wrap;
  justify-content: none;  
}
.pagingBox{
  margin: 0 5px; 
  }
    `}
`;

export const Paging = styled.li`
width:2.5em;
height:2.5em;
padding: auto;
background: none;
border: 2px solid ${(props) => props.theme.colors.grey};
border-radius: 20%;
margin: 0; 
position: relative;
`;

export const PagingArrow = styled.img`
width: 40%;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
color: ${(props) => props.theme.colors.offWhite};
`;
