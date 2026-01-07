import { useState } from 'react'

interface QuickBookingProps {
    cottageName: string;
    customerName: string;
    nights: number;

}

function QuickBooking({cottageName,customerName, nights, ...rest}: QuickBookingProps) {

  const [booking, setBooking] = useState(
    {
    cottage: cottageName,
    customer: customerName,
    nightsBooked: nights,
    isConfirmed: false
    }
  );

  const handleNameChange = (newName: string) => {
    setBooking((prev) => ({
        ...prev,
        customer: newName
    }))
  }

  return (
    <div
    {...rest}
    style={{
        padding: '45px',
        border: '2px solid #2ecc71',
        borderRadius: '10px',
        backgroundColor: booking.isConfirmed ? '#27ae60' : '#ecf0f1',
        color: booking.isConfirmed ? 'white' : 'black',
        width: '250px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
        
    }}
    >
        <h3>{booking.cottage}</h3>
        <h4>Quick Booking</h4>
        <p><strong>Customer:</strong> {booking.customer}</p>
        <p><strong>Nights:</strong> {booking.nightsBooked}</p>
        <p>{booking.isConfirmed ? "Booking Confirmed!" : "Pending Confirmation"}</p>
        <button onClick={() => handleNameChange("BryDev")}>
        Change Customer Name
        </button>


    </div>
  )
}

export default QuickBooking