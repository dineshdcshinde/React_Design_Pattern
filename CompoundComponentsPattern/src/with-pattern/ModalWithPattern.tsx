import React from "react";

interface Props {
  children: React.ReactNode;
  open?: boolean;
}

interface ModalWithPatternType extends React.FC<Props> {
  Header: React.FC<{ children: React.ReactNode; onClose: () => void }>;
  Body: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
}

const ModalWithPattern: ModalWithPatternType = ({
  children,
  open,
}) => {
  if (!open) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>
  );
};

const Header: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="modal-header">
      {children}

      <button className="close-btn" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

ModalWithPattern.Header = Header;
ModalWithPattern.Body = Body;
ModalWithPattern.Footer = Footer;
export default ModalWithPattern;
