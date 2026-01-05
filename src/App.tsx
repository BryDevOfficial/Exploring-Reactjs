import { useState } from 'react'
import FunctionalDynamicProps from './components/FunctionalDynamicProps'
import './App.css'

function App() {

  return (
    <>
     <FunctionalDynamicProps name="Cottage #1" price="550 pesos" />
     <FunctionalDynamicProps name="Cottage #2" price="600 pesos" />
    </>
  )
}

export default App
