import { useState } from "react";
import React from "react";
import styled from 'styled-components';
import Buttons from "./components/ButtonsComponents/Buttons.js";
import ColorPicker from "./components/ColorComponents/ColorPicker";
import './App.css';

function App() {
  return (
   
    <div className="wrapper">
    
     <Buttons/>
     <ColorPicker />
     </div>
  );
};
export default App;
