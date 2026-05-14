import React from "react";
import ErrorBoundary from "./ErrorBoundary";

interface ErrorComponentProps {
    children: React.ReactNode;
  Fallback?: React.ComponentType;
    allowRetry?:boolean
} 

const ErrorComponent: React.FC<ErrorComponentProps> = ({children, Fallback, allowRetry}) => {
  return <ErrorBoundary allowRetry={allowRetry} Fallback={Fallback}>{children}</ErrorBoundary>;
};

export default ErrorComponent;
