import React, { useState, useEffect } from "react";

const Popupalert = () => {
  const [show, setShow] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date = current month ki 30 tareekh subah 8 bajy
  const targetDate = new Date();
  targetDate.setDate(30); // 30th date
  targetDate.setHours(8, 0, 0, 0); // 8:00 AM sharp

  // Agar aaj 30 tareekh ke baad hai, to next month ki 30 tareekh set kar do
  if (new Date() > targetDate) {
    targetDate.setMonth(targetDate.getMonth() + 1);
  }

  useEffect(() => {
    setShow(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-btn" onClick={() => setShow(false)}>
          ✖
        </button>
        <p>Welcome to Molana Zameer Website</p>
        <h3>Website Under Development</h3>
        <p>We are working hard! The website will be ready in:</p>
        <div className="countdown">
          <div>
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>
          <div>
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>
          <div>
            <span>{timeLeft.minutes}</span>
            <small>Minutes</small>
          </div>
          <div>
            <span>{timeLeft.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupalert;
