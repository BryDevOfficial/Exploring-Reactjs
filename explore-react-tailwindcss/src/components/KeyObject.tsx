import { useState } from 'react';

export default function KeyObject() {
  // 1. STATE KEY: "price"
  const [data, setData] = useState({ price: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // name is "price"
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* 2. INPUT NAME: "price" (MATCHES!) */}
      <input name="price" value={data.price} onChange={handleChange} />
      <p>State Value: {data.price}</p>
    </div>
  );
}