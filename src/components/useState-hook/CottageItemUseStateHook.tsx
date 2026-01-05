import React, { useState } from 'react';

interface CottageProps {
    name: string;
    price: number;
    description: string;
    imgurl: string;
    status: 'available' | 'unavailable';
}

function CottageItemUseStateHook({name, price, description, imgurl, status: initialStatus}: CottageProps) {
   
    // Initialize state for the cottage's availability status with prop value
    const [currentStatus, setCurrentStatus] = useState(initialStatus);

    // Define the toggle function since I want to make the cottage status changeable whenever I click the Status (I am using arrow function below)
    const toggleStatus = () => {
        setCurrentStatus((prev) => (prev === 'available' ? 'unavailable' : 'available')); //Honestly I don't fully undestand yet the part where it use PREV, need more research about it
    };

    //Below is a ternary operator where I define variable using const statusColor, and using the state currentStatus to determine and assign color base on availability, if available then green else is red.
    const statusColor = currentStatus === 'available' ? 'green' : 'red'; 

    
}

export default CottageItemUseStateHook;
