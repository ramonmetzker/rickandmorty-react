import React from 'react';
import {CssBaseline} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import darkTheme from './theme/Theme';
import Home from './pages/Home';
import Character from './pages/Character';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  const theme = darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/character/:charId" component={Character} />
      <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
