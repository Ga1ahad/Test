import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import NavBar from './components/Navbar'
import PreLoginNavbar from './components/PreLoginNavbar'
import Wardrobe from './components/Wardrobe';
import TodaysSet from './components/TodaysSet';
import Suitcases from './components/Suitcases';
import SideLogin from './components/SideLogin';
import SignUp from './components/SignUp';
import {BrowserRouter , Route, Switch} from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className = "bg">  
        <PreLoginNavbar />
       <Route path = "/Wardrobe" component ={Wardrobe}/>
       <Route path = "/TodaysSet" component ={TodaysSet}/>
       <Route path = "/Suitcases" component ={Suitcases}/>
       <Route path = "/SideLogin" component ={SideLogin}/>
       <Route path = "/SignUp" component ={SignUp}/>

      </div>
    </BrowserRouter>
  

  );
}

export default App;
