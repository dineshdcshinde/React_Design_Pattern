import React from "react";
import useDebounce from "../hooks/useDebounce";

const UseDebounce = () => {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, 1500);
  return (
    <>
      <b>Use Debounce Hook</b>

      <input
        type="text"
        placeholder="Type something..."
        name="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </>
  );
};

export default UseDebounce;
