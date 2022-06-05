import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../utils/Navlinks';
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg';

const PhoneSidebar = ({setShowNav}) => {
  return (
    <div className='sidebar phone-sidebar'>
        <h1>Dev<span>Hire</span></h1>
        <ul className="sidebar--links">
        {links.map((link) => (
            <li key={link.title}
            onClick={()=> setShowNav(false)}
            >
            <NavLink activeclassname="active" to={link.url} >
              <div className="svg">
              {link.svg}
              </div>
              <span> {link.title}</span>
            </NavLink>
            </li>
        ))}
      </ul>
      <button className='close'
      onClick={()=> setShowNav(false)}
      >
            <CloseIcon/>
      </button>
    </div>
  )
}

export default PhoneSidebar