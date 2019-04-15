import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Home from './views/Home';
import {
  BrowserRouter,
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343a40'
    },
    secondary: {
      main: '#eeeeee'
    }
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
