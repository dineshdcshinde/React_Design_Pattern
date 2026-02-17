import React from "react";

interface Props {
    message: string; 
    severity?: "info" | "warning" | "error";
    positions?: "top" | "bottom" | "left" | "right";
    closeIcons?: React.ReactNode;
    



}

const ShowAlert: React.FC<Props> = () => {
  return <>show alert</>;
};
