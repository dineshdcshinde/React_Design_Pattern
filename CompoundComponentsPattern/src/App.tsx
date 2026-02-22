import React from "react";
import "./App.css";
import ModalWithPattern from "./with-pattern/ModalWithPattern";
import { CreateUserForm } from "./with-pattern/forms/CreateUserForm";

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      {/* 
        This modal works, but it has a "prop soup" problem.
        Every new customization (icon, extra text, custom footer, etc.) needs a new prop.
        Compound Components solve this by letting us compose sub-parts with children,
        so we can customize layout without continuously expanding the prop.
      */}
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      {/* Messy one  */}
      {/* <Modal
        actions={{ primary: "Confirm", secondary: "Cancel" }}
        open={openModal}
        onClose={() => setOpenModal(false)}
        body="This is the modal body content."
        header="Modal Header"
        confirmAction={() => {
          alert("primary action confirmed");
        }}
      /> */}

      <ModalWithPattern open={openModal}>
        <ModalWithPattern.Header onClose={() => setOpenModal(false)}>
          Create User
        </ModalWithPattern.Header>

        <ModalWithPattern.Body>
          <CreateUserForm />
        </ModalWithPattern.Body>

        <ModalWithPattern.Footer>
          <button onClick={() => setOpenModal(false)}>Cancel</button>

          <button type="submit" form="user-create-form">
            Save User
          </button>
        </ModalWithPattern.Footer>
      </ModalWithPattern>
    </>
  );
}

export default App;
