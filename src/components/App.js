import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [currentTime, setCurrentTime] = useState();
  const [intervalId, setIntervalId] = useState();

  const getLocalTime = () => {
    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    getLocalTime();
  }, [])
  return (
    <div id="main">
      <div className="date-time">
        <div className="date-time">
          {currentTime}
        </div>
      </div>
    </div>
  )
}


export default App;
