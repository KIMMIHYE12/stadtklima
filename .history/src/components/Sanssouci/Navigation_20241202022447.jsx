import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link>
        <button>2024</button>
      </Link>
      <Link>
        <button>2030</button>
      </Link>
      <Link>
        <button>2050</button>
      </Link>
      <Link>
        <button>2080</button>
      </Link>
    </nav>
  );
};

export default Navigation;
