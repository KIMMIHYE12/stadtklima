import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to='/sanssouci'>
        <button>2024</button>
      </Link>
      <Link to='/sanssouci/30'>
        <button>2030</button>
      </Link>
      <Link to='/sanssouci/50'>
        <button>2050</button>
      </Link>
      <Link to='/sanssouci/80'>
        <button>2080</button>
      </Link>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </nav>
  );
};

export default Navigation;
