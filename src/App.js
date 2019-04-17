import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Home from './views/Home';
import {
  BrowserRouter,
} from "react-router-dom";
import { blue, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber
  },
  typography: {
    useNextVariants: true,
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
