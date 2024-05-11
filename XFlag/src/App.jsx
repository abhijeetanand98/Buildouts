// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';

const Tile=({flagURL, name, altFlag}) => {
  return (
    <div 
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"10px",
      padding:"10px",
      border:"1px solid black",
      borderRadius:"8px",
      flexDirection:"column",
      width:"200px"
    }}>
      <img 
      src={flagURL} 
      alt={altFlag} 
      style={{width:"100px", height:"100px"}} />
      <h2>{name}</h2>
    </div>
  )
}

function App() {
  const [countries, setCountries] = useState([]);
  const API_URL="https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div 
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      flexWrap:"wrap",
    }}>
      {countries.map((country)=> (
        <Tile 
        flagURL={country.flags.png} 
        name={country.name.common} 
        altFlag={country.flags.alt} 
        />
      ))}
      
    </div>
  );
}

export default App;
