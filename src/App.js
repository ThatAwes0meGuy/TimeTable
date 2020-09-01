import React, { Component } from 'react';
import Table from './Table/Table';
import DropDown from './DropDown/DropDown';

class App extends Component {
  state = {
    display: false
  }
  render() {
    
    return(
      <div>
        <DropDown />
        <Table display="Light"/>
      </div>
    );
  }
}

export default App;