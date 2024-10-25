/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

function ResCheckbox({ id, onchange, labelName, initialValue, onValueChange }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const toggleValue = () => {
    const newValue = value === 1 ? 0 : 1;
    setValue(newValue);
    onValueChange(id, newValue);
  };

  return (
    <>
      <div className="mb-3 row align-items-center">
        <label className="col-form-label col-lg-4">{labelName}</label>
        <div className="col-md-8">
          <div className="form-check mt-2">
            <input
              className="check-input"
              type="checkbox"
              id={id}
              checked={value === 1}
              onChange={toggleValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResCheckbox;
