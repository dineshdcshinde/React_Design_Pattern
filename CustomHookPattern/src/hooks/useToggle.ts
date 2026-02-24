import React from "react";

const useToggle = (initialValue?: boolean) => {
  const [isToggled, setIsToggled] = React.useState(initialValue || false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return {
    isToggled,
    handleToggle,
  };
};

export default useToggle;
