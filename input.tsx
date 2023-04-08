const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const filteredValue = filterMaskValue(mask, newValue);
    setInputValue(filteredValue);
    if (onChange) {
      onChange(filteredValue);
    }
  };

  const filteredValue = filterMaskValue(mask, inputValue);

  return (
    <input
      type="text"
      value={filteredValue}
      onChange={handleChange}
      placeholder={mask}
    />
  );
