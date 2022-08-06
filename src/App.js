import logo from './logo.svg';
import React from 'react';
import './App.css';
import Register from './Components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className='outer'>
        <div className='inner'>
          <Register/>
        </div>
      </div>
    </div>
  );
}

export default App;
