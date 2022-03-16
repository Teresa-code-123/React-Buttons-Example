import React, { useState } from "react";
import ColorButton from "./ColorButton";
import styled from 'styled-components';
// import data, it's a named import so use { }
import { buttonValues } from "../../data";

 function ColorPicker() {
  // set state initially to the data
  const [colorButtonValues, setColorButtonValues] = useState(buttonValues);
  // set selectedColor to the first data property color.
  const [selectedColor, setSelectedColor] = useState(buttonValues[0].color);

  return (
    <div>
      <p>
        {`Color: `}
        <span className="picker-choice">{selectedColor}</span>
      </p>
      <div className="button_container">
        {/* Use data to generate ColorButton. Add key since we're iterating over
         array and creating a group of components */}
        {colorButtonValues.map((buttonValue, index) => {
          return (
            <ColorButton
              key={index}
              str="string!!"
              emoji={buttonValue.value}
              colorName={buttonValue.color}
              setColor={setSelectedColor}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ColorPicker;