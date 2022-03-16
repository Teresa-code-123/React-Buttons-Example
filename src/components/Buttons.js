import { useState } from "react";
import React from 'react';
import styled from 'styled-components'
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';


function Buttons() {
    const WrapperDiv = styled.div`
      width: 100%;
      height: 100%;
  `;
  
  const Buttons = styled.button`
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
  const Buttons1 = styled.button`
  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px
  ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
  
  
  `
  
  
  
  const Buttons2 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;
  const TomatoButtons = styled(Buttons2)`
    color: tomato;
    border-color: tomato;
  `;
    return (
      <WrapperDiv>
          <h1>Hello From the Home Component</h1>
          <Buttons1 type="danger">Danger!</Buttons1>
        <Alert color="primary">
    This is a primary alert — check it out!
  </Alert>
     
      <Buttons>
      <Buttons type="primary">Primary</Buttons>
      <Buttons type="success">Success</Buttons>
      <Buttons type="danger">Danger</Buttons>
      <Buttons type="warning">Warning</Buttons>
    </Buttons>
    <Buttons2>
    <div>
      <Buttons2>Normal Button</Buttons2>
      <TomatoButtons>Tomato Button</TomatoButtons>
    </div>
    </Buttons2>
    </WrapperDiv>
    );
  }


export default Buttons;