import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductEntry from './components/ProductEntry'
import SeaEagleLogin from './components/SeaEagleLogin'
import CottageCard from './components/CottageCard'


function App() {
 return (
    <div className="App">
      {/** 
       * 
       <SeaEagleLogin />
       * 
      */}
      <CottageCard 
        name="Cottage 1"
        type="Family Cottage"
        status="available"
        price={5000}
      />
    </div>
  )
}

export default App
