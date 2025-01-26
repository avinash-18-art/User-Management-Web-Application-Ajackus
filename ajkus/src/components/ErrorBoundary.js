import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // Lifecycle method to catch errors in child components
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  // Reset error state for retry functionality
  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      // Render fallback UI
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <p>We encountered an error while displaying this page.</p>
          {error && <details>{error.toString()}</details>}
          <button onClick={this.resetError} className="retry-button">
            Retry
          </button>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
