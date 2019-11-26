import React from 'react';
import WordForm from './Search'
import Logo from '../logo_la_granja.png';




class App extends React.Component {
    render() {
      return (
        <div className = "form">
            <WordForm/>
            <div className = "Muni">
                <img src={Logo}/>
            </div>
        </div>
      );
    }
  }

export default App;