import logo from './logo.svg';
import './App.css';
import {Page, Player, SadFadingImages} from "./components"
import React from 'react';
import Snowfall from 'react-snowfall'
// import {DepthOfFieldSnowfall} from 'react-snowflakes';
const SnowStorm  = require('react-snowstorm');
  // Insert anywhere in your code and that's it!
const App : React.FunctionComponent = () => {


  return <Page>
    <Snowfall  />
    <Player url="https://soundcloud.com/baetrice-robert/where-are-you-christmas-piano" />
    <SadFadingImages urls={
      ["./assets/sadsanta2.jpg", 
      "./assets/deaths.png", 
      "./assets/grim-day.png",
      "./assets/sadFauci.jpg",
      "./assets/santMask.webp",
      "./assets/covid-santa.jpg"
      ]} 
      delayMs={20000} 
      speed={100}
    />
  </Page>
}
export default App;
