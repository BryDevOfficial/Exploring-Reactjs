import { useState } from 'react';

interface CottageProps {
    name: string;
    price: number;
    description: string;
    imgurl: string;
    status: 'available' | 'unavailable';
}

function CottageItemUseStateHook({name, price, description, imgurl, status: initialStatus}: CottageProps) {
   
    // Initialize state for the cottage's availability status with prop value
    const [currentStatus, setCurrentStatus] = useState<'available' | 'unavailable'>(initialStatus);

    // Define the toggle function since I want to make the cottage status changeable whenever I click the Status (I am using arrow function below)
    const toggleStatus = () => {
        // 1. Explicitly type the useState. This ensures 'currentStatus' 
    // can ONLY ever be 'available' or 'unavailable'.
        setCurrentStatus((prev) => (prev === 'available' ? 'unavailable' : 'available')); //Honestly I don't fully undestand yet the part where it use PREV, need more research about it | update comment, prev is just a variable that hold the previous state before updating it, to determine what will be the next state
    };

    //Below is a ternary operator where I define variable using const statusColor, and using the state currentStatus to determine and assign color base on availability, if available then green else is red.
    const statusColor = currentStatus === 'available' ? 'green' : 'red'; 

    return (
        <>
        
        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>
            <h3>{name}</h3>
            <img src={imgurl} alt={name} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
            <p>{description}</p>
            <p>Price: {price} pesos</p>
            
            {/* 3. Add the onClick listener */}
            <p>
                Status:{" "}
                <span 
                    onClick={toggleStatus} 
                    style={{ 
                        color: statusColor, 
                        fontWeight: 'bold', 
                        cursor: 'pointer',
                        textDecoration: 'underline' 
                    }}
                >
                    {currentStatus === 'available' ? 'Available' : 'Unavailable'}
                </span>
            </p>
        </div>
        
        </>
    )

    
}

export default CottageItemUseStateHook;
