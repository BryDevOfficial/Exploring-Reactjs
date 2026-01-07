import { useState } from 'react'

interface EditorProps {
    initialName: string;
    initialPrice: number;
}

function CottageEditor({initialName, initialPrice, ...rest}: EditorProps) {
    //State as an object
    const [cottage, setCottage] = 
    useState(
        {
        name: initialName,
        price: initialPrice,
        isEditing: false
        }
            );

    
    const toggleEdit = () => {
        setCottage((prev) =>
        ({
            ...prev, //spread operator to copy name & price
            isEditing: !prev.isEditing //override only isEditing property
        }));
    }

    const updatePrice = (amount: number) => {
        setCottage((prev) =>
        ({
            ...prev,
            price: prev.price + amount //increase price by amount
        }));
    }

  return (
    <div 
            {...rest} 
            style={{
                padding: '20px',
                border: '1px solid #444',
                borderRadius: '12px',
                backgroundColor: cottage.isEditing ? '#2c3e50' : '#f9f9f9',
                color: cottage.isEditing ? 'white' : 'black',
                width: '300px',
                ...rest.style
            }}
        >
            {/* Ternary for Title Mode */}
            <h3>{cottage.isEditing ? "Editing Mode" : "Cottage View"}</h3>
            
            <p><strong>Name:</strong> {cottage.name}</p>
            <p><strong>Price:</strong> ₱{cottage.price}</p>

            {/* Conditional Rendering: Show controls only when editing */}
            {cottage.isEditing ? (
                <div style={{ marginBottom: '15px' }}>
                    <button onClick={() => updatePrice(100)}>+₱100</button>
                    <button onClick={() => updatePrice(-100)} style={{ marginLeft: '5px' }}>-₱100</button>
                </div>
            ) : null}

            <button 
                onClick={toggleEdit}
                style={{
                    width: '100%',
                    padding: '8px',
                    cursor: 'pointer',
                    backgroundColor: cottage.isEditing ? '#27ae60' : '#2980b9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                {/* Ternary for Button Text */}
                {cottage.isEditing ? "Save Changes" : "Edit Cottage"}
            </button>
        </div>
  )
}

export default CottageEditor;