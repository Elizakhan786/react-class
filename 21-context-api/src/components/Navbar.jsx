import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children,theme}) => {
    console.log(theme)
    
  return (
    <div className='nav'>
      <h2>sheryians</h2>
        {children[0]}
        {theme}
      <Nav2 theme={theme}>
        <h4>Website</h4>
      </Nav2>
    </div>
  )
}

export default Navbar
