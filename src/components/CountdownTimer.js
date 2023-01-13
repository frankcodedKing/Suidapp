import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 59
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        let newTime = { ...prevTime };
        if (newTime.seconds === 0) {
          if (newTime.minutes === 0) {
            if (newTime.hours === 0) {
              // Time's up!
              clearInterval(intervalId);
              return prevTime;
            }
            newTime.hours--;
            newTime.minutes = 59;
          } else {
            newTime.minutes--;
          }
          newTime.seconds = 59;
        } else {
          newTime.seconds--;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="big-text text-muted">
      {timeLeft.hours} hours:{timeLeft.minutes} mins:{timeLeft.seconds} secs
    </div>
  );
}

export default CountdownTimer