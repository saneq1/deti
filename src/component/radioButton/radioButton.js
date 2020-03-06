import React from "react";
import './radioButton.scss';

const RadioButton = (props) => {
  return (
      <label className="checkbox">
        <input
            type="radio"
            name='search'
            value={props.value}
            className="checkbox-radio"
            onChange={props.onChange}
        />
        <span className="checkbox-text">{props.text}</span>
      </label>
  );
};

export default RadioButton;