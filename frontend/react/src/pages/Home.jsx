import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const slides = [
    { url: 'images/slide0.svg' },
    { url: 'images/slide1.svg' },
    { url: 'images/slide2.svg' },
    { url: 'images/slide3.svg' },
    { url: 'images/slide4.svg' },
    { url: 'images/slide5.svg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${slide.url})` }}
          ></div>
        ))}
      </div>

      {/* Arrows */}
      <div className="left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &#10095;
      </div>

      {/* Dots */}
      <div className="dots-container">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>

{/* 
SLIDE SECTION END */}





      <div className="container my-5">
  <div className="row align-items-center">

  <div className="container my-5">
  <div className="row align-items-center">
    {/* Paragraph Container (Left Side) */}
    <div className="col-lg-7 mb-0 ">
      <h2 className="heading mb-0 ms-1 ">Who We Are</h2>
      
      <div className="intro-text ms-1  ">
        <p>
          Nation's First Trust (NFT) is dedicated to transforming Bharat into a developed nation.
          We aim to build a foundation of trust by focusing on sustainable growth, community empowerment, and innovation.
          Our initiatives are designed to enhance social welfare.
        </p>
      </div>

      <div className="vision-text ms-1 ">
        <p>
          Bharat, a land of rich heritage and immense potential, stands at the cusp of a new era.
          With its vibrant culture, diverse traditions, and strong values, it has long been a guiding light of selfless service
          and cultural strength. NFT envisions harnessing this strength to build a self-reliant and progressive nation.
        </p>
      </div>

      <div className="mission-text ms-1">
        <p>
          NATION'S FIRST TRUST is a registered Charitable Trust. NFT perceives its role as a catalyst in revitalizing cultural sensitivity,
          bridging tradition and modernity in today’s world.
        </p>
      </div>
      
      <h5 className="signature mt-0 text-end">- Nation's First Trust</h5>
    </div>

    {/* Image Container (Right Side) */}
    <div className="col-lg-5 text-center">
  <div className="custom-image-container">
    <img
      src="images/homein.png"
      alt="Who We Are"
      className="img-fluid rounded shadow"
    />
  </div>
</div>
  </div>
</div>
</div>
</div>














      <div className="container1">

        <div className='join-commu'>
          {/* <h5>Nation's First Trust</h5>  */}
          {/* <h4>Get involved in our social welfare and charity<br></br>initiatives</h4> */}
          {/* <h4>Join our foundation today and start building<br></br> the
          future of our society.</h4>  */}
<div className="d-flex flex-column justify-content-center align-items-center gap-3">
  <Link className="btn-custom btn-custom-success" to="/Donation">
    Make a Donation🤍
  </Link>
  <Link className="btn-custom btn-custom-primary" to="/Volunteer">
    Become a Volunteer
  </Link>
</div>

        </div>
      
        <img src='images/homejoin.svg'></img>
      </div>
      <div className="background-image">
        <div className="backgroun-image-head">
          <h5>Testimonials</h5>
          <h2>Empowering Lives, Enriching Futures</h2>
          <h4>Building a brighter future, together.</h4>
        </div>
      </div>

      <div className="input-head">
        <h6>Join Us</h6>
        <h3>Sign up to hear from us about our new activities.</h3>
      </div>

      <div className="input-box">
        <form onSubmit={onsubmit} autoComplete='off'>
          <input className='btn1' type="text" placeholder='Enter Name' value={name}
            onChange={((e) => (setname(e.target.value)))} />

          <input className="btn2" type='Email' placeholder='Enter Email' value={email}
            onChange={((e) => (setemail(e.target.value)))} />

          <button onClick={onsubmit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Home
