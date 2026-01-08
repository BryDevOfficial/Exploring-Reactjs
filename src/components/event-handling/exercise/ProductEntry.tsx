import {useState, type ChangeEvent} from 'react'

function ProductEntry() {

const [name, setName] = useState('');
const [price, setPrice] = useState(0);
const [category, setCategory] = useState('');
const [error, setError] = useState('');

const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
}

const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    //setPrice(Number(e.target.value));
   if (val < 0) {
        setError("Price cannot be negative!");
    } else if (val > 10000) {
        setError("Price maximum limit (₱10,000)!");
    } else {
        // Only if it's valid, update the price and clear the error
        setPrice(val);
        setError(''); 
    }
}

const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
}

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'Arial' }} >
        <h2>Product Entry Form</h2>
        <input type='text' value={name} onChange={handleNameChange}></input>
        <input type='number' value={price} onChange={handlePriceChange}></input>
        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
        <select value={category} onChange={handleCategory}>
            <option value='' disabled>Select</option>
            <option value='Kayak'>Kayak</option>
            <option value='Videoky'>Videoky</option>
        </select>

        <div>
        <h2>Preview</h2>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>

        {/* Practice your conditional logic! */}
          {name && price > 0 && category && (
            <p style={{ color: 'green' }}>
              🚀 Ready to add {name} to the Inventory System!
            </p>
          )}
         </div>
    </div>

    
  )
}

export default ProductEntry
