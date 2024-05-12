import { useState } from 'react'
// import './App.css'

function App() {
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handlefirstChange = (event) => {
    setfirst(event.target.value);
  };

  const handlelastChange = (event) => {
    setlast(event.target.value);
  };

  const handleDisplayFullName = (event) => {
    event.preventDefault();
    if (first.trim() === '' || last.trim() === '') {
      setError('Please fill in both first name and last name.');
      setFullName(''); // Clear full name if there's an error
    } else {
      setFullName(${first} ${last});
      setError('');
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form>
        <div>
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            value={first}
            onChange={handlefirstChange}
            title={first.trim() === '' ? "Please fill out this field" : ""}
          />
        </div>
        <div>
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            value={last}
            onChange={handlelastChange}
            title={last.trim() === '' ? "Please fill out this field" : ""}
          />
        </div>
        <button type="submit" onClick={handleDisplayFullName}>Submit</button>
      </form>
      {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
}

export default App