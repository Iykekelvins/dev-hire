import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { ReactComponent as MenuIcon } from '../assets/svgs/menu.svg';
import { AnimatePresence, motion } from 'framer-motion';
import PhoneSidebar from './PhoneSidebar';
  
const Layout = ({children}) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='layout'
    >
      <button className="menu"
      onClick={()=> setShowNav(true)}
      >
       <MenuIcon/>
      </button>
        <Sidebar 
      showNav={showNav}
      />
      <AnimatePresence>
      {
        showNav &&
        <motion.aside
        initial={{
          x: -200,
          opacity: 0,
          top:0,
          position:"fixed"
        }}
        transition={{ type: "tween", duration: 0.5 }}
        animate={{ x: 0, opacity: 1, zIndex: 9 }}
        exit={{
          x: -200,
          opacity: 0,
        }}
        >
          <PhoneSidebar 
          setShowNav={setShowNav}
          />
        </motion.aside>
      }
      </AnimatePresence>
      <div className="container">
      {children}
      <Footer />
      </div>
    </div>
  )
}

export default Layout