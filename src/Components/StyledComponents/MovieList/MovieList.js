import styled from '@emotion/styled';

export const ListContainer = styled.div`
width: calc(100vw - 6rem);
height: 100%;
margin : 2rem auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 0 3rem;
`;

export const MovieBox = styled.div`
height: 400px;
width: calc(160px + 6rem);
`;

export const Paginate = styled.div`
color: pink;
  .pagingBox{
    width: 2rem;
    height: 2rem;
    padding: auto;
    background: none;
    border: 2px solid ${(props) => props.theme.colors.grey};
    border-radius: 20%;
    margin: 0; 
    position: relative;
    &-activePage{
      background: ${(props) => props.theme.colors.grey};
    }
  }
  .pagingContainer{
    max-width: 50%;
    height: 2rem; 
    display: flex;
    margin: auto; 
    justify-content: center; 
    flex-direction: row; 
    justify-content: space-between;
    padding-bottom: 1rem; 
  }

  .pagingText{  
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.offWhite};
    }
`;

export const Paging = styled.li`
width: 2rem;
height: 2rem;
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
