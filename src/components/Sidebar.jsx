import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../utils/Navlinks';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <h1>Dev<span>Hire</span></h1>
        <ul className="sidebar--links">
        {links.map((link) => (
            <li key={link.title}>
            <NavLink activeclassname="active" to={link.url} >
              <div className="svg">
              {link.svg}
              </div>
              <span> {link.title}</span>
            </NavLink>
            </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar