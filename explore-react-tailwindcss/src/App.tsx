import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductEntry from './components/ProductEntry'
import SeaEagleLogin from './components/SeaEagleLogin'
import CottageCard from './components/CottageCard'
import CottageForm from './components/CottageForm'
import KeyObject from './components/KeyObject'
import CottageBookingPro from './components/CottageBookingPro'
import CottageBookingConfirmed from './components/CottageBookingConfirmed'
import TheGuestFinder from './components/TheGuestFinder'
import StaffPayrollManager from './components/Exercise/StaffPayrollManager'
import SeaEagleInventory from './components/Exercise/SeaEagleInventory'
import RoomStatusDashboard from './components/Exercise/RoomStatusDashboard'
import ShopManager from './components/Exercise/ShopManager'
import PayrollSystem from './components/onChangeExercise/PayRollSystem'
import SkillLink from './components/onChangeExercise/SkillLink'
import RentingSystem from './components/onChangeExercise/RentingSystem'
import ChurchFinancialSystem from './components/onChangeExercise/ChurchFinancialSystem'


function App() {
 return (
    <div className="App">
      {/** 
       * 
       <SeaEagleLogin />
       * 
      <CottageCard name="Cottage 1" type="Family Cottage" status="available"price={5000} />
      <CottageForm />
      <KeyObject />
      <CottageBookingPro />
      <CottageBookingConfirmed />
      <TheGuestFinder />
      <StaffPayrollManager />
      <SeaEagleInventory />
      <RoomStatusDashboard />
      <ShopManager />
      <PayrollSystem />
      <SkillLink />
      <RentingSystem />
      */}
      <ChurchFinancialSystem />
    </div>
  )
}

export default App
