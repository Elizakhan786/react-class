import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme}>
        <h4>this is navbar</h4>
        <p>Lorem, ipsum.</p>
      </Navbar>
    </div>
  )
}

export default App
