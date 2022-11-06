import { useState } from 'react';
import useWindowDimensions from './utils/useWindowsDimensions';
import "./assets/css/app.scss";
import bg from "./assets/img/bg-dark.jpg";
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Music from './routes/Music';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  //Get window dimensions for scaling
  const { height, width } = useWindowDimensions();

  //Calculate scaling from window dimensions
  let scale = Math.min( 
    width / 1260, 
    height / 780 
  );

  return (
    <div className="app-container" style={{transform:`scale(${scale})`}}>
      <div className="app-box" style={{backgroundImage:`url(${bg})`}}>
        <div className="app-content">
          <Router>
            <TopBar></TopBar>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/navigation" element={<Navigation/>}/>
              <Route path="/music" element={<Music/>}/>
            </Routes>
            <BottomBar></BottomBar>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
