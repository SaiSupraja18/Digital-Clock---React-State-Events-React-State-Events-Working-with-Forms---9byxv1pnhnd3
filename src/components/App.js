import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [time, setTime] = useState("12/17/2021, 6:24:00 PM");
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    setIntervalId(newIntervalId);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div id="main">
      <div className="date-time">
        {time}
      </div>
    </div>
  )
}


export default App;
