import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navigation from './Component/Navigation';
import Partners from './Component/Partners';
import Itwork from './Component/Itwork';
import Turpis from './Component/Turpis';
import Sagitis from './Component/Sagittis';
import Nonec from './Component/Nonec';
import Launch from './Component/Launch';
import Footer from './Component/Footer'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Partners/>
    <Itwork/>
    <Turpis/>
    <Sagitis/>
    <Nonec/>
    <Launch/>
    <Footer/>
    
    </>
  )
}

export default App
