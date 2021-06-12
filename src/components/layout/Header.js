import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyles}>
      {" "}
      <h1>Todo app</h1>
    </header>
  );
}

const headerStyles = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyles = {
  color: "#fff",
};
