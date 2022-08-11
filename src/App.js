import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import MainComponent from './Components/MainComponent';
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <MainComponent/>
    </React.Fragment>
  );
}

export default App;
