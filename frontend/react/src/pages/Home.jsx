import React from 'react';
import frezivaImage from "/images/sea5.jpg"; // Check if the image path is valid
import './Home.css'; // Link to the CSS styles below

const Home = () => {
  return (
    <div className="home-wrapper container py-5">

      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-12 text-center">
          <img
            src={frezivaImage}
            alt="Freziva brand"
            className="img-fluid rounded shadow hero-image"
            loading="lazy"
          />
          <h1 className="display-5 fw-bold mt-4 text-primary">Welcome to FREZIVA</h1>
          <p className="lead text-muted">Empowering change through innovation, culture & community.</p>
          <a href="#about" className="btn btn-primary px-4 py-2 mt-3">Discover More</a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="row">
        <div className="col-lg-9 mx-auto freziva-content">
          <h2 className="text-center fw-bold mb-4 text-primary">ABOUT FREZIVA</h2>
          <div className="freziva-paragraphs">
            {[
              "Freziva is more than just a brand—it's a movement that celebrates innovation, creativity, and community-driven progress. Our mission is to bridge the gap between tradition and technology while nurturing local talents and empowering individuals.",
              "Built on the values of trust, transparency, and transformation, Freziva aims to become a catalyst for change across various sectors including education, environment, culture, and technology. We believe that real impact starts at the grassroots level, and every effort—no matter how small—contributes to a brighter, more sustainable future.",
              "At Freziva, we foster an ecosystem of collaboration where ideas flourish, individuals grow, and communities thrive. Join us on this journey as we strive to make meaningful change, one step at a time."
            ].map((paragraph, index) => (
              <p key={index}>
                <span>•</span>{paragraph}
              </p>
            ))}
          </div>
        </div>
              {/* key future  Section */}
         
           <div className="container py-5">
  <h2 className="text-center mb-5 fw-bold">Key Features</h2> 
   </div>
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm border rounded text-center">
            <img src="/images/sea2.jpg" alt="Sea Food Track" width="50" className="mb-3" />
            <h5>Sea Food Tracking</h5>
            <p>
              Monitor and record your Sea Food Tracking activities with ease, ensuring accurate data for better decision-making.
            </p>
          </div>
        </div>

        </div> 
        </div>
 

 <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm border rounded text-center">
            <img src="/images/track.jpg" alt="Delivery" width="50" className="mb-3" />
            <h5>Delivery Management</h5>
            <p>
              Streamline your delivery processes, ensuring timely and efficient transportation of your farm products.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm border rounded text-center">
            <img src="/images/sea3.jpg" alt="Inventory" width="50" className="mb-5" />
            <h5>Inventory Management</h5>
            <p>
              Keep track of your inventory levels in real-time, ensuring optimal stock levels at all times.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm border rounded text-center">
            <img src="/images/OIP.jpg" alt="Blockchain" width="50" className="mb-4" />
            <h5>Transparency via Blockchain</h5>
            <p>
              Ensure transparency in your farm operations using blockchain technology for secure record-keeping.
            </p>
          </div>
        </div>
      </div>
    </div>

































    
  );
};

export default Home;
