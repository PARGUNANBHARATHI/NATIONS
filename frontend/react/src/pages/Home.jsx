import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Home.css";

function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      return toast.warning("Must provide name and email");
    }

    try {
      const { data } = await axios.post("https://nft1-backend.onrender.com/data", { name, email });

      if (data.error) {
        toast.error(data.error);
      } else {
        setemail("");
        setname("");
        toast.success("Successfully submitted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <ToastContainer />

      {/* Section: Who We Are */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-0">
            <h2 className="heading mb-0 ms-1">Who We Are</h2>
            <div className="intro-text ms-1">
              <p>
                Nation's First Trust (NFT) is dedicated to transforming Bharat into a developed nation. We aim to build a foundation of trust by focusing on sustainable growth, community empowerment, and innovation. Our initiatives are designed to enhance social welfare.
              </p>
            </div>
            <div className="vision-text ms-1">
              <p>
                Bharat, a land of rich heritage and immense potential, stands at the cusp of a new era. With its vibrant culture, diverse traditions, and strong values, it has long been a guiding light of selfless service and cultural strength. NFT envisions harnessing this strength to build a self-reliant and progressive nation.
              </p>
            </div>
            <div className="mission-text ms-1">
              <p>
                NATION'S FIRST TRUST is a registered Charitable Trust. NFT perceives its role as a catalyst in revitalizing cultural sensitivity, bridging tradition and modernity in today’s world.
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

      {/* Section: Join Us */}
      <div className="container1">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <Link className="btn-custom btn-custom-success" to="/Donation">
            Make a Donation🤍
          </Link>
          <Link className="btn-custom btn-custom-primary" to="/Volunteer">
            Become a Volunteer
          </Link>
        </div>
        <img src='images/homejoin.svg' alt="Join Us" />
      </div>

      {/* Section: Background Image with Heading */}
      <div className="background-image">
        <div className="backgroun-image-head">
          <h5>Testimonials</h5>
          <h2>Empowering Lives, Enriching Futures</h2>
          <h4>Building a brighter future, together.</h4>
        </div>
      </div>

      {/* Section: Sign up */}
      <div className="input-head">
        <h6>Join Us</h6>
        <h3>Sign up to hear from us about our new activities.</h3>
      </div>

      <div className="input-box">
        <form onSubmit={onsubmit} autoComplete='off'>
          <input
            className='btn1'
            type="text"
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="btn2"
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
