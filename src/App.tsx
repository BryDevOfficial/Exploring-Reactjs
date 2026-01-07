import { useState } from 'react'
import InventoryItem from './components/InventoryItem'
import FunctionalDynamicProps from './components/FunctionalDynamicProps'
import CottageItem from './components/CottageItem'
import CottageItemUseStateHook from './components/useState-hook/CottageItemUseStateHook'
import CottageItemMaintenance from './components/useState-hook/CottageItemMaintenance'
import CottageBookingCard from './components/useState-hook/CottageBookingCard'
import ColorSwitch from './components/useState-hook/ColorSwitch';
import './App.css'
import AmenityCard from './components/useState-hook/AmenityCard';
import CottageGuestCounter from './components/useState-hook/CottageGuestCounter'
import CottageEditor from './components/useState-hook/CottageEditor'
import QuickBooking from './components/useState-hook/testing/QuickBooking'

function App() {

  return (
    <>
    {/* <InventoryItem name="Soap" quantity={0} category="Hygiene" />
     <ColorSwitch backgroundColor='red' />
     <InventoryItem name="Shampoo" quantity={10} category="Hygiene" />
     <InventoryItem name="Lotion" quantity={15} category="Hygiene" />
     <InventoryItem name="Toothbrush" quantity={8} category="Hygiene" />
     <FunctionalDynamicProps name="Cottage #2" price="600 pesos" />
     <CottageItem name="Cottage #2" price={550} description="A big size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='available' />
     <CottageItem name="Cottage #1" price={650} description="A medium size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='unavailable' />
     <CottageItemUseStateHook name="Cottage #2" price={550} description="A big size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='available' />
     <CottageItemMaintenance name="Cottage #1" price={650} description="A medium size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='maintenance' />s
     <CottageBookingCard cottageName="Cottage #5" capacity={6} isPromoActive={true} />
     <AmenityCard cottageName="Cottage #10" basePrice={1200} id="amenity-card-1" className="custom-amenity-card" />
     <CottageGuestCounter cottageName="Cottage #3" maxCapacity={15} />
     <CottageEditor initialName="Cottage #7" initialPrice={800} style={{ marginTop: '20px' }} />
     */}
     <QuickBooking cottageName="Cottage #1" customerName="John Doe" nights={3} pricePerNight={500} />
    </>
  )
}

export default App
