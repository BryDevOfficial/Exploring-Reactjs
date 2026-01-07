import { useState } from 'react';

interface GuestCounterProps extends React.HTMLAttributes<HTMLDivElement> {
    cottageName: string;
    maxCapacity: number;
}

function CottageGuestCounter({ cottageName, maxCapacity, ...rest }: GuestCounterProps) {
    // 1. State initialized to 1 guest
    const [guestCount, setGuestCount] = useState(1);

    // 2. Increment logic using 'prev'
    const addGuest = () => {
        setGuestCount((prev) => (prev < maxCapacity ? prev + 1 : prev));
    };

    // 3. Decrement logic using 'prev' (Prevents going below 1)
    const removeGuest = () => {
        setGuestCount((prev) => (prev > 1 ? prev - 1 : prev));
    };

    // 4. Ternary for visual feedback
    const isFull = guestCount === maxCapacity;

    return (
        <div 
        {...rest}
        style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "15px",
            backgroundColor: "#223151",
            textAlign: "center",
            width: "250px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}>
            <h4 style={{ margin: "0 0 10px 0" }}>{cottageName}</h4>
            <p style={{ fontSize: "12px", color: "#ceb31aff" }}>Max Capacity: {maxCapacity}</p>

            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "15px",
                margin: "20px 0"
            }}>
                {/* Decrement Button */}
                <button 
                    onClick={removeGuest}
                    style={{ padding: "10px", borderRadius: "50%", cursor: "pointer", border: "1px solid #ccc" }}
                >
                    −
                </button>

                {/* Displaying the State */}
                <span style={{ fontSize: "24px", fontWeight: "bold", minWidth: "40px" }}>
                    {guestCount}
                </span>

                {/* Increment Button */}
                <button 
                    onClick={addGuest}
                    style={{ 
                        padding: "10px", 
                        borderRadius: "50%", 
                        cursor: isFull ? "not-allowed" : "pointer",
                        backgroundColor: isFull ? "#eee" : "#fff",
                        border: "1px solid #ccc"
                    }}
                >
                    +
                </button>
            </div>

            {/* 5. Ternary for Conditional Message */}
            {isFull ? (
                <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
                    ⚠️ Maximum Capacity Reached
                </p>
            ) : (
                <p style={{ color: "green", fontSize: "12px" }}>
                    Space available for more!
                </p>
            )}
        </div>
    );
}

export default CottageGuestCounter;