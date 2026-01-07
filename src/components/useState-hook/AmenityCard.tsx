import { useState } from 'react';

// 1. Define specific props + allow any other standard HTML div props
interface AmenityProps extends React.HTMLAttributes<HTMLDivElement> {
    cottageName: string;
    basePrice: number;
}

function AmenityCard({ cottageName, basePrice, ...rest }: AmenityProps) {
    // 2. State: Boolean for adding "Extra Amenities" package
    const [hasExtras, setHasExtras] = useState(false);

    // 3. Logic: Functional update (prev) to toggle
    const toggleExtras = () => {
        setHasExtras((prev) => !prev);
    };

    // 4. Calculations using Ternary
    const extraFee = 678;
    const totalPrice = hasExtras ? basePrice + extraFee : basePrice;

    return (
        /* 5. Spread Props: "...rest" allows things like 'id' or 'className' from the parent */
        <div 
            {...rest} 
            style={{
                border: "2px solid #ddd",
                padding: "20px",
                borderRadius: "12px",
                backgroundColor: hasExtras ? "#0b2c3b" : "#1e1a11", // Ternary for BG
                transition: "0.3s",
                maxWidth: "300px",
                ...rest.style // Merges incoming styles if any
            }}
        >
            <h3>{cottageName}</h3>
            <p>Base Price: ₱{basePrice}</p>
            
            <div 
                onClick={toggleExtras}
                style={{
                    padding: "10px",
                    border: "1px dashed #aaa",
                    cursor: "pointer",
                    textAlign: "center",
                    userSelect: "none",
                    borderRadius: "8px"
                }}
            >
                {/* 6. Ternary for Text and Icons */}
                {hasExtras ? "✅ Amenities Added" : "➕ Add Wi-Fi & Pool Access"}
            </div>

            <hr />

            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                <span>Total:</span>
                {/* 7. Ternary for color feedback */}
                <span style={{ color: hasExtras ? "green" : "orange" }}>
                    ₱{totalPrice}
                </span>
            </div>
            
            {hasExtras && <p style={{ fontSize: "12px", color: "gray" }}>* Includes {extraFee} extra fee</p>}
        </div>
    );
}

export default AmenityCard;