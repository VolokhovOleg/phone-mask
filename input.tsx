function filterMaskValue(mask: string, value: string): string {
  const filteredValue = value.replace(/[^\d\+()\s-]/g, ''); // Удаляем все символы, кроме допустимых для маски
  let result = '';
  let valueIndex = 0;
  for (let i = 0; i < mask.length; i++) {
    if (valueIndex >= filteredValue.length) {
      break;
    }
    const maskChar = mask[i];
    const valueChar = filteredValue[valueIndex];
    if (maskChar === '(' || maskChar === ')' || maskChar === '+' || maskChar === '-' || maskChar === ' ') {
      result += maskChar;
    } else if (maskChar === '#') {
      if (/\d/.test(valueChar)) {
        result += valueChar;
        valueIndex++;
      }
    } else {
      result += maskChar;
    }
  }
  return result;
}

const InputPhone: FC<InputMaskProps> = ({ mask, value, onChange }) => {
  const [v, sv] = useState("");

  useEffect(() => {
    console.log(v);
  }, [v]);

  const delayedOnChange = useCallback(
    debounce((value: string) => {
      if (onChange) {
        onChange(value);
      }
    }, 1000),
    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    sv(filterMaskValue(mask, newValue));
    delayedOnChange(filterMaskValue(mask, newValue));
  };
  
  return (
    <input
      type="text"
      value={v}
      onChange={handleChange}
      placeholder={mask}
    />
  );
};
