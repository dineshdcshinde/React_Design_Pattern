import React from "react";
interface Props {
  header: string;
  body: string;
  actions: {
    primary: string;
    secondary: string;
  };
  open: boolean;
  onClose: () => void;
  confirmAction?: () => void;
}

const Modal: React.FC<Props> = ({ header, body, actions, open,confirmAction, ...props }) => {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>{header}</h2>
            <button className="close-btn" onClick={props.onClose}>
              ×
            </button>
          </div>

          <div className="modal-body">
            <p>{body} </p>
          </div>

          {/* Footer actions are prop-driven; Compound Components make this area more flexible. */}
          <div className="modal-footer">
            <button className="btn cancel" onClick={props.onClose}>
              {actions.secondary}
            </button>
            <button className="btn primary" onClick={confirmAction}>{actions.primary}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
