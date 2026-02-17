import React from "react";

interface Props {
  title?: React.ReactNode;
  message?: React.ReactNode;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  isOpen: boolean; // for visibility control
  onClose?: () => void;
}

const ConfirmContainer: React.FC<Props> = ({
  title,
  message,
  primaryAction,
  secondaryAction,
  isOpen = true,
  onClose,
}) => {
  if (!isOpen) return null;

  const closeConfirmContainer = (e: React.MouseEvent) => {
    e?.stopPropagation();
    onClose?.();
  };

  return (
    <>
      <div className="confirm-overlay" onClick={closeConfirmContainer} />
      <div className="confirm-container">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="actions">
          <span className="primary-action">{primaryAction}</span>
          {/* one can also put the action with the specific buttons if someone is not
          passing that is upto you how you want to use it. */}
          <span className="secondary-action">{secondaryAction}</span>
        </div>
      </div>
    </>
  );
};

export default ConfirmContainer;
