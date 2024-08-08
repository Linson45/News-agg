import React, { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import ContextProvider, { NewsContext } from './API/Context';
import InshortTabs from './components/InshortTabs';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme.dark ? '#282C35' : 'white')};
    color: ${(props) => (props.theme.dark ? 'white' : 'black')};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const lightTheme = {
  dark: false,
};

const darkThemeObject = {
  dark: true,
};

const AppContent = () => {
  const { darkTheme } = useContext(NewsContext);
  const currentTheme = darkTheme ? darkThemeObject : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <InshortTabs />
      </Container>
    </ThemeProvider>
  );
};

const App = () => (
  <ContextProvider>
    <AppContent />
  </ContextProvider>
);

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
