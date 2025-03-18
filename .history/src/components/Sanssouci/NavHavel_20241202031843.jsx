import React from "react";

const NavHavel = () => {
  return (
    <nav>
      <Link to='/havel'>
        <button>2024</button>
      </Link>
      <Link to='/havel/30'>
        <button>2030</button>
      </Link>
      <Link to='/havel/50'>
        <button>2050</button>
      </Link>
      <Link to='/havel/80'>
        <button>2080</button>
      </Link>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </nav>
  );
};

export default NavHavel;
