import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import HomePage from 'page/Home';
import reportWebVitals from 'reportWebVitals';
import MainLayout from 'layout/main/Main';
import Header from 'container/header/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from 'config/theme';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainLayout 
          header={<Header />}
          body={<HomePage/>}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
