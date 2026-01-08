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
            tour: false
        }
    );

const services = {
    wifi: 100,
    breakfast: 500,
    tour: 1200
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

const handleAddon = (addon: 'wifi' | 'breakfast' | 'tour') => {
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
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={addons.wifi}
                        onChange={() => handleAddon('wifi')}
                    />
                    WiFi (₱{services.wifi})
                </label>
            </li>
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={addons.breakfast}
                        onChange={() => handleAddon('breakfast')}
                    />
                    Breakfast (₱{services.breakfast})
                </label>
            </li>
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={addons.tour}
                        onChange={() => handleAddon('tour')}
                    />
                    Tour (₱{services.tour})
                </label>
            </li>
        </ul>
    </div>
  )
}

export default CottageAddons;