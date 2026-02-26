import "./App.css";
import React, { Suspense } from "react";
// const Toggle = React.lazy(() => import("./components/Toggle"));
const UseDebounce = React.lazy(() => import("./components/UseDebounce"));

function App() {
  return (
    <>
      {/* Toggle */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Toggle /> */}
        <UseDebounce />
      </Suspense>
    </>
  );
}

export default App;
