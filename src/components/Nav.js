import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => { } }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
              aria-label="close"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
