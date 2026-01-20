import reactLogo from './assets/react.svg'
import ChurchDonationTracker from './components/ChurchDonationTracker/ChurchDonationTracker'
import InventoryManager from './components/InventoryManager/InventoryManager'
import PayrollManager from './components/PayrollManager/PayrollManager'
import SeaEagleAdmin from './components/SeaEagleAdmin/SeaEagleAdmin'
import AdminControls from './components/testing/AdminControls'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
    {/*
    <AdminControls bookingCount={0} />
      <SeaEagleAdmin />
      <ChurchDonationTracker />
      <InventoryManager />
    */}
    <PayrollManager />

    </>
  )
}

export default App
