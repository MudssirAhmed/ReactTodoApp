import React from "react";

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
