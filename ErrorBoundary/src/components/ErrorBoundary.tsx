import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  allowRetry?: boolean;
  Fallback?: React.ComponentType;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  retry: number;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    retry: 0,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      retry: 0,
    };
  }

  handleRetry() {
    this.setState({
      hasError: false,
      error: null,
      retry: 1,
    });
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("error", error);
    console.error("errorInfo", errorInfo);
  }

  render() {
    const { children, allowRetry, Fallback } = this.props;


    if (this.state.hasError) {
      return (
        <>
          {Fallback ? (
            <Fallback />
          ) : (
            <span>
              Error occurred! Solve this one.
              {this?.state?.error ? this?.state?.error?.message: 'null'}
            </span>
          )}

          {!!allowRetry && (
            <button onClick={() => this.handleRetry()}>retry</button>
          )}
        </>
      );
    }

    return <>{children}</>;
  }
}
