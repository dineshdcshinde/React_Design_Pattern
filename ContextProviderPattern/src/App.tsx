import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import MissingProviderExample from "./components/MissingProviderExample";
import UserDashboard from "./components/UserDashboard";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <>
      <p>Context Provider Pattern</p>

      <UserProvider>
        <UserDashboard />
      </UserProvider>

      {/* Use of hook out of the provider */}
      <ErrorBoundary
        fallback={
          <p style={{ backgroundColor: "#ec8282" }}>
            User data is unavailable outside UserProvider.
          </p>
        }
      >
        <MissingProviderExample />
      </ErrorBoundary>
    </>
  );
}

export default App;
