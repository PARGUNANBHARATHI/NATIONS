import React from 'react';
import './Track.css';

const Track = () => {
  return (
    <div className="track-container">
      <h1>Track Your Product</h1>
      <p>Enter your product ID or tracking code below to see the status of your product.</p>

      <div className="track-form">
        <input type="text" placeholder="Enter Product ID" />
        <button>Track</button>
      </div>

      {/* Placeholder tracking result */}
      <div className="tracking-info">
        <h2>Tracking Info</h2>
        <p><strong>Product ID:</strong> #ABC123</p>
        <p><strong>Status:</strong> In Transit</p>
        <p><strong>Last Location:</strong> Chennai, India</p>
        <p><strong>Estimated Delivery:</strong> 10 June 2025</p>
      </div>


 <div className="info-item">
          <img src="/images/trak.jpeg" alt="Status Icon" />
          <p><strong>Status:</strong> In Transit</p>
        </div>

        <div className="info-item">
          <img src="/images/trak1.jpeg" alt="Location Icon" />
          <p><strong>Last Location:</strong> Chennai, India</p>
        </div>

        <div className="info-item">
          <img src="/images/trak4.jpeg" alt="Calendar Icon" />
          <p><strong>Estimated Delivery:</strong> 10 June 2025</p>
        </div>
      </div>



  );
};

export default Track;