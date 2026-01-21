import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EquipmentCounter from './week-1/testing/EquipmentCounter'
import KayakCounter from './week-1/task-project-build/counter-app/KayakCounter'
import ProductSelector from './week-1/task-project-build/counter-app/ProductSelector'
import BoatBooking from './week-1/task-project-build/counter-app/BoatBooking';
import ChurchCounter from './week-1/task-project-build/counter-app/ChurchCounter'

function App() {

  return (
    <>
     {/*
     <EquipmentCounter />
     <KayakCounter />
     <ProductSelector />
     <BoatBooking />
     */}
     <ChurchCounter />
    </>
  )
}

export default App
