import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          {/* <a href="/">Inicio</a> */}
          <Link to="/">Inicio</Link>
        </li>
        <li>
          {/* <a href="/blog">Blog</a> */}
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
