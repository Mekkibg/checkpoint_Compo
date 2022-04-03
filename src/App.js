import React from 'react'
import Portfolio from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';
import './Style.css';

function App() {
  return (
    <div className="App">
    <Portfolio/>
    <FullName/>
    <Adress/>
    </div>
  );
}

export default App;
