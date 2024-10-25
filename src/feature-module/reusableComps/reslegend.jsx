/* eslint-disable react/prop-types */
import React from "react";
import "./legendTag.css";
const ResLegend = (props) => {
  const classes = "border p-2 legend" + props.className;
  const textarea = "txtlegent" + props.className;
  return (
    <div>
      <fieldset className={classes}>
        <legend className="float-none w-auto p-2">{props.title}</legend>
        <textarea className={textarea}>{props.textarea}</textarea>
      </fieldset>
    </div>
  );
};

export default ResLegend;
