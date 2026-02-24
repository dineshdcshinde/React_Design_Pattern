import React from "react";
import useToggle from "../hooks/useToggle";

interface Props {}

const Toggle: React.FC<Props> = () => {
  const { isToggled, handleToggle } = useToggle();

  return <button  onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>;
};

export default Toggle;
