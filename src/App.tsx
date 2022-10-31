import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { CreateAccount } from './components/CreateAccount';

function App() {
  return (
    <React.Fragment>
      {/* <Home/> */}
      <CreateAccount/>
    </React.Fragment>
  );
}

export default App;
