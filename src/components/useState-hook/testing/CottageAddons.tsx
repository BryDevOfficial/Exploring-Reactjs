import { useState } from 'react'

interface CottageAddonsProps {

    cottage: string;
    basePrice: number;
}

function CottageAddons({ cottage, basePrice, ...rest }: CottageAddonsProps) {

    const [addons, setAddons] = useState(
        {
            wifi: false,
            breakfast: false,
            tour: false,
            kayak: false,
            videoky: false
        }
    );

const services = {
    wifi: 100,
    breakfast: 500,
    tour: 1200,
    kayak: 800,
    videoky: 1000
}

/*
My first attempt at calculating total price
const total = basePrice +
    (addons.wifi ? services.wifiPrice : 0) +
    (addons.breakfast ? services.breakfastPrice : 0) +
    (addons.tour ? services.tour : 0);*/

/*Advanced way to calculate total price in object*/
const total = basePrice + (Object.keys(addons) as Array<keyof typeof addons>).reduce((acc, key) => {
    return addons[key] ? acc + services[key] : acc;
}, 0);

const handleAddon = (addon: keyof typeof addons) => {
    setAddons((prev) => ({
        ...prev,
        [addon]: !prev[addon]
    }))
}


  return (
    <div
    {...rest}
    style={{
        padding: '30px',
        border: '2px solid #8e44ad',
        borderRadius: '10px',
        backgroundColor: '#322b35ff',
        width: '300px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    }}>
        <h3>{cottage} Add-ons</h3>
        <p>Base Price: ₱{basePrice}</p>
        <p><strong>Total Price: ₱{total}</strong></p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
           {
            (Object.keys(addons) as Array<keyof typeof addons>).map((key) => (
                <li key={key} style={{ marginBottom: '10px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={addons[key]}
                            onChange={() => handleAddon(key)}
                        />
                        {key.charAt(0).toUpperCase() + key.slice(1)} (₱{services[key]})
                    </label>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CottageAddons;