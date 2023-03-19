import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time]);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      const inputTime = Math.floor(Number(event.target.value));
      setTime(inputTime >= 0 ? inputTime : 0);
      event.target.value = '';
    }
  };

  return (
    
    <div className="App">
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Rampart+One&display=swap" 
       rel="stylesheet">
       </link>
      <h1 className='heading'>Countdown Timer</h1>
      <input placeholder="Enter time in seconds" type="text" id="timeCount" onKeyDown={handleKeyDown} />
      <div id="current-time">{time}</div>
    </div>
  );
}

export default App;
