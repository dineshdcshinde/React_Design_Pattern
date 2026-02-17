import React from "react";

const CardContainer = React.lazy(() => import("./components/CardContainer"));

const ConfirmContainer = React.lazy(
  () => import("./components/ConfirmContainer"),
);

function App() {
  const [confirmOpen, setConfirmOpen] = React.useState(true);
  return (
    <>
      <h3>React Design Pattern #2 Slot Pattern </h3>

      {/* Explict Slot */}
      <CardContainer
        header="Card Header"
        body={<p>This is the card body content.</p>}
        footer={<small>Card Footer</small>}
      />

      {/* Named Slot */}
      <button
        style={{ marginTop: "2rem" }}
        onClick={() => setConfirmOpen(true)}
      >
        Open Confirm Container
      </button>
      <ConfirmContainer
        title="Confirm Action"
        message="Are you sure you want to proceed?"
        primaryAction={
          <button
            className="primary-action"
            onClick={() => console.log("Confirmed!")}
          >
            Yes
          </button>
        }
        secondaryAction={<button className="secondary-action">No</button>}
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
      />



      {/*  */}
    </>
  );
}

export default App;
