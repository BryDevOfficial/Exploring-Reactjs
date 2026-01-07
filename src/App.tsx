import { useState } from 'react'
import InventoryItem from './components/InventoryItem'
import FunctionalDynamicProps from './components/FunctionalDynamicProps'
import CottageItem from './components/CottageItem'
import CottageItemUseStateHook from './components/useState-hook/CottageItemUseStateHook'
import CottageItemMaintenance from './components/useState-hook/CottageItemMaintenance'
import CottageBookingCard from './components/useState-hook/CottageBookingCard'
import './App.css'
import ColorSwitch from './components/useState-hook/colorSwitch'

function App() {

  return (
    <>
    {/* <InventoryItem name="Soap" quantity={0} category="Hygiene" />
     <InventoryItem name="Shampoo" quantity={10} category="Hygiene" />
     <InventoryItem name="Lotion" quantity={15} category="Hygiene" />
     <InventoryItem name="Toothbrush" quantity={8} category="Hygiene" />
     <FunctionalDynamicProps name="Cottage #2" price="600 pesos" />
     <CottageItem name="Cottage #2" price={550} description="A big size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='available' />
     <CottageItem name="Cottage #1" price={650} description="A medium size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='unavailable' />
     <CottageItemUseStateHook name="Cottage #2" price={550} description="A big size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='available' />
     <CottageItemMaintenance name="Cottage #1" price={650} description="A medium size cottage near the white beach with peso wifi" imgurl="https://picsum.photos/200/300" status='maintenance' />s
     <CottageBookingCard cottageName="Cottage #5" capacity={6} isPromoActive={true} />
     */}
     <ColorSwitch backgroundColor='red' />
    </>
  )
}

export default App
