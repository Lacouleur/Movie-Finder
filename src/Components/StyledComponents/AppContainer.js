import styled from '@emotion/styled';


const AppContainer = styled.div`
margin: 0;
background-color: ${((props) => props.theme.colors.darkBlue)};
max-width: 100vw;
heigth: 100%;
position: relative;
font-family: 'Roboto', sans-serif;
`;

export default AppContainer;
