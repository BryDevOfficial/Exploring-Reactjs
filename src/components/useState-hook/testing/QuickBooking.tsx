import { useState } from 'react'

interface QuickBookingProps {
    cottageName: string;
    customerName: string;
    nights: number;
    pricePerNight: number;

}

function QuickBooking({cottageName, customerName, nights, pricePerNight, ...rest}: QuickBookingProps) {
  
  const [booking, setBooking] = useState(
    {
    customer: customerName,
    nightsBooked: nights,
    isConfirmed: false,
    hasDiscount: false
    }
  );

  const subTotal = booking.nightsBooked * pricePerNight;
  const discountedAmount = booking.hasDiscount ? subTotal * 0.1 : 0;
  const totalPrice = subTotal - discountedAmount;

  const handleNameChange = (newName: string) => {
    setBooking((prev) => ({
        ...prev,
        customer: prev.customer === newName ? customerName: newName
    }))
  }

  const handleNightsChange = () => {
    setBooking((prev) => ({
        ...prev,
        nightsBooked: prev.nightsBooked + 1,
        totalPrice: (prev.nightsBooked + 1) * pricePerNight
    }))
  }

  const toggleDiscount = () => {
    setBooking(prev => ({ ...prev, hasDiscount: !prev.hasDiscount }));
  }

  return (
    <div
    {...rest}
    style={{
        padding: '45px',
        border: '2px solid #2ecc71',
        borderRadius: '10px',
        backgroundColor: booking.isConfirmed ? '#274baeff' : '#fdefffff',
        color: booking.isConfirmed ? 'white' : 'black',
        width: '250px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
        
    }}
    >
        {booking.isConfirmed ? '✅' : '🕛'}
        <h3>{cottageName}</h3>
        <h4>Quick Booking</h4>
        <p><strong>Customer:</strong> {booking.customer}</p>
        <p><strong>Nights:</strong>  {booking.nightsBooked}</p>
        <p>Price Per Night: {pricePerNight}</p>
        <p>Total: ₱{totalPrice} {booking.hasDiscount && "(10% Off!)"}</p>
        <p
        style = {{
        color: booking.isConfirmed ? 'lightgreen' : 'orange',
        fontWeight: 'bold'
        }}
        >{booking.isConfirmed ? "Booking Confirmed!" : "Pending Confirmation"}</p>
        
        <div style={
            {
            display:'flex',
            flexDirection: 'column',
            gap: '10px'
            }
        }>
        <button onClick={() => handleNameChange("BryDev")}>
        Change Customer Name
        </button>

        <button onClick={handleNightsChange}>Add Night</button>
        <button style={{
            backgroundColor: booking.isConfirmed ? 'green' : 'gray',
        }} onClick={() => setBooking((prev) => ({ ...prev, isConfirmed: !prev.isConfirmed }))}>
        Confirm Booking
        </button>
        <button onClick={toggleDiscount}>
        {booking.hasDiscount ? "Remove Discount" : "Apply 10% Discount"}
       </button>
        </div>


    </div>
  )
}

export default QuickBooking