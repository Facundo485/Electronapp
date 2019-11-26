import React from 'react';
import WordForm from './Search'
import Logo from '../logo_la_granja.png';




class App extends React.Component {
  render() {
    return (
      <div className = "form">
        <div className = "muni">
          <img src={Logo}/>
        </div>
        <WordForm/>
      </div>
    );
  }
}

export default App;