import "./App.css";
import PermissionGateComponent from "./components/PermissionGateComponent";

function App() {
  return (
    <>
      <PermissionGateComponent
        user={"Guest"}
        render={(user) => {
          return (
            <>
              {user} hey!
              <br />
              You have access !!!!
            </>
          );
        }}
      />
    </>
  );
}

export default App;

