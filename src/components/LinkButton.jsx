import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({ path, onClick }) => {
  return (
    <Link to={path}>
      <button onClick={onClick}>next</button>
    </Link>
  );
};
