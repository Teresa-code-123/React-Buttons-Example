import React from "react";
const ColorButton = props => {
    // on click, fire setColor function from ColorPicker.js
    // this function will update selectedColor state in ColorPicker.js causing
    // a rerender of ColorPicker at Color: {selectedColor}
    const clickHanderFn = () => {
      props.setColor(props.colorName);
    };
    return (
      <button className="color_button" onClick={clickHanderFn}>
        <span role="img" aria-label="heart emoji">
          {props.emoji}
        </span>
      </button>
    );
  };
 

export default ColorButton;
