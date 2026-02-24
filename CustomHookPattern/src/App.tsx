import "./App.css";
import React, { Suspense } from "react";
const Toggle = React.lazy(() => import("./components/Toggle"));

function App() {
  return (
    <>
      {/* Toggle */}
      <Suspense fallback={<div>Loading...</div>}>
        <Toggle />
      </Suspense>
    </>
  );
}

export default App;
