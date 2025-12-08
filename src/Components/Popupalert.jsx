import React, { useState, useEffect } from "react";
const Popupalert = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // 3000ms = 3 seconds
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-btn" onClick={() => setShow(false)}>
          ✖
        </button>
        <img src="https://ik.imagekit.io/hmdcfponi/Logo's/Logo?updatedAt=1764926876354" className="img-fluid" />
        <h4>Welcome to Molana Zameer Website</h4>
        <p>Assalamu Alaikum! Welcome to Molana Zameer's website. Your visit is a source of joy.</p>
      </div>
    </div>
  );
};
export default Popupalert;