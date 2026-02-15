import React, { Suspense } from "react";

const UserContainer = React.lazy(() => import("./components/UserContainer"));

export default function App() {
  return (
    <Suspense fallback={<div className="info">Loading...</div>}>
      <UserContainer />;
    </Suspense>
  );
}
