import { useState } from "react";
import React from 'react';
import styled from 'styled-components'
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';
import './App.css';

function App() {
  const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}  
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;
// Note that inside the ${} we are running a function that takes in props, and returns the correct background color based on props.type. This has endless possibilities!

const Button2 = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
const TomatoButton = styled(Button2)`
  color: tomato;
  border-color: tomato;
`;
  return (
    <WrapperDiv>
        <h1>Hello From the Home Component</h1>
      {/* <Button color="danger">Danger !</Button>
      <Alert color="primary">
  This is a primary alert — check it out!
</Alert> */}
   
    <Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
  </Button>
  <Button2>
  <div>
    <Button2>Normal Button</Button2>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
  </Button2>
  </WrapperDiv>
  );
}

export default App;
