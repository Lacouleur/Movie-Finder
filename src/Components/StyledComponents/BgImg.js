import styled from '@emotion/styled';

const BgImg = styled.div`
position: relative; 
height: 60vh;
max-width: 100vw;
&::before{
  opacity: 0.4; 
  content: "";
  width: 100%;
  height: 100%; 
  position: absolute; 
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,
  #0D1D38), url("/icons-img/backgroundimg.png") 0;
}
`;

export default BgImg;
