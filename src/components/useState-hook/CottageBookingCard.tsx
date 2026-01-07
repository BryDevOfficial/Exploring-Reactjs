import { useState } from 'react';

// 1. Define the Props interface
interface BookingProps {
    cottageName: string;
    capacity: number;
    isPromoActive: boolean;
}

function CottageBookingCard({ cottageName, capacity, isPromoActive }: BookingProps) {
    // 2. State: Is this specific cottage selected by the user?
    const [isSelected, setIsSelected] = useState(false);

    // 3. Toggle function using the 'prev' pattern
    const handleSelect = () => {
        setIsSelected((prev) => !prev); 
    };

    return (
        <div style={{
            border: isSelected ? '2px solid #28ec3291' : '1px solid #ddd', // Ternary for border
            backgroundColor: isSelected ? '#094125ff' : '#112b53ff',           // Ternary for background
            padding: '20px',
            borderRadius: '12px',
            width: '250px',
            transition: 'all 0.3s ease'
        }}>
            <h4>{cottageName}</h4>
            <p>Capacity: {capacity} persons</p>

            {/* Ternary: Show a "Promo" badge only if isPromoActive is true */}
            {isPromoActive ? (
                <div style={{ color: 'orange', fontSize: '12px', fontWeight: 'bold' }}>
                    🔥 10% Discount Applied!
                </div>
            ) : null}

            <hr />

            {/* Ternary: Change button text and color based on state */}
            <button 
                onClick={handleSelect}
                style={{
                    backgroundColor: isSelected ? '#dc3545' : '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '100%'
                }}
            >
                {isSelected ? 'Remove from Booking' : 'Select Cottage'}
            </button>

            {/* Ternary: Conditional message */}
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
                {isSelected ? '✅ Added to your list' : '❌ Not selected'}
            </p>
        </div>
    );
}

export default CottageBookingCard;