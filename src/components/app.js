import React, { Component } from 'react';
import Header from './header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
      <div>
          <MultiThemeProvider muiTheme={getMuiTheme()}>
            <Header />
            
        </MultiThemeProvider>
        <MultiThemeProvider muiTheme={getMuiTheme()}>
            {this.props.children}
        </MultiThemeProvider>
       
        </div>
    );
  }
}