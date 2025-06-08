import React from 'react';
import './Product.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  return (
    <div className="container">
      {/* <header className="hero-section">
        <div className="overlay">
          <h1>FROM SEA TO SCREEN - TRACE EVERY CATCH</h1>
        </div>
      </header> */}

      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-content">
          <div className="product-text">
            <p>
              Our blockchain ensures transparency, allowing you to trace the journey of our seafood from ocean.
            </p>
          </div>
       <div className="products-content">
  {/* Product 1 */}
  <div className="product-item">
    <div className="product-image">
      <img src="/images/fish3.jpeg" alt="Oceanproof Shrimp" />
    </div>
    <p>Fresh Ocean Fish</p>
  </div>

  {/* Product 2 */}
  <div className="product-item">
    <div className="product-image">
      <img src="/images/fish3.jpeg" alt="Shrimp" />
    </div>
    <p>Wild-Caught Shrimp</p>
  </div>

  {/* Product 3 */}
  <div className="product-item">
    <div className="product-image">
      <img src="/images/fish3.jpeg" alt="Crab" />
    </div>
    <p>Freshwater Crab</p>
  </div>

  {/* Product 4 */}
  <div className="product-item">
    <div className="product-image">
      <img src="/images/fish3.jpeg" alt="Octopus" />
    </div>
    <p>Atlantic Octopus</p>
  </div>
</div>
</div>

      </section>

      <section className="traceability-section">
        <h2>How Traceability Works</h2>
        <div className="traceability-content">
          <p>
            Our blockchain ensures transparency, allowing you to trace the journey of our seafood from ocean.
          </p>
          <img src="/images/QR.jpeg" alt="Scan to Trace" className="qr-code" />
        </div>
      </section>

      <section className="stories-section">
        <div className="fisherman-story">
          <img src="/images/fisman.jpg" alt="Fisherman" />
          <div className="story-text">
            <h2>Fishermen Stories</h2>
            <p>
              Learn about the dedicated fishermen of Nagapattinam who sustainably harvest seafood.
            </p>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default Product;
