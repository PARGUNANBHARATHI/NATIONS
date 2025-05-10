import React from 'react';

import './Mission.css';
import img from '/images/mission-side.svg';
const Mission = () => {
  return (
    <div className="mission-section">
      {/* Top Image Section */}
      <div className="mission-hero text-center py-4 mb-3">
        <img src="images/mission.svg" alt="Mission" className="img-fluid top-mission-img" />
      </div>

      {/* Section Heading */}
      <div className="text-center my-5">
        <h1 className="display-5 fw-bold">
          <span className="text-primary">Mission</span>  <span className="text-secondary">Vision</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="container ms-5">
      <div className="row justify-content-center">
          <div className="col-lg-7 col-md-6">
            <div className="mission-content p-4 p-lg-3 rounded-4 shadow-sm">
                 {/* Paragraph 1 */}
       
                 <p className="lead fw-normal mb-4  ">
                Nation's First Trust is committed to building a progressive India through sustainable development initiatives. 
                We empower communities by bridging gaps in education, healthcare, and livelihood opportunities while preserving 
                our cultural heritage.
              </p>
              <p className="mb-4  ">
                Our vision encompasses an inclusive society where every individual enjoys dignity and equal opportunities. 
                Through environmental conservation, social welfare programs, and community development projects, we're creating 
                pathways for marginalized groups including differently-abled persons, transgender communities, and rural populations.
              </p>
              <p>
                Guided by the principle of "Nation's First", we implement solutions that combine traditional wisdom with modern 
                innovation, fostering national unity while celebrating India's diversity. Our holistic approach ensures 
                sustainable impact that benefits current and future generations.
              </p>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="col-lg-5 col-md-7  ">
            <div className="mission-image-wrapper text-center ms-0">
              <img 
                src={img} 
                alt="Nation First Trust in action" 
                className="img-fluid rounded-3 shadow-lg ms-1 " 
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
              <div className="image-caption mt-4  p-3 ms-0  ">
                <h5 className="text-primary mb-2 mt-2 ">
                  Building a stronger nation through collective action
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


  );
};

export default Mission;