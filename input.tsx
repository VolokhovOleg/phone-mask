import React, { ChangeEvent, FC, useState } from "react";

type InputMaskProps = {
  mask: string;
  value: string;
  onChange?: (value: string) => void;
};

const InputMask: FC<InputMaskProps> = ({ mask, value, onChange }) => {
  const [filteredValue, setFilteredValue] = useState(filterMaskValue(mask, value));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const filteredValue = filterMaskValue(mask, newValue);
    setFilteredValue(filteredValue);
    if (onChange) {
      onChange(filteredValue);
    }
  };

  return (
    <input
      type="text"
      value={filteredValue}
      onChange={handleChange}
      placeholder={mask}
    />
  );
};

export default InputMask;
  
