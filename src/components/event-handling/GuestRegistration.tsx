import { useState } from 'react'

function GuestRegistration() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value);
    };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'Arial' }}>
      <h2>Sea Eagle Guest Registration</h2>
      
      {/* --- FORM SECTION --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label>
          Full Name:
          <input 
            type="text" 
            value={firstName}          // <--- This makes it "Controlled"
            onChange={handleNameChange} // <--- Updates the state
            placeholder="e.g. Juan Dela Cruz"
            style={{ width: '100%', display: 'block', padding: '8px' }}
          />
        </label>

        <label>
          Email Address:
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange}
            placeholder="juan@email.com"
            style={{ width: '100%', display: 'block', padding: '8px' }}
            required
          />
        </label>

        <label>
          Special Requests:
          <textarea 
            value={notes} 
            onChange={handleNotesChange}
            placeholder="Any allergies or extra pillows?"
            style={{ width: '100%', display: 'block', padding: '8px', height: '80px' }}
          />
        </label>
      </div>

      <hr style={{ margin: '20px 0' }} />

      {/* --- PREVIEW SECTION (Your previous knowledge of UI logic) --- */}
      <div style={{ 
        backgroundColor: firstName.length > 5 ? '#152c91ff' : '#1a3d9cff',
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #ddd' 
      }}>
        <h4>Live Preview Card</h4>
        <p><strong>Guest:</strong> {firstName || '---'}</p>
        <p><strong>Contact:</strong> {email || '---'}</p>
        <p><strong>Notes:</strong> {notes || 'No requests yet.'}</p>
        
        {/* Combining with your ternary logic knowledge */}
        {firstName.length > 0 && (
          <p style={{ color: 'green', fontSize: '12px' }}>
            ✓ Ready to save to Sea Eagle Database
          </p>
        )}
      </div>

      <button 
        onClick={() => alert(`Saved: ${firstName}`)}
        disabled={!firstName || !email} // Boundary logic: Button only works if fields are filled
        style={{ marginTop: '15px', width: '100%', padding: '10px', cursor: 'pointer' }}
      >
        Register Guest
      </button>
    </div>
  )
}

export default GuestRegistration;