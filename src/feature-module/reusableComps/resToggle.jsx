/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

function ResToggle({ id, onchange, labelName, initialValue, onValueChange }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const toggleValue = () => {
    const newValue = value === 1 ? 0 : 1;
    setValue(newValue);
    onValueChange(id, newValue);
    console.log(labelName + ": " + newValue);
  };

  return (
    <div className="row mb-4">
      <label className="col-lg-12 col-form-label">{labelName}</label>
      <div className="col-lg-9">
        <div className="checkbox-apple">
          <input
            className="yep"
            id={id}
            type="checkbox"
            checked={value === 1}
            onChange={toggleValue}
          />
          <label htmlFor={id} className="form-label"></label>
          {/* <p className='ps-1'>{value === 1 ? 'Yes' : 'No'}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ResToggle;
