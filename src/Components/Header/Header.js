import React from "react";
import "./Header.css";

const header = props => {
  return <header className="header">{props.children}</header>;
};

export default header;
