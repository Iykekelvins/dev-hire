import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className="container">
      {children}
      <Footer />
      </div>
    </div>
  )
}

export default Layout