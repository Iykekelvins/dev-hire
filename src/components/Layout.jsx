import React, { useState } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className='layout'
    onClick={()=> setShowOptions(!showOptions)}
    >
      <Sidebar />
      <div className="container">
      {children}
      <Footer
      showOptions={showOptions}
      setShowOptions={setShowOptions}
      />
      </div>
    </div>
  )
}

export default Layout