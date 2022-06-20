import React, { Component } from 'react';
import resume from './resume.pdf'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <embed 
          src={resume}
          type="application/pdf"
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
        />
        <p>This portfolio site is built using React and is a work in progress.</p>
      </div>
    );
  }
}

export default App;
