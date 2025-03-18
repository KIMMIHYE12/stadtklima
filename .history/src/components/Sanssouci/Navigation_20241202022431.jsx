import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link>
        <button>2024</button>
      </Link>
      <Link>
        <button>2024</button>
      </Link>{" "}
      <Link>
        <button>2024</button>
      </Link>{" "}
      <Link>
        <button>2024</button>
      </Link>
      <button>2030</button>
      <button>2050</button>
      <button>2080</button>
    </nav>
  );
};

export default Navigation;
