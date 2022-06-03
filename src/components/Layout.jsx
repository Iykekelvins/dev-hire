import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className="container">
      {children}
      </div>
    </div>
  )
}

export default Layout