import React from "react";

interface Props {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  body?: React.ReactNode;
}

const CardContainer: React.FC<Props> = ({ header, footer, body }) => {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};


export default CardContainer