interface CottageProps {
    name: string;
    price: number;
    description: string;
    imgurl: string;
    status: 'available' | 'unavailable';
}

function CottageItem({name, price, description, imgurl, status}: CottageProps) {
   
    const statusColor = status === 'available' ? 'green' : 'red';

    return (
        <div
      style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}
    >

        <h3>{name}</h3>
        <img src={imgurl} alt={name} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
        <p>{description}</p>
        <p>Price: {price} pesos</p>
        <p>Status: <span style={{ color: statusColor }}>{status === 'available' ? 'Available' : 'Unavailable'}</span></p>

    </div>
    )
}

export default CottageItem;

// Example usage: <CottageItem name="Cozy Cottage" price="$150/night" description="A cozy cottage in the woods." imgurl="https://example.com/cottage.jpg" status="available" />