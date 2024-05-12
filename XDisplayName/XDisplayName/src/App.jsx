import { useState } from 'react'
// import './App.css'
{/* <h2>Full Name Display</h2> */}

function App() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setIsFormValid(e.target.value && lastName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setIsFormValid(e.target.value && firstName);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first">First Name:</label>
        <input
          type="text"
          id="first"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="last">Last Name:</label>
        <input
          type="text"
          id="last"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </div>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
      {fullName && <p>Full Name: {fullName}</p>}
    </form>
  );
}
  

export default App
